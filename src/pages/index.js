import Slider from "../components/Slider";
const image = require("../images/pawprint.png");
const imageLogo = require("../images/pet.png");

const Home = () => {
  return (
    
      <div>
      {Slider()}
    <header className="bg-dark text-white">
      <a href="/">
        <img
          className="paws"
          src={image}
          alt="paws menu"
          width="50px"
          height="50px"
        />
      </a>

      <a href="/" className="logo">
        <img
          className="headerLogo"
          src={imageLogo}
          alt="logo"
          width="50px"
          height="50px"
        />
        EDENS PALS
      </a>
    </header>

    

    </div>
  );
};

export default Home;
