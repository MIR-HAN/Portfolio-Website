"use client"
import React from "react";
import Typical from "react-typical";

const TypingAnimationInner = () => (
  <Typical
    loop={Infinity}
    wrapper="p"
    steps={[
      "Frontend Developer",
      3000,
      "React Enthusiast",
      3000,
      "Lifelong Learner",
      3000,
    ]}
  />
);

const TypingAnimation = React.memo(function TypingAnimation() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render nothing on server and first client paint to avoid hydration mismatch
    return null;
  }

  return <TypingAnimationInner />;
});

TypingAnimation.displayName = "TypingAnimation";

export default TypingAnimation