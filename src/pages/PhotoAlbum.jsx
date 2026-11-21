// import { useState, useRef } from 'react'

// const photos = [
//   {
//     image: 'photo1.jpeg',
//     caption: 'A beautiful smile ♡',
//   },
//   {
//     image: 'photo2.jpeg',
//     caption: 'A moment to remember',
//   },
//   {
//     image: 'photo3.jpeg',
//     caption: 'Simply wonderful',
//   },
//   {
//     image: 'photo4.jpeg',
//     caption: 'Keep shining, Chongee!',
//   },
//   {
//     image: 'Smiling Plaza Portrait with Palms.png',
//     caption: 'A picture-perfect moment',
//   },
//   {
//     image: 'Smiling Woman in Green Halter Top.png',
//     caption: 'Stay beautiful, always',
//   },
//   {
//     image: 'Smiling Woman with Glasses Cutout.png',
//     caption: 'One smile, a thousand memories ♡',
//   },
// ]

// function PhotoAlbum({ onBack }) {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [direction, setDirection] = useState('next')
//   const [isAnimating, setIsAnimating] = useState(false)
//   const touchStartX = useRef(0)

//   const basePath = import.meta.env.BASE_URL

//   const imagePath = (filename) =>
//     encodeURI(`${basePath}photos/${filename}`)

//   const changePhoto = (newIndex) => {
//     if (
//       newIndex < 0 ||
//       newIndex >= photos.length ||
//       isAnimating ||
//       newIndex === currentIndex
//     ) return

//     setDirection(newIndex > currentIndex ? 'next' : 'prev')
//     setIsAnimating(true)
//     setCurrentIndex(newIndex)

//     setTimeout(() => {
//       setIsAnimating(false)
//     }, 550)
//   }

//   const handleTouchStart = (e) => {
//     touchStartX.current = e.touches[0].clientX
//   }

//   const handleTouchEnd = (e) => {
//     const difference =
//       touchStartX.current - e.changedTouches[0].clientX

//     if (Math.abs(difference) < 45) return

//     if (difference > 0) {
//       changePhoto(currentIndex + 1)
//     } else {
//       changePhoto(currentIndex - 1)
//     }
//   }

//   const currentPhoto = photos[currentIndex]

//   return (
//     <main className="photo-album-page">

//       <div className="album-stars">✦　·　✧　·　✦</div>

//       {/* Hanging bouquet decorations */}
//       <div className="album-decor">

//         {/* LEFT - SUNFLOWER BOUQUET */}
//         <div className="album-bouquet album-sunflower">

//           <div className="album-bouquet-string"></div>

//           <span className="album-bouquet-ribbon">
//             🎀
//           </span>

//           <img
//             src={imagePath(
//               'Vibrant Sunflower Bouquet with Burlap Bow-1.png'
//             )}
//             alt="Beautiful sunflower bouquet"
//           />

//         </div>

//         {/* RIGHT - RED AND PINK ROSE BOUQUET */}
//         <div className="album-bouquet album-roses">

//           <div className="album-bouquet-string"></div>

//           <span className="album-bouquet-ribbon">
//             🎀
//           </span>

//           <img
//             src={imagePath(
//               'Romantic Red and Pink Rose Bouquet-2.png'
//             )}
//             alt="Beautiful red and pink rose bouquet"
//           />

//         </div>

//       </div>

//       {/* Album heading */}
//       <header className="album-heading">

//         <p className="album-eyebrow">
//           A LITTLE COLLECTION SAVED
//         </p>

//         <h1>Little Photo Album ♡</h1>

//         <p>
//           Every picture holds a beautiful memory.
//         </p>

//       </header>

//       {/* Photo book */}
//       <section
//         className="album-book"
//         onTouchStart={handleTouchStart}
//         onTouchEnd={handleTouchEnd}
//       >

//         <div
//           className={`album-photo-frame ${
//             isAnimating ? `album-${direction}` : ''
//           }`}
//           key={currentIndex}
//         >

//           <div className="album-photo-inner">

