import express from 'express';
import mongoose from 'mongoose';
import { userApi } from './routes/user.routes.js';
import cors from 'cors';


const app = express();
const PORT=7500;
mongoose.connect('mongodb+srv://akshayjosephjimmy05_db_user:9KfOTNYlEu1nURK9@cluster0.kuu3zxu.mongodb.net/')
.then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log(err);
})


app.use(cors({
    origin: "http://localhost:5173",   // allow your frontend
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], 
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
})); // allow preflight for all routes

app.use(express.json());
app.use((req, res, next) => {
  console.log("Incoming request:", req.method, req.url);
  next();
});

userApi(app);
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})




//akshayjosephjimmy05_db_user
//9KfOTNYlEu1nURK9