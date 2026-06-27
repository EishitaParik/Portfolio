import { testimonials } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="flex-center section-padding"
    >
      <div className="w-full md:px-10 px-5">
        <TitleHeader
          title="🏆 Highlights"
          sub="📈 A few moments I'm proud of"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <GlowCard
              key={index}
              card={testimonial}
              index={index}
              className="min-h-[300px] p-8"
            >
              {/* Logo */}
              <div className="flex justify-center items-center gap-4 mb-6">
                {testimonial.logos ? (
                  testimonial.logos.map((logo, i) => (
                    <img
                      key={i}
                      src={logo}
                      alt={`logo-${i}`}
                      className="w-16 h-16 object-contain"
                    />
                  ))
                ) : (
                  <img
                    src={testimonial.imgPath}
                    alt={testimonial.name}
                    className="w-20 h-20 object-contain"
                  />
                )}
              </div>

              {/* Review */}
              <p className="text-white-50 text-lg leading-8 text-center">
                {testimonial.review}
              </p>

              {/* Bottom */}
              <div className="mt-8 text-center">
                <h3 className="text-xl font-semibold text-white">
                  {testimonial.name}
                </h3>

                <p className="text-white-50 mt-2">
                  {testimonial.mentions}
                </p>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;