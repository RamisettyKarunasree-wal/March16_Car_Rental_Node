const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/home.html`);
});
app.get('/login', (req, res) => {
  res.sendFile(`${__dirname}/login.html`);
});
app.get('/addcar', (req, res) => {
  res.sendFile(`${__dirname}/addcar.html`);
});
app.get('/showcars', (req, res) => {
  const carsArr = [
    {
      name: 'Karuna',
      email: 'karuna@gmail.com',
      model: 'benz',
      color: 'black',
    },
    {
      name: 'Mounisha',
      email: 'mounisha@gmail.com',
      model: 'mariti',
      color: 'blue',
    },
    {
      name: 'Tulasi',
      email: 'tulasi@gmail.com',
      model: 'honda',
      color: 'white',
    },
    {
      name: 'Bindu',
      email: 'bindu@gmail.com',
      model: 'mercedez',
      color: 'red',
    },
    {
      name: 'Bhargavi',
      email: 'bhargavi@gmail.com',
      model: 'honda',
      color: 'maroon',
    },
  ];
  let htmlBody = `
  <html>
  <head>
    <style>
      body {
        background-color: blueviolet;
        margin: auto;
        padding: 10px;
        text-align: center;
      }
      table {
        border: 2px solid black;
        padding: 10px;
        margin: 10px auto;
        background-color: white;
        border-radius: 10px;
        box-shadow: 3px 3px 3px black;
        width: 50%;
        border-collapse: collapse;
      }
      th,
      td {
        border: 1px solid black;
        padding: 10px;
      }
      h1 {
        color: white;
        font-family: 'Times New Roman', Times, serif;
        border-bottom: 3px solid grey;
      }
    </style>
  </head>
  <body>
    <h1>Showing all Cars details</h1>
    <table>
      <tr>
        <th>Customer Name</th>
        <th>Customer Email</th>
        <th>Car Model</th>
        <th>Car Color</th>
      </tr>`;
  carsArr.forEach((val) => {
    htmlBody += `<tr><td>${val.name}</td><td>${val.email}</td><td>${val.model}</td><td>${val.color}</td></tr>`;
  });
  htmlBody += `</table>
  </body>
</html>`;
  res.send(htmlBody);
});

app.post('/result', (req, res) => {
  let result;
  if (req.body.username === 'smith' && req.body.password === 'abc') {
    result = `You have successfully Logged in`;
  } else {
    result = `Invalid Login Details`;
  }
  res.send(`
    <html>
    <head>
      <style>
        body {
          border: 4px solid green;
          width: fit-content;
          height: fit-content;
          padding: 20px;
          margin: 10px auto;
        }
        div {
          padding: 10px;
          margin: 10px;
          width: fit-content;
          border: 3px solid purple;
        }
        i{
          text-decoration: underline;
        }
      </style>
    </head>
    <body>
      <h2>
        <div><i>${result}</i></div>
      </h2>
    </body>
  </html>`);
});
app.listen(3001);
console.log('App is running at port 3001');
