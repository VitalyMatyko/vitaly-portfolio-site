import React from 'react';


export interface ShowAnimationDataProps {
	showAnimationData: {
		showOutside: boolean;
		showMiddle: boolean;
		showText: boolean;
		showNavbar: boolean;
	}
	showWindowSendMessage: boolean;
	getShowWindowSendMessage: () => void;
	getFolowLink: (event: React.MouseEvent<HTMLElement>) => void;
	getHiddenWindowSendMessage: () => void;
}

export interface MainTextProps {
	getFolowLink: (event: React.MouseEvent<HTMLElement>) => void;
	getShowWindowSendMessage: () => void;
}

export interface SendMessageProps {
	getHiddenWindowSendMessage: () => void;
}

