/* Only the view selector needs JavaScript; abstracts use native details/summary. */
(() => {
  const root = document.querySelector("[data-research-views]");
  if (!root) return;

  const controls = root.querySelector('[role="tablist"]');
  const tabs = Array.from(controls.querySelectorAll('[role="tab"]'));

  function selectTab(selected) {
    tabs.forEach((tab) => {
      const active = tab === selected;
      tab.setAttribute("aria-selected", String(active));
      tab.tabIndex = active ? 0 : -1;
      document.getElementById(tab.getAttribute("aria-controls")).hidden = !active;
    });
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => selectTab(tab));
    tab.addEventListener("keydown", (event) => {
      let next;
      if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
      else if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
      else if (event.key === "Home") next = 0;
      else if (event.key === "End") next = tabs.length - 1;
      else return;

      event.preventDefault();
      selectTab(tabs[next]);
      tabs[next].focus();
    });
  });

  selectTab(tabs[0]);
  controls.hidden = false;
})();
