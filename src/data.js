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
    {
        name:"Contact",
        path:'/contact'
    },
]

export const programs = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title:"Program One",
        info:"This is the day that lord has made",
        path:"/programs/111"
    },

    {
        id: 2,
        icon: <SiOpenaigym/>,
        title:"Program Two",
        info:"This is the day that lord has made",
        path:"/programs/222"
    },

    {
        id: 3,
        icon: <SiOpenaigym/>,
        title:"Program Three",
        info:"This is the day that lord has made",
        path:"/programs/333"
    },

    {
        id: 4,
        icon: <SiOpenaigym/>,
        title:"Program Four",
        info:"This is the day that lord has made",
        path:"/programs/444"
    }
]

export const values = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title:"Value One",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, inventore!"
    },

    {
        id: 2,
        icon: <SiOpenaigym/>,
        title:"Value Two",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, inventore!"
    },

    {
        id: 3,
        icon: <SiOpenaigym/>,
        title:"Value Three",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, inventore!"
    },

    {
        id: 4,
        icon: <SiOpenaigym/>,
        title:"Value Four",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, inventore!"
    }
]


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

export const plans =[
    {
        id: 1,
        name: 'Silver Package',
        desc: 'This package is perfect for beginners who need constatnt help',
        price: 7000,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: false},
            {feature: 'Sixth Feature', available: false},
            
            {feature: 'Seventh Feature', available: false},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false},
        ]
    },
    {
        id: 2,
        name: 'Gold Pacakge',
        desc: 'This is the perfect for beginners who know what their doing',
        price: 9000,
        features:[
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            
            {feature: 'Seventh Feature', available: true},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false},
        ]
    },
    {
        id: 3,
        name: ' Platinum Pacakge',
        desc: 'This is the perfect for busy people who need home service',
        price: 12000,
        features:[
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            
            {feature: 'Seventh Feature', available: true},
            {feature: 'Eighth Feature', available: true},
            {feature: 'Ninth Feature', available: true},
            {feature: 'Tenth Feature', available: true},
            {feature: 'Eleventh Feature', available: true},
        ]
    },
]

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