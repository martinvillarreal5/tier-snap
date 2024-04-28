import { type TierTable } from '../../types/tier-table';
import TierTableRow from './TierTableRow';

interface TierTableProps {
  table: TierTable;
}

export default function TierTable(props: TierTableProps) {
  return (
    <div className="flex w-full flex-col">
      {props.table.rows.map((row, index) => (
        <TierTableRow key={index} row={row} />
      ))}
    </div>
  );
}
