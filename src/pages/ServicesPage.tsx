import { MapPin, Users, Car, Camera, Mountain, Utensils, Home, Globe } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Local Guides",
      description: "Experienced, English-speaking guides who know every hidden gem and story of the region.",
      features: [
        "Certified local guides",
        "Multiple language options",
        "Cultural and historical expertise",
        "Photography assistance"
      ]
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: "Transportation Services",
      description: "Comfortable, reliable transportation from airport transfers to mountain adventures.",
      features: [
        "Airport pickup & drop-off",
        "4WD vehicles for mountain terrain",
        "Long-distance comfortable coaches",
        "Driver-guide combinations"
      ]
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Accommodation Booking",
      description: "From luxury hotels to traditional yurts, we arrange authentic accommodation experiences.",
      features: [
        "Boutique hotels in cities",
        "Traditional yurt stays",
        "Guesthouse experiences",
        "Camping arrangements"
      ]
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Custom Itinerary Planning",
      description: "Personalized tour planning based on your interests, budget, and available time.",
      features: [
        "Tailored route planning",
        "Activity recommendations",
        "Budget optimization",
        "Flexible scheduling"
      ]
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Photography Tours",
      description: "Specialized photography expeditions to capture the stunning landscapes and culture.",
      features: [
        "Professional photography guides",
        "Equipment rental available",
        "Best timing for golden hours",
        "Cultural photography ethics"
      ]
    },
    {
      icon: <Mountain className="h-8 w-8" />,
      title: "Adventure Activities",
      description: "Thrilling outdoor activities from horseback riding to mountain trekking.",
      features: [
        "Horseback riding experiences",
        "Trekking and hiking",
        "Eagle hunting demonstrations",
        "Yurt building workshops"
      ]
    },
    {
      icon: <Utensils className="h-8 w-8" />,
      title: "Culinary Experiences",
      description: "Taste authentic Central Asian cuisine and learn traditional cooking methods.",
      features: [
        "Traditional cooking classes",
        "Local family dinners",
        "Market tours",
        "Nomadic food experiences"
      ]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Visa & Documentation",
      description: "Assistance with visa requirements and travel documentation for European travelers.",
      features: [
        "Visa requirement guidance",
        "Document preparation help",
        "Border crossing assistance",
        "Travel insurance advice"
      ]
    }
  ];

  const packages = [
    {
      name: "Essential Package",
      price: "From €150/day",
      description: "Perfect for budget-conscious travelers",
      includes: [
        "Local guide (4 hours/day)",
        "Basic transportation",
        "Accommodation booking assistance",
        "Emergency support"
      ]
    },
    {
      name: "Premium Package",
      price: "From €250/day",
      description: "Comprehensive service for comfort travelers",
      includes: [
        "Full-day expert guide",
        "Private transportation",
        "All accommodation bookings",
        "Meal arrangements",
        "Activity bookings",
        "24/7 support"
      ],
      popular: true
    },
    {
      name: "Luxury Package",
      price: "From €400/day",
      description: "Ultimate experience with every detail covered",
      includes: [
        "Dedicated personal guide",
        "Luxury vehicle with driver",
        "Premium accommodations",
        "Private dining experiences",
        "Exclusive cultural activities",
        "Photography services",
        "Complete concierge service"
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Comprehensive travel services designed to make your Central Asian adventure
            seamless, authentic, and unforgettable.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From planning to execution, we handle every aspect of your journey
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the level of service that best fits your travel style and budget
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg overflow-hidden ${pkg.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''}`}>
                {pkg.popular && (
                  <div className="bg-blue-500 text-white text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">{pkg.price}</div>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>

                  <ul className="space-y-3 mb-8">
                    {pkg.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5 mr-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                    pkg.popular
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}>
                    Choose This Package
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Services?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-blue-600 font-semibold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
                    <p className="text-gray-600">Born and raised in Central Asia, our team knows the region intimately and shares authentic cultural insights.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-blue-600 font-semibold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Personalized Approach</h3>
                    <p className="text-gray-600">Every service is tailored to your specific interests, ensuring a unique and meaningful travel experience.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-blue-600 font-semibold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Reliable Support</h3>
                    <p className="text-gray-600">24/7 support throughout your journey, ensuring peace of mind and immediate assistance when needed.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-blue-600 font-semibold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Sustainable Tourism</h3>
                    <p className="text-gray-600">We work with local communities to ensure tourism benefits the region while preserving its natural and cultural heritage.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1552727137-4ac2e720dd05?w=600&h=400&fit=crop"
                alt="Local guide with travelers"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Plan Your Adventure?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let our experienced team create the perfect Central Asian experience for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-secondary">
              Get Custom Quote
            </button>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Speak with Expert
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;