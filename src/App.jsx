
// import { useState } from 'react'

// import Welcome from './pages/Welcome'
// import BirthdayReveal from './pages/BirthdayReveal'
// import Memories from './pages/Memories'
// import Letter from './pages/Letter'

// import './App.css'

// function App() {
//   const [currentPage, setCurrentPage] = useState('welcome')

//   return (
//     <>
//       {currentPage === 'welcome' && (
//         <Welcome
//           onOpen={() => setCurrentPage('reveal')}
//         />
//       )}

//       {currentPage === 'reveal' && (
//         <BirthdayReveal
//           onContinue={() => setCurrentPage('memories')}
//         />
//       )}

//       {currentPage === 'memories' && (
//         <Memories
//           onContinue={() => setCurrentPage('letter')}
//         />
//       )}

//       {currentPage === 'letter' && (
//         <Letter
//           onBack={() => setCurrentPage('memories')}
//         />
//       )}
//     </>
//   )
// }

// export default App


import { useState } from 'react'

import Welcome from './pages/Welcome'
import BirthdayReveal from './pages/BirthdayReveal'
import Memories from './pages/Memories'
import Letter from './pages/Letter'
import PhotoAlbum from './pages/PhotoAlbum'

import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('welcome')

  return (
    <>
      {currentPage === 'welcome' && (
        <Welcome
          onOpen={() => setCurrentPage('reveal')}
        />
      )}

      {currentPage === 'reveal' && (
        <BirthdayReveal
          onContinue={() => setCurrentPage('memories')}
        />
      )}

      {currentPage === 'memories' && (
        <Memories
          onContinue={() => setCurrentPage('letter')}
        />
      )}

      {currentPage === 'letter' && (
        <Letter
          onContinue={() => setCurrentPage('album')}
        />
      )}

      {currentPage === 'album' && (
        <PhotoAlbum
          onBack={() => setCurrentPage('letter')}
        />
      )}
    </>
  )
}

export default App
