import React from "react";

const video=require("../img/fondo.mp4")

const Header = () => {
  return (
    <header>
      <div className="overlay"></div>
      <video
        autoPlay="autoplay"
        muted="muted"
        loop="loop"
      >
        <source
          src={video}
        />
      </video>
    </header>
  );
};

export default Header;
