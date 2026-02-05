export const profileData = {
  name: 'Sebastian Silva',
  title: 'MASc Biomedical Engineering',
  avatar: '/headshot.png',
  email: 'sebastian.silva@mail.utoronto.ca',
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
      tags: ['Biomedical Engineering', 'Wearable Devices', 'Gait Analysis', 'Research'],
      fullDescription: `Lower-limb amputees (LLAs) can exhibit asymmetric gait, which may contribute to the development of secondary conditions. Access to conventional gait training is often impeded by factors such as healthcare funding, long travel times, or occupational obligations. This has created a growing interest in technology-based alternatives for in-community gait rehabilitation.

One such promising technique is the use of wearable biofeedback systems (WBSs) for gait training, with multiple studies utilizing various feedback modalities (visual, auditory, and vibrotactile) to attain positive outcomes for LLA participants, including a more normal gait pattern and improved gait symmetry.

Within the realm of auditory stimuli, rhythmic auditory stimulus (RAS), and more specifically music, may provide distinct advantages when applied to LLA gait. The entrainment of walking cadence and music tempo is a well-documented phenomenon, with studies having shown that music stimulus can improve the gait symmetry of hemiparetic stroke patients. However, to date, there are no gait training systems that have applied music-based feedback to correct gait asymmetry of LLAs.

To address this gap, the goal of this project is to design and validate a wearable biofeedback system that employs a music-based strategy to improve the temporal gait symmetry of LLAs. The physical WBS consists of two inertial sensors to measure cadence and gait symmetry, an Android phone to run the feedback algorithm, and headphones.`,
      details: {
        event: 'Graduate Student Seminar Series',
        date: 'September 19, 2025',
        location: 'MS2158, 1 King\'s College Circle',
        institution: 'Institute of Biomedical Engineering, University of Toronto',
      },
    },
  ],
}
