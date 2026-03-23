const slots = {
  adjective1: { path: "/words/adjective", transform: capitalizeFirstLetter },
  noun1: { path: "/words/noun", transform: identity },
  verb: { path: "/words/verb", transform: identity },
  adjective2: { path: "/words/adjective", transform: identity },
  noun2: { path: "/words/noun", transform: identity }
};

const refreshButton = document.getElementById("refresh-button");

refreshButton.addEventListener("click", () => {
  loadPhrase();
});

loadPhrase();

async function loadPhrase() {
  refreshButton.disabled = true;
  refreshButton.textContent = "Rolling...";

  await Promise.all(Object.entries(slots).map(async ([slotName, config], index) => {
    const card = document.querySelector(`[data-word-slot="${slotName}"]`);
    setCardState(card, "Loading...", "Finding backend...");
    card.style.animationDelay = `${index * 120}ms`;
    try {
      const word = await fetchWithRetry(config.path);
      setCardState(card, config.transform(word.word), `Source ${word.hostname || "unknown"}`);
    } catch (error) {
      console.error(error);
      setCardState(card, "Unavailable", "Retrying backend failed");
    }
  }));

  refreshButton.disabled = false;
  refreshButton.textContent = "Roll A New Phrase";
}

async function fetchWithRetry(path, retries = 8) {
  let attempt = 0;

  while (attempt < retries) {
    try {
      const response = await fetch(path, { cache: "no-store" });
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const payload = await response.json();
      return {
        word: payload.word,
        hostname: response.headers.get("source")
      };
    } catch (error) {
      attempt += 1;
      if (attempt >= retries) {
        throw error;
      }
      await wait(500);
    }
  }
}

function setCardState(card, word, source) {
  card.querySelector(".brick__word").textContent = word;
  card.querySelector(".brick__source").textContent = source;
}

function capitalizeFirstLetter(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function identity(value) {
  return value;
}

function wait(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}
