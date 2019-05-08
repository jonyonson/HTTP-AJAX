const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
let nextId = 7;

function getNewId() {
  return nextId++;
}

let friends = [
  {
    id: 1,
    name: 'Ross Gellar',
    age: 51,
    email: 'dinosaurdude@aol.com',
    phone: '(212) 987-2736',
  },
  {
    id: 2,
    name: 'Rachel Green',
    age: 49,
    email: 'rachelg@hotmail.com',
    phone: '(212) 555-3223',
  },
  {
    id: 3,
    name: 'Monica Gellar-Bing',
    age: 49,
    email: 'monicabinggellar@gmail.com',
    phone: '(212) 324-1827',
  },
  {
    id: 4,
    name: 'Joey Tribbiani',
    age: 50,
    email: 'joe7362@yahoo.com',
    phone: '(212) 332-0987',
  },
  {
    id: 5,
    name: 'Chandler Bing',
    age: 50,
    email: 'chandlerbing@icloud.com',
    phone: '(212) 659-0987',
  },
  {
    id: 6,
    name: 'Phoebe Buffay',
    age: 51,
    email: 'phoebe@hotmail.com',
    phone: '(212) 954-2321',
  },
];

app.use(cors());
app.use(bodyParser.json());

app.get('/friends', (req, res) => {
  res.status(200).json(friends);
});

app.post('/friends', (req, res) => {
  const friend = { id: getNewId(), ...req.body };
  friends = [...friends, friend];
  res.status(201).json(friends);
});

app.put('/friends/:id', (req, res) => {
  const { id } = req.params;
  let friendIndex = friends.findIndex(friend => friend.id == id);

  if (friendIndex >= 0) {
    friends[friendIndex] = { ...friends[friendIndex], ...req.body };
    res.status(200).json(friends);
  } else {
    res
      .status(404)
      .json({ message: `The friend with id ${id} does not exist.` });
  }
});

app.delete('/friends/:id', (req, res) => {
  friends = friends.filter(friend => friend.id != req.params.id);
  res.status(200).json(friends);
});

app.listen(5000, () => {
  console.log('server listening on port 5000');
});
