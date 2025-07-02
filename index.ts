import express from "express";
import axios from "axios";
import fs from "fs";

const app = express();
const PORT = process.env.PORT || 3001;

const servers = JSON.parse(fs.readFileSync("config.json", "utf-8"));

app.get("/servers", async (req, res) => {
    const results = await Promise.all(servers.map(async (server) => {
        try {
            const response = await axios.get(server.url);
            return { name: server.name, data: response.data };
        } catch (error) {
            return { name: server.name, error: "Ошибка запроса" };
        }
    }));
    res.json(results);
});

1
