<template>
    <div></div>
</template>

<script>
export default {
  name: 'BlogPost',
  created() {
      this.$router.push(`/writing/${this.$route.params.id}`)
  }
}
</script>
