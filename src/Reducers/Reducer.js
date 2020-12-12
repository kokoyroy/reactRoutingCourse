


const initState = {
    posts: [
        { id: '1', body: 'picachu! pica pica , pica picachu! picapica picachu! pica pica , pica picachu! picapica picachu! pica pica , pica picachu! picapica picachu! pica pica , pica picachu! picapica picachu! pica pica , pica picachu! picapica ', title: 'Picachu says' },
        { id: '2', body: 'While Bulbasaur has been a recurring character for many years, the Pokémon television show has always avoided explicitly mentioning the character’s gender', title: 'Bulbasaur' },
        { id: '3', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A assumenda laudantium laboriosam. Omnis voluptates natus maiores fugiat dolor quas saepe, repellat quisquam, nesciunt aperiam cum quam quia nisi, autem molestiae!', title: 'Squirtle' }
    ]
}

export default function Reducer(state = initState, action) {
    console.log(state);
    console.log(action);
    if (action.type === 'DELETE_POST') {
        const newPosts = state.posts.filter((post) => {
            return post.id !== action.id
        })
        return {
            ...state,
            posts: newPosts
        }
    }
    return (
        state
    )
}
