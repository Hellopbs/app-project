<template>
  <div>
    <TypeNav />
    <ListContainer />
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Brand></Brand>
  </div>

</template>

<script>
import ListContainer from '@/pages/Home/ListContainer'
import Recommend from '@/pages/Home/Recommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'
export default {
  data() {
    return {
    };
  },
  components: {
    ListContainer,Recommend,Rank,Like,Floor,Brand
  },
  props: {},
  computed: {},
  methods: {},
  created() { },
  mounted() { }
};
</script>
<style>

</style>