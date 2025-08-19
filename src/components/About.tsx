interface AboutProps {
  profile: any;
}

export function About({ profile }: AboutProps) {
  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            من أنا؟
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-purple-400">قصتي</h3>
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                بدأت رحلتي بشغف للتعلم، واجهت فيها تحديات كثيرة في البرمجة والتصميم.
                تحولت الصعوبات إلى خبرات جعلتني أبدع في التسويق وإدارة المبيعات.
                واليوم أجمع بين التقنية والإبداع والإدارة لصناعة حلول متكاملة وفعّالة
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-pink-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-pink-400">رؤيتي</h3>
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                أهدف إلى أن أكون جزءاً من فريق يقدر الإبداع والابتكار، حيث يمكنني المساهمة في بناء حلول 
                تؤثر إيجابياً على حياة الاخرين وتحقق نجاحاً تجارياً للشركة.
              </p>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl p-6 sm:p-8 backdrop-blur-sm border border-white/10">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="text-center p-4 sm:p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-1 sm:mb-2">التصميم</div>
                  <div className="text-gray-300 text-sm sm:text-base">سنتين خبره</div>
                </div>
                <div className="text-center p-4 sm:p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl font-bold text-pink-400 mb-1 sm:mb-2">البرمجة</div>
                  <div className="text-gray-300 text-sm sm:text-base">اربع سنوات خبره </div>
                </div>
                <div className="text-center p-4 sm:p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-1 sm:mb-2">التسويق</div>
                  <div className="text-gray-300 text-sm sm:text-base">سنتين خبره</div>
                </div>
                <div className="text-center p-4 sm:p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1 sm:mb-2">ادارة المبيعات</div>
                  <div className="text-gray-300 text-sm sm:text-base">سنتين خبره</div>
                </div>
              </div>
            </div>

            {/* Floating decoration */}
            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
