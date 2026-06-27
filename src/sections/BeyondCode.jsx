import { beyondCode } from "../constants";
import TitleHeader from "../components/TitleHeader";

const BeyondCode = () => {
  return (
    <section
      id="beyond-code"
      className="flex-center section-padding"
    >
      <div className="w-full md:px-10 px-5">
        <TitleHeader
          title="🌿 Beyond Code"
          sub="The experiences that inspire the way I think, create, and grow."
        />

        <div className="mt-20 flex flex-col gap-32">
          {beyondCode.map((item, index) => (
            <div
              key={item.title}
              className={`flex flex-col ${
                index % 2 === 0
                  ? "lg:flex-row"
                  : "lg:flex-row-reverse"
              } items-center gap-12`}
            >
              {/* Image */}
              <div className="lg:w-1/2 w-full">
                <div className="card card-border rounded-3xl overflow-hidden group">
                  <img
                    src={item.imgPath}
                    alt={item.title}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="lg:w-1/2 w-full">
                <p className="text-6xl mb-6">
                  {item.icon}
                </p>

                <h2 className="text-white text-4xl font-bold mb-6">
                  {item.title}
                </h2>

                <p className="text-white-50 text-lg leading-9">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Ending Quote */}

        <div className="mt-40">
          <div className="card card-border rounded-3xl p-14 text-center">
            <p className="font-cormorant text-4xl italic leading-relaxed text-white">
              "The best ideas don't always come from sitting in front of a
              screen. Sometimes they begin on a mountain trail, in a melody,
              inside a story, or during a quiet moment of curiosity."
            </p>
        {/*
            <p className="mt-8 text-white-50 text-xl">
             — Eishita Parik
           </p>  */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeyondCode;