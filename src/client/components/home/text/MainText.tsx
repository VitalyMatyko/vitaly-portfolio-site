import { MainTextProps } from '../../../../global-types/types';
import homeStyles from '../Home.module.scss';

const MainText: React.FC<MainTextProps> = ({ getFollowLink, handleDownload, getShowWindowSendMessage }) => {
	return (
		<>
			<div className={homeStyles.preview_text}>
				<div className={homeStyles.textName}><span>Hey There,</span><span>I'm Vitaly Matyko</span></div>
				<div className={homeStyles.textDeveloper}>Frontend / Backend  Developer</div>


				<div className={homeStyles.button}>
					<button id='send_email' onClick={getShowWindowSendMessage}>Send me Email</button>
					<button id='cv' onClick={handleDownload}>Download cv</button>
				</div>
			</div>

			<div className={homeStyles.socialMedia} >
				<div className={homeStyles.gitHubLogo} id='github' onClick={getFollowLink}>
					<svg viewBox="0 0 1024 1024" width="200" height="200" xmlns="http://www.w3.org/2000/svg" fill='white'>
						<path d="M512 0C229.23 0 0 229.23 0 512c0 226.09 146.51 417.55 349.63 485.56 25.56 4.71 34.95-11.11 34.95-24.71
								 0-12.27-.48-52.87-.73-95.91-142.23 30.91-172.21-61.43-172.21-61.43-23.25-59.06-56.71-74.76-56.71-74.76-46.41-31.71
								 3.51-31.07 3.51-31.07 51.36 3.62 78.42 52.77 78.42 52.77 45.62 78.21 119.72 55.6 148.99 42.52 4.64-33.04 17.86-55.6
								 32.49-68.38-113.54-12.92-233.06-56.77-233.06-252.65 0-55.81 19.96-101.44 52.66-137.22-5.3-12.92-22.82-64.99 5.04-135.54
								 0 0 42.94-13.73 140.67 52.4 40.79-11.34 84.58-17.02 128.04-17.21 43.44.19 87.22 5.87 128.04 17.21 97.68-66.13 140.56-52.4
								 140.56-52.4 28 70.55 10.5 122.62 5.2 135.54 32.77 35.78 52.57 81.41 52.57 137.22 0 196.28-119.72 239.63-233.48 252.31 18.35 
								 15.79 34.69 46.85 34.69 94.45 0 68.27-.63 123.33-.63 140.09 0 13.73 9.15 29.88 35.2 24.64C877.49 929.4 1024 738 1024 512 1024
								 229.23 794.77 0 512 0z" />
					</svg>
				</div>
				<div className={homeStyles.telegramLogo} id='telegram' onClick={getFollowLink}>
					<svg viewBox="0 0 256 256" width="200" height="200" xmlns="http://www.w3.org/2000/svg" fill='white'>
						<path d="M128 0C57.31 0 0 57.31 0 128s57.31 128 128 128 128-57.31 128-128S198.69 0 128 0zm60.38 85.64c-1.5 
								15.92-8 55.1-11.3 72.93-1.4 7.6-4.14 10.15-6.8 10.4-5.78.55-9.87-3.81-15.3-7.48-8.53-5.78-13.4-9.36-21.49-15.02-9.52-6.64-3.36-10.28
								2.1-16.3 1.44-1.6 26.41-24.19 26.91-26.27.06-.26.12-1.23-.46-1.74-.58-.51-1.42-.34-2.03-.2-2.19.5-37.02 23.55-42.07 27.14-4.46 
								3.21-8.85 4.8-12.73 4.71-4.19-.1-12.27-2.37-18.33-4.33-7.38-2.38-13.22-3.64-12.72-7.73.26-2.2 2.93-4.46 8.06-6.78 31.37-13.75 
								52.28-22.99 62.72-27.72 29.91-13.21 36.17-15.6 40.3-15.66 1.04-.02 3.37.24 4.85 1.46 1.23 1 1.56 2.35 1.71 3.32.13.95.3 3.1.13 
								4.93z" />
					</svg>
				</div>
				<div className={homeStyles.linkedinLogo} id='linkedin' onClick={getFollowLink}>
					<svg viewBox="0 0 448 512" width="200" height="200" xmlns="http://www.w3.org/2000/svg" fill='white'>
						<path d="M100.28 448H7.4V148.9h92.88zm-46.44-340a53.34 53.34 0 1 1 53.34-53.34 53.34 53.34 0 0 1-53.34 53.34zm384
								 340h-92.68V302.4c0-34.7-.7-79.3-48.34-79.3-48.4 0-55.84 37.8-55.84 76.8V448h-92.66V148.9h88.94v40.8h1.3c12.4-23.5
								 42.74-48.34 87.98-48.34 94 0 111.32 61.9 111.32 142.3V448z" />
					</svg>
				</div>
			</div>
		</>
	)
}

export default MainText;