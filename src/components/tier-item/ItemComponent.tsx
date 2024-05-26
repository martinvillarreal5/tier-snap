import { useState } from 'react';
import { TierItem } from '../../types/tier-types';
import { useTierStore } from '@/hooks/useTierStore';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface ItemComponentProps {
  item: TierItem;
}

export function ItemComponent(props: ItemComponentProps) {
  const [editingTitle, setEditingTitle] = useState<boolean>(false);
  const updateItemTitle = useTierStore.use.updateItem();

  const { setNodeRef, attributes, listeners, transform, transition, isDragging } = useSortable({
    id: props.item.id,
    data: {
      type: 'Item',
      item: props.item,
    },
    disabled: editingTitle,
  });

  const sortableStyle: React.CSSProperties = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const handleUpdateItemTitle = (newTitle: string) => {
    updateItemTitle(props.item.id, {
      title: newTitle,
    });
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={sortableStyle}
        {...attributes}
        {...listeners}
        className="flex size-[6.5rem] cursor-grab items-center  justify-center border border-zinc-700"
      />
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={sortableStyle}
      {...attributes}
      {...listeners}
      onClick={() => !editingTitle && setEditingTitle((v) => !v)}
      className="flex size-[6.5rem] cursor-grab items-center  justify-center bg-zinc-700 text-white">
      {editingTitle ? (
        <input
          type={'text'}
          className="flex h-fit w-full rounded-md
            bg-transparent p-0 text-center shadow-sm
            transition-colors focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          value={props.item.title}
          onChange={(e) => handleUpdateItemTitle(e.target.value)}
          autoFocus
          onBlur={() => setEditingTitle(false)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') setEditingTitle(false);
          }}
        />
      ) : (
        <p className="max-h-[6.5rem] max-w-[6.5rem] text-pretty break-words text-center">
          {props.item.title}
        </p>
      )}
    </div>
  );
}
