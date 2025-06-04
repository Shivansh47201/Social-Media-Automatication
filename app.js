
import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import path from 'path';

//Import ROUTES 


const app = express();


// MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));


//STATIC FILES 
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


//Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/schedule", scheduleRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/social", socialRoutes);


// 404 Route Handler
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

