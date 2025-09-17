import { useState } from 'react';
import { Calendar, Users, MapPin, Star, Clock, Euro, Check } from 'lucide-react';
import { tourPackages } from '../data/destinations';

const ToursPage = () => {
  const [selectedTour, setSelectedTour] = useState<string | null>(null);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    travelers: 2,
    date: '',
    message: ''
  });

  const handleBooking = (tourId: string) => {
    setSelectedTour(tourId);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your booking request! We will contact you within 24 hours to confirm your tour.');
    setSelectedTour(null);
    setBookingForm({
      name: '',
      email: '',
      phone: '',
      travelers: 2,
      date: '',
      message: ''
    });
  };

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Tour Packages</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Carefully crafted itineraries combining the best of Central Asia's natural beauty and cultural heritage.
            All tours include expert guides, accommodations, and authentic experiences.
          </p>
        </div>
      </section>

      {/* Tour Packages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {tourPackages.map((tour, index) => (
              <div key={tour.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="lg:flex">
                  <div className="lg:w-1/3">
                    <img
                      src={`https://images.unsplash.com/photo-${index === 0 ? '1583249598531-0fe46d53a376' : index === 1 ? '1506197603052-3cc9c3a201bd' : '1590736969955-71cc94901144'}?w=600&h=400&fit=crop`}
                      alt={tour.name}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>

                  <div className="lg:w-2/3 p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-3xl font-bold mb-2">{tour.name}</h3>
                        <div className="flex items-center text-gray-600 mb-2">
                          <MapPin className="h-5 w-5 mr-2" />
                          <span>{tour.countries.join(', ')}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="h-5 w-5 mr-2" />
                          <span>{tour.duration}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-3xl font-bold text-blue-600 mb-1">
                          <Euro className="h-8 w-8 mr-1" />
                          {tour.price.replace('€', '')}
                        </div>
                        <div className="text-sm text-gray-500">per person</div>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 text-lg">{tour.description}</p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-lg">Tour Highlights:</h4>
                        <div className="space-y-2">
                          {tour.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-center text-gray-700">
                              <Star className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" />
                              {highlight}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-lg">Included:</h4>
                        <div className="space-y-2">
                          {tour.includes.map((item, idx) => (
                            <div key={idx} className="flex items-center text-gray-700">
                              <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        onClick={() => handleBooking(tour.id)}
                        className="btn-primary flex-1"
                      >
                        Book This Tour
                      </button>
                      <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                        View Detailed Itinerary
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Tour CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Tour?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Our travel specialists can create a personalized itinerary based on your interests,
            budget, and schedule. Every detail will be tailored just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Request Custom Tour
            </button>
            <button className="bg-white border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
              Speak with Expert
            </button>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {selectedTour && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold">Book Your Tour</h3>
                <button
                  onClick={() => setSelectedTour(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ×
                </button>
              </div>
              <p className="text-gray-600 mt-2">
                {tourPackages.find(t => t.id === selectedTour)?.name}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={bookingForm.name}
                    onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={bookingForm.email}
                    onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={bookingForm.phone}
                    onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Travelers
                  </label>
                  <select
                    value={bookingForm.travelers}
                    onChange={(e) => setBookingForm({...bookingForm, travelers: parseInt(e.target.value)})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  >
                    {[1,2,3,4,5,6,7,8].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Start Date
                </label>
                <input
                  type="date"
                  value={bookingForm.date}
                  onChange={(e) => setBookingForm({...bookingForm, date: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requests or Questions
                </label>
                <textarea
                  rows={4}
                  value={bookingForm.message}
                  onChange={(e) => setBookingForm({...bookingForm, message: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Any dietary restrictions, accessibility needs, or special interests..."
                />
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Booking Summary</h4>
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Tour: {tourPackages.find(t => t.id === selectedTour)?.name}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Travelers: {bookingForm.travelers}</span>
                  <span>Price per person: {tourPackages.find(t => t.id === selectedTour)?.price}</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between font-semibold">
                    <span>Estimated Total:</span>
                    <span className="text-blue-600">
                      €{(parseInt(tourPackages.find(t => t.id === selectedTour)?.price.replace('€', '').replace(',', '') || '0') * bookingForm.travelers).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setSelectedTour(null)}
                  className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 btn-primary"
                >
                  Submit Booking Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToursPage;