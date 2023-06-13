import React from "react"
import { useLocation } from "wouter"
import useForm from "./hook"


const RATINGS = ['g', 'pg', 'pg-13', 'r']


export default function SearchForm({ initialKeyword = '', initialRating }) {

	const { keyword, rating, times, updateKeyword, updateRating } = useForm({ 
		initialKeyword, 
		initialRating
	})

	const [, pushLocation] = useLocation()

	const handleChange = evt => {
		updateKeyword(evt.target.value)
	}

	const handleChangeRating = (evt) => {
		updateRating(evt.target.value)
	}

	const handleSubmit = evt => {
		evt.preventDefault()
		// vamos a otra ruta
		pushLocation(`/search/${keyword}/${rating}`)
	}


	return (
		<form onSubmit={handleSubmit}>
			<button>Search</button>
			<input type='text'
				onChange={handleChange}
				value={keyword}
				placeholder='Search a gif here...' />
			<select onChange={handleChangeRating} value={rating}>
				<option disabled>Rating type</option>
				{RATINGS.map(rating => (<option key={rating}>{rating}</option>))}
			</select>
			<small>{times}</small>
		</form>
	)
}