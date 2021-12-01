import React from "react";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiDribbble,
  FiLinkedin,
} from "react-icons/fi";

const SocialShare = [
  {
    iconName: <FiFacebook />,
    link: "https://www.facebook.com/reecehumphreys/",
  },
  { iconName: <FiTwitter />, link: "https://twitter.com/ReeceWHumphreys" },
  {
    iconName: <FiInstagram />,
    link: "https://www.instagram.com/reecewhumphreys/",
  },
  //{ iconName: <FiDribbble />, link: "https://dribbble.com/" },
  {
    iconName: <FiLinkedin />,
    link: "https://www.linkedin.com/feed/",
  },
];
const Social = () => {
  return (
    <ul>
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            {val.iconName}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
