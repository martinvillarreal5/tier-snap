import { TierItem } from '../../types/tier-types';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { ItemActions } from './ItemActions';

interface ItemComponentProps {
  item: TierItem;
  isOverlay?: boolean;
}

export function ItemComponent(props: ItemComponentProps) {
  const { setNodeRef, attributes, listeners, transform, transition, isDragging } = useSortable({
    id: props.item.id,
    data: {
      type: 'Item',
      item: props.item,
    },
  });

  const sortableStyle: React.CSSProperties = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={sortableStyle}
        {...attributes}
        {...listeners}
        className="flex size-[6.5rem] cursor-grab items-center justify-center"
      />
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={sortableStyle}
      {...attributes}
      {...listeners}
      className="group relative flex size-[6.5rem] cursor-grab flex-col items-center bg-zinc-700 text-white">
      <div className="flex grow items-center">
        <div className="group-hover:opacity-40">
          <p className="line-clamp-4 max-w-[6.25rem]  break-words text-center">
            {props.item.title}
          </p>
        </div>
      </div>
      {!props.isOverlay && <ItemActions item={props.item} />}
    </div>
  );
}
