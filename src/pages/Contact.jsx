import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#0ea5e9] text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 rounded-full bg-[#0ea5e9]" />
            Get In Touch
          </div>
          <h1 className="text-5xl font-black text-gray-900 font-['Poppins'] mb-3">
            Contact <span className="text-[#0ea5e9]">Us</span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Ready to get started or have questions? We'd love to hear from you. Fill out the form or call us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-5">
            {[
              { icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', label: 'Phone', value: '+1 (800) 123-4567', sub: 'Available 24/7' },
              { icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', label: 'Email', value: 'info@acservicepro.com', sub: 'We reply within 2 hrs' },
              { icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z', label: 'Address', value: '123 AC Boulevard', sub: 'Tech City, CA 90210' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 bg-white rounded-xl shadow-sm border border-gray-100 card-hover">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-[#0ea5e9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium mb-0.5">{item.label}</div>
                  <div className="font-semibold text-gray-800 text-sm">{item.value}</div>
                  <div className="text-xs text-gray-400">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-5">
                  <svg className="w-10 h-10 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 font-['Poppins'] mb-2">Message Sent!</h3>
                <p className="text-gray-500">We'll get back to you within 2 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">First Name</label>
                    <input type="text" required placeholder="John"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-blue-100 transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Last Name</label>
                    <input type="text" required placeholder="Doe"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-blue-100 transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                  <input type="email" required placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-blue-100 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number</label>
                  <input type="tel" placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-blue-100 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Service Needed</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-blue-100 transition-all text-gray-700">
                    <option>AC Installation</option>
                    <option>AC Repair</option>
                    <option>Preventive Maintenance</option>
                    <option>Duct Cleaning</option>
                    <option>Emergency Service</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message</label>
                  <textarea rows={4} placeholder="Describe your AC issue or request..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-blue-100 transition-all resize-none" />
                </div>
                <button type="submit" className="btn-primary w-full justify-center py-4 text-base">
                  Send Message
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
