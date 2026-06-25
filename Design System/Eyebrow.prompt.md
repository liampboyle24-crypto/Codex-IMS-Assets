export function Card({ children, variant = 'light', padding = 'md', style }) {
  const padMap = { sm: '20px', md: '28px', lg: '40px' };
  const pad = padMap[padding] || '28px';

  const base = {
    position: 'relative',
    padding: pad,
    borderRadius: '3px',
    border: '1px solid',
    boxSizing: 'border-box',
    ...(variant === 'navy' ? {
      background: 'linear-gradient(165deg, #002D56, #001830 78%)',
      borderColor: 'rgba(238,241,244,0.18)',
      color: '#EEF1F4',
      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
    } : {
      background: '#FFFFFF',
      borderColor: 'rgba(10,31,61,0.10)',
      color: '#0A1F3D',
      boxShadow: '0 24px 80px rgba(7,27,52,0.12)',
    }),
    ...style,
  };

  return <div style={base}>{children}</div>;
}
