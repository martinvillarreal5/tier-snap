import { memoize } from 'proxy-memoize';
import { TierStoreState, baseTierStore, useTierStore } from './useTierStore';

const getRowIds = memoize((state: TierStoreState) => state.rows.map((row) => row.id));

export function useStoreRows() {
  const rowsIds = baseTierStore(getRowIds);

  const rows = useTierStore.use.rows();

  const items = useTierStore.use.items();

  const getRowItems = (rowId: string) => {
    console.log(items);
    console.log(rowId);
    return items.filter((item) => item.rowId === rowId);
  };

  return {
    rowsIds,
    rows,
    getRowItems,
  };
}
