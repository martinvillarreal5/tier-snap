import { ColorOption, TierPallete } from '../types/tier-pallete';
import { TierTable, TierTableConfig } from '../types/tier-table';

export const defaultColorOptions: ColorOption[] = [
  { color: '#ff7f7f' },
  { color: '#ffbf7f' },
  { color: '#ffdf7f' },
  { color: '#ffff7f' },
  { color: '#bfff7f' },
  { color: '#7fff7f' },
  { color: '#7fffff' },
  { color: '#7fbfff' },
  { color: '#7f7fff' },
  { color: '#ff7fff' },
  { color: '#bf7fbf' },
];

export const defaultTableConfig: TierTableConfig = {
  rowColor: '#1a1a17',
  snapColor: '#242222',
  title: 'Example Tier Table',
};

export const getExampleItem = (rowId: string) => {
  return {
    title: 'example',
    id: crypto.randomUUID(),
    rowId: rowId,
  };
};

export const getDefaultTemplateTable = (): TierTable => {
  const rowCeroId = crypto.randomUUID();

  return {
    config: defaultTableConfig,
    rows: [
      {
        ...defaultColorOptions[0],
        id: rowCeroId,
        title: 'S',
      },
      { ...defaultColorOptions[1], id: crypto.randomUUID(), title: 'A' },
      { ...defaultColorOptions[2], id: crypto.randomUUID(), title: 'B' },
      { ...defaultColorOptions[3], id: crypto.randomUUID(), title: 'C' },
      { ...defaultColorOptions[4], id: crypto.randomUUID(), title: 'D' },
      { ...defaultColorOptions[5], id: crypto.randomUUID(), title: 'E' },
    ],
  };
};

export const defaultTierPallete: TierPallete = {
  colors: defaultColorOptions,
};
