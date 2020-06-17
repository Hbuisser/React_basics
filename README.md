# React basics

Simple react starter with the following config:

- React, ReactDOM
- Webpack 4
- Babel with es2015 and react presets
- Bootstrap
- work with `.js` or `.jsx` files

## Scripts

To start (usually on port `localhost:8080`):

```bash
yarn start
```

In case of "invalid host/origin header" error occurs when you inspect:

```bash
yarn start --disable-host-check
```

To lint all JavaScript files in the `src` folder:

```bash
yarn lint
```

To build and deploy your app to `gh-pages` branch on the GitHub repo:

```bash
yarn deploy
```
