import { useState } from "react";
import "../styles.css";

const Tabs = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (idx) => {
    setToggleState(idx);
  };
  return (
    <div className="container">
      <div className="block-tabs">
        <button
          className={toggleState === 1 ? "tabs tabs-active" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          History
        </button>
        <button
          className={toggleState === 2 ? "tabs tabs-active" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Vision
        </button>
        <button
          className={toggleState === 3 ? "tabs tabs-active" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Goals
        </button>
      </div>
      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content active-content" : "content"}
        >
          <h2>History</h2>

          <p>
            I'm baby wolf pickled schlitz try-hard normcore marfa man bun
            mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights.
            Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde
            try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh
            wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie
            ugh chambray, craft beer pork belly flannel tacos single-origin
            coffee art party migas plaid pop-up.
          </p>
        </div>
        <div
          className={toggleState === 2 ? "content active-content" : "content"}
        >
          <h2>Vision</h2>

          <p>
            Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth
            crucifix offal deep v hella biodiesel. Church-key listicle polaroid
            put a bird on it chillwave palo santo enamel pin, tattooed meggings
            franzen la croix cray. Retro yr aesthetic four loko tbh helvetica
            air plant, neutra palo santo tofu mumblecore. Hoodie bushwick
            pour-over jean shorts chartreuse shabby chic. Roof party hammock
            master cleanse pop-up truffaut, bicycle rights skateboard affogato
            readymade sustainable deep v live-edge schlitz narwhal.
          </p>
          <div className="list">list item</div>
          <div className="list">list item</div>
          <div className="list">list item</div>
        </div>
        <div
          className={toggleState === 3 ? "content active-content" : "content"}
        >
          <h2>Goals</h2>

          <p>
            Chambray authentic truffaut, kickstarter brunch taxidermy vape
            heirloom four dollar toast raclette shoreditch church-key. Poutine
            etsy tote bag, cred fingerstache leggings cornhole everyday carry
            blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape
            hashtag marfa readymade direct trade man braid cold-pressed roof
            party. Small batch adaptogen coloring book heirloom. Letterpress
            food truck hammock literally hell of wolf beard adaptogen everyday
            carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo
            booth quinoa chicharrones.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Tabs;
