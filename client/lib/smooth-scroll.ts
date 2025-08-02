/**
 * Utilitário para rolagem suave personalizada
 */

export const smoothScrollTo = (elementId: string, offset: number = 80) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const targetPosition = element.offsetTop - offset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 800; // ms
  let start = 0;

  const step = (timestamp: number) => {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const percentage = Math.min(progress / duration, 1);

    // Função de easing suave
    const ease = 1 - Math.pow(1 - percentage, 3);

    window.scrollTo(0, startPosition + distance * ease);

    if (progress < duration) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
};

export const addSmoothScrollToLinks = () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const href = this.getAttribute("href");
      if (href && href !== "#") {
        const targetId = href.substring(1);
        smoothScrollTo(targetId);
      }
    });
  });
};
