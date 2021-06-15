import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Testomonial from "./Components/Testomonial";
import { FaFacebookSquare,FaInstagram,FaPinterestSquare,FaTwitter} from "react-icons/fa";


function App() {
  return (
    <div className="App">
      <div className="app__hero">
        <Header />
        <h1 className="app__h1"> WE ARE CREATIVES</h1>
        <img src="./images/image-header.jpg" alt="heroimg" />
      </div>
      <div className="app__icon-arrow"></div>
      <div className="app__container">
        <div className="container-1">
          <h1>
            Transform your <br />
            brand
          </h1>

          <p>
            we are full-service creative agency specializing in helping brands
            grow fast. Engage yours clients through compaling visuals that do
            most of the marketing for you.
          </p>
          <p>
            <span>
              <strong>Learn more</strong>
            </span>
          </p>
        </div>
        <div>
          <img src="./images/image-transform.jpg" alt="one" />
        </div>
        <div>
          <img src="./images/image-stand-out.jpg" alt="three" />
        </div>
        <div className="container-2">
          <h1>
            Transform your <br /> brand
          </h1>
          <p>
            we are full-service creative agency specializing in helping brands
            grow fast. Engage yours clients through compaling visuals that do
            most of the marketing for you.
          </p>
          <p>
            <span>
              <strong>Learn more</strong>
            </span>
          </p>
        </div>
        <div>
          <img src="./images/image-graphic-design.jpg" alt="four" />
        </div>
        <div>
          <img src="./images/image-photography.jpg" alt="two" />
        </div>
        <div className="app__para">
          <div className="app__para1">
            <h3>Graphic Design</h3>
            <br />
            <br />
            <p>
              Great design make you memorable.We deliver artwork that underscore
              your brand message and capture potential clients attention.
            </p>
          </div>
          <div className="app__para2">
            <h3>Photography</h3>
            <br />
            <br />
            <p>
              Increase your credibility by getting the most stunning, high
              quality photos that improve your bussiness image.
            </p>
          </div>
        </div>
        <div className="app__testoH1">
          <h3>CLIENT TESTOMONIALS</h3>
        </div>
        <div className="app__testomonial">
          <div>
            <Testomonial
              designation="Marketing Director"
              image="./images/image-emily.jpg"
              title="Emily R."
              p="We put our trust in sunnyside and they delivered, making sure our needs were met and deadlines always hit."
            />
          </div>
          <div>
            <Testomonial
              designation="Marketing Director"
              image="./images/image-thomas.jpg "
              title="Thomas S."
              p="sunnyside's enthusiasm coupled with their kenn interest in our brand's success made it a satisfying and enjoyable experience."
            />
          </div>
          <div>
            <Testomonial
              designation="Marketing Director"
              image="./images/image-jennie.jpg"
              title="Jennie F."
              p="Incredibal end results! our sales increased over 400% when we worked with sunnyside. Highly recomended!"
            />
          </div>
        </div>
        <div className="images">
          <img src="./images/image-gallery-milkbottles.jpg" alt="firstimg" />
          <img src="./images/image-gallery-orange.jpg" alt="firstimg" />
          <img src="./images/image-gallery-cone.jpg" alt="firstimg" />
          <img src="./images/image-gallery-sugarcubes.jpg" alt="firstimg" />
        </div>
        <div className="footer">
          <h4>sunnyside</h4>
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
          </ul>
          <div className="icons">
            <FaFacebookSquare />
            <FaTwitter />
            <FaInstagram />
            <FaPinterestSquare />
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
