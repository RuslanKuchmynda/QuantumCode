import { Card } from "@/components/ui/Card";

export default function Features() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-2">Interactive Learning</h3>
        <p className="text-muted-foreground">
          Practice coding with our interactive challenges and get instant
          feedback on your solutions.
        </p>
      </Card>
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-2">Real-world Problems</h3>
        <p className="text-muted-foreground">
          Solve problems that mirror real-world scenarios and prepare for
          technical interviews.
        </p>
      </Card>
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
        <p className="text-muted-foreground">
          Join our community of learners, share solutions, and learn from
          others.
        </p>
      </Card>
    </div>
  );
}
