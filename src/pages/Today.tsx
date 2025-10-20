import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Dumbbell, Apple, Moon, Brain, Check, ChevronRight, Flame } from "lucide-react";
import { useState } from "react";

const Today = () => {
  const [wahaCount, setWahaCount] = useState(3);
  const [streak, setStreak] = useState(5);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);

  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? "Good morning" : currentHour < 18 ? "Good afternoon" : "Good evening";

  const toggleTask = (taskId: string) => {
    setCompletedTasks((prev) =>
      prev.includes(taskId) ? prev.filter((id) => id !== taskId) : [...prev, taskId]
    );
  };

  const wahaPercentage = (wahaCount / 10) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background pb-20">
      <div className="container max-w-lg mx-auto px-4 py-6 space-y-6">
        {/* Header */}
        <div className="space-y-4">
          <div>
            <h1 className="text-3xl font-bold">{greeting}</h1>
            <p className="text-muted-foreground">One good thing right now.</p>
          </div>

          {/* WAHA Ring */}
          <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-muted-foreground">Weekly Active Health Actions</p>
                <p className="text-4xl font-bold">{wahaCount}</p>
              </div>
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-primary" />
                <span className="text-2xl font-bold">{streak}</span>
                <span className="text-sm text-muted-foreground">day streak</span>
              </div>
            </div>
            <Progress value={wahaPercentage} className="h-3" />
            <p className="text-sm text-muted-foreground mt-2">
              {10 - wahaCount} actions to hit your weekly goal
            </p>
          </Card>
        </div>

        {/* Train */}
        <div className="space-y-3">
          <h2 className="font-semibold text-lg flex items-center gap-2">
            <Dumbbell className="w-5 h-5 text-primary" />
            Train
          </h2>
          <Card className="p-5 bg-card hover:shadow-lg transition-all cursor-pointer">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-1">Upper Body Strength</h3>
                <p className="text-sm text-muted-foreground mb-2">CHARO-BODY 12 • Week 3, Day 2</p>
                <div className="flex items-center gap-2 text-sm">
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded-full font-medium">
                    30 min
                  </span>
                  <span className="text-muted-foreground">• Moderate intensity</span>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
            <Button className="w-full h-12 font-semibold">Start Workout</Button>
          </Card>

          <Button variant="ghost" className="w-full">
            Swap session (20 min quick option available)
          </Button>
        </div>

        {/* Eat */}
        <div className="space-y-3">
          <h2 className="font-semibold text-lg flex items-center gap-2">
            <Apple className="w-5 h-5 text-primary" />
            Eat
          </h2>
          <Card className="p-5">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Today's Macros</p>
                  <p className="text-sm text-muted-foreground">Protein • Carbs • Fats</p>
                </div>
                <p className="text-sm font-medium text-primary">180g • 200g • 60g</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Protein</span>
                  <span className="font-medium">120/180g</span>
                </div>
                <Progress value={66} className="h-2" />
              </div>
              <Button variant="outline" className="w-full">
                Log Meal
              </Button>
            </div>
          </Card>
        </div>

        {/* Recover */}
        <div className="space-y-3">
          <h2 className="font-semibold text-lg flex items-center gap-2">
            <Moon className="w-5 h-5 text-secondary" />
            Recover
          </h2>
          <Card className="p-5 bg-gradient-to-br from-secondary/10 to-secondary/5">
            <div className="space-y-3">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="font-medium">Recovery Score</p>
                  <p className="text-sm text-muted-foreground">Sleep + HR + Soreness</p>
                </div>
                <p className="text-3xl font-bold text-secondary">78</p>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2 bg-card rounded-lg">
                  <p className="text-xs text-muted-foreground">Sleep</p>
                  <p className="font-bold">7.2h</p>
                </div>
                <div className="p-2 bg-card rounded-lg">
                  <p className="text-xs text-muted-foreground">RHR</p>
                  <p className="font-bold">62</p>
                </div>
                <div className="p-2 bg-card rounded-lg">
                  <p className="text-xs text-muted-foreground">Steps</p>
                  <p className="font-bold">8.2k</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Mind */}
        <div className="space-y-3">
          <h2 className="font-semibold text-lg flex items-center gap-2">
            <Brain className="w-5 h-5 text-accent" />
            Mind
          </h2>
          <Card className="p-5 bg-gradient-to-br from-accent/10 to-accent/5">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="font-bold mb-1">Evening Wind-Down</h3>
                <p className="text-sm text-muted-foreground mb-2">4-7-8 Breathing + Meditation</p>
                <span className="text-sm px-2 py-1 bg-accent/10 text-accent rounded-full font-medium">
                  10 min
                </span>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
            <Button variant="outline" className="w-full">
              Start Session
            </Button>
          </Card>
        </div>

        {/* Daily Routine Tracker */}
        <div className="space-y-3">
          <h2 className="font-semibold text-lg">Daily Routine</h2>
          <Card className="p-5">
            <div className="space-y-3">
              {[
                { id: "hydration", label: "Hydration (2L)", icon: "💧" },
                { id: "steps", label: "Steps (10k)", icon: "👟" },
                { id: "protein", label: "Protein (180g)", icon: "🥩" },
                { id: "sleep", label: "Sleep (7-8h)", icon: "😴" },
                { id: "gratitude", label: "Gratitude journal", icon: "📝" },
              ].map((task) => (
                <div
                  key={task.id}
                  onClick={() => toggleTask(task.id)}
                  className="flex items-center justify-between p-3 bg-muted/30 rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{task.icon}</span>
                    <span className={completedTasks.includes(task.id) ? "line-through text-muted-foreground" : ""}>
                      {task.label}
                    </span>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      completedTasks.includes(task.id)
                        ? "bg-primary border-primary"
                        : "border-muted-foreground"
                    }`}
                  >
                    {completedTasks.includes(task.id) && <Check className="w-4 h-4 text-primary-foreground" />}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Today;
