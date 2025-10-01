import { Battery, Sun, Building, Car, Bike, Forklift } from "lucide-react"

export const services = [
  {
    icon: Battery,
    title: "Lithium Battery Packs",
    description: "ECO CELL, SOLAR FLEX, POWER VAULT & POWER HUB — advanced lithium energy storage for homes, businesses, and industries.",
    overview: "The ECO CELL is a reliable and cost-effective floor-mounted lithium battery pack engineered for long-lasting performance and efficiency. It is designed with advanced protection systems, making it ideal for residential, commercial, and industrial energy storage applications.",
    image: "/products/Lithium Battery Packs.jpg?height=300&width=400",
    features: [
      "Smart BMS for advanced protection",
      "Wide range of voltages & capacities",
      "Wall-mounted & floor-mounted options",
      "Touchscreen monitoring (POWER VAULT)",
      "Hybrid solar & UPS-ready (POWER HUB)"
    ],
    mounting:"Floor-mounted",
    battery_type:"Advanced lithium - ion cells",
    voltage_capacity:"Wide range options available",
    protection:"Smart Battery Management System(BMS)",
    price:""
  },
  {
    icon: Forklift,
    title: "Forklifts Battery Packs",
    description: "LOAD MAX — engineered for electric forklifts, delivering long-lasting power, superior performance, and unmatched reliability.",
    overview: "LOAD MAX is a high-performance lithium battery solution specifically engineered for electric forklifts. It provides exceptional power output, longer runtime on a single charge, and superior durability compared to conventional lead-acid batteries — making it the ideal choice for warehouses, factories, and logistics operations.",
    image: "/products/Forklifts Battery Packs.jpg?height=300&width=400",
    features: [
      "Exceptional high-current capability",
      "Extended runtime on a single charge",
      "Longer lifespan than lead-acid batteries",
      "Low maintenance, reducing operating costs",
      "Designed for industrial-grade reliability",

    ],
    technology: "Advanced lithium-ion",
    current: "High-current capability",
    lifespan: "Significantly longer than lead-acid",
    charging: "Fast charging support",
    price:""
  },
  {
    icon: Bike,
    title: "E-Bike Battery Packs",
    description: "ECO RIDE — lithium battery packs built for e-bikes and three-wheelers, offering extended range and unmatched durability.",
    overview:"The ECO RIDE is a durable and efficient lithium battery pack built for electric bikes and three-wheelers. Designed for urban mobility and commercial transport, it offers long service life, extended range, and smart monitoring — ensuring reliable performance for every journey.",
    image: "/products/E-Bike Battery Packs.jpg?height=300&width=400",
    features: [
      "Smart performance monitoring",
      "Backed by a 100,000 km warranty",
      "Long service life with advanced lithium cells",
      "Reliable for urban mobility and last-mile transport",
      "Reduces emissions and running costs",
    ],
    technology: "Lithium-ion cells",
    range: "Extended driving range per charge",
    warranty: "Backed by 100,000 km warranty",
    monitoring: "Smart performance tracking",
    price:""
  },
  {
    icon: Car,
    title: "EV Battery Upgrades",
    description: "Upgraded battery packs for Nissan Leaf, Mitsubishi Outlander PHEV, and Mahindra E2O — giving EVs new life and longer range.",
    overview:"Renewaa specializes in advanced EV battery upgrades that give electric vehicles a new lease on life with extended driving range, improved efficiency, and longer battery lifespan. By replacing outdated or degraded factory-installed batteries with our high-performance lithium packs, we ensure that EV owners enjoy greater reliability, reduced maintenance, and enhanced daily usability. Our solutions are designed for popular EV models such as the Nissan Leaf, Mitsubishi Outlander PHEV, and Mahindra E2O, delivering tailor-made performance improvements to suit each vehicle.",
    image: "/products/EV Battery Upgrades.jpg?height=300&width=400",
    features: [
      "Nissan Leaf: 400 km+ range upgrade",
      "Outlander PHEV: EV mode extended to 130 km",
      "Mahindra E2O: extended-range packs & battery balancers",
      "Longer battery life with high-quality lithium cells",
      "Improved efficiency and reliability for daily driving",
    ],
    technology: "High-quality, long-life lithium cell packs",
    compatibility: "Nissan Leaf, Mitsubishi Outlander PHEV, Mahindra E2O, and other supported EVs",
    applications: "Personal and fleet EVs seeking improved performance and reduced operating costs",
    price:""
  },
  {
    icon: Sun,
    title: "Solar Power Systems",
    description: "On-grid, off-grid, and hybrid solar solutions tailored for homes, businesses, and remote areas islandwide with reliability.",
    overview:"Renewaa provides complete solar power solutions, including On-Grid, Off-Grid, and Hybrid systems, designed to meet the energy needs of homes, businesses, and industries. Whether you want to reduce electricity costs, power remote locations, or enjoy the flexibility of hybrid systems, our solar solutions deliver reliable, sustainable, and cost-effective energy with expert installation and support.",
    image: "/products/Solar Power Systems.jpg?height=300&width=400",
    features: [
      "High-efficiency solar panels",
      "Seamless grid integration for cost savings",
      "In-house lithium battery packs for off-grid reliability",
      "Sustainable power for remote and urban use",
      "Customized design and installation with expert support"
    ],
    ongrid_systems: "Connected directly to the utility grid, reducing monthly electricity bills while ensuring consistent power supply.",
    Off_grid_systems: "Standalone solar systems with in-house lithium battery storage, ideal for remote areas without reliable grid access.",
    hybrid_systems: "Combines on-grid and off-grid capabilities, providing backup power during outages while maximizing solar efficiency.",
    applications: "Residential, commercial, and industrial use.",
    price:""
  },
  {
    icon: Building,
    title: "Custom Engineering",
    description: "Tailor-made energy solutions and R&D innovations, from wireless BMS systems to EV chargers and autonomous driving tech.",
    overview:"Renewaa specializes in designing customized energy and technology solutions for businesses and individuals. From lithium battery packs to smart software, EV charging, and autonomous driving innovations, our R&D delivers tailored projects for unique requirements.",
    image: "/products/Custom Engineering.jpg?height=300&width=400",
    features: [
      "Bespoke lithium battery pack design",
      "Wireless battery monitoring (Wi-BMS, Wi-75BMS)",
      "EV fast charger development (CCS2 & CHAdeMO)",
      "Cloud-based workflow & monitoring software",
      "Autonomous driving & smart energy innovations"
    ],
    bespoke_battery_design: "Custom-designed lithium battery packs tailored to specific energy needs, ensuring optimal performance and efficiency.",
    wireless_bms: "Advanced Wireless Battery Management Systems (Wi-BMS, Wi-75BMS) for seamless monitoring, safety, and real-time diagnostics without complex wiring.",
    ev_charging_solutions: "EV charger development supporting CCS2 & CHAdeMO standards, enabling fast and reliable charging for diverse electric vehicles.",
    smart_tech_platforms: "Cloud-based workflow platforms with AI-driven monitoring and autonomous driving technology powered by deep learning for next-gen mobility solutions.",
    price:""
  },
]