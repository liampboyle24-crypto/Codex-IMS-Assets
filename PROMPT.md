You are acting as a senior creative director, brand systems designer, and front-end production designer. Your job is to create a high-impact executive marketing asset for IMS Technology Services using this repository as the source of truth:

https://github.com/liampboyle24-crypto/Codex-IMS-Assets

Reference the live marketing page here for messaging, tone, structure, and value proposition:

https://managed-services-hosted-site.vercel.app/

Goal:
Create a visually dynamic, upscale editorial marketing asset that would look natural on a Fortune 500 executive’s screen. It should communicate the IMS Managed Services value proposition with authority, restraint, and polish. This should not feel like a generic SaaS landing page, a templated consulting PDF, or AI-generated “corporate nice.” It should feel like a premium executive briefing asset from a serious AV/managed services operator.

Primary deliverables:

1. A polished executive one-pager as responsive HTML/CSS.
2. A 3-slide executive mini-deck as responsive HTML/CSS, optimized for 16:9 presentation use.
3. A short README explaining how to open, review, and export each asset to PDF if needed.

Recommended output paths:

* /executive-one-pager/index.html
* /executive-one-pager/styles.css
* /executive-mini-deck/index.html
* /executive-mini-deck/styles.css
* /executive-mini-deck/README.md
* /executive-one-pager/README.md

Before building:

1. Inspect the repository structure.
2. Read and use the design system files in /Design System.
3. Read the skills in /.codex/skills, especially frontend-design and slides.
4. Use the existing brand assets, logo files, photography, SVGs, animation files, color tokens, spacing tokens, typography tokens, and component guidance where appropriate.
5. Visit or inspect the reference site content from https://managed-services-hosted-site.vercel.app/ and extract the strongest messaging, but do not simply clone the page.
6. Build a distinct executive asset derived from the same brand system.

Creative direction:
The design language should be upscale editorial, precise, architectural, confident, and executive-ready.

Use these concepts as anchors:

* Reliable collaboration starts before the meeting does.
* Install day is not the finish line.
* IMS does not just install AV. IMS operates it.
* Reactive AV creates hidden costs, ticket noise, room distrust, and surprise refresh events.
* IMS provides monitoring, support, reporting, lifecycle planning, AVaaS, and staff augmentation through one accountable operating model.
* The core difference is vendor vs operator.
* Leadership should see ROI, not just invoices.
* AV reliability should become boring again, in the best possible way.

Audience:
CIOs, CFOs, IT directors, operations leaders, facilities leaders, workplace experience leaders, and executive stakeholders evaluating managed AV services.

Tone:
Concise, confident, clear, premium, and grounded. No hype. No fluffy transformation language. No fake stats. No invented claims. No bloated “unlock your potential” copy. Write like this is going to a skeptical executive who has seen a hundred vendor decks.

Design philosophy:
Use the repository design system. Respect the one-family typography approach if that is what the system defines. Use the existing palette and spacing logic. Build from the actual tokens where possible.

The final result should have:

* Strong editorial hierarchy
* Large disciplined typography
* Smart use of whitespace
* Thin rules, precision panels, restrained cards, and structured information
* Coherent visual rhythm across both one-pager and slide deck
* Visual tension between “reactive chaos” and “managed operating model”
* One memorable signature visual system, not many random decorative ideas
* Premium use of IMS navy, white, gold, and supporting neutrals
* High-quality use of existing photography or brand imagery if it supports the story
* Lightweight custom SVG diagrams where useful
* Print/export-friendly layouts

Suggested signature visual concept:
Create an “operating model spine” or “closed-loop command layer” that visually connects the IMS process:
Monitor → Detect → Resolve → Report → Recommend → Refresh

This should feel more like an executive operating model diagram than a cartoon process wheel. It can appear as a vertical spine, ring, rail, data ribbon, or architectural schematic. Make it unique and polished.

One-pager content structure:
The one-pager should fit a clean executive briefing format.

Suggested sections:

1. Hero thesis

   * Headline: “Reliable collaboration starts before the meeting does.”
   * Supporting line: “IMS turns AV from an install-and-react expense into an accountable managed services platform.”
   * Include IMS branding and Liam Boyle contact information where appropriate:
     Liam Boyle
     [lboyle@imsts.com](mailto:lboyle@imsts.com)
     610-361-1870

2. The business problem

   * Explain that rooms often work on day one but drift over time.
   * Hidden costs show up as delayed meetings, support tickets, wasted IT time, poor executive experience, and surprise refresh needs.

