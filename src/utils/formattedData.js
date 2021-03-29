export const formattedData = data => {
  let formattedDatas = [];
  data.map(datas => {
    formattedDatas.push({
      id: datas.id,
      name: datas.name,
      location: datas.location.name,
      image: datas.image,
    });
  });
  return formattedDatas;
};
