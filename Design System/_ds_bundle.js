/* IMS Elevation — Ambient Lift, Never Hard Edges
   All shadows are large-blur, low-opacity.
   No tight, dark, high-opacity drop shadow anywhere. */
:root {
  /* Ambient — default resting elevation for light-surface cards */
  --shadow-soft:   0 24px 80px rgba(7, 27, 52, 0.12);

  /* Card — more present, for surfaces needing clearer separation */
  --shadow-card:   0 18px 50px rgba(7, 27, 52, 0.24);

  /* Button */
  --shadow-button:       0 14px 36px rgba(7, 27, 52, 0.22);
  --shadow-button-hover: 0 18px 46px rgba(7, 27, 52, 0.30);

  /* Sheen — one-pixel inset top highlight (simulates single light source) */
  --shadow-sheen:        inset 0 1px 0 rgba(255, 255, 255, 0.72);
  --shadow-sheen-strong: inset 0 1px 0 rgba(255, 255, 255, 0.92);

  /* Signal Glow — RESERVED for live-status motifs only (pulse diagram, status dots)
     Do NOT use on buttons, cards, or generic hover states. */
  --glow-teal: 0 0 0 8px rgba(113, 201, 242, 0.20), 0 0 32px rgba(10, 110, 168, 0.50);
  --glow-gold: 0 0 0 4px rgba(236, 174, 61, 0.18);
}
