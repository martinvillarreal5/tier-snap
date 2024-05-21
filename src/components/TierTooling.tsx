import { useTierStore } from '@/hooks/useTierStore';
import { NewRowModalButton } from './tooling/NewRowModalButton';

export function TierTooling() {
  const reset = useTierStore.use.reset();
  return (
    <div className="flex grow flex-col items-center gap-2 bg-zinc-900 p-4 text-white">
      <button
        className="flex cursor-pointer gap-2 rounded bg-zinc-700 px-4 py-2 hover:bg-zinc-800"
        onClick={reset}>
        Reset ❗
      </button>
      <NewRowModalButton />
    </div>
  );
}
