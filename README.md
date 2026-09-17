# Meng Socheata Portfolio

Build a modern, clean, cozy, single-page personal portfolio website.

Overall Goal
Create a personal portfolio website that feels minimal, warm, elegant, and professional, while still having a modern developer/AI aesthetic.

The website should be a single-page scrolling experience. There should be no separate pages for About, Projects, Contact, etc. Instead, visitors should scroll naturally through different sections of the same page.

The design should feel polished but not overly complicated or flashy.

Visual Design
Style
Minimal
Cozy
Modern
Professional
Slightly futuristic
Lots of whitespace
Soft rounded corners
Subtle shadows
Smooth animations
Avoid excessive visual effects
Color Palette
Use a warm gradient-based color system.

Primary gradient:

#6366F1 → #8B5CF6 → #EC4899

Use this gradient subtly rather than covering the entire website with it.

Suggested usage:

Gradient text for important headings
Gradient buttons
Subtle gradient backgrounds
Gradient borders or decorative elements
Very subtle gradient glow effects
Base colors:

Background: warm off-white / very light neutral
Primary text: dark charcoal
Secondary text: muted gray
Cards: white or slightly warm off-white
Borders: very subtle gray
The overall result should feel soft and cozy rather than neon or overly colorful.

Page Structure
Create the following sections in this order:

1. Navigation
A minimal sticky navigation bar.

Include:

Logo/name on the left
About
Projects
Experience
Skills
Contact
Navigation items should smoothly scroll to the corresponding section.

Keep the navbar simple and clean.

2. Hero Section
The first screen should immediately communicate who I am and what I do.

Include:

Small introduction text
Large headline
Short professional description
Primary CTA: "View My Work"
Secondary CTA: "Contact Me"
Optional small social links
Use a large, elegant headline with subtle gradient text.

Add a small decorative visual element, but keep it minimal.

The hero section should have enough whitespace to feel premium and uncluttered.

3. About Section
Create a concise introduction about me.

Include:

Short biography
What I am interested in
My areas of expertise
A few quick facts/statistics
Use a clean two-column layout on desktop and a stacked layout on mobile.

4. Skills Section
Display my technical skills in a visually clean way.

Organize them into categories such as:

Programming
AI / Machine Learning
Web Development
Tools & Technologies
Use small rounded skill badges/cards.

Do not make this section look like a generic skill-bar template.

Avoid percentage progress bars.

5. Projects Section
This should be one of the main sections of the portfolio.

Create beautiful project cards containing:

Project title
Short description
Technologies used
GitHub link
Live demo link if available
Project image/thumbnail
Use a responsive grid.

Cards should have:

Rounded corners
Subtle border
Soft hover animation
Slight elevation on hover
Clean typography
Keep the animations subtle.

6. Experience / Education Section
Create a clean timeline-style section.

Each item should contain:

Position / degree
Organization / university
Date
Short description
Important achievements
Use a vertical timeline on desktop and a simpler stacked layout on mobile.

7. Contact Section
Create a simple and welcoming contact section.

Include:

Short message such as "Let's build something together."
Email
GitHub
LinkedIn
Optional contact form
The contact section should be visually distinct using a subtle gradient background.

8. Footer
Keep the footer minimal.

Include:

Name
Copyright
Social links
Animations & Interactions
Use subtle animations throughout the website.

Include:

Smooth scrolling
Fade-in animations when sections enter the viewport
Gentle hover effects
Button hover transitions
Project card hover effects
Navbar transition when scrolling
Avoid:

Excessive motion
Large parallax effects
Distracting animations
Long loading animations
Animations should feel smooth and premium.

Respect prefers-reduced-motion for accessibility.

Responsive Design
The website must work extremely well on:

Desktop
Laptop
Tablet
Mobile
Use a mobile-first responsive approach.

On mobile:

Collapse the navigation into a hamburger menu
Stack multi-column layouts
Make buttons touch-friendly
Ensure typography remains readable
Avoid horizontal scrolling
Typography
Use a modern, highly readable font.

Suggested combination:

Inter
Geist
Plus Jakarta Sans
Use a clear typography hierarchy:

