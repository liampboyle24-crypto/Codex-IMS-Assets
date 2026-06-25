/**
 * Uppercase tracked label for section eyebrows, category labels, and meta text.
 * Renders in Signal Teal on light sections; Bright Signal on navy sections.
 */
export interface EyebrowProps {
  /** Use Bright Signal (teal-2) for navy/dark section backgrounds */
  dark?: boolean;
  children?: React.ReactNode;
}
