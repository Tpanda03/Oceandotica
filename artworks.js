/* =====================================================================
   ARTWORK LIST: this is the file you edit to add or change pictures.

   To add a picture:
     1. Put the image file in the "images" folder (for example
        images/turtle-sunrise.jpg). JPG files about 1600px on the long
        side load quickly and still look sharp.
     2. Add a line to the ARTWORKS list below with its details.

   Fields for each artwork:
     title       Name of the piece
     collection  One of the collection ids below
     image       Path to the picture. Leave as "" to show a dotted placeholder.
     details     Anything you like: medium, size, "Original available", "Prints available"

   The titles below are working titles. Change them to the real names.
   ===================================================================== */

const COLLECTIONS = [
  {
    id: "turtle",
    name: "Ocean Turtle Collection",
    note: "Sea turtles gliding through open water."
  },
  {
    id: "seahorse",
    name: "Seahorse Dreams Collection",
    note: "Seahorses drifting among coral and current."
  },
  {
    id: "jellyfish",
    name: "Jellyfish Flow Collection",
    note: "Jellyfish in slow, luminous motion."
  },
  {
    id: "sealife",
    name: "Ocean Life",
    note: "Starfish, crabs, fish and other creatures of the water."
  },
  {
    id: "gold",
    name: "Gold on Black",
    note: "Gold paint on black paper."
  },
  {
    id: "stones",
    name: "Painted Stones",
    note: "Small scenes and dot patterns painted on stones."
  },
  {
    id: "more",
    name: "More from the Studio",
    note: "Paintings, signs and other pieces."
  }
];

const ARTWORKS = [
  { title: "Sea Turtle",             collection: "turtle",    image: "images/turtle-01.jpg",             details: "" },

  { title: "Seahorse",               collection: "seahorse",  image: "images/seahorse-01.jpg",           details: "" },
  { title: "Seahorses and Turtles",  collection: "seahorse",  image: "images/seahorses-and-turtles.jpg", details: "" },

  { title: "Jellyfish",              collection: "jellyfish", image: "images/jellyfish-01.jpg",          details: "" },

  { title: "Starfish",               collection: "sealife",   image: "images/starfish.jpg",              details: "" },
  { title: "Blue Crab",              collection: "sealife",   image: "images/blue-crab.jpg",             details: "" },
  { title: "Koi Pond",               collection: "sealife",   image: "images/koi-pond.jpg",              details: "" },
  { title: "Be Calm",                collection: "sealife",   image: "images/be-calm-fish.jpg",          details: "" },
  { title: "Sea Discs",              collection: "sealife",   image: "images/sea-discs.jpg",             details: "" },
  { title: "Mermaid Tails",          collection: "sealife",   image: "images/mermaid-tails.jpg",         details: "" },

  { title: "Sea Medallions in Gold", collection: "gold",      image: "images/gold-sea-medallions.jpg",   details: "" },
  { title: "Gold Floral",            collection: "gold",      image: "images/gold-floral.jpg",           details: "" },
  { title: "Gold Tile",              collection: "gold",      image: "images/gold-tile.jpg",             details: "" },
  { title: "Be Brave",               collection: "gold",      image: "images/gold-be-brave.jpg",         details: "" },

  { title: "Mandala Stone",          collection: "stones",    image: "images/stone-mandala.jpg",         details: "" },
  { title: "Confetti Stone",         collection: "stones",    image: "images/stone-confetti.jpg",        details: "" },
  { title: "Palm Stone",             collection: "stones",    image: "images/stone-palm.jpg",            details: "" },
  { title: "Shore Stone",            collection: "stones",    image: "images/stone-shore.jpg",           details: "" },
  { title: "Red Stone",              collection: "stones",    image: "images/stone-red.jpg",             details: "" },
  { title: "River Stone",            collection: "stones",    image: "images/stone-river.jpg",           details: "" },

  { title: "Peacock Feathers",       collection: "more",      image: "images/peacock-feathers.jpg",      details: "" },
  { title: "Geometric",              collection: "more",      image: "images/geometric.jpg",             details: "" },
  { title: "Dancer",                 collection: "more",      image: "images/dancer.jpg",                details: "" },
  { title: "Palm Reflection",        collection: "more",      image: "images/palm-reflection.jpg",       details: "" },
  { title: "Ganesh",                 collection: "more",      image: "images/ganesh.jpg",                details: "" },
  { title: "Family Board",           collection: "more",      image: "images/family-board.jpg",          details: "" },
  { title: "Love",                   collection: "more",      image: "images/love-sign.jpg",             details: "" },
  { title: "Family",                 collection: "more",      image: "images/family-sign.jpg",           details: "" }

  /* Example of an entry with details filled in:
  { title: "Morning Tide", collection: "turtle", image: "images/morning-tide.jpg", details: "Acrylic on canvas, 16 x 20 in. Prints available." },
  */
];

/* Email address that the "Ask about this piece" buttons use. */
const CONTACT_EMAIL = "Rtailor@sbcglobal.net";
