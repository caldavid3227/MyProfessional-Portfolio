import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p>© 2018 Caleb Davidson. All Rights Reserved.</p>
        <p className="text-right">
        	<u>
        		<a href="https://github.com/caldavid3227" target="blank">Git Hub</a>
        	</u>
        	<br/>
        	<u>
        		<a href="https://www.linkedin.com/in/caleb-davidson1/" target="blank">Linkedin</a>
        	</u>
        	<br/>
        	<u>
        		<a href="https://stackoverflow.com/" target="blank">Stack Overflow</a>
        	</u>
        </p>
      </footer>
    );
  }
}

export default Footer;
