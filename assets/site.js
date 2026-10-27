(function () {
  const root = document.getElementById("wh-portfolio");
  if (!root || root.dataset.initialised === "true") return;
  root.dataset.initialised = "true";
  const projects = [
    {
      title: "ReceiptFlow",
      description:
        "Built for a real club workflow, ReceiptFlow combines guided transaction entry, searchable SQLite records and practical desktop interfaces.",
      stack: ["Python", "SQLite", "PySide6"],
      url: "projects/receiptflow.html",
    },
    {
      title: "Booking Extension",
      description:
        "Built for a busy hospitality workflow, this Chrome extension extracts reservations and turns them into configurable, print-ready signs and Word documents.",
      stack: ["JavaScript", "Chrome Extension", "Word templates"],
      url: "projects/booking-extension.html",
    },
    {
      title: "Digital Identity Wallet",
      description:
        "An industry capstone exploring how organisations can issue and verify digital credentials while holders control what they share. Built with React Native, FastAPI and Walt.id.",
      stack: ["React Native", "FastAPI", "Walt.id", "W3C VC"],
      url: "projects/digital-wallet.html",
    },
    {
      title: "Shining Knights",
      description:
        "Desktop management software for a service business, bringing customer records, recurring service defaults and job scheduling into one practical workflow.",
      stack: ["Python", "PySide6", "SQLite", "Scheduling"],
      url: "projects/shining-knights.html",
    },
  ];
  const buttons = Array.from(root.querySelectorAll("[data-project]"));
  const scenes = Array.from(root.querySelectorAll("[data-scene]"));
  const title = root.querySelector("#wh-active-title");
  const description = root.querySelector("#wh-active-description");
  const stack = root.querySelector("#wh-active-stack");
  const caseLink = root.querySelector("#wh-case-link");
  function selectProject(index) {
    const project = projects[index];
    if (!project) return;
    buttons.forEach((b, i) => {
      const active = i === index;
      b.dataset.active = String(active);
      b.setAttribute("aria-pressed", String(active));
    });
    scenes.forEach((s, i) => {
      s.dataset.visible = String(i === index);
    });
    title.textContent = project.title;
    description.textContent = project.description;
    caseLink.href = project.url;
    caseLink.setAttribute(
      "aria-label",
      "Explore " + project.title + " case study",
    );
    stack.replaceChildren(
      ...project.stack.map((t) => {
        const e = document.createElement("span");
        e.textContent = t;
        return e;
      }),
    );
  }
  buttons.forEach((b, i) => {
    b.addEventListener("pointerenter", (e) => {
      if (e.pointerType === "mouse") selectProject(i);
    });
    b.addEventListener("focus", () => selectProject(i));
    b.addEventListener("click", () => selectProject(i));
  });
})();
