/* IMS Typography — One Voice, Many Registers
   Single typeface (Archivo) plays every role through weight,
   size, tracking, and case — never a second family. */
:root {
  /* === Font Families (all resolve to Archivo — One Family Rule) === */
  --font-sans:  'Archivo', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, Helvetica, sans-serif;
  --font-serif: 'Archivo', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Arial, Helvetica, sans-serif;
  --font-mono:  'Archivo', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Arial, Helvetica, sans-serif;

  /* === Type Scale === */

  /* Display — hero headline ONLY */
  --text-display-size:   clamp(2.625rem, 7.2vw, 6rem);
  --text-display-weight: 800;
  --text-display-lh:     0.92;
  --text-display-ls:     -0.03em;

  /* Headline — section-opening (max-width 920px) */
  --text-headline-size:   clamp(2.25rem, 5.2vw, 4.5rem);
  --text-headline-weight: 800;
  --text-headline-lh:     0.95;
  --text-headline-ls:     -0.03em;

  /* Subhead — secondary editorial line under headline */
  --text-subhead-size:   clamp(1.3125rem, 2.25vw, 1.9375rem);
  --text-subhead-weight: 400;
  --text-subhead-lh:     1.34;

  /* Body — running copy, capped at 780px measure */
  --text-body-size:    clamp(1rem, 1.1vw, 1.125rem);
  --text-body-weight:  400;
  --text-body-lh:      1.75;
  --text-body-measure: 780px;

  /* Label — eyebrows, nav, meta, always uppercase */
  --text-label-size:    13px;
  --text-label-size-sm: 11px;
  --text-label-weight:  700;
  --text-label-lh:      1.2;
  --text-label-ls:      0.1em;
  --text-label-ls-wide: 0.13em;
}
