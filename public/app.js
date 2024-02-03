const APIController = (function() {

    const clientId = '78f2eec0632047ad93ea52802363d830';
    const clientSecret = '0dd21c4384c64cc9958af71cdc659eaf';

    const _getToken = async () => {
        
        const result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded',
                'Authorization' : 'Basic' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });

        const data = await result.json();
        return data.acess_token;
    }

    const is_playing = async (token) => {
        const result = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
        method: 'GET',
        headers: {'Authorization' : 'Bearer' + token}
    });
    const data = await result.json();
    return data.is_playing.item;
}

const _artist = async (token, artistsId) => {
    const result = await fetch('https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg', {
        method: 'GET',
        headers: {'Authorization' : 'Bearer' + token}
    })
    const data = await result.json();
    return data.artist.item;

};

})();