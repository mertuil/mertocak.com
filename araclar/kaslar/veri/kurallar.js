/* © 2026 Mert Ocak. Tüm hakları saklıdır. Oyun Tabanlı Kas Öğrenme Simülatörü — kural ve istisna verisi (mertocak.com/araclar/kas-ogrenme). TASLAK (Aşama 0, 2026-11-25): yalnız dogrulandi: true olan kayıtlar sette görünür; dosya henüz yayına girmez. Ana kaynak: Gray's Anatomy, 43. baskı (2026); metinler kendi cümlelerimizle yazılmıştır. */
window.KAS_VERI = window.KAS_VERI || {};
window.KAS_VERI.kurallar = [
 {
  "id": "kol-on",
  "kural": {
   "tr": "Kolun ön bölmesi → n. musculocutaneus",
   "en": "Anterior compartment of arm → musculocutaneous nerve"
  },
  "sinir": "n_musculocutaneus",
  "istisnalar": [
   {
    "kas": "brachialis",
    "sinir": "n_radialis",
    "not": {
     "tr": "küçük lateral kısma n. radialis (C7) de dal verir; sık ama değişken",
     "en": "a small lateral part is often also supplied by the radial nerve (C7)"
    }
   }
  ],
  "kapsam": "pilot",
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "980, 984–985"
   }
  ],
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu",
  "kaslar": [
   "biceps_brachii",
   "brachialis",
   "coracobrachialis"
  ]
 },
 {
  "id": "kol-on-kol-arka",
  "kural": {
   "tr": "Kolun ve ön kolun arka bölmesi → n. radialis",
   "en": "Posterior compartments of arm and forearm → radial nerve"
  },
  "sinir": "n_radialis",
  "istisnalar": [],
  "kapsam": "pilot",
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "985, 1012–1015"
   }
  ],
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu",
  "kaslar": [
   "triceps_brachii",
   "brachioradialis",
   "extensor_carpi_radialis_longus",
   "extensor_carpi_radialis_brevis",
   "extensor_digitorum",
   "extensor_digiti_minimi",
   "extensor_carpi_ulnaris",
   "anconeus",
   "supinator",
   "abductor_pollicis_longus",
   "extensor_pollicis_longus",
   "extensor_pollicis_brevis",
   "extensor_indicis"
  ]
 },
 {
  "id": "on-kol-on",
  "kural": {
   "tr": "Ön kolun ön bölmesi → n. medianus",
   "en": "Anterior compartment of forearm → median nerve"
  },
  "sinir": "n_medianus",
  "istisnalar": [
   {
    "kas": "flexor_carpi_ulnaris",
    "sinir": "n_ulnaris",
    "not": {
     "tr": "tümü n. ulnaris",
     "en": "entirely ulnar nerve"
    }
   },
   {
    "kas": "flexor_digitorum_profundus",
    "sinir": "n_ulnaris",
    "not": {
     "tr": "medial yarı (yüzük ve küçük parmak karınları) n. ulnaris",
     "en": "medial half (bellies to ring and little fingers) by the ulnar nerve"
    }
   }
  ],
  "kapsam": "pilot",
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1008–1011, 1018"
   }
  ],
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu",
  "kaslar": [
   "pronator_teres",
   "flexor_carpi_radialis",
   "palmaris_longus",
   "flexor_carpi_ulnaris",
   "flexor_digitorum_superficialis",
   "flexor_digitorum_profundus",
   "flexor_pollicis_longus",
   "pronator_quadratus"
  ]
 },
 {
  "id": "el",
  "kural": {
   "tr": "El kasları → n. ulnaris",
   "en": "Intrinsic muscles of hand → ulnar nerve"
  },
  "sinir": "n_ulnaris",
  "istisnalar": [
   {
    "kas": "abductor_pollicis_brevis",
    "sinir": "n_medianus_r_recurrens",
    "not": {
     "tr": "n. medianus (r. recurrens); sabit olarak n. medianus alan tek tenar kas",
     "en": "median nerve (recurrent branch); the only thenar muscle constantly supplied by it"
    }
   },
   {
    "kas": "opponens_pollicis",
    "sinir": "n_medianus_r_recurrens",
    "not": {
     "tr": "n. medianus (r. recurrens); sıklıkla n. ulnaris derin dalından ek dal",
     "en": "median nerve (recurrent branch); commonly an additional twig from the deep branch of the ulnar nerve"
    }
   },
   {
    "kas": "flexor_pollicis_brevis",
    "sinir": "n_medianus_r_recurrens",
    "not": {
     "tr": "yüzeyel baş n. medianus; derin baş n. ulnaris; varyasyon sık",
     "en": "superficial head by the median nerve; deep head by the ulnar nerve; variation is common"
    }
   },
   {
    "kas": "lumbricales_manus",
    "sinir": "n_medianus",
    "not": {
     "tr": "1. ve 2. lumbrikal n. medianus; 3. lumbrikal sıklıkla ek olarak n. medianus dalı alır",
     "en": "first and second lumbricals by the median nerve; the third often has an additional median supply"
    }
   }
  ],
  "kapsam": "pilot",
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1047"
   }
  ],
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu",
  "kaslar": [
   "abductor_pollicis_brevis",
   "flexor_pollicis_brevis",
   "opponens_pollicis",
   "adductor_pollicis",
   "abductor_digiti_minimi_manus",
   "flexor_digiti_minimi_brevis_manus",
   "opponens_digiti_minimi",
   "palmaris_brevis",
   "lumbricales_manus",
   "interossei_palmares",
   "interossei_dorsales_manus"
  ]
 },
 {
  "id": "uyluk-on",
  "kural": {
   "tr": "Uyluğun ön bölmesi → n. femoralis",
   "en": "Anterior compartment of thigh → femoral nerve"
  },
  "sinir": "n_femoralis",
  "istisnalar": [],
  "kapsam": "pilot",
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1467, 1471–1473"
   }
  ],
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu",
  "kaslar": [
   "iliacus",
   "sartorius",
   "rectus_femoris",
   "vastus_lateralis",
   "vastus_medialis",
   "vastus_intermedius",
   "articularis_genus"
  ]
 },
 {
  "id": "uyluk-medial",
  "kural": {
   "tr": "Uyluğun medial bölmesi → n. obturatorius",
   "en": "Medial compartment of thigh → obturator nerve"
  },
  "sinir": "n_obturatorius",
  "istisnalar": [
   {
    "kas": "pectineus",
    "sinir": "n_femoralis",
    "not": {
     "tr": "çoğunlukla n. femoralis; daha seyrek n. obturatorius ya da n. obturatorius accessorius",
     "en": "primarily femoral nerve; less often obturator or accessory obturator nerve"
    }
   },
   {
    "kas": "adductor_magnus",
    "sinir": "n_ischiadicus_pars_tibialis",
    "not": {
     "tr": "iskiyokondiler (hamstring) kısım n. ischiadicus'un tibial bölümünden",
     "en": "ischiocondylar (hamstring) part by the tibial division of the sciatic nerve"
    }
   }
  ],
  "kapsam": "pilot",
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1469, 1474–1476"
   }
  ],
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu",
  "kaslar": [
   "obturatorius_externus",
   "pectineus",
   "adductor_longus",
   "adductor_brevis",
   "adductor_magnus",
   "gracilis"
  ]
 },
 {
  "id": "uyluk-arka",
  "kural": {
   "tr": "Uyluğun arka bölmesi → n. ischiadicus'un tibial bölümü",
   "en": "Posterior compartment of thigh → tibial division of sciatic nerve"
  },
  "sinir": "n_ischiadicus_pars_tibialis",
  "istisnalar": [
   {
    "kas": "biceps_femoris",
    "sinir": "n_ischiadicus_pars_fibularis",
    "not": {
     "tr": "caput breve ortak fibular bölümden",
     "en": "short head by the common fibular division"
    }
   }
  ],
  "kapsam": "pilot",
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1476–1477"
   }
  ],
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu",
  "kaslar": [
   "semitendinosus",
   "semimembranosus",
   "biceps_femoris"
  ]
 },
 {
  "id": "bacak-on",
  "kural": {
   "tr": "Bacağın ön bölmesi → n. fibularis profundus",
   "en": "Anterior compartment of leg → deep fibular nerve"
  },
  "sinir": "n_fibularis_profundus",
  "istisnalar": [],
  "kapsam": "pilot",
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1508–1510"
   }
  ],
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu",
  "kaslar": [
   "tibialis_anterior",
   "extensor_hallucis_longus",
   "extensor_digitorum_longus",
   "fibularis_tertius"
  ]
 },
 {
  "id": "bacak-lateral",
  "kural": {
   "tr": "Bacağın lateral bölmesi → n. fibularis superficialis",
   "en": "Lateral compartment of leg → superficial fibular nerve"
  },
  "sinir": "n_fibularis_superficialis",
  "istisnalar": [],
  "kapsam": "pilot",
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1510"
   }
  ],
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu",
  "kaslar": [
   "fibularis_longus",
   "fibularis_brevis"
  ]
 },
 {
  "id": "bacak-arka",
  "kural": {
   "tr": "Bacağın arka bölmesi → n. tibialis",
   "en": "Posterior compartment of leg → tibial nerve"
  },
  "sinir": "n_tibialis",
  "istisnalar": [],
  "kapsam": "pilot",
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "1507, 1511–1514"
   }
  ],
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu",
  "kaslar": [
   "gastrocnemius",
   "soleus",
   "plantaris",
   "popliteus",
   "flexor_hallucis_longus",
   "flexor_digitorum_longus",
   "tibialis_posterior"
  ]
 },
 {
  "id": "rotator-manset",
  "kural": {
   "tr": "Rotator manşet kasları → tuberculum majus humeri",
   "en": "Rotator cuff muscles → greater tubercle of humerus"
  },
  "sinir": "",
  "istisnalar": [
   {
    "kas": "subscapularis",
    "sinir": "",
    "not": {
     "tr": "tuberculum minus humeri",
     "en": "lesser tubercle of humerus"
    }
   }
  ],
  "kapsam": "pilot",
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "982–983"
   }
  ],
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu",
  "kaslar": [
   "supraspinatus",
   "infraspinatus",
   "teres_minor",
   "subscapularis"
  ]
 },
 {
  "id": "mimik",
  "kural": {
   "tr": "Mimik kasları → n. facialis",
   "en": "Muscles of facial expression → facial nerve"
  },
  "sinir": "n_facialis",
  "istisnalar": [],
  "kapsam": "bas-boyun",
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "685"
   }
  ],
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu",
  "kaslar": []
 },
 {
  "id": "cigneme",
  "kural": {
   "tr": "Çiğneme kasları → n. mandibularis (V3)",
   "en": "Muscles of mastication → mandibular nerve (V3)"
  },
  "sinir": "n_mandibularis",
  "istisnalar": [],
  "kapsam": "bas-boyun",
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "685, 730–732, 758–760"
   }
  ],
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu",
  "kaslar": []
 },
 {
  "id": "dil",
  "kural": {
   "tr": "Dil kasları → n. hypoglossus",
   "en": "Muscles of tongue → hypoglossal nerve"
  },
  "sinir": "n_hypoglossus",
  "istisnalar": [
   {
    "kas": "palatoglossus",
    "sinir": "plexus_pharyngeus",
    "not": {
     "tr": "plexus pharyngeus (n. vagus)",
     "en": "pharyngeal plexus (vagus nerve)"
    }
   }
  ],
  "kapsam": "bas-boyun",
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "655, 698"
   }
  ],
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu",
  "kaslar": []
 },
 {
  "id": "damak",
  "kural": {
   "tr": "Damak kasları → n. vagus (plexus pharyngeus)",
   "en": "Muscles of soft palate → vagus nerve (pharyngeal plexus)"
  },
  "sinir": "plexus_pharyngeus",
  "istisnalar": [
   {
    "kas": "tensor_veli_palatini",
    "sinir": "n_mandibularis",
    "not": {
     "tr": "n. mandibularis (n. pterygoideus medialis aracılığıyla)",
     "en": "mandibular nerve via the nerve to medial pterygoid"
    }
   }
  ],
  "kapsam": "bas-boyun",
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "764–766, 768"
   }
  ],
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu",
  "kaslar": []
 },
 {
  "id": "yutak",
  "kural": {
   "tr": "Yutak kasları → n. vagus (plexus pharyngeus)",
   "en": "Muscles of pharynx → vagus nerve (pharyngeal plexus)"
  },
  "sinir": "plexus_pharyngeus",
  "istisnalar": [
   {
    "kas": "stylopharyngeus",
    "sinir": "n_glossopharyngeus",
    "not": {
     "tr": "n. glossopharyngeus",
     "en": "glossopharyngeal nerve"
    }
   }
  ],
  "kapsam": "bas-boyun",
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "766–768"
   }
  ],
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu",
  "kaslar": []
 },
 {
  "id": "larinks",
  "kural": {
   "tr": "Larinks kasları → n. laryngeus recurrens",
   "en": "Intrinsic muscles of larynx → recurrent laryngeal nerve"
  },
  "sinir": "n_laryngeus_recurrens",
  "istisnalar": [
   {
    "kas": "cricothyroideus",
    "sinir": "n_laryngeus_superior_r_externus",
    "not": {
     "tr": "n. laryngeus superior'un dış dalı",
     "en": "external branch of superior laryngeal nerve"
    }
   }
  ],
  "kapsam": "bas-boyun",
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "784, 790–791"
   }
  ],
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu",
  "kaslar": []
 },
 {
  "id": "suprahyoid",
  "kural": {
   "tr": "Suprahyoid kaslar → arklarına göre üç ayrı sinir",
   "en": "Suprahyoid muscles → three different nerves by arch"
  },
  "sinir": "",
  "istisnalar": [
   {
    "kas": "mylohyoideus",
    "sinir": "n_mylohyoideus",
    "not": {
     "tr": "n. mylohyoideus (V3); m. digastricus venter anterior da",
     "en": "nerve to mylohyoid (V3); also anterior belly of digastric"
    }
   },
   {
    "kas": "digastricus_venter_posterior",
    "sinir": "n_facialis",
    "not": {
     "tr": "n. facialis; m. stylohyoideus da",
     "en": "facial nerve; also stylohyoid"
    }
   },
   {
    "kas": "geniohyoideus",
    "sinir": "c1_n_hypoglossus",
    "not": {
     "tr": "C1 lifleri (n. hypoglossus ile seyreder)",
     "en": "C1 fibres travelling with the hypoglossal nerve"
    }
   }
  ],
  "kapsam": "bas-boyun",
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "636, 694"
   }
  ],
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu",
  "kaslar": []
 },
 {
  "id": "infrahyoid",
  "kural": {
   "tr": "İnfrahyoid kaslar → ansa cervicalis (C1–C3)",
   "en": "Infrahyoid muscles → ansa cervicalis (C1–C3)"
  },
  "sinir": "ansa_cervicalis",
  "istisnalar": [
   {
    "kas": "thyrohyoideus",
    "sinir": "c1_n_hypoglossus",
    "not": {
     "tr": "C1 lifleri (n. hypoglossus ile seyreder)",
     "en": "C1 fibres travelling with the hypoglossal nerve"
    }
   }
  ],
  "kapsam": "bas-boyun",
  "kaynak": [
   {
    "eser": "Gray's Anatomy, 43. baskı (2026)",
    "sayfa": "636"
   }
  ],
  "dogrulandi": true,
  "dogrulayan": "Mert Ocak",
  "tarih": "2026-11-25",
  "dogrulamaTuru": "toplu",
  "kaslar": []
 }
];
