# Jackson Moore Portfolio — Starter

A simple multi-page HTML/CSS/JS portfolio starter.

## Pages

- `index.html` — homepage / introduction / selected work
- `music.html` — music portfolio
- `design.html` — visual art & design portfolio
- `project.html?id=PROJECT-ID` — reusable project case-study page

## Folder structure

```text
portfolio/
├── index.html
├── music.html
├── design.html
├── project.html
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   ├── projects.js
│   └── project-page.js
└── assets/
    ├── images/
    └── music/
```

## How to run it

The easiest option is to open the folder in VS Code and use the Live Server extension.

You can also upload the whole folder to a GitHub repository and enable GitHub Pages.

## Adding a project

Open `js/projects.js` and copy an existing project object. Change:

- `id`
- `title`
- `category`
- `year`
- `type` (`music` or `design`)
- `description`
- `longDescription`
- `tags`
- `hero`
- `gallery`
- `audio` (music projects only)

The music and design pages are generated from this data automatically.

## Adding real images

Put your images inside:

```text
assets/images/
```

Then replace placeholder paths in `projects.js`.

For example:

```js
hero: "assets/images/my-project-hero.jpg"
```

## Customising the visual style

Most of the main visual settings are at the very top of:

```text
css/style.css
```

Look for:

```css
:root {
  --background: ...;
  --surface: ...;
  --text: ...;
  --muted: ...;
  --accent: ...;
  --font-display: ...;
  --font-body: ...;
  --radius: ...;
}
```

These are designed to be your starting point for developing your own visual identity.

## Making the fish-tank idea bigger

The current version only has floating bubbles and a subtle ripple.

Good next additions would be:

- SVG fish that swim across the screen
- aquatic plants at the bottom of the viewport
- cursor-triggered ripples
- bubbles that pop when clicked
- a subtle underwater soundscape
- different fish / creatures appearing randomly
- project thumbnails that behave like objects floating in water

Keep the portfolio content readable first, then progressively add the playful layer.
