import axios from 'axios';

// link switches
export const FETCH_BATHS = 'fetch_baths';
export const FETCH_BATH = 'fetch_bath';
export const NEW_BATH = 'new_bath';
export const UPDATE_BATH = 'update_bath';
export const DELETE_BATH = 'delete_bath';

export const FETCH_BATHACCESSORIES = 'fetch_bathaccessories';
export const FETCH_BATHACCESSORIE = 'fetch_bathaccessorie';
export const NEW_BATHACCESSORIE = 'new_bathaccessorie';
export const UPDATE_BATHACCESSORIE = 'update_bathaccessorie';
export const DELETE_BATHACCESSORIE = 'delete_bathaccessorie';

export const FETCH_BATHHARDWARES = 'fetch_bathhardwares';
export const FETCH_BATHHARDWARE = 'fetch_bathhardware';

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

export const fetchBathAccessories = () => dispatch => {
  axios.get('/api/bathaccessories')
  .then(res => res.data)
  .then(posts =>
    dispatch({
      type: FETCH_BATHACCESSORIES,
      payload: posts
    })
  );
};

export const fetchBathAccessorie = id => dispatch => {
  axios.get("/api/bathaccessorie/" + id)
  .then(res => res.data)
  .then(post =>
    dispatch({
      type: FETCH_BATHACCESSORIE,
      payload: post
    })
  );
};

export const createBathAccessorie = (values, callback) => {
  const request = axios.post('/api/bathaccessories', values)
                      .then(()=> callback());

  return {
    type: NEW_BATHACCESSORIE,
    payload: request
  };
}

export const updateBathAccessorie = (id, updates) => {
  const request = axios.put(`/api/bathaccessorie/${id}`, updates)
                        .then(res => res.data);

  return {
    type: UPDATE_BATHACCESSORIE,
    payload: request
  };
}

export const deleteBathAccessorie = (id, callback) => {
  const request = axios.delete(`/api/bathaccessorie/${id}`)
                        .then(() => callback());

  return {
    type: DELETE_BATHACCESSORIE,
    payload: request
  };
}

export const fetchHardwares = () => dispatch => {
  axios.get('/api/bathhardwares')
  .then(res => res.data)
  .then(posts =>
    dispatch({
      type: FETCH_BATHHARDWARES,
      payload: posts
    })
  );
};

export const fetchHardware = id => dispatch => {
  axios.get("/api/bathhardware/" + id)
  .then(res => res.data)
  .then(post =>
    dispatch({
      type: FETCH_BATHHARDWARE,
      payload: post
    })
  );
};
