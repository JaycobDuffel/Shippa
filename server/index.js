const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//Routes 

//create a user

app.post('/users', async (req, res) => {
  try {
    // const { name, email, password } = req.body;   //this syntax doesn't seem right....maybe req.body.name, req.body.email, req.body.password.....
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const newUser = await pool.query("INSERT INTO user (name, email, password) VALUES($1, $2, $3) RETURNING *",
     [name, email, password]
     );

     res.json(newUser.rows[0])
  } catch (error) {
    console.error(error.message)
  }
})

//get all users

app.get('/users', async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM users")
    res.json(allUsers.rows)
  } catch (error) {
    console.error(error.message)
  }
})

//get a user

app.get('/users/:id', async (req,res) => {
  try {
    // console.log(req.params);
    const { id } = req.params;
    const user = await pool.query("SELECT * FROM users WHERE id = $1", [id])

    res.json(user.rows[0])
  } catch (error) {
    console.error(error.message)
  }
})

//update a user

app.put('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    
    // const user { 
    //     name: req.body.name, 
    //     email: req.body.email, 
    //     password: req.body.password 
    // }; //verify syntax here?

    const updateUser = await pool.query('UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4', [name, email, password, id])

  } catch (error) {
    console.error(error.message)
  }
})

//delete a user 

app.delete('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await pool.query('DELETE FROM users WHERE id = $1', [id])
  } catch (error) {
    console.error(error.message)
  }
})


app.listen(5000, () => {
    //listen logic here, can't see it on the video yet. 
    console.log("Server listening on port 5000")
})