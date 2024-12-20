let playlistContent = "#EXTM3U\n";
let channelCount = 0;

function updateChannelCount() {
    document.getElementById('channelCount').textContent = `Total Channels: ${channelCount}`;
}

function addChannel() {
    const channelName = document.getElementById('channelName').value.trim();
    const channelLogo = document.getElementById('channelLogo').value.trim();
    const channelGroup = document.getElementById('channelGroup').value.trim();
    const channelUrl = document.getElementById('channelUrl').value.trim();

    if (!channelName || !channelUrl) {
        alert('Channel name and stream URL are required!');
        return;
    }

    const channelEntry = `#EXTINF:-1 tvg-logo="${channelLogo}" group-title="${channelGroup}", ${channelName}\n${channelUrl}\n`;
    playlistContent += channelEntry;
    channelCount++;
    updateChannelCount();

    document.getElementById('playlist').value = playlistContent;

    // Clear input fields
    document.getElementById('channelName').value = '';
    document.getElementById('channelLogo').value = '';
    document.getElementById('channelGroup').value = '';
    document.getElementById('channelUrl').value = '';
}

function downloadPlaylist() {
    if (channelCount === 0) {
        alert('Please add at least one channel to download!');
        return;
    }

    const blob = new Blob([playlistContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    a.href = url;
    a.download = `playlist_${timestamp}.m3u`;
    a.click();
    URL.revokeObjectURL(url);
}

function clearPlaylist() {
    if (confirm('Are you sure you want to clear the playlist?')) {
        playlistContent = "#EXTM3U\n";
        channelCount = 0;
        document.getElementById('playlist').value = playlistContent;
        updateChannelCount();
    }
}
