async function organizedPrompt(data) {
   // Ensure safe extraction of array properties
   const browserUsernames = Array.isArray(data.browser_usernames) ? data.browser_usernames.join(', ') : 'N/A';
   const fileUsernames = Array.isArray(data.files_folders_usernames) ? data.files_folders_usernames.join(', ') : 'N/A';

   // Prepare the prompt for the AI
   const prompt = `
   Analyze the following user data and provide a structured, concise summary:

   1. Personal Information:
      - System Username: ${data.system_username || 'N/A'}
      - Browser Usernames: ${browserUsernames}
      - Usernames from Files/Folders: ${fileUsernames}

   2. Location and Network:
      - Location: ${data.location || 'N/A'}
      - IP Address: ${data.ip_address || 'N/A'}
      - Network Provider: ${data.network_provider || 'N/A'}

   3. Browser History:
   ${data.browser_history ? JSON.stringify(data.browser_history, null, 2) : 'No data available'}

   Tasks:
   Provide a structured summary of the user with reasons for each piece of information:

   - Real Name: "" (Reason)
   - All the Email IDs: "" (Reason)
   - All the Phone Numbers: "" (Reason)
   - Possible Social Media Handles with links: "" (Reason)
   - Family Members' Names: "" (Reason)
   - Friends: "" (Reason)
   - Profession: "" (Reason)
   - Passion: "" (Reason)
   - Skills: "" (Reason)
   - Other Important Information: "" (Reason)

   Behavior Analysis:
   - Shopping Behavior: Is the user looking to buy something? (Check for searches related to phones, laptops, appliances, clothing, or other products.)
   - Job Search: Are they actively looking for a job? (Check for job search platforms, resume uploads, LinkedIn activity, career-related forums.)
   - Learning & Education: Are they researching any specific topics or learning something new? (Check educational platforms, coding websites, documentation, online courses.)
   - Entertainment & Hobbies: What are their interests? (Check for streaming services, gaming sites, music platforms, hobby-related searches.)
   - Travel & Lifestyle: Are they planning a trip? (Check for travel bookings, hotel searches, flight comparisons.)
   - Financial & Investment Interests: Are they involved in trading, banking, or cryptocurrency? (Check for stock market websites, financial news, investment-related searches.)
   - Health & Fitness: Any signs of health-related concerns? (Check for searches related to medical conditions, diet plans, fitness programs.)
   - Social & Community Engagement: Are they active on social media or forums? (Check for engagement on Twitter, Reddit, Quora, Discord, etc.)

   Ensure the response remains structured, concise, and justified with logical reasoning based on the given data.
   `;

   return prompt;
}

export default organizedPrompt;
