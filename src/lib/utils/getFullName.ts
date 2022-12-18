export function getFullName(personObj: { firstName: string; surname: string; prefix?: string }) {
	const { firstName, surname, prefix } = personObj;
	return `${firstName}${prefix ? prefix + ' ' : ''} ${surname}`;
}
