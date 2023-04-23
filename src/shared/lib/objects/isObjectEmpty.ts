export default function isObjectEmpty(obj: Object) {
  return !obj || Object.keys(obj).length === 0;
}
