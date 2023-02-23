import React, { useCallback } from "react"
import { useLocation } from "wouter"
import { useGifs } from "hooks/useGifs"
import ListOfGifs from "components/ListOfGifs"
import TrendingSearches from 'components/TrendingSearches'
import SearchForm from "components/SearchForm"


export default function Home() {
	const [path, pushLocation] = useLocation()
	const {loading, gifs} = useGifs()


	const handleSubmit = useCallback(({keyword}) => {
		// vamos a otra ruta
		pushLocation(`/search/${keyword}`)
	}, [pushLocation])


	return (
		<>
			<SearchForm onSubmit={handleSubmit}/>	
			<div className="App-main">
				<div className="App-results">
					<h3 className="App-title">Última búsqueda</h3>
					<ListOfGifs gifs={gifs} />
				</div>
			</div>
			<div className="App-category">
         		<TrendingSearches />
        	</div>
		</>
	)
}