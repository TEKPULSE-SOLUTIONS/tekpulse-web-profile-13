
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  description: string;
  image: string;
}

export const departments = [
  'Executive Department',
  'Engineering/Development Department',
  'Design Department',
  'Data & AI Department',
  'IT & Infrastructure Department',
  'Sales & Marketing Department',
  'Human Resource & Admin Department',
  'Finance & Legal Department'
];

export const teamMembers: TeamMember[] = [
  // Executive Department
  {
    id: 'sophia-kimani',
    name: 'Sophia Kimani',
    role: 'CEO',
    department: 'Executive Department',
    description: 'A visionary leader driving growth and innovation at Techpulse.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'michael-johnson',
    name: 'Michael Johnson',
    role: 'CTO',
    department: 'Executive Department',
    description: 'Leads all technical strategies and oversees emerging technologies.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'david-kamau',
    name: 'David Kamau',
    role: 'COO',
    department: 'Executive Department',
    description: 'Manages operations and ensures business efficiency.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'emily-carter',
    name: 'Emily Carter',
    role: 'CFO',
    department: 'Executive Department',
    description: 'Oversees the company\'s financial strategy and stability.',
    image: 'https://images.unsplash.com/photo-1594736797933-d0c56a7fef4b?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'alice-njoroge',
    name: 'Alice Njoroge',
    role: 'Executive Assistant',
    department: 'Executive Department',
    description: 'Coordinates executive communications and scheduling.',
    image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=400&q=80'
  },
  
  // Engineering/Development Department
  {
    id: 'moses-kahindi',
    name: 'Moses Kahindi',
    role: 'VP of Engineering',
    department: 'Engineering/Development Department',
    description: 'Oversees all engineering teams with passion for scalable systems.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'charles-mwangi',
    name: 'Charles Mwangi',
    role: 'Engineering Manager / Tech Lead',
    department: 'Engineering/Development Department',
    description: 'Leads development sprints and architecture.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'brian-otieno',
    name: 'Brian Otieno',
    role: 'Frontend Developer',
    department: 'Engineering/Development Department',
    description: 'Crafts responsive and modern web interfaces.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'jessica-walker',
    name: 'Jessica Walker',
    role: 'Backend Developer',
    department: 'Engineering/Development Department',
    description: 'Builds APIs and services that power Techpulse products.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'kelvin-kariuki',
    name: 'Kelvin Kariuki',
    role: 'Full-Stack Developer',
    department: 'Engineering/Development Department',
    description: 'Bridges frontend and backend efficiently.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'amanda-white',
    name: 'Amanda White',
    role: 'Mobile Developer',
    department: 'Engineering/Development Department',
    description: 'Creates high-performance mobile experiences.',
    image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'peter-mutua',
    name: 'Peter Mutua',
    role: 'QA/Test Engineer',
    department: 'Engineering/Development Department',
    description: 'Ensures product quality through rigorous testing.',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'rachel-green',
    name: 'Rachel Green',
    role: 'DevOps Engineer',
    department: 'Engineering/Development Department',
    description: 'Manages CI/CD and cloud infrastructure.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'john-wambua',
    name: 'John Wambua',
    role: 'Junior Developer',
    department: 'Engineering/Development Department',
    description: 'Actively learning and contributing to live projects.',
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80'
  },
  
  // Design Department
  {
    id: 'angela-muli',
    name: 'Angela Muli',
    role: 'UX/UI Lead',
    department: 'Design Department',
    description: 'Designs seamless user journeys across platforms.',
    image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'chris-thompson',
    name: 'Chris Thompson',
    role: 'UX Researcher',
    department: 'Design Department',
    description: 'Uncovers insights from user behavior.',
    image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'irene-wanjiku',
    name: 'Irene Wanjiku',
    role: 'UI Designer',
    department: 'Design Department',
    description: 'Crafts stunning and intuitive interfaces.',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'brandon-lewis',
    name: 'Brandon Lewis',
    role: 'Graphic Designer',
    department: 'Design Department',
    description: 'Creates engaging visuals and brand assets.',
    image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'zainab-mwikali',
    name: 'Zainab Mwikali',
    role: 'Interaction Designer',
    department: 'Design Department',
    description: 'Builds delightful micro-interactions.',
    image: 'https://images.unsplash.com/photo-1546961329-78bef0414d7c?auto=format&fit=crop&w=400&q=80'
  },
  
  // Data & AI Department
  {
    id: 'victor-otieno',
    name: 'Victor Otieno',
    role: 'Data Scientist',
    department: 'Data & AI Department',
    description: 'Leverages data for predictive insights.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'natalie-harris',
    name: 'Natalie Harris',
    role: 'Data Analyst',
    department: 'Data & AI Department',
    description: 'Provides data-driven decision support.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616c96b6c1b?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'mercy-chebet',
    name: 'Mercy Chebet',
    role: 'Machine Learning Engineer',
    department: 'Data & AI Department',
    description: 'Deploys ML models in production.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'derrick-owens',
    name: 'Derrick Owens',
    role: 'Data Engineer',
    department: 'Data & AI Department',
    description: 'Builds data pipelines and architecture.',
    image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=400&q=80'
  },
  
  // IT & Infrastructure Department
  {
    id: 'brenda-achieng',
    name: 'Brenda Achieng',
    role: 'IT Manager',
    department: 'IT & Infrastructure Department',
    description: 'Oversees IT systems and support.',
    image: 'https://images.unsplash.com/photo-1562788869-4ed32648eb72?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'kevin-taylor',
    name: 'Kevin Taylor',
    role: 'System Administrator',
    department: 'IT & Infrastructure Department',
    description: 'Ensures reliable server uptime.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'samuel-kiptoo',
    name: 'Samuel Kiptoo',
    role: 'Network Engineer',
    department: 'IT & Infrastructure Department',
    description: 'Maintains fast, secure connections.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'laura-smith',
    name: 'Laura Smith',
    role: 'Cybersecurity Analyst',
    department: 'IT & Infrastructure Department',
    description: 'Protects Techpulse from cyber threats.',
    image: 'https://images.unsplash.com/photo-1485875437342-9b39470b3d95?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'faith-mwende',
    name: 'Faith Mwende',
    role: 'Tech Support Officer',
    department: 'IT & Infrastructure Department',
    description: 'Provides client and staff technical assistance.',
    image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=400&q=80'
  },
  
  // Sales & Marketing Department
  {
    id: 'ronald-njuguna',
    name: 'Ronald Njuguna',
    role: 'Sales Director',
    department: 'Sales & Marketing Department',
    description: 'Leads sales strategy and team execution.',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'kimberly-brooks',
    name: 'Kimberly Brooks',
    role: 'Account Executive',
    department: 'Sales & Marketing Department',
    description: 'Builds and maintains client relationships.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'diana-wambui',
    name: 'Diana Wambui',
    role: 'Marketing Manager',
    department: 'Sales & Marketing Department',
    description: 'Plans and oversees all marketing campaigns.',
    image: 'https://images.unsplash.com/photo-1580894894513-541e068a3e2b?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'jack-carter',
    name: 'Jack Carter',
    role: 'Digital Marketer',
    department: 'Sales & Marketing Department',
    description: 'Manages online ads and analytics.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'sharon-auma',
    name: 'Sharon Auma',
    role: 'SEO/SEM Specialist',
    department: 'Sales & Marketing Department',
    description: 'Optimizes content for search engines.',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'marcus-mwangi',
    name: 'Marcus Mwangi',
    role: 'Content Writer',
    department: 'Sales & Marketing Department',
    description: 'Creates compelling tech articles and blog posts.',
    image: 'https://images.unsplash.com/photo-1543132220-3ec99d6bb155?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'susan-smith',
    name: 'Susan Smith',
    role: 'Social Media Manager',
    department: 'Sales & Marketing Department',
    description: 'Grows online presence and engagement.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80'
  },
  
  // Human Resource & Admin Department
  {
    id: 'lydia-omondi',
    name: 'Lydia Omondi',
    role: 'HR Manager',
    department: 'Human Resource & Admin Department',
    description: 'Manages recruitment and employee welfare.',
    image: 'https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'trevor-watson',
    name: 'Trevor Watson',
    role: 'Recruiter',
    department: 'Human Resource & Admin Department',
    description: 'Sources the best tech talent worldwide.',
    image: 'https://images.unsplash.com/photo-1528892952291-009c663ce843?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'naomi-wanjiru',
    name: 'Naomi Wanjiru',
    role: 'Office Administrator',
    department: 'Human Resource & Admin Department',
    description: 'Handles office logistics and supplies.',
    image: 'https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'janet-brown',
    name: 'Janet Brown',
    role: 'Training & Development Officer',
    department: 'Human Resource & Admin Department',
    description: 'Builds learning pathways for growth.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80'
  },
  
  // Finance & Legal Department
  {
    id: 'george-ndegwa',
    name: 'George Ndegwa',
    role: 'Finance Manager',
    department: 'Finance & Legal Department',
    description: 'Controls financial planning and reporting.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'melissa-green',
    name: 'Melissa Green',
    role: 'Accountant',
    department: 'Finance & Legal Department',
    description: 'Handles payroll and bookkeeping.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616c96b6c1b?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'samuel-kilonzo',
    name: 'Samuel Kilonzo',
    role: 'Legal Officer',
    department: 'Finance & Legal Department',
    description: 'Manages legal compliance and contracts.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'ruth-evans',
    name: 'Ruth Evans',
    role: 'Compliance Officer',
    department: 'Finance & Legal Department',
    description: 'Ensures all operations follow policy.',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80'
  }
];
