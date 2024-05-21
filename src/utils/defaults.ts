import { TierItem, TierTableConfig, TierRow, TierPalleteOption, TierPallete } from '../types/tier-types';

export const defaultColorOptions: TierPalleteOption[] = [
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

export const defaultTierPallete: TierPallete = {
  colors: defaultColorOptions,
};

export const defaultTableConfig: TierTableConfig = {
  rowColor: '#1a1a17',
  snapColor: '#242222',
  title: 'Tier',
};

export const getExampleItem = (rowId: string): TierItem => {
  return {
    title: '',
    id: crypto.randomUUID(),
    rowId: rowId,
  };
};

export const getDefaultRows = (): TierRow[] => {
  return [
    { ...defaultColorOptions[0], id: crypto.randomUUID(), title: 'S' },
    { ...defaultColorOptions[1], id: crypto.randomUUID(), title: 'A' },
    { ...defaultColorOptions[2], id: crypto.randomUUID(), title: 'B' },
    { ...defaultColorOptions[3], id: crypto.randomUUID(), title: 'C' },
    { ...defaultColorOptions[4], id: crypto.randomUUID(), title: 'D' },
    { ...defaultColorOptions[5], id: crypto.randomUUID(), title: 'E' },
  ];
};

export const getDefaultAlbumRows = (): TierRow[] => {
  return [
    { ...defaultColorOptions[0], id: crypto.randomUUID(), title: 'God Tier' },
    { ...defaultColorOptions[1], id: crypto.randomUUID(), title: 'Slaps' },
    { ...defaultColorOptions[2], id: crypto.randomUUID(), title: 'Good' },
    { ...defaultColorOptions[3], id: crypto.randomUUID(), title: 'Ok' },
    { ...defaultColorOptions[4], id: crypto.randomUUID(), title: 'Meh' },
    { ...defaultColorOptions[7], id: crypto.randomUUID(), title: 'Bad shit' },
    { ...defaultColorOptions[10], id: crypto.randomUUID(), title: 'WTF' },
  ];
};
