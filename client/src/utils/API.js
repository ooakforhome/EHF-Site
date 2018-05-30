import axios from "axios";

export default {
  addUpload: function(file) {
    return axios.post('/api/uploads', file);
  },
  getUpload: function(filename) {
    return axios.get('/api/image/'+ filename);
  },
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // save users
  saveUser: function() {
    return axios.post("/api/users");
  },
  // Gets all products
  getProducts: function() {
    return axios.get("/api/products");
  },
  // Gets the product with the given id
  getProduct: function(id) {
    return axios.get("/api/products/" + id);
  },
  // Deletes the product with the given id
  deleteProduct: function(id) {
    return axios.delete("/api/products/" + id);
  },
  // Saves a product to the database
  addProduct: function(productData) {
    return axios.post("/api/products", productData);
  },
  updateProduct: function(id, productData){
    return axios.put("/api/products/" + id, productData);
  },
  // Gets all notes
  getNotes: function() {
    return axios.get("/api/notes");
  },
  // Gets the product with the given id
  getNote: function(id) {
    return axios.get("/api/notes/" + id);
  },
  // Deletes the product with the given id
  deleteNote: function(id) {
    return axios.delete("/api/notes/" + id);
  },
  // Saves a product to the database
  saveNote: function(noteData) {
    return axios.post("/api/notes", noteData);
  }

};
