import React, { useState } from "react"

function SearchForm ({onSubmit}) {
	const [keyword, setKeyword] = useState('')

	const handleSubmit = evt => {
		evt.preventDefault()
		onSubmit({keyword})
	}

	const handleChange = evt => {
		setKeyword(evt.target.value)
	}

	return (
		<form onSubmit={handleSubmit}>
			<button>Buscar</button>
			<input type='text'
				onChange={handleChange} 
				value={keyword} 
				placeholder='Search a gif here...'/>
		</form>
	)
}

export default React.memo(SearchForm)