// Small global interactions.
// This is intentionally simple so you can expand it later.

document.addEventListener("DOMContentLoaded", () => {
  // Make bubbles react subtly to the pointer.
  const bubbles = document.querySelectorAll(".bubble");

  window.addEventListener("pointermove", (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 10;
    const y = (event.clientY / window.innerHeight - 0.5) * 10;

    bubbles.forEach((bubble, index) => {
      const amount = (index + 1) * 0.4;
      bubble.style.marginLeft = `${x * amount}px`;
      bubble.style.marginTop = `${y * amount}px`;
    });
  });
});
