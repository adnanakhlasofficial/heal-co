import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

interface StartChatProps {
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title?: string;
  description?: string;
  buttonText?: string;
  className?: string;
  ButtonIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export default function ActionCard({
  Icon = MessageCircle,
  title = "Start Chat",
  description = "Make sure to check your health every day to stay on top of your well-being!",
  buttonText = "Chat",
  className = "",
  ButtonIcon = MessageCircle,
}: StartChatProps) {
  return (
    <div
      className={`bg-white rounded-lg border border-gray-200 p-6 shadow-sm flex flex-col ${className}`}
    >
      {/* Header Icon */}
      <div className="mb-4">
        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
          <Icon className="h-5 w-5 text-gray-600" />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed mb-6 grow">
        {description}
      </p>

      {/* Chat Button */}
      <Link href="#">
        <Button className="bg-purple-200 hover:bg-purple-700 hover:text-white text-purple-600 px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2">
          <ButtonIcon className="h-4 w-4" />
          {buttonText}
        </Button>
      </Link>
    </div>
  );
}
