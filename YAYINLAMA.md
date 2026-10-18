# mertocak.com — yayınlama notları

Bu klasör sitenin tamamıdır. Sunucu, veritabanı ya da derleme adımı gerekmez; dosyaları herhangi bir statik barındırma hizmetine olduğu gibi yükleyin.

## İçerik

| Dosya / klasör | Ne işe yarar |
|---|---|
| `index.html` | Sitenin kendisi (yayın listesi de içindedir) |
| `img/`, `vid/` | Fotoğraflar ve FEA kayıtları |
| `fonts/` | Yazı tipleri (Google'a istek gitmez; KVKK açısından da temiz) |
| `favicon.svg`, `favicon.ico`, `apple-touch-icon.png` | Sekme ve ana ekran simgeleri |
| `og.jpg` | Bağlantı paylaşıldığında görünen önizleme görseli |
| `robots.txt`, `sitemap.xml` | Arama motorları için |
| `404.html` | Bulunamayan sayfalar için |
| `CNAME` | Yalnızca GitHub Pages için (alan adı bilgisi) |

## Önerilen yol: GitHub Pages (ücretsiz, HTTPS dahil)

1. GitHub'da herkese açık yeni bir depo açın (ör. `mertocak.com`).
2. Bu klasördeki **tüm dosyaları** depoya yükleyin (Add file → Upload files).
3. Depoda Settings → Pages: *Deploy from a branch*, dal `main`, klasör `/ (root)`. *Custom domain* alanına `mertocak.com` yazıp kaydedin.
4. Porkbun → mertocak.com → **URL Forwarding** kaydını silin (şu an AVESİS'e yönlendiriyor). Ardından DNS kayıtları:
   - `A` @ → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `AAAA` @ → `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - `CNAME` www → `KULLANICIADINIZ.github.io`
5. DNS yayıldıktan sonra (birkaç dakika–birkaç saat) Pages ayarında **Enforce HTTPS**'i açın.

Alternatifler: Cloudflare Pages ya da Netlify (klasörü sürükle-bırak, ücretsiz) veya Porkbun Static Hosting (ücretli, alan adıyla aynı panel).

## Güncelleme

Yayın, proje veya metin değişikliği için güncel `index.html` dosyasını yeniden yüklemeniz yeterlidir.

## Yayından sonra

- Google Search Console'a `https://mertocak.com` ekleyip `sitemap.xml` gönderin.
- ORCID ve AVESİS profillerinize web sitesi bağlantısı olarak `https://mertocak.com` ekleyin.
