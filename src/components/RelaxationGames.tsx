import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gamepad2, Puzzle, Waves, Palette, Target, Zap } from "lucide-react";

const games = [
  {
    id: 1,
    title: "Zen Garden",
    description: "Create peaceful patterns in virtual sand",
    icon: Waves,
    difficulty: "Easy",
    timeEstimate: "5-10 min",
    benefits: ["Stress Relief", "Focus"],
    color: "secondary"
  },
  {
    id: 2,
    title: "Color Harmony",
    description: "Match colors to create calming combinations",
    icon: Palette,
    difficulty: "Easy",
    timeEstimate: "3-7 min",
    benefits: ["Creativity", "Relaxation"],
    color: "accent"
  },
  {
    id: 3,
    title: "Breathing Bubbles",
    description: "Pop bubbles in rhythm with your breathing",
    icon: Target,
    difficulty: "Medium",
    timeEstimate: "5-15 min",
    benefits: ["Anxiety Relief", "Mindfulness"],
    color: "primary"
  },
  {
    id: 4,
    title: "Mind Maze",
    description: "Navigate through peaceful, meditative puzzles",
    icon: Puzzle,
    difficulty: "Medium",
    timeEstimate: "10-20 min",
    benefits: ["Cognitive Training", "Focus"],
    color: "secondary"
  },
  {
    id: 5,
    title: "Energy Flow",
    description: "Guide positive energy through calming paths",
    icon: Zap,
    difficulty: "Hard",
    timeEstimate: "15-25 min",
    benefits: ["Concentration", "Mental Clarity"],
    color: "accent"
  },
  {
    id: 6,
    title: "Mindful Matching",
    description: "Memory game with mindfulness elements",
    icon: Gamepad2,
    difficulty: "Easy",
    timeEstimate: "5-12 min",
    benefits: ["Memory", "Calmness"],
    color: "primary"
  }
];

const difficultyColors = {
  Easy: "secondary",
  Medium: "accent", 
  Hard: "primary"
};

export function RelaxationGames() {
  return (
    <Card className="p-6 bg-card shadow-card">
      <h2 className="text-xl font-semibold mb-4 text-foreground">
        Personalized Relaxation Games
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {games.map((game) => {
          const Icon = game.icon;
          return (
            <div
              key={game.id}
              className="p-4 rounded-lg bg-gradient-calm border border-border hover:shadow-peaceful transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`p-3 rounded-lg bg-${game.color}/10`}>
                  <Icon className={`w-6 h-6 text-${game.color}`} />
                </div>
                <Badge 
                  variant="outline" 
                  className={`text-xs bg-${difficultyColors[game.difficulty]}/10`}
                >
                  {game.difficulty}
                </Badge>
              </div>
              
              <h3 className="font-semibold text-foreground mb-2">{game.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">
                {game.description}
              </p>
              
              <div className="space-y-2 mb-4">
                <div className="text-xs text-muted-foreground">
                  ⏱️ {game.timeEstimate}
                </div>
                <div className="flex flex-wrap gap-1">
                  {game.benefits.map((benefit) => (
                    <Badge key={benefit} variant="secondary" className="text-xs">
                      {benefit}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <Button className="w-full" variant="outline">
                Play Now
              </Button>
            </div>
          );
        })}
      </div>
    </Card>
  );
}