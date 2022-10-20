const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const helmet = require("helmet")
const morgan= require("morgan")
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const postRoute = require("./routes/post")
const app = express()

app.use(helmet())
app.use(morgan("common"))

dotenv.config()

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB")
  }
)

// mongoose.connect(
//   'mongodb+srv://dhruvish1331:mongodbbc2003@socialmedia.cg7kjpt.mongodb.net/?retryWrites=true&w=majority'
//   // process.env.MONGO_URL,
//   // options
// )
// .then(()=>console.log('connected'))
// .catch(e=>console.log(e));
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

app.use("/api/users",userRoute)
app.use("/api/auth",authRoute)
app.use("/api/post",postRoute)

app.listen(8800,()=>{
    console.log("server is listening on port 8800");
})