export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        this.items = this.items.map(item => {
            switch (item.name) {
                case 'Aged Brie':                                 item = GildedRose.updateBrie(item); break;
                case 'Backstage passes to a TAFKAL80ETC concert': item = GildedRose.updateBackstagePass(item); break;
                case 'Conjured':                                  item = GildedRose.updateConjured(item); break;
                case 'Sulfuras, Hand of Ragnaros': break
                default: item = GildedRose.updateItem(item)
            }
            return item
        })
        return this.items
    }

    static updateBrie(item: Item): Item {
        if      (item.quality >= 50) item.quality = 50
        else if (item.sellIn > 0)    item.quality++
        else                         item.quality += 2

        item.sellIn--
        return item
    }

    static updateBackstagePass(item: Item): Item {
        if      (item.quality >= 50 && item.sellIn != 0) item.quality = 50
        else if (item.sellIn == 0)                       item.quality = 0
        else if (item.sellIn <= 5)                       item.quality += 3
        else if (item.sellIn <= 10)                      item.quality += 2
        else                                             item.quality++

        item.sellIn--
        return item
    }

    static updateConjured(item: Item): Item {
        if      (item.sellIn <= 0 && item.quality >= 4) item.quality -= 4
        else if ( item.quality >= 2)                    item.quality -= 2
        else                                            item.quality = 0

        item.sellIn--
        return item
    }

    static updateItem(item: Item): Item {
        if      (item.sellIn <= 0 && item.quality >= 2) item.quality-=2
        else if (item.quality >= 1)                     item.quality-=1
        else                                            item.quality = 0

        item.sellIn--
        return item
    }
}