Large bold hero heading
Medium section headings
Comfortable body text
Muted secondary text
Do not use too many different fonts.

Code Quality & Architecture
This is very important.

Write the project using clean, maintainable, production-quality code.

Follow best practices:

Use reusable React components
Keep components small and focused
Avoid duplicated code
Use semantic HTML
Use meaningful component and variable names
Keep data separate from presentation where appropriate
Create reusable UI components
Use a clear folder structure
Keep styling organized
Avoid unnecessary dependencies
Avoid hardcoded repeated values
Use responsive design principles
Follow accessibility best practices
Ensure keyboard navigation works
Use appropriate ARIA attributes when necessary
Optimize images and assets
Keep the code easy for another developer to understand and modify
Suggested architecture:

src/
├── components/
│   ├── Navbar
│   ├── Hero
│   ├── About
│   ├── Skills
│   ├── Projects
│   ├── Experience
│   ├── Contact
│   └── Footer
│
├── data/
│   ├── projects
│   ├── skills
│   └── experience
│
├── assets/
│
├── styles/
│
├── App
└── main
Keep portfolio content such as projects, skills, experience, and social links in structured data objects rather than scattering the content throughout components.

This should make it easy for me to update my portfolio later without modifying the UI components.

UX Requirements
The website should feel like one continuous story as the user scrolls.

Use clear visual hierarchy between sections.

Add subtle section spacing and transitions so the page doesn't feel like a collection of disconnected blocks.

The user should immediately understand:

Who I am
What I do
What technologies I use
What projects I have built
My experience/education
How to contact me
Important Design Constraints
Do NOT:

Create multiple pages
Use overly complicated animations
Use excessive gradients
Use excessive glassmorphism
Use huge decorative elements
Make the website look like a generic template
Use unnecessary UI components
Add unnecessary dependencies
Overcrowd the page
Prioritize:

Clean > complicated

Elegant > flashy

Readable > decorative

Maintainable code > clever code

Subtle animation > excessive animation

The final website should feel like a polished personal portfolio created by a professional designer and developer.

Before finishing, verify that the layout is responsive, accessible, visually consistent, and that the code follows a clean component-based architecture.

Portfolio Content & Information Strategy
Design the portfolio so that the information communicates my professional value quickly.

Do not make the website feel like a CV copied onto a webpage. The portfolio should tell a concise story about me.

1. Hero — "Who am I?"
The hero should contain the most important information immediately.

Display:

Full name
Professional title / role
One-sentence personal positioning statement
1–2 sentence description of what I specialize in
Primary CTA: "View My Work"
Secondary CTA: "Get in Touch"
GitHub
LinkedIn
Email
Example structure:

Hi, I'm [Name].

I build [AI/ML/software/web/etc.] solutions that solve real-world problems.

Currently focused on [specific area].

Avoid generic phrases such as "passionate developer" unless they are supported by specific information.

2. Professional Summary
Create a short section answering:

What do I specialize in?
What problems do I like solving?
What technologies do I work with?
What type of opportunities am I looking for?
Keep this section concise.

The visitor should understand my professional direction within approximately 10 seconds.

3. Current Status
Add a small "Currently" or "Now" section.

Useful information:

Current role
University / organization
Field of study
Current research or project
Current technical focus
What type of opportunity I am looking for
Example:

Currently studying Computer Science and exploring deep learning, computer vision, and AI engineering.

This should be easy to update later.

4. Education
Display relevant education information.

For each education entry:

University
Degree
Major
Location
Start year – expected graduation year
Relevant coursework
Academic achievements if meaningful
Research areas
Relevant projects
Do not list every course. Only show coursework relevant to my professional direction.

5. Experience
For each experience:

Position
Company / organization
Location
Start date – end date
Short description
Main responsibilities
Quantifiable achievements
Technologies used
Prioritize results over responsibilities.

For example, prefer:

Improved model inference speed by 35%.

over:

Responsible for optimizing machine learning models.

If exact numbers are unavailable, do not invent them.

6. Research
If I have academic or research experience, create a dedicated Research section.

Include:

Research topic
Research question
My contribution
Methods / technologies
Results
Publication or paper link
GitHub / implementation if available
Research advisor / laboratory if relevant
Make this section particularly polished because academic/research experience can be an important differentiator.

