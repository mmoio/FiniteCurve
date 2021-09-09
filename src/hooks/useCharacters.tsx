import { useQuery } from '@apollo/react-hooks';
import { query } from '../api/queries';
import { CharactersQuery, UpdateCharactersQuery } from '../characters/types';

function useCharacters() {
	const { data, loading, fetchMore } = useQuery(query.characters);

	const loadMore = () => {
		if (data.characters.info.next) {
			return fetchMore({
				variables: {
					page: data.characters.info.next,
				},
				updateQuery: onUpdate,
			});
		}
	};

	const onUpdate: UpdateCharactersQuery = (prev, { fetchMoreResult }): CharactersQuery => {
		if (!fetchMoreResult) return prev;
		const { info, results } = fetchMoreResult.characters;
		const merged = [...prev.characters.results, ...results];
		return { characters: { info, results: merged } };
	};

	return {
		characters: data?.characters?.results || [],
		hasMore: data?.characters?.info?.next != null,
		loading,
		loadMore,
	};
}
export default useCharacters;
