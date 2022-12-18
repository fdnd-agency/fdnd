export function gql(query: string, variables?: any) {
	return {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		},
		body: JSON.stringify({ query, variables })
	};
}
