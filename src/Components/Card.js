import React, { useState } from "react";
export default function Card() {
  const [basic, setBasic] = useState("19.99");
  const [prof, setProf] = useState("22.99");
  const [master, setMaster] = useState("39.99");
  const [click, setClick] = useState(true);

  const toggle = () => {
    setClick(!click);
    if (prof === "22.99" && master === "39.99" && basic === "19.99") {
      setBasic("565");
      setProf("404");
      setMaster("404");
    } else {
      setBasic("19.99");
      setProf("22.99");
      setMaster("39.99");
    }
  };
  return (
    <>
      <heading className="heading">
        <h1 className="heading-primary">Our Prices</h1>
        <div className="plans">
          <p className="plan-ab">Anually</p>
          <i
            class="fa fa-toggle-on toggle-on"
            aria-hidden="true"
            onClick={toggle}
          ></i>
          <i class="fa fa-toggle-off toggle-off" aria-hidden="true"></i>
          <p className="plan-ab">Monthly</p>
        </div>
      </heading>
      <section className="cards">
        <div className="container">
          <div className="container">
            <div className="flex-container">
              <div className="card">
                <p className="plan-name">BASIC</p>
                <p className="plan-amount">
                  <span className="dollar">$</span>
                  {basic}
                </p>
                <ul className="plan-list">
                  <li className="list-item">500 GB Storage</li>
                  <hr />
                  <li className="list-item">2 Users Allowed</li>
                  <hr />
                  <li className="list-item">Send up to 3 GB</li>
                  <hr />
                </ul>
                <a href="#" className="btn">
                  Learn More
                </a>
              </div>
              <div className="card card-center">
                <p className="plan-name white">Professional</p>
                <p className="plan-amount white">
                  <span className="dollar">$</span>
                  {prof}
                </p>
                <ul className="plan-list">
                  <li className="list-item">500 GB Storage</li>
                  <hr />
                  <li className="list-item">2 Users Allowed</li>
                  <hr />
                  <li className="list-item">Send up to 3 GB</li>
                  <hr />
                </ul>
                <a href="#" className="btn">
                  Learn More
                </a>
              </div>
              <div className="card">
                <p className="plan-name">Master</p>
                <p className="plan-amount">
                  <span className="dollar">$</span>
                  {master}
                </p>
                <ul className="plan-list">
                  <li className="list-item">500 GB Storage</li>
                  <hr />
                  <li className="list-item">2 Users Allowed</li>
                  <hr />
                  <li className="list-item">Send up to 3 GB</li>
                  <hr />
                </ul>
                <a href="#" className="btn">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
