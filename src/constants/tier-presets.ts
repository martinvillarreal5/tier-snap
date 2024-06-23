import { TierColor } from '@/types/tier-colors';
import { TierPreset } from '@/types/tier-preset';

export const songsPreset: DeepReadonly<TierPreset> = {
  title: 'Album Songs',
  rows: [
    { color: TierColor.RED, title: 'Bruh' },
    { color: TierColor.ORANGE, title: 'Slaps' },
    { color: TierColor.AMBER, title: 'Good' },
    { color: TierColor.YELLOW, title: 'Ok' },
    { color: TierColor.LIME, title: 'Meh' },
    { color: TierColor.SKY, title: 'Bad' },
    { color: TierColor.MAGENTA, title: 'WTF' },
  ],
};

export const defaultPreset: DeepReadonly<TierPreset> = {
  title: 'Generic',
  rows: [
    { color: TierColor.RED, title: 'S' },
    { color: TierColor.ORANGE, title: 'A' },
    { color: TierColor.AMBER, title: 'B' },
    { color: TierColor.YELLOW, title: 'C' },
    { color: TierColor.LIME, title: 'D' },
    { color: TierColor.GREEN, title: 'E' },
  ],
};

export const defaultPlusPreset: DeepReadonly<TierPreset> = {
  title: 'Generic Plus',
  rows: [...defaultPreset.rows, { color: TierColor.SKY, title: 'F' }],
};

export const defaultExtendedPreset: DeepReadonly<TierPreset> = {
  title: 'Generic Extended',
  rows: [
    ...defaultPreset.rows,
    { color: TierColor.CYAN, title: 'F' },
    { color: TierColor.SKY, title: 'G' },
  ],
};

export const allPresets: DeepReadonly<TierPreset[]> = [
  defaultPreset,
  defaultPlusPreset,
  defaultExtendedPreset,
  songsPreset,
];
