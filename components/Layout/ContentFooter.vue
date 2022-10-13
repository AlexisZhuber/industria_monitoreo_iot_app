<template>
  <footer class="footer">
    <div class="container-fluid">
      <div class="copyright">
        &copy; {{ year }}, made with <i class="tim-icons icon-heart-2"></i> by
        <a href="https://www.facebook.com/academiatecnologia" rel="noopener" target="_blank">Condulimex</a>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
