import React from "react";

export const Footer = () => {
  return (
    <footer>
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            <ul className="list-inline text-center">
              <li className="list-inline-item"> 
              </li>
              <li className="list-inline-item">
                <a href="https://github.com/kgarcia2020050" target="_blank" rel="noreferrer">
                  <span className="fa-stack fa-lg">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
            </ul>
            <div className="small text-center text-muted fst-italic">
            &copy; Kenneth García 2022
            </div>
          </div>
        </div>
      </div>
      <br></br>
    </footer>
  );
};
