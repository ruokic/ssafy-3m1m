import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './routes';
import Provider from './Provider';
import GlobalStyles from './styles/GlobalStyles';
import Main from './views/Main';
import Login from './views/Login';
import Index from './views/Index';
import Signup from './views/Signup';
import Community from './views/community/Community';
import ComIndex from './views/community/Index';
import Records from './views/community/minutes/Records';
import Error404 from './views/Error404';
import Members from './views/community/Members';

function App() {
	return (
		<Provider>
			<GlobalStyles />
			<Router>
				<Routes>
					<Route element={<Index />}>
						<Route path={routes.main} element={<Main />} />
						<Route path={routes.login} element={<Login />} />
						<Route path={routes.signup} element={<Signup />} />
						<Route path={`${routes.community}/:communityId`} element={<ComIndex />}>
							<Route index element={<Community />} />
							<Route path={routes.records} element={<Records />} />
							<Route path={routes.members} element={<Members />} />
						</Route>
					</Route>
					<Route path='*' element={<Error404 />} />
				</Routes>
			</Router>
		</Provider>
	);
}

export default App;
