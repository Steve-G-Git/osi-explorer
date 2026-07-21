# OSI Explorer

OSI Explorer is an interactive networking education site that presents the OSI model as a connected system of layers, protocols, devices, addressing methods, commands, and troubleshooting concepts.

**Live site:** https://steve-g-git.github.io/osi-explorer/

## Project highlights

- Interactive knowledge map with connected topic nodes, search, and OSI layer filtering
- Seven-layer OSI overview with detailed layer pages
- Searchable topic encyclopedia
- Complete lessons for ARP, DNS, TCP, HTTP, IPv4, Ethernet, and MAC addresses
- Guided 12-step packet journey showing what happens when a user visits a website
- Connected-topic navigation using stable topic IDs
- Responsive desktop and mobile layouts
- Keyboard-accessible navigation and visible focus states
- Reduced-motion support
- Automated deployment to GitHub Pages through GitHub Actions

## Why I built it

The OSI model is often taught as seven separate boxes. I wanted to build a tool that shows how the pieces actually connect.

For example:

```text
HTTP → TCP → Ports → IPv4 → Ethernet → MAC addresses
```

The goal is to help learners move from memorizing definitions to understanding how protocols, addressing, hardware, and troubleshooting tools work together.

## Technology

- React
- Vite
- JavaScript
- CSS
- React Router
- Git
- GitHub Actions
- GitHub Pages

## What I learned

- How to structure a React application with reusable components and routed pages
- How to separate learning content from interface code using JavaScript data files
- How stable topic IDs can connect related concepts throughout an application
- How DNS, TCP, IP, ARP, Ethernet, and physical media work together during network communication
- How to build responsive and keyboard-accessible interfaces
- How to configure a Vite project for GitHub Pages
- How to troubleshoot npm, package-lock, Vite, Git, and GitHub Actions deployment failures
- How to use Git commits and automated deployment to maintain a live project

## Run locally

Clone the repository:

```powershell
git clone https://github.com/Steve-G-Git/osi-explorer.git
cd osi-explorer
```

Install dependencies:

```powershell
npm.cmd install
```

Start the Vite development server:

```powershell
npm.cmd run dev
```

Open the address displayed by Vite, normally:

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

Vite creates the production site in the `dist` directory.

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
│   │   ├── KnowledgeMapPage.jsx
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

Learning content is stored separately from the interface:

- `src/data/layers.js` stores the seven OSI layers.
- `src/data/topics.js` stores encyclopedia topics and their connections.
- `src/data/packetJourney.js` stores the guided packet-journey steps.

Reusable components read those files and render the pages. This allows new topics and connections to be added without creating a separate React component for every lesson.

## Deployment

The site is automatically deployed through GitHub Actions whenever changes are pushed to the `main` branch.

The Vite base path is configured for the repository name:

```js
base: '/osi-explorer/'
```

The deployment workflow:

1. Checks out the repository
2. Installs Node.js and project dependencies
3. Builds the Vite application
4. Uploads the `dist` directory
5. Deploys the artifact to GitHub Pages

## Planned improvements

- Complete lessons for UDP, ports, ICMP, routing tables, default gateways, VLANs, Wi-Fi, copper, and fiber
- Add practical troubleshooting scenarios
- Add automated checks for topic IDs, connections, layers, and packet-journey steps
- Add project screenshots and additional diagrams
- Continue accessibility and mobile testing

## License

This project is licensed under the MIT License.
