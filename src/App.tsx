import React, { useState, useEffect } from 'react';

import Filters from './lib/Filters';
import './App.css';
interface AppProps {}

function App({}: AppProps) {
  return (
    <React.Fragment>
      <Filters
        dropShadow={{
          x: 0,
          y: 0,
          blur: 10,
          color: '#000050',
        }}
      >
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
    </React.Fragment>
  );
}

export default App;
