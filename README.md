# Swakhar Dey - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS featuring a sleek design, dark/light mode toggle, and smooth animations.

## 🌟 Features

- **Modern Design**: Clean, professional, and visually appealing interface
- **Responsive Layout**: Optimized for all device sizes
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **TypeScript**: Full type safety and better development experience
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Performance Optimized**: Fast loading and optimized images

## 🔧 Technologies Used

- **Frontend**: Next.js 14+, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode
- **Deployment**: Vercel (recommended)

## 📋 Sections

1. **Hero**: Eye-catching introduction with social links
2. **About**: Personal introduction and mission statement
3. **Experience**: Professional journey with timeline
4. **Skills**: Technical expertise with progress bars
5. **Projects**: Featured and other projects showcase
6. **Contact**: Contact form and information

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/swakhardey/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the website.

## 🎨 Customization

### Personal Information

Update the following files with your information:

- **Contact Details**: Update email, phone, and location in:
  - `src/components/hero.tsx`
  - `src/components/contact.tsx` 
  - `src/components/footer.tsx`

- **Experience**: Modify the `experiences` array in `src/components/experience.tsx`

- **Skills**: Update the `skillCategories` array in `src/components/skills.tsx`

- **Projects**: Modify the `projects` array in `src/components/projects.tsx`

- **About Section**: Update the content in `src/components/about.tsx`

### Styling

- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Fonts**: Change fonts in `src/app/layout.tsx`
- **Layout**: Adjust spacing and layout in component files

### Resume/CV

Replace the placeholder information with your actual:
- Work experience
- Education details
- Project descriptions
- Skills and technologies
- Contact information

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── about.tsx
│       ├── contact.tsx
│       ├── experience.tsx
│       ├── footer.tsx
│       ├── hero.tsx
│       ├── navbar.tsx
│       ├── projects.tsx
│       ├── skills.tsx
│       └── theme-provider.tsx
├── public/
├── .github/
├── package.json
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

- **Netlify**: Build command: `npm run build`, Publish directory: `out`
- **GitHub Pages**: Use `next export` for static deployment
- **Traditional Hosting**: Build with `npm run build` and serve the `.next` folder

## 📧 Contact Form

The contact form currently shows an alert on submission. To make it functional:

1. **Add a backend service** (Netlify Forms, Formspree, etc.)
2. **Integrate with an API** (your own backend)
3. **Use serverless functions** (Vercel, Netlify)

Example integration with Formspree:
```jsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Quality

- ESLint configuration for code quality
- TypeScript for type safety
- Prettier for code formatting (recommended)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- Lucide React for beautiful icons

## 📞 Support

If you have any questions or need help with customization, feel free to reach out:

- Email: swakhar.me@gmail.com
- LinkedIn: [linkedin.com/in/swakhar-dey](https://linkedin.com/in/swakhar-dey)
- GitHub: [github.com/Swakhar](https://github.com/Swakhar)

---

**Happy coding!** 🚀