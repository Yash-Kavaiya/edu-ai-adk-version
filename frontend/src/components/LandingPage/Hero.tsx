import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import GradientText from "@/components/ui/gradient-text";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  FileText,
  BookOpen,
  LineChart,
  Brain,
  Calendar,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Globe,
  Zap,
} from "lucide-react";
import { motion } from "@/components/ui/motion";

const Hero = () => {
  const agentFeatures = [
    {
      title: "Essay Evaluation AI Agent",
      description:
        "Advanced AI agent that evaluates essays using ENEM criteria with detailed competency feedback",
      icon: <FileText className="h-8 w-8 text-white" />,
      color: "from-violet-600 to-purple-600",
    },
    {
      title: "Personalized Exam Generator",
      description:
        "Smart agent creates customized practice exams based on your learning gaps and strengths",
      icon: <BookOpen className="h-8 w-8 text-white" />,
      color: "from-blue-600 to-indigo-600",
    },
    {
      title: "Personal Tutor Agent",
      description:
        "AI tutor that adapts to your learning style and provides personalized study recommendations",
      icon: <Brain className="h-8 w-8 text-white" />,
      color: "from-cyan-600 to-blue-700",
    },
    {
      title: "Content Generation Agent",
      description:
        "Creates study materials, summaries, and visual content tailored to your needs",
      icon: <Sparkles className="h-8 w-8 text-white" />,
      color: "from-pink-600 to-purple-700",
    },
    {
      title: "Progress Tracking Agent",
      description:
        "Intelligent monitoring of your performance with actionable insights and improvement plans",
      icon: <LineChart className="h-8 w-8 text-white" />,
      color: "from-indigo-600 to-purple-700",
    },
  ];

  const democratizationPoints = [
    "Breaking barriers to quality education access in Brazil",
    "AI-powered learning available 24/7 for all students",
    "Personalized education regardless of socioeconomic background",
    "Democratizing university entrance preparation with technology",
  ];

  return (
    <section className="w-full relative py-12 md:py-24 lg:min-h-screen flex items-center overflow-hidden justify-center">
      {/* Enhanced animated background with floating gradient orbs */}
      <div className="absolute inset-0 overflow-hidden -z-10 bg-background">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-blue-600/25 to-cyan-600/25 rounded-full blur-3xl animate-bounce-slow"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-r from-indigo-600/30 to-purple-700/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 right-10 w-64 h-64 bg-gradient-to-r from-pink-600/35 to-rose-600/35 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-full blur-3xl animate-spin-slow"></div>

        {/* Additional smaller orbs for depth */}
        <div className="absolute top-32 left-1/3 w-40 h-40 bg-gradient-to-r from-cyan-600/40 to-blue-600/40 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute bottom-32 right-1/3 w-48 h-48 bg-gradient-to-r from-emerald-600/35 to-teal-600/35 rounded-full blur-2xl animate-float-slow"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm shadow-md">
            <span className="text-xs sm:text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              🚀 Built with Google's Agent Development Kit (ADK) for Education
              Democracy
            </span>
          </div>

          <div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-regular tracking-tighter select-none mt-4">
              Democratizing Education in Brazil with
            </h1>
            <br />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-regular tracking-tighter select-none -mt-5">
              <GradientText
                colors={["#7040ff", "#9c40ff", "#5640ff", "#4079ff", "#ff40b3"]}
                animationSpeed={8}
                showBorder={false}
                className="mt-2 cursor-default font-bold select-none"
              >
                AI Agents
              </GradientText>
            </h1>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white">
              What is ENEM?
            </h3>
            <p className="text-sm md:text-base text-white/80 leading-relaxed">
              The <strong>National High School Exam (ENEM)</strong> is Brazil's
              most important university entrance exam, taken by over 5 million
              students annually. It determines access to higher education and
              government funding. However, quality preparation is often
              expensive and inaccessible to many students, creating educational
              inequality.
            </p>
          </div>

          <p className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-3xl font-light tracking-tight mx-auto leading-relaxed">
            Our AI-powered platform uses Google's ADK to create intelligent
            agents that provide personalized, high-quality ENEM preparation
            accessible to every Brazilian student.
          </p>

          {/* Democratization benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 max-w-4xl mx-auto"
          >
            {democratizationPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm backdrop-blur-sm"
              >
                <Globe className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-white/90 text-left">{point}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href="/dashboard">
            <Button className="button-primary text-lg font-medium flex items-center gap-2 group">
              Try Our AI Agents
              <Zap className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
            </Button>
          </Link>
        </motion.div>

        {/* Impact metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">5M+</div>
            <div className="text-white/60 text-sm">ENEM Students Annually</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">8</div>
            <div className="text-white/60 text-sm">Specialized AI Agents</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">24/7</div>
            <div className="text-white/60 text-sm">AI Tutoring Available</div>
          </div>
        </motion.div>

        {/* AI Agents Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="w-full max-w-6xl mx-auto mt-12 relative"
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
            Powered by{" "}
            <span className="gradient-text">Specialized AI Agents</span>
          </h3>

          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-xl opacity-70"></div>

          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {agentFeatures.map((feature, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full p-6 md:p-8 flex flex-col items-center justify-center text-center space-y-4 rounded-2xl backdrop-blur-xl border border-white/10 bg-black/40 hover:bg-black/50 hover:border-white/20 transition-all duration-300 shadow-xl">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center shadow-xl transition-transform duration-300 hover:scale-110`}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r tracking-tighter from-white to-gray-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-8"
        >
          <Link href="/dashboard">
            <Button className="button-primary px-10 py-4 text-lg font-medium flex items-center gap-3 mx-auto group">
              <Users className="w-5 h-5" />
              Start Learning with AI Agents
              <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
