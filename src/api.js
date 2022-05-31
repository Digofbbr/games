// Base URL
const base_url = "https://api.rawg.io/api/"
const api_key = "d436d0eb7efb4ba2b8f792ee768ada87"

// Get Date
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1
    if (month < 10){
        return `0${month}`
    } else{
        return month
    }
}

const getCurrentDay = () => {
    const day = new Date().getDate()
    if (day < 10){
        return `0${day}`
    } else{
        return day
    }
}

// Full date
const currentYear = new Date().getFullYear()
const currentMonth = getCurrentMonth()
const currentDay = getCurrentDay()

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`


// Popular games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10&key=${api_key}`

// Upcoming games
const upcoming_games = `games?key=${api_key}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`

// New games
const new_games = `games?key=${api_key}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`

export const popularGamesURL = () => {
   return  `${base_url}${popular_games}`
}

export const upcomingGamesURL = () => {
   return `${base_url}${upcoming_games}`
}

export const newGamesURL = () => {
    return `${base_url}${new_games}`
}

// Game details
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}?key=${api_key}` 
export const gameScreenshotURL = (game_id) => `${base_url}games/${game_id}/screenshots?key=${api_key}` 

// Search game

export const searchGameURL = (game_name) => `${base_url}games?search=${game_name}&page_size=9&key=${api_key}`