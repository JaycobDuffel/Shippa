const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");


//middleware
app.use(cors());
app.use(express.json()); //req.body

// User Routes //

//create a user

app.post('/users', async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const newUser = await pool.query("INSERT INTO users (name, email, password) VALUES($1, $2, $3) RETURNING *",
     [name, email, password]
     );

     res.json(newUser.rows)
  } catch (error) {
    console.error(error.message)
  }
})

//get all users

app.get('/users', async (req, res) => {
  try {
    const allUsers = await pool.query("SELECT * FROM users")
    res.json(allUsers.rows)
  } catch (error) {
    console.error(error.message)
  }
})

//get a user

app.get('/users/:id', async (req,res) => {
  try {
    const { id } = req.params;
    const email = req.body.email;
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [email])

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

    const updateUser = await pool.query('UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4', [name, email, password, id])
    
    res.json("User Updated")

  } catch (error) {
    console.error(error.message)
  }
})

//delete a user 

app.delete('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await pool.query('DELETE FROM users WHERE id = $1', [id])

    res.json("User deleted")
  } catch (error) {
    console.error(error.message)
  }
})



// Shipment Routes

// Create a shipment
app.post('/shipments', async (req, res) => {
  try {
    const user_id = req.body.user_id;
    const start_point = req.body.start_point;
    const end_point = req.body.end_point;
    const latitude = req.body.latitude;
    const longitude = req.body.longitude;

    const distance = req.body.distanceBetween;
    const price = req.body.cost;
    const status = req.body.status;

    const newShipment = await pool.query("INSERT INTO shipments (user_id, start_point, end_point, latitude, longitude, distance, price, status) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
     [user_id, start_point, end_point, latitude, longitude, distance, price, status]
     )

     res.json(newShipment.rows)
     
  } catch (error) {
    console.error(error.message)
  }
})

//Get all shipments
app.get('/shipments', async (req, res) => {
  try {
    const allShipments = await pool.query("SELECT * FROM shipments")
    res.json(allShipments.rows)
  } catch (error) {
    console.error(error.message)
  }
})
//Get a shipment
app.get('/shipments/:id', async (req,res) => {
  try {
    const { id } = req.params;
    const shipment = await pool.query("SELECT * FROM shipments JOIN users ON shipments.user_id = users.id WHERE shipments.id = $1", [id])

    res.json(shipment.rows)
  } catch (error) {
    console.error(error.message)
  }
})
// Get all shipments for user
app.get('/usershipments/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const shipmentsByUser = await pool.query("SELECT * FROM shipments WHERE shipments.user_id = $1 ORDER BY shipments.id", [id])

    res.json(shipmentsByUser.rows)
  } catch (error) {
    console.error(error.message)
  }
})

//Update a shipment

app.put('/shipments/:id', async (req, res) => {
  try {
    const user_id = req.body.user_id;
    const start_point = req.body.start_point;
    const end_point = req.body.end_point;
    const distance = req.body.distance;
    const price = req.body.price;
    const status = req.body.status;

    const { id } = req.params;

    const updateUser = await pool.query('UPDATE shipments SET user_id = $1, start_point = $2, end_point = $3, distance = $4, price = $5, status = $6 WHERE id = $7', [user_id, start_point, end_point, distance, price, status, id])
     
    
    res.json("User Updated")

  } catch (error) {
    console.error(error.message)
  }
})

// Delete Shipment

app.delete('/shipments/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteShipment = await pool.query('DELETE FROM shipments WHERE id = $1', [id])

    res.json("Shipment deleted")
  } catch (error) {
    console.error(error.message)
  }
})

app.listen(5000, () => {
    //listen logic here, can't see it on the video yet. 
    console.log("Server listening on port 5000")
})