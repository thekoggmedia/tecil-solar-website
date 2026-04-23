// ══════════════════════════════════════════════════════
//  TECIL SOLAR — Central Data File
//  All site content lives here. Edit once, updates everywhere.
// ══════════════════════════════════════════════════════

export const siteConfig = {
  name:    'TECIL Solar',
  tagline: '...the inverter place',
  phone:   '0803 713 5545',
  email:   'info.tecilservices@gmail.com',
  website: 'www.tecilsolar.com',
  founded: '2008',
  parent:  'Tecil Integrated Services Limited',
  wa:      'https://wa.me/2348037135545',
};

export const heroStats = [
  { value: '16+', label: 'Years operating' },
  { value: '7',   label: 'Active branches' },
  { value: '34+', label: 'Projects delivered' },
  { value: '15+', label: 'Brand partnerships' },
];

export const heroTrust = ['Lagos','Port Harcourt','Calabar','Uyo','Ikom'];

export const services = [
  {
    id: 'installation',
    eyebrow: 'Installation',
    title: 'System Installation & Commissioning',
    summary: 'We design and install solar and inverter systems for homes, businesses, and institutions, then test and document everything before handover.',
    bullets: ['Site survey and load analysis','System sizing and BOQ support','Safe installation and cable management','Commissioning, testing, and handover documentation'],
  },
  {
    id: 'maintenance',
    eyebrow: 'Maintenance',
    title: 'Maintenance & Repair',
    summary: 'Preventive servicing and reactive fault resolution that keep your system stable, efficient, and dependable year after year.',
    bullets: ['Routine maintenance visits','Fault diagnostics and repair','Battery and inverter health checks','SLA agreements for commercial clients'],
  },
  {
    id: 'assessment',
    eyebrow: 'Assessment',
    title: 'Load Assessment & Technical Advisory',
    summary: 'We help you invest wisely — matching the right system to your actual load, usage pattern, and budget before a single component is purchased.',
    bullets: ['Energy audit and load profiling','ROI and payback period guidance','System specification and BOQ support','Brand-neutral advisory for independent buyers'],
  },
  {
    id: 'supply',
    eyebrow: 'Supply',
    title: 'Product Supply & Procurement',
    summary: 'Panels, inverters, batteries, controllers, and accessories sourced for quality, compatibility, and long-term value from 15+ authorised brands.',
    bullets: ['Solar panels and hybrid inverters','Lithium and deep-cycle batteries','Charge controllers and protection devices','Procurement support for project rollouts'],
  },
  {
    id: 'projects',
    eyebrow: 'EPC Projects',
    title: 'Large-Scale EPC Projects',
    summary: 'Turnkey engineering, procurement, and construction for institutions, government agencies, and industrial clients. Fully documented delivery.',
    bullets: ['Full project management and site supervision','Government and institutional procurement compliance','Commissioning reports and handover documentation','Multi-site and phased project delivery'],
  },
  {
    id: 'training',
    eyebrow: 'Training',
    title: 'Training & Capacity Building',
    summary: 'We train users and technicians so systems perform better and remain easier to manage. The 2026 roadmap includes the TECIL Solar Training Institute.',
    bullets: ['User orientation and system handover training','Technician support and troubleshooting courses','Maintenance training for commercial teams','External and TVET participant programmes'],
  },
];

export const audiences = [
  {
    title: 'Homeowners',
    icon:  '🏠',
    intro: 'Stop paying generator bills every month.',
    body:  'TECIL Solar systems are built for the Nigerian home — designed for your load, our weather, and years of reliable service. Your neighbours will notice.',
    points: [
      'Quiet, clean power 24/7',
      'Lower long-term running cost',
      'Systems that outlast their warranties'
    ],
    color: 'red',
  },
  {
    title: 'Businesses',
    icon:  '🏪',
    intro: 'Downtime costs money.',
    body:  'A properly specified TECIL Solar system keeps your business running when the grid fails — and pays for itself faster than you think.',
    points: [
      'Zero-downtime operations',
      'Predictable energy cost',
      'Better productivity and customer experience'
    ],
    color: 'orange',
  },
  {
    title: 'Institutions',
    icon:  '🏛',
    intro: 'We’ve delivered for serious institutions across Nigeria.',
    body:  'From universities and hospitals to military facilities and consulates, we have the project history and credentials to meet your procurement standards.',
    points: [
      'Procurement-ready documentation',
      'Proven institutional track record',
      'Commissioning reports and SLA handover'
    ],
    color: 'teal',
  },
  {
    title: 'Contractors & Developers',
    icon:  '🏗',
    intro: 'A reliable solar partner with proven delivery.',
    body:  'We supply, install, commission — and document everything. Our 15+ brand partnerships and 34+ projects speak for us.',
    points: [
      'Verified delivery history',
      'Full project documentation',
      'Multi-site and phased rollout capability'
    ],
    color: 'gold',
  },
];

