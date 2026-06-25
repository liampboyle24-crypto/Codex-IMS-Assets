Pill-shaped label for badges, credential strips, and status indicators. Gold variant follows the Rare Gold Rule.

```jsx
// Teal — default interactive label
<Badge variant="teal">AV Managed Services</Badge>

// Gold — high-value proof moment (use max once per section)
<Badge variant="gold" dot>Established 1997</Badge>

// Muted — meta/secondary label
<Badge variant="muted">Credential</Badge>

// On dark background
<Badge variant="teal" dark dot>Live Monitoring</Badge>
<Badge variant="gold" dark>Active Contract</Badge>
```

Notable variants/props:
- `variant`: "teal" (interactive) | "gold" (rare proof — max 1–2× per section) | "muted" (neutral meta)
- `dark`: boolean — adjusts all colors for navy/dark backgrounds
- `dot`: boolean — adds a colored status dot; use for live/active states
