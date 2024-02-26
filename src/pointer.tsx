import { stringifyPoint } from './utils';
import { Map } from 'ol';
import { FC, useEffect, useState } from 'react';
import { Button } from 'antd';
import dayjs from 'dayjs';

interface Props {
  map: Map;
}
const Pointer: FC<Props> = ({ map }) => {
  return (
    <div style={{ color: 'yellow' }}>
      {dayjs().format('YYYY-MM-DD')} 随机宝箱
    </div>
  );
};

export default Pointer;
