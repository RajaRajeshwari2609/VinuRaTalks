import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, GitCommit, Info, AlertTriangle } from 'lucide-react';
import { PageContainer, Button, Card, Badge, BottomNavigation, Linkedin } from '@/components/common';

export const ChallengeDayPage: React.FC = () => {
  const { day } = useParams<{ day: string }>();
  const navigate = useNavigate();
  const dayNumber = day ? parseInt(day, 10) : 12;

  return (
    <div className="min-h-screen bg-background-app text-foreground-app pb-24 md:pb-8">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-surface/80 backdrop-blur-md border-b border-border-app px-4 py-4">
        <div className="max-w-md mx-auto flex items-center gap-3">
          <button 
            onClick={() => navigate('/dashboard')}
            className="p-1 hover:bg-slate-100 rounded-lg transition-all duration-200 cursor-pointer"
            aria-label="Back to Dashboard"
          >
            <ArrowLeft className="w-5 h-5 text-muted-app" />
          </button>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-muted-app uppercase tracking-wider">VinuRa Talks Challenge</span>
            <h1 className="text-base font-bold text-foreground-app">Challenge Day {dayNumber}</h1>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <PageContainer size="dashboard" className="pt-6">
        <Card className="text-center p-8 border-dashed border-2 border-border-app bg-white relative overflow-hidden">
          {/* Subtle gradient accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-violet-500" />
          
          <div className="mb-6 mx-auto w-16 h-16 bg-indigo-50 flex items-center justify-center rounded-2xl text-primary animate-pulse-ring">
            <BookOpen className="w-8 h-8" />
          </div>

          <Badge variant="primary" className="mb-4">Developer B Workspace</Badge>

          <h2 className="text-xl font-extrabold text-foreground-app tracking-tight mb-2">
            Challenge Day {dayNumber} Workspace
          </h2>
          
          <p className="text-sm text-muted-app leading-relaxed max-w-sm mx-auto mb-6">
            This route is reserved for Developer B. They will connect the daily tasks, GitHub commit validations, and LinkedIn share tools here.
          </p>

          <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 text-left max-w-sm mx-auto mb-6 space-y-3.5">
            <h3 className="text-xs font-bold text-foreground-app uppercase tracking-wider flex items-center gap-2">
              <Info className="w-4 h-4 text-primary" /> Shared Integrations Available:
            </h3>
            <ul className="text-xs text-muted-app space-y-2.5 font-medium">
              <li className="flex items-center gap-2">
                <GitCommit className="w-4 h-4 text-indigo-500" /> Complete Design System & Theme Tokens
              </li>
              <li className="flex items-center gap-2">
                <Linkedin className="w-4 h-4 text-indigo-500" /> BottomNavigation & Button Components
              </li>
              <li className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-indigo-500" /> Mock Challenge Data & Status Types
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <Button variant="primary" size="md" onClick={() => navigate('/dashboard')}>
              Return to Dashboard
            </Button>
          </div>
        </Card>
      </PageContainer>

      {/* Shared Navigation */}
      <BottomNavigation active="challenges" onChallengeClick={() => {}} />
    </div>
  );
};
