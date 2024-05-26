import type { TierPreset } from '@/types/tier-types';
import { TierColor } from '@/types/tier-colors';

export const albumTierPreset: DeepReadonly<TierPreset> = {
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

export const defaultTierPreset: DeepReadonly<TierPreset> = {
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

export const extendedTierPreset: DeepReadonly<TierPreset> = {
  title: 'Generic Extended',
  rows: [
    { color: TierColor.RED, title: 'S' },
    { color: TierColor.ORANGE, title: 'A' },
    { color: TierColor.AMBER, title: 'B' },
    { color: TierColor.YELLOW, title: 'C' },
    { color: TierColor.LIME, title: 'D' },
    { color: TierColor.GREEN, title: 'E' },
    { color: TierColor.CYAN, title: 'F' },
    { color: TierColor.SKY, title: 'G' },
  ],
};
