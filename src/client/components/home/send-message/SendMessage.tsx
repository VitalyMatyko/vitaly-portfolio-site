import { SendMessageProps } from '../../../../global-types/types';
import sendMessageStyles from './SendMessage.module.scss';

const SendMessage: React.FC<SendMessageProps> = ({
	messageData,
	getMessageData,
	getFormMessageData,
	getShowWindowSentMessage,
	getHiddenWindowSendMessage,
}) => {
	return (
		<form onSubmit={getFormMessageData} action="/vitaly-pro-hub/send" method="POST" className={sendMessageStyles.send_message}>
			<div className={sendMessageStyles.text_message}>
				<div className={sendMessageStyles.closeWindow} onClick={getHiddenWindowSendMessage}>&times;</div>
				<div>
					<input type="text" name='name' value={messageData.name} onChange={getMessageData} placeholder='Name...' />
				</div>
				<div>
					<input type="text" name='email' value={messageData.email} onChange={getMessageData} placeholder='Email...' />
				</div>
				<div>
					<textarea name="message" id="" value={messageData.message} onChange={getMessageData} placeholder='Message...'></textarea>
				</div>
			</div>
			<button onClick={getShowWindowSentMessage} type='submit' className={sendMessageStyles.button}>SEND</button>
		</form>
	)
};

export default SendMessage;