import React from "react";
import { useState, useEffect, useContext } from "react";
import AuthToken from "../config/AuthToken";
import AxiosClient from "../config/AxiosClient";
import authContext from "../context/auth/authContext";
import axiosClient from "../config/AxiosClient";
import { formatDateDDMMYYYY } from "../helpers/formatDate";

const useTestimonials = () => {
    const [reviewsHook, setReviewsHook] = useState([]);
    const [randomReviews, setRandomReviews] = useState([]);
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
    };

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
    };

    const getRandomReviews = async () => {
        try {
            const url = "/getRandomReviews";
            const records = await AxiosClient.get(url);
            setRandomReviews(records.data);
        }
        catch (exception){
            console.log(exception);
        }
    };

    const checkReview = async (ID) => {
        try {
            const url = `/getCheckReview/${ID}`;
            const records = await AxiosClient.get(url);
            return records.data;
        }
        catch (exception) {
            console.log(exception);
        }
    };
    
    const updateReview = async (ID, Description) => {
        try {
            const url = '/updateReview';
            await axiosClient.put(url, {
                ID,
                Description,
            });
        } 
        catch (exception) {
            console.log(exception);
        }
    };

    const insertReview = async (ID, Description) => {
        try {
            const url = '/insertReview';
            await axiosClient.post(url, {
                ID,
                Description, 
            });
        } 
        catch (exception) {
            console.log(exception);
        }
    };

    return { reviewsHook, fetchReviews, updateReviewState,  getRandomReviews, randomReviews, checkReview, updateReview, insertReview }
}

export default useTestimonials;