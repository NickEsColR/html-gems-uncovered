# HTML Gems Uncovered

A collection of powerful and underused HTML elements. Discover hidden HTML elements that can supercharge your web projects. Explore, learn, and get inspired by practical examples and code snippets.

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)
[![Astro](https://img.shields.io/badge/built%20with-astro-ff5d01?logo=astro)](https://astro.build/)

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Project Structure](#project-structure)
- [Available Elements](#available-elements)
- [Getting Started](#getting-started)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

---

## About

**HTML Gems Uncovered** is a showcase of lesser-known but powerful HTML elements, complete with interactive demos and code snippets. The goal is to help developers discover and use these elements to build more accessible, semantic, and user-friendly web applications.

## Features

- Interactive demos for each element
- Copy-paste code snippets
- Explanations and use cases
- Built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/)

## Project Structure

```text
/
├── public/
├── src/
│   ├── components/
│   │   ├── elements/      # Element demo components
│   │   ├── cards/         # Card UI components
│   │   ├── ui/            # UI helpers (DemoPanel, etc.)
│   ├── consts/            # Code snippets for elements
│   ├── content/           # Elements metadata
│   ├── layouts/           # Main layout
│   ├── pages/             # Astro pages
│   ├── styles/            # Global styles
│   ├── types/             # TypeScript types
└── package.json
```

## Available Elements

| Element         | Description                                                    |
|----------------|----------------------------------------------------------------|
| `<dialog>`     | Dialog box/modal window with native accessibility              |
| `<details>`    | Disclosure widget for collapsible content                      |
| `<datalist>`   | Autocomplete options for input fields                          |
| `<meter>`      | Scalar measurement within a known range                        |
| `<output>`     | Displays calculation or user action results                    |
| `<mark>`       | Semantic text highlighting                                     |
| `<time>`       | Machine-readable dates, times, or durations                    |
| `<figure>`     | Semantic grouping of media/content with captions               |

Explore each element in the [Elements section](src/pages/elements/) for demos and code.

## Getting Started

1. **Install dependencies:**

   ```sh
   pnpm install
   ```

2. **Start the development server:**

   ```sh
   pnpm dev
   ```

3. Open [http://localhost:4321](http://localhost:4321) in your browser.

## Development

- `pnpm build` — Build your production site to `./dist/`
- `pnpm preview` — Preview your build locally
- `pnpm astro ...` — Run Astro CLI commands

## Contributing

Contributions are welcome!

To contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add your message'`)
5. Push to the branch (`git push origin feature/your-feature`)
6. Open a Pull Request

Please follow the [Conventional Commits](https://www.conventionalcommits.org/) style for commit messages.

## License

This project is licensed under the [MIT License](LICENSE.md).
