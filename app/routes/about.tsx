import type { MetaFunction } from "@remix-run/node";
import WordCycle from "~/components/WordCycle";

import configs from "~/configs/configs";

export const meta: MetaFunction = () => {
  return [
    { title: `${configs.name} | About` },
    { name: "description", content: `about ${configs.name}` },
    {
      name: "keywords",
      content: `personal, website, about, profile, ${configs.name}`,
    },
    { name: "author", content: configs.name },

    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ];
};

export default function About() {
  return (
    <div className="w-full h-full md:h-[93vh] flex">
      <div
        className={`w-full rounded-xl h-full lg:h-5/6 my-auto mx-auto flex justify-center align-middle`}
        style={{ backgroundColor: configs.colors.primary }}
      >
        <div className="w-full h-full md:grid md:grid-cols-5">
          <div className="col-span-2 md:h-full md:w-full h-full flex">
            <img
              src={`pictures/${configs.homePagePictureFileName}`}
              alt={configs.name}
              className="w-2/3 md:w-3/4 mt-12 mx-auto md:my-auto rounded-lg"
            />
          </div>
          <div className="col-span-3 flex flex-col items-center w-full h-full">
            <div className="w-7/8 h-7/8 mx-auto my-auto flex flex-col items-center">
              <h1 className="text-5xl font-blackOpsOne my-6 md:my-1 lg:mb-12">
                {configs.aboutPage.greeting}
              </h1>
              <p className="text-xl leading-loose whitespace-pre-wrap font-quicksand text-gray-800 mx-6">
                <span className="block text-2xl font-semibold text-orange-600">
                  💻 Full-stack explorer
                </span>
                <span className="block text-2xl font-semibold text-amber-700">
                  🐻 Brown University student,
                </span>

                <span className="block text-2xl font-semibold">
                  powered by clean code, curiosity, and a touch of care 🌱✨
                </span>

                <span className="block text-2xl font-semibold mt-5">
                  🌍 Combining tech, math, and music, to solve world’s challenges —{" "}
                  <span className="italic text-pink-500"> and create with <WordCycle />.</span>
                </span>
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
