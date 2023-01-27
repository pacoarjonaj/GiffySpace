import {useContext, useEffect, useState} from "react"
import getGifs from "services/getGifs"
import GifsContext from "context/GifsContext"

const INITIAL_PAGE = 0


export function useGifs({keyword} = {keyword: null}) {
	const [loading, setLoading] = useState(false)
	const [loadingNextPage, setLoadingNextPage] = useState(false)
	const [page, setPage] = useState(INITIAL_PAGE)
	const {gifs, setGifs}= useContext(GifsContext)

	// recuperamos la keyword de localStorage
	const keywordToUse = keyword || JSON.parse(localStorage.getItem('lastKeyword')) || 'dachshund'

	useEffect(function() {
		setLoading(true)
	
		getGifs({ keyword: keywordToUse })
			.then(gifs => {
				setGifs(gifs)
				setLoading(false)
				// guardamos la keyword en el localStorage
				localStorage.setItem('lastKeyword', JSON.stringify(keyword))
			})
	}, [keyword, setGifs])


	useEffect(function() {
		if(page === INITIAL_PAGE) return 

			setLoadingNextPage(true)

			getGifs({keyword: keywordToUse, page}) 
				.then(nextGifs => {
					setGifs(prevGifs => prevGifs.concat(nextGifs))
					setLoading(false)
				})
		
	}, [keywordToUse, page, setGifs])


	return {loading, loadingNextPage, gifs, setPage}
}