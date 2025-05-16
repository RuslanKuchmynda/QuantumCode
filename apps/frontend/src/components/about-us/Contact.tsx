import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <Card className="p-8">
      <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
      <p className="text-muted-foreground mb-6">
        Have questions or suggestions? We&apos;d love to hear from you!
      </p>
      <div className="flex gap-4">
        <Button variant="outline" size="icon">
          <Github className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <Twitter className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <Linkedin className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
}
