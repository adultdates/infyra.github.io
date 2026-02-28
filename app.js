const API_KEY = "pub_d8e3323546eb4b66a7b50e85e79ccb2b";

/* ===== ВСЕ ЯЗЫКИ (109 уникальных языков) ===== */
const LANGUAGES = {
  // Европейские
  en: "English", ru: "Русский", et: "Eesti", de: "Deutsch", fr: "Français",
  es: "Español", pt: "Português", it: "Italiano", nl: "Nederlands",
  sv: "Svenska", pl: "Polski", cs: "Čeština", ro: "Română", hu: "Magyar",
  bg: "Български", sr: "Srpski", hr: "Hrvatski", sk: "Slovenčina", 
  sl: "Slovenščina", da: "Dansk", fi: "Suomi", no: "Norsk", is: "Íslenska",
  lt: "Lietuvių", lv: "Latviešu", ga: "Gaeilge", mt: "Malti", cy: "Cymraeg",
  eu: "Euskara", ca: "Català", gl: "Galego", sq: "Shqip", mk: "Македонски",
  bs: "Bosanski", me: "Crnogorski", ka: "ქართული", hy: "Հայերեն", az: "Azərbaycan",
  be: "Беларуская", uk: "Українська",
  
  // Азиатские
  ar: "العربية", ja: "日本語", zh: "中文", ko: "한국어", tr: "Türkçe", 
  hi: "हिन्दी", id: "Indonesia", th: "ไทย", vi: "Tiếng Việt", bn: "বাংলা",
  ta: "தமிழ்", te: "తెలుగు", ms: "Bahasa Melayu", fil: "Filipino", my: "မြန်မာ",
  km: "ភាសាខ្មែរ", lo: "ລາວ", ne: "नेपाली", si: "සිංහල", mn: "Монгол",
  kk: "Қазақ", uz: "Oʻzbek", ky: "Кыргыз", tk: "Türkmen", ps: "پښتو",
  fa: "فارسی", ur: "اردو", sd: "سنڌي", ku: "Kurdî", he: "עברית",
  yi: "ייִדיש", am: "አማርኛ", ti: "ትግርኛ", or: "ଓଡ଼ିଆ", as: "অসমীয়া",
  pa: "ਪੰਜਾਬੀ", gu: "ગુજરાતી", mr: "मराठी", kn: "ಕನ್ನಡ", ml: "മലയാളം",
  
  // Африканские
  sw: "Kiswahili", ha: "Hausa", ig: "Igbo", yo: "Yorùbá", zu: "isiZulu",
  xh: "isiXhosa", st: "Sesotho", tn: "Setswana", ss: "SiSwati", ve: "Tshivenḓa",
  ts: "Xitsonga", rn: "Ikirundi", rw: "Kinyarwanda", lg: "Luganda", ny: "Chichewa",
  mg: "Malagasy", om: "Oromoo", so: "Soomaali", sn: "chiShona", wo: "Wolof",
  ff: "Fulfulde", dy: "Dzongkha", bm: "Bamanankan", 
  
  // Другие
  el: "Ελληνικά", la: "Latina", eo: "Esperanto", ia: "Interlingua",
  co: "Corsu", gd: "Gàidhlig"
};

