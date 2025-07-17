# AP-31: FX Derivatives UI/UX Design Specification

## Overview

This document defines the user interface and user experience design for FX derivatives integration in the Digital Banking platform (DKCZ). The design enables clients to view and manage their FX derivatives (FX spot, FX outright, FX swap) within their investment portfolios.

## Design Principles

### Banking UI Standards
- **Consistency**: Follow existing DKCZ design patterns and components
- **Clarity**: Clear presentation of financial data with proper formatting
- **Trust**: Professional appearance with emphasis on data accuracy
- **Accessibility**: Comply with WCAG 2.1 AA standards
- **Responsive**: Support desktop, tablet, and mobile devices

### Financial Data Presentation
- **Precision**: Display amounts with appropriate decimal places
- **Currency**: Clear currency indication for all monetary values
- **Color Coding**: Use consistent colors for profit/loss indicators
- **Sorting**: Enable sorting on key financial metrics
- **Filtering**: Provide filtering options for different derivative types

## User Flow

### Primary Navigation Path
```
Digital Banking → Investments → Portfolio Selection → FX Derivatives
```

### Detailed User Journey
1. **Login**: Client authenticates to Digital Banking
2. **Portfolio Access**: Navigate to Investments section
3. **Portfolio Selection**: Choose specific portfolio or view all
4. **FX Overview**: View FX derivatives in "Everything" tab or dedicated "FX Derivatives" tab
5. **Detail View**: Expand individual derivative for detailed information
6. **Portfolio Impact**: View how derivatives affect overall portfolio value

## Screen Layouts

### 1. Portfolio Overview with FX Derivatives Section

#### Layout Structure
```
┌─────────────────────────────────────────────────────────────────┐
│ Portfolio: Investment Portfolio #1                     [Filter] │
├─────────────────────────────────────────────────────────────────┤
│ Tabs: [Everything] [Stocks] [Bonds] [FX Derivatives] [Funds]   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ Securities                                              [↕]     │
│ ├─ Stock 1                                    +2.5%   50,000 CZK│
│ ├─ Bond 1                                     +1.2%   75,000 CZK│
│ └─ ...                                                          │
│                                                                 │
│ FX Derivatives                                          [↕]     │
│ ├─ EUR/CZK Spot                              +0.1%    2,547,500 CZK│
│ ├─ USD/CZK Outright                          -0.3%    1,175,000 CZK│
│ ├─ GBP/CZK Swap                              +0.8%    3,125,000 CZK│
│ └─ [View All FX Derivatives]                                    │
│                                                                 │
│ Funds                                                   [↕]     │
│ └─ ...                                                          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### UI Components

**Section Header**
- Title: "FX Derivatives"
- Expand/Collapse toggle
- Count indicator: "(3 positions)"
- Quick filter: "Active only" checkbox

**Individual Row**
- **Currency Pair**: EUR/CZK (sortable)
- **Trade Direction**: Buy/Sell indicator with icon
- **P&L**: Color-coded percentage and absolute value
- **Current Value**: In CZK with proper formatting
- **Expand Icon**: Arrow to show details

### 2. Dedicated FX Derivatives Tab

#### Layout Structure
```
┌─────────────────────────────────────────────────────────────────┐
│ Portfolio: Investment Portfolio #1                              │
├─────────────────────────────────────────────────────────────────┤
│ Tabs: [Everything] [Stocks] [Bonds] [FX Derivatives●] [Funds]  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ FX Derivatives Overview                            [Sort: Date↓]│
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Total Positions: 3                   Total Value: 6,847,500 CZK│
│ │ Unrealized P&L: +12,500 CZK (+0.18%)                       │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ Filter: [All Types ▼] [All Currencies ▼] [Active Only ☑]      │
│                                                                 │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Type    │ Pair    │ Direction │ Volume    │ P&L      │ Value │ │
│ ├─────────────────────────────────────────────────────────────┤ │
│ │ Spot    │ EUR/CZK │ Buy       │ 100,000   │ +2,500   │ 2,547,500│
│ │         │         │           │ EUR       │ +0.10%   │ CZK   │ │
│ │ [+] Details                                                 │ │
│ ├─────────────────────────────────────────────────────────────┤ │
│ │ Outright│ USD/CZK │ Sell      │ 50,000    │ -3,500   │ 1,175,000│
│ │         │         │           │ USD       │ -0.30%   │ CZK   │ │
│ │ [+] Details                                                 │ │
│ ├─────────────────────────────────────────────────────────────┤ │
│ │ Swap    │ GBP/CZK │ Buy/Sell  │ 75,000    │ +13,500  │ 3,125,000│
│ │         │         │           │ GBP       │ +0.80%   │ CZK   │ │
│ │ [+] Details                                                 │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### UI Components

