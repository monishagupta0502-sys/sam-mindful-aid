import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Smile, Meh, Frown, CloudRain } from "lucide-react";

const moods = [
  { id: 'happy', label: 'Very Happy', icon: Heart, color: 'mood-happy', message: 'That\'s wonderful! Your positive energy is radiating!' },
  { id: 'good', label: 'Good', icon: Smile, color: 'mood-good', message: 'Great to hear you\'re feeling good today!' },
  { id: 'neutral', label: 'Okay', icon: Meh, color: 'mood-neutral', message: 'Every day is a fresh start. You\'re doing fine.' },
  { id: 'sad', label: 'Sad', icon: Frown, color: 'mood-sad', message: 'It\'s okay to feel sad sometimes. You\'re not alone.' },
  { id: 'anxious', label: 'Anxious', icon: CloudRain, color: 'mood-anxious', message: 'Take a deep breath. This feeling will pass.' },
];

export function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const selectedMoodData = moods.find(mood => mood.id === selectedMood);

  return (
    <Card className="p-6 bg-card-secondary shadow-card">
      <h2 className="text-xl font-semibold mb-4 text-foreground">How are you feeling today?</h2>
      
      <div className="grid grid-cols-5 gap-3 mb-6">
        {moods.map((mood) => {
          const Icon = mood.icon;
          const isSelected = selectedMood === mood.id;
          
          return (
            <button
              key={mood.id}
              onClick={() => setSelectedMood(mood.id)}
              className={`
                flex flex-col items-center p-3 rounded-lg transition-all duration-300
                ${isSelected 
                  ? `bg-${mood.color} text-white shadow-peaceful` 
                  : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
                }
              `}
            >
              <Icon className="w-6 h-6 mb-1" />
              <span className="text-xs font-medium">{mood.label}</span>
            </button>
          );
        })}
      </div>

      {selectedMoodData && (
        <div 
          className={`
            p-4 rounded-lg transition-all duration-500 
            bg-${selectedMoodData.color}/10 border border-${selectedMoodData.color}/20
          `}
        >
          <p 
            className={`text-sm font-medium text-${selectedMoodData.color}`}
            style={{ color: `hsl(var(--${selectedMoodData.color}))` }}
          >
            {selectedMoodData.message}
          </p>
        </div>
      )}
    </Card>
  );
}