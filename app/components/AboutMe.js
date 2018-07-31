import React from 'react';
import { connect } from 'react-redux';
import { IndexLink, Link } from 'react-router';
import Messages from './Messages';


class About extends React.Component{
	render(){
		return(
			<div>
				<div>
					<p>I strive to make unintelligent computers intelligent by speaking gibberish to them...
					No one knows when the first computer came into existence (in 1936), but since their inception, someone (Ada Lovelace) attempted to improve the way the computer, internet, and software run. I am a proud member of this hard work and balderdash club known as web development. Like many who have come before me, I started my career in school and quickly grew to new heights of understanding, technology, and innovation! I have learned a great deal in such a short time; everything from front-end HTML to maddening back-end Node.js. In the days to come I hope to improve and expand my own site, The-PsuedoCoder and to learn as much as humanly possible about this world of computers. Passion, a thirst for knowledge, and a healthy programming addiction drive me to the top, in hopes of being one of the best, and one of the few who earn the memory of changing and modernizing how we write our code, one function at a time.</p>
					<p> Do you ever feel like somethings missing? 
					Like your company is good  but it could be great? 
					Something that brings a whole new level of fun, intellect, wit, and innovation? 
					Well, look no further, for I am here! 
					Programming has become a very large and invaluable part of my life. 
					It has taught me everything from creating and running my own local server, to valuable life lessons on being adaptable, distinct, patient, and determined. 
					Not a day goes by where I don’t find coding at the center of my next step forward. 
					Yet for all the frustrations and strain this field brings, I always find myself smiling and content knowing that I have the opportunity to do something few others can and that I have limitless potential at my fingertips. 
					We made it to the moon (unless we didn't actually go) on megabytes, imagine all we can do with the terabytes at our disposal each and every day. 
					All that information, waiting and ready to make the individual men, women, children, and the human race as a whole better, more intelligent, and more enlightened. 
					It is a great honor and privilege to be a part of this experience and to develop the skills necessary to push technology and the internet forward. The only limitations our applications have are the limitations we create.  Why would we let ourselves be limited when we can seek to learn more and more each passing moment?</p>  
				</div>
				<div>
				 	<Link to="/Portfolio" className="button secondary">See my works here</Link> 
					<img src=''/>
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