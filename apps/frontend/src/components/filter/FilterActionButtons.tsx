import { Button } from "@/components/ui/Button";
import { RefreshCcw, Undo2 } from "lucide-react";

export default function FilterActionButtons() {
  return (
    <>
      <Button variant="secondary" className="flex items-center gap-2">
        <Undo2 size={16} />
      </Button>
      <Button variant="secondary" className="flex items-center gap-2">
        <RefreshCcw size={16} />
      </Button>
    </>
  );
}
