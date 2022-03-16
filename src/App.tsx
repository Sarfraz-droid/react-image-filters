import React, { useState, useEffect } from 'react';

import Filters from './lib/Filters';
import './App.css';
interface AppProps {}

function App({}: AppProps) {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default App;
