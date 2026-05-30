const burger=document.querySelector('.nav__burger');const burgerBtn=document.querySelector('.nav__burger--btn');const menu=document.querySelector('.menu');const nav=document.querySelector('.nav');const blur=document.querySelector('.blur');
burger?.addEventListener('click',()=>{menu.classList.toggle('active');burgerBtn.classList.toggle('active')});
document.querySelectorAll('.menu__content--a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('active');burgerBtn.classList.remove('active')}));
function onScroll(){const active=window.scrollY>100;nav.classList.toggle('scrolled',active);blur?.classList.toggle('scrolled',active);const par=document.querySelector('.header__parallax');if(par){par.style.backgroundPositionY=`${window.scrollY*0.18}px`;}}
window.addEventListener('scroll',onScroll,{passive:true});onScroll();
const io=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}})},{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.querySelectorAll('.accordion__btn').forEach((btn)=>{btn.addEventListener('click',()=>{const item=btn.closest('.accordion');document.querySelectorAll('.accordion').forEach(acc=>{if(acc!==item)acc.classList.remove('active')});item.classList.toggle('active')})});
const overlay=document.querySelector('.overlay');const modalImg=document.querySelector('.modal__slide-image');const modalTitle=document.querySelector('.modal__price');const modalDesc=document.querySelector('.modal__description');const dotsWrap=document.querySelector('.modal__dots');const closeBtn=document.querySelector('.modal__close-wrapper');let currentSet=[];let currentIndex=0;
function drawSlide(){if(!currentSet.length)return;const slide=currentSet[currentIndex];modalImg.src=slide[0]||slide.url;modalImg.alt=translateLabel(slide[1]||slide.description||'');modalDesc.textContent=translateLabel(slide[1]||slide.description||'');dotsWrap.innerHTML='';currentSet.forEach((_,i)=>{const b=document.createElement('button');b.type='button';b.className=i===currentIndex?'active':'';b.addEventListener('click',()=>{currentIndex=i;drawSlide()});dotsWrap.appendChild(b)});}
function openModal(i){const data=window.SAVI_PROPERTIES[i];if(!data)return;currentSet=data.images;currentIndex=0;modalTitle.textContent=translateLabel(data.address);drawSlide();overlay.hidden=false;document.body.style.overflow='hidden';}
function closeModal(){overlay.hidden=true;document.body.style.overflow='';}
document.querySelectorAll('.listing').forEach(card=>card.addEventListener('click',()=>openModal(Number(card.dataset.index))));
closeBtn?.addEventListener('click',closeModal);overlay?.addEventListener('click',e=>{if(e.target===overlay)closeModal()});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!overlay.hidden)closeModal();if(e.key==='ArrowRight'&&!overlay.hidden)nextSlide();if(e.key==='ArrowLeft'&&!overlay.hidden)prevSlide();});
function nextSlide(){currentIndex=(currentIndex+1)%currentSet.length;drawSlide()}function prevSlide(){currentIndex=(currentIndex-1+currentSet.length)%currentSet.length;drawSlide()}
document.querySelector('.slider-btn--next')?.addEventListener('click',nextSlide);document.querySelector('.slider-btn--prev')?.addEventListener('click',prevSlide);



