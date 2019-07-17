import React, { Component } from "react";
import './about.css';



class About extends Component {
  render() {
    return (

      <div className="info">
        <br /><br />
        <div className="container" style={{ border: '.4' }}>
          <h1 style={{ background: 'transparent', color: 'black', border: 'black' }}>What's Catch?</h1>
          <br />
          <img src='./finalcatchlogo.jpg' style={{ width: '400px', opacity: 'none' }} />
        </div>

        <h4>Catch is a full service hiring and job search tool for businesses and job seekers. 
            <br />Business looking to use Catch can save and cateogrize potentional employees based on the paremiters tat work best for them.  
            In addition you have the ability to share saved Catch recruits with fellow team members to simplifiy the job hunt.  Once you've decided who you want 
            interview you can set up appointments directly with google calendar and continue to narrow down potentional hires with our "On Deck" hiring template.
            Business can also promote meetups and job fair events to everyone in their Catch contacts to ensure maximum outreach for their event.
            <br /> Members seeking a job will have a clean and organized platform for all of their hirable materials along with a scanable code to use whenever they 
            meet someone looking for more information.  You will have access to upcoming meetups and job fairs in your area as well as the ability to update potentional 
            companies you're connected with whenever your resume changes.
            <br /> Don't miss out on the new wave of job hunting!
        </h4>

        < br ></br >
        {/* <ItemsCarousel> */}
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8 flex-center">
            <div className="jumbotron pt-3" style={{height: '200px'}}>
              <br />
              <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                  <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className='card-review' style={{ border: 'none' }}>
                          <h5 style={{ textAlign: 'center' }}>
                          “Whether you think you can or you think you can’t, you’re right.” – Henry Ford
                        </h5>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className='card-review' style={{ border: 'none' }}>
                          <h5 style={{ textAlign: 'center' }}>
                          “If your ship doesn't come in, swim out to meet it.”― Jonathan Winters
                        </h5>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className='card-review' style={{ border: 'none' }}>
                          <h5 style={{ textAlign: 'center' }}>
                          “Choose a job you love, and you will never have to work a day in your life.” – Confucius
                             </h5>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className='card-review' style={{ border: 'none' }}>
                          <h5 style={{ textAlign: 'center' }}>
                          “Never put off till tomorrow what you can do today.” – Thomas Jefferson
                            </h5>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className='card-review' style={{ border: 'none' }}>
                          <h5 style={{ textAlign: 'center' }}>
                          “Opportunities don’t happen, you create them.” – Chris Grosser
                            </h5>
                        </div>
                      </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
                <div classNameName="col-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>


    )
  }
}
export default About;