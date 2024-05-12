import { useMemo, useState } from 'react';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import { getDefaultTemplateTable, getExampleItem } from '../utils/defaults';
import { TierTable } from './TierTable';
import { Item, TierTableRow } from '../types/tier-table';
import { RowContainer } from './tier-table-row/RowContainer';
import { TierHeader } from './TierHeader';
import { TierTooling } from './TierTooling';
import { DndContext, DragEndEvent, DragStartEvent, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { restrictToVerticalAxis, restrictToWindowEdges } from '@dnd-kit/modifiers';
import { DragOverlayPortal } from './common/DragOverlayPortal';

export function TierContainer() {
  const [rows, setRows] = useState<TierTableRow[]>(getDefaultTemplateTable().rows);
  const [activeRow, setActiveRow] = useState<TierTableRow | null>(null);
  const rowsId = useMemo(() => rows.map((row) => row.id), [rows]);

  const [items, setItems] = useState<Item[]>([getExampleItem(rows[0].id)]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5, //px
      },
    })
  );

  return (
    <>
      <TierHeader>{getDefaultTemplateTable().config.title}</TierHeader>
      <div className="flex flex-row gap-4">
        <DndContext
          onDragStart={onDragStart}
          modifiers={[restrictToVerticalAxis, restrictToWindowEdges]}
          sensors={sensors}
          onDragEnd={onDragEnd}>
          <SortableContext items={rowsId}>
            <TierTable tableConfig={getDefaultTemplateTable().config}>
              {rows.map((row) => (
                <RowContainer
                  key={row.id}
                  row={row}
                  removeRow={removeRow}
                  updateRowTitle={updateRowTitle}
                  createItem={createItemInRow}
                  updateItemTitle={updateItemTitle}
                  items={items.filter((item) => item.rowId === row.id)}
                />
              ))}
              <DragOverlayPortal>
                {activeRow && (
                  <RowContainer
                    key={activeRow.id}
                    row={activeRow}
                    removeRow={removeRow}
                    updateRowTitle={updateRowTitle}
                    createItem={createItemInRow}
                    updateItemTitle={updateItemTitle}
                    items={items.filter((item) => item.rowId === activeRow.id)}
                  />
                )}
              </DragOverlayPortal>
            </TierTable>
          </SortableContext>
        </DndContext>
        <TierTooling addRowFn={createNewRow} />
      </div>
    </>
  );

  function onDragStart(event: DragStartEvent) {
    console.log('drag start', event);
    if (event.active.data.current?.type === 'Row') {
      setActiveRow(event.active.data.current.row as TierTableRow);
      return;
    }
    /* 
    if (event.active.data.current?.type === 'Task') {
      setActiveTask(event.active.data.current.task);
      return;
    } */
  }

  function onDragEnd(event: DragEndEvent) {
    console.log('drag end', event);
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

    setRows((rows) => {
      const activeRowIndex = rows.findIndex((row) => row.id == activeRowId);
      const overRowIndex = rows.findIndex((row) => row.id == overRowId);
      return arrayMove(rows, activeRowIndex, overRowIndex);
    });
  }

  function removeRow(id: string) {
    const filteredRows = rows.filter((row) => row.id !== id);
    setRows(filteredRows);

    //const newTasks = tasks.filter((t) => t.columnId !== id);
    //setTasks(newTasks);
  }

  function updateRowTitle(id: string, value: string) {
    const newRows = rows.map((row) => {
      if (row.id != id) return row;
      return { ...row, title: value };
    });

    setRows(newRows);
  }

  function createNewRow() {
    const columnToAdd: TierTableRow = {
      id: crypto.randomUUID(),
      title: 'New',
      color: '#a1a1aa',
    };

    setRows([...rows, columnToAdd]);
  }

  function createItemInRow(rowId: string) {
    const newItem = getExampleItem(rowId);
    setItems([...items, newItem]);
  }

  function updateItemTitle(id: string, value: string) {
    const updatedItems = items.map((item) => {
      if (item.id != id) return item;
      return { ...item, title: value };
    });

    setItems(updatedItems);
  }
}
