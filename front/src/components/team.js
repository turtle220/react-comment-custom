import React, {Component} from 'react';
import PageTitle from '../components/common/page.title';
import Teams from '../data/team';
import './team.css';

export default class OurTeam extends Component {
  render () {
    return (
      <div className="main-content">
        <PageTitle title="The Samdiv Team" bgimg="images/bg/services.jpg"/>
        <section id="team" className="bg-silver-light">
          <div className="container pb-50">
            <div className="section-content">              
              <div className="row">
                {
                  Teams.map((team)=>{
                      return (
                          <div className="col-sm-6 col-md-3">
                              <div className="team-members style2 maxwidth400">
                                  <div className="team-thumb">
                                  <img className="img-fullwidth" alt="" src={`/images/team/${team.image}`} />
                                  </div>
                                  <div className="team-bottom-part border-bottom-theme-colored-2px bg-lighter border-1px text-center p-10 pt-20 pb-10">
                                  <h4 className="text-uppercase font-weight-600 m-0">
                                  {team.name}</h4>
                                  <h5 className="mt-5">{team.description}</h5>
                                  {/* <ul className="styled-icons icon-sm icon-dark icon-theme-colored2 mt-15 ml-5">
                                      <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                      <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                      <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                      <li><a href="#"><i className="fa fa-skype"></i></a></li>
                                  </ul> */}
                                  </div>
                              </div>
                          </div>
                      )
                  })
                }
              </div>
              <div className="row">
                  <div className="col-md-8 col-md-offset-2">
                    <h4>
                        Each team member is conversant with his domain. Collectively, we work towards the common goal of providing you with the best returns on every investment and building loyalty across every touchpoint.
                    </h4>
                    <br/>
                    <h4>
                        Every member of the Samdiv team believes strongly in the empowering power of knowledge. Every day, we unite in doing our best to bridge the gap between those who have access to knowledge opportunity, and those who do not.
                    </h4>
                    <br/>
                  </div>          
              </div>
            </div>
          </div>
        </section> 
      </div>
    );
  }
}