3. The IMS shift

   * Contrast “Reactive AV” vs “Managed by IMS.”
   * Reactive AV: discover failures when users walk in, tickets start the process, reporting is anecdotal, refresh is a surprise.
   * Managed by IMS: rooms are monitored, issues are detected earlier, reporting creates visibility, lifecycle planning is built in.

4. The operating model

   * Monitor, Detect, Resolve, Report, Recommend, Refresh.
   * Include a premium visual diagram.

5. The four pillars

   * Service & Support
   * Reporting / 4Sight
   * Staff Augmentation
   * AVaaS
   * Keep this tight. Each pillar should have a clear executive benefit, not a laundry list.

6. The executive outcome

   * Users stop thinking about AV.
   * IT gets time back.
   * Leadership sees performance and ROI.
   * Renewals and refreshes become planned, not panicked.

7. Proof / credibility

   * Use only claims already present in the reference content or repo assets.
   * Include ISO/IEC 27001:2022 Certified if present in source content.
   * Include Integrator of the Year / awards only if already supported by source content in the repo or site.
   * Do not invent supporting claims.

8. CTA

   * “Let’s make your AV boring again.”
   * “One conversation about where your AV stands today. A clear recommendation scoped to your environment. Zero obligation.”
   * Include contact details.

Mini-deck content structure:
Create a 3-slide 16:9 presentation.

Slide 1: The executive problem
Title: “Your rooms work until no one owns them.”
Message: Install day is not the finish line. The operational cost of AV shows up later as delays, tickets, distrust, and surprise budget events.
Visual: Editorial split between “Day One” and “Day One Thousand,” or a quiet timeline showing drift.

Slide 2: The IMS operating model
Title: “We do not hand off the room. We run the room.”
Message: IMS turns AV into a managed operating model with monitoring, support, reporting, lifecycle planning, staffing, and refresh accountability.
Visual: Premium closed-loop or operating spine diagram.

Slide 3: The leadership outcome
Title: “AV reliability becomes measurable.”
Message: Users stop thinking about AV, IT gets time back, leadership sees data, and refresh planning becomes proactive.
Visual: Four outcome panels or a clean executive scorecard.
CTA: Liam Boyle, [lboyle@imsts.com](mailto:lboyle@imsts.com), 610-361-1870.

Visual rules:

* Avoid generic gradients unless they are subtle and clearly tied to the system.
* Avoid random floating blobs, excessive glassmorphism, stock icons, fake dashboards, or cyberpunk “command center” clichés.
* Avoid clutter. Spend boldness in one place.
* Use hairline dividers, typographic contrast, disciplined spacing, and one strong visual motif.
* If using icons, keep them simple, consistent, and subordinate to the layout.
* If using photography, crop it dramatically and make it feel editorial, not decorative.
* Use SVG for diagrams where possible.
* Make sure the assets look good on a large executive display and when exported to PDF.

Technical requirements:

* Build clean semantic HTML and CSS.
* Avoid external dependencies unless already present or clearly justified.
* Keep assets local to the repo.
* Respect accessibility basics, including contrast, readable font sizes, semantic headings, and reduced-motion preference if motion is added.
* Make layouts responsive, but prioritize desktop and PDF/export presentation quality.
* Add print styles for the one-pager and slide deck where helpful.
* No lorem ipsum.
* No placeholder copy.
* No fake client logos.
* No unsupported statistics.
* No generic AI-generated claims.

Process:

1. Inspect the repo and design assets.
2. Summarize your design plan briefly before coding:

   * Visual thesis
   * Layout system
   * Signature motif
   * Typography usage
   * Color usage
   * Asset choices
3. Build the deliverables.
4. Self-critique the result against the brief:

   * Does it feel Fortune 500 executive-ready?
   * Does it clearly communicate IMS’s value?
   * Does the visual system feel coherent?
   * Does anything feel generic, decorative, or AI-generated?
5. Revise once based on your own critique.
6. Provide a final summary of files created or modified and how to preview the work.

Acceptance criteria:

* The one-pager feels like a premium executive briefing sheet, not a web landing page squeezed into a PDF.
* The slide deck feels like a concise boardroom-ready narrative.
* The visual language is coherent with the existing IMS design system.
* The asset clearly explains the IMS Managed Services value proposition.
* The final result is visually dynamic without looking busy.
* The copy is concise, executive-facing, and grounded.
* The deliverables are usable immediately for review and iteration.
