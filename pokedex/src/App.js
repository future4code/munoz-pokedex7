import React from 'react'
import { Router } from './router/Router'
import { PokedexGlobalState } from './global/PokedexGlobalState'

function App() {
  return (
      <PokedexGlobalState>
        <Router />
      </PokedexGlobalState>
  );
}

export default App;
