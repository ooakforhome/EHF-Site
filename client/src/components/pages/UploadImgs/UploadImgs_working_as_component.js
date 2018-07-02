import React from "react";
import API from "../../../utils/API";

// _handleImageChange(e) {
//   e.preventDefault();
//     this.setState({
//       file: e.target.files[0]
//     });
// }

const handleSubmit = e => {
  e.preventDefault();
  let formData = new FormData();
  formData.append('file', e.target.files[0]);
  API.uploadthis(formData)
  console.log(formData);
  // e.target.reset()
}

export const UploadImg = (
      <div>
        <form
            encType="multipart/form-data"
            onSubmit={handleSubmit} >
          <input
            className="fileInput inlineBlk"
            type="file"
            name= "photo"
            id="file" />
           <button
             className="saveBtn inlineBlk"
             type="submit">
                save
           </button>
        </form>
      </div>
    )