/* ===== ПЕРЕВОДЫ ИНТЕРФЕЙСА ДЛЯ ВСЕХ 109 ЯЗЫКОВ ===== */
const UI_TRANSLATIONS = {
  en: {
    loading: "Loading news...",
    noNews: "No news found. Try another category or language.",
    error: "Error loading news",
    errorDesc: "Please check your internet connection and try again.",
    tryAgain: "Try again",
    newsImage: "News Image",
    readMore: "→",
    source: "Source",
    date: "Date"
  },
  ru: {
    loading: "Загрузка новостей...",
    noNews: "Новости не найдены. Попробуйте другую категорию или язык.",
    error: "Ошибка загрузки новостей",
    errorDesc: "Пожалуйста, проверьте подключение к интернету и попробуйте снова.",
    tryAgain: "Попробовать снова",
    newsImage: "Изображение новости",
    readMore: "→",
    source: "Источник",
    date: "Дата"
  },
  et: {
    loading: "Laen uudiseid...",
    noNews: "Uudiseid ei leitud. Proovi teist kategooriat või keelt.",
    error: "Viga uudiste laadimisel",
    errorDesc: "Palun kontrolli internetiühendust ja proovi uuesti.",
    tryAgain: "Proovi uuesti",
    newsImage: "Uudiste pilt",
    readMore: "→",
    source: "Allikas",
    date: "Kuupäev"
  },
  de: {
    loading: "Nachrichten werden geladen...",
    noNews: "Keine Nachrichten gefunden. Versuche eine andere Kategorie oder Sprache.",
    error: "Fehler beim Laden der Nachrichten",
    errorDesc: "Bitte überprüfe deine Internetverbindung und versuche es erneut.",
    tryAgain: "Erneut versuchen",
    newsImage: "Nachrichtenbild",
    readMore: "→",
    source: "Quelle",
    date: "Datum"
  },
  fr: {
    loading: "Chargement des actualités...",
    noNews: "Aucune actualité trouvée. Essayez une autre catégorie ou langue.",
    error: "Erreur lors du chargement des actualités",
    errorDesc: "Veuillez vérifier votre connexion Internet et réessayer.",
    tryAgain: "Réessayer",
    newsImage: "Image de l'actualité",
    readMore: "→",
    source: "Source",
    date: "Date"
  },
  es: {
    loading: "Cargando noticias...",
    noNews: "No se encontraron noticias. Prueba otra categoría o idioma.",
    error: "Error al cargar noticias",
    errorDesc: "Por favor verifica tu conexión a Internet e inténtalo de nuevo.",
    tryAgain: "Intentar de nuevo",
    newsImage: "Imagen de noticia",
    readMore: "→",
    source: "Fuente",
    date: "Fecha"
  },
  pt: {
    loading: "Carregando notícias...",
    noNews: "Nenhuma notícia encontrada. Tente outra categoria ou idioma.",
    error: "Erro ao carregar notícias",
    errorDesc: "Por favor verifique sua conexão com a internet e tente novamente.",
    tryAgain: "Tentar novamente",
    newsImage: "Imagem da notícia",
    readMore: "→",
    source: "Fonte",
    date: "Data"
  },
  it: {
    loading: "Caricamento notizie...",
    noNews: "Nessuna notizia trovata. Prova un'altra categoria o lingua.",
    error: "Errore nel caricamento delle notizie",
    errorDesc: "Per favore controlla la tua connessione Internet e riprova.",
    tryAgain: "Riprova",
    newsImage: "Immagine della notizia",
    readMore: "→",
    source: "Fonte",
    date: "Data"
  },
  nl: {
    loading: "Nieuws laden...",
    noNews: "Geen nieuws gevonden. Probeer een andere categorie of taal.",
    error: "Fout bij laden van nieuws",
    errorDesc: "Controleer je internetverbinding en probeer het opnieuw.",
    tryAgain: "Opnieuw proberen",
    newsImage: "Nieuwsafbeelding",
    readMore: "→",
    source: "Bron",
    date: "Datum"
  },
  sv: {
    loading: "Laddar nyheter...",
    noNews: "Inga nyheter hittades. Prova en annan kategori eller språk.",
    error: "Fel vid laddning av nyheter",
    errorDesc: "Kontrollera din internetanslutning och försök igen.",
    tryAgain: "Försök igen",
    newsImage: "Nyhetsbild",
    readMore: "→",
    source: "Källa",
    date: "Datum"
  },
  pl: {
    loading: "Ładowanie wiadomości...",
    noNews: "Nie znaleziono wiadomości. Spróbuj innej kategorii lub języka.",
    error: "Błąd ładowania wiadomości",
    errorDesc: "Sprawdź połączenie internetowe i spróbuj ponownie.",
    tryAgain: "Spróbuj ponownie",
    newsImage: "Obraz wiadomości",
    readMore: "→",
    source: "Źródło",
    date: "Data"
  },
  cs: {
    loading: "Načítání zpráv...",
    noNews: "Nebyly nalezeny žádné zprávy. Zkuste jinou kategorii nebo jazyk.",
    error: "Chyba při načítání zpráv",
    errorDesc: "Zkontrolujte připojení k internetu a zkuste to znovu.",
    tryAgain: "Zkusit znovu",
    newsImage: "Obrázek zprávy",
    readMore: "→",
    source: "Zdroj",
    date: "Datum"
  },
  ro: {
    loading: "Se încarcă știrile...",
    noNews: "Nu s-au găsit știri. Încercați o altă categorie sau limbă.",
    error: "Eroare la încărcarea știrilor",
    errorDesc: "Verificați conexiunea la internet și încercați din nou.",
    tryAgain: "Încercați din nou",
    newsImage: "Imagine știre",
    readMore: "→",
    source: "Sursă",
    date: "Data"
  },
  hu: {
    loading: "Hírek betöltése...",
    noNews: "Nincsenek hírek. Próbáljon másik kategóriát vagy nyelvet.",
    error: "Hiba a hírek betöltésekor",
    errorDesc: "Kérjük, ellenőrizze az internetkapcsolatot, és próbálja újra.",
    tryAgain: "Próbálja újra",
    newsImage: "Hírkép",
    readMore: "→",
    source: "Forrás",
    date: "Dátum"
  },
  bg: {
    loading: "Зареждане на новини...",
    noNews: "Няма намерени новини. Опитайте друга категория или език.",
    error: "Грешка при зареждане на новини",
    errorDesc: "Моля, проверете интернет връзката си и опитайте отново.",
    tryAgain: "Опитайте отново",
    newsImage: "Изображение на новина",
    readMore: "→",
    source: "Източник",
    date: "Дата"
  },
  sr: {
    loading: "Учитавање вести...",
    noNews: "Нема пронађених вести. Пробајте другу категорију или језик.",
    error: "Грешка при учитавању вести",
    errorDesc: "Проверите интернет везу и покушајте поново.",
    tryAgain: "Покушај поново",
    newsImage: "Слика вести",
    readMore: "→",
    source: "Извор",
    date: "Датум"
  },
  hr: {
    loading: "Učitavanje vijesti...",
    noNews: "Nema pronađenih vijesti. Pokušajte drugu kategoriju ili jezik.",
    error: "Greška pri učitavanju vijesti",
    errorDesc: "Provjerite internetsku vezu i pokušajte ponovno.",
    tryAgain: "Pokušaj ponovno",
    newsImage: "Slika vijesti",
    readMore: "→",
    source: "Izvor",
    date: "Datum"
  },
  sk: {
    loading: "Načítanie správ...",
    noNews: "Nenašli sa žiadne správy. Skúste inú kategóriu alebo jazyk.",
    error: "Chyba pri načítaní správ",
    errorDesc: "Skontrolujte pripojenie na internet a skúste to znova.",
    tryAgain: "Skúsiť znova",
    newsImage: "Obrázok správy",
    readMore: "→",
    source: "Zdroj",
    date: "Dátum"
  },
  sl: {
    loading: "Nalaganje novic...",
    noNews: "Ni najdenih novic. Poskusite drugo kategorijo ali jezik.",
    error: "Napaka pri nalaganju novic",
    errorDesc: "Preverite internetno povezavo in poskusite znova.",
    tryAgain: "Poskusi znova",
    newsImage: "Slika novice",
    readMore: "→",
    source: "Vir",
    date: "Datum"
  },
  da: {
    loading: "Indlæser nyheder...",
    noNews: "Ingen nyheder fundet. Prøv en anden kategori eller sprog.",
    error: "Fejl ved indlæsning af nyheder",
    errorDesc: "Tjek din internetforbindelse og prøv igen.",
    tryAgain: "Prøv igen",
    newsImage: "Nyhedsbillede",
    readMore: "→",
    source: "Kilde",
    date: "Dato"
  },
  fi: {
    loading: "Ladataan uutisia...",
    noNews: "Uutisia ei löytynyt. Kokeile toista luokkaa tai kieltä.",
    error: "Virhe ladattaessa uutisia",
    errorDesc: "Tarkista internetyhteytesi ja yritä uudelleen.",
    tryAgain: "Yritä uudelleen",
    newsImage: "Uutiskuva",
    readMore: "→",
    source: "Lähde",
    date: "Päivämäärä"
  },
  no: {
    loading: "Laster nyheter...",
    noNews: "Ingen nyheter funnet. Prøv en annen kategori eller språk.",
    error: "Feil ved lasting av nyheter",
    errorDesc: "Sjekk internettforbindelsen din og prøv igjen.",
    tryAgain: "Prøv igjen",
    newsImage: "Nyhetsbilde",
    readMore: "→",
    source: "Kilde",
    date: "Dato"
  },
  is: {
    loading: "Hleð fréttir...",
    noNews: "Engar fréttir fundust. Prófaðu annan flokk eða tungumál.",
    error: "Villa við að hlaða fréttir",
    errorDesc: "Vinsamlegast athugaðu nettenginguna þína og reyndu aftur.",
    tryAgain: "Reyndu aftur",
    newsImage: "Fréttamynd",
    readMore: "→",
    source: "Heimild",
    date: "Dagsetning"
  },
  lt: {
    loading: "Įkeliamos naujienos...",
    noNews: "Naujienų nerasta. Išbandykite kitą kategoriją ar kalbą.",
    error: "Klaida įkeliant naujienas",
    errorDesc: "Patikrinkite interneto ryšį ir bandykite dar kartą.",
    tryAgain: "Bandyti dar kartą",
    newsImage: "Naujienų vaizdas",
    readMore: "→",
    source: "Šaltinis",
    date: "Data"
  },
  lv: {
    loading: "Ielādē jaunumus...",
    noNews: "Jaunumi nav atrasti. Izmēģiniet citu kategoriju vai valodu.",
    error: "Kļūda, ielādējot jaunumus",
    errorDesc: "Lūdzu, pārbaudiet interneta savienojumu un mēģiniet vēlreiz.",
    tryAgain: "Mēģināt vēlreiz",
    newsImage: "Jaunumu attēls",
    readMore: "→",
    source: "Avots",
    date: "Datums"
  },
  ga: {
    loading: "Ag lódáil nuacht...",
    noNews: "Gan nuacht aimsithe. Bain triail as catagóir nó teanga eile.",
    error: "Earráid agus nuacht á lódáil",
    errorDesc: "Seiceáil do nasc idirlín agus bain triail eile as.",
    tryAgain: "Bain triail eile as",
    newsImage: "Íomhá nuachta",
    readMore: "→",
    source: "Foinse",
    date: "Dáta"
  },
  mt: {
    loading: "Tagħbija l-aħbarijiet...",
    noNews: "L-ebda aħbarijiet ma nstabu. Ipprova kategorija jew lingwa oħra.",
    error: "Żball fit-tagħbija tal-aħbarijiet",
    errorDesc: "Jekk jogħġbok iċċekkja l-konnessjoni tal-internet tiegħek u erġa' pprova.",
    tryAgain: "Erġa' pprova",
    newsImage: "Immaġni tal-aħbarijiet",
    readMore: "→",
    source: "Sors",
    date: "Data"
  },
  cy: {
    loading: "Llwytho newyddion...",
    noNews: "Ni ddarganfuwyd newyddion. Rhowch gynnig ar gategori neu iaith arall.",
    error: "Gwall wrth lwytho newyddion",
    errorDesc: "Gwiriwch eich cysylltiad rhyngrwyd a rhowch gynnig arall arni.",
    tryAgain: "Rhowch gynnig arall arni",
    newsImage: "Delwedd newyddion",
    readMore: "→",
    source: "Ffynhonnell",
    date: "Dyddiad"
  },
  eu: {
    loading: "Berriak kargatzen...",
    noNews: "Ez da berririk aurkitu. Saiatu beste kategoria edo hizkuntza batean.",
    error: "Errorea berriak kargatzean",
    errorDesc: "Egiaztatu interneteko konexioa eta saiatu berriro.",
    tryAgain: "Saiatu berriro",
    newsImage: "Berrien irudia",
    readMore: "→",
    source: "Iturria",
    date: "Data"
  },
  ca: {
    loading: "Carregant notícies...",
    noNews: "No s'han trobat notícies. Prova una altra categoria o idioma.",
    error: "Error en carregar les notícies",
    errorDesc: "Si us plau, comprova la teva connexió a Internet i torna-ho a intentar.",
    tryAgain: "Torna-ho a intentar",
    newsImage: "Imatge de notícia",
    readMore: "→",
    source: "Font",
    date: "Data"
  },
  gl: {
    loading: "Cargando noticias...",
    noNews: "Non se atoparon noticias. Proba outra categoría ou idioma.",
    error: "Erro ao cargar as noticias",
    errorDesc: "Por favor, comprobe a súa conexión a Internet e ténteo de novo.",
    tryAgain: "Tentar de novo",
    newsImage: "Imaxe da noticia",
    readMore: "→",
    source: "Fonte",
    date: "Data"
  },
  sq: {
    loading: "Duke ngarkuar lajmet...",
    noNews: "Nuk u gjet asnjë lajm. Provo një kategori ose gjuhë tjetër.",
    error: "Gabim në ngarkimin e lajmeve",
    errorDesc: "Ju lutemi kontrolloni lidhjen tuaj të internetit dhe provoni përsëri.",
    tryAgain: "Provo përsëri",
    newsImage: "Imazhi i lajmit",
    readMore: "→",
    source: "Burimi",
    date: "Data"
  },
  mk: {
    loading: "Вчитување вести...",
    noNews: "Не се пронајдени вести. Пробајте друга категорија или јазик.",
    error: "Грешка при вчитување на вести",
    errorDesc: "Проверете ја интернет врската и обидете се повторно.",
    tryAgain: "Обидете се повторно",
    newsImage: "Слика на веста",
    readMore: "→",
    source: "Извор",
    date: "Датум"
  },
  bs: {
    loading: "Učitavanje vijesti...",
    noNews: "Nema pronađenih vijesti. Pokušajte drugu kategoriju ili jezik.",
    error: "Greška pri učitavanju vijesti",
    errorDesc: "Provjerite internetsku vezu i pokušajte ponovo.",
    tryAgain: "Pokušaj ponovo",
    newsImage: "Slika vijesti",
    readMore: "→",
    source: "Izvor",
    date: "Datum"
  },
  me: {
    loading: "Učitavanje vijesti...",
    noNews: "Nema pronađenih vijesti. Pokušajte drugu kategoriju ili jezik.",
    error: "Greška pri učitavanju vijesti",
    errorDesc: "Provjerite internetsku vezu i pokušajte ponovo.",
    tryAgain: "Pokušaj ponovo",
    newsImage: "Slika vijesti",
    readMore: "→",
    source: "Izvor",
    date: "Datum"
  },
  ka: {
    loading: "სიახლეების ჩატვირთვა...",
    noNews: "სიახლეები ვერ მოიძებნა. სცადეთ სხვა კატეგორია ან ენა.",
    error: "შეცდომა სიახლეების ჩატვირთვისას",
    errorDesc: "გთხოვთ, შეამოწმოთ ინტერნეტ კავშირი და სცადოთ თავიდან.",
    tryAgain: "სცადეთ თავიდან",
    newsImage: "სიახლის სურათი",
    readMore: "→",
    source: "წყარო",
    date: "თარიღი"
  },
  hy: {
    loading: "Բեռնում ենք նորությունները...",
    noNews: "Նորություններ չեն գտնվել: Փորձեք մեկ այլ կատեգորիա կամ լեզու:",
    error: "Սխալ նորությունները բեռնելիս",
    errorDesc: "Խնդրում ենք ստուգել ձեր ինտերնետ կապը և փորձել կրկին:",
    tryAgain: "Փորձել կրկին",
    newsImage: "Նորության պատկեր",
    readMore: "→",
    source: "Աղբյուր",
    date: "Ամսաթիվ"
  },
  az: {
    loading: "Xəbərlər yüklənir...",
    noNews: "Xəbər tapılmadı. Başqa kateqoriya və ya dil sınayın.",
    error: "Xəbərləri yükləyərkən xəta baş verdi",
    errorDesc: "Zəhmət olmasa internet bağlantınızı yoxlayın və yenidən cəhd edin.",
    tryAgain: "Yenidən cəhd edin",
    newsImage: "Xəbər şəkli",
    readMore: "→",
    source: "Mənbə",
    date: "Tarix"
  },
  ar: {
    loading: "جاري تحميل الأخبار...",
    noNews: "لم يتم العثور على أخبار. جرب فئة أو لغة أخرى.",
    error: "خطأ في تحميل الأخبار",
    errorDesc: "يرجى التحقق من اتصالك بالإنترنت والمحاولة مرة أخرى.",
    tryAgain: "حاول مرة أخرى",
    newsImage: "صورة الخبر",
    readMore: "→",
    source: "المصدر",
    date: "التاريخ"
  },
  ja: {
    loading: "ニュースを読み込んでいます...",
    noNews: "ニュースが見つかりませんでした。別のカテゴリまたは言語をお試しください。",
    error: "ニュースの読み込みエラー",
    errorDesc: "インターネット接続を確認して、もう一度お試しください。",
    tryAgain: "再試行",
    newsImage: "ニュース画像",
    readMore: "→",
    source: "ソース",
    date: "日付"
  },
  zh: {
    loading: "正在加载新闻...",
    noNews: "未找到新闻。请尝试其他类别或语言。",
    error: "加载新闻时出错",
    errorDesc: "请检查您的互联网连接，然后重试。",
    tryAgain: "重试",
    newsImage: "新闻图片",
    readMore: "→",
    source: "来源",
    date: "日期"
  },
  ko: {
    loading: "뉴스를 불러오는 중...",
    noNews: "뉴스를 찾을 수 없습니다. 다른 카테고리나 언어를 시도해보세요.",
    error: "뉴스 로딩 오류",
    errorDesc: "인터넷 연결을 확인하고 다시 시도해주세요.",
    tryAgain: "다시 시도",
    newsImage: "뉴스 이미지",
    readMore: "→",
    source: "출처",
    date: "날짜"
  },
  tr: {
    loading: "Haberler yükleniyor...",
    noNews: "Haber bulunamadı. Başka bir kategori veya dil deneyin.",
    error: "Haber yüklenirken hata oluştu",
    errorDesc: "Lütfen internet bağlantınızı kontrol edin ve tekrar deneyin.",
    tryAgain: "Tekrar dene",
    newsImage: "Haber görseli",
    readMore: "→",
    source: "Kaynak",
    date: "Tarih"
  },
  hi: {
    loading: "समाचार लोड हो रहे हैं...",
    noNews: "कोई समाचार नहीं मिला। कोई अन्य श्रेणी या भाषा आज़माएं।",
    error: "समाचार लोड करने में त्रुटि",
    errorDesc: "कृपया अपना इंटरनेट कनेक्शन जांचें और पुनः प्रयास करें।",
    tryAgain: "पुनः प्रयास करें",
    newsImage: "समाचार छवि",
    readMore: "→",
    source: "स्रोत",
    date: "तारीख"
  },
  id: {
    loading: "Memuat berita...",
    noNews: "Tidak ada berita ditemukan. Coba kategori atau bahasa lain.",
    error: "Kesalahan memuat berita",
    errorDesc: "Silakan periksa koneksi internet Anda dan coba lagi.",
    tryAgain: "Coba lagi",
    newsImage: "Gambar berita",
    readMore: "→",
    source: "Sumber",
    date: "Tanggal"
  },
  th: {
    loading: "กำลังโหลดข่าว...",
    noNews: "ไม่พบข่าว ลองหมวดหมู่หรือภาษาอื่น",
    error: "ข้อผิดพลาดในการโหลดข่าว",
    errorDesc: "โปรดตรวจสอบการเชื่อมต่ออินเทอร์เน็ตของคุณแล้วลองอีกครั้ง",
    tryAgain: "ลองอีกครั้ง",
    newsImage: "ภาพข่าว",
    readMore: "→",
    source: "แหล่งที่มา",
    date: "วันที่"
  },
  vi: {
    loading: "Đang tải tin tức...",
    noNews: "Không tìm thấy tin tức. Hãy thử danh mục hoặc ngôn ngữ khác.",
    error: "Lỗi khi tải tin tức",
    errorDesc: "Vui lòng kiểm tra kết nối internet của bạn và thử lại.",
    tryAgain: "Thử lại",
    newsImage: "Hình ảnh tin tức",
    readMore: "→",
    source: "Nguồn",
    date: "Ngày"
  },
  bn: {
    loading: "খবর লোড হচ্ছে...",
    noNews: "কোন খবর পাওয়া যায়নি। অন্য বিভাগ বা ভাষা চেষ্টা করুন।",
    error: "খবর লোড করতে ত্রুটি",
    errorDesc: "অনুগ্রহ করে আপনার ইন্টারনেট সংযোগ পরীক্ষা করুন এবং আবার চেষ্টা করুন।",
    tryAgain: "আবার চেষ্টা করুন",
    newsImage: "খবরের ছবি",
    readMore: "→",
    source: "উৎস",
    date: "তারিখ"
  },
  ta: {
    loading: "செய்திகள் ஏற்றப்படுகின்றன...",
    noNews: "செய்திகள் எதுவும் கிடைக்கவில்லை. வேறு வகை அல்லது மொழியை முயற்சிக்கவும்.",
    error: "செய்திகளை ஏற்றுவதில் பிழை",
    errorDesc: "உங்கள் இணைய இணைப்பைச் சரிபார்த்து மீண்டும் முயற்சிக்கவும்.",
    tryAgain: "மீண்டும் முயற்சி செய்க",
    newsImage: "செய்தி படம்",
    readMore: "→",
    source: "மூலம்",
    date: "தேதி"
  },
  te: {
    loading: "వార్తలు లోడ్ అవుతున్నాయి...",
    noNews: "వార్తలు ఏవీ కనుగొనబడలేదు. మరొక వర్గం లేదా భాషను ప్రయత్నించండి.",
    error: "వార్తలను లోడ్ చేయడంలో లోపం",
    errorDesc: "దయచేసి మీ ఇంటర్నెట్ కనెక్షన్ని తనిఖీ చేసి, మళ్లీ ప్రయత్నించండి.",
    tryAgain: "మళ్ళీ ప్రయత్నించు",
    newsImage: "వార్తా చిత్రం",
    readMore: "→",
    source: "మూలం",
    date: "తేదీ"
  },
  ms: {
    loading: "Memuat berita...",
    noNews: "Tiada berita ditemui. Cuba kategori atau bahasa lain.",
    error: "Ralat memuat berita",
    errorDesc: "Sila periksa sambungan internet anda dan cuba lagi.",
    tryAgain: "Cuba lagi",
    newsImage: "Imej berita",
    readMore: "→",
    source: "Sumber",
    date: "Tarikh"
  },
  fil: {
    loading: "Naglo-load ng balita...",
    noNews: "Walang nakitang balita. Subukan ang ibang kategorya o wika.",
    error: "Error sa pag-load ng balita",
    errorDesc: "Pakitingnan ang iyong koneksyon sa internet at subukang muli.",
    tryAgain: "Subukan muli",
    newsImage: "Larawan ng balita",
    readMore: "→",
    source: "Pinagmulan",
    date: "Petsa"
  },
  my: {
    loading: "သတင်းများကို ဖွင့်နေသည်...",
    noNews: "သတင်းမတွေ့ပါ။ အခြားအမျိုးအစား သို့မဟုတ် ဘာသာစကားကို စမ်းကြည့်ပါ။",
    error: "သတင်းများဖွင့်ရာတွင် အမှားရှိနေသည်",
    errorDesc: "ကျေးဇူးပြု၍ သင်၏အင်တာနက်ချိတ်ဆက်မှုကို စစ်ဆေးပြီး ထပ်မံကြိုးစားပါ။",
    tryAgain: "ထပ်မံကြိုးစားပါ",
    newsImage: "သတင်းပုံ",
    readMore: "→",
    source: "ရင်းမြစ်",
    date: "ရက်စွဲ"
  },
  km: {
    loading: "កំពុងផ្ទុកព័ត៌មាន...",
    noNews: "រកមិនឃើញព័ត៌មានទេ។ សាកល្បងប្រភេទ ឬភាសាផ្សេងទៀត។",
    error: "មានបញ្ហាក្នុងការផ្ទុកព័ត៌មាន",
    errorDesc: "សូមពិនិត្យមើលការតភ្ជាប់អ៊ីនធឺណិតរបស់អ្នក ហើយព្យាយាមម្តងទៀត។",
    tryAgain: "ព្យាយាមម្តងទៀត",
    newsImage: "រូបភាពព័ត៌មាន",
    readMore: "→",
    source: "ប្រភព",
    date: "កាលបរិច្ឆេទ"
  },
  lo: {
    loading: "ກຳລັງໂຫຼດຂ່າວ...",
    noNews: "ບໍ່ພົບຂ່າວ. ລອງໝວດໝູ່ ຫຼື ພາສາອື່ນ.",
    error: "ຜິດພາດໃນການໂຫຼດຂ່າວ",
    errorDesc: "ກະລຸນາກວດສອບການເຊື່ອມຕໍ່ອິນເຕີເນັດຂອງທ່ານ ແລະ ລອງອີກຄັ້ງ.",
    tryAgain: "ລອງອີກຄັ້ງ",
    newsImage: "ຮູບພາບຂ່າວ",
    readMore: "→",
    source: "ແຫຼ່ງຂໍ້ມູນ",
    date: "ວັນທີ"
  },
  ne: {
    loading: "समाचार लोड हुँदैछ...",
    noNews: "कुनै समाचार फेला परेन। अर्को श्रेणी वा भाषा प्रयास गर्नुहोस्।",
    error: "समाचार लोड गर्दा त्रुटि",
    errorDesc: "कृपया आफ्नो इन्टरनेट जडान जाँच गर्नुहोस् र पुन: प्रयास गर्नुहोस्।",
    tryAgain: "पुन: प्रयास गर्नुहोस्",
    newsImage: "समाचार तस्वीर",
    readMore: "→",
    source: "स्रोत",
    date: "मिति"
  },
  si: {
    loading: "පුවත් පූරණය වෙමින්...",
    noNews: "පුවත් හමු නොවීය. වෙනත් ප්‍රවර්ගයක් හෝ භාෂාවක් උත්සාහ කරන්න.",
    error: "පුවත් පූරණය කිරීමේ දෝෂයකි",
    errorDesc: "කරුණාකර ඔබගේ අන්තර්ජාල සම්බන්ධතාවය පරීක්ෂා කර නැවත උත්සාහ කරන්න.",
    tryAgain: "නැවත උත්සාහ කරන්න",
    newsImage: "පුවත් රූපය",
    readMore: "→",
    source: "මූලාශ්‍රය",
    date: "දිනය"
  },
  mn: {
    loading: "Мэдээ ачааллаж байна...",
    noNews: "Мэдээ олдсонгүй. Өөр ангилал эсвэл хэл сонгоод үзээрэй.",
    error: "Мэдээ ачааллахад алдаа гарлаа",
    errorDesc: "Интернетийн холболтоо шалгаад дахин оролдоно уу.",
    tryAgain: "Дахин оролдох",
    newsImage: "Мэдээний зураг",
    readMore: "→",
    source: "Эх сурвалж",
    date: "Огноо"
  },
  kk: {
    loading: "Жаңалықтар жүктелуде...",
    noNews: "Жаңалықтар табылмады. Басқа санатты немесе тілді қолданып көріңіз.",
    error: "Жаңалықтарды жүктеу кезінде қате орын алды",
    errorDesc: "Интернет байланысыңызды тексеріп, қайталап көріңіз.",
    tryAgain: "Қайталап көру",
    newsImage: "Жаңалық суреті",
    readMore: "→",
    source: "Дереккөз",
    date: "Күні"
  },
  uz: {
    loading: "Yangiliklar yuklanmoqda...",
    noNews: "Hech qanday yangilik topilmadi. Boshqa turkum yoki tilni sinab ko'ring.",
    error: "Yangiliklarni yuklashda xatolik",
    errorDesc: "Iltimos, internet aloqangizni tekshiring va qayta urinib ko'ring.",
    tryAgain: "Qayta urinish",
    newsImage: "Yangilik rasmi",
    readMore: "→",
    source: "Manba",
    date: "Sana"
  },
  ky: {
    loading: "Жаңылыктар жүктөлүүдө...",
    noNews: "Жаңылыктар табылган жок. Башка категорияны же тилди сынап көрүңүз.",
    error: "Жаңылыктарды жүктөөдө ката кетти",
    errorDesc: "Интернет байланышыңызды текшерип, кайра аракет кылыңыз.",
    tryAgain: "Кайра аракет кылуу",
    newsImage: "Жаңылык сүрөтү",
    readMore: "→",
    source: "Булак",
    date: "Дата"
  },
  tk: {
    loading: "Habarlar ýüklenýär...",
    noNews: "Hiç habar tapylmady. Başga kategoriýany ýa-da dili synaň.",
    error: "Habarlary ýüklämde näsazlyk ýüze çykdy",
    errorDesc: "Internet baglanyşygyňyzy barlaň we täzedan synaň.",
    tryAgain: "Täzedan synaň",
    newsImage: "Habar suraty",
    readMore: "→",
    source: "Çeşme",
    date: "Sene"
  },
  ps: {
    loading: "خبرې بارېږي...",
    noNews: "هیڅ خبر ونه موندل شو. بله کټګوري یا ژبه هڅه وکړئ.",
    error: "د خبرونو په بارولو کې تېروتنه",
    errorDesc: "مهرباني وکړئ خپل انټرنیټ اړیکه وګورئ او بیا هڅه وکړئ.",
    tryAgain: "بیا هڅه وکړئ",
    newsImage: "د خبر انځور",
    readMore: "→",
    source: "سرچینه",
    date: "نیټه"
  },
  fa: {
    loading: "در حال بارگذاری اخبار...",
    noNews: "خبری یافت نشد. دسته یا زبان دیگری را امتحان کنید.",
    error: "خطا در بارگذاری اخبار",
    errorDesc: "لطفاً اتصال اینترنت خود را بررسی کنید و دوباره تلاش کنید.",
    tryAgain: "تلاش مجدد",
    newsImage: "تصویر خبر",
    readMore: "→",
    source: "منبع",
    date: "تاریخ"
  },
  ur: {
    loading: "خبریں لوڈ ہو رہی ہیں...",
    noNews: "کوئی خبر نہیں ملی۔ کوئی اور زمرہ یا زبان آزمائیں۔",
    error: "خبریں لوڈ کرنے میں خرابی",
    errorDesc: "براہ کرم اپنا انٹرنیٹ کنکشن چیک کریں اور دوبارہ کوشش کریں۔",
    tryAgain: "دوبارہ کوشش کریں",
    newsImage: "خبر کی تصویر",
    readMore: "→",
    source: "ذریعہ",
    date: "تاریخ"
  },
  sd: {
    loading: "خبرون لوڊ ٿي رهيون آهن...",
    noNews: "ڪي به خبرون نه مليون. ڪو ٻيو درجو يا ٻولي آزمائي.",
    error: "خبرون لوڊ ڪرڻ ۾ خرابي",
    errorDesc: "مهرباني ڪري پنهنجو انٽرنيٽ ڪنيڪشن چيڪ ڪريو ۽ ٻيهر ڪوشش ڪريو.",
    tryAgain: "ٻيهر ڪوشش ڪريو",
    newsImage: "خبر جي تصوير",
    readMore: "→",
    source: "ذريعو",
    date: "تاريخ"
  },
  ku: {
    loading: "Nûçe tên barkirin...",
    noNews: "Nûçe nehatin dîtin. Kategoriyek an zimanek din biceribîne.",
    error: "Çewtiya barkirina nûçeyan",
    errorDesc: "Ji kerema xwe girêdana xwe ya înternetê kontrol bike û dîsa biceribîne.",
    tryAgain: "Dîsa biceribîne",
    newsImage: "Wêneyê nûçeyê",
    readMore: "→",
    source: "Çavkanî",
    date: "Dîrok"
  },
  he: {
    loading: "טוען חדשות...",
    noNews: "לא נמצאו חדשות. נסה קטגוריה או שפה אחרת.",
    error: "שגיאה בטעינת חדשות",
    errorDesc: "אנא בדוק את חיבור האינטרנט שלך ונסה שוב.",
    tryAgain: "נסה שוב",
    newsImage: "תמונת חדשות",
    readMore: "→",
    source: "מקור",
    date: "תאריך"
  },
  yi: {
    loading: "לאָדן נייַעס...",
    noNews: "קיין נייַעס ניט געפֿונען. פּרובירן אן אנדער קאַטעגאָריע אָדער שפּראַך.",
    error: "טעות אין לאָדן נייַעס",
    errorDesc: "ביטע קאָנטראָלירן דיין אינטרנעט פֿאַרבינדונג און פּרובירן ווידער.",
    tryAgain: "פּרובירן ווידער",
    newsImage: "נייַעס בילד",
    readMore: "→",
    source: "מקור",
    date: "דאַטע"
  },
  am: {
    loading: "ዜናዎችን በመጫን ላይ...",
    noNews: "ምንም ዜና አልተገኘም። ሌላ ምድብ ወይም ቋንቋ ይሞክሩ።",
    error: "ዜናዎችን በመጫን ላይ ስህተት",
    errorDesc: "እባክዎ የኢንተርኔት ግንኙነትዎን ያረጋግጡ እና እንደገና ይሞክሩ።",
    tryAgain: "እንደገና ሞክር",
    newsImage: "የዜና ምስል",
    readMore: "→",
    source: "ምንጭ",
    date: "ቀን"
  },
  ti: {
    loading: "ዜናታት ይጽዕኑ ኣለዉ...",
    noNews: "ዝኾነ ዜና ኣይተረኸበን። ካልእ መደብ ወይ ቋንቋ ፈትኑ።",
    error: "ዜናታት ኣብ ምጽዓን ጌጋ",
    errorDesc: "በይነመረብካ መርምር እንደገና ፈትን።",
    tryAgain: "እንደገና ፈትን",
    newsImage: "ምስሊ ዜና",
    readMore: "→",
    source: "ምንጪ",
    date: "ዕለት"
  },
  or: {
    loading: "ଖବର ଲୋଡ୍ ହେଉଛି...",
    noNews: "କୌଣସି ଖବର ମିଳିଲା ନାହିଁ। ଅନ୍ୟ ବର୍ଗ କିମ୍ବା ଭାଷା ଚେଷ୍ଟା କରନ୍ତୁ।",
    error: "ଖବର ଲୋଡ୍ କରିବାରେ ତ୍ରୁଟି",
    errorDesc: "ଦୟାକରି ଆପଣଙ୍କ ଇଣ୍ଟରନେଟ୍ ସଂଯୋଗ ଯାଞ୍ଚ କରନ୍ତୁ ଏବଂ ପୁନଃଚେଷ୍ଟା କରନ୍ତୁ।",
    tryAgain: "ପୁନଃଚେଷ୍ଟା କରନ୍ତୁ",
    newsImage: "ଖବର ଛବି",
    readMore: "→",
    source: "ଉତ୍ସ",
    date: "ତାରିଖ"
  },
  as: {
    loading: "বাতৰি লোড হৈ আছে...",
    noNews: "কোনো বাতৰি পোৱা নগ'ল। অন্য শ্ৰেণী বা ভাষা চেষ্টা কৰক।",
    error: "বাতৰি লোড কৰাত ত্ৰুটি",
    errorDesc: "অনুগ্ৰহ কৰি আপোনাৰ ইণ্টাৰনেট সংযোগ পৰীক্ষা কৰক আৰু পুনৰ চেষ্টা কৰক।",
    tryAgain: "পুনৰ চেষ্টা কৰক",
    newsImage: "বাতৰিৰ ছবি",
    readMore: "→",
    source: "উৎস",
    date: "তাৰিখ"
  },
  pa: {
    loading: "ਖਬਰਾਂ ਲੋਡ ਹੋ ਰਹੀਆਂ ਹਨ...",
    noNews: "ਕੋਈ ਖਬਰ ਨਹੀਂ ਮਿਲੀ। ਕੋਈ ਹੋਰ ਸ਼੍ਰੇਣੀ ਜਾਂ ਭਾਸ਼ਾ ਅਜ਼ਮਾਓ।",
    error: "ਖਬਰਾਂ ਲੋਡ ਕਰਨ ਵਿੱਚ ਤਰੁੱਟੀ",
    errorDesc: "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਇੰਟਰਨੈੱਟ ਕਨੈਕਸ਼ਨ ਚੈੱਕ ਕਰੋ ਅਤੇ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
    tryAgain: "ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ",
    newsImage: "ਖਬਰ ਦੀ ਤਸਵੀਰ",
    readMore: "→",
    source: "ਸਰੋਤ",
    date: "ਤਾਰੀਖ"
  },
  gu: {
    loading: "સમાચાર લોડ થઈ રહ્યા છે...",
    noNews: "કોઈ સમાચાર મળ્યા નથી. બીજી શ્રેણી અથવા ભાષા અજમાવો.",
    error: "સમાચાર લોડ કરવામાં ભૂલ",
    errorDesc: "કૃપા કરીને તમારું ઇન્ટરનેટ કનેક્શન તપાસો અને ફરી પ્રયાસ કરો.",
    tryAgain: "ફરી પ્રયાસ કરો",
    newsImage: "સમાચાર છબી",
    readMore: "→",
    source: "સ્ત્રોત",
    date: "તારીખ"
  },
  mr: {
    loading: "बातम्या लोड होत आहेत...",
    noNews: "कोणत्याही बातम्या सापडल्या नाहीत. दुसरी श्रेणी किंवा भाषा वापरून पहा.",
    error: "बातम्या लोड करताना त्रुटी",
    errorDesc: "कृपया तुमचे इंटरनेट कनेक्शन तपासा आणि पुन्हा प्रयत्न करा.",
    tryAgain: "पुन्हा प्रयत्न करा",
    newsImage: "बातमीचे चित्र",
    readMore: "→",
    source: "स्रोत",
    date: "तारीख"
  },
  kn: {
    loading: "ಸುದ್ದಿಗಳನ್ನು ಲೋಡ್ ಮಾಡಲಾಗುತ್ತಿದೆ...",
    noNews: "ಯಾವುದೇ ಸುದ್ದಿ ಕಂಡುಬಂದಿಲ್ಲ. ಬೇರೆ ವರ್ಗ ಅಥವಾ ಭಾಷೆಯನ್ನು ಪ್ರಯತ್ನಿಸಿ.",
    error: "ಸುದ್ದಿಗಳನ್ನು ಲೋಡ್ ಮಾಡುವಲ್ಲಿ ದೋಷ",
    errorDesc: "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಇಂಟರ್ನೆಟ್ ಸಂಪರ್ಕವನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
    tryAgain: "ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ",
    newsImage: "ಸುದ್ದಿ ಚಿತ್ರ",
    readMore: "→",
    source: "ಮೂಲ",
    date: "ದಿನಾಂಕ"
  },
  ml: {
    loading: "വാർത്തകൾ ലോഡുചെയ്യുന്നു...",
    noNews: "വാർത്തകളൊന്നും കണ്ടെത്തിയില്ല. മറ്റൊരു വിഭാഗമോ ഭാഷയോ പരീക്ഷിക്കുക.",
    error: "വാർത്തകൾ ലോഡുചെയ്യുന്നതിൽ പിശക്",
    errorDesc: "ദയവായി നിങ്ങളുടെ ഇന്റർനെറ്റ് കണക്ഷൻ പരിശോധിച്ച് വീണ്ടും ശ്രമിക്കുക.",
    tryAgain: "വീണ്ടും ശ്രമിക്കുക",
    newsImage: "വാർത്താ ചിത്രം",
    readMore: "→",
    source: "ഉറവിടം",
    date: "തിയതി"
  },
  sw: {
    loading: "Inapakia habari...",
    noNews: "Hakuna habari zilizopatikana. Jaribu kategoria au lugha nyingine.",
    error: "Hitilafu katika kupakia habari",
    errorDesc: "Tafadhali angalia muunganisho wako wa intaneti na ujaribu tena.",
    tryAgain: "Jaribu tena",
    newsImage: "Picha ya habari",
    readMore: "→",
    source: "Chanzo",
    date: "Tarehe"
  },
  ha: {
    loading: "Ana loda labarai...",
    noNews: "Babu labarai da aka samo. Gwada wani rukuni ko harshe.",
    error: "Kuskure wajen loda labarai",
    errorDesc: "Da fatan za a duba haɗin intanet ɗin ku kuma a sake gwadawa.",
    tryAgain: "Sake gwadawa",
    newsImage: "Hoton labarai",
    readMore: "→",
    source: "Madogara",
    date: "Kwanan wata"
  },
  ig: {
    loading: "Na bulite akụkọ...",
    noNews: "Ọ dịghị akụkọ ahụrụ. Nwaa ụdị ma ọ bụ asụsụ ọzọ.",
    error: "Mperi na bulite akụkọ",
    errorDesc: "Biko lelee njikọ ịntanetị gị ma nwaa ọzọ.",
    tryAgain: "Nwaa ọzọ",
    newsImage: "Foto akụkọ",
    readMore: "→",
    source: "Ebe e si nweta",
    date: "Ụbọchị"
  },
  yo: {
    loading: "Njá títẹ̀ àwọn ìròyìn...",
    noNews: "Kò sí ìròyìn tí a rí. Gbìyànjú ẹ̀ka tàbí èdè mìíràn.",
    error: "Àṣìṣe ní gbígba àwọn ìròyìn",
    errorDesc: "Jọ̀wọ́ ṣàyẹ̀wò asopọ́ intanẹ́ẹ̀tì rẹ kí o sì tún gbìyànjú.",
    tryAgain: "Tún gbìyànjú",
    newsImage: "Àwòrán ìròyìn",
    readMore: "→",
    source: "Orisun",
    date: "Ọjọ́"
  },
  zu: {
    loading: "Ilayisha izindaba...",
    noNews: "Azitholakalanga izindaba. Zama esinye isigaba noma ulimi.",
    error: "Iphutha ekulayisheni izindaba",
    errorDesc: "Sicela uhlole ukuxhumana kwakho kwe-inthanethi bese uzama futhi.",
    tryAgain: "Zama futhi",
    newsImage: "Isithombe sezindaba",
    readMore: "→",
    source: "Umthombo",
    date: "Usuku"
  },
  xh: {
    loading: "Ilayisha iindaba...",
    noNews: "Akukho zindaba zifunyenweyo. Zama olunye udidi okanye ulwimi.",
    error: "Impazamo ekulayisheni iindaba",
    errorDesc: "Nceda ujonge uqhagamshelo lwakho lwe-intanethi kwaye uzame kwakhona.",
    tryAgain: "Zama kwakhona",
    newsImage: "Umfanekiso weendaba",
    readMore: "→",
    source: "Umthombo",
    date: "Umhla"
  },
  st: {
    loading: "E jara ditaba...",
    noNews: "Ha ho ditaba tse fumanweng. Leka sehlopha se seng kapa puo e nng.",
    error: "Phoso ha e jara ditaba",
    errorDesc: "Ka kopo hlahloba kgokahano ya hao ya inthanete mme o leke hape.",
    tryAgain: "Leka hape",
    newsImage: "Setshwantsho sa ditaba",
    readMore: "→",
    source: "Mohlodi",
    date: "Letsatsi"
  },
  tn: {
    loading: "E lwala dikgang...",
    noNews: "Ga go dikgang tse di fitlheletsweng. Leka karolo e nngwe kapa puo e nngwe.",
    error: "Phoso mo go lwaleng dikgang",
    errorDesc: "Ka tsweetswee tlhatlhoba kgokagano ya gago ya inthanete mme o leke gape.",
    tryAgain: "Leka gape",
    newsImage: "Setshwantsho sa dikgang",
    readMore: "→",
    source: "Mothopo",
    date: "Letlha"
  },
  ss: {
    loading: "Ilayisha tindzaba...",
    noNews: "Atikutholakalanga tindzaba. Tama lesinye sigaba noma lulwimi.",
    error: "Iphutsa ekulayisheni tindzaba",
    errorDesc: "Sicela uhlole kuxhumana kwakho kwe-inthanethi bese utama futsi.",
    tryAgain: "Tama futsi",
    newsImage: "Sithombe setindzaba",
    readMore: "→",
    source: "Umthombo",
    date: "Lusuku"
  },
  ve: {
    loading: "I layisa nyambo...",
    noNews: "A hu na nyambo dzo wanalaho. Lingedza vhuree hañwe kana luambo luñwe.",
    error: "Vhukhakhi kha u layisa nyambo",
    errorDesc: "Kha vha sedze khonekanyo yavho ya inthanete vha tshi do lingedza hafhu.",
    tryAgain: "Lingedza hafhu",
    newsImage: "Tshifanyiso tsha nyambo",
    readMore: "→",
    source: "Khonadzeo",
    date: "Duvha"
  },
  ts: {
    loading: "Yi layicha mahungu...",
    noNews: "A ku na mahungu lama kumekeke. Ringeta xiyenge xin'wana kana ririmi rin'wana.",
    error: "Xihoxo eku layicheni mahungu",
    errorDesc: "Hlekela khumbhekanto wa wena wa inthanete u ringeta nakambe.",
    tryAgain: "Ringeta nakambe",
    newsImage: "Xifaniso xa mahungu",
    readMore: "→",
    source: "Mbuyamelom",
    date: "Siku"
  },
  rn: {
    loading: "Ikurura amakuru...",
    noNews: "Nta makuru yabonetse. Gerageza ikindi kiciro canke ururimi.",
    error: "Ikosa mugukurura amakuru",
    errorDesc: "Nyamuneka reba umuhamagaro wawe wa interineti hanyuma ugerageze nanone.",
    tryAgain: "Gerageza nanone",
    newsImage: "Ishusho y'amakuru",
    readMore: "→",
    source: "Inkomoko",
    date: "Itariki"
  },
  rw: {
    loading: "Gupakira amakuru...",
    noNews: "Nta makuru yabonetse. Gerageza indi kategorire cyangwa ururimi.",
    error: "Ikosa mugupakira amakuru",
    errorDesc: "Nyamuneka reba umuhamagaro wawe wa interineti hanyuma ugerageze nanone.",
    tryAgain: "Ongera ugerageze",
    newsImage: "Ifoto y'amakuru",
    readMore: "→",
    source: "Inkomoko",
    date: "Itariki"
  },
  lg: {
    loading: "Okutikka amawulire...",
    noNews: "Tewali mawulire gasangiddwa. Gezaako olulala lumu oba olulimi olulala.",
    error: "Ensobi mu kutikka amawulire",
    errorDesc: "Nsaba okekeebwa omusittule gwo nga weyongera okugezaako.",
    tryAgain: "Gezaako nate",
    newsImage: "Ekifaananyi ky'amawulire",
    readMore: "→",
    source: "Ensibuko",
    date: "Enaku z'omwezi"
  },
  ny: {
    loading: "Kukweza nkhani...",
    noNews: "Palibe nkhani zinapezeka. Yesani gulu lina kapena chinenero china.",
    error: "Cholakwika pokweza nkhani",
    errorDesc: "Chonde onani kugwirizana kwanu kwa intaneti ndikuyesanso.",
    tryAgain: "Yesanso",
    newsImage: "Chithunzi cha nkhani",
    readMore: "→",
    source: "Gwero",
    date: "Tsiku"
  },
  mg: {
    loading: "Mampakà vaovao...",
    noNews: "Tsy nisy vaovao hita. Andramo sokajy na fiteny hafa.",
    error: "Tsy fahombiazana ny famakàna vaovao",
    errorDesc: "Azafady jereo ny fifandraisana Internet ary andramo indray.",
    tryAgain: "Andramo indray",
    newsImage: "Sarin'ny vaovao",
    readMore: "→",
    source: "Loharano",
    date: "Daty"
  },
  om: {
    loading: "Oduu fe'aa...",
    noNews: "Oduu hin argamne. Kuta biraa ykn afaan biraa yaali.",
    error: "Diddaa oduu fe'uu",
    errorDesc: "Maaloo qindaa'ina internetii kee sakatta'iitii deebi'i yaali.",
    tryAgain: "Deebi'i yaali",
    newsImage: "Suuraa oduu",
    readMore: "→",
    source: "Maddi",
    date: "Guyyaa"
  },
  so: {
    loading: "Soo raraynta wararka...",
    noNews: "Wax warar ah lama helin. Isku day qayb kale ama luqad kale.",
    error: "Khalad soo raraynta wararka",
    errorDesc: "Fadlan hubi xidhiidhka internetkaaga oo isku day mar kale.",
    tryAgain: "Isku day mar kale",
    newsImage: "Sawirka wararka",
    readMore: "→",
    source: "Isha",
    date: "Taariikhda"
  },
  sn: {
    loading: "Kurodha nhau...",
    noNews: "Hapana nhau dzakawanikwa. Edza imwe chikamu kana mutauro.",
    error: "Kukanganisa kurodha nhau",
    errorDesc: "Ndokumbira utarise kubatana kwako kweinternet uye uedze zvakare.",
    tryAgain: "Edza zvakare",
    newsImage: "Mufananidzo wenhau",
    readMore: "→",
    source: "Kwakabva",
    date: "Zuva"
  },
  wo: {
    loading: "Yobi jagle...",
    noNews: "Amul xibaar bu fekk. Seet wala wala lakk.",
    error: "Njarifu ci yobiku xibaar yi",
    errorDesc: "Soxla nga indi ay jubluwaay yu internet bi te seet ci jàll.",
    tryAgain: "Seet ci jàll",
    newsImage: "Nataal xibaar",
    readMore: "→",
    source: "Gongikuwaay",
    date: "Bés"
  },
  ff: {
    loading: "Loowugo kumpital...",
    noNews: "Alaa kumpital tawaa. Encu kategori goo ɗemngal goo.",
    error: "Sakkan loowugo kumpital",
    errorDesc: "Tiiɗno taskito jokkol maa e internet en keen en ndokka.",
    tryAgain: "Ɗokka kadi",
    newsImage: "Nate kumpital",
    readMore: "→",
    source: "Iwdi",
    date: "Ñalde"
  },
  dy: {
    loading: "གསར་འགྱུར་འདྲེན་པ།",
    noNews: "གསར་འགྱུར་མ་རྙེད། རིམ་པ་གཞན་པའམ་སྐད་རིགས་གཞན་པ་ཚོད་ལྟ་གནང་།",
    error: "གསར་འགྱུར་འདྲེན་པའི་ནོར་འཁྲུལ།",
    errorDesc: "ཁྱེད་རང་གི་དྲ་རྒྱའི་འབྲེལ་མཐུད་ཞིབ་བཤེར་གནང་སྟེ་ཡང་བསྐྱར་འབད་གནང་།",
    tryAgain: "ཡང་བསྐྱར་འབད།",
    newsImage: "གསར་འགྱུར་པར།",
    readMore: "→",
    source: "འབྱུང་ཁུངས།",
    date: "ཚེས་གྲངས།"
  },
  bm: {
    loading: "Kibaru dilan...",
    noNews: "Kibaru t'a fana. Ka a kɛ ni ja mɛn wala kan wɛrɛ la.",
    error: "Fili ye kibaru dilan na",
    errorDesc: "A janto i ka intɛrɛnɛti baara ka a kɛ kokura.",
    tryAgain: "Ka a kɛ kokura",
    newsImage: "Kibaru ja",
    readMore: "→",
    source: "Bɔyɔrɔ",
    date: "Don"
  },
  be: {
    loading: "Загрузка навін...",
    noNews: "Навіны не знойдзены. Паспрабуйце іншую катэгорыю ці мову.",
    error: "Памылка загрузкі навін",
    errorDesc: "Калі ласка, праверце падключэнне да Інтэрнэту і паспрабуйце зноў.",
    tryAgain: "Паспрабаваць зноў",
    newsImage: "Выява навіны",
    readMore: "→",
    source: "Крыніца",
    date: "Дата"
  },
  uk: {
    loading: "Завантаження новин...",
    noNews: "Новини не знайдено. Спробуйте іншу категорію або мову.",
    error: "Помилка завантаження новин",
    errorDesc: "Будь ласка, перевірте підключення до Інтернету та спробуйте знову.",
    tryAgain: "Спробувати знову",
    newsImage: "Зображення новини",
    readMore: "→",
    source: "Джерело",
    date: "Дата"
  },
  el: {
    loading: "Φόρτωση ειδήσεων...",
    noNews: "Δεν βρέθηκαν ειδήσεις. Δοκιμάστε άλλη κατηγορία ή γλώσσα.",
    error: "Σφάλμα φόρτωσης ειδήσεων",
    errorDesc: "Παρακαλώ ελέγξτε τη σύνδεσή σας στο διαδίκτυο και δοκιμάστε ξανά.",
    tryAgain: "Δοκιμάστε ξανά",
    newsImage: "Εικόνα είδησης",
    readMore: "→",
    source: "Πηγή",
    date: "Ημερομηνία"
  },
  la: {
    loading: "Nuntii onerantur...",
    noNews: "Nulli nuntii inventi. Aliam categoriam vel linguam tempta.",
    error: "Error in onerandis nuntiis",
    errorDesc: "Quaeso coniunctionem interretialem tuam examina et iterum tempta.",
    tryAgain: "Iterum tempta",
    newsImage: "Imago nuntii",
    readMore: "→",
    source: "Fons",
    date: "Dies"
  },
  eo: {
    loading: "Ŝarĝas novaĵojn...",
    noNews: "Neniu novaĵo trovita. Provu alian kategorion aŭ lingvon.",
    error: "Eraro ŝarĝante novaĵojn",
    errorDesc: "Bonvolu kontroli vian interretan konekton kaj provu denove.",
    tryAgain: "Provu denove",
    newsImage: "Novaĵa bildo",
    readMore: "→",
    source: "Fonto",
    date: "Dato"
  },
  ia: {
    loading: "Cargar notitias...",
    noNews: "Nulle notitias trovate. Tenta un altere categoria o lingua.",
    error: "Error durante le carga de notitias",
    errorDesc: "Per favor verifica tu connexion a internet e tenta de novo.",
    tryAgain: "Tenta de novo",
    newsImage: "Imagine de notitia",
    readMore: "→",
    source: "Fonte",
    date: "Data"
  },
  co: {
    loading: "Caricà nutizie...",
    noNews: "Nisuna nutizia truvata. Pruvate un'altra categuria o lingua.",
    error: "Errore caricendu nutizie",
    errorDesc: "Per piacè verificate a vostra cunnessione internet è pruvate dinò.",
    tryAgain: "Pruvate dinò",
    newsImage: "Imagine di nutizia",
    readMore: "→",
    source: "Fonte",
    date: "Data"
  },
  gd: {
    loading: "A' luchdadh naidheachdan...",
    noNews: "Cha deach naidheachdan a lorg. Feuch roinn no cànan eile.",
    error: "Mearachd a' luchdadh naidheachdan",
    errorDesc: "Feuch an toir thu sùil air a' cheangal eadar-lìn agad agus feuch ris a-rithist.",
    tryAgain: "Feuch ris a-rithist",
    newsImage: "Dealbh naidheachd",
    readMore: "→",
    source: "Tùs",
    date: "Ceann-là"
  }
};

