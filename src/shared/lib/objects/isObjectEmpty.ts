export default function isObjectEmpty(obj: Record<string, unknown>) {
  return !obj || Object.keys(obj).length === 0;
}
