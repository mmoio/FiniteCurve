import { gql, DocumentNode } from '@apollo/client';

const characters = gql`
	query {
		characters(page: 1) {
			results {
				name
				species
				status
				image
				id
			}
		}
	}
`;

const character = (id: number): DocumentNode => gql`
	query {
		character(id: ${id}) {
			name
			species
			status
			image
			id
			location {
				name
			}
		}
	}
`;

export const query = {
	characters,
	character,
};
