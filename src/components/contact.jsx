import React, { Component } from 'react'

export default class Contact extends Component {


  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  render() {
    return (
      <div>
     <section id="contact" class="contact">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Contact</h2>
        </div>

        <div class="row mt-1">

          <div class="col-lg-4">
            <div class="info">
              <div class="address">
                <i class="icofont-google-map"></i>
                <h4>Location:</h4>
                <p>Kakkanad, Kochi</p>
              </div>

              <div class="email">
                <i class="icofont-envelope"></i>
                <h4>Email:</h4>
                <p>georgeeejacob@gmail.com</p>
              </div>

              <div class="phone">
                <i class="icofont-phone"></i>
                <h4>Call:</h4>
                <p>+91 9995104204</p>
              </div>

            </div>

          </div>

          <div class="col-lg-8 mt-5 mt-lg-0">
          <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
              <div class="form-row">
                <div class="col-md-6 form-group">
                  <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                  <div class="validate"></div>
                </div>
                <div class="col-md-6 form-group">
                <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />                  <div class="validate"></div>
                </div>
              </div>
              
              <div class="form-group">
              <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />                <div class="validate"></div>
              </div>
              <div class="mb-3">
                
              </div>
              <div class="text-center">
                <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
          </div>

        </div>

      </div>
    </section>
      </div>
    )
  }
  onNameChange(event) {
    this.setState({name: event.target.value})
  }

  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onMessageChange(event) {
    this.setState({message: event.target.value})
  }

  resetForm(){
    this.setState({name: '', email: '', message: ''})
  }

  handleSubmit(e) {
      e.preventDefault();
      
      fetch('http://localhost:3002/send', {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(
      (response) => (response.json())
        ).then((response)=> {
      if (response.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if(response.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

}

