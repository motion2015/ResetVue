<template>
  <Subpage :pagetit="'자료실'">
    <div class="referencepage">
      <div class="subpageguide">
        도서와 관련된 추가 자료를 다운로드할 수 있습니다.
      </div>
    </div>
  </Subpage>
</template>

<script>
import Subpage from "@/layout/components/Subpage.vue";
export default {
  components: {
    Subpage,
  },
};
</script>
