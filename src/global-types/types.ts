import React from 'react';


export interface ShowAnimationDataProps {
	showAnimationData: {
		showOutside: boolean;
		showMiddle: boolean;
		showText: boolean;
		showNavbar: boolean;
	}
	messageData: {
		name: string,
		email: string,
		message: string
	};
	showWindowSendMessage: boolean;
	showWindowSentMessage: boolean | null;
	getMessageData: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	getFormMessageData: (event: React.FormEvent<HTMLFormElement>) => void;
	getShowWindowSendMessage: () => void;
	getFolowLink: (event: React.MouseEvent<HTMLElement>) => void;
	getHiddenWindowSendMessage: () => void;
	handleDownload: () => void;
	getShowWindowSentMessage: () => void;
}

export interface MainTextProps {
	getFolowLink: (event: React.MouseEvent<HTMLElement>) => void;
	getShowWindowSendMessage: () => void;
	handleDownload: () => void;
}

export interface SendMessageProps {
	messageData: {
		name: string,
		email: string,
		message: string
	};
	getMessageData: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	getFormMessageData: (event: React.FormEvent<HTMLFormElement>) => void;
	getHiddenWindowSendMessage: () => void;
	getShowWindowSentMessage: () => void;
}

