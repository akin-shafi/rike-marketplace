import { Button } from "./ui/button";

export default function LatestPublish() {
    const testimonials = [
      {
        title: "Scalable Infrastructure",
        text: "Our platform is designed to scale seamlessly, ensuring your applications can handle even the highest traffic demands.",
        image: "/profile1.jpg",
        name: "John Doe",
        role: "CTO, TechCorp"
      },
      {
        title: "Cutting-Edge Technology",
        text: "Stay ahead of the curve with our cutting-edge technology stack, constantly updated to deliver the latest innovations.",
        image: "/profile2.jpg",
        name: "Jane Smith",
        role: "Lead Developer, InnovateX"
      },
      {
        title: "Unparalleled Support",
        text: "Our dedicated team of experts is here to provide you with personalized support, ensuring your success every step of the way.",
        image: "/profile3.jpg",
        name: "Alice Johnson",
        role: "Support Manager, HelpNow"
      }
    ];
  
    return (
      <section className="relative w-full bg-section-bg bg-cover bg-center bg-no-repeat py-24 md:py-32 lg:py-40">
        <div className="container mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
              Unlock the Power of Our Platform
            </h2>
            <p className="text-lg text-white/80 md:text-xl">
              Discover how our cutting-edge technology can transform your business and drive innovation.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative rounded-lg bg-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/30">
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-semibold text-white">{testimonial.title}</h3>
                  <p className="mt-2 text-white/80">{testimonial.text}</p>
                  <hr className="my-4 border-t border-white/40" />
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <p className="text-white font-semibold">{testimonial.name}</p>
                      <p className="text-white/80 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
          <Button size="lg">View More</Button>
        </div>
        </div>
      </section>
    );
  }
  