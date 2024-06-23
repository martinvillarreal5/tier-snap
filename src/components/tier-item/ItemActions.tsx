import { useTierStore } from '@/hooks/useTierStore';
import { Trash2 as TrashIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { TierItem } from '@/types/tier';
import { ItemOptionsModalButton } from './ItemOptionsModalButton';

interface ItemActionsProp {
  item: TierItem;
}

export function ItemActions(props: ItemActionsProp) {
  const removeItem = useTierStore.use.removeItem();

  const handleRemoveItem = () => {
    removeItem(props.item.id);
  };

  return (
    <div
      className={
        'absolute z-10 flex w-full flex-row justify-between gap-1 p-1 text-white opacity-0 duration-300 group-hover:opacity-100'
      }>
      <ItemOptionsModalButton item={props.item} />
      <Button size={'iconSm'} onClick={handleRemoveItem} title="delete items">
        <TrashIcon />
      </Button>
    </div>
  );
}
