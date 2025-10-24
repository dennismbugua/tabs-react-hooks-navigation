# Tabs — React hooks + navigation (Polished UI)

Welcome — this is a small, focused demo that showcases a modern, accessible tabbed UI built with React hooks and plain CSS (no UI framework required). The goal of the project is simple: explore how a lightweight component can deliver strong UX and business value when designed for clarity, accessibility and performance.

Why this matters (business impact)
----------------------------------

- Faster decisions: a clear information architecture (tabs for History / Vision / Goals) reduces cognitive load and helps users find what they need faster. In product and marketing flows that can mean higher engagement and fewer support requests.
- Conversion and retention: industry research repeatedly shows that better UX directly impacts KPIs like conversion, retention and customer satisfaction. Organizations investing in UX design often see measurable gains in conversion and reduced support cost (see references below).
- Accessibility = market reach: accessible components make your product available to more users and reduce legal and reputation risk. Projects that bake-in ARIA roles, keyboard navigation and visible focus states remove common barriers to use.

Use cases (how & why)
----------------------

- Marketing landing pages — use tabs to let visitors quickly switch between product highlights, roadmap, and case studies without navigating away.
- Product documentation — collapse related sections into tabs so readers can compare versions, specs, or release notes without scrolling long pages.
- Admin dashboards — tabbed panels are excellent for creating focused views (analytics, logs, settings) while reusing the same layout.

Technical summary (what's in this repo)
---------------------------------------

- React functional components using hooks (no class components).
- A single, reusable `Tabs` component with:
	- ARIA roles and keyboard navigation (ArrowLeft / ArrowRight).
	- Per-tab metadata (title, icon, image URL, content).
	- A small parent callback (`onTabChange`) used to change the hero image in the parent `App`.
- Plain CSS (in `src/styles.css`) with CSS variables, responsive layout, focus states and subtle transitions.

How state flows (short contract)
--------------------------------

- Input: user clicks a tab or uses keyboard arrows.
- Output: `Tabs` updates its active index and calls `onTabChange(imageUrl)` with the image for the newly active tab.
- Parent: `App.js` owns `selectedImage` and uses it to render the large hero image next to the `Tabs` component.

Key code snippets
-----------------

1) Tabs calling back to parent when a tab is selected (excerpt from `src/components/Tabs.jsx`):

```jsx
// when a tab is clicked we update internal state and notify parent
onClick={() => {
	setActive(tab.id);
	if (onTabChange) onTabChange(tab.image);
}}
```

2) Parent `App.js` receiving the selected image and rendering it in the hero area:

```jsx
const [selectedImage, setSelectedImage] = useState(initialUrl);

// pass setter to Tabs so it can update the hero image
<Tabs onTabChange={setSelectedImage} />

// hero image uses selectedImage
<img src={selectedImage} alt="Hero" className="hero-image" />
```

Architecture overview
---------------------

This project follows a simple component hierarchy and unidirectional state flow:

- App (stateful)
	- Tabs (stateful for active tab, stateless to parent via callback)
	- Hero image (stateless, driven from App state)

Notes:
- Tabs keeps UI-specific state (which tab is active). App owns data that may be shared (selected image) so other parts of the page can react.
- The CSS file (`src/styles.css`) is intentionally global for the demo — in a larger app you'd scope styles with CSS modules, Styled Components, or Tailwind.

Evidence & references (why UX + accessibility pay off)
-----------------------------------------------------

- Forrester and Nielsen Norman Group frequently report that investments in UX and usability translate to meaningful business returns: better conversions, lower support costs and faster user task completion. (See Forrester / NNGroup case studies on UX ROI.)
- WebAIM's large-scale accessibility reports (Million Homepage project) document pervasive WCAG failures across the web; designing accessible components helps reach a larger audience and reduce legal risk.
- Baymard Institute publishes well-cited research on cart abandonment and e-commerce usability — poor UX is a measurable drag on conversion for transactional sites.

If you'd like, I can add an explicit references section linking to the specific reports (Forrester UX ROI, NNGroup articles, WebAIM Million Homepage, Baymard research). I avoided hard links here so the README remains readable in environments without network access.

Local development & quick commands
----------------------------------

1. Install deps:

```bash
npm install
```

2. Start dev server:

```bash
npm start
```

3. Build for production:

```bash
npm run build
```

Suggested next improvements (low-risk, high-value)
-------------------------------------------------

- Preload images or add a small cross-fade to the hero image to avoid flicker on switch.
- Add automated visual/regression tests using Playwright or Cypress to ensure the layout and keyboard interactions remain consistent.
- Add unit tests for the `Tabs` component (React Testing Library) verifying ARIA attributes, keyboard navigation, and callback calls.
- Introduce image lazy-loading and a small spinner/placeholder for slower connections.

Closing notes
-------------

This repo is intentionally small so you can experiment quickly: plug in your own images, swap or extend the tab items, or lift the state into a global store if you need to share the selected tab across many components.

If you'd like, I can:

- Add cross-fade image transitions and image preloading.
- Add an accessible live region announcing the active tab and image change for screen-reader users.
- Create a tiny test suite (unit + e2e) and a GitHub Actions workflow that runs it on push.

Tell me which of those you'd like next and I'll implement it.

---

Repository structure (important files)

- src/
	- components/
		- Tabs.jsx  — tab component with ARIA + keyboard support
	- App.js      — demo page, owns selected hero image state
	- styles.css  — global styles for demo

Enjoy experimenting! If you want the README to include the specific external URLs for Forrester/NNGroup/WebAIM/Baymard references, tell me and I will add them verbatim.
