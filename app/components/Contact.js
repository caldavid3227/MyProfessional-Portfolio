import React from 'react';
import { connect } from 'react-redux'
import { submitContactForm } from '../actions/contact';
import Messages from './Messages';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', message: '' };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(submitContactForm(this.state.name, this.state.email, this.state.message));
  }

  render() {
    return (
      
      <div className="align-center">
        <div className="cell large-5">
          <div className="card text-center">
            <div className="card-section">
              <img src="../Images/Email.svg"/>
              <h4>Please, feel free to contact me!</h4>
              <p>
              <h5>EMAIL:</h5>
                <u>davidsoncaleb97@gmail.com</u>
              <h5>PHONE:</h5>
                <u>(480)395-5530</u><br/>
              Or contact me through one of the links you see at the bottom.
              </p>
            </div>
          </div>
        </div>
      </div>


    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(Contact);
