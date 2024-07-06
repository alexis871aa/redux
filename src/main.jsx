import ReactDOM from 'react-dom/client';
import { App } from './app.jsx';
import './main.module.css';
import { Provider } from 'react-redux';
import { store } from './store/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<App />
	</Provider>,
);