[![logo](static/logo.svg)](https://sarfraz-droid.github.io/react-filter/)

# React Image Filters

Lightweight library for using filters in react

**You can checkout demo here**

[![Edit react-image-filters-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-image-filters-example-9i2bzl?autoresize=1&fontsize=14&hidenavigation=1&theme=light)

## Installation

```
    npm install react-image-filters
```

## Usage

```js
// Import by
import Filters from 'react-image-filters';
```

```js
<Filters grayscale={1} blur={0}>
  <div>
    <img
      src="https://picsum.photos/200"
      alt="test"
      style={{
        borderRadius: '1px',
      }}
    />
  </div>
</Filters>
```
