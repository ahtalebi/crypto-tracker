import { Component, OnInit, AfterViewInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import { CryptoService, CryptoData } from '../crypto.service';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatTabsModule,
    MatBadgeModule,
    MatTooltipModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {
  allData: CryptoData[] = [];
  filteredData: CryptoData[] = [];
  
  searchTerm: string = '';
  sortBy: string = 'marketcap';
  showCount: number = 50;
  
  loading: boolean = true;
  lastUpdated: Date = new Date();
  
  // Auto-refresh
  private refreshInterval: any;
  autoRefreshEnabled: boolean = true;
  refreshCountdown: number = 30;
  
  // Stats
  totalMarketCap: number = 0;
  biggestGainer: CryptoData | null = null;
  biggestLoser: CryptoData | null = null;
  
  // Charts
  priceChart: Chart | null = null;
  marketCapChart: Chart | null = null;
  changeChart: Chart | null = null;
  volumeChart: Chart | null = null;
  
  // Selected tab
  selectedTabIndex: number = 0;
  
  // Expose Math to template
  Math = Math;
  
  constructor(
    private cryptoService: CryptoService,
    private cdr: ChangeDetectorRef
  ) {}
  
  async ngOnInit() {
    await this.loadData();
    this.startAutoRefresh();
  }
  
  ngAfterViewInit() {
    setTimeout(() => {
      if (!this.loading && this.filteredData.length > 0) {
        this.createAllCharts();
      }
    }, 1000);
  }
  
  ngOnDestroy() {
    this.stopAutoRefresh();
  }
  
  async loadData() {
    try {
      console.log('Loading crypto data...');
      this.allData = await this.cryptoService.loadCryptoData(100);
      this.applyFilters();
      this.updateStats();
      this.loading = false;
      this.lastUpdated = new Date();
      this.cdr.detectChanges();
      
      if (this.selectedTabIndex === 1) {
        setTimeout(() => this.createAllCharts(), 100);
      }
    } catch (error) {
      console.error('Error loading data:', error);
      this.loading = false;
    }
  }
  
  startAutoRefresh() {
    if (this.autoRefreshEnabled) {
      this.refreshInterval = setInterval(() => {
        this.refreshCountdown--;
        if (this.refreshCountdown <= 0) {
          this.loadData();
          this.refreshCountdown = 30;
        }
      }, 1000);
    }
  }
  
  stopAutoRefresh() {
    if (this.refreshInterval) {
      clearInterval(this.refreshInterval);
    }
  }
  
  toggleAutoRefresh() {
    this.autoRefreshEnabled = !this.autoRefreshEnabled;
    if (this.autoRefreshEnabled) {
      this.refreshCountdown = 30;
      this.startAutoRefresh();
    } else {
      this.stopAutoRefresh();
    }
  }
  
  manualRefresh() {
    this.refreshCountdown = 30;
    this.loadData();
  }
  
  onTabChange(index: number) {
    this.selectedTabIndex = index;
    if (index === 1 && !this.loading) {
      setTimeout(() => this.createAllCharts(), 100);
    }
  }
  
  applyFilters() {
    this.filteredData = this.cryptoService.filterData(
      this.allData,
      this.searchTerm
    );
    
    this.filteredData = this.cryptoService.sortData(
      this.filteredData,
      this.sortBy,
      'desc'
    );
    
    this.filteredData = this.filteredData.slice(0, this.showCount);
    this.updateStats();
    
    if (!this.loading && this.selectedTabIndex === 1) {
      this.createAllCharts();
    }
  }
  
  updateStats() {
    this.totalMarketCap = this.cryptoService.getTotalMarketCap(this.filteredData);
    this.biggestGainer = this.cryptoService.getBiggestGainer(this.filteredData);
    this.biggestLoser = this.cryptoService.getBiggestLoser(this.filteredData);
  }
  
  createAllCharts() {
    this.createPriceChart();
    this.createMarketCapChart();
    this.createChangeChart();
    this.createVolumeChart();
  }
  
  createPriceChart() {
    if (this.priceChart) this.priceChart.destroy();
    
    const ctx = document.getElementById('priceChart') as HTMLCanvasElement;
    if (!ctx) return;
    
    const top10 = this.filteredData.slice(0, 10);
    
    this.priceChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: top10.map(c => c.symbol.toUpperCase()),
        datasets: [{
          label: 'Price (EUR)',
          data: top10.map(c => c.current_price),
          backgroundColor: 'rgba(63, 81, 181, 0.6)',
          borderColor: 'rgba(63, 81, 181, 1)',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Top 10 by Price',
            font: { size: 18, weight: 'bold' }
          },
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: { display: true, text: 'Price (€)', font: { size: 14 } },
            grid: { color: 'rgba(0,0,0,0.05)' }
          },
          x: {
            grid: { display: false }
          }
        }
      }
    });
  }
  
  createMarketCapChart() {
    if (this.marketCapChart) this.marketCapChart.destroy();
    
    const ctx = document.getElementById('marketCapChart') as HTMLCanvasElement;
    if (!ctx) return;
    
    const top5 = this.filteredData.slice(0, 5);
    const colors = [
      'rgba(255, 99, 132, 0.8)',
      'rgba(54, 162, 235, 0.8)',
      'rgba(255, 206, 86, 0.8)',
      'rgba(75, 192, 192, 0.8)',
      'rgba(153, 102, 255, 0.8)'
    ];
    
    this.marketCapChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: top5.map(c => c.name),
        datasets: [{
          data: top5.map(c => c.market_cap),
          backgroundColor: colors,
          borderWidth: 3,
          borderColor: '#fff'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Market Cap Distribution (Top 5)',
            font: { size: 18, weight: 'bold' }
          },
          legend: {
            position: 'bottom',
            labels: { font: { size: 12 }, padding: 15 }
          }
        }
      }
    });
  }
  
  createChangeChart() {
    if (this.changeChart) this.changeChart.destroy();
    
    const ctx = document.getElementById('changeChart') as HTMLCanvasElement;
    if (!ctx) return;
    
    const top10 = this.filteredData.slice(0, 10);
    
    this.changeChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: top10.map(c => c.symbol.toUpperCase()),
        datasets: [{
          label: '24h Change (%)',
          data: top10.map(c => c.price_change_percentage_24h),
          backgroundColor: top10.map(c => 
            c.price_change_percentage_24h >= 0 
              ? 'rgba(76, 175, 80, 0.7)' 
              : 'rgba(244, 67, 54, 0.7)'
          ),
          borderColor: top10.map(c => 
            c.price_change_percentage_24h >= 0 
              ? 'rgba(76, 175, 80, 1)' 
              : 'rgba(244, 67, 54, 1)'
          ),
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: '24h Price Change (%)',
            font: { size: 18, weight: 'bold' }
          },
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            title: { display: true, text: 'Change (%)', font: { size: 14 } },
            grid: { color: 'rgba(0,0,0,0.05)' }
          },
          x: {
            grid: { display: false }
          }
        }
      }
    });
  }
  
  createVolumeChart() {
    if (this.volumeChart) this.volumeChart.destroy();
    
    const ctx = document.getElementById('volumeChart') as HTMLCanvasElement;
    if (!ctx) return;
    
    const top10 = this.filteredData.slice(0, 10);
    
    this.volumeChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: top10.map(c => c.symbol.toUpperCase()),
        datasets: [{
          label: 'Volume (EUR)',
          data: top10.map(c => c.total_volume),
          backgroundColor: 'rgba(255, 152, 0, 0.7)',
          borderColor: 'rgba(255, 152, 0, 1)',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        plugins: {
          title: {
            display: true,
            text: 'Trading Volume (24h)',
            font: { size: 18, weight: 'bold' }
          },
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            beginAtZero: true,
            title: { display: true, text: 'Volume (€)', font: { size: 14 } },
            grid: { color: 'rgba(0,0,0,0.05)' }
          },
          y: {
            grid: { display: false }
          }
        }
      }
    });
  }
  
  formatNumber(num: number): string {
    if (num >= 1e12) return '€' + (num / 1e12).toFixed(2) + 'T';
    if (num >= 1e9) return '€' + (num / 1e9).toFixed(2) + 'B';
    if (num >= 1e6) return '€' + (num / 1e6).toFixed(2) + 'M';
    if (num >= 1e3) return '€' + (num / 1e3).toFixed(2) + 'K';
    return '€' + num.toFixed(2);
  }
  
  getChangeClass(change: number): string {
    return change >= 0 ? 'positive' : 'negative';
  }
}
