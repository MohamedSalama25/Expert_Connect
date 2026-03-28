# Expert Connect - Comprehensive Project Overview 🚀

هذا الملف يحتوى على تحليل كامل لمشروع **Expert Connect**، ويهدف إلى توضيح الرؤية، المتطلبات التقنية، وهيكل البيانات اللازم للمطورين المسئولين عن بناء الـ **Backend API** وقاعدة البيانات.

---

## 1. فكرة المشروع (Project Concept)
**Expert Connect** هو منصة رقمية تربط بين الخبراء في مختلف المجالات (التكنولوجيا، التسويق، الإدارة، القانون، إلخ) وبين المستخدمين الذين يبحثون عن استشارات مهنية متخصصة. المنصة تتيح للمستخدمين اكتشاف الخبراء، حجز جلسات استشارية (فردية أو جماعية)، الدفع مقابل هذه الجلسات، والتواصل المباشر مع الخبراء.

### الرؤية البرمجية:
المشروع مبني باستخدام **Next.js** (Frontend) ويحتاج إلى **Backend** قوي يدعم العمليات التالية:
*   نظام توثيق (Authentication) متعدد الأدوار.
*   نظام حجز وجدولة متقدم (Availability & Scheduling).
*   نظام دفع إلكتروني (Payments).
*   نظام محادثة فورية (Messaging System).

---

## 2. أنواع المستخدمين (User Roles)

### أ. العميل (Client / User)
*   البحث عن الخبراء بالتصنيف أو الاسم.
*   استعراض الملف الشخصي للخبير وتقييماته.
*   حجز المواعيد حسب المتاح في أجندة الخبير.
*   إدارة الحجوزات السابقة والقادمة.
*   إجراء المدفوعات وترك التقييمات (Reviews).

### ب. الخبير (Expert / Consultant)
*   إنشاء ملف شخصي احترافى (Bio, Skills, Experience).
*   تحديد فترات التوافر (Availability Slots).
*   إدارة طلبات الحجز (قبول/رفض/تأجيل).
*   متابعة الأرباح والتحصيل المالي (Earnings).
*   التواصل مع العملاء.

### ج. المدير (Admin)
*   إدارة التصنيفات (Categories).
*   توثيق حسابات الخبراء (Verification Process).
*   مراقبة العمليات المالية والشكاوى.

---

## 3. المتطلبات الوظيفية (Functional Requirements)

### نظام التوثيق (Auth System)
*   التسجيل والدخول (Email/Password).
*   دعم تسجيل الدخول عبر (Google / LinkedIn).
*   تأكيد البريد الإلكتروني واستعادة كلمة المرور.
*   تحديد نوع الحساب (Client vs Expert) عند التسجيل.

### الملفات الشخصية (Profiles)
*   للخبير: صور، فيديو تعريفي، سنوات خبرة، مهارات، سعر الساعة/الجلسة.
*   للعميل: بيانات أساسية وتاريخ الاستشارات.

### نظام الجدولة (Booking Logic)
*   يحدد الخبير مواعيده (مثلاً: الأحد من 10ص إلى 4م).
*   يقوم النظام بتقسيم هذه الفترة إلى **Slots** (مثلاً كل 30 أو 60 دقيقة).
*   منع الحجز المزدوج (Duplicate Booking) لنفس الساعة.
*   إرسال تنبيهات (Email/Push Notifications) عند الحجز.

### نظام الدفع (Payments)
*   تكامل مع بوابة دفع (Stripe أو Checkout).
*   احتجاز المبلغ (Escrow) حتى إتمام الجلسة (اختياري).
*   خصم عمولة المنصة قبل تحويل المبلغ للخبير.

---

## 4. هيكل قاعدة البيانات (Database Schema Concept)

نوصي باستخدام **PostgreSQL** مع **Prisma ORM**، إليك الجداول المقترحة:

| الجدول (Table) | التوصيف (Description) |
| :--- | :--- |
| **Users** | البيانات الأساسية (id, email, password, role, name, image) |
| **ExpertProfiles** | تفاصيل الخبير (user_id, bio, hourly_rate, title, rating_avg, verified_status) |
| **Categories** | مجالات الخبرة (id, name, slug, icon) |
| **ExpertCategories** | علاقة many-to-many بين الخبراء والتصنيفات |
| **Availability** | مواعيد الخبير (id, expert_id, day_of_week, start_time, end_time) |
| **Bookings** | عمليات الحجز (id, client_id, expert_id, slot_id, status: pending/confirmed/completed, total_price) |
| **Reviews** | التقييمات (id, booking_id, rating, comment) |
| **Payments** | السجلات المالية (id, booking_id, amount, status, transaction_id) |
| **Messages** | نظام المحادثة (id, sender_id, receiver_id, content, is_read) |

---

## 5. واجهة برمجة التطبيقات (API Endpoints Roadmap)

### Auth APIs
- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/logout`

### Expert APIs
- `GET /api/experts` (مع الفلترة حسب الفئة والسعر والتقييم)
- `GET /api/experts/:id` (تفاصيل الخبير)
- `PUT /api/experts/profile` (تحديث الملف الشخصي)
- `GET /api/experts/availability` (جلب المواعيد المتاحة)

### Booking & Consultation APIs
- `POST /api/bookings` (إنشاء حجز جديد)
- `GET /api/bookings/my-appointments` (للعميل)
- `GET /api/bookings/expert-appointments` (للخبير)
- `PATCH /api/bookings/:id/status` (تغيير حالة الحجز)

### Payment APIs
- `POST /api/payments/create-intent`
- `POST /api/payments/webhook` (لاستقبال تأكيد الدفع من Stripe)

---

## 6. المتطلبات التقنية (Tech Stack)

*   **Frontend**: Next.js 14/15, Tailwind CSS, Lucide Icons, Shadcn/UI (Current).
*   **Backend (Recommended)**: Node.js (Express or NestJS).
*   **Database**: PostgreSQL / MySQL.
*   **ORM**: Prisma or TypeORM.
*   **Caching**: Redis (For availability slots).
*   **Realtime**: Socket.io (For chat and notifications).

---

## 7. تعليمات للمطور (Notes for Backend Developer)
1.  يرجى التركيز على **Validation** قوي لكل المدخلات خصوصاً في نظام الدفع والجدولة.
2.  يجب استخدام **JWT** لتأمين المسارات (Protected Routes).
3.  قاعدة البيانات يجب أن تدعم العلاقات (Relations) بشكل جيد لضمان سلامة البيانات (Referential Integrity).
4.  يرجى تقديم التوثيق باستخدام **Swagger** أو **Postman Collections**.

---

**تم إعداد هذا التحليل لمساعدة فريق الباك إند في البدء فوراً في تنفيذ الـ API وربطها بالتصميم الحالي.**
