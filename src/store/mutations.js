import {
    RECEIVE_USER_INFO,
    RECEIVE_CATEGORY_LIST,
    RECEIVE_ARTICLE_LIST,
    RECEIVE_ARTICLE,
    RECEIVE_NEW_ARTICLE_LIST
} from './mutations-types'

export default {
    [RECEIVE_USER_INFO](state, user_info) {
        state.user_info = user_info
    },
    [RECEIVE_CATEGORY_LIST](state, category_list) {
        state.category_list = category_list
    },
    [RECEIVE_ARTICLE_LIST](state, article_list) {
        state.article_list = article_list
    },
    [RECEIVE_ARTICLE](state, article) {
        state.article = null;
        state.article = article
    },
    [RECEIVE_NEW_ARTICLE_LIST](state, new_article_list) {
        state.new_article_list = new_article_list
    },
}