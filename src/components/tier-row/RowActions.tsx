import { useTierStore } from '@/hooks/useTierStore';
import { Plus as PlusIcon, Settings as SettingsIcon, Trash2 as TrashIcon } from 'lucide-react';
import { Button } from '../ui/button';

interface RowActionsProp {
  rowId: string;
}

export function RowActions(props: RowActionsProp) {
  const removeRow = useTierStore.use.removeRow();
  const createItemInRow = useTierStore.use.createItemInRow();

  const handleCreateItemInRow = () => {
    createItemInRow({
      rowId: props.rowId,
    });
  };

  return (
    <div className="flex w-10 flex-col items-end gap-1 p-1 text-white">
      <Button title="add item" size={'iconSm'} onClick={() => handleCreateItemInRow()}>
        <PlusIcon />
      </Button>
      <Button title="row settings" size={'iconSm'}>
        <SettingsIcon />
      </Button>
      <Button title="delete row" size={'iconSm'} onClick={() => removeRow(props.rowId)}>
        <TrashIcon />
      </Button>
    </div>
  );
}
