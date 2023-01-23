import {API_KEY, API_URL} from '../utils/settings'


export default function getGifs({keyword = 'dachshund'} = {}) {
	const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=25&offset=0&rating=g&lang=es`

	return fetch(apiURL)
		.then(res => res.json())
		.then(response => {
			const {data = []} = response
			if(Array.isArray(data)){
				const gifs = data.map(image => {
					const {images, title, id} = image
					const { url } = images.downsized_medium
					return { title, id, url}
				})
				return gifs
			}
		})
}