7. Projects
Projects should be treated as evidence of my technical ability.

For each project, display:

Project name
One-sentence explanation
Problem being solved
My approach
Key features
Technologies
My specific contribution
Results / metrics
GitHub
Live demo
Paper / documentation if available
Each project card should have a "View Details" interaction that reveals additional information without navigating to another page.

For example:

Project → Problem → Solution → Technology → Result

Avoid showing only:

"A web application built using React."

Instead communicate why the project matters.

8. Technical Skills
Organize skills by category.

Possible categories:

Languages

Python
JavaScript / TypeScript
C++
Java
AI / Machine Learning

PyTorch
TensorFlow
Scikit-learn
Computer Vision
NLP
Deep Learning
Web / Software

React
Next.js
Node.js
REST APIs
Git
Data

SQL
PostgreSQL
Pandas
NumPy
Infrastructure / Tools

Docker
Linux
GitHub
Cloud platforms
Only display technologies I actually know.

Avoid skill percentage bars such as "Python — 95%". Use badges or grouped categories instead.

9. Achievements
Create an optional "Achievements" section.

Include only meaningful achievements such as:

Scholarships
Academic awards
Hackathon results
Competitions
Research achievements
Publications
Conference participation
Open-source contributions
Certifications
Notable projects
Grants
Use numbers and concrete evidence where possible.

Example:

🏆 1st Place — [Competition]

📄 Published — [Paper]

🎓 GPA — [X/X], if worth highlighting

Do not create achievements if there is no real information to display.

10. Publications & Academic Work
If applicable, include:

Research papers
Conference papers
Posters
Technical reports
Thesis
Preprints
For each:

Title
Authors
Conference / journal
Year
Short description
Paper link
Code link
Make academic work visually distinct from normal software projects.

11. Open Source
If I have GitHub or open-source contributions, display:

GitHub profile
Selected repositories
Contributions
Stars / forks when meaningful
Technologies
Description of my contribution
Do not display GitHub statistics just for decoration. Only show metrics that provide useful information.

12. Certifications
Create a small certification area only if I have relevant certifications.

Display:

Certification name
Issuing organization
Date
Credential link
Do not make this section prominent if certifications are not a major part of my profile.

13. Interests
Add a very small personal section to make the portfolio feel human.

Possible information:

Areas I'm curious about
Technologies I'm currently learning
Hobbies
Things I enjoy building
Topics I like researching
Keep this section subtle and professional.

Do not include overly personal information.

14. What I'm Looking For
Near the bottom of the website, include a concise section describing the opportunities I am interested in.

For example:

I'm currently open to research internships, software engineering internships, and AI/ML opportunities.

Allow this text to be easily edited.

This section should communicate my direction without making the portfolio feel like a job application form.

15. Contact
Make contacting me extremely easy.

Display:

Email
GitHub
LinkedIn
Optional phone number
Optional location
Optional CV / Resume download
Include a prominent CTA:

Let's work together.

or

Interested in working with me?

Do not force visitors to use a complicated contact form.

Information Hierarchy
Prioritize information according to importance.

Highest priority
Name
Professional identity
Specialization
Best projects
Experience
Contact information
Medium priority
Education
Skills
Research
Achievements
Publications
Optional
Certifications
Interests
GitHub statistics
Personal details
Do not display every section if I don't have meaningful information for it.

Empty or irrelevant sections should automatically be hidden.

Make Content Easy to Maintain
Create a centralized portfolio data structure.

For example:

portfolioData
├── personal
├── socialLinks
├── education
├── experience
├── research
├── projects
├── skills
├── achievements
├── publications
└── certifications
The UI components should consume this data instead of having content hardcoded throughout the components.

I should be able to update:

My name
Description
Projects
Skills
Experience
Education
Links
Achievements
from a small number of data files without needing to modify the UI implementation.

Content Quality Rules
When generating placeholder content:

Clearly mark placeholder information.
Never invent real achievements, employers, publications, metrics, or qualifications.
Use realistic placeholder text that I can easily replace.
Do not make exaggerated claims.
Keep descriptions concise.
Prefer measurable results when actual data is provided.
Focus on impact and outcomes rather than simply listing technologies.
The portfolio should communicate:

