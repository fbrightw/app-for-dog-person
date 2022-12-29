import history from "./history";

const DICTIONARY = {
  mainList: () => {
    history.push('/')
  },

  likedList: () => {
    history.push('/likedList')
  }
}

export default DICTIONARY;