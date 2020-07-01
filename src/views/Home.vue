<template>
    <div>
        <v-content>
            <h2 class="text-center pt-10 display-1">Welcome in my first App</h2>
            <p class="text-center pt-5 headline font-italic font-weight-light">
                <router-link to="/dist/todos"
                    >Click here to go to App</router-link
                >
            </p>

            <v-list class="technologies text-center text-sm-left">
                <v-subheader>Technologies in this project:</v-subheader>
                <tech-item
                    v-for="tech in technologies"
                    :tech="tech"
                    :key="tech.id"
                />
            </v-list>
        </v-content>
    </div>
</template>
<script>
import { v4 } from 'uuid'
import TechItem from '../components/TechItem'
export default {
    components: {
        TechItem,
    },
    data() {
        return {
            technologies: [
                {
                    name: 'Vue.js',
                    icon: 'vuejs',
                    describe:
                        'Using basic framework functions like a: conditional rendering, loops, props, lifecycle hooks, computed properties, custom events, build-in transitions, etc.',
                },
                {
                    name: 'Vue-cli',
                    icon: 'cli',
                    describe:
                        'Add Vue-cli to this project for hot-reloading, minify, and compile production version.',
                },
                {
                    name: 'Vue-router',
                    icon: 'router',
                    describe:
                        'Create some routes and views to split the content',
                },
                {
                    name: 'Fetch API(Axios)',
                    icon: 'axios',
                    describe:
                        'Getting and handling data from REST API via Axios <a>jsonplaceholder.typicode.com</a>',
                },
                {
                    name: 'Jest(unit testing)',
                    icon: 'test',
                    describe:
                        'Create some Unit tests with snapshots and mocking async methods(axios).',
                },
                {
                    name: 'Local storage',
                    icon: 'storage',
                    describe: 'Write data to and get from Local storage.',
                },
                {
                    name: 'Auto deploying',
                    icon: 'sh',
                    describe:
                        'Write own Shell script file to automate testing, building, and deployment.',
                },
                {
                    name: 'Gulp',
                    icon: 'gulp',
                    describe: 'Creating SVG-sprites',
                },
            ],
        }
    },
    created() {
        this.technologies.map(x => (x.id = v4()))
    },
}
</script>
