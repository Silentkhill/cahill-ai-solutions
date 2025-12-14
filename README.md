# Cahill AI Solutions - Marketing Website

A premium one-page marketing website for Cahill AI Solutions, built with React, Vite, and TypeScript.

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Customization Guide

### Changing Business Information

#### Business Name
- **File**: `index.html` (line 30 - title and meta tags)
- **File**: `src/components/Navigation.tsx` (line 18)
- **File**: `src/components/Footer.tsx` (line 19)
- **File**: `index.html` (line 47 - LocalBusiness schema)

#### Contact Email
- **File**: `src/components/Contact.tsx` (line 60 - mailto link)
- **File**: `src/components/Footer.tsx` (line 35 - email link)

#### Phone Number
- **File**: `src/components/Contact.tsx` (line 70 - phone display)

#### Location
- **File**: `index.html` (line 50-54 - LocalBusiness schema address)
- **File**: `src/components/Footer.tsx` (line 30 - location display)

### Updating Pricing

#### One-Time Packages
- **File**: `src/components/Services.tsx` (lines 4-30)
- Edit the `oneTimePackages` array to change names, prices, descriptions, and features

#### Monthly Plans
- **File**: `src/components/Services.tsx` (lines 32-70)
- Edit the `monthlyPlans` array to change names, prices, descriptions, and features

### Updating Content

#### Hero Section
- **File**: `src/components/Hero.tsx`
- Modify headline, subheadline, and CTA buttons

#### Benefits Section
- **File**: `src/components/Benefits.tsx`
- Edit the `benefits` array (lines 3-30)

#### How It Works
- **File**: `src/components/HowItWorks.tsx`
- Edit the `steps` array (lines 3-25)

#### Monthly Insights Sample
- **File**: `src/components/MonthlyInsights.tsx`
- Update the sample report content (lines 15-60)

#### Use Cases
- **File**: `src/components/UseCases.tsx`
- Edit the `useCases` array (lines 3-50)

#### About Section
- **File**: `src/components/About.tsx`
- Update the about text (lines 12-25)

#### FAQ
- **File**: `src/components/FAQ.tsx`
- Edit the `faqs` array (lines 3-50)

### Contact Form Configuration

#### Form Endpoint
- **File**: `src/components/Contact.tsx` (lines 45-55)
- Replace the placeholder API call with your actual endpoint:
```typescript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
})
```

#### Calendly Link
- **File**: `src/components/Contact.tsx` (line 80)
- Replace `https://calendly.com/cahillaisolutions` with your actual Calendly URL

### Analytics Setup

#### Google Analytics 4
1. Add your GA4 script to `index.html` in the `<head>` section
2. Update `src/utils/analytics.ts`:
```typescript
export const trackEvent = (eventName: string, eventData?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, eventData)
  }
}
```

#### Plausible Analytics
1. Add Plausible script to `index.html`
2. Update `src/utils/analytics.ts`:
```typescript
export const trackEvent = (eventName: string, eventData?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && (window as any).plausible) {
    (window as any).plausible(eventName, { props: eventData })
  }
}
```

### SEO Configuration

#### Meta Tags
- **File**: `index.html` (lines 7-20)
- Update description, keywords, and Open Graph tags

#### LocalBusiness Schema
- **File**: `index.html` (lines 23-38)
- Update the JSON-LD schema with your business details

### Styling & Branding

#### Colors
- **File**: `tailwind.config.js`
- Modify the `navy` and `accent` color palettes

#### Fonts
- **File**: `index.html` (line 22)
- Change the Google Fonts import
- **File**: `tailwind.config.js` (line 20)
- Update the font family

## Deployment

### Netlify (Recommended)

1. Build the project:
```bash
npm run build
```

2. Deploy options:
   - **Drag & Drop**: Drag the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)
   - **Git Integration**: Connect your repository to Netlify
   - **CLI**: Install Netlify CLI and run `netlify deploy --prod`

3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Other Platforms

#### Vercel
```bash
npm i -g vercel
vercel
```

#### GitHub Pages
1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Run: `npm run deploy`

## Project Structure

```
├── index.html              # Main HTML file with SEO meta tags
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
├── src/
│   ├── main.tsx            # React entry point
│   ├── App.tsx             # Main app component
│   ├── index.css           # Global styles
│   ├── components/         # React components
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── Benefits.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Services.tsx
│   │   ├── MonthlyInsights.tsx
│   │   ├── UseCases.tsx
│   │   ├── About.tsx
│   │   ├── FAQ.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── BackToTop.tsx
│   └── utils/
│       └── analytics.ts    # Analytics helper functions
└── README.md               # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved. © Cahill AI Solutions

