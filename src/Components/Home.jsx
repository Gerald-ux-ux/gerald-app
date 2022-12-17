import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <h1 className="Text">Gerald Kamau</h1>
      <br />
      <p>
        <h4 className="Paragraph">Creative frontend engineer</h4>
      </p>
      <Link to="/contact">
        <button>Get in Touch</button>
      </Link>
    </div>
  );
};

export default Home;
