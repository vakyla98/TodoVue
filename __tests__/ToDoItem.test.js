import { mount } from '@vue/test-utils'
import ToDoItem from '../src/components/ToDoItem.vue'

import Vue from 'vue'
import Vuetify from 'vuetify';
Vue.use(Vuetify)

const todo = {
    id: 1,
    isCompleted: true,
    text: "Some text",
}

describe('ToDoItem', () => {
    it('renders a div', () => {
        const item = mount(ToDoItem, {
            propsData: { todo },
        })
        expect(item.exists('div')).toBe(true)
    })
    it('emit state changing', () => {
        const item = mount(ToDoItem, {
            propsData: { todo },
        })
        let checkbox = item.find('.checkbox input')
        checkbox.trigger('change')
        expect(item.emitted().toogleState).toBeTruthy()
    })
})
