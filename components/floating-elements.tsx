export function FloatingDashboard({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg width="400" height="300" viewBox="0 0 400 300" className="drop-shadow-lg">
        <defs>
          <linearGradient id="dashboardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(60, 141, 188)" />
            <stop offset="100%" stopColor="rgb(0, 31, 63)" />
          </linearGradient>
        </defs>

        {/* Dashboard Background */}
        <rect x="20" y="20" width="360" height="260" rx="12" fill="white" stroke="rgb(226, 232, 240)" strokeWidth="2" />

        {/* Header */}
        <rect x="40" y="40" width="320" height="40" rx="6" fill="url(#dashboardGradient)" />
        <text x="60" y="65" fill="white" fontSize="14" fontWeight="600">
          QuickBooks Dashboard
        </text>

        {/* Revenue Chart */}
        <rect x="40" y="100" width="150" height="80" rx="6" fill="rgb(248, 250, 252)" stroke="rgb(226, 232, 240)" />
        <text x="50" y="120" fill="rgb(0, 31, 63)" fontSize="12" fontWeight="500">
          Revenue
        </text>
        <text x="50" y="140" fill="rgb(60, 141, 188)" fontSize="20" fontWeight="700">
          $24,580
        </text>
        <polyline
          points="50,160 70,150 90,145 110,140 130,135 150,130 170,125"
          fill="none"
          stroke="rgb(255, 193, 7)"
          strokeWidth="3"
        />

        {/* Expenses */}
        <rect x="210" y="100" width="150" height="80" rx="6" fill="rgb(248, 250, 252)" stroke="rgb(226, 232, 240)" />
        <text x="220" y="120" fill="rgb(0, 31, 63)" fontSize="12" fontWeight="500">
          Expenses
        </text>
        <text x="220" y="140" fill="rgb(220, 53, 69)" fontSize="20" fontWeight="700">
          $8,240
        </text>

        {/* Transaction List */}
        <rect x="40" y="200" width="320" height="60" rx="6" fill="rgb(248, 250, 252)" stroke="rgb(226, 232, 240)" />
        <text x="50" y="220" fill="rgb(0, 31, 63)" fontSize="12" fontWeight="500">
          Recent Transactions
        </text>
        <circle cx="60" cy="235" r="4" fill="rgb(34, 197, 94)" />
        <text x="75" y="240" fill="rgb(0, 31, 63)" fontSize="11">
          Office Supplies - $245
        </text>
        <circle cx="60" cy="250" r="4" fill="rgb(60, 141, 188)" />
        <text x="75" y="255" fill="rgb(0, 31, 63)" fontSize="11">
          Client Payment - $1,200
        </text>
      </svg>
    </div>
  )
}

export function FloatingReports({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg width="300" height="200" viewBox="0 0 300 200" className="drop-shadow-lg">
        <rect x="10" y="10" width="280" height="180" rx="8" fill="white" stroke="rgb(226, 232, 240)" strokeWidth="2" />

        {/* Header */}
        <rect x="20" y="20" width="260" height="30" rx="4" fill="rgb(248, 250, 252)" />
        <text x="30" y="40" fill="rgb(0, 31, 63)" fontSize="12" fontWeight="600">
          P&L Report
        </text>

        {/* Chart bars */}
        <rect x="40" y="70" width="60" height="80" rx="2" fill="rgb(60, 141, 188)" />
        <rect x="120" y="90" width="60" height="60" rx="2" fill="rgb(255, 193, 7)" />
        <rect x="200" y="80" width="60" height="70" rx="2" fill="rgb(34, 197, 94)" />

        {/* Labels */}
        <text x="65" y="170" fill="rgb(100, 116, 139)" fontSize="10">
          Q1
        </text>
        <text x="145" y="170" fill="rgb(100, 116, 139)" fontSize="10">
          Q2
        </text>
        <text x="225" y="170" fill="rgb(100, 116, 139)" fontSize="10">
          Q3
        </text>
      </svg>
    </div>
  )
}

export function FloatingCalculator({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg width="180" height="240" viewBox="0 0 180 240" className="drop-shadow-lg">
        <rect x="10" y="10" width="160" height="220" rx="12" fill="white" stroke="rgb(226, 232, 240)" strokeWidth="2" />

        {/* Screen */}
        <rect x="25" y="25" width="130" height="40" rx="4" fill="rgb(0, 31, 63)" />
        <text x="140" y="50" fill="white" fontSize="16" fontWeight="600" textAnchor="end">
          $2,450.00
        </text>

        {/* Buttons */}
        {[0, 1, 2, 3].map((row) =>
          [0, 1, 2].map((col) => (
            <rect
              key={`${row}-${col}`}
              x={30 + col * 40}
              y={80 + row * 35}
              width="30"
              height="25"
              rx="4"
              fill="rgb(248, 250, 252)"
              stroke="rgb(226, 232, 240)"
            />
          )),
        )}

        {/* Special buttons */}
        <rect x="130" y="80" width="30" height="60" rx="4" fill="rgb(255, 193, 7)" />
        <text x="145" y="115" fill="rgb(0, 31, 63)" fontSize="14" fontWeight="600" textAnchor="middle">
          =
        </text>
      </svg>
    </div>
  )
}