/* ===== ПЕРЕВОДЫ ДЛЯ ФУТЕРА (ВСЕ 109 ЯЗЫКОВ) ===== */
const FOOTER_TRANSLATIONS = {
  en: {
    tagline: "Breaking news from around the world",
    legal: "Legal",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    cookie: "Cookie Policy",
    contactTitle: "Contact",
    contact: "Contact Us",
    copyright: "© 2026 Infyra News. All rights reserved.",
    cookieText: "🍪 We use cookies to personalize ads and analyze traffic. By continuing to use our site, you agree to our {privacy} and use of cookies.",
    accept: "Accept",
    decline: "Decline",
    news: "News"
  },
  ru: {
    tagline: "Главные новости со всего мира",
    legal: "Правовая информация",
    privacy: "Политика конфиденциальности",
    terms: "Условия использования",
    cookie: "Политика Cookie",
    contactTitle: "Контакты",
    contact: "Связаться с нами",
    copyright: "© 2026 Infyra Новости. Все права защищены.",
    cookieText: "🍪 Мы используем cookie для персонализации рекламы и анализа трафика. Продолжая использовать сайт, вы соглашаетесь с {privacy} и использованием cookie.",
    accept: "Принять",
    decline: "Отклонить",
    news: "Новости"
  },
  et: {
    tagline: "Uudised üle maailma",
    legal: "Õiguslik",
    privacy: "Privaatsuspoliitika",
    terms: "Kasutustingimused",
    cookie: "Küpsiste poliitika",
    contactTitle: "Kontakt",
    contact: "Võta meiega ühendust",
    copyright: "© 2026 Infyra Uudised. Kõik õigused kaitstud.",
    cookieText: "🍪 Kasutame küpsiseid reklaamide isikupärastamiseks ja liikluse analüüsimiseks. Jätkates meie saidi kasutamist, nõustute {privacy} ja küpsiste kasutamisega.",
    accept: "Nõustun",
    decline: "Keeldu",
    news: "Uudised"
  },
  de: {
    tagline: "Aktuelle Nachrichten aus aller Welt",
    legal: "Rechtliches",
    privacy: "Datenschutzerklärung",
    terms: "Nutzungsbedingungen",
    cookie: "Cookie-Richtlinie",
    contactTitle: "Kontakt",
    contact: "Kontaktiere uns",
    copyright: "© 2026 Infyra Nachrichten. Alle Rechte vorbehalten.",
    cookieText: "🍪 Wir verwenden Cookies, um Anzeigen zu personalisieren und den Traffic zu analysieren. Durch die weitere Nutzung unserer Website stimmen Sie {privacy} und der Verwendung von Cookies zu.",
    accept: "Akzeptieren",
    decline: "Ablehnen",
    news: "Nachrichten"
  },
  fr: {
    tagline: "Actualités du monde entier",
    legal: "Informations légales",
    privacy: "Politique de confidentialité",
    terms: "Conditions d'utilisation",
    cookie: "Politique relative aux cookies",
    contactTitle: "Contact",
    contact: "Contactez-nous",
    copyright: "© 2026 Infyra Actualités. Tous droits réservés.",
    cookieText: "🍪 Nous utilisons des cookies pour personnaliser les annonces et analyser le trafic. En continuant à utiliser notre site, vous acceptez {privacy} et l'utilisation de cookies.",
    accept: "Accepter",
    decline: "Refuser",
    news: "Actualités"
  },
  es: {
    tagline: "Noticias de última hora de todo el mundo",
    legal: "Legal",
    privacy: "Política de privacidad",
    terms: "Términos de servicio",
    cookie: "Política de cookies",
    contactTitle: "Contacto",
    contact: "Contáctenos",
    copyright: "© 2026 Infyra Noticias. Todos los derechos reservados.",
    cookieText: "🍪 Utilizamos cookies para personalizar anuncios y analizar el tráfico. Al continuar usando nuestro sitio, acepta {privacy} y el uso de cookies.",
    accept: "Aceptar",
    decline: "Rechazar",
    news: "Noticias"
  },
  pt: {
    tagline: "Notícias de última hora de todo o mundo",
    legal: "Legal",
    privacy: "Política de privacidade",
    terms: "Termos de serviço",
    cookie: "Política de cookies",
    contactTitle: "Contato",
    contact: "Fale conosco",
    copyright: "© 2026 Infyra Notícias. Todos os direitos reservados.",
    cookieText: "🍪 Usamos cookies para personalizar anúncios e analisar o tráfego. Ao continuar a usar nosso site, você concorda com {privacy} e o uso de cookies.",
    accept: "Aceitar",
    decline: "Recusar",
    news: "Notícias"
  },
  it: {
    tagline: "Notizie in tempo reale da tutto il mondo",
    legal: "Legale",
    privacy: "Informativa sulla privacy",
    terms: "Termini di servizio",
    cookie: "Politica sui cookie",
    contactTitle: "Contatto",
    contact: "Contattaci",
    copyright: "© 2026 Infyra Notizie. Tutti i diritti riservati.",
    cookieText: "🍪 Utilizziamo i cookie per personalizzare gli annunci e analizzare il traffico. Continuando a utilizzare il nostro sito, accetti {privacy} e l'uso dei cookie.",
    accept: "Accettare",
    decline: "Rifiutare",
    news: "Notizie"
  },
  nl: {
    tagline: "Laatste nieuws van over de hele wereld",
    legal: "Juridisch",
    privacy: "Privacybeleid",
    terms: "Servicevoorwaarden",
    cookie: "Cookiebeleid",
    contactTitle: "Contact",
    contact: "Neem contact op",
    copyright: "© 2026 Infyra Nieuws. Alle rechten voorbehouden.",
    cookieText: "🍪 We gebruiken cookies om advertenties te personaliseren en verkeer te analyseren. Door verder te gaan met het gebruik van onze site, gaat u akkoord met {privacy} en het gebruik van cookies.",
    accept: "Accepteren",
    decline: "Weigeren",
    news: "Nieuws"
  },
  sv: {
    tagline: "Senaste nytt från hela världen",
    legal: "Juridisk",
    privacy: "Integritetspolicy",
    terms: "Användarvillkor",
    cookie: "Cookiepolicy",
    contactTitle: "Kontakt",
    contact: "Kontakta oss",
    copyright: "© 2026 Infyra Nyheter. Alla rättigheter förbehållna.",
    cookieText: "🍪 Vi använder cookies för att anpassa annonser och analysera trafik. Genom att fortsätta använda vår webbplats godkänner du {privacy} och användning av cookies.",
    accept: "Acceptera",
    decline: "Avböj",
    news: "Nyheter"
  },
  pl: {
    tagline: "Najnowsze wiadomości z całego świata",
    legal: "Informacje prawne",
    privacy: "Polityka prywatności",
    terms: "Warunki korzystania z usługi",
    cookie: "Polityka dotycząca plików cookie",
    contactTitle: "Kontakt",
    contact: "Skontaktuj się z nami",
    copyright: "© 2026 Infyra Wiadomości. Wszelkie prawa zastrzeżone.",
    cookieText: "🍪 Używamy plików cookie do personalizowania reklam i analizowania ruchu. Kontynuując korzystanie z naszej witryny, wyrażasz zgodę na {privacy} i korzystanie z plików cookie.",
    accept: "Zaakceptuj",
    decline: "Odrzuć",
    news: "Wiadomości"
  },
  cs: {
    tagline: "Nejnovější zprávy z celého světa",
    legal: "Právní informace",
    privacy: "Zásady ochrany osobních údajů",
    terms: "Podmínky služby",
    cookie: "Zásady používání souborů cookie",
    contactTitle: "Kontakt",
    contact: "Kontaktujte nás",
    copyright: "© 2026 Infyra Zprávy. Všechna práva vyhrazena.",
    cookieText: "🍪 Používáme soubory cookie k personalizaci reklam a analýze návštěvnosti. Pokračováním v používání našich stránek souhlasíte s {privacy} a používáním souborů cookie.",
    accept: "Přijmout",
    decline: "Odmítnout",
    news: "Zprávy"
  },
  ro: {
    tagline: "Știri de ultimă oră din întreaga lume",
    legal: "Informații legale",
    privacy: "Politica de confidențialitate",
    terms: "Termeni și condiții",
    cookie: "Politica privind cookie-urile",
    contactTitle: "Contact",
    contact: "Contactați-ne",
    copyright: "© 2026 Infyra Știri. Toate drepturile rezervate.",
    cookieText: "🍪 Folosim cookie-uri pentru a personaliza anunțurile și a analiza traficul. Prin continuarea utilizării site-ului nostru, sunteți de acord cu {privacy} și utilizarea cookie-urilor.",
    accept: "Acceptă",
    decline: "Refuză",
    news: "Știri"
  },
  hu: {
    tagline: "Friss hírek a világ minden tájáról",
    legal: "Jogi információk",
    privacy: "Adatvédelmi irányelvek",
    terms: "Felhasználási feltételek",
    cookie: "Süti szabályzat",
    contactTitle: "Kapcsolat",
    contact: "Lépjen kapcsolatba velünk",
    copyright: "© 2026 Infyra Hírek. Minden jog fenntartva.",
    cookieText: "🍪 Sütiket használunk a hirdetések személyre szabásához és a forgalom elemzéséhez. Weboldalunk további használatával elfogadja {privacy} és a sütik használatát.",
    accept: "Elfogad",
    decline: "Elutasít",
    news: "Hírek"
  },
  bg: {
    tagline: "Последни новини от цял свят",
    legal: "Правна информация",
    privacy: "Политика за поверителност",
    terms: "Условия за ползване",
    cookie: "Политика за бисквитките",
    contactTitle: "Контакти",
    contact: "Свържете се с нас",
    copyright: "© 2026 Infyra Новини. Всички права запазени.",
    cookieText: "🍪 Използваме бисквитки за персонализиране на рекламите и анализ на трафика. Продължавайки да използвате нашия сайт, вие се съгласявате с {privacy} и използването на бисквитки.",
    accept: "Приемам",
    decline: "Отказ",
    news: "Новини"
  },
  sr: {
    tagline: "Најновије вести из целог света",
    legal: "Правне информације",
    privacy: "Политика приватности",
    terms: "Услови коришћења",
    cookie: "Политика о колачићима",
    contactTitle: "Контакт",
    contact: "Контактирајте нас",
    copyright: "© 2026 Infyra Вести. Сва права задржана.",
    cookieText: "🍪 Користимо колачиће за персонализацију огласа и анализу саобраћаја. Наставком коришћења нашег сајта, пристајете на {privacy} и коришћење колачића.",
    accept: "Прихватам",
    decline: "Одбиј",
    news: "Вести"
  },
  hr: {
    tagline: "Najnovije vijesti iz cijelog svijeta",
    legal: "Pravne informacije",
    privacy: "Pravila o privatnosti",
    terms: "Uvjeti korištenja",
    cookie: "Pravila o kolačićima",
    contactTitle: "Kontakt",
    contact: "Kontaktirajte nas",
    copyright: "© 2026 Infyra Vijesti. Sva prava pridržana.",
    cookieText: "🍪 Koristimo kolačiće za personalizaciju oglasa i analizu prometa. Nastavkom korištenja naše stranice, pristajete na {privacy} i korištenje kolačića.",
    accept: "Prihvaćam",
    decline: "Odbij",
    news: "Vijesti"
  },
  sk: {
    tagline: "Najnovšie správy z celého sveta",
    legal: "Právne informácie",
    privacy: "Zásady ochrany osobných údajov",
    terms: "Podmienky používania",
    cookie: "Zásady používania súborov cookie",
    contactTitle: "Kontakt",
    contact: "Kontaktujte nás",
    copyright: "© 2026 Infyra Správy. Všetky práva vyhradené.",
    cookieText: "🍪 Používame súbory cookie na personalizáciu reklám a analýzu návštevnosti. Pokračovaním v používaní našej stránky súhlasíte s {privacy} a používaním súborov cookie.",
    accept: "Prijať",
    decline: "Odmietnuť",
    news: "Správy"
  },
  sl: {
    tagline: "Zadnje novice z vsega sveta",
    legal: "Pravne informacije",
    privacy: "Pravilnik o zasebnosti",
    terms: "Pogoji storitve",
    cookie: "Politika piškotkov",
    contactTitle: "Kontakt",
    contact: "Kontaktirajte nas",
    copyright: "© 2026 Infyra Novice. Vse pravice pridržane.",
    cookieText: "🍪 Uporabljamo piškotke za prilagoditev oglasov in analizo prometa. Z nadaljnjo uporabo našega spletnega mesta se strinjate z {privacy} in uporabo piškotkov.",
    accept: "Sprejmi",
    decline: "Zavrni",
    news: "Novice"
  },
  da: {
    tagline: "Seneste nyt fra hele verden",
    legal: "Juridisk",
    privacy: "Fortrolighedspolitik",
    terms: "Servicevilkår",
    cookie: "Cookies politik",
    contactTitle: "Kontakt",
    contact: "Kontakt os",
    copyright: "© 2026 Infyra Nyheder. Alle rettigheder forbeholdes.",
    cookieText: "🍪 Vi bruger cookies til at personalisere annoncer og analysere trafik. Ved at fortsætte med at bruge vores websted accepterer du {privacy} og brug af cookies.",
    accept: "Accepter",
    decline: "Afvis",
    news: "Nyheder"
  },
  fi: {
    tagline: "Uutisia ympäri maailmaa",
    legal: "Oikeudelliset tiedot",
    privacy: "Tietosuojakäytäntö",
    terms: "Käyttöehdot",
    cookie: "Evästekäytäntö",
    contactTitle: "Yhteystiedot",
    contact: "Ota meihin yhteyttä",
    copyright: "© 2026 Infyra Uutiset. Kaikki oikeudet pidätetään.",
    cookieText: "🍪 Käytämme evästeitä mainosten personointiin ja liikenteen analysointiin. Jatkamalla sivustomme käyttöä hyväksyt {privacy} ja evästeiden käytön.",
    accept: "Hyväksy",
    decline: "Hylkää",
    news: "Uutiset"
  },
  no: {
    tagline: "Siste nytt fra hele verden",
    legal: "Juridisk",
    privacy: "Personvernerklæring",
    terms: "Bruksvilkår",
    cookie: "Retningslinjer for informasjonskapsler",
    contactTitle: "Kontakt",
    contact: "Kontakt oss",
    copyright: "© 2026 Infyra Nyheter. Alle rettigheter forbeholdt.",
    cookieText: "🍪 Vi bruker informasjonskapsler for å tilpasse annonser og analysere trafikk. Ved å fortsette å bruke nettstedet vårt godtar du {privacy} og bruk av informasjonskapsler.",
    accept: "Godta",
    decline: "Avslå",
    news: "Nyheter"
  },
  is: {
    tagline: "Nýjustu fréttir um allan heim",
    legal: "Lögfræðilegar upplýsingar",
    privacy: "Persónuverndarstefna",
    terms: "Þjónustuskilmálar",
    cookie: "Vafrakökustefna",
    contactTitle: "Hafðu samband",
    contact: "Hafðu samband við okkur",
    copyright: "© 2026 Infyra Fréttir. Allur réttur áskilinn.",
    cookieText: "🍪 Við notum vafrakökur til að sérsníða auglýsingar og greina umferð. Með því að halda áfram að nota síðuna okkar samþykkir þú {privacy} og notkun vafraköku.",
    accept: "Samþykkja",
    decline: "Hafna",
    news: "Fréttir"
  },
  lt: {
    tagline: "Paskutinės naujienos iš viso pasaulio",
    legal: "Teisinė informacija",
    privacy: "Privatumo politika",
    terms: "Paslaugų teikimo sąlygos",
    cookie: "Slapukų politika",
    contactTitle: "Kontaktai",
    contact: "Susisiekite su mumis",
    copyright: "© 2026 Infyra Naujienos. Visos teisės saugomos.",
    cookieText: "🍪 Mes naudojame slapukus, kad suasmenintume skelbimus ir analizuotume srautą. Toliau naudodamiesi mūsų svetaine, jūs sutinkate su {privacy} ir slapukų naudojimu.",
    accept: "Sutinku",
    decline: "Atmesti",
    news: "Naujienos"
  },
  lv: {
    tagline: "Jaunākās ziņas no visas pasaules",
    legal: "Juridiskā informācija",
    privacy: "Privātuma politika",
    terms: "Pakalpojuma noteikumi",
    cookie: "Sīkdatņu politika",
    contactTitle: "Kontakti",
    contact: "Sazinieties ar mums",
    copyright: "© 2026 Infyra Ziņas. Visas tiesības aizsargātas.",
    cookieText: "🍪 Mēs izmantojam sīkdatnes, lai personalizētu reklāmas un analizētu trafiku. Turpinot izmantot mūsu vietni, jūs piekrītat {privacy} un sīkdatņu izmantošanai.",
    accept: "Piekrītu",
    decline: "Noraidīt",
    news: "Ziņas"
  },
  ga: {
    tagline: "Nuacht ó gach cearn den domhan",
    legal: "Eolas dlíthiúil",
    privacy: "Beartas Príobháideachais",
    terms: "Téarmaí Seirbhíse",
    cookie: "Beartas fianán",
    contactTitle: "Teagmháil",
    contact: "Déan teagmháil linn",
    copyright: "© 2026 Infyra Nuacht. Gach ceart ar cosaint.",
    cookieText: "🍪 Úsáidimid fianáin chun fógraí a phearsanú agus chun anailís a dhéanamh ar thrácht. Trí úsáid a bhaint as ár suíomh, aontaíonn tú lenár {privacy} agus le húsáid fianán.",
    accept: "Glac",
    decline: "Diúltaigh",
    news: "Nuacht"
  },
  mt: {
    tagline: "Aħbarijiet minn madwar id-dinja",
    legal: "Informazzjoni legali",
    privacy: "Politika tal-privatezza",
    terms: "Termini tas-Servizz",
    cookie: "Politika dwar il-cookies",
    contactTitle: "Kuntatt",
    contact: "Ikkuntattjana",
    copyright: "© 2026 Infyra Aħbarijiet. Id-drittijiet kollha riżervati.",
    cookieText: "🍪 Nużaw cookies biex nippersonalizzaw ir-reklami u nanalizzaw it-traffiku. Billi tkompli tuża s-sit tagħna, taqbel mal-{privacy} u l-użu tal-cookies.",
    accept: "Aċċetta",
    decline: "Irrifjuta",
    news: "Aħbarijiet"
  },
  cy: {
    tagline: "Newyddion o bedwar ban byd",
    legal: "Gwybodaeth gyfreithiol",
    privacy: "Polisi Preifatrwydd",
    terms: "Telerau Gwasanaeth",
    cookie: "Polisi Cwcis",
    contactTitle: "Cyswllt",
    contact: "Cysylltwch â ni",
    copyright: "© 2026 Infyra Newyddion. Cedwir pob hawl.",
    cookieText: "🍪 Rydym yn defnyddio cwcis i bersonoli hysbysebion a dadansoddi traffig. Trwy barhau i ddefnyddio ein gwefan, rydych yn cytuno i {privacy} a defnydd o gwcis.",
    accept: "Derbyn",
    decline: "Gwrthod",
    news: "Newyddion"
  },
  eu: {
    tagline: "Mundu osoko azken berriak",
    legal: "Legezko informazioa",
    privacy: "Pribatutasun politika",
    terms: "Zerbitzu-baldintzak",
    cookie: "Cookie politika",
    contactTitle: "Kontaktua",
    contact: "Jarri gurekin harremanetan",
    copyright: "© 2026 Infyra Albisteak. Eskubide guztiak erreserbatuta.",
    cookieText: "🍪 Cookieak erabiltzen ditugu iragarkiak pertsonalizatzeko eta trafikoa aztertzeko. Gure gunea erabiltzen jarraituz gero, {privacy} eta cookien erabilera onartzen dituzu.",
    accept: "Onartu",
    decline: "Ukatu",
    news: "Albisteak"
  },
  ca: {
    tagline: "Últimes notícies d'arreu del món",
    legal: "Informació legal",
    privacy: "Política de privacitat",
    terms: "Termes del servei",
    cookie: "Política de cookies",
    contactTitle: "Contacte",
    contact: "Poseu-vos en contacte amb nosaltres",
    copyright: "© 2026 Infyra Notícies. Tots els drets reservats.",
    cookieText: "🍪 Utilitzem cookies per personalitzar anuncis i analitzar el trànsit. En continuar utilitzant el nostre lloc, accepteu {privacy} i l'ús de cookies.",
    accept: "Acceptar",
    decline: "Rebutjar",
    news: "Notícies"
  },
  gl: {
    tagline: "Últimas noticias de todo o mundo",
    legal: "Información legal",
    privacy: "Política de privacidade",
    terms: "Condicións do servizo",
    cookie: "Política de cookies",
    contactTitle: "Contacto",
    contact: "Póñase en contacto connosco",
    copyright: "© 2026 Infyra Noticias. Todos os dereitos reservados.",
    cookieText: "🍪 Usamos cookies para personalizar anuncios e analizar o tráfico. Ao continuar usando o noso sitio, acepta {privacy} e o uso de cookies.",
    accept: "Aceptar",
    decline: "Rexeitar",
    news: "Noticias"
  },
  sq: {
    tagline: "Lajmet e fundit nga e gjithë bota",
    legal: "Informacion ligjor",
    privacy: "Politika e privatësisë",
    terms: "Kushtet e përdorimit",
    cookie: "Politika për cookies",
    contactTitle: "Kontakt",
    contact: "Na kontaktoni",
    copyright: "© 2026 Infyra Lajme. Të gjitha të drejtat e rezervuara.",
    cookieText: "🍪 Ne përdorim cookies për të personalizuar reklamat dhe për të analizuar trafikun. Duke vazhduar të përdorni faqen tonë, ju pranoni {privacy} dhe përdorimin e cookies.",
    accept: "Pranoj",
    decline: "Refuzoj",
    news: "Lajme"
  },
  mk: {
    tagline: "Најнови вести од целиот свет",
    legal: "Правни информации",
    privacy: "Политика за приватност",
    terms: "Услови за користење",
    cookie: "Политика за колачиња",
    contactTitle: "Контакт",
    contact: "Контактирајте не",
    copyright: "© 2026 Infyra Вести. Сите права се задржани.",
    cookieText: "🍪 Ние користиме колачиња за персонализација на реклами и анализа на сообраќај. Со продолжување на користењето на нашата страница, се согласувате со {privacy} и користењето на колачиња.",
    accept: "Прифати",
    decline: "Одбиј",
    news: "Вести"
  },
  bs: {
    tagline: "Najnovije vijesti iz cijelog svijeta",
    legal: "Pravne informacije",
    privacy: "Politika privatnosti",
    terms: "Uslovi korištenja",
    cookie: "Politika o kolačićima",
    contactTitle: "Kontakt",
    contact: "Kontaktirajte nas",
    copyright: "© 2026 Infyra Vijesti. Sva prava zadržana.",
    cookieText: "🍪 Koristimo kolačiće za personalizaciju oglasa i analizu prometa. Nastavkom korištenja naše stranice, pristajete na {privacy} i korištenje kolačića.",
    accept: "Prihvati",
    decline: "Odbij",
    news: "Vijesti"
  },
  me: {
    tagline: "Najnovije vijesti iz cijelog svijeta",
    legal: "Pravne informacije",
    privacy: "Politika privatnosti",
    terms: "Uslovi korišćenja",
    cookie: "Politika o kolačićima",
    contactTitle: "Kontakt",
    contact: "Kontaktirajte nas",
    copyright: "© 2026 Infyra Vijesti. Sva prava zadržana.",
    cookieText: "🍪 Koristimo kolačiće za personalizaciju oglasa i analizu prometa. Nastavkom korištenja naše stranice, pristajete na {privacy} i korištenje kolačića.",
    accept: "Prihvati",
    decline: "Odbij",
    news: "Vijesti"
  },
  ka: {
    tagline: "ახალი ამბები მთელი მსოფლიოდან",
    legal: "იურიდიული ინფორმაცია",
    privacy: "კონფიდენციალურობის პოლიტიკა",
    terms: "მომსახურების პირობები",
    cookie: "ქუქიების პოლიტიკა",
    contactTitle: "კონტაქტი",
    contact: "დაგვიკავშირდით",
    copyright: "© 2026 Infyra ახალი ამბები. ყველა უფლება დაცულია.",
    cookieText: "🍪 ჩვენ ვიყენებთ ქუქიებს რეკლამების პერსონალიზებისა და ტრაფიკის ანალიზისთვის. ჩვენი საიტის გამოყენების გაგრძელებით, თქვენ ეთანხმებით {privacy} და ქუქიების გამოყენებას.",
    accept: "მიღება",
    decline: "უარყოფა",
    news: "ახალი ამბები"
  },
  hy: {
    tagline: "Վերջին նորություններ ամբողջ աշխարհից",
    legal: "Իրավական տեղեկատվություն",
    privacy: "Գաղտնիության քաղաքականություն",
    terms: "Ծառայության պայմաններ",
    cookie: "Քուքիների քաղաքականություն",
    contactTitle: "Կապ",
    contact: "Կապնվեք մեզ հետ",
    copyright: "© 2026 Infyra Նորություններ. Բոլոր իրավունքները պաշտպանված են.",
    cookieText: "🍪 Մենք օգտագործում ենք քուքիներ՝ գովազդը անհատականացնելու և երթևեկությունը վերլուծելու համար։ Շարունակելով օգտագործել մեր կայքը՝ դուք համաձայնում եք {privacy} և քուքիների օգտագործմանը։",
    accept: "Ընդունել",
    decline: "Մերժել",
    news: "Նորություններ"
  },
  az: {
    tagline: "Dünyanın hər yerindən son xəbərlər",
    legal: "Hüquqi məlumat",
    privacy: "Məxfilik Siyasəti",
    terms: "Xidmət şərtləri",
    cookie: "Çərəz siyasəti",
    contactTitle: "Əlaqə",
    contact: "Bizimlə əlaqə saxlayın",
    copyright: "© 2026 Infyra Xəbərləri. Bütün hüquqlar qorunur.",
    cookieText: "🍪 Reklamları fərdiləşdirmək və trafiki təhlil etmək üçün çərəzlərdən istifadə edirik. Saytımızdan istifadəyə davam etməklə, {privacy} və çərəzlərin istifadəsi ilə razılaşırsınız.",
    accept: "Qəbul et",
    decline: "İmtina et",
    news: "Xəbərləri"
  },
  ar: {
    tagline: "آخر الأخبار من جميع أنحاء العالم",
    legal: "معلومات قانونية",
    privacy: "سياسة الخصوصية",
    terms: "شروط الخدمة",
    cookie: "سياسة ملفات تعريف الارتباط",
    contactTitle: "اتصل بنا",
    contact: "اتصل بنا",
    copyright: "© 2026 Infyra أخبار. جميع الحقوق محفوظة.",
    cookieText: "🍪 نستخدم ملفات تعريف الارتباط لتخصيص الإعلانات وتحليل حركة المرور. من خلال الاستمرار في استخدام موقعنا، فإنك توافق على {privacy} واستخدام ملفات تعريف الارتباط.",
    accept: "قبول",
    decline: "رفض",
    news: "أخبار"
  },
  ja: {
    tagline: "世界中の最新ニュース",
    legal: "法的情報",
    privacy: "プライバシーポリシー",
    terms: "利用規約",
    cookie: "クッキーポリシー",
    contactTitle: "お問い合わせ",
    contact: "お問い合わせ",
    copyright: "© 2026 Infyraニュース。全著作権所有。",
    cookieText: "🍪 当社は、広告のパーソナライズとトラフィック分析のためにCookieを使用しています。サイトを引き続き使用すると、{privacy}とCookieの使用に同意したことになります。",
    accept: "同意する",
    decline: "拒否する",
    news: "ニュース"
  },
  zh: {
    tagline: "来自世界各地的突发新闻",
    legal: "法律信息",
    privacy: "隐私政策",
    terms: "服务条款",
    cookie: "Cookie 政策",
    contactTitle: "联系方式",
    contact: "联系我们",
    copyright: "© 2026 Infyra 新闻。保留所有权利。",
    cookieText: "🍪 我们使用 cookie 来个性化广告和分析流量。继续使用我们的网站，即表示您同意 {privacy} 和使用 cookie。",
    accept: "接受",
    decline: "拒绝",
    news: "新闻"
  },
  ko: {
    tagline: "전 세계 속보",
    legal: "법적 고지",
    privacy: "개인정보 처리방침",
    terms: "이용약관",
    cookie: "쿠키 정책",
    contactTitle: "연락처",
    contact: "문의하기",
    copyright: "© 2026 Infyra 뉴스. 모든 권리 보유.",
    cookieText: "🍪 우리는 광고를 개인화하고 트래픽을 분석하기 위해 쿠키를 사용합니다. 사이트를 계속 사용하면 {privacy}과 쿠키 사용에 동의하는 것입니다.",
    accept: "동의",
    decline: "거부",
    news: "뉴스"
  },
  tr: {
    tagline: "Dünyadan son dakika haberleri",
    legal: "Yasal bilgiler",
    privacy: "Gizlilik Politikası",
    terms: "Hizmet Şartları",
    cookie: "Çerez Politikası",
    contactTitle: "İletişim",
    contact: "Bize Ulaşın",
    copyright: "© 2026 Infyra Haberleri. Tüm hakları saklıdır.",
    cookieText: "🍪 Reklamları kişiselleştirmek ve trafiği analiz etmek için çerezler kullanıyoruz. Sitemizi kullanmaya devam ederek, {privacy} ve çerez kullanımını kabul etmiş olursunuz.",
    accept: "Kabul Et",
    decline: "Reddet",
    news: "Haberleri"
  },
  hi: {
    tagline: "दुनिया भर की ताजा खबरें",
    legal: "कानूनी जानकारी",
    privacy: "गोपनीयता नीति",
    terms: "सेवा की शर्तें",
    cookie: "कुकी नीति",
    contactTitle: "संपर्क करें",
    contact: "हमसे संपर्क करें",
    copyright: "© 2026 Infyra समाचार. सर्वाधिकार सुरक्षित।",
    cookieText: "🍪 हम विज्ञापनों को वैयक्तिकृत करने और ट्रैफ़िक का विश्लेषण करने के लिए कुकीज़ का उपयोग करते हैं। हमारी साइट का उपयोग जारी रखकर, आप {privacy} और कुकीज़ के उपयोग से सहमत हैं।",
    accept: "स्वीकार करें",
    decline: "अस्वीकार करें",
    news: "समाचार"
  },
  id: {
    tagline: "Berita terkini dari seluruh dunia",
    legal: "Informasi hukum",
    privacy: "Kebijakan Privasi",
    terms: "Ketentuan Layanan",
    cookie: "Kebijakan Cookie",
    contactTitle: "Kontak",
    contact: "Hubungi Kami",
    copyright: "© 2026 Infyra Berita. Semua hak dilindungi.",
    cookieText: "🍪 Kami menggunakan cookie untuk mempersonalisasi iklan dan menganalisis lalu lintas. Dengan terus menggunakan situs kami, Anda menyetujui {privacy} dan penggunaan cookie.",
    accept: "Terima",
    decline: "Tolak",
    news: "Berita"
  },
  th: {
    tagline: "ข่าวด่วนจากทั่วโลก",
    legal: "ข้อมูลทางกฎหมาย",
    privacy: "นโยบายความเป็นส่วนตัว",
    terms: "ข้อกำหนดในการให้บริการ",
    cookie: "นโยบายคุกกี้",
    contactTitle: "ติดต่อ",
    contact: "ติดต่อเรา",
    copyright: "© 2026 Infyra ข่าว. สงวนลิขสิทธิ์ทั้งหมด",
    cookieText: "🍪 เราใช้คุกกี้เพื่อปรับเปลี่ยนโฆษณาตามความสนใจของคุณและวิเคราะห์การเข้าชม การใช้เว็บไซต์ของเราต่อไปถือว่าคุณยอมรับ {privacy} และการใช้คุกกี้",
    accept: "ยอมรับ",
    decline: "ปฏิเสธ",
    news: "ข่าว"
  },
  vi: {
    tagline: "Tin nóng từ khắp nơi trên thế giới",
    legal: "Thông tin pháp lý",
    privacy: "Chính sách bảo mật",
    terms: "Điều khoản dịch vụ",
    cookie: "Chính sách cookie",
    contactTitle: "Liên hệ",
    contact: "Liên hệ với chúng tôi",
    copyright: "© 2026 Infyra Tin tức. Đã đăng ký bản quyền.",
    cookieText: "🍪 Chúng tôi sử dụng cookie để cá nhân hóa quảng cáo và phân tích lưu lượng truy cập. Bằng cách tiếp tục sử dụng trang web của chúng tôi, bạn đồng ý với {privacy} và việc sử dụng cookie.",
    accept: "Chấp nhận",
    decline: "Từ chối",
    news: "Tin tức"
  },
  bn: {
    tagline: "বিশ্বজুড়ে ব্রেকিং নিউজ",
    legal: "আইনি তথ্য",
    privacy: "গোপনীয়তা নীতি",
    terms: "পরিষেবার শর্তাবলী",
    cookie: "কুকি নীতি",
    contactTitle: "যোগাযোগ",
    contact: "আমাদের সাথে যোগাযোগ করুন",
    copyright: "© 2026 Infyra খবর. সমস্ত অধিকার সংরক্ষিত।",
    cookieText: "🍪 আমরা বিজ্ঞাপন ব্যক্তিগতকৃত করতে এবং ট্রাফিক বিশ্লেষণ করতে কুকি ব্যবহার করি। আমাদের সাইট ব্যবহার চালিয়ে যাওয়ার মাধ্যমে, আপনি {privacy} এবং কুকি ব্যবহারে সম্মত হন।",
    accept: "গ্রহণ করুন",
    decline: "প্রত্যাখ্যান করুন",
    news: "খবর"
  },
  ta: {
    tagline: "உலகம் முழுவதும் பிரேக்கிங் நியூஸ்",
    legal: "சட்ட தகவல்",
    privacy: "தனியுரிமைக் கொள்கை",
    terms: "சேவை விதிமுறைகள்",
    cookie: "குக்கீ கொள்கை",
    contactTitle: "தொடர்பு கொள்ள",
    contact: "எங்களைத் தொடர்பு கொள்ளவும்",
    copyright: "© 2026 Infyra செய்திகள். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    cookieText: "🍪 விளம்பரங்களைத் தனிப்பயனாக்கவும் போக்குவரத்தை பகுப்பாய்வு செய்யவும் குக்கீகளைப் பயன்படுத்துகிறோம். எங்கள் தளத்தைத் தொடர்ந்து பயன்படுத்துவதன் மூலம், {privacy} மற்றும் குக்கீகளின் பயன்பாட்டை நீங்கள் ஏற்கிறீர்கள்.",
    accept: "ஏற்றுக்கொள்",
    decline: "நிராகரி",
    news: "செய்திகள்"
  },
  te: {
    tagline: "ప్రపంచవ్యాప్తంగా బ్రేకింగ్ న్యూస్",
    legal: "చట్టపరమైన సమాచారం",
    privacy: "గోప్యతా విధానం",
    terms: "సేవా నిబంధనలు",
    cookie: "కుకీ విధానం",
    contactTitle: "సంప్రదించండి",
    contact: "మమ్మల్ని సంప్రదించండి",
    copyright: "© 2026 Infyra వార్తలు. అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.",
    cookieText: "🍪 ప్రకటనలను వ్యక్తిగతీకరించడానికి మరియు ట్రాఫిక్ను విశ్లేషించడానికి మేము కుకీలను ఉపయోగిస్తాము. మా సైట్‌ను ఉపయోగించడం కొనసాగించడం ద్వారా, మీరు {privacy} మరియు కుకీల వినియోగానికి అంగీకరిస్తున్నారు.",
    accept: "అంగీకరించు",
    decline: "తిరస్కరించు",
    news: "వార్తలు"
  },
  ms: {
    tagline: "Berita terkini dari seluruh dunia",
    legal: "Maklumat undang-undang",
    privacy: "Dasar Privasi",
    terms: "Terma Perkhidmatan",
    cookie: "Dasar Kuki",
    contactTitle: "Hubungi",
    contact: "Hubungi Kami",
    copyright: "© 2026 Infyra Berita. Hak cipta terpelihara.",
    cookieText: "🍪 Kami menggunakan kuki untuk memperibadikan iklan dan menganalisis trafik. Dengan terus menggunakan laman web kami, anda bersetuju dengan {privacy} dan penggunaan kuki.",
    accept: "Terima",
    decline: "Tolak",
    news: "Berita"
  },
  fil: {
    tagline: "Nagbabagang balita mula sa buong mundo",
    legal: "Legal",
    privacy: "Patakaran sa Privacy",
    terms: "Mga Tuntunin ng Serbisyo",
    cookie: "Patakaran sa Cookie",
    contactTitle: "Makipag-ugnayan",
    contact: "Makipag-ugnayan sa amin",
    copyright: "© 2026 Infyra Balita. Lahat ng karapatan ay nakalaan.",
    cookieText: "🍪 Gumagamit kami ng cookies upang i-personalize ang mga ad at suriin ang trapiko. Sa pamamagitan ng patuloy na paggamit ng aming site, sumasang-ayon ka sa aming {privacy} at paggamit ng cookies.",
    accept: "Tanggapin",
    decline: "Tanggihan",
    news: "Balita"
  },
  my: {
    tagline: "ကမ္ဘာတစ်ဝှမ်းမှ သတင်းများ",
    legal: "ဥပဒေရေးရာအချက်အလက်",
    privacy: "ကိုယ်ရေးအချက်အလက်ဆိုင်ရာမူဝါဒ",
    terms: "ဝန်ဆောင်မှုစည်းမျဉ်းများ",
    cookie: "ကွတ်ကီးမူဝါဒ",
    contactTitle: "ဆက်သွယ်ရန်",
    contact: "ကြှနျုပျတို့ကိုဆကျသှယျရနျ",
    copyright: "© 2026 Infyra သတင်း။ မူပိုင်ခွင့်များအားလုံးကိုလက်ဝယ်ထားရှိသည်။",
    cookieText: "🍪 ကျွန်ုပ်တို့သည် ကြော်ငြာများကို စိတ်ကြိုက်ပြင်ဆင်ရန်နှင့် လမ်းကြောင်းကို ခွဲခြမ်းစိတ်ဖြာရန် ကွတ်ကီးများကို အသုံးပြုပါသည်။ ကျွန်ုပ်တို့၏ဆိုက်ကို ဆက်လက်အသုံးပြုခြင်းဖြင့် သင်သည် {privacy} နှင့် ကွတ်ကီးအသုံးပြုခြင်းကို သဘောတူပါသည်။",
    accept: "လက်ခံသည်။",
    decline: "ငြင်းပယ်သည်။",
    news: "သတင်း"
  },
  km: {
    tagline: "ព័ត៌មានចុងក្រោយពីជុំវិញពិភពលោក",
    legal: "ព័ត៌មានផ្លូវច្បាប់",
    privacy: "គោលការណ៍ឯកជនភាព",
    terms: "លក្ខខណ្ឌនៃការផ្តល់សេវា",
    cookie: "គោលការណ៍ខូគី",
    contactTitle: "ទំនាក់ទំនង",
    contact: "ទាក់ទង​មក​ពួក​យើង",
    copyright: "© 2026 Infyra ព័ត៌មាន។ រក្សា​សិទ្ធិ​គ្រប់​យ៉ាង។",
    cookieText: "🍪 យើងប្រើខូគីដើម្បីកំណត់ផ្ទាល់ខ្លួនការផ្សាយពាណិជ្ជកម្ម និងវិភាគចរាចរណ៍។ ដោយបន្តប្រើប្រាស់គេហទំព័ររបស់យើង អ្នកយល់ព្រមចំពោះ {privacy} និងការប្រើប្រាស់ខូគី។",
    accept: "ទទួលយក",
    decline: "បដិសេធ",
    news: "ព័ត៌មាន"
  },
  lo: {
    tagline: "ຂ່າວດ່ວນຈາກທົ່ວໂລກ",
    legal: "ຂໍ້ມູນທາງກົດໝາຍ",
    privacy: "ນະໂຍບາຍຄວາມເປັນສ່ວນຕົວ",
    terms: "ຂໍ້ກໍານົດການບໍລິການ",
    cookie: "ນະໂຍບາຍຄຸກກີ",
    contactTitle: "ຕິດຕໍ່",
    contact: "ຕິດຕໍ່ພວກເຮົາ",
    copyright: "© 2026 Infyra ຂ່າວ. ສະຫງວນລິຂະສິດທັງໝົດ.",
    cookieText: "🍪 ພວກເຮົາໃຊ້ຄຸກກີເພື່ອປັບແຕ່ງໂຄສະນາ ແລະວິເຄາະການຈະລາຈອນ. ໂດຍການສືບຕໍ່ໃຊ້ເວັບໄຊຂອງພວກເຮົາ, ທ່ານຕົກລົງເຫັນດີກັບ {privacy} ແລະການໃຊ້ຄຸກກີ.",
    accept: "ຍອມຮັບ",
    decline: "ປະຕິເສດ",
    news: "ຂ່າວ"
  },
  ne: {
    tagline: "विश्वभरका ताजा समाचार",
    legal: "कानूनी जानकारी",
    privacy: "गोपनीयता नीति",
    terms: "सेवाका सर्तहरू",
    cookie: "कुकी नीति",
    contactTitle: "सम्पर्क गर्नुहोस्",
    contact: "हामीलाई सम्पर्क गर्नुहोस्",
    copyright: "© 2026 Infyra समाचार। सर्वाधिकार सुरक्षित।",
    cookieText: "🍪 हामी विज्ञापनहरू व्यक्तिगत बनाउन र ट्राफिक विश्लेषण गर्न कुकीहरू प्रयोग गर्छौं। हाम्रो साइट प्रयोग जारी राखेर, तपाईं {privacy} र कुकीहरूको प्रयोगमा सहमत हुनुहुन्छ।",
    accept: "स्वीकार गर्नुहोस्",
    decline: "अस्वीकार गर्नुहोस्",
    news: "समाचार"
  },
  si: {
    tagline: "ලොව පුරා ප්‍රධාන පුවත්",
    legal: "නීතිමය තොරතුරු",
    privacy: "රහස්‍යතා ප්‍රතිපත්තිය",
    terms: "සේවා කොන්දේසි",
    cookie: "කුකී ප්‍රතිපත්තිය",
    contactTitle: "අමතන්න",
    contact: "අප අමතන්න",
    copyright: "© 2026 Infyra පුවත්. සියලුම හිමිකම් ඇවිරිණි.",
    cookieText: "🍪 අපි දැන්වීම් පුද්ගලීකරනය කිරීමට සහ ගමනාගමනය විශ්ලේෂණය කිරීමට කුකීස් භාවිතා කරමු. අපගේ අඩවිය දිගටම භාවිතා කිරීමෙන්, ඔබ {privacy} සහ කුකීස් භාවිතයට එකඟ වේ.",
    accept: "පිළිගන්න",
    decline: "ප්‍රතික්ෂේප කරන්න",
    news: "පුවත්"
  },
  mn: {
    tagline: "Дэлхийн өнцөг булан бүрийн мэдээ",
    legal: "Хуулийн мэдээлэл",
    privacy: "Нууцлалын бодлого",
    terms: "Үйлчилгээний нөхцөл",
    cookie: "Күүки бодлого",
    contactTitle: "Холбоо барих",
    contact: "Бидэнтэй холбогдох",
    copyright: "© 2026 Infyra Мэдээ. Бүх эрх хуулиар хамгаалагдсан.",
    cookieText: "🍪 Бид сурталчилгааг хувийн болгох, траффик дүн шинжилгээ хийхэд күүки ашигладаг. Манай сайтыг үргэлжлүүлэн ашигласнаар та {privacy} болон күүки ашиглахыг зөвшөөрч байна.",
    accept: "Зөвшөөрөх",
    decline: "Татгалзах",
    news: "Мэдээ"
  },
  kk: {
    tagline: "Әлемнің түкпір-түкпірінен соңғы жаңалықтар",
    legal: "Құқықтық ақпарат",
    privacy: "Құпиялылық саясаты",
    terms: "Қызмет көрсету шарттары",
    cookie: "Cookie саясаты",
    contactTitle: "Байланыс",
    contact: "Бізбен хабарласыңыз",
    copyright: "© 2026 Infyra жаңалықтары. Барлық құқықтар қорғалған.",
    cookieText: "🍪 Біз жарнамаларды теңшеу және трафикті талдау үшін cookie файлдарын қолданамыз. Біздің сайтты пайдалануды жалғастыру арқылы сіз {privacy} және cookie файлдарын пайдалануға келісесіз.",
    accept: "Қабылдау",
    decline: "Бас тарту",
    news: "жаңалықтары"
  },
  uz: {
    tagline: "Dunyo bo'ylab so'nggi yangiliklar",
    legal: "Huquqiy ma'lumot",
    privacy: "Maxfiylik siyosati",
    terms: "Xizmat ko'rsatish shartlari",
    cookie: "Cookie siyosati",
    contactTitle: "Bog'lanish",
    contact: "Biz bilan bog'laning",
    copyright: "© 2026 Infyra yangiliklar. Barcha huquqlar himoyalangan.",
    cookieText: "🍪 Reklamalarni shaxsiylashtirish va trafikni tahlil qilish uchun cookie-fayllardan foydalanamiz. Saytimizdan foydalanishni davom ettirish orqali siz {privacy} va cookie-fayllardan foydalanishga rozilik bildirasiz.",
    accept: "Qabul qilish",
    decline: "Rad etish",
    news: "yangiliklar"
  },
  ky: {
    tagline: "Дүйнө жүзүндөгү акыркы кабарлар",
    legal: "Юридикалык маалымат",
    privacy: "Купуялык саясаты",
    terms: "Кызмат көрсөтүү шарттары",
    cookie: "Куки саясаты",
    contactTitle: "Байланыш",
    contact: "Биз менен байланышыңыз",
    copyright: "© 2026 Infyra Жаңылыктар. Бардык укуктар корголгон.",
    cookieText: "🍪 Биз жарнамаларды ыңгайлаштыруу жана трафикти талдоо үчүн кукилерди колдонобуз. Биздин сайтты колдонууну улантуу менен, сиз {privacy} жана кукилерди колдонууга макулдугуңузду билдиресиз.",
    accept: "Кабыл алуу",
    decline: "Баш тартуу",
    news: "Жаңылыктар"
  },
  tk: {
    tagline: "Dünýäniň hemme künjeginden soňky habarlar",
    legal: "Hukuk maglumat",
    privacy: "Gizlinlik syýasaty",
    terms: "Hyzmat şertleri",
    cookie: "Kuki syýasaty",
    contactTitle: "Habarlaşmak",
    contact: "Bize ýüz tutuň",
    copyright: "© 2026 Infyra Habarlary. Ähli hukuklar goragly.",
    cookieText: "🍪 Mahabatnamalary şahsylaşdyrmak we traffigi seljermek üçin kukileri ulanýarys. Saýtym",
    accept: "Kabul et",
    decline: "Ret et",
    news: "Habarlary"
  },
  ps: {
    tagline: "د نړۍ له ګوټ ګوټ څخه تازه خبرونه",
    legal: "قانوني معلومات",
    privacy: "د پټنتيا تګلاره",
    terms: "د خدماتو شرایط",
    cookie: "د کوکي تګلاره",
    contactTitle: "اړیکه",
    contact: "موږ سره اړیکه ونیسئ",
    copyright: "© 2026 Infyra خبرونه. ټول حقونه خوندي دي.",
    cookieText: "🍪 موږ د اعلاناتو د شخصي کولو او د ترافیک د تحلیل لپاره کوکیز کاروو. زموږ د سایټ کارولو ته دوام ورکولو سره، تاسو {privacy} او د کوکیز کارولو سره موافق یاست.",
    accept: "منل",
    decline: "ردول",
    news: "خبرونه"
  },
  fa: {
    tagline: "آخرین اخبار از سراسر جهان",
    legal: "اطلاعات حقوقی",
    privacy: "سیاست حفظ حریم خصوصی",
    terms: "شرایط استفاده از خدمات",
    cookie: "خط مشی کوکی",
    contactTitle: "تماس با ما",
    contact: "با ما تماس بگیرید",
    copyright: "© 2026 Infyra اخبار. تمامی حقوق محفوظ است.",
    cookieText: "🍪 ما از کوکی‌ها برای شخصی‌سازی تبلیغات و تجزیه و تحلیل ترافیک استفاده می‌کنیم. با ادامه استفاده از سایت ما، با {privacy} و استفاده از کوکی‌ها موافقت می‌کنید.",
    accept: "پذیرفتن",
    decline: "رد کردن",
    news: "اخبار"
  },
  ur: {
    tagline: "دنیا بھر سے تازہ ترین خبریں",
    legal: "قانونی معلومات",
    privacy: "رازداری کی پالیسی",
    terms: "خدمات کی شرائط",
    cookie: "کوکی پالیسی۔",
    contactTitle: "رابطہ کریں",
    contact: "ہم سے رابطہ کریں",
    copyright: "© 2026 Infyra خبریں. جملہ حقوق محفوظ ہیں۔",
    cookieText: "🍪 ہم اشتہارات کو ذاتی بنانے اور ٹریفک کا تجزیہ کرنے کے لیے کوکیز استعمال کرتے ہیں۔ ہماری سائٹ کا استعمال جاری رکھ کر، آپ {privacy} اور کوکیز کے استعمال سے اتفاق کرتے ہیں۔",
    accept: "قبول کریں",
    decline: "مسترد کریں",
    news: "خبریں"
  },
  sd: {
    tagline: "دنيا جي ڪنڊ ڪڙڇ کان تازه ترين خبرون",
    legal: "قانوني معلومات",
    privacy: "رازداري جي پاليسي",
    terms: "خدمت جا شرط",
    cookie: "ڪوڪي پاليسي",
    contactTitle: "رابطو",
    contact: "اسان سان رابطو ڪريو",
    copyright: "© 2026 Infyra خبرون. سڀ حق محفوظ آهن.",
    cookieText: "🍪 اسان اشتهارن کي ذاتي ڪرڻ ۽ ٽرئفڪ جو تجزيو ڪرڻ لاءِ ڪوڪيز استعمال ڪريون ٿا. اسان جي سائيٽ استعمال جاري رکڻ سان، توهان {privacy} ۽ ڪوڪيز جي استعمال سان متفق آهيو.",
    accept: "قبول ڪريو",
    decline: "رد ڪريو",
    news: "خبرون"
  },
  ku: {
    tagline: "Nûçeyên dawî ji her derê cîhanê",
    legal: "Agahiyên qanûnî",
    privacy: "Siyaseta taybetiyê",
    terms: "Mercên karûbar",
    cookie: "Siyaseta çerezan",
    contactTitle: "Têkilî",
    contact: "Têkilî bi me re",
    copyright: "© 2026 Infyra Nûçe. Hemû maf parastî ne.",
    cookieText: "🍪 Em çerezan bikar tînin ji bo kesane kirina reklaman û analîzkirina trafîkê. Bi berdewamkirina karanîna malpera me, hûn li ser {privacy} û karanîna çerezan dipejirînin.",
    accept: "Qebûl bike",
    decline: "Red bike",
    news: "Nûçe"
  },
  he: {
    tagline: "חדשות אחרונות מכל העולם",
    legal: "מידע משפטי",
    privacy: "מדיניות פרטיות",
    terms: "תנאי שירות",
    cookie: "מדיניות קובצי Cookie",
    contactTitle: "צור קשר",
    contact: "צור קשר",
    copyright: "© 2026 Infyra חדשות. כל הזכויות שמורות.",
    cookieText: "🍪 אנו משתמשים בקובצי Cookie כדי להתאים אישית מודעות ולנתח תעבורה. על ידי המשך השימוש באתר שלנו, אתה מסכים ל{privacy} ולשימוש בקובצי Cookie.",
    accept: "קבל",
    decline: "דחה",
    news: "חדשות"
  },
  yi: {
    tagline: "ברעקינג נייַעס פון אַרום די וועלט",
    legal: "לעגאַל אינפֿאָרמאַציע",
    privacy: "פּריוואַטקייט פּאָליטיק",
    terms: "טערמינען פון דינסט",
    cookie: "קוקי פּאָליטיק",
    contactTitle: "קאָנטאַקט",
    contact: "קאָנטאַקט אונדז",
    copyright: "© 2026 Infyra נייַעס. אלע רעכטן רעזערווירט.",
    cookieText: "🍪 מיר נוצן קיכלעך צו פערזענליכען אַדס און אַנאַלייז פאַרקער. דורך פאָרזעצן צו נוצן אונדזער פּלאַץ, איר שטימען צו אונדזער {privacy} און נוצן פון קיכלעך.",
    accept: "אַקסעפּט",
    decline: "אָפּלייקענען",
    news: "נייַעס"
  },
  am: {
    tagline: "ከዓለም ዙሪያ የሚደርሱ ዜናዎች",
    legal: "ሕጋዊ",
    privacy: "የግላዊነት ፖሊሲ",
    terms: "የአገልግሎት ውሎች",
    cookie: "የኩኪ ፖሊሲ",
    contactTitle: "አግኙን",
    contact: "አግኙን",
    copyright: "© 2026 Infyra ዜና. መብቱ በሕግ የተጠበቀ ነው።",
    cookieText: "🍪 ማስታወቂያዎችን ለግል ለማበጀት እና ትራፊክን ለመተንተን ኩኪዎችን እንጠቀማለን። ጣቢያችንን መጠቀምዎን በመቀጠል {privacy} እና ኩኪዎችን መጠቀምን ይቀበላሉ።",
    accept: "ተቀበል",
    decline: "እምቢ በል",
    news: "ዜና"
  },
  ti: {
    tagline: "ዜናታት ካብ ምሉእ ዓለም",
    legal: "ሕጋዊ ሓበሬታ",
    privacy: "ስለ ብሕታዊነት ፖሊሲ",
    terms: "ናይ ኣገልግሎት ቃላት",
    cookie: "ናይ ኩኪ ፖሊሲ",
    contactTitle: "ርኸቡና",
    contact: "ተወከሱና",
    copyright: "© 2026 Infyra ዜናታት. ኩሉ መሰላት ተሓልዩ ኣለዉ።",
    cookieText: "🍪 ንምውናን ማስታወቂ ንምንባርን ትራፊክ ንምትንታንን ኩኪታት ንጥቀም ኣለና። ንዌብሳይትና ምጥቃም ብምቕጻል፣ ምስ {privacy}ን ምጥቃም ኩኪታትን ትሰማምዑ ኣለኹም።",
    accept: "ተቐበል",
    decline: "እምቢ በል",
    news: "ዜናታት"
  },
  or: {
    tagline: "ପୃଥିବୀ ସାରା ବ୍ରେକିଂ ନ୍ୟୁଜ୍",
    legal: "ଆଇନଗତ ସୂଚନା",
    privacy: "ଗୋପନୀୟତା ନୀତି",
    terms: "ସେବା ସର୍ତ୍ତାବଳୀ",
    cookie: "କୁକି ନୀତି",
    contactTitle: "ଯୋଗାଯୋଗ କରନ୍ତୁ",
    contact: "ଆମ ସହିତ ଯୋଗାଯୋଗ କରନ୍ତୁ",
    copyright: "© 2026 Infyra ଖବର। ସମସ୍ତ ଅଧିକାର ସଂରକ୍ଷିତ।",
    cookieText: "🍪 ଆମେ ବିଜ୍ଞାପନଗୁଡିକ ବ୍ୟକ୍ତିଗତ କରିବା ଏବଂ ଟ୍ରାଫିକ୍ ବିଶ୍ଳେଷଣ କରିବା ପାଇଁ କୁକି ବ୍ୟବହାର କରୁ। ଆମ ସାଇଟ୍ ବ୍ୟବହାର ଜାରି ରଖିବା ଦ୍ୱାରା, ଆପଣ {privacy} ଏବଂ କୁକି ବ୍ୟବହାରରେ ସହମତ ହୁଅନ୍ତି।",
    accept: "ଗ୍ରହଣ କରନ୍ତୁ",
    decline: "ଅସ୍ୱୀକାର କରନ୍ତୁ",
    news: "ଖବର"
  },
  as: {
    tagline: "বিশ্বৰ বিভিন্ন প্ৰান্তৰ পৰা ব্ৰেকিং নিউজ",
    legal: "আইনী তথ্য",
    privacy: "গোপনীয়তা নীতি",
    terms: "সেৱাৰ চৰ্তাৱলী",
    cookie: "কুকি নীতি",
    contactTitle: "যোগাযোগ কৰক",
    contact: "আমাৰ সৈতে যোগাযোগ কৰক",
    copyright: "© 2026 Infyra বাতৰি। সকলো অধিকাৰ সংৰক্ষিত।",
    cookieText: "🍪 আমি বিজ্ঞাপন ব্যক্তিগতকৰণ আৰু ট্ৰেফিক বিশ্লেষণ কৰিবলৈ কুকি ব্যৱহাৰ কৰো। আমাৰ ছাইট ব্যৱহাৰ কৰি থাকিবলৈ, আপুনি {privacy} আৰু কুকি ব্যৱহাৰত সন্মতি দিয়ে।",
    accept: "গ্ৰহণ কৰক",
    decline: "অস্বীকাৰ কৰক",
    news: "বাতৰি"
  },
  pa: {
    tagline: "ਦੁਨੀਆ ਭਰ ਦੀਆਂ ਤਾਜ਼ਾ ਖ਼ਬਰਾਂ",
    legal: "ਕਾਨੂੰਨੀ ਜਾਣਕਾਰੀ",
    privacy: "ਪਰਦੇਦਾਰੀ ਨੀਤੀ",
    terms: "ਸੇਵਾ ਦੀਆਂ ਸ਼ਰਤਾਂ",
    cookie: "ਕੂਕੀ ਨੀਤੀ",
    contactTitle: "ਸੰਪਰਕ ਕਰੋ",
    contact: "ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ",
    copyright: "© 2026 Infyra ਖਬਰਾਂ. ਸਾਰੇ ਹੱਕ ਰਾਖਵੇਂ ਹਨ।",
    cookieText: "🍪 ਅਸੀਂ ਇਸ਼ਤਿਹਾਰਾਂ ਨੂੰ ਨਿੱਜੀ ਬਣਾਉਣ ਅਤੇ ਟ੍ਰੈਫਿਕ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰਨ ਲਈ ਕੂਕੀਜ਼ ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹਾਂ। ਸਾਡੀ ਸਾਈਟ ਦੀ ਵਰਤੋਂ ਜਾਰੀ ਰੱਖ ਕੇ, ਤੁਸੀਂ {privacy} ਅਤੇ ਕੂਕੀਜ਼ ਦੀ ਵਰਤੋਂ ਲਈ ਸਹਿਮਤ ਹੁੰਦੇ ਹੋ।",
    accept: "ਸਵੀਕਾਰ ਕਰੋ",
    decline: "ਅਸਵੀਕਾਰ ਕਰੋ",
    news: "ਖਬਰਾਂ"
  },
  gu: {
    tagline: "વિશ્વભરના બ્રેકિંગ ન્યૂઝ",
    legal: "કાનૂની માહિતી",
    privacy: "ગોપનીયતા નીતિ",
    terms: "સેવાની શરતો",
    cookie: "કૂકી નીતિ",
    contactTitle: "સંપર્ક કરો",
    contact: "અમારો સંપર્ક કરો",
    copyright: "© 2026 Infyra સમાચાર. બધા અધિકારો અનામત છે.",
    cookieText: "🍪 અમે જાહેરાતોને વ્યક્તિગત કરવા અને ટ્રાફિકનું વિશ્લેષણ કરવા કૂકીઝનો ઉપયોગ કરીએ છીએ. અમારી સાઇટનો ઉપયોગ ચાલુ રાખીને, તમે {privacy} અને કૂકીઝના ઉપયોગ માટે સંમત થાઓ છો.",
    accept: "સ્વીકારો",
    decline: "નકારો",
    news: "સમાચાર"
  },
  mr: {
    tagline: "जगभरातील ब्रेकिंग न्यूज",
    legal: "कायदेशीर माहिती",
    privacy: "गोपनीयता धोरण",
    terms: "सेवेच्या अटी",
    cookie: "कुकी धोरण",
    contactTitle: "संपर्क साधा",
    contact: "आमच्याशी संपर्क साधा",
    copyright: "© 2026 Infyra बातम्या. सर्व हक्क राखीव.",
    cookieText: "🍪 आम्ही जाहिराती वैयक्तिकृत करण्यासाठी आणि रहदारीचे विश्लेषण करण्यासाठी कुकीज वापरतो. आमची साइट वापरणे सुरू ठेवून, आपण {privacy} आणि कुकीजच्या वापरास सहमती देता.",
    accept: "स्वीकार करा",
    decline: "नकार द्या",
    news: "बातम्या"
  },
  kn: {
    tagline: "ವಿಶ್ವದಾದ್ಯಂತದ ಬ್ರೇಕಿಂಗ್ ನ್ಯೂಸ್",
    legal: "ಕಾನೂನು ಮಾಹಿತಿ",
    privacy: "ಗೌಪ್ಯತಾ ನೀತಿ",
    terms: "ಸೇವೆಯ ನಿಯಮಗಳು",
    cookie: "ಕುಕೀ ನೀತಿ",
    contactTitle: "ಸಂಪರ್ಕಿಸಿ",
    contact: "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ",
    copyright: "© 2026 Infyra ಸುದ್ದಿ. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
    cookieText: "🍪 ಜಾಹೀರಾತುಗಳನ್ನು ವೈಯಕ್ತೀಕರಿಸಲು ಮತ್ತು ಟ್ರಾಫಿಕ್ ಅನ್ನು ವಿಶ್ಲೇಷಿಸಲು ನಾವು ಕುಕೀಗಳನ್ನು ಬಳಸುತ್ತೇವೆ. ನಮ್ಮ ಸೈಟ್ ಅನ್ನು ಬಳಸುವುದನ್ನು ಮುಂದುವರಿಸುವ ಮೂಲಕ, ನೀವು {privacy} ಮತ್ತು ಕುಕೀಗಳ ಬಳಕೆಗೆ ಒಪ್ಪುತ್ತೀರಿ.",
    accept: "ಸ್ವೀಕರಿಸಿ",
    decline: "ನಿರಾಕರಿಸಿ",
    news: "ಸುದ್ದಿ"
  },
  ml: {
    tagline: "ലോകമെമ്പാടുമുള്ള വാർത്തകൾ",
    legal: "നിയമ വിവരങ്ങൾ",
    privacy: "സ്വകാര്യതാ നയം",
    terms: "സേവന നിബന്ധനകൾ",
    cookie: "കുക്കി നയം",
    contactTitle: "ബന്ധപ്പെടുക",
    contact: "ഞങ്ങളെ ബന്ധപ്പെടുക",
    copyright: "© 2026 Infyra വാർത്തകൾ. എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം.",
    cookieText: "🍪 പരസ്യങ്ങൾ വ്യക്തിഗതമാക്കുന്നതിനും ട്രാഫിക് വിശകലനം ചെയ്യുന്നതിനും ഞങ്ങൾ കുക്കികൾ ഉപയോഗിക്കുന്നു. ഞങ്ങളുടെ സൈറ്റ് ഉപയോഗിക്കുന്നത് തുടരുന്നതിലൂടെ, {privacy} യും കുക്കികളുടെ ഉപയോഗവും നിങ്ങൾ അംഗീകരിക്കുന്നു.",
    accept: "സ്വീകരിക്കുക",
    decline: "നിരസിക്കുക",
    news: "വാർത്തകൾ"
  },
  sw: {
    tagline: "Habari za hivi punde kutoka duniani kote",
    legal: "Taarifa za kisheria",
    privacy: "Sera ya faragha",
    terms: "Masharti ya huduma",
    cookie: "Sera ya vidakuzi",
    contactTitle: "Wasiliana nasi",
    contact: "Wasiliana nasi",
    copyright: "© 2026 Infyra Habari. Haki zote zimehifadhiwa.",
    cookieText: "🍪 Tunatumia vidakuzi kubinafsisha matangazo na kuchambua trafiki. Kwa kuendelea kutumia tovuti yetu, unakubali {privacy} na matumizi ya vidakuzi.",
    accept: "Kubali",
    decline: "Kataa",
    news: "Habari"
  },
  ha: {
    tagline: "Labarai masu zuwa daga ko'ina cikin duniya",
    legal: "Bayanin doka",
    privacy: "Manufofin sirri",
    terms: "Sharuɗɗan sabis",
    cookie: "Manufar kuki",
    contactTitle: "Tuntube mu",
    contact: "Tuntube mu",
    copyright: "© 2026 Infyra Labarai. Duk haƙƙoƙi sun kiyaye.",
    cookieText: "🍪 Muna amfani da kuki don keɓance tallace-tallace da nazarin zirga-zirga. Ta ci gaba da amfani da rukunin yanar gizon mu, kun yarda da {privacy} da amfani da kuki.",
    accept: "Karɓa",
    decline: "Ki",
    news: "Labarai"
  },
  ig: {
    tagline: "Akụkọ na-eme ugbu a site na gburugburu ụwa",
    legal: "Ozi gbasara iwu",
    privacy: "Amụma nzuzo",
    terms: "Usoro ọrụ",
    cookie: "Amụma kuki",
    contactTitle: "Kpọtụrụ anyị",
    contact: "Kpọtụrụ anyị",
    copyright: "© 2026 Infyra Akụkọ. Ikike niile echekwabara.",
    cookieText: "🍪 Anyị na-eji kuki mee ka mgbasa ozi nwee onwe yana nyochaa okporo ụzọ. Ịga n'ihu iji saịtị anyị, ị kwenyere na {privacy} na ojiji kuki.",
    accept: "Nabata",
    decline: "Jụ",
    news: "Akụkọ"
  },
  yo: {
    tagline: "Awọn iroyin didaṣẹ lati kakiri agbaye",
    legal: "Alaye ofin",
    privacy: "Eto imeto",
    terms: "Awọn ofin iṣẹ",
    cookie: "Eto kuki",
    contactTitle: "Kansi wa",
    contact: "Kan si wa",
    copyright: "© 2026 Infyra Àwọn ìròyìn. Gbogbo ẹtọ wa ni ipamọ.",
    cookieText: "🍪 A lo awọn kuki lati ṣe adani awọn ipolowo ati itupalẹ ijabọ. Nipa tẹsiwaju lati lo aaye wa, o gba {privacy} ati lilo awọn kuki.",
    accept: "Gba",
    decline: "Kọ",
    news: "Àwọn ìròyìn"
  },
  zu: {
    tagline: "Izindaba ezishaya izwe lonke",
    legal: "Ulwazi lwezomthetho",
    privacy: "Inqubomgomo yobumfihlo",
    terms: "Imithetho yesevisi",
    cookie: "Inqubomgomo yekhukhi",
    contactTitle: "Xhumana nathi",
    contact: "Xhumana nathi",
    copyright: "© 2026 Infyra Izindaba. Wonke amalungelo agodliwe.",
    cookieText: "🍪 Sisebenzisa amakhukhi ukwenza ngokwezifiso izikhangiso nokuhlaziya ithrafikhi. Ngokuqhubeka nokusebenzisa isayithi lethu, uyavuma {privacy} nokusetshenziswa kwamakhukhi.",
    accept: "Yamukela",
    decline: "Nqaba",
    news: "Izindaba"
  },
  xh: {
    tagline: "Iindaba zexeshana ezivela ehlabathini lonke",
    legal: "Ulwazi lwezomthetho",
    privacy: "Umgaqo-nkqubo wabucala",
    terms: "Imigaqo yenkonzo",
    cookie: "Umgaqo-nkqubo wecookie",
    contactTitle: "Qhagamshelana nathi",
    contact: "Qhagamshelana nathi",
    copyright: "© 2026 Infyra Iindaba. Onke amalungelo agciniwe.",
    cookieText: "🍪 Sisebenzisa iicookies ukwenza ngokwezifiso iintengiso kunye nokuhlalutya itrafikhi. Ngokuqhubeka nokusebenzisa isayithi yethu, uyavuma {privacy} kunye nokusetyenziswa kweekuki.",
    accept: "Yamkela",
    decline: "Ala",
    news: "Iindaba"
  },
  st: {
    tagline: "Ditaba tse monate ho tloha lefatsheng lohle",
    legal: "Tlhahisoleseding ya molao",
    privacy: "Leano la lekunutu",
    terms: "Dipehelo tsa ts'ebeletso",
    cookie: "Leano la di-cookie",
    contactTitle: "Iteketisano",
    contact: "Iteketisano le rona",
    copyright: "© 2026 Infyra Ditaba. Ditokelo tsohle di bolokilwe.",
    cookieText: "🍪 Re sebelisa di-cookie ho iketsahatsa lipapatso le ho hlahloba sephethephethe. Ka ho tsoela pele ho sebelisa sebaka sa rona, o dumela {privacy} le ts'ebeliso ea di-cookie.",
    accept: "Amohela",
    decline: "Hana",
    news: "Ditaba"
  },
  tn: {
    tagline: "Dikgang tsa mo nakong tse tswang lefatsheng lotlhe",
    legal: "Tshedimosetso ya molao",
    privacy: "Pholisi ya sephiri",
    terms: "Dipeelo tsa tirelo",
    cookie: "Pholisi ya cookie",
    contactTitle: "Ikgolaganye le rona",
    contact: "Ikgolaganye le rona",
    copyright: "© 2026 Infyra Dikgang. Ditshwanelo tsotlhe di sireleditswe.",
    cookieText: "🍪 Re dirisa dikookie go iketleetsa dipapatso le go sekaseka traffike. Ka go tswelela go dirisa site ya rona, o dumelana le {privacy} le tiriso ya dikookie.",
    accept: "Amogela",
    decline: "Gana",
    news: "Dikgang"
  },
  ss: {
    tagline: "Tindzaba letintfu letivela emhlabeni wonke",
    legal: "Lwati lwemtsetfo",
    privacy: "Inqubomgomo yemfihlo",
    terms: "Imigomo yensha",
    cookie: "Inqubomgomo yekhukhi",
    contactTitle: "Thintana natsi",
    contact: "Thintana natsi",
    copyright: "© 2026 Infyra Tindzaba. Wonke amalungelo agodliwe.",
    cookieText: "🍪 Sisetshentisa emakhukhi kwenta kwenteka lokukhangisa nekuhlwaya traffic. Ngekuqhubeka kusebentisa indzawo yetfu, uyavumelana {privacy} nekusetjentiswa kwemakhukhi.",
    accept: "Yemukela",
    decline: "Enca",
    news: "Tindzaba"
  },
  ve: {
    tagline: "Nyambo dzi bva hoxe fhethu ho thenga",
    legal: "Mafhungo a mulayo",
    privacy: "Pholisi ya zwa siphiris",
    terms: "Mileri ya tshumelo",
    cookie: "Pholisi ya cookie",
    contactTitle: "Vhudzisani",
    contact: "Vhudzisani",
    copyright: "© 2026 Infyra Nyambo. Pfanelo dzothe dzi khou tsireledzwa.",
    cookieText: "🍪 Ri shumisa cookie u itela u dzudzanya zwiambaro na u sengulusa traffic. Musi ri tshi bvela phanda na u shumisa hei saiti, ni tendelana na {privacy} na u shumisa cookie.",
    accept: "Tendelani",
    decline: "Hanani",
    news: "Nyambo"
  },
  ts: {
    tagline: "Tihungu lett letinga kunene emisaveni hinkwayo",
    legal: "Vuxokoxoko bya nawu",
    privacy: "Pholisi ya le hansi",
    terms: "Swilaveko swa vukorhokeri",
    cookie: "Pholisi ya cookie",
    contactTitle: "Tihlanganisa na hina",
    contact: "Tihlanganisa na hina",
    copyright: "© 2026 Infyra Tihungu. Timfanelo hinkwato ti siriwile.",
    cookieText: "🍪 Hi tirhisa cookie ku endla tipapatso ti va ta wena na ku xopaxopa traffic. Loko u ya emahlweni u tirhisa sayiti ya hina, wa pfumela {privacy} na ku tirhisiwa ka cookie.",
    accept: "Pfumela",
    decline: "Ala",
    news: "Tihungu"
  },
  rn: {
    tagline: "Amakuru y'ingenzi ava kw'isi yose",
    legal: "Amakuru y'amategeko",
    privacy: "Politiki y'ibanga",
    terms: "Amateka y'igikorwa",
    cookie: "Politiki ya cookie",
    contactTitle: "Twandikire",
    contact: "Twandikire",
    copyright: "© 2026 Infyra Amakuru. Uburenganzira bwose bwubatswe.",
    cookieText: "🍪 Dukoresha cookie kugira ngo duhurize amatangazo no gusesengura traffic. Mukomeza gukoresha urubuga rwacu, wemera {privacy} no gukoresha cookie.",
    accept: "Emera",
    decline: "Hakana",
    news: "Amakuru"
  },
  rw: {
    tagline: "Amakuru y'ingenzi ava ku isi yose",
    legal: "Amakuru y'amategeko",
    privacy: "Politiki y'ibanga",
    terms: "Amategeko y'ibikorwa",
    cookie: "Politiki ya cookie",
    contactTitle: "Twandikire",
    contact: "Twandikire",
    copyright: "© 2026 Infyra Amakuru. Uburenganzira bwose bwubatswe.",
    cookieText: "🍪 Dukoresha cookie kugira ngo duhurize amatangazo no gusesengura traffic. Mukomeza gukoresha urubuga rwacu, wemera {privacy} no gukoresha cookie.",
    accept: "Emera",
    decline: "Hakana",
    news: "Amakuru"
  },
  lg: {
    tagline: "Amawulire amakulu okuva mu nsi yonna",
    legal: "Ebifa ku mateeka",
    privacy: "Enkola y'obukyama",
    terms: "Empisa z'okukozesa",
    cookie: "Enkola ya cookie",
    contactTitle: "Tukwasiganye",
    contact: "Tukwasiganye",
    copyright: "© 2026 Infyra Amawulire. Eddiringanwa lyonna likuumibwa.",
    cookieText: "🍪 Tukozesa cookie okutegeka katale n'okukebera traffic. Okweyongera okukozesa omukutu gwaffe, okkiriza {privacy} n'okukozesa cookie.",
    accept: "Kkiriza",
    decline: "Gaana",
    news: "Amawulire"
  },
  ny: {
    tagline: "Nkhani zazikulu zochokera padziko lonse lapansi",
    legal: "Zambiri zalamulo",
    privacy: "Mfundo zachinsinsi",
    terms: "Malamulo a chitetezo",
    cookie: "Mfundo ya cookie",
    contactTitle: "Tumizani",
    contact: "Tumizani",
    copyright: "© 2026 Infyra Nkhani. Ufulu wonse ndi wotetezedwa.",
    cookieText: "🍪 Timagwiritsa ntchito makuki kusintha zotsatsa ndikuwunikira kuchuluka kwa anthu. Popitiriza kugwiritsa ntchito tsamba lathu, mukuvomereza {privacy} ndi kugwiritsa ntchito makuki.",
    accept: "Landirani",
    decline: "Kana",
    news: "Nkhani"
  },
  mg: {
    tagline: "Vaovao farany maneran-tany",
    legal: "Fampahalalana ara-dalàna",
    privacy: "Politika momba ny fiainana manokana",
    terms: "Fepetra momba ny serivisy",
    cookie: "Politika momba ny cookie",
    contactTitle: "Mifandraisa",
    contact: "Mifandraisa",
    copyright: "© 2026 Infyra Vaovao. Zo rehetra voatokana.",
    cookieText: "🍪 Mampiasa cookie izahay mba hampifanaraka ny dokam-barotra sy handinihana ny fifamoivoizana. Amin'ny fanohizana ny fampiasana ny tranokalanay, dia manaiky ny {privacy} sy ny fampiasana cookie ianao.",
    accept: "Ekena",
    decline: "Mandà",
    news: "Vaovao"
  },
  om: {
    tagline: "Oduu darbii kan addunyaa maraa",
    legal: "Odeeffannoo seeraa",
    privacy: "Imaammata dhoksaa",
    terms: "Akaakuu tajaajilaa",
    cookie: "Imaammata kookii",
    contactTitle: "Nuti quunnamaa",
    contact: "Nuti quunnamaa",
    copyright: "© 2026 Infyra Oduu. Mirga hunduu eebbifama.",
    cookieText: "🍪 Nuti kookiidhaan beeksisa dhuunfaa fi trafiikiin xiinxaluuf. Itti fufuun fayyadamaa, ati {privacy} fi fayyadama kookiitiin walii galta.",
    accept: "Fuduraa",
    decline: "Didduu",
    news: "Oduu"
  },
  so: {
    tagline: "Wararka ugu dambeeyay ee ka imanaya adduunka oo dhan",
    legal: "Macluumaad sharci",
    privacy: "Siyaasadda asturnaanta",
    terms: "Shuruudaha adeega",
    cookie: "Siyaasadda cookie",
    contactTitle: "Nala soo xidhiidh",
    contact: "Nala soo xidhiidh",
    copyright: "© 2026 Infyra Wararka. Dhamaan xuquuqaha way xifdiyeen.",
    cookieText: "🍪 Waxaan u isticmaalnaa cookies si aan u shakhsiyayno xayeysiisyada iyo falanqaynta taraafikada. Adoo sii wadista isticmaalka goobtayada, waxaad ogolaatay {privacy} iyo isticmaalka cookies.",
    accept: "Aqbal",
    decline: "Diid",
    news: "Wararka"
  },
  sn: {
    tagline: "Nhau dzinobva kumativi ose enyika",
    legal: "Ruzivo rwemutemo",
    privacy: "Mutemo wekuvanzika",
    terms: "Mitemo yebasa",
    cookie: "Mutemo wecookie",
    contactTitle: "Tibate",
    contact: "Tibate",
    copyright: "© 2026 Infyra Nhau. Kodzero dzose dzakachengetedzwa.",
    cookieText: "🍪 Tinoshandisa makuki kugadzirisa kushambadzira uye kuongorora traffic. Nekuenderera mberi kushandisa saiti yedu, unobvuma {privacy} uye kushandiswa kwemakuki.",
    accept: "Gamuchira",
    decline: "Ramba",
    news: "Nhau"
  },
  wo: {
    tagline: "Xibaar yi ci àdduna bi",
    legal: "Xibaar yu ñoom",
    privacy: "Jëfandikukat yi",
    terms: "Àtte yi",
    cookie: "Jëfandikukat yi",
    contactTitle: "Takk",
    contact: "Takk",
    copyright: "© 2026 Infyra Xibaar. Benn rek sañ-sañ.",
    cookieText: "🍪 Daanay jëfandikoo cookies ngir wërsëg reklam yi ak xëccuma ay trafik. Ci di ci jëli jëfandikoo sayti, nga ànd na {privacy} ak jëfandikoom cookies.",
    accept: "Nangu",
    decline: "Bàyyi",
    news: "Xibaar"
  },
  ff: {
    tagline: "Kabaruuji kesi duniyaaru ndin fof",
    legal: "Kabaruuji dow sari'a",
    privacy: "Siyasa sirlu",
    terms: "Sarɗiiji kuugal",
    cookie: "Siyasa kuuki",
    contactTitle: "Jokkondir e amen",
    contact: "Jokkondir e amen",
    copyright: "© 2026 Infyra Kabaruuji. Hakkeeji fof danndinaa.",
    cookieText: "🍪 Men kuuki ngam waɗde jaɓɓorgo e ɓamtude yolnde. Ɗoɗɗude kuutoragol lowre amen, a jaɓi {privacy} e kuutoragol kuuki.",
    accept: "Jaɓɓugo",
    decline: "Salta",
    news: "Kabaruuji"
  },
  dy: {
    tagline: "གསར་འགྱུར་བཤད་སྤྱོད་འཛམ་གླིང་ཡོངས་ནས།",
    legal: "ཁྲིམས་ལུགས་ཀྱི་གནས་ཚུལ།",
    privacy: "སྒེར་གྱི་གསང་བའི་སྲིད་བྱུས།",
    terms: "ཞབས་ཞུའི་ཆ་རྐྱེན།",
    cookie: "ཀུ་ཀིའི་སྲིད་བྱུས།",
    contactTitle: "འབྲེལ་གཏུགས།",
    contact: "ང་ཚོ་དང་འབྲེལ་གཏུགས།",
    copyright: "© 2026 Infyra གསར་འགྱུར།. ཐོབ་ཐང་ཚང་མ་བདག་དབང་ཅན་དུ་བཟུང་ཡོད།",
    cookieText: "🍪 ང་ཚོས་ཀུ་ཀི་བེད་སྤྱོད་བྱས་ནས་གསར་འགྱུར་སྤེལ་བ་དང་འགྲུལ་བཞུད་དབྱེ་ཞིབ་བྱེད། ང་ཚོའི་ས་ཚིགས་བེད་སྤྱོད་མུ་མཐུད་བྱས་ན། ཁྱེད་ཀྱིས་ང་ཚོའི་{privacy} དང་ཀུ་ཀི་བེད་སྤྱོད་ལ་མོས་མཐུན་བྱེད་ཀི།",
    accept: "མོས་མཐུན།",
    decline: "མོས་མཐུན་མིན།",
    news: "གསར་འགྱུར།"
  },
  bm: {
    tagline: "Kibaru kura duniya kɔnɔ",
    legal: "Ladilikan fanga la",
    privacy: "Siriya ladilikan",
    terms: "Baara dilan",
    cookie: "Cookie ladilikan",
    contactTitle: "Ngwanafo",
    contact: "Ngwanafo",
    copyright: "© 2026 Infyra Kibaru. Jus dantuguw bɛɛ maralen don.",
    cookieText: "🍪 An bɛ cookie don ka lakana dilan ni trafiki jateminɛ. Ka kɛ a fɛ an ka siti waleya la, i bɛ sɔn {privacy} ni cookie waleya la.",
    accept: "Sɔn",
    decline: "Bali",
    news: "Kibaru"
  },
  be: {
    tagline: "Навіны з усяго свету",
    legal: "Прававая інфармацыя",
    privacy: "Палітыка прыватнасці",
    terms: "Умовы карыстання",
    cookie: "Палітыка ў дачыненні да cookie",
    contactTitle: "Кантакты",
    contact: "Звяжыцеся з намі",
    copyright: "© 2026 Infyra Навіны. Усе правы абаронены.",
    cookieText: "🍪 Мы выкарыстоўваем cookie для персаналізацыі рэкламы і аналізу трафіку. Працягваючы выкарыстоўваць наш сайт, вы згаджаецеся з {privacy} і выкарыстаннем cookie.",
    accept: "Прыняць",
    decline: "Адхіліць",
    news: "Навіны"
  },
  uk: {
    tagline: "Головні новини з усього світу",
    legal: "Правова інформація",
    privacy: "Політика конфіденційності",
    terms: "Умови використання",
    cookie: "Політика щодо файлів cookie",
    contactTitle: "Контакти",
    contact: "Зв'яжіться з нами",
    copyright: "© 2026 Infyra Новини. Усі права захищено.",
    cookieText: "🍪 Ми використовуємо cookie для персоналізації реклами та аналізу трафіку. Продовжуючи використовувати наш сайт, ви погоджуєтесь з {privacy} та використанням cookie.",
    accept: "Прийняти",
    decline: "Відхилити",
    news: "Новини"
  },
  el: {
    tagline: "Τελευταίες ειδήσεις από όλο τον κόσμο",
    legal: "Νομικές πληροφορίες",
    privacy: "Πολιτική απορρήτου",
    terms: "Όροι χρήσης",
    cookie: "Πολιτική για τα cookies",
    contactTitle: "Επικοινωνία",
    contact: "Επικοινωνήστε μαζί μας",
    copyright: "© 2026 Infyra Ειδήσεις. Με επιφύλαξη παντός δικαιώματος.",
    cookieText: "🍪 Χρησιμοποιούμε cookies για να εξατομικεύσουμε διαφημίσεις και να αναλύσουμε την επισκεψιμότητα. Συνεχίζοντας να χρησιμοποιείτε τον ιστότοπό μας, συμφωνείτε με {privacy} και τη χρήση cookies.",
    accept: "Αποδοχή",
    decline: "Απόρριψη",
    news: "Ειδήσεις"
  },
  la: {
    tagline: "Nuntii novissimi ex toto orbe terrarum",
    legal: "Informationes legales",
    privacy: "Politica secreta",
    terms: "Conditiones usus",
    cookie: "Politica de crustulis",
    contactTitle: "Contactus",
    contact: "Contactus nos",
    copyright: "© 2026 Infyra Nuntii. Omnia iura reservata.",
    cookieText: "🍪 Utimur crustulis ad personalizandas advertisement et analysandos commeatus. Pergendo uti nostro situ, consentis {privacy} et usui crustularum.",
    accept: "Accipe",
    decline: "Recusa",
    news: "Nuntii"
  },
  eo: {
    tagline: "Lastatempaj novaĵoj el la tuta mondo",
    legal: "Juraj informoj",
    privacy: "Politiko pri privateco",
    terms: "Kondiĉoj de servo",
    cookie: "Politiko pri kuketoj",
    contactTitle: "Kontakto",
    contact: "Kontaktu nin",
    copyright: "© 2026 Infyra Novaĵoj. Ĉiuj rajtoj rezervitaj.",
    cookieText: "🍪 Ni uzas kuketojn por personigi reklamojn kaj analizi trafikon. Daŭrigante uzi nian retejon, vi konsentas al {privacy} kaj uzo de kuketoj.",
    accept: "Akcepti",
    decline: "Malakcepti",
    news: "Novaĵoj"
  },
  ia: {
    tagline: "Ultime notitias del mundo integre",
    legal: "Information legal",
    privacy: "Politica de confidentialitate",
    terms: "Terminos de servicio",
    cookie: "Politica de cookies",
    contactTitle: "Contacto",
    contact: "Contacta nos",
    copyright: "© 2026 Infyra Notitias. Omne derectos reservate.",
    cookieText: "🍪 Nos usa cookies pro personalisar le advertisements e analysar le traffico. Continuante usar nostre sito, tu accepta {privacy} e le uso de cookies.",
    accept: "Acceptar",
    decline: "Refusar",
    news: "Notitias"
  },
  co: {
    tagline: "Ultime nutizie da u mondu sanu",
    legal: "Infurmazione legale",
    privacy: "Pulitica di cunfidenzialità",
    terms: "Cundizioni di serviziu",
    cookie: "Pulitica di i cookie",
    contactTitle: "Cuntattu",
    contact: "Cuntattateci",
    copyright: "© 2026 Infyra Nutizie. Tutti i diritti riservati.",
    cookieText: "🍪 Adupremu i cookie per persunalizà l'annunzii è analizà u trafficu. Cuntinuendu à aduprà u nostru situ, accettate {privacy} è l'usu di i cookie.",
    accept: "Accettà",
    decline: "Rifiutà",
    news: "Nutizie"
  },
  gd: {
    tagline: "Naidheachdan bho air feadh an t-saoghail",
    legal: "Fiosrachadh laghail",
    privacy: "Poileasaidh Dìomhaireachd",
    terms: "Cumhaichean Seirbheis",
    cookie: "Poileasaidh bhriosgaidean",
    contactTitle: "Cuir fios thugainn",
    contact: "Cuir fios thugainn",
    copyright: "© 2026 Infyra Naidheachdan. Gach còir glèidhte.",
    cookieText: "🍪 Bidh sinn a' cleachdadh bhriosgaidean gus sanasan a phearsanachadh agus trafaic a sgrùdadh. Le bhith a' leantainn air adhart a' cleachdadh ar làraich, tha thu ag aontachadh ri {privacy} agus cleachdadh bhriosgaidean.",
    accept: "Gabh ris",
    decline: "Diùlt",
    news: "Naidheachdan"
  }
};

