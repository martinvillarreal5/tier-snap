import { ColorOption, TierPallete } from '../types/tier-pallete';
import { TierTable, TierTableConfig } from '../types/tier-table';

export const defaultColorOptions: ColorOption[] = [
  { color: '#ff7f7f' },
  { color: '#ffbf7f' },
  { color: '#ffdf7f' },
  { color: '#ffff7f' },
  { color: '#bfff7f' },
  { color: '#7fff7f' },
];

export const defaultTableConfig: TierTableConfig = {
  rowColor: '#1a1a17',
  snapColor: '#242222',
};

export const defaultTemplateTable: TierTable = {
  config: defaultTableConfig,
  rows: [
    {
      ...defaultColorOptions[0],
      title: 'S',
      snaps: [
        {
          title: 'example snap',
        },
      ],
    },
    { ...defaultColorOptions[1], title: 'A', snaps: [] },
    { ...defaultColorOptions[2], title: 'B', snaps: [] },
    { ...defaultColorOptions[3], title: 'C', snaps: [] },
    { ...defaultColorOptions[4], title: 'D', snaps: [] },
    { ...defaultColorOptions[5], title: 'E', snaps: [] },
  ],
};

export const defaultTierPallete: TierPallete = {
  colors: defaultColorOptions,
};
