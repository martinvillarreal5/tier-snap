import { TierColor } from '@/types/tier-colors';
import type { TierConfig, TierPalleteOption } from '../types/tier-types';

export const defaultColorOptions: DeepReadonly<TierPalleteOption[]> = [
  { color: TierColor.RED },
  { color: TierColor.ORANGE },
  { color: TierColor.AMBER },
  { color: TierColor.YELLOW },
  { color: TierColor.LIME },
  { color: TierColor.GREEN },
  { color: TierColor.CYAN },
  { color: TierColor.SKY },
  { color: TierColor.INDIGO },
  { color: TierColor.MAGENTA },
  { color: TierColor.PINK },
  { color: TierColor.WHITE },
];

export const defaultTierConfig: DeepReadonly<TierConfig> = {
  rowColor: '#1a1a17',
  snapColor: '#242222',
};
