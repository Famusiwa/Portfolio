import assets from "../assets/assets"


export interface Service {
    title: string
    description: string,
    icon: string
}

export interface Work {
    id: number
    title: string
    description: string,
    image: string
    link:string
    tech: string[]
    github:string
}

export const serviceData: Service[]= [

        {
            title: "Advertising",
            description: "We turn bold ideas into powerful digital solutions that connects, engage...",
            icon: assets.ads_icon
        },
        {
            title: "Content Marketing",
            description: "We help you execute your plan and deliver results",
            icon: assets.content_icon
        },
        {
            title: "Social Media",
            description: "We help you build a strong social media presence and engage with your audience,  inspires, and delivers results",
            icon: assets.social_icon
        },
        {
            title: "Graphics Design",
            description: "We bring your vision to life through creative design that communicates, inspires, and delivers results",
            icon: assets.marketing_icon
        },
    ]


export const workData: Work[]= [

        {
            id: 1,
            title: "GitHub Finder",
            description: "Help to find different user on github with their repo",
            image: assets.githubfinder,
            link: "https://git-hub-finder-beta-gold.vercel.app/",
            tech: ["React", "Tailwind", "TypeScript"],
            github: "#",
        },
        {
            id: 2,
            title: "Fortune Housing",
            description: "We turn your vision of home into a reality, delivering results that move you.",
            image: assets.fortune_real_estate,
            link: "https://fortune-housing.vercel.app/",
             tech: ["React", "Tailwind", "Firebase", "TypeScript"],
            github: "#",
        },
        {
            id: 3,
            title: "Revenue Payment",
            description: "This application is build to handle revenue payment of staff accross state",
            image: assets.revenuePayment,
            link: "https://payment.icmaservices.com/",
            tech: ["React","TypeScript", "Tailwind", "ASP.Net(C#)"],
            github: "#",
        },

        
        
    ]
