/* © 2026 Mert Ocak. Tüm hakları saklıdır. Oyun Tabanlı Kas Öğrenme Simülatörü — kas verisi (mertocak.com/araclar/kas-ogrenme). TASLAK (Aşama 0, 2026-11-25): yalnız dogrulandi: true olan kayıtlar sette görünür; dosya henüz yayına girmez. Ana kaynak: Gray's Anatomy, 43. baskı (2026); metinler kendi cümlelerimizle yazılmıştır. */
window.KAS_VERI = window.KAS_VERI || {};
window.KAS_VERI.kaslar = [
 {
  "id": "trapezius",
  "ad": {
   "la": "Musculus trapezius",
   "kisa": "m. trapezius",
   "tr": "",
   "en": "Trapezius"
  },
  "bolge": "ust-ekstremite",
  "altBolge": "omuz-kusagi",
  "bolme": "aksiyoapendikuler-arka",
  "setler": [
   "omuz-kusagi"
  ],
  "kitle": [
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "linea nuchalis superior (medial 1/3)",
    "en": "superior nuchal line (medial third)",
    "kemik": "os occipitale"
   },
   {
    "la": "protuberantia occipitalis externa",
    "en": "external occipital protuberance",
    "kemik": "os occipitale"
   },
   {
    "la": "ligamentum nuchae",
    "en": "nuchal ligament",
    "kemik": ""
   },
   {
    "la": "processus spinosi C7–T12 ve ligamenta supraspinalia",
    "en": "spinous processes C7–T12 and supraspinous ligaments",
    "kemik": "vertebrae"
   }
  ],
  "insersiyo": [
   {
    "la": "clavicula (lateral 1/3, arka kenar)",
    "en": "lateral third of clavicle (posterior border)",
    "kemik": "clavicula",
    "not": "pars descendens"
   },
   {
    "la": "acromion (medial kenar) ve spina scapulae (üst dudak)",
    "en": "acromion (medial margin) and spine of scapula (superior lip)",
    "kemik": "scapula",
    "not": "pars transversa"
   },
   {
    "la": "spina scapulae (medial uçtaki tüberkül)",
    "en": "tubercle at medial end of spine of scapula",
    "kemik": "scapula",
    "not": "pars ascendens"
   }
  ],
  "sinir": [
   {
    "id": "n_accessorius",
    "kok": "CN XI",
    "not": "motor"
   },
   {
    "id": "rr_anteriores_c3_c4",
    "kok": "C3–C4",
    "not": "propriyoseptif; bazı motor lifler de bildirilmiştir"
   }
  ],
  "hareket": [
   {
    "eklem": "skapula",
    "hareket": "elevasyon",
    "rol": "ana",
    "not": "pars descendens; m. levator scapulae ile"
   },
   {
    "eklem": "skapula",
    "hareket": "retraksiyon",
    "rol": "ana",
    "not": "mm. rhomboidei ile"
   },
   {
    "eklem": "skapula",
    "hareket": "yukari-rotasyon",
    "rol": "ana",
    "not": "pars ascendens; m. serratus anterior ile — kolun 90°'nin üstüne kaldırılması (hiperabduksiyon)"
   },
   {
    "eklem": "skapula",
    "hareket": "stabilizasyon",
    "rol": "stabilizator",
    "not": "kol hareketlerinde skapulayı sabitler, omuz düzeyini korur"
   },
   {
    "eklem": "boyun",
    "hareket": "ekstansiyon",
    "rol": "yardimci",
    "not": "omuz sabitken başı ve boynu arkaya ve yana eğer"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "latissimus_dorsi"
  ],
  "kurallar": [],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "975–976"
   }
  ],
  "farklar": "Abduksiyon evrelerinde klasik öğreti kullanılır (karar: Mert Ocak, 25 Kasım 2026): 0–15° m. supraspinatus, 15–90° m. deltoideus, 90° üstü m. trapezius ve m. serratus anterior (skapulanın yukarı rotasyonu). Gray's 43 bu ayrımı yapmaz; m. supraspinatus ile m. deltoideus'un başlangıç dahil tüm açıklıkta birlikte çalıştığını yazar (s. 982).",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "levator_scapulae",
  "ad": {
   "la": "Musculus levator scapulae",
   "kisa": "m. levator scapulae",
   "tr": "",
   "en": "Levator scapulae"
  },
  "bolge": "ust-ekstremite",
  "altBolge": "omuz-kusagi",
  "bolme": "aksiyoapendikuler-arka",
  "setler": [
   "omuz-kusagi"
  ],
  "kitle": [
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "processus transversi C1–C2",
    "en": "transverse processes of atlas and axis",
    "kemik": "vertebrae cervicales"
   },
   {
    "la": "tubercula posteriora processuum transversorum C3–C4",
    "en": "posterior tubercles of transverse processes of C3–C4",
    "kemik": "vertebrae cervicales"
   }
  ],
  "insersiyo": [
   {
    "la": "margo medialis scapulae (angulus superior ile spina scapulae kökü arası)",
    "en": "medial border of scapula between superior angle and root of spine",
    "kemik": "scapula"
   }
  ],
  "sinir": [
   {
    "id": "rr_anteriores_c3_c4",
    "kok": "C3–C4",
    "not": "doğrudan dallar"
   },
   {
    "id": "n_dorsalis_scapulae",
    "kok": "C5"
   }
  ],
  "hareket": [
   {
    "eklem": "skapula",
    "hareket": "elevasyon",
    "rol": "ana",
    "not": "m. trapezius ile; omuzda taşınan yükü destekler"
   },
   {
    "eklem": "skapula",
    "hareket": "retraksiyon",
    "rol": "yardimci",
    "not": "mm. rhomboidei ile medial kenarı yukarı ve mediale çeker"
   },
   {
    "eklem": "boyun",
    "hareket": "lateral-fleksiyon",
    "rol": "yardimci",
    "not": "omuz sabitken boynu aynı tarafa eğer"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "rhomboideus_minor"
  ],
  "kurallar": [],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "977"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "rhomboideus_minor",
  "ad": {
   "la": "Musculus rhomboideus minor",
   "kisa": "m. rhomboideus minor",
   "tr": "",
   "en": "Rhomboid minor"
  },
  "bolge": "ust-ekstremite",
  "altBolge": "omuz-kusagi",
  "bolme": "aksiyoapendikuler-arka",
  "setler": [
   "omuz-kusagi"
  ],
  "kitle": [
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "ligamentum nuchae (alt kısım)",
    "en": "lower part of nuchal ligament",
    "kemik": ""
   },
   {
    "la": "processus spinosi C7–T1",
    "en": "spinous processes of C7 and T1",
    "kemik": "vertebrae"
   }
  ],
  "insersiyo": [
   {
    "la": "margo medialis scapulae (spina scapulae kökü hizası)",
    "en": "medial border of scapula at root of spine",
    "kemik": "scapula"
   }
  ],
  "sinir": [
   {
    "id": "n_dorsalis_scapulae",
    "kok": "C4–C5"
   }
  ],
  "hareket": [
   {
    "eklem": "skapula",
    "hareket": "retraksiyon",
    "rol": "ana",
    "not": "m. levator scapulae ile medial kenarı yukarı ve mediale çeker"
   },
   {
    "eklem": "skapula",
    "hareket": "asagi-rotasyon",
    "rol": "ana",
    "not": "m. serratus anterior ve pars ascendens (m. trapezius) karşıtıdır"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "rhomboideus_major"
  ],
  "kurallar": [],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "977"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "rhomboideus_major",
  "ad": {
   "la": "Musculus rhomboideus major",
   "kisa": "m. rhomboideus major",
   "tr": "",
   "en": "Rhomboid major"
  },
  "bolge": "ust-ekstremite",
  "altBolge": "omuz-kusagi",
  "bolme": "aksiyoapendikuler-arka",
  "setler": [
   "omuz-kusagi"
  ],
  "kitle": [
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "processus spinosi T2–T5 ve ligamenta supraspinalia",
    "en": "spinous processes T2–T5 and supraspinous ligaments",
    "kemik": "vertebrae thoracicae"
   }
  ],
  "insersiyo": [
   {
    "la": "margo medialis scapulae (spina scapulae kökü ile angulus inferior arası)",
    "en": "medial border of scapula between root of spine and inferior angle",
    "kemik": "scapula"
   }
  ],
  "sinir": [
   {
    "id": "n_dorsalis_scapulae",
    "kok": "C4–C5"
   }
  ],
  "hareket": [
   {
    "eklem": "skapula",
    "hareket": "retraksiyon",
    "rol": "ana",
    "not": "m. levator scapulae ile medial kenarı yukarı ve mediale çeker"
   },
   {
    "eklem": "skapula",
    "hareket": "asagi-rotasyon",
    "rol": "ana",
    "not": "m. serratus anterior ve pars ascendens (m. trapezius) karşıtıdır"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "rhomboideus_minor"
  ],
  "kurallar": [],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "977"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "latissimus_dorsi",
  "ad": {
   "la": "Musculus latissimus dorsi",
   "kisa": "m. latissimus dorsi",
   "tr": "",
   "en": "Latissimus dorsi"
  },
  "bolge": "ust-ekstremite",
  "altBolge": "omuz-kusagi",
  "bolme": "aksiyoapendikuler-arka",
  "setler": [
   "omuz-kusagi"
  ],
  "kitle": [
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "processus spinosi T7–T12",
    "en": "spinous processes of lower six thoracic vertebrae",
    "kemik": "vertebrae thoracicae"
   },
   {
    "la": "fascia thoracolumbalis (arka yaprak)",
    "en": "thoracolumbar fascia (posterior layer)",
    "kemik": "vertebrae lumbales, sacrum",
    "not": "processus spinosi lumbales ve crista sacralis mediana"
   },
   {
    "la": "crista iliaca (arka kısım)",
    "en": "posterior part of iliac crest",
    "kemik": "os coxae"
   },
   {
    "la": "costae IX/X–XII",
    "en": "lowest three or four ribs",
    "kemik": "costae"
   }
  ],
  "insersiyo": [
   {
    "la": "sulcus intertubercularis humeri (taban)",
    "en": "floor of intertubercular sulcus of humerus",
    "kemik": "humerus",
    "not": "m. teres major tendonunun önünde ve daha yukarıda"
   }
  ],
  "sinir": [
   {
    "id": "n_thoracodorsalis",
    "kok": "C6–C8",
    "not": "ağırlıklı C7; fasciculus posterior"
   }
  ],
  "hareket": [
   {
    "eklem": "omuz",
    "hareket": "ic-rotasyon",
    "rol": "ana"
   },
   {
    "eklem": "omuz",
    "hareket": "adduksiyon",
    "rol": "ana"
   },
   {
    "eklem": "omuz",
    "hareket": "ekstansiyon",
    "rol": "ana"
   },
   {
    "eklem": "govde",
    "hareket": "tirmanma",
    "rol": "yardimci",
    "not": "kollar baş üstünde sabitken gövdeyi yukarı ve öne çeker"
   },
   {
    "eklem": "toraks",
    "hareket": "zorlu-ekspirasyon",
    "rol": "yardimci",
    "not": "öksürme ve hapşırmada aktif"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "teres_major",
   "trapezius"
  ],
  "kurallar": [],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "980–982"
   }
  ],
  "farklar": "Angulus inferior scapulae'ye tutunma değişkendir (Gray's 43, s. 980).",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "serratus_anterior",
  "ad": {
   "la": "Musculus serratus anterior",
   "kisa": "m. serratus anterior",
   "tr": "",
   "en": "Serratus anterior"
  },
  "bolge": "ust-ekstremite",
  "altBolge": "omuz-kusagi",
  "bolme": "aksiyoapendikuler-on",
  "setler": [
   "omuz-kusagi"
  ],
  "kitle": [
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "costae I–VIII/X (dış yüz ve üst kenar)",
    "en": "outer surfaces and superior borders of upper 8–10 ribs",
    "kemik": "costae"
   }
  ],
  "insersiyo": [
   {
    "la": "margo medialis scapulae (facies costalis)",
    "en": "costal surface of medial border of scapula",
    "kemik": "scapula"
   },
   {
    "la": "angulus superior ve angulus inferior scapulae",
    "en": "superior and inferior angles of scapula",
    "kemik": "scapula",
    "not": "alt 4–5 dişlenme angulus inferior'da toplanır"
   }
  ],
  "sinir": [
   {
    "id": "n_thoracicus_longus",
    "kok": "C5–C7"
   }
  ],
  "hareket": [
   {
    "eklem": "skapula",
    "hareket": "protraksiyon",
    "rol": "ana",
    "not": "uzanma ve itme hareketleri; m. pectoralis minor ile"
   },
   {
    "eklem": "skapula",
    "hareket": "yukari-rotasyon",
    "rol": "ana",
    "not": "alt lifler angulus inferior'u öne çeker; m. trapezius ile — kolun 90°'nin üstüne kaldırılması (hiperabduksiyon)"
   },
   {
    "eklem": "skapula",
    "hareket": "stabilizasyon",
    "rol": "stabilizator",
    "not": "abduksiyonun başında skapulayı sabitler; m. deltoideus humerus'a etkir"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [],
  "kurallar": [],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "978"
   }
  ],
  "farklar": "Abduksiyon evrelerinde klasik öğreti kullanılır (karar: Mert Ocak, 25 Kasım 2026): 0–15° m. supraspinatus, 15–90° m. deltoideus, 90° üstü m. trapezius ve m. serratus anterior (skapulanın yukarı rotasyonu). Gray's 43 bu ayrımı yapmaz; m. supraspinatus ile m. deltoideus'un başlangıç dahil tüm açıklıkta birlikte çalıştığını yazar (s. 982).",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "pectoralis_major",
  "ad": {
   "la": "Musculus pectoralis major",
   "kisa": "m. pectoralis major",
   "tr": "",
   "en": "Pectoralis major"
  },
  "bolge": "ust-ekstremite",
  "altBolge": "omuz-kusagi",
  "bolme": "aksiyoapendikuler-on",
  "setler": [
   "omuz-kusagi"
  ],
  "kitle": [
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "clavicula (sternal yarı, ön yüz)",
    "en": "anterior surface of sternal half of clavicle",
    "kemik": "clavicula",
    "not": "pars clavicularis"
   },
   {
    "la": "sternum (ön yüz) ve cartilagines costales I–VII",
    "en": "anterior surface of sternum and costal cartilages 1–7",
    "kemik": "sternum, costae",
    "not": "pars sternocostalis; 1. ve 7. kıkırdak çoğu kez katılmaz"
   },
   {
    "la": "aponeurosis musculi obliqui externi abdominis",
    "en": "aponeurosis of external abdominal oblique",
    "kemik": "",
    "not": "pars abdominalis; bazen yoktur"
   }
  ],
  "insersiyo": [
   {
    "la": "crista tuberculi majoris humeri",
    "en": "crest of greater tubercle of humerus",
    "kemik": "humerus",
    "not": "iki yapraklı tendon"
   }
  ],
  "sinir": [
   {
    "id": "n_pectoralis_lateralis",
    "kok": "C5–T1",
    "not": "pars clavicularis lifleri C5–C6"
   },
   {
    "id": "n_pectoralis_medialis",
    "kok": "C5–T1",
    "not": "pars sternocostalis lifleri C7–T1"
   }
  ],
  "hareket": [
   {
    "eklem": "omuz",
    "hareket": "adduksiyon",
    "rol": "ana"
   },
   {
    "eklem": "omuz",
    "hareket": "ic-rotasyon",
    "rol": "ana"
   },
   {
    "eklem": "omuz",
    "hareket": "fleksiyon",
    "rol": "ana",
    "not": "pars clavicularis; m. deltoideus'un ön lifleri ve m. coracobrachialis ile"
   },
   {
    "eklem": "omuz",
    "hareket": "ekstansiyon",
    "rol": "yardimci",
    "not": "pars sternocostalis; fleksiyondaki kolu dirence karşı geri getirir"
   },
   {
    "eklem": "toraks",
    "hareket": "zorlu-inspirasyon",
    "rol": "yardimci",
    "not": "derin inspirasyonda aktif"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "pectoralis_minor"
  ],
  "kurallar": [],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "978–979"
   }
  ],
  "farklar": "Gray's 43 kök değerini sinire göre değil başa göre verir: pars clavicularis C5–C6, pars sternocostalis C7–T1.",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "pectoralis_minor",
  "ad": {
   "la": "Musculus pectoralis minor",
   "kisa": "m. pectoralis minor",
   "tr": "",
   "en": "Pectoralis minor"
  },
  "bolge": "ust-ekstremite",
  "altBolge": "omuz-kusagi",
  "bolme": "aksiyoapendikuler-on",
  "setler": [
   "omuz-kusagi"
  ],
  "kitle": [
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "costae III–V (dış yüz ve üst kenar, kıkırdaklara yakın)",
    "en": "ribs 3–5 near their costal cartilages",
    "kemik": "costae",
    "not": "sıklıkla II–IV"
   }
  ],
  "insersiyo": [
   {
    "la": "processus coracoideus (medial kenar ve üst yüz)",
    "en": "coracoid process (medial border and superior surface)",
    "kemik": "scapula"
   }
  ],
  "sinir": [
   {
    "id": "n_pectoralis_medialis",
    "kok": "C5–T1"
   },
   {
    "id": "n_pectoralis_lateralis",
    "kok": "C5–T1"
   }
  ],
  "hareket": [
   {
    "eklem": "skapula",
    "hareket": "protraksiyon",
    "rol": "yardimci",
    "not": "m. serratus anterior ile skapulayı göğüs duvarı çevresinde öne çeker"
   },
   {
    "eklem": "skapula",
    "hareket": "depresyon",
    "rol": "ana",
    "not": "omuz ucunu aşağı çeker"
   },
   {
    "eklem": "skapula",
    "hareket": "asagi-rotasyon",
    "rol": "yardimci",
    "not": "m. levator scapulae ve mm. rhomboidei ile"
   },
   {
    "eklem": "toraks",
    "hareket": "zorlu-inspirasyon",
    "rol": "yardimci",
    "not": "zorlu inspirasyonda aktif"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "pectoralis_major"
  ],
  "kurallar": [],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "976"
   }
  ],
  "farklar": "Gray's 43 iki sinir için toplam kök değeri verir (C5–T1); kaburga tutunması değişkendir (II–V arası).",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "subclavius",
  "ad": {
   "la": "Musculus subclavius",
   "kisa": "m. subclavius",
   "tr": "",
   "en": "Subclavius"
  },
  "bolge": "ust-ekstremite",
  "altBolge": "omuz-kusagi",
  "bolme": "aksiyoapendikuler-on",
  "setler": [
   "omuz-kusagi"
  ],
  "kitle": [
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "costa I ile kıkırdağının birleşim yeri",
    "en": "junction of first rib and its costal cartilage",
    "kemik": "costa I"
   }
  ],
  "insersiyo": [
   {
    "la": "clavicula (orta 1/3, alt yüzdeki oluk)",
    "en": "groove on inferior surface of middle third of clavicle",
    "kemik": "clavicula"
   }
  ],
  "sinir": [
   {
    "id": "n_subclavius",
    "kok": "C5–C6"
   }
  ],
  "hareket": [
   {
    "eklem": "klavikula",
    "hareket": "stabilizasyon",
    "rol": "stabilizator",
    "not": "omuz kuşağı yükselirken klavikulanın elevasyon ve rotasyonunu frenler; klavikulanın medial ucunu art. sternoclavicularis'e bastırır"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [],
  "kurallar": [],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "976"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "deltoideus",
  "ad": {
   "la": "Musculus deltoideus",
   "kisa": "m. deltoideus",
   "tr": "",
   "en": "Deltoid"
  },
  "bolge": "ust-ekstremite",
  "altBolge": "omuz",
  "bolme": "skapulohumeral",
  "setler": [
   "omuz"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "clavicula (lateral 1/3, ön kenar ve üst yüz)",
    "en": "lateral third of clavicle",
    "kemik": "clavicula",
    "not": "pars clavicularis"
   },
   {
    "la": "acromion (lateral kenar ve üst yüz)",
    "en": "acromion",
    "kemik": "scapula",
    "not": "pars acromialis"
   },
   {
    "la": "spina scapulae (alt kenar)",
    "en": "spine of scapula (inferior edge)",
    "kemik": "scapula",
    "not": "pars spinalis"
   }
  ],
  "insersiyo": [
   {
    "la": "tuberositas deltoidea humeri",
    "en": "deltoid tuberosity of humerus",
    "kemik": "humerus"
   }
  ],
  "sinir": [
   {
    "id": "n_axillaris",
    "kok": "C5–C6"
   }
  ],
  "hareket": [
   {
    "eklem": "omuz",
    "hareket": "abduksiyon",
    "rol": "ana",
    "not": "15–90°; pars acromialis"
   },
   {
    "eklem": "omuz",
    "hareket": "fleksiyon",
    "rol": "ana",
    "not": "ön lifler; m. pectoralis major ile"
   },
   {
    "eklem": "omuz",
    "hareket": "ic-rotasyon",
    "rol": "yardimci",
    "not": "ön lifler"
   },
   {
    "eklem": "omuz",
    "hareket": "ekstansiyon",
    "rol": "ana",
    "not": "arka lifler; m. latissimus dorsi ve m. teres major ile"
   },
   {
    "eklem": "omuz",
    "hareket": "dis-rotasyon",
    "rol": "yardimci",
    "not": "arka lifler"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [],
  "kurallar": [],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "979–980"
   }
  ],
  "farklar": "Abduksiyon evrelerinde klasik öğreti kullanılır (karar: Mert Ocak, 25 Kasım 2026): 0–15° m. supraspinatus, 15–90° m. deltoideus, 90° üstü m. trapezius ve m. serratus anterior (skapulanın yukarı rotasyonu). Gray's 43 bu ayrımı yapmaz; m. supraspinatus ile m. deltoideus'un başlangıç dahil tüm açıklıkta birlikte çalıştığını yazar (s. 982).",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "supraspinatus",
  "ad": {
   "la": "Musculus supraspinatus",
   "kisa": "m. supraspinatus",
   "tr": "",
   "en": "Supraspinatus"
  },
  "bolge": "ust-ekstremite",
  "altBolge": "omuz",
  "bolme": "skapulohumeral",
  "setler": [
   "rotator-manset",
   "omuz"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "fossa supraspinata (medial 2/3)",
    "en": "supraspinous fossa (medial two-thirds)",
    "kemik": "scapula",
    "not": "ayrıca fascia supraspinata"
   }
  ],
  "insersiyo": [
   {
    "la": "tuberculum majus humeri",
    "en": "greater tubercle of humerus",
    "kemik": "humerus",
    "not": "üst faset"
   }
  ],
  "sinir": [
   {
    "id": "n_suprascapularis",
    "kok": "C5–C6"
   }
  ],
  "hareket": [
   {
    "eklem": "omuz",
    "hareket": "abduksiyon",
    "rol": "baslatici",
    "not": "ilk 15°; abduksiyonu başlatır"
   },
   {
    "eklem": "omuz",
    "hareket": "stabilizasyon",
    "rol": "stabilizator",
    "not": "rotator manşet: caput humeri'yi cavitas glenoidalis'te tutar"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "infraspinatus"
  ],
  "kurallar": [
   "rotator-manset"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "SİTS: supraspinatus, infraspinatus, teres minor, subscapularis.",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "982"
   }
  ],
  "farklar": "Abduksiyon evrelerinde klasik öğreti kullanılır (karar: Mert Ocak, 25 Kasım 2026): 0–15° m. supraspinatus, 15–90° m. deltoideus, 90° üstü m. trapezius ve m. serratus anterior (skapulanın yukarı rotasyonu). Gray's 43 bu ayrımı yapmaz; m. supraspinatus ile m. deltoideus'un başlangıç dahil tüm açıklıkta birlikte çalıştığını yazar (s. 982).",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "infraspinatus",
  "ad": {
   "la": "Musculus infraspinatus",
   "kisa": "m. infraspinatus",
   "tr": "",
   "en": "Infraspinatus"
  },
  "bolge": "ust-ekstremite",
  "altBolge": "omuz",
  "bolme": "skapulohumeral",
  "setler": [
   "rotator-manset",
   "omuz"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "fossa infraspinata (medial 2/3)",
    "en": "infraspinous fossa (medial two-thirds)",
    "kemik": "scapula",
    "not": "ayrıca fascia infraspinata"
   }
  ],
  "insersiyo": [
   {
    "la": "tuberculum majus humeri",
    "en": "greater tubercle of humerus",
    "kemik": "humerus",
    "not": "orta faset"
   }
  ],
  "sinir": [
   {
    "id": "n_suprascapularis",
    "kok": "C5–C6"
   }
  ],
  "hareket": [
   {
    "eklem": "omuz",
    "hareket": "dis-rotasyon",
    "rol": "ana"
   },
   {
    "eklem": "omuz",
    "hareket": "stabilizasyon",
    "rol": "stabilizator",
    "not": "rotator manşet"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "supraspinatus",
   "teres_minor"
  ],
  "kurallar": [
   "rotator-manset"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "982"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "teres_minor",
  "ad": {
   "la": "Musculus teres minor",
   "kisa": "m. teres minor",
   "tr": "",
   "en": "Teres minor"
  },
  "bolge": "ust-ekstremite",
  "altBolge": "omuz",
  "bolme": "skapulohumeral",
  "setler": [
   "rotator-manset",
   "omuz"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "margo lateralis scapulae (arka yüz, üst 2/3)",
    "en": "posterior surface of scapula adjoining lateral border (upper two-thirds)",
    "kemik": "scapula"
   }
  ],
  "insersiyo": [
   {
    "la": "tuberculum majus humeri",
    "en": "greater tubercle of humerus",
    "kemik": "humerus",
    "not": "alt faset; alt lifler hemen distaline"
   }
  ],
  "sinir": [
   {
    "id": "n_axillaris",
    "kok": "C5–C6"
   }
  ],
  "hareket": [
   {
    "eklem": "omuz",
    "hareket": "dis-rotasyon",
    "rol": "ana"
   },
   {
    "eklem": "omuz",
    "hareket": "adduksiyon",
    "rol": "yardimci",
    "not": "zayıf"
   },
   {
    "eklem": "omuz",
    "hareket": "stabilizasyon",
    "rol": "stabilizator",
    "not": "rotator manşet"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "teres_major",
   "infraspinatus"
  ],
  "kurallar": [
   "rotator-manset"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "983"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "subscapularis",
  "ad": {
   "la": "Musculus subscapularis",
   "kisa": "m. subscapularis",
   "tr": "",
   "en": "Subscapularis"
  },
  "bolge": "ust-ekstremite",
  "altBolge": "omuz",
  "bolme": "skapulohumeral",
  "setler": [
   "rotator-manset",
   "omuz"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "fossa subscapularis (medial 2/3)",
    "en": "subscapular fossa (medial two-thirds)",
    "kemik": "scapula"
   }
  ],
  "insersiyo": [
   {
    "la": "tuberculum minus humeri",
    "en": "lesser tubercle of humerus",
    "kemik": "humerus",
    "not": "ayrıca eklem kapsülünün ön kısmı"
   }
  ],
  "sinir": [
   {
    "id": "n_subscapularis_superior",
    "kok": "C5–C6"
   },
   {
    "id": "n_subscapularis_inferior",
    "kok": "C5–C6"
   }
  ],
  "hareket": [
   {
    "eklem": "omuz",
    "hareket": "ic-rotasyon",
    "rol": "ana"
   },
   {
    "eklem": "omuz",
    "hareket": "stabilizasyon",
    "rol": "stabilizator",
    "not": "rotator manşet"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [],
  "kurallar": [
   "rotator-manset"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "983"
   }
  ],
  "farklar": "Kas paragrafı kök değerini C5–C6 verir (s. 983); rotator manşet giriş paragrafı nn. subscapulares için C5–C7 yazar (s. 982).",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "teres_major",
  "ad": {
   "la": "Musculus teres major",
   "kisa": "m. teres major",
   "tr": "",
   "en": "Teres major"
  },
  "bolge": "ust-ekstremite",
  "altBolge": "omuz",
  "bolme": "skapulohumeral",
  "setler": [
   "omuz"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "angulus inferior scapulae (arka yüz)",
    "en": "posterior surface of inferior angle of scapula",
    "kemik": "scapula"
   }
  ],
  "insersiyo": [
   {
    "la": "crista tuberculi minoris humeri",
    "en": "crest of lesser tubercle of humerus",
    "kemik": "humerus",
    "not": "sulcus intertubercularis'in medial dudağı; m. latissimus dorsi tendonunun arkasında"
   }
  ],
  "sinir": [
   {
    "id": "n_subscapularis_inferior",
    "kok": "C5–C7"
   }
  ],
  "hareket": [
   {
    "eklem": "omuz",
    "hareket": "ekstansiyon",
    "rol": "ana",
    "not": "humerus'u arkaya çeker"
   },
   {
    "eklem": "omuz",
    "hareket": "ic-rotasyon",
    "rol": "ana"
   },
   {
    "eklem": "omuz",
    "hareket": "adduksiyon",
    "rol": "yardimci",
    "not": "dirence karşı; m. latissimus dorsi ve m. pectoralis major ile"
   },
   {
    "eklem": "omuz",
    "hareket": "stabilizasyon",
    "rol": "stabilizator",
    "not": "kol yukarıdayken caput humeri'yi merkezler; işlevsel olarak rotator manşet üyesi sayılır"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "teres_minor",
   "latissimus_dorsi"
  ],
  "kurallar": [],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "983"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "biceps_brachii",
  "ad": {
   "la": "Musculus biceps brachii",
   "kisa": "m. biceps brachii",
   "tr": "",
   "en": "Biceps brachii"
  },
  "bolge": "ust-ekstremite",
  "altBolge": "kol",
  "bolme": "on",
  "setler": [
   "kol"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "tuberculum supraglenoidale",
    "en": "supraglenoid tubercle",
    "kemik": "scapula",
    "not": "caput longum; labrum glenoidale ile devamlıdır"
   },
   {
    "la": "processus coracoideus (tepe)",
    "en": "apex of coracoid process",
    "kemik": "scapula",
    "not": "caput breve"
   }
  ],
  "insersiyo": [
   {
    "la": "tuberositas radii (arka kısım)",
    "en": "radial tuberosity (posterior part)",
    "kemik": "radius"
   },
   {
    "la": "aponeurosis bicipitalis",
    "en": "bicipital aponeurosis",
    "kemik": "",
    "not": "ön kol fasyasına karışır"
   }
  ],
  "sinir": [
   {
    "id": "n_musculocutaneus",
    "kok": "C5–C6"
   }
  ],
  "hareket": [
   {
    "eklem": "on-kol",
    "hareket": "supinasyon",
    "rol": "ana",
    "not": "özellikle hızlı ve dirençli harekette"
   },
   {
    "eklem": "dirsek",
    "hareket": "fleksiyon",
    "rol": "ana",
    "not": "ön kol supinasyondayken en etkili"
   },
   {
    "eklem": "omuz",
    "hareket": "fleksiyon",
    "rol": "yardimci",
    "not": "hafif"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "brachialis"
  ],
  "kurallar": [
   "kol-on"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "983–985"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "brachialis",
  "ad": {
   "la": "Musculus brachialis",
   "kisa": "m. brachialis",
   "tr": "",
   "en": "Brachialis"
  },
  "bolge": "ust-ekstremite",
  "altBolge": "kol",
  "bolme": "on",
  "setler": [
   "kol"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "corpus humeri (ön yüz, distal yarı)",
    "en": "anterior surface of distal half of humerus",
    "kemik": "humerus"
   },
   {
    "la": "septa intermuscularia brachii",
    "en": "intermuscular septa of arm",
    "kemik": "",
    "not": "medialden daha çok"
   }
  ],
  "insersiyo": [
   {
    "la": "tuberositas ulnae",
    "en": "ulnar tuberosity",
    "kemik": "ulna"
   },
   {
    "la": "processus coronoideus (ön yüz)",
    "en": "coronoid process (anterior aspect)",
    "kemik": "ulna"
   }
  ],
  "sinir": [
   {
    "id": "n_musculocutaneus",
    "kok": "C5–C6",
    "not": "büyük medial kısım"
   },
   {
    "id": "n_radialis",
    "kok": "C7",
    "not": "küçük lateral kısım; sık ama değişken"
   }
  ],
  "hareket": [
   {
    "eklem": "dirsek",
    "hareket": "fleksiyon",
    "rol": "ana",
    "not": "ön kol pronasyonda da supinasyonda da; dirsek ekleminin asıl fleksörü"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "biceps_brachii"
  ],
  "kurallar": [
   "kol-on"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "984–985"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "coracobrachialis",
  "ad": {
   "la": "Musculus coracobrachialis",
   "kisa": "m. coracobrachialis",
   "tr": "",
   "en": "Coracobrachialis"
  },
  "bolge": "ust-ekstremite",
  "altBolge": "kol",
  "bolme": "on",
  "setler": [
   "kol"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "processus coracoideus (tepe)",
    "en": "apex of coracoid process",
    "kemik": "scapula",
    "not": "m. biceps brachii caput breve ile ortak"
   }
  ],
  "insersiyo": [
   {
    "la": "corpus humeri (medial kenar, orta kısım)",
    "en": "medial border of humeral body (midway)",
    "kemik": "humerus",
    "not": "m. deltoideus insersiyosunun karşısında"
   }
  ],
  "sinir": [
   {
    "id": "n_musculocutaneus",
    "kok": "C5–C7"
   }
  ],
  "hareket": [
   {
    "eklem": "omuz",
    "hareket": "fleksiyon",
    "rol": "ana",
    "not": "kolu öne ve mediale çeker"
   },
   {
    "eklem": "omuz",
    "hareket": "adduksiyon",
    "rol": "ana",
    "not": "m. deltoideus'un antagonisti"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [],
  "kurallar": [
   "kol-on"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "980"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "triceps_brachii",
  "ad": {
   "la": "Musculus triceps brachii",
   "kisa": "m. triceps brachii",
   "tr": "",
   "en": "Triceps brachii"
  },
  "bolge": "ust-ekstremite",
  "altBolge": "kol",
  "bolme": "arka",
  "setler": [
   "kol"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "tuberculum infraglenoidale",
    "en": "infraglenoid tubercle",
    "kemik": "scapula",
    "not": "caput longum"
   },
   {
    "la": "corpus humeri (arka yüz, sulcus nervi radialis'in üstünde)",
    "en": "posterior surface of humerus above radial groove",
    "kemik": "humerus",
    "not": "caput laterale; ayrıca septum intermusculare laterale"
   },
   {
    "la": "corpus humeri (arka yüz, sulcus nervi radialis'in altında)",
    "en": "posterior surface of humerus below radial groove",
    "kemik": "humerus",
    "not": "caput mediale; ayrıca septum intermusculare mediale"
   }
  ],
  "insersiyo": [
   {
    "la": "olecranon (üst yüz)",
    "en": "proximal surface of olecranon",
    "kemik": "ulna",
    "not": "bir bant ön kol fasyasına uzanır"
   }
  ],
  "sinir": [
   {
    "id": "n_radialis",
    "kok": "C6–C8",
    "not": "caput laterale C6, caput longum C7, caput mediale C8"
   }
  ],
  "hareket": [
   {
    "eklem": "dirsek",
    "hareket": "ekstansiyon",
    "rol": "ana",
    "not": "caput mediale her tür ekstansiyonda aktif"
   },
   {
    "eklem": "omuz",
    "hareket": "ekstansiyon",
    "rol": "yardimci",
    "not": "caput longum"
   },
   {
    "eklem": "omuz",
    "hareket": "adduksiyon",
    "rol": "yardimci",
    "not": "caput longum"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "anconeus"
  ],
  "kurallar": [
   "kol-on-kol-arka"
  ],
  "yanilgilar": [
   {
    "alan": "hareket",
    "yanlis": "dirseğin tek ekstansörü",
    "donus": "m. triceps brachii dirseğin asıl ekstansörüdür ama tek ekstansörü değildir; m. anconeus da ekstansiyona katılır."
   }
  ],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "985"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "pronator_teres",
  "ad": {
   "la": "Musculus pronator teres",
   "kisa": "m. pronator teres",
   "tr": "",
   "en": "Pronator teres"
  },
  "bolge": "ust-ekstremite",
  "altBolge": "on-kol",
  "bolme": "on-yuzeyel",
  "setler": [
   "on-kol-on"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "crista supracondylaris medialis ve epicondylus medialis humeri",
    "en": "medial supracondylar ridge and medial epicondyle (common flexor tendon)",
    "kemik": "humerus",
    "not": "caput humerale (yüzeyel, büyük)"
   },
   {
    "la": "processus coronoideus (medial yüz)",
    "en": "medial side of coronoid process",
    "kemik": "ulna",
    "not": "caput ulnare (derin, küçük; bazen yoktur)"
   }
  ],
  "insersiyo": [
   {
    "la": "corpus radii (lateral yüz, orta kısım)",
    "en": "lateral surface of radial body (midway)",
    "kemik": "radius"
   }
  ],
  "sinir": [
   {
    "id": "n_medianus",
    "kok": "C6–C7"
   }
  ],
  "hareket": [
   {
    "eklem": "on-kol",
    "hareket": "pronasyon",
    "rol": "ana",
    "not": "hızlı ve dirençli pronasyonda m. pronator quadratus'a katılır"
   },
   {
    "eklem": "dirsek",
    "hareket": "fleksiyon",
    "rol": "yardimci",
    "not": "zayıf"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "pronator_quadratus"
  ],
  "kurallar": [
   "on-kol-on"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1008"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "flexor_carpi_radialis",
  "ad": {
   "la": "Musculus flexor carpi radialis",
   "kisa": "m. flexor carpi radialis",
   "tr": "",
   "en": "Flexor carpi radialis"
  },
  "bolge": "ust-ekstremite",
  "altBolge": "on-kol",
  "bolme": "on-yuzeyel",
  "setler": [
   "on-kol-on"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "epicondylus medialis humeri",
    "en": "medial epicondyle of humerus (common flexor origin)",
    "kemik": "humerus",
    "not": "ortak fleksör başlangıç"
   }
  ],
  "insersiyo": [
   {
    "la": "basis ossis metacarpi II (palmar yüz)",
    "en": "palmar surface of base of second metacarpal",
    "kemik": "os metacarpi II"
   },
   {
    "la": "basis ossis metacarpi III",
    "en": "base of third metacarpal",
    "kemik": "os metacarpi III",
    "not": "ek uzantı"
   }
  ],
  "sinir": [
   {
    "id": "n_medianus",
    "kok": "C6–C7"
   }
  ],
  "hareket": [
   {
    "eklem": "el-bilegi",
    "hareket": "fleksiyon",
    "rol": "ana",
    "not": "m. flexor carpi ulnaris ile dengeli fleksiyon"
   },
   {
    "eklem": "el-bilegi",
    "hareket": "abduksiyon",
    "rol": "yardimci",
    "not": "radial ekstansörlerle birlikte (radial deviasyon)"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "flexor_carpi_ulnaris"
  ],
  "kurallar": [
   "on-kol-on"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1008–1009"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "palmaris_longus",
  "ad": {
   "la": "Musculus palmaris longus",
   "kisa": "m. palmaris longus",
   "tr": "",
   "en": "Palmaris longus"
  },
  "bolge": "ust-ekstremite",
  "altBolge": "on-kol",
  "bolme": "on-yuzeyel",
  "setler": [
   "on-kol-on"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "epicondylus medialis humeri",
    "en": "medial epicondyle of humerus (common flexor origin)",
    "kemik": "humerus",
    "not": "ortak fleksör başlangıç"
   }
  ],
  "insersiyo": [
   {
    "la": "aponeurosis palmaris",
    "en": "palmar aponeurosis",
    "kemik": "",
    "not": "retinaculum musculorum flexorum'un önünden geçer; birkaç lif retinakuluma karışır"
   }
  ],
  "sinir": [
   {
    "id": "n_medianus",
    "kok": "C7–C8"
   }
  ],
  "hareket": [
   {
    "eklem": "el-bilegi",
    "hareket": "fleksiyon",
    "rol": "yardimci",
    "not": "zayıf"
   },
   {
    "eklem": "el",
    "hareket": "stabilizasyon",
    "rol": "stabilizator",
    "not": "avuç derisini ve fasyasını yatay kayma kuvvetlerine karşı sabitler"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [],
  "kurallar": [
   "on-kol-on"
  ],
  "yanilgilar": [],
  "klinik": "Bir ya da iki tarafta bulunmayabilir.",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1010"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "tek-tek"
 },
 {
  "id": "flexor_carpi_ulnaris",
  "ad": {
   "la": "Musculus flexor carpi ulnaris",
   "kisa": "m. flexor carpi ulnaris",
   "tr": "",
   "en": "Flexor carpi ulnaris"
  },
  "bolge": "ust-ekstremite",
  "altBolge": "on-kol",
  "bolme": "on-yuzeyel",
  "setler": [
   "on-kol-on"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "epicondylus medialis humeri",
    "en": "medial epicondyle of humerus (common flexor origin)",
    "kemik": "humerus",
    "not": "caput humerale (küçük)"
   },
   {
    "la": "olecranon (medial kenar) ve margo posterior ulnae (proksimal 2/3)",
    "en": "medial margin of olecranon and proximal two-thirds of posterior border of ulna",
    "kemik": "ulna",
    "not": "caput ulnare"
   }
  ],
  "insersiyo": [
   {
    "la": "os pisiforme",
    "en": "pisiform",
    "kemik": "os pisiforme"
   },
   {
    "la": "os hamatum ve basis ossis metacarpi V",
    "en": "hamate and base of fifth metacarpal",
    "kemik": "os hamatum, os metacarpi V",
    "not": "lig. pisohamatum ve lig. pisometacarpale aracılığıyla"
   }
  ],
  "sinir": [
   {
    "id": "n_ulnaris",
    "kok": "C7–T1"
   }
  ],
  "hareket": [
   {
    "eklem": "el-bilegi",
    "hareket": "fleksiyon",
    "rol": "ana",
    "not": "m. flexor carpi radialis ile dengeli fleksiyon"
   },
   {
    "eklem": "el-bilegi",
    "hareket": "adduksiyon",
    "rol": "ana",
    "not": "m. extensor carpi ulnaris ile (ulnar deviasyon)"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "flexor_carpi_radialis",
   "extensor_carpi_ulnaris"
  ],
  "kurallar": [
   "on-kol-on"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1010–1011"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "flexor_digitorum_superficialis",
  "ad": {
   "la": "Musculus flexor digitorum superficialis",
   "kisa": "m. flexor digitorum superficialis",
   "tr": "",
   "en": "Flexor digitorum superficialis"
  },
  "bolge": "ust-ekstremite",
  "altBolge": "on-kol",
  "bolme": "on-yuzeyel",
  "setler": [
   "on-kol-on"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "epicondylus medialis humeri ve processus coronoideus (medial yüz)",
    "en": "medial epicondyle of humerus and medial side of coronoid process",
    "kemik": "humerus, ulna",
    "not": "caput humeroulnare; ayrıca lig. collaterale ulnare"
   },
   {
    "la": "margo anterior radii",
    "en": "anterior border of radius",
    "kemik": "radius",
    "not": "caput radiale; tuberositas radii ile m. pronator teres insersiyosu arası"
   }
  ],
  "insersiyo": [
   {
    "la": "phalanges mediae II–V",
    "en": "middle phalanges of digits 2–5",
    "kemik": "phalanges manus"
   }
  ],
  "sinir": [
   {
    "id": "n_medianus",
    "kok": "C8–T1"
   }
  ],
  "hareket": [
   {
    "eklem": "parmak-pip",
    "hareket": "fleksiyon",
    "rol": "ana",
    "not": "her parmağı ayrı ayrı bükebilir"
   },
   {
    "eklem": "parmak-mkp",
    "hareket": "fleksiyon",
    "rol": "yardimci"
   },
   {
    "eklem": "el-bilegi",
    "hareket": "fleksiyon",
    "rol": "yardimci"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "flexor_digitorum_profundus"
  ],
  "kurallar": [
   "on-kol-on"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1009–1010"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "tek-tek"
 },
 {
  "id": "flexor_digitorum_profundus",
  "ad": {
   "la": "Musculus flexor digitorum profundus",
   "kisa": "m. flexor digitorum profundus",
   "tr": "",
   "en": "Flexor digitorum profundus"
  },
  "bolge": "ust-ekstremite",
  "altBolge": "on-kol",
  "bolme": "on-derin",
  "setler": [
   "on-kol-on"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "ulna (ön ve medial yüz, proksimal 3/4)",
    "en": "proximal three-quarters of anterior and medial surfaces of ulna",
    "kemik": "ulna",
    "not": "ayrıca processus coronoideus'un medial yüzü"
   },
   {
    "la": "membrana interossea antebrachii (ulnar yarı)",
    "en": "ulnar half of interosseous membrane of forearm",
    "kemik": ""
   }
  ],
  "insersiyo": [
   {
    "la": "phalanges distales II–V (taban, palmar yüz)",
    "en": "palmar surfaces of bases of distal phalanges 2–5",
    "kemik": "phalanges manus",
    "not": "m. flexor digitorum superficialis tendonlarının içinden geçer"
   }
  ],
  "sinir": [
   {
    "id": "n_interosseus_antebrachii_anterior",
    "kok": "C8–T1",
    "not": "lateral kısım: işaret ve orta parmak karınları (n. medianus'un dalı)"
   },
   {
    "id": "n_ulnaris",
    "kok": "C8–T1",
    "not": "medial kısım: yüzük ve küçük parmak karınları"
   }
  ],
  "hareket": [
   {
    "eklem": "parmak-dip",
    "hareket": "fleksiyon",
    "rol": "ana"
   },
   {
    "eklem": "parmak-pip",
    "hareket": "fleksiyon",
    "rol": "yardimci"
   },
   {
    "eklem": "parmak-mkp",
    "hareket": "fleksiyon",
    "rol": "yardimci"
   },
   {
    "eklem": "el-bilegi",
    "hareket": "fleksiyon",
    "rol": "yardimci"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "flexor_digitorum_superficialis"
  ],
  "kurallar": [
   "on-kol-on"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1011"
   }
  ],
  "farklar": "Gray's 43 kök değerini (C8–T1) n. interosseus anterior cümlesinde verir; n. ulnaris kısmı için ayrı kök yazmaz.",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "flexor_pollicis_longus",
  "ad": {
   "la": "Musculus flexor pollicis longus",
   "kisa": "m. flexor pollicis longus",
   "tr": "",
   "en": "Flexor pollicis longus"
  },
  "bolge": "ust-ekstremite",
  "altBolge": "on-kol",
  "bolme": "on-derin",
  "setler": [
   "on-kol-on"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "radius (ön yüz)",
    "en": "anterior surface of radius",
    "kemik": "radius"
   },
   {
    "la": "membrana interossea antebrachii",
    "en": "interosseous membrane of forearm",
    "kemik": ""
   }
  ],
  "insersiyo": [
   {
    "la": "phalanx distalis pollicis (taban, palmar yüz)",
    "en": "palmar surface of base of distal phalanx of thumb",
    "kemik": "phalanx distalis I"
   }
  ],
  "sinir": [
   {
    "id": "n_interosseus_antebrachii_anterior",
    "kok": "C7–C8"
   }
  ],
  "hareket": [
   {
    "eklem": "basparmak-ip",
    "hareket": "fleksiyon",
    "rol": "ana"
   },
   {
    "eklem": "basparmak-mkp",
    "hareket": "fleksiyon",
    "rol": "yardimci"
   },
   {
    "eklem": "basparmak-kmk",
    "hareket": "fleksiyon",
    "rol": "yardimci",
    "not": "özellikle distal eklemler sertse"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [],
  "kurallar": [
   "on-kol-on"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1011"
   }
  ],
  "farklar": "Sıklıkla processus coronoideus'tan ya da epicondylus medialis'ten gelen ek bir baş (Gantzer kası) bulunur (Gray's 43, s. 1011).",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "pronator_quadratus",
  "ad": {
   "la": "Musculus pronator quadratus",
   "kisa": "m. pronator quadratus",
   "tr": "",
   "en": "Pronator quadratus"
  },
  "bolge": "ust-ekstremite",
  "altBolge": "on-kol",
  "bolme": "on-derin",
  "setler": [
   "on-kol-on"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "ulna (ön yüz, distal 1/4)",
    "en": "anterior surface of distal quarter of ulna (oblique ridge)",
    "kemik": "ulna"
   }
  ],
  "insersiyo": [
   {
    "la": "radius (ön yüz ve ön kenar, distal 1/4)",
    "en": "distal quarter of anterior border and surface of radius",
    "kemik": "radius"
   }
  ],
  "sinir": [
   {
    "id": "n_interosseus_antebrachii_anterior",
    "kok": "C7–C8",
    "not": "Gray's 43 kas paragrafında 'n. medianus' der; dal n. interosseus anterior'dur"
   }
  ],
  "hareket": [
   {
    "eklem": "on-kol",
    "hareket": "pronasyon",
    "rol": "ana",
    "not": "pronasyonun asıl kası"
   },
   {
    "eklem": "on-kol",
    "hareket": "stabilizasyon",
    "rol": "stabilizator",
    "not": "art. radioulnaris distalis'i dinamik olarak sabitler"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "pronator_teres"
  ],
  "kurallar": [
   "on-kol-on"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1011, 1018"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "brachioradialis",
  "ad": {
   "la": "Musculus brachioradialis",
   "kisa": "m. brachioradialis",
   "tr": "",
   "en": "Brachioradialis"
  },
  "bolge": "ust-ekstremite",
  "altBolge": "on-kol",
  "bolme": "arka-yuzeyel",
  "setler": [
   "on-kol-arka"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "crista supracondylaris lateralis humeri (proksimal 2/3)",
    "en": "proximal two-thirds of lateral supracondylar ridge of humerus",
    "kemik": "humerus",
    "not": "ayrıca septum intermusculare laterale"
   }
  ],
  "insersiyo": [
   {
    "la": "radius distal ucu (lateral yüz, processus styloideus'un hemen proksimali)",
    "en": "lateral side of distal end of radius, just proximal to styloid process",
    "kemik": "radius"
   }
  ],
  "sinir": [
   {
    "id": "n_radialis",
    "kok": "C5–C6"
   }
  ],
  "hareket": [
   {
    "eklem": "dirsek",
    "hareket": "fleksiyon",
    "rol": "ana",
    "not": "ön kol yarı pronasyondayken en güçlü; hızlı harekette dirseği sabitler"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [],
  "kurallar": [
   "kol-on-kol-arka"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1012"
   }
  ],
  "farklar": "Arka bölmede yer alır ve n. radialis uyarır, ama dirsek fleksörüdür.",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "extensor_carpi_radialis_longus",
  "ad": {
   "la": "Musculus extensor carpi radialis longus",
   "kisa": "m. extensor carpi radialis longus",
   "tr": "",
   "en": "Extensor carpi radialis longus"
  },
  "bolge": "ust-ekstremite",
  "altBolge": "on-kol",
  "bolme": "arka-yuzeyel",
  "setler": [
   "on-kol-arka"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "crista supracondylaris lateralis humeri (distal 1/3)",
    "en": "distal third of lateral supracondylar ridge of humerus",
    "kemik": "humerus",
    "not": "ayrıca septum intermusculare laterale"
   }
  ],
  "insersiyo": [
   {
    "la": "basis ossis metacarpi II (dorsal yüz, radial taraf)",
    "en": "dorsal surface of base of second metacarpal (radial side)",
    "kemik": "os metacarpi II"
   }
  ],
  "sinir": [
   {
    "id": "n_radialis",
    "kok": "C6–C7"
   }
  ],
  "hareket": [
   {
    "eklem": "el-bilegi",
    "hareket": "ekstansiyon",
    "rol": "ana"
   },
   {
    "eklem": "el-bilegi",
    "hareket": "abduksiyon",
    "rol": "ana",
    "not": "radial deviasyon"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "extensor_carpi_radialis_brevis"
  ],
  "kurallar": [
   "kol-on-kol-arka"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1012"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "extensor_carpi_radialis_brevis",
  "ad": {
   "la": "Musculus extensor carpi radialis brevis",
   "kisa": "m. extensor carpi radialis brevis",
   "tr": "",
   "en": "Extensor carpi radialis brevis"
  },
  "bolge": "ust-ekstremite",
  "altBolge": "on-kol",
  "bolme": "arka-yuzeyel",
  "setler": [
   "on-kol-arka"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "epicondylus lateralis humeri",
    "en": "lateral epicondyle of humerus (common extensor tendon)",
    "kemik": "humerus",
    "not": "ortak ekstansör tendon; ayrıca lig. collaterale radiale"
   }
  ],
  "insersiyo": [
   {
    "la": "basis ossis metacarpi III (dorsal yüz, radial taraf)",
    "en": "dorsal surface of base of third metacarpal (radial side)",
    "kemik": "os metacarpi III",
    "not": "komşu II. metakarp tabanına da"
   }
  ],
  "sinir": [
   {
    "id": "n_radialis",
    "kok": "C7–C8",
    "not": "n. radialis'in kendisinden ya da derin dalından"
   }
  ],
  "hareket": [
   {
    "eklem": "el-bilegi",
    "hareket": "ekstansiyon",
    "rol": "ana",
    "not": "el bileğinin asıl ekstansörü"
   },
   {
    "eklem": "el-bilegi",
    "hareket": "abduksiyon",
    "rol": "yardimci",
    "not": "m. extensor carpi radialis longus ile"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "extensor_carpi_radialis_longus"
  ],
  "kurallar": [
   "kol-on-kol-arka"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1012"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "extensor_digitorum",
  "ad": {
   "la": "Musculus extensor digitorum",
   "kisa": "m. extensor digitorum",
   "tr": "",
   "en": "Extensor digitorum"
  },
  "bolge": "ust-ekstremite",
  "altBolge": "on-kol",
  "bolme": "arka-yuzeyel",
  "setler": [
   "on-kol-arka"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "epicondylus lateralis humeri",
    "en": "lateral epicondyle of humerus (common extensor tendon)",
    "kemik": "humerus",
    "not": "ortak ekstansör tendon"
   }
  ],
  "insersiyo": [
   {
    "la": "aponeurosis dorsalis digitorum II–V",
    "en": "extensor expansions of digits 2–5",
    "kemik": "phalanges manus",
    "not": "dorsal aponevroz üzerinden orta ve distal falankslara"
   }
  ],
  "sinir": [
   {
    "id": "n_interosseus_antebrachii_posterior",
    "kok": "C7–C8"
   }
  ],
  "hareket": [
   {
    "eklem": "parmak-mkp",
    "hareket": "ekstansiyon",
    "rol": "ana"
   },
   {
    "eklem": "parmak-pip",
    "hareket": "ekstansiyon",
    "rol": "ana",
    "not": "dorsal aponevroz aracılığıyla"
   },
   {
    "eklem": "parmak-dip",
    "hareket": "ekstansiyon",
    "rol": "ana",
    "not": "dorsal aponevroz aracılığıyla"
   },
   {
    "eklem": "el-bilegi",
    "hareket": "ekstansiyon",
    "rol": "yardimci"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [],
  "kurallar": [
   "kol-on-kol-arka"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1012–1013"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "extensor_digiti_minimi",
  "ad": {
   "la": "Musculus extensor digiti minimi",
   "kisa": "m. extensor digiti minimi",
   "tr": "",
   "en": "Extensor digiti minimi"
  },
  "bolge": "ust-ekstremite",
  "altBolge": "on-kol",
  "bolme": "arka-yuzeyel",
  "setler": [
   "on-kol-arka"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "epicondylus lateralis humeri",
    "en": "lateral epicondyle of humerus (common extensor tendon)",
    "kemik": "humerus",
    "not": "ortak ekstansör tendon"
   }
  ],
  "insersiyo": [
   {
    "la": "aponeurosis dorsalis digiti V",
    "en": "extensor expansion of fifth digit",
    "kemik": "phalanges manus"
   }
  ],
  "sinir": [
   {
    "id": "n_interosseus_antebrachii_posterior",
    "kok": "C7–C8"
   }
  ],
  "hareket": [
   {
    "eklem": "parmak-mkp",
    "hareket": "ekstansiyon",
    "rol": "ana",
    "not": "küçük parmak; diğer parmaklardan bağımsız"
   },
   {
    "eklem": "el-bilegi",
    "hareket": "ekstansiyon",
    "rol": "yardimci"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "extensor_indicis"
  ],
  "kurallar": [
   "kol-on-kol-arka"
  ],
  "yanilgilar": [
   {
    "alan": "origo",
    "yanlis": "m. extensor digitorum ve membrana interossea",
    "donus": "m. extensor digiti minimi başka bir kastan ya da membrana interossea'dan başlamaz; diğer yüzeyel ekstansörler gibi ortak ekstansör tendonla epicondylus lateralis humeri'den başlar.",
    "la": "m. extensor digitorum; membrana interossea antebrachii"
   }
  ],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1013"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "extensor_carpi_ulnaris",
  "ad": {
   "la": "Musculus extensor carpi ulnaris",
   "kisa": "m. extensor carpi ulnaris",
   "tr": "",
   "en": "Extensor carpi ulnaris"
  },
  "bolge": "ust-ekstremite",
  "altBolge": "on-kol",
  "bolme": "arka-yuzeyel",
  "setler": [
   "on-kol-arka"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "epicondylus lateralis humeri",
    "en": "lateral epicondyle of humerus (common extensor tendon)",
    "kemik": "humerus",
    "not": "ortak ekstansör tendon"
   },
   {
    "la": "margo posterior ulnae",
    "en": "posterior border of ulna",
    "kemik": "ulna",
    "not": "ortak aponevroz aracılığıyla"
   }
  ],
  "insersiyo": [
   {
    "la": "basis ossis metacarpi V (medial taraftaki tüberkül)",
    "en": "tubercle on medial side of base of fifth metacarpal",
    "kemik": "os metacarpi V"
   }
  ],
  "sinir": [
   {
    "id": "n_interosseus_antebrachii_posterior",
    "kok": "C7–C8"
   }
  ],
  "hareket": [
   {
    "eklem": "el-bilegi",
    "hareket": "ekstansiyon",
    "rol": "ana",
    "not": "radial ekstansörlerle dengeli ekstansiyon"
   },
   {
    "eklem": "el-bilegi",
    "hareket": "adduksiyon",
    "rol": "ana",
    "not": "m. flexor carpi ulnaris ile (ulnar deviasyon)"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "flexor_carpi_ulnaris"
  ],
  "kurallar": [
   "kol-on-kol-arka"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1013"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "anconeus",
  "ad": {
   "la": "Musculus anconeus",
   "kisa": "m. anconeus",
   "tr": "",
   "en": "Anconeus"
  },
  "bolge": "ust-ekstremite",
  "altBolge": "on-kol",
  "bolme": "arka-yuzeyel",
  "setler": [
   "on-kol-arka",
   "kol"
  ],
  "kitle": [
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "epicondylus lateralis humeri (arka yüz)",
    "en": "posterior surface of lateral epicondyle of humerus",
    "kemik": "humerus",
    "not": "ortak ekstansör tendonun proksimalinde, ayrı bir tendonla"
   }
  ],
  "insersiyo": [
   {
    "la": "olecranon (lateral yüz)",
    "en": "lateral aspect of olecranon",
    "kemik": "ulna"
   },
   {
    "la": "corpus ulnae (arka yüz, proksimal 1/4)",
    "en": "proximal quarter of posterior surface of ulna",
    "kemik": "ulna"
   }
  ],
  "sinir": [
   {
    "id": "n_radialis",
    "kok": "C6–C8",
    "not": "m. triceps brachii caput mediale dalının devamı"
   }
  ],
  "hareket": [
   {
    "eklem": "dirsek",
    "hareket": "ekstansiyon",
    "rol": "yardimci"
   },
   {
    "eklem": "on-kol",
    "hareket": "stabilizasyon",
    "rol": "stabilizator",
    "not": "pronasyonda ulnanın abduksiyonunu denetlediği düşünülür"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "triceps_brachii"
  ],
  "kurallar": [
   "kol-on-kol-arka"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1013–1014"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "supinator",
  "ad": {
   "la": "Musculus supinator",
   "kisa": "m. supinator",
   "tr": "",
   "en": "Supinator"
  },
  "bolge": "ust-ekstremite",
  "altBolge": "on-kol",
  "bolme": "arka-derin",
  "setler": [
   "on-kol-arka"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "epicondylus lateralis humeri",
    "en": "lateral epicondyle of humerus",
    "kemik": "humerus"
   },
   {
    "la": "lig. collaterale radiale ve lig. anulare radii",
    "en": "radial collateral ligament and annular ligament",
    "kemik": ""
   },
   {
    "la": "crista musculi supinatoris",
    "en": "supinator crest of ulna",
    "kemik": "ulna"
   }
  ],
  "insersiyo": [
   {
    "la": "radius (lateral yüz, proksimal 1/3)",
    "en": "lateral surface of proximal third of radius",
    "kemik": "radius",
    "not": "ön ve arka yüze de uzanır"
   }
  ],
  "sinir": [
   {
    "id": "n_radialis_r_profundus",
    "kok": "C6–C7"
   }
  ],
  "hareket": [
   {
    "eklem": "on-kol",
    "hareket": "supinasyon",
    "rol": "ana",
    "not": "yavaş ve dirençsiz supinasyonu tek başına; hızlı ve güçlü supinasyonda m. biceps brachii ile"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [],
  "kurallar": [
   "kol-on-kol-arka"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1015"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "abductor_pollicis_longus",
  "ad": {
   "la": "Musculus abductor pollicis longus",
   "kisa": "m. abductor pollicis longus",
   "tr": "",
   "en": "Abductor pollicis longus"
  },
  "bolge": "ust-ekstremite",
  "altBolge": "on-kol",
  "bolme": "arka-derin",
  "setler": [
   "on-kol-arka"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "corpus ulnae (arka yüz)",
    "en": "posterior surface of ulna",
    "kemik": "ulna",
    "not": "m. anconeus insersiyosunun distali"
   },
   {
    "la": "membrana interossea antebrachii",
    "en": "interosseous membrane of forearm",
    "kemik": ""
   },
   {
    "la": "corpus radii (arka yüz, orta 1/3)",
    "en": "middle third of posterior surface of radius",
    "kemik": "radius"
   }
  ],
  "insersiyo": [
   {
    "la": "basis ossis metacarpi I (radial taraf)",
    "en": "radial side of base of first metacarpal",
    "kemik": "os metacarpi I"
   },
   {
    "la": "os trapezium",
    "en": "trapezium",
    "kemik": "os trapezium",
    "not": "ikinci tendon uzantısı"
   }
  ],
  "sinir": [
   {
    "id": "n_interosseus_antebrachii_posterior",
    "kok": "C7–C8"
   }
  ],
  "hareket": [
   {
    "eklem": "basparmak-kmk",
    "hareket": "abduksiyon",
    "rol": "ana",
    "not": "I. metakarpı abduksiyona getirir"
   },
   {
    "eklem": "basparmak-kmk",
    "hareket": "ekstansiyon",
    "rol": "ana"
   },
   {
    "eklem": "el-bilegi",
    "hareket": "abduksiyon",
    "rol": "yardimci"
   },
   {
    "eklem": "el-bilegi",
    "hareket": "fleksiyon",
    "rol": "yardimci"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "abductor_pollicis_brevis"
  ],
  "kurallar": [
   "kol-on-kol-arka"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1014"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "extensor_pollicis_longus",
  "ad": {
   "la": "Musculus extensor pollicis longus",
   "kisa": "m. extensor pollicis longus",
   "tr": "",
   "en": "Extensor pollicis longus"
  },
  "bolge": "ust-ekstremite",
  "altBolge": "on-kol",
  "bolme": "arka-derin",
  "setler": [
   "on-kol-arka"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "corpus ulnae (arka yüz, orta 1/3)",
    "en": "middle third of posterior surface of ulna",
    "kemik": "ulna"
   },
   {
    "la": "membrana interossea antebrachii",
    "en": "interosseous membrane of forearm",
    "kemik": ""
   }
  ],
  "insersiyo": [
   {
    "la": "phalanx distalis pollicis (taban)",
    "en": "base of distal phalanx of thumb",
    "kemik": "phalanx distalis I",
    "not": "tuberculum dorsale radii çevresinde yön değiştirir"
   }
  ],
  "sinir": [
   {
    "id": "n_interosseus_antebrachii_posterior",
    "kok": "C7–C8"
   }
  ],
  "hareket": [
   {
    "eklem": "basparmak-ip",
    "hareket": "ekstansiyon",
    "rol": "ana"
   },
   {
    "eklem": "basparmak-mkp",
    "hareket": "ekstansiyon",
    "rol": "yardimci",
    "not": "m. extensor pollicis brevis ve m. abductor pollicis longus ile"
   },
   {
    "eklem": "basparmak-kmk",
    "hareket": "adduksiyon",
    "rol": "yardimci",
    "not": "ekstansiyondaki başparmağı addükte eder ve dışa döndürür"
   },
   {
    "eklem": "el-bilegi",
    "hareket": "ekstansiyon",
    "rol": "yardimci",
    "not": "zayıf"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "extensor_pollicis_brevis"
  ],
  "kurallar": [
   "kol-on-kol-arka"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1014"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "extensor_pollicis_brevis",
  "ad": {
   "la": "Musculus extensor pollicis brevis",
   "kisa": "m. extensor pollicis brevis",
   "tr": "",
   "en": "Extensor pollicis brevis"
  },
  "bolge": "ust-ekstremite",
  "altBolge": "on-kol",
  "bolme": "arka-derin",
  "setler": [
   "on-kol-arka"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "corpus radii (arka yüz)",
    "en": "posterior surface of radius",
    "kemik": "radius",
    "not": "m. abductor pollicis longus origosunun distali"
   },
   {
    "la": "membrana interossea antebrachii",
    "en": "interosseous membrane of forearm",
    "kemik": ""
   }
  ],
  "insersiyo": [
   {
    "la": "phalanx proximalis pollicis (taban)",
    "en": "base of proximal phalanx of thumb",
    "kemik": "phalanx proximalis I",
    "not": "sıklıkla distal falanksa ek uzantı"
   }
  ],
  "sinir": [
   {
    "id": "n_interosseus_antebrachii_posterior",
    "kok": "C7–C8"
   }
  ],
  "hareket": [
   {
    "eklem": "basparmak-mkp",
    "hareket": "ekstansiyon",
    "rol": "ana"
   },
   {
    "eklem": "basparmak-kmk",
    "hareket": "ekstansiyon",
    "rol": "ana",
    "not": "I. metakarp"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "extensor_pollicis_longus"
  ],
  "kurallar": [
   "kol-on-kol-arka"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1015"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "extensor_indicis",
  "ad": {
   "la": "Musculus extensor indicis",
   "kisa": "m. extensor indicis",
   "tr": "",
   "en": "Extensor indicis"
  },
  "bolge": "ust-ekstremite",
  "altBolge": "on-kol",
  "bolme": "arka-derin",
  "setler": [
   "on-kol-arka"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "corpus ulnae (arka yüz)",
    "en": "posterior surface of ulna",
    "kemik": "ulna",
    "not": "m. extensor pollicis longus origosunun distali"
   },
   {
    "la": "membrana interossea antebrachii",
    "en": "interosseous membrane of forearm",
    "kemik": ""
   }
  ],
  "insersiyo": [
   {
    "la": "aponeurosis dorsalis digiti II",
    "en": "extensor expansion of index finger",
    "kemik": "phalanges manus",
    "not": "m. extensor digitorum tendonunun ulnar tarafına katılır"
   }
  ],
  "sinir": [
   {
    "id": "n_interosseus_antebrachii_posterior",
    "kok": "C7–C8"
   }
  ],
  "hareket": [
   {
    "eklem": "parmak-mkp",
    "hareket": "ekstansiyon",
    "rol": "ana",
    "not": "işaret parmağı; diğer parmaklardan bağımsız"
   },
   {
    "eklem": "el-bilegi",
    "hareket": "ekstansiyon",
    "rol": "yardimci",
    "not": "zayıf"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "extensor_digiti_minimi"
  ],
  "kurallar": [
   "kol-on-kol-arka"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1015"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "abductor_pollicis_brevis",
  "ad": {
   "la": "Musculus abductor pollicis brevis",
   "kisa": "m. abductor pollicis brevis",
   "tr": "",
   "en": "Abductor pollicis brevis"
  },
  "bolge": "ust-ekstremite",
  "altBolge": "el",
  "bolme": "tenar",
  "setler": [
   "el",
   "tenar"
  ],
  "kitle": [
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "retinaculum musculorum flexorum",
    "en": "flexor retinaculum",
    "kemik": "",
    "not": "asıl başlangıç"
   },
   {
    "la": "tuberculum ossis scaphoidei ve tuberculum ossis trapezii",
    "en": "tubercles of scaphoid and trapezium",
    "kemik": "os scaphoideum, os trapezium",
    "not": "birkaç lif"
   }
  ],
  "insersiyo": [
   {
    "la": "phalanx proximalis pollicis (taban, lateral taraf)",
    "en": "lateral side of base of proximal phalanx of thumb",
    "kemik": "phalanx proximalis I"
   },
   {
    "la": "aponeurosis dorsalis pollicis",
    "en": "extensor expansion of thumb",
    "kemik": "",
    "not": "radial lifler"
   }
  ],
  "sinir": [
   {
    "id": "n_medianus_r_recurrens",
    "kok": "C8–T1",
    "not": "n. medianus tarafından sabit olarak uyarılan tek tenar kas"
   }
  ],
  "hareket": [
   {
    "eklem": "basparmak-kmk",
    "hareket": "abduksiyon",
    "rol": "ana",
    "not": "palmar abduksiyon: başparmağı avuç düzlemine dik olarak uzaklaştırır"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "abductor_pollicis_longus",
   "flexor_pollicis_brevis"
  ],
  "kurallar": [
   "el"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1044, 1047"
   }
  ],
  "farklar": "Gray's 43 basılı metni el kaslarında yalnız siniri verir; kas düzeyinde kök değeri yok (Tablo 51.2 yalnız e-kitapta). C8–T1 genel kabuldür; Mert Ocak onayladı (25 Kasım 2026).",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "tek-tek"
 },
 {
  "id": "flexor_pollicis_brevis",
  "ad": {
   "la": "Musculus flexor pollicis brevis",
   "kisa": "m. flexor pollicis brevis",
   "tr": "",
   "en": "Flexor pollicis brevis"
  },
  "bolge": "ust-ekstremite",
  "altBolge": "el",
  "bolme": "tenar",
  "setler": [
   "el",
   "tenar"
  ],
  "kitle": [
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "retinaculum musculorum flexorum (distal kenar) ve tuberculum ossis trapezii",
    "en": "distal border of flexor retinaculum and tubercle of trapezium",
    "kemik": "os trapezium",
    "not": "caput superficiale"
   },
   {
    "la": "os trapezoideum ve os capitatum",
    "en": "trapezoid and capitate",
    "kemik": "os trapezoideum, os capitatum",
    "not": "caput profundum; değişken, bazen yoktur"
   }
  ],
  "insersiyo": [
   {
    "la": "phalanx proximalis pollicis (taban, lateral taraf)",
    "en": "lateral side of base of proximal phalanx of thumb",
    "kemik": "phalanx proximalis I",
    "not": "radial sesamoid kemik aracılığıyla"
   }
  ],
  "sinir": [
   {
    "id": "n_medianus_r_recurrens",
    "kok": "C8–T1",
    "not": "caput superficiale"
   },
   {
    "id": "n_ulnaris_r_profundus",
    "kok": "C8–T1",
    "not": "caput profundum; varyasyon sıktır"
   }
  ],
  "hareket": [
   {
    "eklem": "basparmak-mkp",
    "hareket": "fleksiyon",
    "rol": "ana"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "abductor_pollicis_brevis",
   "flexor_pollicis_longus"
  ],
  "kurallar": [
   "el"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1043, 1047"
   }
  ],
  "farklar": "Gray's 43 basılı metni el kaslarında yalnız siniri verir; kas düzeyinde kök değeri yok (Tablo 51.2 yalnız e-kitapta). C8–T1 genel kabuldür; Mert Ocak onayladı (25 Kasım 2026).",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "tek-tek"
 },
 {
  "id": "opponens_pollicis",
  "ad": {
   "la": "Musculus opponens pollicis",
   "kisa": "m. opponens pollicis",
   "tr": "",
   "en": "Opponens pollicis"
  },
  "bolge": "ust-ekstremite",
  "altBolge": "el",
  "bolme": "tenar",
  "setler": [
   "el",
   "tenar"
  ],
  "kitle": [
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "tuberculum ossis trapezii",
    "en": "tubercle of trapezium",
    "kemik": "os trapezium"
   },
   {
    "la": "retinaculum musculorum flexorum",
    "en": "flexor retinaculum",
    "kemik": ""
   }
  ],
  "insersiyo": [
   {
    "la": "os metacarpi I (radial kenarın tamamı ve palmar yüzün lateral yarısı)",
    "en": "whole length of radial border and lateral half of palmar surface of first metacarpal",
    "kemik": "os metacarpi I"
   }
  ],
  "sinir": [
   {
    "id": "n_medianus_r_recurrens",
    "kok": "C8–T1"
   },
   {
    "id": "n_ulnaris_r_profundus",
    "kok": "C8–T1",
    "not": "sıklıkla ek dal"
   }
  ],
  "hareket": [
   {
    "eklem": "basparmak-kmk",
    "hareket": "opozisyon",
    "rol": "ana",
    "not": "I. metakarpı fleksiyona getirir"
   },
   {
    "eklem": "basparmak-kmk",
    "hareket": "stabilizasyon",
    "rol": "stabilizator",
    "not": "trapeziometakarpal eklemi sabitler"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "opponens_digiti_minimi"
  ],
  "kurallar": [
   "el"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1044, 1047"
   }
  ],
  "farklar": "Gray's 43 basılı metni el kaslarında yalnız siniri verir; kas düzeyinde kök değeri yok (Tablo 51.2 yalnız e-kitapta). C8–T1 genel kabuldür; Mert Ocak onayladı (25 Kasım 2026).",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "tek-tek"
 },
 {
  "id": "adductor_pollicis",
  "ad": {
   "la": "Musculus adductor pollicis",
   "kisa": "m. adductor pollicis",
   "tr": "",
   "en": "Adductor pollicis"
  },
  "bolge": "ust-ekstremite",
  "altBolge": "el",
  "bolme": "tenar",
  "setler": [
   "el",
   "tenar"
  ],
  "kitle": [
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "os capitatum; bases ossium metacarpi II–III",
    "en": "capitate and bases of second and third metacarpals",
    "kemik": "os capitatum, ossa metacarpi II–III",
    "not": "caput obliquum"
   },
   {
    "la": "os metacarpi III (palmar yüz, distal 2/3)",
    "en": "distal two-thirds of palmar surface of third metacarpal",
    "kemik": "os metacarpi III",
    "not": "caput transversum"
   }
  ],
  "insersiyo": [
   {
    "la": "phalanx proximalis pollicis (taban, medial taraf)",
    "en": "medial side of base of proximal phalanx of thumb",
    "kemik": "phalanx proximalis I",
    "not": "ulnar sesamoid kemik aracılığıyla; yüzeyel lifler dorsal aponevroza"
   }
  ],
  "sinir": [
   {
    "id": "n_ulnaris_r_profundus",
    "kok": "C8–T1"
   }
  ],
  "hareket": [
   {
    "eklem": "basparmak-kmk",
    "hareket": "adduksiyon",
    "rol": "ana",
    "not": "başparmağı avuca yaklaştırır; kavramada güçlüdür"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [],
  "kurallar": [
   "el"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1044–1045, 1047"
   }
  ],
  "farklar": "Gray's 43 basılı metni el kaslarında yalnız siniri verir; kas düzeyinde kök değeri yok (Tablo 51.2 yalnız e-kitapta). C8–T1 genel kabuldür; Mert Ocak onayladı (25 Kasım 2026). Gray's 43 bu kası tenar kaslarla birlikte sayar (s. 1043).",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "tek-tek"
 },
 {
  "id": "abductor_digiti_minimi_manus",
  "ad": {
   "la": "Musculus abductor digiti minimi (manus)",
   "kisa": "m. abductor digiti minimi (manus)",
   "tr": "",
   "en": "Abductor digiti minimi (hand)"
  },
  "bolge": "ust-ekstremite",
  "altBolge": "el",
  "bolme": "hipotenar",
  "setler": [
   "el",
   "hipotenar"
  ],
  "kitle": [
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "os pisiforme",
    "en": "pisiform",
    "kemik": "os pisiforme",
    "not": "ayrıca m. flexor carpi ulnaris tendonu ve lig. pisohamatum"
   }
  ],
  "insersiyo": [
   {
    "la": "phalanx proximalis digiti V (taban, medial taraf)",
    "en": "medial side of base of proximal phalanx of little finger",
    "kemik": "phalanx proximalis V"
   },
   {
    "la": "aponeurosis dorsalis digiti V",
    "en": "extensor expansion of little finger",
    "kemik": "",
    "not": "ulnar kenar"
   }
  ],
  "sinir": [
   {
    "id": "n_ulnaris_r_profundus",
    "kok": "C8–T1"
   }
  ],
  "hareket": [
   {
    "eklem": "parmak-mkp",
    "hareket": "abduksiyon",
    "rol": "ana",
    "not": "küçük parmağı dördüncü parmaktan uzaklaştırır"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "abductor_digiti_minimi_pedis",
   "flexor_digiti_minimi_brevis_manus"
  ],
  "kurallar": [
   "el"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1045, 1047"
   }
  ],
  "farklar": "Gray's 43 basılı metni el kaslarında yalnız siniri verir; kas düzeyinde kök değeri yok (Tablo 51.2 yalnız e-kitapta). C8–T1 genel kabuldür; Mert Ocak onayladı (25 Kasım 2026).",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "tek-tek"
 },
 {
  "id": "flexor_digiti_minimi_brevis_manus",
  "ad": {
   "la": "Musculus flexor digiti minimi brevis (manus)",
   "kisa": "m. flexor digiti minimi brevis (manus)",
   "tr": "",
   "en": "Flexor digiti minimi brevis (hand)"
  },
  "bolge": "ust-ekstremite",
  "altBolge": "el",
  "bolme": "hipotenar",
  "setler": [
   "el",
   "hipotenar"
  ],
  "kitle": [
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "hamulus ossis hamati",
    "en": "hook of hamate",
    "kemik": "os hamatum"
   },
   {
    "la": "retinaculum musculorum flexorum",
    "en": "flexor retinaculum",
    "kemik": ""
   }
  ],
  "insersiyo": [
   {
    "la": "phalanx proximalis digiti V (taban, medial taraf)",
    "en": "medial side of base of proximal phalanx of little finger",
    "kemik": "phalanx proximalis V",
    "not": "m. abductor digiti minimi ile birlikte"
   }
  ],
  "sinir": [
   {
    "id": "n_ulnaris_r_profundus",
    "kok": "C8–T1"
   }
  ],
  "hareket": [
   {
    "eklem": "parmak-mkp",
    "hareket": "fleksiyon",
    "rol": "ana",
    "not": "küçük parmak; hafif dış rotasyonla"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "flexor_digiti_minimi_brevis_pedis",
   "abductor_digiti_minimi_manus"
  ],
  "kurallar": [
   "el"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1045, 1047"
   }
  ],
  "farklar": "Gray's 43 basılı metni el kaslarında yalnız siniri verir; kas düzeyinde kök değeri yok (Tablo 51.2 yalnız e-kitapta). C8–T1 genel kabuldür; Mert Ocak onayladı (25 Kasım 2026). Gray's 43 kası 'flexor digiti minimi' adıyla verir; bulunmayabilir.",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "tek-tek"
 },
 {
  "id": "opponens_digiti_minimi",
  "ad": {
   "la": "Musculus opponens digiti minimi",
   "kisa": "m. opponens digiti minimi",
   "tr": "",
   "en": "Opponens digiti minimi"
  },
  "bolge": "ust-ekstremite",
  "altBolge": "el",
  "bolme": "hipotenar",
  "setler": [
   "el",
   "hipotenar"
  ],
  "kitle": [
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "hamulus ossis hamati",
    "en": "hook of hamate",
    "kemik": "os hamatum"
   },
   {
    "la": "retinaculum musculorum flexorum",
    "en": "flexor retinaculum",
    "kemik": ""
   }
  ],
  "insersiyo": [
   {
    "la": "os metacarpi V (medial kenarın tamamı ve komşu palmar yüz)",
    "en": "whole length of medial margin of fifth metacarpal and adjacent palmar surface",
    "kemik": "os metacarpi V"
   }
  ],
  "sinir": [
   {
    "id": "n_ulnaris_r_profundus",
    "kok": "C8–T1"
   }
  ],
  "hareket": [
   {
    "eklem": "parmak-kmk",
    "hareket": "opozisyon",
    "rol": "ana",
    "not": "V. metakarpı öne çeker ve dışa döndürür; avuç çukurunu derinleştirir"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "opponens_pollicis"
  ],
  "kurallar": [
   "el"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1045, 1047"
   }
  ],
  "farklar": "Gray's 43 basılı metni el kaslarında yalnız siniri verir; kas düzeyinde kök değeri yok (Tablo 51.2 yalnız e-kitapta). C8–T1 genel kabuldür; Mert Ocak onayladı (25 Kasım 2026).",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "tek-tek"
 },
 {
  "id": "palmaris_brevis",
  "ad": {
   "la": "Musculus palmaris brevis",
   "kisa": "m. palmaris brevis",
   "tr": "",
   "en": "Palmaris brevis"
  },
  "bolge": "ust-ekstremite",
  "altBolge": "el",
  "bolme": "yuzeyel",
  "setler": [
   "el",
   "hipotenar"
  ],
  "kitle": [
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "retinaculum musculorum flexorum",
    "en": "flexor retinaculum",
    "kemik": ""
   },
   {
    "la": "aponeurosis palmaris (medial kenar)",
    "en": "medial border of palmar aponeurosis",
    "kemik": ""
   }
  ],
  "insersiyo": [
   {
    "la": "elin medial kenarının derisi (dermis)",
    "en": "dermis on medial border of hand",
    "kemik": ""
   }
  ],
  "sinir": [
   {
    "id": "n_ulnaris_r_superficialis",
    "kok": "C8–T1"
   }
  ],
  "hareket": [
   {
    "eklem": "el",
    "hareket": "deri-germe",
    "rol": "ana",
    "not": "avucun medial tarafındaki deriyi buruşturur; hipotenar kabarıntıyı belirginleştirerek avuç çukurunu derinleştirir"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "palmaris_longus"
  ],
  "kurallar": [
   "el"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1045, 1047"
   }
  ],
  "farklar": "Gray's 43 basılı metni el kaslarında yalnız siniri verir; kas düzeyinde kök değeri yok (Tablo 51.2 yalnız e-kitapta). C8–T1 genel kabuldür; Mert Ocak onayladı (25 Kasım 2026). El kasları içinde n. ulnaris'in yüzeyel dalından uyarılan tek kastır.",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "tek-tek"
 },
 {
  "id": "lumbricales_manus",
  "ad": {
   "la": "Musculi lumbricales (manus)",
   "kisa": "mm. lumbricales (manus)",
   "tr": "",
   "en": "Lumbricals (hand)"
  },
  "bolge": "ust-ekstremite",
  "altBolge": "el",
  "bolme": "orta",
  "setler": [
   "el"
  ],
  "kitle": [
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "tendines musculi flexoris digitorum profundi",
    "en": "tendons of flexor digitorum profundus",
    "kemik": "",
    "not": "1–2: işaret ve orta parmak tendonlarının lateral tarafı (unipennat); 3–4: komşu tendonların karşılıklı yüzleri (bipennat)"
   }
  ],
  "insersiyo": [
   {
    "la": "aponeurosis dorsalis digitorum II–V (lateral kenar)",
    "en": "lateral margin of extensor expansions of digits 2–5",
    "kemik": "phalanges manus"
   }
  ],
  "sinir": [
   {
    "id": "n_medianus",
    "kok": "C8–T1",
    "not": "1. ve 2. lumbrikal"
   },
   {
    "id": "n_ulnaris_r_profundus",
    "kok": "C8–T1",
    "not": "3. ve 4. lumbrikal; 3. lumbrikal sıklıkla n. medianus dalı da alır"
   }
  ],
  "hareket": [
   {
    "eklem": "parmak-pip",
    "hareket": "ekstansiyon",
    "rol": "ana",
    "not": "dorsal aponevroz aracılığıyla; MKP fleksiyondayken de"
   },
   {
    "eklem": "parmak-dip",
    "hareket": "ekstansiyon",
    "rol": "ana",
    "not": "dorsal aponevroz aracılığıyla"
   },
   {
    "eklem": "parmak-mkp",
    "hareket": "fleksiyon",
    "rol": "yardimci",
    "not": "tartışmalı; varsa mm. interossei'den zayıf"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "lumbricales_pedis"
  ],
  "kurallar": [
   "el"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1046–1047"
   }
  ],
  "farklar": "Gray's 43 basılı metni el kaslarında yalnız siniri verir; kas düzeyinde kök değeri yok (Tablo 51.2 yalnız e-kitapta). C8–T1 genel kabuldür; Mert Ocak onayladı (25 Kasım 2026). Gray's 43: kasların asıl işlevi kuvvet üretmek değil, fleksör ve ekstansörler arasında propriyoseptif eşgüdümdür (s. 1047).",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "tek-tek"
 },
 {
  "id": "interossei_palmares",
  "ad": {
   "la": "Musculi interossei palmares",
   "kisa": "mm. interossei palmares",
   "tr": "",
   "en": "Palmar interossei"
  },
  "bolge": "ust-ekstremite",
  "altBolge": "el",
  "bolme": "orta",
  "setler": [
   "el"
  ],
  "kitle": [
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "ossa metacarpi II, IV, V (orta parmağa bakan yüzler)",
    "en": "sides of second, fourth and fifth metacarpals facing the middle finger",
    "kemik": "ossa metacarpi",
    "not": "II: medial yüz; IV ve V: lateral yüz"
   }
  ],
  "insersiyo": [
   {
    "la": "aponeurosis dorsalis digitorum II, IV, V",
    "en": "extensor expansions of digits 2, 4 and 5",
    "kemik": "phalanges manus",
    "not": "aynı taraftan; ayrıca proksimal falanks tabanı"
   }
  ],
  "sinir": [
   {
    "id": "n_ulnaris_r_profundus",
    "kok": "C8–T1"
   }
  ],
  "hareket": [
   {
    "eklem": "parmak-mkp",
    "hareket": "adduksiyon",
    "rol": "ana",
    "not": "parmakları orta parmak eksenine yaklaştırır (MKP ekstansiyondayken)"
   },
   {
    "eklem": "parmak-mkp",
    "hareket": "fleksiyon",
    "rol": "yardimci"
   },
   {
    "eklem": "parmak-pip",
    "hareket": "ekstansiyon",
    "rol": "yardimci",
    "not": "dorsal aponevroz aracılığıyla"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "interossei_dorsales_manus",
   "interossei_plantares"
  ],
  "kurallar": [
   "el"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1045–1046, 1047"
   }
  ],
  "farklar": "Gray's 43 basılı metni el kaslarında yalnız siniri verir; kas düzeyinde kök değeri yok (Tablo 51.2 yalnız e-kitapta). C8–T1 genel kabuldür; Mert Ocak onayladı (25 Kasım 2026). Başparmağa giden 'birinci' palmar interosseöz çoğu kez rudimenterdir ve her yazar tarafından sayılmaz; sayılırsa dört, sayılmazsa üç kas vardır (Gray's 43, s. 1045).",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "tek-tek"
 },
 {
  "id": "interossei_dorsales_manus",
  "ad": {
   "la": "Musculi interossei dorsales (manus)",
   "kisa": "mm. interossei dorsales (manus)",
   "tr": "",
   "en": "Dorsal interossei (hand)"
  },
  "bolge": "ust-ekstremite",
  "altBolge": "el",
  "bolme": "orta",
  "setler": [
   "el"
  ],
  "kitle": [
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "ossa metacarpi I–V (komşu iki metakarpın karşılıklı yüzleri)",
    "en": "adjacent sides of two metacarpal bones",
    "kemik": "ossa metacarpi",
    "not": "dört bipennat kas"
   }
  ],
  "insersiyo": [
   {
    "la": "phalanges proximales II–IV (taban)",
    "en": "bases of proximal phalanges of digits 2–4",
    "kemik": "phalanges manus",
    "not": "1: işaret parmağının lateral tarafı; 2 ve 3: orta parmağın iki yanı; 4: yüzük parmağının medial tarafı"
   },
   {
    "la": "aponeurosis dorsalis digitorum II–IV",
    "en": "extensor expansions of digits 2–4",
    "kemik": ""
   }
  ],
  "sinir": [
   {
    "id": "n_ulnaris_r_profundus",
    "kok": "C8–T1"
   }
  ],
  "hareket": [
   {
    "eklem": "parmak-mkp",
    "hareket": "abduksiyon",
    "rol": "ana",
    "not": "parmakları orta parmak ekseninden uzaklaştırır"
   },
   {
    "eklem": "parmak-mkp",
    "hareket": "fleksiyon",
    "rol": "yardimci"
   },
   {
    "eklem": "parmak-pip",
    "hareket": "ekstansiyon",
    "rol": "yardimci",
    "not": "dorsal aponevroz aracılığıyla"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "interossei_palmares",
   "interossei_dorsales_pedis"
  ],
  "kurallar": [
   "el"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "DAB–PAD: dorsaller abduksiyon, palmarlar adduksiyon.",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1046, 1047"
   }
  ],
  "farklar": "Gray's 43 basılı metni el kaslarında yalnız siniri verir; kas düzeyinde kök değeri yok (Tablo 51.2 yalnız e-kitapta). C8–T1 genel kabuldür; Mert Ocak onayladı (25 Kasım 2026).",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "tek-tek"
 },
 {
  "id": "gluteus_maximus",
  "ad": {
   "la": "Musculus gluteus maximus",
   "kisa": "m. gluteus maximus",
   "tr": "",
   "en": "Gluteus maximus"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "kalca",
  "bolme": "gluteal",
  "setler": [
   "kalca"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "ala ossis ilii (linea glutea posterior ve arkasındaki alan)",
    "en": "ilium behind posterior gluteal line",
    "kemik": "os coxae"
   },
   {
    "la": "sacrum (alt kısmın arka yüzü) ve coccyx (yan kenar)",
    "en": "posterior surface of lower sacrum and side of coccyx",
    "kemik": "sacrum, coccyx"
   },
   {
    "la": "lig. sacrotuberale",
    "en": "sacrotuberous ligament",
    "kemik": "",
    "not": "ayrıca m. erector spinae aponevrozu ve fascia glutea"
   }
  ],
  "insersiyo": [
   {
    "la": "tractus iliotibialis",
    "en": "iliotibial tract",
    "kemik": "",
    "not": "üst kısım ve alt kısmın yüzeyel lifleri"
   },
   {
    "la": "tuberositas glutea femoris",
    "en": "gluteal tuberosity of femur",
    "kemik": "femur",
    "not": "alt kısmın derin lifleri"
   }
  ],
  "sinir": [
   {
    "id": "n_gluteus_inferior",
    "kok": "L5–S2"
   }
  ],
  "hareket": [
   {
    "eklem": "kalca",
    "hareket": "ekstansiyon",
    "rol": "ana",
    "not": "fleksiyondaki uyluğu dirence karşı geri getirir (merdiven çıkma, eğilmişken doğrulma)"
   },
   {
    "eklem": "kalca",
    "hareket": "dis-rotasyon",
    "rol": "ana"
   },
   {
    "eklem": "kalca",
    "hareket": "abduksiyon",
    "rol": "yardimci",
    "not": "üst lifler; güçlü abduksiyonda"
   },
   {
    "eklem": "kalca",
    "hareket": "adduksiyon",
    "rol": "yardimci",
    "not": "alt lifler"
   },
   {
    "eklem": "diz",
    "hareket": "stabilizasyon",
    "rol": "stabilizator",
    "not": "tractus iliotibialis aracılığıyla femuru tibia üzerinde sabitler"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "gluteus_medius"
  ],
  "kurallar": [],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1464, 1466–1467"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "tek-tek"
 },
 {
  "id": "gluteus_medius",
  "ad": {
   "la": "Musculus gluteus medius",
   "kisa": "m. gluteus medius",
   "tr": "",
   "en": "Gluteus medius"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "kalca",
  "bolme": "gluteal",
  "setler": [
   "kalca"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "ala ossis ilii (dış yüz; linea glutea anterior ile linea glutea posterior arası)",
    "en": "outer surface of ilium between anterior and posterior gluteal lines",
    "kemik": "os coxae",
    "not": "ayrıca fascia glutea"
   }
  ],
  "insersiyo": [
   {
    "la": "trochanter major (lateral yüzdeki eğik kabarıntı ve arka-üst kısım)",
    "en": "lateral surface and posterosuperior aspect of greater trochanter",
    "kemik": "femur"
   }
  ],
  "sinir": [
   {
    "id": "n_gluteus_superior",
    "kok": "L4–S1"
   }
  ],
  "hareket": [
   {
    "eklem": "kalca",
    "hareket": "abduksiyon",
    "rol": "ana"
   },
   {
    "eklem": "kalca",
    "hareket": "ic-rotasyon",
    "rol": "ana",
    "not": "ön lifler"
   },
   {
    "eklem": "kalca",
    "hareket": "dis-rotasyon",
    "rol": "yardimci",
    "not": "arka lifler"
   },
   {
    "eklem": "pelvis",
    "hareket": "stabilizasyon",
    "rol": "stabilizator",
    "not": "tek ayak üzerinde dururken ve yürürken karşı tarafta pelvisin düşmesini önler"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "gluteus_minimus"
  ],
  "kurallar": [],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1466–1468"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "gluteus_minimus",
  "ad": {
   "la": "Musculus gluteus minimus",
   "kisa": "m. gluteus minimus",
   "tr": "",
   "en": "Gluteus minimus"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "kalca",
  "bolme": "gluteal",
  "setler": [
   "kalca"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "ala ossis ilii (dış yüz; linea glutea anterior ile linea glutea inferior arası)",
    "en": "outer surface of ilium between anterior and inferior gluteal lines",
    "kemik": "os coxae"
   }
  ],
  "insersiyo": [
   {
    "la": "trochanter major (ön-lateral kabarıntı)",
    "en": "anterolateral ridge on greater trochanter",
    "kemik": "femur",
    "not": "kalça eklem kapsülüne de uzantı verir"
   }
  ],
  "sinir": [
   {
    "id": "n_gluteus_superior",
    "kok": "L4–S1"
   }
  ],
  "hareket": [
   {
    "eklem": "kalca",
    "hareket": "abduksiyon",
    "rol": "ana"
   },
   {
    "eklem": "kalca",
    "hareket": "ic-rotasyon",
    "rol": "ana",
    "not": "ön lifler"
   },
   {
    "eklem": "kalca",
    "hareket": "dis-rotasyon",
    "rol": "yardimci",
    "not": "arka lifler"
   },
   {
    "eklem": "pelvis",
    "hareket": "stabilizasyon",
    "rol": "stabilizator",
    "not": "tek ayak üzerinde dururken ve yürürken karşı tarafta pelvisin düşmesini önler"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "gluteus_medius"
  ],
  "kurallar": [],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1468"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "tensor_fasciae_latae",
  "ad": {
   "la": "Musculus tensor fasciae latae",
   "kisa": "m. tensor fasciae latae",
   "tr": "",
   "en": "Tensor fasciae latae"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "kalca",
  "bolme": "gluteal",
  "setler": [
   "kalca"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "crista iliaca (dış dudak, ön 5 cm)",
    "en": "anterior 5 cm of outer lip of iliac crest",
    "kemik": "os coxae"
   },
   {
    "la": "spina iliaca anterior superior (lateral yüz)",
    "en": "lateral surface of anterior superior iliac spine",
    "kemik": "os coxae",
    "not": "ayrıca fascia lata'nın derin yüzü"
   }
  ],
  "insersiyo": [
   {
    "la": "tractus iliotibialis",
    "en": "iliotibial tract",
    "kemik": "",
    "not": "tractus condylus lateralis tibiae'ye tutunur"
   }
  ],
  "sinir": [
   {
    "id": "n_gluteus_superior",
    "kok": "L4–S1"
   }
  ],
  "hareket": [
   {
    "eklem": "kalca",
    "hareket": "abduksiyon",
    "rol": "ana"
   },
   {
    "eklem": "kalca",
    "hareket": "fleksiyon",
    "rol": "yardimci"
   },
   {
    "eklem": "kalca",
    "hareket": "ic-rotasyon",
    "rol": "yardimci",
    "not": "anatomik pozisyondan çok az"
   },
   {
    "eklem": "diz",
    "hareket": "stabilizasyon",
    "rol": "stabilizator",
    "not": "tractus iliotibialis aracılığıyla ekstansiyondaki dizi kilitli tutar"
   },
   {
    "eklem": "pelvis",
    "hareket": "stabilizasyon",
    "rol": "stabilizator",
    "not": "tek ayak üzerinde dururken m. gluteus medius ile"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [],
  "kurallar": [],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1464, 1466–1467"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "piriformis",
  "ad": {
   "la": "Musculus piriformis",
   "kisa": "m. piriformis",
   "tr": "",
   "en": "Piriformis"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "kalca",
  "bolme": "dis-rotator",
  "setler": [
   "kalca-dis-rotatorlar"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "facies pelvica ossis sacri (foramina sacralia anteriora arası)",
    "en": "anterior surface of sacrum between anterior sacral foramina",
    "kemik": "sacrum",
    "not": "üç dişlenmeyle"
   },
   {
    "la": "facies glutea ossis ilii (spina iliaca posterior inferior yakını)",
    "en": "gluteal surface of ilium near posterior inferior iliac spine",
    "kemik": "os coxae",
    "not": "ayrıca art. sacroiliaca kapsülü"
   }
  ],
  "insersiyo": [
   {
    "la": "trochanter major (üst kenarın medial tarafı)",
    "en": "medial side of proximal border of greater trochanter",
    "kemik": "femur",
    "not": "foramen ischiadicum majus içinden geçer"
   }
  ],
  "sinir": [
   {
    "id": "n_musculi_piriformis",
    "kok": "S1–S2",
    "not": "plexus sacralis: S1 ve S2 ön dallarından doğrudan"
   },
   {
    "id": "n_gluteus_superior",
    "kok": "",
    "not": "Gray's 43 bu siniri de sayar (Iwanaga ve ark. 2019); kök değeri verilmez"
   }
  ],
  "hareket": [
   {
    "eklem": "kalca",
    "hareket": "dis-rotasyon",
    "rol": "ana",
    "not": "uyluk ekstansiyondayken"
   },
   {
    "eklem": "kalca",
    "hareket": "abduksiyon",
    "rol": "yardimci",
    "not": "uyluk fleksiyondayken"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [],
  "kurallar": [],
  "yanilgilar": [
   {
    "alan": "sinir",
    "yanlis": "n. fibularis communis",
    "donus": "m. piriformis'in siniri n. fibularis communis değildir. Kası S1–S2 ön dallarından gelen dallar (n. musculi piriformis) ve n. gluteus superior uyarır.",
    "sinir": "n_fibularis_communis"
   }
  ],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1469"
   }
  ],
  "farklar": "Gray's 43 (s. 1469) siniri 'n. gluteus superior ve S1–S2 ön dallarından dallar' olarak verir; önceki baskılar ve çoğu kaynak yalnız n. musculi piriformis (S1–S2) der. Karar (Mert Ocak, 25 Kasım 2026): Gray's 43 esas alınır; iki sinir de yazılır.",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "tek-tek"
 },
 {
  "id": "obturatorius_internus",
  "ad": {
   "la": "Musculus obturatorius internus",
   "kisa": "m. obturatorius internus",
   "tr": "",
   "en": "Obturator internus"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "kalca",
  "bolme": "dis-rotator",
  "setler": [
   "kalca-dis-rotatorlar"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "membrana obturatoria (pelvik yüz)",
    "en": "pelvic surface of obturator membrane",
    "kemik": ""
   },
   {
    "la": "foramen obturatum çevresi (ramus inferior ossis pubis, ramus ossis ischii)",
    "en": "bony margins of obturator foramen (inferior pubic ramus, ischial ramus)",
    "kemik": "os coxae"
   }
  ],
  "insersiyo": [
   {
    "la": "trochanter major (medial yüz)",
    "en": "medial surface of greater trochanter",
    "kemik": "femur",
    "not": "fossa trochanterica'nın ön-üstünde; tendon foramen ischiadicum minus'tan çıkar, mm. gemelli tendona katılır"
   }
  ],
  "sinir": [
   {
    "id": "n_musculi_obturatorii_interni",
    "kok": "L5–S1"
   }
  ],
  "hareket": [
   {
    "eklem": "kalca",
    "hareket": "dis-rotasyon",
    "rol": "ana"
   },
   {
    "eklem": "kalca",
    "hareket": "stabilizasyon",
    "rol": "stabilizator",
    "not": "kısa dış rotatorlar kalça eklemini arkadan sabitler"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "obturatorius_externus"
  ],
  "kurallar": [],
  "yanilgilar": [
   {
    "alan": "sinir",
    "yanlis": "n. obturatorius",
    "donus": "Adı benzese de m. obturatorius internus'u n. obturatorius uyarmaz; siniri plexus sacralis'ten gelen n. musculi obturatorii interni'dir. n. obturatorius m. obturatorius externus'u uyarır.",
    "sinir": "n_obturatorius"
   }
  ],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1469–1471"
   }
  ],
  "farklar": "Şartname Ek A kök değerini L5–S2 verir; Gray's 43 bu kas için L5–S1, m. gemellus superior için L5–S2 yazar (s. 1469, 1470).",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "gemellus_superior",
  "ad": {
   "la": "Musculus gemellus superior",
   "kisa": "m. gemellus superior",
   "tr": "",
   "en": "Superior gemellus"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "kalca",
  "bolme": "dis-rotator",
  "setler": [
   "kalca-dis-rotatorlar"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "spina ischiadica (arka yüz)",
    "en": "posterior surface of ischial spine",
    "kemik": "os coxae"
   }
  ],
  "insersiyo": [
   {
    "la": "trochanter major (medial yüz)",
    "en": "medial surface of greater trochanter",
    "kemik": "femur",
    "not": "m. obturatorius internus tendonunun üst kenarına karışarak"
   }
  ],
  "sinir": [
   {
    "id": "n_musculi_obturatorii_interni",
    "kok": "L5–S2"
   }
  ],
  "hareket": [
   {
    "eklem": "kalca",
    "hareket": "dis-rotasyon",
    "rol": "ana",
    "not": "uyluk ekstansiyondayken"
   },
   {
    "eklem": "kalca",
    "hareket": "abduksiyon",
    "rol": "yardimci",
    "not": "uyluk fleksiyondayken"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "gemellus_inferior"
  ],
  "kurallar": [],
  "yanilgilar": [
   {
    "alan": "sinir",
    "yanlis": "sakral spinal sinir",
    "donus": "'Sakral spinal sinir' yeterli bir cevap değildir. m. gemellus superior'u n. musculi obturatorii interni uyarır; m. gemellus inferior'un siniri ise farklıdır (n. musculi quadrati femoris)."
   }
  ],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1470–1471"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "gemellus_inferior",
  "ad": {
   "la": "Musculus gemellus inferior",
   "kisa": "m. gemellus inferior",
   "tr": "",
   "en": "Inferior gemellus"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "kalca",
  "bolme": "dis-rotator",
  "setler": [
   "kalca-dis-rotatorlar"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "tuber ischiadicum (lateral yüzün üst kısmı)",
    "en": "superior part of lateral surface of ischial tuberosity",
    "kemik": "os coxae",
    "not": "m. obturatorius internus tendonunun oluğunun hemen altı"
   }
  ],
  "insersiyo": [
   {
    "la": "trochanter major (medial yüz)",
    "en": "medial surface of greater trochanter",
    "kemik": "femur",
    "not": "m. obturatorius internus tendonunun alt kenarına karışarak"
   }
  ],
  "sinir": [
   {
    "id": "n_musculi_quadrati_femoris",
    "kok": "L4–S1"
   }
  ],
  "hareket": [
   {
    "eklem": "kalca",
    "hareket": "dis-rotasyon",
    "rol": "ana",
    "not": "uyluk ekstansiyondayken"
   },
   {
    "eklem": "kalca",
    "hareket": "abduksiyon",
    "rol": "yardimci",
    "not": "uyluk fleksiyondayken"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "gemellus_superior"
  ],
  "kurallar": [],
  "yanilgilar": [
   {
    "alan": "origo",
    "yanlis": "spina ischiadica",
    "donus": "spina ischiadica m. gemellus superior'un origosudur. m. gemellus inferior tuber ischiadicum'dan başlar.",
    "la": "spina ischiadica"
   },
   {
    "alan": "sinir",
    "yanlis": "sakral spinal sinir",
    "donus": "'Sakral spinal sinir' yeterli bir cevap değildir. m. gemellus inferior'u n. musculi quadrati femoris uyarır; m. gemellus superior'un siniri ise farklıdır (n. musculi obturatorii interni)."
   }
  ],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1470–1471"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "quadratus_femoris",
  "ad": {
   "la": "Musculus quadratus femoris",
   "kisa": "m. quadratus femoris",
   "tr": "",
   "en": "Quadratus femoris"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "kalca",
  "bolme": "dis-rotator",
  "setler": [
   "kalca-dis-rotatorlar"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "tuber ischiadicum (dış yüzün üst kısmı)",
    "en": "superior part of external aspect of ischial tuberosity",
    "kemik": "os coxae"
   }
  ],
  "insersiyo": [
   {
    "la": "crista intertrochanterica (tuberculum quadratum)",
    "en": "quadrate tubercle on intertrochanteric crest",
    "kemik": "femur",
    "not": "ve hemen altındaki kemik"
   }
  ],
  "sinir": [
   {
    "id": "n_musculi_quadrati_femoris",
    "kok": "L5–S1"
   }
  ],
  "hareket": [
   {
    "eklem": "kalca",
    "hareket": "dis-rotasyon",
    "rol": "ana"
   },
   {
    "eklem": "kalca",
    "hareket": "adduksiyon",
    "rol": "yardimci"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [],
  "kurallar": [],
  "yanilgilar": [
   {
    "alan": "origo",
    "yanlis": "tuber ischiadicum'un ön yüzü",
    "donus": "m. quadratus femoris tuber ischiadicum'un ön yüzünden değil, dış (lateral) yüzünün üst kısmından başlar.",
    "la": "tuber ischiadicum (ön yüz)"
   },
   {
    "alan": "sinir",
    "yanlis": "sakral spinal sinir",
    "donus": "'Sakral spinal sinir' yeterli bir cevap değildir. Kasın kendi adını taşıyan siniri vardır: n. musculi quadrati femoris."
   }
  ],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1464, 1470–1471"
   }
  ],
  "farklar": "Şartname Ek A kök değerini L4–S1 verir; Gray's 43 bu kas için L5–S1, aynı sinirin uyardığı m. gemellus inferior için L4–S1 yazar (s. 1470). Kas bulunmayabilir.",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "obturatorius_externus",
  "ad": {
   "la": "Musculus obturatorius externus",
   "kisa": "m. obturatorius externus",
   "tr": "",
   "en": "Obturator externus"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "kalca",
  "bolme": "dis-rotator",
  "setler": [
   "kalca-dis-rotatorlar",
   "uyluk-medial"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "membrana obturatoria (dış yüz, ön-medial 2/3)",
    "en": "anteromedial two-thirds of external surface of obturator membrane",
    "kemik": ""
   },
   {
    "la": "ramus ossis pubis ve ramus ossis ischii (foramen obturatum kenarı)",
    "en": "adjacent pubic and ischial rami",
    "kemik": "os coxae"
   }
  ],
  "insersiyo": [
   {
    "la": "fossa trochanterica",
    "en": "trochanteric fossa of femur",
    "kemik": "femur",
    "not": "tendon collum femoris'in altından ve arkasından dolanır"
   }
  ],
  "sinir": [
   {
    "id": "n_obturatorius_r_posterior",
    "kok": "L3–L4"
   }
  ],
  "hareket": [
   {
    "eklem": "kalca",
    "hareket": "dis-rotasyon",
    "rol": "yardimci"
   },
   {
    "eklem": "kalca",
    "hareket": "stabilizasyon",
    "rol": "stabilizator",
    "not": "kısa dış rotatorlar kalça eklemini arkadan sabitler"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "obturatorius_internus"
  ],
  "kurallar": [
   "uyluk-medial"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1464, 1469"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "psoas_major",
  "ad": {
   "la": "Musculus psoas major",
   "kisa": "m. psoas major",
   "tr": "",
   "en": "Psoas major"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "kalca",
  "bolme": "iliyak",
  "setler": [
   "iliopsoas",
   "uyluk-on"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "processus costales (transversi) L1–L5 (ön yüz ve alt kenar)",
    "en": "transverse processes of all lumbar vertebrae",
    "kemik": "vertebrae lumbales"
   },
   {
    "la": "corpora vertebrarum T12–L5 ve aradaki disci intervertebrales",
    "en": "bodies of T12–L5 vertebrae and intervening discs",
    "kemik": "vertebrae",
    "not": "beş dişlenme; her biri komşu iki gövde ve aradaki diskten"
   }
  ],
  "insersiyo": [
   {
    "la": "trochanter minor",
    "en": "lesser trochanter of femur",
    "kemik": "femur",
    "not": "m. iliacus liflerini lateralden alarak"
   }
  ],
  "sinir": [
   {
    "id": "rr_anteriores_lumbales",
    "kok": "L2–L4",
    "not": "plexus lumbalis; ağırlıklı L2, L3, L4"
   }
  ],
  "hareket": [
   {
    "eklem": "kalca",
    "hareket": "fleksiyon",
    "rol": "ana",
    "not": "m. iliacus ile birlikte (m. iliopsoas)"
   },
   {
    "eklem": "govde",
    "hareket": "fleksiyon",
    "rol": "ana",
    "not": "femur sabitken gövdeyi ve pelvisi öne eğer (yatar durumdan doğrulma)"
   },
   {
    "eklem": "govde",
    "hareket": "stabilizasyon",
    "rol": "stabilizator",
    "not": "otururken gövdeyi dengeler; lomber omurgayı frontal düzlemde sabitler"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "psoas_minor",
   "iliacus"
  ],
  "kurallar": [],
  "yanilgilar": [
   {
    "alan": "sinir",
    "yanlis": "L1–L3",
    "donus": "Gray's 43'e göre m. psoas major lomber sinirlerin ön dallarıyla, ağırlıklı olarak L2–L4 ile uyarılır.",
    "kok": "L1–L3"
   },
   {
    "alan": "origo",
    "yanlis": "yalnız processus transversus'lar",
    "donus": "m. psoas major yalnız lomber omurların processus transversus'larından başlamaz; T12–L5 omur gövdelerinden ve aralarındaki disklerden de başlar."
   }
  ],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1464–1467"
   }
  ],
  "farklar": "Kök değeri kaynaklar arasında değişir: Gray's 43 'ağırlıklı L2–L4' der; birçok kaynak L1–L3 verir. Karar (Mert Ocak, 25 Kasım 2026): Gray's 43 esas alınır (L2–L4).",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "tek-tek"
 },
 {
  "id": "psoas_minor",
  "ad": {
   "la": "Musculus psoas minor",
   "kisa": "m. psoas minor",
   "tr": "",
   "en": "Psoas minor"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "kalca",
  "bolme": "iliyak",
  "setler": [
   "iliopsoas"
  ],
  "kitle": [
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "corpora vertebrarum T12–L1 (yan yüzler) ve aradaki discus intervertebralis",
    "en": "sides of bodies of T12 and L1 vertebrae and intervening disc",
    "kemik": "vertebrae"
   }
  ],
  "insersiyo": [
   {
    "la": "pecten ossis pubis ve ramus iliopubicus (eminentia iliopubica)",
    "en": "pecten pubis and iliopubic ramus",
    "kemik": "os coxae",
    "not": "lateralde fascia iliopsoas'a"
   }
  ],
  "sinir": [
   {
    "id": "rr_anteriores_lumbales",
    "kok": "L1"
   }
  ],
  "hareket": [
   {
    "eklem": "govde",
    "hareket": "fleksiyon",
    "rol": "yardimci",
    "not": "zayıf"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "psoas_major"
  ],
  "kurallar": [],
  "yanilgilar": [],
  "klinik": "Varyasyon: bireylerin yaklaşık %40–60'ında bulunur; tümüyle karın içinde, m. psoas major'un önünde yer alır.",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1466–1467"
   }
  ],
  "farklar": "Varyasyon notu: Gray's 43'e göre kas bireylerin yaklaşık %40–60'ında vardır (s. 1466); kalça eklemini çaprazlamaz.",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "iliacus",
  "ad": {
   "la": "Musculus iliacus",
   "kisa": "m. iliacus",
   "tr": "",
   "en": "Iliacus"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "kalca",
  "bolme": "iliyak",
  "setler": [
   "iliopsoas",
   "uyluk-on"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "fossa iliaca (üst 2/3)",
    "en": "superior two-thirds of iliac fossa",
    "kemik": "os coxae"
   },
   {
    "la": "crista iliaca (iç dudak)",
    "en": "inner lip of iliac crest",
    "kemik": "os coxae"
   },
   {
    "la": "ala ossis sacri; ligg. sacroiliaca anteriora ve lig. iliolumbale",
    "en": "lateral part of sacrum; anterior sacro-iliac and iliolumbar ligaments",
    "kemik": "sacrum"
   }
  ],
  "insersiyo": [
   {
    "la": "trochanter minor",
    "en": "lesser trochanter of femur",
    "kemik": "femur",
    "not": "m. psoas major tendonuyla; bazı lifler doğrudan hemen distaline"
   }
  ],
  "sinir": [
   {
    "id": "n_femoralis",
    "kok": "L2–L3"
   }
  ],
  "hareket": [
   {
    "eklem": "kalca",
    "hareket": "fleksiyon",
    "rol": "ana",
    "not": "m. psoas major ile birlikte (m. iliopsoas)"
   },
   {
    "eklem": "govde",
    "hareket": "fleksiyon",
    "rol": "ana",
    "not": "femur sabitken gövdeyi ve pelvisi öne eğer"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "psoas_major"
  ],
  "kurallar": [
   "uyluk-on"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1464, 1466–1467"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "sartorius",
  "ad": {
   "la": "Musculus sartorius",
   "kisa": "m. sartorius",
   "tr": "",
   "en": "Sartorius"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "uyluk",
  "bolme": "on",
  "setler": [
   "uyluk-on"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "spina iliaca anterior superior",
    "en": "anterior superior iliac spine",
    "kemik": "os coxae",
    "not": "ve altındaki çentiğin üst yarısı"
   }
  ],
  "insersiyo": [
   {
    "la": "facies medialis tibiae (proksimal kısım)",
    "en": "proximal part of medial surface of tibia",
    "kemik": "tibia",
    "not": "pes anserinus; m. gracilis ve m. semitendinosus'un önünde"
   }
  ],
  "sinir": [
   {
    "id": "n_femoralis",
    "kok": "L2–L3"
   }
  ],
  "hareket": [
   {
    "eklem": "kalca",
    "hareket": "fleksiyon",
    "rol": "yardimci"
   },
   {
    "eklem": "kalca",
    "hareket": "abduksiyon",
    "rol": "yardimci"
   },
   {
    "eklem": "kalca",
    "hareket": "dis-rotasyon",
    "rol": "yardimci"
   },
   {
    "eklem": "diz",
    "hareket": "fleksiyon",
    "rol": "yardimci"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [],
  "kurallar": [
   "uyluk-on"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "Pes anserinus (önden arkaya): sartorius, gracilis, semitendinosus.",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1464, 1470–1472"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "rectus_femoris",
  "ad": {
   "la": "Musculus rectus femoris",
   "kisa": "m. rectus femoris",
   "tr": "",
   "en": "Rectus femoris"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "uyluk",
  "bolme": "on",
  "setler": [
   "uyluk-on",
   "quadriceps"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "spina iliaca anterior inferior",
    "en": "anterior inferior iliac spine",
    "kemik": "os coxae",
    "not": "caput rectum"
   },
   {
    "la": "acetabulum üstündeki oluk ve kalça eklem kapsülü",
    "en": "groove above acetabulum and hip joint capsule",
    "kemik": "os coxae",
    "not": "caput reflexum"
   }
  ],
  "insersiyo": [
   {
    "la": "basis patellae",
    "en": "base of patella",
    "kemik": "patella",
    "not": "m. quadriceps femoris tendonu; lig. patellae ile tuberositas tibiae'ye"
   }
  ],
  "sinir": [
   {
    "id": "n_femoralis",
    "kok": "L2–L4"
   }
  ],
  "hareket": [
   {
    "eklem": "diz",
    "hareket": "ekstansiyon",
    "rol": "ana"
   },
   {
    "eklem": "kalca",
    "hareket": "fleksiyon",
    "rol": "ana",
    "not": "kalça fleksiyonu ve diz ekstansiyonunu aynı anda yapabilir"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [],
  "kurallar": [
   "uyluk-on"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1464, 1472–1473"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "vastus_lateralis",
  "ad": {
   "la": "Musculus vastus lateralis",
   "kisa": "m. vastus lateralis",
   "tr": "",
   "en": "Vastus lateralis"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "uyluk",
  "bolme": "on",
  "setler": [
   "uyluk-on",
   "quadriceps"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "linea intertrochanterica (proksimal kısım)",
    "en": "proximal part of intertrochanteric line",
    "kemik": "femur"
   },
   {
    "la": "trochanter major (ön ve alt kenar)",
    "en": "anterior and inferior borders of greater trochanter",
    "kemik": "femur"
   },
   {
    "la": "tuberositas glutea (lateral kenar) ve labium laterale lineae asperae (proksimal yarı)",
    "en": "lateral margin of gluteal tuberosity and proximal half of lateral lip of linea aspera",
    "kemik": "femur"
   }
  ],
  "insersiyo": [
   {
    "la": "patella (taban ve lateral kenar)",
    "en": "base and lateral border of patella",
    "kemik": "patella",
    "not": "m. quadriceps femoris tendonu; lig. patellae ile tuberositas tibiae'ye"
   }
  ],
  "sinir": [
   {
    "id": "n_femoralis",
    "kok": "L2–L4"
   }
  ],
  "hareket": [
   {
    "eklem": "diz",
    "hareket": "ekstansiyon",
    "rol": "ana"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "vastus_medialis"
  ],
  "kurallar": [
   "uyluk-on"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1473"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "vastus_medialis",
  "ad": {
   "la": "Musculus vastus medialis",
   "kisa": "m. vastus medialis",
   "tr": "",
   "en": "Vastus medialis"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "uyluk",
  "bolme": "on",
  "setler": [
   "uyluk-on",
   "quadriceps"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "linea intertrochanterica (distal kısım) ve linea pectinea",
    "en": "distal part of intertrochanteric line and pectineal line",
    "kemik": "femur"
   },
   {
    "la": "labium mediale lineae asperae",
    "en": "medial lip of linea aspera",
    "kemik": "femur"
   },
   {
    "la": "linea supracondylaris medialis (proksimal kısım)",
    "en": "proximal part of medial supracondylar line",
    "kemik": "femur",
    "not": "ayrıca m. adductor longus ve m. adductor magnus tendonları"
   }
  ],
  "insersiyo": [
   {
    "la": "patella (medial kenar)",
    "en": "medial border of patella",
    "kemik": "patella",
    "not": "m. quadriceps femoris tendonu; lig. patellae ile tuberositas tibiae'ye"
   }
  ],
  "sinir": [
   {
    "id": "n_femoralis",
    "kok": "L2–L4"
   }
  ],
  "hareket": [
   {
    "eklem": "diz",
    "hareket": "ekstansiyon",
    "rol": "ana"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "vastus_lateralis"
  ],
  "kurallar": [
   "uyluk-on"
  ],
  "yanilgilar": [
   {
    "alan": "origo",
    "yanlis": "trochanter major",
    "donus": "trochanter major m. vastus lateralis'in origosudur. m. vastus medialis linea intertrochanterica'nın distal kısmından, linea pectinea'dan ve labium mediale lineae asperae'den başlar.",
    "la": "trochanter major"
   }
  ],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1473"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "vastus_intermedius",
  "ad": {
   "la": "Musculus vastus intermedius",
   "kisa": "m. vastus intermedius",
   "tr": "",
   "en": "Vastus intermedius"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "uyluk",
  "bolme": "on",
  "setler": [
   "uyluk-on",
   "quadriceps"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "corpus femoris (ön ve lateral yüz, proksimal 2/3)",
    "en": "anterior and lateral surfaces of proximal two-thirds of femoral body",
    "kemik": "femur"
   }
  ],
  "insersiyo": [
   {
    "la": "patella (m. quadriceps femoris tendonunun derin kısmı)",
    "en": "patella via deep part of quadriceps tendon",
    "kemik": "patella",
    "not": "lig. patellae ile tuberositas tibiae'ye"
   }
  ],
  "sinir": [
   {
    "id": "n_femoralis",
    "kok": "L2–L4"
   }
  ],
  "hareket": [
   {
    "eklem": "diz",
    "hareket": "ekstansiyon",
    "rol": "ana"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [],
  "kurallar": [
   "uyluk-on"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1473"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "articularis_genus",
  "ad": {
   "la": "Musculus articularis genus",
   "kisa": "m. articularis genus",
   "tr": "",
   "en": "Articularis genus"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "uyluk",
  "bolme": "on",
  "setler": [
   "uyluk-on"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "corpus femoris (ön yüz, distal kısım)",
    "en": "anterior surface of distal part of femoral body",
    "kemik": "femur"
   }
  ],
  "insersiyo": [
   {
    "la": "membrana synovialis genus (bursa suprapatellaris)",
    "en": "proximal reflection of synovial membrane of knee joint (suprapatellar bursa)",
    "kemik": ""
   }
  ],
  "sinir": [
   {
    "id": "n_femoralis",
    "kok": "L2–L4"
   }
  ],
  "hareket": [
   {
    "eklem": "diz",
    "hareket": "sinovyal-germe",
    "rol": "ana",
    "not": "diz ekstansiyonunda bursa suprapatellaris'i yukarı çeker"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [],
  "kurallar": [
   "uyluk-on"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1473"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "pectineus",
  "ad": {
   "la": "Musculus pectineus",
   "kisa": "m. pectineus",
   "tr": "",
   "en": "Pectineus"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "uyluk",
  "bolme": "medial",
  "setler": [
   "uyluk-medial"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "pecten ossis pubis",
    "en": "pecten pubis",
    "kemik": "os coxae",
    "not": "ve önündeki kemik (eminentia iliopubica ile tuberculum pubicum arası)"
   }
  ],
  "insersiyo": [
   {
    "la": "linea pectinea femoris",
    "en": "pectineal line of femur",
    "kemik": "femur",
    "not": "trochanter minor'dan linea aspera'ya uzanan çizgi"
   }
  ],
  "sinir": [
   {
    "id": "n_femoralis",
    "kok": "L2–L3",
    "not": "çoğunlukla"
   },
   {
    "id": "n_obturatorius",
    "kok": "L2–L3",
    "not": "daha seyrek; ya da n. obturatorius accessorius"
   }
  ],
  "hareket": [
   {
    "eklem": "kalca",
    "hareket": "adduksiyon",
    "rol": "yardimci"
   },
   {
    "eklem": "kalca",
    "hareket": "fleksiyon",
    "rol": "yardimci"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [],
  "kurallar": [
   "uyluk-medial"
  ],
  "yanilgilar": [
   {
    "alan": "hareket",
    "yanlis": "uyluğa abduksiyon",
    "donus": "Adduktor grup kasları uyluğa abduksiyon değil adduksiyon yaptırır. Abduksiyonu mm. glutei medius ve minimus ile m. tensor fasciae latae yapar. m. pectineus ayrıca kalçaya fleksiyon yaptırır.",
    "eklem": "kalca",
    "hareket": "abduksiyon"
   }
  ],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1464, 1476"
   }
  ],
  "farklar": "Gray's 43 kas paragrafında kök değeri vermez; L2–L3 genel kabuldür; Mert Ocak onayladı (25 Kasım 2026). Kas ön bölmenin de parçası sayılabilir (s. 1476).",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "tek-tek"
 },
 {
  "id": "adductor_longus",
  "ad": {
   "la": "Musculus adductor longus",
   "kisa": "m. adductor longus",
   "tr": "",
   "en": "Adductor longus"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "uyluk",
  "bolme": "medial",
  "setler": [
   "uyluk-medial"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "corpus ossis pubis (crista pubica ile symphysis arasındaki açı)",
    "en": "anterior pubis in angle between pubic crest and symphysis",
    "kemik": "os coxae"
   }
  ],
  "insersiyo": [
   {
    "la": "linea aspera (femurun orta 1/3'ü)",
    "en": "linea aspera in middle third of femur",
    "kemik": "femur"
   }
  ],
  "sinir": [
   {
    "id": "n_obturatorius_r_anterior",
    "kok": "L2–L4"
   }
  ],
  "hareket": [
   {
    "eklem": "kalca",
    "hareket": "adduksiyon",
    "rol": "ana"
   },
   {
    "eklem": "kalca",
    "hareket": "fleksiyon",
    "rol": "yardimci",
    "not": "özellikle kalça tam ekstansiyona yakınken"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "adductor_brevis"
  ],
  "kurallar": [
   "uyluk-medial"
  ],
  "yanilgilar": [
   {
    "alan": "hareket",
    "yanlis": "uyluğa abduksiyon",
    "donus": "Adduktor grup kasları uyluğa abduksiyon değil adduksiyon yaptırır. Abduksiyonu mm. glutei medius ve minimus ile m. tensor fasciae latae yapar.",
    "eklem": "kalca",
    "hareket": "abduksiyon"
   }
  ],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1464, 1474–1475"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "adductor_brevis",
  "ad": {
   "la": "Musculus adductor brevis",
   "kisa": "m. adductor brevis",
   "tr": "",
   "en": "Adductor brevis"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "uyluk",
  "bolme": "medial",
  "setler": [
   "uyluk-medial"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "corpus ossis pubis ve ramus inferior ossis pubis (dış yüz)",
    "en": "external aspect of body and inferior ramus of pubis",
    "kemik": "os coxae"
   }
  ],
  "insersiyo": [
   {
    "la": "linea pectinea ve linea aspera (proksimal kısım)",
    "en": "line from lesser trochanter to linea aspera and proximal part of linea aspera",
    "kemik": "femur"
   }
  ],
  "sinir": [
   {
    "id": "n_obturatorius_r_anterior",
    "kok": "L2–L3",
    "not": "bazen ön ve arka dalın ikisinden"
   }
  ],
  "hareket": [
   {
    "eklem": "kalca",
    "hareket": "adduksiyon",
    "rol": "ana"
   },
   {
    "eklem": "kalca",
    "hareket": "fleksiyon",
    "rol": "yardimci",
    "not": "özellikle kalça tam ekstansiyona yakınken"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "adductor_longus"
  ],
  "kurallar": [
   "uyluk-medial"
  ],
  "yanilgilar": [
   {
    "alan": "hareket",
    "yanlis": "uyluğa abduksiyon",
    "donus": "Adduktor grup kasları uyluğa abduksiyon değil adduksiyon yaptırır. Abduksiyonu mm. glutei medius ve minimus ile m. tensor fasciae latae yapar.",
    "eklem": "kalca",
    "hareket": "abduksiyon"
   }
  ],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1464, 1474–1475"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "adductor_magnus",
  "ad": {
   "la": "Musculus adductor magnus",
   "kisa": "m. adductor magnus",
   "tr": "",
   "en": "Adductor magnus"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "uyluk",
  "bolme": "medial",
  "setler": [
   "uyluk-medial"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "ramus inferior ossis pubis (küçük bir kısım) ve ramus ossis ischii",
    "en": "inferior ramus of pubis and ischial ramus",
    "kemik": "os coxae",
    "not": "adduktor kısım"
   },
   {
    "la": "tuber ischiadicum (alt-lateral yüz)",
    "en": "inferolateral aspect of ischial tuberosity",
    "kemik": "os coxae",
    "not": "iskiyokondiler (hamstring) kısım"
   }
  ],
  "insersiyo": [
   {
    "la": "tuberositas glutea (medial kenar)",
    "en": "medial margin of gluteal tuberosity",
    "kemik": "femur",
    "not": "pubik lifler"
   },
   {
    "la": "linea aspera ve linea supracondylaris medialis (proksimal kısım)",
    "en": "linea aspera and proximal part of medial supracondylar line",
    "kemik": "femur",
    "not": "adduktor kısım"
   },
   {
    "la": "tuberculum adductorium",
    "en": "adductor tubercle on medial condyle of femur",
    "kemik": "femur",
    "not": "iskiyokondiler (hamstring) kısım"
   }
  ],
  "sinir": [
   {
    "id": "n_obturatorius",
    "kok": "L2–L4",
    "not": "adduktor kısım"
   },
   {
    "id": "n_ischiadicus_pars_tibialis",
    "kok": "",
    "not": "iskiyokondiler (hamstring) kısım"
   }
  ],
  "hareket": [
   {
    "eklem": "kalca",
    "hareket": "adduksiyon",
    "rol": "ana"
   },
   {
    "eklem": "kalca",
    "hareket": "ekstansiyon",
    "rol": "ana",
    "not": "iskiyokondiler kısım"
   },
   {
    "eklem": "kalca",
    "hareket": "ic-rotasyon",
    "rol": "yardimci",
    "not": "proksimal kısım"
   },
   {
    "eklem": "kalca",
    "hareket": "dis-rotasyon",
    "rol": "yardimci",
    "not": "distal kısım"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [],
  "kurallar": [
   "uyluk-medial"
  ],
  "yanilgilar": [
   {
    "alan": "hareket",
    "yanlis": "uyluğa abduksiyon",
    "donus": "Adduktor grup kasları uyluğa abduksiyon değil adduksiyon yaptırır. Abduksiyonu mm. glutei medius ve minimus ile m. tensor fasciae latae yapar. m. adductor magnus'un iskiyokondiler kısmı ayrıca kalçaya ekstansiyon yaptırır.",
    "eklem": "kalca",
    "hareket": "abduksiyon"
   }
  ],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1464, 1474–1475"
   }
  ],
  "farklar": "Gray's 43 kök değerini (L2–L4) iki sinir için tek parantezde verir; tibial bölümün kökü metinden ayrılamıyor, bu yüzden boş bırakıldı (s. 1475).",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "tek-tek"
 },
 {
  "id": "gracilis",
  "ad": {
   "la": "Musculus gracilis",
   "kisa": "m. gracilis",
   "tr": "",
   "en": "Gracilis"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "uyluk",
  "bolme": "medial",
  "setler": [
   "uyluk-medial"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "corpus ossis pubis (alt yarı) ve ramus inferior ossis pubis",
    "en": "lower half of body of pubis and whole inferior pubic ramus",
    "kemik": "os coxae",
    "not": "ayrıca ramus ossis ischii'nin komşu kısmı"
   }
  ],
  "insersiyo": [
   {
    "la": "facies medialis tibiae (proksimal kısım)",
    "en": "proximal part of medial surface of tibia",
    "kemik": "tibia",
    "not": "pes anserinus"
   }
  ],
  "sinir": [
   {
    "id": "n_obturatorius",
    "kok": "L2–L3"
   }
  ],
  "hareket": [
   {
    "eklem": "kalca",
    "hareket": "adduksiyon",
    "rol": "ana"
   },
   {
    "eklem": "kalca",
    "hareket": "fleksiyon",
    "rol": "yardimci"
   },
   {
    "eklem": "diz",
    "hareket": "fleksiyon",
    "rol": "yardimci"
   },
   {
    "eklem": "diz",
    "hareket": "ic-rotasyon",
    "rol": "yardimci",
    "not": "bacağı içe döndürür"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [],
  "kurallar": [
   "uyluk-medial"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1464, 1474"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "semitendinosus",
  "ad": {
   "la": "Musculus semitendinosus",
   "kisa": "m. semitendinosus",
   "tr": "",
   "en": "Semitendinosus"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "uyluk",
  "bolme": "arka",
  "setler": [
   "uyluk-arka"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "tuber ischiadicum (üst alanın alt-medial izi)",
    "en": "inferomedial impression on superior area of ischial tuberosity",
    "kemik": "os coxae",
    "not": "m. biceps femoris caput longum ile ortak tendon"
   }
  ],
  "insersiyo": [
   {
    "la": "facies medialis tibiae (üst kısım)",
    "en": "superior part of medial surface of tibia",
    "kemik": "tibia",
    "not": "pes anserinus; m. sartorius'un arkasında, m. gracilis'in distalinde"
   }
  ],
  "sinir": [
   {
    "id": "n_ischiadicus_pars_tibialis",
    "kok": "L5–S2"
   }
  ],
  "hareket": [
   {
    "eklem": "diz",
    "hareket": "fleksiyon",
    "rol": "ana"
   },
   {
    "eklem": "kalca",
    "hareket": "ekstansiyon",
    "rol": "ana"
   },
   {
    "eklem": "diz",
    "hareket": "ic-rotasyon",
    "rol": "yardimci",
    "not": "diz yarı fleksiyondayken"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "semimembranosus"
  ],
  "kurallar": [
   "uyluk-arka"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1464, 1476–1477"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "semimembranosus",
  "ad": {
   "la": "Musculus semimembranosus",
   "kisa": "m. semimembranosus",
   "tr": "",
   "en": "Semimembranosus"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "uyluk",
  "bolme": "arka",
  "setler": [
   "uyluk-arka"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "tuber ischiadicum (üst-lateral iz)",
    "en": "superolateral impression on ischial tuberosity",
    "kemik": "os coxae"
   }
  ],
  "insersiyo": [
   {
    "la": "condylus medialis tibiae (arka yüzdeki tüberkül)",
    "en": "tubercle on posterior aspect of medial tibial condyle",
    "kemik": "tibia",
    "not": "ana tutunma ('tuberculum tendinis'); ek uzantılar lig. popliteum obliquum ve m. popliteus fasyasına"
   }
  ],
  "sinir": [
   {
    "id": "n_ischiadicus_pars_tibialis",
    "kok": "L5–S2"
   }
  ],
  "hareket": [
   {
    "eklem": "diz",
    "hareket": "fleksiyon",
    "rol": "ana"
   },
   {
    "eklem": "kalca",
    "hareket": "ekstansiyon",
    "rol": "ana"
   },
   {
    "eklem": "diz",
    "hareket": "ic-rotasyon",
    "rol": "yardimci",
    "not": "diz yarı fleksiyondayken"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "semitendinosus"
  ],
  "kurallar": [
   "uyluk-arka"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1464, 1476–1477"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "biceps_femoris",
  "ad": {
   "la": "Musculus biceps femoris",
   "kisa": "m. biceps femoris",
   "tr": "",
   "en": "Biceps femoris"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "uyluk",
  "bolme": "arka",
  "setler": [
   "uyluk-arka"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "tuber ischiadicum (üst alanın alt-medial izi)",
    "en": "inferomedial impression on superior area of ischial tuberosity",
    "kemik": "os coxae",
    "not": "caput longum; m. semitendinosus ile ortak tendon"
   },
   {
    "la": "labium laterale lineae asperae ve linea supracondylaris lateralis",
    "en": "lateral lip of linea aspera and lateral supracondylar line",
    "kemik": "femur",
    "not": "caput breve; bazen yoktur"
   }
  ],
  "insersiyo": [
   {
    "la": "caput fibulae",
    "en": "head of fibula",
    "kemik": "fibula",
    "not": "ana tutunma"
   },
   {
    "la": "condylus lateralis tibiae ve lig. collaterale fibulare",
    "en": "lateral condyle of tibia and fibular collateral ligament",
    "kemik": "tibia",
    "not": "ek uzantılar"
   }
  ],
  "sinir": [
   {
    "id": "n_ischiadicus_pars_tibialis",
    "kok": "L5–S2",
    "not": "caput longum"
   },
   {
    "id": "n_ischiadicus_pars_fibularis",
    "kok": "L5–S2",
    "not": "caput breve"
   }
  ],
  "hareket": [
   {
    "eklem": "diz",
    "hareket": "fleksiyon",
    "rol": "ana"
   },
   {
    "eklem": "kalca",
    "hareket": "ekstansiyon",
    "rol": "ana",
    "not": "caput longum"
   },
   {
    "eklem": "diz",
    "hareket": "dis-rotasyon",
    "rol": "yardimci",
    "not": "diz yarı fleksiyondayken"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [],
  "kurallar": [
   "uyluk-arka"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1464, 1477"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "tek-tek"
 },
 {
  "id": "tibialis_anterior",
  "ad": {
   "la": "Musculus tibialis anterior",
   "kisa": "m. tibialis anterior",
   "tr": "",
   "en": "Tibialis anterior"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "bacak",
  "bolme": "on",
  "setler": [
   "bacak-on"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "condylus lateralis tibiae ve corpus tibiae (lateral yüz, proksimal 1/2–2/3)",
    "en": "lateral condyle and proximal half to two-thirds of lateral surface of tibia",
    "kemik": "tibia"
   },
   {
    "la": "membrana interossea cruris",
    "en": "interosseous membrane of leg",
    "kemik": "",
    "not": "ayrıca fascia cruris"
   }
  ],
  "insersiyo": [
   {
    "la": "os cuneiforme mediale (medial ve alt yüz)",
    "en": "medial and inferior surfaces of medial cuneiform",
    "kemik": "os cuneiforme mediale"
   },
   {
    "la": "basis ossis metatarsi I",
    "en": "base of first metatarsal",
    "kemik": "os metatarsi I"
   }
  ],
  "sinir": [
   {
    "id": "n_fibularis_profundus",
    "kok": "L4–L5"
   }
  ],
  "hareket": [
   {
    "eklem": "ayak-bilegi",
    "hareket": "dorsifleksiyon",
    "rol": "ana"
   },
   {
    "eklem": "ayak",
    "hareket": "inversiyon",
    "rol": "ana",
    "not": "iki hareket birleştiğinde en aktif (yürüme)"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "tibialis_posterior"
  ],
  "kurallar": [
   "bacak-on"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1507–1508"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "extensor_hallucis_longus",
  "ad": {
   "la": "Musculus extensor hallucis longus",
   "kisa": "m. extensor hallucis longus",
   "tr": "",
   "en": "Extensor hallucis longus"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "bacak",
  "bolme": "on",
  "setler": [
   "bacak-on"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "fibula (medial yüz, orta yarı)",
    "en": "middle half of medial surface of fibula",
    "kemik": "fibula"
   },
   {
    "la": "membrana interossea cruris",
    "en": "interosseous membrane of leg",
    "kemik": ""
   }
  ],
  "insersiyo": [
   {
    "la": "phalanx distalis hallucis (taban, dorsal yüz)",
    "en": "dorsal aspect of base of distal phalanx of great toe",
    "kemik": "phalanx distalis I"
   }
  ],
  "sinir": [
   {
    "id": "n_fibularis_profundus",
    "kok": "L5"
   }
  ],
  "hareket": [
   {
    "eklem": "halluks-ip",
    "hareket": "ekstansiyon",
    "rol": "ana"
   },
   {
    "eklem": "halluks-mtp",
    "hareket": "ekstansiyon",
    "rol": "ana"
   },
   {
    "eklem": "ayak-bilegi",
    "hareket": "dorsifleksiyon",
    "rol": "yardimci"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "extensor_digitorum_longus",
   "flexor_hallucis_longus"
  ],
  "kurallar": [
   "bacak-on"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1508–1509"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "extensor_digitorum_longus",
  "ad": {
   "la": "Musculus extensor digitorum longus",
   "kisa": "m. extensor digitorum longus",
   "tr": "",
   "en": "Extensor digitorum longus"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "bacak",
  "bolme": "on",
  "setler": [
   "bacak-on"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "condylus lateralis tibiae",
    "en": "lateral condyle of tibia",
    "kemik": "tibia"
   },
   {
    "la": "fibula (medial yüz, proksimal 3/4)",
    "en": "proximal three-quarters of medial surface of fibula",
    "kemik": "fibula"
   },
   {
    "la": "membrana interossea cruris",
    "en": "interosseous membrane of leg",
    "kemik": "",
    "not": "ayrıca fascia cruris ve septum intermusculare cruris anterius"
   }
  ],
  "insersiyo": [
   {
    "la": "phalanges mediae et distales digitorum pedis II–V",
    "en": "middle and distal phalanges of toes 2–5",
    "kemik": "phalanges pedis",
    "not": "dorsal aponevroz aracılığıyla: orta bant orta falanks tabanına, yan bantlar distal falanks tabanına"
   }
  ],
  "sinir": [
   {
    "id": "n_fibularis_profundus",
    "kok": "L5–S1"
   }
  ],
  "hareket": [
   {
    "eklem": "ayak-parmak-mtp",
    "hareket": "ekstansiyon",
    "rol": "ana",
    "not": "lateral dört parmak"
   },
   {
    "eklem": "ayak-parmak-ip",
    "hareket": "ekstansiyon",
    "rol": "ana"
   },
   {
    "eklem": "ayak-bilegi",
    "hareket": "dorsifleksiyon",
    "rol": "yardimci",
    "not": "m. tibialis anterior, m. extensor hallucis longus ve m. fibularis tertius ile"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "extensor_hallucis_longus",
   "flexor_digitorum_longus"
  ],
  "kurallar": [
   "bacak-on"
  ],
  "yanilgilar": [
   {
    "alan": "insersiyo",
    "yanlis": "proksimal falanksların dorsal yüzü",
    "donus": "m. extensor digitorum longus tendonları proksimal falanksta sonlanmaz; dorsal aponevroz aracılığıyla 2–5. parmakların orta ve distal falankslarının tabanına tutunur.",
    "la": "phalanges proximales digitorum pedis II–V"
   }
  ],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1509"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "fibularis_tertius",
  "ad": {
   "la": "Musculus fibularis tertius",
   "kisa": "m. fibularis tertius",
   "tr": "",
   "en": "Fibularis tertius"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "bacak",
  "bolme": "on",
  "setler": [
   "bacak-on"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "fibula (medial yüz, distal 1/3)",
    "en": "distal third of medial surface of fibula",
    "kemik": "fibula"
   },
   {
    "la": "membrana interossea cruris",
    "en": "interosseous membrane of leg",
    "kemik": "",
    "not": "ayrıca septum intermusculare cruris anterius"
   }
  ],
  "insersiyo": [
   {
    "la": "basis ossis metatarsi V (dorsal yüz, medial kısım)",
    "en": "medial part of dorsal surface of base of fifth metatarsal",
    "kemik": "os metatarsi V"
   }
  ],
  "sinir": [
   {
    "id": "n_fibularis_profundus",
    "kok": "L5–S1"
   }
  ],
  "hareket": [
   {
    "eklem": "ayak-bilegi",
    "hareket": "dorsifleksiyon",
    "rol": "yardimci",
    "not": "salınım fazında; m. extensor digitorum longus ve m. tibialis anterior ile"
   },
   {
    "eklem": "ayak",
    "hareket": "eversiyon",
    "rol": "yardimci",
    "not": "mm. fibulares longus ve brevis ile"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "fibularis_brevis"
  ],
  "kurallar": [
   "bacak-on"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1509–1510"
   }
  ],
  "farklar": "Sıklıkla m. extensor digitorum longus'un bir parçası gibi görünür ('beşinci tendon'); ön bölmededir ve n. fibularis profundus uyarır, lateral bölme kası değildir.",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "fibularis_longus",
  "ad": {
   "la": "Musculus fibularis longus",
   "kisa": "m. fibularis longus",
   "tr": "",
   "en": "Fibularis longus"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "bacak",
  "bolme": "lateral",
  "setler": [
   "bacak-lateral"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "caput fibulae ve corpus fibulae (lateral yüz, proksimal 2/3)",
    "en": "head and proximal two-thirds of lateral surface of fibula",
    "kemik": "fibula",
    "not": "ayrıca fascia cruris ve septa intermuscularia"
   }
  ],
  "insersiyo": [
   {
    "la": "basis ossis metatarsi I (lateral taraf)",
    "en": "lateral side of base of first metatarsal",
    "kemik": "os metatarsi I"
   },
   {
    "la": "os cuneiforme mediale (lateral yüz)",
    "en": "lateral aspect of medial cuneiform",
    "kemik": "os cuneiforme mediale",
    "not": "tendon ayak tabanını çaprazlar"
   }
  ],
  "sinir": [
   {
    "id": "n_fibularis_superficialis",
    "kok": "L5–S1"
   }
  ],
  "hareket": [
   {
    "eklem": "ayak",
    "hareket": "eversiyon",
    "rol": "ana"
   },
   {
    "eklem": "ayak-bilegi",
    "hareket": "plantar-fleksiyon",
    "rol": "yardimci"
   },
   {
    "eklem": "ayak",
    "hareket": "stabilizasyon",
    "rol": "stabilizator",
    "not": "ayağın uzunlamasına ve enine kemerlerini destekler"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "fibularis_brevis"
  ],
  "kurallar": [
   "bacak-lateral"
  ],
  "yanilgilar": [
   {
    "alan": "insersiyo",
    "yanlis": "1. metakarpın tabanı",
    "donus": "Metakarp eldedir; ayaktaki karşılığı metatarstır. m. fibularis longus os metatarsi I tabanına ve os cuneiforme mediale'ye tutunur.",
    "la": "basis ossis metacarpi I"
   }
  ],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1510"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "fibularis_brevis",
  "ad": {
   "la": "Musculus fibularis brevis",
   "kisa": "m. fibularis brevis",
   "tr": "",
   "en": "Fibularis brevis"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "bacak",
  "bolme": "lateral",
  "setler": [
   "bacak-lateral"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "corpus fibulae (lateral yüz, distal 2/3)",
    "en": "distal two-thirds of lateral surface of fibula",
    "kemik": "fibula",
    "not": "ayrıca septa intermuscularia"
   }
  ],
  "insersiyo": [
   {
    "la": "tuberositas ossis metatarsi V",
    "en": "tuberosity on lateral side of base of fifth metatarsal",
    "kemik": "os metatarsi V"
   }
  ],
  "sinir": [
   {
    "id": "n_fibularis_superficialis",
    "kok": "L5–S1"
   }
  ],
  "hareket": [
   {
    "eklem": "ayak",
    "hareket": "eversiyon",
    "rol": "ana",
    "not": "inversiyonu sınırlar; bacağı ayak üzerinde lateralden sabitler"
   },
   {
    "eklem": "ayak-bilegi",
    "hareket": "plantar-fleksiyon",
    "rol": "yardimci"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "fibularis_longus",
   "fibularis_tertius"
  ],
  "kurallar": [
   "bacak-lateral"
  ],
  "yanilgilar": [
   {
    "alan": "insersiyo",
    "yanlis": "5. metakarp",
    "donus": "Metakarp eldedir; ayaktaki karşılığı metatarstır. m. fibularis brevis tuberositas ossis metatarsi V'e tutunur.",
    "la": "os metacarpi V"
   },
   {
    "alan": "origo",
    "yanlis": "caput fibulae",
    "donus": "m. fibularis brevis fibula başından başlamaz; lateral yüzün distal 2/3'ünden başlar. Baş ve lateral yüzün proksimal 2/3'ü m. fibularis longus'un origosudur.",
    "la": "caput fibulae"
   }
  ],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1510"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "gastrocnemius",
  "ad": {
   "la": "Musculus gastrocnemius",
   "kisa": "m. gastrocnemius",
   "tr": "",
   "en": "Gastrocnemius"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "bacak",
  "bolme": "arka-yuzeyel",
  "setler": [
   "bacak-arka"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "condylus medialis femoris (arka-üst kısım) ve facies poplitea",
    "en": "posterior part of medial femoral condyle and popliteal surface above it",
    "kemik": "femur",
    "not": "caput mediale (daha büyük)"
   },
   {
    "la": "condylus lateralis femoris (lateral yüz) ve linea supracondylaris lateralis (distal kısım)",
    "en": "lateral surface of lateral femoral condyle and distal part of lateral supracondylar line",
    "kemik": "femur",
    "not": "caput laterale"
   }
  ],
  "insersiyo": [
   {
    "la": "tuber calcanei",
    "en": "calcaneal tuberosity",
    "kemik": "calcaneus",
    "not": "tendo calcaneus (m. soleus tendonuyla birleşerek)"
   }
  ],
  "sinir": [
   {
    "id": "n_tibialis",
    "kok": "S1–S2"
   }
  ],
  "hareket": [
   {
    "eklem": "ayak-bilegi",
    "hareket": "plantar-fleksiyon",
    "rol": "ana",
    "not": "yürüme, koşma ve sıçramada itme kuvveti"
   },
   {
    "eklem": "diz",
    "hareket": "fleksiyon",
    "rol": "yardimci"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "soleus"
  ],
  "kurallar": [
   "bacak-arka"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1510–1512"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "tek-tek"
 },
 {
  "id": "soleus",
  "ad": {
   "la": "Musculus soleus",
   "kisa": "m. soleus",
   "tr": "",
   "en": "Soleus"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "bacak",
  "bolme": "arka-yuzeyel",
  "setler": [
   "bacak-arka"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "caput fibulae ve corpus fibulae (arka yüz, proksimal 1/4)",
    "en": "posterior surface of head and proximal quarter of body of fibula",
    "kemik": "fibula"
   },
   {
    "la": "linea musculi solei ve margo medialis tibiae (orta 1/3)",
    "en": "soleal line and middle third of medial border of tibia",
    "kemik": "tibia"
   },
   {
    "la": "arcus tendineus musculi solei",
    "en": "tendinous arch of soleus",
    "kemik": "",
    "not": "tibia ile fibula arasında; damar-sinir paketinin üstünden geçer"
   }
  ],
  "insersiyo": [
   {
    "la": "tuber calcanei",
    "en": "calcaneal tuberosity",
    "kemik": "calcaneus",
    "not": "tendo calcaneus (m. gastrocnemius tendonuyla birleşerek)"
   }
  ],
  "sinir": [
   {
    "id": "n_tibialis",
    "kok": "S1–S2",
    "not": "iki dal"
   }
  ],
  "hareket": [
   {
    "eklem": "ayak-bilegi",
    "hareket": "plantar-fleksiyon",
    "rol": "ana",
    "not": "ayakta dururken sürekli aktif (postür kası)"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "gastrocnemius"
  ],
  "kurallar": [
   "bacak-arka"
  ],
  "yanilgilar": [
   {
    "alan": "hareket",
    "yanlis": "bacağa (dize) fleksiyon",
    "donus": "m. soleus diz eklemini çaprazlamaz, bu yüzden dize fleksiyon yaptıramaz; ayak bileğine plantar fleksiyon yaptırır. Triceps surae içinde dize fleksiyon yaptıran m. gastrocnemius'tur.",
    "eklem": "diz",
    "hareket": "fleksiyon"
   }
  ],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1511–1512"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "plantaris",
  "ad": {
   "la": "Musculus plantaris",
   "kisa": "m. plantaris",
   "tr": "",
   "en": "Plantaris"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "bacak",
  "bolme": "arka-yuzeyel",
  "setler": [
   "bacak-arka"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "linea supracondylaris lateralis (distal kısım)",
    "en": "distal part of lateral supracondylar line",
    "kemik": "femur"
   },
   {
    "la": "lig. popliteum obliquum",
    "en": "oblique popliteal ligament",
    "kemik": ""
   }
  ],
  "insersiyo": [
   {
    "la": "calcaneus (tendo calcaneus'un hemen medialinde)",
    "en": "calcaneus just medial to calcaneal tendon",
    "kemik": "calcaneus",
    "not": "bazen tendo calcaneus'a karışır"
   }
  ],
  "sinir": [
   {
    "id": "n_tibialis",
    "kok": "S1–S2",
    "not": "çoğu kez caput laterale (m. gastrocnemius) dalından"
   }
  ],
  "hareket": [
   {
    "eklem": "ayak-bilegi",
    "hareket": "plantar-fleksiyon",
    "rol": "yardimci",
    "not": "zayıf; m. gastrocnemius ile birlikte çalıştığı kabul edilir"
   },
   {
    "eklem": "diz",
    "hareket": "fleksiyon",
    "rol": "yardimci",
    "not": "zayıf"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [],
  "kurallar": [
   "bacak-arka"
  ],
  "yanilgilar": [],
  "klinik": "İnsanda neredeyse körelmiş bir kastır; bazen çifttir, bazen bulunmaz.",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1511"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "popliteus",
  "ad": {
   "la": "Musculus popliteus",
   "kisa": "m. popliteus",
   "tr": "",
   "en": "Popliteus"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "bacak",
  "bolme": "arka-derin",
  "setler": [
   "bacak-arka",
   "diz"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "condylus lateralis femoris (lateral yüz; sulcus popliteus'un ön ucu)",
    "en": "lateral aspect of lateral femoral condyle (anterior end of groove for popliteus)",
    "kemik": "femur",
    "not": "tendon eklem kapsülü içindedir"
   },
   {
    "la": "lig. popliteum arcuatum; meniscus lateralis",
    "en": "arcuate popliteal ligament; lateral meniscus",
    "kemik": "",
    "not": "ek lifler"
   }
  ],
  "insersiyo": [
   {
    "la": "facies posterior tibiae (linea musculi solei'nin üstündeki üçgen alan)",
    "en": "posterior surface of tibia proximal to soleal line",
    "kemik": "tibia",
    "not": "medial 2/3"
   }
  ],
  "sinir": [
   {
    "id": "n_tibialis",
    "kok": "L4–S1"
   }
  ],
  "hareket": [
   {
    "eklem": "diz",
    "hareket": "ic-rotasyon",
    "rol": "ana",
    "not": "tibiayı femur üzerinde içe; tibia sabitse femuru dışa döndürür"
   },
   {
    "eklem": "diz",
    "hareket": "kilit-acma",
    "rol": "baslatici",
    "not": "tam ekstansiyondaki dizin fleksiyonu başlarken eklemin kilidini açar"
   },
   {
    "eklem": "diz",
    "hareket": "stabilizasyon",
    "rol": "stabilizator",
    "not": "çömelirken; meniscus lateralis'i geri çekerek korur"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [],
  "kurallar": [
   "bacak-arka"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1506–1507"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "flexor_hallucis_longus",
  "ad": {
   "la": "Musculus flexor hallucis longus",
   "kisa": "m. flexor hallucis longus",
   "tr": "",
   "en": "Flexor hallucis longus"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "bacak",
  "bolme": "arka-derin",
  "setler": [
   "bacak-arka"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "fibula (arka yüz, distal 2/3)",
    "en": "distal two-thirds of posterior surface of fibula",
    "kemik": "fibula",
    "not": "en distal 2,5 cm hariç"
   },
   {
    "la": "membrana interossea cruris",
    "en": "interosseous membrane of leg",
    "kemik": "",
    "not": "ayrıca septum intermusculare cruris posterius"
   }
  ],
  "insersiyo": [
   {
    "la": "phalanx distalis hallucis (taban, plantar yüz)",
    "en": "plantar aspect of base of distal phalanx of great toe",
    "kemik": "phalanx distalis I",
    "not": "tendon sustentaculum tali'nin altındaki oluktan geçer"
   }
  ],
  "sinir": [
   {
    "id": "n_tibialis",
    "kok": "L5–S2",
    "not": "ağırlıklı S1"
   }
  ],
  "hareket": [
   {
    "eklem": "halluks-ip",
    "hareket": "fleksiyon",
    "rol": "ana"
   },
   {
    "eklem": "halluks-mtp",
    "hareket": "fleksiyon",
    "rol": "yardimci"
   },
   {
    "eklem": "ayak-bilegi",
    "hareket": "plantar-fleksiyon",
    "rol": "yardimci",
    "not": "zayıf"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "flexor_digitorum_longus",
   "extensor_hallucis_longus"
  ],
  "kurallar": [
   "bacak-arka"
  ],
  "yanilgilar": [
   {
    "alan": "insersiyo",
    "yanlis": "sustentaculum tali",
    "donus": "sustentaculum tali m. flexor hallucis longus tendonunun altından geçtiği oluktur, insersiyosu değildir. Tendon ayak başparmağının distal falanksının tabanına tutunur.",
    "la": "sustentaculum tali"
   }
  ],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1512–1513"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "tek-tek"
 },
 {
  "id": "flexor_digitorum_longus",
  "ad": {
   "la": "Musculus flexor digitorum longus",
   "kisa": "m. flexor digitorum longus",
   "tr": "",
   "en": "Flexor digitorum longus"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "bacak",
  "bolme": "arka-derin",
  "setler": [
   "bacak-arka"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "facies posterior tibiae (linea musculi solei'nin altı; m. tibialis posterior'un mediali)",
    "en": "posterior surface of tibia below soleal line, medial to tibialis posterior",
    "kemik": "tibia",
    "not": "ayrıca m. tibialis posterior fasyası"
   }
  ],
  "insersiyo": [
   {
    "la": "phalanges distales digitorum pedis II–V (taban, plantar yüz)",
    "en": "plantar surfaces of bases of distal phalanges of toes 2–5",
    "kemik": "phalanges pedis",
    "not": "m. flexor digitorum brevis tendonlarının içinden geçer"
   }
  ],
  "sinir": [
   {
    "id": "n_tibialis",
    "kok": "L5–S2"
   }
  ],
  "hareket": [
   {
    "eklem": "ayak-parmak-ip",
    "hareket": "fleksiyon",
    "rol": "ana",
    "not": "lateral dört parmak; özellikle distal falankslar"
   },
   {
    "eklem": "ayak-parmak-mtp",
    "hareket": "fleksiyon",
    "rol": "yardimci"
   },
   {
    "eklem": "ayak-bilegi",
    "hareket": "plantar-fleksiyon",
    "rol": "yardimci",
    "not": "zayıf"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "flexor_hallucis_longus",
   "extensor_digitorum_longus"
  ],
  "kurallar": [
   "bacak-arka"
  ],
  "yanilgilar": [
   {
    "alan": "origo",
    "yanlis": "fibulanın arka yüzü",
    "donus": "Fibulanın arka yüzünden başlayan kas m. flexor hallucis longus'tur. m. flexor digitorum longus tibianın arka yüzünden başlar.",
    "la": "facies posterior fibulae"
   }
  ],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1512–1513"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "tek-tek"
 },
 {
  "id": "tibialis_posterior",
  "ad": {
   "la": "Musculus tibialis posterior",
   "kisa": "m. tibialis posterior",
   "tr": "",
   "en": "Tibialis posterior"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "bacak",
  "bolme": "arka-derin",
  "setler": [
   "bacak-arka"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "membrana interossea cruris (arka yüz)",
    "en": "posterior surface of interosseous membrane of leg",
    "kemik": ""
   },
   {
    "la": "facies posterior tibiae (lateral alan, linea musculi solei'nin altı)",
    "en": "lateral area of posterior surface of tibia below soleal line",
    "kemik": "tibia"
   },
   {
    "la": "facies posterior fibulae (medial şerit, proksimal 2/3)",
    "en": "medial strip of posterior surface of fibula (proximal two-thirds)",
    "kemik": "fibula"
   }
  ],
  "insersiyo": [
   {
    "la": "tuberositas ossis navicularis",
    "en": "tuberosity of navicular",
    "kemik": "os naviculare",
    "not": "ana tutunma"
   },
   {
    "la": "os cuneiforme mediale; sustentaculum tali",
    "en": "medial cuneiform; sustentaculum tali",
    "kemik": "ossa tarsi"
   },
   {
    "la": "os cuneiforme intermedium; bases ossium metatarsi II–IV",
    "en": "intermediate cuneiform; bases of second to fourth metatarsals",
    "kemik": "ossa tarsi, ossa metatarsi",
    "not": "derin lateral bölüm"
   }
  ],
  "sinir": [
   {
    "id": "n_tibialis",
    "kok": "L4–L5"
   }
  ],
  "hareket": [
   {
    "eklem": "ayak",
    "hareket": "inversiyon",
    "rol": "ana",
    "not": "ayağın asıl invertörü"
   },
   {
    "eklem": "ayak-bilegi",
    "hareket": "plantar-fleksiyon",
    "rol": "yardimci",
    "not": "topuğun yükselmesini başlatır"
   },
   {
    "eklem": "ayak",
    "hareket": "stabilizasyon",
    "rol": "stabilizator",
    "not": "medial uzunlamasına kemeri korur"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "tibialis_anterior"
  ],
  "kurallar": [
   "bacak-arka"
  ],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1513–1514"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "extensor_digitorum_brevis",
  "ad": {
   "la": "Musculus extensor digitorum brevis",
   "kisa": "m. extensor digitorum brevis",
   "tr": "",
   "en": "Extensor digitorum brevis"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "ayak",
  "bolme": "dorsal",
  "setler": [
   "ayak",
   "ayak-sirti"
  ],
  "kitle": [
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "calcaneus (üst-lateral yüzün distal kısmı)",
    "en": "distal part of superolateral surface of calcaneus",
    "kemik": "calcaneus",
    "not": "ayrıca lig. talocalcaneum interosseum ve retinaculum musculorum extensorum inferius"
   }
  ],
  "insersiyo": [
   {
    "la": "m. extensor digitorum longus tendonları (II–IV. parmaklar, lateral taraf)",
    "en": "lateral sides of extensor digitorum longus tendons to toes 2–4",
    "kemik": "phalanges pedis",
    "not": "dorsal aponevroz aracılığıyla"
   }
  ],
  "sinir": [
   {
    "id": "n_fibularis_profundus",
    "kok": "L5–S1",
    "not": "lateral uç dal"
   }
  ],
  "hareket": [
   {
    "eklem": "ayak-parmak-mtp",
    "hareket": "ekstansiyon",
    "rol": "yardimci",
    "not": "II–IV. parmaklar; m. extensor digitorum longus tendonları üzerinden"
   },
   {
    "eklem": "ayak-parmak-ip",
    "hareket": "ekstansiyon",
    "rol": "yardimci"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "extensor_hallucis_brevis",
   "flexor_digitorum_brevis"
  ],
  "kurallar": [],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1551"
   }
  ],
  "farklar": "Gray's 43 m. extensor hallucis brevis'i bu kasın medial kısmı olarak anlatır; burada ayrı kayıt açıldı.",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "extensor_hallucis_brevis",
  "ad": {
   "la": "Musculus extensor hallucis brevis",
   "kisa": "m. extensor hallucis brevis",
   "tr": "",
   "en": "Extensor hallucis brevis"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "ayak",
  "bolme": "dorsal",
  "setler": [
   "ayak",
   "ayak-sirti"
  ],
  "kitle": [
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "calcaneus (üst-lateral yüzün distal kısmı)",
    "en": "distal part of superolateral surface of calcaneus",
    "kemik": "calcaneus",
    "not": "m. extensor digitorum brevis ile ortak"
   }
  ],
  "insersiyo": [
   {
    "la": "phalanx proximalis hallucis (taban, dorsal yüz)",
    "en": "dorsal aspect of base of proximal phalanx of great toe",
    "kemik": "phalanx proximalis I"
   }
  ],
  "sinir": [
   {
    "id": "n_fibularis_profundus",
    "kok": "L5–S1",
    "not": "lateral uç dal"
   }
  ],
  "hareket": [
   {
    "eklem": "halluks-mtp",
    "hareket": "ekstansiyon",
    "rol": "yardimci"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "extensor_digitorum_brevis",
   "flexor_hallucis_brevis"
  ],
  "kurallar": [],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1551"
   }
  ],
  "farklar": "Gray's 43'te ayrı başlığı yoktur; m. extensor digitorum brevis'in az çok ayrı olan medial kısmıdır (s. 1551).",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "abductor_hallucis",
  "ad": {
   "la": "Musculus abductor hallucis",
   "kisa": "m. abductor hallucis",
   "tr": "",
   "en": "Abductor hallucis"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "ayak",
  "bolme": "plantar-1",
  "setler": [
   "ayak",
   "ayak-plantar-1"
  ],
  "kitle": [
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "retinaculum musculorum flexorum (ayak bileği)",
    "en": "flexor retinaculum of ankle",
    "kemik": "",
    "not": "asıl başlangıç"
   },
   {
    "la": "processus medialis tuberis calcanei",
    "en": "medial process of calcaneal tuberosity",
    "kemik": "calcaneus",
    "not": "ayrıca aponeurosis plantaris"
   }
  ],
  "insersiyo": [
   {
    "la": "phalanx proximalis hallucis (taban, medial taraf)",
    "en": "medial side of base of proximal phalanx of great toe",
    "kemik": "phalanx proximalis I",
    "not": "m. flexor hallucis brevis'in medial tendonuyla; medial sesamoid kemiğe de"
   }
  ],
  "sinir": [
   {
    "id": "n_plantaris_medialis",
    "kok": "S1–S2"
   }
  ],
  "hareket": [
   {
    "eklem": "halluks-mtp",
    "hareket": "abduksiyon",
    "rol": "ana",
    "not": "ikinci metatars eksenine göre"
   },
   {
    "eklem": "ayak",
    "hareket": "stabilizasyon",
    "rol": "stabilizator",
    "not": "ayak kemerini korumaya yardım eder"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "adductor_hallucis"
  ],
  "kurallar": [],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1547, 1551"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "flexor_digitorum_brevis",
  "ad": {
   "la": "Musculus flexor digitorum brevis",
   "kisa": "m. flexor digitorum brevis",
   "tr": "",
   "en": "Flexor digitorum brevis"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "ayak",
  "bolme": "plantar-1",
  "setler": [
   "ayak",
   "ayak-plantar-1"
  ],
  "kitle": [
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "processus medialis tuberis calcanei",
    "en": "medial process of calcaneal tuberosity",
    "kemik": "calcaneus"
   },
   {
    "la": "aponeurosis plantaris (orta kısım)",
    "en": "central part of plantar aponeurosis",
    "kemik": ""
   }
  ],
  "insersiyo": [
   {
    "la": "phalanges mediae digitorum pedis II–V (gövdenin iki yanı)",
    "en": "both sides of bodies of middle phalanges of toes 2–5",
    "kemik": "phalanges pedis",
    "not": "tendon m. flexor digitorum longus tendonunun çevresinde ikiye ayrılır"
   }
  ],
  "sinir": [
   {
    "id": "n_plantaris_medialis",
    "kok": "S1–S2"
   }
  ],
  "hareket": [
   {
    "eklem": "ayak-parmak-pip",
    "hareket": "fleksiyon",
    "rol": "ana",
    "not": "lateral dört parmak; ayak bileğinin her pozisyonunda eşit etkili"
   },
   {
    "eklem": "ayak",
    "hareket": "stabilizasyon",
    "rol": "stabilizator",
    "not": "ayak kemerini korumaya yardım eder"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "flexor_digitorum_longus",
   "extensor_digitorum_brevis"
  ],
  "kurallar": [],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "Eldeki m. flexor digitorum superficialis'in ayaktaki karşılığı: orta falanksa tutunur, uzun fleksör tendonu içinden geçer.",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1548, 1551"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "abductor_digiti_minimi_pedis",
  "ad": {
   "la": "Musculus abductor digiti minimi (pedis)",
   "kisa": "m. abductor digiti minimi (pedis)",
   "tr": "",
   "en": "Abductor digiti minimi (foot)"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "ayak",
  "bolme": "plantar-1",
  "setler": [
   "ayak",
   "ayak-plantar-1"
  ],
  "kitle": [
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "tuber calcanei (processus medialis ve processus lateralis)",
    "en": "both processes of calcaneal tuberosity",
    "kemik": "calcaneus",
    "not": "ayrıca aponeurosis plantaris"
   }
  ],
  "insersiyo": [
   {
    "la": "phalanx proximalis digiti V (taban, lateral taraf)",
    "en": "lateral side of base of proximal phalanx of fifth toe",
    "kemik": "phalanx proximalis V",
    "not": "m. flexor digiti minimi brevis ile birlikte"
   }
  ],
  "sinir": [
   {
    "id": "n_plantaris_lateralis",
    "kok": "S1–S3"
   }
  ],
  "hareket": [
   {
    "eklem": "ayak-parmak-mtp",
    "hareket": "fleksiyon",
    "rol": "ana",
    "not": "beşinci parmak; adına karşın abduktordan çok fleksördür"
   },
   {
    "eklem": "ayak-parmak-mtp",
    "hareket": "abduksiyon",
    "rol": "yardimci",
    "not": "beşinci parmak"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "abductor_digiti_minimi_manus",
   "flexor_digiti_minimi_brevis_pedis"
  ],
  "kurallar": [],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1548, 1551"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "quadratus_plantae",
  "ad": {
   "la": "Musculus quadratus plantae",
   "kisa": "m. quadratus plantae",
   "tr": "",
   "en": "Quadratus plantae"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "ayak",
  "bolme": "plantar-2",
  "setler": [
   "ayak",
   "ayak-plantar-2"
  ],
  "kitle": [
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "calcaneus (medial içbükey yüz)",
    "en": "medial concave surface of calcaneus",
    "kemik": "calcaneus",
    "not": "caput mediale (büyük)"
   },
   {
    "la": "calcaneus (processus lateralis'in distali) ve lig. plantare longum",
    "en": "calcaneus distal to lateral process of tuberosity and long plantar ligament",
    "kemik": "calcaneus",
    "not": "caput laterale; daha sık eksik olan baş"
   }
  ],
  "insersiyo": [
   {
    "la": "tendo musculi flexoris digitorum longi",
    "en": "tendon of flexor digitorum longus",
    "kemik": "",
    "not": "dört tendona ayrıldığı yerde"
   }
  ],
  "sinir": [
   {
    "id": "n_plantaris_lateralis",
    "kok": "S1–S3"
   }
  ],
  "hareket": [
   {
    "eklem": "ayak-parmak-ip",
    "hareket": "fleksiyon",
    "rol": "yardimci",
    "not": "m. flexor digitorum longus tendonlarını çekerek, ayak bileğinin her pozisyonunda lateral dört parmağı büker"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "quadratus_femoris"
  ],
  "kurallar": [],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1548, 1551"
   }
  ],
  "farklar": "Diğer adı m. flexor accessorius (Gray's 43, s. 1548).",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "lumbricales_pedis",
  "ad": {
   "la": "Musculi lumbricales (pedis)",
   "kisa": "mm. lumbricales (pedis)",
   "tr": "",
   "en": "Lumbricals (foot)"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "ayak",
  "bolme": "plantar-2",
  "setler": [
   "ayak",
   "ayak-plantar-2"
  ],
  "kitle": [
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "tendines musculi flexoris digitorum longi",
    "en": "tendons of flexor digitorum longus",
    "kemik": "",
    "not": "1.: birinci tendonun medial kenarı; 2.–4.: komşu iki tendonun karşılıklı yüzleri"
   }
  ],
  "insersiyo": [
   {
    "la": "aponeurosis dorsalis digitorum pedis II–V (medial taraf)",
    "en": "extensor expansions on proximal phalanges of toes 2–5 (medial sides)",
    "kemik": "phalanges pedis"
   }
  ],
  "sinir": [
   {
    "id": "n_plantaris_medialis",
    "kok": "S2–S3",
    "not": "1. lumbrikal"
   },
   {
    "id": "n_plantaris_lateralis_r_profundus",
    "kok": "S2–S3",
    "not": "2.–4. lumbrikaller"
   }
  ],
  "hareket": [
   {
    "eklem": "ayak-parmak-ip",
    "hareket": "ekstansiyon",
    "rol": "ana",
    "not": "özellikle fleksörler aktifken interfalangeal eklemleri ekstansiyonda tutar"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "lumbricales_manus"
  ],
  "kurallar": [],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1548–1549, 1551"
   }
  ],
  "farklar": "Gray's 43 kök değerini (S2–S3) cümlenin sonunda verir; 1. lumbrikal (n. plantaris medialis) için ayrı kök yazılmaz. Elde 1–2. lumbrikalleri n. medianus uyarırken ayakta yalnız 1. lumbrikal medial sinirden uyarılır.",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "flexor_hallucis_brevis",
  "ad": {
   "la": "Musculus flexor hallucis brevis",
   "kisa": "m. flexor hallucis brevis",
   "tr": "",
   "en": "Flexor hallucis brevis"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "ayak",
  "bolme": "plantar-3",
  "setler": [
   "ayak",
   "ayak-plantar-3"
  ],
  "kitle": [
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "os cuboideum (plantar yüz, medial kısım) ve os cuneiforme laterale",
    "en": "medial part of plantar surface of cuboid and adjacent lateral cuneiform",
    "kemik": "ossa tarsi",
    "not": "lateral kol"
   },
   {
    "la": "tendo musculi tibialis posterioris",
    "en": "tendon of tibialis posterior",
    "kemik": "",
    "not": "medial kol"
   }
  ],
  "insersiyo": [
   {
    "la": "phalanx proximalis hallucis (tabanın iki yanı)",
    "en": "both sides of base of proximal phalanx of great toe",
    "kemik": "phalanx proximalis I",
    "not": "her tendonda bir sesamoid kemik; medial tendon m. abductor hallucis, lateral tendon m. adductor hallucis ile"
   }
  ],
  "sinir": [
   {
    "id": "n_plantaris_medialis",
    "kok": "S1–S2"
   }
  ],
  "hareket": [
   {
    "eklem": "halluks-mtp",
    "hareket": "fleksiyon",
    "rol": "ana"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "flexor_hallucis_longus",
   "extensor_hallucis_brevis"
  ],
  "kurallar": [],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1549, 1551"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "adductor_hallucis",
  "ad": {
   "la": "Musculus adductor hallucis",
   "kisa": "m. adductor hallucis",
   "tr": "",
   "en": "Adductor hallucis"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "ayak",
  "bolme": "plantar-3",
  "setler": [
   "ayak",
   "ayak-plantar-3"
  ],
  "kitle": [
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "bases ossium metatarsi II–IV",
    "en": "bases of second to fourth metatarsals",
    "kemik": "ossa metatarsi",
    "not": "caput obliquum; ayrıca m. fibularis longus tendon kılıfı"
   },
   {
    "la": "ligg. plantaria (art. metatarsophalangeae III–V) ve lig. metatarsale transversum profundum",
    "en": "plantar metatarsophalangeal ligaments of toes 3–5 and deep transverse metatarsal ligaments",
    "kemik": "",
    "not": "caput transversum"
   }
  ],
  "insersiyo": [
   {
    "la": "phalanx proximalis hallucis (taban, lateral taraf)",
    "en": "lateral side of base of proximal phalanx of great toe",
    "kemik": "phalanx proximalis I",
    "not": "lateral sesamoid kemik aracılığıyla"
   }
  ],
  "sinir": [
   {
    "id": "n_plantaris_lateralis_r_profundus",
    "kok": "S2–S3"
   }
  ],
  "hareket": [
   {
    "eklem": "halluks-mtp",
    "hareket": "adduksiyon",
    "rol": "ana"
   },
   {
    "eklem": "halluks-mtp",
    "hareket": "fleksiyon",
    "rol": "yardimci",
    "not": "proksimal falanksı kısmen büker"
   },
   {
    "eklem": "ayak",
    "hareket": "stabilizasyon",
    "rol": "stabilizator",
    "not": "metatars başlarını sabitler (enine kemer)"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "abductor_hallucis",
   "adductor_pollicis"
  ],
  "kurallar": [],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1549, 1551"
   }
  ],
  "farklar": "Gray's 43 hareket paragrafında adduksiyonu yazmaz; yalnız proksimal falanksa kısmi fleksiyon ve metatars başlarının sabitlenmesi geçer (s. 1549). Adduksiyon kasın adından ve genel kabulden eklendi.",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "flexor_digiti_minimi_brevis_pedis",
  "ad": {
   "la": "Musculus flexor digiti minimi brevis (pedis)",
   "kisa": "m. flexor digiti minimi brevis (pedis)",
   "tr": "",
   "en": "Flexor digiti minimi brevis (foot)"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "ayak",
  "bolme": "plantar-3",
  "setler": [
   "ayak",
   "ayak-plantar-3"
  ],
  "kitle": [
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "basis ossis metatarsi V (plantar yüz, medial kısım)",
    "en": "medial part of plantar surface of base of fifth metatarsal",
    "kemik": "os metatarsi V",
    "not": "ayrıca m. fibularis longus tendon kılıfı"
   }
  ],
  "insersiyo": [
   {
    "la": "phalanx proximalis digiti V (taban, lateral taraf)",
    "en": "lateral side of base of proximal phalanx of fifth toe",
    "kemik": "phalanx proximalis V",
    "not": "m. abductor digiti minimi tendonuyla"
   }
  ],
  "sinir": [
   {
    "id": "n_plantaris_lateralis_r_superficialis",
    "kok": "S2–S3"
   }
  ],
  "hareket": [
   {
    "eklem": "ayak-parmak-mtp",
    "hareket": "fleksiyon",
    "rol": "ana",
    "not": "beşinci parmak"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "flexor_digiti_minimi_brevis_manus",
   "abductor_digiti_minimi_pedis"
  ],
  "kurallar": [],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1549, 1551"
   }
  ],
  "farklar": "Gray's 43 kası 'flexor digiti minimi' adıyla verir (s. 1549).",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "interossei_dorsales_pedis",
  "ad": {
   "la": "Musculi interossei dorsales (pedis)",
   "kisa": "mm. interossei dorsales (pedis)",
   "tr": "",
   "en": "Dorsal interossei (foot)"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "ayak",
  "bolme": "plantar-4",
  "setler": [
   "ayak",
   "ayak-plantar-4"
  ],
  "kitle": [
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "ossa metatarsi I–V (komşu iki metatarsın karşılıklı yüzleri)",
    "en": "adjacent sides of two metatarsal bones",
    "kemik": "ossa metatarsi",
    "not": "dört bipennat kas"
   }
  ],
  "insersiyo": [
   {
    "la": "phalanges proximales digitorum pedis II–IV (taban)",
    "en": "bases of proximal phalanges of toes 2–4",
    "kemik": "phalanges pedis",
    "not": "1.: ikinci parmağın medial tarafı; 2.–4.: II, III ve IV. parmakların lateral tarafı"
   },
   {
    "la": "aponeurosis dorsalis digitorum pedis",
    "en": "extensor expansions of toes",
    "kemik": ""
   }
  ],
  "sinir": [
   {
    "id": "n_plantaris_lateralis_r_profundus",
    "kok": "S2–S3"
   },
   {
    "id": "n_plantaris_lateralis_r_superficialis",
    "kok": "S2–S3",
    "not": "yalnız dördüncü intermetatarsal aralıktaki kas"
   }
  ],
  "hareket": [
   {
    "eklem": "ayak-parmak-mtp",
    "hareket": "abduksiyon",
    "rol": "ana",
    "not": "ikinci metatars eksenine göre"
   },
   {
    "eklem": "ayak-parmak-mtp",
    "hareket": "fleksiyon",
    "rol": "yardimci"
   },
   {
    "eklem": "ayak-parmak-ip",
    "hareket": "ekstansiyon",
    "rol": "yardimci",
    "not": "mm. lumbricales ile"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "interossei_plantares",
   "interossei_dorsales_manus"
  ],
  "kurallar": [],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1550, 1551"
   }
  ],
  "farklar": "Ayakta eksen ikinci parmaktır (elde üçüncü parmak).",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 },
 {
  "id": "interossei_plantares",
  "ad": {
   "la": "Musculi interossei plantares",
   "kisa": "mm. interossei plantares",
   "tr": "",
   "en": "Plantar interossei"
  },
  "bolge": "alt-ekstremite",
  "altBolge": "ayak",
  "bolme": "plantar-4",
  "setler": [
   "ayak",
   "ayak-plantar-4"
  ],
  "kitle": [
   "fzt",
   "tip"
  ],
  "origo": [
   {
    "la": "ossa metatarsi III–V (taban ve medial yüz)",
    "en": "bases and medial sides of third to fifth metatarsals",
    "kemik": "ossa metatarsi",
    "not": "üç unipennat kas; her biri tek metatarsa bağlı"
   }
  ],
  "insersiyo": [
   {
    "la": "phalanges proximales digitorum pedis III–V (taban, medial taraf)",
    "en": "medial sides of bases of proximal phalanges of toes 3–5",
    "kemik": "phalanges pedis",
    "not": "ayrıca dorsal aponevroz"
   }
  ],
  "sinir": [
   {
    "id": "n_plantaris_lateralis_r_profundus",
    "kok": "S2–S3"
   },
   {
    "id": "n_plantaris_lateralis_r_superficialis",
    "kok": "S2–S3",
    "not": "yalnız dördüncü intermetatarsal aralıktaki kas"
   }
  ],
  "hareket": [
   {
    "eklem": "ayak-parmak-mtp",
    "hareket": "adduksiyon",
    "rol": "ana",
    "not": "III–V. parmakları ikinci parmağa yaklaştırır"
   },
   {
    "eklem": "ayak-parmak-mtp",
    "hareket": "fleksiyon",
    "rol": "yardimci"
   },
   {
    "eklem": "ayak-parmak-ip",
    "hareket": "ekstansiyon",
    "rol": "yardimci"
   }
  ],
  "kabul": {},
  "bulmaca": {},
  "karistirilan": [
   "interossei_dorsales_pedis",
   "interossei_palmares"
  ],
  "kurallar": [],
  "yanilgilar": [],
  "klinik": "",
  "kanca": "",
  "gorseller": [],
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1550, 1551"
   }
  ],
  "farklar": "",
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu"
 }
];
