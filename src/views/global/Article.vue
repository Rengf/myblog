<template>
  <div class="article" v-if="article">
    <div class="articleTitle">{{article.article_title}}</div>
    <div class="articleConent">
      <GArticle :article="article.article_content"></GArticle>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import GArticle from "../../components/public/makehtml";

export default {
  data() {
    return {};
  },
  mounted() {
    var data = { id: this.$route.query.id };
    this.getArticle(data);
  },
  watch: {
    $route: {
      handler() {
        var data = { id: this.$route.query.id };
        this.getArticle(data);
      },
      deep: true
    }
  },
  computed: {
    ...mapGetters(["article"])
  },
  methods: {
    getArticle(data) {
      this.$store.dispatch("getArticle", data);
    },
    makehtml() {}
  },
  components: {
    GArticle
  }
};
</script>

<style scoped lang="less">
.article {
  width: 95%;
  margin: 5px auto;
  border: 1px solid #eee;
  padding: 5px;
}
</style>
