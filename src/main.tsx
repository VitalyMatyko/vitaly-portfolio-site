import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import SnowEffect from './client/components/animation/Snow-effect/SnowEffect.tsx';
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter basename='/vitaly-pro-hub' future={{ v7_relativeSplatPath: true }}>
			<App />
		</BrowserRouter>
		<SnowEffect />
	</StrictMode>,
)
