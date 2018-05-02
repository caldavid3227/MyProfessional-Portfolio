import React from 'react';
import { connect } from 'react-redux';
import { IndexLink, Link } from 'react-router';
import Messages from './Messages';

class Portfolio extends React.Component{
	render(){
		return(
			<div>
				<div className="text-center">
					<h3>Welcome! Please, view my works and code, I hope they are as much fun to use and examine as they were to build!</h3>
					<hr/>
				</div>
				<div className="text-center">
					The-PsuedoCoder
					<hr/>
				</div>
				<div className="row">	
					<div className="grid-x">
						<div className="cell medium-6">
							Front-end Hangman
						</div>			
						<div className="cell medium-6">
							Back-end Hangman
						</div>	
					</div>
				</div>
			</div>
		);
	};
};

export default(Portfolio);