**Summary Panel**
- Total positions count
- Total value in CZK
- Unrealized P&L (absolute and percentage)
- Color-coded background for positive/negative P&L

**Filter Controls**
- Type dropdown: All Types, FX Spot, FX Outright, FX Swap
- Currency dropdown: All Currencies, EUR, USD, GBP, etc.
- Status checkbox: Active Only
- Sort dropdown: Date, Currency Pair, P&L, Value

**Data Table**
- Sortable columns
- Expandable rows for details
- Responsive column widths
- Pagination for large datasets

### 3. FX Derivative Detail View

#### Layout Structure
```
┌─────────────────────────────────────────────────────────────────┐
│ FX Spot: EUR/CZK                                    [X] Close   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ Trade Information                                               │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Reference:        BLT_FX_20240115_001                      │ │
│ │ Trade Date:       15.01.2024 10:30                         │ │
│ │ Settlement Date:  17.01.2024                               │ │
│ │ Portfolio:        Investment Portfolio #1                  │ │
│ │ Trade Number:     TOPAS_12345                              │ │
│ │ Status:          Active                                    │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ Position Details                                                │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Currency Pair:    EUR/CZK                                  │ │
│ │ Direction:        Buy EUR / Sell CZK                       │ │
│ │ FX Rate:         25.450000                                 │ │
│ │ Base Amount:     100,000.00 EUR                            │ │
│ │ Quote Amount:    2,545,000.00 CZK                          │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ Valuation                                                       │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Valuation Date:   16.01.2024                               │ │
│ │ Market Rate:      25.475000                                │ │
│ │ Current Value:    2,547,500.00 CZK                         │ │
│ │ Traded Value:     2,545,000.00 CZK                         │ │
│ │ Unrealized P&L:   +2,500.00 CZK (+0.10%)                  │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ [Close Position] [Export Details]                              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### UI Components

**Header**
- Derivative type and currency pair
- Close button
- Status indicator

**Information Panels**
- Trade Information: Reference, dates, portfolio, trade number
- Position Details: Currency pair, direction, rates, amounts
- Valuation: Current market data, P&L calculations

**Action Buttons**
- Close Position (if applicable)
- Export Details (PDF/Excel)
- Contact Support (for questions)

### 4. FX Swap Detail View

#### Layout Structure
```
┌─────────────────────────────────────────────────────────────────┐
│ FX Swap: USD/CZK                                    [X] Close   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ Trade Information                                               │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Reference:        BLT_FX_20240115_002                      │ │
│ │ Trade Date:       15.01.2024 10:30                         │ │
│ │ Portfolio:        Investment Portfolio #1                  │ │
│ │ Trade Number:     TOPAS_12346                              │ │
│ │ Status:          Active                                    │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ Near Leg (Spot)                                                │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Settlement Date:  17.01.2024                               │ │
│ │ Direction:        Buy USD / Sell CZK                       │ │
│ │ FX Rate:         23.500000                                 │ │
│ │ Base Amount:     50,000.00 USD                             │ │
│ │ Quote Amount:    1,175,000.00 CZK                          │ │
│ │ Status:          Settled ✓                                 │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ Far Leg (Forward)                                               │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Settlement Date:  15.02.2024                               │ │
│ │ Direction:        Sell USD / Buy CZK                       │ │
│ │ FX Rate:         23.750000                                 │ │
│ │ Base Amount:     50,000.00 USD                             │ │
│ │ Quote Amount:    1,187,500.00 CZK                          │ │
│ │ Status:          Active                                    │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ Combined Valuation                                              │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Valuation Date:   16.01.2024                               │ │
│ │ Total Value:      3,125,000.00 CZK                         │ │
│ │ Unrealized P&L:   +13,500.00 CZK (+0.80%)                 │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 5. Portfolio Impact Integration

