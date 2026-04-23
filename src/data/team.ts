// ══════════════════════════════════════════════════════
//  TECIL SOLAR — Team Data
//  Staff profiles for the Team/About page
// ══════════════════════════════════════════════════════

export const teamMembers = [
  {
    id: 'james-oba',
    name: 'James O. Oba',
    title: 'Managing Director / CEO',
    initials: 'JO',
    featured: true,
    qualifications: [
      'M.Sc. Solid State Physics/Electronics',
      'PGD in Physics',
      'HND Physics/Electronics',
      'IEA Certification in Photovoltaic Design & Installation',
      'African Energy Certification in Advanced PV Installation & Maintenance',
    ],
    bio: 'With over 15 years of hands-on experience in solar energy system design, stand-alone and hybrid inverter installations, and electrical engineering, Mr Oba leads the overall planning, administration, and strategic direction of Tecil Integrated Services — while maintaining direct relationships with key clients, partners, and government agencies.',
    tagline: 'The vision, technical depth, and drive behind Tecil Integrated Services.',
    experience: '15+ Years',
    color: 'red',
  },
  {
    id: 'atul-chauldary',
    name: 'Atul Chauldary',
    title: 'General Manager — Operations',
    initials: 'AC',
    featured: false,
    qualifications: [
      'B.Eng. Electrical/Electronics Engineering',
      'Punjab Technical University, India',
    ],
    bio: 'Responsible for project design, implementation, monitoring, evaluation, and quality control across all company projects. Brings vast technical and marketing experience in renewable energy and power backup solutions from Nigeria, Africa, and Asia.',
    tagline: 'A key driver of multi-sector project delivery.',
    experience: 'Multi-Regional',
    color: 'orange',
  },
  {
    id: 'henry-egor',
    name: 'Henry Egor',
    title: 'General Manager — Engineering Services & Training',
    initials: 'HE',
    featured: false,
    qualifications: [
      'HND Electrical/Electronics Engineering',
      'Diploma in Safety Management',
    ],
    bio: 'Coordinates day-to-day technical services, site assessment, and technical reporting. Supervises all technical staff and installation outputs. Seven years of dedicated experience in RE systems design, installation, maintenance, and after-sales support.',
    tagline: 'Ensuring every installation meets the TECIL standard.',
    experience: '7+ Years',
    color: 'teal',
  },
  {
    id: 'patience-bassey',
    name: 'Patience Bassey',
    title: 'General Manager — Projects',
    initials: 'PB',
    featured: false,
    qualifications: [
      'HND Architecture',
    ],
    bio: 'Leads architectural and engineering design, and supervises all construction activities. Over 15 years of experience in construction project design, development, and implementation across Nigeria.',
    tagline: 'Delivering complex projects on spec and on time.',
    experience: '15+ Years',
    color: 'gold',
  },
  {
    id: 'cecilia-oba',
    name: 'Cecilia J. Oba',
    title: 'Director — Business Development',
    initials: 'CJ',
    featured: false,
    qualifications: [
      'B.Sc. & HND Estate Management',
      'Member, NIESV',
    ],
    bio: 'Drives all marketing and business development activities of the company. Coordinates commercial operations across all branch locations. Over 10 years of experience in marketing, project evaluation, and business administration.',
    tagline: 'Connecting the TECIL brand to opportunities across Nigeria.',
    experience: '10+ Years',
    color: 'teal',
  },
  {
    id: 'john-bassey',
    name: 'John Bassey',
    title: 'General Manager — Finance & Administration',
    initials: 'JB',
    featured: false,
    qualifications: [
      'M.Sc. Finance/Accounting',
      'ICAN Certified Chartered Accountant',
    ],
    bio: 'Manages the company\'s financial, accounting, and administrative coordination. Deep knowledge of accounting procedures, audit, and fiscal governance with over 10 years of professional accounting experience.',
    tagline: 'The financial discipline behind 16 years of growth.',
    experience: '10+ Years',
    color: 'orange',
  },
  {
    id: 'finori-ndifon',
    name: 'Finori Ndifon',
    title: 'Technical Services Manager',
    initials: 'FN',
    featured: false,
    qualifications: [],
    bio: 'Supports technical service delivery and field operations across TECIL Solar\'s branch network, ensuring quality outcomes for residential and commercial clients.',
    tagline: 'Hands-on technical leadership in the field.',
    experience: 'Field Operations',
    color: 'red',
  },
];

export const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  red:    { bg: '#FFF1F1', text: '#CC1417', border: 'rgba(204,20,23,0.2)' },
  orange: { bg: '#FFF5EE', text: '#E8601A', border: 'rgba(232,96,26,0.2)' },
  teal:   { bg: '#EDF7F8', text: '#006D77', border: 'rgba(0,109,119,0.2)' },
  gold:   { bg: '#FFFBEA', text: '#C8960C', border: 'rgba(200,150,12,0.2)' },
};