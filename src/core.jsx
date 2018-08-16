import React, { PropTypes } from 'react'
import Converter from 'usng.js'
import { Input, Card } from 'semantic-ui-react'
import Map from 'ol/Map'
import View from 'ol/view'
import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from 'react-router-dom'

const ConRouter = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Container} />
			<Route path="/map" component={MapContainer} />
		</Switch>
	</Router>
)

const Container = () => (
	<div>
		<Link to="/map">Map</Link>
	</div>
)

class MapContainer extends React.Component {
	componentDidMount(){
		let m = new Map(
			{
				target: 'map',
				layers: [
				  new TileLayer({
					source: new XYZ({
					  url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
					})
				  })
				],
				view: new View({
				  center: [0, 0],
				  zoom: 2
				})
			  }
		)
	}
	render(){
		return (
			<div id="map"></div>
		)
	}
}


export default ConRouter;
