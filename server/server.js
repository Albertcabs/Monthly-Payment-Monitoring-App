'use strict';

//const express = require('express');
//const cors = require('cors');
//const readExcel = require('./readExcel.js');

import express from 'express';
import cors from 'cors';
import {
      readExcel,
      writeRowExcel,
      deleteRowExcel,
      updateRowExcel,
} from './xlsxFunction.js';

const app = express();

const PORT = process.env.port || 5050;

//const cors = require('cors');
app.use(cors({ origin: 'http://localhost:3000' }));

//..................................................................

//          built-in middleware to handle urlencoded data
//          such as word, form data
//          content-type : application/x-www-form-urlencoded
//..................................................................
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// sent data to client side request
app.get('/', async (req, res) => {
      const data = readExcel();     
      res.send(data);
});

// recieve data from front end
app.post('/create', async (req, res) => {
      const data = req.body;
      console.log(data);
      writeRowExcel(data);
      res.end('create custmer is done!');
});

app.put('/update', async (req, res) => {
      const data = req.body;
      console.log(data);
      updateRowExcel(data);

      res.end('Update the Custmer data is done!');
});

// delete
app.delete('/delete', async (req, res) => {
      const data = Object.values(req.body);
      deleteRowExcel(data[0],data[1]);
      res.end('delete cmd is done!');
});

app.all('*', (req, res) => {
      res.send('That route doesnt exist');
});

app.listen(PORT, () => {
      console.log(`Server is listening on port: http://localhost:${PORT}`);
});
