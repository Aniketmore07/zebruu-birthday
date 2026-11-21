
import { useState, useRef } from 'react'

const photos = [
  {
    image: 'photo1.jpeg',
    caption: 'A beautiful smile ♡',
  },
  {
    image: 'photo2.jpeg',
    caption: 'A moment to remember',
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
    caption: 'A picture-perfect moment',
  },

  {
    image: 'Smiling Woman in Green Halter Top.png',
    caption: 'Stay beautiful, always',
  },
  {
    image: 'Smiling Woman with Glasses Cutout.png',
    caption: 'One smile, a thousand memories ♡',
  },
]

function PhotoAlbum({ onBack }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState('next')
  const [isAnimating, setIsAnimating] = useState(false)
  const touchStartX = useRef(0)

  const basePath = import.meta.env.BASE_URL

  const changePhoto = (newIndex) => {
    if (
      newIndex < 0 ||
      newIndex >= photos.length ||
      isAnimating ||
      newIndex === currentIndex
    ) return

    setDirection(newIndex > currentIndex ? 'next' : 'prev')
    setIsAnimating(true)
    setCurrentIndex(newIndex)

    setTimeout(() => {
      setIsAnimating(false)
    }, 550)
  }

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    const difference = touchStartX.current - e.changedTouches[0].clientX

    if (Math.abs(difference) < 45) return

    if (difference > 0) {
      changePhoto(currentIndex + 1)
    } else {
      changePhoto(currentIndex - 1)
    }
  }

  const currentPhoto = photos[currentIndex]

  return (
    <main className="photo-album-page">

      <div className="album-stars">✦　·　✧　·　✦</div>

      <header className="album-heading">
        <p className="album-eyebrow">A LITTLE COLLECTION SAVED</p>
        <h1>Little Photo Album ♡</h1>
        <p>Every picture holds a beautiful memory.</p>
      </header>

      <section
        className="album-book"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={`album-photo-frame ${
            isAnimating ? `album-${direction}` : ''
          }`}
          key={currentIndex}
        >
          <div className="album-photo-inner">
            <img
              src={encodeURI(`${basePath}photos/${currentPhoto.image}`)}
              alt={currentPhoto.caption}
              className="album-photo"
            />
          </div>

          <p className="album-photo-caption">
            {currentPhoto.caption}
          </p>
        </div>
      </section>

      <div className="album-counter">
        <span>{String(currentIndex + 1).padStart(2, '0')}</span>
        <div className="album-progress">
          <div
            className="album-progress-fill"
            style={{
              width: `${((currentIndex + 1) / photos.length) * 100}%`,
            }}
          />
        </div>
        <span>{String(photos.length).padStart(2, '0')}</span>
      </div>

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
          disabled={currentIndex === photos.length - 1 || isAnimating}
        >
          Next →
        </button>
      </div>

      <p className="album-swipe-hint">
        ♡ Swipe to turn the pages ♡
      </p>

      {currentIndex === photos.length - 1 && (
        <div className="album-ending">
          <h2>And that's not all... ♡</h2>
          <p>
            May your life always be filled with smiles,
            happiness and beautiful memories.
          </p>
          <p className="album-ending-signature">
            With lots of wishes, just for you.
            <br />
  — Aniket ❤️
          </p>
        </div>
      )}

      <button className="album-back-button" onClick={onBack}>
        ← Back to your letter
      </button>

    </main>
  )
}

export default PhotoAlbum
