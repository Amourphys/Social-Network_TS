export type MessageType = {//типизируем типы данных которые приходят в store
  id: number
  message: string
}
export type DialogType = {
  id: number
  name: string
}
export type PostType = {
  id: number
  message: string
  likesCount: number
}
export type ProfilePageType = {
  posts: Array<PostType>
  newPostText: string
}
export type DialogPageType = {
  dialogs: Array<DialogType>
  messages: Array<MessageType>
  newMessageBody: string
}
export type FriendsType = {
  id: number
  name: string
}
export type SidebarType = {
  friends: Array<FriendsType>
}
export type RootStoreType = {
  profilePage: ProfilePageType
  dialogsPage: DialogPageType
  sidebar: SidebarType
}
export type StoreType = {
  _state: RootStoreType
  addPost: () => void
  onPostChange: (newPost: string) => void
  rerenderEntireTree: (state: RootStoreType) => void
  subscribe: (observer: (state: RootStoreType) => void) => void
  getState: () => RootStoreType
}

const store: StoreType = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: 'It\'s my first post', likesCount: 14 }
      ],
      newPostText: 'it-kamasutra'
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Andrey' },
        { id: 2, name: 'Alex' },
        { id: 3, name: 'Sergey' },
        { id: 4, name: 'Juriy' },
        { id: 5, name: 'Bonifacij' },
        { id: 6, name: 'Sasha' },
        { id: 7, name: 'Tolya' }
      ],
      messages: [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'Hello' },
        { id: 3, message: 'Good by' },
        { id: 4, message: 'IT' },
        { id: 5, message: 'How are you' },
        { id: 6, message: 'What is your name?' },
        { id: 7, message: 'I am dont now' }
      ],
      newMessageBody: ''
    },
    sidebar: {
      friends: [
        { id: 1, name: 'Vasya' },
        { id: 2, name: 'Grisha' },
        { id: 3, name: 'Pasha' }
      ]
    },
  },
  addPost() {//создаем ф-ию для добавления постов в store,
    const newPost: PostType = {//создаем новый объект и типизируем его
      id: new Date().getTime(),//инициализируем новый объект, который придет в profilePage.posts
      message: this._state.profilePage.newPostText,
      likesCount: 0
    }
    this._state.profilePage.posts.push(newPost)//ф-ия запушит новый объект в profilePage.posts
    this._state.profilePage.newPostText = ''
    this.rerenderEntireTree(this._state)
  },
  onPostChange(newPost: string) {
    this._state.profilePage.newPostText = newPost;
    this.rerenderEntireTree(this._state)
  },
  rerenderEntireTree(state: RootStoreType) {
    console.log('hello');
  },
  subscribe(observer: (state: RootStoreType) => void) {
    this.rerenderEntireTree = observer
  },
  getState() {
    return this._state
  },
}

export default store;
//window.store = store;