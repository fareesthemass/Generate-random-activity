export async function fetchData(){

    const response = await fetch("https://bored-api.appbrewery.com/random")
    const data = await response.json()
    return data

}