# dasdas

A clean, production-ready HTML/CSS static website project.

## Description

This is a modern, well-structured static website built with semantic HTML5 and CSS3. The project follows best practices for organization, accessibility, and maintainability.

## Project Structure

```
dasdas/
├── index.html          # Main entry point
├── css/
│   ├── styles.css      # Main stylesheet
│   ├── reset.css       # CSS reset/normalize
│   └── variables.css   # CSS custom properties
├── js/
│   └── main.js         # Optional JavaScript
├── assets/
│   ├── images/         # Image files
│   └── fonts/          # Custom fonts
└── README.md           # Project documentation
```

## Features

- Semantic HTML5 markup
- Modern CSS3 with custom properties (CSS variables)
- CSS reset for cross-browser consistency
- Responsive design ready
- Organized file structure
- Accessibility considerations
- SEO-friendly structure

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local development server (optional but recommended)

### Local Development

#### Option 1: Using Python (if installed)

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open http://localhost:8000 in your browser.

#### Option 2: Using Node.js (if installed)

```bash
npx serve
```

#### Option 3: Using VS Code

Install the "Live Server" extension and click "Go Live" in the status bar.

#### Option 4: Direct File Access

Simply open `index.html` in your web browser by double-clicking the file.

## Development Guidelines

### HTML

- Use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`)
- Ensure proper heading hierarchy (h1-h6)
- Include descriptive `alt` attributes for images
- Use ARIA labels where appropriate

### CSS

- Follow the BEM (Block Element Modifier) naming convention
- Use CSS custom properties for consistent theming
- Keep selectors specific but not overly complex
- Mobile-first responsive design approach

### File Organization

- Place all stylesheets in the `css/` directory
- Place all scripts in the `js/` directory
- Place all media assets in the `assets/` directory
- Keep the root directory clean

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project as you wish.

## Contributing

1. Fork the project
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

---

Built with ❤️ using HTML and CSS
