<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Resume</template>

    click here to see
    <a
      href="https://jennifer-shih.notion.site/6cf8bc38c8ae4da8ad57708b39399505"
      target="_blank"
      rel="noopener"
      >my resume</a
    >
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Introduce read bible project</template>

    <h3>About project</h3>
    This project is an Vue-based web application that allows users to easily browse and read bible
    verses.

    <h3>Features</h3>
    1. Browse and read bible verses by book and chapter.<br />
  </WelcomeItem>
</template>

<script lang="ts">
export default {}
</script>
