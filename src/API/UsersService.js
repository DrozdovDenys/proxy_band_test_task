import axios from "axios";

export default class UsersService {
  static async getUsers() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const users = response.data;
    return users;
  }

  static async getUserPosts(id) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}/posts`
    );
    const posts = await response.data;
    return posts;
  }

  static async getUserAlbums(id) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}/albums`
    );
    const albums = await response.data;
    return albums;
  }
}