Identity → Expertise → Evidence → Experience → Opportunity → Contact

rather than simply presenting a list of information.

Current Work & Research Interests
Add two important sections to the portfolio:

1. What I'm Doing Now — "Currently"
Create a visually polished section that communicates what I am currently working on and learning.

This should answer:

What am I doing currently?
What am I studying?
What projects am I working on?
What technologies am I currently exploring?
What research am I currently involved in?
What am I currently looking for?
Use a format that feels more personal and dynamic than a traditional resume.

Possible layout:

Currently

🎓 Studying [Degree / Major] at [University]

🔬 Working on [Current Research / Research Project]

🛠️ Building [Current Project]

📚 Exploring [Current Topics / Technologies]

🎯 Looking for [Internships / Research Opportunities / Collaborations]

Keep this section concise — approximately 3–5 key items.

Add a subtle "Last updated" indicator if appropriate so visitors know that this information represents my current activities.

The content should be stored in the centralized portfolio data structure so I can easily update it.

2. Research Interests
Create a dedicated Research Interests section.

This section should clearly communicate the academic and technical areas I am interested in exploring.

Do not simply display a long list of keywords.

Instead, organize the interests into meaningful research areas.

For example:

Artificial Intelligence

Deep Learning
Representation Learning
Generative AI
Computer Vision

Image Understanding
Visual Representation Learning
Multimodal Vision
Natural Language Processing

Large Language Models
NLP
Multimodal Language Models
Machine Learning

Optimization
Efficient Learning
Transfer Learning
Only include areas that are actually relevant to my interests.

Research Interest Cards
Each major research interest can be displayed as a small card containing:

Research area
2–4 relevant topics
Optional short explanation
Related projects
Related publications, if available
For example:

Computer Vision

Exploring how deep learning models can learn robust visual representations and understand complex visual information.

Multimodal AI

Interested in models that combine vision, language, and other modalities to build more capable AI systems.

Keep descriptions short and specific.

Research Direction
Add a small section beneath the research interests called:

"What I'm Exploring"

This should communicate the questions or problems that currently interest me.

For example:

I'm interested in exploring how AI systems can become more efficient, generalizable, and capable of learning from multiple types of information.

This should feel like a genuine research direction rather than a generic statement.

Connection Between Research and Projects
Connect the Research Interests section with the Projects and Publications sections.

For example:

Research Interest → Related Projects → Related Papers

When a visitor clicks a research area, show related projects or research work.

This creates a clear story:

What I'm interested in → What I'm studying → What I'm building → What I've achieved

Portfolio Data Structure
Keep the information centralized and easy to modify.

Use a structure similar to:

portfolioData
├── personal
│   ├── name
│   ├── title
│   ├── bio
│   └── location
│
├── current
│   ├── studying
│   ├── workingOn
│   ├── researching
│   ├── learning
│   └── seeking
│
├── researchInterests
│   ├── area
│   ├── topics
│   ├── description
│   └── relatedProjects
│
├── projects
├── experience
├── education
├── skills
├── publications
├── achievements
└── socialLinks
Make sure the UI automatically renders these sections from the data.

Recommended Page Flow
Structure the single-page portfolio approximately like this:

Hero

Name
Current role
Short introduction
CTA
Currently

What I'm doing now
Current studies
Current projects
Current research
What I'm looking for
Research Interests

Main research areas
Topics
Current research direction
Featured Projects

Strongest technical/research projects
Experience

Internships
Research experience
Work experience
Research & Publications

Papers
Research projects
Academic work
Skills

Technical skills
Education

University
Degree
Relevant coursework
Achievements

Awards
Competitions
Scholarships
Certifications
Contact

Email
GitHub
LinkedIn
CV
The page should feel like a continuous narrative rather than separate unrelated sections.

Important
Make the Currently and Research Interests sections visually distinctive but not oversized.

They should communicate that the portfolio represents an evolving person and researcher, not just a static resume.

Use subtle gradient accents, small icons, clean cards, and generous whitespace.

