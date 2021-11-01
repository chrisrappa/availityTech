import express from 'express';
import userRoute from './routes/userRoute.js';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/api/users/', userRoute);

app.get('/', (req, res) => {
  res.send("This is the main route")
})

app.listen(5000, () => {
  console.log("Server started at PORT 5000");
});