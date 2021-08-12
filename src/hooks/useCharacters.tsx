import { useQuery } from '@apollo/react-hooks';
import { query } from '../api/queries';
import {useState} from 'react';
// ...
function useCharacters() {
	const [ page, setPage ] = useState(1);
	const { data, loading, fetchMore } = useQuery(query.characters(page));

	if (loading) return { loading, characters: [] };

	const loadMore = () => {
		setPage(data.characters.info.next);

		return fetchMore({
			query: query.characters(page),
		});
	};

	return {
		characters: data.characters.results,
		hasNextPage: data.characters.next > 0,
		loading,
		loadMore,
	};
}
export default useCharacters;
