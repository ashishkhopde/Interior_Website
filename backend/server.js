import express from 'express';
import cors from 'cors';
import "dotenv/config";

import connectDB from './Config/db.js';
import ProjectRoute from './Routers/Project.Route.js';
import BlogRoute from './Routers/Blog.Route.js';
import ServiceRoute from './Routers/Service.Route.js';
import ContactRoute from './Routers/Contact.Route.js';

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => { 
    res.send("Hello from backend");
});

app.use("/api/project", ProjectRoute);
app.use("/api/blog", BlogRoute);
app.use("/api/service", ServiceRoute);
app.use("/api/contact", ContactRoute);

app.listen(process.env.PORT, () => {
    console.log("listening...");
});