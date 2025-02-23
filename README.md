# FCBarcelona-Bot-Landing-Page

This repository contains the landing page for the **FC Barcelona Reminder Bot**, a Telegram bot that sends timely reminders for FC Barcelona matches. Never miss a game again—get notified 7, 5, and 2 hours before each match!

**Telegram Bot Repository:** [FCBarcelona-Reminder-Bot](https://github.com/RonyBubnovsky/FCBarcelona-Reminder-Bot)

## Live Demo

You can view the live demo of the landing page here:  
[https://ronybubnovsky.github.io/FCBarcelona-Bot-Landing-Page/](https://ronybubnovsky.github.io/FCBarcelona-Bot-Landing-Page/)

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [How to Deploy on GitHub Pages](#how-to-deploy-on-github-pages)
- [Custom Domain](#custom-domain)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Modern and Responsive Design:** Built with HTML, CSS, and JavaScript for a clean and responsive user experience.
- **Smooth Animations:** Utilizes [Animate.css](https://animate.style/) along with custom scroll-triggered animations for an engaging experience.
- **Scroll-Triggered Fade-In:** Elements remain hidden until you scroll to them, then fade in smoothly.
- **Interactive Hover Effects:** Images enlarge slightly on hover for a dynamic effect.

## Project Structure

```
/FCBarcelona-Bot-Landing-Page
│
├── index.html    # Main HTML file
├── style.css     # Custom CSS styles
├── script.js     # JavaScript for scroll-triggered animations
└── assets/       # Folder containing image assets
    ├── start.png
    ├── league.png
    └── remove.png
```

## Deployment

This project is a static website deployed using GitHub Pages. It is hosted at:
[https://ronybubnovsky.github.io/FCBarcelona-Bot-Landing-Page/](https://ronybubnovsky.github.io/FCBarcelona-Bot-Landing-Page/)

## How to Deploy on GitHub Pages

1. **Create a Repository:** Create a repository on GitHub named FCBarcelona-Bot-Landing-Page and push your project files.

2. **Enable GitHub Pages:** In your repository, navigate to **Settings** > **Pages**, select the main branch and the root folder as the source, and then save. GitHub Pages will provide you with a URL where your site is published.

3. **Access the Site:** Open the provided URL in your browser to see your landing page live.

## Custom Domain

If you want to use a custom domain with your GitHub Pages site, follow these steps:

- Create a file named CNAME in your repository's root directory and add your custom domain (e.g., www.yourdomain.com).

- Update your domain's DNS settings:
  - For an apex domain (e.g., yourdomain.com), add A records pointing to GitHub's IP addresses:
    - 185.199.108.153
    - 185.199.109.153
    - 185.199.110.153
    - 185.199.111.153
  - For a subdomain (e.g., www.yourdomain.com), add a CNAME record pointing to yourusername.github.io (replace yourusername with your GitHub username).

- More details are available in the [GitHub Pages documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Contributing

Contributions are welcome! If you have suggestions or improvements for the landing page, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---