Do not invent any current projects, research interests, universities, positions, publications, or achievements. Use clearly marked placeholders until real information is provided.## Animation & Motion Design

Add animations throughout the portfolio to make the website feel polished, modern, cozy, and alive.

However, do not animate everything.

The animation system should follow this principle:

Subtle, smooth, intentional, and fast.

Animations should enhance the user's experience rather than distract from the content.

Overall Animation Style
The animation style should feel:

Smooth
Soft
Cozy
Elegant
Modern
Slightly futuristic
Professional
Lightweight
Avoid animations that feel:

Flashy
Excessive
Cartoonish
Distracting
Slow
Over-engineered
Do not use complicated 3D animations unless they provide a clear purpose.

1. Page Load Animation
When the website first loads, use a very subtle entrance animation.

Suggested sequence:

Navbar appears
Hero eyebrow/text appears
Hero heading fades and moves upward slightly
Hero description appears
CTA buttons appear
Small decorative elements appear
Use a small stagger between elements.

Example timing:

Navbar        → 0ms
Hero label    → 100ms
Hero title    → 180ms
Description   → 280ms
Buttons       → 380ms
Decoration    → 450ms
Keep the entire entrance sequence short.

Do not create a long loading animation.

2. Scroll Reveal Animations
Sections should gently reveal themselves as the user scrolls down.

Use:

Fade in
Small vertical movement
Slight scale when appropriate
Example:

opacity: 0 → 1
translateY: 20px → 0
The movement should be subtle.

Do not make sections fly in from the left or right.

Avoid dramatic scroll animations.

Each section should animate only once when it enters the viewport.

3. Section Heading Animation
Section headings can have a small entrance animation.

For example:

"Research Interests"
        ↓
fade + slight upward movement
        ↓
visible
The gradient accent underneath or beside the heading can gently expand into place.

Keep this extremely subtle.

4. Hero Animation
The hero should have the most visual personality, but still remain minimal.

Add subtle ambient movement to decorative gradient elements.

For example:

Very slow gradient movement
Soft floating shapes
Gentle glow movement
Extremely subtle background particles if appropriate
The movement should be slow and almost subconscious.

Do not use:

Rapid particles
Spinning objects
Large moving gradients
Distracting animated backgrounds
The user's attention should remain on the hero text.

5. Gradient Animation
Use animated gradients sparingly.

For selected elements such as:

Hero gradient
CTA button
Decorative glow
Small accent
Allow the gradient to slowly shift between the existing brand colors.

Use a very slow animation cycle.

For example:

8–15 seconds
ease-in-out
infinite
Do not animate every gradient on the website.

Static gradients should remain the default.

6. Button Interactions
Buttons should have subtle hover and press animations.

On hover:

Slightly increase brightness
Very small upward movement
Soft shadow
Subtle gradient transition
Example:

translateY(-2px)
On click:

scale(0.98)
Keep interactions extremely fast.

Buttons should feel responsive but not bouncy.

7. Navigation Animation
The navbar should have subtle interaction effects.

When scrolling:

Navbar can slightly change background opacity
Add a subtle blur
Add a very light shadow or border
Smoothly transition between states
Navigation links:

Small color/gradient transition on hover
Optional animated underline
Underline should smoothly expand from the center or left
Avoid large navigation animations.

8. Project Card Animations
Project cards should have one of the most noticeable hover interactions.

On hover:

Card moves upward slightly
Shadow becomes slightly stronger
Border subtly changes
Project image zooms very slightly
Arrow/link icon moves a few pixels
Example:

translateY(-4px)
Image:

scale(1.02)
Keep the effect subtle.

Do not make cards rotate, tilt aggressively, or jump.

9. Research Interest Cards
Research interest cards should have a gentle hover effect.

On hover:

Slight upward movement
Border becomes more visible
Small gradient glow
Icon moves slightly
For example:

translateY(-3px)
The effect should make the cards feel interactive without becoming distracting.

10. Skills Animation
Do NOT use animated percentage bars.

Instead, animate skill badges/cards subtly when they enter the viewport.

For example:

opacity: 0
translateY(10px)
        ↓
