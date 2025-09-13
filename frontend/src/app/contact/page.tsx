"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Send,
  Heart,
  Users,
  Clock,
  ArrowRight,
  CheckCircle,
  Globe,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { motion } from "@/components/ui/motion";
import BackgroundBlur from "@/components/ui/background-blur";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  const contactMethods = [
    {
      title: "Email Us",
      description: "Send us an email and we'll respond within 24 hours",
      icon: <Mail className="h-6 w-6 text-blue-400" />,
      value: "contact@edu-ai-usa.com",
      action: "mailto:contact@edu-ai-usa.com",
    },
    {
      title: "Call Us",
      description: "Speak directly with our support team",
      icon: <Phone className="h-6 w-6 text-green-400" />,
      value: "+1 (555) 123-4567",
      action: "tel:+15551234567",
    },
    {
      title: "Visit Us",
      description: "Our headquarters in Silicon Valley",
      icon: <MapPin className="h-6 w-6 text-purple-400" />,
      value: "123 Education Ave, Silicon Valley, CA 94000",
      action: "https://maps.google.com",
    },
    {
      title: "Live Chat",
      description: "Get instant help from our AI assistant",
      icon: <MessageSquare className="h-6 w-6 text-orange-400" />,
      value: "Available 24/7",
      action: "#",
    },
  ];

  const faqs = [
    {
      question: "Is Edu.AI USA really free?",
      answer: "Yes! Our platform is completely free for all students. We believe quality education should be accessible to everyone.",
    },
    {
      question: "How do the AI agents work?",
      answer: "Our AI agents are built on Google's Agent Development Kit and use advanced machine learning to provide personalized tutoring and feedback.",
    },
    {
      question: "Can I use this for other exams besides ENEM?",
      answer: "Currently, our platform is specifically designed for ENEM preparation, but we're working on expanding to other Brazilian educational assessments.",
    },
    {
      question: "How accurate is the essay evaluation?",
      answer: "Our AI has been trained on thousands of high-scoring ENEM essays and provides evaluation accuracy comparable to human experts.",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/edu-ai-usa",
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://linkedin.com/company/edu-ai-usa",
      color: "hover:text-blue-400",
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-5 w-5" />,
      url: "https://twitter.com/eduaiusa",
      color: "hover:text-sky-400",
    },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <BackgroundBlur />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center px-4 py-2 mb-6 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
                <Heart className="w-4 h-4 mr-2 text-pink-400" />
                <span className="text-sm font-medium text-white/80">
                  We're Here to Help
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-white">
                Get in{" "}
                <span className="gradient-text">Touch</span>
              </h1>

              <p className="text-lg md:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-8">
                Have questions about our AI agents? Need help getting started? 
                Want to share feedback? We'd love to hear from you and help you 
                on your ENEM preparation journey.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="button-primary px-8 py-4 text-lg">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Start Live Chat
                </Button>
                <Button variant="outline" className="px-8 py-4 text-lg text-white border-white/20 hover:bg-white/10">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-black/40 border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm group cursor-pointer">
                    <CardHeader className="text-center">
                      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {method.icon}
                      </div>
                      <CardTitle className="text-lg text-white">
                        {method.title}
                      </CardTitle>
                      <CardDescription className="text-white/70 text-sm">
                        {method.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-white/90 font-medium text-sm">
                        {method.value}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white flex items-center gap-3">
                      <Send className="h-6 w-6 text-blue-400" />
                      Send us a Message
                    </CardTitle>
                    <CardDescription className="text-white/70">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {isSubmitted ? (
                      <div className="text-center py-8">
                        <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-400" />
                        <h3 className="text-xl font-semibold text-white mb-2">
                          Message Sent!
                        </h3>
                        <p className="text-white/70">
                          Thank you for contacting us. We'll respond within 24 hours.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-white font-medium mb-2 text-sm">
                              Name *
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="w-full bg-white/5 border border-white/20 rounded-xl p-3 text-white placeholder-white/50 focus:border-white/40 focus:outline-none transition-colors"
                              placeholder="Your full name"
                            />
                          </div>
                          <div>
                            <label className="block text-white font-medium mb-2 text-sm">
                              Email *
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="w-full bg-white/5 border border-white/20 rounded-xl p-3 text-white placeholder-white/50 focus:border-white/40 focus:outline-none transition-colors"
                              placeholder="your.email@example.com"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-white font-medium mb-2 text-sm">
                            Subject *
                          </label>
                          <select
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-white/5 border border-white/20 rounded-xl p-3 text-white focus:border-white/40 focus:outline-none transition-colors"
                          >
                            <option value="">Select a subject</option>
                            <option value="general">General Inquiry</option>
                            <option value="technical">Technical Support</option>
                            <option value="feature">Feature Request</option>
                            <option value="bug">Bug Report</option>
                            <option value="partnership">Partnership</option>
                            <option value="feedback">Feedback</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-white font-medium mb-2 text-sm">
                            Message *
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={6}
                            className="w-full bg-white/5 border border-white/20 rounded-xl p-3 text-white placeholder-white/50 focus:border-white/40 focus:outline-none transition-colors resize-none"
                            placeholder="Tell us how we can help you..."
                          />
                        </div>

                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full button-primary py-3 text-lg"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 mr-2 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5 mr-2" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Info & FAQ */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                {/* Response Time */}
                <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl text-white flex items-center gap-3">
                      <Clock className="h-5 w-5 text-green-400" />
                      Response Time
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-white/70">General Inquiries</span>
                        <span className="text-white font-medium">&lt; 24 hours</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/70">Technical Support</span>
                        <span className="text-white font-medium">&lt; 12 hours</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/70">Bug Reports</span>
                        <span className="text-white font-medium">&lt; 6 hours</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* FAQs */}
                <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl text-white">
                      Frequently Asked Questions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-white/10 last:border-b-0 pb-4 last:pb-0">
                          <h4 className="text-white font-medium mb-2">
                            {faq.question}
                          </h4>
                          <p className="text-white/70 text-sm leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Social Links */}
                <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl text-white flex items-center gap-3">
                      <Globe className="h-5 w-5 text-blue-400" />
                      Follow Us
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-4">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 ${social.color} transition-colors duration-300`}
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                    <p className="text-white/70 text-sm mt-4">
                      Stay updated with our latest features and educational content.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start Your{" "}
                <span className="gradient-text">ENEM Journey</span>?
              </h2>
              
              <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
                Don't wait to begin your preparation. Our AI agents are ready 
                to provide personalized tutoring and support 24/7.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/dashboard">
                  <Button className="button-primary px-8 py-4 text-lg flex items-center gap-3">
                    <Users className="w-5 h-5" />
                    Start Learning Now
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/features">
                  <Button variant="outline" className="px-8 py-4 text-lg text-white border-white/20 hover:bg-white/10">
                    Explore Features
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
