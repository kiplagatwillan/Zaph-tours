export const getPlaceholderImage = (width, height, text) =>
  `https://placehold.co/${width}x${height}/E0E0E0/333333?text=${text}`;
export const featuredDestinations = [
  {
    id: 1,
    name: "Mt. Kenya",
    image: "../public/images/mt-kenya.jpg",
    description:
      "Africa's second-highest peak, offering stunning alpine landscapes and challenging treks.",
    price: "$1500",
  },
  {
    id: 2,
    name: "Mt. Ruwenzori",
    image: "../public/images/ruwenzori.jpg",
    description:
      'The "Mountains of the Moon" with unique glacial valleys and diverse ecosystems.',
    price: "$2000",
  },
  {
    id: 3,
    name: "Lake Nakuru",
    image: "../public/images/lake-nakuru.jpg",
    description:
      "A beautiful soda lake famous for its vibrant flamingo population and rhinos.",
    price: "$800",
  },
  {
    id: 4,
    name: "Tsavo National Park",
    image: "../public/images/tsavo-national-park.jpg",
    description:
      "Kenya's largest wildlife sanctuary, home to red elephants and diverse big game.",
    price: "$1200",
  },
  {
    id: 5,
    name: "Nairobi National Park",
    image: "../public/images/nairobi-national-park.jpg",
    description:
      "A unique wildlife haven just minutes from the city center, featuring lions and giraffes.",
    price: "$500",
  },
  {
    id: 6,
    name: "Coastal Kenya",
    image: "../public/images/coastal-kenya.jpg",
    description:
      "Pristine white-sand beaches, coral reefs, and rich Swahili culture.",
    price: "$950",
  },
];
export const allDestinations = [
  ...featuredDestinations, // Include featured ones here
  {
    id: 7,
    name: "Maasai Mara",
    image: "../public/images/ruwenzori.jpg",
    description:
      "World-renowned for the Great Migration and abundant wildlife.",
    priceGroup: "$2500",
    priceIndividual: "$1800",
  },
  {
    id: 8,
    name: "Amboseli National Park",
    image: "../public/images/amboseli.jpg",
    description:
      "Iconic views of Mount Kilimanjaro and large herds of elephants.",
    priceGroup: "$1700",
    priceIndividual: "$1100",
  },
  {
    id: 9,
    name: "Diani Beach",
    image: "../public/images/ruwenzori.jpg",
    description:
      "Voted Africa's leading beach destination with clear waters and water sports.",
    priceGroup: "$1000",
    priceIndividual: "$700",
  },
  {
    id: 10,
    name: "Lamu Island",
    image: "../public/images/lamu.jpg",
    description:
      "A UNESCO World Heritage site with ancient Swahili architecture and no cars.",
    priceGroup: "$1100",
    priceIndividual: "$750",
  },
  {
    id: 11,
    name: "Samburu National Reserve",
    image: "../public/images/samburu-national-park.jpg",
    description:
      "Home to unique northern Kenya species like the Grevy's zebra and reticulated giraffe.",
    priceGroup: "$1600",
    priceIndividual: "$1050",
  },
  {
    id: 12,
    name: "Hell's Gate National Park",
    image: "../public/images/hells-gate.jpg",
    description:
      "Dramatic gorges, hot springs, and a unique park where you can cycle among wildlife.",
    priceGroup: "$600",
    priceIndividual: "$350",
  },
];
export const tripTypes = [
  {
    title: "Honeymoon Packages",
    images: [
      "../public/images/honeymoon1.jpg",
      "../public/images/honeymoon2.jpg",
    ],
    description:
      "Romantic getaways to breathtaking destinations, perfect for newlyweds. Enjoy serene beaches, private safaris, and luxurious accommodations tailored for an unforgettable start to your journey together.",
    pricing:
      "Starting from $3000 per couple. Special offers available for early bookings.",
  },
  {
    title: "Family Adventures",
    images: [
      "../public/images/family-adventures.jpg",
      ,
      "../public/images/family-adventures2.jpg",
    ],
    description:
      "Exciting and safe adventures for the whole family. From wildlife safaris suitable for all ages to interactive cultural experiences, we ensure fun and memorable moments for everyone.",
    pricing: "Customizable packages. Kids under 12 get 20% off.",
  },
  {
    title: "Adventure Tours",
    images: [
      "../public/images/adventure1.jpg",
      "../public/images/adventure2.jpg",
    ],
    description:
      "Thrill-seeking expeditions for the adventurous soul. Conquer mountains, explore hidden caves, or brave white-water rapids. Our adventure tours push your limits in stunning natural settings.",
    pricing: "Prices vary by activity. Group discounts available.",
  },
  {
    title: "Cultural Tours",
    images: ["../public/images/culture1.jpg", "../public/images/cultural2.jpg"],
    description:
      "Immerse yourself in the rich traditions and vibrant heritage of local communities. Engage with indigenous tribes, learn traditional crafts, and savor authentic cuisine.",
    pricing:
      "From $800 per person. Includes local guide and community contributions.",
  },
  {
    title: "Wildlife Safaris",
    images: [
      "../public/images/wildlife1.jpg",
      "../public/images/wildlife2.jpg",
    ],
    description:
      "Experience the thrill of encountering Africa's magnificent wildlife in their natural habitats. Witness the Big Five, spectacular birdlife, and the Great Migration.",
    pricing: "Starting from $1200 per person. All-inclusive options available.",
  },
  {
    title: "Eco-Tours",
    images: [
      "../public/images/eco-tour1.jpg",
      "../public/images/eco-tour2.jpg",
    ],
    description:
      "Sustainable travel experiences focused on environmental conservation and community support. Explore pristine ecosystems responsibly and contribute to their preservation.",
    pricing:
      "Packages designed with minimal environmental footprint. Part of proceeds go to conservation.",
  },
  {
    title: "Luxury Vacations",
    images: [
      "../public/images/luxury-vacation.jpg",
      "../public/images/luxury-vacation1.jpg",
    ],
    description:
      "Indulge in unparalleled comfort and exclusive experiences. Stay in five-star lodges, enjoy private game drives, and receive personalized service throughout your journey.",
    pricing: "Premium rates apply. Bespoke itineraries available upon request.",
  },
  {
    title: "Beach Holidays",
    images: [
      "../public/images/beach-holidays.jpg",
      "../public/images/beach-holidays1.jpg",
    ],
    description:
      "Relax and rejuvenate on stunning white-sand beaches with crystal-clear waters. Enjoy water sports, sunbathing, and delicious seafood in idyllic coastal settings.",
    pricing:
      "From $700 per person. Includes accommodation and select activities.",
  },
  {
    title: "Wellness Retreats",
    images: [
      "../public/images/welness-retreat1.jpg",
      "../public/images/welness-retreat2.jpg",
    ],
    description:
      "Recharge your mind, body, and soul with our curated wellness retreats. Featuring yoga, meditation, healthy cuisine, and spa treatments in tranquil environments.",
    pricing:
      "All-inclusive packages from $1500. Group sessions and private consultations available.",
  },
  {
    title: "Culinary Tours",
    images: [
      "../public/images/culinary1.jpg",
      "../public/images/culinary2.jpg",
    ],
    description:
      "Embark on a gastronomic journey, exploring local flavors and culinary traditions. Participate in cooking classes, visit food markets, and dine at authentic local eateries.",
    pricing:
      "Prices vary based on duration and destinations. Food tasting included.",
  },
];
export const testimonials = [
  {
    quote:
      "Zaph Tours made our Kenyan safari dream come true! Everything was perfectly organized, and our guide was incredibly knowledgeable.",
    author: "Sarah J.",
  },
  {
    quote:
      "The adventure tour to Mt. Kenya was challenging but so rewarding. Zaph Tours provided excellent support and equipment.",
    author: "Mark T.",
  },
  {
    quote:
      "Our family holiday to the coast was unforgettable. The attention to detail and friendly service from Zaph Tours was exceptional.",
    author: "The O'Connell Family",
  },
];
