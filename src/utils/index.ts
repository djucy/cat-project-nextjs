import axios from 'axios'

axios.defaults.baseURL=`https://api.thecatapi.com/v1/`
const API_KEY='live_zm27A3ZpuGT30iu1QFOgoJJj2f9kMwEUjfsCPPKZpgxeLbmZqSodaepPkMnzlqaW'
const USER_ID='user-190916'
export async function getVoting() {
  const { data } = await axios.get('images/search', { headers: { 'x-api-key': API_KEY }});
  console.log(data)
  return data
}

export async function getGalleryImages(){
  const { data } = await axios.get('images/search?limit=10', { headers: { 'x-api-key': API_KEY } });
  console.log(data)
  return data
}
// https://api.thecatapi.com/v1/images/search?limit=10

export async function postFavouriteImage(id:string) {
  const {data }=await axios.post('favourites', { image_id: id, sub_id: USER_ID }, { headers: { 'x-api-key': API_KEY } });
  
  console.log(data);
  return data
}

export async function getFavouriteById(image_id: string) {
  const { data } = await axios.get(`favourites/${image_id}`, { headers: { 'x-api-key': API_KEY } });
  console.log(data);
  return data;
}

export async function getFavourites() {
  const { data } = await axios.get(`favourites?sub_id=${USER_ID}`, { headers: { 'x-api-key': API_KEY } });
  
  const dataList = data.map(({ image }: { image: { url: string, id: string } }) => {
    const { url, id } = image;
    return {url,id}
  } 
  )
  console.log(dataList)
  return dataList
}

export async function getBreeds() {
  const { data } = await axios.get('breeds', { headers: { 'x-api-key': API_KEY } });
  console.log(data)
  return data;
}

export async function getImagesBySubid() {
  const { data } = await axios.get(`images/search?sub_id=${USER_ID}`, { headers: { 'x-api-key': API_KEY } });
  console.log(data)
  return data
}

export async function getImagesByBreed() {
  
}
