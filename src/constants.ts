import { Project, Skill, Certificate } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Secure Examination Portal',
    description: 'A platform designed to prevent academic dishonesty through advanced monitoring and secure access control.',
    problem: 'Widespread leak of examination papers and impersonation in high-stakes testing environments.',
    solution: 'Developed a login-secured portal with real-time browser lockdown and multi-factor authentication.',
    context: 'Part of an initiative to digitize and secure national level assessments.',
    tags: ['Next.js', 'Firebase', 'PostgreSQL', 'Auth'],
    link: '#',
    github: '#',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '2',
    title: 'IoT Attendance System',
    description: 'Real-time student and staff tracking using hardware-software integration.',
    problem: 'Manual attendance taking is time-consuming, prone to error, and hard to audit.',
    solution: 'An Arduino-based system utilizing RFID scanners and a centralized dashboard for real-time reporting.',
    context: 'Deployed as a pilot project in the AASTU STEM Center.',
    tags: ['Arduino', 'C++', 'Node.js', 'Esp8266'],
    link: '#',
    github: '#',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '3',
    title: 'Crop Recommendation System',
    description: 'AI-driven insights for farmers to optimize land usage and crop yield.',
    problem: 'Farmers often plant crops unsuitable for their soil types, leading to low yields and soil degradation.',
    solution: 'A Machine Learning model that analyzes soil pH, moisture, and temperature to recommend the ideal crop.',
    context: 'Integrated with IoT sensors for real-time localized data collection.',
    tags: ['Python', 'Scikit-learn', 'Machine Learning', 'Flask'],
    link: '#',
    github: '#',
    image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '4',
    title: 'Smart Irrigation IoT System',
    description: 'Automated water management system for precision agriculture.',
    problem: 'Water scarcity and manual labor inefficiencies in rural Ethiopian farming.',
    solution: 'A sensor-based automated system that monitors soil moisture and triggers irrigation only when necessary.',
    context: 'Designed for low-cost implementation in small-scale African agriculture.',
    tags: ['Arduino', 'Moisture Sensors', 'C++'],
    link: '#',
    github: '#',
    image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '5',
    title: 'Security Monitoring Hub',
    description: 'Affordable real-time intrusion detection and alert system.',
    problem: 'High cost of security infrastructure for small businesses and homes.',
    solution: 'An Arduino-based security system utilizing motion sensors and real-time alerts.',
    context: 'Optimized for small-scale deployment with Python-based monitoring dashboard.',
    tags: ['Python', 'Arduino', 'Motion Sensors'],
    link: '#',
    github: '#',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1200',
  }
];

export const SKILLS: Skill[] = [
  {
    category: 'Languages & Frameworks',
    items: [
      { name: 'Python (Automation)', icon: 'Terminal' },
      { name: 'C++/Arduino', icon: 'Cpu' },
      { name: 'MERN Stack', icon: 'Layers' },
      { name: 'TypeScript', icon: 'Code2' }
    ]
  },
  {
    category: 'Hardware & IoT',
    items: [
      { name: 'IoT Architecture', icon: 'Radio' },
      { name: 'Sensor Calibration', icon: 'Activity' },
      { name: 'Circuit Design', icon: 'Zap' }
    ]
  },
  {
    category: 'Security & Defense',
    items: [
      { name: 'Network Defense', icon: 'ShieldCheck' },
      { name: 'Ethical Hacking', icon: 'UserSquare' },
      { name: 'INSA Trained', icon: 'Award' }
    ]
  },
  {
    category: 'Leadership & Grit',
    items: [
      { name: 'Mentorship (20+ Peers)', icon: 'Users' },
      { name: 'Community Leadership', icon: 'Heart' },
      { name: 'Grit & Drive', icon: 'Trophy' }
    ]
  }
];

export const EDUCATION = [
  {
    institution: 'Gelan Boys’ Boarding School',
    degree: 'Grade 11',
    period: 'Current',
    alignment: 'left'
  },
  {
    institution: 'AASTU STEM Center',
    degree: 'Technical Residency in IoT and Systems Engineering',
    period: '2025',
    alignment: 'right'
  },
  {
    institution: 'INSA Cyber Camp',
    degree: 'Specialized training in national-level secure IOT system',
    period: '2024',
    alignment: 'left'
  }
];

export const SOCIALS = {
  github: 'https://github.com/Grace-hub-ctrl',
  linkedin: 'https://www.linkedin.com/in/israel-dawit-195214379',
};

export const CONTACT_INFO = {
  enquiries: 'idsog074@gmail.com',
  hq: 'Addis Ababa, Ethiopia',
  line: '+251 961 628 769'
};

export const CERTIFICATES: Certificate[] = [
  {
    id: '1',
    title: 'Android Developer Fundamentals',
    issuer: 'Udacity',
    date: 'February 2025',
    link: 'https://www.udacity.com/certificate/e/1d6063b2-f60c-11ef-aad6-b7346bdb3753'
  },
  {
    id: '2',
    title: 'Machine Learning Algorithms',
    issuer: 'Great Learning Academy',
    date: 'November 2024',
    link: 'https://www.mygreatlearning.com/certificate/BYVREULK'
  },
  {
    id: '3',
    title: 'Introduction to Neural Networks and Deep Learning',
    issuer: 'Great Learning Academy',
    date: 'November 2024',
    link: 'https://www.mygreatlearning.com/certificate/SNMNWRRV'
  },
  {
    id: '4',
    title: 'Network Security',
    issuer: 'Great Learning Academy',
    date: 'November 2024',
    link: 'https://www.mygreatlearning.com/certificate/DQOSGKRA'
  },
  {
    id: '5',
    title: 'Software Testing Tutorial',
    issuer: 'Great Learning Academy',
    date: 'November 2024',
    link: 'https://www.mygreatlearning.com/certificate/DPYQIPKP'
  },
  {
    id: '6',
    title: 'Digital Marketing Strategy',
    issuer: 'Great Learning Academy',
    date: 'November 2024',
    link: 'https://www.mygreatlearning.com/certificate/ICGKXTZB'
  },
  {
    id: '7',
    title: 'Python Project for Beginners',
    issuer: 'Great Learning Academy',
    date: 'November 2024',
    link: 'https://www.mygreatlearning.com/certificate/ELDKTUWO'
  },
  {
    id: '8',
    title: 'Programming Basics',
    issuer: 'Great Learning Academy',
    date: 'November 2024',
    link: 'https://www.mygreatlearning.com/certificate/BTPYYFFV'
  },
  {
    id: '9',
    title: 'Spoken English',
    issuer: 'Great Learning Academy',
    date: 'November 2024',
    link: 'https://www.mygreatlearning.com/certificate/GZSAQMFG'
  }
];
