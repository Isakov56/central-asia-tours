import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, MapPin, Calendar } from 'lucide-react';
import { destinations, tourPackages } from '../data/destinations';

const HomePage = () => {
  const featuredDestinations = destinations.slice(0, 3);
  const featuredTours = tourPackages.slice(0, 3);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-blue-900 to-purple-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=1920")'
          }}
        />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Discover the Magic of
              <span className="block text-yellow-500">Central Asia</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Experience the breathtaking landscapes of Kyrgyzstan and the historic treasures
              of the Silk Road. Unforgettable journeys await.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/tours" className="btn-primary text-lg px-8 py-4">
                Explore Tours
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/destinations" className="btn-secondary text-lg px-8 py-4">
                View Destinations
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-75">
          <div className="animate-bounce">
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Central Asia Tours?</h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            We specialize in creating authentic, unforgettable experiences in the heart of Central Asia
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Expert Local Guides</h3>
              <p className="text-gray-600">
                Our passionate local guides share authentic stories and hidden gems that only locals know.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Unique Destinations</h3>
              <p className="text-gray-600">
                Explore off-the-beaten-path locations and experience the untouched beauty of Central Asia.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Personalized Experience</h3>
              <p className="text-gray-600">
                Every tour is carefully crafted to match your interests and create lasting memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Destinations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the most spectacular places in Kyrgyzstan and Central Asia
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <div key={destination.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img
                    src={destination.imageUrl}
                    alt={destination.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {destination.type}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-2">{destination.name}</h3>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{destination.bestTime}</span>
                  <span className="mx-2">•</span>
                  <span>{destination.duration}</span>
                </div>
                <Link
                  to="/destinations"
                  className="text-blue-600 font-medium hover:text-blue-700 flex items-center"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/destinations" className="btn-primary">
              View All Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Tour Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Carefully crafted itineraries for the perfect Central Asian adventure
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredTours.map((tour) => (
              <div key={tour.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{tour.name}</h3>
                      <p className="text-gray-600 text-sm">{tour.countries.join(', ')}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">{tour.price}</div>
                      <div className="text-sm text-gray-500">{tour.duration}</div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{tour.description}</p>

                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {tour.highlights.slice(0, 3).map((highlight, index) => (
                        <span key={index} className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-sm">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link to="/tours" className="w-full btn-primary text-center block">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/tours" className="btn-primary">
              View All Tours
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready for Your Central Asian Adventure?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let us create a personalized journey that matches your dreams and interests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary">
              Plan My Trip
            </Link>
            <Link to="/tours" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Browse Tours
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;