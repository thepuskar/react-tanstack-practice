export type Accessor<T> = () => T;

function simpleMap(
  props: { each: any[]; children: Function; fallback?: JSX.Element | string },
  wrap: (fn: Function, item: any, i: number) => string
) {
  const list = props.each || [],
    len = list.length,
    fn = props.children;
  if (len) {
    let mapped = Array(len);
    for (let i = 0; i < len; i++) mapped[i] = wrap(fn, list[i], i);
    return mapped;
  }
  return props.fallback;
}

export function For<T>(props: {
  each: T[];
  fallback?: JSX.Element | string;
  children: (item: T, index: () => number) => JSX.Element | string;
}) {
  return simpleMap(props, (fn, item, i) => fn(item, () => i));
}

export function Show<T>(props: {
  when: T | undefined | null | false;
  keyed?: boolean;
  fallback?: JSX.Element | string;
  children:
    | JSX.Element
    | string
    | ((item: NonNullable<T> | Accessor<NonNullable<T>>) => string);
}): JSX.Element | string {
  let c:
    | JSX.Element
    | string
    | ((item: NonNullable<T> | Accessor<NonNullable<T>>) => string);
  return props.when
    ? typeof (c = props.children) === "function"
      ? c(props.keyed ? props.when! : () => props.when as any)
      : c
    : props.fallback || "";
}