#### Updated Portfolio Summary
```
┌─────────────────────────────────────────────────────────────────┐
│ Portfolio Value Summary                                         │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Total Portfolio Value:    12,847,500.00 CZK                │ │
│ │ ├─ Securities:           5,975,000.00 CZK                  │ │
│ │ ├─ FX Derivatives:       6,847,500.00 CZK                  │ │
│ │ └─ Funds:                  25,000.00 CZK                   │ │
│ │                                                             │ │
│ │ Unrealized P&L:           +147,500.00 CZK (+1.16%)         │ │
│ │ ├─ Securities:           +135,000.00 CZK                   │ │
│ │ ├─ FX Derivatives:        +12,500.00 CZK                   │ │
│ │ └─ Funds:                     +0.00 CZK                    │ │
│ └─────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

#### Enhanced Pie Charts

**Portfolio Composition by Type**
```
┌─────────────────────────────────────────────────────────────────┐
│ Portfolio Composition                                           │
│                                                                 │
│    ┌─────────────────┐                                          │
│    │                 │ Securities (46.5%)                      │
│    │   ●●●●●●●●●●●●●   │ FX Derivatives (53.3%)                 │
│    │ ●●●●●●●●●●●●●●●●● │ Funds (0.2%)                           │
│    │●●●●●●●●●●●●●●●●●●●│                                        │
│    │●●●●●●●●●●●●●●●●●●●│                                        │
│    │ ●●●●●●●●●●●●●●●●● │                                        │
│    │   ●●●●●●●●●●●●●   │                                        │
│    └─────────────────┘                                          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Currency Distribution (Long/Short)**
```
┌─────────────────────────────────────────────────────────────────┐
│ Currency Exposure                                               │
│                                                                 │
│ Long Positions                     Short Positions              │
│ ┌─────────────────┐                ┌─────────────────┐          │
│ │       CZK       │                │       USD       │          │
│ │    (55.2%)      │                │    (18.7%)      │          │
│ │                 │                │                 │          │
│ │       EUR       │                │       GBP       │          │
│ │    (26.1%)      │                │    (26.1%)      │          │
│ └─────────────────┘                └─────────────────┘          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 6. Term Trades (Virtual Portfolio)

#### Layout for BU Trades
```
┌─────────────────────────────────────────────────────────────────┐
│ Term Trades (Business Unit)                                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ ⚠️  These FX derivatives are not linked to a specific portfolio │
│     and are managed through Business Unit channels.            │
│                                                                 │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Type    │ Pair    │ Direction │ Volume    │ P&L      │ Value │ │
│ ├─────────────────────────────────────────────────────────────┤ │
│ │ Spot    │ CHF/CZK │ Sell      │ 25,000    │ +1,250   │ 625,000│
│ │         │         │           │ CHF       │ +0.20%   │ CZK   │ │
│ │ [+] Details                                                 │ │
│ ├─────────────────────────────────────────────────────────────┤ │
│ │ Outright│ JPY/CZK │ Buy       │ 5,000,000 │ -15,000  │ 1,250,000│
│ │         │         │           │ JPY       │ -1.20%   │ CZK   │ │
│ │ [+] Details                                                 │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ 📧 Confirmations and statements are sent directly via email    │
│ 📞 For questions, contact your relationship manager           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Design Specifications

### Color Scheme

#### Primary Colors
- **Positive P&L**: #28a745 (Green)
- **Negative P&L**: #dc3545 (Red)
- **Neutral**: #6c757d (Gray)
- **Primary Action**: #007bff (Blue)
- **Secondary Action**: #6c757d (Gray)

#### Status Colors
- **Active**: #28a745 (Green)
- **Settled**: #6c757d (Gray)
- **Cancelled**: #dc3545 (Red)

### Typography

#### Font Sizes
- **Headers**: 24px, 20px, 18px
- **Body Text**: 16px
- **Small Text**: 14px
- **Captions**: 12px

#### Font Weights
- **Headers**: 600 (Semi-bold)
- **Labels**: 500 (Medium)
- **Values**: 400 (Regular)
- **Emphasis**: 700 (Bold)

### Spacing

#### Margins and Padding
- **Section Spacing**: 24px
- **Component Spacing**: 16px
- **Element Spacing**: 8px
- **Tight Spacing**: 4px

#### Layout Grid
- **Container**: 1200px max-width
- **Columns**: 12-column grid
- **Gutters**: 20px

