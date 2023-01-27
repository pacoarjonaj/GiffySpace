import React, { useState } from "react"
import { useLocation } from "wouter"
import { useGifs } from "hooks/useGifs"
import ListOfGifs from "components/ListOfGifs"
import TrendingSearches from 'components/TrendingSearches'


export default function Home() {
	const [keyword, setKeyword] = useState('')
	const [path, pushLocation] = useLocation()
	const {loading, gifs} = useGifs()


	const handleSubmit = evt => {
		evt.preventDefault()
		pushLocation(`/search/${keyword}`)
	}

	const handleChange = evt => {
		setKeyword(evt.target.value)
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<button>Buscar</button>
				<input type='text'
					onChange={handleChange} 
					value={keyword} 
					placeholder='Search a gif here...'/>
			</form>
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