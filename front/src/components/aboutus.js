import React, {Component} from 'react';
import PageTitle from '../components/common/page.title';

export default class AboutUs extends Component {
  render () {
    return (
      <div className="main-content">
        <PageTitle title="About Us" bgimg="images/bg/services.jpg"/>

        <section>
          <div className="container mt-30 mb-30 pt-30 pb-30">
            <div className="row"> 
            <div className="col-md-12">
                  <img src={'/images/aboutus.png'}/>
              </div>
              <div className="col-md-12">
                  <h2 className="text-uppercasetext-theme-colored mt-0">About <span className="text-theme-color-2">Samdiv Technologies</span></h2>
                  <p>
                    At Samdiv we are focused on providing high-quality services to our clients. Quality, collaboration and relationships are what drive us. Located in Athlone, Ireland, we can work with you virtually from anywhere on earth.
                  </p>
                  <p>
                    Today, with a number of many talented members joining our team, we breed powerful ideas, collaboration that allows us to bring the best of ourselves as well as your brands.
                  </p>
                  <p>
                    With growing demand and experienced team members, we provide most of the services for an IT organization.
                  </p>
                  <p>
                    With us, you will definitely fly in the sky of success, because we believe our success only with yours.
                  </p>
              </div>

            

            </div>
          </div>
        </section> 
      </div>
    );
  }
}
