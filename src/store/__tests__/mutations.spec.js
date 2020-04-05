import mutations from '../mutations'

describe('mutations', () => {
  test('setItems sets state.items to items', () => {
    const items = [{ id: 1 }, { id: 2 }] //
    const state = {
      items: [],
    }
    mutations.SET_ITEMS(state, { items })
    expect(state.items).toBe(items)
  })
})
