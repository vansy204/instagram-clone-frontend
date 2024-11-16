import {
  FOLLOW_USER,
  GET_USER_BY_USER_IDS,
  GET_USER_BY_USERNAME,
  REQ_USER,
  SEARCH_USER,
  UNFOLLOW_USER,
  UPDATE_USER,
} from "./ActionType";

const initialValue = {
  redUser: null,
  findByUserName: null,
  findUserByIds: [],
  followUser: null,
  unFollowUser: null,
  searchUser: null,
  updatedUser: null,
};
export const UserReducer = (store = initialValue, { type, payload }) => {
  if (type === REQ_USER) {
    return { ...store, reqUser: payload };
  } else if (type === GET_USER_BY_USERNAME) {
    return { ...store, findByUserName: payload };
  } else if (type === GET_USER_BY_USER_IDS) {
    return { ...store, findUserByIds: payload };
  } else if (type === FOLLOW_USER) {
    return { ...store, followUser: payload };
  } else if (type === UNFOLLOW_USER) {
    return { ...store, unFollowUser: payload };
  } else if (type === SEARCH_USER) {
    return { ...store, searchUser: payload };
  } else if (type === UPDATE_USER) {
    return { ...store, updatedUser: payload };
  }
  return store;
};
