/**
 * Returns a copy of `item` object but with `key` property removed (immutable).
 */
export default function removeProp<TItem>(item: TItem, key: keyof TItem) {
  const { [key]: _toRemove, ...others } = item;
  return others;
}
