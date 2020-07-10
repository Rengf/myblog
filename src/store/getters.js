export default {
    user_info(state) {
        return state.user_info
    },
    category_list(state) {
        return state.category_list.categorylist
    },
    category_count(state) {
        return state.category_list.count
    },
    article_list(state) {
        return state.article_list.articlelist
    },
    article_count(state) {
        return state.article_list.count
    },
    article(state) {
        return state.article.article
    },
    new_article_list(state) {
        return state.new_article_list
    },
}