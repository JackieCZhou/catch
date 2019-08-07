import React, { Component } from "react"
import { Link } from 'react-router-dom';
import "./style.css"


// import "./Confirmation"

class Footer extends Component {
  render() {
    return (
      <div>
        <br />
        <footer class="page-footer font-small pt-4">

          <div class="container-fluid text-center text-md-center">

            <div class="row">

              <div class="col-md-12 mt-md-0 mt-3">

                <h5 class="text-uppercase">Catch</h5>
                <p>The ultimate in hiring and job hunting, never miss the perfect opportunity again!</p>

              </div>

              <hr class="clearfix w-100 d-md-none pb-3" />

            </div>
            <div class="row">
              <div class="col-md-12 mb-md-0 mb-12">



              </div>

            </div>


          </div>

          <div class="footer-copyright text-center py-3">About
            <Link className='' to='/about' onClick={this.toggleCollapse}> Catch and </Link>  <a href="https://github.com/JackieCZhou">Jackie Zhou</a>

            <ul class="list-unstyled" style={{ textAlign: 'right' }}>
              <li>
                <a href="https://jackieczhou.github.io/catch/"><i class="fab fa-github"></i> Repository </a>
                <a href="#!"><i class="fab fa-facebook"></i> Facebook </a>
                <a href="#!"><i class="fab fa-twitter-square"></i> Twitter </a>
                <a href="#!"><i class="fab fa-instagram"></i> Instagram </a>
              </li>
            </ul>

          </div>

        </footer>

      </div>



    )
  }
}
export default Footer;
