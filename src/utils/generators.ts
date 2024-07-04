import type { BaseItem, BaseRow, TierItem, TierRow } from '@/types/tier';
import { TierColor } from '@/types/tier-colors';
import { defaultPreset } from '../constants/tier-presets';

export const generateId = () => {
  return crypto.randomUUID();
};

/**
 * Generate a new item. If no rowId is provided "BAG" id will be used.
 */
export const generateRowItem = (itemInfo: Partial<BaseItem>): TierItem => {
  return {
    id: generateId(),
    title: itemInfo.title ?? '',
    rowId: itemInfo.rowId ?? 'BAG',
  };
};

/**
 * Generate new tier rows based on Preset rows
 */
export const generateTierRows = (presetRows?: DeepReadonlyArray<BaseRow>): TierRow[] => {
  const rows = presetRows ? [...presetRows] : [...defaultPreset.rows];

  return rows.map((presetRow) => ({ ...presetRow, id: generateId() }));
};

export const generateRow = (rowInfo?: Partial<BaseRow>): TierRow => {
  return {
    id: generateId(),
    title: rowInfo?.title ? rowInfo?.title : '',
    color: rowInfo?.color ? rowInfo?.color : TierColor.WHITE,
  };
};
