
export const SUB_DOMAIN = '.vikaspedia.in';
export const BASE_DOMAIN = 'vikaspedia.in';
//export const SUB_DOMAIN = '.vpedia.in';
//export const SUB_DOMAIN = '.vikaspedia.in';
export const TOKEN_EXPIRY = 1000 * 60 * 60 * 24; // 24 hour
export const TOKEN_EXPIRY_EXTEND = 1000 * 60 * 60 * 3; // 3 hour
export const AUTO_PAGE_SAVE_TIME = 1000 * 60 * 3; // 3 minute
export const SEARCH_REQUEST_DELAY_TIME = 700; // 0.7 Second
export const NAVIGATION_SERVER_RENDER = 'false'; // value should be true or false
export const WEBINAR_REGISTRATION = false; // value should be true or false
export const SCHEME_ID = '7';
export const ASP_ID = '8';
export const NEWS_ID = '9';
export const EVENT_ID = '10';
export const lgn_code = {
  ENGLISH: 'en',
  HINDI: 'hi',
  TAMIL: 'ta',
  TELUGU: 'te',
  GUJARATI: 'gu',
  MARATHI: 'mr',
  BENGALI: 'bn',
  KANNADA: 'kn',
  MALAYALAM: 'ml',
  SINDHI: 'sd',
  ASSAMESE: 'as',
  URDU: 'ur',
  SANSKRIT: 'sa',
  PUNJABI: 'pa',
  ODIA: 'or',
  KONKANI: 'kok',
  DONGRI: 'doi',
  BODO: 'brx',
  MANIPURI: 'mni',
  NEPALI: 'ne',
  SANTALI: 'sat',
  MAITHILI: 'mai',
  KASHMIRI: 'ks'
};
export const site_url = {
  EN_URL: 'https://'+BASE_DOMAIN,
  HI_URL: 'https://hi.'+BASE_DOMAIN,
  TA_URL: 'https://ta.'+BASE_DOMAIN,
  TE_URL: 'https://te.'+BASE_DOMAIN,
  GU_URL: 'https://gu.'+BASE_DOMAIN,
  MR_URL: 'https://mr.'+BASE_DOMAIN,
  BN_URL: 'https://bn.'+BASE_DOMAIN,
  KN_URL: 'https://kn.'+BASE_DOMAIN,
  ML_URL: 'https://ml.'+BASE_DOMAIN,
  SD_URL: 'https://sd.'+BASE_DOMAIN,
  AS_URL: 'https://as.'+BASE_DOMAIN,
  UR_URL: 'https://ur.'+BASE_DOMAIN,
  SA_URL: 'https://sa.'+BASE_DOMAIN,
  PA_URL: 'https://pa.'+BASE_DOMAIN,
  OR_URL: 'https://or.'+BASE_DOMAIN,
  KOK_URL: 'https://kok.'+BASE_DOMAIN,
  DOI_URL: 'https://doi.'+BASE_DOMAIN,
  BRX_URL: 'https://brx.'+BASE_DOMAIN,
  MNI_URL: 'https://mni.'+BASE_DOMAIN,
  NE_URL: 'https://ne.'+BASE_DOMAIN,
  SAT_URL: 'https://sat.'+BASE_DOMAIN,
  MAI_URL: 'https://mai.'+BASE_DOMAIN,
  KS_URL: 'https://ks.'+BASE_DOMAIN
};

export const site_lgn_url = {
  en: 'EN_URL',
  hi: 'HI_URL',
  ml: 'ML_URL',
  mai: 'MAI_URL',
  sd: 'SD_URL',
  as: 'AS_URL',
  bn: 'BN_URL',
  brx: 'BRX_URL',
  doi: 'DOI_URL',
  gu: 'GU_URL',
  kn: 'KN_URL',
  ks: 'KS_URL',
  kok: 'KOK_URL',
  mni: 'MNI_URL',
  mr: 'MR_URL',
  ne: 'NE_URL',
  or: 'OR_URL',
  pa: 'PA_URL',
  sa: 'SA_URL',
  sat: 'SAT_URL',
  ta: 'TA_URL',
  te: 'TE_URL',
  ur: 'UR_URL'
};

