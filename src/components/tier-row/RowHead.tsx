import { TierRow } from '@/types/tier';
import { RowActions } from './RowActions';

interface RowHeadProps {
  row: TierRow;
  isOverlay?: boolean;
}

export function RowHead(props: RowHeadProps) {
  return (
    <div
      className="group relative flex min-h-28 w-28 shrink-0 cursor-grab flex-col items-center
       text-black"
      style={{ backgroundColor: props.row.color }}>
      <div className="flex grow items-center">
        <div className="group-hover:opacity-40">
          <p className="line-clamp-4 max-w-[6.25rem] break-words text-center">{props.row.title}</p>
        </div>
      </div>

      {!props.isOverlay && <RowActions row={props.row} />}
    </div>
  );
}
