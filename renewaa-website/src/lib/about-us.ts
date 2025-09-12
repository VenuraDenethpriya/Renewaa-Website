import { CheckCircle, Award, Users, Leaf, ShieldCheck, Handshake, Lightbulb, Globe2 } from "lucide-react"
import { CLEAN_ENERGY, CUSTOMERS_COUNT, PROJECTS_COUNT, YEARS_EXPERIENCE } from "./const"


export const stats = [
    { icon: CheckCircle, number: PROJECTS_COUNT, label: "Projects Completed", color: "from-green-400 to-emerald-500" },
    { icon: Users, number: CUSTOMERS_COUNT, label: "Happy Customers", color: "from-blue-400 to-cyan-500" },
    { icon: Award, number: YEARS_EXPERIENCE, label: "Years Experience", color: "from-yellow-400 to-orange-500" },
    { icon: Leaf, number: CLEAN_ENERGY, label: "Clean Energy Generated", color: "from-green-400 to-teal-500" },
  ]

export const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Constantly pushing the boundaries of renewable energy and battery technology to deliver cutting-edge solutions.",
  },
  {
    icon: Globe2,
    title: "Sustainability",
    description:
      "Committed to reducing environmental impact by promoting clean and renewable energy alternatives.",
  },
  {
    icon: Award,
    title: "Quality",
    description:
      "Delivering durable, high-performance products backed by comprehensive warranties and trusted reliability.",
  },
  {
    icon: Users,
    title: "Customer-Centricity",
    description:
      "Building strong relationships through personalized solutions, exceptional service, and after-sales support.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "Operating with transparency, accountability, and trust in every project and partnership.",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    description:
      "Partnering with clients, industries, and communities to create impactful and future-ready energy solutions.",
  },
];