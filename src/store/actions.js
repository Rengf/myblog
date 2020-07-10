import {
    RECEIVE_USER_INFO,
    RECEIVE_CATEGORY_LIST,
    RECEIVE_ARTICLE_LIST,
    RECEIVE_ARTICLE,
    RECEIVE_NEW_ARTICLE_LIST
} from './mutations-types'

import {
    getUserInfo,
    getCategoryList,
    getArticleList,
    getArticle,
    getNewArticleList
} from './../api/index'
export default {
    async getUserInfo({
        commit
    }, data) {
        const result = await getUserInfo(data);
        if (result.code == 0) {
            const user_info = result.data;
            commit(RECEIVE_USER_INFO, user_info)
        }
    },
    async getCategoryList({
        commit
    }) {
        const result = await getCategoryList();
        if (result.code == 0) {
            const category_list = result.data;
            commit(RECEIVE_CATEGORY_LIST, category_list)
        }
    },
    async getArticleList({
        commit
    }, data) {
        const result = await getArticleList(data);
        if (result.code == 0) {
            const article_list = result.data;
            commit(RECEIVE_ARTICLE_LIST, article_list)
        }
    },
    async getArticle({
        commit
    }, data) {
        const result = await getArticle(data);
        if (result.code == 0) {
            const article = result.data;
            commit(RECEIVE_ARTICLE, article)
        }
    },
    async getNewArticleList({
        commit
    }) {
        const result = await getNewArticleList();
        if (result.code == 0) {
            const new_article_list = result.data.newarticlelist;
            commit(RECEIVE_NEW_ARTICLE_LIST, new_article_list)
        }
    },
}