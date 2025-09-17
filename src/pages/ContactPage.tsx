import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const ContactPage = () => {
  const [activeForm, setActiveForm] = useState<'general' | 'quote' | 'callback'>('general');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    message: '',
    destination: '',
    budget: '',
    travelers: '2',
    duration: '',
    travelDate: '',
    callbackTime: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      country: '',
      message: '',
      destination: '',
      budget: '',
      travelers: '2',
      duration: '',
      travelDate: '',
      callbackTime: ''
    });
  };

  const europeanCountries = [
    'Italy', 'France', 'Germany', 'Spain', 'United Kingdom', 'Netherlands',
    'Belgium', 'Switzerland', 'Austria', 'Portugal', 'Sweden', 'Norway',
    'Denmark', 'Finland', 'Poland', 'Czech Republic', 'Other'
  ];

  const destinations = [
    'Kyrgyzstan Only', 'Uzbekistan Only', 'Kyrgyzstan + Uzbekistan',
    'Central Asia Explorer', 'Custom Itinerary'
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Ready to explore Central Asia? Get in touch with our travel experts
            to start planning your unforgettable journey.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone Support</h3>
                    <p className="text-gray-600 mb-2">+996 (555) 123-456</p>
                    <p className="text-sm text-gray-500">Available 9 AM - 6 PM (GMT+6)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-gray-600 mb-2">info@centralasiatours.com</p>
                    <p className="text-sm text-gray-500">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Office</h3>
                    <p className="text-gray-600 mb-2">Chui Avenue 123<br />Bishkek, Kyrgyzstan</p>
                    <p className="text-sm text-gray-500">Open Monday - Saturday</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                    <p className="text-gray-600 mb-1">Monday - Friday: 9 AM - 6 PM</p>
                    <p className="text-gray-600 mb-2">Saturday: 10 AM - 4 PM</p>
                    <p className="text-sm text-gray-500">Central Asia Time (GMT+6)</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">For European Travelers</h3>
                <p className="text-gray-700 text-sm mb-3">
                  We understand the needs of European travelers and can assist with:
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Visa requirements and documentation</li>
                  <li>• European travel insurance recommendations</li>
                  <li>• Currency exchange guidance</li>
                  <li>• International flight connections</li>
                </ul>
              </div>
            </div>

            {/* Contact Forms */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8">
                {/* Form Tabs */}
                <div className="flex flex-wrap gap-2 mb-8 border-b">
                  <button
                    onClick={() => setActiveForm('general')}
                    className={`px-4 py-2 font-medium border-b-2 transition-colors ${
                      activeForm === 'general'
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <MessageCircle className="h-4 w-4 inline mr-2" />
                    General Inquiry
                  </button>
                  <button
                    onClick={() => setActiveForm('quote')}
                    className={`px-4 py-2 font-medium border-b-2 transition-colors ${
                      activeForm === 'quote'
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Send className="h-4 w-4 inline mr-2" />
                    Request Quote
                  </button>
                  <button
                    onClick={() => setActiveForm('callback')}
                    className={`px-4 py-2 font-medium border-b-2 transition-colors ${
                      activeForm === 'callback'
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Phone className="h-4 w-4 inline mr-2" />
                    Request Callback
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
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
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
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
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="+39 XXX XXX XXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Country
                      </label>
                      <select
                        value={formData.country}
                        onChange={(e) => setFormData({...formData, country: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select your country</option>
                        {europeanCountries.map((country) => (
                          <option key={country} value={country}>{country}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Form-specific fields */}
                  {activeForm === 'quote' && (
                    <>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Preferred Destination
                          </label>
                          <select
                            value={formData.destination}
                            onChange={(e) => setFormData({...formData, destination: e.target.value})}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option value="">Choose destination</option>
                            {destinations.map((dest) => (
                              <option key={dest} value={dest}>{dest}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Budget Range (EUR)
                          </label>
                          <select
                            value={formData.budget}
                            onChange={(e) => setFormData({...formData, budget: e.target.value})}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option value="">Select budget range</option>
                            <option value="1000-2000">€1,000 - €2,000</option>
                            <option value="2000-3000">€2,000 - €3,000</option>
                            <option value="3000-5000">€3,000 - €5,000</option>
                            <option value="5000+">€5,000+</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Number of Travelers
                          </label>
                          <select
                            value={formData.travelers}
                            onChange={(e) => setFormData({...formData, travelers: e.target.value})}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          >
                            {[1,2,3,4,5,6,7,8].map(num => (
                              <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Duration
                          </label>
                          <select
                            value={formData.duration}
                            onChange={(e) => setFormData({...formData, duration: e.target.value})}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option value="">Select duration</option>
                            <option value="5-7 days">5-7 days</option>
                            <option value="8-10 days">8-10 days</option>
                            <option value="11-14 days">11-14 days</option>
                            <option value="15+ days">15+ days</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Travel Date
                          </label>
                          <input
                            type="month"
                            value={formData.travelDate}
                            onChange={(e) => setFormData({...formData, travelDate: e.target.value})}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {activeForm === 'callback' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Callback Time
                      </label>
                      <select
                        value={formData.callbackTime}
                        onChange={(e) => setFormData({...formData, callbackTime: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select preferred time</option>
                        <option value="morning-europe">Morning (European Time)</option>
                        <option value="afternoon-europe">Afternoon (European Time)</option>
                        <option value="evening-europe">Evening (European Time)</option>
                        <option value="flexible">I'm flexible</option>
                      </select>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {activeForm === 'quote' ? 'Special Requests & Interests' : 'Message'}
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder={
                        activeForm === 'quote'
                          ? "Tell us about your interests: photography, culture, adventure activities, cuisine, etc."
                          : "How can we help you with your Central Asian adventure?"
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary"
                  >
                    {activeForm === 'general' && 'Send Message'}
                    {activeForm === 'quote' && 'Request Custom Quote'}
                    {activeForm === 'callback' && 'Request Callback'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Do I need a visa to visit Kyrgyzstan?</h3>
              <p className="text-gray-600">EU citizens can visit Kyrgyzstan visa-free for up to 60 days. For Uzbekistan, most EU citizens need a visa, but we can help you with the application process.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">What's the best time to visit Central Asia?</h3>
              <p className="text-gray-600">The best time is typically May to September when weather is warmest. Summer (June-August) is ideal for mountain regions, while spring and fall are perfect for cities and cultural sites.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">How do I get to Central Asia from Europe?</h3>
              <p className="text-gray-600">Most European travelers fly to Istanbul, Moscow, or Dubai and connect to Bishkek or Tashkent. We can help arrange your flights and provide airport transfer services.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Is it safe to travel in Central Asia?</h3>
              <p className="text-gray-600">Yes, Kyrgyzstan and Uzbekistan are very safe for tourists. We provide 24/7 support and work with trusted local partners to ensure your safety throughout your journey.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;