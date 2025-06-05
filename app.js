
import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import path from 'path';
import cookieParser from 'cookie-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

//Import ROUTES 

import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';



const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



// MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cookieParser());


//STATIC FILES 
app.use("/uploads", express.static(path.join(__dirname, "public/profile-images/uploads")));



//Routes

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

app.set("view engine","ejs")
app.set("views", path.resolve("./views"));


// 404 Route Handler
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});



export default app;
