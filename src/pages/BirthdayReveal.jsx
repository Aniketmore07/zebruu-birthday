
import HangingPhoto from '../components/HangingPhoto'

function BirthdayReveal({ onContinue }) {
  const base = import.meta.env.BASE_URL

  return (
    <main className="birthday-app">
      <div className="stars"></div>
      <div className="golden-glow"></div>

      {/* Hanging portrait and bouquet on left */}
      <HangingPhoto
  src="photos/Smiling Woman in Green Halter Top.png"
  alt="Beautiful birthday portrait"
  bouquetSrc="photos/Dewy Pink Lily Bouquet with Ribbon.png"
/>

      <section className="hero-content">
        <span className="eyebrow">
          ✦ TODAY IS ALL ABOUT YOU ✦
        </span>

        <h1>
          Happy Birthday,
          <span>PUJA!</span>
        </h1>

        <p className="hero-message">
          May your day be filled with beautiful
          moments, endless smiles and everything
          your heart wishes for.
        </p>

        <div className="birthday-heart">♡</div>

        <button
          className="surprise-button"
          onClick={onContinue}
        >
          See Your Beautiful Moments →
        </button>

        <p className="bottom-note">
          Your special celebration begins here.
        </p>
      </section>

      <footer className="hero-footer">
        MADE ESPECIALLY FOR BATTERY
      </footer>
    </main>
  )
}

export default BirthdayReveal
