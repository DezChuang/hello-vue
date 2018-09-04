const DezBanner = {
  state: {
    slideIndex: 0,
    direction: 1, // 1: 下一張; -1: 前一張
    mouseEnter: 1 // 1: 滑鼠進入; -1: 滑鼠離開
  },
  mutations: {
    'dezBanner/UPDATE_SLIDE_INDEX': (state, data) => {
      state.slideIndex = data
    },
    'dezBanner/UPDATE_DIRECTION': (state, data) => {
      state.direction = data
    },
    'dezBanner/UPDATE_MOUSE_ENTER': (state, data) => {
      state.mouseEnter = data
    }
  },
  actions: {}
}

export default DezBanner
