import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { TierTableContainer } from './TierTable';
import { RowContainer } from './tier-row/RowContainer';
import { TierHeader } from './TierHeader';
import { TierTooling } from './TierTooling';
import { DndContext } from '@dnd-kit/core';
import { restrictToWindowEdges } from '@dnd-kit/modifiers';
import { DragOverlayPortal } from './common/DragOverlayPortal';
import { useTierStore } from '@/hooks/useTierStore';
import { useTierRowDrag } from '@/hooks/useRowDrag';
import { useStoreRows } from '@/hooks/useTierStoreRows';
import { ItemComponent } from './tier-item/ItemComponent';

export function TierContainer() {
  const { rows, rowsIds, getRowItems } = useStoreRows();

  const tableTitle = useTierStore.use.title();

  const { onDragEnd, onDragStart, onDragOver, sensors, activeRow, activeItem } = useTierRowDrag();

  return (
    <>
      <TierHeader>{tableTitle}</TierHeader>
      <div className="flex flex-row gap-4">
        <DndContext
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          onDragOver={onDragOver}
          modifiers={[
            //restrictToVerticalAxis,
            restrictToWindowEdges,
          ]}
          sensors={sensors}>
          <SortableContext items={rowsIds} strategy={verticalListSortingStrategy}>
            <TierTableContainer>
              {rows.map((row) => (
                <RowContainer key={row.id} row={row} items={getRowItems(row.id)} />
              ))}
            </TierTableContainer>
          </SortableContext>
          <DragOverlayPortal>
            {activeRow && (
              <RowContainer key={activeRow.id} row={activeRow} items={getRowItems(activeRow.id)} />
            )}
            {activeItem && <ItemComponent key={activeItem.id} item={activeItem} />}
          </DragOverlayPortal>
        </DndContext>
        <TierTooling />
      </div>
    </>
  );
}
