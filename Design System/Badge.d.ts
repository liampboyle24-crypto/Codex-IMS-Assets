export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled = false,
  icon = false,
  dark = false,
}) {
  const [hovered, setHovered] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);

  const isGhost = variant === 'ghost';
  const isSm = size === 'sm';

  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    minHeight: isSm ? '40px' : '52px',
    borderRadius: '999px',
    padding: isSm ? '10px 16px' : (icon ? '15px 8px 15px 22px' : '15px 22px'),
    border: '1px solid transparent',
    textDecoration: 'none',
    fontFamily: "'Archivo', ui-sans-serif, system-ui, -apple-system, sans-serif",
    fontSize: isSm ? '11px' : '13px',
    fontWeight: 700,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    lineHeight: 1.2,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    userSelect: 'none',
    WebkitFontSmoothing: 'antialiased',
    transition: 'transform 0.15s cubic-bezier(0.23,1,0.32,1), box-shadow 0.2s cubic-bezier(0.23,1,0.32,1)',
    transform: pressed ? 'translateY(-1px) scale(0.97)' : (hovered && !disabled ? 'translateY(-2px)' : 'none'),
    ...(isGhost ? {
      background: dark ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.36)',
      color: dark ? '#EEF1F4' : '#002D56',
      borderColor: dark ? 'rgba(238,241,244,0.18)' : 'rgba(10,31,61,0.16)',
      boxShadow: 'none',
    } : {
      background: '#002D56',
      color: '#EEF1F4',
      borderColor: 'transparent',
      boxShadow: hovered && !disabled
        ? '0 18px 46px rgba(7,27,52,0.30)'
        : '0 14px 36px rgba(7,27,52,0.22)',
    }),
  };

  const iconStyle = {
    display: 'inline-grid',
    placeItems: 'center',
    flexShrink: 0,
    width: '30px',
    height: '30px',
    borderRadius: '999px',
    background: '#ECAE3D',
    color: '#1A1A1A',
    transition: 'transform 0.2s cubic-bezier(0.34,1.56,0.64,1)',
    transform: hovered && !disabled ? 'translate(3px,-2px) scale(1.08)' : 'none',
  };

  const handlers = {
    onMouseEnter: () => !disabled && setHovered(true),
    onMouseLeave: () => { setHovered(false); setPressed(false); },
    onMouseDown:  () => !disabled && setPressed(true),
    onMouseUp:    () => setPressed(false),
  };

  const inner = (
    <>
      {children}
      {icon && (
        <span style={iconStyle} aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </span>
      )}
    </>
  );

  if (href) {
    return <a href={href} style={baseStyle} {...handlers}>{inner}</a>;
  }

  return (
    <button
      style={baseStyle}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      {...handlers}
    >
      {inner}
    </button>
  );
}
