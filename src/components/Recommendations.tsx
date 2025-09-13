import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Brain, Leaf, Sun, Moon, Music } from "lucide-react";

const recommendations = [
  {
    id: 1,
    title: "5-Minute Breathing Exercise",
    description: "Simple breathing technique to reduce anxiety and stress",
    icon: Leaf,
    category: "Breathing",
    duration: "5 min",
    color: "secondary"
  },
  {
    id: 2,
    title: "Gratitude Journaling",
    description: "Write down 3 things you're grateful for today",
    icon: Heart,
    category: "Mindfulness",
    duration: "10 min",
    color: "accent"
  },
  {
    id: 3,
    title: "Progressive Muscle Relaxation",
    description: "Tension and release exercise for physical relaxation",
    icon: Brain,
    category: "Relaxation",
    duration: "15 min",
    color: "primary"
  },
  {
    id: 4,
    title: "Morning Affirmations",
    description: "Start your day with positive self-talk",
    icon: Sun,
    category: "Positivity",
    duration: "3 min",
    color: "secondary"
  },
  {
    id: 5,
    title: "Evening Wind-Down",
    description: "Gentle routine to prepare for restful sleep",
    icon: Moon,
    category: "Sleep",
    duration: "20 min",
    color: "accent"
  },
  {
    id: 6,
    title: "Calming Music Therapy",
    description: "Specially curated sounds for mental wellness",
    icon: Music,
    category: "Audio",
    duration: "30 min",
    color: "primary"
  }
];

export function Recommendations() {
  return (
    <Card className="p-6 bg-card shadow-card">
      <h2 className="text-xl font-semibold mb-4 text-foreground">
        Recommended for You
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {recommendations.map((rec) => {
          const Icon = rec.icon;
          return (
            <div
              key={rec.id}
              className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-200"
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`p-2 rounded-lg bg-${rec.color}/10`}>
                  <Icon className={`w-5 h-5 text-${rec.color}`} />
                </div>
                <Badge variant="secondary" className="text-xs">
                  {rec.duration}
                </Badge>
              </div>
              
              <h3 className="font-medium text-foreground mb-1">{rec.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">
                {rec.description}
              </p>
              
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-xs">
                  {rec.category}
                </Badge>
                <Button size="sm" variant="outline">
                  Start
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}