//             <img
//               src={imagePath(currentPhoto.image)}
//               alt={currentPhoto.caption}
//               className="album-photo"
//             />

//           </div>

//           <p className="album-photo-caption">
//             {currentPhoto.caption}
//           </p>

//         </div>

//       </section>

//       {/* Photo counter */}
//       <div className="album-counter">

//         <span>
//           {String(currentIndex + 1).padStart(2, '0')}
//         </span>

//         <div className="album-progress">

//           <div
//             className="album-progress-fill"
//             style={{
//               width: `${((currentIndex + 1) / photos.length) * 100}%`,
//             }}
//           />

//         </div>

//         <span>
//           {String(photos.length).padStart(2, '0')}
//         </span>

//       </div>

//       {/* Navigation */}
//       <div className="album-controls">

//         <button
//           className="album-nav-button"
//           onClick={() => changePhoto(currentIndex - 1)}
//           disabled={currentIndex === 0 || isAnimating}
//         >
//           ← Previous
//         </button>

//         <button
//           className="album-nav-button"
//           onClick={() => changePhoto(currentIndex + 1)}
//           disabled={
//             currentIndex === photos.length - 1 || isAnimating
//           }
//         >
//           Next →
//         </button>

//       </div>

//       <p className="album-swipe-hint">
//         ♡ Swipe to turn the pages ♡
//       </p>

//       {/* Final birthday message */}
//       {currentIndex === photos.length - 1 && (

//         <div className="album-ending">

//           <h2>And that's not all... ♡</h2>

//           <p>
//             May your life always be filled with smiles,
//             happiness and beautiful memories.
//           </p>

//           <p className="album-ending-signature">
//             With lots of wishes, just for you.
//             <br />
//             — Aniket ❤️
//           </p>

//         </div>

//       )}

//       {/* Back button */}
//       <button
//         className="album-back-button"
//         onClick={onBack}
//       >
//         ← Back to your letter
//       </button>

//     </main>
//   )
// }

// export default PhotoAlbum



import { useState, useRef } from 'react'

const photos = [
  {
    image: 'photo1.jpeg',
    caption: 'A beautiful smile ♡',
  },
  {
    image: 'photo2.jpeg',
    caption: 'Stay beautiful, always',
  },
  {
    image: 'photo3.jpeg',
    caption: 'Simply wonderful',
  },
  {
    image: 'photo4.jpeg',
    caption: 'Keep shining, Chongee!',
  },
  {
    image: 'Smiling Plaza Portrait with Palms.png',
    caption: 'Be Happy, always ♡',
  },
  {
    image: 'Smiling Woman in Green Halter Top.png',
    caption: 'Stay beautiful, always',
  },
  {
    image: 'Smiling Woman with Glasses Cutout.png',
    caption: 'Keep Smiling alyways ♡',
  },
]

