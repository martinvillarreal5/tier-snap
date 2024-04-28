import { Snap, type TierTableRow } from '../../types/tier-table';

interface TierTableRowProps {
  row: TierTableRow;
}

export default function TierTableRow(props: TierTableRowProps) {
  return (
    <div className="flex w-full flex-row justify-start bg-zinc-900">
      <TierTableHead color={props.row.color} title={props.row.title} />
      <TierTableBody snaps={props.row.snaps} />
    </div>
  );
}

interface TierTableHeadProps {
  title?: string;
  color: string;
}

function TierTableHead(props: TierTableHeadProps) {
  return (
    <div
      className="flex size-24 items-center justify-center text-black"
      style={{ backgroundColor: props.color }}>
      {props.title}
    </div>
  );
}

interface TierTableBodyProps {
  snaps: Snap[];
}

function TierTableBody(props: TierTableBodyProps) {
  return (
    <div className="flex h-24 w-full justify-start gap-2 p-2 text-white">
      {props.snaps.map((snap) => snap.title)}
    </div>
  );
}
