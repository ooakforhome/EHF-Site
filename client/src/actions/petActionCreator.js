import axios from 'axios';

// craete const for each link
export const FETCH_PETS = 'fetch_pets';
export const FETCH_PET = 'fetch_pet';
export const NEW_PET = 'new_pet';
export const UPDATE_PET = 'update_pet';
export const DELETE_PET = 'delete_pet';

export const fetchPets = () => dispatch => {
  axios.get('/api/pets')
  .then(res => res.data)
  .then(posts =>
    dispatch({
      type: FETCH_PETS,
      payload: posts
    })
  );
};

export const fetchPet = id => dispatch => {
  axios.get(`/api/pet/${id}`)
  .then(res => res.data)
  .then(post =>
    dispatch({
      type: FETCH_PET,
      payload: post
    })
  );
};

export const createPet = (values, callback) => {
  const request = axios.post('/api/pets', values)
                      .then(()=> callback());

  return {
    type: NEW_PET,
    payload: request
  };
}

export const updatePet = (id, updates) => {
  const request = axios.put(`/api/pet/${id}`, updates)
                        .then(res => res.data);

  return {
    type: UPDATE_PET,
    payload: request
  };
}

export const deletePet = (id, callback) => {
  const request = axios.delete(`/api/pet/${id}`)
                        .then(() => callback());

  return {
    type: DELETE_PET,
    payload: request
  };
}
