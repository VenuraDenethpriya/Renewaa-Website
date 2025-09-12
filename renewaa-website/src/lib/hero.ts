import { services } from "./services";

export const slides = [
    {
      title: "Lithium Battery Packs",
      button: "Learn More",
      src: "/products/Lithium Battery Packs.jpg?height=300&width=400",
       product: services.find(s => s.title === "Lithium Battery Packs"),
    },
    {
      title: "Forklifts Battery Packs",
      button: "Learn More",
      src: "/products/Forklifts Battery Packs.jpg?height=300&width=400",
      product: services.find(s => s.title === "Forklifts Battery Packs"),
    },
    {
      title: "E-Bike Battery Packs",
      button: "Learn More",
      src: "/products/E-Bike Battery Packs.jpg?height=300&width=400",
      product: services.find(s => s.title === "E-Bike Battery Packs"),
    },
    {
      title: "EV Battery Upgrades",
      button: "Learn More",
      src: "/products/EV Battery Upgrades.jpg?height=300&width=400",
      product: services.find(s => s.title === "EV Battery Upgrades"),
    },
    {
      title: "Solar Power Systems",
      button: "Learn More",
      src: "/products/Solar Power Systems.jpg?height=300&width=400",
      product: services.find(s => s.title === "Solar Power Systems"),
    }
    ,
    {
      title: "Custom Engineering",
      button: "Learn More",
      src: "/products/Custom Engineering.jpg?height=300&width=400",
      product: services.find(s => s.title === "Custom Engineering"),
    }
  ]