import * as stylex from '@stylexjs/stylex';
import { tailwindStyles } from './tailwind';

import type { Tailwind } from './types';

type UseStyleXParams = {
  isWithAttrs?: boolean;
};

export type Classes<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any ? ((...args: Parameters<T[K]>) => {
    [key: string]: string
  }) : string;
} & {
  getProps: (...args: (keyof T | T[keyof T] | Tailwind)[]) => any;
  getClass: (...args: (keyof T | T[keyof T] | Tailwind)[]) => string;
  tailwind: (...args: Tailwind[]) => string;
};

export const useStyleX = <T extends Record<string, any>>(xStyles: T, params: UseStyleXParams = {}): {
  classes: Classes<T>
} => {
  const { isWithAttrs = false } = params;

  const classKey = isWithAttrs ? 'class' : 'className';
  const funcKey = isWithAttrs ? 'attrs' : 'props';

  const classes = {} as Partial<Classes<T>>;

  Object.keys(xStyles).forEach((key) => {
    const value = xStyles[key];

    if (typeof value === 'function') {
      (classes as any)[key as keyof T] = (...args: any[]) => {
        return (stylex as any)[funcKey](value(...args));
      };
    } else {
      const props = (stylex as any)[funcKey](value);
      classes[key as keyof T] = props[classKey];
    }
  });

  const getProps = ((...args: (keyof T | T[keyof T] | Tailwind)[]): string => {
    const styles = args.map((arg) => {
      if (typeof arg === 'string') {
        if (tailwindStyles[arg as Tailwind]) {
          return tailwindStyles[arg as Tailwind]
        }

        return xStyles[arg];
      }

      return arg;
    });

    return (stylex as any)[funcKey](...styles)
  }) as Classes<T>['getProps'];

  classes.getClass = ((...args: (keyof T | T[keyof T] | Tailwind)[]): string => {
    const props: any = getProps(...args);
    return props[classKey];
  }) as Classes<T>['getClass'];

  classes.tailwind = ((...args: Tailwind[]): string => {
    const styles = args.map((arg) => {
      return tailwindStyles[arg];
    });

    const props = (stylex as any)[funcKey](...styles);
    return props[classKey];
  }) as Classes<T>['tailwind'];

  classes.getProps = getProps;

  return {
    classes: classes as Classes<T>
  }
};

export default useStyleX