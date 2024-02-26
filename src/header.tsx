import { Map } from 'ol';
import { FC } from 'react';
import Pointer from './pointer';
import Server from './server';

interface Props {
  map: Map;
}
const Header: FC<Props> = ({ map }) => {
  return (
    <div className="header">
      <div className="server events">
        <Server map={map} />
      </div>
      <div className="pointer">
        <Pointer map={map} />
      </div>
    </div>
  );
};

export default Header;
