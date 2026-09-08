// Import the Express library
const express = require("express");

// Create an Express application
const app = express();

// Port on which our server will run
const PORT = 3000;


// MIDDLEWARE

// This middleware allows Express to understand JSON
// data sent in the request body.
app.use(express.json());


// BASIC ROUTE

app.get("/", (req, res) => {
    // req = request coming from the client
    // res = response that we send back to the client

    res.send("Welcome to my Express server!");
});


// SIMPLE GET ROUTE

app.get("/about", (req, res) => {

    res.send("This is the About page.");
});


// GET ROUTE WITH JSON

app.get("/user", (req, res) => {

    // We can send JavaScript objects as JSON
    res.json({
        name: "Prabhath",
        age: 19,
        course: "AI & ML"
    });
});


// ROUTE PARAMETERS

app.get("/users/:id", (req, res) => {

    const userId = req.params.id;

    res.send(`You requested user with ID: ${userId}`);
});


// QUERY PARAMETERS



app.get("/search", (req, res) => {

    const name = req.query.name;

    res.send(`You searched for: ${name}`);
});


// POST REQUEST

// POST requests are generally used to send data

app.post("/users", (req, res) => {

    // Data sent by the client is available
    // inside req.body

    const userData = req.body;

    console.log("Received user:", userData);

    // Send a response back to the client
    res.json({
        message: "User received successfully",
        user: userData
    });
});

// --------------------------------------------------
// PUT REQUEST

// PUT is commonly used to update existing data.

app.put("/users/:id", (req, res) => {

    const userId = req.params.id;
    const updatedData = req.body;

    res.json({
        message: "User updated successfully",
        id: userId,
        updatedUser: updatedData
    });
});


// DELETE REQUEST

// DELETE is commonly used to remove data.

app.delete("/users/:id", (req, res) => {

    const userId = req.params.id;

    res.json({
        message: "User deleted successfully",
        id: userId
    });
});


// START SERVER

app.listen(PORT, () => {

    console.log(`Server running at http://localhost:${PORT}`);

});