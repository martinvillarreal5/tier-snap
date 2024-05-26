import { useTierStore } from '@/hooks/useTierStore';
import { NewRowModalButton } from './tooling/NewRowModalButton';
import { TriangleAlert as TriangleAlertIcon } from 'lucide-react';

export function TierTooling() {
  const reset = useTierStore.use.reset();
  return (
    <div className="flex grow flex-col items-center gap-2 bg-zinc-900 p-4 text-white">
      <button
        type="button"
        className="flex cursor-pointer gap-2 rounded bg-zinc-700 px-4 py-2 duration-300 hover:bg-zinc-800"
        onClick={reset}>
        <TriangleAlertIcon className="text-[#ff7f7f] " /> Reset
      </button>
      <NewRowModalButton />
    </div>
  );
}
