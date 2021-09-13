import { gql, DocumentNode } from '@apollo/client';

const characters = gql`
	query MoreCharacters($page: Int) {
		characters(page: $page) {
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
			episode {
				name
				episode
			}
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
