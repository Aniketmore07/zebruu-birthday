
function HangingPhoto({ src, alt, bouquetSrc }) {
  // Supports localhost and GitHub Pages
  const basePath = import.meta.env.BASE_URL;

  const getImagePath = (path) => {
    if (!path) return '';

    return encodeURI(
      `${basePath}${path.replace(/^\/+/, '')}`
    );
  };

  return (
    <div className="page-decor">
      <div className="hanging-photo">
        <div className="photo-string"></div>

        <span className="photo-ribbon">🎀</span>

        <div className="photo-frame">
          <img
            src={getImagePath(src)}
            alt={alt}
            className="hanging-photo-image"
          />

          <span className="photo-heart">♡</span>
        </div>
      </div>

      {bouquetSrc && (
        <img
          src={getImagePath(bouquetSrc)}
          alt="Beautiful flower bouquet"
          className="page-bouquet"
        />
      )}
    </div>
  );
}

export default HangingPhoto;
