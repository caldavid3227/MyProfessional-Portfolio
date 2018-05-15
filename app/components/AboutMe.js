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
					<p> Do you ever feel like somethings missing? Like your companies good, but it could be great? Something that brings a whole new level of fun, intellect, wit, and inovation?
					 Well look no further for I am here! programming has become a very large and invaluable part of my life. It has taught me everything from creating and running my own local server, to valuable life lessons on being adatipble, intelligable, patient, and determained. 
					 Not a day goes by where I find coding at the center of my next step forward. Yet for all of frustrations and strain this field brings, I always find myself smiling and contempt knowing that I have the oportunity to do soemthing few others can and that I have limitless potential at my ginger tips.
					 We made it to the moon(unless we didn't actually go)on megabytes, imagine all we can do with the terabytes at our disposal each and every day, waiting and ready to make the indivdual, men, women, children, and the human race as a whole better, more intelligent, and more enlightened. 
					 It is a great honor a privilage to be a part of this experience and to develope the skills necessary to push technology and the intert forward. The only limitations our programs have are the limitations we put on ourselves, so why would we let ourselves be limited when I can seak to learn more and more each passing moment?
					 </p>  
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