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
import Circle from '@uiw/react-color-circle';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { defaultColorOptions } from '@/constants/defaults';
import { Button } from '../ui/button';
import { TierRow } from '@/types/tier';

interface RowUpdateModalButtonProps {
  row: TierRow;
}

export function RowUpdateModalButton(props: RowUpdateModalButtonProps) {
  const updateRow = useTierStore.use.updateRow();

  const handleChangeRowColor = (hex: string) => {
    updateRow(props.row.id, {
      color: hex,
    });
  };

  const handleChangeRowTitle = (title: string) => {
    updateRow(props.row.id, {
      title: title,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button title="row settings" size={'iconSm'}>
          <SettingsIcon />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex items-center justify-center">
          <DialogTitle className="text-xl text-white">Update Row</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex flex-col items-center justify-center gap-2">
            <Label htmlFor="row-title-input">Title</Label>
            <Input
              id="row-title-input"
              type="text"
              value={props.row.title ?? ''}
              onChange={(e) => handleChangeRowTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <Label htmlFor="row-color-input">Color</Label>
            <div className="w-[calc(3rem*6+1rem)] bg-zinc-800 p-2 sm:rounded-lg">
              <Circle
                id="row-color-input"
                //TODO replace with custom radix dialog
                colors={[...defaultColorOptions]}
                color={props.row.color}
                pointProps={{
                  style: {
                    width: '2rem',
                    height: '2rem',
                    margin: '0.5rem',
                    padding: '0.5rem',
                  },
                }}
                onChange={(color) => handleChangeRowColor(color.hex)}
              />
            </div>
          </div>

          <DialogClose asChild>
            <Button className="gap-2">Close</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
