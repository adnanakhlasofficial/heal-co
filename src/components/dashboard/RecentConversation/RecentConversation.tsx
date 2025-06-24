import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Phone, User } from "lucide-react";

type AvatarType = "bot" | "phone" | "user";

interface Conversation {
  id: number | string;
  avatarType: AvatarType;
  name: string;
  message: string;
  time: string;
}

interface RecentConversationProps {
  conversations?: Conversation[];
  onViewAll?: () => void;
  maxHeight?: string;
  className?: string;
}

interface AvatarIconProps {
  type: AvatarType;
  className?: string;
}

const defaultConversations: Conversation[] = [
  {
    id: 1,
    avatarType: "bot",
    name: "HealCo Assistant",
    message: "You have a bug that needs to be fixed...",
    time: "Just now",
  },
  {
    id: 2,
    avatarType: "phone",
    name: "ID #123456789",
    message: "You have a bug that needs to be fixed...",
    time: "59 minutes ago",
  },
  {
    id: 3,
    avatarType: "bot",
    name: "HealCo Assistant",
    message: "You have a bug that needs to be fixed...",
    time: "12 hours ago",
  },
  {
    id: 4,
    avatarType: "bot",
    name: "HealCo Assistant",
    message: "You have a bug that needs to be fixed...",
    time: "Just now",
  },
  {
    id: 5,
    avatarType: "user",
    name: "Dr. Luffy",
    message: "You have a bug that needs to be fixed...",
    time: "2 hours ago",
  },
  {
    id: 6,
    avatarType: "user",
    name: "Dr. Luffy",
    message: "You have a bug that needs to be fixed...",
    time: "6 hours ago",
  },
];

function AvatarIcon({ type, className = "" }: AvatarIconProps) {
  const baseClasses =
    "inline-flex items-center justify-center w-8 h-8 rounded-full";

  if (type === "bot") {
    return (
      <span className={`${baseClasses} bg-blue-100 ${className}`}>
        <MessageCircle className="h-4 w-4 text-blue-600" />
      </span>
    );
  }

  if (type === "phone") {
    return (
      <span className={`${baseClasses} bg-gray-100 ${className}`}>
        <Phone className="h-4 w-4 text-gray-600" />
      </span>
    );
  }

  return (
    <span className={`${baseClasses} bg-gray-100 ${className}`}>
      <User className="h-4 w-4 text-gray-600" />
    </span>
  );
}

export function RecentConversation({
  conversations = defaultConversations,
  onViewAll,
  maxHeight = "400px",
  className = "",
}: RecentConversationProps) {
  const handleViewAll = () => {
    if (onViewAll) {
      onViewAll();
    } else {
      console.log("View all conversations");
    }
  };

  return (
    <div
      className={`bg-white rounded-lg border border-gray-200 p-6 shadow-sm col-start-3 col-end-[-1] row-span-2 ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Recent Conversation
        </h3>
        <Button
          variant="outline"
          size="sm"
          onClick={handleViewAll}
          className="text-sm font-medium"
        >
          View All
        </Button>
      </div>

      {/* Conversation List */}
      <ScrollArea className="h-full" style={{ maxHeight }}>
        <div className="space-y-3">
          {conversations.map((conversation) => (
            <div key={conversation.id} className="flex items-start gap-3">
              <AvatarIcon type={conversation.avatarType} />

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-medium text-gray-900 truncate">
                    {conversation.name}
                  </h4>
                  <span className="text-xs text-gray-500 whitespace-nowrap ml-2">
                    {conversation.time}
                  </span>
                </div>
                <p className="text-sm text-gray-600 truncate">
                  {conversation.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
