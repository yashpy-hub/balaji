import Navigation from "@/components/Navigation";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    type: "inquiry",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", subject: "", message: "", type: "inquiry" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 animate-fade-in-up">
            Get In Touch
          </h1>
          <p className="text-center text-muted-foreground text-lg animate-fade-in-up stagger-1">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: Phone,
                title: "Phone",
                content: "+91 XXXXX XXXXX",
                subtext: "Available 9 AM - 6 PM",
              },
              {
                icon: Mail,
                title: "Email",
                content: "info@dminteriors.com",
                subtext: "We reply within 24 hours",
              },
              {
                icon: MapPin,
                title: "Main Branch",
                content: "Udgir, Maharashtra",
                subtext: "Visit our showroom",
              },
              {
                icon: MapPin,
                title: "Pune Branch",
                content: "Pune, Maharashtra",
                subtext: "Visit our showroom",
              },
            ].map((info, idx) => {
              const Icon = info.icon;
              return (
                <div
                  key={idx}
                  className="premium-card hover-lift text-center animate-fade-in-scale"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <Icon className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                  <p className="font-semibold text-foreground mb-1">{info.content}</p>
                  <p className="text-sm text-muted-foreground">{info.subtext}</p>
                </div>
              );
            })}
          </div>

          {/* Business Hours */}
          <div className="bg-secondary/30 rounded-lg p-8 mb-16 animate-fade-in-up">
            <div className="flex items-center gap-4 mb-6">
              <Clock className="w-8 h-8 text-accent" />
              <h3 className="text-2xl font-bold">Business Hours</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="font-semibold mb-4">Monday - Friday</p>
                <p className="text-muted-foreground">9:00 AM - 6:00 PM</p>
              </div>
              <div>
                <p className="font-semibold mb-4">Saturday - Sunday</p>
                <p className="text-muted-foreground">10:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in-up">
              Send Us a Message
            </h2>

            {submitted && (
              <div className="bg-accent/20 border border-accent text-accent p-4 rounded-lg mb-6 animate-fade-in-up">
                <p className="font-semibold">Thank you for your message!</p>
                <p className="text-sm">We'll get back to you shortly.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up stagger-1">
              {/* Form Type */}
              <div>
                <label className="block text-sm font-semibold mb-2">Request Type</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="inquiry">General Inquiry</option>
                  <option value="consultation">Free Consultation</option>
                  <option value="quote">Request a Quote</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-semibold mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold mb-2">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="What is this about?"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="Tell us more about your project..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-3 text-lg font-semibold"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 DM Interiors and Furnitures. All rights reserved.</p>
          <p className="text-sm mt-2 opacity-75">Premium Interior Design & Furniture Solutions</p>
        </div>
      </footer>
    </div>
  );
}
