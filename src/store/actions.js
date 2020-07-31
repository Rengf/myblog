import {
    RECEIVE_USER_INFO,
    RECEIVE_USER_LIST,
    RECEIVE_CATEGORY_LIST,
    RECEIVE_ARTICLE_LIST,
    RECEIVE_ARTICLE,
    RECEIVE_CATEGORY,
    RECEIVE_NEW_ARTICLE_LIST
} from './mutations-types'

import {
    getUserInfo,
    getUserList,
    getCategoryList,
    getArticleList,
    getArticle,
    getCategory,
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
    async getUserList({
        commit
    }, data) {
        const result = await getUserList(data);
        if (result.code == 0) {
            const user_list = result.data;
            commit(RECEIVE_USER_LIST, user_list)
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
    async getCategory({
        commit
    }, data) {
        const result = await getCategory(data);
        if (result.code == 0) {
            const category = result.data;
            commit(RECEIVE_CATEGORY, category)
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