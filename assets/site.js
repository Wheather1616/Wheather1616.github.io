(function () {
  const root = document.getElementById("wh-portfolio");
  if (!root || root.dataset.initialised === "true") return;
  root.dataset.initialised = "true";
  const projects = [
    {
      title: "ReceiptFlow",
      description:
        "A desktop application designed to simplify real operational receipt workflows, with data persistence and maintainable interfaces.",
      stack: ["Python", "SQLite", "PySide6"],
      url: "projects/receiptflow.html",
    },
    {
      title: "Booking Extension",
      description:
        "A browser-based tool that streamlines booking workflows and transforms reservation data into usable documents.",
      stack: ["JavaScript", "Chrome Extension", "Docs"],
      url: "projects/booking-extension.html",
    },
    {
      title: "Digital Wallet",
      description:
        "A capstone mobile project exploring digital credentials, mobile interactions and backend services.",
      stack: ["React Native", "FastAPI", "Mobile"],
      url: "projects/digital-wallet.html",
    },
    {
      title: "Shining Knights",
      description:
        "A fourth portfolio project. Add a verified summary, technical stack and real application imagery when ready.",
      stack: ["Project details", "To be confirmed"],
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
