# 🚀 Taha Armanç Bingöl - Kişisel Portföy

> Bitlis Eren Üniversitesi BMU1208 Dersi Final Projesi
> **Kişisel Portföy + Deployment & DevOps**

## 🛠️ Teknoloji Stack

| Kategori | Teknoloji |
|----------|-----------|
| **Frontend** | Astro 5.x (SSG) |
| **Styling** | Vanilla CSS + CSS Variables |
| **Container** | Docker (Multi-stage build) |
| **CI/CD** | GitHub Actions |
| **Deploy** | Fly.io + Hetzner VPS (Coolify) |
| **Güvenlik** | Semgrep, Trivy, Gitleaks |
| **Monitoring** | Better Stack |

## ✨ Özellikler

- 📱 **Tam Responsive** - Mobil, tablet ve masaüstünde mükemmel görünüm
- 🌙 **Dark / Light Mode** - Kullanıcı tercihine göre otomatik tema
- 🌍 **i18n** - Türkçe ve İngilizce dil desteği
- ⚡ **Lighthouse 90+** - Performans, SEO ve erişilebilirlik optimizasyonu
- 🔒 **Güvenlik** - CSP, HTTPS, güvenlik başlıkları
- 🐳 **Docker** - Multi-stage build, ~15MB final image
- 🔄 **CI/CD** - 6 aşamalı otomatik pipeline
- 🌐 **Multi-region** - Edge deployment ile düşük gecikme

## 🚀 Hızlı Başlangıç

### Geliştirme

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Production build
npm run build
```

### Docker

```bash
# Docker ile çalıştır
docker compose up -d

# Tarayıcıda aç
open http://localhost:8080
```

## 📁 Proje Yapısı

```
portfolio/
├── src/
│   ├── components/      # Astro bileşenleri
│   ├── i18n/            # Dil dosyaları (TR/EN)
│   ├── layouts/         # Ana layout
│   ├── pages/           # Sayfalar
│   └── styles/          # Global CSS
├── public/              # Statik dosyalar
├── .github/workflows/   # CI/CD pipeline
├── Dockerfile           # Multi-stage build
├── docker-compose.yml   # Compose yapılandırması
├── fly.toml             # Fly.io yapılandırması
└── nginx.conf           # Nginx yapılandırması
```

## 📊 Bölümler

1. **Hero** - Kişisel tanıtım ve CTA butonları
2. **Projeler** - Sorun-Çözüm-Sonuç formatında proje kartları
3. **Yetenekler** - Kategorize edilmiş skill bar'lar
4. **Deneyim** - Timeline formatında deneyimler
5. **Eğitim** - Akademik geçmiş
6. **Hobiler** - İlgi alanları kartları
7. **İletişim** - İletişim formu ve bilgiler

## 🔒 Güvenlik Pipeline

```
Lint → Gitleaks → Semgrep → Build → Trivy → Deploy
```

## 📝 Lisans

Bu proje eğitim amaçlıdır. © 2026 Taha Armanç Bingöl
