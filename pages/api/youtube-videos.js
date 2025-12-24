export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const API_KEY = process.env.YOUTUBE_API_KEY;
  const CHANNEL_HANDLE = '@CardioVes-app';

  if (!API_KEY) {
    return res.status(500).json({ 
      message: 'YouTube API key not configured',
      error: 'Please set YOUTUBE_API_KEY in your environment variables'
    });
  }

  try {
    let channelId;

    // Try to get channel ID using the forHandle parameter (YouTube Data API v3)
    try {
      const channelByHandleUrl = `https://www.googleapis.com/youtube/v3/channels?part=id&forHandle=${CHANNEL_HANDLE.replace('@', '')}&key=${API_KEY}`;
      const channelByHandleResponse = await fetch(channelByHandleUrl);
      const channelByHandleData = await channelByHandleResponse.json();

      if (channelByHandleData.items && channelByHandleData.items.length > 0) {
        channelId = channelByHandleData.items[0].id;
      }
    } catch (e) {
      console.log('forHandle method failed, trying search method');
    }

    // Fallback: Search for channel if forHandle didn't work
    if (!channelId) {
      const channelSearchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=${encodeURIComponent(CHANNEL_HANDLE)}&key=${API_KEY}&maxResults=1`;
      const channelResponse = await fetch(channelSearchUrl);
      const channelData = await channelResponse.json();

      if (!channelData.items || channelData.items.length === 0) {
        return res.status(404).json({ 
          message: 'Channel not found',
          error: `Could not find channel with handle: ${CHANNEL_HANDLE}`
        });
      }

      channelId = channelData.items[0].snippet.channelId;
    }

    // Get maxResults from query parameter or default to 10
    const maxResults = req.query.maxResults ? parseInt(req.query.maxResults) : 10;

    // Now fetch videos from the channel (fetch only the latest videos we need)
    const videosUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&order=date&maxResults=${maxResults}&key=${API_KEY}`;
    
    const videosResponse = await fetch(videosUrl);
    const videosData = await videosResponse.json();

    if (!videosData.items) {
      return res.status(200).json({ videos: [] });
    }

    // Format the videos data
    const videos = videosData.items.map(item => ({
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.high.url,
      publishedAt: item.snippet.publishedAt,
    }));

    // Cache for 1 hour (3600 seconds)
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');

    return res.status(200).json({ videos });
  } catch (error) {
    console.error('YouTube API error:', error);
    return res.status(500).json({ 
      message: 'Failed to fetch videos',
      error: error.message 
    });
  }
}