export const completeLanguage = {
  en: 'ENGLISH',
  hi: 'हिन्दी',
  ta: 'தமிழ்',
  te: 'తెలుగు',
  gu: 'ગુજરાતી',
  mr: 'मराठी',
  bn: 'বাংলা',
  kn: 'ಕನ್ನಡ',
  ml: 'മലയാളം',
  sd: 'سنڌي',
  as: 'অসমীয়া',
  ur: 'اردو',
  sa: 'संस्कृत',
  pa: 'ਪੰਜਾਬੀ',
  or: 'ଓଡିଆ',
  kok: 'कोंकणी',
  doi: 'डोंगरी',
  brx: 'बोडो',
  mni: 'মণিপুরি',
  ne: 'नेपाली',
  sat: 'ᱥᱟᱱᱛᱟᱲᱤ',
  mai: 'मैथिली',
  ks: 'كٲشُر'
};

export const completeLanguageString = {
  'en': 'ENGLISH',
  'hi': 'HINDI',
  'ta': 'TAMIL',
  'te': 'TELUGU',
  'gu': 'GUJARATI',
  'mr': 'MARATHI',
  'bn': 'BENGALI',
  'kn': 'KANNADA',
  'ml': 'MALAYALAM',
  'sd': 'SINDHI',
  'as': 'ASSAMESE',
  'ur': 'URDU',
  'sa': 'SANSKRIT',
  'pa': 'PUNJABI',
  'or': 'ODIA',
  'kok': 'KONKANI',
  'doi': 'DONGRI',
  'brx': 'BODO',
  'mni': 'MANIPURI',
  'ne': 'NEPALI',
  'sat': 'SANTALI',
  'mai': 'MAITHILI',
  'ks': 'KASHMIRI'
};

export const user_roles = {
  ADMIN: '1',
  MANAGER: '2',
  REVIEWER: '3',
  EDITOR: '4',
  CONTRIBUTOR: '5',
  MEMBER: '6'
};
export const cookie_keys = {
  JWT_TOKET: '_sdfo#k35xxcvdfs',
  FORGOT_TOKET: '_a2d7sdkdfosd*3be',
  USER_NAME: '_njksdnakf3g6',
  USER_ROLES: '_jhgkdfdhdf67',
  USER_OBJECT: '_sdpmfosd3c34',
  USER_FACILITIES: '_JSDAKLFNS34Ksdbnfksd',
  THEME_VALUE: '_tdse45grtt',
  FONT_VALUE: '_fyp4p5pf',
  DDOMAIN: '-d345gfh67'
};
export const LOCALHOST = 'localhost';
export const context_type = {
  FOLDER: 'folder',
  DOCUMENT: 'document'
};
export const user_facilities = {
  USER_1: [
    { id: 22 },
    { id: 1 },
    { id: 2 },
    { id: 25 },
    { id: 3 },
    { id: 4 },
    { id: 6 },
    { id: 26 },
    { id: 28 },
    { id: 10 },
    // { id: 11 },
    { id: 17 },
    { id: 18 },
    { id: 21 },
    { id: 24 },
    { id: 29 },
    { id: 19 }
  ],

  // Manager
  USER_2: [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 6 },
    { id: 26 },
    { id: 22 },
    { id: 10 },
    // { id: 11 },
    { id: 17 },
    { id: 18 },
    { id: 21 },
    { id: 23 },
    { id: 24 },
    { id: 19 }
  ],

  USER_3: [
    { id: 1 },
    { id: 6 },
    { id: 10 },
    // { id: 11 },
    { id: 21 },
    { id: 19 }
  ],

  USER_5: [
    { id: 6 },
    { id: 10 },
    // { id: 11 },
    { id: 19 }
  ],

  USER_6: [{ id: 6 }, { id: 10 }, { id: 27 }, { id: 19 }]
};

