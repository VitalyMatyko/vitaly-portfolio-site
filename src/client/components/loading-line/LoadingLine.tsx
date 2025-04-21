import loadingLineStyles from './LoadingLine.module.scss';

const LoadingLine = () => {
	return (
		<div className={loadingLineStyles.loading_line_container}>
			<div className={loadingLineStyles.loading_background_line}></div>
		</div>
	)
};

export default LoadingLine;