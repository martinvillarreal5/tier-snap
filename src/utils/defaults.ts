import { ColorOption, TierPallete } from '../types/tier-pallete';
import { TierTable, TierTableConfig } from '../types/tier-table';

export const defaultColorOptions: ColorOption[] = [
  { color: '#ff7f7f', order: 0 },
  { color: '#ffbf7f', order: 1 },
  { color: '#ffdf7f', order: 2 },
  { color: '#ffff7f', order: 3 },
  { color: '#bfff7f', order: 4 },
  { color: '#7fff7f', order: 5 },
];

export const defaultTableConfig: TierTableConfig = {
  rowColor: '#1a1a17',
};

export const defaultTable: TierTable = {
  config: defaultTableConfig,
  rows: [
    { ...defaultColorOptions[0], title: 'S' },
    { ...defaultColorOptions[1], title: 'A' },
    { ...defaultColorOptions[2], title: 'B' },
    { ...defaultColorOptions[3], title: 'C' },
    { ...defaultColorOptions[4], title: 'D' },
    { ...defaultColorOptions[5], title: 'E' },
  ],
};

export const defaultTierPallete: TierPallete = {
  colors: defaultColorOptions,
};
