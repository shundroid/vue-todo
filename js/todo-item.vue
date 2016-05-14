<template>
  <li>
    {{ text }}
    <button @click="clickRemoveButtonCallback(todoIndex)">×</button>
  </li>
</template>

<script>
  export default {
    props: {
      text: String,
      todoIndex: Number,
      clickRemoveButtonCallback: Function
    }
  };
</script>
