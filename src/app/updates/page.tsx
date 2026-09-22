import { getUpdates } from "@/lib/content";
import UpdatesContent from "./UpdatesContent";

export default function UpdatesPage() {
  const updates = getUpdates();

  return (
    <main className="flex flex-col">
      <UpdatesContent updates={updates} />
    </main>
  );
}
