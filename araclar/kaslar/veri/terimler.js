/* © 2026 Mert Ocak. Tüm hakları saklıdır. Oyun Tabanlı Kas Öğrenme Simülatörü — kısaltmalar ve terim sözlüğü (mertocak.com/araclar/kas-ogrenme). TASLAK (Aşama 0, 2026-11-25): yalnız dogrulandi: true olan kayıtlar sette görünür; dosya henüz yayına girmez. Ana kaynak: Gray's Anatomy, 43. baskı (2026); metinler kendi cümlelerimizle yazılmıştır. */
window.KAS_VERI = window.KAS_VERI || {};
window.KAS_VERI.terimler = {
 "kisaltmalar": {
  "m.": "musculus",
  "mm.": "musculi",
  "n.": "nervus",
  "nn.": "nervi",
  "r.": "ramus",
  "rr.": "rami",
  "lig.": "ligamentum",
  "ligg.": "ligamenta",
  "proc.": "processus",
  "a.": "arteria",
  "v.": "vena",
  "art.": "articulatio"
 },
 "roller": {
  "ana": {
   "tr": "ana hareket ettirici",
   "en": "prime mover"
  },
  "yardimci": {
   "tr": "yardımcı",
   "en": "assistant"
  },
  "baslatici": {
   "tr": "başlatıcı",
   "en": "initiator"
  },
  "stabilizator": {
   "tr": "stabilizatör",
   "en": "stabiliser"
  }
 },
 "eklemler": {
  "omuz": {
   "tr": "omuz eklemi",
   "en": "shoulder joint"
  },
  "skapula": {
   "tr": "skapula",
   "en": "scapula"
  },
  "klavikula": {
   "tr": "klavikula",
   "en": "clavicle"
  },
  "dirsek": {
   "tr": "dirsek",
   "en": "elbow"
  },
  "on-kol": {
   "tr": "ön kol (radioulnar eklemler)",
   "en": "forearm (radio-ulnar joints)"
  },
  "el-bilegi": {
   "tr": "el bileği",
   "en": "wrist"
  },
  "el": {
   "tr": "el",
   "en": "hand"
  },
  "parmak-mkp": {
   "tr": "parmak MKP eklemleri",
   "en": "MCP joints of fingers"
  },
  "parmak-pip": {
   "tr": "parmak PİP eklemleri",
   "en": "PIP joints of fingers"
  },
  "parmak-dip": {
   "tr": "parmak DİP eklemleri",
   "en": "DIP joints of fingers"
  },
  "parmak-kmk": {
   "tr": "V. karpometakarpal eklem",
   "en": "fifth carpometacarpal joint"
  },
  "basparmak-kmk": {
   "tr": "başparmak karpometakarpal eklemi",
   "en": "carpometacarpal joint of thumb"
  },
  "basparmak-mkp": {
   "tr": "başparmak MKP eklemi",
   "en": "MCP joint of thumb"
  },
  "basparmak-ip": {
   "tr": "başparmak İP eklemi",
   "en": "IP joint of thumb"
  },
  "boyun": {
   "tr": "boyun",
   "en": "neck"
  },
  "govde": {
   "tr": "gövde",
   "en": "trunk"
  },
  "toraks": {
   "tr": "göğüs kafesi",
   "en": "thoracic cage"
  },
  "pelvis": {
   "tr": "pelvis",
   "en": "pelvis"
  },
  "kalca": {
   "tr": "kalça eklemi",
   "en": "hip joint"
  },
  "diz": {
   "tr": "diz",
   "en": "knee"
  },
  "ayak-bilegi": {
   "tr": "ayak bileği",
   "en": "ankle"
  },
  "ayak": {
   "tr": "ayak (subtalar ve tarsal eklemler)",
   "en": "foot (subtalar and tarsal joints)"
  },
  "halluks-mtp": {
   "tr": "ayak başparmağı MTP eklemi",
   "en": "MTP joint of great toe"
  },
  "halluks-ip": {
   "tr": "ayak başparmağı İP eklemi",
   "en": "IP joint of great toe"
  },
  "ayak-parmak-mtp": {
   "tr": "ayak parmakları MTP eklemleri",
   "en": "MTP joints of toes"
  },
  "ayak-parmak-pip": {
   "tr": "ayak parmakları PİP eklemleri",
   "en": "PIP joints of toes"
  },
  "ayak-parmak-ip": {
   "tr": "ayak parmakları İP eklemleri",
   "en": "IP joints of toes"
  }
 },
 "hareketler": {
  "fleksiyon": {
   "tr": "fleksiyon",
   "en": "flexion"
  },
  "ekstansiyon": {
   "tr": "ekstansiyon",
   "en": "extension"
  },
  "abduksiyon": {
   "tr": "abduksiyon",
   "en": "abduction"
  },
  "adduksiyon": {
   "tr": "adduksiyon",
   "en": "adduction"
  },
  "ic-rotasyon": {
   "tr": "iç rotasyon",
   "en": "medial rotation"
  },
  "dis-rotasyon": {
   "tr": "dış rotasyon",
   "en": "lateral rotation"
  },
  "lateral-fleksiyon": {
   "tr": "lateral fleksiyon",
   "en": "lateral flexion"
  },
  "elevasyon": {
   "tr": "elevasyon",
   "en": "elevation"
  },
  "depresyon": {
   "tr": "depresyon",
   "en": "depression"
  },
  "protraksiyon": {
   "tr": "protraksiyon",
   "en": "protraction"
  },
  "retraksiyon": {
   "tr": "retraksiyon",
   "en": "retraction"
  },
  "yukari-rotasyon": {
   "tr": "yukarı rotasyon",
   "en": "upward rotation"
  },
  "asagi-rotasyon": {
   "tr": "aşağı rotasyon",
   "en": "downward rotation"
  },
  "pronasyon": {
   "tr": "pronasyon",
   "en": "pronation"
  },
  "supinasyon": {
   "tr": "supinasyon",
   "en": "supination"
  },
  "opozisyon": {
   "tr": "opozisyon",
   "en": "opposition"
  },
  "dorsifleksiyon": {
   "tr": "dorsifleksiyon",
   "en": "dorsiflexion"
  },
  "plantar-fleksiyon": {
   "tr": "plantar fleksiyon",
   "en": "plantar flexion"
  },
  "inversiyon": {
   "tr": "inversiyon",
   "en": "inversion"
  },
  "eversiyon": {
   "tr": "eversiyon",
   "en": "eversion"
  },
  "stabilizasyon": {
   "tr": "stabilizasyon",
   "en": "stabilisation"
  },
  "kilit-acma": {
   "tr": "diz kilidini açma",
   "en": "unlocking of the knee"
  },
  "tirmanma": {
   "tr": "gövdeyi kola doğru çekme",
   "en": "pulling the trunk towards the arm"
  },
  "zorlu-inspirasyon": {
   "tr": "zorlu inspirasyon",
   "en": "forced inspiration"
  },
  "zorlu-ekspirasyon": {
   "tr": "zorlu ekspirasyon",
   "en": "forced expiration"
  },
  "deri-germe": {
   "tr": "deriyi germe",
   "en": "tensing the skin"
  },
  "sinovyal-germe": {
   "tr": "sinovyal zarı çekme",
   "en": "retracting the synovial membrane"
  }
 }
};
