import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Overview, Layout, SocialMediaLogo } from './components';
import SocialMediaCard from './components/SocialMediaCard/SocialMediaCard';

const App = () => {
  const [userData, setUserData] = useState([]);
  const userApi = '/users/50';

  const getUser = async () => {
    const res = await axios.get(userApi);
    return res.data;
  };

  useEffect(() => {
    getUser()
      .then((users) => {
        setUserData(users);
      })
      .catch((err) => console.error(err));
  }, []);

  if (userData.length <= 0) {
    return 'Loading...';
  }

  console.log(userData);
  return (
    <Layout>
      <Card gridRowStart="1" gridRowEnd="4">
        <Overview data={userData} />
      </Card>
      <Card>
        <SocialMediaCard platforms={userData.socialMedia} />
      </Card>
    </Layout>
  );
};

export default App;
