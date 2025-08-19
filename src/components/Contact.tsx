import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

interface ContactProps {
  profile: any;
}

export function Contact({ profile }: ContactProps) {
  const handleWhatsAppClick = () => {
    const phoneNumber = profile?.phone || "0533170903";
    const cleanNumber = phoneNumber.replace(/\s+/g, '').replace(/[^\d+]/g, '');
    // إضافة رمز الدولة السعودية إذا لم يكن موجوداً
    const formattedNumber = cleanNumber.startsWith('966') ? cleanNumber : `966${cleanNumber.replace(/^0/, '')}`;
    window.open(`https://wa.me/${formattedNumber}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            تواصل معي
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          <p className="text-gray-300 text-base sm:text-xl mt-4 sm:mt-6 max-w-2xl mx-auto">
            هل لديك مشروع رائع في ذهنك؟ دعنا نتحدث ونحوله إلى واقع مذهل
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">معلومات التواصل</h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3 sm:gap-4 group">
                  <div className="p-2 sm:p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <EnvelopeIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-gray-400 text-xs sm:text-sm">البريد الإلكتروني</div>
                    <div className="text-white font-medium text-sm sm:text-base break-all">{profile?.email || "mhmed666q@gmail.com"}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 group cursor-pointer" onClick={handleWhatsAppClick}>
                  <div className="p-2 sm:p-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <PhoneIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-gray-400 text-xs sm:text-sm">رقم الهاتف</div>
                    <div className="text-white font-medium text-sm sm:text-base">{profile?.phone || "0533170903"}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 group cursor-pointer" onClick={handleWhatsAppClick}>
                  <div className="p-2 sm:p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.506z"/>
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-gray-400 text-xs sm:text-sm">واتساب</div>
                    <div className="text-white font-medium text-sm sm:text-base">{profile?.phone || "0533170903"}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 group">
                  <div className="p-2 sm:p-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <MapPinIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-gray-400 text-xs sm:text-sm">الموقع</div>
                    <div className="text-white font-medium text-sm sm:text-base">{profile?.location || "المملكة العربية السعودية"}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">تابعني على</h3>
              
              <div className="flex gap-3 sm:gap-4">
                <a
                  href={profile?.socialLinks?.tiktok || "https://www.tiktok.com/@ktkj?is_from_webapp=1&sender_device=pc"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 sm:p-4 bg-black rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-110 group flex-shrink-0"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                </a>
                
                <a
                  href={profile?.socialLinks?.instagram || "https://www.instagram.com/re32vo?igsh=MTdsdXk2emQ4b3c0ZQ%3D%3D&utm_source=qr"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 sm:p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-110 group flex-shrink-0"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                <EnvelopeIcon className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">جاهز للتعاون؟</h3>
              <p className="text-gray-300 mb-6 text-sm sm:text-base">
                تواصل معي عبر البريد الإلكتروني أو الواتساب لمناقشة مشروعك القادم
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href={`mailto:${profile?.email || "mhmed666q@gmail.com"}`}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold text-sm sm:text-base hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105"
                >
                  إرسال إيميل
                </a>
                <button
                  onClick={handleWhatsAppClick}
                  className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold text-sm sm:text-base hover:from-green-700 hover:to-emerald-700 transition-all duration-300 hover:scale-105"
                >
                  واتساب
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
