function cNotes(arr, filter) {
  let _arr = [];
  arr.map(n => {
    if (
      n.text.toLowerCase().includes(filter.toLowerCase()) ||
      n.tag.toLowerCase().includes(filter.toLowerCase())
    ) {
      _arr.push(n);
    }
  });
  return _arr;
}

const notes = {
  namespaced: true,
  state: {
    notes: [],
    topNote: [],
    filter: ""
  },
  mutations: {
    SET_NOTE(state, payload) {
      state.notes = payload;
    },
    TOP_NOTE(state, payload) {
      state.topNote = payload;
    },
    FILTER_NOTE(state, payload) {
      state.filter = payload;
      console.log(state.filter);
    }
  },
  getters: {
    cNotes(state) {
      if (state.notes.length) {
        return cNotes(state.notes, state.filter);
      }
    }
  },
  actions: {
    setNote(context, pay) {
      setTimeout(() => {
        context.commit("SET_NOTE", pay);
      }, 1000);
    },
    topNote(context, pay) {
      setTimeout(() => {
        context.commit("TOP_NOTE", pay);
      }, 500);
    }
  }
};
export default notes;
