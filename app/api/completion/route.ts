import { StreamingTextResponse, CohereStream } from "ai";
const COHERE_API_KEY = "GeXFR1Cr9YMhjLiDKpysxt5IwJZEuh4i6yslkXrE";
// IMPORTANT! Set 'the runtime to edge
export const runtime = "edge";

export async function POST(req: Request) {
  // Extract the `prompt` from the body of the request
  const { prompt } = await req.json();

  const body = JSON.stringify({
    prompt,
    model: "command-nightly",
    max_tokens: 300,
    stop_sequences: [],
    temperature: 0.9,
    return_likelihoods: "NONE",
    stream: true,
  });

  const response = await fetch("https://api.cohere.ai/v1/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${COHERE_API_KEY}`,
    },
    body,
  });

  // Extract the text response from the Cohere stream
  console.log(response);
  const stream = CohereStream(response);

  // Respond with the stream
  return new StreamingTextResponse(stream);
}

// import axios from 'axios';

// const options = {
//   method: 'POST',
//   url: 'https://api.cohere.ai/v1/generate',
//   headers: {
//     accept: 'application/json',
//     'content-type': 'application/json',
//     authorization: 'Bearer GeXFR1Cr9YMhjLiDKpysxt5IwJZEuh4i6yslkXrE'
//   },
//   data: {
//     max_tokens: 20,
//     truncate: 'END',
//     return_likelihoods: 'NONE',
//     prompt: 'Please explain to me how LLMs work'
//   }
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
