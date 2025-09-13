import { MoodTracker } from "@/components/MoodTracker";
import { ChatBot } from "@/components/ChatBot";
import { Recommendations } from "@/components/Recommendations";
import { RelaxationGames } from "@/components/RelaxationGames";
import { HydrationTracker } from "@/components/HydrationTracker";
import { ProgressAnalytics } from "@/components/ProgressAnalytics";
import samAppIcon from "@/assets/sam-app-icon.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-radial">
      {/* Header */}
      <header className="flex items-center justify-between p-6 bg-card/80 backdrop-blur-sm border-b border-border">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold text-foreground">
            SAM
          </h1>
          <span className="text-sm text-muted-foreground">
            Self-help for Anxiety Management
          </span>
        </div>
        <div className="flex items-center gap-2">
          <img 
            src={samAppIcon} 
            alt="SAM App Icon" 
            className="w-10 h-10 rounded-lg shadow-peaceful animate-pulse-gentle" 
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8 space-y-8">
        {/* Welcome Section */}
        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Welcome to Your Mental Wellness Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            SAM is here to support you every step of the way. Track your mood, chat with our AI companion, 
            and discover personalized tools to improve your mental wellbeing.
          </p>
        </section>

        {/* Mood Tracker - Primary Tab */}
        <section>
          <MoodTracker />
        </section>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            <Recommendations />
            <HydrationTracker />
          </div>
          
          {/* Right Column */}
          <div className="space-y-8">
            <RelaxationGames />
            <ProgressAnalytics />
          </div>
        </div>
      </main>

      {/* Floating Chat Bot */}
      <ChatBot />
    </div>
  );
};

export default Index;
