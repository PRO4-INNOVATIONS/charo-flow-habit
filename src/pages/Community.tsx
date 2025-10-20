import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Calendar, Users, MapPin, ChevronRight, Flame } from "lucide-react";

const Community = () => {
  const challenges = [
    {
      id: 1,
      name: "30-Day Consistency Sprint",
      participants: 1247,
      daysLeft: 12,
      joined: true,
      rank: 23,
    },
    {
      id: 2,
      name: "Ramadan Ready Challenge",
      participants: 856,
      daysLeft: 45,
      joined: false,
    },
  ];

  const events = [
    {
      id: 1,
      title: "Zone-2 Morning Walk",
      date: "Tomorrow, 6:00 AM",
      location: "Al Seef, Dubai",
      attendees: 24,
      type: "walk",
    },
    {
      id: 2,
      title: "Mental Health Awareness Session",
      date: "Sat, Mar 23, 5:00 PM",
      location: "Online",
      attendees: 89,
      type: "workshop",
      womenOnly: true,
    },
  ];

  const leaderboard = [
    { rank: 1, name: "Sarah A.", waha: 142, streak: 28 },
    { rank: 2, name: "Mohammed K.", waha: 138, streak: 25 },
    { rank: 3, name: "Fatima R.", waha: 135, streak: 30 },
    { rank: 23, name: "You", waha: 89, streak: 5, isCurrentUser: true },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container max-w-lg mx-auto px-4 py-6 space-y-6">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Community</h1>
          <p className="text-muted-foreground">Connect, compete, and grow together</p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="challenges" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="challenges">Challenges</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="leaderboard">Leaders</TabsTrigger>
          </TabsList>

          {/* Challenges */}
          <TabsContent value="challenges" className="space-y-4 mt-6">
            {challenges.map((challenge) => (
              <Card key={challenge.id} className="p-5">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">{challenge.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{challenge.participants.toLocaleString()}</span>
                      </div>
                      <span>• {challenge.daysLeft} days left</span>
                    </div>
                  </div>
                  <Trophy className={`w-6 h-6 ${challenge.joined ? "text-primary" : "text-muted-foreground"}`} />
                </div>

                {challenge.joined && challenge.rank && (
                  <div className="mb-4 p-3 bg-primary/10 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Your Rank</p>
                        <p className="text-2xl font-bold text-primary">#{challenge.rank}</p>
                      </div>
                      <Flame className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                )}

                <Button
                  variant={challenge.joined ? "outline" : "default"}
                  className="w-full"
                >
                  {challenge.joined ? "View Progress" : "Join Challenge"}
                </Button>
              </Card>
            ))}

            <Button variant="ghost" className="w-full">
              Browse All Challenges
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </TabsContent>

          {/* Events */}
          <TabsContent value="events" className="space-y-4 mt-6">
            {events.map((event) => (
              <Card key={event.id} className="p-5">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      event.type === "walk"
                        ? "bg-primary/10"
                        : "bg-accent/10"
                    }`}
                  >
                    {event.type === "walk" ? (
                      <Calendar className={`w-6 h-6 text-primary`} />
                    ) : (
                      <Users className={`w-6 h-6 text-accent`} />
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-bold mb-1">{event.title}</h3>
                        {event.womenOnly && (
                          <span className="inline-block px-2 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium mb-2">
                            Women Only
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="space-y-1 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{event.attendees} attending</span>
                      </div>
                    </div>

                    <Button className="w-full">RSVP</Button>
                  </div>
                </div>
              </Card>
            ))}

            <Button variant="ghost" className="w-full">
              View All Events
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </TabsContent>

          {/* Leaderboard */}
          <TabsContent value="leaderboard" className="space-y-4 mt-6">
            <Card className="p-5">
              <h3 className="font-semibold mb-4">30-Day Consistency Sprint</h3>
              <div className="space-y-3">
                {leaderboard.map((user) => (
                  <div
                    key={user.rank}
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      user.isCurrentUser
                        ? "bg-primary/10 border-2 border-primary"
                        : "bg-muted/30"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                          user.rank === 1
                            ? "bg-yellow-500 text-white"
                            : user.rank === 2
                            ? "bg-gray-400 text-white"
                            : user.rank === 3
                            ? "bg-amber-700 text-white"
                            : "bg-muted text-foreground"
                        }`}
                      >
                        {user.rank}
                      </div>
                      <div>
                        <p className={`font-medium ${user.isCurrentUser ? "text-primary" : ""}`}>
                          {user.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {user.streak} day streak
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{user.waha}</p>
                      <p className="text-xs text-muted-foreground">WAHA</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <p className="text-center text-sm text-muted-foreground px-4">
              Keep it up! Complete more actions to climb the leaderboard.
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Community;
