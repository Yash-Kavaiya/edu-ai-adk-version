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
import BackgroundBlur from "../ui/background-blur";

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

  const americanExcellencePoints = [
    "American innovation leading global educational transformation",
    "USA-grade AI technology available for superior learning",
    "Premium American education for students who demand excellence", 
    "United States leadership in educational technology advancement",
  ];

  return (
    <section className="w-full relative py-12 md:py-24 lg:min-h-screen flex items-center overflow-hidden justify-center">
      <BackgroundBlur />

      <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 border-2 border-white/30 rounded-full usa-gradient-primary backdrop-blur-sm shadow-md liberty-shadow">
            <span className="text-xs sm:text-sm font-bold text-white usa-text-shadow">
              🇺🇸 American Educational Excellence Powered by AI - USA Strong!
            </span>
          </div>

          <div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter select-none mt-4 text-white usa-text-shadow">
              United States of America's Premier
            </h1>
            <br />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter select-none -mt-5">
              <GradientText
                colors={["#B22234", "#FFFFFF", "#3C3B6E", "#B22234", "#FFFFFF"]}
                animationSpeed={6}
                showBorder={true}
                className="mt-2 cursor-default font-black select-none usa-text-shadow"
              >
                AI Education Platform
              </GradientText>
            </h1>
          </div>

          <div className="usa-gradient-primary backdrop-blur-sm border-2 border-white/30 rounded-xl p-6 max-w-4xl mx-auto liberty-shadow">
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-white usa-text-shadow">
              🦅 American Educational Excellence 🦅
            </h3>
            <p className="text-sm md:text-base text-white leading-relaxed font-semibold">
              Experience the <strong>United States of America's</strong> most advanced
              AI-powered educational platform! Built with American innovation and excellence,
              our platform delivers world-class education with the strength and reliability
              you expect from the greatest nation on Earth. Quality education for every
              American student - because in the USA, excellence is our standard.
            </p>
          </div>

          <p className="text-lg md:text-xl lg:text-2xl text-white max-w-3xl font-bold tracking-tight mx-auto leading-relaxed usa-text-shadow">
            Our American-engineered AI platform delivers premium educational excellence
            with the power and precision that only the United States of America can provide.
            Education worthy of the greatest nation in history.
          </p>

          {/* Democratization benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 max-w-4xl mx-auto"
          >
            {americanExcellencePoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-3 px-4 py-3 rounded-xl usa-gradient-secondary border-2 border-white/30 text-sm backdrop-blur-sm liberty-shadow"
              >
                <Star className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                <span className="text-white font-semibold text-left">{point}</span>
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
            <Button className="button-primary text-lg font-bold flex items-center gap-2 group">
              Experience American AI Excellence
              <Star className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
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
          <div className="text-center usa-gradient-primary p-4 rounded-xl liberty-shadow">
            <div className="text-3xl font-black text-white mb-1 usa-text-shadow">🇺🇸 #1</div>
            <div className="text-white text-sm font-bold">USA Educational Platform</div>
          </div>
          <div className="text-center usa-gradient-secondary p-4 rounded-xl liberty-shadow">
            <div className="text-3xl font-black text-white mb-1 usa-text-shadow">⭐ Premium</div>
            <div className="text-white text-sm font-bold">American AI Technology</div>
          </div>
          <div className="text-center usa-gradient-primary p-4 rounded-xl liberty-shadow">
            <div className="text-3xl font-black text-white mb-1 usa-text-shadow">🦅 24/7</div>
            <div className="text-white text-sm font-bold">American Excellence</div>
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
            <span className="gradient-text font-black">American AI Excellence</span>
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
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tighter usa-text-shadow">
                      🇺🇸 {feature.title}
                    </h3>
                    <p className="text-sm text-white font-semibold">
                      American-engineered {feature.description.toLowerCase()}
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
            <Button className="button-primary px-10 py-4 text-lg font-bold flex items-center gap-3 mx-auto group">
              <Star className="w-5 h-5" />
              Join America's Premier AI Education
              <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
