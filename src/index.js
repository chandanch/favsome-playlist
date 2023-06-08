import { React } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material';

import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';

const theme = createTheme({
	typography: {
		fontFamily: [
			'"Segoe UI"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
		fontSize: 12,
	},
	palette: {
		primary: {
			main: '#117d9c',
		},
		secondary: {
			main: '#009a71',
		},
	},
});

const root = createRoot(document.getElementById('root'));
root.render(
	// Binds the redux store to react app, makes the store available to any nested components
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</Provider>
);
