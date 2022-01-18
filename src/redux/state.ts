type MessageType = {                 //типизируем типы данных которые приходят в store
    id: number
    message: string
}
type DialogType = {
    id: number
    name: string
}
type PostType = {
    id: number
    message: string
    likesCount: number
}
type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}
type SidebarType = {}
type RootStoreType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}

let store: RootStoreType = {
    
    profilePage: {
      posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 14}
      ],
      newPostText: 'it-kamasutra'
    },
    dialogsPage: {
      dialogs: [
        {id: 1, name: 'Andrey'},
        {id: 2, name: 'Alex'},
        {id: 3, name: 'Sergey'},
        {id: 4, name: 'Juriy'},
        {id: 5, name: 'Bonifacij'},
        {id: 6, name: 'Sasha'},
        {id: 7, name: 'Tolya'}
      ],
      messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'Good by'},
        {id: 4, message: 'IT'},
        {id: 5, message: 'How are you'},
        {id: 6, message: 'What is your name?'},
        {id: 7, message: 'I am dont now'}
      ],
      newMessageBody: ''
    },
    sidebar: {
      friends: [
        {id: 1, name: 'Vasya'},
        {id: 2, name: 'Grisha'},
        {id: 3, name: 'Pasha'}
      ]
    }
  
}

export default store;