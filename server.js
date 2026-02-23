require("dotenv").config();
const express = require("express");
const connectToDb = require("./database/db");
const bookRoutes = require("./routes/book-routes");

const app = express();
const PORT = process.env.PORT || 3000;

//connect to database
connectToDb();

//middleware -> express.json()
app.use(express.json());

//routes here
app.use("/api/books", bookRoutes);

app.listen(PORT, () => {
  console.log(`Serever is mow running on port ${PORT}`);
});
