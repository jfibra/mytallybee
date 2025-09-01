import { Card } from "@/components/ui/card"

const testimonials = [
  {
    name: "Jesse Brewer",
    company: "Chiloquin Lawn Care",
    text: "We have worked with Marc from MyTallyBee for over 3 years. They have been a great asset to our small business.",
    rating: 5,
  },
  {
    name: "Eli",
    company: "ochospitalbeds.com",
    text: "MyTallyBee.com has been a great company to work with. They are both efficient and reliable.",
    rating: 5,
  },
  {
    name: "Dr. Zeph Okeke",
    company: "",
    text: "I am very happy with MyTallybee. I confidently referred them to a couple of my friends.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {testimonials.map((testimonial, index) => (
        <Card
          key={index}
          className="p-4 sm:p-6 bg-white border-2 border-gray-100 hover:border-brand-blue/20 transition-colors"
        >
          <div className="mb-4">
            <h4 className="font-semibold text-brand-navy text-sm sm:text-base">{testimonial.name}</h4>
            {testimonial.company && <p className="text-xs sm:text-sm text-gray-600">{testimonial.company}</p>}
          </div>
          <div className="flex mb-3">
            {[...Array(testimonial.rating)].map((_, i) => (
              <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-brand-amber fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-700 italic text-sm sm:text-base">"{testimonial.text}"</p>
        </Card>
      ))}
    </div>
  )
}
