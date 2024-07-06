import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes.jsx';

export const App = () => {
	const router = createBrowserRouter(routes);

	return <RouterProvider router={router} />;
};
