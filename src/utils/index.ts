import axios from 'axios'

axios.defaults.baseURL=`https://api.thecatapi.com/v1/`
const API_KEY='live_zm27A3ZpuGT30iu1QFOgoJJj2f9kMwEUjfsCPPKZpgxeLbmZqSodaepPkMnzlqaW'
const USER_ID='user-190916'
export async function getVoting() {
  const { data } = await axios.get('images/search', { headers: { 'x-api-key': API_KEY }});
  console.log(data)
  return data
}

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
  const { data } = await axios.get('favourites', { headers: { 'x-api-key': API_KEY } });
  console.log(data)
  
  return data
}
// function showImageToVoteOn()
// {
  
//   const url = `${API_URL}images/search`;

//   fetch(url,{headers: {
//     'x-api-key': API_KEY
//   }})
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     currentImageToVoteOn = data[0];
//     document.getElementById("image-to-vote-on").src= currentImageToVoteOn.url;
//   });

// }