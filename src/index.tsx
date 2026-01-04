import { LocationProvider, Route, Router, hydrate, lazy, prerender as ssr } from 'preact-iso';
import Header from '@/components/header/Header.js';
import './style.css';

const Home = lazy(() => import('./pages/Home/index.js'));
const NotFound = lazy(() => import('./pages/NotFound/index.js'));
const People = lazy(() => import('./pages/People/index.js'));

export function App() {
	return (
		<LocationProvider>
			<Header />
			<main>
				<Router>
					<Route
						path='/'
						component={Home}
					/>
					<Route
						path='/people'
						component={People}
					/>
					<Route
						default
						component={NotFound}
					/>
				</Router>
			</main>
		</LocationProvider>
	);
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