### Responsive Design

#### Breakpoints
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

#### Mobile Adaptations
- Stack columns vertically
- Increase touch targets to 44px minimum
- Simplify tables with expandable rows
- Hide less critical columns
- Adjust font sizes for readability

### Accessibility

#### WCAG 2.1 AA Compliance
- **Color Contrast**: 4.5:1 ratio for normal text
- **Focus Indicators**: Visible keyboard navigation
- **Alt Text**: Descriptive alternative text for images
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader**: Semantic HTML and ARIA labels

#### Internationalization
- **Text Direction**: Support for RTL languages
- **Date Formats**: Locale-specific formatting
- **Number Formats**: Appropriate decimal separators
- **Currency**: Locale-specific currency symbols

## Component Library

### FX Derivative Row Component

```jsx
const FxDerivativeRow = ({
  derivative,
  isExpanded,
  onToggle,
  onViewDetails
}) => {
  return (
    <div className="fx-derivative-row">
      <div className="fx-derivative-summary">
        <div className="type-indicator">
          <span className="type-badge">{derivative.type}</span>
        </div>
        <div className="currency-pair">
          <span className="pair">{derivative.currencyPair}</span>
          <span className="direction">{derivative.direction}</span>
        </div>
        <div className="volume">
          <span className="amount">{derivative.baseAmount}</span>
          <span className="currency">{derivative.baseCurrency}</span>
        </div>
        <div className="pnl">
          <span className={`pnl-value ${derivative.pnl >= 0 ? 'positive' : 'negative'}`}>
            {derivative.pnlPercent}%
          </span>
          <span className="pnl-amount">{derivative.pnlAmount} CZK</span>
        </div>
        <div className="current-value">
          <span className="value">{derivative.currentValue} CZK</span>
        </div>
        <div className="actions">
          <button onClick={onToggle} className="expand-button">
            {isExpanded ? '−' : '+'}
          </button>
          <button onClick={onViewDetails} className="details-button">
            Details
          </button>
        </div>
      </div>
      {isExpanded && (
        <div className="fx-derivative-details">
          <FxDerivativeDetails derivative={derivative} />
        </div>
      )}
    </div>
  );
};
```

### Portfolio Summary Component

```jsx
const PortfolioSummary = ({ portfolio }) => {
  return (
    <div className="portfolio-summary">
      <div className="summary-header">
        <h2>Portfolio Summary</h2>
        <div className="last-updated">
          Last updated: {portfolio.lastUpdated}
        </div>
      </div>
      <div className="summary-values">
        <div className="total-value">
          <label>Total Portfolio Value</label>
          <span className="value">{portfolio.totalValue} CZK</span>
        </div>
        <div className="unrealized-pnl">
          <label>Unrealized P&L</label>
          <span className={`value ${portfolio.unrealizedPnl >= 0 ? 'positive' : 'negative'}`}>
            {portfolio.unrealizedPnl} CZK ({portfolio.unrealizedPnlPercent}%)
          </span>
        </div>
      </div>
      <div className="composition-breakdown">
        <PortfolioCompositionChart data={portfolio.composition} />
      </div>
    </div>
  );
};
```

### FX Derivatives Filter Component

```jsx
const FxDerivativesFilter = ({ filters, onFilterChange }) => {
  return (
    <div className="fx-derivatives-filter">
      <div className="filter-controls">
        <div className="filter-group">
          <label>Type</label>
          <select 
            value={filters.type}
            onChange={(e) => onFilterChange('type', e.target.value)}
          >
            <option value="">All Types</option>
            <option value="FX_SPOT">FX Spot</option>
            <option value="FX_OUTRIGHT">FX Outright</option>
            <option value="FX_SWAP">FX Swap</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Currency</label>
          <select 
            value={filters.currency}
            onChange={(e) => onFilterChange('currency', e.target.value)}
          >
            <option value="">All Currencies</option>
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
            <option value="CHF">CHF</option>
          </select>
        </div>
        <div className="filter-group">
          <label>
            <input 
              type="checkbox"
              checked={filters.activeOnly}
              onChange={(e) => onFilterChange('activeOnly', e.target.checked)}
            />
            Active Only
          </label>
        </div>
      </div>
      <div className="sort-controls">
        <label>Sort by</label>
        <select 
          value={filters.sortBy}
          onChange={(e) => onFilterChange('sortBy', e.target.value)}
        >
          <option value="tradeDate">Trade Date</option>
          <option value="currencyPair">Currency Pair</option>
          <option value="pnl">P&L</option>
          <option value="value">Value</option>
        </select>
        <button 
          onClick={() => onFilterChange('sortOrder', filters.sortOrder === 'asc' ? 'desc' : 'asc')}
          className="sort-order-toggle"
        >
          {filters.sortOrder === 'asc' ? '↑' : '↓'}
        </button>
      </div>
    </div>
  );
};
```

