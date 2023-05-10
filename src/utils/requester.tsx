import axios from "axios";

/**
 * @method getNews getting news from API
 * 
 * @returns {Array of Objects}
 */

export async function getNews() {
  try {
    const res = await axios.get("https://api.spaceflightnewsapi.net/v4/articles/?limit=10&offset=10");
    return res.data.results;
  } catch (err) {
    return err
  }
}

type Id = string | string[] | undefined

/**
 * @method getNewsWithId for getting one news item with id from API
 *
 * @param id
 * @returns {Object}
 */

export async function getNewsWithId(id: Id) {
  try {
    const res = await axios.get(`https://api.spaceflightnewsapi.net/v4/articles/${id}`);
    return res.data;
  } catch (err) {
    return err
  }
}