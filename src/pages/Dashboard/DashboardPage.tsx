import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Flame, BookOpen, GitCommit, Lock, AlertCircle, RotateCcw, CheckCircle2, 
  Settings, ChevronRight, HelpCircle, Trophy, Sparkles, X, Link2
} from 'lucide-react';
import { 
  PageContainer, Card, Badge, Avatar, ProgressBar, ProgressRing, 
  EmptyState, Button, BottomNavigation, Linkedin 
} from '@/components/common';
import { 
  mockStudentActive, mockStudentEmpty, mockStudentMissed, 
  mockStudentIncompleteProfile, getChallengeByDay, mockLeaderboard
} from '@/data/mockData';

export const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  
  // State variables to control interactive dashboard demo
  const [activeTab, setActiveTab] = useState<'home' | 'challenges' | 'progress' | 'profile'>('home');
  const [demoState, setDemoState] = useState<'active' | 'empty' | 'missed' | 'incomplete'>('active');
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [tempGithub, setTempGithub] = useState('');
  const [tempLinkedin, setTempLinkedin] = useState('');
  
  // Custom manual updates to profile connections
  const [customGithub, setCustomGithub] = useState('');
  const [customLinkedin, setCustomLinkedin] = useState('');

  // Determine current student data based on selected demo state
  const getStudentData = () => {
    switch (demoState) {
      case 'empty':
        return mockStudentEmpty;
      case 'missed':
        return mockStudentMissed;
      case 'incomplete':
        return {
          ...mockStudentIncompleteProfile,
          github: customGithub || mockStudentIncompleteProfile.github,
          linkedin: customLinkedin || mockStudentIncompleteProfile.linkedin,
          // Increase score if student linked them
          momentumScore: (customGithub && customLinkedin) ? 82 : (customGithub || customLinkedin) ? 75 : mockStudentIncompleteProfile.momentumScore
        };
      case 'active':
      default:
        return mockStudentActive;
    }
  };

  const student = getStudentData();
  const todayChallenge = getChallengeByDay(student.currentDay);

  // Setup profile connection handlers
  const openProfileModal = () => {
    setTempGithub(student.github || '');
    setTempLinkedin(student.linkedin || '');
    setIsProfileModalOpen(true);
  };

  const saveProfileConnections = () => {
    setCustomGithub(tempGithub);
    setCustomLinkedin(tempLinkedin);
    setIsProfileModalOpen(false);
    if (demoState === 'incomplete' && tempGithub && tempLinkedin) {
      setDemoState('active'); // Transition to active state on connection
    }
  };

  // Recover streak handler
  const handleRecoverStreak = () => {
    setDemoState('active');
  };

  return (
    <div className="min-h-screen bg-background-app text-foreground-app pb-24 md:pb-8 bg-orange-glow-spot">
      
      {/* --- DEMO EVALUATION CONTROL PANEL (Top Drawer) --- */}
      <div className="bg-white/2 border-b border-white/5 px-4 py-3 relative z-50 backdrop-blur-md">
        <div className="max-w-md mx-auto md:max-w-4xl flex flex-col md:flex-row md:items-center justify-between gap-2.5">
          <div className="flex items-center gap-2">
            <Settings className="w-3.5 h-3.5 text-primary animate-spin" style={{ animationDuration: '6s' }} />
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300">
              Demo Evaluation Panel (VinuRa Talks)
            </span>
          </div>
          <div className="grid grid-cols-4 gap-1.5 md:flex md:items-center">
            <button
              onClick={() => setDemoState('active')}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-bold tracking-wide transition-all cursor-pointer ${
                demoState === 'active' 
                  ? 'bg-primary text-white shadow-[0_0_10px_rgba(255,87,34,0.4)]' 
                  : 'bg-white/5 text-slate-400 border border-white/5 hover:bg-white/10 hover:text-white'
              }`}
            >
              Active
            </button>
            <button
              onClick={() => setDemoState('empty')}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-bold tracking-wide transition-all cursor-pointer ${
                demoState === 'empty' 
                  ? 'bg-primary text-white shadow-[0_0_10px_rgba(255,87,34,0.4)]' 
                  : 'bg-white/5 text-slate-400 border border-white/5 hover:bg-white/10 hover:text-white'
              }`}
            >
              Empty
            </button>
            <button
              onClick={() => setDemoState('missed')}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-bold tracking-wide transition-all cursor-pointer ${
                demoState === 'missed' 
                  ? 'bg-primary text-white shadow-[0_0_10px_rgba(255,87,34,0.4)]' 
                  : 'bg-white/5 text-slate-400 border border-white/5 hover:bg-white/10 hover:text-white'
              }`}
            >
              Missed
            </button>
            <button
              onClick={() => {
                setDemoState('incomplete');
                setCustomGithub('');
                setCustomLinkedin('');
              }}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-bold tracking-wide transition-all cursor-pointer ${
                demoState === 'incomplete' 
                  ? 'bg-primary text-white shadow-[0_0_10px_rgba(255,87,34,0.4)]' 
                  : 'bg-white/5 text-slate-400 border border-white/5 hover:bg-white/10 hover:text-white'
              }`}
            >
              Incomplete
            </button>
          </div>
        </div>
      </div>

      {/* --- DASHBOARD HEADER --- */}
      <header className="sticky top-0 z-40 bg-background-app/80 backdrop-blur-md border-b border-white/5 px-4 py-4">
        <PageContainer size="dashboard" className="py-0 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar name={student.name} size="md" className="border-white/10 bg-white/5 text-white" />
            <div className="flex flex-col">
              <h1 className="text-xs md:text-sm font-bold text-white flex items-center gap-1.5">
                Good evening, {student.name} 👋
              </h1>
              <span className="text-[9px] font-bold text-muted-app uppercase tracking-widest mt-0.5">
                Day {student.currentDay} of {student.totalDays} • {student.track}
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Badge variant={demoState === 'missed' ? 'warning' : 'primary'} size="sm" className={
              demoState === 'missed' 
                ? 'bg-amber-500/10 border border-amber-500/20 text-amber-400' 
                : 'bg-primary/10 border border-primary/20 text-primary'
            }>
              {demoState === 'missed' ? 'Recovery Path' : 'Active'}
            </Badge>
          </div>
        </PageContainer>
      </header>

      {/* --- MAIN PAGE CONTAINER --- */}
      <PageContainer size="dashboard" className="space-y-6">
        
        {/* --- DYNAMIC WARNINGS / ACTIONS (e.g. Profile Incomplete) --- */}
        {demoState === 'incomplete' && !student.github && !student.linkedin && (
          <Card variant="bordered" className="bg-red-500/5 border-red-500/15 p-5 flex gap-4 items-start">
            <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            <div className="flex-1 space-y-1">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">Complete your profile</h3>
              <p className="text-xs text-muted-app font-medium leading-relaxed">
                Add your GitHub and LinkedIn accounts so your daily proof-of-work achievements can be automatically verified.
              </p>
              <div className="pt-2">
                <Button size="sm" variant="danger" className="py-1.5 px-4 font-bold" onClick={openProfileModal}>
                  Complete Profile
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* --- STREAK STATUS CARD --- */}
        {demoState === 'missed' ? (
          <Card className="border-amber-500/15 bg-amber-500/5 p-6 space-y-4">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold border border-amber-500/20 flex-shrink-0">
                <RotateCcw className="w-6 h-6 animate-pulse" />
              </div>
              <div className="space-y-1">
                <h2 className="text-xs font-bold text-white uppercase tracking-wider">Your streak paused</h2>
                <p className="text-xs text-muted-app font-medium leading-relaxed">
                  You completed 11 days before the break. That progress is still yours. Start today's challenge to reactivate your streak!
                </p>
              </div>
            </div>
            <div className="flex gap-3 pt-1">
              <Button size="sm" variant="primary" className="font-bold py-1.5 px-4" onClick={handleRecoverStreak}>
                Start Again
              </Button>
            </div>
          </Card>
        ) : (
          <Card className="p-6 flex justify-between items-center bg-surface/60">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center font-bold shadow-[0_0_15px_rgba(255,87,34,0.15)]">
                  <Flame className="w-6 h-6 text-primary fill-primary/10 animate-bounce" style={{ animationDuration: '2.5s' }} />
                </div>
                {student.streak > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-primary text-[8px] text-white font-bold items-center justify-center">
                      !
                    </span>
                  </span>
                )}
              </div>
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-black tracking-tight text-white">
                    {student.streak}
                  </span>
                  <span className="text-[9px] font-bold text-muted-app uppercase tracking-widest">
                    Day Streak
                  </span>
                </div>
                <p className="text-xs text-muted-app font-medium">
                  {student.streak > 0 
                    ? "You're building momentum. Keep it alive!" 
                    : "Your first build starts here. Let's make Day 1 count!"
                  }
                </p>
              </div>
            </div>
            <div className="text-right">
              <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest">Longest Streak</span>
              <span className="text-xs font-bold text-white mt-0.5 block">{student.longestStreak} days</span>
            </div>
          </Card>
        )}

        {/* --- GRID LAYOUT: TODAY'S CHALLENGE + PROGRESS COMPONENT --- */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* TODAY'S CHALLENGE CARD */}
          <Card className="border border-white/8 relative overflow-hidden flex flex-col justify-between p-6 bg-surface/60">
            {/* Left accent bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Badge variant="primary" size="sm" className="bg-primary/10 text-primary border border-primary/20">Today • Day {student.currentDay}</Badge>
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-muted-app">
                  <ClockIcon className="w-3.5 h-3.5 text-slate-400" />
                  <span>~{todayChallenge.estimatedMinutes} min</span>
                </div>
              </div>

              <div>
                <h2 className="text-base font-bold text-white tracking-tight leading-snug">
                  {todayChallenge.title}
                </h2>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1 block">
                  {todayChallenge.difficulty} Difficulty
                </span>
                <p className="text-xs text-muted-app mt-3 leading-relaxed font-medium">
                  {todayChallenge.description}
                </p>
              </div>
            </div>

            <div className="pt-8">
              <Button 
                variant="primary" 
                size="md" 
                className="w-full text-xs py-3 rounded-2xl font-bold tracking-wide"
                rightIcon={<ChevronRight className="w-4 h-4" />}
                onClick={() => navigate(`/day/${student.currentDay}`)}
              >
                {student.currentDay === 1 ? "Start Day 1" : "Continue Challenge"}
              </Button>
            </div>
          </Card>

          {/* OVERALL PROGRESS COMPONENT */}
          <Card className="p-6 flex flex-col justify-between bg-surface/60">
            <div className="space-y-5">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Overall Progress</h3>
                  <div className="flex items-baseline gap-1.5 mt-1">
                    <span className="text-2xl font-black text-white">{student.completedDays}</span>
                    <span className="text-xs font-semibold text-muted-app">/ {student.totalDays} Days</span>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="success" size="sm" className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">{student.completionPercent.toFixed(1)}% Done</Badge>
                </div>
              </div>

              <ProgressBar value={student.completionPercent} height={8} className="my-1" />

              <div className="grid grid-cols-2 gap-3 text-xs font-semibold">
                <div className="bg-white/2 rounded-2xl p-3 border border-white/5">
                  <span className="block text-[9px] font-bold text-slate-400 uppercase">Completed</span>
                  <span className="text-sm font-bold text-white mt-0.5 block">{student.completedDays} days</span>
                </div>
                <div className="bg-white/2 rounded-2xl p-3 border border-white/5">
                  <span className="block text-[9px] font-bold text-slate-400 uppercase">Remaining</span>
                  <span className="text-sm font-bold text-white mt-0.5 block">{student.totalDays - student.completedDays} days</span>
                </div>
              </div>
            </div>

            {/* Progress Timeline Milestones */}
            <div className="pt-4 flex items-center justify-between text-[9px] font-bold text-slate-400 tracking-widest uppercase border-t border-white/5 mt-5">
              <span className={student.completedDays >= 10 ? 'text-primary font-extrabold' : ''}>D10 {student.completedDays >= 10 ? '✓' : ''}</span>
              <span className={student.completedDays >= 20 ? 'text-primary font-extrabold' : ''}>D20</span>
              <span className={student.completedDays >= 30 ? 'text-primary font-extrabold' : ''}>D30</span>
              <span className={student.completedDays >= 40 ? 'text-primary font-extrabold' : ''}>D40</span>
              <span className={student.completedDays >= 50 ? 'text-primary font-extrabold' : ''}>D50</span>
              <span className={student.completedDays >= 60 ? 'text-primary font-extrabold' : ''}>D60</span>
            </div>
          </Card>

        </div>

        {/* --- CAREER MOMENTUM DISPLAY (Primary Differentiator) --- */}
        <Card className="p-6 bg-surface/60 border border-white/8 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            
            {/* SVG Progress Ring */}
            <div className="flex-shrink-0">
              <ProgressRing value={student.momentumScore || 0} size={110} strokeWidth={9} label="Momentum" />
            </div>

            {/* Momentum metrics breakdown */}
            <div className="flex-1 space-y-4 w-full text-center sm:text-left">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center justify-center sm:justify-start gap-1.5">
                    Career Momentum <Sparkles className="w-4 h-4 text-primary fill-primary/10 animate-pulse" />
                  </h3>
                  <span className="text-[10px] text-primary font-bold hover:underline cursor-pointer flex items-center justify-center gap-1" onClick={() => alert('Momentum is computed dynamically: Consistency Streak (40%) + Code Proof Submissions (40%) + Milestone Unlocks (20%).')}>
                    How is this calculated? <HelpCircle className="w-3.5 h-3.5" />
                  </span>
                </div>
                <p className="text-xs text-muted-app mt-1 font-medium max-w-md leading-relaxed">
                  Calculated based on daily consistency, GitHub code proofs, and LinkedIn learn-in-public sharing.
                </p>
              </div>

              {/* Progress checks grid */}
              <div className="grid grid-cols-3 gap-3 pt-1 text-left">
                <div className="flex flex-col bg-white/2 border border-white/5 p-3 rounded-2xl">
                  <div className="flex items-center justify-between gap-1.5">
                    <span className="text-xs font-bold text-white">Streak</span>
                    {student.streak >= 7 ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    ) : (
                      <div className="w-3.5 h-3.5 rounded-full border border-white/10 flex-shrink-0" />
                    )}
                  </div>
                  <span className="text-[9px] font-semibold text-muted-app mt-1">40% Weight</span>
                </div>

                <div className="flex flex-col bg-white/2 border border-white/5 p-3 rounded-2xl">
                  <div className="flex items-center justify-between gap-1.5">
                    <span className="text-xs font-bold text-white">Code Proof</span>
                    {student.github ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    ) : (
                      <div className="w-3.5 h-3.5 rounded-full border border-white/10 flex-shrink-0" />
                    )}
                  </div>
                  <span className="text-[9px] font-semibold text-muted-app mt-1">40% Weight</span>
                </div>

                <div className="flex flex-col bg-white/2 border border-white/5 p-3 rounded-2xl">
                  <div className="flex items-center justify-between gap-1.5">
                    <span className="text-xs font-bold text-white">Milestones</span>
                    {student.completedDays >= 10 ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    ) : (
                      <div className="w-3.5 h-3.5 rounded-full border border-white/10 flex-shrink-0" />
                    )}
                  </div>
                  <span className="text-[9px] font-semibold text-muted-app mt-1">20% Weight</span>
                </div>
              </div>

            </div>

          </div>
        </Card>

        {/* --- HORIZONTAL ACHIEVEMENTS SCROLL --- */}
        <div className="space-y-3">
          <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Achievements</h3>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-white/10">
            {student.achievements.map((ach) => (
              <div 
                key={ach.id}
                className={`flex-shrink-0 flex items-center gap-3 px-4 py-3 rounded-2xl border transition-all duration-305 w-[210px] ${
                  ach.unlocked 
                    ? 'bg-surface border-white/8 shadow-md' 
                    : 'bg-white/2 border-white/5 opacity-50'
                }`}
              >
                <div className={`w-9.5 h-9.5 rounded-xl flex items-center justify-center flex-shrink-0 font-bold ${
                  ach.unlocked 
                    ? 'bg-primary/10 border border-primary/20 text-primary shadow-[0_0_10px_rgba(255,87,34,0.15)]' 
                    : 'bg-white/5 border border-white/5 text-slate-500'
                }`}>
                  {ach.unlocked ? (
                    <Trophy className="w-4.5 h-4.5 text-primary" />
                  ) : (
                    <Lock className="w-4.5 h-4.5 text-slate-500" />
                  )}
                </div>
                <div className="overflow-hidden">
                  <h4 className="text-xs font-bold text-white truncate leading-tight">{ach.title}</h4>
                  <span className="text-[10px] text-muted-app leading-tight line-clamp-1 mt-0.5 font-medium">{ach.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- PROOF-OF-WORK TIMELINE (Secondary Differentiator) --- */}
        <div className="space-y-3">
          <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Proof-of-Work Timeline</h3>
          
          {demoState === 'empty' ? (
            <EmptyState 
              title="No commits logged yet" 
              description="Everyone starts at Day 1. Your first daily task build starts here."
              icon={<BookOpen className="w-6 h-6" />}
              actionText="Start Day 1"
              onAction={() => navigate('/day/1')}
            />
          ) : (
            <Card className="p-0 bg-surface/50 border border-white/8 overflow-hidden">
              <div className="divide-y divide-white/5">
                {/* Timeline Log 1 */}
                <div className="p-4 flex items-start justify-between gap-4 bg-white/1">
                  <div className="flex gap-3">
                    <div className="w-7 h-7 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 flex items-center justify-center font-bold text-xs flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-white">Day 11 Completed</span>
                        <Badge variant="neutral" size="sm" className="px-1.5 py-0 bg-white/5 text-slate-300">SQL Schema</Badge>
                      </div>
                      <span className="block text-[10px] text-muted-app font-medium mt-0.5">Aug 07 • Relational SQL database schema design</span>
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="p-1 hover:bg-white/5 text-emerald-400 rounded cursor-pointer" title="GitHub Commit Verified"><GitCommit className="w-4 h-4 text-emerald-400" /></span>
                    <span className="p-1 hover:bg-white/5 text-primary rounded cursor-pointer" title="LinkedIn Share Verified"><Linkedin className="w-4 h-4 text-primary" /></span>
                  </div>
                </div>

                {/* Timeline Log 2 */}
                <div className="p-4 flex items-start justify-between gap-4 bg-white/1">
                  <div className="flex gap-3">
                    <div className="w-7 h-7 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 flex items-center justify-center font-bold text-xs flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-white">Day 10 Completed</span>
                        <Badge variant="neutral" size="sm" className="px-1.5 py-0 bg-white/5 text-slate-300">ORM Setup</Badge>
                      </div>
                      <span className="block text-[10px] text-muted-app font-medium mt-0.5">Aug 06 • Configured SQLAlchemy with models</span>
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="p-1 hover:bg-white/5 text-emerald-400 rounded cursor-pointer" title="GitHub Commit Verified"><GitCommit className="w-4 h-4 text-emerald-400" /></span>
                    <span className="p-1 hover:bg-white/5 text-primary rounded cursor-pointer" title="LinkedIn Share Verified"><Linkedin className="w-4 h-4 text-primary" /></span>
                  </div>
                </div>

                {/* Timeline Log 3 */}
                <div className="p-4 flex items-start justify-between gap-4 bg-white/1">
                  <div className="flex gap-3">
                    <div className="w-7 h-7 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 flex items-center justify-center font-bold text-xs flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-white">Day 09 Completed</span>
                        <Badge variant="neutral" size="sm" className="px-1.5 py-0 bg-white/5 text-slate-300">Data Importer</Badge>
                      </div>
                      <span className="block text-[10px] text-muted-app font-medium mt-0.5">Aug 05 • JSON bulk importer script</span>
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="p-1 hover:bg-white/5 text-emerald-400 rounded cursor-pointer" title="GitHub Commit Verified"><GitCommit className="w-4 h-4 text-emerald-400" /></span>
                    <span className="p-1 hover:bg-white/5 text-primary rounded cursor-pointer" title="LinkedIn Share Verified"><Linkedin className="w-4 h-4 text-primary" /></span>
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>

        {/* --- LEADERBOARD STANDING CARD --- */}
        <div className="space-y-3">
          <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Leaderboard Standing</h3>
          <Card className="p-6 bg-surface/60 border border-white/8">
            <div className="flex justify-between items-center mb-4 pb-3 border-b border-white/5">
              <div>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Your Standing</span>
                <span className="text-xl font-extrabold text-white mt-0.5 block">#{student.rank}</span>
              </div>
              <Badge variant="success" size="sm" className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">↑ 8 places this week</Badge>
            </div>
            
            <div className="space-y-2">
              {mockLeaderboard.slice(0, 4).map((user, index) => (
                <div 
                  key={index}
                  className={`flex justify-between items-center p-2.5 rounded-xl text-xs font-semibold ${
                    user.isCurrentUser 
                      ? 'bg-primary/10 border border-primary/20 text-primary shadow-[0_0_10px_rgba(255,87,34,0.15)]' 
                      : 'text-slate-300 bg-white/2 border border-white/3'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] font-bold text-slate-400 w-6">#{user.rank}</span>
                    <span>{user.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] text-slate-400">🔥 {user.streak}d streak</span>
                    <span className="text-white font-bold text-[11px]">{user.momentum} Score</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

      </PageContainer>

      {/* --- BOTTOM STICKY NAVIGATION BAR (Mobile viewport focus) --- */}
      <BottomNavigation 
        active={activeTab} 
        onChallengeClick={() => navigate(`/day/${student.currentDay}`)}
        onProfileClick={openProfileModal}
        onProgressClick={() => setActiveTab('progress')}
      />

      {/* --- PROFILE LINKING MODAL / DIALOG (Interactive Prototype) --- */}
      {isProfileModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-slate-950/60 backdrop-blur-sm">
          <Card className="w-full max-w-sm p-6 relative bg-surface border border-white/10 shadow-2xl space-y-4 animate-in fade-in zoom-in-95 duration-200">
            <button 
              className="absolute top-4 right-4 text-slate-400 hover:text-white cursor-pointer"
              onClick={() => setIsProfileModalOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Link2 className="w-5 h-5 text-primary" /> Complete Profile Connections
            </h3>
            
            <p className="text-xs text-muted-app leading-relaxed font-medium">
              Link your developer profiles to VinuRa Talks so your commit verification pipeline can query public proof of your challenges.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-[9px] font-bold text-slate-400 uppercase mb-1.5">GitHub Account URL</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 pointer-events-none">
                    <GitCommit className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={tempGithub}
                    onChange={(e) => setTempGithub(e.target.value)}
                    placeholder="https://github.com/username"
                    className="w-full pl-10 pr-4 py-2.5 text-xs border border-white/8 rounded-2xl bg-white/3 focus:outline-none focus:border-primary focus:bg-white/5 text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[9px] font-bold text-slate-400 uppercase mb-1.5">LinkedIn Profile URL</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 pointer-events-none">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={tempLinkedin}
                    onChange={(e) => setTempLinkedin(e.target.value)}
                    placeholder="https://linkedin.com/in/username"
                    className="w-full pl-10 pr-4 py-2.5 text-xs border border-white/8 rounded-2xl bg-white/3 focus:outline-none focus:border-primary focus:bg-white/5 text-white"
                  />
                </div>
              </div>
            </div>

            <div className="pt-2 flex gap-2 justify-end">
              <Button variant="ghost" size="sm" onClick={() => setIsProfileModalOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" size="sm" className="font-bold py-2 px-4 text-xs" onClick={saveProfileConnections}>
                Save Changes
              </Button>
            </div>
          </Card>
        </div>
      )}

    </div>
  );
};

// Simple visual clock helper
const ClockIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
