import { useReducer } from "react"


const ACTIONS = {
	UPDATE_KEYOWRD: 'update_keyword',
	UPDATE_RATING: 'update_rating'
}

// De esta forma evitamos tenemos que hacer un switch segun
// el tipo de accion en el reducer
const ACTIONS_REDUCER = {
	[ACTIONS.UPDATE_KEYOWRD]: (state, action) => ({
		...state,
		keyword: action.payload,
		times: state.times + 1
	}),
	[ACTIONS.UPDATE_RATING]: (state, action) => ({
		...state,
		rating: action.payload
	})

}


const REDUCER = (state, action) => {
	const actionReducer = ACTIONS_REDUCER[action.type]
	return actionReducer ? actionReducer(state, action) : state
}


export default function useForm ({ initialKeyword, initialRating }) {
	const [state, dispatch] = useReducer(REDUCER, {
		keyword: decodeURIComponent(initialKeyword),
		rating: initialRating,
		times: 0
	})

	const { keyword, rating, times } = state

	return {
		keyword,
		rating,
		times,
		updateKeyword: keyword => 
			dispatch({ type: ACTIONS.UPDATE_KEYOWRD, payload: keyword }),
		updateRating: rating => 
			dispatch({ type: ACTIONS.UPDATE_RATING, payload: rating })
	}
}