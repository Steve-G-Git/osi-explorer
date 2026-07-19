# OSI Explorer

OSI Explorer is an interactive learning website that presents the OSI model as a connected network of layers, protocols, devices, addresses, commands, and troubleshooting concepts.

**Live site:** `https://Steve-G-Git.github.io/osi-explorer/`

> The live link will begin working after the repository is pushed to GitHub and GitHub Pages is enabled.

## Project highlights

- Seven-layer OSI overview
- Detailed layer pages
- Searchable topic encyclopedia
- Complete lessons for ARP, DNS, TCP, HTTP, IPv4, Ethernet, and MAC addresses
- Connected-topic navigation using stable topic IDs
- Guided 12-step packet journey showing what happens when a user visits a website
- Responsive desktop and mobile layouts
- Keyboard-accessible navigation and visible focus states
- Reduced-motion support
- Automatic GitHub Pages deployment through GitHub Actions

## Technology

- React
- Vite
- JavaScript
- CSS
- React Router
- GitHub Actions
- GitHub Pages

## Run locally

Open PowerShell in the project directory and install the dependencies:

```powershell
npm.cmd install
```

Start the Vite development server:

```powershell
npm.cmd run dev
```

Open the local address printed by Vite, normally:

```text
http://localhost:5173/osi-explorer/
```

After the first installation, normal startup only requires:

```powershell
npm.cmd run dev
```

## Test the production build

```powershell
npm.cmd run build
npm.cmd run preview
```

Vite creates the production website in the `dist` directory.

## Project structure

```text
osi-explorer/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── src/
│   ├── components/
│   ├── data/
│   │   ├── layers.js
│   │   ├── packetJourney.js
│   │   └── topics.js
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── LayerPage.jsx
│   │   ├── NotFoundPage.jsx
│   │   ├── PacketJourneyPage.jsx
│   │   ├── TopicPage.jsx
│   │   └── TopicsPage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── .gitignore
├── index.html
├── LICENSE
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

## Content architecture

Learning content is kept separate from the interface:

- `src/data/layers.js` stores the seven OSI layers.
- `src/data/topics.js` stores encyclopedia topics and their connections.
- `src/data/packetJourney.js` stores the guided packet-journey steps.

Reusable page components read these files and render the content. New topics can therefore be added without creating a new React component for every lesson.

## Deploy to GitHub Pages

This project is configured for a repository named exactly:

```text
osi-explorer
```

The Vite base path in `vite.config.js` is:

```js
base: '/osi-explorer/'
```

The workflow at `.github/workflows/deploy.yml` builds and publishes the site whenever changes are pushed to the `main` branch.

### First deployment

1. Create a new empty GitHub repository named `osi-explorer`.
2. Do not initialize it with a README, `.gitignore`, or license because those files already exist locally.
3. Open PowerShell in this project folder.
4. Initialize Git and push the project using the commands below.
5. In the GitHub repository, open **Settings > Pages**.
6. Under **Build and deployment**, set **Source** to **GitHub Actions**.
7. Open the **Actions** tab and wait for the deployment workflow to finish.

```powershell
git init
git add .
git commit -m "Launch OSI Explorer"
git branch -M main
git remote add origin https://github.com/Steve-G-Git/osi-explorer.git
git push -u origin main
```

After deployment, the site should be available at:

```text
https://Steve-G-Git.github.io/osi-explorer/
```

## Future roadmap

- Interactive connected-topic map
- Complete lessons for UDP, ICMP, routing tables, VLANs, Wi-Fi, copper, fiber, and ports
- Quiz mode
- Troubleshooting scenarios
- Additional diagrams and accessibility testing
