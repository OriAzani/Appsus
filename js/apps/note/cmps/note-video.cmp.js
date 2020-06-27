export default {
    props: ["info"],
    template: `
        <section class="note video">


           <iframe width="420" height="315":src="videoUrl">
            </iframe>
        </section>
        `,
    data() {
        return {
            videoUrl: null,
        }
    },
    created() {
        this.videoUrl = this.info.url
        console.log(this.videoUrl);
    },

}