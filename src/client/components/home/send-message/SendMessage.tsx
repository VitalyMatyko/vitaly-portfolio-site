import { SendMessageProps } from '../../../../global-types/types';
import sendMessageStyles from './SendMessage.module.scss';
import Tooltip from './tooltip/Tooltip';

const SendMessage: React.FC<SendMessageProps> = ({
	messageData,
	isSubmitting,
	validFormData,
	getMessageData,
	getFormMessageData,
	getHiddenWindowSendMessage,
}) => {
	return (
		<form onSubmit={(e) => { getFormMessageData(e) }} className={sendMessageStyles.send_message}>
			<div className={sendMessageStyles.text_message}>
				<div className={sendMessageStyles.closeWindow} onClick={getHiddenWindowSendMessage}>&times;</div>

				<div>
					<div className={sendMessageStyles.tooltip_name}>
						{validFormData.validName && <Tooltip validData='name' />}
					</div>
					<input className={validFormData.validName ? sendMessageStyles.uncorrectInput : ''} autoComplete='off' type="text" name='name' value={messageData.name} onChange={getMessageData} placeholder='Name...' />
				</div>

				<div>
					<div className={sendMessageStyles.tooltip_email}>
						{validFormData.validEmail && <Tooltip validData='email' />}
					</div>
					<input className={validFormData.validEmail ? sendMessageStyles.uncorrectInput : ''} autoComplete='off' type="text" name='email' value={messageData.email} onChange={getMessageData} placeholder='Email...' />
				</div>

				<div>
					<div className={sendMessageStyles.tooltip_message}>
						{validFormData.validMessage && <Tooltip validData='message' />}
					</div>
					<textarea className={validFormData.validMessage ? sendMessageStyles.uncorrectTextarea : ''} name="message" id="" value={messageData.message} onChange={getMessageData} placeholder='Message...'></textarea>
				</div>

			</div>
			<button type='submit' disabled={isSubmitting} className={sendMessageStyles.button}>{isSubmitting ? 'SEND...' : 'SEND'}</button>
		</form>
	)
};

export default SendMessage;