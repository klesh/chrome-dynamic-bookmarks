/**
 * Converts `{key1:value1, key2:value2}` to `"key1=value1&key2=value2"`
 * @param filters - query parameters
 */
export default function queryStringify(
  filters: Record<string, unknown> = {}
): string {
  let query = "";
  for (const filterName in filters) {
    if (!filters[filterName]) continue;
    const keyValPair = `${filterName}=${filters[filterName]}`;
    if (query) {
      query += "&";
    }
    query += keyValPair;
  }
  return query;
}
