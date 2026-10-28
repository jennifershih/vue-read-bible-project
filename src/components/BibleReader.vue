<script setup lang="ts">
import { BIBLE_BOOKS, type BibleBook } from '@/data/bible-books'
import { useBibleChapter } from '@/composables/useBibleChapter'

const { book, chapter, chapters, verses, loading, error, selectBook, selectChapter } =
  useBibleChapter()

function onBookChange(event: Event) {
  const id = (event.target as HTMLSelectElement).value
  selectBook(BIBLE_BOOKS.find((b: BibleBook) => b.id === id) ?? null)
}

function onChapterChange(event: Event) {
  void selectChapter(Number((event.target as HTMLSelectElement).value))
}
</script>

<template>
  <section class="reader">
    <div class="pickers">
      <label>
        書卷
        <select data-test="book" :value="book?.id ?? ''" @change="onBookChange">
          <option value="" disabled>請選擇書卷</option>
          <option v-for="b in BIBLE_BOOKS" :key="b.id" :value="b.id">{{ b.name }}</option>
        </select>
      </label>
      <label>
        章
        <select
          data-test="chapter"
          :value="chapter ?? ''"
          :disabled="!book"
          @change="onChapterChange"
        >
          <option value="" disabled>請選擇章</option>
          <option v-for="c in chapters" :key="c" :value="c">第 {{ c }} 章</option>
        </select>
      </label>
    </div>

    <p v-if="loading" class="status" data-test="loading">載入中…</p>
    <p v-else-if="error" class="status error" data-test="error">經文載入失敗，請稍後再試。</p>
    <article v-else-if="verses.length" class="passage" data-test="passage">
      <h2>{{ book?.name }} 第 {{ chapter }} 章</h2>
      <p v-for="v in verses" :key="v.verse">
        <sup>{{ v.verse }}</sup>{{ v.text }}
      </p>
    </article>
    <p v-else class="status">選擇書卷和章後，就可以開始閱讀和合本經文。</p>
  </section>
</template>

<style scoped>
.pickers {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

label {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.9rem;
  color: var(--muted);
}

select {
  min-width: 10rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--border);
  border-radius: 6px;
  background: var(--surface);
  color: var(--text);
  font-size: 1rem;
}

.passage {
  line-height: 1.9;
  font-size: 1.1rem;
}

.passage h2 {
  margin: 0 0 1rem;
  font-size: 1.25rem;
}

.passage p {
  margin: 0 0 0.5rem;
}

sup {
  margin-right: 0.25rem;
  color: var(--accent);
  font-size: 0.7em;
}

.status {
  color: var(--muted);
}

.error {
  color: #c62828;
}
</style>
