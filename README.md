# 📸 LensLight - Fotoğraf Paylaşım Platformu

LensLight, fotoğrafçıların ve fotoğraf tutkunlarının fotoğraflarını paylaşabilecekleri, birbirlerini takip edebilecekleri modern bir web uygulamasıdır.

## 🚀 Özellikler

### 👤 Kullanıcı Yönetimi
- **Kayıt ve Giriş**: Güvenli kullanıcı kaydı ve giriş sistemi
- **Profil Yönetimi**: Kullanıcı profil fotoğrafı yükleme ve düzenleme
- **Takip Sistemi**: Kullanıcıları takip etme ve takipçi olma
- **JWT Token**: Güvenli kimlik doğrulama sistemi

### 📷 Fotoğraf Yönetimi
- **Fotoğraf Yükleme**: Cloudinary entegrasyonu ile güvenli fotoğraf yükleme
- **Fotoğraf Düzenleme**: Fotoğraf başlığı ve açıklaması düzenleme
- **Fotoğraf Silme**: Kullanıcıların kendi fotoğraflarını silme
- **Fotoğraf Görüntüleme**: Tüm fotoğrafları listeleme ve detay görüntüleme

### 🎨 Kullanıcı Arayüzü
- **Responsive Tasarım**: Mobil ve masaüstü uyumlu modern arayüz
- **Bootstrap**: Güzel ve kullanıcı dostu tasarım
- **EJS Template Engine**: Dinamik sayfa oluşturma

### 📧 İletişim
- **İletişim Formu**: Kullanıcıların site yöneticileri ile iletişim kurabilmesi
- **Email Gönderimi**: Nodemailer ile otomatik email gönderimi

## 🛠️ Teknolojiler

### Backend
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web framework
- **MongoDB**: NoSQL veritabanı
- **Mongoose**: MongoDB object modeling
- **JWT**: JSON Web Token kimlik doğrulama
- **bcrypt**: Şifre hashleme
- **Cloudinary**: Bulut tabanlı görsel depolama
- **Nodemailer**: Email gönderimi
- **Express-fileupload**: Dosya yükleme
- **Validator**: Veri doğrulama

### Frontend
- **EJS**: Template engine
- **Bootstrap**: CSS framework
- **jQuery**: JavaScript kütüphanesi
- **Font Awesome**: İkon kütüphanesi

## 📁 Proje Yapısı

```
lenslight_tr/
├── app.js                 # Ana uygulama dosyası
├── db.js                  # Veritabanı bağlantısı
├── package.json           # Proje bağımlılıkları
├── Procfile              # Heroku deployment
├── controller/           # Controller dosyaları
│   ├── pageController.js
│   ├── photoController.js
│   └── userController.js
├── middlewares/          # Middleware dosyaları
│   └── authMiddleware.js
├── models/              # Veritabanı modelleri
│   ├── photoModel.js
│   └── userModel.js
├── routes/              # Route dosyaları
│   ├── pageRoute.js
│   ├── photoRoute.js
│   └── userRoute.js
├── public/              # Statik dosyalar
│   ├── css/
│   ├── js/
│   ├── images/
│   └── fonts/
└── views/               # EJS template dosyaları
    ├── partials/
    ├── index.ejs
    ├── login.ejs
    ├── register.ejs
    └── ...
```

## 🚀 Kurulum

### Gereksinimler
- Node.js (v14 veya üzeri)
- MongoDB
- Cloudinary hesabı

### Adımlar

1. **Projeyi klonlayın**
```bash
git clone <repository-url>
cd lenslight_tr
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
```

3. **Environment değişkenlerini ayarlayın**
`.env` dosyası oluşturun ve aşağıdaki değişkenleri ekleyin:
```env
PORT=3000
DB_URI=mongodb://localhost:27017/lenslight_tr
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_KEY_SECRET=your_cloudinary_api_secret
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password
```

4. **Veritabanını başlatın**
MongoDB servisinizin çalıştığından emin olun.

5. **Uygulamayı başlatın**
```bash
npm start
```

Uygulama `http://localhost:3000` adresinde çalışacaktır.

## 📋 API Endpoints

### Kullanıcı İşlemleri
- `POST /users/register` - Kullanıcı kaydı
- `POST /users/login` - Kullanıcı girişi
- `GET /users/dashboard` - Dashboard sayfası
- `GET /users` - Tüm kullanıcıları listele
- `GET /users/:id` - Belirli kullanıcıyı getir
- `PUT /users/:id/follow` - Kullanıcıyı takip et
- `PUT /users/:id/unfollow` - Kullanıcıyı takipten çık

### Fotoğraf İşlemleri
- `GET /photos` - Tüm fotoğrafları listele
- `POST /photos` - Yeni fotoğraf yükle
- `GET /photos/:id` - Belirli fotoğrafı getir
- `PUT /photos/:id` - Fotoğrafı güncelle
- `DELETE /photos/:id` - Fotoğrafı sil

### Sayfa İşlemleri
- `GET /` - Ana sayfa
- `GET /about` - Hakkında sayfası
- `GET /register` - Kayıt sayfası
- `GET /login` - Giriş sayfası
- `GET /contact` - İletişim sayfası
- `POST /contact` - İletişim formu gönderimi
- `GET /logout` - Çıkış yap

## 🔐 Güvenlik

- **JWT Token**: Güvenli kimlik doğrulama
- **bcrypt**: Şifre hashleme
- **Input Validation**: Giriş verilerinin doğrulanması
- **File Upload Security**: Güvenli dosya yükleme
- **Environment Variables**: Hassas bilgilerin korunması

## 🌐 Deployment

### Heroku
Proje Heroku'ya deploy edilmeye hazırdır. `Procfile` dosyası mevcuttur.

```bash
heroku create your-app-name
git push heroku main
```

### Diğer Platformlar
- Vercel
- Railway
- DigitalOcean
- AWS

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Branch'inizi push edin (`git push origin feature/AmazingFeature`)
5. Pull Request oluşturun

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 👨‍💻 Geliştirici

Bu proje Node.js ve Express.js kullanılarak geliştirilmiştir.



Not = Bu Proje nodejs yapısını  öğrenmek için geliştirilmiştir. 