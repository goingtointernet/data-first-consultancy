# Data First Consultancy

A modern, responsive website for data consultancy services built with Next.js, featuring smooth animations and contact functionality.

## 🚀 Features

- **Modern Design**: Clean, professional interface built with Tailwind CSS
- **Smooth Animations**: Enhanced user experience with AOS (Animate On Scroll) library
- **Contact Form**: Functional contact system with email integration
- **Case Studies**: Dedicated page showcasing successful data consultancy projects
- **Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Built-in Next.js SEO capabilities
- **Performance**: Optimized fonts and images for fast loading

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
- **Font Optimization**: Next.js `next/font` with Inter
- **Email**: Nodemailer integration for contact forms

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun package manager
- A Gmail account with App Password enabled (for email functionality)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/data-first-consultancy.git
   cd data-first-consultancy
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**
   
   Copy the `.env.example` file to `.env`:
   ```bash
   cp .env.example .env
   ```
   
   Fill in your email configuration in `.env`:
   ```env
   NEXT_PUBLIC_SENDER_USER="your-email@gmail.com"
   NEXT_PUBLIC_SENDER_PASS="your-google-app-password"
   NEXT_PUBLIC_RECIEVER_USER="contact@yourcompany.com"
   ```

## 🚀 Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

## 📧 Email Configuration

To enable the contact form functionality:

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
3. **Update your `.env.local`** with the generated app password

## 🎨 Customization

### Tailwind CSS
The project uses Tailwind CSS for styling. You can customize the design by:
- Modifying the `tailwind.config.js` file
- Adding custom classes in your components
- Using Tailwind's utility classes

### AOS Animations
AOS animations are configured in the main layout. You can:
- Modify animation settings in the AOS initialization
- Add custom animations to components using `data-aos` attributes
- Customize animation duration, delay, and easing

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── case-studies/      # Case study pages
│   └── [id]/             # Dynamic routes
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components
│   ├── AosProvider/      # Animation provider
│   ├── CaseStudyBoxCon/  # Case study components
│   ├── Footer/           # Footer component
│   ├── FooterForm/       # Footer form component
│   ├── Header/           # Header component
│   ├── HomeHero/         # Hero section
│   ├── LogoBanner/       # Logo banner
│   ├── PageHeroSection/  # Page hero sections
│   ├── RoadMap/          # Roadmap component
│   ├── ServicesSection/  # Services section
│   ├── VisionMission/    # Vision & mission
│   └── WhyChoose/        # Why choose us section
├── lib/                  # Utility functions
│   ├── caseStudiesData.js # Case studies data
│   └── utils.js          # Helper utilities
├── fonts/                # Custom fonts
└── public/               # Static assets
    └── images/           # Image assets
```

## 🌐 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in Vercel's dashboard
4. Deploy automatically

### Other Deployment Options

- **Netlify**: Connect your GitHub repository to Netlify
- **Railway**: Deploy with `railway login` and `railway up`
- **Digital Ocean**: Use their App Platform
- **AWS**: Deploy using AWS Amplify or EC2

## 📚 Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - utility-first CSS framework
- [AOS Documentation](https://michalsnik.github.io/aos/) - animate on scroll library
