export default {
    props: ['txt'],
    template: `
    <div class="email-desc"> 
        <div class="short-text"> 
            <p v-if="!showAllText"> {{ shortText }} </p>
            <p v-else> {{ txt }}  </p>
           
        </div>
    </div>
    `,
    data() {
        return {
            showAllText: false
        }
    },
    methods: {
        toggleShowAll() {
            this.showAllText = !this.showAllText;
        }
    },
    computed: {

        shortText() {
            if (!this.isLongText) return this.txt;
            return this.txt.slice(0, 50) + '...';
        },
        isLongText() {
            return (this.txt.length > 50)
        }
    }
};