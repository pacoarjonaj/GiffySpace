import React from "react"
import Gif from "../Gif"
import './styles.css'


export default function ListOfGifs({gifs}){
	return <div className="ListOfGifs">
		{gifs.map(({id, title, url, ...extraInfo}) => 
				<Gif
					key={id}
					title={title}
					id={id}
					url={url}
					{...extraInfo}
				/>
			)
		}
	</div>
}
