export default {
    template: `
        <section>
            <label>
                {{info.label}}
                <input type="text" v-model="val" @change="reportVal" :list="listId" />
            </label>  
        </section>
        `,
    props: ["info"],
    data() {
        return {
            val: ""
        };
    },
    methods: {
        reportVal() {
            this.$emit("setVal", this.val);
        }
    },
    computed: {
        listId() {
            return "list" + this._uid;
        }
    }
};