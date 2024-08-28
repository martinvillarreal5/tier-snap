interface TierTableProps {
  children?: React.ReactNode;
}

export function TierTable(props: TierTableProps) {
  return <div className="flex w-fit flex-col gap-[0.125rem] bg-zinc-950">{props.children}</div>;
}
