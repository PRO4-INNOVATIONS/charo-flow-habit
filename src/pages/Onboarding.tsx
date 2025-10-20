import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChevronRight, Heart, Brain, Users, Calendar, MessageSquare } from "lucide-react";
import heroImage from "@/assets/hero-fitness.jpg";
import logo from "@/assets/cgfit-logo.png";

type OnboardingStep = "landing" | "welcome" | "physical" | "mental" | "social" | "programs";

const Onboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<OnboardingStep>("landing");
  const [answers, setAnswers] = useState({
    physical: { goals: "", movement: "", equipment: "", time: "" },
    mental: { stress: 5, sleep: 5 },
    social: { belonging: 5, screenTime: 5 },
  });

  const steps: OnboardingStep[] = ["landing", "welcome", "physical", "mental", "social", "programs"];
  const currentStepIndex = steps.indexOf(step);
  const progressPercent = ((currentStepIndex + 1) / steps.length) * 100;

  const handleComplete = () => {
    // Save assessment data (localStorage for now, Supabase later)
    localStorage.setItem("onboarding_completed", "true");
    localStorage.setItem("assessment_data", JSON.stringify(answers));
    navigate("/today");
  };

  if (step === "landing") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
        <div className="container max-w-4xl mx-auto px-4 py-12">
          {/* Logo and Header */}
          <div className="text-center mb-12">
            <img src={logo} alt="CG Fit Logo" className="w-32 h-32 mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-primary mb-3">CG Fit</h1>
            <p className="text-xl text-muted-foreground">for the mind, body & society</p>
          </div>

          {/* Vision Section */}
          <Card className="p-8 mb-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Make Health Operational</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              CG Fit is a revolutionary hybrid health platform that operationalizes your well-being across three essential pillars: 
              <span className="font-semibold text-foreground"> Physical Health, Mental Health, and Social Health</span>.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Whether you're at home, in the gym, or on the go—CG Fit delivers personalized, measurable health outcomes 
              through online programs, live classes, and offline partner locations across the GCC.
            </p>
            
            {/* Three Pillars */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 rounded-lg bg-primary/5">
                <Heart className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Physical Health</h3>
                <p className="text-sm text-muted-foreground">
                  Strength training, fat loss, endurance—tailored to your goals and equipment
                </p>
              </div>
              <div className="text-center p-6 rounded-lg bg-secondary/10">
                <Brain className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Mental Health</h3>
                <p className="text-sm text-muted-foreground">
                  Stress management, sleep optimization, breathwork, and mindfulness
                </p>
              </div>
              <div className="text-center p-6 rounded-lg bg-accent/10">
                <Users className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Social Health</h3>
                <p className="text-sm text-muted-foreground">
                  Community connection, belonging, screen-time balance, and purpose
                </p>
              </div>
            </div>
          </Card>

          {/* CTA Buttons */}
          <div className="space-y-4 max-w-lg mx-auto">
            <Button
              onClick={() => setStep("welcome")}
              className="w-full h-14 text-lg font-semibold"
              size="lg"
            >
              Start Your Journey
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              Begin with a quick 5-minute assessment to personalize your experience
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (step === "welcome") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-primary/10 to-background">
        <div className="container max-w-lg mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-screen">
          <div className="w-full space-y-6 text-center">
            <div className="mb-8">
              <img src={logo} alt="CG Fit Logo" className="w-24 h-24 mx-auto mb-4" />
              <h1 className="text-5xl font-bold text-primary mb-3">
                CG Fit
              </h1>
              <p className="text-lg text-muted-foreground">for the mind, body & society</p>
            </div>

            <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl mb-6">
              <img src={heroImage} alt="People exercising" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Quick Health Assessment</h2>
              <p className="text-lg text-muted-foreground">
                Let's understand your current health status across mind, body, and society.
              </p>
            </div>

            <div className="pt-6 space-y-3">
              <Button
                onClick={() => setStep("physical")}
                className="w-full h-14 text-lg font-semibold"
                size="lg"
              >
                Begin Assessment
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-muted-foreground">Phase 1 - Takes only 5 minutes</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === "physical") {
    return (
      <div className="min-h-screen bg-background">
        <div className="container max-w-lg mx-auto px-4 py-8">
          <div className="mb-8">
            <Progress value={progressPercent} className="mb-4" />
            <p className="text-sm text-muted-foreground">Step {currentStepIndex + 1} of {steps.length}</p>
          </div>

          <Card className="p-6 space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Physical Health</h2>
                <p className="text-sm text-muted-foreground">Tell us about your goals</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Primary Goal</label>
                <div className="grid grid-cols-2 gap-2">
                  {["Fat Loss", "Strength", "Endurance", "Wellness"].map((goal) => (
                    <Button
                      key={goal}
                      variant={answers.physical.goals === goal ? "default" : "outline"}
                      onClick={() => setAnswers({ ...answers, physical: { ...answers.physical, goals: goal } })}
                      className="h-12"
                    >
                      {goal}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Movement Limitations</label>
                <div className="grid grid-cols-2 gap-2">
                  {["None", "Joint Issues", "Back Pain", "Other"].map((limit) => (
                    <Button
                      key={limit}
                      variant={answers.physical.movement === limit ? "default" : "outline"}
                      onClick={() => setAnswers({ ...answers, physical: { ...answers.physical, movement: limit } })}
                      className="h-12"
                    >
                      {limit}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Equipment Access</label>
                <div className="grid grid-cols-2 gap-2">
                  {["Full Gym", "Home Setup", "Bodyweight", "EMS Partner"].map((equip) => (
                    <Button
                      key={equip}
                      variant={answers.physical.equipment === equip ? "default" : "outline"}
                      onClick={() => setAnswers({ ...answers, physical: { ...answers.physical, equipment: equip } })}
                      className="h-12"
                    >
                      {equip}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Time Available Per Day</label>
                <div className="grid grid-cols-3 gap-2">
                  {["20 min", "30 min", "45+ min"].map((time) => (
                    <Button
                      key={time}
                      variant={answers.physical.time === time ? "default" : "outline"}
                      onClick={() => setAnswers({ ...answers, physical: { ...answers.physical, time: time } })}
                      className="h-12"
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Button
                onClick={() => setStep("mental")}
                disabled={!answers.physical.goals || !answers.physical.time}
                className="w-full h-12"
              >
                Continue
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1 h-12"
                  onClick={() => window.alert("Expert consultation booking - Coming soon!")}
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Consult Expert
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 h-12"
                  onClick={() => window.alert("Phase 2 Assessment scheduling - Coming soon!")}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Phase 2
                </Button>
              </div>
              <p className="text-xs text-muted-foreground text-center">
                Want deeper insights? Book an expert consultation or schedule a comprehensive Phase 2 assessment
              </p>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  if (step === "mental") {
    return (
      <div className="min-h-screen bg-background">
        <div className="container max-w-lg mx-auto px-4 py-8">
          <div className="mb-8">
            <Progress value={progressPercent} className="mb-4" />
            <p className="text-sm text-muted-foreground">Step {currentStepIndex + 1} of {steps.length}</p>
          </div>

          <Card className="p-6 space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <Brain className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Mental Health</h2>
                <p className="text-sm text-muted-foreground">Quick stress & sleep check</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-3">
                  How stressed do you feel lately? (1 = calm, 10 = very stressed)
                </label>
                <div className="grid grid-cols-10 gap-1">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val) => (
                    <Button
                      key={val}
                      variant={answers.mental.stress === val ? "default" : "outline"}
                      onClick={() => setAnswers({ ...answers, mental: { ...answers.mental, stress: val } })}
                      className="h-12 p-0"
                      size="sm"
                    >
                      {val}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">
                  How's your sleep quality? (1 = poor, 10 = excellent)
                </label>
                <div className="grid grid-cols-10 gap-1">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val) => (
                    <Button
                      key={val}
                      variant={answers.mental.sleep === val ? "default" : "outline"}
                      onClick={() => setAnswers({ ...answers, mental: { ...answers.mental, sleep: val } })}
                      className="h-12 p-0"
                      size="sm"
                    >
                      {val}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Button onClick={() => setStep("social")} className="w-full h-12">
                Continue
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1 h-12"
                  onClick={() => window.alert("Expert consultation booking - Coming soon!")}
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Consult Expert
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 h-12"
                  onClick={() => window.alert("Phase 2 Assessment scheduling - Coming soon!")}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Phase 2
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  if (step === "social") {
    return (
      <div className="min-h-screen bg-background">
        <div className="container max-w-lg mx-auto px-4 py-8">
          <div className="mb-8">
            <Progress value={progressPercent} className="mb-4" />
            <p className="text-sm text-muted-foreground">Step {currentStepIndex + 1} of {steps.length}</p>
          </div>

          <Card className="p-6 space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Social Health</h2>
                <p className="text-sm text-muted-foreground">Connection & community</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-3">
                  Do you feel a sense of belonging? (1 = isolated, 10 = connected)
                </label>
                <div className="grid grid-cols-10 gap-1">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val) => (
                    <Button
                      key={val}
                      variant={answers.social.belonging === val ? "default" : "outline"}
                      onClick={() => setAnswers({ ...answers, social: { ...answers.social, belonging: val } })}
                      className="h-12 p-0"
                      size="sm"
                    >
                      {val}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">
                  Screen time satisfaction? (1 = too much, 10 = balanced)
                </label>
                <div className="grid grid-cols-10 gap-1">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val) => (
                    <Button
                      key={val}
                      variant={answers.social.screenTime === val ? "default" : "outline"}
                      onClick={() => setAnswers({ ...answers, social: { ...answers.social, screenTime: val } })}
                      className="h-12 p-0"
                      size="sm"
                    >
                      {val}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Button onClick={() => setStep("programs")} className="w-full h-12">
                Continue
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1 h-12"
                  onClick={() => window.alert("Expert consultation booking - Coming soon!")}
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Consult Expert
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 h-12"
                  onClick={() => window.alert("Phase 2 Assessment scheduling - Coming soon!")}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Phase 2
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  if (step === "programs") {
    const programs = [
      { id: "body12", name: "CHARO-BODY 12", desc: "Fat loss • 12 weeks", color: "primary" },
      { id: "strong8", name: "STRONG 8", desc: "Functional strength • 8 weeks", color: "primary" },
      { id: "mind6", name: "MIND CALM 6", desc: "Mental wellness • 6 weeks", color: "secondary" },
      { id: "social4", name: "SOCIAL LIFT 4", desc: "Community & connection • 4 weeks", color: "accent" },
    ];

    return (
      <div className="min-h-screen bg-background">
        <div className="container max-w-lg mx-auto px-4 py-8">
          <div className="mb-8">
            <Progress value={progressPercent} className="mb-4" />
            <p className="text-sm text-muted-foreground">Step {currentStepIndex + 1} of {steps.length}</p>
          </div>

          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-2">Choose Your Program</h2>
              <p className="text-muted-foreground">You can join multiple programs</p>
            </div>

            <div className="space-y-3">
              {programs.map((program) => (
                <Card key={program.id} className="p-5 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-lg">{program.name}</h3>
                      <p className="text-sm text-muted-foreground">{program.desc}</p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </div>
                </Card>
              ))}
            </div>

            <Button onClick={handleComplete} className="w-full h-14 text-lg font-semibold" size="lg">
              Complete Setup
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default Onboarding;
