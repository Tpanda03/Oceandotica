# Ocenadotica Studio website

A static site for GitHub Pages. No build step: the files here are the site.

## Files

- `index.html`: page text and sections (hero, collections, originals and prints, about, contact)
- `style.css`: the look. Colors and fonts are the variables at the top of the file.
- `artworks.js`: the list of artwork and collections. This is the file to edit when adding pictures.
- `main.js`: gallery, filters, large view and the dotted hero animation
- `images/`: put artwork photos here

## Adding artwork

1. Copy the photo into `images/` (JPG, around 1600px on the long side).
2. Open `artworks.js` and add or edit a line:

   ```js
   { title: "Morning Tide", collection: "turtle", image: "images/morning-tide.jpg", details: "Acrylic on canvas, 16 x 20 in. Prints available." },
   ```

Entries with `image: ""` show a dotted placeholder. To add a new collection, add an entry to `COLLECTIONS` in the same file and use its `id` on the artworks.

## Publishing on GitHub Pages

1. Create a new public repository on GitHub (for example `ocenadotica-studio`).
2. Upload everything in this folder to the repository root (`index.html` must be at the top level).
3. In the repository, open Settings, then Pages. Under "Build and deployment", set Source to "Deploy from a branch", pick the `main` branch and the `/ (root)` folder, and save.
4. After a minute or two the site is live at `https://YOUR-USERNAME.github.io/ocenadotica-studio/`.

To preview on your own computer, open `index.html` in a browser.

## Still to fill in

- The Facebook link in `index.html` points to facebook.com. Replace it with the real profile or page address.
- The "About the studio" paragraph is starter text.
- Artwork titles in `artworks.js` are working titles, and the details (medium, size, availability) are empty.
