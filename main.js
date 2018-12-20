const submissionComponent = {
    template: 
    ` <div style="display: flex; width: 100%">
    <figure class="media-left">
    <i class="fas fa-book"></i>
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
        <strong class="has-text-info">{{ submission.votes }}</strong>
      </span>
    </div>
  </div>`
    
    ,
    props: ['submission', 'submissions'],
  methods: {
    upvote(submissionId) {
      const submission = this.submissions.find(
        submission => submission.id === submissionId
      );
      submission.votes++;
    }
  }
};

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