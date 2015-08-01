# PJAX-Parser

Express middleware to handle pjax requests

[![npm version](https://badge.fury.io/js/pjax-parser.svg)](http://badge.fury.io/js/pjax-parser)
[![Code Climate](https://codeclimate.com/github/nmabhinandan/pjax-parser/badges/gpa.svg)](https://codeclimate.com/github/nmabhinandan/pjax-parser)
[![GitHub license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/nmabhinandan/pjax-parser/blob/master/LICENSE)

## Installation
`npm install pjax-parser --save`

## Usage
```javascript
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import pjaxParser from 'pjax-parser';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(pjaxParser());

app.get('/', (req, res) => {
  res.render('index', {data: 'test'});
});

app.get('/about', (req, res) => {
  res.render('about', {data: 'test'});
});

app.listen(3000, () => {
  console.log("listening at http://localhost:3000")
});
```

## Development
The source code is in lib dir. Use `gulp build` to transpile code to ES5 using babel. Use `gulp watch` to watch for continuous build.

## LICENSE
MIT
