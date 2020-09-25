const skills = [
    {
        name: "HTML 5",
        iconClasses: ["fab", "fa-html5"]
    },
    {
        name: "CSS 3",
        iconClasses: ["fab", "fa-css3-alt"]
    },
    {
        name: "Javascript ES6",
        iconClasses: ["fab", "fa-js-square"]
    },
    {
        name: "React & React Native",
        iconClasses: ["fab", "fa-react"]
    },
    {
        name: "Redux",
        imageSrc: "Redux-logo-white.png"
    },
    {
        name: "Node.js & Express.js",
        iconClasses: ["fab", "fa-node-js"]
    },
    {
        name: "PostgreSQL & Sequelize",
        imageSrc: "postgreSQL-logo-white.png"
    },
    {
        name: "Python",
        imageSrc: "python-logo-white.png"
    }
];

const currentProjects = [
    {
        name: "Product Engineer - Frontend</br>@ Reach Technologies",
        imageSrc: "reach-website.png",
        url: "https://www.reach.vote/",
        skillList: ["React", "React Native", "React Native Web", "React Admin", "Redux", "Hasura", "CSS modules", "Python"]
    }
];

const pastProjects = [
    {
        name: "The World Map Game",
        imageSrc: "project-1.png",
        url: "https://pages.git.generalassemb.ly/amhouel/Project-1-interactive-map-game/",
        skillList: ["HTML", "CSS", "Javascript", "SVG Map"],
        githubUrl: "https://github.com/amhouel/world-map-game-project"
    },
    {
        name: "Genius Music App",
        imageSrc: "project-2.png",
        url: "https://genius-music.herokuapp.com/",
        skillList: ["React.js", "CSS", "Javascript", "Genius API"],
        githubUrl: "https://github.com/amhouel/genius-music-react-app-project"
    },
    {
        name: "My Vinyl Collection App (Group Project)",
        imageSrc: "project-3.png",
        url: "https://my-lp.herokuapp.com/",
        skillList: ["React.js", "CSS", "Javascript", "Node.js & Express.js", "PostgreSQL & Sequelize"],
        githubUrl: "https://github.com/amhouel/project-3-my-vinyl-collection"
    },
    {
        name: "Give Back NYC App",
        imageSrc: "project-4.png",
        url: "https://give-back-nyc.herokuapp.com/",
        skillList: ["React.js", "CSS", "Javascript", "Node.js & Express.js", "PostgreSQL & Sequelize"],
        githubUrl: "https://github.com/amhouel/project-4-give-back-app"
    }
];


window.onload = function () {
    const navbar = document.querySelector('.navbar-container');
    let lastKnownScrollY = 0;
    window.addEventListener('scroll', function () {
        lastKnownScrollY = window.scrollY;
        if (lastKnownScrollY > 150) {
            navbar.classList.add('fixed-navbar');
        } else {
            navbar.classList.remove('fixed-navbar');
        }
    });
};


const buildSkillsContainer = (skillsArray) => {
    const skillsContainerDiv = document.querySelector('.skills-container');
    const skillsDiv = document.createElement("div");
    skillsDiv.classList.add("skills");
    skillsContainerDiv.appendChild(skillsDiv);

    skillsArray.map(skill => {
        const skillsIconContainerDiv = document.createElement("div");
        skillsIconContainerDiv.classList.add("skills-icon-container");

        const skillsIconName = document.createElement("h3");
        skillsIconName.classList.add("skills-icon-name");
        skillsIconName.innerHTML = `${skill.name}
        `;
        skillsIconContainerDiv.appendChild(skillsIconName);

        if(skill.hasOwnProperty("iconClasses")){
            const skillsIcon = document.createElement("i");
            skillsIcon.classList.add("skills-icon", `${skill.iconClasses[0]}`, `${skill.iconClasses[1]}`);
            skillsIconContainerDiv.appendChild(skillsIcon);
        } else {
            const skillsImg = document.createElement("img");
            skillsImg.setAttribute("src", `img/${skill.imageSrc}`);
            skillsImg.classList.add(`skills-logo-${skill.name.replace("&", "").replace(".", "").replace(/ /g, "-")}`);
            skillsIconContainerDiv.appendChild(skillsImg);
        }

        skillsDiv.appendChild(skillsIconContainerDiv);
    });
};


const buildprojectsContainer = (projectsArray, classPrefix) => {
    const projectsDiv = document.querySelector(`.${classPrefix}-projects`);
    projectsArray.map(project => {
        const n = projectsArray.indexOf(project) + 1;
        const projectSlideLink = document.createElement("a");
        projectSlideLink.setAttribute("href", `#project-${classPrefix}-${n}`);
        projectSlideLink.classList.add("project-slide-link");
        projectSlideLink.innerHTML = `${n}`;
        projectsDiv.appendChild(projectSlideLink);
    });

    const projectsContainerDiv = document.createElement("div");
    projectsContainerDiv.classList.add("projects-container");
    projectsDiv.appendChild(projectsContainerDiv);

    projectsArray.map(project => {
        const n = projectsArray.indexOf(project) + 1;

        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");
        projectDiv.setAttribute("id", `project-${classPrefix}-${n}`);

        const projectTitle = document.createElement("h3");
        projectTitle.classList.add("project-title");
        projectTitle.innerHTML = `Project #${n} </br>${project.name}`;

        const projectImage = document.createElement("img");
        projectImage.setAttribute("src", `img/${project.imageSrc}`);
        projectImage.setAttribute("alt", `project ${n}`);
        projectImage.classList.add("project-img");

        if (project.hasOwnProperty("url")) {
            const projectLink = document.createElement("a");
            projectLink.setAttribute("href", `${project.url}`);
            projectLink.setAttribute("target", "_blank");
            projectLink.classList.add("project-link");
            projectDiv.appendChild(projectLink);
            projectLink.appendChild(projectTitle);
            projectLink.appendChild(projectImage);
        } else {
            projectDiv.appendChild(projectTitle);
            projectDiv.appendChild(projectImage);
        }

        const skillsList = document.createElement("ul");
        skillsList.classList.add("project-skills");
        project.skillList.map(skill => {
            const skillListItem = document.createElement("li");
            skillListItem.innerHTML = `${skill}`;
            skillsList.appendChild(skillListItem);
        });
        projectDiv.appendChild(skillsList);

        if (project.hasOwnProperty("githubUrl")) {
            const projectGithub = document.createElement("div");
            projectGithub.classList.add("project-github");
            const projectGithubLink = document.createElement("a");
            projectGithubLink.setAttribute("href", `${project.githubUrl}`);
            projectGithubLink.setAttribute("target", "_blank");
            const projectGithubIcon = document.createElement("i");
            projectGithubIcon.classList.add("project-github-icon", "fab", "fa-github");
            projectGithubLink.appendChild(projectGithubIcon);
            projectGithub.appendChild(projectGithubLink);
            projectDiv.appendChild(projectGithub);
        }
        projectsContainerDiv.appendChild(projectDiv);
    });
};

buildSkillsContainer(skills);
buildprojectsContainer(currentProjects, "current");
buildprojectsContainer(pastProjects, "past");
