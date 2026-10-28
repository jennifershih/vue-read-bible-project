import { computed, ref, shallowRef } from 'vue'
import type { BibleBook } from '@/data/bible-books'

export interface Verse {
  verse: number
  text: string
}

interface ChapterResponse {
  verses: { verse: number; text: string }[]
}

const API_URL = 'https://bible-api.com'

/** Load a chapter in the Chinese Union Version (和合本) from bible-api.com. */
export function useBibleChapter() {
  const book = shallowRef<BibleBook | null>(null)
  const chapter = ref<number | null>(null)
  const verses = ref<Verse[]>([])
  const loading = ref(false)
  const error = ref(false)

  const chapters = computed(() =>
    book.value ? Array.from({ length: book.value.chapters }, (_, i) => i + 1) : [],
  )

  let latestRequest = 0

  function selectBook(next: BibleBook | null) {
    book.value = next
    chapter.value = null
    verses.value = []
    error.value = false
  }

  async function selectChapter(next: number) {
    chapter.value = next
    if (!book.value) return

    const requestId = ++latestRequest
    loading.value = true
    error.value = false
    try {
      const reference = encodeURIComponent(`${book.value.id} ${next}`)
      const res = await fetch(`${API_URL}/${reference}?translation=cuv`)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = (await res.json()) as ChapterResponse
      // Ignore responses from an older selection that finished late.
      if (requestId !== latestRequest) return
      verses.value = data.verses.map((v) => ({ verse: v.verse, text: v.text.trim() }))
    } catch {
      if (requestId !== latestRequest) return
      verses.value = []
      error.value = true
    } finally {
      if (requestId === latestRequest) loading.value = false
    }
  }

  return { book, chapter, chapters, verses, loading, error, selectBook, selectChapter }
}
