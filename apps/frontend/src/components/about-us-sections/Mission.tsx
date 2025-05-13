import { Card } from "@/components/ui/Card";

export default function Mission() {
  return (
    <Card className="p-8">
      <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
      <p className="text-muted-foreground mb-4">
        At QuantumCode, we believe that everyone should have access to quality
        coding education. Our mission is to make learning to code accessible,
        engaging, and effective for everyone, from beginners to experienced
        developers.
      </p>
      <p className="text-muted-foreground">
        We&apos;re committed to providing a platform that not only helps you
        learn coding but also prepares you for real-world challenges and
        technical interviews.
      </p>
    </Card>
  );
}
