// One shared audio object for the whole app, so two tracks can never overlap.
export const audio = (window.__bgAudio ??= new Audio());

export function playTrack(src, { loop = true } = {}) {
  audio.loop = loop;
  if (!src) {
    audio.pause();
    return;
  }
  const url = new URL(src, window.location.href).href;
  if (audio.src !== url) audio.src = url;
  audio.play().catch(() => {});
}