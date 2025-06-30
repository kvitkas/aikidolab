### `/src/pages/` - Main Website Pages

Each file corresponds to a specific URL route:

- **`Index.tsx`** → **Homepage (`/`)**
  - Hero section with company branding
  - Client showcase testimonials
  - AI process explanation
  - Pricing plans
  - Contact form
- **`About.tsx`** → **About Page (`/about`)**

  - Company story and mission
  - Core values presentation
  - Team member profiles
  - Company timeline and milestones
  - Call-to-action for consultations

- **`Research.tsx`** → **Research Page (`/research`)**

  - Research areas and focus
  - Current projects and publications
  - Technical capabilities
  - Research team information

- **`Booking.tsx`** → **Booking Page (`/booking`)**

  - Consultation scheduling interface
  - Service selection forms
  - Contact information collection

- **`NotFound.tsx`** → **404 Error Page (`/*`)**

  - Custom 404 page with navigation
  - Error logging and user redirection

- **`Policy.tsx`** → **Privacy Policy (`/policy`)**

  - Privacy policy and data handling

- **`Tos.tsx`** → **Terms of Service (`/tos`)**
  - Terms of service and legal information

### `/src/components/` - Reusable UI Components

Components used across multiple pages:

#### **Website Sections:**

- **`Hero.tsx`** → Homepage hero section with branding
- **`ClientShowcase.tsx`** → Customer testimonials and logos
- **`AIProcess.tsx`** → AI implementation process explanation
- **`Pricing.tsx`** → Service pricing plans and packages
- **`Contact.tsx`** → Contact form and information
- **`Navigation.tsx`** → Site header with menu and toggles
- **`Footer.tsx`** → Site footer with links and branding

#### **Visual Effects:**

- **`CherryBlossomBackground.tsx`** → Animated cherry blossom particles
- **`CherryBlossomCursor.tsx`** → Custom cursor with cherry blossom trail

### `/src/components/ui/` - Base UI Library

Foundational components used throughout the site:

- **`button.tsx`** → Buttons (navigation, CTAs, forms)
- **`card.tsx`** → Content cards (team members, pricing plans, testimonials)
- **`input.tsx`** → Form inputs (contact forms, booking)
- **`textarea.tsx`** → Text areas (contact form message)
- **`label.tsx`** → Form labels
- **`select.tsx`** → Dropdown selectors (booking form)
- **`badge.tsx`** → Status badges (team skills, milestones)
- **`tooltip.tsx`** → Hover tooltips (navigation toggles)
- **`dialog.tsx`** → Modal dialogs
- **`sheet.tsx`** → Slide-out panels
- **`toast.tsx`** → Notification toasts
- **`toaster.tsx`** → Toast notification system
- **`sonner.tsx`** → Alternative toast system
- **`skeleton.tsx`** → Loading placeholders
- **`separator.tsx`** → Visual dividers
- **`calendar.tsx`** → Date selection (booking)
- **`form.tsx`** → Form validation utilities
- **`sidebar.tsx`** → Mobile navigation sidebar
- **Various other utilities** → Pagination, toggles, carousels, etc.

### `/src/hooks/` - Custom Hooks (react)

- **`use-mobile.tsx`** → Mobile device detection for responsive design
- **`use-toast.ts`** → Toast notification management

### `/src/lib/` - Util Libs

- **`utils.ts`** → Helper functions (className merging, validation)
- **`utils.spec.ts`** → Unit tests for utilities

### `/src/images/` - Static Assets

- **`ui/cherry-blossom.webp`** → Main cherry blossom graphic for animations
- **`ui/download.png`** → Alternative cherry blossom image
- **`icons/cherry-blossom-favicon.ico`** → Browser favicon
- **`icons/cherry-blossom-apple-touch.png`** → Mobile app icon

### `/public/` - Assests

- **`robots.txt`** → SEO crawler instructions

## Website Info

```
Homepage (/)
├── Hero Section
├── Client Showcase
├── AI Process
├── Pricing Plans
└── Contact Form

About (/about)
├── Company Story
├── Core Values
├── Team Profiles
└── Timeline

Research (/research)
├── Research Areas
├── Current Projects
└── Publications

Booking (/booking)
├── Service Selection
├── Consultation Types
└── Contact Forms

Footer Links
├── Privacy Policy (/policy)
└── Terms of Service (/tos)
```

For any issues, please contact Reza Ahan at rezaahan06@gmail.com.
All rights reserved, 2025.
