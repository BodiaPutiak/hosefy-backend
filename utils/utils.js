async function getDataFromGoogleApi(address) {
    const str = formatAddress(address);
    try {
        const response = await fetch(`${process.env.GOOGLE_DECODE_URI}address=${str}&key=${process.env.GOOGLE_MAPS_API_KEY}`);
        
        if (!response.ok) {
            throw new Error('Failed to fetch data from Google API');
        }

        return await response.json(); // Return the JSON data from the response
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

function formatAddress(address) {
    const arr = address.split(' ');
    const str = arr.join('+')
    return str;
}

module.exports = getDataFromGoogleApi;