import { useTierStore } from '@/hooks/useTierStore';
import { Plus as PlusIcon, Settings as SettingsIcon, Trash2 as TrashIcon } from 'lucide-react';

interface RowActionsProp {
  rowId: string;
}

export function RowActions(props: RowActionsProp) {
  const removeRow = useTierStore.use.removeRow();
  const createItemInRow = useTierStore.use.createItemInRow();

  return (
    <div className="flex w-12 flex-col items-end gap-1 p-1 text-white">
      <button
        className="flex size-8 cursor-pointer items-center justify-center rounded bg-zinc-700 duration-300 hover:bg-zinc-800"
        onClick={() => createItemInRow(props.rowId)}
        type="button">
        <PlusIcon />
      </button>
      <button
        className="flex size-8 cursor-pointer items-center justify-center rounded bg-zinc-700 duration-300 hover:bg-zinc-800"
        type="button">
        <SettingsIcon />
      </button>
      <button
        className="flex size-8 cursor-pointer items-center justify-center rounded bg-zinc-700 duration-300 hover:bg-zinc-800"
        onClick={() => removeRow(props.rowId)}
        type="button">
        <TrashIcon />
      </button>
    </div>
  );
}
