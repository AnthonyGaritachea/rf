import express from "express";
import fetch from "node-fetch";
import * as dotenv from "dotenv";
import path from "path";
import type { Businesses } from "../types";

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const router = express.Router();

router.get("/top", (req, res) => {
  fetch(`${process.env.BASE_URL}/search?location=US&term=restaurants&categories=&sort_by=rating&limit=20`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.API_KEY}`
    }
  })
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        return res.status(400).json({ error: "Unable to get top 20. Please try again later" });
      }
    })
    .then((data: Businesses) => {
      const restaurants = data.businesses.map(obj => {
        return {
          id: obj.id,
          name: obj.name,
          thumbnail: obj.image_url,
          rating: obj.rating
        };
      });
      res.status(200).json(restaurants);
    })
    .catch(err => {
      console.error(err);
    });
});
