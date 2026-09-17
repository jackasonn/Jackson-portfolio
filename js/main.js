// Small global interactions.
// This is intentionally simple so you can expand it later.

document.addEventListener("DOMContentLoaded", () => {
  // Select every decorative bubble after the page markup is available.
  const bubbles = document.querySelectorAll(".bubble");

  window.addEventListener("pointermove", (event) => {
    // Convert pointer position to a small offset centred around the viewport.
    const x = (event.clientX / window.innerWidth - 0.5) * 10;
    const y = (event.clientY / window.innerHeight - 0.5) * 10;

    bubbles.forEach((bubble, index) => {
      // Later bubbles move slightly further, giving the layer subtle depth.
      const amount = (index + 1) * 0.4;
      bubble.style.marginLeft = `${x * amount}px`;
      bubble.style.marginTop = `${y * amount}px`;
    });
  });
});
