import React, {Component} from 'react';
import PageTitle from '../components/common/page.title';
import axios from 'axios';
import Config from '../config.json';
import Jobs from '../data/jobs';


export default class Careers extends Component {

    constructor(props){
        super(props);
        this.initialFormState = {name: "", email : "", position: "", phone: "", message: ""};
        this.submitForm =  this.submitForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.state = { file: [],form: this.initialFormState, message: false}
    }

    submitForm(event){
        const formData = new FormData();

        event.preventDefault();

        formData.append('file', this.state.file);

        axios.post('https://file.io',formData, {headers: { 'Content-Type': 'multipart/form-data' }})
        .then((fileSucess)=>{

            let form = this.state.form;
            let resumeUrl = fileSucess.data.link;

            let message = `Below are the details of the candidate <br/> Name: ${form.name} <br/> Position Applied: ${form.position} <br/> Email: ${form.email} <br/> Phone: ${form.phone} <br/> Message: ${form.message} <br/> Link to download : ${resumeUrl}` ;
            
            let emailData = {
                "to": "info@samdivtech.com",
                "from": "deepyad@gmail.com",
                "subject": `New resume submitted on Samdivtech for position: ${form.position} `,
                "html": message
            }
            
            return axios.post(`${Config.emailapi}default/sendEmail`, emailData)
        })
        .then((response)=>{
            alert('Resume submitted successfully!');
            this.setState({form: this.initialFormState})
        })
        .catch((err)=>{
            alert('Error in submitting resume. Please try again or send to info@samdivtech.com')
        })
    }

    /* componentDidMount(){
        axios.get(`${Config.jsonapi}5c88a27eadeb832d3ec7b07c/latest`)
        .then((openpostions)=>{
            console.log(openpostions.data, "openpostions");
            this.setState({jobs : openpostions.data});
        })
    } */

    handleFileChange(event){
        this.setState({file: event.target.files[0]})
    }

    handleChange(event, key) {
        this.setState({form : {...this.state.form, [key] : event.target.value}});
    }

    render () {
        return (
        <div className="main-content">
        <PageTitle title="Careers" bgimg="images/bg/services.jpg" />
        <section className="divider">
            <div className="container">
                <div className="row pt-30">
                    <p>
                        We don’t just match key words in your skills with job profile but we try our best to match your expectations with that of our client.This is how we differentiate our self from others in market.At Samdiv we don’t have any hierarchy and you will be treated as a partner from day one. You can browse our website to know more about the services and careers we deal with.
                        We welcome you to join our team and help us grow with your share of knowledge and enthusiasm. The current job openings with Samdiv Technologies are as follows –
                    </p>
                    <p>
                        For dropping your CV for any other positions, email us at info@samdivtech.com We will surely get back to you in case of any vacancy regarding same.
                    </p>
                </div>
                <div className="row pt-30">
                <div className="col-md-6">
                <h2>Open Positions</h2>
                <div className="panel-group accordion-theme-colored2 accordion-icon-left" id="accordion8" role="tablist" aria-multiselectable="true">
                    {
                        Jobs.map((job)=>{
                            return (
                                <div className="panel panel-default" key={job.id}>
                                    <div className="panel-heading" role="tab" id="headingThree5">
                                    <h5 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion5" href={`#${job.id}`} >
                                        {job.position}
                                        </a>
                                    </h5>
                                    </div>
                                    <div id={`${job.id}`} className="panel-collapse collapse" role="tabpanel">
                                    <div className="panel-body">
                                        <span dangerouslySetInnerHTML={{__html: job.description}}></span>
                                    </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                </div>
                <div className="col-md-6">
                    <h2 className="line-bottom mt-0 mb-30">Drop your resumes here.</h2>
                    <form id="contact_form" name="contact_form" onSubmit={this.submitForm}>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="form-group">
                                <label>Full Name <small>*</small></label>
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
                            <label>Select Position <small>*</small></label>
                            <select className="form-control" onChange={(e)=>{this.handleChange(e, 'position')}}>
                                {
                                    Jobs.map((job)=>{
                                        return (
                                            <option key={job.id} value={job.position}>{job.position}</option>
                                        )
                                    })
                                }
                            </select>
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
                        <label>Upload your resume</label>
                        <input type="file" name="resume" className="form-control required" onChange={(e)=>{this.handleFileChange(e)}}/>
                    </div>

                    <div className="form-group">
                        <label>Message</label>
                        <textarea name="form_message" className="form-control required" rows="5" placeholder="Enter Message" value={this.state.form.message} onChange={(e)=>{this.handleChange(e, 'message')}}></textarea>
                    </div>
                    <div className="form-group">
                        <input name="form_botcheck" className="form-control" type="hidden" value="" />

                        <button type="reset" className="btn btn-default btn-flat btn-theme-colored">Resume uploading Disabled due to GDPR issue</button>
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
