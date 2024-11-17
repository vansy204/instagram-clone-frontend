export const isPostLikedByUser = (post,userId) =>{
    for(let item of post.isPostLikedByUser){
        if(item.id === userId) return true;
    }
    return false;
}

export const isCommentLikedByUser = (comment,userId) =>{
    for(let item of comment.likedByUsers){
        if(item.id === userId) return true;
    }
    return false;
}

export const isSavedPost = (user,postId) =>{
    for(let item of user.savedPost){
        if(item.id === postId) return true;
    }
    return false;
}

export const isFollowing = (reqUser, user2) =>{
    if(reqUser && user2){
        for(let item of user2.follower){
            if(reqUser.id === item.id){
                return true;
            }
        }
        
    }
    return false;
}