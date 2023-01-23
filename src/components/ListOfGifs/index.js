import React, { useState} from "react"
import Gif from "../Gif"
import './styles.css'


export default function ListOfGifs({gifs}){
	return <div className="ListOfGifs">
		{gifs.map(({id, title, url}) => 
				<Gif
					key={id}
					title={title}
					id={id}
					url={url}
				/>
			)
		}
	</div>
}
