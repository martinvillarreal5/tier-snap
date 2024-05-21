import { useTierStore } from '@/hooks/useTierStore';

interface RowActionsProp {
  rowId: string;
}

export function RowActions(props: RowActionsProp) {
  const removeRow = useTierStore.use.removeRow();
  const createItemInRow = useTierStore.use.createItemInRow();

  return (
    <div className="flex w-12 flex-col flex-wrap items-center  gap-2 p-2">
      <button
        className="flex size-8 cursor-pointer items-center justify-center gap-2 rounded bg-zinc-700 hover:bg-zinc-800"
        onClick={() => createItemInRow(props.rowId)}>
        ➕
      </button>
      <button
        className="flex size-8 cursor-pointer items-center justify-center gap-2 rounded bg-zinc-700 hover:bg-zinc-800"
        onClick={() => removeRow(props.rowId)}>
        🗑️
      </button>
    </div>
  );
}
