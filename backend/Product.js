const products = [
  // ---------------- MEN (1-6) ----------------
  {
    id: 1,
    name: "Woolen hoodie",
    price: "₹24.99",
    oldPrice: "₹39.99",
    review: "128+",
    category: "Men",
    description: "A comfortable slim-fit casual shirt made from breathable cotton, perfect for everyday wear or a smart-casual look.",
    imagePath: "/images/men/men1.jpg"
  },
  {
    id: 2,
    name: "casual shirt",
    price: "₹45.00",
    oldPrice: "₹65.00",
    review: "97+",
    category: "Men",
    description: "Classic blue denim jacket with a sturdy build and timeless design, ideal for layering in any season.",
    imagePath: "/images/men/men2.jpg"
  },
  {
    id: 3,
    name: "Men Formal Blazer",
    price: "₹89.50",
    oldPrice: "₹120.00",
    review: "63+",
    category: "Men",
    description: "Tailored formal blazer with a modern fit, great for office meetings, weddings, and special occasions.",
    imagePath: "/images/men/men3.jpg"
  },
  {
    id: 4,
    name: "Casual",
    price: "₹34.99",
    oldPrice: "₹49.99",
    review: "142+",
    category: "Men",
    description: "Lightweight and stretchable tracksuit designed for workouts, running, and everyday athletic comfort.",
    imagePath: "/images/men/men4.jpg"
  },
  {
    id: 5,
    name: "Wedding Outfit",
    price: "₹29.99",
    oldPrice: "₹42.00",
    review: "110+",
    category: "Men",
    description: "Warm fleece-lined hoodie with a relaxed fit, perfect for chilly evenings and casual outings.",
    imagePath: "/images/men/men5.jpg"
  },
  {
    id: 6,
    name: "Traditional Short Kurta",
    price: "₹39.99",
    oldPrice: "₹54.99",
    review: "205+",
    category: "Men",
    description: "Durable slim-fit jeans crafted from stretch denim for all-day comfort and a sharp silhouette.",
    imagePath: "/images/men/men6.jpg"
  },

  // ---------------- WOMEN (1-6) ----------------
  {
    id: 7,
    name: "Office Wear",
    price: "₹32.99",
    oldPrice: "₹48.00",
    review: "189+",
    category: "Women",
    description: "Elegant floral print dress with a flowy fit, perfect for summer outings and casual gatherings.",
    imagePath: "/images/women/women1.jpg"
  },
  {
    id: 8,
    name: "Floral",
    price: "₹42.00",
    oldPrice: "₹60.00",
    review: "76+",
    category: "Women",
    description: "Stylish cropped denim jacket that pairs perfectly with dresses, jeans, or skirts for a trendy look.",
    imagePath: "/images/women/women2.jpg"
  },
  {
    id: 9,
    name: "Wide Floral",
    price: "₹27.50",
    oldPrice: "₹38.00",
    review: "94+",
    category: "Women",
    description: "Chic and comfortable blouse tailored for office wear, made from soft breathable fabric.",
    imagePath: "/images/women/women3.jpg"
  },
  {
    id: 10,
    name: "Jacket",
    price: "₹19.99",
    oldPrice: "₹29.99",
    review: "231+",
    category: "Women",
    description: "High-waisted stretchable leggings designed for yoga, gym, and everyday active comfort.",
    imagePath: "/images/women/women4.jpg"
  },
  {
    id: 11,
    name: "Winter Coat",
    price: "₹65.00",
    oldPrice: "₹95.00",
    review: "58+",
    category: "Women",
    description: "Cozy long winter coat with a warm inner lining, ideal for staying stylish in cold weather.",
    imagePath: "/images/women/women5.jpg"
  },
  {
    id: 12,
    name: "Casual",
    price: "₹36.99",
    oldPrice: "₹52.00",
    review: "143+",
    category: "Women",
    description: "Trendy spacious handbag with multiple compartments, perfect for daily use and outings.",
    imagePath: "/images/women/women6.jpg"
  },

  // ---------------- SCHOOL (1-6) ----------------
  {
    id: 13,
    name: "Colors ",
    price: "₹18.99",
    oldPrice: "₹27.00",
    review: "312+",
    category: "School",
    description: "Durable and spacious school backpack with multiple pockets for books, stationery, and accessories.",
    imagePath: "/images/school/school1.jpg"
  },
  {
    id: 14,
    name: "Compass",
    price: "₹12.50",
    oldPrice: "₹18.00",
    review: "87+",
    category: "School",
    description: "Comfortable and durable school uniform shirt made from easy-care fabric for daily wear.",
    imagePath: "/images/school/school2.jpg"
  },
  {
    id: 15,
    name: "School Geometry Box",
    price: "₹4.99",
    oldPrice: "₹7.50",
    review: "150+",
    category: "School",
    description: "Complete geometry box set with ruler, compass, protractor, and other essential tools for students.",
    imagePath: "/images/school/school3.jpg"
  },
  {
    id: 16,
    name: "Water Bottle",
    price: "₹8.99",
    oldPrice: "₹12.99",
    review: "204+",
    category: "School",
    description: "Pack of ruled notebooks with sturdy binding, perfect for classwork and homework.",
    imagePath: "/images/school/school4.jpg"
  },
  {
    id: 17,
    name: "Tiffin",
    price: "₹6.50",
    oldPrice: "₹10.00",
    review: "176+",
    category: "School",
    description: "Leak-proof and lightweight water bottle designed for kids to carry to school comfortably.",
    imagePath: "/images/school/school5.jpg"
  },
  {
    id: 18,
    name: "Color Papers",
    price: "₹9.99",
    oldPrice: "₹14.99",
    review: "132+",
    category: "School",
    description: "Compact and insulated lunch box with multiple compartments to keep meals fresh.",
    imagePath: "/images/school/school6.jpg"
  },

  // ---------------- BAG (1-6) ----------------
  {
    id: 19,
    name: "Travel Duffel Bag",
    price: "₹29.99",
    oldPrice: "₹44.99",
    review: "121+",
    category: "Bag",
    description: "Spacious duffel bag with reinforced straps, perfect for travel, gym, or weekend trips.",
    imagePath: "/images/bags/bag1.jpg"
  },
  {
    id: 20,
    name: "Laptop Backpack",
    price: "₹34.50",
    oldPrice: "₹49.00",
    review: "198+",
    category: "Bag",
    description: "Padded laptop backpack with anti-theft compartments, ideal for work, college, and travel.",
    imagePath: "/images/bags/bag2.jpg"
  },
  {
    id: 21,
    name: "Sling Crossbody Bag",
    price: "₹16.99",
    oldPrice: "₹24.99",
    review: "89+",
    category: "Bag",
    description: "Compact sling bag with adjustable strap, great for carrying essentials hands-free.",
    imagePath: "/images/bags/bag3.jpg"
  },
  {
    id: 22,
    name: "Trolley Travel Bag",
    price: "₹54.99",
    oldPrice: "₹79.99",
    review: "67+",
    category: "Bag",
    description: "Durable trolley bag with smooth-rolling wheels, built for long trips and heavy packing.",
    imagePath: "/images/bags/bag4.jpg"
  },
  {
    id: 23,
    name: "Canvas Tote Bag",
    price: "₹14.99",
    oldPrice: "₹21.99",
    review: "156+",
    category: "Bag",
    description: "Eco-friendly canvas tote bag, sturdy and stylish for shopping, college, or daily use.",
    imagePath: "/images/bags/bag5.jpg"
  },
  {
    id: 24,
    name: "Waist Fanny Pack",
    price: "₹11.99",
    oldPrice: "₹17.99",
    review: "102+",
    category: "Bag",
    description: "Trendy waist pack with secure zip pockets, perfect for travel and hands-free convenience.",
    imagePath: "/images/bags/bag6.jpg"
  },

  // ---------------- PHONE (1-5) ----------------
  {
    id: 25,
    name: "Phone Model X1",
    price: "₹299.99",
    oldPrice: "₹399.99",
    review: "410+",
    category: "Phone",
    description: "Feature-packed smartphone with a high-resolution display, fast processor, and long battery life.",
    imagePath: "/images/phone/phone1.jpg"
  },
  {
    id: 26,
    name: "Phone Model X2",
    price: "₹349.00",
    oldPrice: "₹450.00",
    review: "356+",
    category: "Phone",
    description: "Sleek smartphone offering a powerful camera setup and smooth performance for everyday use.",
     imagePath: "/images/phone/phone2.jpg"
  },
  {
    id: 27,
    name: "Phone Model Lite",
    price: "₹199.99",
    oldPrice: "₹259.99",
    review: "288+",
    category: "Phone",
    description: "Affordable smartphone with solid battery backup and reliable performance for daily tasks.",
     imagePath: "/images/phone/phone3.jpg"
  },
  {
    id: 28,
    name: "Phone Model Pro Max",
    price: "₹549.99",
    oldPrice: "₹699.99",
    review: "512+",
    category: "Phone",
    description: "Flagship smartphone featuring a premium build, top-tier camera, and blazing-fast performance.",
     imagePath: "/images/phone/phone4.jpg"
  },
  {
    id: 29,
    name: "Phone Model Mini",
    price: "₹249.99",
    oldPrice: "₹319.99",
    review: "175+",
    category: "Phone",
    description: "Compact and lightweight smartphone that's easy to carry without compromising on core features.",
     imagePath: "/images/phone/phone5.jpg"
  }
];

module.exports = products;