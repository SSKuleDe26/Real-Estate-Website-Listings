function contactAgent(agent) {
    localStorage.setItem(
        "selectedAgent",
        agent
    );
    alert(
        "You selected " +
        agent +
        ". Visit the Contact page to get in touch."
    );
}
function animateCounter(id, target) {
    const counter = document.getElementById(id);
    if (!counter) return;
    let count = 0;
    const speed = Math.max(1, Math.ceil(target / 100));
    const interval = setInterval(function () {
        count += speed;
        if (count >= target) {
            count = target;
            clearInterval(interval);
        }
        counter.textContent = count;
    }, 20);
}
document.addEventListener("DOMContentLoaded", function () {
    animateCounter("homesSold", 1250);
    animateCounter("clients", 980);
    animateCounter("experience", 25);
    animateCounter("agents", 18);

});