opacity: 1
translateY(0)
Use a small stagger between badges.

Do not make every badge bounce independently.

11. Timeline / Experience Animation
For the experience and education timeline:

As the user scrolls into the section:

Timeline line gradually appears
Experience entries fade in
Timeline markers appear with a small scale animation
Example:

Timeline line
    ↓
gradually reveal

Experience item
    ↓
fade + translateY
Keep the timeline animation linear and elegant.

Do not make the timeline overly interactive.

12. "Currently" Section
The "Currently" section can have slightly more dynamic elements.

For example:

Small animated status indicator
Gentle pulse on a "Currently working on..." indicator
Subtle floating gradient decoration
Example:

● Currently exploring AI
The dot can have a very subtle pulse.

Do not use an aggressive blinking effect.

13. Research Interests Interaction
Research interest cards can have a subtle interaction.

When hovering over a research area:

Slight gradient highlight
Topics become slightly more prominent
Related projects can subtly appear or highlight
If implementing this interaction becomes complicated, prioritize simplicity.

Do not create unnecessary modal windows.

14. Scroll Progress
Optionally add a very thin scroll progress indicator at the top of the page.

As the visitor scrolls:

0% ─────────────── 100%
The progress indicator should use the portfolio's gradient.

Keep it extremely thin and unobtrusive.

This is optional and should only be implemented if it improves the overall design.

15. Anchor / Section Navigation
When clicking navigation links:

Do not instantly jump to the section.

Use smooth scrolling.

The transition should feel natural and fast.

Ensure that sticky navigation does not cover the section heading after scrolling.

16. Micro-interactions
Use small micro-interactions throughout the interface.

Examples:

Arrow moves slightly when hovering over a link
External-link icon moves slightly
Social icons gently change appearance
Copy-email button gives subtle feedback
CV download button gives subtle feedback
Cards respond slightly to hover
Icons transition smoothly
These should be tiny details.

The user should notice that the website feels polished without necessarily noticing why.

17. Animation Timing System
Use a consistent animation system throughout the website.

Suggested durations:

Micro interaction: 150–200ms
Button/card hover: 200–300ms
Section reveal: 500–700ms
Page entrance: 400–600ms
Ambient background: 8–15s
Use consistent easing.

Prefer:

ease-out
ease-in-out
Avoid excessive use of spring/bounce animations.

18. Staggering
Use staggered animations only when it improves readability.

Good examples:

Project 1 → 0ms
Project 2 → 80ms
Project 3 → 160ms
Bad example:

Animating 20 elements individually with large delays.

Never make users wait for content to appear.

19. Performance
Animations must be performant.

Prefer GPU-friendly properties such as:

transform
opacity
Avoid animating expensive properties unnecessarily.

Avoid excessive:

box-shadow animations
blur animations
filter animations
layout changes
large DOM animation systems
Do not sacrifice page performance for visual effects.

The portfolio should remain smooth on mid-range laptops and mobile devices.

20. Accessibility
Respect:

@media (prefers-reduced-motion: reduce)
When reduced motion is enabled:

Disable decorative animations
Disable large transitions
Remove unnecessary movement
Keep only essential state transitions
Preserve the functionality of the website
The website must remain fully usable without animation.

21. Animation Consistency
Create reusable animation utilities/components rather than implementing every animation independently.

For example:

FadeIn
RevealOnScroll
AnimatedButton
AnimatedCard
GradientText
FloatingDecoration
Use a consistent animation system across the application.

Do not duplicate animation logic unnecessarily.

22. Important Design Rule
Follow the 80/20 animation rule:

Approximately:

80% static content + 20% subtle motion

The portfolio should still look beautiful if all animations are disabled.

Animation should support:

Hierarchy → Feedback → Navigation → Personality

It should NOT become the primary visual attraction.

Final Animation Direction
The final result should feel similar to a beautifully designed modern portfolio where the user thinks:

"This website feels really smooth."

rather than:

"This website has lots of animations."

Prioritize:

Subtle > flashy

Smooth > complex

Fast > slow

Purposeful > decorative

Elegant > impressive

Performance > effects

Content > animation

My Personal Information

Replace the placeholder portfolio content with the following real information.

