import React from 'react';
import { connect } from 'react-redux';
import { IndexLink, Link } from 'react-router';

import Messages from './Messages';

class Home extends React.Component {
  render() {
    return (
      <div data-interchange="[http://www.web-world.co.in/wp-content/uploads/2017/04/Web-world-1600x580.jpg, small], [http://www.web-world.co.in/wp-content/uploads/2017/04/Web-world-1600x580.jpg, medium], [http://www.web-world.co.in/wp-content/uploads/2017/04/Web-world-1600x580.jpg, large]">
        <div className="text-center">
          <p>
            <h1>Salutations!</h1>
             My name is,<h5>Caleb Davdison</h5>
             <hr/>
             I am a full stack web developer and creator of <i><a href="https://the-pseudocoder.herokuapp.com/" target="blank">The-PseudoCoder</a></i>                   
          </p>
          <Link to="/AboutMe" className="button large expanded success">View My Bio!</Link>
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
