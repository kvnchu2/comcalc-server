const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

// const pool = new Pool({
//   user: 'postgres',
//   password: '123',
//   host: 'localhost',
//   database: 'travel_calculator'
// });

const pool = new Pool({
  connectionString: process.env.PROD_URI,
  ssl: {
    rejectUnauthorized: false
  }
});

const addClient =  function(client) {
  return pool.query(`
  INSERT INTO clients (name, address, provider)
  VALUES ($1, $2, $3) returning *;
  `, [client.name, client.address, client.provider])
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log("error message", err);
    });
};

exports.addClient = addClient;

const getAllClients = function() {
  return pool.query(`
    SELECT * from CLIENTS;
    `)
    .then(res => res.rows);
};

exports.getAllClients = getAllClients;

const deleteClient = function(id) {
  return pool.query(`
    DELETE FROM CLIENTS
    WHERE id = $1;
    `, [id])
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log("error message", err);
    });
};

exports.deleteClient = deleteClient;

const editAddress = function(id,address) {
  return pool.query(`
    UPDATE CLIENTS
    SET ADDRESS = $2
    WHERE id = $1;
    `, [id, address])
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log("error message", err);
    });
};

exports.editAddress = editAddress;

const findIcbcClient = function(name) {
  return pool.query(`
    SELECT * from CLIENTS
    WHERE name = $1 
    AND (provider = 'ICBC' OR provider = '');
    `, [name])
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log("error message", err);
    });
};

exports.findIcbcClient = findIcbcClient;

const findWsbcClient = function(name) {
  return pool.query(`
    SELECT * from CLIENTS
    WHERE name = $1 
    AND (provider = 'WSBC' OR provider = '');
    `, [name])
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log("error message", err);
    });
};

exports.findWsbcClient = findWsbcClient;