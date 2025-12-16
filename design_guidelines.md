# Design Guidelines: Sobremesas Festivas Landing Page

## Design Approach
**Reference-Based:** French pâtisserie aesthetics with high-conversion landing page patterns (inspired by premium culinary education platforms and CRO-optimized sales pages)

## Color Palette
- **Background:** Cream Beige (#F5F0E6)
- **Primary Text:** Charcoal Gray (#3C4650)
- **Accents:** Terracotta (#A85D48) and Matte Gold
- **CTA Buttons:** Dark Gray (#2C3E50) with white text; hover state lightens slightly
- **Visual Style:** Elegant, minimalist, sophisticated French pâtisserie aesthetic

## Typography
- **Headings:** Playfair Display (serif, elegant)
- **Body Text:** Lato (sans-serif, clean)
- **Implementation:** Google Fonts via CDN

## Layout System
- **Spacing:** Tailwind units of 4, 6, 8, 12, 16, 20 (e.g., p-4, py-8, mb-12)
- **Containers:** max-w-7xl for main content, max-w-4xl for text-focused sections
- **Mobile-First:** Fully responsive with breakpoints at sm, md, lg, xl

## Page Structure (Mandatory Order)

### 1. Header
- Centered logo text: "Brüske Pâtisserie" (elegant typography)
- Small "Área do Aluno" button (right-aligned)

### 2. Hero Section
- **H1 Headline:** "Lucre 3x Mais neste Natal com Sobremesas Francesas Sofisticadas (e Sem Leite Condensado)"
- **Subheadline:** "Descubra como se diferenciar da concorrência com doces finos, econômicos e que seus clientes vão amar."
- **Video Placeholder:** Gray div with play icon (simulating VSL)
- **Primary CTA:** Large button "QUERO O EBOOK AGORA"
- **Anchor Pricing:** Below button: "De R$97 por 7x de R$7,83"

### 3. Benefits Section (Objection Breaker)
- **Title:** "Por que esse E-book é diferente?"
- **4 Icon Cards:** 
  - Real Economy (Cheap Ingredients)
  - French Techniques (Added Value)
  - Zero Sugar Overload (Balance)
  - Total Support
- Grid layout: 1 column mobile, 2-4 columns desktop

### 4. Product Showcase
- Grid of 4 dessert images: Pavlova, Rabanada, Terrine, Guirlanda
- Use Unsplash placeholders (keywords: dessert, cake)
- Elegant captions below each photo
- 2x2 grid on desktop, single column mobile

### 5. Social Proof
- **Title:** "O que as alunas estão dizendo"
- 3 testimonial boxes styled like WhatsApp/Instagram screenshots
- Focus on profit results and taste quality
- Include student names/locations

### 6. Author Bio
- Photo placeholder (left side)
- Text content (right side)
- Highlight: École Ducasse training, French authority
- 2-column layout desktop, stacked mobile

### 7. Guarantee Seal
- 7-day unconditional money-back guarantee
- Visual seal/badge
- Risk-reversal copy

### 8. FAQ (Interactive Accordion)
- Questions:
  - "Serve para iniciantes?"
  - "Como acesso?"
  - "Tem certificado?"
- Click to expand/collapse functionality

### 9. Footer
- Copyright notice
- Privacy Policy link
- Terms of Use link

## Component Library
- **Buttons:** Dark gray (#2C3E50) with subtle hover lightening, rounded corners
- **Cards:** White or very light backgrounds with subtle shadows
- **Icons:** FontAwesome via CDN
- **Accordion:** Smooth expand/collapse transitions

## Images
- **Hero:** Video placeholder (gray background with play icon)
- **Showcase Grid:** 4 dessert images from Unsplash (professional food photography)
- **Author Bio:** Professional headshot placeholder (left-aligned)
- **Testimonials:** Screenshot-style boxes (no actual images needed)

## Copywriting Tone
- Persuasive, focusing on pain point: "expensive condensed milk"
- Emphasize: profit, recognition, differentiation
- Urgency triggers in CTAs
- Professional yet approachable

## Interactions
- Smooth scroll navigation
- FAQ accordion open/close
- Button hover states (subtle lightening)
- Mobile menu if needed

## Responsive Behavior
- Mobile-first approach
- Single column on mobile for all sections
- Multi-column grids on tablet/desktop
- Touch-friendly interactive elements