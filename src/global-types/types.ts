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
	validFormData: {
		validName: boolean | null;
		validEmail: boolean | null;
		validMessage: boolean | null;
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
	validFormData: {
		validName: boolean;
		validEmail: boolean;
		validMessage: boolean;
	};
	getMessageData: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	getFormMessageData: (event: React.FormEvent<HTMLFormElement>) => void;
	getHiddenWindowSendMessage: () => void;
	getShowWindowSentMessage: () => void;
};

export interface TooltipProps {
	validData: 'name' | 'email' | 'message';
}


export type ValidFormDataType = {
	validName: boolean | null;
	validEmail: boolean | null;
	validMessage: boolean | null;
};

