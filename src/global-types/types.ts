import React from 'react';

export interface showAnimationDataProps {
	showAnimationData: {
		showOutside: boolean;
		showMiddle: boolean;
		showText: boolean;
		showNavbar: boolean;
	}
	getFolowLink: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export interface linksType {
	github: string;
	telegram: string;
	linkedin: string;
}


// export type SocialId = 'github' | 'telegram' | 'linkedin';