import { useTierStore } from '@/hooks/useTierStore';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { useState } from 'react';
import { Plus as PlusIcon } from 'lucide-react';
import Circle from '@uiw/react-color-circle';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { defaultColorOptions } from '@/constants/defaults';

export function RowModalButton() {
  const createRow = useTierStore.use.createRow();
  const [rowTitle, setRowTitle] = useState<string>('');
  const [hex, setHex] = useState('');

  const handleChangeRowColor = (hex: string) => {
    setHex(hex);
  };

  const handleChangeRowTitle = (title: string) => {
    setRowTitle(title);
  };

  const handleCreateRow = () => {
    createRow({
      title: rowTitle.length > 0 ? rowTitle : undefined,
      color: hex.length > 0 ? hex : undefined,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex cursor-pointer gap-2 rounded bg-zinc-700 px-4 py-2 duration-300 hover:bg-zinc-800">
          <PlusIcon /> Add row
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex items-center justify-center">
          <DialogTitle className="text-xl text-white">Add new Row</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex flex-col items-center justify-center gap-2">
            <Label htmlFor="row-title-input">Title</Label>
            <Input
              id="row-title-input"
              type="text"
              value={rowTitle}
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
                color={hex}
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
            <button
              className="flex cursor-pointer gap-2 rounded bg-zinc-700 px-4 py-2 text-white duration-300 hover:bg-zinc-800"
              type="button"
              onClick={handleCreateRow}>
              Create
            </button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
