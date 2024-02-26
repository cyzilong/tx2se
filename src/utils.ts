import { daily, serverMap } from '@/config';

export const findParentWithClass = (
  element: HTMLElement,
  className: string
) => {
  let parent = element.parentElement;

  while (parent) {
    if (parent.classList.contains(className)) {
      return parent;
    }
    parent = parent.parentElement;
  }

  return null;
};

// 将坐标转换为可读字符串
export const stringifyPoint = (point: [number, number]) => {
  const x = point[0] > 0 ? '东' : '西';
  const y = point[1] > 0 ? '北' : '南';
  return [
    `${x}：${Math.abs(Math.ceil(point[0]))}`,
    `${y}：${Math.abs(Math.ceil(point[1]))}`,
  ];
};
