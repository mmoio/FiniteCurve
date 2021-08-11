
export declare type CharacterStatus = 'Alive' | 'Dead' | 'Uknown';

export declare type Character = {
	name: string;
	image: string;
	species: string
	status: CharacterStatus;
	id: string;
}

export declare type CharacterProps = {
	character: Character;
}

export declare type CharacterListProps = {
	characters: Character[];
}
