import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { TierTable } from './TierTable';
import { RowContainer } from './tier-row/RowComponent';
import { TierHeader } from './TierHeader';
import { TierTooling } from './tier-tooling/TierTooling';
import { DndContext, pointerWithin } from '@dnd-kit/core';
import { restrictToWindowEdges } from '@dnd-kit/modifiers';
import { DragOverlayPortal } from './common/DragOverlayPortal';
import { useTierStore } from '@/hooks/useTierStore';
import { useTierDnD } from '@/hooks/useTierDnD';
import { useStoreRows } from '@/hooks/useTierStoreRows';
import { ItemComponent } from './tier-item/ItemComponent';
import { useMemo } from 'react';
import { TierBag } from './TierBag';

export function TierContainer() {
  const { items, rows, rowsIds, getRowItems } = useStoreRows();

  const bagItemsIds = useMemo(
    () => items.filter((i) => i.rowId == 'BAG').map((item) => item.id),
    [items]
  );

  const tableTitle = useTierStore.use.title();

  const { onDragEnd, onDragStart, onDragOver, sensors, activeRow, activeItem } = useTierDnD();

  return (
    <>
      {/*<TierHeader>{tableTitle}</TierHeader>*/}
      <div className="flex flex-row gap-4">
        <DndContext
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          onDragOver={onDragOver}
          modifiers={[
            //restrictToVerticalAxis,
            restrictToWindowEdges,
          ]}
          collisionDetection={pointerWithin}
          sensors={sensors}>
          <SortableContext items={rowsIds} strategy={verticalListSortingStrategy}>
            <TierTable>
              {rows.map((row) => (
                <RowContainer key={row.id} row={row} items={getRowItems(row.id)} />
              ))}
            </TierTable>
          </SortableContext>
          <div className="flex w-full flex-col gap-4">
            <TierTooling />
            <TierBag>
              <SortableContext items={bagItemsIds}>
                {items
                  .filter((i) => i.rowId == 'BAG')
                  .map((item) => (
                    <ItemComponent key={item.id} item={item} />
                  ))}
              </SortableContext>
            </TierBag>
          </div>
          <DragOverlayPortal>
            {activeRow && (
              <RowContainer
                key={activeRow.id}
                row={activeRow}
                items={getRowItems(activeRow.id)}
                isOverlay
              />
            )}
            {activeItem && <ItemComponent key={activeItem.id} item={activeItem} isOverlay />}
          </DragOverlayPortal>
        </DndContext>
      </div>
    </>
  );
}
