import { SortableContext, useSortable } from '@dnd-kit/sortable';
import { TierItem, type TierRow } from '../../types/tier';
import { RowHead } from './RowHead';
import { CSS } from '@dnd-kit/utilities';
import { useMemo } from 'react';
import { ItemComponent } from '../tier-item/ItemComponent';
import { Dimensions } from '@/constants/dimensions';

interface RowContainerProps {
  row: TierRow;
  items: TierItem[];
  isOverlay?: boolean;
}

export function RowContainer(props: RowContainerProps) {
  const { setNodeRef, attributes, listeners, transform, transition, isDragging } = useSortable({
    id: props.row.id,
    data: {
      type: 'Row',
      row: props.row,
    },
  });
  const itemsIds = useMemo(() => props.items.map((item) => item.id), [props.items]);

  const sortableStyle: React.CSSProperties = {
    transition,
    transform: CSS.Translate.toString(transform),
  };

  if (isDragging) {
    return (
      <div
        className="w-full"
        ref={setNodeRef}
        style={{
          ...sortableStyle,
          minHeight: Dimensions.calculateRowHeight(props.items.length) + 'rem',
        }}
      />
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={{ ...sortableStyle, width: Dimensions.ROW_WIDTH + 'rem' }}
      className="flex w-full flex-row justify-start bg-zinc-900">
      {/* Row head */}
      <div {...attributes} {...listeners}>
        <RowHead isOverlay={props.isOverlay} row={props.row} />
      </div>
      {/* Row body/items */}
      <div
        className="flex flex-wrap justify-start gap-1 p-1 text-white"
        style={{ width: Dimensions.ROW_ITEMS_WIDTH + 'rem' }}>
        <SortableContext items={itemsIds}>
          {props.items?.map((item) => <ItemComponent key={item.id} item={item} />)}
        </SortableContext>
      </div>
    </div>
  );
}
