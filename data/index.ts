import { TeamMember, Publication, ResearchArea, PaperTemplate } from '@/types';

export const teamMembers: TeamMember[] = [
  {
    id: 'alexandra-chen',
    name: 'DR. ALEXANDRA CHEN',
    role: 'Founder & Chief Scientist',
    description: 'PhD in Robotics from MIT. Former research scientist at Google DeepMind. Specializes in multi-agent systems and swarm intelligence for autonomous navigation.',
    initials: 'AC',
    links: {
      publications: '/publications',
      linkedin: '#'
    }
  },
];

export const advisors: TeamMember[] = [
  {
    id: 'elena-vasquez',
    name: 'DR. ELENA VASQUEZ',
    role: 'Senior Advisor',
    description: 'Pioneer in reinforcement learning for robotics. Led breakthrough research in adaptive AI systems. PhD from Oxford, 50+ publications in Nature and Science.',
    initials: 'EV',
    links: {
      publications: '/publications'
    }
  },
];

export const researchAreas: ResearchArea[] = [
  {
    id: 'aerial-intelligence',
    name: 'AERIAL INTELLIGENCE',
    type: 'Autonomous Drone Navigation',
    description: 'Advanced navigation systems for UAVs with real-time obstacle avoidance, weather adaptation, and autonomous mission planning in complex 3D environments. Our flagship research combining deep learning, sensor fusion, and real-time control.',
    links: {
      paper: '/sample-paper',
      demo: '#',
      code: '#'
    }
  },
  {
    id: 'multi-agent-systems',
    name: 'MULTI-AGENT SYSTEMS',
    type: 'Swarm Navigation',
    description: 'Coordinated navigation for multiple autonomous agents with distributed decision-making, collision avoidance, and emergent behavior patterns. Breakthrough research in scalable swarm intelligence and collective navigation.',
    links: {
      paper: '#',
      simulation: '#',
      dataset: '#'
    }
  },
  {
    id: 'neural-pathfinding',
    name: 'NEURAL PATHFINDING',
    type: 'AI-Driven Route Planning',
    description: 'Next-generation pathfinding algorithms that adapt in real-time to changing environments, traffic patterns, and mission objectives using transformer architectures. Revolutionary approach to dynamic navigation in uncertain environments.',
    links: {
      paper: '#',
      demo: '#',
      code: '#'
    }
  }
];

export const publications: Publication[] = [
  {
    id: 'skypath-2025',
    title: 'SkyPath: Neural Navigation for Autonomous Drones',
    authors: ['Alexandra Chen', 'Yuki Tanaka', 'Marcus Rodriguez', 'Sarah Okonkwo'],
    venue: 'ICRA 2025',
    year: 2025,
    category: 'aerial',
    tags: ['Autonomous Navigation', 'Deep Learning', 'Sensor Fusion', 'Real-Time'],
    link: '/sample-paper',
    award: 'Best Paper Award'
  },
  {
    id: 'swarmpath-2025',
    title: 'SwarmPath: Distributed Navigation for Multi-Agent Systems',
    authors: ['Yuki Tanaka', 'Marcus Rodriguez', 'Elena Vasquez'],
    venue: 'RSS 2025',
    year: 2025,
    category: 'swarm',
    tags: ['Swarm Intelligence', 'Distributed Systems', 'Coordination', 'Emergent Behavior']
  },
  {
    id: 'neuralpath-2025',
    title: 'NeuralPath: Transformer-Based Route Planning',
    authors: ['Sarah Okonkwo', 'Alexandra Chen', 'Raj Patel'],
    venue: 'NeurIPS 2025',
    year: 2025,
    category: 'ml',
    tags: ['Transformers', 'Path Planning', 'Attention Mechanisms', 'Dynamic Environments']
  },
  {
    id: 'slam-2024',
    title: 'Real-Time SLAM for Autonomous Navigation',
    authors: ['Elena Vasquez', 'Marcus Rodriguez'],
    venue: 'ICRA 2024',
    year: 2024,
    category: 'perception',
    tags: ['SLAM', 'Localization', 'Mapping', 'Real-Time']
  },
  {
    id: 'sensor-fusion-2024',
    title: 'Multi-Modal Sensor Fusion for Robust Perception',
    authors: ['Yuki Tanaka', 'Sarah Okonkwo', 'Michael Zhang'],
    venue: 'IROS 2024',
    year: 2024,
    category: 'perception',
    tags: ['Sensor Fusion', 'LiDAR', 'Computer Vision', 'Robustness']
  },
  {
    id: 'lidar-calibration-2024',
    title: 'LiDAR-Camera Calibration in Dynamic Environments',
    authors: ['Alexandra Chen', 'Raj Patel'],
    venue: 'CVPR 2024',
    year: 2024,
    category: 'perception',
    tags: ['Calibration', 'LiDAR', 'Computer Vision', 'Dynamic Scenes']
  },
  {
    id: 'terrestrial-path-2024',
    title: 'Terrestrial Path Planning with Dynamic Obstacles',
    authors: ['Marcus Rodriguez', 'Elena Vasquez'],
    venue: 'RSS 2024',
    year: 2024,
    category: 'ground',
    tags: ['Path Planning', 'Ground Robots', 'Dynamic Obstacles', 'Navigation']
  },
  {
    id: 'urban-navigation-2024',
    title: 'Urban Navigation for Autonomous Vehicles',
    authors: ['Sarah Okonkwo', 'Michael Zhang', 'Yuki Tanaka'],
    venue: 'IV 2024',
    year: 2024,
    category: 'ground',
    tags: ['Autonomous Vehicles', 'Urban Planning', 'Traffic Management', 'Safety']
  },
  {
    id: 'semantic-mapping-2024',
    title: 'Semantic Mapping for Ground Robots',
    authors: ['Raj Patel', 'Alexandra Chen'],
    venue: 'AAAI 2024',
    year: 2024,
    category: 'ground',
    tags: ['Semantic Mapping', 'Ground Robots', 'Scene Understanding', 'AI']
  },
  {
    id: 'transformer-spatial-2024',
    title: 'Transformer Architectures for Spatial Reasoning',
    authors: ['Michael Zhang', 'Sarah Okonkwo'],
    venue: 'NeurIPS 2024',
    year: 2024,
    category: 'ml',
    tags: ['Transformers', 'Spatial Reasoning', 'Architecture', 'Deep Learning']
  },
  {
    id: 'rl-path-planning-2024',
    title: 'Reinforcement Learning for Path Planning',
    authors: ['Yuki Tanaka', 'Elena Vasquez'],
    venue: 'ICLR 2024',
    year: 2024,
    category: 'ml',
    tags: ['Reinforcement Learning', 'Path Planning', 'Policy Learning', 'Optimization']
  },
  {
    id: 'few-shot-navigation-2024',
    title: 'Few-Shot Learning for Navigation Tasks',
    authors: ['Marcus Rodriguez', 'Raj Patel'],
    venue: 'ICML 2024',
    year: 2024,
    category: 'ml',
    tags: ['Few-Shot Learning', 'Navigation', 'Transfer Learning', 'Adaptation']
  },
  {
    id: 'adaptive-path-2025',
    title: 'Adaptive Pathfinding in Complex Environments Using Deep Reinforcement Learning',
    authors: ['Alexandra Chen', 'Yuki Tanaka', 'Sarah Okonkwo'],
    venue: 'IJCAI 2025',
    year: 2025,
    category: 'ml',
    tags: ['Deep RL', 'Adaptive Systems', 'Complex Environments', 'Navigation'],
    link: '/sample-paper',
    award: 'Outstanding Paper Award'
  }
];

