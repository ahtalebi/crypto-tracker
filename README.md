# 💰 Crypto Tracker Dashboard

A modern, real-time cryptocurrency tracking dashboard built with Angular 21 and Material Design. Features auto-refresh, interactive charts, and comprehensive market data for 100+ cryptocurrencies.

![Crypto Tracker](screenshot.png)

🔗 **Live Demo:** [https://ahtalebi.github.io/crypto-tracker/](https://ahtalebi.github.io/crypto-tracker/)

---

## ✨ Features

### 🔄 **Real-Time Updates**
- Auto-refresh every 30 seconds (toggle on/off)
- Manual refresh button
- Live countdown timer
- Last update timestamp

### 📊 **Three Interactive Tabs**
1. **Overview** - Top 12 cryptocurrencies with detailed cards
2. **Charts & Analytics** - 4 interactive visualizations
3. **All Cryptocurrencies** - Complete data table

### 📈 **Advanced Visualizations**
- **Price Comparison** - Bar chart of top 10 by price
- **Market Dominance** - Doughnut chart showing market cap distribution
- **24h Performance** - Color-coded gains/losses
- **Trading Volume** - Horizontal bar chart

### 🎯 **Smart Features**
- Search by name or symbol
- Sort by: Market Cap, Price, 24h Change, Volume
- Filter: Top 10, 25, 50, or 100
- Auto-update stats cards
- Responsive design (mobile, tablet, desktop)

### 💎 **Beautiful Modern UI**
- Material Design components
- Gradient stat cards
- Smooth animations
- Professional typography (Inter font)
- Color-coded positive/negative changes

---

## 🛠️ Tech Stack

- **Framework:** Angular 21
- **UI Library:** Angular Material
- **Charts:** Chart.js
- **Language:** TypeScript
- **Styling:** CSS3 with custom gradients
- **API:** CoinGecko (Free, no key required)
- **Fonts:** Google Fonts (Inter)

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- **Node.js** v20.0.0 or higher → [Download Node.js](https://nodejs.org/)
- **npm** v10.0.0 or higher (comes with Node.js)
- **Git** → [Download Git](https://git-scm.com/)

**Check your versions:**
```bash
node --version   # Should output v20.x.x or higher
npm --version    # Should output v10.x.x or higher
git --version    # Should output git version 2.x.x or higher
```

---

### 📥 Installation Steps

**Step 1: Clone the Repository**
```bash
# Using SSH (recommended if you have SSH keys set up)
git clone git@github.com:ahtalebi/crypto-tracker.git

# OR using HTTPS
git clone https://github.com/ahtalebi/crypto-tracker.git

# Navigate into the project
cd crypto-tracker
```

**Step 2: Install Dependencies**
```bash
npm install
```

This will install:
- Angular framework (v21)
- Angular Material components
- Chart.js for visualizations
- TypeScript compiler
- All other required packages

**Wait for installation to complete (usually 1-2 minutes).**

**Step 3: Start the Development Server**
```bash
ng serve
```

You should see output like:
```
✔ Browser application bundle generation complete.
Initial chunk files   | Names         | Raw size
main.js               | main          | 2.5 MB   
...
Application bundle generation complete. [5.123 seconds]

Watch mode enabled. Watching for file changes...
➜  Local:   http://localhost:4200/
```

**Step 4: Open in Browser**

Navigate to: **http://localhost:4200**

You should see:
- ✅ Header with "Crypto Tracker" and auto-refresh controls
- ✅ 4 colorful stats cards
- ✅ Search and filter controls
- ✅ 3 tabs: Overview, Charts & Analytics, All Cryptocurrencies
- ✅ Real cryptocurrency data loading

---

## 📂 Project Structure
```
crypto-tracker/
├── src/
│   ├── app/
│   │   ├── dashboard/                    # Main dashboard component
│   │   │   ├── dashboard.component.ts    # Component logic
│   │   │   ├── dashboard.component.html  # Template
│   │   │   └── dashboard.component.css   # Styles
│   │   ├── crypto.service.ts             # API service (CoinGecko)
│   │   ├── app.ts                        # Root component
│   │   └── app.config.ts                 # App configuration
│   ├── index.html                        # Entry HTML
│   ├── main.ts                           # Bootstrap file
│   └── styles.css                        # Global styles
├── public/
│   └── favicon.ico                       # Browser icon
├── angular.json                          # Angular workspace config
├── package.json                          # Dependencies
├── tsconfig.json                         # TypeScript config
├── .gitignore                            # Git ignore rules
└── README.md                             # This file
```

---

## 🎨 Features Breakdown

### Auto-Refresh System
- **Default:** Updates every 30 seconds
- **Toggle:** Click the refresh icon to enable/disable
- **Countdown:** Shows seconds until next refresh
- **Manual:** Click refresh button anytime
- **Smart:** Only refreshes when tab is active

### Statistics Cards
Four gradient cards showing:
1. **Total Market Cap** (Purple) - Sum of all displayed cryptos
2. **Biggest Gainer** (Green) - Highest 24h % increase
3. **Biggest Loser** (Red) - Lowest 24h % decrease
4. **Total Count** (Blue) - Number of cryptocurrencies shown

### Tab 1: Overview
- **12 Large Cards** - Top cryptocurrencies
- Each card shows:
  - Coin logo and name
  - Current price in EUR
  - 24h change with arrow icon (green ↑ or red ↓)
  - Market cap
  - 24h volume
  - 24h high
  - 24h low
  - Market cap rank badge

### Tab 2: Charts & Analytics
Four interactive charts:

1. **Price Comparison (Bar Chart)**
   - Top 10 by current price
   - Blue bars
   - Easy to compare values

2. **Market Dominance (Doughnut Chart)**
   - Top 5 by market cap
   - Shows percentage distribution
   - Colorful segments with legend

3. **24h Performance (Bar Chart)**
   - Top 10 by 24h change
   - Green bars = gains
   - Red bars = losses

4. **Trading Volume (Horizontal Bar Chart)**
   - Top 10 by 24h volume
   - Orange bars
   - Shows trading activity

### Tab 3: All Cryptocurrencies
Complete data table with:
- **Columns:** Rank, Coin (logo + name), Price, 24h %, 7d %, Market Cap, Volume, Circulating Supply
- **Sorting:** Click column headers (if implemented)
- **Badge:** Shows total count (e.g., "50" or "100")
- **Scrollable:** View all filtered cryptocurrencies
- **Icons:** Arrow icons for positive/negative changes

---

## 🔧 Development Commands
```bash
# Install dependencies
npm install

# Start development server (http://localhost:4200)
ng serve

# Start on different port
ng serve --port 4300

# Build for production
ng build --configuration production

# Run tests (if available)
ng test

# Lint code
ng lint

# Clean install (if having issues)
rm -rf node_modules package-lock.json
npm install
```

---

## 🌐 Deployment

### Build for Production
```bash
ng build --configuration production
```

Output will be in: `dist/crypto-tracker/browser/`

### Deploy to GitHub Pages

**Step 1: Install deployment tool**
```bash
npm install -g angular-cli-ghpages
```

**Step 2: Build with base href**
```bash
ng build --base-href "/crypto-tracker/"
```

**Step 3: Deploy**
```bash
npx angular-cli-ghpages --dir=dist/crypto-tracker/browser
```

**Step 4: Access your live site**
```
https://ahtalebi.github.io/crypto-tracker/
```

### Deploy to Vercel (Alternative)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel auto-detects Angular
5. Deploy! (Takes ~2 minutes)

### Deploy to Netlify (Alternative)

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Connect repository
4. Build command: `ng build --configuration production`
5. Publish directory: `dist/crypto-tracker/browser`
6. Deploy!

---

## 🐛 Troubleshooting

### Problem: "ng: command not found"

**Solution:**
```bash
# Install Angular CLI globally
npm install -g @angular/cli

# Verify installation
ng version
```

### Problem: "Cannot find module 'chart.js'"

**Solution:**
```bash
npm install chart.js
```

### Problem: Port 4200 already in use

**Solution:**
```bash
# Use a different port
ng serve --port 4300

# OR find and kill the process using port 4200
# On Linux/Mac:
lsof -i :4200
kill -9 <PID>

# On Windows:
netstat -ano | findstr :4200
taskkill /PID <PID> /F
```

### Problem: Data not loading

**Solutions:**
1. Check internet connection (API requires internet)
2. Open DevTools (F12) → Console tab → Check for errors
3. Try manual refresh button
4. Wait 2-3 seconds for initial load
5. CoinGecko API might be rate-limited (wait 1 minute, reload)

### Problem: Charts not displaying

**Solutions:**
1. Click on "Charts & Analytics" tab
2. Wait 1-2 seconds for charts to render
3. Try switching tabs back and forth
4. Hard refresh: `Ctrl + Shift + R`

### Problem: Material components look broken

**Solution:**
```bash
# Re-install Angular Material
ng add @angular/material
# Choose any theme (Indigo/Pink recommended)
```

### Problem: Auto-refresh not working

**Solutions:**
1. Check if auto-refresh is enabled (icon should be green)
2. Click the toggle button to disable/enable
3. Use manual refresh button
4. Check browser console for errors

---

## 📊 API Information

### CoinGecko API

This app uses the **CoinGecko API v3** - completely free!

**Endpoint:**
```
https://api.coingecko.com/api/v3/coins/markets
```

**Parameters:**
- `vs_currency=eur` - Prices in Euros
- `order=market_cap_desc` - Sort by market cap
- `per_page=100` - Fetch 100 coins
- `sparkline=false` - No sparkline data
- `price_change_percentage=7d` - Include 7-day change

**Rate Limits:**
- Free tier: 10-50 calls per minute
- **No API key required!**
- **No signup needed!**

**Data Refresh:**
- Auto: Every 30 seconds (if enabled)
- Manual: Click refresh button
- On load: When opening the app

---

## 🎓 What You'll Learn

Building this project teaches:

### Angular Skills
- ✅ Component architecture
- ✅ Standalone components (Angular 21+)
- ✅ Services and dependency injection
- ✅ Template syntax and data binding
- ✅ Material Design components
- ✅ Tabs and navigation
- ✅ Forms and ngModel
- ✅ Pipes (date, number formatting)

### TypeScript
- ✅ Interfaces and types
- ✅ Async/await
- ✅ Arrow functions
- ✅ Array methods (map, filter, sort)
- ✅ Type safety

### API Integration
- ✅ HTTP requests with fetch()
- ✅ JSON parsing
- ✅ Error handling
- ✅ Data transformation

### Data Visualization
- ✅ Chart.js integration
- ✅ Multiple chart types
- ✅ Dynamic data updates
- ✅ Color coding

### Modern Web Development
- ✅ Responsive design
- ✅ CSS Grid and Flexbox
- ✅ Custom animations
- ✅ Git workflow
- ✅ Deployment strategies

---

## 🔮 Future Enhancements

Potential features to add:

- [ ] **Price Alerts** - Notify when price hits target
- [ ] **Favorites/Watchlist** - Save favorite coins
- [ ] **Historical Charts** - 7d, 30d, 1y price graphs
- [ ] **Portfolio Tracker** - Track your holdings
- [ ] **Dark Mode** - Toggle light/dark theme
- [ ] **Currency Switcher** - USD, GBP, JPY, etc.
- [ ] **News Feed** - Latest crypto news
- [ ] **Compare Mode** - Side-by-side comparison
- [ ] **Export Data** - Download as CSV/Excel
- [ ] **Advanced Filters** - By market cap range, volume
- [ ] **Trending Coins** - Most searched/viewed
- [ ] **Mobile App** - React Native version
- [ ] **WebSocket** - Real-time price streaming
- [ ] **Trading Signals** - Buy/sell indicators

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create feature branch: `git checkout -b feature/AmazingFeature`
3. Commit changes: `git commit -m 'Add AmazingFeature'`
4. Push to branch: `git push origin feature/AmazingFeature`
5. Open Pull Request

**Contribution Ideas:**
- Add new chart types
- Implement dark mode
- Add unit tests
- Improve mobile UI
- Add more filtering options
- Optimize performance
- Add accessibility features

---

## 📜 License

This project is licensed under the **MIT License**.

**What this means:**
- ✅ Free to use
- ✅ Free to modify
- ✅ Free to distribute
- ✅ Can use commercially
- ✅ No warranty provided

See [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Data Provider:** [CoinGecko API](https://www.coingecko.com/en/api) - Free cryptocurrency data
- **Framework:** [Angular](https://angular.io/) by Google
- **UI Components:** [Angular Material](https://material.angular.io/)
- **Charts:** [Chart.js](https://www.chartjs.org/)
- **Icons:** Material Icons
- **Fonts:** [Google Fonts](https://fonts.google.com/) - Inter
- **Inspiration:** Modern fintech and trading platforms

---

## 📧 Contact

**Amir Talebi**
- GitHub: [@ahtalebi](https://github.com/ahtalebi)
- Repository: [github.com/ahtalebi/crypto-tracker](https://github.com/ahtalebi/crypto-tracker)
- Live Demo: [ahtalebi.github.io/crypto-tracker](https://ahtalebi.github.io/crypto-tracker/)

---

## 📚 Additional Resources

### Learn Angular
- [Official Angular Docs](https://angular.io/docs)
- [Angular Material Guides](https://material.angular.io/guides)
- [Angular Tutorial](https://angular.io/tutorial)

### Learn TypeScript
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)

### Learn Chart.js
- [Chart.js Documentation](https://www.chartjs.org/docs/)
- [Chart.js Samples](https://www.chartjs.org/samples/)

### CoinGecko API
- [API Documentation](https://www.coingecko.com/en/api/documentation)
- [API Status](https://status.coingecko.com/)

---

## 🎯 Quick Start Summary
```bash
# 1. Clone
git clone https://github.com/ahtalebi/crypto-tracker.git
cd crypto-tracker

# 2. Install
npm install

# 3. Run
ng serve

# 4. Open browser
# http://localhost:4200

# That's it! 🚀
```

---

## 🌟 Star the Project

If you find this project helpful, please give it a ⭐ on GitHub!

It helps others discover the project and motivates continued development.

---

**Made with ❤️ and ☕ by Amir Talebi**

*Real-time crypto tracking made simple and beautiful* 💰

**Last Updated:** November 2025

---

## 📸 Screenshots

### Overview Tab
![Overview](docs/screenshot-overview.png)

### Charts Tab
![Charts](docs/screenshot-charts.png)

### Table Tab
![Table](docs/screenshot-table.png)

---

**Happy Crypto Tracking! 📈🚀**
