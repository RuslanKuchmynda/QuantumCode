import { Card } from "@/components/ui/Card";
import {
  CheckCircle2,
  Clock,
  Circle,
  Rocket,
  Users,
  Zap,
  Trophy,
} from "lucide-react";

export default function Roadmap() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center">Project Roadmap</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-500/10 rounded-lg">
              <Rocket className="h-6 w-6 text-blue-500" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-2">
                Phase 1: Foundation
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Basic problem-solving platform</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Code editor integration</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>User authentication</span>
                </div>
                <div className="flex items-center gap-2 text-yellow-600">
                  <Clock className="h-4 w-4" />
                  <span>Basic problem database</span>
                </div>
                <div className="flex items-center gap-2 text-yellow-600">
                  <Clock className="h-4 w-4" />
                  <span>Simple leaderboard</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-green-500/10 rounded-lg">
              <Zap className="h-6 w-6 text-green-500" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-2">
                Phase 2: Enhancement
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-yellow-600">
                  <Clock className="h-4 w-4" />
                  <span>Advanced code editor features</span>
                </div>
                <div className="flex items-center gap-2 text-yellow-600">
                  <Clock className="h-4 w-4" />
                  <span>Multiple programming languages</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Circle className="h-4 w-4" />
                  <span>Test case management</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Circle className="h-4 w-4" />
                  <span>Performance optimization</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Circle className="h-4 w-4" />
                  <span>Enhanced user profiles</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-purple-500/10 rounded-lg">
              <Users className="h-6 w-6 text-purple-500" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-2">Phase 3: Community</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-yellow-600">
                  <Clock className="h-4 w-4" />
                  <span>Discussion forums</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Circle className="h-4 w-4" />
                  <span>Solution sharing</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Circle className="h-4 w-4" />
                  <span>Code reviews</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Circle className="h-4 w-4" />
                  <span>User contributions</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Circle className="h-4 w-4" />
                  <span>Community challenges</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-orange-500/10 rounded-lg">
              <Trophy className="h-6 w-6 text-orange-500" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-2">
                Phase 4: Advanced Features
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <Circle className="h-4 w-4" />
                  <span>AI-powered code suggestions</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Circle className="h-4 w-4" />
                  <span>Custom problem creation</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Circle className="h-4 w-4" />
                  <span>Advanced analytics</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Circle className="h-4 w-4" />
                  <span>Interview preparation tools</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Circle className="h-4 w-4" />
                  <span>Integration with other platforms</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
