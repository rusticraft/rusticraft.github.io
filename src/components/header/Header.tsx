import { useLocation } from 'preact-iso';
import './header.css';

export default function Header() {
	const loc = useLocation();
	const url = loc.url;

	return (
		<header>
			<nav>
				<a
					href='/'
					class={url == '/' && 'active'}>
					Home
				</a>
				<a
					href='/people'
					class={url == '/people' && 'active'}>
					People
				</a>
			</nav>
		</header>
	);
}
