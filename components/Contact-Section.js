import { useState } from 'react';
import toast from 'react-hot-toast';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    description: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // clear error on change
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validate()) return

    setIsSubmitting(true)

    try {
      const res = await fetch('/api/api-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success('Your message has been sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          description: '',
        });
        setErrors({});
      } else {
        toast.error(`Failed to send: ${data.message}`);
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex flex-col lg:flex-row max-w-6xl my-20 mx-auto p-4 gap-8 bg-gray-50">
      {/* Contact Info */}
      <div className="bg-[#D4274B] rounded-2xl flex flex-col justify-center mt-20 p-8 text-white lg:w-96">
        <div className="space-y-8">
          {/* Address */}
          <div>
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 mr-3" fill="#ffffff" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <h3 className="text-3xl font-semibold text-[#ffffff]">Address</h3>
            </div>
            <p className="text-white/90 leading-relaxed text-[#ffffff]">
              2 Simcoe Street South, Suite 300, Oshawa,<br />
              ON. L1H 8C1, Canada
            </p>
          </div>

          {/* Email */}
          <div>
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 mr-3" fill="#ffffff" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <h3 className="text-3xl font-semibold text-[#ffffff]">Email</h3>
            </div>
            <p className="text-white/90 text-[#ffffff]">info@cardloves.com</p>
          </div>

          {/* Phone */}
          <div>
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 mr-3" fill="#ffffff" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <h3 className="text-3xl font-semibold text-[#ffffff]">Phone Number</h3>
            </div>
            <p className="text-white/90 text-[#ffffff]">(+1) 905 432 3999</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="flex-1 bg-[#FAFAFA] rounded-2xl mt-20 p-4 lg:p-6">
        <div className="mb-1">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Get in Touch with Us</h2>
          <p className="text-gray-600 italic">We're Here For You, And We're Wearing Our Thinking Caps.</p>
        </div>

        { /* Inside JSX form block */ }

        <form className="space-y-2" onSubmit={handleSubmit}>
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="eg. Stanster"
                className="w-full p-2 border border-[#B3B3B3] rounded-lg focus:ring-2 focus:ring-red-500 bg-gray-50"
              />
              {errors.firstName && <p className="text-sm mt-0 text-[#D4274B]">{errors.firstName}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="eg. Stanster"
                className="w-full p-2 border border-[#B3B3B3] rounded-lg focus:ring-2 focus:ring-red-500 bg-gray-50"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email Address"
              className="w-full p-2 border border-[#B3B3B3] rounded-lg focus:ring-2 focus:ring-red-500 bg-gray-50"
            />
            {errors.email && <p className="text-sm mt-0 text-[#D4274B]">{errors.email}</p>}
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full p-2 border border-[#B3B3B3] rounded-lg focus:ring-2 focus:ring-red-500 bg-gray-50"
            />
            {errors.subject && <p className="text-sm mt-0 text-[#D4274B]">{errors.subject}</p>}
          </div>

          {/* Description */}
          <div className='mb-3'>
            <label className="block text-sm font-medium text-gray-700 mb-1">Descriptions</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Type Here"
              rows={3}
              className="w-full p-2 border border-[#B3B3B3] rounded-lg focus:ring-2 focus:ring-red-500 bg-gray-50 resize-vertical"
            />
            {errors.description && <p className="text-sm mt-0 text-[#D4274B]">{errors.description}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-[#1C1C1C] text-[#ffffff] py-3 px-5 rounded-2xl font-medium hover:bg-gray-800 transition-colors duration-200 mt-8 ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </form>

      </div>
    </div>
  )
}
