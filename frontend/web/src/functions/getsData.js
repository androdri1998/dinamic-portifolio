import Response from '../database/data';
import api from '../services/api';

export const getName = () => {
    return Response.name;
};

export const getDescription = () => {
    return Response.description;
};

export const getWorking = () => {
    return Response.working;
};

export const getWorkingSubtitle = () => {
    return Response.working_subtitle;
};

export const getProfilePhoto = () => {
    return Response.profile_photo;
};

export const getInstagram = () => {
    return Response.instagram;
};

export const getLinkedin = () => {
    return Response.linkedin;
};

export const getMail = () => {
    return Response.mail;
};

export const getGithubUsername = () => {
    return Response.github_username;
};

export const getSkills = () => {
    return Response.skills;
};

export const getGithubRepositories = async (username) => {
    const response = await api.get(`/users/${username}/repos`);
    return response.data;
};