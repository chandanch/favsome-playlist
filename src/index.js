import { React } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material';

import App from './App';

const theme = createTheme({
	typography: {
		fontFamily: [
			'-apple-system',
			'"Segoe UI"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
		fontSize: 12,
	},
});

const root = createRoot(document.getElementById('root'));
root.render(
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>
);
