import React from 'react';
import { connect } from 'react-redux';
import { IndexLink, Link } from 'react-router';

import Messages from './Messages';

class Home extends React.Component {
  render() {
    return (
      <div>
      <div data-interchange="[../Images/Web-world-1600x580.jpg, small], [../Images/Web-world-1600x580.jpg, medium], [../Images/Web-world-1600x580.jpg, large]">
        <div className="text-center">
          <p>
            <h1>Salutations!</h1>
             My name is,<h5>Caleb Davdison</h5>
             <hr/>
             I am a full stack web developer and creator of <i><a href="https://the-pseudocoder.herokuapp.com/" target="blank">The-PseudoCoder</a></i>                   
             <br/>
             Welcome to my site.
             <br/>
             I hope you find it illuminating and enjoyable.
             <br/>
          </p>
          <Link to="/AboutMe" className="button large expanded success">View My Bio!</Link>
        </div>
      </div>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(Home);
