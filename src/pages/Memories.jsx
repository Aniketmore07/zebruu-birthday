
// const memories = [
//   {
//     id: 1,
//     image: 'photo1.jpeg',
//     caption: 'A beautiful smile',
//   },
//   {
//     id: 2,
//     image: 'photo2.jpeg',
//     caption: 'A moment to remember',
//   },
//   {
//     id: 3,
//     image: 'photo3.jpeg',
//     caption: 'Simply wonderful',
//   },
//   {
//     id: 4,
//     image: 'photo4.jpeg',
//     caption: 'Keep shining, Chongee',
//   },
// ]

// function Memories({ onContinue }) {
//   const base = import.meta.env.BASE_URL

//   const imagePath = (filename) =>
//     `${base}photos/${encodeURIComponent(filename)}`

//   return (
//     <main className="memories-page">

//       {/* Background decorations */}
//       <div className="stars"></div>
//       <div className="golden-glow"></div>

//       {/* Hanging bouquets */}
//       <div className="memories-decor">

//         {/* Left sunflower bouquet */}
//         <div className="memories-bouquet bouquet-sunflower">
//           <div className="bouquet-string"></div>
//           <span className="bouquet-ribbon">🎀</span>

//           <img
//             src={imagePath(
//               'Vibrant Sunflower Bouquet with Burlap Bow-1.png'
//             )}
//             alt="Sunflower bouquet"
//           />
//         </div>

//         {/* Right rose bouquet */}
//         <div className="memories-bouquet bouquet-roses">
//           <div className="bouquet-string"></div>
//           <span className="bouquet-ribbon">🎀</span>

//           <img
//             src={imagePath(
//               'Romantic Red and Pink Rose Bouquet-2.png'
//             )}
//             alt="Red and pink rose bouquet"
//           />
//         </div>

//       </div>

//       {/* Memories heading */}
//       <div className="memories-heading">

//         <span className="eyebrow">
//           ✦ A COLLECTION OF BEAUTIFUL MOMENTS ✦
//         </span>

//         <h2>
//           A little gallery of
//           <span>You ♡</span>
//         </h2>

//         <p>
//           Because some moments deserve to be
//           remembered forever.
//         </p>

//       </div>

//       {/* Photo gallery */}
//       <div className="memory-grid">

//         {memories.map((memory) => (
//           <div className="memory-card" key={memory.id}>

//             <div className="memory-image-wrapper">
//               <img
//                 src={imagePath(memory.image)}
//                 alt={memory.caption}
//                 className="memory-image"
//                 loading="lazy"
//               />
//             </div>

//             <p>{memory.caption}</p>

//           </div>
//         ))}

//       </div>

//       {/* Continue button */}
//       <button
//         className="surprise-button"
//         onClick={onContinue}
//       >
//         A little message for you →
//       </button>

//     </main>
//   )
// }

// export default Memories

const memories = [
  {
    id: 1,
    image: 'photo1.jpeg',
    caption: 'A beautiful smile',
  },
  {
    id: 2,
    image: 'memory1.jpeg',
    caption: 'A moment to remember',
  },
  {
    id: 3,
    image: 'memory2.jpeg',
    caption: 'Simply wonderful',
  },
  {
    id: 4,
    image: 'photo4.jpeg',
    caption: 'Keep shining, Chongee',
  },
]

function Memories({ onContinue }) {
  const base = import.meta.env.BASE_URL

  const imagePath = (filename) =>
    `${base}photos/${encodeURIComponent(filename)}`

  return (
    <main className="memories-page">

      {/* Background decorations */}
      <div className="stars"></div>
      <div className="golden-glow"></div>

      {/* Hanging bouquets */}
      <div className="memories-decor">

        {/* Left sunflower bouquet */}
        <div className="memories-bouquet bouquet-sunflower">
          <div className="bouquet-string"></div>
          <span className="bouquet-ribbon">🎀</span>

          <img
            src={imagePath(
              'Vibrant Sunflower Bouquet with Burlap Bow-1.png'
            )}
            alt="Sunflower bouquet"
          />
        </div>

        {/* Right rose bouquet */}
        <div className="memories-bouquet bouquet-roses">
          <div className="bouquet-string"></div>
          <span className="bouquet-ribbon">🎀</span>

          <img
            src={imagePath(
              'Romantic Red and Pink Rose Bouquet-2.png'
            )}
            alt="Red and pink rose bouquet"
          />
        </div>

      </div>

      {/* Memories heading */}
      <div className="memories-heading">

        <span className="eyebrow">
          ✦ A COLLECTION OF BEAUTIFUL MOMENTS ✦
        </span>

        <h2>
          A little gallery of
          <span>You ♡</span>
        </h2>

        <p>
          Because some moments deserve to be
          remembered forever.
        </p>

      </div>

      {/* Photo gallery */}
      <div className="memory-grid">

        {memories.map((memory) => (
          <div className="memory-card" key={memory.id}>

            <div className="memory-image-wrapper">
              <img
                src={imagePath(memory.image)}
                alt={memory.caption}
                className="memory-image"
                loading="lazy"
              />
            </div>

            <p>{memory.caption}</p>

          </div>
        ))}

      </div>

      {/* Continue button */}
      <button
        className="surprise-button"
        onClick={onContinue}
      >
        A little message for you →
      </button>

    </main>
  )
}

export default Memories
