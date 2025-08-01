import { createAsyncThunk } from "@reduxjs/toolkit";
import { startLoad, stopLoad } from "../slices/appSlice";
import { handleError } from ".";
import JobService, { JobType } from "../services/jobService";

export const getJobPosts = createAsyncThunk(
  "job/get_job_posts",
  async (data:{page:number, location:string, status?:string}, { dispatch }) => {
    dispatch(startLoad());
    try {
      const res = await JobService.GetJobPosts(data);
      return res;
    } catch (err) {
      handleError(err, dispatch);
    } finally {
      dispatch(stopLoad());
    }
  }
);
export const getJobPost = createAsyncThunk(
  "job/get_job_post",
  async (data:{id:string}, { dispatch }) => {
    dispatch(startLoad());
    try {
      const res = await JobService.GetJobPost(data);
      return res;
    } catch (err) {
      handleError(err, dispatch);
    } finally {
      dispatch(stopLoad());
    }
  }
);
export const createJobPost = createAsyncThunk(
  "job/create_job_post",
  async (data: JobType, { dispatch }) => {
    dispatch(startLoad());
    try {
      const res = await JobService.CreateJobPost(data);
      return res;
    } catch (err) {
      handleError(err, dispatch);
    } finally {
      dispatch(stopLoad());
    }
  }
);
export const editJobPost = createAsyncThunk(
  "job/edit_job_post",
  async (data: JobType, { dispatch }) => {
    dispatch(startLoad());
    try {
      const res = await JobService.EditJobPost(data);
      return res;
    } catch (err) {
      handleError(err, dispatch);
    } finally {
      dispatch(stopLoad());
    }
  }
);
export const deleteJobPost = createAsyncThunk(
  "job/delete_job_post",
  async (data: { email: string; password: string }, { dispatch }) => {
    dispatch(startLoad());
    try {
      const res = await JobService.DeleteJobPost(data);
      return res;
    } catch (err) {
      handleError(err, dispatch);
    } finally {
      dispatch(stopLoad());
    }
  }
);