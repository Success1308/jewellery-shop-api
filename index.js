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
    img: "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/100.jpeg",
    details: "A stylish silver chain that adds elegance to any outfit.",
  },
  {
    id: 2,
    name: "Women's Rose Gold Necklace",
    category: "Women",
    price: 200.0,
    color: "Rose Gold",
    img: "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/200.jpeg",
    details: "A delicate rose gold necklace perfect for special occasions.",
  },
  {
    id: 3,
    name: "Men's Gold Bracelet",
    category: "Men",
    price: 250.0,
    color: "Gold",
    img: "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/300.jpeg",
    details: "A bold gold bracelet that showcases luxury and style.",
  },
  {
    id: 4,
    name: "Women's Silver Earrings",
    category: "Women",
    price: 100.0,
    color: "Silver",
    img: "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/400.jpeg",
    details: "Elegant silver earrings that complement any outfit.",
  },
  {
    id: 5,
    name: "Women's Gold Ring",
    category: "Women",
    price: 180.0,
    color: "Gold",
    img: "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/500.jpeg",
    details: "A stunning gold ring adorned with intricate designs.",
  },
  {
    id: 6,
    name: "Men's Rose Gold Watch",
    category: "Men",
    price: 300.0,
    color: "Rose Gold",
    img: "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/600.jpeg",
    details:
      "A sophisticated rose gold watch that combines function with style.",
  },
  {
    id: 7,
    name: "Men's Gold Cufflinks",
    category: "Men",
    price: 120.0,
    color: "Gold",
    img: "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/700.jpeg",
    details:
      "Classic gold cufflinks that add a touch of elegance to formal attire.",
  },
  {
    id: 8,
    name: "Women's Silver Bracelet",
    category: "Women",
    price: 90.0,
    color: "Silver",
    img: "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/800.jpeg",
    details: "A chic silver bracelet for everyday wear.",
  },
  {
    id: 9,
    name: "Men's Rose Gold Chain",
    category: "Men",
    price: 160.0,
    color: "Rose Gold",
    img: "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/900.jpeg",
    details: "A trendy rose gold chain for a modern look.",
  },
  {
    id: 10,
    name: "Women's Gold Earrings",
    category: "Women",
    price: 140.0,
    color: "Gold",
    img: "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/1000.jpeg",
    details: "Stylish gold earrings that add a sparkle to your outfit.",
  },
  {
    id: 11,
    name: "Men's Silver Ring",
    category: "Men",
    price: 130.0,
    color: "Silver",
    img: "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/1100.jpeg",
    details: "A classic silver ring that suits all occasions.",
  },
  {
    id: 12,
    name: "Women's Rose Gold Bracelet",
    category: "Women",
    price: 110.0,
    color: "Rose Gold",
    img: "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/1200.jpeg",
    details: "An exquisite rose gold bracelet that adds elegance.",
  },
  {
    id: 13,
    name: "Men's Gold Watch",
    category: "Men",
    price: 350.0,
    color: "Gold",
    img: "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/1300.jpeg",
    details: "A luxury gold watch that defines sophistication.",
  },
  {
    id: 14,
    name: "Women's Silver Necklace",
    category: "Women",
    price: 190.0,
    color: "Silver",
    img: "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/1400.jpeg",
    details: "A beautiful silver necklace perfect for layering.",
  },
  {
    id: 15,
    name: "Men's Rose Gold Earrings",
    category: "Men",
    price: 95.0,
    color: "Rose Gold",
    img: "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/1500.jpeg",
    details: "Stylish rose gold earrings that enhance your look.",
  },
  {
    id: 16,
    name: "Women's Gold Anklet",
    category: "Women",
    price: 85.0,
    color: "Gold",
    img: "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/1600.jpeg",
    details: "A delicate gold anklet that adds a touch of glamour.",
  },
  {
    id: 17,
    name: "Men's Silver Bracelet",
    category: "Men",
    price: 140.0,
    color: "Silver",
    img: "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/1700.jpeg",
    details: "A modern silver bracelet that suits any outfit.",
  },
  {
    id: 18,
    name: "Women's Rose Gold Anklet",
    category: "Women",
    price: 75.0,
    color: "Rose Gold",
    img: "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/1800.jpeg",
    details: "A charming rose gold anklet for casual wear.",
  },
  {
    id: 19,
    name: "Men's Gold Tie Clip",
    category: "Men",
    price: 60.0,
    color: "Gold",
    img: "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/1900.jpeg",
    details: "A sleek gold tie clip to elevate your formal attire.",
  },
  {
    id: 20,
    name: "Women's Silver Hairpin",
    category: "Women",
    price: 50.0,
    color: "Silver",
    img: "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/2000.jpeg",
    details: "A stylish silver hairpin for a polished look.",
  },
  {
    id: 21,
    name: "Men's Rose Gold Cufflinks",
    category: "Men",
    price: 130.0,
    color: "Rose Gold",
    img: "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/2100.jpeg",
    details: "Sophisticated rose gold cufflinks for a distinguished look.",
  },
  {
    id: 22,
    name: "Women's Gold Necklace",
    category: "Women",
    price: 220.0,
    color: "Gold",
    img: "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/2200.jpeg",
    details: "An exquisite gold necklace that captivates attention.",
  },
  {
    id: 23,
    name: "Men's Silver Watch",
    category: "Men",
    price: 310.0,
    color: "Silver",
    img: "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/2300.jpeg",
    details: "A classic silver watch that combines functionality with style.",
  },
  {
    id: 24,
    name: "Women's Rose Gold Earrings",
    category: "Women",
    price: 105.0,
    color: "Rose Gold",
    img: "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/2400.jpeg",
    details: "Chic rose gold earrings that complete your outfit.",
  },
  {
    id: 25,
    name: "Men's Gold Chain",
    category: "Men",
    price: 170.0,
    color: "Gold",
    img: "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/2500.jpeg",
    details: "A timeless gold chain that stands out.",
  },
  {
    id: 26,
    name: "Women's Silver Bracelet with Diamonds",
    category: "Women",
    price: 220.0,
    color: "Silver",
    img: "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/2600.jpeg",
    details: "A stunning silver bracelet adorned with diamonds.",
  },
  {
    id: 27,
    name: "Men's Rose Gold Pendant",
    category: "Men",
    price: 120.0,
    color: "Rose Gold",
    img: "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/2700.jpeg",
    details: "A unique rose gold pendant that adds charm.",
  },
  {
    id: 28,
    name: "Women's Gold Brooch",
    category: "Women",
    price: 90.0,
    color: "Gold",
    img: "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/2800.jpeg",
    details: "A decorative gold brooch that enhances your attire.",
  },
  {
    id: 29,
    name: "Men's Silver Pendant",
    category: "Men",
    price: 180.0,
    color: "Silver",
    img: "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/2900.jpeg",
    details: "A sleek and stylish silver pendant with a modern design."
  },
  {
    id: 30,
    name: "Men's Rose Gold Ring",
    category: "Women",
    price: 290.0,
    color: "Rose Gold",
    img: "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/3000.jpeg",
    details: "A bold and stylish men's rose gold ring with a smooth, polished finish."
  },
  {
    id: 31,
    name: "Men's Gold Chain",
    category: "Men",
    price: 160.0,
    color: "Gold",
    img: "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/3100.jpeg",
    details: "A sophisticated men's gold chain, perfect for everyday wear or special occasions."
  },
  {
    id: 32,
    name: "Women's Silver Hoop Earrings",
    category: "Women",
    price: 75.0,
    color: "Silver",
    img: "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/3200.jpeg",
    details: "Classic silver hoop earrings for a timeless look.",
  },
  {
    id: 33,
    name: "Men's Rose Gold Tie Clip",
    category: "Men",
    price: 140.0,
    color: "Rose Gold",
    img: "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/3300.jpeg",
    details: "A stylish rose gold Tie Clip that makes a statement.",
  },
  {
    id: 34,
    name: "Women's Gold Pendanat",
    category: "Women",
    price: 100.0,
    color: "Gold",
    img: "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/3400.jpeg",
    details: "A trendy gold Pendanat that enhances your neckline.",
  },
  {
    id: 35,
    name: "Men's Silver Necklace",
    category: "Men",
    price: 130.0,
    color: "Silver",
    img: "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/3500.jpeg",
    details: "A sleek silver necklace for a modern look.",
  },
  {
    id: 36,
    name: "Women's Rose Gold Brooch",
    category: "Women",
    price: 150.0,
    color: "Rose Gold",
    img: "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/3600.jpeg",
    details: "An elegant rose gold Brooch with a unique design.",
  },
  {
    id: 37,
    name: "Men's Gold Watch",
    category: "Men",
    price: 220.0,
    color: "Gold",
    img: "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/3700.jpeg",
    details: "A robust gold Watch for the bold man.",
  },
  {
    id: 38,
    name: "Women's Silver Pendant",
    category: "Women",
    price: 85.0,
    color: "Silver",
    img: "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/3800.jpeg",
    details: "A stunning silver Pendant that enhances your Neck.",
  },
  {
    id: 39,
    name: "Men's Rose Gold ring with Stones",
    category: "Men",
    price: 250.0,
    color: "Rose Gold",
    img: "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/3900.jpeg",
    details: "A striking rose gold ring embellished with stones.",
  },
  {
    id: 40,
    name: "Women's Gold Statement Choker",
    category: "Women",
    price: 160.0,
    color: "Gold",
    img: "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/4000.jpeg",
    details: "A bold gold statement Choker that commands attention.",
  },
  {
    id: 41,
    name: "Men's Silver Cufflings",
    category: "Men",
    price: 200.0,
    color: "Silver",
    img: "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/4100.jpeg",
    details: "A stylish silver Cufflings with an elegant design.",
  },
  {
    id: 42,
    name: "Women's Rose Gold Drop Hairband",
    category: "Women",
    price: 110.0,
    color: "Rose Gold",
    img: "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/4200.jpeg",
    details: "Beautiful rose gold drop Hairband for any occasion.",
  },
  {
    id: 43,
    name: "Men's Gold Signet chain",
    category: "Men",
    price: 240.0,
    color: "Gold",
    img: "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/4300.jpeg",
    details: "A classic gold signet chain that symbolizes sophistication.",
  },
  {
    id: 44,
    name: "Women's Silver Cuff",
    category: "Women",
    price: 125.0,
    color: "Silver",
    img: "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/4400.jpeg",
    details: "An elegant silver cuff that adds a modern touch.",
  },
  {
    id: 45,
    name: "Men's Gold Watch",
    category: "Men",
    price: 70.0,
    color: "Rose Gold",
    img: "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/4500.jpeg",
    details: "A classic men's gold watch with a timeless design, perfect for both formal and casual wear."
  },
  {
    id: 46,
    name: "Women's Gold Hairband",
    category: "Women",
    price: 65.0,
    color: "Gold",
    img: "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/4600.jpeg",
    details: "A decorative gold hairband that enhances your hairstyle.",
  },
  {
    id: 47,
    name: "Men's Silver ID Tie pin",
    category: "Men",
    price: 150.0,
    color: "Silver",
    img: "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/4700.jpeg",
    details: "A stylish silver ID Tie pin that showcases your personality.",
  },
  {
    id: 48,
    name: "Women's Rose Gold Bracelet",
    category: "Women",
    price: 200.0,
    color: "Rose Gold",
    img: "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/4800.jpeg",
    details: "A fashionable rose gold Bracelet for special occasions.",
  },
  {
    id: 49,
    name: "Men's Gold Ring with Yellow Diamond",
    category: "Men",
    price: 220.0,
    color: "Gold",
    img: "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/4900.jpeg",
    details: "A luxurious men's gold ring featuring a stunning yellow diamond at the center, perfect for making a bold statement."
  },
  {
    id: 50,
    name: "Women's Silver Chain",
    category: "Women",
    price: 75.0,
    color: "Silver",
    img: "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/5000.jpeg",
    details: "A stunning silver hair chain that enhances your hairstyle.",
  },
];

app.get("/jewellery", (req, res) => {
  res.json(jewellery);
});

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
