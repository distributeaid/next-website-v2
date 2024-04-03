// data/techData.js

export const techContent = [
    {
      title: 'What is Open Source Explorers',
      description: [
        {text: 'Open Source Explorers is Distribute Aid’s open source outreach program. It uses contributions to Distribute Aid’s projects as a well-structured and impactful introduction to open source. The program is aimed at developers, designers, and other types of contributors. It lasts 3 months, is part-time, and a volunteer engagement.'},
        {text: 'Program participants will be paired with mentors and collaborate with each other in teams and with existing Distribute Aid team members.'}
      ],
      links: [
        { linkText: 'Apply for Open Source Explorers', text: " - Applications will be open through November 2023.", href: '/' },
        { linkText: "explorers@distributeaid.org", textStart: "Email", text: ' to volunteer as a mentor, inquire about corporate sponsorship, or ask questions and connect with the team.', href: 'mailto:explorers@distributeaid.org' }
      ]
    },
    {
      title: 'Contributor Tracks',
      description: [
        {text: 'Based on the work that is currently needed on Distribute Aid’s various projects, we’re tentatively looking for participants (and mentors) to fit one or more of the following tracks. To make a track happen, we need at least one mentor and two participants.'},
        {textStart: "If you don’t see yourself and your skills represented here, please ", text: " and let us know to see if it makes sense for you to apply for the first cohort.", linkText: "get in touch", href: "mailto:explorers@distributeaid.org"}
      ],
      listItems: [
        'Software Development (frontend web dev, backend, testing, data engineering, Salesforce engineering)',
        'Design (graphic design, UX/UI, branding)',
        'Translation, Localisation & Internationalisation',
        'Accessibility',
        'Cyber Security & Compliance',
        'Documentation & Content',
        'API development'
      ],
      subHeading: "Specific things you could be working on while in the Open Source Explorers program",
      specificProjects: [
        { text: "Distribute Aid Website", },
        { text: "Our Needs Assessment (frontend and backend)", },
        { linkText: "Data Exporer", textStart: "Visualisations like our ", href: '/needs-assessments/explorer/' },
        { text: "Guides, digital pamphlets, booklets", },
        { text: "Internationalisation of our content, such as website, guides, needs assessment, etc.", },
        { text: "Form automation (Salesforce)", },
        { text: "Data modeling and data analysis", },
      ],
      applyLink: '/'
    },
    {
      title: 'Who is this program for?',
      nestedLists: [
        {
          title: "Emerging developers who are at the beginning of their careers and have an interest in open source",
          listItems: [
            'Get experience working on production code with a globally distributed team',
            'Work on projects that look good on your CV',
            'Grow your skill set and keep learning'
          ]
        },
        {
          title: "Experienced developers who have never gotten the chance to join open-source projects",
          listItems: [
            'People who tried to get into open source but had a bad or unsupportive experience',
            'Neurodivergent people who require more support to find their way around new projects and communities',
            'People from marginalised groups who feel excluded or not welcome'
          ]
        },
        {
          title: "People from non-dev disciplines who want to work with people who value them as first-class contributors: designers, technical writers, writers, organisers, career changers, etc.",
          listItems: [
            'People who have been looking for a way to contribute to open-source projects',
            'People who have varied skill sets and interests (Jacks of all trades)',
            'People who are keen on learning new skills'
          ]
        },
      ],
      subHeadingText: "Our Stack",
      subHeadingDescription:"We’re currently using the following technologies and more. Don’t worry too much about whether you have extended familiarity with all of them. This is just so you know what to expect to work with.",
      listItems: [
        'TypeScript',
        'React',
        'Static Site Generators',
        'Headless CMS',
        'GraphQL & REST',
        'Tailwind',
        'Jest',
        'Playwright',
        'Github',
        'Vite',
        'Salesforce',
        'Etc.'
      ],
      applyLink: '/'
    },
    {
      title: 'Application Process',
      applicationProcess: [
        { linkText: "application form ", textStart: "Step 1: Fill out our ", text: ' The deadline is end of November 2023..', href: '/' },
        { textStart: "Step 2: Interview", text: ' This is a chance for us to get to know each other, figure out how much time you can commit to the program, and work out which contributor track or project you’d be the best fit. These will happen in November and December.', },
        { textStart: "Step 3: Final decision and onboarding", text: ' If you’re invited to join the the Open Source Explorers program, we’ll introduce you to your mentor and start onboarding you. We’ll make our final decision and inform participants by mid-December.',},
        { textStart: "Step 4: Open Source Explorers program ", text: ' The program kicks off in week 2 of January and runs until mid-March',},
      ],
      applyLink: '/',
      getInTouch: { linkText: "Kai Katschthaler. ", textStart: "Any questions? Get in touch with our Program Lead", href: 'mailto:explorers@distributeaid.org' },
    },
    {
      title: 'For Sponsors and Mentors',
      description: [
        {text: 'We are not only looking for participants but also for mentors for our first cohort. To see what areas we are hoping to cover, please check out our planned contributor tracks above.'},
        {text: 'Sponsoring Open Source Explorers is a fantastic opportunity for companies to support open-source software development. There are many ways to help out, from allowing employees to participate in Open Source Explorers or mentor participants on company time to contributing financially.'}
      ],
      getInTouch: { linkText: " please get in touch with Taylor ", textStart: "If you are interested in becoming a mentor or sponsor, ", href: 'mailto:taylor@distributeaid.org' },
    },
  ];
  