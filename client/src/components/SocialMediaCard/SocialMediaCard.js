import React from 'react';

import Facebook from './img/facebook.svg';
import Instagram from './img/instagram.svg';
import LinkedIn from './img/linkedin.svg';
import Pinterest from './img/pinterest.svg';
import SnapChat from './img/snapchat.svg';
import TikTok from './img/tiktok.svg';
import Twitter from './img/twitter.svg';
import './SocialMediaCard.scss';

const config = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: LinkedIn,
  pinterest: Pinterest,
  snapchat: SnapChat,
  tiktok: TikTok,
  twitter: Twitter,
};

const SocialMediaCard = ({ platforms }) => (
  <div className="social-media-container">
    {platforms.sort().map((platform, index) => (
      <img
        className="social-media-icon img-responsive"
        src={config[platform.toLowerCase()]}
        alt={platform}
        key={index}
      />
    ))}
  </div>
);

export default SocialMediaCard;
