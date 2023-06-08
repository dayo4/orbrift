interface Posts {
    posts: [Object] | any
    prevPost: Object | any
    nextPost: Object | any
}
import { defineStore } from "pinia"
import { $contentApi } from "~/addons/utils/Axios"

export const usePosts = defineStore('posts', {
    state: ():Posts => ({
        posts: [],
        prevPost: null,
        nextPost: null,
    }),
    actions: {
        async fetchPosts() {
            const {data} = await $contentApi.get("posts/")
            this.setPosts(data)
            return data
        },
        async fetchPrevPost({ date, id }) {
            const index = this.posts.findIndex(post => {
                return post.id === id
            })
            if (index && this.posts[index + 1]) {
                this.setPrevPost(this.posts[index + 1])
            }
            // else {
            //     try {
            //         const {data} = await $contentApi.get("posts/?before=" + date + "&per_page=1")
            //         this.setPrevPost(data[0])
            //     }
            //     catch ({ response }) { }
            // }
    
        },
        async fetchNextPost({ date, id }) {
            const index = this.posts.findIndex(post => {
                return post.id === id
            })
            if (index && this.posts[index - 1]) {
                this.setNextPost(this.posts[index - 1])
            }
            // else {
            //     try {
            //         const {data} = await $contentApi.get("posts/?after=" + date + "&orderby=date&order=asc&per_page=1")
            //         this.setNextPost(data[0])
            //     }
            //     catch ({ response }) { }
            // }
        },
        setPosts(value: [Object]|any) {
            this.posts = value
        },
        setPrevPost(value: Object) {
            this.prevPost = value
        },
        setNextPost(value: Object) {
            this.nextPost = value
        }
    }
})
