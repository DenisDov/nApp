/**
 * Capitalizes the first letter of a string.
 *
 * @param {string} n Desired string
 * @param {boolean} lowerRest Omit the lowerRest argument to keep the rest of the string intact, or set it to true to convert to lowercase.
 * @return {string} Capitalized string
 *
 * @example
 *
 *	capitalize('fooBar'); // 'FooBar'
 *	capitalize('fooBar', true); // 'Foobar'
 */
const capitalize = ([first, ...rest], lowerRest = false) =>
	first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''));

export default capitalize;
