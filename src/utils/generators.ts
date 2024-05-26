import type { BaseItem, BaseRow, TierItem, TierRow } from '@/types/tier-types';
import { defaultPreset } from '../constants/tier-presets';
import { TierColor } from '@/types/tier-colors';

export const generateId = () => {
  return crypto.randomUUID();
};

export const generateRowItem = (itemInfo: Partial<BaseItem>): TierItem => {
  return {
    id: generateId(),
    title: itemInfo.title ?? '',
    rowId: itemInfo.rowId ?? 'deck',
  };
};

export const generateTierRows = (presetRows?: DeepReadonly<BaseRow[]>): TierRow[] => {
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
