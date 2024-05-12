export interface TierTable {
  rows: TierTableRow[];
  config: TierTableConfig;
}

export interface TierTableConfig {
  title: string;
  rowColor: string;
  snapColor: string;
}

export interface Item {
  id: string;
  rowId: string;
  title: string;
}

export interface TierTableRow {
  id: string;
  color: string;
  title?: string;
}
