const scoreboard = document.querySelector(".hero-scoreboard");
const fixture = document.querySelector(".hero-fixture");
const playerRows = Array.from(document.querySelectorAll(".hero-player"));
const countdownNodes = Array.from(document.querySelectorAll("[data-kickoff]"));

if (scoreboard) {
    window.setInterval(() => {
        scoreboard.classList.toggle("is-live");
        fixture?.classList.toggle("is-live");
    }, 1800);
}

if (playerRows.length > 0) {
    let activeIndex = 0;
    const updateActive = () => {
        playerRows.forEach((row, index) => row.classList.toggle("is-active", index === activeIndex));
        activeIndex = (activeIndex + 1) % playerRows.length;
    };
    updateActive();
    window.setInterval(updateActive, 2200);
}

if (countdownNodes.length > 0) {
    const formatCountdown = (node) => {
        const kickoff = new Date(node.dataset.kickoff);
        const diff = kickoff.getTime() - Date.now();
        if (Number.isNaN(kickoff.getTime())) {
            node.textContent = "";
            return;
        }
        if (diff <= 0) {
            node.textContent = "Матч-дэй уже начался";
            return;
        }

        const totalMinutes = Math.floor(diff / 60000);
        const days = Math.floor(totalMinutes / (60 * 24));
        const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
        const minutes = totalMinutes % 60;

        if (days > 0) {
            node.textContent = `До стартового свистка: ${days} д ${hours} ч`;
            return;
        }

        node.textContent = `До стартового свистка: ${hours} ч ${String(minutes).padStart(2, "0")} мин`;
    };

    const syncCountdowns = () => {
        countdownNodes.forEach((node) => formatCountdown(node));
    };

    syncCountdowns();
    window.setInterval(syncCountdowns, 30000);
}
