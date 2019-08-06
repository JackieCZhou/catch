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
          <img src='./images/greenscapes' style={{ width: '600px', opacity: 'none' }} />
        </div>

        <h4>Catch is a full service hiring and job search tool for businesses and job seekers. 
            <br />Business looking to use Catch can save and cateogrize potentional employees based on the paremiters tat work best for them.  
            In addition you have the ability to share saved Catch recruits with fellow team members to simplifiy the job hunt.  Once you've decided who you want 
            interview you can set up appointments directly with google calendar and continue to narrow down potentional hires with our "On Deck" hiring template.
            Business can also promote meetups and job fair events to everyone in their Catch contacts to ensure maximum outreach for their event.
            <br /> Members seeking a job will have a clean and organized platform for all of their hirable materials along with a scanable code to use whenever they 
            meet someone looking for more information.  You will have access to upcoming meetups and job fairs in your area as well as the ability to update potentional 
            companies you're connected with whenever your resume changes.
            <br /> Don't miss out on the new wave of job hunting!</h4>

        < br ></br >
        {/* <ItemsCarousel> */}
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8 flex-center">
            <div className="jumbotron pt-3" style={{height: '200px'}}>
              <h2>Words of Wisdom from James Greenscapes</h2>
              <br />
              <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                  <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className='card-review' style={{ border: 'none' }}>
                          <h4 style={{ textAlign: 'center' }}>
                            A beautiful lawn is the key to a 
                            <br />beautiful life.
                        </h4>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className='card-review' style={{ border: 'none' }}>
                          <h4 style={{ textAlign: 'center' }}>
                            Hard work is the key to success!
                        </h4>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className='card-review' style={{ border: 'none' }}>
                          <h4 style={{ textAlign: 'center' }}>
                            One Million Lawns Saved since 1976!
                             </h4>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className='card-review' style={{ border: 'none' }}>
                          <h4 style={{ textAlign: 'center' }}>
                            Right or wrong, make a decision. 
                            <br />The road of life is paved 
                            <br />with flat squirrels who couldn't 
                            <br />make a decision.
                            </h4>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className='card-review' style={{ border: 'none' }}>
                          <h4 style={{ textAlign: 'center' }}>
                            I've never met a lawn Greenscapes 
                            <br />couldn't turn into the most beautiful 
                            <br />one on the block!
                            </h4>
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