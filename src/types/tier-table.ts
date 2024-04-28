export interface TierTable {
  rows: TierTableRow[];
  config: TierTableConfig;
}

export interface TierTableRow {
  color: string;
  title?: string;
  order: number;
}

export interface TierTableConfig {
  rowColor: string;
}
