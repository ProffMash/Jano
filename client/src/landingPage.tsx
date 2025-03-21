import { useState } from 'react';
import { Heart, Clock, Phone, MapPin, Users, Menu, X, Stethoscope, Award, Building2, Activity } from 'lucide-react';
import Appointment from './services/appointment';
import Contact from './services/contacts';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Stethoscope className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">MediCare</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-600 hover:text-blue-600 transition duration-300">Home</a>
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition duration-300">Services</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition duration-300">About</a>
              <a href="#doctors" className="text-gray-600 hover:text-blue-600 transition duration-300">Doctors</a>
              <a href="#appointment" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
                Book Appointment
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-blue-600 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-600 hover:text-blue-600 transition duration-300">Home</a>
                <a href="#services" className="text-gray-600 hover:text-blue-600 transition duration-300">Services</a>
                <a href="#about" className="text-gray-600 hover:text-blue-600 transition duration-300">About</a>
                <a href="#doctors" className="text-gray-600 hover:text-blue-600 transition duration-300">Doctors</a>
                <a href="#appointment" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300 text-center">
                  Book Appointment
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-24">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Your Health, Our Priority
              </h1>
              <p className="text-xl mb-8">
                Professional healthcare services with a personal touch. Experience the best medical care for you and your family.
              </p>
              <a
                href="#appointment"
                className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300"
              >
                Book Appointment
              </a>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80"
                alt="Medical Team"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-blue-600">15+</p>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600">50k+</p>
              <p className="text-gray-600">Patients Served</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600">30+</p>
              <p className="text-gray-600">Specialists</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600">99%</p>
              <p className="text-gray-600">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
            <p className="text-gray-600 mt-2">Comprehensive healthcare solutions for you and your family</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Heart className="text-blue-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Care</h3>
              <p className="text-gray-600">Dedicated medical professionals committed to your well-being</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Clock className="text-blue-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Service</h3>
              <p className="text-gray-600">Round-the-clock medical assistance for emergencies</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="text-blue-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Family Care</h3>
              <p className="text-gray-600">Comprehensive healthcare for the whole family</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <MapPin className="text-blue-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy Access</h3>
              <p className="text-gray-600">Conveniently located with modern facilities</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80"
                alt="Modern Medical Facility"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Us?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Award className="text-blue-600 w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Certified Professionals</h3>
                    <p className="text-gray-600">Our team consists of highly qualified and experienced medical professionals.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Building2 className="text-blue-600 w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Modern Facilities</h3>
                    <p className="text-gray-600">State-of-the-art medical equipment and comfortable treatment rooms.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Activity className="text-blue-600 w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Personalized Care</h3>
                    <p className="text-gray-600">Tailored treatment plans to meet your specific health needs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Our Expert Doctors</h2>
            <p className="text-gray-600 mt-2">Meet our team of experienced medical professionals</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80"
                alt="Doctor"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Dr. Sarah Johnson</h3>
                <p className="text-blue-600 mb-4">Cardiologist</p>
                <p className="text-gray-600">Specializing in cardiovascular health with 15+ years of experience.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80"
                alt="Doctor"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Dr. Michael Chen</h3>
                <p className="text-blue-600 mb-4">Neurologist</p>
                <p className="text-gray-600">Expert in neurological disorders and brain health.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80"
                alt="Doctor"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Dr. Emily Martinez</h3>
                <p className="text-blue-600 mb-4">Pediatrician</p>
                <p className="text-gray-600">Dedicated to providing exceptional care for children.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="py-16 bg-gray-100" id="appointment">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Book an Appointment</h2>
            <p className="text-gray-600 mt-2">Schedule your visit or get in touch with us</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Appointment />
            <Contact />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Stethoscope className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold">MediCare</span>
              </div>
              <p className="text-gray-400">Your trusted healthcare partner, providing comprehensive medical services with care and compassion.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition duration-300">Services</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition duration-300">About</a></li>
                <li><a href="#doctors" className="text-gray-400 hover:text-white transition duration-300">Doctors</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">General Medicine</li>
                <li className="text-gray-400">Cardiology</li>
                <li className="text-gray-400">Pediatrics</li>
                <li className="text-gray-400">Neurology</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone size={20} className="text-blue-400" />
                  <span className="text-gray-400">Emergency: (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={20} className="text-blue-400" />
                  <span className="text-gray-400">123 Medical Center Dr, Healthcare City</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2024 MediCare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;