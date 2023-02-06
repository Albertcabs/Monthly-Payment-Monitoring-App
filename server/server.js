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
   paidExcel,
   resetPaidExcel,
} from './xlsxFunction.js';

const app = express();

const PORT = process.env.port || 5050;

//const cors = require('cors');
app.use(cors({ origin: 'http://127.0.0.1:5173' }));

//..................................................................

//          built-in middleware to handle urlencoded data
//          such as word, form data
//          content-type : application/x-www-form-urlencoded
//..................................................................
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// sent data to client side request
app.get('/', async (req, res) => {
   const getDay = new Date().getDate();
   if (getDay === 1) resetPaidExcel();
   const data = readExcel();

   res.send(data);
});

// recieve data from front end
app.post('/create', async (req, res) => {
   const data = req.body;
   writeRowExcel(data);
   res.end('create custmer is done!');
});

app.put('/update', async (req, res) => {
   const data = req.body;
   updateRowExcel(data);
   res.end('Update the Custmer data is done!');
});

app.put('/paid', async (req, res) => {
   const data = req.body;
   paidExcel(data);
   res.end('the Custmer  is paid!');
});

// delete
app.delete('/delete', async (req, res) => {
   const data = Object.values(req.body);
   //console.log(data)
   deleteRowExcel(data);
   res.end('delete cmd is done!');
});

app.all('*', (req, res) => {
   res.send('That route doesnt exist');
});

app.listen(PORT, () => {
   console.log(`Server is listening on port: http://localhost:${PORT}`);
});
