import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import SnowEffect from './client/components/animation/Snow-effect/SnowEffect.tsx'


createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
		<SnowEffect />
	</StrictMode>,
)
