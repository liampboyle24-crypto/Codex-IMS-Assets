/* IMS Spacing & Radius System */
:root {
  /* === Layout === */
  --space-gutter-mobile: 16px;
  --space-gutter-tight:  18px;
  --space-gutter:        24px;
  --space-section:       clamp(88px, 11vw, 158px);
  --container-max:       1180px;
  --container-wide-max:  1280px;

  /* === Base Scale (4px grid) === */
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  20px;
  --space-6:  24px;
  --space-7:  28px;
  --space-8:  32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-14: 56px;
  --space-16: 64px;
  --space-20: 80px;

  /* === Corner Radius — three distinct radii by function === */
  --radius-hairline:   2px;    /* Thin rules, progress bar */
  --radius-structural: 3px;    /* Panels, cards — "drafting precision" */
  --radius-tile:       12px;   /* Icon containment tiles */
  --radius-tile-lg:    16px;   /* Icon tiles on narrow viewports */
  --radius-pill:       999px;  /* ALL interactive controls */
  --radius-circle:     50%;    /* Status dots, loop nodes */
}
