import homeStyles from './Home.module.scss';
import { ShowAnimationDataProps } from '../../../global-types/types';
import MainText from './text/MainText';
import SendMessage from './send-message/SendMessage';
import AnimationStyles from '../../../global-styles/Animation.module.scss';
import CorrectSentMessage from './sent-message/CorrectSentMessage';



const Home: React.FC<ShowAnimationDataProps> = ({
	messageData,
	validFormData,
	isSubmitting,
	showAnimationData,
	showWindowSendMessage,
	showWindowSentMessage,
	getFollowLink,
	getMessageData,
	handleDownload,
	getFormMessageData,
	getShowWindowSendMessage,
	getHiddenWindowSendMessage }) => {
	return (
		<div className={homeStyles.main_container}>
			<div className={homeStyles.main_animation}>

				<div className={showAnimationData.showOutside
					? AnimationStyles.visible_triangle_animation
					: AnimationStyles.hidden_animation}>
					<div className={`${homeStyles.outside_animation} ${homeStyles.rotate_clock_wise}`}>
						<div className={homeStyles.outside_triangle_top}></div>
						<div className={homeStyles.outside_triangle_bottom}></div>
						<div className={homeStyles.outside_triangle_left}></div>
						<div className={homeStyles.outside_triangle_right}></div>
						<div className={homeStyles.outside_smallLeft_triangle_top}></div>
						<div className={homeStyles.outside_smallRight_triangle_top}></div>
						<div className={homeStyles.outside_smallLeft_triangle_bottom}></div>
						<div className={homeStyles.outside_smallRight_triangle_bottom}></div>
					</div>
				</div>

				<div className={showAnimationData.showMiddle
					? AnimationStyles.visible_triangle_animation
					: AnimationStyles.hidden_animation}>
					<div className={`${homeStyles.middle_animation} ${homeStyles.rotate_counter_clock_wise}`}>
						<div className={homeStyles.middle_triangle_top}></div>
						<div className={homeStyles.middle_triangle_bottom}></div>
						<div className={homeStyles.middle_triangle_left}></div>
						<div className={homeStyles.middle_triangle_right}></div>
						<div className={homeStyles.middle_smallLeft_triangle_top}></div>
						<div className={homeStyles.middle_smallRight_triangle_top}></div>
						<div className={homeStyles.middle_smallLeft_triangle_bottom}></div>
						<div className={homeStyles.middle_smallRight_triangle_bottom}></div>
					</div>
				</div>

				<div className={showAnimationData.showText
					? AnimationStyles.visible_triangle_animation
					: AnimationStyles.hidden_animation}>
					<div className={homeStyles.text}>
						{showWindowSendMessage
							? (<SendMessage
								messageData={messageData}
								isSubmitting={isSubmitting}
								validFormData={validFormData}
								getMessageData={getMessageData}
								getFormMessageData={getFormMessageData}
								getHiddenWindowSendMessage={getHiddenWindowSendMessage} />)
							: showWindowSentMessage === true
								? (<CorrectSentMessage />)
								: (<MainText
									getFollowLink={getFollowLink}
									handleDownload={handleDownload}
									getShowWindowSendMessage={getShowWindowSendMessage} />)}
					</div>
				</div>

			</div>
		</div >
	)
};

export default Home;