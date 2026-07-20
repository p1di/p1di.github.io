# p1di — Organized Unblocked Web Apps & Tools

[![GitHub Pages](https://img.shields.io/badge/Hosted%20On-GitHub%20Pages-blue?style=flat-square)](https://p1di.github.io)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

**p1di** is an ultra-minimalist, fast, and organized portal designed for seamless, unblocked access to web applications, media streaming services, search tools, and AI assistants.

---

## 🌟 Key Features

- **Clean Folder URLs**: Elegant directory routes (`/apps/netflix/`, `/apps/spotify/`) without `.html` clutter in the address bar.
- **Floating Back Overlay (`← Apps`)**: Universal frosted-glass floating back button for one-click return to the central hub.
- **Dynamic App Info Modals**: Click the `(i)` button on any app card to view its live Markdown `readme.md` documentation.
- **Real-Time Tag & Title Search**: Instant search filtering across app names, titles, and `tags.txt` files.
- **Ultra-Minimalist Dark Aesthetic**: Designed with a refined dark color palette (`#0d0d0e`), smooth micro-animations, and zero clutter.
- **Zero Build Step**: Native HTML5, CSS3, and ES6 JavaScript — lightweight and fast.

---

## 📱 App Directory

| App | Description | Powered By / Sources |
| :--- | :--- | :--- |
| **🎬 Netflix** | Movies & TV series browser with Billboard hero, 23 embed servers & 35 mirrors | TMDB API, Custom Embed Servers |
| **🎵 Spotify** | Unblocked music streaming with redirect warning banner | `music.octavestreaming.com` |
| **🍎 Apple Music** | Audio streaming platform for top charts & albums | `music.octavestreaming.com` |
| **🎧 YouTube Music** | Audio playback interface | `playlistsound.com` |
| **🤖 ChatGPT** | AI assistant with provider toggle (`pdai` fast vs `duck.ai` pro models) | `redretep.github.io/ai` & `duck.ai` |
| **📌 Pinterest** | Privacy-respecting Pinterest image & moodboard search | `bn.opnxng.com` (Binnacle) |
| **🚀 Startpage** | Minimalist home dashboard, quick bookmarks & search | Custom Local Frontend |
| **⚽ Streamed** | Free live sports streaming interface | `streamed.pk` / `streamed.st` |
| **📺 YouTube** | Video player & playlist browser | YouTube Embed API |
| **🔍 Google** | Minimalist web search interface | Google Web Search |
| **📸 Instagram** | Photo & video feed viewer | Instagram Web |

---

## ⚙️ Special Features in Detail

### 1. Netflix App Enhancements (`/apps/netflix/`)
- **Hero Billboard**: Dynamic TMDB backdrop banner with match rating, release year, overview, and `▶ Play` / `ℹ More Info` buttons.
- **Multi-Server Provider Switcher**: Switch between 23 embed video servers and 35 site mirrors on the fly.
- **Custom Server Sources**: Click `+ Add Source` to save custom embed URL patterns directly into `localStorage`.
- **Link Availability Checker**: Click `⚡ Check Links` to test latency and availability of all video servers in real time.
- **Adblocker Warning**: Integrated warning banner & tutorial guide ([`tools/adblocker/tutorial.html`](file:///C:/Users/pd/Documents/GitHub/p1di.github.io/tools/adblocker/tutorial.html)).

### 2. ChatGPT AI Switcher (`/apps/chatgpt/`)
- Segmented pill switcher allowing users to choose between:
  - **`pdai`**: Faster, lightweight private AI (`https://redretep.github.io/ai/`).
  - **`duck.ai`**: Advanced AI models with file & document uploads (`https://duck.ai`).

### 3. Pinterest Search (`/apps/pinterest/`)
- Overlaid with a clean white logo banner over Binternet header.
- Custom Pinterest Red search button (`#e60023`).
- Banner smoothly hides upon submitting a search query to reveal full-screen image results.

---

## 🚀 Getting Started / Running Locally

### Option 1: View via GitHub Pages
Visit the live site directly: **[https://p1di.github.io](https://p1di.github.io)**

### Option 2: Run Locally (PowerShell)
To run a local HTTP server using the built-in PowerShell script:
```powershell
powershell -ExecutionPolicy Bypass -File .\server.ps1
```
Then open your browser to **`http://localhost:8080`**.

---

## 📁 Project Structure

```
p1di.github.io/
├── index.html               # Main launcher hub
├── README.md                # Project documentation
├── about.html               # About subpage
├── credits.html             # Credits & acknowledgments
├── help.html                # Help & FAQ
├── contact.html             # Contact page
├── server.ps1               # Local PowerShell HTTP server script
├── tools/
│   └── adblocker/
│       └── tutorial.html    # Adblocker installation guide
└── apps/
    ├── netflix/             # Netflix movie/TV app (providers.js, providers.json)
    ├── spotify/             # Spotify app
    ├── apple-music/         # Apple Music app
    ├── youtube-music/       # YouTube Music app
    ├── chatgpt/             # ChatGPT AI assistant
    ├── pinterest/           # Pinterest Binternet search
    ├── startpage/           # Startpage dashboard
    ├── streamed/            # Live sports streaming
    ├── google/              # Google search wrapper
    ├── instagram/           # Instagram wrapper
    └── youtube/             # YouTube wrapper
```

---

## 🛡️ Privacy & Legal

- All web apps and embed sources belong to their respective owners.
- We strongly recommend using an **Adblocker** (uBlock Origin) when accessing external video servers.

---

&copy; 2026 **p1di** — Built for fast, clean, and unblocked web navigation.
