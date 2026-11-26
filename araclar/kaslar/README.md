# Oyun Tabanlı Kas Öğrenme Simülatörü (OTKÖS)

Üst ve alt ekstremite kaslarının origo, insersiyo, sinir ve hareket bilgisini kısa, karışık turlarla öğretir.
Adres: https://mertocak.com/araclar/kaslar/ · Sürüm 0.1.0 (Aşama 1: motor ve web sürümü).

## Dosyalar

```
index.html        arayüz ve motor (tek dosya, sade JavaScript; dış istek yok)
veri/kaslar.js    kas kayıtları (yalnız dogrulandi: true olanlar kullanılır)
veri/sinirler.js  sinirler, kök değerleri, kökenler
veri/kurallar.js  kural ve istisnalar
veri/setler.js    setler
veri/terimler.js  kısaltmalar, eklem ve hareket adları (TR/EN)
veri/gorseller.js görseller (Aşama 3'te doldurulacak)
```

Yazı tipleri sitenin `fonts/` klasöründen gelir (`../../fonts/`).

## Çalıştırma

Depo kökünde yerel bir sunucu yeterlidir:

```bash
python3 -m http.server 8000
```

Sonra `http://localhost:8000/araclar/kaslar/` açılır. `?dil=en` İngilizce arayüzle açar; `?sinama=1` motoru sınama için `window.KAS_SINAMA` altında dışa açar.

## Oynanış

- Karışık tur: Yeni kaslar (tanışma) → Kart → Dört Kutu → Kim Bu Kas? → Kural ve İstisna → Mini Bulmaca → Yaz → Hız Turu → Düzeltme.
- Her kasın dört bilgisi ayrı izlenir (Leitner, 5 kutu; 1, 2, 4, 8 ve 16 gün). Bir bilgi bir turda en çok bir kutu yükselir.
- Tur puanı: ilk cevapta doğru 1, düzeltmede doğru 0,5 (`AYAR.duzeltmePuani`), hızlı geçiş 0 (`AYAR.hizEsigi`). Kart ve Hız Turu puana girmez.
- İlerleme tarayıcıda `localStorage` anahtarı `kas-ogrenme:v1` altında tutulur; kayıt bozuksa araç sıfırdan başlar.

## Cevap denetimi

- Küçük harf, Türkçe karakter sadeleştirme, noktalama temizliği; `m.`, `n.`, `r.` gibi kısaltmalar açılır.
- Latince ad ve kayıttaki `kabul` listesi kabul edilir; arayüz İngilizceyken İngilizce ad da kabul edilir.
- Çekim eki ya da küçük yazım farkı (8 harfe kadar 1, daha uzun kelimelerde 2 harf) doğru sayılır ve doğru yazılış gösterilir.
- Kısa yazılan cevap yalnız tek bir terimi gösteriyorsa kabul edilir ("n. gluteus" kabul edilmez; "tuberculum majus" kabul edilir).
- Bir sinirin adlandırılmış dalı (`r. …`) ya da `n. interosseus antebrachii anterior/posterior` doğru cevapsa ana sinirin adı da doğru sayılır; dönüşte kesin ad gösterilir.

## Veri

Kayıtlar Gray's Anatomy'nin 43. baskısı (2026) esas alınarak kendi cümlelerimizle yazıldı; her kayıtta sayfa numarası vardır. Kitaptan metin ya da görsel alınmadı. Kayıtları Mert Ocak onayladı. Abduksiyon evrelerinde klasik öğreti kullanılır.

## Lisans

© 2026 Mert Ocak. Tüm hakları saklıdır. Kaynak gösterilerek, ticari olmayan eğitim amaçlı kullanılabilir.

Atıf: Ocak M. Oyun Tabanlı Kas Öğrenme Simülatörü [web aracı]. 2026. https://mertocak.com/araclar/kaslar/

Yazı tipleri (Bricolage Grotesque, Atkinson Hyperlegible Next ve Mono) SIL Open Font License 1.1 ile lisanslıdır; lisans dosyaları `fonts/licenses/` klasöründedir.
