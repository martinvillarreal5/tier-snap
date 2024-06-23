export interface TierConfig {
  rowColor: string;
  snapColor: string;
}

export interface BaseItem {
  title: string;
  rowId: string;
}

export interface TierItem extends BaseItem {
  id: string;
}

export interface BaseRow {
  color: string;
  title?: string;
}

export interface TierRow extends BaseRow {
  id: string;
}

export interface TierPalleteOption {
  color: string;
}
