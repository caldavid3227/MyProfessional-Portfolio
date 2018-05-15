import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="button expanded primary">
        <p>© 2018 Caleb Davidson. All Rights Reserved.</p>
        <p className="text-right">
        	<u>
        		<a className="button" href="https://github.com/caldavid3227" target="blank">Git Hub</a>
        	</u>
        	<br/>
        	<u>
        		<a className="button" href="https://www.linkedin.com/in/caleb-davidson1/" target="blank">Linkedin</a>
        	</u>
        	<br/>
        	<u>
        		<a className="button" href="https://stackoverflow.com/" target="blank">Stack Overflow</a>
        	</u>
        </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
