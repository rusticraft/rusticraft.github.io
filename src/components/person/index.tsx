import type { CSSProperties, ComponentChildren } from 'preact';
import { type ReactElement } from 'preact/compat';
import Link from '../utils/Link';

export default function Human(props: {
	head: string;
	name: string;
	description?: string;
	firstSeason: number;
	latestEpisode?: string;
	latestEpisodeTitle?: string;
	latestSeason?: number;
	youtubeChannelUrl: string;
	trivia?: string[];
}) {
	return (
		<div
			style={{
				width: 'clamp(280px, 25vw, 420px)',
				minWidth: '280px',
				boxSizing: 'border-box',
				height: '280px',
				overflowY: 'scroll',
				border: '4px solid black',
			}}>
			<div style={{ display: 'flex', flexDirection: 'row', padding: '24px' }}>
				<Column>
					<h1>{props.name}</h1>
					<img
						src={props.head}
						alt={props.name}
						width={80}
						height={80}
						style={{ imageRendering: 'crisp-edges' }}
					/>
					<p>{props.description}</p>
				</Column>
				<Column>
					<p>
						Season{props.latestSeason ? 's' : null}{' '}
						{props.firstSeason}{' '}
						{props.latestSeason ?
							`to ${props.latestSeason}`
						:	null}
					</p>
					<Link href={props.youtubeChannelUrl}>YouTube Channel</Link>
					{props.trivia ?
						<>
							<h2>Trivia</h2>{' '}
							<ul>
								{props.trivia.map((val) => (
									<li key={val}>{val}</li>
								))}
							</ul>
						</>
					:	null}
					{props.latestEpisode ?
						<Link title={props.latestEpisodeTitle} href={props.latestEpisode}>
							Latest Episode
						</Link>
					:	null}
				</Column>
			</div>
		</div>
	);
}

function Column(props: { children?: ComponentChildren; style?: CSSProperties }): ReactElement {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', flex: 1, ...props.style }}>
			{props.children}
		</div>
	);
}
