import Denque from "denque";

export default class Queue<T = unknown> {
  _denque: Denque<T>;
  constructor(array: T[] = []) {
    this._denque = new Denque<T>(array);
  }
  enqueue(item: T) {
    this._denque.unshift(item);
  }
  dequeue(): T {
    return this._denque.pop();
  }
  clear(): void {
    this._denque.clear();
  }
  isEmpty(): boolean {
    return this._denque.isEmpty();
  }
  toArray(): T[] {
    return this._denque.toArray();
  }
}
