
export declare type CharacterStatus = 'Alive' | 'Dead' | 'Uknown';

export declare type Character = {
	name: string;
	image: string;
	species: string
	status: CharacterStatus;
}

export declare type CharacterProps = {
	character: Character;
}
