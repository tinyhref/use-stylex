# use-stylex

##  Installation

```bash
npm install use-stylex
or
yarn add use-stylex
```

## Use It

```js
import * as stylex from '@stylexjs/stylex';
import { useStyleX } from 'use-stylex';

const styles = stylex.create({
  wrapper: {
    position: 'relative'
  },
  base: {
    display: 'flex',
    color: '#fff'
  },
  primary: {
    color: 'blue'
  }
})

const Component = () => {
  const { classes } = useStyleX(styles);

  return (
    <div
      className={classes.wrapper || classes.getClass('base', 'primary', 'absolute') || classes.tailwind('absolute')}
    >
      Component
    </div>
  )
}
```
