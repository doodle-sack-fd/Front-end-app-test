import { addCatsAction, setIsFetching } from "../store/catReducer"

export const fetchCats = () => {
    return function (dispatch) {
        setIsFetching(false)
        fetch('https://api.thecatapi.com/v1/images/search?limit=30&breed_ids=beng&api_key=live_YokMj4QXkK7WCDTQaosF66StJqeFnHWZvCG5S4Z7Qeg4GXnTiTDYgzqFdeyOt2UY')
            .then(response => response.json())
            .then(data => console.log(dispatch(addCatsAction(data))))
            .catch(function (error) {
                console.log('Request failed', error)
            });
    }
}
