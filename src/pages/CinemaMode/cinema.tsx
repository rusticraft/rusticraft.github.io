import { useEffect, useRef, useState } from "preact/hooks"
import type { CinemaData, Person } from "./cinematicTypes"
import cssModules from "./cinema.module.css"

export default function Cinema() {
	const [cinemaData, setCinemaData] = useState<CinemaData>();
	const [selectedUser, setSelectedUser] = useState<Person>(null);

	const userRef = useRef<HTMLDivElement>(null);

	function loadUser(user: Person) {
		setSelectedUser(user);
		if (userRef.current) {
			window.scrollTo(0, userRef.current.scrollTop);
		}
	}

	useEffect(() => {
		fetch("/data.json").then((res => res.json())).then((value: CinemaData) => {
			setCinemaData(value);
		})
	}, [])
	return <div style={{
		display: "flex",
		width: "100%",
		minHeight: "100%",
		flexDirection: "column"
	}}>
		<div className={cssModules.centerDiv}>
			{cinemaData != undefined && cinemaData.data.map((person, idx) => {
				return (<span className={cssModules.profileSpan} key={idx}>
					<a href="javascript:void(0)" onClick={() => loadUser(person)}><img src={person.imageURL} className={cssModules.face} width={240} alt={person.username} /></a>
					<label className={cssModules.centerLabel}>{person.username}</label>
				</span>);
			})}
		</div>
		{selectedUser != null ? <div ref={userRef}>
			<h1>You are watching {selectedUser.username}</h1>
			<br />
			{selectedUser.seasons.map((season, index) => {
				return <div key={index}>
					<h2>Season {season.seasonNumber}</h2>
					<div className={cssModules.seasonEpisodeMenu}>
						{season.episodes.map((episode, i) => {
							return <div style={{
								display: "flex",
								flexDirection: "column"
							}} key={i}>
								<img src={`https://i.ytimg.com/vi_webp/${episode.id}/maxresdefault.webp`} alt={episode.name} height={360} />
								<label className={cssModules.centerLabelEpisode}>{episode.name}</label>
							</div>
						})}
					</div>
				</div>
			})}
		</div> : null}
	</div>
}