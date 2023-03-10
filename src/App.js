import React from 'react'
import './App.css'
import { Link, Route } from 'wouter'
import Home from './pages/Home'
import Detail from './pages/Detail'
import SearchResults from './pages/SearchResults'
import StaticContext from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContext'


function App() {

  return (
	<StaticContext.Provider value={
		{
		name: 'pacoarjonaj',
		sigueme: true
		}
	}>
		<div className="App">
			<section className="App-content">
				<Link to="/">
					<p>HOME</p>
				</Link>
				<GifsContextProvider>
					<Route
						component={Home}
						path="/"
					/>
					<Route
						component={SearchResults}
						path="/search/:keyword"
					/>	
					<Route
						component={Detail}
						path="/gif/:id"
					/>
					<Route
						component={() => <h1> 404 ERROR :/ </h1>}
						path="/404"
					/>
				</GifsContextProvider>
			</section>
		</div>
	</StaticContext.Provider>
  );
}

export default App;
