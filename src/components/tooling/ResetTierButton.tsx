import { useTierStore } from '@/hooks/useTierStore';
import { Button } from '../ui/button';
import { TriangleAlertIcon } from 'lucide-react';

export function ResetTierButton() {
  const reset = useTierStore.use.reset();

  return (
    <Button type="button" onClick={() => reset()} variant="secondary" className="gap-2">
      <TriangleAlertIcon className="text-[#ff7f7f] " /> Reset
    </Button>
  );
}
