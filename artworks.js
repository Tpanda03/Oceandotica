/* =====================================================================
   ARTWORK LIST: this is the file you edit to add or change pictures.

   To add a picture:
     1. Put the image file in the "images" folder (for example
        images/turtle-sunrise.jpg). JPG files about 1600px on the long
        side load quickly and still look sharp.
     2. Add a line to the ARTWORKS list below with its details.

   Fields for each artwork:
     title       Name of the piece
     collection  One of the collection ids below: "turtle", "seahorse", "jellyfish"
     image       Path to the picture. Leave as "" to show a dotted placeholder.
     details     Anything you like: medium, size, "Original available", "Prints available"
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
  }
];

const ARTWORKS = [
  { title: "Turtle piece one",    collection: "turtle",    image: "", details: "Add medium and size here" },
  { title: "Turtle piece two",    collection: "turtle",    image: "", details: "Add medium and size here" },
  { title: "Turtle piece three",  collection: "turtle",    image: "", details: "Add medium and size here" },

  { title: "Seahorse piece one",   collection: "seahorse", image: "", details: "Add medium and size here" },
  { title: "Seahorse piece two",   collection: "seahorse", image: "", details: "Add medium and size here" },
  { title: "Seahorse piece three", collection: "seahorse", image: "", details: "Add medium and size here" },

  { title: "Jellyfish piece one",   collection: "jellyfish", image: "", details: "Add medium and size here" },
  { title: "Jellyfish piece two",   collection: "jellyfish", image: "", details: "Add medium and size here" },
  { title: "Jellyfish piece three", collection: "jellyfish", image: "", details: "Add medium and size here" }

  /* Example of a finished entry (copy, paste above, and edit):
  { title: "Morning Tide", collection: "turtle", image: "images/morning-tide.jpg", details: "Acrylic on canvas, 16 x 20 in. Prints available." },
  */
];

/* Email address that the "Ask about this piece" buttons use. */
const CONTACT_EMAIL = "Rtailor@sbcglobal.net";
