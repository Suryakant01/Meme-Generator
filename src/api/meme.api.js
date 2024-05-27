const baseURL = "https://api.imgflip.com/get_memes";

export const getAllMemes = async () => {
    const response = await fetch(`${baseURL}`)
    return await response.json();
}