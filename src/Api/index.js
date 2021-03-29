import axios from 'axios';

export async function getAllCharacter() {
  try {
    const response = await axios.get(
      'https://rickandmortyapi.com/api/character/?name=Ai',
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function getCharacter(data) {
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${data}`,
    );
    return response.data;
  } catch (error) {
    return false;
  }
}

export async function searchCharacter(data) {
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/?name=${data}`,
    );
    return response.data.results;
  } catch (error) {
    return false;
  }
}
