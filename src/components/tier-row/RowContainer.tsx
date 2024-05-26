import { SortableContext, useSortable } from '@dnd-kit/sortable';
import { TierItem, type TierRow } from '../../types/tier-types';
import { RowActions } from './RowActions';
import { RowHead } from './RowHead';
import { CSS } from '@dnd-kit/utilities';
import { useMemo, useState } from 'react';
import { ItemComponent } from '../tier-item/ItemComponent';
import { useTierStore } from '@/hooks/useTierStore';

interface RowContainerProps {
  row: TierRow;
  items: TierItem[];
}

export function RowContainer(props: RowContainerProps) {
  const [editingTitle, setEditingTitle] = useState<boolean>(false);
  const { setNodeRef, attributes, listeners, transform, transition, isDragging } = useSortable({
    id: props.row.id,
    data: {
      type: 'Row',
      row: props.row,
    },
    disabled: editingTitle,
  });
  const itemsIds = useMemo(() => props.items.map((item) => item.id), [props.items]);
  const updateRow = useTierStore.use.updateRow();

  const sortableStyle: React.CSSProperties = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const handleUpdateRowTitle = (value: string) => {
    updateRow( props.row.id, {title: value});
  };

  if (isDragging) {
    return <div className="h-28 w-full" ref={setNodeRef} style={sortableStyle}></div>;
  }

  return (
    <div
      ref={setNodeRef}
      style={sortableStyle}
      className="flex w-full flex-row justify-start bg-zinc-900">
      {/* Row head */}
      <div {...attributes} {...listeners}>
        <RowHead
          setEditingTitle={setEditingTitle}
          handleUpdateRowTitle={handleUpdateRowTitle}
          color={props.row.color}
          title={props.row.title}
          editingTitle={editingTitle}
        />
      </div>

      {/* Row body/items */}
      <div className="flex h-fit w-[calc(6rem*8+9*0.25rem)] flex-wrap justify-start gap-1 p-1 text-white">
        <SortableContext items={itemsIds}>
          {props.items?.map((item) => <ItemComponent key={item.id} item={item} />)}
        </SortableContext>
      </div>
      <RowActions rowId={props.row.id} />
    </div>
  );
}
