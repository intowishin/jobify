import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt="jobify" className="logo" />
      </nav>
      <div className="container page">
      {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby mixtape tilde raw denim biodiesel iceland letterpress.
            Umami vinyl pug, direct trade seitan truffaut retro cold-pressed
            thundercats lo-fi put a bird on it butcher venmo bespoke. Unicorn
            synth brooklyn cardigan cronut.
          </p>
            <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </main>
  );
};
export default Landing;
