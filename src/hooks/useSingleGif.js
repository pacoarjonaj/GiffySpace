import { toBeRequired } from "@testing-library/jest-dom/dist/matchers"
import { useEffect, useState } from "react"
import getSingleGif from "services/getSingleGif"
import { useGifs } from "./useGifs"

export default function useSingleGif ({id}) {
	const {gifs} = useGifs()
	const gifFromCache = gifs.find(singleGlif => singleGlif.id === id)

	const [gif, setGif] = useState(gifFromCache)
	const [isLoading, setIsLoading] = useState(false)
	const [isError, setIsError] = useState(false)

	useEffect(function() {
		if(!gif){
			setIsLoading(true)
			// llamar al servicio si no tenemos sitio
			getSingleGif({id})
				.then(gif => {
					setGif(gif)
					setIsLoading(false)
					setIsError(false)
				}).catch(err => {
					setIsLoading(false)
					setIsError(true)
				})
		}
	}, [gif, id])

	return {gif, isLoading, isError}
}