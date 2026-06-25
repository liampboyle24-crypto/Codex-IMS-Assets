/**
 * Structural surface container. Sharp 3px "drafting precision" radius —
 * intentionally not the soft 8–16px radius of generic SaaS cards.
 *
 * @startingPoint section="Display" subtitle="Light and navy surface cards" viewport="700x280"
 */
export interface CardProps {
  /** Light (paper bg, ambient shadow) or dark (gradient navy bg) */
  variant?: 'light' | 'navy';
  /** Internal padding */
  padding?: 'sm' | 'md' | 'lg';
  /** Inline style overrides applied to the root element */
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
