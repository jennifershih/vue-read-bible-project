import { afterEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import BibleReader from '../BibleReader.vue'

describe('BibleReader', () => {
  afterEach(() => vi.unstubAllGlobals())

  it('reads a chapter after picking a book and chapter', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn<typeof fetch>().mockResolvedValue({
        ok: true,
        json: async () => ({ verses: [{ verse: 1, text: '耶和華是我的牧者' }] }),
      } as Response),
    )
    const wrapper = mount(BibleReader)

    expect(wrapper.find('[data-test="chapter"]').attributes('disabled')).toBeDefined()

    await wrapper.find('[data-test="book"]').setValue('Psalms')
    await wrapper.find('[data-test="chapter"]').setValue('23')
    await flushPromises()

    const passage = wrapper.find('[data-test="passage"]')
    expect(passage.text()).toContain('詩篇 第 23 章')
    expect(passage.text()).toContain('耶和華是我的牧者')
  })
})
