import React, { Component } from 'react';
import './App.css';
import MapContainer from './maps';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = { disasters : [] };
	}

	state ={
		disasters : [],
	}
	

render() {
  return (
	<div id="App">
		<aside>
			<span>&nbsp;ALERT</span>
			<img src="https://cdn.images.express.co.uk/img/dynamic/78/750x445/1230205.jpg" alt="people affected with corona virus"/>
			<article>
				<h1>Wuhan Coronacirus Crisis</h1>
				<p><em>"The global death toll from the Wuhan coronavirus is at least 805, surpassing the number of fatalities from the deadly 2003 SARS outbreak."</em></p>
				<p className="App-intro">;{this.state.disasters}</p>
				<span> - CNN</span>
			</article>
		</aside>
		<main>
			<MapContainer/>
		</main> 
	</div>
  );
}
}



export default App;