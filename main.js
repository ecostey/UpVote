const submissionComponent = {
    template: 
        `<div style="display: flex; width: 100%">
            <figure class="media-left">
                <div class="coverSpace">
                    <img class="cover"
                        v-bind:src="submission.img">
                </div>
            </figure>
            <div class="media-content">
                <div class="content">
                    <p>
                        <strong>
                            <a v-bind:href="submission.url" class="has-text-info">
                                {{ submission.title }}
                            </a>
                            <span class="tag is-small">#{{ submission.id }}</span>
                        </strong>
                    <br>
                        {{ submission.description }}
                    <br>
                        <small class="is-size-7">
                            Author: {{ submission.author }}
                        </small>
                    </p>
                </div>
            </div>
            <div class="media-right">
                <span class="icon is-small" v-on:click="upvote(submission.id)">
                    <i class="fa fa-chevron-up"></i>
                </span>
                <strong class="has-text-info">
                    {{ submission.votes }}
                </strong>
                <span class="icon is-small" v-on:click="downvote(submission.id)">
                    <i class="fa fa-chevron-down"></i>
                </span>
            </div>
        </div>`,
    props: ['submission', 'submissions'],
    methods: {
        upvote(submissionId) {
            let submission = this.submissions.find(
                submission => submission.id === submissionId
        );
        submission.votes++;
        },
        downvote(submissionId) {
            let submission = this.submissions.find(
                submission => submission.id === submissionId
            );
            submission.votes--;
        }
    }
};

// Create new vue and seed the data from seed.js.
// Sort the data by submission.votes
new Vue({
    el: '#app',
    data: {
        submissions: Seed.submissions
    },
    computed: {
        sortedSubmissions() {
            return this.submissions.sort((a, b) => {
                return b.votes - a.votes
            });
        }
    },
    components: {
        'submission-component': submissionComponent
    },
});

//Tutorial From: Hassan Djirdeh. “Fullstack Vue.js.”