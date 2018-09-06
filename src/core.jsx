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
			<Route path="/sources" component={Sources} />
		</Switch>
	</Router>
)

const Sources = () => {
	
}

const Container = () => (
	<div>
		<Link to="/map">Map</Link>
		<Link to="/sources">Sources</Link>
	</div>
)

class MapContainer extends React.Component {
	render(){
		return (
			<div id="map"></div>
		)
	}
}


export default ConRouter;
