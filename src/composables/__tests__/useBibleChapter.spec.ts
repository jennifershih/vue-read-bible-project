import { afterEach, describe, expect, it, vi } from 'vitest'
import { useBibleChapter } from '../useBibleChapter'
import { BIBLE_BOOKS } from '@/data/bible-books'

const john = BIBLE_BOOKS.find((b) => b.id === 'John')!

function mockFetch(body: unknown, ok = true) {
  const fn = vi.fn().mockResolvedValue({ ok, status: ok ? 200 : 500, json: async () => body })
  vi.stubGlobal('fetch', fn)
  return fn
}

describe('useBibleChapter', () => {
  afterEach(() => vi.unstubAllGlobals())

  it('has all 66 books', () => {
    expect(BIBLE_BOOKS).toHaveLength(66)
  })

  it('lists chapters for the selected book and resets the chapter', () => {
    const state = useBibleChapter()
    state.selectBook(john)
    expect(state.chapters.value).toHaveLength(21)
    state.chapter.value = 3
    state.selectBook(BIBLE_BOOKS[0]!)
    expect(state.chapter.value).toBeNull()
  })

  it('loads the chapter in the Chinese Union Version', async () => {
    const fetchMock = mockFetch({ verses: [{ verse: 16, text: '神愛世人\n' }] })
    const state = useBibleChapter()
    state.selectBook(john)
    await state.selectChapter(3)

    expect(fetchMock).toHaveBeenCalledWith('https://bible-api.com/John%203?translation=cuv')
    expect(state.verses.value).toEqual([{ verse: 16, text: '神愛世人' }])
    expect(state.loading.value).toBe(false)
  })

  it('shows an error when the API fails', async () => {
    mockFetch({}, false)
    const state = useBibleChapter()
    state.selectBook(john)
    await state.selectChapter(1)
    expect(state.error.value).toBe(true)
    expect(state.verses.value).toEqual([])
  })
})
