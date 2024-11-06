import { useEffect, useState } from "react";

export default function usePasswordStrength(password: string) {
  const [strength, setStrength] = useState(0);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    const calculateStrength = (pwd: string) => {
      let score = 0;
      if (pwd.length >= 8) score++;
      if (pwd.match(/[a-z]/) && pwd.match(/[A-Z]/)) score++;
      if (pwd.match(/\d/)) score++;
      if (pwd.match(/[^a-zA-Z\d]/)) score++;
      return score;
    };

    const strength = calculateStrength(password);
    setStrength(strength);

    switch (strength) {
      case 0:
        setFeedback("Very weak");
        break;
      case 1:
        setFeedback("Weak");
        break;
      case 2:
        setFeedback("Fair");
        break;
      case 3:
        setFeedback("Good");
        break;
      case 4:
        setFeedback("Strong");
        break;
      default:
        setFeedback("");
    }
  }, [password]);

  return { strength, feedback };
}
