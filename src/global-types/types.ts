import React from 'react';


// The ShowAnimationDataProps interface describes the structure of props that the component should receive.
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
	isSubmitting: boolean;
	showWindowSendMessage: boolean;
	showWindowSentMessage: boolean | null;
	getMessageData: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	getFormMessageData: (event: React.FormEvent<HTMLFormElement>) => void;
	getShowWindowSendMessage: () => void;
	getFollowLink: (event: React.MouseEvent<HTMLElement>) => void;
	getHiddenWindowSendMessage: () => void;
	handleDownload: () => void;
};

// The MainTextProps interface defines the props that the MainText component should receive.
export interface MainTextProps {
	getFollowLink: (event: React.MouseEvent<HTMLElement>) => void;
	getShowWindowSendMessage: () => void;
	handleDownload: () => void;
};

// The SendMessageProps interface describes props, the SendMessage component is a form for sending a message.
export interface SendMessageProps {
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
	isSubmitting: boolean;
	getMessageData: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	getFormMessageData: (event: React.FormEvent<HTMLFormElement>) => void;
	getHiddenWindowSendMessage: () => void;
};

// The TooltipProps interface describes the props for the Tooltip component, which displays a tooltip next to form fields.
export interface TooltipProps {
	validData: 'name' | 'email' | 'message';
};

// This ValidFormDataType is used to describe the validation state of form data.
export type ValidFormDataType = {
	validName: boolean | null;
	validEmail: boolean | null;
	validMessage: boolean | null;
};

