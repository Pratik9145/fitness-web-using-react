import { SiOpenaigym } from "react-icons/si";

export const links = [
    {
        name:"Home",
        path:'/'
    },
    {
        name:"About",
        path:'/about'
    },
    {
        name:"Gallery",
        path:'/gallery'
    },
    
    {
        name:"Plans",
        path:'/plans'
    },
    {
        name:"Trainers",
        path:'/trainers'
    },
//     {
//         name:"Contact",
//         path:'/contact'
//     },
    ]

export const programs = [
    {
        id: 1,
        icon: <SiOpenaigym />,
        title: "Strength Training",
        info: "Build muscle, gain power, and push your physical limits with expert-led strength sessions.",
        path: "/programs/strength"
    },

    {
        id: 2,
        icon: <SiOpenaigym />,
        title: "Cardio Blast",
        info: "Burn fat, boost endurance, and elevate your heart rate with high-energy cardio workouts.",
        path: "/programs/cardio"
    },

    {
        id: 3,
        icon: <SiOpenaigym />,
        title: "Flexibility & Mobility",
        info: "Improve your range of motion and prevent injury with guided stretching and mobility routines.",
        path: "/programs/flexibility"
    },

    {
        id: 4,
        icon: <SiOpenaigym />,
        title: "HIIT Challenge",
        info: "Fast-paced, high-intensity interval training to maximize fat burn in minimal time.",
        path: "/programs/hiit"
    }
];


export const values = [
    {
        id: 1,
        icon: <SiOpenaigym />,
        title: "Discipline",
        desc: "We believe consistent effort beats short bursts of motivation. Show up, stay focused, and results will follow."
    },

    {
        id: 2,
        icon: <SiOpenaigym />,
        title: "Community",
        desc: "You're not in this alone. Our supportive environment lifts everyone up — no matter your fitness level."
    },

    {
        id: 3,
        icon: <SiOpenaigym />,
        title: "Growth",
        desc: "We push past limits to unlock your full potential — mentally and physically."
    },

    {
        id: 4,
        icon: <SiOpenaigym />,
        title: "Integrity",
        desc: "We train with purpose, lead by example, and stay true to our goals and values."
    }
];



export const faqs = [
    {
        id: 1,
        question: "How often should I exercise ?",
        answer: "Aim for at least 150 minutes of moderate-intensity exercise per week, spread over 3-5 days. Include strength training 2-3 days a week for overall fitness."
    },
    {
        id: 2,
        question: "What time of day is best to work out ?",
        answer: "The best time to work out depends on your personal schedule and when you feel most energized."
    },
    {
        id: 3,
        question: "How long should my workouts be ?",
        answer: "Workouts should typically last 30 to 60 minutes depending on your goals."
    },
    {
        id: 4,
        question: "Do I need to warm up before my workouts ?",
        answer: "Yes, warming up before your workout is important."
    },
    {
        id: 5,
        question: "Should I do strength training, cardio or both ?",
        answer: "It's beneficial to do both strength training and cardio for a well-rounded fitness routine."
    },
    {
        id: 6,
        question: "Sould I lift weight for strength training ?",
        answer: "Yes, lifting weights is an effective way to build strength, increase muscle mass, and boost metabolism."
    },
]

export const testimonials = [
    {
        id: 1,
        name : "James R.",
        quote: "Joining this gym has completely transformed my life! I’ve never felt stronger or more motivated. The trainers are so knowledgeable and always push me to reach my personal best. I’m seeing amazing results  and feel more confident than ever!",
        job: "Technician",
        avatar: require("./images/avatar1.jpg")
    },

    {
        id: 2,
        name : "Emily M.",
        quote: "I’ve been working out here for six months now, and the progress I’ve made is incredible. The variety of classes keeps things exciting, and the community atmosphere makes every workout feel rewarding. It’s the best decision I’ve made for my health!",
        job: "Software Engineer",
        avatar: require("./images/avatar2.jpg")
    },

    {
        id: 3,
        name : "Patrick P.",
        quote: "This gym is fantastic! The staff is always friendly and supportive, and the equipment is top-notch. Whether you’re a beginner or a seasoned athlete, they have something for everyone. I’m proud of how far I’ve come, and I couldn’t have done it without the encouragement of the trainers.",
        job: "Professor",
        avatar: require("./images/avatar3.jpg")
    },

    {
        id: 4,
        name : "Olivia K.",
        quote: "What I love most about this gym is the sense of community. It’s not just about working out; it’s about being part of something. I’ve made so many great friends here and have seen significant improvements in my fitness journey. I couldn’t ask for a better place to train!What I love most about this gym is the sense of community.",
        job: "Doctor",
        avatar: require("./images/avatar4.jpg")
    },

    {
        id: 5,
        name : "David P.",
        quote: "The motivation I’ve gained from being a part of this gym is unmatched. The personal trainers are always available to offer guidance, and I never feel judged, no matter my fitness level. I’ve achieved goals I never thought possible, and I can’t wait to see what’s next!",
        job: "Student",
        avatar: require("./images/avatar5.jpg")
    },

]

