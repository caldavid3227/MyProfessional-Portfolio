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
					The-PsuedoCoder<br/>
					<a href="https://the-psuedocoder.herokuapp.com/" className="thumbnail" target="blank"><img src="https://blog.nxp.com/wp-content/uploads/2017/10/Software-car-reuse-960x425.jpg" alt="The-PsuedoCoder"/></a>

					<hr/>
				</div>
				<div className="grid-x">
					<div className="cell small-6">
						Church Finder<br/>
						<a href="https://tranquil-atoll-37047.herokuapp.com/" className="thumbnail" target="blank"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhaDAEGG_EA9RS8qePPHBSANnVkr2Ouo1iRHTpFIGVfoFeO_-X" alt="ChurchFinder"/></a>
					</div>			
					<div className="cell auto">
						Smart Bets<br/>
						<a href="https://caldavid3227.github.io/Sports-Data-App/" className="thumbnail" target="blank"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ZzLN-f1sI3FUvWYkM5A7CXsh8jfCSqiUJTg5Id3uz4H8BvyCkw" alt="SmartBets"/></a>
					</div>	
				</div>
			</div>
		);
	};
};

export default(Portfolio);