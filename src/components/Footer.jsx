import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer has-background-black is-small" >
        <div className="content has-text-centered">
          <p className= "has-text-white">
            <strong className="has-text-white">Copyright® Guitar React, Inc. All Right Reserved.</strong> By{" "}
            <p className= "has-text-white">Plataforma 5 BootCamp 2022</p>. The source code is
            licensed {" "}
            <a className="has-text-white">MIT</a>.
            {" "}
            <a className="has-text-white">
              CC BY NC SA 4.0
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
