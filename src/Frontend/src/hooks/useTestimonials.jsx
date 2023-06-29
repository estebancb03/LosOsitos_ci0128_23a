import React from "react";
import { useState, useEffect, useContext } from "react";
import AuthToken from "../config/AuthToken";
import AxiosClient from "../config/AxiosClient";
import authContext from "../context/auth/authContext";
import axiosClient from "../config/AxiosClient";

const useTestimonials = () => {
    const [reviewsHook, setReviewsHook] = useState([]);
    const AuthContext = useContext(authContext);
    const { token } = AuthContext;

    const fetchReviews = async () => {
        try {
            const url = "/getAllReviews";
            await AuthToken(token);
            const records = await AxiosClient.get(url);
            setReviewsHook(records.data);
          } catch (exception) {
            console.log(exception);
          }
    }

    const updateReviewState = async (ID, State) => {
        try {
            const url = '/updateReviewState';
            await AuthToken(token);
            await axiosClient.put(url, {
                ID,
                State,
            });
        } 
        catch (exception) {
            console.log(exception);
        }
    }

    return { reviewsHook, fetchReviews, updateReviewState }
}

export default useTestimonials;