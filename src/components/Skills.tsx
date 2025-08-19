import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

// تعريف الأنواع لتفادي أخطاء TypeScript
type Category = {
  name: string;
  color: string;
  icon: string;
};

type Skill = {
  name: string;
  category: string;
  level: number;
};

export function Skills() {
  const skills = useQuery(api.portfolio.getSkills);

  const skillCategories: Category[] = [
    { name: "ادارة المبيعات", color: "from-blue-400 to-cyan-400", icon: "📈" },
    { name: "التسويق", color: "from-green-400 to-emerald-400", icon: "🎬" },
    { name: "التصميم", color: "from-purple-400 to-violet-400", icon: "🎨" },
    { name: "البرمجة", color: "from-orange-400 to-red-400", icon: "👨🏻‍💻" },
  ];

  const defaultSkills: Skill[] = [
    { name: "نسبة الاحتراف", category: "البرمجة", level: 100 },
    { name: "نسبة الاحتراف", category: "التصميم", level: 100 },
    { name: "نسبة الاحتراف", category: "التسويق", level: 85 },
    { name: "نسبة الاحتراف", category: "ادارة المبيعات", level: 100 },
  ];

  const displaySkills: Skill[] = skills && skills.length > 0 ? skills : defaultSkills;

  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            مهاراتي التقنية
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          <p className="text-gray-300 text-base sm:text-xl mt-4 sm:mt-6 max-w-2xl mx-auto">
            مجموعة شاملة من التقنيات والأدوات التي أتقنها لتطوير حلول متكاملة
          </p>
        </div>

        {/* كروت المهارات العلوية */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-12 sm:mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={category.name}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-center">
                <div className="text-2xl sm:text-4xl mb-2 sm:mb-4">{category.icon}</div>
                <h3 className={`text-base sm:text-xl font-bold mb-1 sm:mb-2 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.name}
                </h3>
                <div className="text-gray-400 text-xs sm:text-base">
                  {displaySkills.filter((skill: Skill) => skill.category === category.name).length} مهارات
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* نسب المهارات مرتبة حسب طلبك */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* التصميم */}
          {skillCategories.filter((c) => c.name === "التصميم").map((category) => (
            <SkillBlock key={category.name} category={category} displaySkills={displaySkills} />
          ))}
          {/* البرمجة */}
          {skillCategories.filter((c) => c.name === "البرمجة").map((category) => (
            <SkillBlock key={category.name} category={category} displaySkills={displaySkills} />
          ))}
          {/* ادارة المبيعات */}
          {skillCategories.filter((c) => c.name === "ادارة المبيعات").map((category) => (
            <SkillBlock key={category.name} category={category} displaySkills={displaySkills} />
          ))}
          {/* التسويق */}
          {skillCategories.filter((c) => c.name === "التسويق").map((category) => (
            <SkillBlock key={category.name} category={category} displaySkills={displaySkills} />
          ))}
        </div>
      </div>
    </section>
  );
}

// مكون فرعي لعرض النسبة لكل مهارة
function SkillBlock({
  category,
  displaySkills,
}: {
  category: Category;
  displaySkills: Skill[];
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 sm:gap-3">
        <span
          className="text-2xl sm:text-3xl"
          style={{
            fontFamily:
              "Apple Color Emoji, Segoe UI Emoji, NotoColorEmoji, Noto Color Emoji, Segoe UI Symbol, Android Emoji, EmojiSymbols",
          }}
        >
          {category.icon}
        </span>
        <h3
          className={`text-xl sm:text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent m-0 p-0`}
        >
          {category.name}
        </h3>
      </div>
      <div className="space-y-3 sm:space-y-4">
        {displaySkills
          .filter((skill: Skill) => skill.category === category.name)
          .map((skill: Skill, index: number) => (
            <div
              key={skill.name}
              className="group bg-white/5 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-medium text-sm sm:text-base">{skill.name}</span>
                <span className="text-gray-400 text-sm">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                  style={{
                    width: `${skill.level}%`,
                    animationDelay: `${index * 200}ms`,
                  }}
                ></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}