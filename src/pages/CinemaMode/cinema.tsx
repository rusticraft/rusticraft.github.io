import { useEffect, useRef, useState } from "preact/hooks"
import type { CinemaData, Episode, Person } from "./cinematicTypes"
import cssModules from "./cinema.module.css"

export default function Cinema() {
	const [cinemaData, setCinemaData] = useState<CinemaData>();
	const [selectedUser, setSelectedUser] = useState<Person>(null);
	const [selectedEpisode, setSelectedEpisode] = useState<Episode>(null);

	const dialogRef = useRef<HTMLDialogElement>(null);

	function loadUser(user: Person) {
		setSelectedUser(user);
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
		flexDirection: "column",
		backgroundColor: "#3a3a3a",
		color: "#c29d62"
	}}>
		<dialog ref={dialogRef}>
			{selectedEpisode ? (
				<>
					<h1 style={{
						textAlign: "center"
					}}>{selectedEpisode.name}</h1>
					<iframe width="1080" height="640" src={`https://www.youtube-nocookie.com/embed/${selectedEpisode.id}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen /><br />
				</>
			) : null}

			<button style={{
				width: "100%",
				backgroundColor: "red",
				color: "black",
				height: "8vh",
				fontSize: "4vh",
				cursor: "pointer"
			}} onClick={() => {
				dialogRef.current.close();
			}}>Close</button>
		</dialog>

		<div className={cssModules.centerDiv}>
			{cinemaData != undefined && cinemaData.data.map((person, idx) => {
				return (<span className={cssModules.profileSpan} key={idx}>
					<a href="javascript:void(0)" onClick={() => loadUser(person)}><img src={person.imageURL} className={cssModules.face} width={120} alt={person.username} /></a>
					<label className={cssModules.centerLabel}>{person.username}</label>
				</span>);
			})}
		</div>
		{selectedUser != null ? <div>
			<h1>You are watching <span style={selectedUser.color ? {
				color: selectedUser.color
			} : null}>{selectedUser.username}</span></h1>
			{selectedUser.seasons.map((season, index) => {
				return <div key={index}>
					<h2>{season.seasonNumber == 0 ? "Specials" : `Season ${season.seasonNumber}`}</h2>
					<div className={cssModules.seasonEpisodeMenu}>
						{season.episodes.map((episode, i) => {
							return <div style={{
								display: "flex",
								flexDirection: "column"
							}} key={i}>
								<a href="javascript:void(0)" onClick={() => {
									if (!dialogRef.current) {
										console.error("Dialog Ref not set");
										return;
									}
									setSelectedEpisode(episode);
									dialogRef.current.showModal();
								}}><img src={`https://i.ytimg.com/vi_webp/${episode.id}/maxresdefault.webp`} className={cssModules.episodeImg} alt={episode.name} height={360} /></a>
								<label className={cssModules.centerLabelEpisode}>{episode.name}</label>
							</div>
						})}
					</div>
				</div>
			})}
		</div> : null}
	</div>
}