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
} from "lucide-react";

const Features = () => {
  const agents = [
    {
      title: "📝 Essay Evaluator Agent",
      description:
        "Advanced AI that evaluates essays using ENEM's 5 competencies: grammar, text comprehension, argumentation, coherence, and solution proposals. Provides detailed feedback and scores 0-1000.",
      icon: <FileText className="h-6 w-6" />,
      features: [
        "Automatic ENEM-style essay correction",
        "Competency-based feedback",
        "Improvement suggestions with examples",
        "Score justification and explanations",
      ],
      color: "from-violet-600 to-purple-600",
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
      ],
      color: "from-blue-600 to-indigo-600",
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
      ],
      color: "from-green-600 to-emerald-600",
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
      ],
      color: "from-orange-600 to-red-600",
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
      ],
      color: "from-cyan-600 to-blue-700",
    },
    {
      title: "🎥 Content Generator Agent",
      description:
        "Creates comprehensive study materials including explanations, slides, visual content, flashcards, and mind maps tailored to your learning style and needs.",
      icon: <Sparkles className="h-6 w-6" />,
      features: [
        "Videos suggestions",
        "Visual learning materials",
        "Interactive flashcards",
        "Personalized explanations",
      ],
      color: "from-pink-600 to-purple-700",
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
      ],
      color: "from-teal-600 to-cyan-600",
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
      ],
      color: "from-indigo-600 to-purple-700",
    },
  ];

  return (
    <section id="agents" className="w-full py-16 md:py-24 usa-gradient-tertiary">
      <div className="px-4 md:px-6">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-6 border-2 border-white/30 rounded-full usa-gradient-primary backdrop-blur-sm liberty-shadow">
            <Star className="w-4 h-4 mr-2 text-white" />
            <span className="text-sm font-bold text-white usa-text-shadow">
              🇺🇸 Proudly Built in the United States of America
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 text-white usa-text-shadow">
            Eight Premium <span className="gradient-text font-black">American AI Agents</span>
            <br />
            for Unmatched Educational Excellence
          </h2>

          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed font-bold usa-text-shadow">
            Each agent is engineered with American precision and excellence to deliver
            world-class, personalized education that exceeds expectations. Experience
            the power of the United States of America's finest educational technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-12">
          {agents.map((agent, index) => (
            <div key={index} className="group relative">
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${agent.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300 rounded-2xl blur-sm`}
              ></div>

              <Card className="relative h-full usa-gradient-secondary border-2 border-white/30 hover:border-white/50 transition-all duration-300 backdrop-blur-sm group-hover:transform group-hover:scale-[1.02] liberty-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${agent.color} flex items-center justify-center shadow-lg`}
                    >
                      <div className="text-white">{agent.icon}</div>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl md:text-2xl text-white font-bold leading-tight usa-text-shadow">
                        🇺🇸 {agent.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <CardDescription className="text-white text-base leading-relaxed font-semibold">
                    American-engineered {agent.description.toLowerCase()}
                  </CardDescription>

                  <div className="space-y-2">
                    <h4 className="text-white font-medium text-sm">
                      Key Features:
                    </h4>
                    <ul className="grid grid-cols-1 gap-1.5">
                      {agent.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-white/60 text-sm"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <Link href="/dashboard">
                      <Button
                        variant="outline"
                        className="w-full button-secondary group-hover:bg-white/20 transition-all duration-300 font-bold"
                      >
                        Experience USA Excellence
                        <Star className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="usa-gradient-primary backdrop-blur-sm border-2 border-white/30 rounded-2xl p-8 max-w-4xl mx-auto liberty-shadow">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-4 usa-text-shadow">
              🦅 American Educational Supremacy Through AI
            </h3>
            <p className="text-white text-lg leading-relaxed mb-6 font-bold">
              Our American AI agents deliver the finest educational experience
              with the quality and excellence you expect from the United States.
              Premium American education built with the strength, innovation, and
              reliability that only America can provide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard">
                <Button className="button-primary px-8 py-4 text-lg font-bold flex items-center gap-3">
                  <Star className="w-5 h-5" />
                  Experience American Excellence
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
