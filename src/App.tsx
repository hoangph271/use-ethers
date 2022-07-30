import { AppNftProvider } from './providers/NftProvider'
import { Gallery } from './components/Gallery'

import './App.css'

// const options = { method: 'GET' }
// fetch('https://api.opensea.io/api/v1/collection/doodles-official', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err))

// const options = { method: 'GET', headers: { Accept: 'application/json' } }
// fetch('https://api.opensea.io/api/v1/assets?collection=canon-ftb-ql&cursor=LXBrPTI3NjE3NDc5Ng==', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err))

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
