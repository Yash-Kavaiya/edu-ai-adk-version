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
  FileText,
  BookOpen,
  LineChart,
  Brain,
  Calendar,
  Sparkles,
  ArrowRight,
  Bot,
  Zap,
  Target,
  MessageSquare,
  BarChart3,
  PenTool,
  Users,
  Star,
  Globe,
  CheckCircle,
  TrendingUp,
  Award,
  Clock,
  Shield,
  Cpu,
  Database,
  ChevronRight,
  Play,
  Heart,
} from "lucide-react";
import { motion } from "@/components/ui/motion";
import BackgroundBlur from "@/components/ui/background-blur";

export default function FeaturesPage() {
  const agents = [
    {
      title: "📝 Essay Evaluator Agent",
      description:
        "Advanced AI that evaluates essays using ENEM's 5 competencies: grammar, text comprehension, argumentation, coherence, and solution proposals. Provides detailed feedback and scores 0-1000.",
      icon: <FileText className="h-6 w-6" />,
      features: [
        "Automatic ENEM-style essay correction",
        "Competency-based feedback (C1-C5)",
        "Improvement suggestions with examples",
        "Score justification and explanations",
        "Writing quality analysis",
        "Personalized recommendations",
      ],
      color: "from-violet-600 to-purple-600",
      href: "/essay-evaluator",
      status: "Active",
      users: "10,000+",
    },
    {
      title: "📚 Prompt Builder Agent",
      description:
        "Generates ENEM essay topics with contextualization and supporting texts. Creates prompts aligned with current affairs and social themes for authentic practice.",
      icon: <PenTool className="h-6 w-6" />,
      features: [
        "Current affairs-aligned essay topics",
        "Supporting text collections",
        "Theme contextualization",
        "Social issue prompts",
        "Multi-modal prompt generation",
        "Historical trend analysis",
      ],
      color: "from-blue-600 to-indigo-600",
      href: "/prompt-builder",
      status: "Active",
      users: "8,500+",
    },
    {
      title: "🧪 Simulated Exam Agent",
      description:
        "Creates personalized practice exams by subject area, difficulty, or specific topics. Supports all ENEM areas: Languages, Math, Human Sciences, and Natural Sciences.",
      icon: <BookOpen className="h-6 w-6" />,
      features: [
        "Subject-specific exam generation",
        "Difficulty-adapted questions",
        "Timed or free practice modes",
        "Immediate correction with explanations",
        "Performance analytics",
        "Adaptive learning paths",
      ],
      color: "from-green-600 to-emerald-600",
      href: "/simulated-exam",
      status: "Active",
      users: "12,000+",
    },
    {
      title: "🧩 Interdisciplinary Agent",
      description:
        "Generates complex questions that connect multiple subject areas in a single problem, mimicking ENEM's interdisciplinary approach and real-world applications.",
      icon: <Target className="h-6 w-6" />,
      features: [
        "Multi-subject connected questions",
        "Real-world application problems",
        "Cross-curricular learning",
        "Comprehensive understanding tests",
        "Critical thinking development",
        "Problem-solving scenarios",
      ],
      color: "from-orange-600 to-red-600",
      href: "/interdisciplinary-questions",
      status: "Active",
      users: "6,200+",
    },
    {
      title: "🧭 Personal Tutor Agent",
      description:
        "Analyzes your performance history to recommend personalized study paths. Identifies knowledge gaps and suggests which agents to use for optimal learning.",
      icon: <Brain className="h-6 w-6" />,
      features: [
        "Performance analysis",
        "Adaptive study recommendations",
        "Learning gap identification",
        "Personalized agent orchestration",
        "Study schedule optimization",
        "Progress tracking",
      ],
      color: "from-cyan-600 to-blue-700",
      href: "/personal-tutor",
      status: "Active",
      users: "9,800+",
    },
    {
      title: "🎥 Content Generator Agent",
      description:
        "Creates comprehensive study materials including explanations, slides, visual content, flashcards, and mind maps tailored to your learning style and needs.",
      icon: <Sparkles className="h-6 w-6" />,
      features: [
        "Video suggestions",
        "Visual learning materials",
        "Interactive flashcards",
        "Personalized explanations",
        "Study guides generation",
        "Multi-format content",
      ],
      color: "from-pink-600 to-purple-700",
      href: "/content-generator",
      status: "Active",
      users: "7,300+",
    },
    {
      title: "🗣️ Rephraser Agent",
      description:
        "Helps students rewrite essays and answers with higher quality. Provides suggestions with detailed explanations of improvements and writing techniques.",
      icon: <MessageSquare className="h-6 w-6" />,
      features: [
        "Writing improvement suggestions",
        "Style and clarity enhancements",
        "Grammar and structure fixes",
        "Technique explanations",
        "Voice and tone optimization",
        "Academic writing standards",
      ],
      color: "from-teal-600 to-cyan-600",
      href: "/rephraser",
      status: "Active",
      users: "5,900+",
    },
    {
      title: "📈 Progress Tracker Agent",
      description:
        "Maintains comprehensive performance dashboards with detailed statistics, progress visualization, and exportable reports for tracking learning evolution.",
      icon: <BarChart3 className="h-6 w-6" />,
      features: [
        "Real-time performance tracking",
        "Statistical analysis",
        "Progress visualization",
        "Exportable reports",
        "Goal setting and monitoring",
        "Comparative analytics",
      ],
      color: "from-indigo-600 to-purple-700",
      href: "/progress-tracker",
      status: "Active",
      users: "11,500+",
    },
  ];

  const platformFeatures = [
    {
      title: "AI-Powered Intelligence",
      description: "Built on Google's Agent Development Kit with advanced machine learning",
      icon: <Cpu className="h-8 w-8 text-blue-400" />,
      details: [
        "Google ADK Integration",
        "Natural Language Processing",
        "Machine Learning Algorithms",
        "Real-time AI Processing",
      ],
    },
    {
      title: "24/7 Availability",
      description: "Access your AI tutors anytime, anywhere with cloud-based infrastructure",
      icon: <Clock className="h-8 w-8 text-green-400" />,
      details: [
        "Round-the-clock access",
        "Global server network",
        "Mobile-responsive design",
        "Offline capability",
      ],
    },
    {
      title: "Secure & Private",
      description: "Enterprise-grade security protecting your learning data and progress",
      icon: <Shield className="h-8 w-8 text-purple-400" />,
      details: [
        "End-to-end encryption",
        "LGPD compliant",
        "Secure data storage",
        "Privacy-first design",
      ],
    },
    {
      title: "Scalable Infrastructure",
      description: "Supporting millions of students with Google Cloud Platform",
      icon: <Database className="h-8 w-8 text-orange-400" />,
      details: [
        "Google Cloud Platform",
        "Auto-scaling systems",
        "High availability",
        "Global CDN",
      ],
    },
  ];

  const benefits = [
    {
      title: "Democratizing Education",
      description: "Breaking financial barriers to quality ENEM preparation",
      icon: <Globe className="h-6 w-6 text-blue-400" />,
      metric: "Free for all",
    },
    {
      title: "Personalized Learning",
      description: "AI adapts to your unique learning style and pace",
      icon: <Brain className="h-6 w-6 text-purple-400" />,
      metric: "100% adaptive",
    },
    {
      title: "Proven Results",
      description: "Students using our platform show significant improvement",
      icon: <TrendingUp className="h-6 w-6 text-green-400" />,
      metric: "+40% scores",
    },
    {
      title: "Expert Quality",
      description: "AI trained on thousands of high-scoring ENEM essays",
      icon: <Award className="h-6 w-6 text-yellow-400" />,
      metric: "Expert-level",
    },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <BackgroundBlur />
      
      <div className="relative z-10">
        {/* Header Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center px-4 py-2 mb-6 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
                <Bot className="w-4 h-4 mr-2 text-blue-400" />
                <span className="text-sm font-medium text-white/80">
                  Powered by Google's Agent Development Kit
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-white">
                Eight Specialized{" "}
                <span className="gradient-text">AI Agents</span>
                <br />
                for Complete ENEM Success
              </h1>

              <p className="text-lg md:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-8">
                Experience the future of education with our comprehensive suite of AI agents, 
                each designed to master specific aspects of ENEM preparation and provide 
                personalized learning that adapts to every student's unique needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/dashboard">
                  <Button className="button-primary px-8 py-4 text-lg flex items-center gap-3">
                    <Play className="w-5 h-5" />
                    Try All Agents
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Button variant="outline" className="px-8 py-4 text-lg text-white border-white/20 hover:bg-white/10">
                  Watch Demo
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-3">
                    {benefit.description}
                  </p>
                  <div className="text-2xl font-bold gradient-text">
                    {benefit.metric}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Agents Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 text-white">
                Meet Your <span className="gradient-text">AI Agents</span>
              </h2>
              <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
                Each agent specializes in different aspects of ENEM preparation, 
                working together to provide comprehensive, personalized education.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {agents.map((agent, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div
                    className={`absolute -inset-0.5 bg-gradient-to-r ${agent.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300 rounded-2xl blur-sm`}
                  ></div>

                  <Card className="relative h-full bg-black/40 border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm group-hover:transform group-hover:scale-[1.02]">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          <div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-r ${agent.color} flex items-center justify-center shadow-lg`}
                          >
                            <div className="text-white">{agent.icon}</div>
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-xl md:text-2xl text-white font-semibold leading-tight">
                              {agent.title}
                            </CardTitle>
                            <div className="flex items-center gap-4 mt-2">
                              <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                                {agent.status}
                              </span>
                              <span className="text-xs text-white/60 flex items-center gap-1">
                                <Users className="w-3 h-3" />
                                {agent.users} users
                              </span>
                            </div>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-white/40 group-hover:text-white/80 transition-colors" />
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <CardDescription className="text-white/70 text-base leading-relaxed">
                        {agent.description}
                      </CardDescription>

                      <div className="space-y-2">
                        <h4 className="text-white font-medium text-sm">
                          Key Capabilities:
                        </h4>
                        <ul className="grid grid-cols-1 gap-1.5">
                          {agent.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-2 text-white/60 text-sm"
                            >
                              <CheckCircle className="w-3 h-3 text-green-400" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2">
                        <Link href={agent.href}>
                          <Button
                            variant="outline"
                            className="w-full button-secondary group-hover:bg-white/10 transition-all duration-300"
                          >
                            Try This Agent
                            <Zap className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Features Section */}
        <section className="py-16 px-4 bg-black/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 text-white">
                Platform <span className="gradient-text">Features</span>
              </h2>
              <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
                Built on cutting-edge technology to deliver the best learning experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {platformFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-black/40 border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                          {feature.icon}
                        </div>
                        <div>
                          <CardTitle className="text-xl text-white">
                            {feature.title}
                          </CardTitle>
                          <CardDescription className="text-white/70">
                            {feature.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {feature.details.map((detail, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-white/60 text-sm"
                          >
                            <CheckCircle className="w-3 h-3 text-blue-400" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                <Heart className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Democratizing Education with{" "}
                <span className="gradient-text">AI</span>
              </h2>
              
              <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
                Our AI agents work together to provide the same quality of education 
                that expensive prep courses offer, but accessible to every Brazilian student. 
                No matter your background, location, or economic situation - quality ENEM 
                preparation is now within reach.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/dashboard">
                  <Button className="button-primary px-8 py-4 text-lg flex items-center gap-3">
                    <Users className="w-5 h-5" />
                    Start Learning Now
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" className="px-8 py-4 text-lg text-white border-white/20 hover:bg-white/10">
                    Learn More About Us
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">70,000+</div>
                  <div className="text-white/60">Active Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">8</div>
                  <div className="text-white/60">AI Agents</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-white/60">AI Tutoring</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
