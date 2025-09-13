import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';
import { TrendingUp, Calendar, Brain, Heart } from "lucide-react";

// Sample data for mood trends
const weeklyMoodData = [
  { day: 'Mon', mood: 3, wellbeing: 65 },
  { day: 'Tue', mood: 4, wellbeing: 75 },
  { day: 'Wed', mood: 2, wellbeing: 45 },
  { day: 'Thu', mood: 4, wellbeing: 80 },
  { day: 'Fri', mood: 5, wellbeing: 90 },
  { day: 'Sat', mood: 4, wellbeing: 85 },
  { day: 'Sun', mood: 4, wellbeing: 82 },
];

const monthlyMoodData = [
  { week: 'Week 1', avgMood: 3.2, sessions: 8, improvement: 15 },
  { week: 'Week 2', avgMood: 3.8, sessions: 12, improvement: 28 },
  { week: 'Week 3', avgMood: 4.1, sessions: 15, improvement: 35 },
  { week: 'Week 4', avgMood: 4.3, sessions: 18, improvement: 42 },
];

const chatSentimentData = [
  { session: 1, positivity: 30, anxiety: 70 },
  { session: 5, positivity: 45, anxiety: 55 },
  { session: 10, positivity: 60, anxiety: 40 },
  { session: 15, positivity: 75, anxiety: 25 },
  { session: 20, positivity: 82, anxiety: 18 },
];

export function ProgressAnalytics() {
  const [activeTab, setActiveTab] = useState("weekly");

  const getInsight = () => {
    if (activeTab === "weekly") {
      return {
        title: "This Week's Insights",
        stats: [
          { label: "Average Mood", value: "4.1/5", change: "+8%", positive: true },
          { label: "Best Day", value: "Friday", change: "Peak wellbeing", positive: true },
          { label: "Sessions", value: "12", change: "+3 from last week", positive: true }
        ],
        summary: "Your mental wellness has shown steady improvement this week! Friday was your strongest day with high mood and engagement."
      };
    } else {
      return {
        title: "This Month's Insights",
        stats: [
          { label: "Overall Improvement", value: "42%", change: "Since starting", positive: true },
          { label: "Chat Sessions", value: "53", change: "High engagement", positive: true },
          { label: "Streak", value: "18 days", change: "Personal best!", positive: true }
        ],
        summary: "Fantastic progress this month! Your consistent use of SAM and engagement with wellness activities has led to measurable improvements in your mental health journey."
      };
    }
  };

  const insight = getInsight();

  return (
    <Card className="p-6 bg-card shadow-card">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-6 h-6 text-primary" />
        <h2 className="text-xl font-semibold text-foreground">Your Progress Analytics</h2>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="weekly" className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Weekly
          </TabsTrigger>
          <TabsTrigger value="monthly" className="flex items-center gap-2">
            <Brain className="w-4 h-4" />
            Monthly
          </TabsTrigger>
        </TabsList>

        <TabsContent value="weekly" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {insight.stats.map((stat, index) => (
              <div key={index} className="p-4 bg-muted/30 rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                  <Badge variant={stat.positive ? "default" : "secondary"} className="text-xs">
                    {stat.change}
                  </Badge>
                </div>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              </div>
            ))}
          </div>

          <div className="h-64">
            <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary" />
              Daily Mood & Wellbeing
            </h3>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={weeklyMoodData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="day" />
                <YAxis domain={[0, 100]} />
                <Area 
                  type="monotone" 
                  dataKey="wellbeing" 
                  stroke="hsl(var(--primary))" 
                  fill="hsl(var(--primary))" 
                  fillOpacity={0.2}
                />
                <Line 
                  type="monotone" 
                  dataKey="mood" 
                  stroke="hsl(var(--secondary))" 
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--secondary))", strokeWidth: 2, r: 4 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </TabsContent>

        <TabsContent value="monthly" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {insight.stats.map((stat, index) => (
              <div key={index} className="p-4 bg-muted/30 rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                  <Badge variant={stat.positive ? "default" : "secondary"} className="text-xs">
                    {stat.change}
                  </Badge>
                </div>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="h-64">
              <h3 className="text-lg font-medium mb-4">Monthly Progress</h3>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyMoodData}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Bar 
                    dataKey="improvement" 
                    fill="hsl(var(--primary))" 
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="h-64">
              <h3 className="text-lg font-medium mb-4">Chat Sentiment Analysis</h3>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chatSentimentData}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis dataKey="session" />
                  <YAxis domain={[0, 100]} />
                  <Line 
                    type="monotone" 
                    dataKey="positivity" 
                    stroke="hsl(var(--secondary))" 
                    strokeWidth={3}
                    name="Positivity"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="anxiety" 
                    stroke="hsl(var(--accent))" 
                    strokeWidth={3}
                    name="Anxiety Levels"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-6 p-4 bg-gradient-peaceful rounded-lg border border-primary/20">
        <h3 className="font-semibold text-foreground mb-2">{insight.title}</h3>
        <p className="text-sm text-muted-foreground">{insight.summary}</p>
      </div>
    </Card>
  );
}