/* ===== КАТЕГОРИИ (полные переводы) ===== */
const CATEGORIES = {
  top: {
    en: "TOP", ru: "ГЛАВНОЕ", et: "PEAMINE", de: "TOP", fr: "ACTU",
    es: "PRINCIPAL", pt: "PRINCIPAL", it: "PRINCIPALE", nl: "HOOFD",
    sv: "TOPP", pl: "GŁÓWNA", cs: "HLAVNÍ", ro: "PRINCIPAL", hu: "FŐOLDAL",
    bg: "ГЛАВНА", sr: "ГЛАВНА", hr: "GLAVNA", sk: "HLAVNÁ", sl: "GLAVNA",
    da: "TOPPEN", fi: "PÄÄSIVU", no: "TOPP", is: "FRETSÍÐA", lt: "PAGRINDINIS",
    lv: "GALVENĀ", ga: "PRÍOMH", mt: "EWLENIN", cy: "PRIF", eu: "NAGUSIA",
    ca: "PRINCIPAL", gl: "PRINCIPAL", sq: "KRYESOR", mk: "ГЛАВНА",
    bs: "GLAVNA", me: "GLAVNA", ka: "მთავარი", hy: "ԳԼԽԱՎՈՐ", az: "ƏSAS",
    ar: "الرئيسية", ja: "トップ", zh: "首页", ko: "메인", tr: "ANA",
    hi: "मुख्य", id: "UTAMA", th: "หน้าหลัก", vi: "TRANG CHỦ", bn: "প্রধান",
    ta: "முதன்மை", te: "ప్రధాన", ms: "UTAMA", fil: "PANGUNAHIN", my: "ပင်မ",
    km: "ပင်မ", lo: "ຫນ້າຫລັກ", ne: "मुख्य", si: "ප්රධාන", mn: "ҮНДСЭН",
    kk: "БАСТЫ", uz: "ASOSIY", ky: "НЕГИЗГИ", tk: "BAŞ", ps: "اصلي",
    fa: "اصلی", ur: "مرکزی", sd: "مرڪزي", ku: "SERETAY", he: "ראשי",
    yi: "הויפּט", am: "ዋና", ti: "ርእሲ", or: "ମୁଖ୍ୟ", as: "মুখ্য",
    pa: "ਮੁੱਖ", gu: "મુખ્ય", mr: "मुख्य", kn: "ಮುಖ್ಯ", ml: "പ്രധാന",
    sw: "KUUNGU", ha: "BABBA", ig: "ISII", yo: "AKOKO", zu: "OKUQALA",
    xh: "EYONA IPHAMBILE", st: "HOLIM'OHLE", tn: "KGOLWANE", ss: "LIKHULU",
    ve: "KHULWANE", ts: "LEHONO", rn: "IBANZA", rw: "IMBERE", lg: "OKUSOOKA",
    ny: "YOYAMBA", mg: "FOTOTRA", om: "GURRAACHA", so: "SAREEYA", sn: "HURU",
    wo: "JËKK", ff: "AADE", dy: "LIPALE", bm: "JAMANU", be: "ГАЛОЎНАЯ",
    uk: "ГОЛОВНА", el: "ΚΥΡΙΑ", la: "PRIMA", eo: "ĈEFA", ia: "PRINCIPAL",
    co: "PRINCIPALE", gd: "PRÌOMH"
  },
  politics: {
    en: "POLITICS", ru: "ПОЛИТИКА", et: "POLIITIKA", de: "POLITIK", fr: "POLITIQUE",
    es: "POLÍTICA", pt: "POLÍTICA", it: "POLITICA", nl: "POLITIEK",
    sv: "POLITIK", pl: "POLITYKA", cs: "POLITIKA", ro: "POLITICĂ", hu: "POLITIKA",
    bg: "ПОЛИТИКА", sr: "ПОЛИТИКА", hr: "POLITIKA", sk: "POLITIKA", sl: "POLITIKA",
    da: "POLITIK", fi: "POLITIIKKA", no: "POLITIKK", is: "STJÓRNMÁL", lt: "POLITIKA",
    lv: "POLITIKA", ga: "POLAITÍOCHT", mt: "POLITIKA", cy: "GWLEIDYDDIAETH", eu: "POLITIKA",
    ca: "POLÍTICA", gl: "POLÍTICA", sq: "POLITIKË", mk: "ПОЛИТИКА",
    bs: "POLITIKA", me: "POLITIKA", ka: "პოლიტიკა", hy: "ՔԱՂԱՔԱԿԱՆՈՒԹՅՈՒՆ", az: "SİYASƏT",
    ar: "السياسة", ja: "政治", zh: "政治", ko: "정치", tr: "SİYASET",
    hi: "राजनीति", id: "POLITIK", th: "การเมือง", vi: "CHÍNH TRỊ", bn: "রাজনীতি",
    ta: "அரசியல்", te: "రాజకీయాలు", ms: "POLITIK", fil: "PULITIKA", my: "နိုင်ငံရေး",
    km: "នយោបាយ", lo: "ການເມືອງ", ne: "राजनीति", si: "රාජ්යතාන්ත්රික", mn: "УЛС ТӨР",
    kk: "САЯСАТ", uz: "SIYOSAT", ky: "САЯСАТ", tk: "SÝASAT", ps: "سياسي",
    fa: "سیاست", ur: "سیاست", sd: "سياست", ku: "SÎYASET", he: "פוליטיקה",
    yi: "פּאָליטיק", am: "ፖለቲካ", ti: "ፖለቲካ", or: "ରାଜନୀତି", as: "ৰাজনীতি",
    pa: "ਰਾਜਨੀਤੀ", gu: "રાજકારણ", mr: "राजकारण", kn: "ರಾಜಕೀಯ", ml: "രാഷ്ട്രീയം",
    sw: "SIASA", ha: "SIYASA", ig: "NDỊ", yo: "ỌLỌBA", zu: "EZOMDLALISO",
    xh: "IMICIMBI", st: "BOIPUISETSO", tn: "DIPHATLHALATSO", ss: "LIPHALABALASI",
    ve: "MBIKIZANO", ts: "VUTSHILA", rn: "IMICANGO", rw: "IMICANGO", lg: "BY'ENSI",
    ny: "NDALE", mg: "POLITIKA", om: "SIYAASA", so: "SIYAASAD", sn: "ZVEZVEMAMISANGANO",
    wo: "POLITIK", ff: "SIYAASA", dy: "SIYAASA", bm: "POLITIKI", be: "ПАЛІТЫКА",
    uk: "ПОЛІТИКА", el: "ΠΟΛΙΤΙΚΗ", la: "POLITICA", eo: "POLITIKO", ia: "POLITICA",
    co: "POLITICA", gd: "POILEATAICS"
  },
  world: {
    en: "WORLD", ru: "МИР", et: "MAAILM", de: "WELT", fr: "MONDE",
    es: "MUNDO", pt: "MUNDO", it: "MONDO", nl: "WERELD",
    sv: "VÄRLD", pl: "ŚWIAT", cs: "SVĚT", ro: "LUME", hu: "VILÁG",
    bg: "СВЯТ", sr: "СВЕТ", hr: "SVIJET", sk: "SVET", sl: "SVET",
    da: "VERDEN", fi: "MAAILMA", no: "VERDEN", is: "HEIMUR", lt: "PASAULIS",
    lv: "PASAULE", ga: "DOMHAN", mt: "DINJA", cy: "BYD", eu: "MUNDUA",
    ca: "MÓN", gl: "MUNDO", sq: "BOTË", mk: "СВЕТ",
    bs: "SVIJET", me: "SVIJET", ka: "მსოფლიო", hy: "ԱՇԽԱՐՀ", az: "DÜNYA",
    ar: "العالم", ja: "世界", zh: "世界", ko: "세계", tr: "DÜNYA",
    hi: "विश्व", id: "DUNIA", th: "โลก", vi: "THẾ GIỚI", bn: "বিশ্ব",
    ta: "உலகம்", te: "ప్రపంచం", ms: "DUNIA", fil: "DAIGDIG", my: "ကမ္ဘာလုံး",
    km: "ពិភពលោក", lo: "ໂລກ", ne: "संसार", si: "ලෝකය", mn: "ДЭЛХИЙ",
    kk: "ӘЛЕМ", uz: "DUNYO", ky: "ДҮЙНӨ", tk: "DÜNÝÄ", ps: "نړۍ",
    fa: "جهان", ur: "دنیا", sd: "دنيا", ku: "CÎHAN", he: "עולם",
    yi: "וועלט", am: "ዓለም", ti: "ዓለም", or: "ବିଶ୍ୱ", as: "বিশ্ব",
    pa: "ਸੰਸਾਰ", gu: "વિશ્વ", mr: "जग", kn: "ವಿಶ್ವ", ml: "ലോകം",
    sw: "DUNIA", ha: "DUNIYA", ig: "ỤWA", yo: "AYÉ", zu: "UMHLABA",
    xh: "IHLABATHI", st: "LEFATŠE", tn: "LEFATSHE", ss: "LIVE",
    ve: "SHANGA", ts: "MISAVA", rn: "ISI", rw: "ISI", lg: "ENSI",
    ny: "DZIKO", mg: "TANY", om: "ADU", so: "ADDUUN", sn: "NYIKA",
    wo: "ÀDDUNA", ff: "ADU", dy: "DUNIYA", bm: "DUNIYA", be: "СВЕТ",
    uk: "СВІТ", el: "ΚΟΣΜΟΣ", la: "MUNDUS", eo: "MONDO", ia: "MUNDO",
    co: "MONDU", gd: "SAOGHAL"
  },
  technology: {
    en: "TECHNOLOGY", ru: "ТЕХНОЛОГИИ", et: "TEHNOLOOGIA", de: "TECHNOLOGIE", fr: "TECHNOLOGIE",
    es: "TECNOLOGÍA", pt: "TECNOLOGIA", it: "TECNOLOGIA", nl: "TECHNOLOGIE",
    sv: "TEKNOLOGI", pl: "TECHNOLOGIA", cs: "TECHNOLOGIE", ro: "TECHNOLOGIE", hu: "TECHNOLÓGIA",
    bg: "ТЕХНОЛОГИИ", sr: "ТЕХНОЛОГИЈА", hr: "TEHNOLOGIJA", sk: "TECHNOLÓGIA", sl: "TEHNOLOGIJA",
    da: "TEKNOLOGI", fi: "TEKNOLOGIA", no: "TEKNOLOGI", is: "TÆKNI", lt: "TECHNOLOGIJA",
    lv: "TEHNOLOĢIJA", ga: "TEICNEOLAÍOCHT", mt: "TEKNOLOĠIJA", cy: "TECHNOLEG", eu: "TEKNOLOGIA",
    ca: "TECNOLOGIA", gl: "TECNOLOXÍA", sq: "TEKNOLOGJI", mk: "ТЕХНОЛОГИЈА",
    bs: "TEHNOLOGIJA", me: "TEHNOLOGIJA", ka: "ტექნოლოგია", hy: "ՏԵԽՆՈԼՈԳԻԱ", az: "TEXNOLOGİYA",
    ar: "التكنولوجيا", ja: "テクノロジー", zh: "科技", ko: "기술", tr: "TEKNOLOJİ",
    hi: "प्रौद्योगिकी", id: "TEKNOLOGI", th: "เทคโนโลยี", vi: "CÔNG NGHỆ", bn: "প্রযুক্তি",
    ta: "தொழில்நுட்பம்", te: "టెక్నాలజీ", ms: "TEKNOLOGI", fil: "TEKNOLOHIYA", my: "နည်းပညာ",
    km: "បច្ចេកវិទ្យា", lo: "ເຕັກໂນໂລຊີ", ne: "प्रविधि", si: "තාක්ෂණය", mn: "ТЕХНОЛОГИ",
    kk: "ТЕХНОЛОГИЯ", uz: "TEXNOLOGIYA", ky: "ТЕХНОЛОГИЯ", tk: "TEHNOLOGIÝA", ps: "تکنالوژي",
    fa: "فناوری", ur: "ٹیکنالوجی", sd: "ٽيڪنالاجي", ku: "TEKNOLOJÎ", he: "טכנולוגיה",
    yi: "טעכנאָלאָגיע", am: "ቴክኖሎጂ", ti: "ቴክኖሎጂ", or: "ପ୍ରଯୁକ୍ତିବିଦ୍ୟା", as: "প্ৰযুক্তি",
    pa: "ਟੈਕਨੋਲੋਜੀ", gu: "ટેકનોલોજી", mr: "तंत्रज्ञान", kn: "ತಂತ್ರಜ್ಞಾನ", ml: "സാങ്കേതികവിദ്യ",
    sw: "TEKNOLOJIA", ha: "FASHA", ig: "NKÀ", yo: "ẸRỌ", zu: "UBUCHWEPHESHE",
    xh: "UBUGCA", st: "TS'EBETSO", tn: "BOTLHALE", ss: "LUTJINTJA",
    ve: "TSHIKHUDO", ts: "VUTSURI", rn: "UBUMENYI", rw: "UBUMENYI", lg: "BY'ENJIGA",
    ny: "CHITSANZO", mg: "TEKNOLOJIA", om: "TECHNOLOGII", so: "TIKNOLOJII", sn: "TECHNOLOGY",
    wo: "TEKNOLOGI", ff: "TECHNOLOGII", dy: "TECHNOLOGIE", bm: "TEKNOLOGI", be: "ТЭХНАЛОГІІ",
    uk: "ТЕХНОЛОГІЇ", el: "ΤΕΧΝΟΛΟΓΙΑ", la: "TECHNOLOGIA", eo: "TEKNOLOGIO", ia: "TECHNOLOGIA",
    co: "TECNULUGIA", gd: "TEICNEOLAS"
  },
  sports: {
    en: "SPORTS", ru: "СПОРТ", et: "SPORT", de: "SPORT", fr: "SPORTS",
    es: "DEPORTES", pt: "ESPORTES", it: "SPORT", nl: "SPORT",
    sv: "SPORT", pl: "SPORT", cs: "SPORT", ro: "SPORT", hu: "SPORT",
    bg: "СПОРТ", sr: "СПОРТ", hr: "SPORT", sk: "ŠPORT", sl: "ŠPORT",
    da: "SPORT", fi: "URHEILU", no: "SPORT", is: "ÍÞRÓTTIR", lt: "SPORTAS",
    lv: "SPORTS", ga: "SPÓRT", mt: "SPORT", cy: "CHWARAEON", eu: "KIROLAK",
    ca: "ESPORT", gl: "DEPORTE", sq: "SPORT", mk: "СПОРТ",
    bs: "SPORT", me: "SPORT", ka: "სპორტი", hy: "ՍՊՈՐՏ", az: "İDMAN",
    ar: "الرياضة", ja: "スポーツ", zh: "体育", ko: "스포츠", tr: "SPOR",
    hi: "खेल", id: "OLAHRAGA", th: "กีฬา", vi: "THỂ THAO", bn: "খেলাধুলা",
    ta: "விளையாட்டு", te: "క్రీడలు", ms: "SUKAN", fil: "ISPORTS", my: "အားကစား",
    km: "កីឡា", lo: "ກິລາ", ne: "खेलकुद", si: "ක්රීඩා", mn: "СПОРТ",
    kk: "СПОРТ", uz: "SPORT", ky: "СПОРТ", tk: "SPORT", ps: "سپورت",
    fa: "ورزش", ur: "کھیل", sd: "راندين", ku: "SPORT", he: "ספורט",
    yi: "ספּאָרט", am: "ስፖርት", ti: "ስፖርት", or: "କ୍ରୀଡ଼ା", as: "ক্ৰীড়া",
    pa: "ਖੇਡਾਂ", gu: "ખેલ", mr: "क्रीडा", kn: "ಕ್ರೀಡೆ", ml: "കായികം",
    sw: "MICHEZO", ha: "WASA", ig: "EGWUREGỤ", yo: "ERE", zu: "IMIDLALO",
    xh: "IMIDLALO", st: "LITLHABOLOLO", tn: "METLHA", ss: "LITLHABOLOLO",
    ve: "MHANDI", ts: "MAKHWETHO", rn: "IMIKINO", rw: "IMIKINO", lg: "EMIZANNO",
    ny: "MAPHUNZIRO", mg: "FANAZARANA", om: "SPORTII", so: "CIYAARAH", sn: "MITAMBO",
    wo: "SPORT", ff: "SPORT", dy: "SPORT", bm: "DALILU", be: "СПОРТ",
    uk: "СПОРТ", el: "ΑΘΛΗΤΙΣΜΟΣ", la: "LUDUS", eo: "SPORTO", ia: "SPORT",
    co: "SPORTU", gd: "SPÒRS"
  },
  business: {
    en: "BUSINESS", ru: "БИЗНЕС", et: "ÄRI", de: "WIRTSCHAFT", fr: "AFFAIRES",
    es: "NEGOCIOS", pt: "NEGÓCIOS", it: "AFFARI", nl: "ZAKEN",
    sv: "FÖRETAG", pl: "BIZNES", cs: "BYZNYS", ro: "AFACERI", hu: "ÜZLET",
    bg: "БИЗНЕС", sr: "ПОСЛОВАЊЕ", hr: "POSLOVANJE", sk: "PODNIKANIE", sl: "POSLOVANJE",
    da: "FORRETNING", fi: "LIKE-ELÄMÄ", no: "NÆRINGSLIV", is: "VIÐSKIPTI", lt: "VERSLAS",
    lv: "BIZNESS", ga: "GNÓ", mt: "NEGOZJU", cy: "BUSNES", eu: "NEGOZIOAK",
    ca: "NEGOCIS", gl: "NEGOCIOS", sq: "BIZNES", mk: "БИЗНИС",
    bs: "BIZNIS", me: "BIZNIS", ka: "ბიზნესი", hy: "ԲԻԶՆԵՍ", az: "BİZNES",
    ar: "الأعمال", ja: "ビジネス", zh: "商业", ko: "비즈니스", tr: "İŞ",
    hi: "व्यवसाय", id: "BISNIS", th: "ธุรกิจ", vi: "KINH DOANH", bn: "ব্যবসা",
    ta: "வணிகம்", te: "வியாபாரம்", ms: "PERNIAGAAN", fil: "NEGOSYO", my: "စီးပွားရေး",
    km: "ពាណិជ្ជកម្ម", lo: "ທຸລະກິດ", ne: "व्यवसाय", si: "ව්යාපාර", mn: "БИЗНЕС",
    kk: "БИЗНЕС", uz: "BIZNES", ky: "БИЗНЕС", tk: "BİZNES", ps: "سوداګري",
    fa: "کسب و کار", ur: "کاروبار", sd: "کاروبار", ku: "KAR", he: "עסקים",
    yi: "געשעפט", am: "ንግድ", ti: "ንግዲ", or: "ବ୍ୟବସାୟ", as: "ব্যৱসায়",
    pa: "ਕਾਰੋਬਾਰ", gu: "વ્યવસાય", mr: "व्यवसाय", kn: "ವ್ಯವಹಾರ", ml: "വ്യവസായം",
    sw: "BIASHARA", ha: "KASUWANCI", ig: "AZỤMAHIA", yo: "IṢẸ", zu: "IBHIZINISI",
    xh: "ISHISHINI", st: "KGWEBO", tn: "KGWEBO", ss: "LICUCO",
    ve: "MBAILA", ts: "NTSHAMO", rn: "UBUCURUZI", rw: "UBUCURUZI", lg: "BY'OBUZIMBI",
    ny: "MALO", mg: "RAHARAHANA", om: "DALDALA", so: "GANACSIGA", sn: "BHIZIMUSI",
    wo: "XAYMA", ff: "GASHA", dy: "BUSINESS", bm: "JARABA", be: "БІЗНЭС",
    uk: "БІЗНЕС", el: "ΕΜΠΟΡΙΟ", la: "NEGOTIUM", eo: "NEGOCAĴO", ia: "AFFARIOS",
    co: "AFFARI", gd: "GNÌOMHACHAS"
  },
  entertainment: {
    en: "ENTERTAINMENT", ru: "РАЗВЛЕЧЕНИЯ", et: "MEELELAHUTUS", de: "UNTERHALTUNG", fr: "DIVERTISSEMENT",
    es: "ENTRETENIMIENTO", pt: "ENTRETENIMENTO", it: "INTRATTENIMENTO", nl: "VERMAAK",
    sv: "UNDERHÅLLNING", pl: "ROZRYWKA", cs: "ZÁBAVA", ro: "DISTRACTIE", hu: "SZÓRAKOZTATÁS",
    bg: "РАЗВЛЕЧЕНИЕ", sr: "ЗАБАВА", hr: "ZABAVA", sk: "ZÁBAVA", sl: "ZABAVA",
    da: "UNDERHOLDNING", fi: "VIIHDE", no: "UNDERHOLDNING", is: "UNGRIPI", lt: "POILSIS",
    lv: "IZKLAIDE", ga: "SÚMAIRE", mt: "DIVERTIMENT", cy: "DIDDORDEB", eu: "ENTRETENIMENDUA",
    ca: "ENTRETENIMENT", gl: "ENTRETENEMENTO", sq: "ARGËTIM", mk: "ЗАБАВА",
    bs: "ZABAVA", me: "ZABAVA", ka: "გართობა", hy: "ԶԻՆՎԱՆՉՈՒԹՅՈՒՆ", az: "ƏYLANCƏ",
    ar: "الترفيه", ja: "エンターテインメント", zh: "娱乐", ko: "엔터테인먼트", tr: "EĞLENCE",
    hi: "मनोरंजन", id: "HIBURAN", th: "บันเทิง", vi: "GIẢI TRÍ", bn: "বিনোদন",
    ta: "பொழுதுபோக்கு", te: "వినోదం", ms: "HIBURAN", fil: "LIBANGAN", my: "ဖျော်ဖြေရေး",
    km: "កម្សាន្ត", lo: "ການບັນເທີງ", ne: "मनोरञ्जन", si: "විනෝදාත්මක", mn: "ЗОГСООЛ",
    kk: "ОЙЫН-САУЫК", uz: "O-YIN", ky: "ОЮН-ЭРК", tk: "EÝLENÇ", ps: "تفريحي",
    fa: "سرگرمی", ur: "تفریح", sd: "تفريح", ku: "BÊHNEFER", he: "בידור",
    yi: "אונטערהאַלטונג", am: "መዝናኛ", ti: "መዘናጋጅ", or: "ବିନୋଦନ", as: "বিনোদন",
    pa: "ਮਨੋਰੰਜਨ", gu: "મનોરંજન", mr: "मनोरंजन", kn: "ಮನರಂಜನೆ", ml: "വിനോദം",
    sw: "BURUDANI", ha: "NISHA", ig: "NTỤRỤ", yo: "ÌDÁRAYÁ", zu: "OKUNETHIWE",
    xh: "UKUZONWABISA", st: "BOITHABISO", tn: "BOTLHABISO", ss: "LIHLOHLELO",
    ve: "MAKHADZO", ts: "VUTIHA", rn: "UMUKINO", rw: "UMUKINO", lg: "OKUSANYUSA",
    ny: "CHISANGALALO", mg: "FIALAMBOLY", om: "QOQOOBSI", so: "MADADAALO", sn: "KUVARAIDZA",
    wo: "XALAT", ff: "FIJIIRDE", dy: "ENTERTAINMENT", bm: "JARABI", be: "ЗАБАВЫ",
    uk: "РОЗВАГИ", el: "ΨΥΧΑΓΩΓΙΑ", la: "OBLECTAMENTUM", eo: "AMUZO", ia: "DIVERTIMENTO",
    co: "DIVERTIMENTU", gd: "CUR-SAOR"
  },
  health: {
    en: "HEALTH", ru: "ЗДОРОВЬЕ", et: "TERVIS", de: "GESUNDHEIT", fr: "SANTÉ",
    es: "SALUD", pt: "SAÚDE", it: "SALUTE", nl: "GEZONDHEID",
    sv: "HÄLSA", pl: "ZDROWIE", cs: "ZDRAVÍ", ro: "SĂNĂTATE", hu: "EGÉSZSÉG",
    bg: "ЗДРАВЕ", sr: "ЗДРАВЉЕ", hr: "ZDRAVLJE", sk: "ZDRAVIE", sl: "ZDRAVJE",
    da: "SUNDHED", fi: "TERVEYS", no: "HELSE", is: "HEILSA", lt: "SVEIKATA",
    lv: "VESELĪBA", ga: "SLÁINTE", mt: "SAĦĦA", cy: "IECHYD", eu: "OSASUNA",
    ca: "SALUT", gl: "SAÚDE", sq: "SHËNDET", mk: "ЗДРАВЈЕ",
    bs: "ZDRAVLJE", me: "ZDRAVLJE", ka: "ჯანმრთელობა", hy: "ԱՌՈՂՋՈՒԹՅՈՒՆ", az: "SİĞORTA",
    ar: "الصحة", ja: "健康", zh: "健康", ko: "건강", tr: "SAĞLIK",
    hi: "स्वास्थ्य", id: "KESEHATAN", th: "สุขภาพ", vi: "SỨC KHỎE", bn: "স্বাস্থ্য",
    ta: "சுகாதாரம்", te: "ఆరోగ్యం", ms: "KESIHATAN", fil: "KALUSUGAN", my: "ကျန်းမာရေး",
    km: "សុខភាព", lo: "ສຸຂະພາບ", ne: "स्वास्थ्य", si: "සෞඛ්ය", mn: "ЭРҮҮЛ МЭНД",
    kk: "ДЕНСАУЛЫҚ", uz: "SALOMATLIK", ky: "ДЕН СООЛУК", tk: "SAGLYK", ps: "روغتیا",
    fa: "سلامتی", ur: "صحت", sd: "صحت", ku: "TENDURISTÎ", he: "בריאות",
    yi: "געזונט", am: "ጤና", ti: "ጥዕና", or: "ସ୍ୱାସ୍ଥ୍ୟ", as: "স্বাস্থ্য",
    pa: "ਸਿਹਤ", gu: "સ્વાસ્થ્ય", mr: "आरोग्य", kn: "ಆರೋಗ್ಯ", ml: "ആരോഗ്യം",
    sw: "AFYA", ha: "LAFIYA", ig: "AHỤ", yo: "ILERA", zu: "IMPILO",
    xh: "IMPILO", st: "BOPHELO", tn: "BOPHELO", ss: "LIPHILISO",
    ve: "MAKHUVHO", ts: "RITO", rn: "UBUZIMA", rw: "UBUZIMA", lg: "OBULAMU",
    ny: "THANDIZO", mg: "FANAFODY", om: "FAYA", so: "CAFO", sn: "HUTANO",
    wo: "SAÑ-SAÑ", ff: "LAFIA", dy: "SANTÉ", bm: "LAMINYANA", be: "ЗДАРОЎЕ",
    uk: "ЗДОРОВ'Я", el: "ΥΓΕΙΑ", la: "SALUS", eo: "SANECO", ia: "SANITATE",
    co: "SALUTE", gd: "SLÀINTE"
  },
  science: {
    en: "SCIENCE", ru: "НАУКА", et: "TEADUS", de: "WISSENSCHAFT", fr: "SCIENCE",
    es: "CIENCIA", pt: "CIÊNCIA", it: "SCIENZA", nl: "WETENSCHAP",
    sv: "VETENSKAP", pl: "NAUKA", cs: "VĚDA", ro: "ȘTIINȚĂ", hu: "TUDOMÁNY",
    bg: "НАУКА", sr: "НАУКА", hr: "ZNANOST", sk: "VEDA", sl: "ZNANOST",
    da: "VIDENSKAB", fi: "TIEDE", no: "VITENSKAP", is: "VÍSIND", lt: "MOKSLAS",
    lv: "ZINĀTNE", ga: "EOLAÍOCHT", mt: "XJENZA", cy: "GWYDONIAETH", eu: "ZIENTZIA",
    ca: "CIÈNCIA", gl: "CIENCIA", sq: "SHKENCA", mk: "НАУКА",
    bs: "NAUKA", me: "NAUKA", ka: "მეცნიერება", hy: "ԳԻՏՈՒԹՅՈՒՆ", az: "ELM",
    ar: "العلم", ja: "科学", zh: "科学", ko: "과학", tr: "BİLİM",
    hi: "विज्ञान", id: "ILMU", th: "วิทยาศาสตร์", vi: "KHOA HỌC", bn: "বিজ্ঞান",
    ta: "அறிவியல்", te: "విజ్ఞానం", ms: "SAINS", fil: "SIYENSYA", my: "သိပ္ပံ",
    km: "វិទ្យាសាស្ត្រ", lo: "ວິທະຍາສາດ", ne: "विज्ञान", si: "විද්යාව", mn: "ШИНЖЛЭХ УХААН",
    kk: "ҒЫЛЫМ", uz: "FAN", ky: "ИЛИМ", tk: "YLIM", ps: "ساینس",
    fa: "علم", ur: "سائنس", sd: "سائنس", ku: "ZANIST", he: "מדע",
    yi: "וויסנשאַפֿט", am: "ሳይንስ", ti: "ሳይንስ", or: "ବିଜ୍ଞାନ", as: "বিজ্ঞান",
    pa: "ਵਿਗਿਆਨ", gu: "વિજ્ઞાન", mr: "विज्ञान", kn: "ವಿಜ್ಞಾನ", ml: "ശാസ്ത്രം",
    sw: "SAYANSI", ha: "KIMIYYA", ig: "SAYENS", yo: "IMỌ", zu: "ISAYENSI",
    xh: "INZULULWAZI", st: "SAENSE", tn: "SAENSE", ss: "LITSEBISO",
    ve: "TSHIKOLONI", ts: "NTIVISO", rn: "UBUMENYI", rw: "UBUMENYI", lg: "SSAAYANSI",
    ny: "MAWU", mg: "SIANSA", om: "SAYINSSII", so: "CILMIGA", sn: "SAYANZI",
    wo: "XAM-XAM", ff: "SAYANSA", dy: "SCIENCE", bm: "DONKILI", be: "НАВУКА",
    uk: "НАУКА", el: "ΕΠΙΣΤΗΜΗ", la: "SCIENTIA", eo: "SCIENCO", ia: "SCIENTIA",
    co: "SCENZA", gd: "SAOCHAS"
  }
};

