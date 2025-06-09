# Golden Shoestrings Travel Blog

A modern travel blog built with Next.js, TypeScript, and Tailwind CSS, showcasing travel experiences for all budgets.

## Features

- Responsive design with Tailwind CSS
- Dynamic blog posts with rich content
- Newsletter subscription
- Contact form
- Team and about pages
- SEO optimized

## Prerequisites

- Node.js 18+ (recommended)
- npm or yarn

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/golden-shoestrings.git
cd golden-shoestrings
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your environment variables:

```bash
NEXT_PUBLIC_MAILCHIMP_URL=your_mailchimp_url
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── blog/              # Blog pages
│   ├── contact/           # Contact page
│   ├── newsletter/        # Newsletter page
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── Layout.tsx        # Main layout wrapper
│   ├── Navbar.tsx        # Navigation bar
│   ├── Footer.tsx        # Footer component
│   └── SignupCTA.tsx     # Newsletter signup component
└── styles/               # Global styles
    └── globals.css       # Global CSS with Tailwind
```

## Built With

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin) - Prose styling

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Images from [Unsplash](https://unsplash.com/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
