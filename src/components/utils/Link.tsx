import { type AnchorHTMLAttributes } from 'preact';

export default function Link(props: AnchorHTMLAttributes) {
	return (
		<a
			target={props.target || '_blank'}
			rel='noopener noreferrer'
			title={props.title}
			href={props.href}>
			{props.children}
		</a>
	);
}
