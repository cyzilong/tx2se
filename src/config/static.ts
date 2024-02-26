import { icons } from '.';

export interface MarkRes {
  coordinate: [number, number];
  type: keyof typeof icons;
  remark: string;
}

export const staticPoint: MarkRes[] = [
  {
    coordinate: [-1033, -1760],
    type: 'ss',
    remark: '绝雁关',
  },
  {
    coordinate: [898, 112],
    type: 'ss',
    remark: '红堡营地',
  },
  {
    coordinate: [1625, 1440],
    type: 'ss',
    remark: '反抗军大营',
  },
  {
    type: 'txz',
    remark: '天行阵·惊沙源',
    coordinate: [1649, 411],
  },
  {
    type: 'txz',
    remark: '天行阵·龙脊坡',
    coordinate: [1809, -277],
  },
  {
    type: 'txz',
    remark: '天行阵·折戟之地',
    coordinate: [1500, -1623],
  },
  {
    type: 'txz',
    remark: '天行阵·无衣乡',
    coordinate: [1846, -979],
  },
  {
    type: 'txz',
    remark: '天行阵·三岔口',
    coordinate: [562, -1110],
  },
  {
    type: 'txz',
    remark: '天行阵·望戎川',
    coordinate: [888, -428],
  },
  {
    type: 'txz',
    remark: '天行阵·驼峰山',
    coordinate: [820, -1819],
  },
  {
    type: 'txz',
    remark: '天行阵·赤渊',
    coordinate: [1199, -865],
  },
  {
    type: 'txz',
    remark: '天行阵·红堡营地',
    coordinate: [798, 171],
  },
  {
    type: 'txz',
    remark: '天行阵·绝雁关',
    coordinate: [-1125, -1221],
  },
  {
    type: 'txz',
    remark: '天行阵·鬼哭岭',
    coordinate: [-549, -202],
  },
  {
    type: 'txz',
    remark: '天行阵·野马沟',
    coordinate: [230, -416],
  },
  {
    type: 'txz',
    remark: '天行阵·枭谷北',
    coordinate: [75, -914],
  },
  {
    type: 'txz',
    remark: '天行阵·枭谷南',
    coordinate: [14, -1539],
  },
  {
    type: 'txz',
    remark: '天行阵·狱法山',
    coordinate: [-443, -1332],
  },
  {
    type: 'txz',
    remark: '天行阵·枯海',
    coordinate: [-373, -713],
  },
  {
    type: 'txz',
    remark: '天行阵·隐月坛',
    coordinate: [-1456, -1688],
  },
  {
    type: 'txz',
    remark: '天行阵·绝雁谷底',
    coordinate: [-806, -847],
  },
  {
    type: 'txz',
    remark: '天行阵·止戈坡',
    coordinate: [-1405, -570],
  },
  {
    type: 'txz',
    remark: '天行阵·龙战野',
    coordinate: [-981, -148],
  },
  {
    type: 'txz',
    remark: '天行阵·落星峡',
    coordinate: [-1840, -408],
  },
  {
    type: 'txz',
    remark: '天行阵·孤鹜岬',
    coordinate: [-1820, -1087],
  },
  {
    type: 'txz',
    remark: '天行阵·反抗军大营',
    coordinate: [1641, 1520],
  },
  {
    type: 'txz',
    remark: '天行阵·余烬谷',
    coordinate: [1071, 1288],
  },
  {
    type: 'txz',
    remark: '天行阵·断剑坑',
    coordinate: [786, 1806],
  },
  {
    type: 'txz',
    remark: '天行阵·业火裂谷',
    coordinate: [222, 1155],
  },
  {
    type: 'txz',
    remark: '天行阵·修罗刑场',
    coordinate: [117, 1714],
  },
  {
    type: 'txz',
    remark: '天行阵·氐巫营',
    coordinate: [-368, 1626],
  },
  {
    type: 'txz',
    remark: '天行阵·蚩尤营',
    coordinate: [-548, 1181],
  },
];

export const dailyRandom: MarkRes[] = [
  { coordinate: [-763, -484], type: 'random', remark: '' },
  { coordinate: [-375, 26], type: 'random', remark: '' },
  { coordinate: [208, -1012], type: 'random', remark: '' },
  { coordinate: [-1613, -1513], type: 'random', remark: '' },
  { coordinate: [-901, -1031], type: 'random', remark: '' },
  { coordinate: [-72, -551], type: 'random', remark: '' },
  { coordinate: [-1339, -352], type: 'random', remark: '' },
  { coordinate: [313, -608], type: 'random', remark: '' },
  { coordinate: [58, -119], type: 'random', remark: '' },
  { coordinate: [-1150, -679], type: 'random', remark: '' },
  { coordinate: [-155, -808], type: 'random', remark: '' },
  { coordinate: [337, -1541], type: 'random', remark: '' },
  { coordinate: [-913, -232], type: 'random', remark: '' },
  { coordinate: [-425, -335], type: 'random', remark: '' },
  { coordinate: [-1382, -1904], type: 'random', remark: '' },
  { coordinate: [-1151, -1406], type: 'random', remark: '' },
  { coordinate: [-1465, -1055], type: 'random', remark: '' },
  { coordinate: [1396, 236], type: 'random', remark: '' },
  { coordinate: [1946, -708], type: 'random', remark: '' },
  { coordinate: [677, -271], type: 'random', remark: '' },
  { coordinate: [686, -842], type: 'random', remark: '' },
  { coordinate: [932, -1092], type: 'random', remark: '' },
  { coordinate: [1768, -1883], type: 'random', remark: '' },
  { coordinate: [1467, -799], type: 'random', remark: '' },
  { coordinate: [1216, -1661], type: 'random', remark: '' },
  { coordinate: [600, -1751], type: 'random', remark: '' },
  { coordinate: [1625, -1138], type: 'random', remark: '' },
  { coordinate: [1914, -1329], type: 'random', remark: '' },
  { coordinate: [474, -1288], type: 'random', remark: '' },
  { coordinate: [1187, -510], type: 'random', remark: '' },
  { coordinate: [1118, 7], type: 'random', remark: '' },
  { coordinate: [-268, 1152], type: 'random', remark: '' },
  { coordinate: [-767, 1362], type: 'random', remark: '' },
  { coordinate: [1113, 1892], type: 'random', remark: '' },
  { coordinate: [813, 1483], type: 'random', remark: '' },
  { coordinate: [-550, 1845], type: 'random', remark: '' },
  { coordinate: [32, 1400], type: 'random', remark: '' },
  { coordinate: [1093, 1329], type: 'random', remark: '' },
  { coordinate: [554, 1299], type: 'random', remark: '' },
  { coordinate: [-257, 1747], type: 'random', remark: '' },
  { coordinate: [662, 1509], type: 'random', remark: '' },
  { coordinate: [-595, 1614], type: 'random', remark: '' },
  { coordinate: [1577, 1537], type: 'random', remark: '' },
  { coordinate: [350, 1878], type: 'random', remark: '' },
  { coordinate: [1053, 1084], type: 'random', remark: '' },
  { coordinate: [1923, 1086], type: 'random', remark: '' },
  { coordinate: [-458, 1414], type: 'random', remark: '' },
  { coordinate: [31, 1920], type: 'random', remark: '' },
  { coordinate: [1814, 1328], type: 'random', remark: '' },
];
