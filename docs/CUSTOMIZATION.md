# دليل التخصيص المتقدم - محمد العواضي

## تغيير الألوان

### الألوان الأساسية
يمكنك تغيير الألوان الأساسية من ملف `tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#a855f7', // البنفسجي الأساسي
    hover: '#9333ea',    // البنفسجي عند التمرير
  },
}
```

### التدرجات اللونية المستخدمة
- `from-purple-400 to-pink-400`: التدرج الأساسي للعناوين
- `from-purple-600 to-pink-600`: تدرج الأزرار والروابط
- `from-slate-900 via-purple-900 to-slate-900`: خلفية الموقع
- `from-green-600 to-emerald-600`: أزرار الواتساب

### تغيير التدرجات
لتغيير التدرج الأساسي، ابحث عن `from-purple-400 to-pink-400` في الملفات واستبدلها بالألوان المطلوبة:

```css
/* مثال: تغيير إلى تدرج أزرق وأخضر */
from-blue-400 to-green-400
```

## تخصيص الخطوط

### تغيير الخط الأساسي
في ملف `src/index.css`:

```css
body {
  font-family: "Cairo", /* خط عربي جديد */
    "Inter Variable",
    ui-sans-serif,
    system-ui,
    /* باقي الخطوط الاحتياطية */
}
```

### إضافة خط عربي من Google Fonts
1. أضف رابط الخط في `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700&display=swap" rel="stylesheet">
```

2. عدّل `font-family` في `src/index.css`

### خطوط عربية مقترحة
- **Cairo**: خط حديث ومقروء
- **Tajawal**: خط أنيق للمواقع المهنية
- **Almarai**: خط بسيط وواضح
- **Amiri**: خط تقليدي أنيق

## تخصيص الرسوم المتحركة

### تعديل سرعة الحركات
في ملف `src/index.css`:

```css
.animate-blob {
  animation: blob 7s infinite; /* غيّر 7s لتسريع أو تبطيء الحركة */
}

.animate-float {
  animation: float 6s ease-in-out infinite; /* حركة العناصر الطائرة */
}
```

### إضافة حركات جديدة
```css
@keyframes slideInRight {
  0% { 
    transform: translateX(100px);
    opacity: 0;
  }
  100% { 
    transform: translateX(0);
    opacity: 1;
  }
}

.animate-slide-in-right {
  animation: slideInRight 0.8s ease-out forwards;
}
```

### تخصيص حركة الكتابة
في `src/components/Hero.tsx`، يمكنك تعديل:
- `typingSpeed`: سرعة الكتابة (افتراضي: 150ms)
- `titles`: النصوص المتحركة
- مدة التوقف بين النصوص (افتراضي: 500ms)

## تخصيص التخطيط

### تغيير عدد أعمدة المشاريع
في `src/components/Projects.tsx`:

```jsx
{/* من 3 أعمدة إلى 4 أعمدة */}
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">

{/* أو إلى عمودين فقط */}
<div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
```

### تعديل عدد أعمدة المهارات
في `src/components/Skills.tsx`:

```jsx
{/* تغيير من 4 أعمدة إلى 3 */}
<div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-12 sm:mb-16">
```

### تعديل المسافات بين الأقسام
```jsx
{/* تغيير المسافات العمودية */}
<section className="py-20 sm:py-24"> {/* بدلاً من py-16 sm:py-20 */}

{/* تغيير المسافات بين العناصر */}
<div className="space-y-10"> {/* بدلاً من space-y-8 */}
```

## إضافة أقسام جديدة

### إنشاء قسم "الشهادات"
1. أنشئ ملف `src/components/Certificates.tsx`:
```jsx
export function Certificates() {
  return (
    <section id="certificates" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            الشهادات والدورات
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>
        {/* محتوى الشهادات */}
      </div>
    </section>
  );
}
```

2. أضف المكون إلى `src/App.tsx`:
```jsx
import { Certificates } from "./components/Certificates";

// في المكون الرئيسي
<Certificates />
```

3. أضف رابط في `src/components/Navigation.tsx`:
```jsx
const navItems = [
  // ... باقي العناصر
  { id: "certificates", label: "الشهادات" },
  { id: "contact", label: "تواصل معي" },
];
```

