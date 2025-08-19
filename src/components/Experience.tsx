import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export function Experience() {
  const experiences = useQuery(api.portfolio.getExperiences);

  const defaultExperiences = [
    {
      position: "البرمجة",
      startDate: "2021",
      endDate: "2025",
      current: false,
      description: "قيادة وتطوير حلول برمجية متقدمة أثرت بشكل إيجابي على جودة المشاريع والأداء، مع ابتكار تجارب رقمية مبتكرة وتحقيق نتائج ملموسة وناجحة.",
    },
    {
      position: "التصميم",
      startDate: "2024",
      endDate: "2025",
      current: false,
      description: "تصميم وتقديم أعمال مبتكرة وأنيقة تعكس الأفكار بشكل جذاب واحترافي، مع التركيز على التفاصيل والجودة لتقديم تجربة بصرية مميزة تحقق أهداف المشروع وتترك أثرًا ملموسًا.",
    },
    {
      position: "التسويق",
      startDate: "2024",
      endDate: "2022",
      current: false,
      description: "تخطيط وتنفيذ استراتيجيات تسويقية مبتكرة لتعزيز العلامة التجارية وزيادة التفاعل، مع التركيز على الوصول إلى الجمهور المستهدف وتحقيق نتائج ملموسة وقياس الأداء بدقة لتحقيق أفضل تأثير.",
    },
    {
      position: "ادارة المبيعات",
      startDate: "2024",
      endDate: "2025",
      current: false,
      description: "قيادة فرق المبيعات وتطوير استراتيجيات فعّالة لزيادة الإيرادات وتحقيق أهداف النمو، مع تحسين تجربة العملاء وبناء علاقات قوية تساهم في تعزيز الأداء وتحقيق نتائج ملموسة ومستدامة.",
    }
  ];

  const displayExperiences = experiences && experiences.length > 0 ? experiences : defaultExperiences;

  return (
    <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            خبراتي المهنية
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          <p className="text-gray-300 text-base sm:text-xl mt-4 sm:mt-6">
            رحلة مهنية مليئة بالإنجازات والتطوير المستمر
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-pink-400 to-purple-400"></div>

          <div className="space-y-8 sm:space-y-12">
            {displayExperiences.map((exp, index) => (
              <div
                key={index}
                className="relative flex items-start gap-4 sm:gap-8 group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0 mt-2">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-2 sm:border-4 border-slate-900 group-hover:scale-125 transition-transform duration-300"></div>
                  {exp.current && (
                    <div className="absolute inset-0 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping"></div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex flex-col gap-3 sm:gap-4 mb-4">
                    <div>
                      <h3 className="text-lg sm:text-2xl font-bold text-white mb-1">{exp.position}</h3>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <span className="px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full text-xs sm:text-sm font-medium border border-purple-400/30 w-fit">
                        {exp.startDate} {exp.current ? "" : `- ${exp.endDate}`}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-lg">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}