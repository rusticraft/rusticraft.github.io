import { useLocation } from 'preact-iso';
import Link from '../utils/Link';
import './header.css';

export default function Header() {
	const loc = useLocation();
	const url = loc.url;

	return (
		<header>
			<nav>
				<Link
					href='/'
					class={url == '/' && 'active'}
					target='_self'>
					Home
				</Link>
				<Link
					href='/people'
					class={url == '/people' && 'active'}
					target='_self'>
					People
				</Link>
				<Link
					href='/season1'
					class={url == '/season1' && 'active'}
					target='_self'>
					Season 1
				</Link>
				<Link
					href='/season1.5'
					class={url == '/season1.5' && 'active'}
					target='_self'>
					Season 1.5
				</Link>
			</nav>
		</header>
	);
}
