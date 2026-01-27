# Masonry Wall

A responsive Pinterest-style masonry grid layout component for WeWeb. Automatically arranges items in columns with varying heights, creating a visually appealing staggered layout.

## Features

- **Dynamic columns** - Automatically calculates the optimal number of columns based on container width and minimum column width
- **Repeatable dropzone** - Design your item template once, and it repeats for each item in your data array
- **Configurable layout** - Adjust column width (50-1000px) and gap spacing (0-100px)
- **Data binding** - Bind any array of objects to populate the grid
- **Internal variables** - Exposes `itemCount` for use in workflows and bindings

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| Items | Array | 3 sample items | Array of objects to display in the grid |
| Column Width | Number | 300 | Minimum column width in pixels |
| Gap | Number | 16 | Space between items in pixels |

## Use Cases

- Image galleries
- Product listings
- Blog post grids
- Portfolio showcases
- Card layouts with varying content heights

## Development

```bash
# Install dependencies
npm i

# Serve locally
npm run serve --port=8080

# Build for release
npm run build --name=jp-masonry-v2
```
