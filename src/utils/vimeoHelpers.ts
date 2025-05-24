// utils/vimeoHelpers.js
// Helper functions to work with Vimeo URLs

interface Embed {
  width?: number;
  height?: number;
  autoplay: boolean;
  muted: boolean;
  loop: boolean;
  title?: boolean;
  byline?: boolean;
  portrait?: boolean;
  aspectRatio?: string;
}

/**
 * Extract video ID from Vimeo URL
 */
export function extractVimeoId(url: string) {
  if (!url) return null;

  // Handle different Vimeo URL formats
  const patterns = [
    /vimeo\.com\/(\d+)/, // Basic: vimeo.com/123456
    /vimeo\.com\/channels\/.*\/(\d+)/, // Channel: vimeo.com/channels/name/123456
    /vimeo\.com\/groups\/.*\/videos\/(\d+)/, // Group: vimeo.com/groups/name/videos/123456
    /vimeo\.com\/ondemand\/.*\/(\d+)/, // On Demand: vimeo.com/ondemand/name/123456
    /player\.vimeo\.com\/video\/(\d+)/, // Player: player.vimeo.com/video/123456
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }

  return null;
}

/**
 * Generate embed iframe HTML
 */
export function createVimeoEmbed(videoId: string, options: Embed) {
  if (!videoId) return null;

  const {
    width = 640,
    height = 360,
    autoplay,
    muted,
    loop,
    title = false,
    byline = false,
    portrait = false,
  } = options;

  const params = new URLSearchParams({
    autoplay: autoplay ? '1' : '0',
    muted: muted ? '1' : '0',
    loop: loop ? '1' : '0',
    title: title ? '1' : '0',
    byline: byline ? '1' : '0',
    portrait: portrait ? '1' : '0',
  });

  return `<iframe src="https://player.vimeo.com/video/${videoId}?${params}" width="${width}" height="${height}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
}

/**
 * Generate responsive embed HTML
 */
export function createResponsiveVimeoEmbed(videoId: string, options: Embed) {
  if (!videoId) return null;

  const {
    aspectRatio = '16:9', // or '4:3'
    autoplay,
    muted,
    loop,
  } = options;

  const paddingTop = aspectRatio === '4:3' ? '75%' : '56.25%';

  const params = new URLSearchParams({
    autoplay: autoplay ? '1' : '0',
    muted: muted ? '1' : '0',
    loop: loop ? '1' : '0',
    title: '0',
    byline: '0',
    portrait: '0',
  });

  return `
    <div style="padding:${paddingTop} 0 0 0;position:relative;">
      <iframe 
        src="https://player.vimeo.com/video/${videoId}?${params}" 
        frameborder="0" 
        allow="autoplay; fullscreen; picture-in-picture" 
        allowfullscreen 
        style="position:absolute;top:0;left:0;width:100%;height:100%;" 
        title="Vimeo video">
      </iframe>
    </div>
  `.trim();
}

/**
 * Get video thumbnail URL
 */
export function getVimeoThumbnail(
  videoId: string,
  size: 'small' | 'medium' | 'large' = 'large'
) {
  if (!videoId) return null;

  // Vumbnail service for thumbnails
  const sizes: { small: string; medium: string; large: string } = {
    small: '200x150',
    medium: '640x360',
    large: '1280x720',
  };

  return `https://vumbnail.com/${videoId}_${sizes[size] || sizes.large}.jpg`;
}

/**
 * Process Vimeo URL and return all data
 */
export function processVimeoUrl(url: string, embedOptions: Embed) {
  const videoId = extractVimeoId(url);

  if (!videoId) {
    return {
      isValid: false,
      videoId: null,
      embedCode: null,
      responsiveEmbed: null,
      thumbnail: null,
    };
  }

  return {
    isValid: true,
    videoId,
    embedCode: createVimeoEmbed(videoId, embedOptions as Embed),
    responsiveEmbed: createResponsiveVimeoEmbed(videoId, embedOptions as Embed),
    thumbnail: getVimeoThumbnail(videoId),
    playerUrl: `https://player.vimeo.com/video/${videoId}`,
  };
}
