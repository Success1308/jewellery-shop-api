import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

const jewellery = [
  {
    id: 1,
    name: "Men's Silver Chain",
    category: "Men",
    price: 150.0,
    color: "Silver",
    img: "https://example.com/images/mens_silver_chain.jpg",
  },
  {
    id: 2,
    name: "Women's Rose Gold Necklace",
    category: "Women",
    price: 200.0,
    color: "Rose Gold",
    img: "https://example.com/images/womens_rose_gold_necklace.jpg",
  },
  {
    id: 3,
    name: "Men's Gold Bracelet",
    category: "Men",
    price: 250.0,
    color: "Gold",
    img: "https://example.com/images/mens_gold_bracelet.jpg",
  },
  {
    id: 4,
    name: "Women's Silver Earrings",
    category: "Women",
    price: 100.0,
    color: "Silver",
    img: "https://example.com/images/womens_silver_earrings.jpg",
  },
  {
    id: 5,
    name: "Women's Gold Ring",
    category: "Women",
    price: 180.0,
    color: "Gold",
    img: "https://example.com/images/womens_gold_ring.jpg",
  },
  {
    id: 6,
    name: "Men's Rose Gold Watch",
    category: "Men",
    price: 300.0,
    color: "Rose Gold",
    img: "https://example.com/images/mens_rose_gold_watch.jpg",
  },
  {
    id: 7,
    name: "Men's Gold Cufflinks",
    category: "Men",
    price: 120.0,
    color: "Gold",
    img: "https://example.com/images/mens_gold_cufflinks.jpg",
  },
  {
    id: 8,
    name: "Women's Silver Bracelet",
    category: "Women",
    price: 90.0,
    color: "Silver",
    img: "https://example.com/images/womens_silver_bracelet.jpg",
  },
  {
    id: 9,
    name: "Men's Rose Gold Chain",
    category: "Men",
    price: 160.0,
    color: "Rose Gold",
    img: "https://example.com/images/mens_rose_gold_chain.jpg",
  },
  {
    id: 10,
    name: "Women's Gold Earrings",
    category: "Women",
    price: 140.0,
    color: "Gold",
    img: "https://example.com/images/womens_gold_earrings.jpg",
  },
  {
    id: 11,
    name: "Men's Silver Ring",
    category: "Men",
    price: 130.0,
    color: "Silver",
    img: "https://example.com/images/mens_silver_ring.jpg",
  },
  {
    id: 12,
    name: "Women's Rose Gold Bracelet",
    category: "Women",
    price: 110.0,
    color: "Rose Gold",
    img: "https://example.com/images/womens_rose_gold_bracelet.jpg",
  },
  {
    id: 13,
    name: "Men's Gold Watch",
    category: "Men",
    price: 350.0,
    color: "Gold",
    img: "https://example.com/images/mens_gold_watch.jpg",
  },
  {
    id: 14,
    name: "Women's Silver Necklace",
    category: "Women",
    price: 190.0,
    color: "Silver",
    img: "https://example.com/images/womens_silver_necklace.jpg",
  },
  {
    id: 15,
    name: "Men's Rose Gold Earrings",
    category: "Men",
    price: 95.0,
    color: "Rose Gold",
    img: "https://example.com/images/mens_rose_gold_earrings.jpg",
  },
  {
    id: 16,
    name: "Women's Gold Anklet",
    category: "Women",
    price: 85.0,
    color: "Gold",
    img: "https://example.com/images/womens_gold_anklet.jpg",
  },
  {
    id: 17,
    name: "Men's Silver Bracelet",
    category: "Men",
    price: 140.0,
    color: "Silver",
    img: "https://example.com/images/mens_silver_bracelet.jpg",
  },
  {
    id: 18,
    name: "Women's Rose Gold Anklet",
    category: "Women",
    price: 75.0,
    color: "Rose Gold",
    img: "https://example.com/images/womens_rose_gold_anklet.jpg",
  },
  {
    id: 19,
    name: "Men's Gold Tie Clip",
    category: "Men",
    price: 60.0,
    color: "Gold",
    img: "https://example.com/images/mens_gold_tie_clip.jpg",
  },
  {
    id: 20,
    name: "Women's Silver Hairpin",
    category: "Women",
    price: 50.0,
    color: "Silver",
    img: "https://example.com/images/womens_silver_hairpin.jpg",
  },
  {
    id: 21,
    name: "Men's Rose Gold Cufflinks",
    category: "Men",
    price: 130.0,
    color: "Rose Gold",
    img: "https://example.com/images/mens_rose_gold_cufflinks.jpg",
  },
  {
    id: 22,
    name: "Women's Gold Necklace",
    category: "Women",
    price: 220.0,
    color: "Gold",
    img: "https://example.com/images/womens_gold_necklace.jpg",
  },
  {
    id: 23,
    name: "Men's Silver Watch",
    category: "Men",
    price: 310.0,
    color: "Silver",
    img: "https://example.com/images/mens_silver_watch.jpg",
  },
  {
    id: 24,
    name: "Women's Rose Gold Earrings",
    category: "Women",
    price: 105.0,
    color: "Rose Gold",
    img: "https://example.com/images/womens_rose_gold_earrings.jpg",
  },
  {
    id: 25,
    name: "Men's Gold Pendant",
    category: "Men",
    price: 175.0,
    color: "Gold",
    img: "https://example.com/images/mens_gold_pendant.jpg",
  },
  {
    id: 26,
    name: "Women's Silver Brooch",
    category: "Women",
    price: 65.0,
    color: "Silver",
    img: "https://example.com/images/womens_silver_brooch.jpg",
  },
  {
    id: 27,
    name: "Men's Rose Gold Tie Clip",
    category: "Men",
    price: 55.0,
    color: "Rose Gold",
    img: "https://example.com/images/mens_rose_gold_tie_clip.jpg",
  },
  {
    id: 28,
    name: "Women's Gold Brooch",
    category: "Women",
    price: 70.0,
    color: "Gold",
    img: "https://example.com/images/womens_gold_brooch.jpg",
  },
  {
    id: 29,
    name: "Men's Silver Pendant",
    category: "Men",
    price: 160.0,
    color: "Silver",
    img: "https://example.com/images/mens_silver_pendant.jpg",
  },
  {
    id: 30,
    name: "Women's Rose Gold Hairpin",
    category: "Women",
    price: 45.0,
    color: "Rose Gold",
    img: "https://example.com/images/womens_rose_gold_hairpin.jpg",
  },
  {
    id: 31,
    name: "Men's Gold Earrings",
    category: "Men",
    price: 100.0,
    color: "Gold",
    img: "https://example.com/images/mens_gold_earrings.jpg",
  },
  {
    id: 32,
    name: "Women's Silver Anklet",
    category: "Women",
    price: 80.0,
    color: "Silver",
    img: "https://example.com/images/womens_silver_anklet.jpg",
  },
  {
    id: 33,
    name: "Men's Rose Gold Bracelet",
    category: "Men",
    price: 180.0,
    color: "Rose Gold",
    img: "https://example.com/images/mens_rose_gold_bracelet.jpg",
  },
  {
    id: 34,
    name: "Women's Gold Pendant",
    category: "Women",
    price: 170.0,
    color: "Gold",
    img: "https://example.com/images/womens_gold_pendant.jpg",
  },
  {
    id: 35,
    name: "Men's Silver Brooch",
    category: "Men",
    price: 75.0,
    color: "Silver",
    img: "https://example.com/images/mens_silver_brooch.jpg",
  },
  {
    id: 36,
    name: "Women's Rose Gold Necklace",
    category: "Women",
    price: 210.0,
    color: "Rose Gold",
    img: "https://example.com/images/womens_rose_gold_necklace_2.jpg",
  },
  {
    id: 37,
    name: "Men's Gold Chain",
    category: "Men",
    price: 280.0,
    color: "Gold",
    img: "https://example.com/images/mens_gold_chain.jpg",
  },
  {
    id: 38,
    name: "Women's Silver Earrings",
    category: "Women",
    price: 95.0,
    color: "Silver",
    img: "https://example.com/images/womens_silver_earrings_2.jpg",
  },
  {
    id: 39,
    name: "Men's Rose Gold Pendant",
    category: "Men",
    price: 155.0,
    color: "Rose Gold",
    img: "https://example.com/images/mens_rose_gold_pendant.jpg",
  },
  {
    id: 40,
    name: "Women's Gold Bracelet",
    category: "Women",
    price: 185.0,
    color: "Gold",
    img: "https://example.com/images/womens_gold_bracelet.jpg",
  },
  {
    id: 41,
    name: "Men's Silver Necklace",
    category: "Men",
    price: 195.0,
    color: "Silver",
    img: "https://example.com/images/mens_silver_necklace.jpg",
  },
  {
    id: 42,
    name: "Women's Rose Gold Ring",
    category: "Women",
    price: 125.0,
    color: "Rose Gold",
    img: "https://example.com/images/womens_rose_gold_ring.jpg",
  },
  {
    id: 43,
    name: "Men's Gold Brooch",
    category: "Men",
    price: 85.0,
    color: "Gold",
    img: "https://example.com/images/mens_gold_brooch.jpg",
  },
  {
    id: 44,
    name: "Women's Silver Pendant",
    category: "Women",
    price: 155.0,
    color: "Silver",
    img: "https://example.com/images/womens_silver_pendant.jpg",
  },
  {
    id: 45,
    name: "Men's Rose Gold Watch",
    category: "Men",
    price: 310.0,
    color: "Rose Gold",
    img: "https://example.com/images/mens_rose_gold_watch_2.jpg",
  },
  {
    id: 46,
    name: "Women's Gold Earrings",
    category: "Women",
    price: 135.0,
    color: "Gold",
    img: "https://example.com/images/womens_gold_earrings_2.jpg",
  },
  {
    id: 47,
    name: "Men's Silver Earrings",
    category: "Men",
    price: 85.0,
    color: "Silver",
    img: "https://example.com/images/mens_silver_earrings.jpg",
  },
  {
    id: 48,
    name: "Women's Rose Gold Pendant",
    category: "Women",
    price: 145.0,
    color: "Rose Gold",
    img: "https://example.com/images/womens_rose_gold_pendant.jpg",
  },
  {
    id: 49,
    name: "Men's Gold Necklace",
    category: "Men",
    price: 200.0,
    color: "Gold",
    img: "https://example.com/images/mens_gold_necklace.jpg",
  },
  {
    id: 50,
    name: "Women's Silver Bracelet",
    category: "Women",
    price: 115.0,
    color: "Silver",
    img: "https://example.com/images/womens_silver_bracelet_2.jpg",
  },
];

// Endpoint to get all jewellery
app.get("/jewellery", (req, res) => {
  res.json(jewellery);
});

// Endpoint to get jewellery by ID
app.get("/jewellery/:id", (req, res) => {
  const jewelleryId = parseInt(req.params.id, 10);
  const item = jewellery.find((jewel) => jewel.id === jewelleryId);

  if (item) {
    res.json(item);
  } else {
    res.status(404).send("Jewellery item not found");
  }
});

app.listen(port, () => {
  console.log(`Jewellery Shop API is running on http://localhost:${port}`);
});
