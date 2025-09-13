import SendEssay from "@/components/Essays/SendEssay";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  BookOpen,
  Target,
  Zap,
  Users,
  TrendingUp,
  Clock,
  Star,
  Award,
  CheckCircle,
  FileText,
  PenTool,
  Bot
} from "lucide-react";

// Simple Badge component
const Badge = ({ children, className = "", variant = "default" }: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "secondary";
}) => {
  const baseClasses = "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold";
  const variantClasses = variant === "secondary" 
    ? "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
    : "border-transparent bg-primary text-primary-foreground hover:bg-primary/80";
  
  return (
    <div className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </div>
  );
};

export default function Essays() {
  const features = [
    {
      icon: Target,
      title: "5 ENEM Competencies",
      description: "Comprehensive evaluation across all ENEM essay criteria"
    },
    {
      icon: Zap,
      title: "Instant AI Feedback",
      description: "Get detailed analysis in seconds with advanced AI"
    },
    {
      icon: TrendingUp,
      title: "Score Improvement",
      description: "Track your progress and identify areas for growth"
    },
    {
      icon: CheckCircle,
      title: "Detailed Insights",
      description: "Specific suggestions for each competency area"
    }
  ];

  const stats = [
    { label: "Essays Evaluated", value: "50,000+", icon: FileText },
    { label: "Average Score Improvement", value: "23%", icon: TrendingUp },
    { label: "Students Helped", value: "12,500+", icon: Users },
    { label: "Response Time", value: "< 30s", icon: Clock }
  ];

  const competencies = [
    {
      number: "01",
      title: "Formal Writing Standards",
      description: "Grammar, syntax, vocabulary usage, and adherence to formal written Portuguese standards"
    },
    {
      number: "02", 
      title: "Theme Understanding",
      description: "Comprehension of the essay prompt and development of relevant arguments"
    },
    {
      number: "03",
      title: "Information Selection",
      description: "Ability to select, organize, and interpret information to defend your thesis"
    },
    {
      number: "04",
      title: "Argumentative Structure",
      description: "Logical argument construction and knowledge of linguistic mechanisms"
    },
    {
      number: "05",
      title: "Intervention Proposal",
      description: "Presenting a concrete proposal that respects human rights and citizenship"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-6 py-3 mb-8 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
              <Bot className="w-5 h-5 mr-2 text-purple-400" />
              <span className="text-sm font-medium text-white/80">
                AI-Powered Essay Evaluation
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-white">
              ENEM Essay
              <br />
              <span className="gradient-text">Evaluator</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-12">
              Get expert-level feedback on your ENEM essays with our advanced AI. 
              Comprehensive analysis across all 5 competencies with actionable improvement suggestions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <Card key={index} className="glass-card text-center">
                  <CardContent className="pt-6">
                    <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-white/60">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our <span className="gradient-text">AI Evaluator</span>
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Experience the most comprehensive ENEM essay evaluation system powered by advanced AI technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <div key={index}>
                <Card className="glass-card h-full group hover:scale-105 transition-all duration-300">
                  <CardContent className="pt-6 text-center">
                    <feature.icon className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-white/60 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ENEM Competencies Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="gradient-text">5 ENEM Competencies</span> Evaluated
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Our AI analyzes your essay across all five official ENEM competencies, providing detailed feedback for each area.
            </p>
          </div>

          <div className="space-y-6">
            {competencies.map((competency, index) => (
              <div key={index}>
                <Card className="glass-card group hover:scale-[1.02] transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl font-bold text-purple-400 bg-purple-400/10 rounded-lg p-3 min-w-fit">
                        {competency.number}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">{competency.title}</h3>
                        <p className="text-white/70">{competency.description}</p>
                      </div>
                      <Badge variant="secondary" className="bg-green-400/10 text-green-400 border-green-400/20">
                        <Star className="w-3 h-3 mr-1" />
                        AI Evaluated
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to <span className="gradient-text">Improve</span> Your Essays?
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto mb-8">
              Start evaluating your essays now or explore other helpful tools to boost your ENEM preparation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="button-primary text-lg px-8 py-4">
                <PenTool className="w-5 h-5 mr-2" />
                Start Evaluation Below
              </Button>
              <Link href="/dashboard">
                <Button variant="outline" className="button-secondary text-lg px-8 py-4">
                  <Bot className="w-5 h-5 mr-2" />
                  Explore All Agents
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Essay Evaluator Component */}
      <SendEssay />
    </div>
  );
}
