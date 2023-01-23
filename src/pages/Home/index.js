import React, { useState } from "react"
import { useLocation } from "wouter"
import { useGifs } from "../../hooks/useGifs"
import ListOfGifs from "../../components/ListOfGifs"


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
			<h3 className="App-title">Los gifs más populares</h3>
			<form onSubmit={handleSubmit}>
				<input type='text'
					onChange={handleChange} 
					value={keyword} 
					placeholder='Search a gif here...'/>
				<button>Buscar</button>
			</form>
			<div className="App-main">
				<div className="App-results">
					<h3 className="App-title">Última búsqueda</h3>
					<ListOfGifs gifs={gifs} />
				</div>
			</div>
		</>
	)
}