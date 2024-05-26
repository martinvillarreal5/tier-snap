import type {
  TierPreset,
  TierItem,
  TierRow,
  TierConfig,
  BaseRow,
  BaseItem,
} from '@/types/tier-types';
import { createSelectors } from '@/utils/createSelectors';
import { defaultTierConfig } from '@/constants/defaults';
import { generateRowItem, generateRow, generateTierRows } from '@/utils/generators';
import { defaultPreset } from '@/constants/tier-presets';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface TierStoreState {
  rows: TierRow[];
  items: TierItem[];
  title: string;
  tierConfig: TierConfig;
}

export interface TierStoreActions {
  createRow: (rowInfo?: Partial<BaseRow>) => void;
  reset: (preset?: DeepReadonly<TierPreset>, title?: string) => void;
  updateRow: (id: string, rowInfo: Partial<BaseRow>) => void;
  removeRow: (id: string) => void;
  setRows: (rows: TierRow[]) => void;
  createItemInRow: (itemInfo: Partial<BaseItem>) => void;
  updateItem: (id: string, itemInfo: Partial<BaseItem>) => void;
  setItems: (items: TierItem[]) => void;
}

const generateTierStoreStateFromPreset = (
  preset?: DeepReadonly<TierPreset>,
  title?: string
): TierStoreState => {
  const presetToUse = preset ? { ...preset } : { ...defaultPreset };
  return {
    rows: generateTierRows(presetToUse.rows),
    title: title ?? presetToUse.title,
    items: [],
    tierConfig: defaultTierConfig,
  };
};

export const baseTierStore = create<TierStoreState & TierStoreActions>()(
  persist(
    (set) => ({
      //state

      ...generateTierStoreStateFromPreset(),

      //actions

      reset: (preset?: DeepReadonly<TierPreset>, title?: string) => {
        set(generateTierStoreStateFromPreset(preset, title));
      },

      createRow: (rowInfo?: Partial<BaseRow>) => {
        const newRow = generateRow(rowInfo);

        set((state) => ({ rows: [...state.rows, newRow] }));
      },

      updateRow: (id: string, updatedRowInfo: Partial<BaseRow>) =>
        set((state) => {
          const updatedRows = state.rows.map((row) => {
            if (row.id != id) return row;
            return {
              ...row,
              title: updatedRowInfo.title ?? row.title,
              color: updatedRowInfo.color ?? row.color,
            };
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

      createItemInRow: (itemInfo: Partial<BaseItem>) => {
        const newItem = generateRowItem(itemInfo);
        set((state) => ({ items: [...state.items, newItem] }));
      },

      updateItem: (id: string, updatedInfo: Partial<BaseItem>) =>
        set((state) => {
          const updatedItems = state.items.map((item) => {
            if (item.id == id) return item;
            return {
              ...item,
              title: updatedInfo.title ?? item.title,
              rowId: updatedInfo.rowId ?? item.rowId,
            };
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
