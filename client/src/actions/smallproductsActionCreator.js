import axios from 'axios';

// link switches
export const FETCH_OTDS = 'fetch_otds';
export const FETCH_OTD = 'fetch_otd';

export const FETCH_BOOKCASES = 'fetch_bookcases';
export const FETCH_BOOKCASE = 'fetch_bookcase';

export const FETCH_HOOKNRODS = 'fetch_hooknrods';
export const FETCH_HOOKNROD = 'fetch_hooknrod';

export const FETCH_WINDOWPANELS = 'fetch_windowpanels';
export const FETCH_WINDOWPANEL = 'fetch_windowpanel';

export const FETCH_SHOWERCURTAINS = 'fetch_showercurtains';
export const FETCH_SHOWERCURTAIN = 'fetch_showercurtain';

export const FETCH_WINDOWHARDWARES = 'fetch_windowhardwares';
export const FETCH_WINDOWHARDWARE = 'fetch_windowhardware';

export const FETCH_BEAUTYDEVICES = 'fetch_beautydevices';
export const FETCH_BEAUTYDEVICE = 'fetch_beautydevice';

export const FETCH_OUTDOORLIGHTINGS = 'fetch_outdoorlightings';
export const FETCH_OUTDOORLIGHTING = 'fetch_outdoorlighting';

export const FETCH_GARDENS = 'fetch_gardens';
export const FETCH_GARDEN = 'fetch_garden';

export const fetchWindowPanels = () => dispatch => {
  axios.get('/api/windowpanels')
  .then(res => res.data)
  .then(posts =>
    dispatch({
      type: FETCH_WINDOWPANELS,
      payload: posts
    })
  );
};

export const fetchWindowPanel = id => dispatch => {
  axios.get("/api/windowpanel/" + id)
  .then(res => res.data)
  .then(post =>
    dispatch({
      type: FETCH_WINDOWPANEL,
      payload: post
    })
  );
};

export const fetchShowerCurtains = () => dispatch => {
  axios.get('/api/showercurtains')
  .then(res => res.data)
  .then(posts =>
    dispatch({
      type: FETCH_SHOWERCURTAINS,
      payload: posts
    })
  );
};

export const fetchShowerCurtain = id => dispatch => {
  axios.get("/api/showercurtain/" + id)
  .then(res => res.data)
  .then(post =>
    dispatch({
      type: FETCH_SHOWERCURTAIN,
      payload: post
    })
  );
};

export const fetchWindowHardwares = () => dispatch => {
  axios.get('/api/windowhardwares')
  .then(res => res.data)
  .then(posts =>
    dispatch({
      type: FETCH_WINDOWHARDWARES,
      payload: posts
    })
  );
};

export const fetchWindowHardware = id => dispatch => {
  axios.get("/api/windowhardware/" + id)
  .then(res => res.data)
  .then(post =>
    dispatch({
      type: FETCH_WINDOWHARDWARE,
      payload: post
    })
  );
};

export const fetchBeautyDevices = () => dispatch => {
  axios.get('/api/beautydevices')
  .then(res => res.data)
  .then(posts =>
    dispatch({
      type: FETCH_BEAUTYDEVICES,
      payload: posts
    })
  );
};

export const fetchBeautyDevice = id => dispatch => {
  axios.get("/api/beautydevice/" + id)
  .then(res => res.data)
  .then(post =>
    dispatch({
      type: FETCH_BEAUTYDEVICE,
      payload: post
    })
  );
};

export const fetchGardens = () => dispatch => {
  axios.get('/api/gardens')
  .then(res => res.data)
  .then(posts =>
    dispatch({
      type: FETCH_GARDENS,
      payload: posts
    })
  );
};

export const fetchGarden = id => dispatch => {
  axios.get("/api/garden/" + id)
  .then(res => res.data)
  .then(post =>
    dispatch({
      type: FETCH_GARDEN,
      payload: post
    })
  );
};

export const fetchOutdoorLightings = () => dispatch => {
  axios.get('/api/outdoorlightings')
  .then(res => res.data)
  .then(posts =>
    dispatch({
      type: FETCH_OUTDOORLIGHTINGS,
      payload: posts
    })
  );
};

export const fetchOutdoorLighting = id => dispatch => {
  axios.get("/api/outdoorlighting/" + id)
  .then(res => res.data)
  .then(post =>
    dispatch({
      type: FETCH_OUTDOORLIGHTING,
      payload: post
    })
  );
};
//===============================================

export const fetchOtds = () => dispatch => {
  axios.get('/api/otds')
  .then(res => res.data)
  .then(posts =>
    dispatch({
      type: FETCH_OTDS,
      payload: posts
    })
  );
};

export const fetchOtd = id => dispatch => {
  axios.get("/api/otd/" + id)
  .then(res => res.data)
  .then(post =>
    dispatch({
      type: FETCH_OTD,
      payload: post
    })
  );
};

export const fetchBookCases = () => dispatch => {
  axios.get('/api/bookcases')
  .then(res => res.data)
  .then(posts =>
    dispatch({
      type: FETCH_BOOKCASES,
      payload: posts
    })
  );
};

export const fetchBookCase = id => dispatch => {
  axios.get("/api/bookcase/" + id)
  .then(res => res.data)
  .then(post =>
    dispatch({
      type: FETCH_BOOKCASE,
      payload: post
    })
  );
};

export const fetchHookNRods = () => dispatch => {
  axios.get('/api/hooknrods')
  .then(res => res.data)
  .then(posts =>
    dispatch({
      type: FETCH_HOOKNRODS,
      payload: posts
    })
  );
};

export const fetchHookNRod = id => dispatch => {
  axios.get("/api/hooknrod/" + id)
  .then(res => res.data)
  .then(post =>
    dispatch({
      type: FETCH_HOOKNROD,
      payload: post
    })
  );
};
