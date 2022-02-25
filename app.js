import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";

const SECRET_KEY = "SECRET_KEY";
const app = express();

app.use(cors());

app.get("/login", (req, res) => {
  try {
    const [, hash] = req.headers?.authorization?.split(" ");

    if (!hash) throw new Error();

    const [username, password] = Buffer.from(hash, "base64").toString().split(":");

    if (username === "Sandro" && password === "admin123") {
      return res
        .status(200)
        .json({ auth: jwt.sign({ user: 1 }, SECRET_KEY), user: { name: "Sandro", company: "Techbois" } });
    }

    return res.status(401).json({ err: "Bad Credentials" });
  } catch (error) {
    return res.status(500).json({ err: "Internal Server Error" });
  }
});

app.get("/auth/validate", (req, res) => {
  try {
    const [, hash] = req.headers?.authorization?.split(" ");

    if (!hash) throw new Error();

    const isValid = jwt.verify(hash, SECRET_KEY, (err, data) => {
      if (err) return false;

      return data;
    });

    if (isValid) return res.status(200).json({ auth: true });

    return res.status(401).json({ auth: false });
  } catch (error) {
    return res.status(500).json({ err: "Internal server error" });
  }
});

app.listen(3001, () => console.log("Listening on 3001"));
