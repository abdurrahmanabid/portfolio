import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://yourdomain.com'),
  title: {
    default: "Abdur Rahman Abid | MERN Stack Developer | CodeBae",
    template: "%s | Abdur Rahman Abid"
  },
  description: "Abdur Rahman Abid is a Bangladeshi MERN Stack Developer and AI enthusiast. Explore his portfolio, projects, and research works.",
  keywords: [
    "Abdur Rahman Abid",
    "MERN Stack Developer",
    "Bangladesh",
    "CodeBae",
    "Developer Portfolio",
    "Web Developer",
    "AI Projects",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "MongoDB Developer",
    "Express.js Developer",
    "Next.js Developer",
    "Software Engineer",
    "Bangladeshi Developer",
    "Portfolio Website"
  ],
  authors: [{ name: "Abdur Rahman Abid" }],
  creator: "Abdur Rahman Abid",
  publisher: "Abdur Rahman Abid",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_APP_URL || 'https://yourdomain.com',
    siteName: 'Abdur Rahman Abid | Portfolio',
    title: 'Abdur Rahman Abid | MERN Stack Developer | CodeBae',
    description: 'Abdur Rahman Abid is a Bangladeshi MERN Stack Developer and AI enthusiast. Explore his portfolio, projects, and research works.',
    images: [
      {
        url: '/image.jpg',
        width: 1200,
        height: 630,
        alt: 'Abdur Rahman Abid - MERN Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdur Rahman Abid | MERN Stack Developer | CodeBae',
    description: 'Abdur Rahman Abid is a Bangladeshi MERN Stack Developer and AI enthusiast. Explore his portfolio, projects, and research works.',
    images: ['/image.jpg']
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_APP_URL || 'https://yourdomain.com',
  },
  category: 'Technology',
  classification: 'Portfolio Website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
