import { TierItem, TierRow, TierTableConfig } from '@/types/tier-types';
import { createSelectors } from '@/utils/createSelectors';
import { defaultTableConfig, getDefaultAlbumRows, getExampleItem } from '@/utils/defaults';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface TierStoreState {
  rows: TierRow[];
  items: TierItem[];
  tableConfig: TierTableConfig;
}

export interface TierStoreActions {
  createRow: () => void;
  reset: () => void;
  updateRowTitle: (id: string, value: string) => void;
  removeRow: (id: string) => void;
  setRows: (rows: TierRow[]) => void;
  createItemInRow: (rowId: string) => void;
  updateItemTitle: (id: string, value: string) => void;
  setItems: (items: TierItem[]) => void;
}

const defaultState: TierStoreState = {
  rows: getDefaultAlbumRows(),
  items: [],
  tableConfig: defaultTableConfig,
};

export const baseTierStore = create<TierStoreState & TierStoreActions>()(
  persist(
    (set) => ({
      //state

      ...defaultState,

      //actions

      // ! completely restore state to default values
      reset: () => {
        set(defaultState);
      },

      createRow: () => {
        const newRow: TierRow = {
          id: crypto.randomUUID(),
          title: 'New',
          color: '#a1a1aa',
        };

        set((state) => ({ rows: [...state.rows, newRow] }));
      },

      updateRowTitle: (id: string, value: string) =>
        set((state) => {
          const updatedRows = state.rows.map((row) => {
            if (row.id != id) return row;
            return { ...row, title: value };
          });

          return { rows: updatedRows };
        }),

      removeRow: (id: string) =>
        set((state) => {
          const filteredRows = state.rows.filter((row) => row.id !== id);

          const filteredItems = state.items.filter((item) => item.rowId !== id);

          return {
            rows: filteredRows,
            items: filteredItems,
          };
        }),

      setRows: (rows: TierRow[]) => set(() => ({ rows: rows })),

      createItemInRow: (rowId: string) => {
        const newItem = getExampleItem(rowId);
        set((state) => ({ items: [...state.items, newItem] }));
      },

      updateItemTitle: (id: string, value: string) =>
        set((state) => {
          const updatedItems = state.items.map((item) => {
            if (item.id != id) return item;
            return { ...item, title: value };
          });
          return { items: updatedItems };
        }),

      setItems: (items: TierItem[]) => set(() => ({ items: items })),
    }),
    {
      name: 'tier-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const useTierStore = createSelectors(baseTierStore);
