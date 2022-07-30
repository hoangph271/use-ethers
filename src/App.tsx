import { AppNftProvider } from './providers/NftProvider'
import { Gallery } from './components/Gallery'

import './App.css'

function App () {
  return (
    <div className="App">
      <AppNftProvider>
        <Gallery />
      </AppNftProvider>
    </div>
  )
}

export default App
