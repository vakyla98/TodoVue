import { mount } from '@vue/test-utils'
import ToDoItem from '../src/components/ToDoItem.vue'

import Vuex from 'vuex'
import Vue from 'vue'

import Vuetify from 'vuetify';
Vue.use(Vuetify, Vuex)

describe('ToDoItem', () => {

    it('renders a div', () => {
        const item = mount(ToDoItem, {
            propsData: {
                todo: {
                    id: 1,
                    isCompleted: true,
                    text: "Some text",
                }
            }
        })
        expect(item.exists('div')).toBe(true)
    })
    it('trigger delete', () => {
        const item = mount(ToDoItem, {
            propsData: {
                todo: {
                    id: 1,
                    isCompleted: true,
                    text: "Some text",
                }
            }
        })
        const delBtn = item.find('.del-btn')   
        delBtn.trigger('click')
        expect(item.exists()).toBeTruthy()
})
})