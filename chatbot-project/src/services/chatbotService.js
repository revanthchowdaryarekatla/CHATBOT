async function sendChatMessage(message) {
  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to get response from chatbot.");
    }

    return data.reply;
  } catch (error) {
    console.error("Chat Error:", error);
    throw new Error("Sorry, I couldn't connect to the AI. Please try again.");
  }
}

export default sendChatMessage;