const API = "https://api.themoviedb.org/3"
export function get(path){
    return fetch(API+path, {
        headers:{
            Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OGU4NjNkOTU4ZmVkM2Y2ZjM1OWM2ODk3NTg2ODY2YyIsInN1YiI6IjY2MjgzOGExMjIxYmE2MDE3YzE3NzRmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BOJBDgjwRx2tmYeIYwpaaxy64Wi-hDLe0By1dON3_Gk",
            "Content-Type": "application/json;charset=utf-8"
        }
    }).then((result) => result.json());
}