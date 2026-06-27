// ============================================================
// 多言語UIテキスト
// ============================================================
export const T = {
  ja: {
    inputLabel: 'フレーズ・表現を入力',
    inputPlaceholder: '例：「よろしくお願いします」「눈치」「空気を読む」',
    analyzeBtn: '解説する →',
    analyzingBtn: '解析中...',
    situationLabel: 'シチュエーション設定（任意）',
    sceneLabel: '📍 場面・シチュエーション',
    occupationLabel: '👤 話者の職業・立場',
    customLabel: '✏️ 自由入力',
    customPlaceholder: '例：結婚式のスピーチ、取引先への謝罪...',
    resetBtn: '✕ リセット',
    quickLabel: 'よく調べられる表現',
    analyzingMsg: 'ネイティブ視点で解析中...',
    analyzingCtx: 'シチュエーションを踏まえて解析中...',
    sectionNuance: '核心ニュアンス',
    sectionCompare: '日韓の文脈比較',
    sectionExamples: '使用例',
    sectionTip: 'ネイティブのコツ',
    sectionMistake: 'よくある間違い',
    panelJa: '🇯🇵 日本語視点',
    panelKo: '🇰🇷 한국어 시점',
    tipIcon: '🎯',
    mistakeIcon: '⚠️',
    noteIcon: '💡',
    errorLabel: 'エラーが発生しました',
    apiKeyHint: 'Vercelの環境変数 ANTHROPIC_API_KEY を設定してください。',
  },
  ko: {
    inputLabel: '표현・문구 입력',
    inputPlaceholder: '예：「よろしくお願いします」「눈치」「空気を読む」',
    analyzeBtn: '해설하기 →',
    analyzingBtn: '분석 중...',
    situationLabel: '상황 설정（선택 사항）',
    sceneLabel: '📍 장면・상황',
    occupationLabel: '👤 화자의 직업・입장',
    customLabel: '✏️ 직접 입력',
    customPlaceholder: '예：결혼식 스피치, 거래처에 사과하는 상황...',
    resetBtn: '✕ 초기화',
    quickLabel: '자주 검색되는 표현',
    analyzingMsg: '분석 중...',
    analyzingCtx: '상황을 고려하여 분석 중...',
    sectionNuance: '핵심 뉘앙스',
    sectionCompare: '일한 맥락 비교',
    sectionExamples: '사용 예시',
    sectionTip: '네이티브 팁',
    sectionMistake: '흔한 실수',
    panelJa: '🇯🇵 일본어 관점',
    panelKo: '🇰🇷 한국어 관점',
    tipIcon: '🎯',
    mistakeIcon: '⚠️',
    noteIcon: '💡',
    errorLabel: '오류가 발생했습니다',
    apiKeyHint: 'Vercel 환경 변수 ANTHROPIC_API_KEY 를 설정해 주세요。',
  },
};

// ============================================================
// シチュエーション
// ============================================================
export const SITUATIONS = {
  ja: [
    { label: '指定なし',         value: '' },
    { label: '🤝 ビジネス全般', value: 'ビジネス・職場全般' },
    { label: '🥂 接待・会食',   value: '接待や会食の席' },
    { label: '📧 メール・文書', value: 'ビジネスメールや文書' },
    { label: '👋 初対面',       value: '初対面・自己紹介の場面' },
    { label: '💑 恋愛・デート', value: '恋愛・デートの場面' },
    { label: '👨‍👩‍👧 家族・家庭', value: '家族や家庭内での会話' },
    { label: '🎓 学校・勉強',   value: '学校や勉強の場面' },
    { label: '🛒 買い物・お店', value: '買い物やお店でのやり取り' },
    { label: '🍺 飲み会・友人', value: '友人との飲み会やカジュアルな集まり' },
    { label: '📱 SNS・チャット', value: 'SNSやチャットでのやり取り' },
  ],
  ko: [
    { label: '지정 없음',         value: '' },
    { label: '🤝 비즈니스 전반', value: '비즈니스・직장 전반' },
    { label: '🥂 접대・회식',    value: '접대나 회식 자리' },
    { label: '📧 이메일・문서',  value: '비즈니스 이메일이나 문서' },
    { label: '👋 첫 만남',       value: '첫 만남・자기소개 상황' },
    { label: '💑 연애・데이트',  value: '연애・데이트 상황' },
    { label: '👨‍👩‍👧 가족・가정', value: '가족이나 가정 내 대화' },
    { label: '🎓 학교・공부',    value: '학교나 공부 상황' },
    { label: '🛒 쇼핑・가게',    value: '쇼핑이나 가게에서의 대화' },
    { label: '🍺 술자리・친구',  value: '친구와의 술자리나 캐주얼한 모임' },
    { label: '📱 SNS・채팅',     value: 'SNS나 채팅에서의 대화' },
  ],
};

