import { SendMessageProps } from '../../../../global-types/types';
import sendMessageStyles from './SendMessage.module.scss';

const SendMessage: React.FC<SendMessageProps> = ({ getHiddenWindowSendMessage }) => {
	return (
		<form className={sendMessageStyles.send_message}>
			<div className={sendMessageStyles.text_message}>
				<div className={sendMessageStyles.closeWindow} onClick={getHiddenWindowSendMessage}>&times;</div>
				<div>
					<input type="text" placeholder='Input your email' />
				</div>
				<div>
					<textarea name="" id="" placeholder='Input your message'></textarea>
				</div>
			</div>
			<button className={sendMessageStyles.button}>SEND</button>
		</form>
	)
};

export default SendMessage;