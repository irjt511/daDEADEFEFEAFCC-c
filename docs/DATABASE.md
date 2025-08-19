# دليل قاعدة البيانات - محمد العواضي

## هيكل قاعدة البيانات

### جدول Profile (المعلومات الشخصية)
```typescript
{
  name: string,           // الاسم الكامل
  title: string,          // المسمى الوظيفي
  bio: string,            // النبذة الشخصية
  email: string,          // البريد الإلكتروني
  phone?: string,         // رقم الهاتف (اختياري)
  location: string,       // الموقع الجغرافي
  avatarUrl?: string,     // رابط الصورة الشخصية (اختياري)
  resumeUrl?: string,     // رابط السيرة الذاتية (اختياري)
  socialLinks: {
    tiktok?: string,      // رابط تيك توك
    instagram?: string,   // رابط إنستغرام
    github?: string,      // رابط GitHub
    linkedin?: string,    // رابط LinkedIn
    twitter?: string,     // رابط Twitter
    website?: string,     // الموقع الشخصي
  }
}
```

### جدول Skills (المهارات)
```typescript
{
  name: string,           // اسم المهارة
  category: string,       // الفئة (Frontend, Backend, Database, Tools)
  level: number,          // مستوى الإتقان (1-100)
  icon?: string,          // أيقونة المهارة (اختياري)
}
```

**فئات المهارات المتاحة:**
- **Frontend**: React, Vue.js, Angular, HTML, CSS, JavaScript, TypeScript
- **Backend**: Node.js, Python, PHP, Java, C#, Ruby
- **Database**: MongoDB, MySQL, PostgreSQL, Redis, Firebase
- **Tools**: Git, Docker, AWS, Figma, Photoshop

### جدول Experiences (الخبرات المهنية)
```typescript
{
  company: string,        // اسم الشركة
  position: string,       // المنصب
  startDate: string,      // تاريخ البداية
  endDate?: string,       // تاريخ النهاية (اختياري)
  description: string,    // وصف المهام والإنجازات
  technologies: string[], // قائمة التقنيات المستخدمة
  current: boolean,       // هل العمل مستمر حالياً؟
}
```

### جدول Projects (المشاريع)
```typescript
{
  title: string,          // عنوان المشروع
  description: string,    // وصف المشروع
  technologies: string[], // التقنيات المستخدمة
  imageUrl?: string,      // رابط صورة المشروع (اختياري)
  projectUrl?: string,    // رابط المشروع المباشر (مهم!)
  githubUrl?: string,     // رابط الكود على GitHub (لن يظهر للزوار)
  featured: boolean,      // هل المشروع مميز؟
}
```

**ملاحظة مهمة:** `githubUrl` لن يظهر للزوار. فقط `projectUrl` سيظهر في زر "عرض المشروع".

## أمثلة على البيانات الحالية

### مثال Profile (البيانات الحالية)
```json
{
  "name": "محمد العواضي",
  "title": "مطور ويب محترف",
  "bio": "مطور ويب شغوف بإنشاء تجارب رقمية استثنائية. أحول الأفكار إلى واقع رقمي مذهل باستخدام أحدث التقنيات والأدوات.",
  "email": "mhmed666q@gmail.com",
  "phone": "0533170903",
  "location": "المملكة العربية السعودية",
  "socialLinks": {
    "tiktok": "https://tiktok.com/@username",
    "instagram": "https://instagram.com/username"
  }
}
```

### أمثلة Skills
```json
[
  {
    "name": "React",
    "category": "Frontend",
    "level": 95
  },
  {
    "name": "Node.js",
    "category": "Backend",
    "level": 85
  },
  {
    "name": "MongoDB",
    "category": "Database",
    "level": 82
  },
  {
    "name": "Git",
    "category": "Tools",
    "level": 90
  }
]
```

### أمثلة Experiences
```json
[
  {
    "company": "شركة التقنيات المتقدمة",
    "position": "مطور ويب أول",
    "startDate": "2022",
    "endDate": null,
    "current": true,
    "description": "قيادة فريق تطوير لإنشاء تطبيقات ويب متقدمة باستخدام React و Node.js. تطوير أكثر من 15 مشروع ناجح وتحسين الأداء بنسبة 40%.",
    "technologies": ["React", "Node.js", "TypeScript", "MongoDB", "AWS"]
  },
  {
    "company": "استوديو الإبداع الرقمي",
    "position": "مطور فرونت إند",
    "startDate": "2020",
    "endDate": "2022",
    "current": false,
    "description": "تطوير واجهات مستخدم تفاعلية ومتجاوبة لأكثر من 25 موقع إلكتروني.",
    "technologies": ["React", "Vue.js", "SASS", "JavaScript"]
  }
]
```

