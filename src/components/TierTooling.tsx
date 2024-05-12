interface TierToolingProps {
  addRowFn: () => void;
}

export function TierTooling(props: TierToolingProps) {
  return (
    <div className="flex grow flex-col items-center bg-zinc-900 p-4 text-white">
      <button
        className="flex cursor-pointer gap-2 rounded bg-zinc-700 px-4 py-2 hover:bg-zinc-800"
        onClick={props.addRowFn}>
        Add row
      </button>
    </div>
  );
}
