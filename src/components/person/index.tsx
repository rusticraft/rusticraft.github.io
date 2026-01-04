import type { CSSProperties, ComponentChildren } from 'preact';
import { type ReactElement, useEffect, useState } from 'preact/compat';

export default function Human(props: {
	skin: string;
	name: string;
	description?: string;
	joined: number;
	latest?: string;
	left?: number;
	youtube: string;
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
						src={props.skin}
						alt={props.name}
						width={80}
						height={80}
						style={{ imageRendering: 'crisp-edges' }}
					/>
					<p>{props.description}</p>
				</Column>
				<Column>
					<p>Joined in season {props.joined}</p>
					{props.left ?
						<p>Left in season {props.left}</p>
					:	null}
					<a href={props.youtube}>YouTube Channel</a>
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
					{props.latest ?
						<a
							target='_blank'
							rel='noopener noreferrer'
							href={props.latest}>
							Latest Episode
						</a>
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
