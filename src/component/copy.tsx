import { CSSProperties } from 'react';

const styles: Record<string, CSSProperties> = {
  copy: {
    width: '100%',
    fontSize: 14,
    padding: '16px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textShadow: '0 0 3px rgba(0, 0, 0, 1)',
    color: 'green',
    pointerEvents: 'none',
    userSelect: 'none',
  },
  highlight: {
    fontWeight: 'normal',
    margin: '0 3px',
    color: 'yellow',
  },
};

const styles2: Record<string, CSSProperties> = {
  copy: {
    width: '100%',
    fontSize: 12,
    padding: '16px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textShadow: '0 0 3px rgba(0, 0, 0, 0.1)',
    color: 'green',
    pointerEvents: 'none',
    userSelect: 'none',
  },
  highlight: {
    fontWeight: 'normal',
    margin: '0 3px',
    color: 'blue',
  },
};
export const Copy = (props?: any) => {
  props = props || { type: 2 };
  if (props.type === 1) {
    return (
      <div style={styles.copy}>
        本程序由
        <b style={styles.highlight}>初音未来</b>
        提供
      </div>
    );
  }
  return (
    <div style={styles2.copy}>
      本程序由
      <b style={styles2.highlight}>初音未来</b>
      提供
    </div>
  );
};
