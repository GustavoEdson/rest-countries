export const callApi = async () => {
  try {
    const data = await fetch(
      `https://restcountries.com/v3.1/all?fields=name`
    ).then((res) => res.json());
    return data;
  } catch (error) {
    console.log(error);
  }
};