// ============================================================
// 職業
// ============================================================
export const OCCUPATIONS = {
  ja: [
    { label: '指定なし',            value: '' },
    { label: '💼 会社員',          value: '一般的な会社員' },
    { label: '👔 営業・接客',      value: '営業職・接客業' },
    { label: '🏥 医療・福祉',      value: '医療・福祉関係者' },
    { label: '🏫 教師・講師',      value: '教師・講師・教育関係者' },
    { label: '💻 エンジニア・IT',  value: 'エンジニア・IT関係者' },
    { label: '🎨 クリエイター',    value: 'デザイナー・クリエイター' },
    { label: '⚖️ 士業・法律',      value: '弁護士・会計士などの士業' },
    { label: '🍳 飲食・料理',      value: '飲食業・料理人' },
    { label: '✈️ 観光・ガイド',    value: '観光業・通訳・ガイド' },
    { label: '🎤 芸能・メディア',  value: '芸能・メディア関係者' },
  ],
  ko: [
    { label: '지정 없음',           value: '' },
    { label: '💼 회사원',          value: '일반 회사원' },
    { label: '👔 영업・서비스',    value: '영업직・서비스업' },
    { label: '🏥 의료・복지',      value: '의료・복지 종사자' },
    { label: '🏫 교사・강사',      value: '교사・강사・교육 관계자' },
    { label: '💻 엔지니어・IT',    value: '엔지니어・IT 관계자' },
    { label: '🎨 크리에이터',      value: '디자이너・크리에이터' },
    { label: '⚖️ 법조・전문직',    value: '변호사・회계사 등 전문직' },
    { label: '🍳 음식・요리',      value: '음식업・요리사' },
    { label: '✈️ 관광・가이드',    value: '관광업・통역・가이드' },
    { label: '🎤 방송・미디어',    value: '방송・미디어 관계자' },
  ],
};

// ============================================================
// クイック検索サンプル
// ============================================================
export const EXAMPLES = [
  { phrase: 'よろしくお願いします', lang: 'ja' },
  { phrase: 'お世話になっております', lang: 'ja' },
  { phrase: '空気を読む', lang: 'ja' },
  { phrase: 'いただきます', lang: 'ja' },
  { phrase: '눈치', lang: 'ko' },
  { phrase: '잘 부탁드립니다', lang: 'ko' },
  { phrase: '화이팅', lang: 'ko' },
  { phrase: '어떻게 지내세요', lang: 'ko' },
];

// ============================================================
// ニュアンスタグのスタイル
// ============================================================
export const NUANCE_STYLE = {
  'タメ口':   { bg: '#e8f5e9', color: '#2e7d32' },
  'スラング': { bg: '#e8f5e9', color: '#2e7d32' },
  '日常会話': { bg: '#e8f5e9', color: '#2e7d32' },
  '일상회화': { bg: '#e8f5e9', color: '#2e7d32' },
  '반말':     { bg: '#e8f5e9', color: '#2e7d32' },
  '요注意':   { bg: '#fff3e0', color: '#e65100' },
  '要注意':   { bg: '#fff3e0', color: '#e65100' },
  '주의':     { bg: '#fff3e0', color: '#e65100' },
  '敬語':     { bg: '#f3e5f5', color: '#6a1b9a' },
  '존댓말':   { bg: '#f3e5f5', color: '#6a1b9a' },
  '丁寧語':   { bg: '#f3e5f5', color: '#6a1b9a' },
  'ビジネス': { bg: '#e8eaf6', color: '#3949ab' },
  '비즈니스': { bg: '#e8eaf6', color: '#3949ab' },
  '書き言葉': { bg: '#e8eaf6', color: '#3949ab' },
  '문어체':   { bg: '#e8eaf6', color: '#3949ab' },
};
