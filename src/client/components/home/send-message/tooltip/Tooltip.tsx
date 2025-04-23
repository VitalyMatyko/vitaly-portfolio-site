import { TooltipProps } from '../../../../../global-types/types';
import tooltipStyles from './Tooltip.module.scss';

const tooltipObject = {
	name: 'Must include letters, numbers, ".", "-", or "_" (3–10 characters)',
	email: 'Must include ".", "-", "+", "_", "%" (valid email format)',
	message: 'Must not contain: "(", ")", "[", "]", "<", ">" (2–500 characters)',
};


const Tooltip: React.FC<TooltipProps> = ({ validData }) => {
	return (
		<div className={tooltipStyles.tooltip_container}>
			<div className={tooltipStyles.triangle}></div>
			<div className={tooltipStyles.tooltip_text}>
				<div>{tooltipObject[validData]}</div>
			</div>
		</div>
	)
};

export default Tooltip;