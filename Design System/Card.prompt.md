export function Badge({ children, variant = 'teal', dark = false, dot = false }) {
  const styles = {
    teal: {
      background: dark ? 'rgba(113,201,242,0.12)' : 'rgba(10,110,168,0.10)',
      color:      dark ? '#71C9F2' : '#0A6EA8',
      border:     dark ? '1px solid rgba(113,201,242,0.30)' : '1px solid rgba(10,110,168,0.20)',
      dotColor:   dark ? '#71C9F2' : '#0A6EA8',
    },
    gold: {
      background: 'rgba(236,174,61,0.08)',
      color:      dark ? '#F5CB7A' : '#C48E22',
      border:     '1px solid rgba(236,174,61,0.30)',
      dotColor:   '#ECAE3D',
    },
    muted: {
      background: dark ? 'rgba(255,255,255,0.05)' : 'rgba(10,31,61,0.05)',
      color:      dark ? '#9fb3c8' : '#4D5D6E',
      border:     dark ? '1px solid rgba(238,241,244,0.18)' : '1px solid rgba(10,31,61,0.12)',
      dotColor:   dark ? '#9fb3c8' : '#4D5D6E',
    },
  };

  const v = styles[variant] || styles.teal;

  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      fontFamily: "'Archivo', ui-sans-serif, system-ui, sans-serif",
      fontSize: '11px',
      fontWeight: 700,
      letterSpacing: '0.10em',
      textTransform: 'uppercase',
      lineHeight: 1.2,
      padding: '6px 12px',
      borderRadius: '999px',
      background: v.background,
      color: v.color,
      border: v.border,
      whiteSpace: 'nowrap',
    }}>
      {dot && (
        <span style={{
          width: '7px',
          height: '7px',
          borderRadius: '50%',
          background: v.dotColor,
          flexShrink: 0,
          boxShadow: variant === 'gold' ? '0 0 0 3px rgba(236,174,61,0.18)' : undefined,
        }} aria-hidden="true" />
      )}
      {children}
    </span>
  );
}
