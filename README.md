# PulseFit Gym

PulseFit Gym is a responsive, multi-page website designed to promote a modern fitness gym and help potential members easily explore services, compare membership options, and get in touch.

The purpose of this application is to provide users with clear, accessible information about the gym’s facilities, classes, and pricing, while guiding them towards taking action such as booking a tour or making an enquiry.

## Value to Users

This website provides value by:

- Allowing users to quickly understand what the gym offers without confusion
- Helping users compare membership plans to find one that suits their needs and budget
- Making it easy to explore available classes and facilities
- Providing clear calls-to-action that guide users towards contacting the gym or booking a visit
- Offering a responsive design so users can access the site on mobile, tablet, or desktop

By focusing on clarity, structure, and ease of navigation, the site improves the overall user experience and helps users make informed decisions about joining the gym.

---

## Live Site

- (https://fahim2023.github.io/pulseFitGym/)

---

## User Experience (UX)

### UX Strategy – The 5 Planes of UX

#### 1. Strategy Plane

The primary goal of this project is to attract potential gym members by clearly communicating the gym’s offerings and encouraging enquiries or tour bookings.

**Business Goals**

- Promote PulseFit Gym and its facilities
- Increase membership enquiries
- Encourage users to book a tour
- Clearly present pricing and class information

**User Goals**

- Learn what the gym offers
- View available classes and facilities
- Compare membership options
- Easily contact the gym or book a tour

---

#### 2. Scope Plane

Based on the goals above, the following features were included:

- Multi-page website (Home, About, Classes, Membership, Gallery, Contact)
- Responsive navigation bar
- Hero section with clear call-to-action
- Class cards with difficulty, duration, and schedule
- Membership pricing cards with feature comparison
- Image gallery with category labels
- Contact form and “Book a Tour” modal
- Consistent CTA sections across pages

---

#### 3. Structure Plane

The information architecture was designed to be simple and intuitive:

- **Home** – Overview of gym benefits, featured classes, and facilities
- **About** – Gym story, mission, values, and trainers
- **Classes** – Detailed class offerings
- **Membership** – Pricing plans and feature comparison
- **Gallery** – Visual showcase of the gym
- **Contact** – Contact details and enquiry form

Navigation is consistent across all pages and follows common user expectations.

---

#### 4. Skeleton Plane (Wireframes)

Wireframes were created before development to plan layout and content hierarchy for:

- Desktop
- Tablet
- Mobile

### Home Page

![Home Desktop](/src/assets/wireframes/homepage-desktop.png)

### About Page

![About Desktop](/src/assets/wireframes/aboutdesktop_wireframe.png)
![About Tablet](/src/assets/wireframes/about-tablet.png)
![About Mobile](/src/assets/wireframes/about-mobile.png)

Key design decisions included:

- Prominent hero section with CTA
- Card-based layouts for classes and memberships
- Image-heavy gallery with readable overlays
- Forms placed prominently and clearly labelled

---

#### 5. Surface Plane (Visual Design)

- Colour palette based on strong, energetic brand colours
- Consistent typography using Bootstrap defaults with custom styling
- Clear visual hierarchy using headings, spacing, and cards
- High-quality imagery to reinforce a premium gym experience
- Subtle hover effects to improve interactivity

---

## Style Guide

### Colour Palette

The PulseFit Gym website uses a consistent colour scheme to create a strong and energetic brand identity:

- Primary Colour: #ff6b35 (used for buttons, highlights, and CTAs)
- Primary Dark: #e5511d (hover states)
- Secondary Colour: #2c3e50 (text and headings)
- Light Background: #f8f9fa (section backgrounds)
- Dark Background: #1a1a1a (navbar and footer)

These colours are defined using CSS variables in the root selector to ensure consistency across the site.

---

### Typography

- Font: Default Bootstrap font stack (system fonts)
- Headings: Bold, large display sizes for clear hierarchy
- Body Text: Clean and readable with sufficient spacing
- Buttons: Uppercase styling with increased letter spacing

---

### Layout & Structure

- Built using Bootstrap 5 grid system
- Mobile-first responsive design
- Consistent use of:
  - Containers for layout alignment
  - Rows and columns for structure
  - Cards for reusable UI components

---

### Components

Reusable components are used across the site for consistency:

- Navigation bar (fixed-top)
- Cards (classes, membership, trainers)
- CTA sections
- Footer

---

### Imagery

- Images are used to enhance engagement and showcase facilities
- All images are optimised in `.webp` format
- Lazy loading is applied where appropriate

---

### UI Consistency

- Consistent spacing using Bootstrap utilities
- Uniform button styles across all pages
- Repeated layout patterns for familiarity
- Clear visual hierarchy using headings and spacing

---

## User Stories

### New Users

- As a First-Time Visitor I need easy navigation and a user-friendly design, including a responsive layout for my device So that I can find information quickly and efficiently without frustration.
- As a Prospective Member I need clear information about the gym’s services, classes, and trainers So that I can decide whether this gym meets my fitness needs.
- As a new user, I want to view membership prices clearly.

### Returning Users

- As a Returning Visitor I need quick access to important pages such as classes and contact information
  So that I can efficiently plan my visits or get in touch with the gym.

### Business Owner

- As a business owner, I want users to enquire about memberships.
- As a business owner, I want to encourage tour bookings.
- As a business owner, I want the website to look professional and trustworthy.

---

## Features

- Responsive design using Bootstrap 5
- Semantic HTML for accessibility
- Reusable components (navbar, footer, CTA sections)
- Image gallery with overlay captions
- Membership cards with highlighted popular plan
- Contact form and modal tour booking form
- Lazy-loaded images for performance
- Modern `.webp` image format

---

## Technologies Used

- HTML5
- CSS3
- Bootstrap 5
- Font Awesome
- Google Chrome DevTools
- GitHub

---

## Testing

### Manual Testing

- Navigation links tested on all pages
- Forms tested for required fields
- Responsive layout tested on multiple screen sizes
- Buttons and CTAs tested for correct behaviour

### Validation

#### HTML

All HTML pages were tested using the W3C Nu HTML Checker and passed with no errors.

- Home: ![HTML Validation - Home](/src/assets/images/index.png)
- About: ![HTML Validation - About](/src/assets/images/about.png)
- Classes: ![HTML Validation - Classes](/src/assets/images/classes.png)
- Membership: ![HTML Validation - Membership](/src/assets/images/membership.png)
- Gallery: ![HTML Validation - Gallery](/src/assets/images/gallery.png)
- Contact: ![HTML Validation - Contact](/src/assets/images/contact.png)

#### CSS

The CSS stylesheet was tested using the W3C CSS Validator and passed with no errors.

![CSS Validation](/src/assets/images/custom_css.png)

### User Story Testing

- Users can find class and membership information easily
- Users can contact the gym without confusion
- Users can navigate the site intuitively

### Browser Testing

- Chrome
- Firefox

---

## Performance & Accessibility

- Images optimised and served in `.webp` format
- Lazy loading applied to non-critical images
- Semantic HTML and descriptive alt text used
- Lighthouse audits used to identify improvements

---

## Deployment

The site was deployed using GitHub Pages.

**Steps:**

1. Push project to GitHub repository
2. Navigate to repository settings
3. Enable GitHub Pages from the main branch
4. Access the deployed site via the provided URL

---

## Credits

- Design and development: **Fahim Adam**
- Icons: Font Awesome
- Framework: Bootstrap 5

---

## Acknowledgements

- Code Institute learning materials
- Lighthouse and Chrome DevTools for testing guidance
