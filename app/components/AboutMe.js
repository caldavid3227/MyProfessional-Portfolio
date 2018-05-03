import React from 'react';
import { connect } from 'react-redux';
import { IndexLink, Link } from 'react-router';
import Messages from './Messages';


class About extends React.Component{
	render(){
		return(
			<div>
				<div>
					<p> From the dawn of creation, man has strived to be better. 
					Myself on the other hand, I strived to make really stupid computers intelligent by speaking giberish to them...
					</p>
					<p>	No one knows when the first computer came into existence(1936), but since their inception someone(Ada Lovelace) has attempted to improve the way the computer, internet, and software runs. I am proudly a member of the hard work and giberish club known as web development.
					 Like many who have come before me, I started my career in school and quickly grew to new hights of understanding, technology, and inovation! I have learned much in such a short time, everything from front-end HTML to maddening back-end Node.js.
					 In the days to come I hope to improve and expand my own site, <i>The-PsuedoCoder</i> and to learn much more about this world of computers. 
					 Passion, knowledge, joy, and a healthy programming addiction drive me to the top, in hopes of being one of the best, and one of the few who earn the memory of changing and mondernizing how we write our code, one function at a time.<br/>
					</p>
				</div>
				<div>
					<img src="https://i.pinimg.com/originals/30/a7/01/30a7018bd7a59a852f4177295208dd55.jpg"/>
				 	<Link to="/Portfolio" className="button secondary">See my works here</Link> 
				</div>
			</div>
			);
	};
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
   	text: state.auth.value
  };
};

export default(About); 	