Personal

Name: Meng Socheata

University: Pusan National University

Current Focus: Deep Learning Research

Research Interests:

Deep Learning

Large Language Models (LLMs)

Computer Vision

Hero Section

Use:

Meng Socheata

Deep Learning Researcher

Short introduction:

I'm a student at Pusan National University exploring deep learning and building my understanding of modern AI systems, with a particular interest in Large Language Models and Computer Vision.

Keep the introduction concise and professional.

Do not describe me as a professional researcher, engineer, or expert unless additional information is provided.

Primary button:

View My Research

Secondary button:

Get in Touch

Currently

Create a "Currently" section that communicates what I am doing now.

Display:

🎓 Studying

Pusan National University

🔬 Researching

Deep Learning

🧠 Exploring

Large Language Models and Computer Vision

🎯 Interested In

AI/ML research opportunities and academic internships

Keep this section visually clean and easy to update.

Use subtle animated indicators to make the section feel alive without being distracting.

Research Interests

Create a prominent Research Interests section.

Deep Learning

Exploring deep learning methods and how neural networks can learn useful representations from complex data.

Large Language Models

Interested in understanding and exploring modern language models, their capabilities, and applications.

Computer Vision

Interested in using deep learning to understand and extract meaningful information from visual data.

Make these three areas the primary research-interest cards.

Use subtle gradient accents and hover animations.

Do not add other research areas unless I provide them later.

Academic Profile

Create a simple academic profile section.

Display:

Pusan National University

Currently studying and exploring research in deep learning and artificial intelligence.

Do not invent:

Degree

Major

GPA

Graduation date

Coursework

Academic awards

Leave these fields ready to be added later.

Research Direction

Add a section called:

What I'm Exploring

Use the following text:

My current interests are centered around deep learning, with a focus on Large Language Models and Computer Vision. I am interested in understanding how modern deep learning systems learn, represent, and process complex information.

Keep this section concise.

What I'm Looking For

Add a small section near the bottom:

I am interested in academic research opportunities, short-term research internships, and opportunities to learn and contribute to AI and deep learning research.

Keep the wording professional and understated.

Skills

Do not invent a technical skill list yet.

Instead, create the section structure so I can easily add skills later:

Programming

Add skills later

Machine Learning / Deep Learning

Add skills later

AI

Add skills later

Tools

Add skills later

Do not display fake proficiency levels or percentages.

Projects

Do not invent projects.

Create the Projects section with a clean placeholder state that can later be populated with my real projects.

When projects are added, each project should support:

Project name

Description

Problem

Approach

Technologies

Results

GitHub

Demo

Related research interest

Hide the entire Projects section if there are no projects yet, rather than showing empty cards.

Experience

Do not invent work experience, internships, or research positions.

Prepare the Experience section so real information can be added later.

Hide the section when there is no experience to display.

Publications

Do not invent publications or papers.

Prepare the Publications section for future academic work.

Hide the section when there are no publications.

Achievements

Do not invent achievements, awards, scholarships, competitions, or certifications.

Only display this section when real information is added.

Contact

Use:

Meng Socheata

Provide placeholders for:

Email

GitHub

LinkedIn

CV

Do not invent URLs or contact information.

Use a simple CTA:

Let's connect.

Important Content Rule

This is extremely important:

Never invent information about me.

Do not create fake:

Projects

Research papers

Work experience

Internships

Awards

GPA

Skills

Programming languages

Certifications

Achievements

Statistics

Research results

If information has not been provided, either leave it as an editable placeholder or hide the section.

The portfolio should present me accurately rather than making my profile appear artificially impressive.

Overall Personal Branding

The portfolio should communicate this identity:

Meng Socheata
→ Pusan National University
→ Deep Learning
→ Large Language Models
→ Computer Vision
→ Academic Research / AI Research Opportunities

Keep the tone:

Curious

Academic

Technical

Humble

Professional

Research-oriented

Avoid exaggerated phrases such as:

"AI expert"

"world-class researcher"

"AI visionary"

"machine learning guru"

Instead, emphasize what I am currently learning, researching, and exploring.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/56f9fd66-9524-414d-972f-267fe21a595c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
