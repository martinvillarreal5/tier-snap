import { useTierStore } from '@/hooks/useTierStore';
import { NewRowModalButton } from './tooling/NewRowModalButton';
import { TriangleAlert as TriangleAlertIcon } from 'lucide-react';
import { Button } from './ui/button';

export function TierTooling() {
  const reset = useTierStore.use.reset();
  return (
    <div className="flex w-full flex-col items-center gap-2 bg-zinc-900 p-4 text-white">
      <Button type="button" onClick={() => reset()} variant="secondary" className="gap-2">
        <TriangleAlertIcon className="text-[#ff7f7f] " /> Reset
      </Button>
      <NewRowModalButton />
    </div>
  );
}
