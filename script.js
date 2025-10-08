document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const cards = document.querySelectorAll(".ticket-card");
  const input = document.getElementById("search-input");

  const mq = window.matchMedia("(min-width: 769px)");
  function handlePlaceholder(e) {
    if (!input) return;
    input.placeholder = e.matches ? "Procure seus tickets" : "Procure";
  }
  handlePlaceholder(mq);
  if (mq.addEventListener) mq.addEventListener("change", handlePlaceholder);
  else mq.addListener(handlePlaceholder);

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const selected = tab.dataset.tab;

      cards.forEach((card) => {
        const parent = card.parentElement;
        const show =
          selected === "todos" ||
          (selected === "andamento" && card.dataset.status === "andamento") ||
          (selected === "abertos" && card.dataset.status === "aguardando") ||
          (selected === "encerrados" && card.dataset.status === "encerrado");

        parent.style.display = show ? "block" : "none";
      });
    });
  });
});
