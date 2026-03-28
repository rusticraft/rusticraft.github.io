import { useLocation, Router, Route, lazy } from "preact-iso";
import Header from "./components/header/Header";

const Cinema = lazy(() => import('./pages/CinemaMode/cinema.js'));
const Home = lazy(() => import('./pages/Home/index.js'));
const NotFound = lazy(() => import('./pages/NotFound/index.js'));
const People = lazy(() => import('./pages/People/index.js'));
const Season1 = lazy(() => import('./pages/Season1/index.js'));
const Season1_5 = lazy(() => import('./pages/Season1.5/index.js'));

export default function Layout() {
	const location = useLocation();

	return (
		<>
			{!location.url?.includes("cinema") && <Header />}
			<main style={{
				minHeight: "100%",
				margin: 0,
				padding: 0
			}}>
				<Router>
					<Route path='/' component={Home} />
					<Route path='/people' component={People} />
					<Route path='/season1' component={Season1} />
					<Route path='/season1.5' component={Season1_5} />
					<Route path='/cinema' component={Cinema} />
					<Route default component={NotFound} />
				</Router>
			</main>
		</>
	)
}