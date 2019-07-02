import React, { Component } from "react"
import { Link } from 'react-router-dom';
import "./style.css"


// import "./Confirmation"

class Footer extends Component {
    render() {
        return (
         <div>
           <br />
          <footer class="page-footer font-small green pt-4">
          
            <div class="container-fluid text-center text-md-left">
          
              <div class="row">
          
                <div class="col-md-6 mt-md-0 mt-3">
          
                  <h5 class="text-uppercase">Catch</h5>
                  <p>Never miss a job opportunity again!</p>
          
                </div>
          
                <hr class="clearfix w-100 d-md-none pb-3" />
          
                <div class="col-md-3 mb-md-0 mb-3">
          
                  <h5 class="text-uppercase">Designed By</h5>
          
                  <ul class="list-unstyled">
                    <li>
                      <a href="https://github.com/JackieCZhou">Jackie Zhou</a>
                    </li>
                  </ul>
          
                </div>
          
                <div class="col-md-3 mb-md-0 mb-3">
          
                  <h5 class="text-uppercase">Links</h5>
          
                  <ul class="list-unstyled">
                    <li>
                      <a href="https://jackieczhou.github.io/catch/."><i class="fab fa-github"></i> Repository</a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/jackie-zhou-75330787/"><i class="fab fa-facebook"></i>Linkedin</a>
                    </li>
                    <li>
                      <a href="https://docs.google.com/document/d/1kT0uqUbwT_a7Jk2a4zj7O0pIeqRFkfZAL5RhjEKy-Ts/edit?ts=5d117542"><i class="fab fa-twitter-square"></i>Resume</a>
                    </li>
                    <li>
                      <a href="https://jackieczhou.github.io/portfolio/."><i class="fab fa-instagram"></i> Portfolio</a>
                    </li>
                  </ul>
          
                </div>
          
              </div>
          
            </div>
          
            <div class="footer-copyright text-center py-3">About 
            <Link className='' to='/about' onClick={this.toggleCollapse}> Catch</Link>
            </div>
          
          </footer>
          
          </div>
  


        )
    }
}
export default Footer;
