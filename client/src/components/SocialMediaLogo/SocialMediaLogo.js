import React from 'react';
import Facebook from './img/facebook.svg';
import Instagram from './img/instagram.svg';
import LinkedIn from './img/linkedin.svg';
import Pinterest from './img/pinterest.svg';
import SnapChat from './img/snapchat.svg';
import TikTok from './img/tiktok.svg';
import Twitter from './img/twitter.svg';

const config = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: LinkedIn,
  pinterest: Pinterest,
  snapchat: SnapChat,
  tiktok: TikTok,
  twitter: Twitter,
};

const SocialMediaLogo = ({ platform = 'facebook', ...props }) => {
  return <img src={config[platform]} alt={platform} {...props} />;
};

export default SocialMediaLogo;
