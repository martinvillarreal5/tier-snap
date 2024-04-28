import { Snap, type TierTableRow } from '../../types/tier-table';

interface TierTableRowProps {
  row: TierTableRow;
}

export default function TierTableRow(props: TierTableRowProps) {
  return (
    <div className="flex h-5 w-full justify-start">
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
    <div className="size-5 text-center" style={{ backgroundColor: props.color }}>
      {props.title}
    </div>
  );
}

interface TierTableBodyProps {
  snaps: Snap[];
}

function TierTableBody(props: TierTableBodyProps) {
  return (
    <div
      className="flex w-full justify-start gap-1 p-1"
      style={{
        backgroundColor: '#1a1a17', //TODO use from table config
      }}>
      {props.snaps.map((snap) => snap.title)}
    </div>
  );
}
