// Create a variable outside the fetchEtherPrice function to track the time of the last call

let lastCallTime = 0

export async function fetchEtherPrice() {
    const currentTime = Date.now()
    const timeSinceLastCall = currentTime - lastCallTime

    // Check if the time since the last call is less than 1000 milliseconds (1 second)
    if (timeSinceLastCall < 1000) {
        // If it's less than 1 second, wait for the remainder of the 1 second
        await new Promise(resolve => setTimeout(resolve, 1000 - timeSinceLastCall))
    }

    const apiKey = process.env.API_KEY // Replace with your Etherscan API key

    try {
        const response = await fetch(`https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${apiKey}`)
        lastCallTime = Date.now() // Update the lastCallTime to the current time

        if (!response.ok) {
            throw new Error('Network response was not ok')
        }

        const data = await response.json()
        console.log(data)
        return data.result.ethusd
    } catch (error: any) {
        console.error('Error fetching the Ether price:', error.message)
    }
}
