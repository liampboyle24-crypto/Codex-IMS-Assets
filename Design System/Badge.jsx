Primary action component for all conversion CTAs and secondary exploratory actions.

```jsx
// Primary — always scrolls to #contact (conversion point)
<Button variant="primary" icon href="#contact">Engage IMS</Button>

// Primary without icon (e.g. nav CTA)
<Button variant="primary" size="sm" href="#contact">Contact</Button>

// Ghost on light section
<Button variant="ghost" href="#how">See the Model</Button>

// Ghost on navy section
<Button variant="ghost" dark href="#how">See the Model</Button>

// Disabled state
<Button variant="primary" icon disabled>Coming Soon</Button>
```

Notable variants/props:
- `variant`: "primary" (navy fill + gold icon badge) | "ghost" (transparent, hairline border)
- `size`: "md" (52px min-height, default) | "sm" (40px, for nav CTAs)
- `icon`: boolean — animated gold arrow badge; primary CTAs should almost always use it
- `dark`: boolean — adjusts ghost colors for navy/dark section backgrounds
- Hover: `translateY(-2px)` lift + deepened shadow; active: scale 0.97
