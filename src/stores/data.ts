import { defineStore } from 'pinia';
import type { Ref, WritableComputedRef } from 'vue';
import { ref, computed } from 'vue';

interface Item {
  name: string;
  value: number;
}
export interface MenuState {
  data: Ref<Item[]>;
  filterData: WritableComputedRef<Item[]>;
  searchKey: Ref<string>;
}

export const useDataStore = defineStore('menu', {
  state: (): MenuState => {
    // !start  make this out of useDataStore will work fine.
    const data = ref<Item[]>([]);
    const searchKey = ref('');
    const filterData = computed({
      get() {
        return data.value.filter(elem => elem.name.indexOf(searchKey.value) !== -1);
      },
      set(val: Item[]) {
        data.value = val;
      }
    });
    // !end

    return {
      data,
      searchKey,
      filterData
    };
  },
  getters: {
  },
  actions: {
    getDataList() {
      const arr = [];
      for (let index = 0; index < 10; index++) {
        arr.push({
          name: `test${index}`,
          value: index
        })
      }
      this.data = arr;
    }
  }
});
