import { TierTableConfig } from '../types/tier-table';

interface TierTableProps {
  tableConfig: TierTableConfig;
  children?: React.ReactNode;
}

export function TierTable(props: TierTableProps) {
  return <div className="flex w-fit flex-col gap-1">{props.children}</div>;
}
