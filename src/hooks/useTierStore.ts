import { TierColor } from '@/types/tier-colors';
import type { TierPreset, TierItem, TierRow, TierConfig } from '@/types/tier-types';
import { createSelectors } from '@/utils/createSelectors';
import { defaultTierConfig } from '@/utils/defaults';
import { generateExampleItem, generateTierRows } from '@/utils/generators';
import { defaultTierPreset } from '@/utils/tier-presets';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface TierStoreState {
  rows: TierRow[];
  items: TierItem[];
  title: string;
  tierConfig: TierConfig;
}

export interface TierStoreActions {
  createRow: (rowCreationOptions?: RowCreationOptions) => void;
  reset: (preset?: DeepReadonly<TierPreset>, title?: string) => void;
  updateRowTitle: (id: string, value: string) => void;
  removeRow: (id: string) => void;
  setRows: (rows: TierRow[]) => void;
  createItemInRow: (rowId: string) => void;
  updateItemTitle: (id: string, value: string) => void;
  setItems: (items: TierItem[]) => void;
}

const generateTierStoreStateFromPreset = (
  preset?: DeepReadonly<TierPreset>,
  title?: string
): TierStoreState => {
  const presetToUse = preset ? { ...preset } : { ...defaultTierPreset };
  return {
    rows: generateTierRows(presetToUse.rows),
    title: title ?? presetToUse.title,
    items: [],
    tierConfig: defaultTierConfig,
  };
};

interface RowCreationOptions {
  color?: string;
  title?: string;
}

export const baseTierStore = create<TierStoreState & TierStoreActions>()(
  persist(
    (set) => ({
      //state

      ...generateTierStoreStateFromPreset(),

      //actions

      // ! completely restore state to default values
      reset: (preset?: DeepReadonly<TierPreset>, title?: string) => {
        set(generateTierStoreStateFromPreset(preset, title));
      },

      createRow: (rowCreationOptions?: RowCreationOptions) => {
        const newRow: TierRow = {
          id: crypto.randomUUID(),
          title: rowCreationOptions?.title ? rowCreationOptions?.title : 'New',
          color: rowCreationOptions?.color ? rowCreationOptions?.color : TierColor.WHITE,
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
        const newItem = generateExampleItem(rowId);
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
