<template>
    <div class="todolist__input">
        <input type="text" v-model="text">
        <button @click="addHandler">Add</button>
    </div>
</template>

<script>

export default {
  data() {
    return {
        text: ""
    };
  },
  methods:{
      addHandler(){
          this.$emit('add',this.text);
          this.text = '';
      }
  }
}
</script>

<style>
</style>