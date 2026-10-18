import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: " Full-Stack Development ",
    description:
      " Building responsive web applications from frontend to backend.",
  },
  {
    icon: Lightbulb,
    title: " AI & Innovation",
    description:
      "Exploring new technologies and AI to solve problems in practical ways.",
  },
  {
    icon: Users,
    title: "Collaboration & Problem-Solving",
    description:
      "working closely with teams and breaking down challenges and turning ideas into practical solutions.",
  },
  {
    icon: Rocket,
    title: "Continuous Growth",
    description:
      "Learning through hands-on projects and improving with every challenge.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,{" "}
              <span className="font-serif italic font-normal text-white">
                one solution at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m Enas Beshir, a Full-Stack Developer and Information Systems
                graduate from Hawassa University, with a background in Business
                Management. My journey into technology has taught me that
                building great software is about more than writing code. It’s
                about understanding problems, thinking critically, and creating
                solutions that make people’s lives and work easier.
              </p>
              <p>
                I work with technologies such as React, JavaScript, Node.js,
                Express, and MySQL to build web applications, while exploring AI
                integration to make digital products more useful and
                intelligent.
              </p>
            </div>
            {/* mission */}
            <div className=" glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to turn ideas into practical digital solutions
                that solve real problems, simplify everyday life, and create
                meaningful opportunities through technology."
              </p>
            </div>
          </div>

          {/* Right column */}

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: ` ${(idx + 1) * 100}ms ` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
