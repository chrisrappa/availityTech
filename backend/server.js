import express from 'express';
import userRoute from './routes/userRoute.js';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/api/users/', userRoute);

app.get('/api/users/register', (req, res) => {
  
  res.send("This is the register route");
})

app.post('/api/users/register', async (req, res) => {
  res.send("User has registerd");
  console.log("register route");
})

app.get('/', (req, res) => {
  res.send("This is the main route")
})

app.listen(5000, () => {

  console.log("Server started at PORT 5000");
});