<template>
    <v-list-item class="tech-item" ripple>
        <v-row>
            <v-col cols="12" sm="1" class="mr-5 icon-wrapper">
                <svg class="tech-item__icon">
                    <use
                        :xlink:href="
                            require(`../assets/sprite.svg`) + '#' + tech.icon
                        "
                    />
                </svg>
            </v-col>
            <v-col>
                <v-list-item-title class="headline">
                    {{ tech.name }}
                </v-list-item-title>
                <p
                    class="subtitle-2"
                    v-html="tech.describe"
                ></p>
            </v-col>
        </v-row>
    </v-list-item>
</template>
<script>
export default {
    props: {
        tech: {
            type: Object,
            required: true,
        },
    },
}
</script>