/* ===== ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ===== */
let lang = 'en';

window.LANGUAGES = LANGUAGES;
window.UI_TRANSLATIONS = UI_TRANSLATIONS;
window.FOOTER_TRANSLATIONS = FOOTER_TRANSLATIONS;
window.CATEGORIES = CATEGORIES;

/* ===== РАСШИРЕННАЯ ФУНКЦИЯ ПОЛУЧЕНИЯ ЯЗЫКА БРАУЗЕРА (С РЕГИОНАЛЬНЫМИ ВАРИАНТАМИ) ===== */
function getBrowserLanguage() {
  const userLang = navigator.language || navigator.userLanguage;
  const fullLang = userLang.toLowerCase();
  const langCode = userLang.slice(0, 2).toLowerCase();
  
  // ===== ПОЛНЫЙ МАППИНГ ДЛЯ ВСЕХ РЕГИОНАЛЬНЫХ ВАРИАНТОВ =====
  const languageMap = {
    // Норвежский
    'nb': 'no', 'nn': 'no', 'nb-no': 'no', 'nn-no': 'no', 'no-no': 'no',
    // Китайский
    'zh-cn': 'zh', 'zh-tw': 'zh', 'zh-hk': 'zh', 'zh-sg': 'zh', 'zh-mo': 'zh',
    'zh-chs': 'zh', 'zh-cht': 'zh', 'zh-cmn': 'zh', 'zh-wuu': 'zh', 'zh-yue': 'zh',
    // Португальский
    'pt-br': 'pt', 'pt-pt': 'pt', 'pt-ao': 'pt', 'pt-mz': 'pt', 'pt-cv': 'pt',
    // Испанский
    'es-es': 'es', 'es-mx': 'es', 'es-ar': 'es', 'es-co': 'es', 'es-pe': 'es',
    'es-ve': 'es', 'es-cl': 'es', 'es-ec': 'es', 'es-gt': 'es', 'es-cu': 'es',
    'es-bo': 'es', 'es-do': 'es', 'es-hn': 'es', 'es-py': 'es', 'es-sv': 'es',
    'es-ni': 'es', 'es-cr': 'es', 'es-pa': 'es', 'es-pr': 'es', 'es-uy': 'es',
    // Английский
    'en-us': 'en', 'en-gb': 'en', 'en-au': 'en', 'en-ca': 'en', 'en-nz': 'en',
    'en-za': 'en', 'en-in': 'en', 'en-ie': 'en', 'en-sg': 'en', 'en-ph': 'en',
    // Французский
    'fr-fr': 'fr', 'fr-ca': 'fr', 'fr-be': 'fr', 'fr-ch': 'fr', 'fr-lu': 'fr',
    'fr-mc': 'fr', 'fr-ci': 'fr', 'fr-ml': 'fr', 'fr-sn': 'fr',
    // Немецкий
    'de-de': 'de', 'de-at': 'de', 'de-ch': 'de', 'de-li': 'de', 'de-lu': 'de',
    // Арабский
    'ar-sa': 'ar', 'ar-eg': 'ar', 'ar-iq': 'ar', 'ar-ly': 'ar', 'ar-ma': 'ar',
    'ar-sd': 'ar', 'ar-sy': 'ar', 'ar-tn': 'ar', 'ar-ye': 'ar', 'ar-ae': 'ar',
    'ar-kw': 'ar', 'ar-qa': 'ar', 'ar-bh': 'ar', 'ar-om': 'ar', 'ar-jo': 'ar',
    'ar-lb': 'ar', 'ar-ps': 'ar', 'ar-dz': 'ar',
    // Хинди
    'hi-in': 'hi', 'hi-latn': 'hi',
    // Японский
    'ja-jp': 'ja', 'ja-jp-jp': 'ja',
    // Корейский
    'ko-kr': 'ko', 'ko-kp': 'ko',
    // Турецкий
    'tr-tr': 'tr', 'tr-cy': 'tr',
    // Голландский
    'nl-nl': 'nl', 'nl-be': 'nl', 'nl-sr': 'nl', 'nl-cw': 'nl',
    // Шведский
    'sv-se': 'sv', 'sv-fi': 'sv',
    // Датский
    'da-dk': 'da', 'da-gl': 'da',
    // Финский
    'fi-fi': 'fi',
    // Польский
    'pl-pl': 'pl',
    // Чешский
    'cs-cz': 'cs',
    // Словацкий
    'sk-sk': 'sk',
    // Венгерский
    'hu-hu': 'hu',
    // Румынский
    'ro-ro': 'ro', 'ro-md': 'ro',
    // Болгарский
    'bg-bg': 'bg',
    // Сербский
    'sr-rs': 'sr', 'sr-me': 'sr', 'sr-latn': 'sr', 'sr-cyrl': 'sr',
    // Хорватский
    'hr-hr': 'hr', 'hr-ba': 'hr',
    // Словенский
    'sl-si': 'sl',
    // Эстонский
    'et-ee': 'et',
    // Латышский
    'lv-lv': 'lv',
    // Литовский
    'lt-lt': 'lt',
    // Исландский
    'is-is': 'is',
    // Ирландский
    'ga-ie': 'ga',
    // Мальтийский
    'mt-mt': 'mt',
    // Валлийский
    'cy-gb': 'cy',
    // Баскский
    'eu-es': 'eu',
    // Каталанский
    'ca-es': 'ca', 'ca-ad': 'ca', 'ca-fr': 'ca', 'ca-it': 'ca',
    // Галисийский
    'gl-es': 'gl',
    // Албанский
    'sq-al': 'sq', 'sq-mk': 'sq', 'sq-xk': 'sq',
    // Македонский
    'mk-mk': 'mk',
    // Боснийский
    'bs-ba': 'bs', 'bs-latn': 'bs', 'bs-cyrl': 'bs',
    // Черногорский
    'me-me': 'me',
    // Грузинский
    'ka-ge': 'ka',
    // Армянский
    'hy-am': 'hy',
    // Азербайджанский
    'az-az': 'az', 'az-latn': 'az', 'az-cyrl': 'az',
    // Индонезийский
    'id-id': 'id',
    // Тайский
    'th-th': 'th',
    // Вьетнамский
    'vi-vn': 'vi',
    // Бенгальский
    'bn-bd': 'bn', 'bn-in': 'bn',
    // Тамильский
    'ta-in': 'ta', 'ta-lk': 'ta', 'ta-my': 'ta', 'ta-sg': 'ta',
    // Телугу
    'te-in': 'te',
    // Малайский
    'ms-my': 'ms', 'ms-bn': 'ms', 'ms-sg': 'ms',
    // Филиппинский
    'fil-ph': 'fil', 'tl': 'fil', 'tl-ph': 'fil',
    // Бирманский
    'my-mm': 'my',
    // Кхмерский
    'km-kh': 'km',
    // Лаосский
    'lo-la': 'lo',
    // Непальский
    'ne-np': 'ne', 'ne-in': 'ne',
    // Сингальский
    'si-lk': 'si',
    // Монгольский
    'mn-mn': 'mn', 'mn-cyrl': 'mn', 'mn-mong': 'mn',
    // Казахский
    'kk-kz': 'kk', 'kk-cyrl': 'kk', 'kk-latn': 'kk',
    // Узбекский
    'uz-uz': 'uz', 'uz-latn': 'uz', 'uz-cyrl': 'uz', 'uz-af': 'uz',
    // Кыргызский
    'ky-kg': 'ky', 'ky-cyrl': 'ky', 'ky-latn': 'ky',
    // Туркменский
    'tk-tm': 'tk', 'tk-latn': 'tk', 'tk-cyrl': 'tk',
    // Пушту
    'ps-af': 'ps', 'ps-pk': 'ps',
    // Персидский
    'fa-ir': 'fa', 'fa-af': 'fa', 'fa-tj': 'fa',
    // Урду
    'ur-pk': 'ur', 'ur-in': 'ur',
    // Синдхи
    'sd-pk': 'sd', 'sd-in': 'sd', 'sd-deva': 'sd', 'sd-arab': 'sd',
    // Курдский
    'ku-iq': 'ku', 'ku-ir': 'ku', 'ku-tr': 'ku', 'ku-sy': 'ku', 'ku-latn': 'ku',
    'ku-cyrl': 'ku', 'ku-arab': 'ku',
    // Иврит
    'he-il': 'he',
    // Идиш
    'yi': 'yi', 'yi-us': 'yi', 'yi-il': 'yi',
    // Амхарский
    'am-et': 'am',
    // Тигринья
    'ti-er': 'ti', 'ti-et': 'ti',
    // Ория
    'or-in': 'or',
    // Ассамский
    'as-in': 'as',
    // Панджаби
    'pa-in': 'pa', 'pa-pk': 'pa', 'pa-guru': 'pa', 'pa-arab': 'pa',
    // Гуджарати
    'gu-in': 'gu',
    // Маратхи
    'mr-in': 'mr',
    // Каннада
    'kn-in': 'kn',
    // Малаялам
    'ml-in': 'ml',
    // Суахили
    'sw-tz': 'sw', 'sw-ke': 'sw', 'sw-ug': 'sw', 'sw-cd': 'sw',
    // Хауса
    'ha-ng': 'ha', 'ha-gh': 'ha', 'ha-ne': 'ha', 'ha-latn': 'ha',
    // Игбо
    'ig-ng': 'ig',
    // Йоруба
    'yo-ng': 'yo', 'yo-bj': 'yo',
    // Зулу
    'zu-za': 'zu',
    // Коса
    'xh-za': 'xh',
    // Сесото
    'st-ls': 'st', 'st-za': 'st',
    // Тсвана
    'tn-bw': 'tn', 'tn-za': 'tn',
    // Свати
    'ss-sz': 'ss', 'ss-za': 'ss',
    // Венда
    've-za': 've',
    // Тсонга
    'ts-za': 'ts', 'ts-mz': 'ts', 'ts-zw': 'ts',
    // Рурунди
    'rn-bi': 'rn',
    // Киньяруанда
    'rw-rw': 'rw', 'rw-cd': 'rw', 'rw-ug': 'rw',
    // Ганда
    'lg-ug': 'lg',
    // Чичева
    'ny-mw': 'ny', 'ny-zm': 'ny', 'ny-zw': 'ny',
    // Малагасийский
    'mg-mg': 'mg',
    // Оромо
    'om-et': 'om', 'om-ke': 'om',
    // Сомали
    'so-so': 'so', 'so-dj': 'so', 'so-et': 'so', 'so-ke': 'so',
    // Шона
    'sn-zw': 'sn',
    // Волоф
    'wo-sn': 'wo', 'wo-gm': 'wo', 'wo-mr': 'wo',
    // Фула
    'ff-sn': 'ff', 'ff-gn': 'ff', 'ff-mr': 'ff', 'ff-ng': 'ff', 'ff-cm': 'ff',
    'ff-latn': 'ff', 'ff-adlm': 'ff',
    // Дзонгкха
    'dy': 'dy', 'dz': 'dy', 'dz-bt': 'dy',
    // Бамбара
    'bm-ml': 'bm', 'bm-latn': 'bm',
    // Белорусский
    'be-by': 'be', 'be-cyrl': 'be', 'be-latn': 'be',
    // Украинский
    'uk-ua': 'uk',
    // Греческий
    'el-gr': 'el', 'el-cy': 'el',
    // Латынь
    'la': 'la', 'la-va': 'la',
    // Эсперанто
    'eo': 'eo', 'eo-xx': 'eo',
    // Интерлингва
    'ia': 'ia', 'ia-xx': 'ia',
    // Корсиканский
    'co': 'co', 'co-fr': 'co',
    // Гэльский
    'gd-gb': 'gd'
  };
  
  // Сначала проверяем полное совпадение в карте
  if (languageMap[fullLang]) {
    return languageMap[fullLang];
  }
  
  // Если не нашли, проверяем двухбуквенный код
  if (LANGUAGES[langCode]) {
    return langCode;
  }
  
  return 'en';
}

