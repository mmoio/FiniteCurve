export enum CharacterStatus {
	ALIVE = 'Alive',
	DEAD = 'Dead',
	UNKOWN = 'unknown'
}

export declare type Character = {
	name: string;
	image: string;
	species: string
	status: CharacterStatus;
	id: string;
	location: Location;
	episode: Episode[];
}

export declare type Episode = {
	name: string;
	episode: string;
}

export declare type CharacterProps = {
	character: Character;
}

export declare type CharacterListProps = {
	characters: Character[];
	onEndReached: () => void;
	onPress: (id: string) => void;
	loading: boolean;
}

export declare type ProfileProps = {
	character: Character;
}

export declare type Location = {
	id: string;
	name: string;
	type: string;
	dimension: string;
	residents: Character[];
	created: string;
}

export declare type Info = {
	next: number,
}

export declare type CharactersQuery = {
	characters: {
		results: Character[],
		info: Info
	}
}

export declare type UpdateCharactersQuery = (prev: CharactersQuery, options: {
	fetchMoreResult?: CharactersQuery;
}) => CharactersQuery

