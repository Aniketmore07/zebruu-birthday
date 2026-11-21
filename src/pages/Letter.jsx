
// import { useState } from 'react'

// function Letter({ onBack }) {
//   const [stage, setStage] = useState('closed')

//   const base = import.meta.env.BASE_URL

//   const openLetter = () => {
//     if (stage !== 'closed') return

//     setStage('opening')

//     setTimeout(() => {
//       setStage('revealed')
//     }, 1800)
//   }

//   return (
//     <main className="letter-page">

//       <div className="letter-glow"></div>

//       {/* Hanging bouquets on both sides */}
//       <div className="letter-decor">

//         {/* Left - Sunflowers */}
//         <div className="letter-bouquet letter-sunflower">
//           <div className="letter-bouquet-string"></div>
//           <span className="letter-bouquet-ribbon">🎀</span>
//           <img
//             src={`${base}photos/Vibrant%20Sunflower%20Bouquet%20with%20Burlap%20Bow-1.png`}
//             alt="Sunflower bouquet"
//           />
//         </div>

//         {/* Right - Roses */}
//         <div className="letter-bouquet letter-roses">
//           <div className="letter-bouquet-string"></div>
//           <span className="letter-bouquet-ribbon">🎀</span>
//           <img
//             src={`${base}photos/Romantic%20Red%20and%20Pink%20Rose%20Bouquet-2.png`}
//             alt="Red and pink rose bouquet"
//           />
//         </div>

//       </div>

//       <div className="letter-container">

//         <span className="eyebrow">
//           ✦ A LITTLE SOMETHING FROM THE HEART ✦
//         </span>

//         {stage === 'closed' && (
//           <>
//             <h1>
//               A Letter
//               <span> For Zebruuu...!! ♡</span>
//             </h1>

//             <p className="letter-intro">
//               There's something special waiting for you...
//             </p>

//             <div className="envelope-scene">
//               <div className="envelope">
//                 <div className="envelope-flap"></div>
//                 <div className="envelope-body"></div>
//                 <div className="envelope-seal">♡</div>
//               </div>
//             </div>

//             <button
//               className="surprise-button"
//               onClick={openLetter}
//             >
//               Open Your Letter ♡
//             </button>
//           </>
//         )}

//         {stage === 'opening' && (
//           <>
//             <h1>
//               A Little Surprise
//               <span> Just For You ♡</span>
//             </h1>

//             <div className="envelope-scene opening">
//               <div className="envelope">

//                 {/* Her photo emerges with the letter */}
//                 <div className="letter-paper">
//                   <img
//                     src={`${base}photos/Smiling%20Woman%20in%20Green%20Halter%20Top.png`}
//                     alt="A beautiful picture of her"
//                     className="envelope-photo"
//                   />
//                   <span className="envelope-photo-heart">♡</span>
//                 </div>

//                 <div className="envelope-flap"></div>
//                 <div className="envelope-body"></div>
//                 <div className="envelope-seal">♡</div>

//               </div>
//             </div>

//             <p className="letter-intro">
//               Unfolding a little message for you...
//             </p>
//           </>
//         )}

//         {stage === 'revealed' && (
//           <div className="revealed-letter">

//             <div className="letter-icon">💌</div>

//             <h1>
//               A Little Letter
//               <span> for You, Zebruuu ♡</span>
//             </h1>

//             <div className="letter-card">

//               <p className="letter-greeting">
//                 Dear Pooja,
//               </p>

//               <p>Happy Birthday, Zebruuu! ✨</p>

//               <p>
//                 Some people have a beautiful way of making
//                 ordinary moments feel special, simply by
//                 being themselves. You are one of those people.
//               </p>

//               <p>
//                 On your special day, I wish you endless
//                 happiness, beautiful opportunities, success
//                 in everything you do, and countless reasons
//                 to smile.
//               </p>

//               <p>
//                 May you always have the courage to follow
//                 your dreams, the strength to overcome every
//                 challenge, and people around you who genuinely
//                 appreciate the wonderful person you are.
//               </p>

//               <p>
//                 Keep smiling, keep shining, and never lose
//                 that beautiful spark that makes you uniquely you.
//               </p>

//               <p>
//                 I hope this little surprise brings an extra
//                 smile to your birthday. You deserve all the
//                 beautiful things life has to offer.
//               </p>

//               <div className="letter-signature">
//                 With warm wishes and a little extra care,
//                 <span>— Aniket ♡</span>
//               </div>

//             </div>

//             <button
//               className="surprise-button"
//               onClick={onBack}
//             >
//               ← Back to Memories
//             </button>

//           </div>
//         )}

//       </div>