/* ===== ЗАГРУЗКА ЯЗЫКА ===== */
function loadLanguage() {
  const saved = localStorage.getItem('newsAppLanguage');
  lang = saved && LANGUAGES[saved] ? saved : getBrowserLanguage();
  window.lang = lang;
}

/* ===== СОХРАНЕНИЕ ЯЗЫКА ===== */
function saveLanguage() {
  localStorage.setItem('newsAppLanguage', lang);
}

/* ===== ПЕРЕВОД ===== */
function t(key) {
  return UI_TRANSLATIONS[lang]?.[key] || UI_TRANSLATIONS.en[key] || key;
}
window.t = t;

/* ===== ПЕРЕВОД ФУТЕРА ===== */
function updateFooter() {
  const f = FOOTER_TRANSLATIONS[lang] || FOOTER_TRANSLATIONS.en;
  
  const elements = {
    'footer-tagline': f.tagline,
    'footer-legal': f.legal,
    'footer-privacy': f.privacy,
    'footer-terms': f.terms,
    'footer-cookie': f.cookie,
    'footer-contact-title': f.contactTitle,
    'footer-contact': f.contact,
    'footer-copyright': f.copyright
  };
  
  for (const [id, text] of Object.entries(elements)) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }
  
  document.title = `Infyra ${f.news} - ${f.tagline}`;
  
  const cookieText = document.getElementById('cookie-text');
  if (cookieText) {
    cookieText.innerHTML = f.cookieText.replace('{privacy}', `<a href="privacy.html">${f.privacy}</a>`);
  }
  
  const acceptBtn = document.getElementById('cookie-accept-btn');
  const declineBtn = document.getElementById('cookie-decline-btn');
  if (acceptBtn) acceptBtn.textContent = f.accept;
  if (declineBtn) declineBtn.textContent = f.decline;
}

