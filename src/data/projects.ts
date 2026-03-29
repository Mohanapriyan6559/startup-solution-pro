import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";

import landing1 from "@/assets/samples/landing-1.jpg";
import landing2 from "@/assets/samples/landing-2.jpg";
import business1 from "@/assets/samples/business-1.jpg";
import ecommerce1 from "@/assets/samples/ecommerce-1.jpg";
import portfolio1Sample from "@/assets/samples/portfolio-1.jpg";
import wedding1 from "@/assets/samples/wedding-1.jpg";

export interface Sample {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  details: {
    overview: string;
    features: string[];
    techStack: string[];
    duration: string;
    client: string;
  };
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  color: string;
  samples: Sample[];
}

export const projects: Project[] = [
  {
    id: "startup-landing",
    title: "Startup Landing Page",
    category: "Landing Page",
    image: portfolio1,
    description: "High-converting landing pages designed to captivate visitors and drive action.",
    color: "from-primary to-emerald-400",
    samples: [
      {
        id: "saas-landing",
        title: "SaaS Product Landing",
        description: "A conversion-focused landing page for a SaaS startup with animated hero section.",
        image: landing1,
        tags: ["React", "Animation", "Responsive"],
        details: {
          overview: "Built a high-performance landing page for a SaaS startup featuring smooth scroll animations, interactive pricing toggle, and a conversion-optimized layout that increased sign-ups by 40%.",
          features: ["Animated hero with particle effects", "Interactive pricing calculator", "Testimonial carousel", "Mobile-first responsive design", "A/B tested CTA buttons"],
          techStack: ["React", "Framer Motion", "Tailwind CSS", "TypeScript"],
          duration: "2 weeks",
          client: "TechFlow Inc."
        }
      },
      {
        id: "app-landing",
        title: "Mobile App Landing",
        description: "Modern app showcase with gradient backgrounds and device mockups.",
        image: landing2,
        tags: ["Gradient", "Modern", "App Showcase"],
        details: {
          overview: "Designed a vibrant app landing page with gradient backgrounds, floating device mockups, and feature highlights that boosted app downloads by 60%.",
          features: ["Gradient mesh backgrounds", "3D device mockups", "Feature comparison table", "Download tracking integration", "Social proof widgets"],
          techStack: ["React", "CSS Animations", "Tailwind CSS", "Analytics"],
          duration: "10 days",
          client: "DecoStartup"
        }
      },
    ],
  },
  {
    id: "business-website",
    title: "Business Website",
    category: "Corporate",
    image: portfolio2,
    description: "Professional corporate websites that establish credibility and trust.",
    color: "from-blue-500 to-cyan-400",
    samples: [
      {
        id: "corporate-site",
        title: "Corporate Homepage",
        description: "Professional multi-page website with service showcases and team sections.",
        image: business1,
        tags: ["Corporate", "Multi-page", "Professional"],
        details: {
          overview: "Developed a comprehensive corporate website featuring service pages, team profiles, case studies, and an integrated blog that positioned the company as an industry leader.",
          features: ["Dynamic team directory", "Case study gallery", "Blog with CMS", "Contact form with validation", "SEO optimized pages"],
          techStack: ["React", "Headless CMS", "Tailwind CSS", "Node.js"],
          duration: "3 weeks",
          client: "Cispprite Solutions"
        }
      },
    ],
  },
  {
    id: "product-showcase",
    title: "Product Showcase",
    category: "E-commerce",
    image: portfolio3,
    description: "Stunning e-commerce experiences with seamless shopping flows.",
    color: "from-secondary to-amber-400",
    samples: [
      {
        id: "ecommerce-store",
        title: "Online Store Design",
        description: "Full e-commerce experience with product grids, filters, and checkout flow.",
        image: ecommerce1,
        tags: ["E-commerce", "Shopping", "Filters"],
        details: {
          overview: "Created a fully functional online store with advanced filtering, wishlist features, and a streamlined checkout process that reduced cart abandonment by 35%.",
          features: ["Advanced product filters", "Wishlist & favorites", "Quick view modal", "Responsive product grid", "Secure checkout flow"],
          techStack: ["React", "Stripe", "Tailwind CSS", "Redux"],
          duration: "4 weeks",
          client: "Landljro Fashion"
        }
      },
    ],
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio",
    category: "Portfolio",
    image: portfolio4,
    description: "Creative portfolio designs that showcase talent beautifully.",
    color: "from-purple-500 to-pink-400",
    samples: [
      {
        id: "creative-portfolio",
        title: "Creative Portfolio",
        description: "Dark-themed portfolio with stunning image galleries and smooth transitions.",
        image: portfolio1Sample,
        tags: ["Dark Theme", "Gallery", "Creative"],
        details: {
          overview: "Designed a visually striking dark-themed portfolio featuring masonry image galleries, smooth page transitions, and interactive project showcases.",
          features: ["Masonry gallery layout", "Smooth page transitions", "Project filtering", "Contact form", "Dark/Light mode toggle"],
          techStack: ["React", "Framer Motion", "Tailwind CSS", "Three.js"],
          duration: "2 weeks",
          client: "Patoust Creative"
        }
      },
    ],
  },
  {
    id: "marriage-invitation",
    title: "Marriage Invitation Card",
    category: "Invitation Design",
    image: portfolio5,
    description: "Elegant and beautiful wedding invitation designs with timeless aesthetics.",
    color: "from-rose-400 to-amber-300",
    samples: [
      {
        id: "royal-wedding",
        title: "Royal Wedding Invitation",
        description: "Luxurious golden-framed invitation with floral ornaments and elegant typography.",
        image: wedding1,
        tags: ["Elegant", "Floral", "Gold"],
        details: {
          overview: "Crafted a luxurious digital wedding invitation with golden ornamental borders, delicate floral illustrations, and beautiful calligraphy typography that enchanted 500+ guests.",
          features: ["Golden ornamental borders", "Floral illustrations", "Calligraphy typography", "RSVP integration", "Countdown timer"],
          techStack: ["React", "CSS Animations", "Custom Fonts", "Email Integration"],
          duration: "1 week",
          client: "Private Client"
        }
      },
    ],
  },
];