export const PAGINATION_LEN_SIZE = 5;
export const COMMENT_PER_PAGE = 5;
export const CONTENT_PER_PAGE = 10;
export const PAGINATION_LEN_SIZE_GETCOMMENT = 3;
export const CONTENT_SIZE = 30;
export const PROJECT_NAME = 'Vikaspedia';
export const ERROR_400 = 'Bad Request';

export const page_status = {
  PUBLISHED: 'published'
};
export const CONTRIBUTIONS = [
  { id: 1, type: 'Page Added' },
  { id: 2, type: 'Comments Added' },
  { id: 3, type: 'Ratings Added' },
  { id: 4, type: 'File Added' },
  { id: 5, type: 'Image Added' }
];

export const USERS_TYPE = [
  { id: 1, type: 'Registered Members' },
  { id: 2, type: 'Approved Contributors' },
  { id: 3, type: 'Approved Reviewers' },
  { id: 4, type: 'Approved Editors' }
];

export const NEW_PAGE = 'newpage';
export const MODIFIED_PAGE = 'modifiedpage';
export const EXPIRED_PAGE = 'expiredpage';
export const PRIVATE_PAGE = 'privatepage';
export const REVIEW_PAGE = 'reviewinprocess';

export const EXPIRY_EXTENSION = [
  { id: 3, type: '3 months' },
  { id: 6, type: '6 months' },
  { id: 9, type: '9 months' },
  { id: 12, type: '12 months' },
  { id: 24, type: '24 months' },
  { id: 1, type: 'Select Manually' }
];

export const ASDIST_PARENTID = [{ en: 8172, hi: 8185, mr: 48903, as: 410338,bn: 410360,
  brx: 410361, doi: 410362, gu:410363, ne:410364, kn:410365, ks:410366, kok:410367, mai:410368, ml:410369,
  mni:410370, or:410371, pa:410372, sa:410373, sat:410374, sd:410375, ta:410376, te:410377, ur:410378}];
export const ASDIST_DEPTH = 3;
export const MONTH = [
  { id: 'january', name: 'January' },
  { id: 'february', name: 'February' },
  { id: 'march', name: 'March' },
  { id: 'april', name: 'April' },
  { id: 'may', name: 'May' },
  { id: 'june', name: 'June' },
  { id: 'july', name: 'July' },
  { id: 'august', name: 'August' },
  { id: 'september', name: 'September' },
  { id: 'october', name: 'October' },
  { id: 'november', name: 'November' },
  { id: 'december', name: 'December' }
];
export const COMPOSITE_INDEX = 1;
export const HEALTH_NUTIRION = 2;
export const EDUCATION_INDEX = 3;
export const AGRICULTURE_WATER = 4;
export const FINANCIAL_SKILL = 5;
export const BASIC_INFRASTRUCTURE = 6;
// FOR LOCAL vpedia.in
// export const site_key = '6LdvGtQUAAAAANY4Vn3rz_CzUXzJfZvrmnWQ-F_4';
// FOR SERVER vikaspedia.in
export const site_key = '6LfC5NUUAAAAAK-CKCb2bVhmGn1NJlHqebcnPBuC';
export const login_captcha_key = '_login';
export const register_captcha_key = '_register';
export const forgotpass_captcha_key = '_forgotpass';
export const comment_captcha_key = '_comment';
export const feedback_captcha_key = '_feedback';
export const loginasuser_captcha_key = '_loginasuser';
export const GET_DEV_IP = '14.139.93.243';
//localhost
//export const SERVICE_WORKER_PATH_PWA = 'http://localhost:4000/serviceWorker.js';
export const FACEBOOK_LINK = 'https://www.facebook.com/vikaspedia';
//vikaspedia.in
export const SERVICE_WORKER_PATH_PWA = 'https://vikaspedia.in/serviceWorker.js';
