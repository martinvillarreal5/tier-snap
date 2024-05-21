export interface TierTableConfig {
  title: string;
  rowColor: string;
  snapColor: string;
}

export interface TierItem {
  id: string;
  rowId: string;
  title: string;
}

export interface TierRow {
  id: string;
  color: string;
  title?: string;
}

export interface TierPalleteOption {
  color: string;
}

export interface TierPallete {
  colors: TierPalleteOption[];
}
