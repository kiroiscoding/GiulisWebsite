# Flow for Her - Menstrual Health Education Website

A modern, responsive website dedicated to raising awareness about menstrual health challenges faced by girls in developing countries, publishing research, and providing educational resources.

## 🌟 Features

- **Modern, Responsive Design**: Beautiful dark red and white color scheme that works seamlessly across all devices
- **Multi-Page Layout**: Separate pages for easy navigation (no continuous scrolling)
- **Research Blog**: Platform for publishing in-depth research articles and studies
- **Educational Curriculum**: Downloadable teaching materials for educators and community leaders
- **Resource Library**: Curated links to organizations, reports, and educational materials
- **Contact Form**: Easy way for visitors to get in touch
- **Accessibility**: Clean, readable design with proper semantic HTML

## 📁 Project Structure

```
giuli blog/
├── index.html           # Homepage
├── about.html           # About page
├── research.html        # Research articles listing
├── research-1.html      # Sample research article
├── curriculum.html      # Educational curriculum page
├── resources.html       # Resources and links page
├── contact.html         # Contact form page
├── styles.css           # Main stylesheet
├── article.css          # Article-specific styles
├── script.js            # JavaScript for interactivity
├── Images/              # Image assets folder
│   └── hero-bg.jpg      # Main hero background image
└── README.md            # This file
```

## 🚀 Getting Started

### Local Development

1. Simply open `index.html` in your web browser
2. No build process or dependencies required
3. All files are static HTML, CSS, and JavaScript

### Deployment Options

#### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Push all files to the repository
3. Go to Settings > Pages
4. Select your main branch as the source
5. Your site will be live at `https://username.github.io/repository-name`

#### Option 2: Netlify (Free)
1. Create a Netlify account
2. Drag and drop your project folder to Netlify
3. Your site will be instantly deployed with a custom URL

#### Option 3: Vercel (Free)
1. Create a Vercel account
2. Import your project from GitHub or upload directly
3. Automatic deployment with custom domain support

#### Option 4: Traditional Web Hosting
1. Upload all files to your web hosting provider via FTP/SFTP
2. Ensure `index.html` is in the root directory
3. Access your site via your domain name

## 🎨 Customization

### Colors
The site uses a dark red and white color scheme. Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #8B1538;      /* Dark red */
    --primary-dark: #6B0F2A;       /* Darker red */
    --primary-light: #A52045;      /* Lighter red */
    --accent-color: #B91D3B;       /* Accent red */
    /* ... more variables */
}
```

### Content
- **Homepage**: Edit `index.html`
- **About Page**: Edit `about.html`
- **Research Articles**: Add new HTML files following the pattern in `research-1.html`
- **Curriculum**: Update `curriculum.html`
- **Resources**: Update `resources.html`
- **Contact**: Update `contact.html`

### Images
- **Hero Background**: The hero section uses `Images/hero-bg.jpg`
- Replace this file with your own image (recommended size: 1920x1080px or larger)
- For best results, use high-quality images with good contrast

### Adding New Research Articles
1. Copy `research-1.html` and rename it (e.g., `research-2.html`)
2. Update the content within the `<article>` tags
3. Add a link to the new article in `research.html`

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

The site automatically adjusts layout and styling for optimal viewing on all devices.

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Content Guidelines

When adding new content:

1. **Research Articles**: 
   - Use clear, accessible language
   - Include citations and references
   - Add relevant statistics and data
   - Include visual elements (images, charts, tables)

2. **Curriculum Materials**:
   - Ensure age-appropriate content
   - Provide clear learning objectives
   - Include actionable activities
   - Make materials culturally adaptable

3. **Images**:
   - Use high-quality, relevant images
   - Ensure proper licensing/permissions
   - Add descriptive alt text for accessibility
   - Optimize for web (compressed file sizes)

## 🔧 Technical Features

- **Multi-Page Navigation**: Clean page-to-page navigation (no continuous scrolling)
- **Active Page Highlighting**: Current page highlighted in navigation
- **Mobile Menu**: Hamburger menu for mobile devices
- **Scroll Progress Bar**: Visual indicator of page scroll progress
- **Back to Top Button**: Appears after scrolling down
- **Intersection Observer**: Animations triggered as elements enter viewport
- **Counter Animations**: Statistics animate when visible
- **Form Validation**: Built-in HTML5 form validation

## 🤝 Contributing

To add content or improve the website:

1. Make your changes to the relevant HTML/CSS/JS files
2. Test thoroughly across different browsers and devices
3. Ensure accessibility standards are maintained
4. Update this README if you add new features

## 📞 Contact Integration

The contact form is currently set up for client-side validation. To make it functional:

### Option 1: Formspree (Easiest)
1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update the form action in `index.html`:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: Netlify Forms
1. Deploy to Netlify
2. Add `data-netlify="true"` to your form tag
3. Netlify automatically handles form submissions

### Option 3: Custom Backend
Integrate with your own backend server or serverless function.

## 📊 Analytics

To add Google Analytics or other tracking:

Add the tracking code to the `<head>` section of all HTML files.

## 🔒 Privacy & Security

- No cookies are used by default
- No personal data is collected without explicit consent
- Contact form data should be handled according to privacy regulations (GDPR, etc.)
- Add a privacy policy page if collecting user data

## 📄 License

This project is created for educational and advocacy purposes. Please ensure:
- Content is used responsibly
- Proper attribution is given for research and statistics
- Privacy of individuals featured in case studies is protected

## 🌍 Internationalization

To add multilingual support:
1. Create separate HTML files for each language
2. Use language indicators in filenames (e.g., `index-es.html` for Spanish)
3. Add language switcher in navigation
4. Consider using i18n libraries for dynamic content

## 💡 Future Enhancements

Consider adding:
- [ ] Blog CMS integration (e.g., Contentful, Strapi)
- [ ] Search functionality for articles
- [ ] Newsletter subscription integration
- [ ] Donation/fundraising integration
- [ ] Multi-language support
- [ ] User comments on articles
- [ ] Social media feed integration
- [ ] Event calendar
- [ ] Resource download tracking
- [ ] Impact metrics dashboard

## 🙏 Acknowledgments

This website was created to support education and awareness about menstrual health challenges in developing countries. Special thanks to organizations like UNICEF, WHO, Days for Girls, and Plan International for their ongoing work in this critical area.

---

**Remember**: This is a platform for education and advocacy. Handle all content with sensitivity and respect for the individuals and communities affected by these challenges.

For questions or support, please see the contact section of the website.


