# ElevenLabs Voice Agent Integration Guide

This guide will help you integrate your ElevenLabs voice agent into your website.

## Step 1: Get Your ElevenLabs Agent Information

1. **Log in to your ElevenLabs account**: Go to [elevenlabs.io](https://elevenlabs.io) and sign in
2. **Navigate to Agents**: Click on "Agents" in your dashboard
3. **Select your agent**: Choose the voice agent you want to use
4. **Get integration details**: 
   - Look for "Integration" or "Embed" options
   - You'll need either:
     - **Agent ID**: A unique identifier for your agent
     - **Widget URL**: A URL like `https://elevenlabs.io/convai/agent/{agent-id}`

## Step 2: Configure the Voice Agent Component

Open `src/App.tsx` and update the VoiceAgent component:

### Option A: Using Widget URL (Recommended - Easiest)

```tsx
<VoiceAgent 
  widgetUrl="https://elevenlabs.io/convai/agent/YOUR_AGENT_ID"
  position="bottom-right"
/>
```

Replace `YOUR_AGENT_ID` with your actual agent ID from ElevenLabs.

### Option B: Using Agent ID with Widget Script

```tsx
<VoiceAgent 
  agentId="YOUR_AGENT_ID"
  position="bottom-right"
/>
```

## Step 3: Customize Position

You can position the voice agent button in different corners:

- `bottom-right` (default)
- `bottom-left`
- `top-right`
- `top-left`

Example:
```tsx
<VoiceAgent 
  widgetUrl="YOUR_WIDGET_URL"
  position="bottom-left"
/>
```

## Step 4: Alternative Integration Methods

### Method 1: Direct Script Embed (in index.html)

If you prefer to add the script directly to `index.html`, add this before the closing `</body>` tag:

```html
<script src="https://elevenlabs.io/convai-widget/index.js" data-agent-id="YOUR_AGENT_ID" async></script>
```

### Method 2: Using React SDK

If you want more control, you can install the ElevenLabs React SDK:

```bash
npm install @elevenlabs/convai-react
```

Then use it in your component:

```tsx
import { ConvaiClient } from '@elevenlabs/convai-react'

function App() {
  return (
    <ConvaiClient
      agentId="YOUR_AGENT_ID"
      // Add other configuration options
    />
  )
}
```

## Troubleshooting

### The voice agent button doesn't appear
- Check that you've replaced `YOUR_ELEVENLABS_WIDGET_URL_HERE` with your actual URL
- Verify your agent ID is correct
- Check browser console for any errors

### The widget doesn't load
- Ensure your ElevenLabs account is active
- Check that the agent is published/active
- Verify network requests aren't blocked

### Styling issues
- The component uses Tailwind CSS classes
- You can customize styling by modifying `src/components/VoiceAgent.tsx`
- The button uses your site's accent color (orange) by default

## Need Help?

- [ElevenLabs Documentation](https://elevenlabs.io/docs)
- [ElevenLabs Agents Platform](https://elevenlabs.io/agents)
- [Widget Integration Guide](https://elevenlabs.io/docs/agents-platform/integrate/overview)

## Current Configuration

The voice agent is currently configured in `src/App.tsx`. To enable it:

1. Replace `YOUR_ELEVENLABS_WIDGET_URL_HERE` with your actual widget URL
2. Or use `agentId` prop with your agent ID
3. Customize the `position` prop as needed

The component will automatically create a floating button in the bottom-right corner (or your chosen position) that opens the voice agent when clicked.

