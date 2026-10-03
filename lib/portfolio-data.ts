export const profileData = {
  name: 'Sebastian Silva',
  title: 'MASc Biomedical Engineering',
  avatar: '/linkedinheadshot.JPG',
  email: 'adolfosebastiansilva@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sebastian-silva-uoft/',
  location: 'Toronto, Ontario',
}

export const aboutData = {
  description: [
    "I'm a Biomedical Engineering graduate with a background in Mechatronic Systems Engineering and Computer Science. I specialize in designing and developing wearable biomedical devices, collaborating directly with clinicians and patients to identify user needs and inform device design.",
    "With two years of biomedical engineering research experience in a hospital setting, I have hands-on experience with human anatomy, biomechanics, and physiological signal interpretation. I'm a self-driven researcher and clear communicator, able to translate complex technical concepts across interdisciplinary teams.",
  ],
  highlights: [
    {
      title: 'Wearable Device Design',
      description: 'Designed, developed, and validated a wearable biomedical device including pilot testing to assess performance, safety, and efficacy.',
    },
    {
      title: 'Data Analysis',
      description: 'Developed real-time data processing and analysis software for extracting gait parameters from IMU sensor data.',
    },
    {
      title: 'Research Communication',
      description: 'Presented research at several conferences, communicating study findings to technical and lay audiences.',
    },
    {
      title: 'Software Development',
      description: 'Built web applications to support analysis workflows, enabling team members to run, share, and reproduce analyses.',
    },
  ],
}

export const resumeData = {
  education: [
    {
      title: 'MASc, Biomedical Engineering',
      institution: 'University of Toronto',
      period: '2023 — 2025',
      description: 'Focus on wearable biomedical devices and gait analysis research.',
    },
    {
      title: 'BESc, Mechatronic Systems Engineering',
      institution: 'University of Western Ontario',
      period: '2019 — 2023',
      description: 'With Distinction. Minor in Computer Science.',
    },
  ],
  experience: [
    {
      title: 'Graduate Research Assistant',
      company: 'PROPEL Lab, Bloorview Research Institute',
      period: '2023 — 2026',
      description: 'Designed, evaluated, and iterated on a wearable biofeedback device in collaboration with clinicians, technologists, and patients. Developed real-time data processing software for gait parameter extraction from IMU sensor data.',
    },
    {
      title: 'Teaching Assistant',
      company: 'University of Toronto',
      period: '2024 & 2025',
      description: 'Held office hours for Introduction to Computer Science, helping students apply programming concepts. Assisted during lectures of two hundred students.',
    },
    {
      title: 'Building Performance Analyst Intern',
      company: 'Ecovert Sustainability Consultants',
      period: '2022 & 2023',
      description: 'Developed a web application to support pre-design performance analysis, enabling team members to run, share, and reproduce analyses through a common database.',
    },
  ],
  skills: [
    { name: 'Python', level: 90 },
    { name: 'MATLAB', level: 85 },
    { name: 'Data Analysis', level: 90 },
    { name: 'Hardware Prototyping', level: 80 },
    { name: 'Research & Writing', level: 95 },
  ],
  awards: [
    {
      title: 'Barbara and Frank Milligan Graduate Fellowship',
      institution: 'Institute of Biomedical Engineering, University of Toronto',
      year: '2024',
    },
    {
      title: "Dean's Honour List",
      institution: 'Faculty of Engineering, University of Western Ontario',
      year: '2019, 2020, 2021 & 2023',
    },
  ],
}

