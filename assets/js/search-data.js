// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-",
    title: "",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "awards-comprehensive-excellent-scholarship-tsinghua-university",
          title: 'Comprehensive Excellent Scholarship, Tsinghua University',
          description: "",
          section: "Awards",},{id: "awards-national-scholarship",
          title: 'National Scholarship',
          description: "",
          section: "Awards",},{id: "awards-ccf-elite-collegiate-award",
          title: 'CCF Elite Collegiate Award',
          description: "",
          section: "Awards",},{id: "awards-outstanding-graduate-of-beijing-city",
          title: 'Outstanding Graduate of Beijing City',
          description: "",
          section: "Awards",},{id: "awards-outstanding-graduate-of-tsinghua-university",
          title: 'Outstanding Graduate of Tsinghua University',
          description: "",
          section: "Awards",},{id: "competitions-first-prize-of-2016-2017-2018-national-olympiad-in-informatics-in-provinces-noip16-17-18",
          title: 'First Prize of 2016/2017/2018 National Olympiad in Informatics in Provinces (NOIP16/17/18)',
          description: "",
          section: "Competitions",},{id: "competitions-first-prize-of-the-2018-national-olympiad-in-informatics-winter-camp-wc2018",
          title: 'First prize of the 2018 National Olympiad in Informatics Winter Camp (WC2018)',
          description: "",
          section: "Competitions",},{id: "competitions-silver-medal-in-the-30th-ioi-china-team-selection-competition-ctsc2018",
          title: 'Silver Medal in The 30th IOI China Team Selection Competition (CTSC2018)',
          description: "",
          section: "Competitions",},{id: "competitions-gold-medal-in-the-12th-asia-pacific-informatics-olympiad-china-apio2018",
          title: 'Gold Medal in the 12th Asia Pacific Informatics Olympiad China (APIO2018)',
          description: "",
          section: "Competitions",},{id: "competitions-the-first-prize-of-the-compilation-competition-of-the-national-computer-system-development-capability-competition",
          title: 'The First Prize of the Compilation Competition of the National Computer System Development...',
          description: "",
          section: "Competitions",},{id: "teaching-ta-principles-and-practice-of-compiler-construction",
          title: 'TA, Principles and Practice of Compiler Construction',
          description: "",
          section: "Teaching",},{id: "teaching-ta-introduction-to-high-performance-computing",
          title: 'TA, Introduction to High Performance Computing',
          description: "",
          section: "Teaching",},{id: "teaching-ta-principles-and-practice-of-compiler-construction",
          title: 'TA, Principles and Practice of Compiler Construction',
          description: "",
          section: "Teaching",},{id: "teaching-ta-introduction-to-high-performance-computing",
          title: 'TA, Introduction to High Performance Computing',
          description: "",
          section: "Teaching",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
