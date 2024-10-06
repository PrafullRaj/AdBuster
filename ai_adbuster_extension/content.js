function detectAds() {
  // Selecting ad-related elements with broader selectors
  const ads = document.querySelectorAll('[class*="ad"], [id*="ad"], iframe, .sponsored, [class*="banner"], [class*="promo"], [class*="advertisement"]');

  if (ads.length === 0) {
      console.log('No ads found on this page.');
      return;  // Exit if no ads are found
  }

  ads.forEach((ad) => {
      const adText = ad.innerText || ad.alt || "ad content";  // Fallback text
      transformAd(ad, adText);
  });
}

function transformAd(adElement, adText) {
  fetch('https://ai-adbuster-server.onrender.com/generate', {  // Use Render URL
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: adText }),
  })
  .then((response) => {
      if (!response.ok) {
          throw new Error(`Server error: ${response.status}`);
      }
      return response.json();  // Parse the JSON response
  })
  .then((data) => {
      if (data.description) {
          const newAd = document.createElement('div');
          newAd.innerText = data.description;
          newAd.style.fontStyle = 'italic';  // Adding custom styling for the new ad
          newAd.style.backgroundColor = '#f9f9f9';  // Light background
          newAd.style.padding = '10px';  // Padding for better visibility
          newAd.style.border = '1px solid #ccc';  // Border to make it look better
          adElement.replaceWith(newAd);  // Replace the old ad with the new content
          console.log('Ad replaced with AI-generated description.');
      } else {
          console.error('No description returned from the AI server.');
      }
  })
  .catch((error) => {
      console.error('Error replacing ad:', error);  // Log any errors
  });
}


// Start detecting ads after page load
document.addEventListener('DOMContentLoaded', detectAds);
