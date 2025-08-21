const integrations = [
  { name: "QuickBooks Online", logo: "/generic-accounting-software-logo.png" },
  { name: "Stripe", logo: "/stripe-logo.png" },
  { name: "PayPal", logo: "/paypal-logo.png" },
  { name: "Square", logo: "/abstract-square-logo.png" },
  { name: "Shopify", logo: "/shopify-logo.png" },
  { name: "WooCommerce", logo: "/woocommerce-logo.png" },
]

export function IntegrationLogos() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="text-center mb-8">
        <h3 className="text-lg font-semibold text-brand-navy mb-2">We integrate with your favorite tools</h3>
        <p className="text-gray-600">Seamless connections to keep your data flowing</p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 hover:opacity-80 transition-opacity">
        {integrations.map((integration, index) => (
          <img
            key={index}
            src={integration.logo || "/placeholder.svg"}
            alt={integration.name}
            className="h-8 grayscale hover:grayscale-0 transition-all duration-300"
          />
        ))}
      </div>
    </div>
  )
}
