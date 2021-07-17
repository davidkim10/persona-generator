// CSV to JSON Converter
const fs = require('fs');
const generateHobby = require('./generateHobby');
const generateSocial = require('./generateSocial');

const csv = fs
  .readFileSync('../csv/persona-data.csv', 'utf-8')
  .trim()
  .split('\r')
  .map((line) => line.replace('\n', '').split(','))
  .slice(1)
  .map((item, i) => {
    return {
      id: i + 1,
      firstName: item[0],
      lastName: item[1],
      gender: item[2],
      age: item[3],
      email: item[4],
      phone: item[5],
      college: item[6],
      occupation: item[7],
      averagePay: item[8],
      highestPay: item[9],
      maritalStatus: item[10],
      quote: item[11],
      location: item[12],
      hobbies: generateHobby(4),
      socialMedia: generateSocial(Math.floor(Math.random() * 8)),
    };
  });

// Output .db file for json-server
// Doc: https://my-json-server.typicode.com/
// Must be under 10kb
fs.writeFileSync('../db.json', JSON.stringify({ users: csv }));
