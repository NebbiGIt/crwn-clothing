import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shoppage/Shoppage';

const App: React.FC = () => {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/shop" component={ShopPage} />
			</Switch>
		</div>
	);
};

export default App;