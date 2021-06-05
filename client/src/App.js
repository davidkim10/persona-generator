import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Overview, Layout } from './components';

const DATA = require('./db.json');
// console.log(DATA.map((item) => console.log(item.socialMedia)));

const App = () => {
  const [userData, setUserData] = useState([]);
  const userApi = 'https://randomuser.me/api';

  const getUser = async () => {
    const res = await axios.get(userApi);
    return res.data;
  };

  useEffect(() => {
    getUser()
      .then((user) => {
        setUserData(user.results[0]);
      })
      .catch((err) => console.error(err));
  }, []);

  if (userData.length <= 0) {
    return 'Loading...';
  }

  return (
    <Layout>
      <Card>
        <Overview {...userData} data={DATA} />
      </Card>
    </Layout>
  );
};

export default App;
