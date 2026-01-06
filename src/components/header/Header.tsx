import { useLocation } from 'preact-iso';
import { useRef } from 'preact/hooks';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { getTranslation, type langs } from '@/translations';
import Link from '../utils/Link';
import './header.css';

export default function Header() {
	const loc = useLocation();
	const url = loc.url;
	const settingsRef = useRef<HTMLDialogElement>();
	const [lang, setLang] = useLocalStorage<langs>('lang', 'EN');

	return (
		<header>
			<nav>
				<Link
					href='/'
					class={url == '/' && 'active'}
					target='_self'>
					{getTranslation('HomeButton', lang)}
				</Link>
				<Link
					href='/people'
					class={url == '/people' && 'active'}
					target='_self'>
					{getTranslation('People', lang)}
				</Link>
				<Link
					href='/season1'
					class={url == '/season1' && 'active'}
					target='_self'>
					{getTranslation('Season', lang)} 1
				</Link>
				<Link
					href='/season1.5'
					class={url == '/season1.5' && 'active'}
					target='_self'>
					{getTranslation('Season', lang)} 1.5
				</Link>
				<button
					onClick={() => {
						if (settingsRef.current) {
							settingsRef.current.open = true;
						}
					}}>
					Settings
				</button>
				<dialog ref={settingsRef}>
					<label htmlFor='lang'>Language</label>
					<select
						id='lang'
						onChange={(event) => {
							setLang(
								(event.target as HTMLSelectElement)
									.value as langs
							);
						}}
						value={lang}>
						<option value='EN'>English</option>
						{/* <option value='RO'>Romanian</option> */}
					</select>
					<button
						onClick={() => {
							if (settingsRef.current) {
								settingsRef.current.open = false;
							}
						}}>
						Close
					</button>
				</dialog>
			</nav>
		</header>
	);
}
