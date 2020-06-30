import React, {Component} from 'react';
import PageTitle from '../components/common/page.title';
import axios from 'axios';   

export default class ContactUs extends Component {

    constructor(props){
        super(props);
        this.initialFormState ={name : "", email: "", subject: "", message: "", phone: ""}
        this.submitForm =  this.submitForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {form : this.initialFormState, message : false}
    }

    submitForm(event){
        event.preventDefault();
        let form = this.state.form;
        let message = `Below are the details of the enquiry <br/> Name: ${form.name} <br/> Email: ${form.email} <br/> Phone: ${form.phone} <br/> Message: ${form.message}` ;
        
        let emailData = {
            "to":"info@samdivtech.com",
            "from":  "samdivtech@gmail.com",
            "subject": "Enquiry Details",
            "html": message
        }

        axios.post('https://hgydsvc7j9.execute-api.us-east-1.amazonaws.com/default/sendEmail', emailData)
        .then((response)=>{
            let message = 'Thanks for contacting us!! You will get back to you shortly !!';
            alert(message);
            this.setState({form:this.initialFormState});
        })
        .catch((err)=>{
            console.log(err, 'Error in sending email')
        })
    }

    handleChange(event, key) {
        this.setState({form : {...this.state.form, [key] : event.target.value}});
    }

    render () {
        return (
        <div className="main-content">
        <PageTitle title="Contact Us" bgimg="images/bg/services.jpg" />
        <section className="divider">
            <div className="container">
                <div className="row pt-30">
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <div className="left media bg-deep p-30 mb-20">
                                <div className="media-body">
                                <h5 className="mt-0">Social Share</h5>
                                <ul className="styled-icons icon-sm icon-dark icon-theme-colored2 icon-circled mt-15">
                                    <li><a href="https://www.linkedin.com/company/samdiv-technologies-ltd" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                                    
                                </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <div className="icon-box left media bg-deep p-30 mb-20"> <a className="media-left pull-left" href="#"> <i className="pe-7s-map-2 text-theme-colored"></i></a>
                                <div className="media-body">
                                    <h5 className="mt-0">Our Office Location</h5>
                                    <p>Westmeath Co., Athlone, Westmeath N37 XD73, IE</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-12">
                            <div className="icon-box left media bg-deep p-30 mb-20"> <a className="media-left pull-left" href="#"> <i className="pe-7s-call text-theme-colored"></i></a>
                                <div className="media-body">
                                    <h5 className="mt-0">Contact Number</h5>
                                    <p>+353 89 981 6708</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-12">
                            <div className="icon-box left media bg-deep p-30 mb-20"> <a className="media-left pull-left" href="#"> <i className="pe-7s-mail text-theme-colored"></i></a>
                            <div className="media-body">
                                <h5 className="mt-0">Email Address</h5>
                                <p>info@samdivtech.com</p>
                            </div>
                            </div>
                        </div>
                        {/* <div className="col-xs-12 col-sm-6 col-md-12">
                            <div className="icon-box left media bg-deep p-30 mb-20"> <a className="media-left pull-left" href="#"> <i className="pe-7s-film text-theme-colored"></i></a>
                            <div className="media-body">
                                <h5 className="mt-0">Make a Video Call</h5>
                                <p>deskwp</p>
                            </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="col-md-8">
                    <h3 className="line-bottom mt-0 mb-30">Interested in discussing?</h3>
                    <form id="contact_form" name="contact_form" onSubmit={(e)=>this.submitForm(e)}>
                    <div className="row">
                        <div className="col-sm-12">
                        <div className="form-group">
                            <label>Name <small>*</small></label>
                            <input name="form_name" className="form-control" type="text" placeholder="Enter Name" required value={this.state.form.name} onChange={(e)=>{this.handleChange(e, 'name')}}/>
                        </div>
                        </div>
                        <div className="col-sm-12">
                        <div className="form-group">
                            <label>Email <small>*</small></label>
                            <input name="form_email" className="form-control required email" type="email" placeholder="Enter Email" value={this.state.form.email} onChange={(e)=>{this.handleChange(e, 'email')}}/>
                        </div>
                        </div>
                    </div>
                        
                    <div className="row">
                        <div className="col-sm-6">
                        <div className="form-group">
                            <label>Subject <small>*</small></label>
                            <input name="form_subject" className="form-control required" type="text" placeholder="Enter Subject" value={this.state.form.subject} onChange={(e)=>{this.handleChange(e, 'subject')}}/>
                        </div>
                        </div>
                        <div className="col-sm-6">
                        <div className="form-group">
                            <label>Phone</label>
                            <input name="form_phone" className="form-control" type="text" placeholder="Enter Phone" value={this.state.form.phone} onChange={(e)=>{this.handleChange(e, 'phone')}}/>
                        </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Message</label>
                        <textarea name="form_message" className="form-control required" rows="5" placeholder="Enter Message" value={this.state.form.message} onChange={(e)=>{this.handleChange(e, 'message')}}></textarea>
                    </div>
                    <div className="form-group">
                        <input name="form_botcheck" className="form-control" type="hidden" value="" />
                        <button type="submit" className="btn btn-dark btn-theme-colored btn-flat mr-5" data-loading-text="Please wait...">Send your message</button>
                        <button type="reset" className="btn btn-default btn-flat btn-theme-colored">Reset</button>
                    </div>
                    </form>                    
                </div>
                </div>
            </div>
        </section>
      </div>
    );
  }
}
