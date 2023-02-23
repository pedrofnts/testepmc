import express from "express";
import characterRoute from "./characters.route";

const app = express();
app.use(express.json());
app.use("/", characterRoute);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
