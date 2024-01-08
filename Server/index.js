import express from 'express'

import { feedPost } from './routes/feedPost';
import { auth } from './routes/auth';
require('dotenv').config();
const app = express();
app.use(express.json())

// feed router
app.use("/api/feed", feedPost);
// app.use("/api/create", feedPost);
app.use("/api/auth", auth);
// app.use("/api/users", feedPost);

app.listen(process.env.PORT_NO,()=> console.log(`server started.... \nhttp://localhost:8080/`))