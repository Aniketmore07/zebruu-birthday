import { useState, useRef, useEffect } from 'react'
import HangingPhoto from '../components/HangingPhoto'

function Welcome({ onOpen }) {

  const [noCount, setNoCount] = useState(0)

  useEffect(() => {
    localStorage.setItem('chongeeNoCount', '0')
  }, [])

  const [noPosition, setNoPosition] = useState({
    left: 185,
    top: 0,
  })

  const containerRef = useRef(null)
  const noButtonRef = useRef(null)
  const lastMoveRef = useRef(0)

  const countAttempt = () => {
    setNoCount(previous => {
      const updated = previous + 1
      localStorage.setItem('chongeeNoCount', updated)
      return updated
    })
  }

  const escapeNo = () => {
    const container = containerRef.current
    const button = noButtonRef.current

    if (!container || !button) return

    const maxLeft = Math.max(
      0,
      container.clientWidth - button.offsetWidth
    )

    const maxTop = Math.max(
      0,
      container.clientHeight - button.offsetHeight
    )

    const possiblePositions = [
      { left: 0, top: maxTop },
      { left: maxLeft, top: maxTop },
      { left: maxLeft, top: 0 },
      { left: maxLeft / 2, top: maxTop },
      { left: 0, top: maxTop / 2 },
      { left: maxLeft, top: maxTop / 2 },
    ]

    const available = possiblePositions.filter(
      position =>
        Math.abs(position.left - noPosition.left) > 30 ||
        Math.abs(position.top - noPosition.top) > 30
    )

    const choices = available.length
      ? available
      : possiblePositions

    setNoPosition(
      choices[Math.floor(Math.random() * choices.length)]
    )
  }

  const handlePointerMove = (event) => {
    if (event.pointerType !== 'mouse') return

    const button = noButtonRef.current
    if (!button) return

    const rect = button.getBoundingClientRect()

    const distanceX = Math.max(
      rect.left - event.clientX,
      0,
      event.clientX - rect.right
    )

    const distanceY = Math.max(
      rect.top - event.clientY,
      0,
      event.clientY - rect.bottom
    )

    const distance = Math.hypot(distanceX, distanceY)

    if (distance < 65) {
      const now = Date.now()

      if (now - lastMoveRef.current < 180) return

      lastMoveRef.current = now

      countAttempt()
      escapeNo()
    }
  }

  const handlePointerDown = (event) => {
    const button = noButtonRef.current
    if (!button) return

    const rect = button.getBoundingClientRect()

    const isNearNo =
      event.clientX >= rect.left - 20 &&
      event.clientX <= rect.right + 20 &&
      event.clientY >= rect.top - 20 &&
      event.clientY <= rect.bottom + 20

    if (isNearNo) {
      countAttempt()
      escapeNo()
    }
  }

  return (
    <main className="birthday-app">

      <div className="stars"></div>
      <div className="golden-glow"></div>

      {/* LEFT HANGING PHOTO */}
     {/* LEFT HANGING PHOTO WITH SUNFLOWER BOUQUET */}
<div className="welcome-photo-left">
  <HangingPhoto
    src="photos/photo2.jpeg"
    alt="Beautiful memory of Chongee"
    bouquetSrc="photos/Vibrant Sunflower Bouquet with Burlap Bow-1.png"
  />
</div>

      {/* RIGHT HANGING PHOTO */}
      <div className="welcome-photo-right">
        <HangingPhoto
          src="photos/Smiling Woman with Glasses Cutout.png"
          alt="A beautiful birthday portrait of Chongee"
          bouquetSrc="photos/Dewy Pink Lily Bouquet with Ribbon.png"
        />
      </div>

      <section className="hero-content">

        <span className="eyebrow">
          ✦ A LITTLE SURPRISE FOR SOMEONE SPECIAL ❤️ ✦
        </span>

        <h1>
          Hey
          <span>Chongee</span>
        </h1>

        <p className="hero-message">
          Some people make ordinary moments feel
          extraordinary. Today, this little corner
          of the internet is all yours.
        </p>

        <div className="surprise-question">

          <h2>Are you ready for a surprise? ♡</h2>

          <div
            className="answer-buttons"
            ref={containerRef}
            onPointerMove={handlePointerMove}
            onPointerDown={handlePointerDown}
          >

            <button
              className="answer-button yes-button"
              onClick={onOpen}
            >
              Yes! ❤️
            </button>

            <button
              ref={noButtonRef}
              type="button"
              tabIndex={-1}
              aria-hidden="true"
              className="answer-button no-button"
              style={{
                left: `${noPosition.left}px`,
                top: `${noPosition.top}px`,
              }}
            >
              No 🙈
            </button>

          </div>

          <p className="no-counter">
            {noCount === 0
              ? 'You have only ONE option... and it’s YES! 😉❤️'
              : `You tried saying No ${noCount} ${
                  noCount === 1 ? 'time' : 'times'
                }! 😂 Still, YES is the only option! ❤️`}
          </p>

        </div>

        <p className="bottom-note">
          Made with a little extra love ✨
        </p>

      </section>

      <footer className="hero-footer">
        A SPECIAL DAY • A BEAUTIFUL SOUL • ENDLESS SMILES
      </footer>

    </main>
  )
}

export default Welcome
