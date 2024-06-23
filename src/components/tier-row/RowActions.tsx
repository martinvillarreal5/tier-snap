import { useTierStore } from '@/hooks/useTierStore';
import { Plus as PlusIcon, Trash2 as TrashIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { RowUpdateModalButton } from '../tooling/RowUpdateModalButton';
import { TierRow } from '@/types/tier';

interface RowActionsProp {
  row: TierRow;
}

export function RowActions(props: RowActionsProp) {
  const removeRow = useTierStore.use.removeRow();
  const createItemInRow = useTierStore.use.createItemInRow();

  const handleCreateItemInRow = () => {
    createItemInRow({
      rowId: props.row.id,
    });
  };

  const handleRemoveRow = () => {
    removeRow(props.row.id);
  };

  return (
    <div
      className="absolute z-10 flex w-full flex-row justify-between gap-1 p-1
     text-white opacity-0 duration-300 group-hover:opacity-100">
      <Button title="add item" size={'iconSm'} onClick={handleCreateItemInRow}>
        <PlusIcon />
      </Button>
      <RowUpdateModalButton row={props.row} />
      <Button title="delete row" size={'iconSm'} onClick={handleRemoveRow}>
        <TrashIcon />
      </Button>
    </div>
  );
}
