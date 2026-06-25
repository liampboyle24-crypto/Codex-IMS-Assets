/**
 * Pill-shaped label chip for badges, credential strips, and status indicators.
 * Gold variant follows the Rare Gold Rule — use for high-value proof moments only.
 */
export interface BadgeProps {
  /** Color variant */
  variant?: 'teal' | 'gold' | 'muted';
  /** Adjusts colors for navy/dark section backgrounds */
  dark?: boolean;
  /** Shows a colored status dot before the label text */
  dot?: boolean;
  children?: React.ReactNode;
}
