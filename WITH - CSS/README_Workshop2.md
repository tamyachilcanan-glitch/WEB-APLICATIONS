# Workshop 2 - Website Styling with CSS

**Name:** Tamya Chilcañan 
**Course:** Web Applications 

## Description

Workshop 2 is the continuation of Workshop 1. In this workshop I kept the same website content, but I improved its appearance using an external CSS file.

The main objective was to separate the content from the design and use CSS to create a more organized, modern, and consistent website.

## CSS Implementation

I created the file `style1.css` and connected it to the HTML pages with the `<link>` tag.

For the main page I used:

`<link rel="stylesheet" href="css/style1.css">`

For the pages inside the `pages` folder I used:

`<link rel="stylesheet" href="../css/style1.css">`

This allowed the same stylesheet to control the design of all the pages.

## Main CSS Features Used

- **Colors and gradients:** I used background colors and `linear-gradient()` for the header, buttons, cards, and table headings.
- **Spacing and layout:** I used `margin`, `padding`, `width`, and `max-width` to organize the content and keep it centered.
- **Borders and shadows:** I used `border-radius` and `box-shadow` to create cards and sections with a softer design.
- **Hover effects:** Navigation links, cards, images, and buttons change when the mouse moves over them.
- **Sticky navigation:** The navigation bar uses `position: sticky` so it can stay visible while scrolling.
- **Grid layout:** I used CSS Grid in the Courses and Learning Resources pages to organize information into two-column cards.
- **Table styling:** The schedule has styled headings, alternating row colors, borders, and a hover effect.
- **Form styling:** The contact form has styled inputs, select boxes, textarea, and a button. The fields also change when they are selected.
- **Responsive design:** I used `@media` rules so the layout changes on smaller screens. For example, grids change from two columns to one column and navigation links become vertical.
- **Background decoration:** I added a repeating linear pattern to make the page background less plain.

## HTML Changes for the Design

Some HTML files were also adjusted so the CSS could be applied more consistently. I used elements such as `<header>`, `<main>`, `<section>`, `<article>`, and `<footer>` to separate the main parts of each page.

I also added classes such as `course-grid`, `course-card`, `resource-grid`, `resource-card`, and `resource-button` so specific sections could have their own design.

## Main Improvements

Compared with Workshop 1, the website now has a consistent visual style on all pages. The courses and learning resources are displayed as cards, the weekly schedule is easier to read, the contact form is more organized, and the navigation has interactive effects.

The website also adapts better to different screen sizes.

## What I Learned

In this workshop I learned how HTML and CSS work together. HTML is used to organize the content, while CSS controls how that content looks.

I also practiced selectors, classes, hover effects, CSS Grid, responsive design, gradients, shadows, spacing, and styling forms and tables.

One of the most important things I learned was that one CSS file can control the design of several HTML pages, which makes the website easier to maintain and keeps the design consistent.
