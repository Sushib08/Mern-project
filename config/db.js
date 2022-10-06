const mongoose = require("mongoose");

// mongoose.connect(
//   "mongodb+srv://sushi_B11:Vietnam1994@cluster0.y88szpd.mongodb.net/mern-project",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   (err) => {
//     if (err) throw console.log("Failed to connect to MongoDB", err); err;
//     console.log("Connected to MongoDB");
//   }
// );
// pareil que l'écriture en dessous

mongoose
  .connect(
    // "mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0.y88szpd.mongodb.net/mern-project",
    "mongodb+srv://" + process.env.DB_USER_PASS + "@cluster1.ykrzlrf.mongodb.net/mern-project",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));