/* === Language switcher / i18n === */
const SAVI_I18N = {
  uk: {
    "про нас": "про нас",
    "послуги": "послуги",
    "партнери": "партнери",
    "наші обʼєкти": "наші обʼєкти",
    "контакти": "контакти",
    "ПРО НАС": "ПРО НАС",
    "ПОСЛУГИ": "ПОСЛУГИ",
    "НАШІ ОБʼЄКТИ": "НАШІ ОБʼЄКТИ",
    "Контакти": "Контакти",
    "тел: +38068-244-80-79": "тел: +38068-244-80-79",
    "Ми - ТОВ «БК С.А.В.І.» пропонуємо свої послуги у сфері будівництва. Маємо багаторічний досвід в напрямку будівельно-монтажних робіт та штат досвідчених спеціалістів. Забезпечимо виконання робіт в зазначені терміни. Даємо гарантію на виконані роботи. Допоможемо обрати найбільш ефективне та економне проектне рішення. Завдяки партнерським відносинам із постачальниками, забезпечимо поставку матеріалів по цінах із суттєвою знижкою.": "Ми - ТОВ «БК С.А.В.І.» пропонуємо свої послуги у сфері будівництва. Маємо багаторічний досвід в напрямку будівельно-монтажних робіт та штат досвідчених спеціалістів. Забезпечимо виконання робіт в зазначені терміни. Даємо гарантію на виконані роботи. Допоможемо обрати найбільш ефективне та економне проектне рішення. Завдяки партнерським відносинам із постачальниками, забезпечимо поставку матеріалів по цінах із суттєвою знижкою.",
    "Гідроізоляція будівель": "Гідроізоляція будівель",
    "Промислові підлоги": "Промислові підлоги",
    "Благоустрій території": "Благоустрій території",
    "Влаштування тепло-, гідроізоляції плоских покрівель, включаючи:": "Влаштування тепло-, гідроізоляції плоских покрівель, включаючи:",
    "покрівлі «традиційного» типу": "покрівлі «традиційного» типу",
    "інверсійні покрівлі з баластним шаром з щебню та ФЕМ": "інверсійні покрівлі з баластним шаром з щебню та ФЕМ",
    "інверсійні покрівлі під озеленення": "інверсійні покрівлі під озеленення",
    "Влаштування тепло-, гідроізоляції балконів, терас, лоджій": "Влаштування тепло-, гідроізоляції балконів, терас, лоджій",
    "Ремонт та відновлення гідроізоляції існуючих покрівель": "Ремонт та відновлення гідроізоляції існуючих покрівель",
    "Зовнішня підземна гідроізоляція будівель, включаючи:": "Зовнішня підземна гідроізоляція будівель, включаючи:",
    "гідроізоляцію пальового поля": "гідроізоляцію пальового поля",
    "гідроізоляцію підпірних стін": "гідроізоляцію підпірних стін",
    "Монтаж водовідвідних лотків": "Монтаж водовідвідних лотків",
    "Влаштування каналізаційних люків": "Влаштування каналізаційних люків",
    "Прим. Працюємо як з рулонними так і з обмазувальними матеріалами.": "Прим. Працюємо як з рулонними так і з обмазувальними матеріалами.",
    "Влаштування залізобетонної стяжки": "Влаштування залізобетонної стяжки",
    "Влаштування покриття підлог з топінгу": "Влаштування покриття підлог з топінгу",
    "Влаштування літієвих підлог": "Влаштування літієвих підлог",
    "Влаштування полімерних покриттів": "Влаштування полімерних покриттів",
    "Планування території під озеленення та благоустрій": "Планування території під озеленення та благоустрій",
    "Розробка грунту ручним та механізованим способом": "Розробка грунту ручним та механізованим способом",
    "Влаштування піщано-щебеневих шарів": "Влаштування піщано-щебеневих шарів",
    "Влаштування силової плити": "Влаштування силової плити",
    "Влаштування ФЕМ та гранітної плитки по підготовці": "Влаштування ФЕМ та гранітної плитки по підготовці",
    "Влаштування асфальтобетонних доріжок та площадок": "Влаштування асфальтобетонних доріжок та площадок",
    "ПОКРІВЛЯ": "ПОКРІВЛЯ",
    "БЛАГОУСТРІЙ": "БЛАГОУСТРІЙ",
    "ГІДРОІЗОЛЯЦІЯ": "ГІДРОІЗОЛЯЦІЯ",
    "ЗАГАЛЬНОБУДІВЕЛЬНІ РОБОТИ": "ЗАГАЛЬНОБУДІВЕЛЬНІ РОБОТИ"
  },
  en: {
    "про нас": "about us",
    "послуги": "services",
    "партнери": "partners",
    "наші обʼєкти": "our projects",
    "контакти": "contacts",
    "ПРО НАС": "ABOUT US",
    "ПОСЛУГИ": "SERVICES",
    "НАШІ ОБʼЄКТИ": "OUR PROJECTS",
    "Контакти": "Contacts",
    "тел: +38068-244-80-79": "tel: +38068-244-80-79",
    "Ми - ТОВ «БК С.А.В.І.» пропонуємо свої послуги у сфері будівництва. Маємо багаторічний досвід в напрямку будівельно-монтажних робіт та штат досвідчених спеціалістів. Забезпечимо виконання робіт в зазначені терміни. Даємо гарантію на виконані роботи. Допоможемо обрати найбільш ефективне та економне проектне рішення. Завдяки партнерським відносинам із постачальниками, забезпечимо поставку матеріалів по цінах із суттєвою знижкою.": "BC S.A.V.I. LLC provides professional construction services. We have many years of experience in construction and installation works, as well as a team of skilled specialists. We complete projects within agreed deadlines and provide a warranty for the work performed. We help choose the most efficient and cost-effective project solution. Thanks to strong partnerships with suppliers, we can arrange materials at significantly discounted prices.",
    "Гідроізоляція будівель": "Building waterproofing",
    "Промислові підлоги": "Industrial floors",
    "Благоустрій території": "Landscaping and site improvement",
    "Влаштування тепло-, гідроізоляції плоских покрівель, включаючи:": "Installation of thermal and waterproofing systems for flat roofs, including:",
    "покрівлі «традиційного» типу": "traditional roof systems",
    "інверсійні покрівлі з баластним шаром з щебню та ФЕМ": "inverted roofs with crushed-stone and paving ballast layers",
    "інверсійні покрівлі під озеленення": "inverted green roof systems",
    "Влаштування тепло-, гідроізоляції балконів, терас, лоджій": "Thermal and waterproofing works for balconies, terraces and loggias",
    "Ремонт та відновлення гідроізоляції існуючих покрівель": "Repair and restoration of waterproofing on existing roofs",
    "Зовнішня підземна гідроізоляція будівель, включаючи:": "External underground waterproofing of buildings, including:",
    "гідроізоляцію пальового поля": "waterproofing of pile foundations",
    "гідроізоляцію підпірних стін": "waterproofing of retaining walls",
    "Монтаж водовідвідних лотків": "Installation of drainage channels",
    "Влаштування каналізаційних люків": "Installation of sewer manholes",
    "Прим. Працюємо як з рулонними так і з обмазувальними матеріалами.": "Note: We work with both roll-applied and coating waterproofing materials.",
    "Влаштування залізобетонної стяжки": "Installation of reinforced concrete screeds",
    "Влаштування покриття підлог з топінгу": "Installation of hardwearing topping floors",
    "Влаштування літієвих підлог": "Installation of lithium-treated floors",
    "Влаштування полімерних покриттів": "Installation of polymer floor coatings",
    "Планування території під озеленення та благоустрій": "Site planning for landscaping and improvement works",
    "Розробка грунту ручним та механізованим способом": "Manual and mechanized excavation works",
    "Влаштування піщано-щебеневих шарів": "Installation of sand and crushed-stone base layers",
    "Влаштування силової плити": "Installation of reinforced base slabs",
    "Влаштування ФЕМ та гранітної плитки по підготовці": "Installation of paving elements and granite tiles on prepared bases",
    "Влаштування асфальтобетонних доріжок та площадок": "Installation of asphalt concrete paths and areas",
    "ПОКРІВЛЯ": "ROOFING",
    "БЛАГОУСТРІЙ": "SITE IMPROVEMENT",
    "ГІДРОІЗОЛЯЦІЯ": "WATERPROOFING",
    "ЗАГАЛЬНОБУДІВЕЛЬНІ РОБОТИ": "GENERAL CONSTRUCTION WORKS",
    "КМ «9 елементів»": "9 Elements cottage town",
    "вул. Круглоуніверситетська": "Kruhlouniversytetska St.",
    "Плюти": "Pliuty",
    "Пуща водиця": "Pushcha-Vodytsia",
    "вул. Якутська": "Yakutska St.",
    "вул. Філатова": "Filatova St.",
    "Київська обл.": "Kyiv region",
    "с. Матрусівка": "Matrusivka village",
    "центр МВС": "MIA service center",
    "Місто": "City",
    "ЖК Емоція": "Emotion residential complex",
    "вул. Кожумʼяцька": "Kozhumiatska St.",
    "вул. Похила": "Pokhyla St.",
    "с. Хотів": "Khotiv village",
    "вул. Калинівська": "Kalynivska St.",
    "Рошен м. Бориспіль": "Roshen, Boryspil",
    "вул. Сагайдак": "Sahaidak St.",
    "ЖК Юніт": "Unit residential complex",
    "стадіон Гостомель": "Hostomel stadium",
    "БЦ Горизонт парк": "Horizon Park business center"
  }
};

