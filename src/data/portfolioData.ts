export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  techStack: string[];
  description: string;
  problemStatement: string;
  architectureDetails: string[];
  features: string[];
  githubUrl: string;
  diagramSteps: { step: string; detail: string }[];
}

export interface SkillCategory {
  name: string;
  category: 'Programming' | 'Database' | 'Web Development' | 'Tools';
  description: string;
  items: {
    name: string;
    level: string;
    useCases: string[];
  }[];
}

export interface LearningTopic {
  id: string;
  title: string;
  focusArea: string;
  description: string;
  coreConcepts: string[];
  practicalApplication: string;
  status: 'In Progress' | 'Active Exploration' | 'Core Focus';
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Monisha B S',
    role: 'AI & Machine Learning Engineering Student',
    headline: 'Engineering Intelligent Systems with Foundations in AI, Algorithms & Software Architecture',
    bio: [
      'AI & Machine Learning Engineering student passionate about Artificial Intelligence and Machine Learning systems.',
      'Currently developing core engineering foundations in Python, C, SQL, and Web Development.',
      'Actively exploring modern AI tools, Graphic Design principles, and emerging technologies.',
      'Driven by a clear career goal: To become a skilled AI Engineer capable of building reliable, intelligent solutions.'
    ],
    github: 'https://github.com/monishashivanna153-dev',
    email: 'monishashivanna153@gmail.com',
    placeholders: {
      linkedin: '[LinkedIn Profile Placeholder - Add your LinkedIn URL]',
      resume: '[Resume / CV Placeholder - Add your Resume link or PDF]',
      location: '[Location Placeholder - Optional]'
    }
  },

  skills: [
    {
      category: 'Programming',
      description: 'Foundational procedural and object-oriented programming languages for algorithmic problem-solving and AI development.',
      items: [
        {
          name: 'Python',
          level: 'Core Language',
          useCases: ['AI & ML scripting', 'Data structures implementation', 'Automated problem solving', 'Back-end logic']
        },
        {
          name: 'C',
          level: 'Core Language',
          useCases: ['Memory management', 'Algorithmic efficiency', 'Low-level computing foundations', 'Data structure implementations']
        }
      ]
    },
    {
      category: 'Database',
      description: 'Relational data modeling, schema architecture, normalization, and structured querying.',
      items: [
        {
          name: 'MySQL',
          level: 'Relational DBMS',
          useCases: ['Relational schema creation', 'Foreign key constraints', 'Stored procedures & queries', 'Data integrity']
        },
        {
          name: 'SQL',
          level: 'Query Language',
          useCases: ['Complex joins & filtering', 'Aggregation functions', 'Database normalization', 'CRUD operations']
        }
      ]
    },
    {
      category: 'Web Development',
      description: 'Front-end standards and web technologies for crafting accessible, responsive user interfaces.',
      items: [
        {
          name: 'HTML',
          level: 'Markup Standard',
          useCases: ['Semantic web structure', 'Accessible markup hierarchy', 'Form validation architecture']
        },
        {
          name: 'CSS',
          level: 'Styling & Layout',
          useCases: ['Responsive layouts (Flexbox & Grid)', 'Visual ergonomics', 'Custom themes and animations']
        },
        {
          name: 'JavaScript',
          level: 'Scripting Language',
          useCases: ['DOM interaction', 'Client-side event handlers', 'Dynamic UI state rendering', 'API handling']
        }
      ]
    },
    {
      category: 'Tools',
      description: 'Essential developer tooling for version control, collaboration, and code authoring.',
      items: [
        {
          name: 'Git',
          level: 'Version Control',
          useCases: ['Branching & merging', 'Commit history tracking', 'Repository state management']
        },
        {
          name: 'GitHub',
          level: 'Collaborative Hub',
          useCases: ['Code hosting & open-source sharing', 'Issue tracking', 'Portfolio repository management']
        },
        {
          name: 'VS Code',
          level: 'Development IDE',
          useCases: ['Code syntax debugging', 'Extensions & linters', 'Integrated terminal development']
        }
      ]
    }
  ],

  projects: [
    {
      id: 'ipl-ticket-booking',
      title: 'IPL Ticket Booking System',
      subtitle: 'Sports Event Reservation & Concurrency Management',
      category: 'Software Engineering',
      techStack: ['Python', 'C', 'MySQL', 'HTML/CSS'],
      description: 'A comprehensive ticketing platform designed for high-demand tournament schedules, managing stadium tier allocations, real-time seat status verification, and reservation workflows.',
      problemStatement: 'Managing match day tickets across multi-tiered stadiums requires strict data consistency to prevent double bookings, manage inventory levels, and calculate ticket pricing accurately.',
      architectureDetails: [
        'Relational database architecture storing match fixtures, stadiums, stands, and individual seats.',
        'Concurrency-safe seat allocation algorithms to lock and confirm seat selections.',
        'Modular business logic separating match inventory queries from customer booking validation.',
        'Audit records for confirmed tickets with unique reservation identifiers.'
      ],
      features: [
        'Match fixture schedule viewer with team match-up details',
        'Stadium tier selection (VIP, Pavilion, General Stand)',
        'Dynamic availability computation and seat status tracking',
        'Booking summary generation and confirmation workflow'
      ],
      githubUrl: 'https://github.com/monishashivanna153-dev',
      diagramSteps: [
        { step: '01. Fixture Selection', detail: 'User queries match calendar and selects stadium venue' },
        { step: '02. Seat Availability Check', detail: 'Database verifies remaining capacity across stadium tiers' },
        { step: '03. Allocation Lock', detail: 'System reserves chosen seats to prevent race conditions' },
        { step: '04. Confirmation & Ticket Pass', detail: 'Unique booking reference stored in database' }
      ]
    },
    {
      id: 'library-management',
      title: 'Library Management System',
      subtitle: 'Relational Inventory & Circulation Tracking',
      category: 'Database Systems',
      techStack: ['Python', 'SQL', 'MySQL', 'Database Management'],
      description: 'An automated catalog and inventory management system designed for institutional libraries to streamline book indexing, membership tracking, issue-return cycles, and overdue fine administration.',
      problemStatement: 'Manual ledger systems suffer from inventory discrepancies, unrecorded book losses, and cumbersome member tracking. The system enforces relational integrity to automate the book lifecycle.',
      architectureDetails: [
        'Normalized 3NF relational schema maintaining entity separation across Books, Authors, Students, and Loans.',
        'ACID-compliant transactions for loan checkouts ensuring quantity decrement matches loan records.',
        'Automated overdue interval calculators based on timestamp difference algorithms.',
        'Parameterized SQL queries to ensure safe and efficient database interaction.'
      ],
      features: [
        'Full-catalog search by Title, Author, Category, and ISBN',
        'Member checkout and check-in transaction workflow',
        'Real-time inventory counter updating copies available',
        'Automated overdue calculation and account status review'
      ],
      githubUrl: 'https://github.com/monishashivanna153-dev',
      diagramSteps: [
        { step: '01. Catalog Query', detail: 'Search database for ISBN, Title or Author availability' },
        { step: '02. Member Verification', detail: 'Validate student ID and verify outstanding borrow limits' },
        { step: '03. Checkout Transaction', detail: 'Decrement available copies and record timestamped loan' },
        { step: '04. Return & Fine Audit', detail: 'Compute elapsed days and apply fine policies if overdue' }
      ]
    },
    {
      id: 'satquery-ai',
      title: 'SatQuery AI',
      subtitle: 'Intelligent Satellite Imagery & Geospatial Query System',
      category: 'AI & Machine Learning',
      techStack: ['Python', 'Artificial Intelligence', 'Machine Learning', 'Data Processing'],
      description: 'An AI-powered exploratory system designed to query, index, and analyze satellite and remote sensing datasets using machine learning algorithms and computer vision concepts.',
      problemStatement: 'Earth observation data is vast and high-dimensional. SatQuery AI explores how machine learning models can parse multi-spectral imagery to answer natural language queries and detect geographic features.',
      architectureDetails: [
        'Preprocessing pipeline for satellite imagery tiles (normalization, channel extraction, spatial indexing).',
        'Machine learning feature detection models to recognize surface land covers and anomalies.',
        'Metadata query engine connecting spatial coordinates with multi-temporal capture records.',
        'Exploratory Python-based interface for geospatial inspection and query result visualization.'
      ],
      features: [
        'Geospatial dataset query by coordinate bounding boxes or temporal ranges',
        'Machine learning visual feature identification experiments',
        'Land-cover and terrain pattern classification pipeline',
        'Metadata extraction and spectral band analysis workflow'
      ],
      githubUrl: 'https://github.com/monishashivanna153-dev',
      diagramSteps: [
        { step: '01. Ingestion & Tiling', detail: 'Ingest multi-spectral satellite imagery and crop into spatial patches' },
        { step: '02. Feature Extraction', detail: 'Compute spectral indices and extract convolutional visual features' },
        { step: '03. Query Parsing', detail: 'Process user parameters (coordinates, timeframe, feature class)' },
        { step: '04. Analytical Output', detail: 'Return indexed tiles with classified feature overlays' }
      ]
    }
  ],

  currentlyLearning: [
    {
      id: 'dsa',
      title: 'Data Structures & Algorithms',
      focusArea: 'Computational Complexity & Optimization',
      description: 'Mastering arrays, linked lists, trees, graphs, sorting algorithms, and space-time complexity analysis (Big-O) to write efficient code.',
      coreConcepts: ['Time & Space Complexity (Big-O)', 'Trees & Graph Traversal', 'Recursion & Dynamic Programming', 'Sorting & Search Algorithms'],
      practicalApplication: 'Developing fast, memory-optimized algorithms for AI data pipelines and computational tasks.',
      status: 'Core Focus'
    },
    {
      id: 'python-advanced',
      title: 'Python Programming',
      focusArea: 'Advanced Paradigms & Engineering',
      description: 'Deepening proficiency in idiomatic Python, object-oriented architecture, modular package design, and scientific libraries.',
      coreConcepts: ['Object-Oriented Programming (OOP)', 'Generators & Decorators', 'Data Processing with NumPy/Pandas', 'Standard Library & File I/O'],
      practicalApplication: 'Serving as the primary programming language for machine learning models and data automation.',
      status: 'Core Focus'
    },
    {
      id: 'ai-ml',
      title: 'Artificial Intelligence & Machine Learning',
      focusArea: 'Model Architectures & Mathematical Foundations',
      description: 'Exploring machine learning theory, supervised/unsupervised learning, neural network fundamentals, feature engineering, and model evaluation metrics.',
      coreConcepts: ['Supervised & Unsupervised Learning', 'Neural Network Foundations', 'Loss Functions & Gradient Descent', 'Model Evaluation & Validation'],
      practicalApplication: 'Building intelligent predictive models and working toward the career goal of becoming an AI Engineer.',
      status: 'Active Exploration'
    },
    {
      id: 'dbms',
      title: 'Database Management Systems',
      focusArea: 'Data Architecture & Query Optimization',
      description: 'Studying relational calculus, normalization theory (1NF to BCNF), indexing mechanisms, transaction management, and robust SQL querying.',
      coreConcepts: ['Normalization & Schema Integrity', 'ACID Properties & Transactions', 'B-Tree Indexing & Query Execution', 'Complex Relational Joins'],
      practicalApplication: 'Designing resilient back-end data architectures for data-intensive applications.',
      status: 'In Progress'
    },
    {
      id: 'web-dev',
      title: 'Web Development',
      focusArea: 'Modern Front-End & Responsive Engineering',
      description: 'Building modern, clean, accessible web interfaces using semantic HTML, structured CSS, and modern JavaScript.',
      coreConcepts: ['Responsive Grid & Flexbox Systems', 'JavaScript Event Loops & DOM API', 'Component-Based Architecture', 'Web Accessibility (WCAG AA)'],
      practicalApplication: 'Deploying interactive web applications and interfaces for AI models and engineering portfolios.',
      status: 'In Progress'
    },
    {
      id: 'graphic-design',
      title: 'Graphic Design',
      focusArea: 'Visual Hierarchy & Ergonomics',
      description: 'Understanding typography scales, color theory, visual hierarchy, layout ergonomics, and digital visual asset creation.',
      coreConcepts: ['Visual Hierarchy & Contrast', 'Grid Systems & Spacing Rhythms', 'Color Harmonies & Theme Systems', 'UI Wireframing & Asset Creation'],
      practicalApplication: 'Ensuring technical applications and user-facing dashboards are clear, intuitive, and aesthetically refined.',
      status: 'Active Exploration'
    }
  ],

  careerGoal: {
    title: 'Become a Skilled AI Engineer',
    mission: 'To bridge foundational computer science, mathematical rigor, and modern machine learning frameworks to architect intelligent, robust, and ethical AI systems.',
    pillars: [
      {
        title: 'Algorithmic Foundation',
        detail: 'Deep mastery of Data Structures, procedural C, and object-oriented Python to ensure efficient computation.'
      },
      {
        title: 'Intelligent Modeling',
        detail: 'Rigorous exploration of machine learning theory, neural networks, computer vision, and geospatial AI models.'
      },
      {
        title: 'End-to-End System Design',
        detail: 'Integrating relational database systems, clean API structures, and responsive frontends to deploy usable AI products.'
      }
    ]
  }
};
