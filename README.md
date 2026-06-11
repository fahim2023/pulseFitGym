# PulseFit Gym

PulseFit Gym is a responsive, multi-page website designed to promote a modern fitness gym and help potential members easily explore services, compare membership options, and get in touch.

The purpose of this application is to provide users with clear, accessible information about the gym's facilities, classes, and pricing, while guiding them towards taking action such as booking a tour or making an enquiry.

## Value to Users

- Allowing users to quickly understand what the gym offers without confusion
- Helping users compare membership plans to find one that suits their needs and budget
- Making it easy to explore available classes and facilities
- Providing clear calls-to-action that guide users towards contacting the gym or booking a visit
- Offering a responsive design so users can access the site on mobile, tablet, or desktop

---

## Live Site

[https://fahim2023.github.io/pulseFitGym/](https://fahim2023.github.io/pulseFitGym/)

---

## Project Rationale

### Why This Project Was Built

Many local gym websites lack clarity, responsiveness, and a clear path for potential members to take action. PulseFit Gym was built to solve this by creating a professional, accessible, user-focused website that:

- Communicates what the gym offers to a first-time visitor within seconds of landing on the page
- Guides users from awareness → interest → decision, matching the natural journey a prospective gym member takes
- Addresses the specific needs of multiple target audiences

### Target Audiences

**1. First-Time Visitors / Prospective Members**
People researching whether to join. They need to immediately understand the gym's offering, see the facilities, and find a way to take the next step.

**2. Mobile Users**
A significant proportion of gym searches happen on mobile. The site is built mobile-first using Bootstrap 5 to ensure a fully responsive experience across all device sizes.

**3. Returning Members**
People who already attend and want quick access to class schedules, opening hours, and contact information.

**4. The Business Owner**
The goal is to convert website visitors into paying members by presenting a trustworthy brand identity and reducing friction in the enquiry process.

### Design Decisions and Rationale

- **Fixed navigation bar** — Keeps all pages accessible at all times without requiring the user to scroll back up.
- **Hero section with dual CTA** — "Get Started" and "Learn More" cater to users ready to commit and those who need more information, reducing drop-off.
- **Card-based layouts** — Cards let users scan and compare class and membership information quickly.
- **Book a Tour modal on the Gallery page** — Users who have just viewed the facilities are at peak interest. The modal keeps them on the page rather than navigating away.
- **Stats bar (10+ Years, 5000+ Members, 50+ Classes)** — Provides social proof at a glance without requiring long copy.
- **Consistent CTA sections across all pages** — Every page has a clear next step regardless of where the user enters.

---

## User Experience (UX)

### UX Strategy — The 5 Planes of UX

#### 1. Strategy Plane

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

Features included based on the goals above:

- Multi-page website (Home, About, Classes, Membership, Gallery, Contact)
- Responsive navigation bar
- Hero section with clear call-to-action
- Class cards with difficulty, duration, and schedule
- Membership pricing cards with feature comparison
- Image gallery with category labels
- Contact form and "Book a Tour" modal (user-initiated pop-up — Pass 1.6)
- Testimonials carousel on the About page
- Consistent CTA sections across pages

---

#### 3. Structure Plane

- **Home** — Overview of gym benefits, featured classes, and facilities
- **About** — Gym story, mission, values, trainers, and testimonials
- **Classes** — Detailed class offerings and weekly timetable
- **Membership** — Pricing plans and feature comparison
- **Gallery** — Visual showcase of the gym
- **Contact** — Contact details, map, and enquiry form

Navigation is consistent across all pages.

---

#### 4. Skeleton Plane (Wireframes)

Wireframes were created before development to plan layout and content hierarchy for Desktop, Tablet, and Mobile.

### Home Page

![Home Desktop](/src/assets/wireframes/homepage-desktop.png)
![Home Wireframe](src/assets/wireframes/home.png)

Full-width hero with dual CTA, followed by featured classes and a mini facilities gallery to immediately communicate value.

### About Page

![About Desktop](/src/assets/wireframes/aboutdesktop_wireframe.png)
![About Tablet](/src/assets/wireframes/about-tablet.png)
![About Mobile](/src/assets/wireframes/about-mobile.png)
![About Wireframe](src/assets/wireframes/about.png)

Gym story, core values, trainer profiles, and a testimonials carousel to build trust with prospective members.

### Classes Page

![Classes Wireframe](src/assets/wireframes/classes.png)

Class cards with difficulty badge, duration, and schedule, plus a weekly timetable below.

### Membership Page

![Membership Wireframe](src/assets/wireframes/membership.png)

Three pricing tiers side by side with a highlighted "Most Popular" plan.

### Gallery Page

![Gallery Wireframe](src/assets/wireframes/gallery.png)

Responsive 12-image grid with category labels. A "Book a Tour" CTA at the bottom triggers the modal pop-up (Pass 1.6 — user-initiated action).

### Contact Page

![Contact Wireframe](src/assets/wireframes/contact.png)

Contact cards, enquiry form, embedded map, and opening hours in a single view.

### Book a Tour Modal — Pass 1.6

The "Book a Tour" modal satisfies **Pass 1.6** (design the site to allow the user to initiate and control actions such as pop-ups). The modal:

- Only opens when the user explicitly clicks "Book a Tour"
- Can be closed via the × button, clicking the backdrop, or pressing Escape
- Contains a validated form with required fields

---

#### 5. Surface Plane (Visual Design)

- Strong, energetic brand colours defined as CSS variables
- Clear visual hierarchy using headings, spacing, and cards
- High-quality imagery to reinforce a premium gym experience
- Subtle hover effects on cards, buttons, and nav links

---

## Style Guide

### Colour Palette

| Role             | Hex     | Usage                     |
| ---------------- | ------- | ------------------------- |
| Primary          | #ff6b35 | Buttons, highlights, CTAs |
| Primary Dark     | #e5511d | Hover states              |
| Secondary        | #2c3e50 | Text and headings         |
| Light Background | #f8f9fa | Section backgrounds       |
| Dark Background  | #1a1a1a | Navbar and footer         |

All colours are defined as CSS custom properties in `:root` in `custom.css`.

### Typography

- Font: Default Bootstrap font stack (system fonts)
- Headings: Bold, large display sizes for clear hierarchy
- Body: Clean and readable with sufficient line spacing
- Buttons: Letter spacing applied for clarity

### Layout

- Bootstrap 5 mobile-first grid
- Containers, rows, and columns for alignment
- Cards as reusable UI components throughout

---

## User Stories

### Must Have

**User Story 1 — First-Time Visitor**
As a First-Time Visitor I need easy navigation and a user-friendly design, including a responsive layout for my device, so that I can find information quickly and efficiently without frustration.

_Acceptance Criteria:_

- Website is fully responsive across devices and screen sizes
- Layout and navigation are intuitive and clearly structured
- All main sections (Home, About, Classes, Membership, Gallery, Contact) are easy to locate

---

**User Story 2 — Prospective Member**
As a Prospective Member I need clear information about the gym's services, classes, and trainers so that I can decide whether this gym meets my fitness needs.

_Acceptance Criteria:_

- Clear sections for classes, trainers, and facilities
- Content is easy to read and well organised
- Images and descriptions accurately represent the gym

---

**User Story 3 — Mobile User**
As a Mobile User I need the website to display correctly on my phone with readable text and easy-to-tap buttons so that I can browse the site comfortably on a small screen.

_Acceptance Criteria:_

- All content adapts correctly to mobile screen sizes
- Text is readable without zooming
- Buttons and links are large enough to tap on touch devices

---

**User Story 4 — Returning Visitor**
As a Returning Visitor I need quick access to important pages such as classes and contact information so that I can efficiently plan my visits or get in touch with the gym.

_Acceptance Criteria:_

- Navigation links are consistent across all pages
- Contact information is clearly visible and easy to access
- Important pages are reachable within one or two clicks

---

**User Story 5 — Potential Customer**
As a Potential Customer I need clear calls-to-action such as "Get Started" or "Book a Tour" so that I can easily take the next step towards joining the gym.

_Acceptance Criteria:_

- CTA buttons are visible on key pages
- Buttons link to the correct pages or actions
- CTAs are consistent in style across the website

---

### Nice to Have

**User Story 6 — Gallery of Facilities**
As a Prospective Member I need a gallery showing the gym's facilities and environment so that I can visualise what the gym is like before deciding to visit or join.

_Acceptance Criteria:_

- Gallery section displays gym and equipment images
- Images are presented in a clean, responsive layout
- Gallery is easy to find from the main navigation

---

**User Story 7 — Testimonials**
As a Prospective Member I need to read testimonials from existing members so that I can feel confident the gym is trusted and delivers good results.

_Acceptance Criteria:_

- Testimonials section is included with multiple member quotes
- Testimonials are displayed in a readable, consistent card layout
- Section is responsive across all screen sizes

---

## Features

- Responsive design using Bootstrap 5
- Semantic HTML for accessibility
- Reusable navbar, footer, and CTA components
- Image gallery with overlay captions and category badges
- Membership pricing cards with highlighted popular plan
- Contact form with client-side validation
- **Book a Tour modal — user-initiated pop-up (Pass 1.6)**
- Testimonials carousel on the About page
- Weekly class timetable on the Classes page
- Lazy-loaded images in `.webp` format

---

## Technologies Used

- HTML5
- CSS3
- Bootstrap 5
- Font Awesome
- Google Chrome DevTools
- GitHub / GitHub Pages

---

## Development Life Cycle

### Planning Phase

The project began with identifying the target audience and defining business and user goals. Wireframes were created for all six pages across desktop, tablet, and mobile breakpoints before any code was written. A colour palette, typography choices, and layout conventions were agreed in advance and documented in the Style Guide.

### Design Phase

A mobile-first approach was adopted throughout. Bootstrap 5 was chosen for its responsive grid and pre-built components (modals, carousels, cards, forms), allowing more time to be spent on custom styling and content.

CSS custom properties were defined in `:root` so brand colours could be applied consistently across the entire site from a single source.

### Development Phase

Pages were built in the following order, with each reusing the navbar and footer template established on the first:

1. `index.html` — base template, navbar, footer, hero, featured classes, mini gallery
2. `about.html` — gym story, core values, trainer cards, testimonials carousel
3. `classes.html` — class cards with difficulty badges, duration, schedule, weekly timetable
4. `membership.html` — three pricing cards with "Most Popular" badge and feature lists
5. `gallery.html` — 12-image responsive grid with overlay captions, Book a Tour modal
6. `contact.html` — contact cards, enquiry form, embedded map, opening hours

`navbar.js` was written to handle smooth scrolling on in-page anchor links and to close the mobile navbar when the user clicks outside it.

### Testing Phase

Manual testing was carried out throughout development using Chrome DevTools. Final testing covered functionality, usability, responsiveness, and browsers. HTML and CSS were validated using W3C validators before deployment.

### Deployment Phase

The final version was deployed to GitHub Pages from the `main` branch and manually compared against the development version to confirm they matched.

---

## Testing

### Functionality Testing

| Feature                          | Expected Outcome                          | Result | Screenshot                                                               |
| -------------------------------- | ----------------------------------------- | ------ | ------------------------------------------------------------------------ |
| Navigation — Home                | Navigates to Home page                    | Pass   | ![Home](/src/assets/images/navlink-test-1.png)                           |
| Navigation — About               | Navigates to About page                   | Pass   | ![About](/src/assets/images/navlink-test-2.png)                          |
| Navigation — Classes             | Navigates to Classes page                 | Pass   | ![Classes](/src/assets/images/navlink-test-3.png)                        |
| Navigation — Membership          | Navigates to Membership page              | Pass   | ![Membership](/src/assets/images/navlink-test-4.png)                     |
| Navigation — Gallery             | Navigates to Gallery page                 | Pass   | ![Gallery](/src/assets/images/navlink-test-5.png)                        |
| Navigation — Contact             | Navigates to Contact page                 | Pass   | ![Contact](/src/assets/images/navlink-test-6.png)                        |
| CTA — Get Started                | Directs user to membership plans          | Pass   | ![Get Started](/src/assets/images/get_started_to_choose_plan.png)        |
| CTA — Learn More                 | Directs user to About page                | Pass   | ![Learn More](/src/assets/images/learn_more_to_about.png)                |
| CTA — View Membership            | Directs user to membership plans          | Pass   | ![View Membership](/src/assets/images/view_membership_to_chose_plan.png) |
| CTA — Contact Us                 | Directs user to contact form              | Pass   | ![Contact Us](/src/assets/images/contact_us_to_form.png)                 |
| Contact form validation          | Form requires fields before submission    | Pass   | ![Form Validation](/src/assets/images/form-test.png)                     |
| Modal — Open                     | Modal opens when "Book a Tour" is clicked | Pass   | ![Modal Open](/src/assets/images/tour-modal-form.png)                    |
| Modal — Close (× button)         | Modal closes via the close button         | Pass   | ![Modal Close](/src/assets/images/tour-modal-form.png)                   |
| Modal — Close (Escape key)       | Modal closes when Escape is pressed       | Pass   | ![Modal Close](/src/assets/images/tour-modal-form.png)                   |
| Modal — Close (backdrop)         | Modal closes when clicking outside it     | Pass   | ![Modal Close](/src/assets/images/tour-modal-form.png)                   |
| Modal form validation            | All fields required before submission     | Pass   | ![Modal Form](/src/assets/images/tour-modal-form.png)                    |
| Responsive — Mobile (Home)       | Layout stacks correctly on mobile         | Pass   | ![Mobile Home](/src/assets/images/home_mobile.png)                       |
| Responsive — Mobile (About)      | Layout stacks correctly on mobile         | Pass   | ![Mobile About](/src/assets/images/about_mobile.png)                     |
| Responsive — Mobile (Classes)    | Layout stacks correctly on mobile         | Pass   | ![Mobile Classes](/src/assets/images/classes_mobile.png)                 |
| Responsive — Mobile (Membership) | Layout stacks correctly on mobile         | Pass   | ![Mobile Membership](/src/assets/images/membership_mobile.png)           |
| Responsive — Mobile (Gallery)    | Layout stacks correctly on mobile         | Pass   | ![Mobile Gallery](/src/assets/images/gallery_mobile.png)                 |
| Responsive — Mobile (Contact)    | Layout stacks correctly on mobile         | Pass   | ![Mobile Contact](/src/assets/images/contact_mobile.png)                 |
| Responsive — Tablet (Home)       | Grid adjusts correctly on tablet          | Pass   | ![Tablet Home](/src/assets/images/home_tablet.png)                       |
| Responsive — Tablet (About)      | Grid adjusts correctly on tablet          | Pass   | ![Tablet About](/src/assets/images/about_tablet.png)                     |
| Responsive — Tablet (Classes)    | Grid adjusts correctly on tablet          | Pass   | ![Tablet Classes](/src/assets/images/classes_tablet.png)                 |
| Responsive — Tablet (Membership) | Grid adjusts correctly on tablet          | Pass   | ![Tablet Membership](/src/assets/images/membership_tablet.png)           |
| Responsive — Tablet (Gallery)    | Grid adjusts correctly on tablet          | Pass   | ![Tablet Gallery](/src/assets/images/gallery_tablet.png)                 |
| Responsive — Tablet (Contact)    | Grid adjusts correctly on tablet          | Pass   | ![Tablet Contact](/src/assets/images/contact_tablet.png)                 |

---

### Usability Testing

- Navigation is clear and consistent across all pages
- Content is readable with proper spacing and visual hierarchy
- Users can quickly find key information (classes, membership, contact)
- CTAs are clearly visible and guide the user toward a next step

---

### Responsiveness Testing

| Device  | Result                                    |
| ------- | ----------------------------------------- |
| Mobile  | Layout stacks correctly, content readable |
| Tablet  | Grid adjusts appropriately                |
| Desktop | Full layout displayed correctly           |

---

### Browser Testing

| Browser       | Result                        |
| ------------- | ----------------------------- |
| Google Chrome | All features work as expected |
| Firefox       | All features work as expected |

---

### Bugs Found and Fixed

| Bug                                                                          | How it was found                              | Fix Applied                                                                                                                      |
| ---------------------------------------------------------------------------- | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Mobile navbar did not close after clicking a nav link                        | Manual testing on small screen                | Added JavaScript in `navbar.js` to remove the `show` class from `.navbar-collapse` on nav link click                             |
| Mobile navbar stayed open when tapping outside it                            | Manual testing on mobile viewport in DevTools | Added a `document` click listener in `navbar.js` to detect clicks outside `.navbar-collapse` and the toggler, then remove `show` |
| Gallery images displayed at different heights, making the grid uneven        | Visual inspection during development          | Applied `height: 240px` and `object-fit: cover` to `.gallery-img` in `custom.css`                                                |
| HIIT Cardio card on Home page showed "Sun :00 AM" with the hour missing      | Code review during testing                    | Corrected to "Sun 8:00 AM" in `index.html`                                                                                       |
| About-preview cards showed unwanted box-shadow from the global `.card` style | Visual inspection                             | Added targeted CSS overrides for cards in those sections (`border: none; background-color: var(--brand-light)`)                  |

### Known Unfixed Bugs

The Book a Tour modal form and the Contact form do not submit data to a backend server. Both forms validate inputs client-side using Bootstrap's built-in validation. No server-side processing is in scope for this front-end project. A future improvement would be to integrate a service such as EmailJS.

---

### Validation

#### HTML

All HTML pages were validated using the W3C Nu HTML Checker with no errors.

| Page       | Result    | Screenshot                                              |
| ---------- | --------- | ------------------------------------------------------- |
| Home       | No errors | ![HTML — Home](/src/assets/images/index.png)            |
| About      | No errors | ![HTML — About](/src/assets/images/about.png)           |
| Classes    | No errors | ![HTML — Classes](/src/assets/images/classes.png)       |
| Membership | No errors | ![HTML — Membership](/src/assets/images/membership.png) |
| Gallery    | No errors | ![HTML — Gallery](/src/assets/images/gallery.png)       |
| Contact    | No errors | ![HTML — Contact](/src/assets/images/contact.png)       |

#### CSS

The stylesheet was validated using the W3C Jigsaw CSS Validator with no errors.

![CSS Validation](/src/assets/images/custom_css.png)

---

### User Story Testing

| User Story                                                       | Acceptance Criteria Met                                                                | How it is met                                                                                                           | Screenshot                                                   |
| ---------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| US1 — First-Time Visitor: easy navigation and responsive layout  | Responsive across devices; intuitive nav; all sections easy to locate                  | Responsive navbar on all pages links to all 6 sections; Bootstrap grid ensures layout adapts to all screen sizes        | ![Navbar](/src/assets/images/navlink-test-1.png)             |
| US2 — Prospective Member: clear info on classes and trainers     | Clear sections for classes and trainers; content well organised                        | Classes page shows cards with difficulty, duration, and schedule; About page includes trainer profiles with specialisms | ![Classes](/src/assets/images/navlink-test-3.png)            |
| US3 — Mobile User: correct display on phone with readable text   | Content adapts to mobile; text readable without zooming; buttons easy to tap           | Bootstrap mobile-first grid ensures all pages adapt to small screens; buttons sized for touch                           | ![Mobile Home](/src/assets/images/home_mobile.png)           |
| US4 — Returning Visitor: quick access to classes and contact     | Consistent nav on all pages; contact info clearly visible; key pages within 1–2 clicks | Persistent navbar on every page; contact details in footer and on Contact page                                          | ![Nav](/src/assets/images/navlink-test-1.png)                |
| US5 — Potential Customer: clear CTAs to take the next step       | CTAs visible on key pages; link to correct pages; consistent style                     | "Get Started", "View Membership", "Book a Tour", and "Contact Us" CTAs are present on every key page                    | ![CTA](/src/assets/images/get_started_to_choose_plan.png)    |
| US6 — Gallery of Facilities: see gym environment before visiting | Gallery section with gym images; responsive layout; easy to find from nav              | Gallery page shows 12 images in a responsive grid with category labels; accessible from navbar                          | ![Gallery](/src/assets/images/navlink-test-5.png)            |
| US7 — Testimonials: read reviews from existing members           | Testimonials section with multiple quotes; consistent card layout; responsive          | Bootstrap carousel on the About page displays three member testimonials with star ratings and names                     | ![Testimonials](/src/assets/images/testimonials_desktop.png) |

---

## Performance and Accessibility

- Images optimised and served in `.webp` format
- Lazy loading applied to non-critical images
- Semantic HTML (`header`, `main`, `footer`, `section`, `nav`) used throughout
- Descriptive `alt` text on all images
- Lighthouse audits used to identify improvements

---

## Deployment

The site was deployed using GitHub Pages.

**Steps:**

1. Push project to GitHub repository
2. Navigate to repository Settings
3. Enable GitHub Pages from the `main` branch
4. Access the deployed site via the provided URL

---

## Credits and External Sources

Design and development: **Fahim Adam**

### External Libraries and Frameworks

| Source       | Link                                         | Use                                        |
| ------------ | -------------------------------------------- | ------------------------------------------ |
| Bootstrap 5  | [getbootstrap.com](https://getbootstrap.com) | CSS framework, grid system, and components |
| Font Awesome | [fontawesome.com](https://fontawesome.com)   | Icons used throughout the site             |

---

## Acknowledgements

- Code Institute learning materials
- Lighthouse and Chrome DevTools for testing guidance