//     </main>
//   )
// }

// export default Letter



import { useState } from 'react'

function Letter({ onContinue }) {
  const [stage, setStage] = useState('closed')

  const base = import.meta.env.BASE_URL

  const openLetter = () => {
    if (stage !== 'closed') return

    setStage('opening')

    setTimeout(() => {
      setStage('revealed')
    }, 1800)
  }

  return (
    <main className="letter-page">

      <div className="letter-glow"></div>

      {/* Hanging bouquets on both sides */}
      <div className="letter-decor">

        {/* Left - Sunflower Bouquet */}
        <div className="letter-bouquet letter-sunflower">

          <div className="letter-bouquet-string"></div>

          <span className="letter-bouquet-ribbon">
            🎀
          </span>

          <img
            src={`${base}photos/Vibrant%20Sunflower%20Bouquet%20with%20Burlap%20Bow-1.png`}
            alt="Beautiful sunflower bouquet"
          />

        </div>

        {/* Right - Red and Pink Rose Bouquet */}
        <div className="letter-bouquet letter-roses">

          <div className="letter-bouquet-string"></div>

          <span className="letter-bouquet-ribbon">
            🎀
          </span>

          <img
            src={`${base}photos/Romantic%20Red%20and%20Pink%20Rose%20Bouquet-2.png`}
            alt="Beautiful red and pink rose bouquet"
          />

        </div>

      </div>

      {/* Main Letter Content */}
      <div className="letter-container">

        <span className="eyebrow">
          ✦ A LITTLE SOMETHING FROM THE HEART ✦
        </span>

        {/* STAGE 1 - CLOSED ENVELOPE */}
        {stage === 'closed' && (
          <>

            <h1>
              A Letter
              <span> For Zebruuu...!! ♡</span>
            </h1>

            <p className="letter-intro">
              There's something special waiting for you...
            </p>

            <div className="envelope-scene">

              <div className="envelope">

                <div className="envelope-flap"></div>

                <div className="envelope-body"></div>

                <div className="envelope-seal">
                  ♡
                </div>

              </div>

            </div>

            <button
              className="surprise-button"
              onClick={openLetter}
            >
              Open Your Letter ♡
            </button>

          </>
        )}

        {/* STAGE 2 - ENVELOPE OPENING WITH HER PHOTO */}
        {stage === 'opening' && (
          <>

            <h1>
              A Little Surprise
              <span> Just For You ♡</span>
            </h1>

            <div className="envelope-scene opening">

              <div className="envelope">

                {/* Her photograph inside the letter */}
                <div className="letter-paper">

                  <img
                    src={`${base}photos/Smiling%20Woman%20in%20Green%20Halter%20Top.png`}
                    alt="A beautiful birthday photograph"
                    className="envelope-photo"
                  />

                  <span className="envelope-photo-heart">
                    ♡
                  </span>

                </div>

                <div className="envelope-flap"></div>

                <div className="envelope-body"></div>

                <div className="envelope-seal">
                  ♡
                </div>

              </div>

            </div>

            <p className="letter-intro">
              Unfolding a little message for you...
            </p>

          </>
        )}

        {/* STAGE 3 - REVEALED LETTER */}
        {stage === 'revealed' && (
          <div className="revealed-letter">

            <div className="letter-icon">
              💌
            </div>

            <h1>
              A Little Letter
              <span> for You, Zebruuu ♡</span>
            </h1>

            <div className="letter-card">

              <p className="letter-greeting">
                Dear Pooja,
              </p>

              <p>
                Happy Birthday, Zebruuu! ✨
              </p>

              <p>
                Some people have a beautiful way of making
                ordinary moments feel special, simply by
                being themselves. You are one of those people.
              </p>

              <p>
                On your special day, I wish you endless
                happiness, beautiful opportunities, success
                in everything you do, and countless reasons
                to smile.
              </p>

              <p>
                May you always have the courage to follow
                your dreams, the strength to overcome every
                challenge, and people around you who genuinely
                appreciate the wonderful person you are.
              </p>

              <p>
                Keep smiling, keep shining, and never lose
                that beautiful spark that makes you uniquely you.
              </p>

              <p>
                I hope this little surprise brings an extra
                smile to your birthday. You deserve all the
                beautiful things life has to offer.
              </p>

              <div className="letter-signature">

                With warm wishes and a little extra care,

                <span>
                  — Aniket ♡
                </span>

              </div>

            </div>

            {/* Continue to Photo Album */}
            <button
              className="surprise-button"
              onClick={onContinue}
            >
              Open Your Photo Album ♡ →
            </button>

          </div>
        )}

      </div>

    </main>
  )
}

export default Letter
