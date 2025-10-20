const express = require("express");
const app = express();
const port = 3001;
const users = require('./data/Users');

// middleware para parsear el body
app.use(express.json());

// middleware para permitir cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// http://localhost:3000/
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello!",
    timestamp: new Date().toISOString(),
    status: "success",
  });
});

// get all products
// http://localhost:3001/users
app.get('/users', (req, res) => {
  res.json({
    message: 'users',
    timestamp: new Date().toISOString(),
    status: 'success',
    users: users
  });
});

// get user by id

app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  const user = users.find((u) => u.id === id);
  if (!user) {
    return res.status(404).json({
      message: 'Usuario no encontrado',
      timestamp: new Date().toISOString(),
      status: 'error',
    });
  }
  res.json({
    message: 'usuario encontrado',
    timestamp: new Date().toISOString(),
    status: 'success',
    user: user
  });
});

// create user
app.post('/users', (req, res) => {
  const { name, phone, age, email, adress, image } = req.body;
  const newUser = {
    id: (users.length + 1).toString(),
    name,
    phone,
    age,
    email,
    adress,
    image
  };
  users.push(newUser);
  res.json({
    message: 'Usuario creado',
    timestamp: new Date().toISOString(),
    status: 'success',
    user: newUser
  });
});




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
