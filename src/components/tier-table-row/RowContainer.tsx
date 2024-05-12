import { useSortable } from '@dnd-kit/sortable';
import { Item, type TierTableRow } from '../../types/tier-table';
import { RowActions } from './RowActions';
import { RowHead } from './RowHead';
import { CSS } from '@dnd-kit/utilities';
import { useState } from 'react';
import { ItemComponent } from '../snap/ItemComponent';

interface RowContainerProps {
  row: TierTableRow;
  removeRow: (id: string) => void;
  updateRowTitle: (id: string, value: string) => void;
  items: Item[];
  createItem: (rowId: string) => void;
  updateItemTitle: (id: string, value: string) => void;
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

  const sortableStyle: React.CSSProperties = {
    transition,
    transform: CSS.Transform.toString(transform),
    /* boxShadow: isDragging
      ? `var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) ${props.row.color}`
      : 'none', */
  };

  const handleUpdateRowTitle = (value: string) => {
    console.log('row change value: ', value);
    props.updateRowTitle(props.row.id, value);
  };

  if (isDragging) {
    return <div className="h-28 w-full" ref={setNodeRef} style={sortableStyle}></div>;
  }

  return (
    <div ref={setNodeRef} style={sortableStyle} className="flex w-full flex-row justify-start bg-zinc-900">
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
        {props.items?.map((item) => <ItemComponent key={item.id} item={item} updateTitle={props.updateItemTitle} />)}
      </div>
      <RowActions removeRowFn={props.removeRow} rowId={props.row.id} />
    </div>
  );
}
