import logo from '../assets/airbnb1.png';

export const Header = () => {
  return (
    <header>
      <img src={logo} className="logo" alt="airbnb logo" />
      <span>clone</span>
    </header>
  );
};
