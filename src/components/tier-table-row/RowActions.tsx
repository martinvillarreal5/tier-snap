interface RowActionsProp {
  removeRowFn: (id: string) => void;
  rowId: string;
}

export function RowActions(props: RowActionsProp) {
  return (
    <div className="flex w-12 flex-row flex-wrap items-center justify-center p-2">
      <button
        className="flex size-8 cursor-pointer items-center justify-center gap-2 rounded bg-zinc-700 hover:bg-zinc-800"
        onClick={() => props.removeRowFn(props.rowId)}>
        🗑️
      </button>
    </div>
  );
}
