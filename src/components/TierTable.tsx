interface TierTableProps {
  children?: React.ReactNode;
}

export function TierTableContainer(props: TierTableProps) {
  return <div className="flex w-fit min-w-[calc(7rem+6rem*8+9*0.25rem)] flex-col gap-1">{props.children}</div>;
}