### أمثلة Projects
```json
[
  {
    "title": "منصة التجارة الإلكترونية",
    "description": "منصة تجارة إلكترونية متكاملة مع نظام دفع آمن وإدارة المخزون.",
    "technologies": ["React", "Node.js", "MongoDB", "Stripe"],
    "projectUrl": "https://myecommerce.com",
    "featured": true
  },
  {
    "title": "تطبيق إدارة المشاريع",
    "description": "تطبيق ويب لإدارة المشاريع والمهام مع ميزات التعاون الجماعي.",
    "technologies": ["Vue.js", "Express", "PostgreSQL"],
    "projectUrl": "https://myprojectapp.com",
    "featured": false
  }
]
```

## عمليات قاعدة البيانات

### استعلامات القراءة (Queries)
- `getProfile()`: جلب المعلومات الشخصية
- `getSkills()`: جلب جميع المهارات
- `getSkillsByCategory(category)`: جلب المهارات حسب الفئة
- `getExperiences()`: جلب الخبرات المهنية مرتبة حسب التاريخ
- `getProjects()`: جلب جميع المشاريع
- `getFeaturedProjects()`: جلب المشاريع المميزة فقط

### عمليات الكتابة (Mutations)
- `createProfile(data)`: إنشاء ملف شخصي
- `createSkill(data)`: إضافة مهارة جديدة
- `createExperience(data)`: إضافة خبرة مهنية
- `createProject(data)`: إضافة مشروع جديد

## إرشادات خاصة

### 1. رقم الهاتف والواتساب
- استخدم الصيغة السعودية: `0533170903`
- سيتم تحويله تلقائياً إلى: `966533170903` للواتساب
- يعمل مع جميع شركات الاتصالات السعودية

### 2. المشاريع
- **مهم**: `projectUrl` هو الرابط الوحيد الذي سيظهر للزوار
- `githubUrl` مخفي ولن يظهر في الموقع
- المشاريع المميزة (`featured: true`) تظهر بعلامة "مميز"
- إذا لم يكن هناك `projectUrl`، لن يظهر زر "عرض المشروع"

### 3. السيرة الذاتية
- إذا أضفت `resumeUrl`، سيتم توجيه المستخدم إلى هذا الرابط
- إذا تركت `resumeUrl` فارغاً، سيتم إنشاء ملف نصي بسيط
- يمكنك رفع ملف PDF على Google Drive أو Dropbox واستخدام الرابط المباشر

### 4. الصور
- `avatarUrl`: صورة شخصية (اختياري)
- `imageUrl` في المشاريع: صورة للمشروع (اختياري)
- استخدم خدمات مثل Imgur أو Cloudinary للصور

## نصائح لإدارة البيانات

### 1. التنظيم
- استخدم أسماء واضحة ومفهومة
- حافظ على تناسق البيانات
- استخدم التواريخ بصيغة موحدة (مثل: "2022" أو "يناير 2022")

### 2. الأداء
- لا تضع أكثر من 20 مهارة
- احتفظ بـ 3-5 خبرات مهنية فقط
- اعرض 6-8 مشاريع كحد أقصى

### 3. الأمان
- لا تضع معلومات حساسة في قاعدة البيانات
- استخدم روابط آمنة (https) للمشاريع
- تأكد من صحة روابط التواصل الاجتماعي

### 4. الصيانة
- راجع البيانات شهرياً
- حدّث المعلومات عند تغيير الوظيفة
- احذف المشاريع القديمة أو غير المتاحة
- تأكد من عمل جميع الروابط

## أخطاء شائعة وحلولها

### 1. الواتساب لا يعمل
- تأكد من أن رقم الهاتف صحيح
- استخدم الصيغة السعودية: `0533170903`
- لا تضع مسافات أو رموز إضافية

### 2. المشاريع لا تظهر
- تأكد من وجود `projectUrl`
- تأكد من أن الرابط يبدأ بـ `https://`
- تأكد من أن الموقع متاح ويعمل

### 3. السيرة الذاتية لا تتحمل
- إذا كنت تستخدم `resumeUrl`، تأكد من أن الرابط مباشر
- للـ Google Drive، استخدم رابط التحميل المباشر
- إذا تركت `resumeUrl` فارغاً، سيتم إنشاء ملف نصي تلقائياً

### 4. الصور لا تظهر
- تأكد من أن رابط الصورة مباشر
- استخدم خدمات موثوقة مثل Imgur
- تأكد من أن الصورة متاحة للعامة