function getCurrentLang() {
  return document.documentElement.dataset.lang || localStorage.getItem('savi_lang') || 'uk';
}

function getI18nKey(text) {
  const value = String(text || '').trim();
  if (!value) return '';

  if (Object.prototype.hasOwnProperty.call(SAVI_I18N.uk, value)) return value;
  if (Object.prototype.hasOwnProperty.call(SAVI_I18N.en, value)) return value;

  const allKeys = new Set([
    ...Object.keys(SAVI_I18N.uk),
    ...Object.keys(SAVI_I18N.en)
  ]);

  for (const key of allKeys) {
    if (SAVI_I18N.uk[key] === value || SAVI_I18N.en[key] === value) {
      return key;
    }
  }

  return value;
}

function hasTranslation(text) {
  const key = getI18nKey(text);
  return Boolean(
    key &&
    (
      Object.prototype.hasOwnProperty.call(SAVI_I18N.uk, key) ||
      Object.prototype.hasOwnProperty.call(SAVI_I18N.en, key)
    )
  );
}

function translateLabel(text) {
  const lang = getCurrentLang();
  const key = getI18nKey(text);
  return SAVI_I18N[lang]?.[key] || key;
}

function translatePage(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;

  document.querySelectorAll('[data-lang-switch]').forEach((button) => {
    button.classList.toggle('active', button.dataset.langSwitch === lang);
    button.setAttribute('aria-pressed', button.dataset.langSwitch === lang ? 'true' : 'false');
  });

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ['SCRIPT', 'STYLE'].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
      const value = node.nodeValue.trim();
      if (!value) return NodeFilter.FILTER_REJECT;
      return hasTranslation(value) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach((node) => {
    const raw = node.nodeValue;
    const currentText = raw.trim();
    if (!node.__saviI18nKey) {
      node.__saviI18nKey = getI18nKey(currentText);
    }

    const translated = SAVI_I18N[lang]?.[node.__saviI18nKey] || node.__saviI18nKey;
    node.nodeValue = raw.replace(currentText, translated);
  });

  document.title = lang === 'en' ? 'BC S.A.V.I.' : 'БК С.А.В.І.';
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.content = lang === 'en'
      ? 'BC S.A.V.I. LLC — construction and installation works, waterproofing, roofing and landscaping.'
      : 'ТОВ БК С.А.В.І. — будівельно-монтажні роботи, гідроізоляція, покрівля, благоустрій територій.';
  }

  if (typeof drawSlide === 'function' && overlay && !overlay.hidden) drawSlide();
  if (modalTitle && modalTitle.textContent) modalTitle.textContent = translateLabel(modalTitle.textContent);
}

function setLanguage(lang, save = true) {
  const normalizedLang = lang === 'en' ? 'en' : 'uk';
  if (save) localStorage.setItem('savi_lang', normalizedLang);
  translatePage(normalizedLang);
}

async function detectInitialLanguage() {
  const savedLang = localStorage.getItem('savi_lang');
  if (savedLang) {
    setLanguage(savedLang, false);
    return;
  }

  try {
    const response = await fetch('https://ipapi.co/json/', { cache: 'no-store' });
    if (response.ok) {
      const data = await response.json();
      setLanguage(data.country_code === 'UA' ? 'uk' : 'en', false);
      return;
    }
  } catch (error) {
    // Fallback нижче спрацює, якщо IP-сервіс недоступний.
  }

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const browserLangs = navigator.languages || [navigator.language || ''];
  const looksUkrainian = timezone === 'Europe/Kyiv' || browserLangs.some((lang) => lang.toLowerCase().startsWith('uk'));
  setLanguage(looksUkrainian ? 'uk' : 'en', false);
}

document.querySelectorAll('[data-lang-switch]').forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.langSwitch));
});

detectInitialLanguage();
