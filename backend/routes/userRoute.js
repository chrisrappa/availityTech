import express from 'express';

const router = express.Router();

router.post('/register', async (req, res) => {
  const user = {
    firstName: req.body.name,
    lastName: req.body.name,
    email: req.body.email,
    npiNumber: req.body.npiNumber,
    phone: req.body.phone,
    businessAddress: req.body.businessAddress
  };

  res.send({user});
  console.log(user.firstName);


  console.log("register post route");
})

router.get('/api/users/register', (req, res) => {
  res.send("register get route");
})


export default router;