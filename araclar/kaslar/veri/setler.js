/* © 2026 Mert Ocak. Tüm hakları saklıdır. Oyun Tabanlı Kas Öğrenme Simülatörü — set tanımları (mertocak.com/araclar/kas-ogrenme). TASLAK (Aşama 0, 2026-11-25): yalnız dogrulandi: true olan kayıtlar sette görünür; dosya henüz yayına girmez. Ana kaynak: Gray's Anatomy, 43. baskı (2026); metinler kendi cümlelerimizle yazılmıştır. */
window.KAS_VERI = window.KAS_VERI || {};
window.KAS_VERI.setler = [
 {
  "id": "omuz-kusagi",
  "ad": {
   "tr": "Omuz kuşağı kasları",
   "en": "Shoulder girdle muscles"
  },
  "bolge": "ust-ekstremite",
  "kaslar": [
   "trapezius",
   "levator_scapulae",
   "rhomboideus_minor",
   "rhomboideus_major",
   "latissimus_dorsi",
   "serratus_anterior",
   "pectoralis_major",
   "pectoralis_minor",
   "subclavius"
  ],
  "kitle": [
   "fzt",
   "tip"
  ]
 },
 {
  "id": "omuz",
  "ad": {
   "tr": "Omuz (skapulohumeral) kasları",
   "en": "Scapulohumeral muscles"
  },
  "bolge": "ust-ekstremite",
  "kaslar": [
   "deltoideus",
   "supraspinatus",
   "infraspinatus",
   "teres_minor",
   "subscapularis",
   "teres_major"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ]
 },
 {
  "id": "rotator-manset",
  "ad": {
   "tr": "Rotator manşet",
   "en": "Rotator cuff"
  },
  "bolge": "ust-ekstremite",
  "kaslar": [
   "supraspinatus",
   "infraspinatus",
   "teres_minor",
   "subscapularis"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ]
 },
 {
  "id": "kol",
  "ad": {
   "tr": "Kol kasları",
   "en": "Muscles of the arm"
  },
  "bolge": "ust-ekstremite",
  "kaslar": [
   "biceps_brachii",
   "brachialis",
   "coracobrachialis",
   "triceps_brachii",
   "anconeus"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ]
 },
 {
  "id": "on-kol-on",
  "ad": {
   "tr": "Ön kolun ön bölmesi",
   "en": "Anterior compartment of forearm"
  },
  "bolge": "ust-ekstremite",
  "kaslar": [
   "pronator_teres",
   "flexor_carpi_radialis",
   "palmaris_longus",
   "flexor_carpi_ulnaris",
   "flexor_digitorum_superficialis",
   "flexor_digitorum_profundus",
   "flexor_pollicis_longus",
   "pronator_quadratus"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ]
 },
 {
  "id": "on-kol-arka",
  "ad": {
   "tr": "Ön kolun arka bölmesi",
   "en": "Posterior compartment of forearm"
  },
  "bolge": "ust-ekstremite",
  "kaslar": [
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
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ]
 },
 {
  "id": "el",
  "ad": {
   "tr": "El kasları",
   "en": "Intrinsic muscles of the hand"
  },
  "bolge": "ust-ekstremite",
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
  ],
  "kitle": [
   "fzt",
   "tip"
  ]
 },
 {
  "id": "tenar",
  "ad": {
   "tr": "Tenar kaslar",
   "en": "Thenar muscles"
  },
  "bolge": "ust-ekstremite",
  "kaslar": [
   "abductor_pollicis_brevis",
   "flexor_pollicis_brevis",
   "opponens_pollicis",
   "adductor_pollicis"
  ],
  "kitle": [
   "fzt",
   "tip"
  ]
 },
 {
  "id": "hipotenar",
  "ad": {
   "tr": "Hipotenar kaslar",
   "en": "Hypothenar muscles"
  },
  "bolge": "ust-ekstremite",
  "kaslar": [
   "abductor_digiti_minimi_manus",
   "flexor_digiti_minimi_brevis_manus",
   "opponens_digiti_minimi",
   "palmaris_brevis"
  ],
  "kitle": [
   "fzt",
   "tip"
  ]
 },
 {
  "id": "kalca",
  "ad": {
   "tr": "Gluteal bölge kasları",
   "en": "Muscles of the gluteal region"
  },
  "bolge": "alt-ekstremite",
  "kaslar": [
   "gluteus_maximus",
   "gluteus_medius",
   "gluteus_minimus",
   "tensor_fasciae_latae"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ]
 },
 {
  "id": "kalca-dis-rotatorlar",
  "ad": {
   "tr": "Kalçanın kısa dış rotatorları",
   "en": "Short lateral rotators of the hip"
  },
  "bolge": "alt-ekstremite",
  "kaslar": [
   "piriformis",
   "obturatorius_internus",
   "gemellus_superior",
   "gemellus_inferior",
   "quadratus_femoris",
   "obturatorius_externus"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ]
 },
 {
  "id": "iliopsoas",
  "ad": {
   "tr": "İliyak bölge (m. iliopsoas)",
   "en": "Iliac region (iliopsoas)"
  },
  "bolge": "alt-ekstremite",
  "kaslar": [
   "psoas_major",
   "psoas_minor",
   "iliacus"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ]
 },
 {
  "id": "uyluk-on",
  "ad": {
   "tr": "Uyluğun ön bölmesi",
   "en": "Anterior compartment of thigh"
  },
  "bolge": "alt-ekstremite",
  "kaslar": [
   "psoas_major",
   "iliacus",
   "sartorius",
   "rectus_femoris",
   "vastus_lateralis",
   "vastus_medialis",
   "vastus_intermedius",
   "articularis_genus"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ]
 },
 {
  "id": "quadriceps",
  "ad": {
   "tr": "M. quadriceps femoris",
   "en": "Quadriceps femoris"
  },
  "bolge": "alt-ekstremite",
  "kaslar": [
   "rectus_femoris",
   "vastus_lateralis",
   "vastus_medialis",
   "vastus_intermedius"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ]
 },
 {
  "id": "uyluk-medial",
  "ad": {
   "tr": "Uyluğun medial bölmesi",
   "en": "Medial compartment of thigh"
  },
  "bolge": "alt-ekstremite",
  "kaslar": [
   "obturatorius_externus",
   "pectineus",
   "adductor_longus",
   "adductor_brevis",
   "adductor_magnus",
   "gracilis"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ]
 },
 {
  "id": "uyluk-arka",
  "ad": {
   "tr": "Uyluğun arka bölmesi",
   "en": "Posterior compartment of thigh"
  },
  "bolge": "alt-ekstremite",
  "kaslar": [
   "semitendinosus",
   "semimembranosus",
   "biceps_femoris"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ]
 },
 {
  "id": "diz",
  "ad": {
   "tr": "Dize etki eden kaslar",
   "en": "Muscles acting on the knee"
  },
  "bolge": "alt-ekstremite",
  "kaslar": [
   "popliteus"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ]
 },
 {
  "id": "bacak-on",
  "ad": {
   "tr": "Bacağın ön bölmesi",
   "en": "Anterior compartment of leg"
  },
  "bolge": "alt-ekstremite",
  "kaslar": [
   "tibialis_anterior",
   "extensor_hallucis_longus",
   "extensor_digitorum_longus",
   "fibularis_tertius"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ]
 },
 {
  "id": "bacak-lateral",
  "ad": {
   "tr": "Bacağın lateral bölmesi",
   "en": "Lateral compartment of leg"
  },
  "bolge": "alt-ekstremite",
  "kaslar": [
   "fibularis_longus",
   "fibularis_brevis"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ]
 },
 {
  "id": "bacak-arka",
  "ad": {
   "tr": "Bacağın arka bölmesi",
   "en": "Posterior compartment of leg"
  },
  "bolge": "alt-ekstremite",
  "kaslar": [
   "gastrocnemius",
   "soleus",
   "plantaris",
   "popliteus",
   "flexor_hallucis_longus",
   "flexor_digitorum_longus",
   "tibialis_posterior"
  ],
  "kitle": [
   "dis",
   "fzt",
   "tip"
  ]
 },
 {
  "id": "ayak",
  "ad": {
   "tr": "Ayak kasları",
   "en": "Intrinsic muscles of the foot"
  },
  "bolge": "alt-ekstremite",
  "kaslar": [
   "extensor_digitorum_brevis",
   "extensor_hallucis_brevis",
   "abductor_hallucis",
   "flexor_digitorum_brevis",
   "abductor_digiti_minimi_pedis",
   "quadratus_plantae",
   "lumbricales_pedis",
   "flexor_hallucis_brevis",
   "adductor_hallucis",
   "flexor_digiti_minimi_brevis_pedis",
   "interossei_dorsales_pedis",
   "interossei_plantares"
  ],
  "kitle": [
   "fzt",
   "tip"
  ]
 },
 {
  "id": "ayak-sirti",
  "ad": {
   "tr": "Ayak sırtı kasları",
   "en": "Dorsal muscles of the foot"
  },
  "bolge": "alt-ekstremite",
  "kaslar": [
   "extensor_digitorum_brevis",
   "extensor_hallucis_brevis"
  ],
  "kitle": [
   "fzt",
   "tip"
  ]
 },
 {
  "id": "ayak-plantar-1",
  "ad": {
   "tr": "Ayak tabanı: 1. tabaka",
   "en": "Sole of foot: first layer"
  },
  "bolge": "alt-ekstremite",
  "kaslar": [
   "abductor_hallucis",
   "flexor_digitorum_brevis",
   "abductor_digiti_minimi_pedis"
  ],
  "kitle": [
   "fzt",
   "tip"
  ]
 },
 {
  "id": "ayak-plantar-2",
  "ad": {
   "tr": "Ayak tabanı: 2. tabaka",
   "en": "Sole of foot: second layer"
  },
  "bolge": "alt-ekstremite",
  "kaslar": [
   "quadratus_plantae",
   "lumbricales_pedis"
  ],
  "kitle": [
   "fzt",
   "tip"
  ]
 },
 {
  "id": "ayak-plantar-3",
  "ad": {
   "tr": "Ayak tabanı: 3. tabaka",
   "en": "Sole of foot: third layer"
  },
  "bolge": "alt-ekstremite",
  "kaslar": [
   "flexor_hallucis_brevis",
   "adductor_hallucis",
   "flexor_digiti_minimi_brevis_pedis"
  ],
  "kitle": [
   "fzt",
   "tip"
  ]
 },
 {
  "id": "ayak-plantar-4",
  "ad": {
   "tr": "Ayak tabanı: 4. tabaka",
   "en": "Sole of foot: fourth layer"
  },
  "bolge": "alt-ekstremite",
  "kaslar": [
   "interossei_dorsales_pedis",
   "interossei_plantares"
  ],
  "kitle": [
   "fzt",
   "tip"
  ]
 }
];
