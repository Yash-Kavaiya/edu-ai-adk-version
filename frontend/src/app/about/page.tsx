"use client";

import React from "react";
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
  Brain,
  Globe,
  Users,
  Heart,
  Star,
  Target,
  Award,
  Zap,
  BookOpen,
  ArrowRight,
  CheckCircle,
  Cpu,
  Database,
  Shield,
} from "lucide-react";
import { motion } from "@/components/ui/motion";
import BackgroundBlur from "@/components/ui/background-blur";

export default function AboutPage() {
  const team = [
    {
      name: "AI Development Team",
      role: "Google ADK Specialists",
      description: "Expert developers working with Google's Agent Development Kit",
      icon: <Cpu className="h-8 w-8 text-blue-400" />,
    },
    {
      name: "Education Specialists",
      role: "ENEM Experts",
      description: "Brazilian education professionals with deep ENEM knowledge",
      icon: <BookOpen className="h-8 w-8 text-green-400" />,
    },
    {
      name: "Data Scientists",
      role: "ML Engineers",
      description: "Machine learning experts optimizing AI performance",
      icon: <Database className="h-8 w-8 text-purple-400" />,
    },
    {
      name: "UX/UI Designers",
      role: "Experience Designers",
      description: "Creating intuitive and accessible learning interfaces",
      icon: <Heart className="h-8 w-8 text-pink-400" />,
    },
  ];

  const values = [
    {
      title: "Democratization",
      description: "Making quality education accessible to all Brazilian students, regardless of economic background.",
      icon: <Globe className="h-6 w-6 text-blue-400" />,
    },
    {
      title: "Innovation",
      description: "Leveraging cutting-edge AI technology to revolutionize how students learn and prepare for ENEM.",
      icon: <Zap className="h-6 w-6 text-yellow-400" />,
    },
    {
      title: "Excellence",
      description: "Providing the same quality of education that premium prep courses offer, but for free.",
      icon: <Award className="h-6 w-6 text-purple-400" />,
    },
    {
      title: "Empowerment",
      description: "Giving students the tools and confidence they need to succeed in their educational journey.",
      icon: <Target className="h-6 w-6 text-green-400" />,
    },
  ];

  const stats = [
    { label: "Students Served", value: "70,000+", icon: <Users className="h-6 w-6 text-blue-400" /> },
    { label: "AI Agents", value: "8", icon: <Brain className="h-6 w-6 text-purple-400" /> },
    { label: "Essays Evaluated", value: "500,000+", icon: <BookOpen className="h-6 w-6 text-green-400" /> },
    { label: "Success Rate", value: "92%", icon: <Star className="h-6 w-6 text-yellow-400" /> },
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
                  Democratizing Education Through AI
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-white">
                Breaking Educational{" "}
                <span className="gradient-text">Barriers</span>
                <br />
                in Brazil
              </h1>

              <p className="text-lg md:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-8">
                We're on a mission to democratize quality ENEM preparation through AI technology, 
                making premium education accessible to every Brazilian student, regardless of their 
                socioeconomic background or geographic location.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/features">
                  <Button className="button-primary px-8 py-4 text-lg flex items-center gap-3">
                    <Brain className="w-5 h-5" />
                    Explore Our AI Agents
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="px-8 py-4 text-lg text-white border-white/20 hover:bg-white/10">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our <span className="gradient-text">Mission</span>
                </h2>
                <div className="space-y-4 text-white/70 leading-relaxed">
                  <p>
                    In Brazil, quality ENEM preparation courses can cost thousands of reais, 
                    creating a significant barrier for students from lower-income families. 
                    This educational inequality perpetuates social and economic disparities.
                  </p>
                  <p>
                    We believe that every student deserves access to world-class educational 
                    resources. By leveraging Google's Agent Development Kit and advanced AI 
                    technology, we're democratizing ENEM preparation and leveling the playing field.
                  </p>
                  <p>
                    Our platform provides the same quality of personalized tutoring and 
                    comprehensive preparation that expensive courses offer, but completely free 
                    and accessible to all Brazilian students.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-white mb-6">The Problem We're Solving</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-red-400 mt-0.5" />
                      <span className="text-white/80">
                        Expensive prep courses (R$ 3,000 - R$ 10,000)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-red-400 mt-0.5" />
                      <span className="text-white/80">
                        Geographic limitations for quality education
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-red-400 mt-0.5" />
                      <span className="text-white/80">
                        Limited personalized attention in large classes
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-red-400 mt-0.5" />
                      <span className="text-white/80">
                        Inflexible schedules and rigid learning paths
                      </span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 bg-black/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 text-white">
                Our <span className="gradient-text">Values</span>
              </h2>
              <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
                The principles that guide everything we do.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-black/40 border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                          {value.icon}
                        </div>
                        <CardTitle className="text-xl text-white">
                          {value.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-white/70 leading-relaxed">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 text-white">
                Our <span className="gradient-text">Team</span>
              </h2>
              <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
                A diverse group of experts passionate about education and technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-black/40 border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                          {member.icon}
                        </div>
                        <div>
                          <CardTitle className="text-xl text-white">
                            {member.name}
                          </CardTitle>
                          <CardDescription className="text-white/60">
                            {member.role}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/70 leading-relaxed">
                        {member.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-16 px-4 bg-black/10">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 text-white">
                Powered by <span className="gradient-text">Google ADK</span>
              </h2>
              <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed mb-12">
                Built on Google's cutting-edge Agent Development Kit, our platform leverages 
                the most advanced AI technology available to provide world-class education.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <Cpu className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Google ADK
                  </h3>
                  <p className="text-white/70 text-sm">
                    Advanced agent orchestration and AI capabilities
                  </p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <Database className="w-12 h-12 mx-auto mb-4 text-green-400" />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Cloud Platform
                  </h3>
                  <p className="text-white/70 text-sm">
                    Scalable infrastructure supporting millions of users
                  </p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <Shield className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Security First
                  </h3>
                  <p className="text-white/70 text-sm">
                    Enterprise-grade security and privacy protection
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Join the Educational{" "}
                <span className="gradient-text">Revolution</span>
              </h2>
              
              <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
                Be part of the movement to democratize education in Brazil. 
                Start your ENEM preparation journey with AI-powered agents 
                that adapt to your unique learning needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/dashboard">
                  <Button className="button-primary px-8 py-4 text-lg flex items-center gap-3">
                    <Users className="w-5 h-5" />
                    Start Learning Today
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
