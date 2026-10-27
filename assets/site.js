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
  const stage = root.querySelector(".wh-stage");
  const desktopStageParent = stage?.parentElement;
  const mobileLayout = window.matchMedia("(max-width: 600px)");
  let currentProject = 0;

  function positionPreview(index) {
    if (!stage || !desktopStageParent) return;

    if (mobileLayout.matches) {
      // Keep the interactive preview immediately below the selected project.
      if (stage.previousElementSibling !== buttons[index]) {
        buttons[index].after(stage);
      }
    } else if (stage.parentElement !== desktopStageParent) {
      // Return to the original right-hand column on tablet/desktop.
      desktopStageParent.append(stage);
    }
  }

  function selectProject(index) {
    const project = projects[index];
    if (!project) return;
    currentProject = index;
    positionPreview(index);
    buttons.forEach((b, i) => {
      const active = i === index;
      b.dataset.active = String(active);
      b.setAttribute("aria-pressed", String(active));
      b.setAttribute("aria-expanded", String(active && mobileLayout.matches));
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
  // Initialise the mobile preview location and restore it as the viewport changes.
  const onLayoutChange = () => selectProject(currentProject);
  if (typeof mobileLayout.addEventListener === "function") {
    mobileLayout.addEventListener("change", onLayoutChange);
  } else {
    mobileLayout.addListener(onLayoutChange);
  }
  selectProject(currentProject);

  buttons.forEach((b, i) => {
    b.addEventListener("pointerenter", (e) => {
      if (e.pointerType === "mouse" && !mobileLayout.matches) selectProject(i);
    });
    b.addEventListener("focus", () => selectProject(i));
    b.addEventListener("click", () => selectProject(i));
  });
})();
