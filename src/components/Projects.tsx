import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export function Projects() {
  const projects = useQuery(api.portfolio.getProjects);

  const defaultProjects = [
    {
      title: " موقع تعريفي ",
      description:
        "موقع تعريفي يدعم السيرة الذاتية، يعرض مهاراته ومؤهلاته بطريقة أنيقة وبسيطة لتقديمه بشكل احترافي وجذاب.",
      imageUrl: "/api/placeholder/600/400",
      projectUrl: "https://www.malawadhi.art",
      featured: true,
    },
  ];

  const displayProjects =
    projects && projects.length > 0 ? projects : defaultProjects;

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            مشاريعي المميزة
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          <p className="text-gray-300 text-base sm:text-xl mt-4 sm:mt-6 max-w-2xl mx-auto">
            مجموعة من أفضل المشاريع التي عملت عليها وحققت نجاحاً ملموساً
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-400/50 transition-all duration-500 hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-40 sm:h-48 bg-gradient-to-br from-purple-600/20 to-pink-600/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-4xl sm:text-6xl font-bold opacity-20">
                  {project.title.charAt(0)}
                </div>

                {/* Overlay with project link */}
                {project.projectUrl && (
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 sm:p-4 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors duration-300"
                    >
                      <ArrowTopRightOnSquareIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </a>
                  </div>
                )}

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-30">
                    <span className="px-2 sm:px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-black rounded-full text-xs font-bold">
                      مميز
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-purple-400 transition-colors duration-300 line-clamp-2">
                  {project.title}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-3 sm:mb-4 text-sm line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                </div>
                {/* Action button - only project view */}
                {project.projectUrl && (
                  <div className="flex">
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center py-2 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg text-sm sm:text-base font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105"
                    >
                      عرض المشروع
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
