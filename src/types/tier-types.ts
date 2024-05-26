export interface TierConfig {
  rowColor: string;
  snapColor: string;
}

export interface TierItem {
  id: string;
  rowId: string;
  title: string;
}

export interface TierPreset {
  title: string;
  rows: TierPresetRow[];
}

export interface TierPresetRow {
  color: string;
  title?: string;
}

export interface TierRow extends TierPresetRow {
  id: string;
}

export interface TierPalleteOption {
  color: string;
}
