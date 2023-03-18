
const axios = require('axios');
const API_KEY = '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';
const API_ENDPOINT = 'https://api.openai.com/v1';

async function generateText(prompt) {

  
    try {
        const response = await axios.post(`${API_ENDPOINT}/engines/davinci-codex/completions`, {
        prompt,
        max_tokens: 100,
        n: 1,
        stop: '\n',
        }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`,
        },
        });
        return response.data.choices[0].text;
    } catch (error) {
        console.error(error);
        return null;
    }
}

    // Example usage
    generateText('Write me a text about burnout').then(console.log);


    async function edit(text, API_KEY) {
        const response = await axios.post(
          'https://api.openai.com/v1/edit',
          {
            text,
            undo_steps: 1,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${API_KEY}`,
            },
          }
        );
      
        return response.data;
      }
      edit("Write me about burnout!", API_KEY)
      .then((response) => {
        console.log(response.);
      })
      .catch((error) => {
        console.error(error);
      });
      