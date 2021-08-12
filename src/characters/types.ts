
export declare type CharacterStatus = 'Alive' | 'Dead' | 'unknown';

export declare type Character = {
	name: string;
	image: string;
	species: string
	status: CharacterStatus;
	id: string;
	location?: Location;
}

export declare type CharacterProps = {
	character: Character;
}

export declare type CharacterListProps = {
	characters: Character[];
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
