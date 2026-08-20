const translations = {
    en: {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        education: "Education",
        experience: "Experience",
        contact: "Contact",

        hello: "Hello, I'm 👋",
        role: "Data Science & AI Student",
        intro: "I build data-driven solutions using Python, Machine Learning and Artificial Intelligence.",
        viewProjects: "View Projects",
        englishCV: "🇬🇧 English CV",
        frenchCV: "🇫🇷 French CV",

        aboutTitle: "About Me",
        about1: "I am a Data Science and Artificial Intelligence student passionate about transforming data into meaningful insights and building intelligent machine learning solutions.",
        about2: "I work with Python, Pandas, NumPy, Scikit-learn and SQL, with hands-on experience in data analysis, visualization, machine learning and AI projects.",
        about3: "I am currently looking for opportunities where I can apply my technical skills, solve real-world problems and continue growing as a Data Scientist and AI professional.",

        skillsTitle: "My Skills",
        projectsTitle: "My Projects",
        educationTitle: "Education",
        experienceTitle: "Experience",
        contactTitle: "Contact Me"
    },

    fr: {
        home: "Accueil",
        about: "À propos",
        skills: "Compétences",
        projects: "Projets",
        education: "Formation",
        experience: "Expérience",
        contact: "Contact",

        hello: "Bonjour, je suis 👋",
        role: "Étudiant en Data Science & Intelligence Artificielle",
        intro: "Je développe des solutions basées sur les données avec Python, le Machine Learning et l'Intelligence Artificielle.",
        viewProjects: "Voir les projets",
        englishCV: "🇬🇧 CV anglais",
        frenchCV: "🇫🇷 CV français",

        aboutTitle: "À propos de moi",
        about1: "Je suis étudiant en Data Science et Intelligence Artificielle, passionné par la transformation des données en informations pertinentes et par la création de solutions intelligentes basées sur le Machine Learning.",
        about2: "Je travaille avec Python, Pandas, NumPy, Scikit-learn et SQL, avec une expérience pratique en analyse de données, visualisation, Machine Learning et projets d'IA.",
        about3: "Je recherche actuellement des opportunités pour mettre en pratique mes compétences techniques, résoudre des problèmes réels et continuer à progresser en tant que Data Scientist et professionnel de l'IA.",

        skillsTitle: "Mes compétences",
        projectsTitle: "Mes projets",
        educationTitle: "Formation",
        experienceTitle: "Expérience",
        contactTitle: "Me contacter"
    }
};

function setLanguage(language) {

    localStorage.setItem("language", language);

    const t = translations[language];

    document.getElementById("nav-home").textContent = t.home;
    document.getElementById("nav-about").textContent = t.about;
    document.getElementById("nav-skills").textContent = t.skills;
    document.getElementById("nav-projects").textContent = t.projects;
    document.getElementById("nav-education").textContent = t.education;
    document.getElementById("nav-experience").textContent = t.experience;
    document.getElementById("nav-contact").textContent = t.contact;

    document.getElementById("hello").textContent = t.hello;
    document.getElementById("role").textContent = t.role;
    document.getElementById("intro").textContent = t.intro;

    document.getElementById("view-projects").textContent = t.viewProjects;
    document.getElementById("english-cv").textContent = t.englishCV;
    document.getElementById("french-cv").textContent = t.frenchCV;

    document.getElementById("about-title").textContent = t.aboutTitle;
    document.getElementById("about1").textContent = t.about1;
    document.getElementById("about2").textContent = t.about2;
    document.getElementById("about3").textContent = t.about3;

    document.getElementById("skills-title").textContent = t.skillsTitle;
    document.getElementById("projects-title").textContent = t.projectsTitle;
    document.getElementById("education-title").textContent = t.educationTitle;
    document.getElementById("experience-title").textContent = t.experienceTitle;
    document.getElementById("contact-title").textContent = t.contactTitle;
}

const savedLanguage = localStorage.getItem("language");

if (savedLanguage) {
    setLanguage(savedLanguage);
} else {
    setLanguage("en");
}