import React, { Component } from "react";
import './about.css';
import image1 from '../../cssPages/ImageGallery/IMG_2395.JPG';


class About extends Component {
  render() {
    return (

      <div className="info">
        <br /><br />
        <div className="container" style={{ border: '.4' }}>
          <h1 style={{ background: 'transparent', color: 'orangered', border: 'black' }}>What's Catch?</h1>
            <h4> Why miss out on the perfect opporunity when you don't have to?</h4>
          <br />
        </div>
        <div className="row">
          <div className="col-4">
          <img src={{image1}}/>
          </div>
          <div className="col-8 flex-center">
            <h6>Catch is a full service hiring and job search tool for businesses and job seekers.
            <br />Businesses looking to use Catch can save and categorize potentional employees based on the paremiters tat work best for them.
              In addition you have the ability to share saved Catch recruits with fellow team members to simplifiy the job hunt.  Once you've decided who you want
              interview you can set up appointments directly with google calendar and continue to narrow down potentional hires with our "On Deck" hiring template.
              Business can also promote meetups and job fair events to everyone in their Catch contacts to ensure maximum outreach for their event.
            <br /> Members seeking a job will have a clean and organized platform for all of their hirable materials along with a scanable code to use whenever they
              meet someone looking for more information.  You will have access to upcoming meetups and job fairs in your area as well as the ability to update potentional
              companies you're connected with whenever your resume changes.
            <br /> Don't miss out on the new wave of job hunting!</h6>

            < br ></br >
          </div>
        </div>
      </div>


    )
  }
}
export default About;
