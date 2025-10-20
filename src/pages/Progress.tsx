import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Heart, Moon, Footprints, Smile } from "lucide-react";
import progressVisual from "@/assets/progress-visual.jpg";

const Progress = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container max-w-lg mx-auto px-4 py-6 space-y-6">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Progress</h1>
          <p className="text-muted-foreground">Your health journey at a glance</p>
        </div>

        {/* Stats Overview */}
        <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
          <img src={progressVisual} alt="Progress visualization" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-card/90 backdrop-blur-sm p-3 rounded-lg">
                <p className="text-xs text-muted-foreground">WAHA</p>
                <p className="text-2xl font-bold">23</p>
                <p className="text-xs text-primary">+12% this week</p>
              </div>
              <div className="bg-card/90 backdrop-blur-sm p-3 rounded-lg">
                <p className="text-xs text-muted-foreground">Streak</p>
                <p className="text-2xl font-bold">5d</p>
                <p className="text-xs text-secondary">Keep going!</p>
              </div>
              <div className="bg-card/90 backdrop-blur-sm p-3 rounded-lg">
                <p className="text-xs text-muted-foreground">Recovery</p>
                <p className="text-2xl font-bold">78</p>
                <p className="text-xs text-muted-foreground">Good</p>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Tabs */}
        <Tabs defaultValue="weekly" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="weekly">Week</TabsTrigger>
            <TabsTrigger value="monthly">Month</TabsTrigger>
            <TabsTrigger value="all">All Time</TabsTrigger>
          </TabsList>

          <TabsContent value="weekly" className="space-y-4 mt-6">
            {/* Weight Trend */}
            <Card className="p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Weight Trend</h3>
                </div>
                <p className="text-sm font-medium text-primary">-1.2 kg</p>
              </div>
              <div className="h-32 bg-gradient-to-t from-primary/10 to-transparent rounded-lg flex items-end justify-around p-4">
                {[68, 72, 65, 70, 75, 68, 80].map((height, i) => (
                  <div key={i} className="w-8 bg-primary/30 rounded-t" style={{ height: `${height}%` }} />
                ))}
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </Card>

            {/* Heart Rate */}
            <Card className="p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-destructive" />
                  <h3 className="font-semibold">Resting Heart Rate</h3>
                </div>
                <p className="text-sm font-medium">62 bpm</p>
              </div>
              <div className="h-32 flex items-center">
                <svg className="w-full h-24" viewBox="0 0 100 40">
                  <path
                    d="M 0 20 Q 10 15, 20 20 T 40 20 T 60 20 T 80 20 T 100 20"
                    stroke="hsl(var(--destructive))"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
              <p className="text-xs text-muted-foreground">Trending down - great recovery!</p>
            </Card>

            {/* Sleep */}
            <Card className="p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Moon className="w-5 h-5 text-secondary" />
                  <h3 className="font-semibold">Sleep Quality</h3>
                </div>
                <p className="text-sm font-medium">7.2h avg</p>
              </div>
              <div className="space-y-2">
                {[
                  { day: "Mon", hours: 7.5, quality: 85 },
                  { day: "Tue", hours: 6.8, quality: 72 },
                  { day: "Wed", hours: 7.9, quality: 91 },
                  { day: "Thu", hours: 7.1, quality: 80 },
                  { day: "Fri", hours: 6.5, quality: 68 },
                  { day: "Sat", hours: 8.2, quality: 95 },
                  { day: "Sun", hours: 7.3, quality: 83 },
                ].map((day, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground w-8">{day.day}</span>
                    <div className="flex-1 bg-muted rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-secondary h-full rounded-full"
                        style={{ width: `${day.quality}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium w-12">{day.hours}h</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Steps */}
            <Card className="p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Footprints className="w-5 h-5 text-accent" />
                  <h3 className="font-semibold">Daily Steps</h3>
                </div>
                <p className="text-sm font-medium">8,234 avg</p>
              </div>
              <div className="h-32 bg-gradient-to-t from-accent/10 to-transparent rounded-lg flex items-end justify-around p-4">
                {[75, 85, 62, 90, 78, 82, 88].map((height, i) => (
                  <div key={i} className="w-8 bg-accent/30 rounded-t" style={{ height: `${height}%` }} />
                ))}
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </Card>

            {/* Mood */}
            <Card className="p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Smile className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Mood Tracker</h3>
                </div>
                <p className="text-sm font-medium">7.8/10 avg</p>
              </div>
              <div className="flex justify-around items-end h-24">
                {["😐", "🙂", "😊", "😃", "🙂", "😊", "😁"].map((emoji, i) => (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <span className="text-2xl">{emoji}</span>
                    <div className="text-xs text-muted-foreground">
                      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="monthly" className="space-y-4 mt-6">
            <Card className="p-8 text-center">
              <p className="text-muted-foreground">Monthly trends coming soon</p>
            </Card>
          </TabsContent>

          <TabsContent value="all" className="space-y-4 mt-6">
            <Card className="p-8 text-center">
              <p className="text-muted-foreground">All-time stats coming soon</p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Progress;
