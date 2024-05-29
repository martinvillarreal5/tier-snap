//Static class
export abstract class Dimensions {
  //TODO handle responsive values
  static readonly ITEMS_PER_ROW = 7;
  static readonly ITEM_SIZE = 6.5;
  static readonly ROW_PAD = 0.25;
  static readonly HEAD_BASE_SIZE = this.ITEM_SIZE + this.ROW_PAD * 2;
  static readonly ACTIONS_WIDTH = 2.5;

  static calculateRowHeight = (totalRowItems: number): number => {
    //If no items: return row head base height
    if (totalRowItems == 0) return this.HEAD_BASE_SIZE;

    //Calculate number of rows based on total items
    const subRowsNumber = Math.ceil(totalRowItems / this.ITEMS_PER_ROW);

    //If 1 row: return row head base height
    if (subRowsNumber == 1) return this.HEAD_BASE_SIZE;

    return (
      subRowsNumber * this.ITEM_SIZE + // h of combined (sub)rows
      subRowsNumber * this.ROW_PAD + // h of combined (sub)rows padding
      this.ROW_PAD //h of ending padding
    );
  };

  //TODO use in app
  static calculateRowWidth = (): number => {
    return (
      this.HEAD_BASE_SIZE + // w of row head
      this.calculateRowItemsWidth() + // total w of row items
      this.ACTIONS_WIDTH
    );
  };

  //TODO use in app
  static calculateRowItemsWidth = (): number => {
    return (
      this.ITEM_SIZE * this.ITEMS_PER_ROW + // w of combined items per (sub)row
      this.ROW_PAD * this.ITEMS_PER_ROW + // w of combined items padding per (sub)row
      this.ROW_PAD //w of ending padding
    );
  };

  private constructor() {
    //hidden
  }
}
