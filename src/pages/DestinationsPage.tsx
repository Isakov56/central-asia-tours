import { useState } from 'react';
import { Calendar, MapPin, Clock, TrendingUp } from 'lucide-react';
import { destinations } from '../data/destinations';
import type { Destination } from '../data/destinations';

const DestinationsPage = () => {
  const [filter, setFilter] = useState<string>('All');
  const [filteredDestinations, setFilteredDestinations] = useState<Destination[]>(destinations);

  const categories = ['All', 'Natural', 'Historical', 'Cultural', 'Adventure'];
  const countries = ['All', 'Kyrgyzstan', 'Uzbekistan'];
  const [countryFilter, setCountryFilter] = useState<string>('All');

  const handleFilter = (category: string, country: string = countryFilter) => {
    setFilter(category);

    let filtered = destinations;

    if (category !== 'All') {
      filtered = filtered.filter(dest => dest.type === category);
    }

    if (country !== 'All') {
      filtered = filtered.filter(dest => dest.country === country);
    }

    setFilteredDestinations(filtered);
  };

  const handleCountryFilter = (country: string) => {
    setCountryFilter(country);
    handleFilter(filter, country);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-600';
      case 'Moderate': return 'bg-yellow-100 text-yellow-600';
      case 'Challenging': return 'bg-red-100 text-red-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Explore Central Asia</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            From the majestic peaks of the Tian Shan to the ancient cities of the Silk Road,
            discover the diverse landscapes and rich heritage of Central Asia.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Category Filter */}
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Filter by Type</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleFilter(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      filter === category
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Country Filter */}
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Filter by Country</h3>
              <div className="flex flex-wrap gap-2">
                {countries.map((country) => (
                  <button
                    key={country}
                    onClick={() => handleCountryFilter(country)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      countryFilter === country
                        ? 'bg-yellow-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {country}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredDestinations.map((destination) => (
              <div key={destination.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <img
                    src={destination.imageUrl}
                    alt={destination.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-white/90 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {destination.type}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(destination.difficulty)}`}>
                      {destination.difficulty}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/70 text-white px-2 py-1 rounded text-sm">
                      {destination.country}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{destination.name}</h3>
                  <p className="text-gray-600 mb-4">{destination.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>Best time: {destination.bestTime}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>Duration: {destination.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      <span>Difficulty: {destination.difficulty}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium mb-2">Highlights:</h4>
                    <div className="space-y-1">
                      {destination.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mr-2" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="w-full btn-primary">
                    Include in My Tour
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredDestinations.length === 0 && (
            <div className="text-center py-16">
              <MapPin className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">No destinations found</h3>
              <p className="text-gray-600">Try adjusting your filters to see more results.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default DestinationsPage;