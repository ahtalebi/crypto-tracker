# 💰 Crypto Tracker Dashboard

A real-time cryptocurrency tracking dashboard built with Angular and Material Design. Track prices, market caps, and trends for the top cryptocurrencies powered by the CoinGecko API.

![Dashboard Preview](screenshot.png)

🔗 **Live Demo:** [https://ahtalebi.github.io/crypto-tracker/](https://ahtalebi.github.io/crypto-tracker/)

---

## ✨ Features

### 📊 **Real-Time Data**
- Live cryptocurrency prices in EUR
- Automatic data refresh
- 100+ cryptocurrencies tracked
- Powered by CoinGecko API (no signup required!)

### 📈 **Interactive Visualizations**
- **Price Comparison Chart** - Top 10 cryptocurrencies by price
- **Market Cap Distribution** - Pie chart showing market dominance
- **24h Change Chart** - Color-coded gainers (green) and losers (red)
- **Trading Volume Chart** - Horizontal bar chart of 24h trading activity

### 🎯 **Smart Filtering**
- Search by name or symbol (Bitcoin, BTC, etc.)
- Sort by: Market Cap, Price, 24h Change, Volume
- Show Top 10, 25, 50, or 100 cryptocurrencies

### 📋 **Comprehensive Data Table**
- Complete market data for all cryptocurrencies
- Includes: Rank, Name, Price, 24h %, 7d %, Market Cap, Volume
- Color-coded positive (green) and negative (red) changes
- Scrollable and responsive

### 💎 **Beautiful UI**
- Google Material Design components
- Responsive layout (mobile, tablet, desktop)
- Smooth animations and transitions
- Professional color scheme

---

## 🛠️ Tech Stack

- **Framework:** Angular 21
- **UI Library:** Angular Material
- **Charts:** Chart.js
- **Language:** TypeScript
- **Styling:** CSS3
- **API:** CoinGecko API (Free, no key required)
- **Deployment:** GitHub Pages

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** v20+ ([Download](https://nodejs.org/))
- **npm** v10+ (comes with Node.js)
- **Angular CLI** (installed in step 2)

Check your versions:
```bash
node --version  # Should show v20.x.x or higher
npm --version   # Should show v10.x.x or higher
```

### Installation

**Step 1: Clone the repository**
```bash
git clone https://github.com/ahtalebi/crypto-tracker.git
cd crypto-tracker
```

**Step 2: Install dependencies**
```bash
npm install
```

This installs:
- Angular framework
- Angular Material components
- Chart.js for visualizations
- TypeScript and build tools

**Step 3: Run the development server**
```bash
ng serve
```

**Step 4: Open in browser**

Navigate to: **http://localhost:4200**

The app will automatically reload when you make changes to the source files.

### 🎯 You Should See:

- ✅ Dashboard header with gradient background
- ✅ 4 statistics cards (Total Market Cap, Biggest Gainer, Biggest Loser, Total Cryptos)
- ✅ Search and filter controls
- ✅ 12 cryptocurrency cards with logos and prices
- ✅ 4 interactive charts
- ✅ Full data table with all cryptocurrencies

---

## 📁 Project Structure
```
crypto-tracker/
├── src/
│   ├── app/
│   │   ├── dashboard/                    # Main dashboard component
│   │   │   ├── dashboard.component.ts    # Component logic
│   │   │   ├── dashboard.component.html  # Template
│   │   │   └── dashboard.component.css   # Styles
│   │   ├── crypto.service.ts             # API service
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
└── README.md                             # This file
```

---

## 🎨 Features Breakdown

### Statistics Cards
Four key metrics updated in real-time:
1. **Total Market Cap** - Combined value of all displayed cryptocurrencies
2. **Biggest Gainer** - Cryptocurrency with highest 24h % increase (green)
3. **Biggest Loser** - Cryptocurrency with lowest 24h % decrease (red)
4. **Total Cryptocurrencies** - Number of coins currently displayed

### Interactive Filters
- **Search Box** - Type any coin name (Bitcoin) or symbol (BTC)
- **Sort By Dropdown**:
  - Market Cap (default) - Largest to smallest
  - Price - Highest to lowest
  - 24h Change - Best performers first
  - Volume - Most traded first
- **Show Top Dropdown** - Display 10, 25, 50, or 100 coins

### Cryptocurrency Cards
Each card displays:
- Coin logo (from CoinGecko)
- Name and symbol
- Current price in EUR
- 24h price change with icon (📈 up or 📉 down)
- Market cap (formatted: €1.23T, €456B, etc.)
- 24h trading volume

### Interactive Charts

**1. Price Comparison (Bar Chart)**
- Shows top 10 cryptocurrencies by price
- Blue bars, easy comparison
- Y-axis: Price in EUR

**2. Market Cap Distribution (Pie Chart)**
- Top 5 cryptocurrencies
- Shows market dominance visually
- Different colors for each coin

**3. 24h Price Change (Bar Chart)**
- Top 10 cryptocurrencies
- Green bars = positive change
- Red bars = negative change
- Y-axis: Percentage change

**4. Trading Volume (Horizontal Bar Chart)**
- Top 10 by 24h volume
- Shows which coins are most actively traded
- Orange bars, horizontal layout

### Data Table
Complete table with:
- Rank (#) - Market cap ranking
- Coin - Logo, name, and symbol
- Price - Current price in EUR
- 24h % - Color-coded change
- 7d % - Weekly change
- Market Cap - Total market value
- Volume (24h) - Trading activity

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

# Run tests
ng test

# Lint code
ng lint
```

---

## 📊 API Information

### CoinGecko API
This app uses the **CoinGecko API** - a free cryptocurrency data API.

**Endpoint Used:**
```
https://api.coingecko.com/api/v3/coins/markets
```

**Parameters:**
- `vs_currency=eur` - Prices in Euros
- `order=market_cap_desc` - Sort by market cap
- `per_page=100` - Get 100 coins
- `sparkline=false` - No sparkline data
- `price_change_percentage=7d` - Include 7-day change

**Rate Limits:**
- Free tier: 10-50 calls/minute (generous!)
- No API key required
- No signup needed

**Data Refreshed:**
- Manual: Reload the page
- Auto-refresh: Can add `setInterval()` for live updates

---

## 🌐 Deployment

### Build for Production
```bash
ng build --configuration production
```

Output: `dist/crypto-tracker/browser/`

### Deploy to GitHub Pages

**Step 1: Build**
```bash
ng build --base-href "/crypto-tracker/"
```

**Step 2: Deploy**
```bash
npm install -g angular-cli-ghpages
npx angular-cli-ghpages --dir=dist/crypto-tracker/browser
```

**Step 3: Access**
Your dashboard will be live at:
```
https://YOUR_USERNAME.github.io/crypto-tracker/
```

### Deploy to Vercel (Alternative)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import repository
4. Deploy automatically!

### Deploy to Netlify (Alternative)

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Connect repository
4. Build command: `ng build --configuration production`
5. Publish directory: `dist/crypto-tracker/browser`

---

## 💡 Usage Examples

### Find Best Performing Coins
1. Click "Sort By" dropdown
2. Select "24h Change"
3. See top gainers first (green percentages)

### Search for Specific Coin
1. Type "Bitcoin" or "BTC" in search box
2. Results filter immediately
3. Clear search to see all coins again

### Compare Market Caps
1. Look at the pie chart
2. See which coins dominate the market
3. Bitcoin typically 40-50% of total

### Track Your Favorites
1. Use search to find coins
2. Check their 24h and 7d changes
3. See if they're gaining or losing

---

## 🎓 What You'll Learn

Building this project teaches:

### Frontend Development
- ✅ Angular component architecture
- ✅ TypeScript type safety
- ✅ Reactive programming with async/await
- ✅ Angular Material components
- ✅ Responsive CSS Grid layouts

### API Integration
- ✅ HTTP requests with fetch()
- ✅ Parsing JSON responses
- ✅ Error handling
- ✅ Data transformation

### Data Visualization
- ✅ Chart.js integration
- ✅ Multiple chart types (bar, pie, horizontal bar)
- ✅ Dynamic data updates
- ✅ Color coding for clarity

### UX/UI Design
- ✅ Material Design principles
- ✅ Color psychology (green=good, red=bad)
- ✅ Number formatting (K, M, B, T)
- ✅ Loading states
- ✅ Responsive design

### Software Engineering
- ✅ Service-based architecture
- ✅ Separation of concerns
- ✅ TypeScript interfaces
- ✅ Code organization
- ✅ Git workflow

---

## 🐛 Troubleshooting

### Problem: "ng: command not found"
```bash
npm install -g @angular/cli
ng version
```

### Problem: Charts not displaying
- Wait 2-3 seconds for data to load
- Check browser console (F12) for errors
- Hard refresh: `Ctrl + Shift + R`

### Problem: "Cannot find module 'chart.js'"
```bash
npm install chart.js
```

### Problem: Data not loading
- Check internet connection (API requires internet)
- Open browser DevTools (F12) → Network tab
- Look for failed requests to coingecko.com
- CoinGecko might be rate limiting (wait 1 minute, reload)

### Problem: Material components look wrong
```bash
# Re-add Angular Material
ng add @angular/material
# Choose any theme
```

---

## 🔮 Future Enhancements

Potential features to add:

- [ ] **Auto-refresh** - Update prices every 30 seconds
- [ ] **Favorites/Watchlist** - Save favorite coins (localStorage)
- [ ] **Price Alerts** - Notify when price hits target
- [ ] **Historical Charts** - 7d, 30d, 1y price graphs
- [ ] **Portfolio Tracker** - Track your crypto holdings
- [ ] **Dark Mode** - Toggle light/dark theme
- [ ] **Currency Switcher** - USD, EUR, GBP, etc.
- [ ] **News Feed** - Latest crypto news integration
- [ ] **Compare Mode** - Side-by-side coin comparison
- [ ] **Export Data** - Download CSV/Excel
- [ ] **Advanced Filters** - By market cap range, price range
- [ ] **Trending Coins** - Most searched/viewed
- [ ] **NFT Support** - Track NFT collections

---

## 🤝 Contributing

Contributions welcome! To contribute:

1. Fork the repository
2. Create feature branch: `git checkout -b feature/AmazingFeature`
3. Commit changes: `git commit -m 'Add AmazingFeature'`
4. Push to branch: `git push origin feature/AmazingFeature`
5. Open Pull Request

**Ideas for contributions:**
- Add new chart types
- Implement dark mode
- Add more filtering options
- Improve mobile responsiveness
- Add unit tests
- Optimize performance

---

## 📜 License

This project is licensed under the MIT License.

**MIT License** means:
- ✅ Free to use
- ✅ Free to modify
- ✅ Free to distribute
- ✅ Can use commercially

---

## 🙏 Acknowledgments

- **Data Provider:** [CoinGecko API](https://www.coingecko.com/en/api)
- **Framework:** [Angular](https://angular.io/) by Google
- **UI Library:** [Angular Material](https://material.angular.io/)
- **Charts:** [Chart.js](https://www.chartjs.org/)
- **Icons:** Material Icons
- **Inspiration:** Modern fintech dashboards

---

## 📧 Contact

**Amir Talebi**
- GitHub: [@ahtalebi](https://github.com/ahtalebi)
- Project: [github.com/ahtalebi/crypto-tracker](https://github.com/ahtalebi/crypto-tracker)
- Live Demo: [ahtalebi.github.io/crypto-tracker](https://ahtalebi.github.io/crypto-tracker/)

---

## 📚 Additional Resources

- [Angular Documentation](https://angular.io/docs)
- [Angular Material Guides](https://material.angular.io/guides)
- [Chart.js Documentation](https://www.chartjs.org/docs/)
- [CoinGecko API Docs](https://www.coingecko.com/en/api/documentation)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [RxJS Guide](https://rxjs.dev/guide/overview)

---

**Made with ❤️ and ☕ by Amir Talebi**

*Building beautiful dashboards, one crypto at a time* 💰

**Last Updated:** November 2025

---

## 🎯 Quick Start Summary
```bash
# Clone
git clone https://github.com/ahtalebi/crypto-tracker.git
cd crypto-tracker

# Install
npm install

# Run
ng serve

# Open
# http://localhost:4200
```

**That's it! You're tracking crypto! 🚀**