export const projectsData = {
  projects: [
    {
      id: 'wearable-gait-biofeedback',
      title: 'Music-Based Wearable Biofeedback System',
      description: 'Graduate research project developing a wearable biofeedback system to improve lower limb amputee gait symmetry using music-based feedback.',
      tags: ['Biomedical Engineering', 'Wearable Devices', 'Gait Analysis', 'Research', 'Signal Processing', 'Wearable Devices', 'Android', 'Python', 'MATLAB', 'Data Analysis', 'Hardware Prototyping', 'Research & Technical Writing'],
      fullDescription: `For my MASc thesis, I developed a wearable biofeedback system designed to improve gait symmetry in lower-limb prosthesis users. The project focused on translating biomechanical sensing and signal processing into a practical rehabilitation tool capable of delivering real-time feedback during walking. The goal was to create an engaging system that could measure gait characteristics outside of laboratory settings and encourage corrective movement through responsive feedback.

The system was built around a set of wearable inertial measurement units that captured lower-limb motion during ambulation. Sensor data were processed to estimate temporal gait parameters, including stance timing and symmetry metrics, which were then used to quantify deviations from target walking patterns. Considerable effort went into implementing reliable signal conditioning, coordinate transformations, and algorithmic pipelines that converted raw motion data into stable, interpretable metrics suitable for real-time use.

To influence user behavior, the device integrated an auditory feedback mechanism based on rhythmic stimulation principles. Feedback signals were modulated dynamically according to measured gait asymmetry, reinforcing desired movement patterns while maintaining usability and engagement. Software was developed to handle data acquisition, real-time processing, and feedback generation, balancing computational demands with responsiveness.

The system was evaluated through experimental testing that examined performance, usability, and the ability to detect and respond to gait changes. This work demonstrated how wearable sensing and embedded processing could be combined to deliver interactive rehabilitation feedback, bridging the gap between biomechanics research and practical assistive technology design.

Beyond the technical implementation, the thesis strengthened my experience designing human-centered mechatronic systems — integrating sensing hardware, signal processing, and interactive feedback into a cohesive platform intended for real-world use. The project represented an end-to-end development effort spanning algorithm design, system integration, validation, and user-focused engineering considerations.`,
      images: ['/biofeedback system.jpg', '/Biofeedback System Overview.png'],

    },
    {
      id: 'capstone',
      title: 'Undergraduate Capstone Project - *SmartShift*',
      description: 'SmartShift — Effort-Based Bicycle Drivetrain Control System',
      tags: ['Mechatronic Systems Engineering', 'FEA', 'Strain Gauges', 'Signal Processing', 'Embedded Systems', 'Bluetooth', 'Mobile Interface', 'Microcontroller', 'Servo Motors'],
      fullDescription: `SmartShift was developed as part of a four-person engineering team to explore a low-cost approach to automatic gear shifting on multi-speed bicycles. Manual gear selection is often inefficient or mistimed, while existing automatic systems are typically expensive and inaccessible to casual riders. Our goal was to design and prototype a lightweight embedded system capable of sensing rider effort and adjusting drivetrain gearing in real time.

We built the system around the idea that gear changes could be driven by estimated rider power. Strain gauges were installed on the crank arm in a Wheatstone bridge configuration to measure applied force, and Finite Element Analysis was used beforehand to determine expected strain ranges and guide sensor modeling in MATLAB/Simulink. Cadence and wheel speed were captured using hall-effect sensors mounted to rotating components, allowing force and cadence data to be combined into a real-time power estimate. Signal conditioning and embedded processing were handled through a microcontroller platform that also supported Bluetooth communication with a simple mobile interface for testing and configuration.

To actuate gear changes, we experimentally measured derailleur cable forces and used those results to select and integrate a servo motor capable of reliably shifting gears. The electronics and actuator were packaged in a frame-mounted housing designed to protect components while maintaining low weight and compatibility with standard bicycle mounting points.

The shifting logic was implemented using a cost-map-based control strategy inspired by automotive transmission scheduling. Rider effort and speed were evaluated continuously to determine optimal gear transitions, with timing constraints added to prevent oscillatory behavior. The system was fabricated and assembled through iterative prototyping, including strain gauge installation, wiring integration, and full-system testing on a mounted bicycle platform.

This project demonstrated the feasibility of combining sensing, embedded control, and mechanical actuation to automate drivetrain behavior in a cost-conscious prototype. It provided hands-on experience translating analytical modeling into physical implementation and integrating mechanical, electrical, and software components into a functional mechatronic system.`,
      images: [
        '/capstone-wide-picture.jpg',
        '/CrankarmLoadAnalysis.png',
        '/power-meter-closeup.jpg',
      ],
      details: {
        date: 'September 2022 — April 2023',
        location: 'London, Ontario',
        institution: 'University of Western Ontario',
      },
    },
  ],
}