## User Testing

### Usability Testing Scenarios

#### Scenario 1: Portfolio Overview
- **Task**: Navigate to portfolio and identify FX derivatives
- **Expected**: User can find FX derivatives section within 30 seconds
- **Metrics**: Time to complete, error rate, user satisfaction

#### Scenario 2: Derivative Details
- **Task**: View detailed information for a specific FX derivative
- **Expected**: User can access and understand detailed trade information
- **Metrics**: Completion rate, information comprehension, task efficiency

#### Scenario 3: Portfolio Impact
- **Task**: Understand how FX derivatives affect portfolio value
- **Expected**: User can interpret portfolio composition and P&L impact
- **Metrics**: Comprehension rate, confidence level, accuracy of interpretation

### A/B Testing Opportunities

#### Test 1: Layout Preference
- **Variant A**: FX derivatives as subsection in "Everything" tab
- **Variant B**: Dedicated "FX Derivatives" tab
- **Metrics**: User engagement, time spent, preference survey

#### Test 2: Detail View Design
- **Variant A**: Modal dialog for derivative details
- **Variant B**: Inline expandable rows
- **Metrics**: User interaction rate, task completion time, user preference

#### Test 3: P&L Display
- **Variant A**: Percentage first, then absolute value
- **Variant B**: Absolute value first, then percentage
- **Metrics**: User comprehension, preferred format, error rate

## Performance Considerations

### Loading Performance
- **Initial Load**: < 2 seconds for portfolio overview
- **Filter Application**: < 500ms for client-side filtering
- **Detail Expansion**: < 300ms for detail view
- **Data Refresh**: < 1 second for updated valuations

### Optimization Strategies
- **Lazy Loading**: Load FX derivatives data on tab activation
- **Pagination**: Limit initial display to 20 items
- **Caching**: Cache portfolio data for 5 minutes
- **Progressive Enhancement**: Basic functionality without JavaScript

### Error Handling
- **Data Unavailable**: Show placeholder with error message
- **Network Issues**: Provide retry mechanism
- **Partial Data**: Display available data with warnings
- **Stale Data**: Indicate last update time

## Implementation Guidelines

### Development Phases

#### Phase 1: Basic Display
- Portfolio overview integration
- Basic FX derivatives list
- Simple detail view
- Essential filtering

#### Phase 2: Enhanced Features
- Dedicated FX derivatives tab
- Advanced filtering and sorting
- Portfolio impact visualization
- Responsive design

#### Phase 3: Advanced Functionality
- Real-time updates
- Export capabilities
- Advanced analytics
- Mobile optimization

### Quality Assurance

#### Testing Checklist
- [ ] Cross-browser compatibility
- [ ] Responsive design validation
- [ ] Accessibility compliance
- [ ] Performance benchmarks
- [ ] User acceptance testing
- [ ] Security testing
- [ ] Integration testing

#### Browser Support
- **Chrome**: Latest 2 versions
- **Firefox**: Latest 2 versions
- **Safari**: Latest 2 versions
- **Edge**: Latest 2 versions
- **Mobile**: iOS Safari, Chrome Mobile

### Deployment Strategy

#### Rollout Plan
1. **Internal Testing**: Development and QA teams
2. **Beta Testing**: Selected client group (10-20 users)
3. **Gradual Rollout**: 25% → 50% → 75% → 100%
4. **Monitoring**: Track usage metrics and error rates
5. **Feedback Collection**: Gather user feedback and iterate

#### Success Metrics
- **User Adoption**: 70% of FX derivatives clients use the feature
- **User Satisfaction**: 4.0+ rating on user feedback survey
- **Error Rate**: < 1% application errors
- **Performance**: < 2 second load times for 95% of requests
- **Support Tickets**: < 5% increase in support volume