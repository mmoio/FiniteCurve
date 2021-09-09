import { useQuery } from '@apollo/react-hooks';
import { query } from '../api/queries';

function useCharacters() {
	const { data, loading, fetchMore } = useQuery(query.characters);

	const loadMore = () => {
		if (data.characters.info.next)
			return fetchMore({
				variables: {
					page: data.characters.info.next,
				},
				updateQuery: onUpdate
			});
	};

	const onUpdate = (prev, { fetchMoreResult }) => {
		if (!fetchMoreResult) return prev;
		fetchMoreResult.characters.results = [...prev.characters.results, ...fetchMoreResult.characters.results];
		return fetchMoreResult;
	};


	return {
		characters: data?.characters?.results || [],
		loading,
		loadMore,
	};
}
export default useCharacters;
