export const Card = ({ data }) => {
  const { img, starRate, reviewCount, country, title, price, openSpot } = data;

  let badgeText;
  if (openSpot === 0) {
    badgeText = 'SOLD OUT';
  } else if (country === 'Online') {
    badgeText = 'Online';
  } else {
    badgeText = '';
  }

  return (
    <div className="card">
      <div className="card--img-container">
        <img
          src={`/src/assets/${img}`}
          className="card--img"
          alt="a girl face"
        />
        {badgeText && <div className="card--img-badge">{badgeText}</div>}
      </div>
      <span>⭐️</span>
      <span>{starRate}</span>
      <span className="card--country">({reviewCount}) ・ </span>
      <span>{country}</span>
      <p>{title}</p>
      <p>
        <span className="card--bold">From ${price}</span> / person
      </p>
    </div>
  );
};