### إنشاء قسم "الخدمات"
```jsx
export function Services() {
  const services = [
    {
      title: "تطوير المواقع",
      description: "إنشاء مواقع ويب متجاوبة وسريعة",
      icon: "🌐"
    },
    {
      title: "تطوير التطبيقات",
      description: "تطبيقات ويب تفاعلية ومتقدمة",
      icon: "📱"
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      {/* محتوى الخدمات */}
    </section>
  );
}
```

## تخصيص قسم التواصل

### إضافة نموذج تواصل
في `src/components/Contact.tsx`، يمكنك إضافة نموذج:

```jsx
const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: ''
});

const handleSubmit = (e) => {
  e.preventDefault();
  // إرسال البيانات عبر البريد الإلكتروني أو خدمة أخرى
  window.location.href = `mailto:mhmed666q@gmail.com?subject=رسالة من ${formData.name}&body=${formData.message}`;
};

// في JSX
<form onSubmit={handleSubmit} className="space-y-4">
  <input
    type="text"
    placeholder="الاسم"
    value={formData.name}
    onChange={(e) => setFormData({...formData, name: e.target.value})}
    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400"
  />
  {/* باقي الحقول */}
</form>
```

### إضافة روابط اجتماعية جديدة
```jsx
// إضافة LinkedIn
<a
  href={profile?.socialLinks?.linkedin || "#"}
  target="_blank"
  rel="noopener noreferrer"
  className="p-3 sm:p-4 bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-110"
>
  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
    {/* أيقونة LinkedIn */}
  </svg>
</a>
```

## تحسين الأداء

### تحسين الصور
```jsx
// استخدام lazy loading
<img 
  src={imageUrl} 
  alt="وصف الصورة"
  loading="lazy"
  className="w-full h-auto"
/>

// تحسين أحجام الصور
<img 
  src={imageUrl}
  srcSet={`${imageUrl}?w=400 400w, ${imageUrl}?w=800 800w`}
  sizes="(max-width: 768px) 400px, 800px"
  alt="وصف الصورة"
/>
```

### تحسين الحركات
```css
/* تقليل الحركات للمستخدمين الذين يفضلون ذلك */
@media (prefers-reduced-motion: reduce) {
  .animate-blob,
  .animate-float,
  .animate-pulse {
    animation: none;
  }
}
```

## الاستجابة للأجهزة المختلفة

### نقاط التوقف المخصصة
في `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    screens: {
      'xs': '475px',    // هواتف كبيرة
      'sm': '640px',    // أجهزة لوحية صغيرة
      'md': '768px',    // أجهزة لوحية
      'lg': '1024px',   // أجهزة كمبيوتر صغيرة
      'xl': '1280px',   // أجهزة كمبيوتر
      '2xl': '1536px',  // شاشات كبيرة
    }
  }
}
```

### تخصيص للهواتف
```jsx
{/* نص أصغر على الهواتف */}
<h1 className="text-2xl sm:text-4xl lg:text-6xl">

{/* إخفاء عناصر على الهواتف */}
<div className="hidden sm:block">

{/* عرض مختلف على الهواتف */}
<div className="flex flex-col sm:flex-row">
```

## تخصيص الألوان الداكنة/الفاتحة

### إضافة وضع فاتح
```css
/* في src/index.css */
:root {
  --bg-primary: #0f172a;    /* خلفية داكنة */
  --text-primary: #ffffff;  /* نص أبيض */
}

[data-theme="light"] {
  --bg-primary: #ffffff;    /* خلفية فاتحة */
  --text-primary: #1e293b;  /* نص داكن */
}

body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
}
```

### زر تبديل الوضع
```jsx
const [isDark, setIsDark] = useState(true);

const toggleTheme = () => {
  setIsDark(!isDark);
  document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
};

// في JSX
<button onClick={toggleTheme} className="p-2 rounded-lg">
  {isDark ? '🌞' : '🌙'}
</button>
```

## نصائح للتخصيص

### 1. اختبار التغييرات
- اختبر على أجهزة مختلفة
- تأكد من الاستجابة على الهواتف
- اختبر سرعة التحميل

### 2. الحفاظ على التناسق
- استخدم نفس المسافات في كل مكان
- احتفظ بنفس الألوان الأساسية
- استخدم نفس أحجام الخطوط

### 3. إمكانية الوصول
- تأكد من تباين الألوان
- أضف نصوص بديلة للصور
- اجعل الموقع قابل للتنقل بلوحة المفاتيح

### 4. الأداء
- قلل من استخدام الحركات المعقدة
- ضغط الصور قبل الاستخدام
- استخدم lazy loading للمحتوى
