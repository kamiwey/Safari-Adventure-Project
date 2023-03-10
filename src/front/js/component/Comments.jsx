import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Comments = () => {
    const { store, actions } = useContext(Context)
    const [comment, setComment] = useState("");

    const params = useParams();
    const navigate = useNavigate();
    
    const handleComments = async (e) => {
        e.preventDefault();
        let onComment = await actions.createComment(comment, params.id);
        Swal.fire(onComment.data.msg);
        setComment("");
        navigate("/PackagesDetails/" + params.id);
      };

  return (
    <div >


<form onSubmit={handleComments} className="">
      <h4 className="package-detail-title" style={{textAlign: "center" }}>Comment Adventure</h4>
      <div className="container d-xl-inline-flex d-lg-inline-flex justify-content-between ">
        
        <div className="col-sm-12 col-md-10 col-lg-10 col-xl-10" id="divTextarea">
          <textarea
            className="col-sm-12 col-md-12 col-12 col-lg-10 col-xl-11"
            name="comments"
            id="comments"
            cols=""
            rows="2"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            required
          ></textarea>
        </div>
        <div
          className="col-sm-12 col-md-12 col-lg-2 mt-sm-2 mt-md-0 mt-lg-0"
          id="buttonSubmit"
        >
          <button
            className="btn btn-creamD"
            type="submit"
            // onClick={() => {
             
            // }}
          >
            Submit
          </button>
        </div>
      </div>
    </form>

    </div>
  )
}

export default Comments;