"use client";

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
  Brain,
  Target,
  Sparkles,
  MessageSquare,
  BarChart3,
  PenTool,
  Users,
  ArrowRight,
  Bot,
  Zap,
  Globe,
  Star,
  TrendingUp,
  Calendar,
  Award,
  ChevronRight,
  PlayCircle,
  Clock,
  Medal,
  Trophy,
  Rocket,
  Timer,
  Activity,
  BookMarked,
  GraduationCap,
} from "lucide-react";
import { motion } from "@/components/ui/motion";
import BackgroundBlur from "@/components/ui/background-blur";

export default function Dashboard() {
  const agents = [
    {
      title: "Essay Evaluator",
      description:
        "Get detailed feedback on your ENEM essays with AI-powered analysis across all 5 competencies.",
      icon: <FileText className="h-6 w-6 text-white" />,
      href: "/essay-evaluator",
      color: "from-violet-600 to-purple-600",
      features: [
        "Competency-based scoring",
        "Detailed feedback", 
        "Improvement suggestions",
      ],
      status: "Active",
      popularity: "Most Popular",
      users: "15.2K",
      rating: 4.9,
    },
    {
      title: "Simulated Exam",
      description:
        "Practice with personalized ENEM-style questions adapted to your learning level and subject preferences.",
      icon: <BookOpen className="h-6 w-6 text-white" />,
      href: "/simulated-exam",
      color: "from-blue-600 to-indigo-600",
      features: ["Adaptive difficulty", "All ENEM subjects", "Timed practice"],
      status: "Active",
      popularity: "Trending",
      users: "12.8K",
      rating: 4.8,
    },
    {
      title: "Prompt Builder",
      description:
        "Generate authentic ENEM essay topics with supporting materials and contextual information.",
      icon: <PenTool className="h-6 w-6 text-white" />,
      href: "/prompt-builder",
      color: "from-green-600 to-emerald-600",
      features: [
        "Current affairs topics",
        "Supporting texts",
        "Theme contextualization",
      ],
      status: "Active",
      popularity: "Hot",
      users: "9.4K",
      rating: 4.7,
    },
    {
      title: "Interdisciplinary Questions",
      description:
        "Challenge yourself with complex questions that connect multiple subjects, just like real ENEM.",
      icon: <Target className="h-6 w-6 text-white" />,
      href: "/interdisciplinary-questions",
      color: "from-orange-600 to-red-600",
      features: [
        "Multi-subject integration",
        "Real-world applications",
        "Critical thinking",
      ],
      status: "Active",
      popularity: "Rising",
      users: "7.1K",
      rating: 4.6,
    },
    {
      title: "Personal Tutor",
      description:
        "Get personalized study recommendations based on your performance and learning gaps.",
      icon: <Brain className="h-6 w-6 text-white" />,
      href: "/personal-tutor",
      color: "from-cyan-600 to-blue-700",
      features: [
        "Adaptive learning paths",
        "Performance analysis",
        "Smart recommendations",
      ],
      status: "Active",
      popularity: "Featured",
      users: "11.3K",
      rating: 4.8,
    },
    {
      title: "Content Generator",
      description:
        "Create custom study materials, summaries, and visual content tailored to your needs.",
      icon: <Sparkles className="h-6 w-6 text-white" />,
      href: "/content-generator",
      color: "from-pink-600 to-purple-700",
      features: [
        "Video suggestions",
        "Visual materials",
        "Personalized explanations",
      ],
      status: "Active",
      popularity: "New",
      users: "8.9K",
      rating: 4.5,
    },
    {
      title: "Rephraser",
      description:
        "Improve your writing with AI-powered suggestions and detailed explanations of enhancements.",
      icon: <MessageSquare className="h-6 w-6 text-white" />,
      href: "/rephraser",
      color: "from-teal-600 to-cyan-600",
      features: [
        "Writing improvements",
        "Style enhancements",
        "Grammar corrections",
      ],
      status: "Active",
      popularity: "Popular",
      users: "6.7K",
      rating: 4.4,
    },
    {
      title: "Progress Tracker",
      description:
        "Monitor your ENEM preparation journey with detailed analytics and performance insights.",
      icon: <BarChart3 className="h-6 w-6 text-white" />,
      href: "/progress-tracker",
      color: "from-indigo-600 to-purple-700",
      features: [
        "Performance analytics",
        "Progress visualization",
        "Goal tracking",
      ],
      status: "Active",
      popularity: "Essential",
      users: "13.5K",
      rating: 4.7,
    },
  ];

  const stats = [
    {
      title: "Total Study Sessions",
      value: "1,247",
      change: "+12%",
      icon: <BookMarked className="h-5 w-5 text-blue-400" />,
      color: "text-blue-400",
    },
    {
      title: "Essays Submitted",
      value: "34",
      change: "+8%",
      icon: <FileText className="h-5 w-5 text-green-400" />,
      color: "text-green-400",
    },
    {
      title: "Average Score",
      value: "847",
      change: "+23%",
      icon: <Trophy className="h-5 w-5 text-yellow-400" />,
      color: "text-yellow-400",
    },
    {
      title: "Study Streak",
      value: "15 days",
      change: "Personal Best!",
      icon: <Medal className="h-5 w-5 text-purple-400" />,
      color: "text-purple-400",
    },
  ];

  const quickActions = [
    {
      title: "Start Quick Essay",
      description: "15-min essay practice",
      icon: <Timer className="h-4 w-4" />,
      href: "/essay-evaluator",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Take Practice Exam",
      description: "Full ENEM simulation",
      icon: <Clock className="h-4 w-4" />,
      href: "/simulated-exam", 
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "View Progress",
      description: "Check your analytics",
      icon: <Activity className="h-4 w-4" />,
      href: "/progress-tracker",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const getPopularityBadge = (popularity: string) => {
    const badges = {
      "Most Popular": "bg-red-500/20 text-red-400 border-red-500/30",
      "Trending": "bg-orange-500/20 text-orange-400 border-orange-500/30",
      "Hot": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      "Rising": "bg-green-500/20 text-green-400 border-green-500/30",
      "Featured": "bg-blue-500/20 text-blue-400 border-blue-500/30",
      "New": "bg-purple-500/20 text-purple-400 border-purple-500/30",
      "Popular": "bg-pink-500/20 text-pink-400 border-pink-500/30",
      "Essential": "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
    };
    return badges[popularity as keyof typeof badges] || badges["Popular"];
  };
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <BackgroundBlur />
      
      <div className="relative z-10 px-4 py-8">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="inline-flex items-center justify-center px-3 py-1 mb-4 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
                  <Globe className="w-4 h-4 mr-2 text-blue-400" />
                  <span className="text-sm font-medium text-white/80">
                    Powered by Google's Agent Development Kit
                  </span>
                </div>
                <h1 className="text-3xl lg:text-5xl font-bold text-white mb-2">
                  Welcome back to your{" "}
                  <span className="gradient-text">AI Learning Hub</span>
                </h1>
                <p className="text-white/70 text-lg max-w-2xl">
                  Choose from 8 specialized AI agents designed to accelerate your ENEM preparation journey.
                </p>
              </div>
              <div className="mt-6 lg:mt-0">
                <Link href="/personal-tutor">
                  <Button className="button-primary flex items-center gap-2">
                    <Rocket className="w-4 h-4" />
                    Get AI Recommendations
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-black/40 border-white/10 backdrop-blur-sm hover:border-white/20 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-2 rounded-lg bg-white/5">
                        {stat.icon}
                      </div>
                      <span className={`text-xs font-medium ${stat.color}`}>
                        {stat.change}
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/60">
                      {stat.title}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {quickActions.map((action, index) => (
                <Link key={index} href={action.href}>
                  <Card className="bg-black/40 border-white/10 backdrop-blur-sm hover:border-white/20 transition-all hover:scale-105 cursor-pointer group">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${action.color} text-white`}>
                          {action.icon}
                        </div>
                        <div>
                          <div className="font-medium text-white group-hover:text-blue-300 transition-colors">
                            {action.title}
                          </div>
                          <div className="text-xs text-white/60">
                            {action.description}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>

        {/* AI Agents Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">
                AI Agents <span className="gradient-text">Collection</span>
              </h2>
              <Link href="/features">
                <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
                  View All Features
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {agents.map((agent, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <Link href={agent.href}>
                    <Card className="group relative h-full bg-black/40 border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm hover:scale-105 cursor-pointer overflow-hidden">
                      {/* Gradient Background */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${agent.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                      />
                      
                      {/* Popularity Badge */}
                      <div className="absolute top-3 right-3 z-10">
                        <span className={`text-xs px-2 py-1 rounded-full border ${getPopularityBadge(agent.popularity)}`}>
                          {agent.popularity}
                        </span>
                      </div>

                      <CardHeader className="pb-3">
                        <div className="flex items-start gap-3">
                          <div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-r ${agent.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                          >
                            {agent.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <CardTitle className="text-lg text-white font-semibold leading-tight group-hover:text-blue-300 transition-colors">
                              {agent.title}
                            </CardTitle>
                            <div className="flex items-center gap-2 mt-1">
                              <div className="flex items-center gap-1">
                                <Star className="w-3 h-3 text-yellow-400 fill-current" />
                                <span className="text-xs text-white/70">
                                  {agent.rating}
                                </span>
                              </div>
                              <span className="text-xs text-white/50">•</span>
                              <span className="text-xs text-white/70 flex items-center gap-1">
                                <Users className="w-3 h-3" />
                                {agent.users}
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-3">
                        <CardDescription className="text-white/70 text-sm leading-relaxed line-clamp-2">
                          {agent.description}
                        </CardDescription>

                        <div className="space-y-2">
                          <h4 className="text-white font-medium text-xs uppercase tracking-wide">
                            Key Features
                          </h4>
                          <ul className="space-y-1">
                            {agent.features.slice(0, 2).map((feature, idx) => (
                              <li
                                key={idx}
                                className="flex items-center gap-2 text-white/60 text-xs"
                              >
                                <div className="w-1 h-1 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
                                {feature}
                              </li>
                            ))}
                            {agent.features.length > 2 && (
                              <li className="text-white/50 text-xs">
                                +{agent.features.length - 2} more features
                              </li>
                            )}
                          </ul>
                        </div>

                        <div className="pt-2">
                          <Button
                            className="w-full bg-white/5 hover:bg-white/10 border-white/20 text-white group-hover:bg-white/15 transition-all duration-300 group"
                            variant="outline"
                          >
                            <PlayCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                            Launch Agent
                            <ChevronRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="max-w-7xl mx-auto">
            <Card className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to Accelerate Your{" "}
                  <span className="gradient-text">ENEM Journey</span>?
                </h3>
                
                <p className="text-white/70 text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
                  Our AI agents work together to provide comprehensive, personalized education 
                  that adapts to your unique learning needs and maximizes your potential.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/essay-evaluator">
                    <Button className="button-primary px-8 py-3 text-lg flex items-center gap-3">
                      <Medal className="w-5 h-5" />
                      Start with Essay Evaluator
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                  <Link href="/personal-tutor">
                    <Button variant="outline" className="px-8 py-3 text-lg text-white border-white/20 hover:bg-white/10">
                      <Brain className="w-5 h-5 mr-2" />
                      Get Personal Recommendations
                    </Button>
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-6 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">70,000+</div>
                    <div className="text-white/60 text-sm">Active Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">500K+</div>
                    <div className="text-white/60 text-sm">Essays Evaluated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">24/7</div>
                    <div className="text-white/60 text-sm">AI Support</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
