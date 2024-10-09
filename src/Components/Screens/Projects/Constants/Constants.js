export const projectsData = [
  {
    title: "Shewhart",
    description:
      "Administration module for the management of resources and students, oriented to support the teaching of statistical quality control.",
    img: "/Images/Projects/Shewhart.webp",
    techs: ["React", "Node", "Express", "Sequelize", "MySql", "JS", "CSS"],
    alt: "Project",
    link: "https://docs.google.com/presentation/d/1YbFTQx4J4m9ufeAwVfg6kkx8rVTfGMjQ/edit?usp=sharing&ouid=112107447077751835334&rtpof=true&sd=true",
  },
  {
    title: "Portfolio",
    description:
      "3D Portafolio with a 3D model of a room and a 3D model of a book.",
    img: "/Images/Projects/Portfolio.webp",
    techs: ["React", "R3F", "Blender", "CSS", "JS"],
    alt: "Project",
    link: "/Images/Projects/Portfolio.webp",
  },
  {
    title: "3D Album",
    description:
      "Dragon Ball 3D book, the data comes from the Dragon Ball API, it is rendered on a canvas that is used as a texture.",
    img: "/Images/Projects/3Dbook.webp",
    techs: ["React", "R3F", "Tailwind", "JS", "Dragon Ball API"],
    alt: "Project",
    link: "https://dragonball3dbook.netlify.app",
  },
  // {
  //   title: "Landing Page",
  //   description: "",
  //   img: "/Images/Projects/Pag1.webp",
  //   techs: ["HTML", "CSS", "JS"],
  //   alt: "Project",
  //   link: "/Images/Projects/Pag1.webp",
  // },

  //ESTOS DOS VACIOS SON NECESARIOS PARA QUE EL SLIDER FUNCIONE CON EL SLIDETOSHOW 3
  {
    title: "",
    description: "",
    img: "",
    alt: "",
    link: "",
  },
  {
    title: "",
    description: "",
    img: "",
    alt: "",
    link: "",
  },
];

export const settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 1,
  focusOnSelect: true,
  touchThreshold: 100,
  // lazyLoad: true,
};
