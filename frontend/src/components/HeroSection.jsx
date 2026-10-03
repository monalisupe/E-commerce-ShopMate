
import Bagpack from "../assets/Bagpack.jpg";
import Shoe from "../assets/Shoe.jpg";
import Sports from "../assets/Sports.jpg";
import Laptop from "../assets/Laptop.jpg";
import Perfume from "../assets/Perfume.jpg";
import Plant from "../assets/Plant.jpg";
import Headphones from "../assets/Headphones.jpg";
import Fashion from "../assets/Fashion.jpg";

function HeroSection() {

  // Cards Data
  const cards = [
   
  { image: Shoe, 
    text: "Offers is avilable on this product",
     textColor: "text-black" },

{ image: Sports,
   text: "Free Delivery avilable",
    textColor: "text-white" },

{ image: Laptop, 
  text: "Up t0 10% off", 
  textColor: "text-black" },

{ image: Plant, 
  text: "Multiple varities", 
  textColor: "text-white" },

{ image: Perfume, 
  text: "Cutomization avilable", 
  textColor: "text-black" },

// { image: Headset1, 
//   text: "Free delivery avilable", 
//   textColor: "text-black" },

{
  image : Fashion,
  text : "50% off",
  textColor:"text-white"
},

{ image: Bagpack, 
  text: "Great Deals of the day", 
  textColor: "text-black" },

{ image: Headphones, 
  text: "50% off on this product", 
  textColor: "text-black" },
  ];

  return (
    <section className="w-full px-4 py-6">

      {/* Cards Container// Enables horizontal scroll snapping */}
      
<div className="flex gap-4 overflow-x-auto overflow-y-hidden pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">        {cards.map((card, index) => (
          <div
            key={index}
            // Changed: increased height, width kept exactly the same
            className="relative h-[550px] w-[calc(20%-12.8px)] shrink-0 overflow-hidden rounded-2xl shadow-sm snap-start"
          >

            <img
              src={card.image}
              alt={card.text}
              className="h-full w-full object-cover"
            />

            {/* Changed: added text over the image */}
            <h3 className={`absolute top-5 left-0 w-full px-3 text-center text-xl font-bold ${card.textColor} drop-shadow-lg`} >
             {card.text}
            </h3>

          </div>
        ))}

      </div>

    </section>
  );
}

export default HeroSection;