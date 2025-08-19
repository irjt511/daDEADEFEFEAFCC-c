import { useEffect, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface HeroProps {
  profile: any;
}

export function Hero({ profile }: HeroProps) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = [
    "ابتكار حلول برمجية متقدمة",
    "إبداع بصري يلفت الأنظار", 
    "خطط تسويقية تحقق النجاح",
    "قيادة مبيعات تحقق النمو",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, titles]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
  window.open("/mohamed.pdf", "_blank");
};

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-20 sm:top-40 right-5 sm:right-10 w-48 sm:w-72 h-48 sm:h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-4 sm:-bottom-8 left-10 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto w-full">
        {/* Profile Image */}
        <div className="mb-6 sm:mb-8 relative">
          <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1 animate-pulse-slow">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-4xl sm:text-6xl font-bold">
              {profile?.name?.charAt(0) || "M"}
            </div>
          </div>
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-30 animate-pulse"></div>
        </div>
        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent animate-fade-in-up leading-tight">
          {profile?.name || "محمد العواضي"}
        </h1>

        {/* Animated Subtitle */}
        <div className="text-lg sm:text-2xl lg:text-4xl mb-6 sm:mb-8 h-12 sm:h-16 flex items-center justify-center">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
            {text}
            <span className="animate-blink">|</span>
          </span>
        </div>

        {/* Description */}
        <p className="text-base sm:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-500 px-4">
          {profile?.bio || "شغوف بإنشاء حلول رقمية متكاملة تجمع بين البرمجة والتصميم والتسويق وإدارة المبيعات أعمل على تحويل الأفكار إلى مشاريع ناجحة تقدم تجربة مميزة وتحقق نتائج ملموسة."}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 animate-fade-in-up animation-delay-1000 px-4">
          <button 
            onClick={scrollToContact}
            className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
          >
            <span className="relative z-10">تواصل معي</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button 
            onClick={handleDownloadCV}
            className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-purple-400 rounded-full text-purple-400 font-semibold text-base sm:text-lg transition-all duration-300 hover:bg-purple-400 hover:text-white hover:scale-105"
          >
            تحميل السيرة الذاتية
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce cursor-pointer" onClick={scrollToAbout}>
          <ChevronDownIcon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto text-purple-400" />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-5 sm:left-10 w-3 h-3 sm:w-4 sm:h-4 bg-purple-400 rounded-full animate-float"></div>
      <div className="absolute top-1/3 right-10 sm:right-20 w-4 h-4 sm:w-6 sm:h-6 bg-pink-400 rounded-full animate-float animation-delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full animate-float animation-delay-2000"></div>
    </section>
  );
}
