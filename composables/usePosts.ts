export default function usePosts() {

    const { $contentApi } = useNuxtApp();

    const posts = ref([]);
    const isLoading = ref(false);
    const error = ref(null);

    const fetchPosts = async () => {
        isLoading.value = true;
        error.value = null;

        try {
            const { data } = await $contentApi.get("posts/")
            posts.value = data;
        } catch (err: any) {
            error.value = err.message || 'Failed to fetch posts';
        } finally {
            isLoading.value = false;
        }
    };

    onMounted(()=>{
        fetchPosts()
    })
    
    return {
        posts,
        isLoading,
        error,
        fetchPosts,
    };
}
