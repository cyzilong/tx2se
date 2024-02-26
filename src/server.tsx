import { Map } from 'ol';
import { FC, useCallback, useState } from 'react';
import { App, Button, Dropdown } from 'antd';
import { findFromItems, serverKey, servers } from '@/config';

interface Props {
  map: Map;
}

const Server: FC<Props> = ({ map }) => {
  const [server, setServer] = useState<string>(
    localStorage.getItem(serverKey) || 'mwjc'
  );

  const handleServerChange = useCallback((e: any) => {
    setServer(e.key);
    localStorage.setItem(serverKey, e.key);
  }, []);

  return (
    <>
      <div>
        <Dropdown
          menu={{ items: servers, onClick: handleServerChange }}
          arrow
          trigger={['click']}
          placement="bottom"
        >
          <Button type="primary" style={{ width: '90px' }}>
            {findFromItems(servers, server)?.label}
          </Button>
        </Dropdown>
      </div>
    </>
  );
};

export default Server;
