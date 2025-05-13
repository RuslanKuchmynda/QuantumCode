import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Search, Plus } from "lucide-react";
import { ForumPost } from "@/components/forum/ForumPost";
import { ForumCategories } from "@/components/forum/ForumCategories";
import { forumPosts } from "@/constants/forum-data";

export default function ForumPage() {
  return (
    <div className="container mx-auto py-8 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Forum</h1>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          New Post
        </Button>
      </div>

      <div className="flex gap-6">
        <div className="w-64">
          <ForumCategories />
        </div>

        <div className="flex-1 space-y-4">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search posts..." className="pl-8" />
            </div>
            <Button variant="outline">Filter</Button>
          </div>

          <div className="space-y-4">
            {forumPosts.map((post) => (
              <ForumPost key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
