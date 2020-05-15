import { mount } from '@vue/test-utils'
import ToDoItem from '../components/ToDoItem.vue'

import Vue from 'vue'
import Vuetify from 'vuetify';
Vue.use(Vuetify)

const todo = {
    id: 1,
    isCompleted: true,
    text: "Some text",
}

describe('ToDoItem', () => {
    let item
    beforeEach(() => {
        item = mount(ToDoItem, {
            propsData: { todo },
        })
    });

    it('render correctly', () => {
        expect(item.element).toMatchSnapshot()
    })

    it('State checkbox emit state changing', () => {
        let checkbox = item.find('.checkbox input')
        checkbox.trigger('change')
        expect(item.emitted().toogleState).toBeTruthy()
    })

    it('Delete button emit delete handler', () => {
        let delBtn = item.find('.del-btn')
        delBtn.trigger('click')
        expect(item.emitted().delTodo).toBeTruthy()
    })

    it('Edit button emit edit handler', () => {
        let delBtn = item.find('.edit-btn')
        delBtn.trigger('click')
        expect(item.emitted().editTodo).toBeTruthy()
    })
})
