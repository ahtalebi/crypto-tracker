import { Injectable } from '@angular/core';

export interface CryptoData {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  total_volume: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  price_change_percentage_7d: number;
  high_24h: number;
  low_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
}

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  
  private apiUrl = 'https://api.coingecko.com/api/v3/coins/markets';
  
  async loadCryptoData(limit: number = 50): Promise<CryptoData[]> {
    try {
      const url = `${this.apiUrl}?vs_currency=eur&order=market_cap_desc&per_page=${limit}&sparkline=false&price_change_percentage=7d`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Loaded crypto data:', data.length, 'coins');
      return data;
      
    } catch (error) {
      console.error('Error loading crypto data:', error);
      throw error;
    }
  }
  
  filterData(
    data: CryptoData[],
    searchTerm?: string,
    minPrice?: number,
    maxPrice?: number
  ): CryptoData[] {
    let filtered = data;
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(crypto => 
        crypto.name.toLowerCase().includes(term) || 
        crypto.symbol.toLowerCase().includes(term)
      );
    }
    
    if (minPrice !== undefined) {
      filtered = filtered.filter(crypto => crypto.current_price >= minPrice);
    }
    
    if (maxPrice !== undefined) {
      filtered = filtered.filter(crypto => crypto.current_price <= maxPrice);
    }
    
    return filtered;
  }
  
  sortData(data: CryptoData[], sortBy: string, order: 'asc' | 'desc' = 'desc'): CryptoData[] {
    const sorted = [...data].sort((a, b) => {
      let aVal: any, bVal: any;
      
      switch(sortBy) {
        case 'price':
          aVal = a.current_price;
          bVal = b.current_price;
          break;
        case 'change24h':
          aVal = a.price_change_percentage_24h;
          bVal = b.price_change_percentage_24h;
          break;
        case 'marketcap':
          aVal = a.market_cap;
          bVal = b.market_cap;
          break;
        case 'volume':
          aVal = a.total_volume;
          bVal = b.total_volume;
          break;
        default:
          aVal = a.market_cap_rank;
          bVal = b.market_cap_rank;
      }
      
      if (order === 'asc') {
        return aVal - bVal;
      } else {
        return bVal - aVal;
      }
    });
    
    return sorted;
  }
  
  getTotalMarketCap(data: CryptoData[]): number {
    return data.reduce((sum, crypto) => sum + crypto.market_cap, 0);
  }
  
  getBiggestGainer(data: CryptoData[]): CryptoData | null {
    if (data.length === 0) return null;
    return data.reduce((max, crypto) => 
      crypto.price_change_percentage_24h > max.price_change_percentage_24h ? crypto : max
    );
  }
  
  getBiggestLoser(data: CryptoData[]): CryptoData | null {
    if (data.length === 0) return null;
    return data.reduce((min, crypto) => 
      crypto.price_change_percentage_24h < min.price_change_percentage_24h ? crypto : min
    );
  }
}