export const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Research', href: '/research' },
  { name: 'Team', href: '/team' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
];

export const samplePaper: PaperTemplate = {
  id: 'adaptive-path-2025',
  title: 'Adaptive Pathfinding in Complex Environments Using Deep Reinforcement Learning',
  subtitle: 'A Novel Approach to Dynamic Navigation',
  authors: [
    {
      name: 'Alexandra Chen',
      affiliation: '∂Path Labs',
      isCorresponding: true,
      equalContribution: true
    },
    {
      name: 'Yuki Tanaka',
      affiliation: '∂Path Labs',
      equalContribution: true
    },
    {
      name: 'Sarah Okonkwo',
      affiliation: '∂Path Labs'
    }
  ],
  venue: 'IJCAI 2025',
  year: 2025,
  award: 'Outstanding Paper Award',
  links: {
    pdf: '/papers/adaptive-path-2025.pdf',
    code: 'https://github.com/dpathLabs/adaptive-pathfinding',
    dataset: '/datasets/complex-environments',
    demo: '/demo/adaptive-pathfinding'
  },
  abstract: 'We present a novel approach to adaptive pathfinding in complex, dynamic environments using deep reinforcement learning. Our method, NeuralPath-RL, combines transformer-based spatial reasoning with multi-agent deep Q-learning to enable autonomous agents to navigate through previously unseen environments with optimal efficiency. The system demonstrates significant improvements over traditional pathfinding algorithms, achieving 87% better performance in dynamic obstacle scenarios and 94% success rate in complex multi-agent coordination tasks.',
  sections: [
    {
      title: 'Introduction',
      content: 'Autonomous navigation in complex environments remains one of the most challenging problems in robotics and artificial intelligence. Traditional pathfinding algorithms, while effective in static environments, often fail to adapt to dynamic obstacles, changing terrain, and multi-agent coordination requirements.'
    },
    {
      title: 'Methodology',
      content: 'Our NeuralPath-RL system consists of three main components: Spatial Transformer Module, Multi-Agent Coordinator, and Adaptive Policy Network.',
      subsections: [
        {
          title: 'Architecture Overview',
          content: 'The system processes environmental features and spatial relationships through a transformer-based architecture that handles multi-agent coordination and generates navigation decisions.'
        },
        {
          title: 'Reinforcement Learning Framework',
          content: 'We formulate the navigation problem as a Markov Decision Process (MDP) with states including agent position, velocity, local environment map, and goal location.'
        }
      ]
    },
    {
      title: 'Experiments',
      content: 'We evaluated our approach on three benchmark datasets: Urban Navigation Dataset (UND-2024), Dynamic Obstacles Challenge (DOC-2024), and Multi-Agent Coordination Suite (MACS-2024).',
      subsections: [
        {
          title: 'Results',
          content: 'Our method achieved 94.2% success rate, 0.96 path efficiency, and 18.3ms computation time, outperforming existing approaches.'
        }
      ]
    },
    {
      title: 'Conclusion',
      content: 'We have presented NeuralPath-RL, a novel approach that demonstrates significant improvements over existing methods in both single-agent and multi-agent scenarios.'
    }
  ],
  references: [
    'Chen, A., et al. "SkyPath: Neural Navigation for Autonomous Drones." ICRA 2025.',
    'Tanaka, Y., et al. "SwarmPath: Distributed Navigation for Multi-Agent Systems." RSS 2025.',
    'Okonkwo, S., et al. "NeuralPath: Transformer-Based Route Planning." NeurIPS 2025.'
  ]
};