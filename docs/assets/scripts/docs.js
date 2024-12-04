//
// Theme selector
//
(() => {
    function getTheme() {
        return localStorage.getItem("theme") || "auto";
    }

    function isDark() {
        if (theme === "auto") {
            return window.matchMedia("(prefers-color-scheme: dark)").matches;
        }
        return theme === "dark";
    }

    function setTheme(newTheme) {
        theme = newTheme;
        localStorage.setItem("theme", theme);

        // Update the UI
        updateSelection();

        // Toggle the dark mode class
        document.documentElement.classList.toggle("p-theme-dark", isDark());
    }

    function updateSelection() {
        const menu = document.querySelector("#theme-selector p-menu");
        if (!menu) return;
        [...menu.querySelectorAll("p-menu-item")].map(item => (item.checked = item.getAttribute("value") === theme));
    }

    let theme = getTheme();

    // Selection is not preserved when changing page, so update when opening dropdown
    document.addEventListener("p-show", event => {
        const themeSelector = event.target.closest("#theme-selector");
        if (!themeSelector) return;
        updateSelection();
    });

    // Listen for selections
    document.addEventListener("p-select", event => {
        const menu = event.target.closest("#theme-selector p-menu");
        if (!menu) return;
        setTheme(event.detail.item.value);
    });

    // Update the theme when the preference changes
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => setTheme(theme));

    // Toggle with backslash
    document.addEventListener("keydown", event => {
        if (
            event.key === "\\" &&
            !event.composedPath().some(el => ["input", "textarea"].includes(el?.tagName?.toLowerCase()))
        ) {
            event.preventDefault();
            setTheme(isDark() ? "light" : "dark");
        }
    });

    // Set the initial theme and sync the UI
    setTheme(theme);
})();

//
// Open details when printing
//
(() => {
    const detailsOpenOnPrint = new Set();

    window.addEventListener("beforeprint", () => {
        detailsOpenOnPrint.clear();
        document.querySelectorAll("details").forEach(details => {
            if (details.open) {
                detailsOpenOnPrint.add(details);
            }
            details.open = true;
        });
    });

    window.addEventListener("afterprint", () => {
        document.querySelectorAll("details").forEach(details => {
            details.open = detailsOpenOnPrint.has(details);
        });
        detailsOpenOnPrint.clear();
    });
})();

//
// Smooth links
//
(() => {
    document.addEventListener("click", event => {
        const link = event.target.closest("a");
        const id = (link?.hash ?? "").substr(1);
        const isFragment = link?.hasAttribute("href") && link?.getAttribute("href").startsWith("#");

        if (!link || !isFragment || link.getAttribute("data-smooth-link") === "false") {
            return;
        }

        // Scroll to the top
        if (link.hash === "") {
            event.preventDefault();
            window.scroll({ top: 0, behavior: "smooth" });
            history.pushState(undefined, undefined, location.pathname);
        }

        // Scroll to an id
        if (id) {
            const target = document.getElementById(id);

            if (target) {
                event.preventDefault();
                window.scroll({ top: target.offsetTop, behavior: "smooth" });
                history.pushState(undefined, undefined, `#${id}`);
            }
        }
    });
})();

//
// Table of Contents scrollspy
//
(() => {
    // This will be stale if its not a function.
    const getLinks = () => [...document.querySelectorAll(".content__toc a")];
    const linkTargets = new WeakMap();
    const visibleTargets = new WeakSet();
    const observer = new IntersectionObserver(handleIntersect, {
        rootMargin: "0px 0px",
    });
    let debounce;

    function handleIntersect(entries) {
        entries.forEach(entry => {
            // Remember which targets are visible
            if (entry.isIntersecting) {
                visibleTargets.add(entry.target);
            } else {
                visibleTargets.delete(entry.target);
            }
        });

        updateActiveLinks();
    }

    function updateActiveLinks() {
        const links = getLinks();
        // Find the first visible target and activate the respective link
        links.find(link => {
            const target = linkTargets.get(link);

            if (target && visibleTargets.has(target)) {
                links.forEach(el => el.classList.toggle("active", el === link));
                return true;
            }

            return false;
        });
    }

    // Observe link targets
    function observeLinks() {
        getLinks().forEach(link => {
            const hash = link.hash.slice(1);
            const target = hash ? document.querySelector(`.content__body #${hash}`) : null;

            if (target) {
                linkTargets.set(link, target);
                observer.observe(target);
            }
        });
    }

    observeLinks();

    document.addEventListener("turbo:load", updateActiveLinks);
    document.addEventListener("turbo:load", observeLinks);
})();