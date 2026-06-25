export function Eyebrow({ children, dark = false }) {
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: "'Archivo', ui-sans-serif, system-ui, -apple-system, sans-serif",
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      fontSize: '13px',
      lineHeight: 1.2,
      fontWeight: 700,
      color: dark ? '#71C9F2' : '#0A6EA8',
      WebkitFontSmoothing: 'antialiased',
    }}>
      {children}
    </span>
  );
}
