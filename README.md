# مشروع CD — تطبيق Android جاهز

هذا المستودع الآن يحتوي على مشروع React (Vite) مهيأ لبناء واجهة في مجلد `www` ثم تغليفها باستخدام Capacitor إلى تطبيق Android.

الخطوات لتشغيل محلياً:

1. انسخ المستودع وتثبيت الاعتمادات:
   git clone https://github.com/oussamakhalid28-commits/cd.git
   cd cd
   npm install

2. لتشغيل بيئة التطوير:
   npm run dev

3. لبناء ملفات الويب إلى مجلد `www`:
   npm run build

4. إضافة منصة Android ومزامنة الأصول:
   npx cap add android
   npx cap sync

5. فتح مشروع Android في Android Studio أو تشغيله مباشرة:
   npx cap open android

ملاحظات:
- تهيئة Capacitor موجودة في `capacitor.config.json` مع `webDir: "www"`.
- إذا أردت إصدار APK/AAB استخدم Android Studio أو أوامر Gradle داخل مجلد `android`.

اقتراحات لاحقة:
- إعداد GitHub Actions لبناء تلقائي على push.
- إعداد ESLint/Prettier وhusky.
- إضافة تكوين signing لتوليد APK موقع.

---

Also keep existing capacitor.config.json as-is (webDir: "www").
