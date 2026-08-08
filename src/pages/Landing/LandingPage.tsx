import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, CheckCircle2, Flame, 
  Terminal, Sparkles, Plus, Minus, Menu, X, Code2, Trophy
} from 'lucide-react';
import { PageContainer, Button, Card, Badge, Github, Linkedin } from '@/components/common';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqData = [
    {
      q: "What is VinuRa Talks?",
      a: "VinuRa Talks is a career-building developer platform. We host structured 60-day challenges where Indian college students build one project every single day, publish their code on GitHub, and share their progress in public to attract recruiters."
    },
    {
      q: "What do I build every day?",
      a: "Depending on your selected track (such as Python & Data Engineering or Web Development), you'll receive a curated daily challenge ranging from basic scripts on Day 1 to production-ready pipelines and full-stack integrations by Day 60."
    },
    {
      q: "Do I need prior experience?",
      a: "Some basic coding familiarity is recommended, but the tracks are structured to progress iteratively. The first few days help you establish your environment and review core concepts before building complex systems."
    },
    {
      q: "Why GitHub and LinkedIn?",
      a: "Recruiters look for proof of work, not just certificates. Committing to GitHub builds a tangible code history, while writing about it on LinkedIn demonstrates communication skills and accountability, putting you on the radar of active hiring teams."
    },
    {
      q: "What happens if I miss a day?",
      a: "Your consecutive streak will pause, but your overall progress remains intact. VinuRa Talks encourages recovery: you can pick up the next day, start building momentum again, and complete the remaining days."
    },
    {
      q: "How long does the challenge take?",
      a: "Each daily challenge is designed to take between 30 to 60 minutes, including coding, committing your proof of work, and sharing your learnings."
    }
  ];

  const steps = [
    {
      num: "01",
      icon: <Terminal className="w-5 h-5" />,
      title: "Pick Your Track",
      desc: "Select a specialized coding track matched with high-demand industry skills."
    },
    {
      num: "02",
      icon: <Code2 className="w-5 h-5" />,
      title: "Build Daily",
      desc: "Solve a bite-sized engineering task every day designed to build core engineering habits."
    },
    {
      num: "03",
      icon: <Github className="w-5 h-5" />,
      title: "Share Your Proof",
      desc: "Commit code to GitHub and share your summary under #VinuRaTalksChallenge."
    },
    {
      num: "04",
      icon: <Trophy className="w-5 h-5" />,
      title: "Complete 60 Days",
      desc: "Unlock a verified profile, cumulative portfolio, and career momentum scores."
    }
  ];

  const benefits = [
    {
      title: "Build Coding Consistency",
      desc: "Overcome tutorial hell by establishing a daily coding ritual that becomes second nature."
    },
    {
      title: "Create Real Projects",
      desc: "Graduate with a portfolio of real tools, scripts, and applications rather than hypothetical theoretical templates."
    },
    {
      title: "Build Public Proof",
      desc: "Publish commit trails and public logs that establish a credible reputation in developer communities."
    },
    {
      title: "Become Career Ready",
      desc: "Learn to deploy, write clean code, handle errors, explain technical choices, and align with engineering expectations."
    }
  ];

  const sampleStudentCards = [
    {
      day: "Day 12",
      title: "CSV Clean Pipeline",
      desc: "Clean dirty user records using Pandas regex logic.",
      git: true,
      link: true,
      streak: 12,
      track: "Python & Data"
    },
    {
      day: "Day 08",
      title: "API Log Parser",
      desc: "Build a high-performance regex log analyzer script.",
      git: true,
      link: true,
      streak: 8,
      track: "Python & Data"
    },
    {
      day: "Day 05",
      title: "JSON Schema Linter",
      desc: "Validate nested parameters and handle malformed structures.",
      git: true,
      link: true,
      streak: 5,
      track: "Python & Data"
    }
  ];

  return (
    <div className="min-h-screen bg-background-app text-foreground-app font-sans antialiased overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      
      {/* 1. Header */}
      <header className="sticky top-0 z-50 bg-background-app/80 backdrop-blur-md border-b border-white/5 px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-8.5 h-8.5 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-black text-lg tracking-wider shadow-[0_0_15px_rgba(255,87,34,0.3)]">
              V
            </div>
            <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
              VinuRa Talks
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-muted-app">
            <a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a>
            <a href="#why-60-days" className="hover:text-primary transition-colors">Why 60 Days</a>
            <a href="#proof-of-work" className="hover:text-primary transition-colors">Proof of Work</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          </nav>

          <div className="hidden md:block">
            <Button size="sm" onClick={() => navigate('/dashboard')}>
              Start Challenge
            </Button>
          </div>

          {/* Mobile Hamburguer Menu */}
          <button 
            className="md:hidden p-2 hover:bg-white/5 rounded-xl transition-colors cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-0 right-0 z-40 bg-surface border-b border-white/8 px-6 py-8 flex flex-col gap-6 md:hidden shadow-2xl"
          >
            <nav className="flex flex-col gap-4 text-sm font-semibold text-muted-app">
              <a 
                href="#how-it-works" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-primary py-2 border-b border-white/5"
              >
                How It Works
              </a>
              <a 
                href="#why-60-days" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-primary py-2 border-b border-white/5"
              >
                Why 60 Days
              </a>
              <a 
                href="#proof-of-work" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-primary py-2 border-b border-white/5"
              >
                Proof of Work
              </a>
              <a 
                href="#faq" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-primary py-2"
              >
                FAQ
              </a>
            </nav>
            <Button className="w-full" onClick={() => { setMobileMenuOpen(false); navigate('/dashboard'); }}>
              Start Challenge
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Hero Section */}
      <section className="relative pt-16 pb-20 md:pt-28 md:pb-36 overflow-hidden bg-orange-glow">
        <PageContainer className="grid md:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="md:col-span-7 space-y-6 text-center md:text-left">
            <Badge variant="primary" className="px-3.5 py-1.5 font-bold tracking-wide border border-primary/20 bg-primary/10 text-primary">
              🔥 60 Days • Build In Public
            </Badge>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05] text-white">
              Step Into The Future Of<br className="hidden md:inline" /> 
              <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent font-black">
                Consistency Challenge
              </span>
            </h1>

            <p className="text-sm md:text-base text-muted-app font-medium max-w-xl mx-auto md:mx-0 leading-relaxed">
              VinuRa Talks is a 60-day challenge that helps you transition from watching video tutorials to writing code, publishing commits, and building public proof of your skills.
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-3">
              <Button 
                variant="primary" 
                size="lg" 
                rightIcon={<ArrowRight className="w-4 h-4" />}
                onClick={() => navigate('/dashboard')}
                className="w-full sm:w-auto font-bold tracking-wide"
              >
                Start the 60-Day Challenge
              </Button>
              <a href="#how-it-works" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full">
                  See How It Works
                </Button>
              </a>
            </div>
          </div>

          {/* Timeline Visual Mockup */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[330px] bg-surface/60 border border-white/8 p-7 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-md space-y-5">
              
              <div className="flex justify-between items-center pb-2 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Challenge Roadmap</span>
                </div>
                <Badge variant="neutral" size="sm" className="bg-white/5 text-slate-300">Active</Badge>
              </div>

              {/* Day Timeline */}
              <div className="space-y-4.5 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-[2px] before:bg-white/5">
                
                {/* Day 1 */}
                <div className="flex gap-4 items-center relative">
                  <div className="w-7 h-7 rounded-full bg-primary/20 border border-primary/40 text-primary flex items-center justify-center text-xs font-bold shadow-sm">
                    ✓
                  </div>
                  <div className="flex-1">
                    <span className="text-[9px] font-bold text-muted-app uppercase">Day 01</span>
                    <h3 className="text-xs font-bold text-white leading-tight">Environment Configured</h3>
                  </div>
                </div>

                {/* Day 7 */}
                <div className="flex gap-4 items-center relative">
                  <div className="w-7 h-7 rounded-full bg-primary/20 border border-primary/40 text-primary flex items-center justify-center text-xs font-bold shadow-sm">
                    ✓
                  </div>
                  <div className="flex-1">
                    <span className="text-[9px] font-bold text-muted-app uppercase">Day 07</span>
                    <h3 className="text-xs font-bold text-white leading-tight">SQL Schema Designed</h3>
                  </div>
                </div>

                {/* Day 12 */}
                <div className="flex gap-4 items-center relative">
                  <div className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold animate-pulse shadow-[0_0_15px_rgba(255,87,34,0.6)]">
                    🔥
                  </div>
                  <div className="flex-1">
                    <span className="text-[9px] font-bold text-primary uppercase">Day 12</span>
                    <h3 className="text-xs font-extrabold text-white leading-tight">CSV Cleaning Pipeline</h3>
                  </div>
                  <Badge variant="primary" size="sm" className="bg-primary/20 text-primary border border-primary/30">Today</Badge>
                </div>

                {/* Day 30 */}
                <div className="flex gap-4 items-center relative opacity-50">
                  <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 text-slate-400 flex items-center justify-center text-xs font-bold">
                    30
                  </div>
                  <div className="flex-1">
                    <span className="text-[9px] font-bold text-muted-app uppercase">Day 30</span>
                    <h3 className="text-xs font-bold text-slate-300 leading-tight">FastAPI Integration</h3>
                  </div>
                </div>

                {/* Day 60 */}
                <div className="flex gap-4 items-center relative opacity-40">
                  <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 text-slate-400 flex items-center justify-center text-xs font-bold">
                    🏆
                  </div>
                  <div className="flex-1">
                    <span className="text-[9px] font-bold text-muted-app uppercase">Day 60</span>
                    <h3 className="text-xs font-bold text-slate-300 leading-tight">Final Capstone Build</h3>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </PageContainer>
      </section>

      {/* 3. Trust Signals */}
      <section className="border-y border-white/8 bg-white/1 py-12 relative z-10 bg-orange-glow-spot">
        <PageContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <span className="block text-3xl font-extrabold text-primary mb-1 drop-shadow-[0_0_10px_rgba(255,87,34,0.3)]">60 Days</span>
            <span className="text-xs font-bold uppercase tracking-wider text-muted-app">Daily Building</span>
          </div>
          <div>
            <span className="block text-3xl font-extrabold text-white mb-1">GitHub</span>
            <span className="text-xs font-bold uppercase tracking-wider text-muted-app">Proof of Work</span>
          </div>
          <div>
            <span className="block text-3xl font-extrabold text-primary mb-1 drop-shadow-[0_0_10px_rgba(255,87,34,0.3)]">LinkedIn</span>
            <span className="text-xs font-bold uppercase tracking-wider text-muted-app">Public Learning</span>
          </div>
          <div>
            <span className="block text-3xl font-extrabold text-white mb-1">1 Journey</span>
            <span className="text-xs font-bold uppercase tracking-wider text-muted-app">Built by You</span>
          </div>
        </PageContainer>
      </section>

      {/* 4. How It Works */}
      <section id="how-it-works" className="py-20 md:py-28 relative z-10 bg-glass border-b border-white/5">
        <PageContainer>
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <Badge variant="primary" size="sm" className="bg-primary/10 text-primary border border-primary/20">Process</Badge>
            <h2 className="text-3xl font-black text-white tracking-tight">How VinuRa Talks Works</h2>
            <p className="text-sm text-muted-app font-medium">Four simple steps to transform your consistency and prove your skills.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative group p-6 bg-surface/50 rounded-3xl border border-white/8 hover:border-primary/20 hover:bg-surface/85 transition-all">
                <span className="absolute top-4 right-4 text-4xl font-extrabold text-white/5 select-none group-hover:scale-105 transition-transform">
                  {step.num}
                </span>
                <div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center rounded-2xl mb-4 font-bold border border-primary/25">
                  {step.icon}
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{step.title}</h3>
                <p className="text-xs text-muted-app font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* 5. Why 60 Days Section */}
      <section id="why-60-days" className="py-20 md:py-28 relative z-10">
        <PageContainer>
          <div className="grid md:grid-cols-12 gap-12 items-center">
            
            <div className="md:col-span-6 space-y-6">
              <Badge variant="primary" className="bg-primary/10 text-primary border border-primary/20">The Habit Science</Badge>
              <h2 className="text-3xl font-black text-white tracking-tight leading-tight">
                Why 60 Days?
              </h2>
              <p className="text-sm text-muted-app leading-relaxed font-medium">
                Consistency isn't built overnight. By organizing the program into a structured 60-day path, we shift the focus from theoretical certificates to daily evidence-backed capabilities.
              </p>

              <div className="space-y-4.5">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 text-primary flex items-center justify-center text-xs font-bold mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">One Day Proves You Can Start</h4>
                    <p className="text-xs text-muted-app">Initiating is the hardest step. Day 1 is your commitment to change.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 text-primary flex items-center justify-center text-xs font-bold mt-0.5">
                    7
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Seven Days Proves You Can Return</h4>
                    <p className="text-xs text-muted-app">Overcoming the first weekend and mid-week friction establishes the baseline habit loop.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 text-primary flex items-center justify-center text-xs font-bold mt-0.5">
                    30
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Thirty Days Proves You Can Stay Consistent</h4>
                    <p className="text-xs text-muted-app">Reaching the halfway mark solidifies your coding ritual and builds career momentum.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 text-primary flex items-center justify-center text-xs font-bold mt-0.5">
                    60
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Sixty Days Gives You a Body of Work</h4>
                    <p className="text-xs text-muted-app">A complete, rich GitHub timeline and LinkedIn activity trail ready to showcase to recruiters.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-6 flex justify-center">
              <Card className="max-w-[340px] border border-white/8 p-6 bg-surface/60 space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Calculated Momentum</span>
                  <Badge variant="success" className="bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">Peak Score</Badge>
                </div>

                {/* Progress bar visual milestones */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span>Habit Formation Index</span>
                      <span className="text-emerald-400">88%</span>
                    </div>
                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 w-[88%] rounded-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span>GitHub Proof Coverage</span>
                      <span className="text-primary">92%</span>
                    </div>
                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[92%] rounded-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span>LinkedIn Public Shares</span>
                      <span className="text-primary">11 of 12 completed</span>
                    </div>
                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[91%] rounded-full" />
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-primary/5 border border-primary/10 rounded-2xl flex gap-3 items-center">
                  <Sparkles className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-xs font-medium text-slate-300 leading-snug">
                    "Consistent daily commits build habit strength and create an unignorable body of work."
                  </span>
                </div>
              </Card>
            </div>

          </div>
        </PageContainer>
      </section>

      {/* 6. Proof of Work Section */}
      <section id="proof-of-work" className="py-20 md:py-28 relative z-10 bg-glass border-y border-white/5">
        <PageContainer>
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <Badge variant="primary" className="bg-primary/10 text-primary border border-primary/20">Proof Loop</Badge>
            <h2 className="text-3xl font-black text-white tracking-tight">The Three-Way Validation</h2>
            <p className="text-sm text-muted-app font-medium">We don't do certificates. We do verified capabilities.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-white/5 bg-surface/30 hover:border-primary/25 hover:bg-surface/60 transition-all">
              <div className="w-12 h-12 bg-white/5 text-white flex items-center justify-center rounded-2xl mx-auto mb-4 font-black border border-white/5">
                <Github className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-white mb-2">GitHub Commit Validation</h3>
              <p className="text-xs text-muted-app leading-relaxed font-medium">
                Submit your local code changes. Our system queries your repository to verify live files and test coverage.
              </p>
            </Card>

            <Card className="text-center p-6 border-white/5 bg-surface/30 hover:border-primary/25 hover:bg-surface/60 transition-all">
              <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-2xl mx-auto mb-4 font-black border border-primary/20">
                <Linkedin className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-white mb-2">LinkedIn Learn in Public</h3>
              <p className="text-xs text-muted-app leading-relaxed font-medium">
                Share a screenshot or summary explaining what you built. Recruiters track students active on LinkedIn.
              </p>
            </Card>

            <Card className="text-center p-6 border-white/5 bg-surface/30 hover:border-primary/25 hover:bg-surface/60 transition-all">
              <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-2xl mx-auto mb-4 font-black border border-primary/20">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-white mb-2">Public Consistency Streak</h3>
              <p className="text-xs text-muted-app leading-relaxed font-medium">
                Maintain your daily counter. Building consecutive habits provides visible evidence of grit and tenacity.
              </p>
            </Card>
          </div>
        </PageContainer>
      </section>

      {/* 7. Benefits Section */}
      <section className="py-20 md:py-28 relative z-10 bg-orange-glow-spot">
        <PageContainer>
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <Badge variant="primary" className="bg-primary/10 text-primary border border-primary/20">Why Enroll?</Badge>
            <h2 className="text-3xl font-black text-white tracking-tight">The Benefits of Daily Consistency</h2>
            <p className="text-sm text-muted-app font-medium">Build confidence and capability through actionable milestones.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex gap-4 p-5 bg-surface/40 border border-white/8 rounded-3xl">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">{benefit.title}</h3>
                  <p className="text-xs text-muted-app leading-relaxed font-medium">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* 8. Social Proof / Student Cards Carousel */}
      <section className="py-20 relative z-10 bg-glass border-y border-white/5">
        <PageContainer>
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <Badge variant="primary" className="bg-primary/10 text-primary border border-primary/20">Student Activity</Badge>
            <h2 className="text-3xl font-black text-white tracking-tight">Proof in Action</h2>
            <p className="text-sm text-muted-app font-medium">See how Indian college students log daily challenges.</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {sampleStudentCards.map((card, idx) => (
              <Card key={idx} className="border border-white/8 bg-surface/30 hover:border-primary/20 hover:bg-surface/50 transition-all space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{card.track}</span>
                  <Badge variant="primary" size="sm" className="bg-primary/10 text-primary border border-primary/25">{card.day}</Badge>
                </div>
                
                <div>
                  <h3 className="text-xs font-bold text-white leading-snug">{card.title}</h3>
                  <p className="text-[11px] text-muted-app mt-1 leading-relaxed font-medium">{card.desc}</p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                  <div className="flex gap-2">
                    <span className="inline-flex items-center gap-1 text-[9px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                      <Github className="w-3 h-3" /> git ✓
                    </span>
                    <span className="inline-flex items-center gap-1 text-[9px] font-bold text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full">
                      <Linkedin className="w-3 h-3" /> linked ✓
                    </span>
                  </div>
                  <span className="font-bold text-slate-400 text-[10px]">🔥 {card.streak}d streak</span>
                </div>
              </Card>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* 9. FAQ Section */}
      <section id="faq" className="py-20 md:py-28 relative z-10">
        <PageContainer>
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <Badge variant="primary" className="bg-primary/10 text-primary border border-primary/20">Support</Badge>
            <h2 className="text-3xl font-black text-white tracking-tight">Frequently Asked Questions</h2>
            <p className="text-sm text-muted-app font-medium">Everything you need to know about starting the challenge.</p>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            {faqData.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-surface/50 border border-white/8 rounded-3xl overflow-hidden transition-all duration-350"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-bold text-xs md:text-sm text-white hover:bg-white/2 transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-primary flex-shrink-0" />
                    ) : (
                      <Plus className="w-4 h-4 text-primary flex-shrink-0" />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-5 pb-5 text-xs text-muted-app leading-relaxed font-medium border-t border-white/5 pt-3">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </PageContainer>
      </section>

      {/* 10. Final CTA */}
      <section className="py-20 md:py-32 bg-surface/40 border-t border-white/8 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,87,34,0.12),transparent_70%)]" />
        
        <PageContainer className="relative z-10 space-y-6 max-w-xl">
          <Badge variant="primary" className="bg-primary/10 border-primary/20 text-primary">Get Started</Badge>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-white">
            Your next 60 days<br /> can look different.
          </h2>
          <p className="text-xs md:text-sm text-muted-app leading-relaxed font-medium">
            Join other Indian college students in building daily coding consistency, showing your work, and creating visible proof of what you can do.
          </p>
          <div className="pt-4">
            <Button 
              variant="primary" 
              size="lg" 
              className="w-full sm:w-auto font-bold shadow-lg"
              onClick={() => navigate('/dashboard')}
            >
              Start Building Today
            </Button>
          </div>
        </PageContainer>
      </section>

      {/* 11. Footer */}
      <footer className="border-t border-white/5 bg-background-app py-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6.5 h-6.5 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-black text-xs">
              V
            </div>
            <span className="font-extrabold text-sm text-white">
              VinuRa Talks
            </span>
          </div>

          <p className="text-xs text-muted-app font-medium">
            © 2026 VinuRa Talks. Built for developers.
          </p>

          <div className="flex gap-4">
            <a href="#" className="text-muted-app hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-app hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
};
