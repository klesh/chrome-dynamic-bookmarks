/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Omits the key from a type if it exists in this type, otherwise it just returns back the type.
 *
 * This is done in order to avoid unecessary mapping over union types - https://github.com/Microsoft/TypeScript/issues/28339
 */
export type OptionalOmit<T, K extends keyof any> = K extends keyof T
  ? Omit<T, K>
  : T;

/**
 * Makes all of the properties and sub-properties optional
 */
export type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? RecursivePartial<U>[]
    : // eslint-disable-next-line @typescript-eslint/ban-types
    T[P] extends object
    ? RecursivePartial<T[P]>
    : T[P];
};

export type GenericFunction = (...args: any[]) => any | undefined;
export type GenericObject = Record<string, any>;
