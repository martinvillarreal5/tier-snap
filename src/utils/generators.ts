import type { TierPresetRow, TierItem } from '@/types/tier-types';
import { defaultTierPreset } from './tier-presets';

const genId = () => {
  return crypto.randomUUID();
};

export const generateExampleItem = (rowId: string): TierItem => {
  return {
    title: '',
    id: genId(),
    rowId: rowId,
  };
};

export const generateTierRows = (presetRows?: DeepReadonly<TierPresetRow[]>) => {
  const rows = presetRows ? [...presetRows] : [...defaultTierPreset.rows];

  return rows.map((presetRow) => ({ ...presetRow, id: genId() }));
};
