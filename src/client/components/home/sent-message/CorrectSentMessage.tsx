import sentMessageStyles from './SentMessage.module.scss';

const CorrectSentMessage = () => {
	return (
		<div className={sentMessageStyles.sent_message_window}>
			<div className={sentMessageStyles.sent_message_svg}>
				<svg width="48" height="48" viewBox="0 0 48 48" fill="none">
					<circle cx="24" cy="24" r="22" stroke="#4CAF50" strokeWidth="4" fill="none" />
					<path
						d="M16 24L22 30L34 18"
						stroke="#4CAF50"
						strokeWidth="4"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</div>
			<div>
				<span className={sentMessageStyles.sent_message_text}>Your message sent successfully.</span>
			</div>
		</div>
	);
};

export default CorrectSentMessage;