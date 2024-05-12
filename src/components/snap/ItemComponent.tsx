import { useState } from 'react';
import { Item } from '../../types/tier-table';

interface ItemComponentProps {
  item: Item;
  updateTitle: (id: string, value: string) => void;
}

export function ItemComponent(props: ItemComponentProps) {
  const [editingTitle, setEditingTitle] = useState<boolean>(false);

  return (
    <div
      onClick={() => !editingTitle && setEditingTitle((v) => !v)}
      className="flex size-[6.5rem] items-center justify-center  bg-zinc-700">
      {editingTitle ? (
        <input
          type={'text'}
          className="flex h-fit w-full rounded-md
            bg-transparent p-0 text-center shadow-sm
            transition-colors focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          value={props.item.title}
          onChange={(e) => props.updateTitle(props.item.id, e.target.value)}
          autoFocus
          onBlur={() => setEditingTitle(false)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') setEditingTitle(false);
          }}
        />
      ) : (
        <p className="max-h-[6.5rem] max-w-[6.5rem] text-pretty break-words text-center">{props.item.title}</p>
      )}
    </div>
  );
}
