import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ZoomIn, ZoomOut, Maximize, Map } from 'lucide-react';
import { conceptGalaxyData } from '../../data/conceptGalaxyData';
import { ConceptNode } from '../../components/theory';

const ConceptGalaxy = () => {
  const navigate = useNavigate();
  const [scale, setScale] = useState(1);
  const containerRef = useRef(null);
  const [nodes, setNodes] = useState([]);
  const [selectedNode, setSelectedNode] = useState(null);

  // Position calculation
  useEffect(() => {
    const rawNodes = conceptGalaxyData.nodes;
    
    // Canvas center
    const cx = 1500;
    const cy = 1500;

    const positionedNodes = rawNodes.map(node => {
      let x = cx;
      let y = cy;

      if (node.level === 0) {
        x = cx;
        y = cy;
      } else if (node.level === 1) {
        // Chapters in inner orbit (R = 400)
        const chapterNodes = rawNodes.filter(n => n.level === 1);
        const index = chapterNodes.findIndex(n => n.id === node.id);
        const angle = (index / chapterNodes.length) * 2 * Math.PI - Math.PI / 2;
        x = cx + 450 * Math.cos(angle);
        y = cy + 450 * Math.sin(angle);
        node.angle = angle; // store for child positioning
      }
      return { ...node, x, y };
    });

    // Position level 2 (concepts) around their chapters
    const finalNodes = positionedNodes.map(node => {
      if (node.level === 2) {
        const parent = positionedNodes.find(n => n.id === `${node.chapterId}-node`);
        if (parent) {
          const siblings = rawNodes.filter(n => n.level === 2 && n.chapterId === node.chapterId);
          const index = siblings.findIndex(n => n.id === node.id);
          // Spread them in an arc around the parent's angle
          const spread = Math.PI / 2; // 90 degrees spread
          const angleOffset = (index / (siblings.length - 1 || 1)) * spread - (spread / 2);
          const angle = parent.angle + angleOffset;
          // Outer orbit R = 850
          x = cx + 850 * Math.cos(angle);
          y = cy + 850 * Math.sin(angle);
          return { ...node, x, y };
        }
      }
      return node;
    });

    setNodes(finalNodes);
  }, []);

  const handleZoomIn = () => setScale(s => Math.min(s + 0.2, 2));
  const handleZoomOut = () => setScale(s => Math.max(s - 0.2, 0.4));
  const handleReset = () => setScale(1);

  return (
    <div className="h-screen w-screen bg-slate-900 text-white overflow-hidden relative">
      {/* UI Overlay */}
      <div className="absolute top-0 left-0 right-0 p-4 z-50 flex justify-between items-start pointer-events-none">
        <button 
          onClick={() => navigate('/theory')} 
          className="pointer-events-auto flex items-center gap-2 text-white/80 hover:text-white bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl transition-colors font-medium border border-white/10"
        >
          <ArrowLeft size={20} /> Dashboard
        </button>

        <div className="pointer-events-auto flex flex-col gap-2">
          <div className="bg-black/40 backdrop-blur-md p-2 rounded-xl border border-white/10 flex flex-col gap-2">
            <button onClick={handleZoomIn} className="p-2 hover:bg-white/10 rounded-lg transition-colors"><ZoomIn size={20}/></button>
            <button onClick={handleReset} className="p-2 hover:bg-white/10 rounded-lg transition-colors"><Maximize size={20}/></button>
            <button onClick={handleZoomOut} className="p-2 hover:bg-white/10 rounded-lg transition-colors"><ZoomOut size={20}/></button>
          </div>
        </div>
      </div>

      {/* Info Panel if node selected */}
      {selectedNode && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-lg pointer-events-auto">
          <div className="bg-slate-800/90 backdrop-blur-xl border border-slate-700 p-6 rounded-2xl shadow-2xl">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-white pr-4">{selectedNode.title}</h3>
              <button onClick={() => setSelectedNode(null)} className="text-slate-400 hover:text-white">✕</button>
            </div>
            <p className="text-slate-300 mb-4">{selectedNode.shortDescription}</p>
            {selectedNode.coreContent && selectedNode.coreContent.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {selectedNode.coreContent.map((c, i) => (
                  <span key={i} className="text-xs bg-slate-700 px-2 py-1 rounded-md text-slate-300 border border-slate-600">{c}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Draggable Canvas */}
      <div className="w-full h-full cursor-grab active:cursor-grabbing">
        <motion.div
          drag
          dragConstraints={{ left: -2000, right: 1000, top: -2000, bottom: 1000 }}
          className="w-[3000px] h-[3000px] origin-center relative"
          style={{ scale }}
          initial={{ x: -1000, y: -1000 }} // Start near center
        >
          {/* Background Grid/Stars effect */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50" />
          
          {/* Edges SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {conceptGalaxyData.edges.map((edge, idx) => {
              const sourceNode = nodes.find(n => n.id === edge.source);
              const targetNode = nodes.find(n => n.id === edge.target);
              
              if (!sourceNode || !targetNode) return null;

              // Calculate start/end to offset for node size (rough approx)
              return (
                <line 
                  key={idx}
                  x1={sourceNode.x + 100} 
                  y1={sourceNode.y + 50} 
                  x2={targetNode.x + 100} 
                  y2={targetNode.y + 50} 
                  stroke="rgba(255,255,255,0.15)" 
                  strokeWidth="2"
                  strokeDasharray={edge.source === 'core-cnxhkh' ? "none" : "4,4"}
                />
              );
            })}
          </svg>

          {/* Nodes */}
          {nodes.map(node => (
            <div 
              key={node.id} 
              className="absolute"
              style={{ left: node.x, top: node.y }}
            >
              <ConceptNode 
                concept={node} 
                isActive={selectedNode?.id === node.id}
                onClick={setSelectedNode} 
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ConceptGalaxy;
