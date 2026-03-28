import { LocationProvider, hydrate, prerender as ssr } from 'preact-iso';
import './style.css';
import Layout from './layout';

export function App() {
	return (
		<LocationProvider>
			<Layout />
		</LocationProvider>
	);
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
