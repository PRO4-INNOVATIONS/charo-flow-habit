import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  User,
  Settings,
  CreditCard,
  Bell,
  Globe,
  Shield,
  LogOut,
  ChevronRight,
  Crown,
} from "lucide-react";

const Profile = () => {
  const user = {
    name: "Ahmed",
    email: "ahmed@example.com",
    plan: "Free",
  };

  const menuItems = [
    {
      section: "Account",
      items: [
        { icon: User, label: "Personal Info", path: "/profile/personal" },
        { icon: CreditCard, label: "Subscription", path: "/profile/subscription", badge: user.plan },
        { icon: Bell, label: "Notifications", path: "/profile/notifications" },
      ],
    },
    {
      section: "Preferences",
      items: [
        { icon: Globe, label: "Language", path: "/profile/language", badge: "English" },
        { icon: Settings, label: "App Settings", path: "/profile/settings" },
      ],
    },
    {
      section: "Legal",
      items: [
        { icon: Shield, label: "Privacy & Data", path: "/profile/privacy" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container max-w-lg mx-auto px-4 py-6 space-y-6">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Profile</h1>
        </div>

        {/* User Info Card */}
        <Card className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <Avatar className="w-16 h-16">
              <AvatarFallback className="bg-primary text-primary-foreground text-xl font-bold">
                {user.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h2 className="text-xl font-bold">{user.name}</h2>
              <p className="text-sm text-muted-foreground">{user.email}</p>
            </div>
          </div>

          {user.plan === "Free" && (
            <div className="mt-4 p-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Crown className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Upgrade to Plus</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Unlock all programs, on-demand content, and group check-ins
              </p>
              <Button className="w-full">Upgrade Now</Button>
            </div>
          )}
        </Card>

        {/* Menu Sections */}
        {menuItems.map((section, idx) => (
          <div key={idx} className="space-y-3">
            <h3 className="text-sm font-semibold text-muted-foreground px-1">{section.section}</h3>
            <Card className="divide-y">
              {section.items.map((item, itemIdx) => (
                <button
                  key={itemIdx}
                  className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors first:rounded-t-lg last:rounded-b-lg"
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-muted-foreground" />
                    <span className="font-medium">{item.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.badge && (
                      <span className="text-sm text-muted-foreground">{item.badge}</span>
                    )}
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                </button>
              ))}
            </Card>
          </div>
        ))}

        {/* Stats Summary */}
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Your Stats</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-primary">23</p>
              <p className="text-xs text-muted-foreground">WAHA this week</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-secondary">5</p>
              <p className="text-xs text-muted-foreground">Day streak</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-accent">3</p>
              <p className="text-xs text-muted-foreground">Programs active</p>
            </div>
          </div>
        </Card>

        {/* Logout */}
        <Button variant="outline" className="w-full h-12 text-destructive hover:text-destructive">
          <LogOut className="w-5 h-5 mr-2" />
          Log Out
        </Button>

        {/* Version */}
        <p className="text-center text-xs text-muted-foreground">
          CG Fit v1.0.0 • Made with ❤️ for CHARO-GEN
        </p>
      </div>
    </div>
  );
};

export default Profile;
