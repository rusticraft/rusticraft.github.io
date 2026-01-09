export type langs = 'EN' /* | 'RO' */;
export type Dictionary = Record<langs, Record<keys, string>>;
export type keys = 'HomeButton' | 'People' | 'Season' | 'UploadOrder' | 'JoinServer';

export const defaultDictionary: Dictionary = {
	EN: {
		HomeButton: 'Home',
		People: 'People',
		Season: 'Season',
		UploadOrder: 'Upload Order',
		JoinServer: 'Join Server Here',
	},
};

export function getTranslation(
	key: keys,
	lang: langs = 'EN',
	dictionary: Dictionary = defaultDictionary
) {
	if (!dictionary[lang]) {
		return dictionary.EN[key];
	}
	return dictionary[lang][key];
}
