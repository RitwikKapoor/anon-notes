const mongoose = require("mongoose");
const app = require("./app.js");
const dotenv = require('dotenv');
dotenv.config();

const PORT = 5000;

mongoose
  .connect(process.env.DB_URL, {
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => console.log(`MongoDB connection error: ${err.message}`));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
