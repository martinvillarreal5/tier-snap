import { useDroppable } from '@dnd-kit/core';

interface TierBagProps {
  children?: React.ReactNode;
}

export function TierBag(props: TierBagProps) {
  const { setNodeRef } = useDroppable({
    id: 'BAG',
  });
  return (
    <div ref={setNodeRef} className="flex size-full bg-zinc-900">
      <div className="flex h-fit w-full flex-wrap justify-start gap-1 p-1">{props.children}</div>
    </div>
  );
}
