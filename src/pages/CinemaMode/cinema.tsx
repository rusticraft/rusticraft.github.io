import { useEffect, useState } from "preact/hooks"
import type { cinemaData } from "./cinematicTypes"
import cssModules from "./cinema.module.css"

function youtube_parser(url: string) {
	var regExp = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|shorts\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
	var match = url.match(regExp);
	return match[1];
}


export default function Cinema() {
	const [cinemaData, setCinemaData] = useState<cinemaData>();
	useEffect(() => {
		fetch("/data.json").then((res => res.json())).then((value: cinemaData) => {
			setCinemaData(value);
		})
	}, [])
	return <div style={{
		display: "flex",
		width: "100%",
		minHeight: "100%"
	}}>
		<div className={cssModules.centerDiv}>
			{cinemaData != undefined && cinemaData.data.map((person, idx) => {
				return (<span className={cssModules.profileSpan} key={idx}>
					<img src={person.imageURL} className={cssModules.face} width={240} alt={person.username}></img>
					<label className={cssModules.centerLabel}>{person.username}</label>
				</span>);
			})}
		</div>
	</div>
}