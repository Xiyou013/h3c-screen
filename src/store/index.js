import { createStore } from 'vuex'
import Test from './modules/test'

const store = createStore({
    modules: {
        Test
    }
})

export default store