import type { Project } from '../types'

export const projects: Project[] = [
  {
    title: 'Smart Power Strip',
    slug: 'smart-power-strip',
    category: 'IoT / Embedded Systems',
    shortDescription:
      'IoT smart power strip built with a Raspberry Pi Pico W that enables remote control of individual electrical outlets over a local Wi-Fi network.',
    overview:
      'Smart Power Strip is an IoT device built with a Raspberry Pi Pico W and MicroPython that enables independent remote control of electrical outlets through a web-based interface over a local Wi-Fi network.',
    problem:
      'Traditional power strips require physical interaction to control connected devices. The project explores how a low-cost microcontroller can provide remote control and device management capabilities through a local network.',
    solution:
      'The system uses a Raspberry Pi Pico W connected to a relay module. The microcontroller connects to a Wi-Fi network, hosts an HTTP server and exposes an API that allows a web interface to control each electrical outlet independently.',
    technologies: [
      'MicroPython',
      'Raspberry Pi Pico W',
      'GPIO',
      'HTTP',
      'REST API',
      'HTML',
      'CSS',
      'JavaScript',
    ],
    architecture: [
      'Web Browser',
      'Raspberry Pi Pico W',
      'HTTP Server',
      'REST API',
      'Outlet Manager',
      'Relay Module',
      'Electrical Outlets',
    ],
    features: [
      { name: 'Wi-Fi connectivity', status: 'planned' },
      { name: 'GPIO relay control', status: 'planned' },
      { name: 'Embedded HTTP server', status: 'planned' },
      { name: 'REST API', status: 'planned' },
      { name: 'Device state management', status: 'planned' },
      { name: 'Web dashboard', status: 'planned' },
      { name: 'Configuration management', status: 'planned' },
    ],
    challenges: [
      {
        title: 'Hardware and software integration',
        description:
          'Managing GPIO-controlled relays while maintaining a clean software abstraction.',
      },
      {
        title: 'Embedded HTTP server',
        description:
          'Implementing HTTP communication within the resource constraints of a microcontroller.',
      },
      {
        title: 'Device state',
        description:
          'Keeping the logical application state synchronized with the physical state of the relays.',
      },
      {
        title: 'Network connectivity',
        description:
          'Handling Wi-Fi connection failures and device availability inside a local network.',
      },
    ],
    learnings: ['TODO'],
    github:
      'https://github.com/rafaelSanchez4330/Rasperry_Pi_Pico_Power_strip',
    image: '/images/projects/smart-power-strip/cover.webp',
    gallery: [
      {
        src: '/images/projects/smart-power-strip/hardware.webp',
        alt: 'Smart Power Strip hardware',
      },
      {
        src: '/images/projects/smart-power-strip/dashboard.webp',
        alt: 'Smart Power Strip web dashboard',
      },
      {
        src: '/images/projects/smart-power-strip/wiring.webp',
        alt: 'Smart Power Strip wiring',
      },
      {
        src: '/images/projects/smart-power-strip/demo.webp',
        alt: 'Smart Power Strip demonstration',
      },
    ],
    featured: true,
  },
  {
    title: 'Internal Workflow Management Platform',
    slug: 'workflow-management-platform',
    category: 'Backend / Web Development',
    shortDescription:
      'Internal web platform designed to centralize workflow management and replace dependency on external task management software.',
    overview:
      'An internal platform focused on centralizing workflow management with a typed backend, a relational data model and a web interface.',
    technologies: [
      'NestJS',
      'TypeScript',
      'PostgreSQL',
      'TypeORM',
      'REST API',
      'React',
      'Git',
      'Linux',
    ],
  },
  {
    title: 'OSINT Tools System',
    slug: 'osint-tools-system',
    category: 'Web Development / Cybersecurity',
    shortDescription:
      'Web platform designed to organize and manage OSINT tools through role-based access and structured information management.',
    overview:
      'A web platform for organizing OSINT tools with structured information management and role-based access.',
    technologies: [
      'Laravel',
      'PHP',
      'MySQL',
      'Docker',
      'Nginx',
      'AWS EC2',
      'REST API',
    ],
  },
  {
    title: 'Real-Time People Counting System',
    slug: 'people-counting-system',
    category: 'Computer Vision / AI',
    shortDescription:
      'Computer vision project focused on detecting and counting people in real time using a live camera feed.',
    overview:
      'A computer vision project exploring real-time people detection and counting from a live camera feed.',
    technologies: ['Python', 'Computer Vision', 'Object Detection', 'OpenCV'],
    status: 'in-development',
  },
]

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug)
