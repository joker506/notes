import Vue from "vue";
import Vuex, { Store } from "vuex";
import notes from "@/store/notes";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    notes
  }
});
Store.notes;
