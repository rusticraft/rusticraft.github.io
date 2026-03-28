export interface episode {
	episodeNumber: number;
	url: string;
	name: string;
	id: string;
}

export interface season {
	seasonNumber: number;
	episodes: episode[];
}

export interface person {
	username: string;
	imageURL: string;
	seasons: season[];
}

export interface cinemaData {
	data: person[];
};