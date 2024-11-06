interface NavigationItem {
  id: string;
  title: string;
  url: string;
  onlyMobile?: boolean;
}

type HeroIcon = string;

type NotificationImage = string;

type CompanyLogo = string;

interface BrainwaveService {
  title: string;
}

interface RoadmapItem {
  id: string;
  title: string;
  text: string;
  date: string;
  status: string;
  imageUrl: string;
  colorful?: boolean;
}

interface CollabContent {
  id: string;
  title: string;
  text?: string;
}

interface CollabApp {
  id: string;
  title: string;
  icon: string;
  width: number;
  height: number;
}

interface PricingPlan {
  id: string;
  title: string;
  description: string;
  price: string | null;
  features: string[];
}

interface BenefitItem {
  id: string;
  title: string;
  text: string;
  backgroundUrl: string;
  iconUrl: string;
  imageUrl: string;
  light?: boolean;
}

interface SocialMedia {
  id: string;
  title: string;
  iconUrl: string;
  url: string;
}


export const navigation: NavigationItem[] = [
  { id: "0", title: "Features", url: "#features" },
  { id: "1", title: "Pricing", url: "#pricing" },
  { id: "2", title: "How to use", url: "#how-to-use" },
  { id: "3", title: "Roadmap", url: "#roadmap" },
  { id: "4", title: "New account", url: "#signup", onlyMobile: true },
  { id: "5", title: "Sign in", url: "#login", onlyMobile: true },
];

export const heroIcons: HeroIcon[] = ["/home-smile.svg", "/file-02.svg", "/search-md.svg", "/plus-square.svg"];

export const notificationImages: NotificationImage[] = ["/notification/image-4.png", "/notification/image-3.png", "/notification/image-2.png"];

export const companyLogos: CompanyLogo[] = ["/yourlogo.svg", "/yourlogo.svg", "/yourlogo.svg", "/yourlogo.svg", "/yourlogo.svg"];

export const brainwaveServices: BrainwaveService[] = [
  { title: "Photo generating" },
  { title: "Photo enhance" },
  { title: "Seamless Integration" },
];

export const brainwaveServicesIcons: string[] = [
  "/recording-03.svg",
  "/recording-01.svg",
  "/disc-02.svg",
  "/chrome-cast.svg",
  "/sliders-04.svg",
];

export const roadmap: RoadmapItem[] = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: "/roadmap/image-1.png",
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: "/roadmap/image-2.png",
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: "/roadmap/image-3.png",
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: "/roadmap/image-4.png",
  },
];

export const collabText = "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent: CollabContent[] = [
  { id: "0", title: "Seamless Integration", text: collabText },
  { id: "1", title: "Smart Automation" },
  { id: "2", title: "Top-notch Security" },
];

export const collabApps: CollabApp[] = [
  { id: "0", title: "Figma", icon: "/collaboration/figma.png", width: 26, height: 36 },
  { id: "1", title: "Notion", icon: "/collaboration/notion.png", width: 34, height: 36 },
  { id: "2", title: "Discord", icon: "/collaboration/discord.png", width: 36, height: 28 },
  { id: "3", title: "Slack", icon: "/collaboration/slack.png", width: 34, height: 35 },
  { id: "4", title: "Photoshop", icon: "/collaboration/photoshop.png", width: 34, height: 34 },
  { id: "5", title: "Protopie", icon: "/collaboration/protopie.png", width: 34, height: 34 },
  { id: "6", title: "Framer", icon: "/collaboration/framer.png", width: 26, height: 34 },
  { id: "7", title: "Raindrop", icon: "/collaboration/raindrop.png", width: 38, height: 32 },
];

export const pricing: PricingPlan[] = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits: BenefitItem[] = [
  {
    id: "0",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "/benefits/card-1.svg",
    iconUrl: "/benefits/icon-1.svg",
    imageUrl: "/benefits/image-2.png",
  },
  {
    id: "1",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "/benefits/card-2.svg",
    iconUrl: "/benefits/icon-2.svg",
    imageUrl: "/benefits/image-2.png",
    light: true,
  },
  {
    id: "2",
    title: "Connect everywhere",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "/benefits/card-3.svg",
    iconUrl: "/benefits/icon-3.svg",
    imageUrl: "/benefits/image-2.png",
  },
  {
    id: "3",
    title: "Fast responding",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "/benefits/card-4.svg",
    iconUrl: "/benefits/icon-4.svg",
    imageUrl: "/benefits/image-2.png",
    light: true,
  },
  {
    id: "4",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "/benefits/card-5.svg",
    iconUrl: "/benefits/icon-1.svg",
    imageUrl: "/benefits/image-2.png",
  },
  {
    id: "5",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "/benefits/card-6.svg",
    iconUrl: "/benefits/icon-2.svg",
    imageUrl: "/benefits/image-2.png",
  },
];

// Social Media Links
export const socials: SocialMedia[] = [
  { id: "0", title: "Facebook", iconUrl: "/socials/facebook.svg", url: "https://www.facebook.com/" },
  { id: "1", title: "Twitter", iconUrl: "/socials/twitter.svg", url: "https://twitter.com/" },
  { id: "2", title: "Instagram", iconUrl: "/socials/instagram.svg", url: "https://www.instagram.com/" },
  { id: "3", title: "Discord", iconUrl: "/socials/discord.svg", url: "https://discord.com/" },
  { id: "4", title: "Telegram", iconUrl: "/socials/telegram.svg", url: "https://telegram.org/" },
];
