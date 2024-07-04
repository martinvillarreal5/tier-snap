import { NewRowModalButton } from './NewRowModalButton';
import { AlbumSection } from './AlbumSection';
import { ResetTierButton } from './ResetTierButton';

export function TierTooling() {
  return (
    <div className="flex w-full flex-col items-center gap-2 bg-zinc-900 p-4 text-white">
      <AlbumSection />
      <div className="flex flex-row gap-2">
        <ResetTierButton />
        <NewRowModalButton />
      </div>
    </div>
  );
}
