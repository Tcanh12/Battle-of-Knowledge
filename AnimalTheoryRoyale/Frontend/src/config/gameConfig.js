export const OLD_GAME_URL = import.meta.env.VITE_OLD_GAME_URL || "/";

export function openOldGame(navigate) {
  if (OLD_GAME_URL.startsWith("http")) {
    window.location.href = OLD_GAME_URL;
  } else {
    navigate(OLD_GAME_URL);
  }
}
