import { TierItem, TierRow } from '@/types/tier';
import {
  DragEndEvent,
  DragOverEvent,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { useState } from 'react';
import { useTierStore } from './useTierStore';
import { arrayMove } from '@dnd-kit/sortable';

export function useTierDnD() {
  const [activeRow, setActiveRow] = useState<TierRow | null>(null);
  const [activeItem, setActiveItem] = useState<TierItem | null>(null);

  const rows = useTierStore.use.rows();
  const items = useTierStore.use.items();
  const setRows = useTierStore.use.setRows();
  const setItems = useTierStore.use.setItems();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5, //px
      },
    })
  );

  const onDragStart = (event: DragStartEvent) => {
    if (event.active.data.current?.type === 'Row') {
      setActiveRow(event.active.data.current.row as TierRow);
      return;
    }

    if (event.active.data.current?.type === 'Item') {
      setActiveItem(event.active.data.current.item as TierItem);
      return;
    }
  };

  const onDragEnd = (event: DragEndEvent) => {
    setActiveItem(null);
    setActiveRow(null);

    const { active, over } = event;

    if (!over) {
      //Not dragging over valid element
      return;
    }

    const activeRowId = active.id;
    const overRowId = over.id;

    if (activeRowId == overRowId) {
      //Row is dragging over its previous position
      return;
    }

    if (active.data.current?.type === 'Item') {
      //If active is an Item then return early to avoid unnecesary calculations
      return;
    }
    const activeRowIndex = rows.findIndex((row) => row.id == activeRowId);
    const overRowIndex = rows.findIndex((row) => row.id == overRowId);

    setRows(arrayMove(rows, activeRowIndex, overRowIndex));
  };

  function onDragOver(event: DragOverEvent) {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;
    const overType = over.data.current?.type as string;

    if (activeId === overId) return;

    const isActiveAnItem = active.data.current?.type === 'Item';

    const isOverAnItem = overType === 'Item';
    const isOverARow = overType === 'Row';
    const isOverBag = overId === 'BAG';

    if (!isActiveAnItem) return;

    // Dropping a Item over another Item
    if (isActiveAnItem && isOverAnItem) {
      const activeIndex = items.findIndex((t) => t.id === activeId);
      const overIndex = items.findIndex((t) => t.id === overId);

      if (items[activeIndex].rowId != items[overIndex].rowId) {
        items[activeIndex].rowId = items[overIndex].rowId;
        setItems(arrayMove(items, activeIndex, overIndex - 1));
      }

      setItems(arrayMove(items, activeIndex, overIndex));
    }

    // Dropping an Item over a row or Bag
    if (isActiveAnItem && (isOverARow || isOverBag)) {
      const activeIndex = items.findIndex((t) => t.id === activeId);

      items[activeIndex].rowId = overId as string;
      setItems(arrayMove(items, activeIndex, activeIndex));
    }
  }

  return {
    sensors,
    onDragStart,
    onDragEnd,
    onDragOver,
    activeRow,
    activeItem,
  };
}
