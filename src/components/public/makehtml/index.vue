<template>
  <article class="markdown-body" v-html="article_content"></article>
</template>

<script>
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";

export default {
  name: "height",
  props: {
    article: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      article_content: ""
    };
  },
  watch: {
    article: {
      handler(newval) {
        this.makehtml(newval);
      },
      deep: true
    }
  },
  mounted() {
    this.makehtml(this.article);
  },
  methods: {
    makehtml(article) {
      marked.setOptions({
        renderer: new marked.Renderer(),
        highlight: function(code) {
          return hljs.highlightAuto(code).value;
        },
        pedantic: false,
        gfm: true,
        tables: true,
        breaks: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        xhtml: false
      });
      this.article_content = marked(article);
    }
  }
};
</script>

<style scoped>
</style>