function PhotoAlbum({ onBack }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [turningToIndex, setTurningToIndex] = useState(null)
  const [direction, setDirection] = useState('next')
  const [isAnimating, setIsAnimating] = useState(false)

  const touchStartX = useRef(0)
  const basePath = import.meta.env.BASE_URL

  const imagePath = (filename) =>
    encodeURI(`${basePath}photos/${filename}`)

  // Realistic page-turn navigation
  const changePhoto = (newIndex) => {
    if (
      newIndex < 0 ||
      newIndex >= photos.length ||
      isAnimating ||
      newIndex === currentIndex
    ) return

    setDirection(
      newIndex > currentIndex ? 'next' : 'prev'
    )

    setTurningToIndex(newIndex)
    setIsAnimating(true)

    setTimeout(() => {
      setCurrentIndex(newIndex)
      setTurningToIndex(null)
      setIsAnimating(false)
    }, 850)
  }

  // Mobile swipe support
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    if (isAnimating) return

    const difference =
      touchStartX.current - e.changedTouches[0].clientX

    if (Math.abs(difference) < 45) return

    if (difference > 0) {
      changePhoto(currentIndex + 1)
    } else {
      changePhoto(currentIndex - 1)
    }
  }

  const currentPhoto = photos[currentIndex]

  const nextPhoto =
    turningToIndex !== null
      ? photos[turningToIndex]
      : currentPhoto

  return (
    <main className="photo-album-page">

      <div className="album-stars">
        ✦　·　✧　·　✦
      </div>

      {/* Hanging bouquet decorations */}
      <div className="album-decor">

        {/* Left - Sunflower bouquet */}
        <div className="album-bouquet album-sunflower">

          <div className="album-bouquet-string"></div>

          <span className="album-bouquet-ribbon">
            🎀
          </span>

          <img
            src={imagePath(
              'Vibrant Sunflower Bouquet with Burlap Bow-1.png'
            )}
            alt="Beautiful sunflower bouquet"
          />

        </div>

        {/* Right - Rose bouquet */}
        <div className="album-bouquet album-roses">

          <div className="album-bouquet-string"></div>

          <span className="album-bouquet-ribbon">
            🎀
          </span>

          <img
            src={imagePath(
              'Romantic Red and Pink Rose Bouquet-2.png'
            )}
            alt="Beautiful red and pink rose bouquet"
          />

        </div>

      </div>

      {/* Album heading */}
      <header className="album-heading">

        <p className="album-eyebrow">
          A LITTLE COLLECTION SAVED
        </p>

        <h1>Little Photo Album ♡</h1>

        <p>
          Every picture holds a beautiful memory.
        </p>

      </header>

      {/* Realistic 3D photo book */}
      <section
        className="album-book"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >

        <div className="album-real-book">

          {/* Photo underneath the turning page */}
          <div className="album-static-page">

            <img
              src={imagePath(nextPhoto.image)}
              alt={nextPhoto.caption}
              className="album-photo"
            />

            <p className="album-photo-caption">
              {nextPhoto.caption}
            </p>

          </div>

          {/* Page that physically turns */}
          {isAnimating && (

            <div
              className={`album-turning-page turn-${direction}`}
              key={`${currentIndex}-${turningToIndex}`}
            >

              <div className="album-page-front">

                <img
                  src={imagePath(currentPhoto.image)}
                  alt={currentPhoto.caption}
                  className="album-photo"
                />

                <p className="album-photo-caption">
                  {currentPhoto.caption}
                </p>

              </div>

              <div className="album-page-back">
                <span>♡</span>
              </div>

            </div>

          )}

        </div>

      </section>

      {/* Page counter */}
      <div className="album-counter">

        <span>
          {String(currentIndex + 1).padStart(2, '0')}
        </span>

        <div className="album-progress">

          <div
            className="album-progress-fill"
            style={{
              width: `${
                ((currentIndex + 1) / photos.length) * 100
              }%`,
            }}
          />

        </div>

        <span>
          {String(photos.length).padStart(2, '0')}
        </span>

      </div>

      {/* Navigation */}
      <div className="album-controls">

        <button
          className="album-nav-button"
          onClick={() => changePhoto(currentIndex - 1)}
          disabled={currentIndex === 0 || isAnimating}
        >
          ← Previous
        </button>

        <button
          className="album-nav-button"
          onClick={() => changePhoto(currentIndex + 1)}
          disabled={
            currentIndex === photos.length - 1 || isAnimating
          }
        >
          Next →
        </button>

      </div>

      <p className="album-swipe-hint">
        ♡ Swipe to turn the pages ♡
      </p>

      {/* Final birthday message */}
      {currentIndex === photos.length - 1 && !isAnimating && (

        <div className="album-ending">

          <h2>And that's not all... ♡</h2>

          <p>
            May your life always be filled with smiles,
            happiness and beautiful memories.
          </p>

          <p className="album-ending-signature">
            With lots of Love & wishes, just for you.
            <br />
            — Aniket ❤️
          </p>

        </div>

      )}

      {/* Back button */}
      <button
        className="album-back-button"
        onClick={onBack}
      >
        ← Back to your letter
      </button>

    </main>
  )
}

export default PhotoAlbum
