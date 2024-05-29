interface RowHeadProps {
  title?: string;
  color: string;
  setEditingTitle: React.Dispatch<React.SetStateAction<boolean>>;
  editingTitle: boolean;
  handleUpdateRowTitle: (value: string) => void;
}

export function RowHead(props: RowHeadProps) {
  return props.editingTitle ? (
    <div
      className="flex h-full min-h-28 w-28 shrink-0 items-center justify-center text-black"
      style={{ backgroundColor: props.color }}>
      <input
        type={'text'}
        className="flex h-fit w-full rounded-md border-none
         bg-transparent p-0 text-center
         transition-colors focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        value={props.title}
        onChange={(e) => props.handleUpdateRowTitle(e.target.value)}
        autoFocus
        onBlur={() => props.setEditingTitle(false)}
        onKeyDown={(e) => {
          if (e.key !== 'Enter') return;
          props.setEditingTitle(false);
        }}
      />
    </div>
  ) : (
    <div
      onClick={() => props.setEditingTitle(true)}
      className="flex h-full min-h-28 w-28 shrink-0 cursor-grab items-center justify-center text-black"
      style={{ backgroundColor: props.color }}>
      {props.title}
    </div>
  );
}