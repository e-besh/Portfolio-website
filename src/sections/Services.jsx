import { Code, Database, Megaphone } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "I design and develop responsive, accessible, and high-performance web interfaces. From pixel-perfect landing pages to complex dashboards, I build seamless user experiences using React and modern CSS frameworks.",
  },
  {
    icon: Database,
    title: "Backend Development",
    description:
      "I build robust server-side architectures and RESTful APIs. Whether it's managing databases, handling authentication, or integrating AI models and third-party services, I ensure your application's engine runs smoothly and securely using Node.js,mySQL,Express,REST API",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "I help businesses build a strong digital presence. By combining technical SEO, content strategy, and social media planning, I ensure your product reaches the right audience and converts effectively.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-5 relative overflow-hidden scroll-mt-24"
    >
      {/* Background glows (matching your other sections) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-surface/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            What I Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Services &{" "}
            <span className="font-serif italic font-normal text-white">
              Expertise.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Delivering end-to-end digital solutions. I bridge the gap between
            technical development, data management, and strategic marketing to
            build products that scale.
          </p>
        </div>

        {/* Services Grid */}
        {/* Mobile: 1 col | Tablet: 2 cols | Desktop: 3 cols */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-all duration-300 group animate-fade-in hover:-translate-y-2"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold mb-4 text-white">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
