Structural surface container with 3px "drafting precision" radius. Use for hero cards, stat panels, proof blocks, and operator statements.

```jsx
// Light card — paper bg, ambient shadow
<Card variant="light" padding="md">
  <p>Running copy or stat content here.</p>
</Card>

// Navy card — gradient bg, hairline border
<Card variant="navy" padding="lg">
  <p style={{ color: '#EEF1F4' }}>Content on dark.</p>
</Card>

// With custom styles
<Card variant="light" style={{ maxWidth: 480 }}>
  <p>Constrained width card.</p>
</Card>
```

Notable variants/props:
- `variant`: "light" (white, ambient shadow) | "navy" (gradient deep navy, hairline border)
- `padding`: "sm" (20px) | "md" (28px, default) | "lg" (40px)
- Icon tiles inside a card use a 12px tile radius — a distinct shape intentionally different from the 3px card radius
