import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { MessageSquare, Eye } from "lucide-react";

interface ForumPostProps {
  post: {
    id: number;
    title: string;
    author: string;
    category: string;
    replies: number;
    views: number;
    lastActivity: string;
    tags: string[];
  };
}

export function ForumPost({ post }: ForumPostProps) {
  return (
    <Card className="p-4 hover:bg-accent/50 transition-colors">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">{post.title}</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Posted by {post.author}</span>
            <span>•</span>
            <span>{post.lastActivity}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <MessageSquare className="w-4 h-4" />
            <span>{post.replies}</span>
          </div>
          <div className="flex items-center gap-1">
            <Eye className="w-4 h-4" />
            <span>{post.views}</span>
          </div>
        </div>
      </div>
    </Card>
  );
} 