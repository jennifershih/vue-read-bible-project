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
    This project is an Angular-based web application that allows users to easily browse and read
    bible verses, as well as get personalized verse recommendations based on their current mood via
    openAI API.

    <h3>Features</h3>
    1. Browse and read bible verses by book and chapter.<br />
    2. Get personalized verse recommendations based on your current mood.<br />
    3. Includes comprehensive unit tests to ensure code quality.<br />
  </WelcomeItem>
</template>

<script lang="ts">
export default {}
</script>
