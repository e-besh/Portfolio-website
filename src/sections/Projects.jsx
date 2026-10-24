import { SiGithub } from "@icons-pack/react-simple-icons";
import { ArrowUpRight } from "lucide-react";
import AnimatedBorderButton from "../components/AnimatedBorderButton";

const projects = [
  {
    title: "AI-Powered Forum",
    description:
      "A knowledge-sharing platform where users can ask questions, explore discussions, and discover relevant answers through keyword search and AI-powered semantic search. It also integrates an AI assistant to help users find information and get context-aware responses.",
    image: "/product/AI-FORUM.png",
    tags: ["React", "Node.js", "Express", "MySQL", "Gemini API "],
    link: "https://ai-powered-forum1.vercel.app/",
    github: "https://github.com/e-besh/AI-Powered-Forum1",
  },
  {
    title: "ChatGPT Clone",
    description:
      "An AI-powered conversational application that allows users to ask questions, explore ideas, and receive intelligent responses through an interactive chat interface.",
    image: "/product/ChatGPT.png",
    tags: ["React", "Node.js", "Express", "Gemini API"],
    link: "https://clone-chat-gpt-azure.vercel.app/",
    github: "https://github.com/e-besh/Clone-ChatGPT",
  },
  {
    title: "Netflix Clone",
    description:
      "A movie discovery application inspired by Netflix, featuring a modern streaming-style interface. It integrates a movie database API to display movie information and deliver a responsive browsing experience.",
    image: "/product/Netflix.png",
    tags: ["React", "JavaScript", "TMDB API", "Swiper"],
    link: "https://ai-integrated-netflix-clone-rhyh.vercel.app/",
    github: "https://github.com/e-besh/AI-Integrated-Netflix-Clone",
  },
  {
    title: "AveLora AI",
    description:
      "An AI-powered coding assistant designed to enhance the development experience with intelligent code completion, automated testing, and smart debugging.",
    image: "/product/Avelora.png",
    tags: ["React", "Tailwind", "Gemini API"],
    link: "https://ave-lora-website.vercel.app/",
    github: "https://github.com/e-besh/AveLora-website",
  },

  {
    title: "Apple Website clone",
    description:
      "A modern Apple-inspired website built to recreate Apple’s sleek design and seamless browsing experience.",
    image: "/product/AppleClone.png",
    tags: ["React", "Javascript", "css", "youtube Data API"],
    link: "https://github.com/e-besh/AppleClone",
    github: "https://github.com/e-besh/AppleClone",
  },
  {
    title: "myChef AI",
    description:
      "An AI-powered recipe generator that transforms ingredients you already have into creative meal ideas. Simply enter your available ingredients, and the application generates personalized recipes with cooking instructions and making meal planning easier.",
    image: "/product/myChef.png",
    tags: ["React", "GEMINI API"],
    link: "https://github.com/e-besh/my-chef",
    github: "https://github.com/e-besh/my-chef",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-10 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section heading + project grid goes here */}

        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Building ideas{" "}
            <span className="font-serif italic font-normal text-white">
              Into Real Solutions.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, From AI-powered applications to
            interactive web experiences, these projects showcase how I combine
            full-stack development, API integration, and problem-solving to turn
            ideas into functional digital products.
          </p>
        </div>

        {/* project Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 100}ms ` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden w-full pt-[56.25%] bg-surface/50 border-b border-border/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-contain rounded-lg shadow-mdtransition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    aria-label={`View ${project.title} live`}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    aria-label={`View ${project.title} source code`}
                  >
                    <SiGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Title + arrow */}
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Call to Action */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a
            href="https://github.com/e-besh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatedBorderButton>
              View All Projects
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