/* ===== МЕНЮ ЯЗЫКОВ (ОБНОВЛЕНО) ===== */
function renderLangMenu() {
  const desktopSelect = document.getElementById('langSelect');
  const mobileSelect = document.getElementById('mobileLangSelect');

  if (!desktopSelect || !mobileSelect) return;

  desktopSelect.innerHTML = '';
  mobileSelect.innerHTML = '';

  // Текущий язык (заглушка)
  const currentOptionDesktop = document.createElement('option');
  currentOptionDesktop.textContent = LANGUAGES[lang];
  currentOptionDesktop.value = '';
  currentOptionDesktop.disabled = true;
  currentOptionDesktop.selected = true;
  desktopSelect.appendChild(currentOptionDesktop);

  const currentOptionMobile = document.createElement('option');
  currentOptionMobile.textContent = LANGUAGES[lang];
  currentOptionMobile.value = '';
  currentOptionMobile.disabled = true;
  currentOptionMobile.selected = true;
  mobileSelect.appendChild(currentOptionMobile);

  // Разделитель
  const separatorDesktop = document.createElement('option');
  separatorDesktop.disabled = true;
  separatorDesktop.textContent = '──────────';
  desktopSelect.appendChild(separatorDesktop);

  const separatorMobile = document.createElement('option');
  separatorMobile.disabled = true;
  separatorMobile.textContent = '──────────';
  mobileSelect.appendChild(separatorMobile);

  // Все остальные языки
  Object.keys(LANGUAGES)
    .filter(code => code !== lang)
    .sort((a, b) => LANGUAGES[a].localeCompare(LANGUAGES[b]))
    .forEach(code => {
      const optDesktop = document.createElement('option');
      optDesktop.value = code;
      optDesktop.textContent = LANGUAGES[code];
      desktopSelect.appendChild(optDesktop);

      const optMobile = document.createElement('option');
      optMobile.value = code;
      optMobile.textContent = LANGUAGES[code];
      mobileSelect.appendChild(optMobile);
    });

  // Обработчик для десктопного селекта
  desktopSelect.onchange = (e) => {
    if (!e.target.value) return;
    changeLanguage(e.target.value);
  };

  // Обработчик для мобильного селекта (дополнительно закрывает меню)
  mobileSelect.onchange = (e) => {
    if (!e.target.value) return;
    changeLanguage(e.target.value);
    // Закрываем мобильное меню
    document.getElementById('burger')?.classList.remove('active');
    document.getElementById('mobileMenu')?.classList.remove('active');
    document.body.style.overflow = '';
  };
}

