<script setup lang="ts">
import BibleReader from '@/components/BibleReader.vue'
</script>

<template>
  <header class="header">
    <img alt="" class="logo" src="@/assets/bible.svg" width="56" height="56" />
    <div>
      <h1>Read Bible Together</h1>
      <p>一起讀聖經 · 和合本</p>
    </div>
  </header>

  <main>
    <BibleReader />
  </main>

  <footer class="footer">
    經文來源：<a href="https://bible-api.com" target="_blank" rel="noopener">bible-api.com</a>
  </footer>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

h1 {
  margin: 0;
  font-size: 1.6rem;
}

.header p {
  margin: 0;
  color: var(--muted);
}

.footer {
  margin-top: 3rem;
  font-size: 0.85rem;
  color: var(--muted);
}
</style>
