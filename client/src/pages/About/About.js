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
      </div>


    )
  }
}
export default About;
