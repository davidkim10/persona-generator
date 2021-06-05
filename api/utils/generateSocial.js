const generateSocial = (results = 1) => {
  const social = [
    'Facebook',
    'Twitter',
    'Instagram',
    'Pinterest',
    'LinkedIn',
    'Snapchat',
    'Tumblr',
    'TikTok',
  ];

  return social.sort(() => Math.random() - Math.random()).slice(0, results);
};

module.exports = generateSocial;
