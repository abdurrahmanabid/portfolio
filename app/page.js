import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import { personalData } from "@/utils/data/personal-data";

export default async function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://yourdomain.com';

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": personalData.name,
    "jobTitle": "MERN Stack Developer",
    "description": "Full Stack Developer specializing in MERN stack, AI projects, and web development",
    "url": baseUrl,
    "image": `${baseUrl}${personalData.profile}`,
    "email": personalData.email,
    "telephone": personalData.phone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chattogram",
      "addressCountry": "Bangladesh"
    },
    "sameAs": [
      personalData.github,
      personalData.linkedIn,
      personalData.facebook,
      ...(personalData.twitter ? [personalData.twitter] : [])
    ],
    "knowsAbout": [
      "Web Development",
      "MERN Stack",
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "JavaScript",
      "Full Stack Development",
      "AI Projects"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Port City International University" // Update with your university name
    },
    "worksFor": {
      "@type": "YoutubeChannel",
      "name": "CodeBae",
      "url": "https://www.youtube.com/@codebae-abid"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <ContactSection />
    </>
  );
}
