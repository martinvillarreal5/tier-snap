import { NewRowModalButton } from './tooling/NewRowModalButton';
import { AlbumSection } from './tooling/AlbumSection';
import { ResetTierButton } from './tooling/ResetTierButton';

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
