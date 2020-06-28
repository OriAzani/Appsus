export default {
    props: ["info"],
    template: `
        <section class="note-video">
        <h2 v-if="info.title">{{info.title}}</h2>
           <iframe width="420" height="315":src="'//www.youtube.com/embed/'+getId">
            </iframe>
            <h2 v-if="info.txt">{{info.txt}}</h2>
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
    computed: {
        getId() {


            const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
            const match = this.videoUrl.match(regExp);
            console.log(match);

            return (match && match[2].length === 11) ?
                match[2] :
                null;
        },
    },
}