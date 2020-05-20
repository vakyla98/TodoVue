<template>
  <v-list-item class="tech-item" ripple>
    <v-row>
      <v-col cols="12" sm="1" class="mr-5 icon-wrapper">
        <svg class="tech-item-icon">
          <use :xlink:href="require(`../assets/sprite.svg`) + '#' +tech.icon" />
        </svg>
      </v-col>
      <v-col>
        <v-list-item-title class="headline">{{tech.name}}</v-list-item-title>
        <v-list-item-content class="subtitle-2" v-html="tech.describe"></v-list-item-content>
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
<style lang="scss">
.tech {
  width: 100%;
  margin: 50px auto;
  padding: 10px;
  max-width: 900px;
  &-item {
    &-icon {
      margin: 10px;
      width: 40px;
      height: 40px;
      fill: white;
    }
  }
}
@media screen and (max-width: 599px) {
  .tech {
    .icon-wrapper {
      padding: 0;
      margin-bottom: -10px;
    }
    text-align: center;
    &-item {
      &-icon {
        width: 30px;
        height: 30px;
        fill: white;
      }
    }
  }
}
</style>