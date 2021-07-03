import { fetchAlbumsRequest, fetchAlbumsRequestFailure, fetchAlbumsRequestSuccess } from "../store/actions";

const API = 'https://jsonplaceholder.typicode.com';

export function fetchAlbums() {
    return async dispatch => {
        try {
            dispatch(fetchAlbumsRequest())
            const res = await fetch(`${API}/albums`);
            
            if (res.status >= 400) {
              throw new Error("Bad response from server");
            }
            
            let albumResponse = await res.json();
            const charERegex = /[eE]/g
            albumResponse = albumResponse.map(album => {
                return {
                    ...album,
                    title: album.title.replace(charERegex, ''),
                }
            });
            dispatch(fetchAlbumsRequestSuccess(albumResponse));
          } catch (err) {
            console.error(err);
            dispatch(fetchAlbumsRequestFailure())
          }
    }
}