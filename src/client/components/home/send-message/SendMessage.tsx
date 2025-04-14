import { SendMessageProps } from '../../../../global-types/types';
import sendMessageStyles from './SendMessage.module.scss';

const SendMessage: React.FC<SendMessageProps> = ({ getHiddenWindowSendMessage }) => {
	return (
		<form action="/vitaly-pro-hub/send" method="POST" className={sendMessageStyles.send_message}>
			<div className={sendMessageStyles.text_message}>
				<div className={sendMessageStyles.closeWindow} onClick={getHiddenWindowSendMessage}>&times;</div>
				<div>
					<input type="text" name='name' placeholder='Name...' />
				</div>
				<div>
					<input type="text" name='email' placeholder='Email...' />
				</div>
				<div>
					<textarea name="message" id="" placeholder='Message...'></textarea>
				</div>
			</div>
			<button className={sendMessageStyles.button}>SEND</button>
		</form>
	)
};

export default SendMessage;