import { useTierStore } from '@/hooks/useTierStore';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { SettingsIcon } from 'lucide-react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { TierItem } from '@/types/tier-types';

interface ItemOptionsModalButtonProps {
  item: TierItem;
  className?: string;
}

export function ItemOptionsModalButton(props: ItemOptionsModalButtonProps) {
  const updateItem = useTierStore.use.updateItem();

  const handleUpdateItemTitle = (value: string) => {
    console.log('value: ', value);
    updateItem(props.item.id, { title: value });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={'iconSm'} className={props.className} title="items settings">
          <SettingsIcon />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex items-center justify-center">
          <DialogTitle className="text-lg text-white">Item Options</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex flex-col items-center justify-center gap-2">
            <Label htmlFor={'item-title-input' + props.item.id}>Title</Label>
            <Input
              id={'item-title-input' + props.item.id}
              type="text"
              value={props.item.title}
              onChange={(e) => handleUpdateItemTitle(e.target.value)}
            />
          </div>

          <DialogClose asChild>
            <Button>Close</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
