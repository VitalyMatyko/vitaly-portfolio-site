import { SendMessageProps } from '../../../../global-types/types';
import sendMessageStyles from './SendMessage.module.scss';
import Tooltip from './tooltip/Tooltip';

const SendMessage: React.FC<SendMessageProps> = ({
	messageData,
	validFormData,
	getMessageData,
	getFormMessageData,
	getShowWindowSentMessage,
	getHiddenWindowSendMessage,
}) => {
	return (
		<form onSubmit={(e) => { getFormMessageData(e); getShowWindowSentMessage() }} className={sendMessageStyles.send_message}>
			<div className={sendMessageStyles.text_message}>
				<div className={sendMessageStyles.closeWindow} onClick={getHiddenWindowSendMessage}>&times;</div>

				<div>
					<div className={sendMessageStyles.tooltip_name}>
						{!validFormData.validName && <Tooltip validData='name' />}
					</div>
					<input autoComplete='off' type="text" name='name' value={messageData.name} onChange={getMessageData} placeholder='Name...' />
				</div>

				<div>
					<div className={sendMessageStyles.tooltip_email}>
						{!validFormData.validEmail && <Tooltip validData='email' />}
					</div>
					<input autoComplete='off' type="text" name='email' value={messageData.email} onChange={getMessageData} placeholder='Email...' />
				</div>

				<div>
					<div className={sendMessageStyles.tooltip_message}>
						{!validFormData.validMessage && <Tooltip validData='message' />}
					</div>
					<textarea name="message" id="" value={messageData.message} onChange={getMessageData} placeholder='Message...'></textarea>
				</div>

			</div>
			<button type='submit' className={sendMessageStyles.button}>SEND</button>
		</form>
	)
};

export default SendMessage;

{/* <div className={sendMessageStyles.tooltip}>
					{!validFormData.validName && <Tooltip />}
				</div> */}