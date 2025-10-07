const tabs = document.querySelectorAll(".tab");
const cards = document.querySelectorAll(".ticket-card");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    const selected = tab.dataset.tab;

    cards.forEach((card) => {
      card.style.display =
        selected === "todos" ||
        (selected === "andamento" && card.dataset.status === "andamento") ||
        (selected === "abertos" && card.dataset.status === "aguardando") ||
        (selected === "encerrados" && card.dataset.status === "encerrado")
          ? "flex"
          : "none";
    });
  });
});
