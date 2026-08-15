import { Language, TranslationSet } from '../types';

export const translations: Record<Language, TranslationSet> = {
  fr: {
    appTitle: "Amplify Google Setup Gids",
    appSubtitle: "Guide de configuration étape par étape pour commerçants et PME",
    welcomeBadge: "Guide Visibilité Google",
    landingTitle: "Propulsez votre visibilité Google sans jargon technique",
    landingSubtitle: "Un parcours guidé pensé pour les restaurateurs, gérants de cafés et salons. Configurez les 4 piliers indispensables de Google en toute autonomie et attirez plus de clients locaux.",
    landingAudience: "Idéal pour commerçants & artisans indépendants",
    landingDuration: "~15 à 20 minutes au total",
    startButton: "Commencer le guide",
    overviewHeading: "Votre feuille de route en 4 étapes",
    stepsLabel: "Étape",
    stepOf: "sur",
    nextStep: "Étape suivante",
    prevStep: "Étape précédente",
    finishButton: "Terminer et voir le récapitulatif",
    markAllDone: "Tout cocher comme fait",
    resetStep: "Décocher tout",
    completedBadge: "Terminé",
    activeBadge: "En cours",
    notStartedBadge: "Non commencé",
    upcomingBadge: "À venir",
    tipLabel: "Conseil pratique",
    openGoogleLink: "Accéder à l'outil officiel",
    completedStepsCount: "tâches complétées",
    congratsTitle: "Félicitations, votre présence Google est en place !",
    congratsSubtitle: "Vous avez franchi toutes les étapes pour optimiser la visibilité locale de votre établissement. Vos futurs clients peuvent désormais vous trouver facilement.",
    congratsSummaryTitle: "Récapitulatif de votre progression",
    congratsTipTitle: "Le secret de la pérennité",
    congratsTipText: "Publiez une nouvelle photo ou une actualité au moins une fois par mois et continuez à solliciter les avis de vos clients satisfaits.",
    contactAmplifyTitle: "Besoin d'aide ou d'un accompagnement personnalisé ?",
    contactAmplifyText: "L'équipe Amplify Growth Studio vous accompagne pour accélérer votre acquisition client et transformer vos visiteurs en clients fidèles.",
    contactButton: "Contacter Amplify Growth Studio",
    restartButton: "Recommencer le guide depuis le début",
    progressOverview: "Progression globale",
    placeholderNotice: "Aperçu de l'étape — Contenu détaillé disponible prochainement",
    steps: [
      {
        id: 'gbp',
        stepNumber: 1,
        name: "Google Business Profile",
        tagline: "Votre vitrine locale sur Google Maps & Moteur de recherche",
        timeEstimate: "5 - 7 min",
        officialUrl: "https://business.google.com",
        officialUrlLabel: "Ouvrir Google Business Profile",
        iconName: 'store',
        description: "Google Business Profile est la fiche gratuite qui apparaît sur Google Maps et dans les résultats de recherche Google, souvent la toute première chose qu'un client potentiel voit.",
        isPlaceholder: false,
        subSteps: [
          {
            id: 'gbp-1',
            number: 1,
            title: "Accédez à business.google.com et créez un compte gratuit avec votre compte Google professionnel.",
            detail: "Utilisez de préférence l'adresse e-mail dédiée à votre entreprise pour garder le contrôle de votre fiche."
          },
          {
            id: 'gbp-2',
            number: 2,
            title: "Recherchez le nom de votre établissement pour vérifier s'il existe déjà une fiche non revendiquée, et revendiquez-la plutôt que d'en créer un doublon.",
            detail: "Google crée parfois des fiches automatiques. La revendiquer évite de diviser vos futurs avis clients."
          },
          {
            id: 'gbp-3',
            number: 3,
            title: "Renseignez le nom exact de votre entreprise, sa catégorie principale et son adresse postale, précisément comme sur votre site et vos réseaux.",
            detail: "La cohérence stricte des informations (nom, adresse, catégorie) améliore grandement votre classement dans les recherches locales."
          },
          {
            id: 'gbp-4',
            number: 4,
            title: "Ajoutez votre numéro de téléphone, l'adresse de votre site web et vos horaires d'ouverture réels, y compris les horaires pour les jours fériés.",
            detail: "Les clients appellent et consultent souvent les horaires avant de se déplacer."
          },
          {
            id: 'gbp-5',
            number: 5,
            title: "Validez votre établissement selon la méthode proposée par Google (courrier postal avec code, appel téléphonique, SMS ou vidéo).",
            detail: "La fiche ne devient visible publiquement sur Google Maps qu'après cette étape de validation officielle."
          },
          {
            id: 'gbp-6',
            number: 6,
            title: "Téléchargez au minimum 5 photos de haute qualité : la devanture extérieure, la salle intérieure, vos produits ou plats phares, et l'équipe.",
            detail: "Une fiche avec des photos lumineuses et soignées reçoit 42 % de demandes d'itinéraire supplémentaires."
          },
          {
            id: 'gbp-7',
            number: 7,
            title: "Rédigez une brève description engageante et chaleureuse de votre activité (750 caractères maximum).",
            detail: "Mentionnez vos spécialités, votre ambiance et ce qui vous rend unique dans votre quartier."
          },
          {
            id: 'gbp-8',
            number: 8,
            title: "Invitez vos premiers clients fidèles à déposer un avis 5 étoiles avec commentaire, c'est le levier n°1 de visibilité locale.",
            detail: "Partagez directement votre lien d'avis court par WhatsApp, QR code sur table ou reçu de caisse."
          }
        ],
        tip: "Astuce : répondez toujours aux avis, même négatifs. Cela montre aux clients potentiels que vous êtes activement impliqué et à l'écoute de votre clientèle."
      },
      {
        id: 'ga4',
        stepNumber: 2,
        name: "Google Analytics 4",
        tagline: "Mesurez les visites de votre site et le comportement des clients",
        timeEstimate: "4 - 5 min",
        officialUrl: "https://analytics.google.com",
        officialUrlLabel: "Ouvrir Google Analytics",
        iconName: 'chart',
        description: "Google Analytics vous permet de comprendre combien de personnes visitent votre site internet, d'où elles viennent (Instagram, Google Maps, bouche-à-oreille) et quelles pages elles consultent.",
        isPlaceholder: true,
        subSteps: [
          {
            id: 'ga4-1',
            number: 1,
            title: "Rendez-vous sur analytics.google.com avec votre compte professionnel.",
            detail: "Connectez-vous pour initialiser votre première propriété GA4 dédiée à votre commerce."
          },
          {
            id: 'ga4-2',
            number: 2,
            title: "Créez une nouvelle propriété GA4 en indiquant le nom de votre commerce, le fuseau horaire et la devise.",
            detail: "Paramétrez le fuseau local pour avoir des rapports horaires précis sur les heures d'affluence en ligne."
          },
          {
            id: 'ga4-3',
            number: 3,
            title: "Configurez le flux de données web en renseignant l'URL de votre site.",
            detail: "Google vous fournira votre identifiant de mesure unique (commençant par G-)."
          },
          {
            id: 'ga4-4',
            number: 4,
            title: "Intégrez le code de suivi sur votre site web ou CMS (WordPress, Wix, Squarespace, Shopify).",
            detail: "La plupart des créateurs de site ont un champ direct où coller simplement votre ID de mesure."
          },
          {
            id: 'ga4-5',
            number: 5,
            title: "Vérifiez la réception des premières données dans le rapport « Temps réel ».",
            detail: "Ouvrez votre site sur votre téléphone pour voir votre visite s'afficher instantanément."
          }
        ],
        tip: "Astuce : concentrez-vous sur deux chiffres simples : le nombre d'utilisateurs par mois et la page la plus consultée (souvent la carte/menu ou la page contact)."
      },
      {
        id: 'gsc',
        stepNumber: 3,
        name: "Google Search Console",
        tagline: "Vérifiez que Google trouve et indexe correctement vos pages",
        timeEstimate: "3 - 4 min",
        officialUrl: "https://search.google.com/search-console",
        officialUrlLabel: "Ouvrir Search Console",
        iconName: 'search',
        description: "Google Search Console est l'outil officiel et gratuit de Google qui vous informe sur les mots-clés que les gens tapent pour vous trouver et signale les éventuelles erreurs sur votre site.",
        isPlaceholder: true,
        subSteps: [
          {
            id: 'gsc-1',
            number: 1,
            title: "Connectez-vous sur search.google.com/search-console.",
            detail: "Utilisez le même compte Google que pour votre fiche d'établissement et Analytics."
          },
          {
            id: 'gsc-2',
            number: 2,
            title: "Ajoutez l'URL de votre site en tant que nouvelle propriété.",
            detail: "Si Google Analytics est déjà configuré, la validation se fait souvent en un seul clic automatique."
          },
          {
            id: 'gsc-3',
            number: 3,
            title: "Soumettez le sitemap de votre site (ex: /sitemap.xml) pour accélérer l'indexation de vos pages.",
            detail: "Cela aide les robots Google à découvrir immédiatement toutes vos pages importantes."
          },
          {
            id: 'gsc-4',
            number: 4,
            title: "Consultez l'onglet « Performances » pour découvrir les recherches de vos visiteurs.",
            detail: "Découvrez si les gens vous cherchent par votre nom ou par votre spécialité locale (ex: « meilleur café brunch quartier »)."
          }
        ],
        tip: "Astuce : jetez un coup d'œil une fois par trimestre aux requêtes populaires pour adapter les textes et menus de votre site."
      },
      {
        id: 'ads',
        stepNumber: 4,
        name: "Google Ads",
        tagline: "Attirez des clients locaux dès aujourd'hui avec des annonces ciblées",
        timeEstimate: "5 min",
        officialUrl: "https://ads.google.com",
        officialUrlLabel: "Ouvrir Google Ads",
        iconName: 'ads',
        description: "Google Ads permet de positionner votre établissement tout en haut des résultats de recherche lorsque des clients situés à proximité cherchent immédiatement vos services ou vos produits.",
        isPlaceholder: true,
        subSteps: [
          {
            id: 'ads-1',
            number: 1,
            title: "Créez votre compte sur ads.google.com en mode campagne intelligente (Smart Campaign).",
            detail: "Le mode intelligent est spécialement conçu pour les commerces locaux sans connaissances publicitaires."
          },
          {
            id: 'ads-2',
            number: 2,
            title: "Définissez un rayon géographique précis autour de votre établissement (ex: 5 à 10 km).",
            detail: "Évitez de gaspiller votre budget en ciblant uniquement les personnes capables de se déplacer chez vous."
          },
          {
            id: 'ads-3',
            number: 3,
            title: "Rédigez 3 titres accrocheurs et 2 descriptions mettant en avant vos points forts.",
            detail: "Mettez en avant vos offres d'appel, votre localisation et un appel à l'action clair (ex: « Réservez votre table en ligne »)."
          },
          {
            id: 'ads-4',
            number: 4,
            title: "Fixez un budget quotidien modéré (ex: 5 € à 10 € / jour) et testez sur 2 à 3 semaines.",
            detail: "Vous ne payez que lorsqu'un internaute clique réellement sur votre annonce ou appelle votre numéro."
          }
        ],
        tip: "Astuce : activez les extensions d'appel et de lieu pour que les utilisateurs puissent cliquer directement sur « Itinéraire » ou « Appeler » depuis leur smartphone."
      }
    ]
  },
  ar: {
    appTitle: "دليل إعداد خدمات Google من Amplify",
    appSubtitle: "دليل تطبيقي خطوة بخطوة لأصحاب المطاعم والمقاهي والمتاجر المحلية",
    welcomeBadge: "دليل الظهور على Google",
    landingTitle: "عزز ظهور نشاطك التجاري على Google بكل سهولة وبدون تعقيدات تقنية",
    landingSubtitle: "مسار عملي موجّه خصيصاً لأصحاب المطاعم، المقاهي، الصالونات والمتاجر. قم بإعداد الركائز الأربع الأساسية لخدمات Google بشكل مستقل لجذب المزيد من الزبائن المحليين.",
    landingAudience: "مخصص للمشاريع والمحلات التجارية والخدمية",
    landingDuration: "من 15 إلى 20 دقيقة تقريباً",
    startButton: "ابدأ الدليل الإرشادي",
    overviewHeading: "خارطة طريقك في 4 خطوات",
    stepsLabel: "الخطوة",
    stepOf: "من",
    nextStep: "الخطوة التالية",
    prevStep: "الخطوة السابقة",
    finishButton: "إنهاء وعرض الملخص",
    markAllDone: "تحديد الكل كمكتمل",
    resetStep: "إلغاء تحديد الكل",
    completedBadge: "مكتمل",
    activeBadge: "قيد التنفيذ",
    notStartedBadge: "لم يبدأ",
    upcomingBadge: "قادمة",
    tipLabel: "نصيحة عملية",
    openGoogleLink: "الانتقال إلى الأداة الرسمية",
    completedStepsCount: "مهام تم إنجازها",
    congratsTitle: "تهانينا! أصبحت خدمات Google جاهزة لنشاطك التجاري",
    congratsSubtitle: "لقد أتممت كافة الخطوات الأساسية لتعزيز ظهور محلك في محيطك الجغرافي. يمكن للزبائن الآن العثور عليك والتواصل معك بسهولة تامة.",
    congratsSummaryTitle: "ملخص ما أنجزته",
    congratsTipTitle: "سر النجاح الدائم",
    congratsTipText: "أضف صوراً جديدة أو منشوراً شهرياً واحداً على الأقل، واستمر في تشجيع زبائنك الراضين على كتابة تقييمات إيجابية.",
    contactAmplifyTitle: "هل تحتاج إلى مساعدة أو استشارة مخصصة لتطوير نشاطك؟",
    contactAmplifyText: "فريق Amplify Growth Studio يساندك خطوة بخطوة لمضاعفة زبائنك وتحويل زوار الإنترنت إلى عملاء دائمين.",
    contactButton: "تواصل مع Amplify Growth Studio",
    restartButton: "إعادة الدليل من البداية",
    progressOverview: "نسبة الإنجاز الإجمالية",
    placeholderNotice: "نظرة عامة على الخطوة — سيتم تحديث المحتوى التفصيلي قريباً",
    steps: [
      {
        id: 'gbp',
        stepNumber: 1,
        name: "الملف التجاري Google Business Profile",
        tagline: "واجهتك المجانية على خرائط Google ومحرك البحث",
        timeEstimate: "5 - 7 دقائق",
        officialUrl: "https://business.google.com",
        officialUrlLabel: "فتح Google Business Profile",
        iconName: 'store',
        description: "الملف التجاري على Google هو القيد المجاني الذي يظهر على خرائط Google ونتائج البحث، وغالباً ما يكون أول نقطة اتصال يراها العميل المحتمل.",
        isPlaceholder: false,
        subSteps: [
          {
            id: 'gbp-1',
            number: 1,
            title: "انتقل إلى business.google.com وأنشئ حساباً مجانياً باستخدام حساب Google المهني الخاص بنشاطك.",
            detail: "يُفضل استخدام بريد إلكتروني مخصص لعملك لضمان سهولة الإدارة وحفظ الصلاحيات."
          },
          {
            id: 'gbp-2',
            number: 2,
            title: "ابحث عن اسم نشاطك التجاري للتحقق مما إذا كان هناك ملف قائم وغير مطالب به، واطلبه بدلاً من إنشاء ملف مكرر.",
            detail: "تنشئ Google أحياناً ملفات تلقائية من الخرائط؛ والمطالبة بها تحفظ تقييماتك السابقة وتمنع التشتت."
          },
          {
            id: 'gbp-3',
            number: 3,
            title: "أدخل الاسم الدقيق للنشاط، والفئة الرئيسية، والعنوان الفعلي، تماماً كما هو مكتوب في موقعك وصفحات التواصل.",
            detail: "التطابق التام في الاسم والعنوان يعزز ثقة خوارزميات البحث ويرفع ترتيبك في النتائج المحلية."
          },
          {
            id: 'gbp-4',
            number: 4,
            title: "أضف رقم الهاتف، ورابط الموقع الإلكتروني، وساعات العمل الحقيقية، بما في ذلك أوقات العطل والمناسبات الخاصة.",
            detail: "يتأكد الزبائن غالباً من ساعات العمل ورقم الاتصال قبل اتخاذ قرار القدوم لمحلك."
          },
          {
            id: 'gbp-5',
            number: 5,
            title: "قم بإثبات ملكية نشاطك عبر الوسيلة التي توفرها Google (بطاقة بريدية بالرمز، اتصال هاتفي، أو رسالة نصية).",
            detail: "لن يظهر ملفك علناً للجميع على الخرائط حتى تكتمل عملية التحقق الرسمية."
          },
          {
            id: 'gbp-6',
            number: 6,
            title: "حمّل 5 صور عالية الجودة على الأقل: واجهة المحل الخارجية، الديكور الداخلي، المنتجات أو الأطباق المميزة، وفريق العمل.",
            detail: "الملفات التي تحتوي على صور واقعية وجذابة تحصل على طلبات اتجاهات وخرائط أكثر بنسبة 42%."
          },
          {
            id: 'gbp-7',
            number: 7,
            title: "اكتب وصفاً جذاباً ومختصراً لنشاطك التجاري (بحد أقصى 750 حرفاً).",
            detail: "اذكر ما يميزك، طابع المكان، وأبرز ما تقدمه لسكان المنطقة والزوار."
          },
          {
            id: 'gbp-8',
            number: 8,
            title: "اطلب من زبائنك الأوائل تقييم المحل، فالتقييمات الإيجابية هي العامل الأقوى في الصدارة المحلية.",
            detail: "شارك رابط التقييم المباشر مع زبائنك عبر واتساب أو رمز QR على الطاولات وإيصالات الدفع."
          }
        ],
        tip: "نصيحة: احرص دائماً على الرد على جميع التقييمات، حتى السلبية منها باحترافية. هذا يُظهر للعملاء الجدد أنك مهتم وملتزم بجودة الخدمة."
      },
      {
        id: 'ga4',
        stepNumber: 2,
        name: "تحليلات Google Analytics 4",
        tagline: "افهم عدد زوار موقعك وكيف يتفاعلون مع خدماتك",
        timeEstimate: "4 - 5 دقائق",
        officialUrl: "https://analytics.google.com",
        officialUrlLabel: "فتح Google Analytics",
        iconName: 'chart',
        description: "تتيح لك أداة Google Analytics معرفة عدد الأشخاص الذين يدخلون موقعك، ومن أين أتوا (خرائط Google، إنستغرام، أو البحث المباشر)، وما هي الصفحات الأكثر زيارة.",
        isPlaceholder: true,
        subSteps: [
          {
            id: 'ga4-1',
            number: 1,
            title: "سجل الدخول على analytics.google.com باستخدام حسابك المهني.",
            detail: "ابدأ بإنشاء حسابك التحليلي الأول لنشاطك التجاري."
          },
          {
            id: 'ga4-2',
            number: 2,
            title: "أنشئ خاصية GA4 جديدة مع تحديد المنطقة الزمنية والعملة المحلية بدقة.",
            detail: "يساعد التوقيت الصحيح على معرفة ساعات الذروة لنشاط الزوار على موقعك."
          },
          {
            id: 'ga4-3',
            number: 3,
            title: "أضف مصدر تدفق البيانات (Web Stream) بكتابة رابط موقعك الإلكتروني.",
            detail: "ستحصل على معرّف القياس الخاص بك (Measurement ID يبدأ بـ G-)."
          },
          {
            id: 'ga4-4',
            number: 4,
            title: "ضع كود التتبع في موقعك (سواء كان مبنياً على WordPress, Wix, Squarespace أو غيرها).",
            detail: "توفر معظم المنصات حقلاً بسيطاً للصق معرّف القياس دون الحاجة لبرمجة."
          },
          {
            id: 'ga4-5',
            number: 5,
            title: "تحقق من وصول البيانات عبر تقرير الوقت الفعلي (Real-time report).",
            detail: "افتح موقعك من هاتفك وتأكد من تسجيل زيارتك في التقرير اللحظي."
          }
        ],
        tip: "نصيحة: ركز على مؤشرين بسيطين: عدد الزوار شهرياً، وأكثر الصفحات زيارة (مثل قائمة الطعام أو صفحة العنوان والحجز)."
      },
      {
        id: 'gsc',
        stepNumber: 3,
        name: "Google Search Console",
        tagline: "تأكد من ظهور صفحات موقعك بشكل سليم في محرك البحث",
        timeEstimate: "3 - 4 دقائق",
        officialUrl: "https://search.google.com/search-console",
        officialUrlLabel: "فتح Search Console",
        iconName: 'search',
        description: "أداة رسمية مجانية من Google توضح لك الكلمات المفتاحية التي يبحث بها الناس ويصلون بها لموقعك، وتنبهك لأي مشكلات تقنية تمنع الفهرسة.",
        isPlaceholder: true,
        subSteps: [
          {
            id: 'gsc-1',
            number: 1,
            title: "سجل الدخول إلى search.google.com/search-console.",
            detail: "استخدم نفس الحساب المرتبط بملفك التجاري وتحليلات Analytics."
          },
          {
            id: 'gsc-2',
            number: 2,
            title: "أضف رابط موقعك كخاصية جديدة وتحقق من الملكية.",
            detail: "إذا كانت أداة Google Analytics مربوطة مسبقاً، فسيتم التحقق بضغطة زر واحدة."
          },
          {
            id: 'gsc-3',
            number: 3,
            title: "أرسل ملف خريطة الموقع (Sitemap) لتسريع فهرسة صفحاتك.",
            detail: "يساعد ذلك محرك Google على قراءة جميع صفحاتك وعروضك الجديدة فوراً."
          },
          {
            id: 'gsc-4',
            number: 4,
            title: "استعرض تبويب الأداء (Performance) لمعرفة الكلمات التي تجلب الزوار.",
            detail: "اكتشف ما إذا كان الزبائن يبحثون باسم محلك أو باسم الوجبات والخدمات التي تقدمها."
          }
        ],
        tip: "نصيحة: ألقِ نظرة دورية كل ثلاثة أشهر لتتعرف على العبارات الشائعة التي يستخدمها سكان منطقتك."
      },
      {
        id: 'ads',
        stepNumber: 4,
        name: "إعلانات Google Ads",
        tagline: "اجذب زبائن جدد من منطقتك فوراً بإعلانات مباشرة ومرنة",
        timeEstimate: "5 دقائق",
        officialUrl: "https://ads.google.com",
        officialUrlLabel: "فتح Google Ads",
        iconName: 'ads',
        description: "تمنحك إعلانات Google الظهور في قمة نتائج البحث عندما يبحث شخص قريب في منطقتك عن طعام، مقهى أو خدمة تقدمها في اللحظة نفسها.",
        isPlaceholder: true,
        subSteps: [
          {
            id: 'ads-1',
            number: 1,
            title: "أنشئ حسابك على ads.google.com واختر الحملة الذكية (Smart Campaign).",
            detail: "الحملات الذكية مصممة خصيصاً للمحلات والمشاريع المحلية دون تعقيد إداري."
          },
          {
            id: 'ads-2',
            number: 2,
            title: "حدد نطاقاً جغرافياً قريباً من محلك (مثلاً في محيط 5 إلى 10 كم).",
            detail: "لا تهدر ميزانيتك على أشخاص بعيدين لا يمكنهم الوصول لموقعك."
          },
          {
            id: 'ads-3',
            number: 3,
            title: "اكتب 3 عناوين جذابة ووصفين يبرزان أفضل ما لديك.",
            detail: "ركز على العروض الخاصة وموقعك وطلب واضح للزيارة أو الحجز."
          },
          {
            id: 'ads-4',
            number: 4,
            title: "حدد ميزانية يومية بسيطة ومدروسة (مثلاً 5 إلى 10 دولارات يومياً) وجرب لمدة أسبوعين.",
            detail: "أنت تدفع فقط عندما ينقر الزبون فعلياً على إعلانك أو يقوم بالاتصال برقمك."
          }
        ],
        tip: "نصيحة: قم بتفعيل إضافة الاتصال وزر الاتجاهات على الخريطة ليتمكن مستخدمو الهواتف من الوصول إليك بنقرة واحدة."
      }
    ]
  },
  en: {
    appTitle: "Amplify Google Setup Guide",
    appSubtitle: "Step-by-step onboarding walkthrough for local business owners",
    welcomeBadge: "Google Visibility Guide",
    landingTitle: "Grow your local Google visibility without technical headaches",
    landingSubtitle: "A guided walkthrough designed for restaurant owners, cafes, salons, and local shops. Set up the 4 essential Google pillars step-by-step and attract more local customers.",
    landingAudience: "Built for independent businesses & shop owners",
    landingDuration: "~15 to 20 minutes total",
    startButton: "Start the guide",
    overviewHeading: "Your 4-step setup roadmap",
    stepsLabel: "Step",
    stepOf: "of",
    nextStep: "Next step",
    prevStep: "Previous step",
    finishButton: "Finish and view summary",
    markAllDone: "Mark all as done",
    resetStep: "Uncheck all",
    completedBadge: "Completed",
    activeBadge: "In progress",
    notStartedBadge: "Not started",
    upcomingBadge: "Upcoming",
    tipLabel: "Pro Tip",
    openGoogleLink: "Open official Google tool",
    completedStepsCount: "tasks completed",
    congratsTitle: "Congratulations, your Google presence is ready!",
    congratsSubtitle: "You have completed the essential steps to maximize your local visibility on Google Search and Maps. Potential customers can now find and contact you effortlessly.",
    congratsSummaryTitle: "Your setup progress summary",
    congratsTipTitle: "The key to long-term success",
    congratsTipText: "Upload a fresh photo or update once a month and consistently ask your happy customers to leave positive reviews.",
    contactAmplifyTitle: "Need assistance or personalized growth support?",
    contactAmplifyText: "The Amplify Growth Studio team helps local businesses accelerate their customer acquisition and convert online searches into loyal patrons.",
    contactButton: "Contact Amplify Growth Studio",
    restartButton: "Restart guide from beginning",
    progressOverview: "Overall Progress",
    placeholderNotice: "Step Preview — Detailed content coming soon",
    steps: [
      {
        id: 'gbp',
        stepNumber: 1,
        name: "Google Business Profile",
        tagline: "Your free digital storefront on Google Maps & Search",
        timeEstimate: "5 - 7 min",
        officialUrl: "https://business.google.com",
        officialUrlLabel: "Open Google Business Profile",
        iconName: 'store',
        description: "Google Business Profile is the free listing that appears on Google Maps and in Google search results, often the very first thing a potential customer sees.",
        isPlaceholder: false,
        subSteps: [
          {
            id: 'gbp-1',
            number: 1,
            title: "Go to business.google.com and create a free account with your professional Google account.",
            detail: "Preferably use an email address dedicated to your business to maintain full ownership."
          },
          {
            id: 'gbp-2',
            number: 2,
            title: "Search for your business name to check if an existing, unclaimed profile already exists, and claim it instead of creating a new duplicate.",
            detail: "Google sometimes auto-generates listings. Claiming it prevents split reviews and maintains your history."
          },
          {
            id: 'gbp-3',
            number: 3,
            title: "Fill in the exact business name, primary category, and address, precisely matching your website and social media channels.",
            detail: "Consistent Name, Address, and Phone (NAP) details significantly boost your local ranking algorithm score."
          },
          {
            id: 'gbp-4',
            number: 4,
            title: "Add your phone number, website URL, and opening hours, including special holiday and seasonal schedules.",
            detail: "Customers frequently verify opening hours and phone numbers before deciding to visit in person."
          },
          {
            id: 'gbp-5',
            number: 5,
            title: "Verify your business using the method provided by Google (mail postcard, phone call, SMS, or video verification).",
            detail: "Your profile will only become publicly discoverable on Maps after this official verification step."
          },
          {
            id: 'gbp-6',
            number: 6,
            title: "Upload at least 5 high-quality photos: storefront facade, warm interior, signature dishes or products, and team.",
            detail: "Listings with genuine, well-lit photos receive 42% more direction requests on Google Maps."
          },
          {
            id: 'gbp-7',
            number: 7,
            title: "Write a short, engaging business description (maximum 750 characters).",
            detail: "Highlight what makes your place special, your atmosphere, and unique offerings in the neighborhood."
          },
          {
            id: 'gbp-8',
            number: 8,
            title: "Ask your first satisfied customers for a review, this is the most critical factor for local visibility.",
            detail: "Share your direct review link via WhatsApp, table QR codes, or on printed receipts."
          }
        ],
        tip: "Tip: Always respond to reviews, even negative ones. This shows potential customers that you are actively engaged and care about your guests."
      },
      {
        id: 'ga4',
        stepNumber: 2,
        name: "Google Analytics 4",
        tagline: "Understand website visitors and where they come from",
        timeEstimate: "4 - 5 min",
        officialUrl: "https://analytics.google.com",
        officialUrlLabel: "Open Google Analytics",
        iconName: 'chart',
        description: "Google Analytics lets you see how many people visit your website, where they discover you (Instagram, Google Maps, word-of-mouth), and which pages they explore.",
        isPlaceholder: true,
        subSteps: [
          {
            id: 'ga4-1',
            number: 1,
            title: "Go to analytics.google.com with your professional Google account.",
            detail: "Sign in to set up your primary GA4 property for your venue."
          },
          {
            id: 'ga4-2',
            number: 2,
            title: "Create a new GA4 property specifying your business name, time zone, and local currency.",
            detail: "Setting your local time zone ensures accurate traffic hour charts."
          },
          {
            id: 'ga4-3',
            number: 3,
            title: "Configure your Web Data Stream by entering your website URL.",
            detail: "You will receive a unique Measurement ID (starting with G-)."
          },
          {
            id: 'ga4-4',
            number: 4,
            title: "Add the tracking code to your website or CMS (WordPress, Wix, Squarespace, Shopify).",
            detail: "Most website platforms have a direct field to simply paste your G- ID without coding."
          },
          {
            id: 'ga4-5',
            number: 5,
            title: "Verify initial incoming traffic in the 'Realtime' report.",
            detail: "Open your site on your mobile phone to verify real-time tracking immediately."
          }
        ],
        tip: "Tip: Keep it simple: look at two numbers — total monthly visitors and your top visited page (usually the menu or contact page)."
      },
      {
        id: 'gsc',
        stepNumber: 3,
        name: "Google Search Console",
        tagline: "Ensure Google properly indexes and ranks your web pages",
        timeEstimate: "3 - 4 min",
        officialUrl: "https://search.google.com/search-console",
        officialUrlLabel: "Open Search Console",
        iconName: 'search',
        description: "Google Search Console is Google's free diagnostic tool that reveals the exact search queries people type to find your site and alerts you to any indexing issues.",
        isPlaceholder: true,
        subSteps: [
          {
            id: 'gsc-1',
            number: 1,
            title: "Log in to search.google.com/search-console.",
            detail: "Use the same Google account tied to your Business Profile and Analytics."
          },
          {
            id: 'gsc-2',
            number: 2,
            title: "Add your website URL as a new property and verify ownership.",
            detail: "If Google Analytics is already installed, verification is usually instant with one click."
          },
          {
            id: 'gsc-3',
            number: 3,
            title: "Submit your sitemap (e.g., /sitemap.xml) to accelerate page indexing.",
            detail: "This helps Google robots instantly discover and index all your updated menu and service pages."
          },
          {
            id: 'gsc-4',
            number: 4,
            title: "Check the 'Performance' tab to view queries bringing you organic impressions.",
            detail: "See if people search your brand name or broad local queries (e.g. 'best brunch near me')."
          }
        ],
        tip: "Tip: Review the performance tab quarterly to spot popular terms and naturally incorporate them into your website menu and descriptions."
      },
      {
        id: 'ads',
        stepNumber: 4,
        name: "Google Ads",
        tagline: "Attract nearby customers looking for your services right now",
        timeEstimate: "5 min",
        officialUrl: "https://ads.google.com",
        officialUrlLabel: "Open Google Ads",
        iconName: 'ads',
        description: "Google Ads places your business at the very top of Google Search when local people in your area are actively searching for what you offer.",
        isPlaceholder: true,
        subSteps: [
          {
            id: 'ads-1',
            number: 1,
            title: "Create your account on ads.google.com using the Smart Campaign mode.",
            detail: "Smart campaigns are automated and designed specifically for local brick-and-mortar stores."
          },
          {
            id: 'ads-2',
            number: 2,
            title: "Set a targeted geographic radius around your location (e.g., 5 to 10 km).",
            detail: "Avoid wasted spend by targeting only people close enough to visit your premises."
          },
          {
            id: 'ads-3',
            number: 3,
            title: "Write 3 catchy headlines and 2 short descriptions highlighting your strengths.",
            detail: "Emphasize key offerings, location convenience, and a clear call to action (e.g. 'Book Table Online')."
          },
          {
            id: 'ads-4',
            number: 4,
            title: "Set a modest daily budget (e.g., $5 to $10 / day) and evaluate after 2-3 weeks.",
            detail: "You only pay when someone clicks your ad or taps to call your business directly."
          }
        ],
        tip: "Tip: Enable location and call extensions so mobile users can tap 'Directions' or 'Call' with a single touch."
      }
    ]
  }
};
