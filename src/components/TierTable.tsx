interface TierTableProps {
  children?: React.ReactNode;
}

export function TierTableContainer(props: TierTableProps) {
  return <div className="flex w-fit flex-col gap-1">{props.children}</div>;
}
