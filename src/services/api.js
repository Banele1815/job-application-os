const API_URL = "http://localhost:5000/api";

export async function checkApiHealth() {
  const response = await fetch(`${API_URL}/health`);

  if (!response.ok) {
    throw new Error("API request failed");
  }

  return response.json();
}