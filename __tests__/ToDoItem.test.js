import { mount} from '@vue/test-utils'
import ToDoItem from '../src/components/ToDoItem.vue'
import Vue from 'vue'
import Vuetify from 'vuetify';
Vue.use(Vuetify)

describe('ToDoItem', () => {

    it('renders a div', () => {
        const wrapper = mount(ToDoItem, {
            propsData: {
                todo: {
                    id: 1,
                    isCompleted: true,
                    text: "Some text",
                }
            }
        })
        expect(wrapper.exists('div')).toBe(true)
    })
})