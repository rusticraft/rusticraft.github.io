import { LocationProvider, Route, Router, hydrate, lazy, prerender as ssr } from 'preact-iso';
import Header from '@/components/header/Header.js';
import './style.css';

const Home = lazy(() => import('./pages/Home/index.js'));
const NotFound = lazy(() => import('./pages/NotFound/index.js'));
const People = lazy(() => import('./pages/People/index.js'));
const Season1 = lazy(() => import('./pages/Season1/index.js'));
const Season1_5 = lazy(() => import('./pages/Season1.5/index.js'));

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
						path='/season1'
						component={Season1}
					/>
					<Route
						path='/season1.5'
						component={Season1_5}
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
