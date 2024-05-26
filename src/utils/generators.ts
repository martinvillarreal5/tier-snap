import type { TierPresetRow, TierItem } from '@/types/tier-types';
import { defaultPreset } from '../constants/tier-presets';

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
  const rows = presetRows ? [...presetRows] : [...defaultPreset.rows];

  return rows.map((presetRow) => ({ ...presetRow, id: genId() }));
};
