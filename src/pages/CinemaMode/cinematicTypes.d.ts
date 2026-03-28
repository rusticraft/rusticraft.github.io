export interface Episode {
	episodeNumber: number;
	url: string;
	name: string;
	id: string;
}

export interface Season {
	seasonNumber: number;
	episodes: Episode[];
}

export interface Person {
	username: string;
	imageURL: string;
	seasons: Season[];
	color?: string;
}

export interface CinemaData {
	data: Person[];
};