import axios from 'axios';

// craete const for each link
export const FETCH_ACCENTS = 'fetch_accents';
export const FETCH_ACCENT = 'fetch_accent';
export const NEW_ACCENT = 'new_accent';
export const UPDATE_ACCENT = 'update_accent';
export const DELETE_ACCENT = 'delete_accent';

export const fetchAccents = () => dispatch => {
  axios.get('/api/accents')
  .then(res => res.data)
  .then(posts =>
    dispatch({
      type: FETCH_ACCENTS,
      payload: posts
    })
  );
};

export const fetchAccent = id => dispatch => {
  axios.get(`/api/accent/${id}`)
  .then(res => res.data)
  .then(post =>
    dispatch({
      type: FETCH_ACCENT,
      payload: post
    })
  );
};

export const createAccent = (values, callback) => {
  const request = axios.post('/api/accents', values)
                      .then(()=> callback());

  return {
    type: NEW_ACCENT,
    payload: request
  };
}

export const updateAccent = (id, updates) => {
  const request = axios.put(`/api/accent/${id}`, updates)
                        .then(res => res.data);

  return {
    type: UPDATE_ACCENT,
    payload: request
  };
}

export const deleteAccent = (id, callback) => {
  const request = axios.delete(`/api/accent/${id}`)
                        .then(() => callback());

  return {
    type: DELETE_ACCENT,
    payload: request
  };
}