export const plans = [
    {
        id: 1,
        name: 'Silver Package',
        desc: 'Ideal for beginners who need constant support and guidance to build a strong foundation.',
        price: 4000,
        features: [
            { feature: 'Access to all gym equipment', available: true },
            { feature: 'Basic workout plan', available: true },
            { feature: 'Weekly progress check-ins', available: true },
            { feature: 'Locker room access', available: true },
            { feature: '1 Group class per week', available: true },
            { feature: 'Personal trainer access', available: false },
            { feature: 'Customized nutrition plan', available: false },
            { feature: 'Home workout support', available: false },
            { feature: 'Priority scheduling', available: false },
            { feature: 'Wellness workshops', available: false },
            { feature: 'Massage & recovery services', available: false },
        ]
    },
    {
        id: 2,
        name: 'Gold Package',
        desc: 'Great for regular gym-goers who want more flexibility and features to enhance their routine.',
        price: 6000,
        features: [
            { feature: 'Access to all gym equipment', available: true },
            { feature: 'Advanced workout plans', available: true },
            { feature: 'Bi-weekly progress check-ins', available: true },
            { feature: 'Locker room + shower access', available: true },
            { feature: '3 Group classes per week', available: true },
            { feature: 'Limited personal trainer access', available: true },
            { feature: 'Customized nutrition plan', available: true },
            { feature: 'Home workout support', available: true },
            { feature: 'Priority scheduling', available: false },
            { feature: 'Wellness workshops', available: false },
            { feature: 'Massage & recovery services', available: false },
        ]
    },
    {
        id: 3,
        name: 'Platinum Package',
        desc: 'Perfect for busy professionals who want full-featured, premium services — including home support.',
        price: 7000,
        features: [
            { feature: 'Access to all gym equipment', available: true },
            { feature: 'Custom workout plans', available: true },
            { feature: 'Weekly personal assessments', available: true },
            { feature: 'Locker + premium amenities', available: true },
            { feature: 'Unlimited group classes', available: true },
            { feature: 'Dedicated personal trainer', available: true },
            { feature: 'Customized nutrition coaching', available: true },
            { feature: 'Home workout & virtual support', available: true },
            { feature: 'Priority scheduling', available: true },
            { feature: 'Wellness workshops', available: true },
            { feature: 'Massage & recovery services', available: true },
        ]
    }
];

const Trainer1 = require('./images/trainer1.jpg')
const Trainer2 = require('./images/trainer2.jpg')
const Trainer3 = require('./images/trainer3.jpg')


export const trainers = [
    {
        id: 1,
        image: Trainer1,
        name: 'Ronny Colmen',
        job: 'Aerobic Trainer',
        socials:['https://instagram.com/', 'https://x.com/', 'http://facebook.com/', 'http://linkedin.com/']
    },
    {
        id: 2,
        image: Trainer2,
        name: 'CBum',
        job: 'Circuit Trainer',
        socials:['https://instagram.com/', 'https://x.com/', 'http://facebook.com/', 'http://linkedin.com/']
    },
    {
        id: 3,
        image: Trainer3,
        name: 'Rock',
        job: 'Physical Intelligence Trainer',
        socials:['https://instagram.com/', 'https://x.com/', 'http://facebook.com/', 'http://linkedin.com/']
    }
]