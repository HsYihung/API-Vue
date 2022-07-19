import store from "./50_vuex_發出指令的actions"

Vuex裡面有四個主要的元素:
 - state : 儲存狀態
 - mutations : 變更狀態
 - getters : 取得狀態
 - actions : 發出指令

 ★ modules

    如果我們將整個網站內的狀態全部在 store 內的 state 集中管理，
    當我們的網站越來越龐大...
    
    //store.js
    import Vue from 'vue';
    import Vuex from 'vuex';
    Vue.use(Vuex);

    const store = new Vuex.Store({ 
        state: {
            count: 0,
            tasks: [],
            shoppingCart: {},
            username: '',
            id: '',
            products: [],
            notifications: [],
        },
        mutations: {
            addCount(state){
                state.count += 1;

                Vue.set(state, 'loading');
                state.loading = true;  //如果state裡面沒有指定屬性，可以在此指定
            },
        },
    });
    export default store;
    ----------------------
    當 store 裡面越來越多雜七雜八的東西的時候, Vuex 可以用 modules 解決

    例如定義一個 tasks 物件，這個物件裡面的結構很像 store 裡面的物件結構，有自己的 state,mutations,getters,actions

    const tasks = {
        namespaced: true,
        state: {
            list: [],
            temp: '',
        },
        mutations: {
            setList(state, payload){
                state.list......
            }
        },
        getters: {
            getListLength(){},
        },
        actions: {
            fetchList(context){},
            commit('setList',[2,4,6,8,10]),  // commit 自己家的 mutation
        },
    }

    const member = {
        namespaced: true,
        state: {
            username: '',
            id: '',
            notifications: [],
        },
        mutations: {
            setList(state){}
        },
        getters: {},
        actions: {
            // fetchList(context){
            //     const {commit, dispatch, state, getters, rootState, rootGetters} = context
            // }
            fetchList({commit}){
                1. 如果只要 commit mutation 就好了
                commit('tasks/setList')

                2. 如果有 payload
                commit('tasks/setList',[2,4,6,8,10])

                3. 可以有第三個屬性
                commit('tasks/setList',[2,4,6,8,10], {root: true})
                若我們從 store 的 root --> mutation --> setList

                commit('member/setList',[2,4,6,8,10], {root: true})

                commit('setList',[2,4,6,8,10])  就會 commit 自己模組內的 mutation
    
            }
        },
    }

    我們可以將原本存在 state 裡面的資料分別拆成不同的 store 物件
    讓每個物件都有自己的 state, mutations, getters, actions
    原本的 store 怎麼寫?

    const store = new Vuex.Store({ 
        modules: {
            // tasks: tasks,
            // member: member,

            tasks,
            member,
        },
        state: {},
        mutations: {},
        getters: {},
        actions: {},
    })

    [使用 state]

    如果要取得 modules --> tasks --> list 要怎麼做? 要使用 computed
    在我們使用 modules 時，tasks 和 member 的 state
     - store --> state --> tasks
     - store --> state --> member

    // App.vue
    <script>
        export default {
            computed: {
                useTodoList(){
                    return this.$store.state.tasks.list
                }
            },
        }
    </script>

    [使用 mutations]: 舉 tasks 模組為例
    
    setList(state, payload){  // 這裡的 state 是 tasks 裡面的 state
        state.list......
    }

    [使用 getters]: 舉 tasks 模組為例

    getListLength(state, getters, rootState, rootGetters){},
     - state: tasks --> state
     - getters: tasks --> getters
     - rootState: store --> state
     - rootGetters: store --> getters

    [case study]: 在 tasks 裡面想去存取 member 裡面的 state 資料，就可以透過 rootState

    getListLength(state, getters, rootState, rootGetters){
        rootState.member.username
    },

    [使用 actions]: 舉 tasks 模組為例
    fetchList(context){}
    裡面的 context 和 store 不同，裡面可能有 commit, dispatch, state, getters, rootState, rootGetters

    可以這樣寫 ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓
    fetchList(commit, dispatch, state, getters, rootState, rootGetters){}

    也可以這樣寫 ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓
    fetchList(context){
        const {commit, dispatch, state, getters, rootState, rootGetters} = context
    }

    [case study] 如果要在 actions 存取 state

    fetchList(commit, dispatch, state, getters, rootState, rootGetters){
        console.log(state);         // 存取自己的
        console.log(rootState);     // 存取別人的
    }

    fetchList(context){} 傳進來的參數稱之為 context 而不是使用 store?
    因為如果把 store 帶進來，可以有 commit, dispatch, state, getters 
                            但不會有 rootState, rootGetters


    使用 modules 之後，裡面的 actions 和 mutations 的名字可以共用，像是 fetchList(){} 

    若是 tasks 和 member 的 actions 裡都有 fetchList(){}
    // App.vue
    <script>
        export default {
            computed: {
                useTodoList(){
                    return this.$store.state.tasks.list
                }
            },
            mounted: {
                this.$store.dispatch('fetchList')

                因為兩個模組的 actions 裡面有同名的 fetchList，所以在執行以上的時候，兩個都會執行。

                如果不想要兩個都執行，可以採用
                1. 將名字取成不同: fetchTasksList, fetchMemberList

                2. 名字相同，可以在 tasks 和 member 個別加上 namespaced: true
                    this.$store.dispatch('tasks/fetchList')  // 『tasks/』前綴字
                    this.$store.dispatch('member/fetchList')
            },
        }
    </script>

    前綴字還會用在一個地方，
    例如模組 member --> actions --> fetchList 會 commit 另一個模組 tasks --> mutations --> setList
    移到模組 member --> actions --> fetchList 去寫

    
