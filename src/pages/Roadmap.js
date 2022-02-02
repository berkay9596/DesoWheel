import React from "react";

const Roadmap = () => {
  return (
    <section className="page-section" id="roadmap">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">ROADMAP</h2>
          <h3 className="section-subheading text-muted">We are aiming to complete each steps below.</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ul className="timeline">
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/1.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>25%</h4>
                  <h4 className="subheading">Our Humble Beginnings</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">50 Pieces Sold. We're going to celebrate this with a raffle. We will include our top 10 NFT holders in this raffle and distribute 25% of the incomes from these sales. </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/2.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>50%</h4>
                  <h4 className="subheading">An Agency is Born</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted"> 100 Pieces Sold. We will hire designers to create more quality content for DESO community.</p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/3.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>75%</h4>
                  <h4 className="subheading">Developing Services</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted"> With the help of some Senior Engineers, we are aiming to re-design our website. In that website users will be able to mint their nfts. </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/4.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>100%</h4>
                  <h4 className="subheading">Phase Two Expansion</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Our designers that hired in the middle of our journey, will create our phase two Nfts to the platform. We can say, we will be stronger than ever.</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>Be Part
                  <br/>Of Our
                  <br/>Story!</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Roadmap;
