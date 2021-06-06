import tradingviewWidgetContainerJs from 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'

function tradingviewWidgetContainer() {
  tradingviewWidgetContainerJs(
    {
      "symbol": "OKEX:BTCUSDT",
      "width": "100%",
      "height": "100%",
      "locale": "zh_CN",
      "dateRange": "1D",
      "colorTheme": "dark",
      "trendLineColor": "rgba(33, 150, 243, 1)",
      "underLineColor": "rgba(33, 150, 243, 0.3)",
      "underLineBottomColor": "rgba(33, 150, 243, 0.0)",
      "isTransparent": false,
      "autosize": true,
      "largeChartUrl": ""
    }
  )
}

export {
  tradingviewWidgetContainer
}