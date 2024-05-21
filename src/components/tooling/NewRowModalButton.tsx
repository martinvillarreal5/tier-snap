import { useTierStore } from '@/hooks/useTierStore';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';

export function NewRowModalButton() {
  const createRow = useTierStore.use.createRow();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex cursor-pointer gap-2 rounded bg-zinc-700 px-4 py-2 hover:bg-zinc-800">
          Add row
        </button>
      </DialogTrigger>
      <DialogContent className="dark sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add new Row</DialogTitle>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <button className="flex cursor-pointer gap-2 rounded bg-zinc-700 px-4 py-2 hover:bg-zinc-800">
            Create
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
