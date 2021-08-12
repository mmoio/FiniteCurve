import { gql, DocumentNode } from '@apollo/client';

const characters = (page: number): DocumentNode => gql`
	query {
		characters(page: ${page}) {
			results {
				name
				species
				status
				image
				id
			},
			info {
				next
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
