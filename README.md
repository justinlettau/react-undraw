[![NPM Version](https://badge.fury.io/js/react-undraw.svg)](https://badge.fury.io/js/react-undraw)
![CI](https://github.com/justinlettau/react-undraw/workflows/CI/badge.svg)

# React unDraw

React component for [unDraw illustrations](https://undraw.co/).

# Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Illustrations](#illustrations)
- [Development](#development)

# Features

- 🚀 Works with **any illustration** from unDraw.
- 🎨 **Customize colors** with props.
- 🎉 Written in **TypeScript**.
- 🎁 **Smaller bundles** by only including what you need.

# Installation

```bash
npm install react-undraw --save
```

# Usage

```jsx
import Undraw from 'react-undraw';

// optionally override default props
Undraw.defaultProps.primaryColor = 'darkblue';

<Undraw name="coding" />;
```

Props:

| Prop           | Type     | Description                                 | Default   |
| -------------- | -------- | ------------------------------------------- | --------- |
| `name`         | `string` | Illustration file name (without extension). | n/a       |
| `primaryColor` | `string` | Illustration primary color.                 | `#6c63ff` |
| `height`       | `string` | Illustration height.                        | `250px`   |

# Illustrations

**Bring your own illustrations!** To comply with the updated unDraw [license](https://undraw.co/license), we can't
bundle the illustrations with this package 😞 However, this means you can always use the latest illustrations! 😎

Here's what you need to do:

- Download any illustrations you want from [unDraw](https://undraw.co/illustrations).
  - No need to change the color before download, use `primaryColor` prop instead.
  - Optional: rename file to remove prefix/suffix (`undraw_barbecue_3x93.svg` => `barbecue.svg`).
  - The `name` prop will need to match your file name.
- Put SVG files in an `undraw` folder at the root of your project.
- Add `react-undraw-cli` to your `build` and/or `start` script:
  - `"prebuild": "react-undraw-cli"`
  - or ... `"build": "react-undraw-cli && react-scripts build"`

Example project structure:

```
package.json
src/
 ...
undraw/
  coding.svg
  hologram.svg
  ice_cream.svg
  ...
```

# Development

```
npm install
npm run build
```
