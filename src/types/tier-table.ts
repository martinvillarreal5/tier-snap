export interface TierTable {
  rows: TierTableRow[];
  config: TierTableConfig;
}

export interface Snap {
  title: string;
}

export interface TierTableRow {
  color: string;
  title?: string;
  snaps: Snap[];
}

export interface TierTableConfig {
  rowColor: string;
}
