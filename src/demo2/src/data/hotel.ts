/**
 * ホテル レディシー サイトデータ
 *
 * 既存サイト (https://kyobashi-hotel-redisy.com/) から抽出した内容をもとに構成。
 * `TODO:` が付いた項目はホテル様への確認が必要な箇所。
 */

export const hotel = {
  name: 'ホテル レディシー',
  nameEn: 'HOTEL REDISY',
  tel: '06-6352-0666',
  telHref: 'tel:0663520666',
  address: '大阪府大阪市都島区東野田町4-12-8',
  // 既存サイトでは「徒歩3分」(title) と「徒歩5分」(本文) が混在していた。
  // TODO: 実測どちらが正か要確認。ひとまず控えめな5分を採用。
  accessTrain: 'JR大阪環状線・京阪本線・大阪メトロ長堀鶴見緑地線「京橋駅」北口より徒歩約5分',
  accessCar: '阪神高速「南森町IC」より約8分',
  // TODO: 駐車場の有無・台数・料金。既存サイトに記載なし。車利用の多い業態のため要追加。
  parking: null as string | null,
  mapUrl: 'https://maps.google.com/?q=大阪府大阪市都島区東野田町4-12-8',
  nearestStationWalk: '京橋駅から徒歩5分',
} as const;

/** 客室。既存サイトには部屋番号と写真のみで説明文が存在しないため要補完。 */
export type Room = {
  no: string;
  /** TODO: 各室が スイート / デラックス どちらかホテル様に確認 */
  type: 'スイート' | 'デラックス' | null;
  images: string[];
  /** TODO: 部屋ごとの紹介文。現状は未設定 */
  description: string | null;
  /** TODO: 料金ランク(A〜I)との対応。これが判れば部屋ページに料金を直接出せる */
  rank: string | null;
};

export const rooms: Room[] = [
  { no: '201', type: null, images: ['/img/room/201.jpg'], description: null, rank: null },
  { no: '203', type: null, images: ['/img/room/203.jpg'], description: null, rank: null },
  { no: '205', type: null, images: ['/img/room/205.jpg'], description: null, rank: null },
  { no: '206', type: null, images: ['/img/room/206.jpg'], description: null, rank: null },
  { no: '207', type: null, images: ['/img/room/207.jpg', '/img/room/207_2.jpg'], description: null, rank: null },
  { no: '302', type: null, images: ['/img/room/302.jpg'], description: null, rank: null },
  { no: '403', type: null, images: ['/img/room/403.jpg'], description: null, rank: null },
  { no: '502', type: null, images: ['/img/room/502.jpg', '/img/room/502_2.jpg'], description: null, rank: null },
];

export const heroSlides = [
  '/img/slide/slide_01.jpg',
  '/img/slide/slide_02.jpg',
  '/img/slide/slide_03.jpg',
  '/img/slide/slide_04.jpg',
];

/**
 * 料金。既存サイトはランクA〜Iの9段階だが、公開されているのは各区分の下限〜上限のみ。
 * TODO: ランク別の正確な金額表をもらって差し替える。
 */
export const priceSummary = [
  {
    label: '平日',
    note: '月〜木',
    rest: { time: '11:00〜24:00 / 1時間', from: 2480, to: 6200 },
    stay: { time: '21:00〜11:00', from: 5500, to: 11500 },
  },
  {
    label: '金曜・祝前日',
    note: '',
    rest: { time: '11:00〜24:00 / 1時間', from: 2480, to: 6200 },
    stay: { time: '21:00〜11:00', from: 6050, to: 12000 },
  },
  {
    label: '土曜・祝日',
    note: '',
    rest: { time: '11:00〜24:00 / 1時間', from: 2680, to: 6200 },
    stay: { time: '22:00〜11:00', from: 6600, to: 12000 },
  },
  {
    label: '日曜・祝日',
    note: '祝後',
    rest: { time: '11:00〜24:00 / 1時間', from: 2680, to: 6200 },
    stay: { time: '21:00〜11:00', from: 6600, to: 12000 },
  },
];

export const serviceTime = {
  weekday: [
    { time: '6:00〜12:00', duration: 'IN から5時間' },
    { time: '12:00〜15:00', duration: 'IN から4時間' },
    { time: '15:00〜18:00', duration: 'IN から3時間' },
  ],
  weekend: [
    { time: '6:00〜12:00', duration: 'IN から3時間' },
    { time: '12:00〜15:00', duration: 'IN から2時間' },
  ],
};

export const extension = { unit: '15分毎', from: 840, to: 1000 };

/** 既存サイトの service.html が「準備中」のままだったため、room.html の記載から再構成 */
export const amenities = [
  { label: 'ジェットバス', note: '全室完備' },
  { label: 'レインシャワー', note: '全室完備' },
  { label: 'VOD', note: '1,000タイトル以上' },
  { label: '冷蔵庫', note: '' },
  { label: '電子レンジ', note: '' },
  { label: '電気ポット', note: '' },
  { label: '空気清浄機', note: '' },
  { label: '入浴剤', note: '' },
  { label: 'クレンジングオイル', note: '' },
  { label: '化粧水', note: '' },
  { label: 'フェイスマスク', note: '' },
  { label: 'ヘアアイロン', note: 'フロント貸出' },
];

export const nav = [
  { label: '客室', labelEn: 'ROOM', href: '/room' },
  { label: '料金', labelEn: 'PRICE', href: '/price' },
  { label: '設備・アメニティ', labelEn: 'SERVICE', href: '/service' },
  { label: 'クーポン', labelEn: 'COUPON', href: '/coupon' },
  { label: 'アクセス', labelEn: 'ACCESS', href: '/access' },
];

export const yen = (n: number) => `¥${n.toLocaleString('ja-JP')}`;
