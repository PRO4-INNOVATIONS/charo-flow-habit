import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user has completed onboarding
    const onboardingCompleted = localStorage.getItem("onboarding_completed");
    
    if (onboardingCompleted) {
      navigate("/today");
    } else {
      navigate("/onboarding");
    }
  }, [navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
      </div>
    </div>
  );
};

export default Index;
