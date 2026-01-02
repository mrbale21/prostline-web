// src/components/Layout/TrustBadge.tsx
import { CheckCircle } from "lucide-react";

interface TrustBadgeProps {
  text: string;
  icon?: React.ReactNode;
}

const TrustBadge = ({ text, icon }: TrustBadgeProps) => {
  return (
    <div className="flex items-center gap-2">
      {icon || <CheckCircle className="w-5 h-5 text-green-400" />}
      <span>{text}</span>
    </div>
  );
};

export default TrustBadge;