export const products = [
  {
    id:       'panels',
    category: 'Solar Panels',
    title:    'High-Efficiency Modules',
    range:    '20W – 600W',
    summary:  'Monocrystalline, polycrystalline, and half-cut crystalline panels selected for consistent output, durability, and long service life.',
    bullets:  ['Mono & poly crystalline options', 'Half-cut for shade tolerance', 'Residential to industrial scale'],
    image:    'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80',
  },
  {
    id:       'inverters',
    category: 'Inverters',
    title:    'Hybrid Inverter Systems',
    range:    '1KVA – 50KVA',
    summary:  'Pure sinewave transformer-based and solar hybrid inverters for stable, clean power conversion with smart battery charging.',
    bullets:  ['Pure sine wave output', 'Solar hybrid configurations', 'Transformerless options available'],
    image:    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
  {
    id:       'batteries',
    category: 'Batteries',
    title:    'Lithium & Deep-Cycle Storage',
    range:    '100AH – 200AH / 1.2kWh – 60kWh',
    summary:  'LiFePO4, Gel Sealed, and Tubular Wet-cell batteries for extended backup time, faster charging, and better lifecycle value.',
    bullets:  ['LiFePO4 for premium performance', 'Gel & tubular for cost efficiency', 'Stack to scale capacity'],
    image:    'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&q=80',
  },
  {
    id:       'controllers',
    category: 'Charge Controllers',
    title:    'PWM & MPPT Controllers',
    range:    '10A – 150A',
    summary:  'PWM and MPPT charge controllers that protect your batteries, stabilise charging performance, and extend system life.',
    bullets:  ['MPPT for up to 30% efficiency gain', 'Multi-stage charging algorithms', 'Suitable for off-grid and hybrid'],
    image:    'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80',
  },
  {
    id:       'lighting',
    category: 'Solar Lighting',
    title:    'All-in-One Solar Lights',
    range:    '10W – 300W',
    summary:  'All-in-One solar street lights, floodlights, garden lights, and solar bulbs for outdoor and interior applications.',
    bullets:  ['Street and perimeter lighting', 'Campus and estate lighting', 'Garden and decorative solutions'],
    image:    'https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?w=600&q=80',
  },
  {
    id:       'accessories',
    category: 'Accessories & Protection',
    title:    'Mounting, Cables & Protection',
    range:    'Various',
    summary:  'Complete range of solar accessories: racks, mounting profiles, DC/AC cables, breakers, and surge protection devices.',
    bullets:  ['Mounting racks and profiles', 'DC and AC cabling', 'MCBs, isolators, and surge arrestors'],
    image:    'https://images.unsplash.com/photo-1592833159057-6e46f6d7d671?w=600&q=80',
  },
];

export const authorisedBrands = [
  'Tsolar','Felicity Solar','Smarten','Ecoflow',
  'Restar','Jinko Solar','Dique','Deye',
  'Oraimo','itel','Longi Solar',
];

export const projects = [
  { tag:'Industrial',     title:'Biase Plantations Ltd (Wilmar)',        location:'Cross River State', summary:'60KW Solar + 72KVA Hybrid Inverters — fully off-grid system for industrial plantation operations', value:'₦48M',   date:'Apr 2018' },
  { tag:'Infrastructure', title:'Cross River Basin Dev. Authority',       location:'Cross River State', summary:'Solar street light network across Cross River State — large-scale public infrastructure',         value:'₦27.5M', date:'Dec 2016' },
  { tag:'Commercial',     title:'Uddyking Oil Ltd (3 projects)',          location:'Various',           summary:'20–30KVA Hybrid Systems with Lithium Battery Banks for oil industry operations',                 value:'₦40M+',  date:'2022'     },
  { tag:'Institutional',  title:'Unical Microfinance Bank HQ',            location:'Calabar',           summary:'15KVA Hybrid Inverter + 18KW Solar for institutional banking headquarters',                     value:'₦12M',   date:'Apr 2022' },
  { tag:'Education',      title:'Mater Elizabeth High School',            location:'South-South',       summary:'All-in-One Solar Street & Floodlights — full campus lighting infrastructure',                   value:'₦13M',   date:'Nov 2020' },
  { tag:'Education',      title:'Renaissance University, Enugu',          location:'Enugu State',       summary:'Solar street & floodlights and staff quarters solar systems',                                   value:'₦9M',    date:'Oct 2020' },
  { tag:'Hospitality',    title:'Happkings Hotel Ltd, Ikom',              location:'Cross River State', summary:'25KVA Hybrid + 15KW Solar backup for continuous hotel operations',                              value:'₦9M',    date:'Sep 2019' },
  { tag:'Diplomatic',     title:'Cameroun Consulate, Calabar',            location:'Calabar',           summary:'5KVA Hybrid Inverter + 12KW Solar system for diplomatic facility',                             value:'₦6.5M',  date:'May 2021' },
  { tag:'Military',       title:'Eastern Naval Command HQ',               location:'South-South',       summary:'4 × 5KVA Hybrid Backup Systems for military operational facility',                              value:'₦4M',    date:'Jul 2020' },
  { tag:'Education',      title:'University of Calabar (CES Block)',      location:'Calabar',           summary:'20KVA Solar Hybrid + 32 × 200AH Batteries for university faculty block',                       value:'₦7M',    date:'Aug 2018' },
  { tag:'Education',      title:'Havilla University, Nde-Ikom',           location:'Cross River State', summary:'3 × 5KVA Hybrid Systems + 3KW Solar each for university campus',                              value:'₦7M',    date:'Sep 2021' },
  { tag:'Residential',    title:'ASUU Unical Chapter (30 units)',         location:'Calabar',           summary:'80KVA Combined Inverter + 100 Batteries — 30 residential units powered',                       value:'₦9.5M',  date:'Oct 2015' },
];

export const branches = [
  { city:'Lagos / Ikeja',  state:'Lagos State',        address:'90 Obafemi Awolowo Way, Ikeja, Lagos',                     phone:'0802 683 5985', telHref:'tel:+2348026835985', waHref:'https://wa.me/2348026835985' },
  { city:'Port Harcourt 1',state:'Rivers State',       address:'Riz Plaza, Plot 54 Stadium Road, Port Harcourt',            phone:'0701 616 4397', telHref:'tel:+2347016164397', waHref:'https://wa.me/2347016164397' },
  { city:'Port Harcourt 2',state:'Rivers State',       address:'18 Ogbunabali Road, Port Harcourt',                         phone:'0701 616 4397', telHref:'tel:+2347016164397', waHref:'https://wa.me/2347016164397' },
  { city:'Uyo',            state:'Akwa Ibom State',    address:'109 Oron Road, Uyo',                                        phone:'0812 113 8060', telHref:'tel:+2348121138060', waHref:'https://wa.me/2348121138060' },
  { city:'Calabar',        state:'Cross River State',  address:'Macson Plaza, 89 Ndidem Usang Iso Road, Calabar',           phone:'0803 713 5545', telHref:'tel:+2348037135545', waHref:'https://wa.me/2348037135545', hq:true },
  { city:'Calabar South',  state:'Cross River State',  address:'6 Target Road, Calabar South',                              phone:'0907 124 2120', telHref:'tel:+2349071242120', waHref:'https://wa.me/2349071242120' },
  { city:'Ikom',           state:'Cross River State',  address:'16 Obudu Road, Four Corners, Ikom',                         phone:'0803 560 1371', telHref:'tel:+2348035601371', waHref:'https://wa.me/2348035601371' },
];

export const contactChannels = [
  { label:'Phone',    value:'0803 713 5545',             href:'tel:+2348037135545' },
  { label:'WhatsApp', value:'Chat with the team',        href:'https://wa.me/2348037135545' },
  { label:'Email',    value:'info.tecilservices@gmail.com', href:'mailto:info.tecilservices@gmail.com' },
];

export const processSteps = [
  {
    step: '01',
    title: 'Consultation',
    body: 'We start with a proper conversation about your energy needs, usage pattern, and expectations.'
  },
  {
    step: '02',
    title: 'Assessment & Design',
    body: 'We carry out load analysis and design a system that matches your real demand — not guesswork.'
  },
  {
    step: '03',
    title: 'Installation',
    body: 'Our team installs and commissions your system safely with proper documentation.'
  },
  {
    step: '04',
    title: 'Support',
    body: 'We stay with you after delivery — maintenance, upgrades, and technical support when needed.'
  }
];