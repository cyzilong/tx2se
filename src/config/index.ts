const getMapCfg = () => {
  const reduce = 256 * 3;
  const cfg = {
    extent: [
      -4096.0 + reduce * 1.2,
      -4096.0 + reduce * 1.2,
      4096.0 - reduce * 1.2,
      4096.0 - reduce * 1.5,
    ],
    minZoom: 1,
    maxZoom: 5,
    maxResolution: 1.0,
    tileExtent: [-4096.0, -4096.0, 4096.0, 4096.0],
    resolutions: [0],
  };
  cfg.resolutions = Array.from(
    { length: cfg.maxZoom + 1 },
    (_, z) => Math.pow(2, cfg.maxZoom - z) * cfg.maxResolution
  );
  return cfg;
};

export const cfg = getMapCfg();

export const servers = [
  {
    label: '莫问今朝',
    key: 'mwjc',
  },
  {
    label: '血战',
    key: 'xz',
  },
  {
    label: '纵横四海',
    key: 'zhsh',
  },
  {
    label: '兵临城下',
    key: 'blcx',
  },
  {
    label: '2008',
    key: 's2008',
  },
];

export const serverMap = servers.reduce((acc, cur) => {
  acc[cur.label] = cur.key;
  return acc;
}, {} as Record<string, string>);

export const serverMapReverse = servers.reduce((acc, cur) => {
  acc[cur.key] = cur.label;
  return acc;
}, {} as Record<string, string>);

export const areas = [
  {
    label: '英魂原',
    key: 'yhy',
  },
  {
    label: '朔风漠',
    key: 'sfm',
  },
  {
    label: '陨石野',
    key: 'ysy',
  },
];

export const areasMap = areas.reduce((acc, cur) => {
  acc[cur.key] = cur.label;
  return acc;
}, {} as Record<string, string>);

export const classifications = [
  {
    label: '普通宝箱',
    key: 'normal',
  },
  {
    label: '高级宝箱',
    key: 'superior',
  },
  {
    label: '燧人灵焰',
    key: 'fire',
  },
  {
    label: '书籍',
    key: 'book',
  },
];

export const daily = [
  {
    label: '随机宝箱',
    alias: '每日宝箱',
    key: 'random',
  },
  {
    label: '沙豪猪',
    alias: '沙豪猪',
    key: 'pig',
  },
  {
    label: '爆爆刀豆',
    alias: '爆爆刀豆',
    key: 'bean',
  },
  {
    label: '岩盐',
    alias: '岩盐',
    key: 'salt',
  },
];

interface Item {
  img: string;
  name: string;
}

export const icons: Record<string, Item> = {
  ss: {
    img: '/assets/ss.png',
    name: '神石',
  },
  smt: {
    img: '/assets/smt.png',
    name: '燧明坛',
  },
  txz: {
    img: '/assets/txz.png',
    name: '天行阵',
  },
  random: {
    img: '/assets/random.png',
    name: '随机宝箱',
  },
  pig: {
    img: '/assets/pig.png',
    name: '沙豪猪',
  },
  bean: {
    img: '/assets/bean.png',
    name: '爆爆刀豆',
  },
  salt: {
    img: '/assets/salt.png',
    name: '岩盐',
  },
  normal: {
    img: '/assets/normal.png',
    name: '普通宝箱',
  },
  superior: {
    img: '/assets/superior.png',
    name: '高级宝箱',
  },
  fire: {
    img: '/assets/fire.png',
    name: '燧人灵焰',
  },
  book: {
    img: '/assets/book.png',
    name: '书籍',
  },
};

export const serverKey = 'server';

export interface ItemType {
  label: string;
  key: string;
}

export const findFromItems = (items: ItemType[], key: string) => {
  return items.find((item) => item!.key === key);
};
