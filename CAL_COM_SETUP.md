# Cal.com Integration Guide

This guide will help you integrate your Cal.com booking system into your website.

## Step 1: Get Your Cal.com Link

1. **Log in to Cal.com**: Go to [cal.com](https://cal.com) and sign in
2. **Get your booking link**: 
   - Your booking link will be: `https://cal.com/your-username`
   - Or a specific event link: `https://cal.com/your-username/30min`
   - You can find this in your Cal.com dashboard under "Event Types"

## Step 2: Configure the CalBooking Component

Open `src/components/Contact.tsx` and update the CalBooking component:

### Option A: Using Embed Mode (Recommended - Shows calendar inline)

```tsx
<CalBooking
  calLink="your-cal-username"
  mode="embed"
  className="w-full"
/>
```

Or with a specific event:

```tsx
<CalBooking
  embedUrl="https://cal.com/your-username/30min?embed=true"
  mode="embed"
  className="w-full"
/>
```

### Option B: Using Button Mode (Opens Cal.com in new tab)

```tsx
<CalBooking
  calLink="your-cal-username"
  mode="button"
  buttonText="Book a Free Consultation"
/>
```

### Option C: Using Inline Button Mode

```tsx
<CalBooking
  calLink="your-cal-username"
  mode="inline"
  buttonText="Schedule Your Call"
/>
```

## Step 3: Update Contact Section

The Contact section now has two tabs:
- **Request Review** - Shows the contact form
- **Book a Call** - Shows the Cal.com booking widget

Update line ~250 in `src/components/Contact.tsx`:

```tsx
<CalBooking
  calLink="YOUR_CAL_COM_USERNAME"
  mode="embed"
  className="w-full"
/>
```

Replace `YOUR_CAL_COM_USERNAME` with your actual Cal.com username.

## Step 4: Add to Hero Section (Optional)

You can also add a Cal.com booking button to the Hero section. Update `src/components/Hero.tsx`:

```tsx
import CalBooking from './CalBooking'

// In the Hero component, add alongside the existing CTA:
<CalBooking
  calLink="your-cal-username"
  mode="button"
  buttonText="Book a Free Call"
  className="mt-4"
/>
```

## Integration Modes Explained

### `embed` Mode
- Shows the Cal.com calendar widget directly on your page
- Best for: Full booking experience without leaving your site
- Requires: `embedUrl` with `?embed=true` parameter or `calLink` (will auto-add embed)

### `button` Mode
- Creates a button that opens Cal.com in a new tab
- Best for: Quick access without taking up space
- Works with: Just `calLink`

### `inline` Mode
- Full-width button that opens Cal.com
- Best for: Prominent call-to-action
- Works with: Just `calLink`

## Getting Your Embed URL

1. Go to your Cal.com event type
2. Click "Embed" or "Share"
3. Copy the embed URL (should include `?embed=true`)
4. Use this as the `embedUrl` prop

Or simply use your username with `mode="embed"` and the component will automatically add the embed parameter.

## Customization

### Change Button Text
```tsx
<CalBooking
  calLink="your-username"
  buttonText="Schedule a Consultation"
/>
```

### Change Position (for button mode)
The button will inherit styling from your site's design system. You can add custom classes:

```tsx
<CalBooking
  calLink="your-username"
  mode="button"
  className="mt-6"
/>
```

## Troubleshooting

### The calendar doesn't appear
- Check that your Cal.com username is correct
- Verify your event type is published/active
- For embed mode, ensure you're using `?embed=true` in the URL

### Styling issues
- The component uses your site's Tailwind CSS classes
- Embed iframe will use Cal.com's default styling
- You can customize the container card styling in `CalBooking.tsx`

### Iframe security errors
- Cal.com supports embedding, so this shouldn't be an issue
- If you see errors, try using `mode="button"` instead of `embed`

## Current Configuration

The Cal.com booking is currently configured in `src/components/Contact.tsx`. To enable it:

1. Replace `YOUR_CAL_COM_USERNAME` with your actual Cal.com username
2. Or provide a full `embedUrl` if you have a specific event link
3. Choose your preferred `mode` (embed, button, or inline)

The component will automatically create the booking interface based on your settings.

## Need Help?

- [Cal.com Documentation](https://cal.com/docs)
- [Cal.com Embed Guide](https://cal.com/docs/embed)
- [Cal.com Support](https://cal.com/support)

