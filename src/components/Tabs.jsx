import { useState, useRef, useEffect } from "react";
import "../styles.css";
// import reactHooks from "eslint-plugin-react-hooks";

const tabsData = [
  {
    id: 1,
    title: "History",
    image: "https://picsum.photos/id/1018/1000/600",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 8v5l3 3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 12a9 9 0 11-9-9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    content: (
      <>
        <h3 className="tab-title">History</h3>
        <p className="tab-copy">
          I'm baby wolf pickled schlitz try-hard normcore marfa man bun
          mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights.
          Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde
          try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh
          wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie
          ugh chambray, craft beer pork belly flannel tacos single-origin
          coffee art party migas plaid pop-up.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Vision",
    image: "https://picsum.photos/id/1015/1000/600",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 3v3M5.2 6.6l-2 1.2M18.8 6.6l2 1.2M4 12h3M17 12h3M5.2 17.4l-2-1.2M18.8 17.4l2-1.2M12 18v3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    content: (
      <>
        <h3 className="tab-title">Vision</h3>
        <p className="tab-copy">
          Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth
          crucifix offal deep v hella biodiesel. Church-key listicle polaroid
          put a bird on it chillwave palo santo enamel pin, tattooed meggings
          franzen la croix cray. Retro yr aesthetic four loko tbh helvetica
          air plant, neutra palo santo tofu mumblecore. Hoodie bushwick
          pour-over jean shorts chartreuse shabby chic.
        </p>
        <ul className="tab-list">
          <li>Design forward thinking</li>
          <li>User-centered interactions</li>
          <li>Scalable experiences</li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    title: "Goals",
    image: "https://picsum.photos/id/1019/1000/600",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    content: (
      <>
        <h3 className="tab-title">Goals</h3>
        <p className="tab-copy">
          Chambray authentic truffaut, kickstarter brunch taxidermy vape
          heirloom four dollar toast raclette shoreditch church-key. Poutine
          etsy tote bag, cred fingerstache leggings cornhole everyday carry
          blog gastropub.
        </p>
      </>
    ),
  },
];

const Tabs = ({ onTabChange }) => {
  const [active, setActive] = useState(1);
  const tabsRef = useRef([]);

  // notify parent of initial image
  useEffect(() => {
    if (onTabChange) onTabChange(tabsData.find((t) => t.id === active)?.image);
    // eslint-disable-next-line
  }, []);

  const onKeyDown = (e) => {
    const idx = tabsData.findIndex((t) => t.id === active);
    if (e.key === "ArrowRight") {
      const next = tabsData[(idx + 1) % tabsData.length];
      setActive(next.id);
      tabsRef.current[(idx + 1) % tabsData.length]?.focus();
      if (onTabChange) onTabChange(next.image);
    } else if (e.key === "ArrowLeft") {
      const prev = tabsData[(idx - 1 + tabsData.length) % tabsData.length];
      setActive(prev.id);
      tabsRef.current[(idx - 1 + tabsData.length) % tabsData.length]?.focus();
      if (onTabChange) onTabChange(prev.image);
    }
  };

  return (
    <section className="tabs-wrap" aria-label="Information tabs">
      <div role="tablist" aria-label="Main tabs" className="tabs-nav">
        {tabsData.map((tab, i) => (
          <button
            key={tab.id}
            role="tab"
            ref={(el) => (tabsRef.current[i] = el)}
            aria-selected={active === tab.id}
            aria-controls={`panel-${tab.id}`}
            id={`tab-${tab.id}`}
            tabIndex={active === tab.id ? 0 : -1}
            className={`tab-btn ${active === tab.id ? "is-active" : ""}`}
            onClick={() => {
              setActive(tab.id);
              if (onTabChange) onTabChange(tab.image);
            }}
            onKeyDown={onKeyDown}
          >
            <span className="tab-icon" aria-hidden>
              {tab.icon}
            </span>
            <span className="tab-label">{tab.title}</span>
          </button>
        ))}
      </div>

      <div className="tabs-panels">
        {tabsData.map((tab) => (
          <div
            key={tab.id}
            role="tabpanel"
            id={`panel-${tab.id}`}
            aria-labelledby={`tab-${tab.id}`}
            hidden={active !== tab.id}
            className={`tab-panel ${active === tab.id ? "panel-active" : ""}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tabs;
