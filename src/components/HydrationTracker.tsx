import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Droplets, Plus, Minus, Award } from "lucide-react";

export function HydrationTracker() {
  const [waterIntake, setWaterIntake] = useState(4); // glasses of water
  const dailyGoal = 8; // 8 glasses per day
  const progressPercentage = (waterIntake / dailyGoal) * 100;

  const addWater = () => {
    if (waterIntake < dailyGoal + 2) { // Allow slight overage
      setWaterIntake(prev => prev + 1);
    }
  };

  const removeWater = () => {
    if (waterIntake > 0) {
      setWaterIntake(prev => prev - 1);
    }
  };

  const getEncouragementMessage = () => {
    if (progressPercentage >= 100) {
      return "🎉 Amazing! You've reached your hydration goal!";
    } else if (progressPercentage >= 75) {
      return "💪 Great progress! Almost there!";
    } else if (progressPercentage >= 50) {
      return "👍 Good job! Keep it up!";
    } else if (progressPercentage >= 25) {
      return "🌱 You're on the right track!";
    } else {
      return "💧 Let's start hydrating for better mental clarity!";
    }
  };

  return (
    <Card className="p-6 bg-card-secondary shadow-card">
      <div className="flex items-center gap-2 mb-4">
        <Droplets className="w-6 h-6 text-primary" />
        <h2 className="text-xl font-semibold text-foreground">Daily Hydration</h2>
      </div>
      
      <div className="text-center mb-6">
        <div className="text-3xl font-bold text-primary mb-2">
          {waterIntake} / {dailyGoal}
        </div>
        <div className="text-sm text-muted-foreground mb-4">glasses of water</div>
        
        <Progress 
          value={progressPercentage} 
          className="w-full h-3 mb-4"
        />
        
        <div className="text-sm font-medium text-foreground mb-4">
          {getEncouragementMessage()}
        </div>
      </div>
      
      <div className="flex items-center justify-center gap-4 mb-4">
        <Button
          variant="outline"
          size="icon"
          onClick={removeWater}
          disabled={waterIntake === 0}
        >
          <Minus className="w-4 h-4" />
        </Button>
        
        <div className="text-center">
          <div className="grid grid-cols-4 gap-1 mb-2">
            {Array.from({ length: dailyGoal }).map((_, index) => (
              <div
                key={index}
                className={`
                  w-6 h-6 rounded-full border-2 transition-colors duration-300
                  ${index < waterIntake 
                    ? 'bg-primary border-primary' 
                    : 'border-muted-foreground/30'
                  }
                `}
              >
                {index < waterIntake && (
                  <Droplets className="w-4 h-4 text-primary-foreground m-0.5" />
                )}
              </div>
            ))}
          </div>
        </div>
        
        <Button
          variant="outline"
          size="icon"
          onClick={addWater}
          disabled={waterIntake >= dailyGoal + 2}
        >
          <Plus className="w-4 h-4" />
        </Button>
      </div>
      
      {progressPercentage >= 100 && (
        <div className="text-center p-3 bg-secondary/10 rounded-lg border border-secondary/20">
          <Award className="w-6 h-6 text-secondary mx-auto mb-2" />
          <p className="text-sm font-medium text-secondary">
            Hydration Goal Achieved! 🏆
          </p>
        </div>
      )}
      
      <div className="text-xs text-muted-foreground text-center mt-4">
        Proper hydration supports mental clarity and emotional wellbeing
      </div>
    </Card>
  );
}