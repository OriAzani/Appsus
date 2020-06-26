export default {
  template: `
        <section class="email-filter">
            <!-- <h2 @click="$emit('click')">Search!</h2> -->
           
            <input type="text" placeholder="🔍 Search "  v-model="filterBy.searchStr" @input="emitFilter"/> 
            
            <select v-model="filterBy.boxToSearch" @change="emitFilter">
            <option disabled value="">All</option>           
            <option>Read</option>
            <option>UnRead</option>
    
            </select>
        </section>
    `,
  data() {
    return {
      filterBy: {
        searchStr: "",
        boxToSearch: "",
      },
    };
  },
  methods: {
    emitFilter() {
      this.$emit("filter", this.filterBy);

    },
  },
};
