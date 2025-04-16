
import sentMessageStyles from './SentMessage.module.scss';

const UnCorrectSentMessage = () => {
	return (
		<div className={sentMessageStyles.sent_message_window}>
			<div className={sentMessageStyles.sent_message_svg}>
				<svg width="48" height="48" viewBox="0 0 48 48" fill="none">
					<circle cx="24" cy="24" r="22" stroke="#F44336" strokeWidth="4" fill="none" />
					<path d="M16 16L32 32" stroke="#F44336" strokeWidth="4" strokeLinecap="round" />
					<path d="M32 16L16 32" stroke="#F44336" strokeWidth="4" strokeLinecap="round" />
				</svg>
			</div>
			<div className={sentMessageStyles.sent_message_text}>
				<span >Your message wasn't sent.</span>
				<span >Try another time.</span>
			</div>
		</div >
	);
};

export default UnCorrectSentMessage;