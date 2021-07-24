export const initialState = {
    user:null,
    playlists:[],
    playing: false,
    item:null,
    token: null,
    // Remove After devoloping...
    // token: "BQBj_iaVPYUVRSoon0bw2lwW_rNOd7Mdzy1fQJ3z-8FQlu5P9T__ETf8AvcLSlKfHoctlwUaB-OldgYtW4GPF2tliT9Wdh_IpTVGpjKxVG4oZvYkKfb-TSCzHztPObfNG-oMKJJBHLn9WgFd-Zait0eNfjNLNxAyMw903k_hPeQei0qdyqox",
}

const reducer = (state, action) =>{
    console.log(action)
    
    // ACTION ---> type, [PayLoad]
    switch(action.type){
        case "SET_USER":
            return{
                ...state,
                user: action.user
            }
        case "SET_TOKEN":
            return{
                ...state,
                token: action.token
            }
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists
            }
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }

            default:
                return state
    }
}

export default reducer