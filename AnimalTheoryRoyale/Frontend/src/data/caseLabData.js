export const caseLabData = [
  {
    id: "case-phong-trao-cn",
    title: "Từ Tự phát đến Tự giác: Bài học từ phong trào Hiến chương",
    description: "Phân tích vì sao phong trào công nhân ở Anh thế kỷ 19 thất bại dù có tổ chức và quy mô lớn.",
    chapterId: "chuong-1",
    scenario: "Năm 1836, phong trào Hiến chương nổ ra ở Anh. Hàng triệu chữ ký được thu thập đòi phổ thông đầu phiếu. Tuy nhiên, đến năm 1848, phong trào thất bại. Tại sao một phong trào lớn như vậy lại không thành công?",
    options: [
      { id: "opt1", text: "Do giai cấp tư sản quá mạnh", isCorrect: false, explanation: "GCTS mạnh nhưng không phải lý do cốt lõi nhất." },
      { id: "opt2", text: "Thiếu vũ khí hiện đại", isCorrect: false, explanation: "Vũ khí không quyết định bản chất phong trào." },
      { id: "opt3", text: "Thiếu một lý luận khoa học và Đảng tiên phong dẫn đường", isCorrect: true, explanation: "Phong trào mang tính tự phát, thiếu lý luận Mác-Lênin soi đường nên không có đường lối cách mạng đúng đắn." }
    ],
    tags: ["Phong trào công nhân", "Lý luận khoa học"]
  },
  {
    id: "case-cnxh-khong-tuong-vs-khoa-hoc",
    title: "Khát vọng hay Hiện thực?",
    description: "So sánh cách tiếp cận của Saint-Simon và C.Mác đối với xã hội tương lai.",
    chapterId: "chuong-1",
    scenario: "Saint-Simon mơ ước về một xã hội mà 'người giàu sẽ giúp đỡ người nghèo' và kêu gọi lòng tốt của giai cấp tư sản. Trong khi đó, C.Mác khẳng định: 'Sự giải phóng của giai cấp công nhân phải là sự nghiệp của bản thân giai cấp công nhân'. Đâu là điểm khác biệt cốt lõi?",
    options: [
      { id: "opt1", text: "Mác dùng bạo lực, Saint-Simon dùng hòa bình", isCorrect: false, explanation: "Chưa phản ánh đúng bản chất lý luận." },
      { id: "opt2", text: "Saint-Simon dựa trên đạo đức, Mác dựa trên quy luật khách quan và đấu tranh giai cấp", isCorrect: true, explanation: "CNXH không tưởng dựa trên lòng tốt ảo tưởng, CNXHKH dựa trên phân tích quy luật kinh tế và vai trò của GCCN." },
      { id: "opt3", text: "Mác ghét người giàu", isCorrect: false, explanation: "Mác phê phán chế độ tư hữu, không phải cảm xúc cá nhân." }
    ],
    tags: ["CNXH Không tưởng", "CNXHKH"]
  },
  {
    id: "case-gccn-4-0",
    title: "Công nhân thời 4.0",
    description: "Giai cấp công nhân hiện đại khác gì so với thế kỷ 19?",
    chapterId: "chuong-2",
    scenario: "Ngày nay, một lập trình viên làm việc cho tập đoàn công nghệ lớn, nhận lương cao, làm việc trong văn phòng máy lạnh, không dính dầu mỡ. Người này có thuộc giai cấp công nhân không?",
    options: [
      { id: "opt1", text: "Không, vì họ làm việc trí óc, không lao động chân tay", isCorrect: false, explanation: "Khái niệm GCCN không chỉ giới hạn ở lao động chân tay." },
      { id: "opt2", text: "Có, vì họ vẫn không sở hữu TLSX chủ yếu và bị bóc lột giá trị thặng dư (chất xám)", isCorrect: true, explanation: "Dù lao động trí óc, họ vẫn làm thuê, không sở hữu công ty (TLSX), và tạo ra giá trị thặng dư cho nhà tư bản." },
      { id: "opt3", text: "Không, họ thuộc giai cấp tư sản vì lương cao", isCorrect: false, explanation: "Lương cao không biến họ thành người làm chủ TLSX." }
    ],
    tags: ["GCCN", "Cách mạng 4.0", "Giá trị thặng dư"]
  },
  {
    id: "case-dang-cs-nhan-to",
    title: "Vai trò Đội tiên phong",
    description: "Phân tích vì sao GCCN cần Đảng Cộng sản.",
    chapterId: "chuong-2",
    scenario: "Trong một cuộc đình công tại nhà máy X, công nhân đòi tăng lương thêm 10%. Nhà chủ đồng ý tăng 5% và đình công kết thúc. Đây là đấu tranh kinh tế hay đấu tranh chính trị? Nếu không có Đảng lãnh đạo, phong trào này sẽ đi về đâu?",
    options: [
      { id: "opt1", text: "Đây là đấu tranh chính trị. Không có Đảng vẫn thắng lợi.", isCorrect: false, explanation: "Đây chỉ là đấu tranh kinh tế." },
      { id: "opt2", text: "Đây là đấu tranh kinh tế. Không có Đảng, công nhân chỉ luẩn quẩn đòi quyền lợi trước mắt, không xóa bỏ được chế độ bóc lột.", isCorrect: true, explanation: "Đảng giúp nâng tầm từ đấu tranh kinh tế (tự phát) lên đấu tranh chính trị (tự giác) để giành chính quyền." },
      { id: "opt3", text: "Đây là bạo loạn. Cần chính phủ can thiệp.", isCorrect: false, explanation: "Không phù hợp ngữ cảnh." }
    ],
    tags: ["Đảng Cộng sản", "Đấu tranh giai cấp"]
  },
  {
    id: "case-bo-qua-tbcn",
    title: "Bỏ qua TBCN: Xóa sạch hay Kế thừa?",
    description: "Hiểu đúng về con đường quá độ ở Việt Nam.",
    chapterId: "chuong-3",
    scenario: "Có ý kiến cho rằng: 'Việt Nam bỏ qua chế độ TBCN nghĩa là phải cấm kinh tế tư nhân và không áp dụng các mô hình quản lý của phương Tây'. Bạn đánh giá ý kiến này thế nào?",
    options: [
      { id: "opt1", text: "Đúng, vì kinh tế tư nhân là mầm mống của TBCN", isCorrect: false, explanation: "Quan điểm này là bệnh ấu trĩ, tả khuynh, trái với đường lối Đổi mới." },
      { id: "opt2", text: "Sai. Bỏ qua TBCN chỉ là không xác lập vị trí thống trị của QHSX TBCN, nhưng vẫn phải kế thừa thành tựu nhân loại (KTTT, công nghệ, quản lý).", isCorrect: true, explanation: "Bỏ qua là bỏ qua sự thống trị, không phải là xóa bỏ sạch trơn thành tựu văn minh." },
      { id: "opt3", text: "Sai. Việt Nam thực chất đang xây dựng TBCN", isCorrect: false, explanation: "Không đúng với bản chất định hướng XHCN." }
    ],
    tags: ["Bỏ qua TBCN", "KTTT định hướng XHCN"]
  },
  {
    id: "case-qua-do-lau-dai",
    title: "Vì sao phải 'Quá độ' lâu dài?",
    description: "Nhận thức về tính khó khăn, phức tạp của thời kỳ quá độ.",
    chapterId: "chuong-3",
    scenario: "Việt Nam đã trải qua gần 40 năm Đổi mới, nhưng vẫn đang trong 'thời kỳ quá độ'. Vì sao không thể tuyên bố hoàn thành xây dựng CNXH ngay lúc này?",
    options: [
      { id: "opt1", text: "Vì lãnh đạo chưa muốn", isCorrect: false, explanation: "Chủ quan, không đúng cơ sở lý luận." },
      { id: "opt2", text: "Vì xuất phát điểm thấp, cần thời gian dài để xây dựng cơ sở vật chất - kỹ thuật (LLSX) và kiến trúc thượng tầng tương ứng.", isCorrect: true, explanation: "CNXH cần LLSX phát triển rất cao, không thể nhảy cóc hoặc duy ý chí." },
      { id: "opt3", text: "Vì bị bao vây cấm vận", isCorrect: false, explanation: "Chỉ là một yếu tố phụ, không phải nguyên nhân gốc rễ." }
    ],
    tags: ["Thời kỳ quá độ", "LLSX"]
  },
  {
    id: "case-dan-chu-bau-cu",
    title: "Bản chất của Dân chủ",
    description: "Phân biệt dân chủ hình thức và dân chủ thực chất.",
    chapterId: "chuong-4",
    scenario: "Ở một nước phương Tây A, người dân được đi bầu Tổng thống. Tuy nhiên, cả 2 ứng cử viên đều được các tập đoàn tài phiệt tài trợ hàng tỷ USD để tranh cử. Dân nghèo không có cơ hội ra ứng cử. Đây là nền dân chủ nào?",
    options: [
      { id: "opt1", text: "Dân chủ XHCN, vì có bầu cử", isCorrect: false, explanation: "Bầu cử không quyết định bản chất XHCN." },
      { id: "opt2", text: "Dân chủ tư sản. Hình thức thuộc về toàn dân, nhưng thực chất quyền lực và lợi ích nằm trong tay giai cấp tư sản tài phiệt.", isCorrect: true, explanation: "Đồng tiền chi phối bầu cử là đặc trưng của dân chủ tư sản." },
      { id: "opt3", text: "Dân chủ chủ nô", isCorrect: false, explanation: "Sai thời kỳ lịch sử." }
    ],
    tags: ["Dân chủ", "Dân chủ tư sản", "Bản chất giai cấp"]
  },
  {
    id: "case-nha-nuoc-phap-quyen",
    title: "Nhà nước pháp quyền và Tham nhũng",
    description: "Vai trò của pháp luật trong quản lý xã hội.",
    chapterId: "chuong-4",
    scenario: "Gần đây, nhiều cán bộ cấp cao ở Việt Nam bị xử lý hình sự vì tham nhũng. Điều này phản ánh đặc trưng nào của Nhà nước pháp quyền XHCN VN?",
    options: [
      { id: "opt1", text: "Phản ánh sự yếu kém của bộ máy", isCorrect: false, explanation: "Chưa nhìn nhận đúng nỗ lực làm trong sạch bộ máy." },
      { id: "opt2", text: "Thượng tôn pháp luật: Không có vùng cấm, không có ngoại lệ. Mọi người đều bình đẳng trước pháp luật.", isCorrect: true, explanation: "Nhà nước pháp quyền XHCN quản lý bằng pháp luật, kiên quyết chống tham nhũng để bảo vệ lợi ích nhân dân." },
      { id: "opt3", text: "Chỉ là mâu thuẫn cá nhân", isCorrect: false, explanation: "Sai lệch hoàn toàn bản chất." }
    ],
    tags: ["Nhà nước pháp quyền", "Pháp luật"]
  },
  {
    id: "case-lien-minh-cong-nong-tri",
    title: "Liên minh trên Cánh đồng lớn",
    description: "Biểu hiện của liên minh công-nông-trí thức trong kinh tế.",
    chapterId: "chuong-5",
    scenario: "Mô hình 'Cánh đồng mẫu lớn' kết hợp giữa Nông dân (có đất, sức lao động), Doanh nghiệp (công nhân, vốn, máy móc) và Kỹ sư nông nghiệp (trí thức). Sự kết hợp này mang lại ý nghĩa gì?",
    options: [
      { id: "opt1", text: "Chỉ để tăng lợi nhuận cho doanh nghiệp", isCorrect: false, explanation: "Nhìn nhận phiến diện." },
      { id: "opt2", text: "Đó là biểu hiện sinh động của liên minh Công - Nông - Trí thức về kinh tế, giúp hiện đại hóa nông nghiệp và đảm bảo lợi ích chung.", isCorrect: true, explanation: "Liên minh kinh tế là nền tảng vững chắc nhất. Trí thức cung cấp KHCN, công nhân cung cấp máy móc, nông dân sản xuất trực tiếp." },
      { id: "opt3", text: "Làm mất đi tính độc lập của nông dân", isCorrect: false, explanation: "Sản xuất nhỏ lẻ không thể phát triển." }
    ],
    tags: ["Liên minh giai cấp", "Lợi ích kinh tế"]
  },
  {
    id: "case-lien-minh-kinh-te-so",
    title: "Grab, Nông sản và Kỹ sư phần mềm",
    description: "Cơ cấu xã hội và liên minh trong thời đại kinh tế số.",
    chapterId: "chuong-5",
    scenario: "Nông dân bán sầu riêng qua TikTok Shop, dùng app VNPOST (công nhân logistics) để giao hàng, app do kỹ sư IT (trí thức) viết. Sự thay đổi cơ cấu xã hội này đòi hỏi điều gì?",
    options: [
      { id: "opt1", text: "Ngăn chặn công nghệ vì nó làm hỏng truyền thống", isCorrect: false, explanation: "Tư duy cản trở sự phát triển LLSX." },
      { id: "opt2", text: "Phải tăng cường liên minh, trong đó trí thức (KHCN) đóng vai trò then chốt để nâng cao giá trị thặng dư cho chuỗi cung ứng.", isCorrect: true, explanation: "Trong kinh tế số, KHCN là lực lượng sản xuất trực tiếp, trí thức có vai trò cực kỳ quan trọng trong liên minh." },
      { id: "opt3", text: "Nông dân nên tự làm app để tối đa hóa lợi nhuận", isCorrect: false, explanation: "Không thực tế do tính chuyên môn hóa." }
    ],
    tags: ["Kinh tế số", "Cơ cấu XH-GC", "Trí thức"]
  },
  {
    id: "case-binh-dang-dan-toc",
    title: "Khoảng cách phát triển giữa các dân tộc",
    description: "Thách thức trong thực hiện chính sách bình đẳng dân tộc.",
    chapterId: "chuong-6",
    scenario: "Nhà nước đầu tư hàng nghìn tỷ đồng xây dựng đường sá, điện, trường học ở vùng sâu vùng xa (Tây Bắc, Tây Nguyên) nơi có đông đồng bào dân tộc thiểu số sinh sống. Chính sách này thể hiện nguyên tắc nào?",
    options: [
      { id: "opt1", text: "Quyền tự quyết dân tộc", isCorrect: false, explanation: "Tự quyết liên quan đến thể chế chính trị nhiều hơn." },
      { id: "opt2", text: "Bình đẳng và giúp nhau cùng phát triển: Thu hẹp khoảng cách KT-XH để bình đẳng không chỉ trên luật pháp mà trên thực tế.", isCorrect: true, explanation: "Bình đẳng thực chất đòi hỏi phải hỗ trợ các dân tộc thiểu số vươn lên." },
      { id: "opt3", text: "Liên hiệp công nhân các dân tộc", isCorrect: false, explanation: "Không sát với tình huống đầu tư kinh tế." }
    ],
    tags: ["Bình đẳng dân tộc", "Chính sách dân tộc"]
  },
  {
    id: "case-tu-do-tin-nguong",
    title: "Ranh giới Tín ngưỡng và Mê tín",
    description: "Phân biệt tín ngưỡng tôn giáo chính đáng và mê tín dị đoan.",
    chapterId: "chuong-6",
    scenario: "Một nhóm người tổ chức 'gọi hồn, cúng oan gia trái chủ' thu hàng trăm triệu đồng của người dân, hứa hẹn chữa bách bệnh. Nhà nước can thiệp và xử lý hình sự. Hành động của Nhà nước là đúng hay sai?",
    options: [
      { id: "opt1", text: "Sai, vì vi phạm quyền tự do tín ngưỡng", isCorrect: false, explanation: "Hành vi này không phải tín ngưỡng chính đáng." },
      { id: "opt2", text: "Đúng, vì đây là hành vi mê tín dị đoan, trục lợi tài chính, vi phạm pháp luật. Tự do tín ngưỡng phải tuân thủ pháp luật.", isCorrect: true, explanation: "Nhà nước tôn trọng tín ngưỡng nhưng nghiêm trị việc lợi dụng tín ngưỡng để lừa đảo, gây mất an ninh trật tự." },
      { id: "opt3", text: "Sai, vì Nhà nước can thiệp vào việc của Thần thánh", isCorrect: false, explanation: "Không phản ánh quan điểm khoa học." }
    ],
    tags: ["Tôn giáo", "Tự do tín ngưỡng", "Pháp luật"]
  },
  {
    id: "case-gia-dinh-thoi-dai-so",
    title: "Gia đình và Mạng xã hội",
    description: "Biến đổi chức năng gia đình trong thời đại số.",
    chapterId: "chuong-7",
    scenario: "Bữa cơm tối gia đình: Bố xem TikTok, Mẹ lướt Facebook, Con chơi game trên iPad. Không ai nói với ai câu nào. Chức năng nào của gia đình đang bị đe dọa nghiêm trọng nhất?",
    options: [
      { id: "opt1", text: "Chức năng kinh tế", isCorrect: false, explanation: "Tình huống không đề cập đến kinh tế." },
      { id: "opt2", text: "Chức năng thỏa mãn nhu cầu tâm lý, tình cảm", isCorrect: true, explanation: "Sự kết nối, chia sẻ tình cảm giữa các thành viên bị đứt gãy do lạm dụng công nghệ, tạo ra 'sự cô đơn trong chính ngôi nhà của mình'." },
      { id: "opt3", text: "Chức năng sinh đẻ", isCorrect: false, explanation: "Không liên quan." }
    ],
    tags: ["Gia đình hiện đại", "Chức năng tình cảm", "Thời đại số"]
  },
  {
    id: "case-binh-dang-gioi",
    title: "Bạo lực gia đình 'Vô hình'",
    description: "Bình đẳng giới và phòng chống bạo lực trong gia đình hiện đại.",
    chapterId: "chuong-7",
    scenario: "Người chồng đi làm kiếm nhiều tiền. Về nhà, anh ta cấm vợ đi làm, bắt ở nhà nội trợ và kiểm soát mọi chi tiêu, thường xuyên mắng chửi vợ là 'kẻ ăn bám'. Đây có phải là bạo lực gia đình?",
    options: [
      { id: "opt1", text: "Không, vì không đánh đập thể xác", isCorrect: false, explanation: "Bạo lực không chỉ có thể xác." },
      { id: "opt2", text: "Có. Đây là bạo lực kinh tế và bạo lực tinh thần, vi phạm nghiêm trọng nguyên tắc bình đẳng giới và hôn nhân tiến bộ.", isCorrect: true, explanation: "Kiểm soát tài chính và lăng mạ là những dạng bạo lực gia đình, đi ngược lại tiêu chí xây dựng gia đình XHCN." },
      { id: "opt3", text: "Không, người kiếm tiền có quyền quyết định", isCorrect: false, explanation: "Quan điểm gia trưởng, lạc hậu." }
    ],
    tags: ["Bình đẳng giới", "Hôn nhân tiến bộ"]
  }
];
