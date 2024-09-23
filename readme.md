# Jewellery Shop API 💍

This API provides a collection of jewelry items categorized for both men and women. Each item contains details such as name, category, price, color (Rose Gold, Silver, Gold), and an image URL. It's a great resource for building e-commerce platforms or online jewelry catalogs.

## Features

- 50 unique jewelry items with relevant details
- Categories for Men and Women
- Price range from affordable to luxury
- Jewelry available in Rose Gold, Silver, and Gold
- Easy integration for front-end applications

## Tech Stack

- **Node.js**
- **Express.js**
- **CORS**

## Endpoints

### Get All Jewellery

- **URL:** `/jewellery`
- **Method:** `GET`
- **Description:** Fetches all available jewelry items.

### Get Jewellery by ID

- **URL:** `/jewellery/:id`
- **Method:** `GET`
- **Description:** Fetches a specific jewelry item by its ID.

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/jewellery-shop-api.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:

   ```bash
   node index.js

   ```

4. Access the API at:
   ```bash
   [[arduino](http://localhost:3000)](http://localhost:3000)
   ```

Example Item

        {
          "id": 1,
          "name": "Men's Gold Ring",
          "category": "Men",
          "price": 250.00,
          "color": "Gold",
          "img": "https://example.com/images/mens_gold_ring.jpg"
        }

Feel free to clone this repository and use the API in your own applications!
