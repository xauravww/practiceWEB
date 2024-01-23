const DATA = [
  {
    id: 1,
    title: "Pakodi",
    price: "$15",
    img: "https://res.cloudinary.com/drvntsbpo/image/upload/v1706027887/masalla-pali-pakodi-DP-Copy_dxa3m0.jpg",
    desc: "We eat this with Chai as a snacks",
    type: "Snacks"
  },
  {
    id: 2,
    title: "Masala Dosa",
    price: "$10",
    img: "https://res.cloudinary.com/drvntsbpo/image/upload/v1706030343/masala-dosa-recipe_gywual.jpg",
    desc: "A South Indian delicacy for breakfast",
    type: "Breakfast"
  },
  {
    id: 3,
    title: "Chole Bhature",
    price: "$12",
    img: "https://res.cloudinary.com/drvntsbpo/image/upload/v1706030343/Chole-bhature-1_hb6ngp.jpg",
    desc: "A popular North Indian dish for lunch",
    type: "Lunch"
  },
  {
    id: 4,
    title: "Samosa",
    price: "$8",
    img: "https://res.cloudinary.com/drvntsbpo/image/upload/v1706030495/samosa-recipe_jlmaui.jpg",
    desc: "Famous tea-time snack with spicy filling",
    type: "Snacks"
  },
  {
    id: 5,
    title: "Paneer Butter Masala",
    price: "$18",
    img: "https://res.cloudinary.com/drvntsbpo/image/upload/v1706030517/paneer-butter-masala-5_cnfep7.jpg",
    desc: "Creamy butter masala with paneer",
    type: "Dinner"
  },
  {
    id: 6,
    title: "Idli Sambhar",
    price: "$9",
    img: "https://res.cloudinary.com/drvntsbpo/image/upload/v1706030540/idli-sambar-1_xdky1v.jpg",
    desc: "Steamed rice cakes with lentil curry for breakfast",
    type: "Breakfast"
  },
  {
    id: 7,
    title: "Rajma Chawal",
    price: "$14",
    img: "https://res.cloudinary.com/drvntsbpo/image/upload/v1706030560/rajma-recipe-rajma-masala-500x500_bmtsd9.jpg",
    desc: "North Indian kidney bean curry with rice for lunch",
    type: "Lunch"
  },
  {
    id: 8,
    title: "Pav Bhaji",
    price: "$11",
    img: "https://res.cloudinary.com/drvntsbpo/image/upload/v1706030586/Best-Pav-Bhaji-Recipe-500x500_jv1b5x.jpg",
    desc: "Spicy mashed vegetable curry with bread for snacks",
    type: "Snacks"
  },
  {
    id: 9,
    title: "Aloo Paratha",
    price: "$13",
    img: "https://res.cloudinary.com/drvntsbpo/image/upload/v1706030623/aloo-paratha-recipe-2_kcowsu.jpg",
    desc: "Stuffed potato flatbread, a hearty breakfast",
    type: "Breakfast"
  },
  {
    id: 10,
    title: "Bhel Puri",
    price: "$7",
    img: "https://res.cloudinary.com/drvntsbpo/image/upload/v1706030996/bhel-puri-featured_t0i8xx.jpg",
    desc: "Crispy and tangy street food snack",
    type: "Snacks"
  },
  {
    id: 11,
    title: "Vegetable Biryani",
    price: "$20",
    img: "https://res.cloudinary.com/drvntsbpo/image/upload/v1706031059/veg-biryani-vegetable-biryani.jpg_vc5215.webp",
    desc: "Fragrant rice dish with mixed vegetables for dinner",
    type: "Dinner"
  },
  {
    id: 12,
    title: "Upma",
    price: "$8",
    img: "https://res.cloudinary.com/drvntsbpo/image/upload/v1706031150/upma-recipe_rnpkaw.jpg",
    desc: "Semolina porridge with vegetables, a quick breakfast",
    type: "Breakfast"
  },
  {
    id: 13,
    title: "Dhokla",
    price: "$10",
    img: "https://res.cloudinary.com/drvntsbpo/image/upload/v1706031215/khaman-dhokla-recipe.jpg_bywpow.webp",
    desc: "Steamed fermented cake, a popular snack",
    type: "Snacks"
  },
  {
    id: 14,
    title: "Matar Paneer",
    price: "$16",
    img: "https://res.cloudinary.com/drvntsbpo/image/upload/v1706031238/matar-paneer-2_mfvft3.jpg",
    desc: "Peas and cottage cheese curry for lunch or dinner",
    type: "Lunch"
  },
  {
    id: 15,
    title: "Poha",
    price: "$9",
    img: "https://res.cloudinary.com/drvntsbpo/image/upload/v1706031271/on-international-poha-day-we-give-you-3-reasons-to-have-this-healthy-bowl-of-goodness_zahdxl.jpg",
    desc: "Flattened rice with spices, a light breakfast",
    type: "Breakfast"
  },
  {
    id: 16,
    title: "Golgappa",
    price: "$6",
    img: "https://res.cloudinary.com/drvntsbpo/image/upload/v1706031295/Golgappa-4_y3qpfs.jpg",
    desc: "Crunchy street food filled with spicy tangy water",
    type: "Snacks"
  },
  {
    id: 17,
    title: "Vegetable Korma",
    price: "$17",
    img: "https://res.cloudinary.com/drvntsbpo/image/upload/v1706031323/vegetable-korma-recipe_o6n4qm.jpg",
    desc: "Rich and creamy mixed vegetable curry for dinner",
    type: "Dinner"
  },
  {
    id: 18,
    title: "Aloo Tikki",
    price: "$7",
    img: "https://res.cloudinary.com/drvntsbpo/image/upload/v1706031371/Basically-AlooTikki_bmdfdf.jpg",
    desc: "Fried potato patties, a popular snack",
    type: "Snacks"
  },
  {
    id: 19,
    title: "Baingan Bharta",
    price: "$15",
    img: "https://res.cloudinary.com/drvntsbpo/image/upload/v1706031412/Baingan-Bharta-Recipe_dphlfl.jpg",
    desc: "Smoky-flavored roasted eggplant curry for dinner",
    type: "Dinner"
  },
  {
    id: 20,
    title: "Methi Thepla",
    price: "$10",
    img: "https://res.cloudinary.com/drvntsbpo/image/upload/v1706031752/methi-thepla-recipe_cvdhav.jpg",
    desc: "Fenugreek-flavored flatbread, a Gujarati specialty",
    type: "Breakfast"
  }
]
export default DATA
