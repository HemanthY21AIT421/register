const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Route for serving the registration form
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "registerform.html"));
});

// Route for handling form submission
app.post("/register", (req, res) => {
  // Extract form data
  const {
    username,
    email,
    password,
    confirmpassword,
    gender,
    country,
    subscribe,
  } = req.body;

  // Log the form data
  console.log(
    `User registered: ${username}, ${email}, ${password}, ${confirmpassword}, ${gender}, ${country}, ${subscribe}`
  );

  // Send confirmation message back to the client
  res.send("Registration successfully completed!");
});

// Set the port for the server to listen on
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});