/* ===== КАТЕГОРИИ (ОБНОВЛЕНО) ===== */
function renderCategories() {
  const desktopUl = document.getElementById('categories');
  const mobileUl = document.getElementById('mobileCategories');

  if (!desktopUl || !mobileUl) return;

  desktopUl.innerHTML = '';
  mobileUl.innerHTML = '';

  Object.keys(CATEGORIES).forEach(cat => {
    // Десктоп
    const liDesktop = document.createElement('li');
    liDesktop.textContent = CATEGORIES[cat][lang] || CATEGORIES[cat].en;
    liDesktop.dataset.cat = cat;
    if (cat === 'top') liDesktop.classList.add('active');

    liDesktop.onclick = () => {
      document.querySelectorAll('#categories li').forEach(e => e.classList.remove('active'));
      liDesktop.classList.add('active');
      loadNews(cat);
    };

    desktopUl.appendChild(liDesktop);

    // Мобильный
    const liMobile = document.createElement('li');
    liMobile.textContent = CATEGORIES[cat][lang] || CATEGORIES[cat].en;
    liMobile.dataset.cat = cat;
    if (cat === 'top') liMobile.classList.add('active');

    liMobile.onclick = () => {
      document.querySelectorAll('#mobileCategories li').forEach(e => e.classList.remove('active'));
      liMobile.classList.add('active');
      loadNews(cat);
      // Закрываем мобильное меню после выбора категории
      document.getElementById('burger')?.classList.remove('active');
      document.getElementById('mobileMenu')?.classList.remove('active');
      document.body.style.overflow = '';
    };

    mobileUl.appendChild(liMobile);
  });
}

/* ===== СМЕНА ЯЗЫКА ===== */
function changeLanguage(newLang) {
  if (!LANGUAGES[newLang]) return;
  
  lang = newLang;
  window.lang = newLang;
  saveLanguage();
  
  renderLangMenu();
  renderCategories();
  updateFooter();
  
  if (!window.location.pathname.includes('news.html')) {
    loadNews('top');
  }
}
window.changeLanguage = changeLanguage;

/* ===== ЗАГРУЗКА НОВОСТЕЙ ===== */
function loadNews(category) {
  const grid = document.getElementById('news');
  const slides = document.querySelector('.slides');
  
  if (!grid) return;
  
  grid.innerHTML = `<div class="loading-placeholder">${t('loading')}</div>`;
  if (slides) slides.innerHTML = '';
  
  fetch(`https://newsdata.io/api/1/news?apikey=${API_KEY}&language=${lang}&category=${category}`)
    .then(r => r.json())
    .then(data => {
      if (data.results?.length) {
        displayNews(data, category);
      } else {
        grid.innerHTML = `<div class="no-news">${t('noNews')}</div>`;
      }
    })
    .catch(() => {
      grid.innerHTML = `
        <div class="error-message">
          <h3>${t('error')}</h3>
          <p>${t('errorDesc')}</p>
          <button onclick="loadNews('top')">${t('tryAgain')}</button>
        </div>
      `;
    });
}
window.loadNews = loadNews;

/* ===== ОТОБРАЖЕНИЕ НОВОСТЕЙ ===== */
function displayNews(data, category) {
  const grid = document.getElementById('news');
  const slides = document.querySelector('.slides');
  
  if (!grid || !slides) return;
  
  grid.innerHTML = '';
  slides.innerHTML = '';
  
  // Слайдер
  data.results.slice(0, 10).forEach(item => {
    const slide = document.createElement('div');
    slide.className = 'slide';
    slide.innerHTML = `
      <img src="${item.image_url || 'https://via.placeholder.com/1200x400'}" alt="${item.title || ''}">
      <div class="slide-caption">${item.title?.slice(0, 100) || ''}</div>
    `;
    slide.onclick = () => openNews(item, category);
    slides.appendChild(slide);
  });
  
  // Карточки
  data.results.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${item.image_url || 'https://via.placeholder.com/300x200'}" alt="${item.title || ''}">
      <div class="content">
        <h3>${item.title?.slice(0, 70) || ''}</h3>
        <p>${item.description?.slice(0, 100) || ''}</p>
        <div class="card-footer">
          <span class="source">${t('source')}: ${item.source_id || 'News'}</span>
          <span class="read-more">${t('readMore')}</span>
        </div>
      </div>
    `;
    card.onclick = () => openNews(item, category);
    grid.appendChild(card);
  });
  
  initSlider();
}

/* ===== ОТКРЫТИЕ НОВОСТИ ===== */
function openNews(item, category) {
  sessionStorage.setItem('currentNews', JSON.stringify({
    title: item.title,
    description: item.description,
    image: item.image_url,
    link: item.link,
    source: item.source_id,
    pubDate: item.pubDate,
    category: category,
    lang: lang
  }));
  window.location.href = 'news.html';
}
window.openNews = openNews;

/* ===== СЛАЙДЕР ===== */
function initSlider() {
  const slides = document.querySelector('.slides');
  if (!slides?.children.length) return;
  
  let current = 0;
  const total = slides.children.length;
  
  setInterval(() => {
    current = (current + 1) % total;
    slides.style.transform = `translateX(-${current * 100}%)`;
  }, 5000);
}
window.initSlider = initSlider;

/* ===== ЛИПКИЙ БАННЕР (ГОТОВ ДЛЯ ADSENSE) ===== */
function createStickyAd() {
  if (!document.querySelector('.sticky-ad')) {
    const sticky = document.createElement('div');
    sticky.className = 'sticky-ad';
    
    // 👇 ЗДЕСЬ ВСТАВИТЬ КОД ADSENSE ДЛЯ ЛИПКОГО БАННЕРА ПОСЛЕ ПОЛУЧЕНИЯ
    sticky.innerHTML = `
      <div class="sticky-ad-container">
        <button class="sticky-ad-close">×</button>
        <!-- ЗАМЕНИТЕ ЭТОТ ТЕКСТ НА КОД ADSENSE -->
        <div class="ad-placeholder">Sticky Ad Space 320x100</div>
      </div>
    `;
    
    document.body.appendChild(sticky);
    
    sticky.querySelector('.sticky-ad-close').onclick = () => sticky.remove();
  }
}

/* ===== ЗАГРУЗКА СТРАНИЦЫ НОВОСТИ ===== */
function loadNewsPage() {
  const saved = sessionStorage.getItem('currentNews');
  if (!saved) {
    document.body.innerHTML = "<h2 style='color:white; text-align:center; margin-top:50px;'>News not found</h2>";
    return;
  }
  
  const n = JSON.parse(saved);

  if (n.lang && LANGUAGES[n.lang]) {
    changeLanguage(n.lang);
  }

  const title = document.getElementById('title');
  const desc = document.getElementById('desc');
  const img = document.getElementById('image');

  if (title) title.textContent = n.title;
  if (desc) desc.textContent = n.description || '';
  if (img) {
    img.src = n.image || 'https://via.placeholder.com/800x450';
    img.alt = n.title || 'News image';
  }

  const sourceEl = document.getElementById('articleSource');
  const categoryEl = document.getElementById('articleCategory');
  const dateEl = document.getElementById('articleDate');
  
  if (sourceEl) sourceEl.textContent = n.source || '';
  if (categoryEl) categoryEl.textContent = (n.category || 'NEWS').toUpperCase();
  
  if (dateEl) {
    try {
      dateEl.textContent = new Date(n.pubDate || Date.now()).toLocaleDateString();
    } catch(e) {
      dateEl.textContent = new Date().toLocaleDateString();
    }
  }

  document.title = n.title + ' - Infyra News';

  const ogTitle = document.getElementById('ogTitle');
  const ogDesc = document.getElementById('ogDesc');
  const ogImage = document.getElementById('ogImage');
  const ogUrl = document.getElementById('ogUrl');
  
  if (ogTitle) ogTitle.content = n.title;
  if (ogDesc) ogDesc.content = n.description;
  if (ogImage) ogImage.content = n.image;
  if (ogUrl) ogUrl.content = location.href;

  const schemaArticle = document.getElementById('schemaArticle');
  if (schemaArticle) {
    schemaArticle.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'NewsArticle',
      'headline': n.title,
      'image': [n.image],
      'datePublished': n.pubDate,
      'publisher': {
        '@type': 'Organization',
        'name': 'Infyra'
      }
    });
  }

  function openOriginal(e) {
    if (e.target.closest('.ad') || e.target.closest('.sticky-ad')) return;
    if (n.link) window.open(n.link, '_blank');
  }

  if (title) title.onclick = openOriginal;
  if (img) img.onclick = openOriginal;
  if (desc) desc.onclick = openOriginal;
}

/* ===== МОБИЛЬНОЕ МЕНЮ (НОВАЯ ФУНКЦИЯ) ===== */
function initMobileMenu() {
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (!burger || !mobileMenu) return;

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    // Блокируем прокрутку страницы при открытом меню
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  });

  // Закрываем меню при клике на любую ссылку внутри него (категории или селект)
  mobileMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI' || e.target.tagName === 'SELECT') {
      burger.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

/* ===== ИНИЦИАЛИЗАЦИЯ (ОБНОВЛЕНО) ===== */
function init() {
  loadLanguage();
  renderLangMenu();
  renderCategories();
  updateFooter();
  createStickyAd(); // Создаём липкий баннер
  initMobileMenu();  // Добавлен вызов функции мобильного меню
  
  // 👇 ЗДЕСЬ ВСТАВИТЬ КОД GOOGLE ADSENSE В <head> HTML ФАЙЛА
  // <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>
  
  if (window.location.pathname.includes('news.html')) {
    loadNewsPage();
  } else {
    loadNews('top');
  }
  
  window.addEventListener('storage', (e) => {
    if (e.key === 'newsAppLanguage' && e.newValue && e.newValue !== lang) {
      changeLanguage(e.newValue);
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

window.acceptCookies = () => {
  localStorage.setItem('cookieConsent', 'accepted');
  document.getElementById('cookie-banner')?.remove();
};

window.declineCookies = () => {
  localStorage.setItem('cookieConsent', 'declined');
  document.getElementById('cookie-banner')?.remove();
};

if (!localStorage.getItem('cookieConsent')) {
  setTimeout(() => {
    document.getElementById('cookie-banner')?.style.setProperty('display', 'block');
  }, 1000);
}