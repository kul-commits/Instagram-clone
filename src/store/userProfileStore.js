import { create } from "zustand";

const useUserProfileStore= create((set)=>({
    userProfile:null,
    setUserProfile:(userProfile) =>set({userProfile}),

    //this is used to update the number of posts in the profilepage
    addPost:(post) => set(state => ({
        userProfile:{...state.userProfile, posts: [post.id, ...state.userProfile.posts]}
    })),
    deletePost: (postId) => set((state) => ({
        userProfile: {
            ...state.userProfile.posts.filter((id) => id !== postId),
        },
    })),
}));

export default useUserProfileStore;