import axios from 'axios';

// link switches
export const FETCH_BATHS = 'fetch_baths';
export const FETCH_BATH = 'fetch_bath';
export const NEW_BATH = 'new_bath';
export const UPDATE_BATH = 'update_bath';
export const DELETE_BATH = 'delete_bath';

export const fetchBaths = () => dispatch => {
  axios.get('/api/baths')
  .then(res => res.data)
  .then(posts =>
    dispatch({
      type: FETCH_BATHS,
      payload: posts
    })
  );
};

export const fetchBath = id => dispatch => {
  axios.get("/api/bath/" + id)
  .then(res => res.data)
  .then(post =>
    dispatch({
      type: FETCH_BATH,
      payload: post
    })
  );
};

export const createBath = (values, callback) => {
  const request = axios.post('/api/baths', values)
                      .then(()=> callback());

  return {
    type: NEW_BATH,
    payload: request
  };
}

export const updateBath = (id, updates) => {
  const request = axios.put(`/api/bath/${id}`, updates)
                        .then(res => res.data);

  return {
    type: UPDATE_BATH,
    payload: request
  };
}

export const deleteBath = (id, callback) => {
  const request = axios.delete(`/api/bath/${id}`)
                        .then(() => callback());

  return {
    type: DELETE_BATH,
    payload: request
  };
}
