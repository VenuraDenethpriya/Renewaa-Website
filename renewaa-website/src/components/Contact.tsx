"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectType: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await res.json();
      if (result.result === "success") {
        alert("Message sent successfully!");
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          projectType: "",
          message: ""
        });
      } else {
        alert("Failed to send message: " + result.message);
      }
    } catch (err) {
      console.error(err);
      alert("Error sending message.");
    }

    setLoading(false);
  };



  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-900 via-slate-900 to-blue-800 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-5"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-blue-600/10 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-md border border-blue-400/30 mb-6">
            <span className="text-blue-200 text-sm font-medium">📞 Get In Touch</span>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent mb-6">
            Let's Build the Future
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Ready to revolutionize your energy infrastructure? Our experts are standing by to craft your perfect solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <form onSubmit={handleSubmit}>
              <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center space-x-2">
                    <Send className="h-6 w-6 text-blue-400" />
                    <span>Send us a Message</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-blue-200 mb-2">First Name</label>
                      <Input
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        className="bg-white/10 border-white/20 text-white placeholder:text-blue-300 focus:border-blue-400 focus:ring-blue-400/20"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-blue-200 mb-2">Last Name</label>
                      <Input
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        className="bg-white/10 border-white/20 text-white placeholder:text-blue-300 focus:border-blue-400 focus:ring-blue-400/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-blue-200 mb-2">Email</label>
                    <Input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="bg-white/10 border-white/20 text-white placeholder:text-blue-300 focus:border-blue-400 focus:ring-blue-400/20"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-blue-200 mb-2">Phone</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+94 712 345 678"
                      className="bg-white/10 border-white/20 text-white placeholder:text-blue-300 focus:border-blue-400 focus:ring-blue-400/20"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-blue-200 mb-2">Project Type</label>
                    <select
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white focus:border-blue-400 focus:ring-blue-400/20 focus:outline-none">
                      <option
                        value=""
                        className="bg-slate-800"
                      >
                        Select project type
                      </option>
                      <option value="residential" className="bg-slate-800">
                        Residential Solar
                      </option>
                      <option value="commercial" className="bg-slate-800">
                        Commercial Solar
                      </option>
                      <option value="battery" className="bg-slate-800">
                        Battery Storage
                      </option>
                      <option value="maintenance" className="bg-slate-800">
                        Maintenance
                      </option>
                      <option value="consultation" className="bg-slate-800">
                        Consultation
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-blue-200 mb-2">Message</label>
                    <Textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your solar energy needs, property details, and any specific requirements..."
                      className="min-h-[80px] bg-white/10 border-white/20 text-white placeholder:text-blue-300 focus:border-blue-400 focus:ring-blue-400/20"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-lg py-6 shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300">
                    <Send className="mr-2 h-5 w-5" />
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </CardContent>
              </Card>
            </form>
            {/* Contact Form */}


            {/* Map placeholder */}
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 overflow-hidden">
              <div className="relative h-44">

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.4380589626594!2d79.88945567516996!3d7.075103292927692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f0c9463cb0d7%3A0xe3137fdcc17700c6!2sRealty%20Plaza!5e0!3m2!1sen!2slk!4v1755056688928!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 border-0"
                ></iframe>

                <div className="absolute bottom-4 left-4 text-black z-10">
                  <p className="font-semibold">Our Location</p>
                  <p className="text-sm text-blue-950">Reality Plaza, Ja-Ela</p>
                </div>
              </div>
            </Card>
          </div>



          {/* Contact Information */}
          <div className="space-y-9">
            {/* Contact Cards */}
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-2xl">
                    <MapPin className="h-7 w-7 text-white" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                    <div>
                      <h3 className="font-semibold text-white mb-2 text-lg">Visit Our Office</h3>
                      <p className="text-blue-200 leading-relaxed">
                        L2-14,
                        <br />
                        Reality plaza, Ja-ela,
                        <br />
                        Sri Lanka
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2 text-lg">Our Workshop</h3>
                      <p className="text-blue-200 leading-relaxed">
                        No: 39,
                        <br />
                        Morenda Road, Piliyandala, 
                        <br />
                        Sri Lanka
                      </p>
                    </div>
                  </div>

                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-2xl">
                    <Phone className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2 text-lg">Call Us</h3>
                    <p className="text-blue-200 text-lg font-medium">+94 743 020 154</p>
                    <p className="text-blue-300 text-sm">Available 24/7 for emergencies</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-2xl">
                    <Mail className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2 text-lg">Email Us</h3>
                    <p className="text-blue-200 text-lg font-medium">info@renewaa.com</p>
                    <p className="text-blue-300 text-sm">We'll respond within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-2xl">
                    <Clock className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2 text-lg">Business Hours</h3>
                    <div className="text-blue-200 space-y-1">
                      <p>Monday - Friday: 8:30 AM - 5:30 PM</p>
                      <p>Saturday: Closed</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
