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
import { defaultColorOptions } from '@/utils/defaults';

export function NewRowModalButton() {
  const createRow = useTierStore.use.createRow();
  const [rowTitle, setRowTitle] = useState<string>();
  const [hex, setHex] = useState('#F44E3B');

  const handleChangeRowColor = (hex: string) => {
    //setRowColor({ color: hex });
    setHex(hex);
  };

  const handleCreateRow = () => {
    createRow({
      title: rowTitle,
      color: hex,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex cursor-pointer gap-2 rounded bg-zinc-700 px-4 py-2 duration-300 hover:bg-zinc-800">
          <PlusIcon /> Add row
        </button>
      </DialogTrigger>
      <DialogContent className="dark ">
        <DialogHeader className="flex items-center justify-center">
          <DialogTitle className="text-xl">Add new Row</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center gap-4 space-x-2">
          <div className="w-[calc(3rem*6+1rem)] bg-zinc-800 p-2 sm:rounded-lg">
            <Circle
              //TODO replace with custom radix dialog
              colors={defaultColorOptions}
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

          <DialogClose asChild>
            <button
              className="flex cursor-pointer gap-2 rounded bg-zinc-700 px-4 py-2 duration-300 hover:bg-zinc-800"
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
