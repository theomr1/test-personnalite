const PROFILES = {
    "☆": {
        name: "Empathique",
        color: "#ff8c42",
        bg: "rgba(255,140,66,0.12)",
        couleur: "Orange",
        caracteristiques:
            "Chaleureux, attentionné, altruiste. Orienté vers le don et les autres.",
        besoin: "Être reconnu pour lui/elle-même, être aimé et apprécié.",
        driver: "Fais Plaisir !",
        stress: "Sur-aide, fait trop, cherche à plaire au détriment de lui/elle-même.",
    },
    "□": {
        name: "Rêveur",
        color: "#8B4513",
        bg: "rgba(139,69,19,0.12)",
        couleur: "Marron",
        caracteristiques: "Posé, Calme, imaginatif",
        besoin: "Silence, Calme, Bulle, de directives",
        driver: "Sois fort !",
        stress: "Se replie dans sa bulle, coupe les liens, relation souple ou isolement.",
    },
    "△": {
        name: "Bourreau de travail",
        color: "#61d4ff",
        bg: "rgba(97,212,255,0.1)",
        couleur: "Bleu",
        caracteristiques:
            "Logique, analytique, factuel, rationnel. Organisé et responsable.",
        besoin: "Être reconnu pour son travail. Respect des délais et ponctualité.",
        driver: "Sois Parfait !",
        stress: "Surcontrôle, s'accroche aux détails, devient rigide et tatillon.",
    },
    "○": {
        name: "Promoteur",
        color: "#ff4d6a",
        bg: "rgba(255,77,106,0.1)",
        couleur: "Rouge",
        caracteristiques:
            "Action, charisme, culot. Individualiste, orienté réseau et objectifs. Supporte mal la routine.",
        besoin: "Excitation, challenges, vibrations. Compétition et dépassement.",
        driver: "Soyez Forts !",
        stress: "Crée de la zizanie, sème la discorde, provoque les conflits.",
    },
    "✚": {
        name: "Persévérant",
        color: "#c77dff",
        bg: "rgba(199,125,255,0.1)",
        couleur: "Violet",
        caracteristiques:
            "Valeurs, loyauté, honnêteté. Engagé, sincère, confiant — mais peut être autoritaire.",
        besoin: "Être reconnu pour ses opinions. Être écouté et respecté.",
        driver: "Soyez Parfaits !",
        stress: "Moralise, prêche à convertir, devient donneur de leçons.",
    },
    "☽": {
        name: "Rebelle",
        color: "#ffd166",
        bg: "rgba(255,209,102,0.12)",
        couleur: "Jaune",
        caracteristiques:
            "Libre, créatif et fun. Aime le renouveau. Sort des cadres !",
        besoin: "Relations ludiques",
        driver: "Fais des efforts !",
        stress: "Raleur et souffle, devient pénible :/",
    },
};

const QUESTIONS = [
    {
        title: "Quels sont vos points forts ?",
        items: [
            { text: "Compatissant, sensible et chaleureux", sym: "☆" },
            { text: "Logique, responsable et organisé", sym: "△" },
            { text: "Engagé, observateur, consciencieux", sym: "✚" },
            { text: "Adaptable, persuasif et charmeur", sym: "○" },
            { text: "Réfléchi, imaginatif, calme", sym: "□" },
            { text: "Spontané, créatif, drôle", sym: "☽" },
        ],
    },
    {
        title: "Pour vous sentir bien, vous avez besoin…",
        items: [
            { text: "De silence et de calme", sym: "□" },
            { text: "D'être reconnu·e pour votre travail", sym: "△" },
            { text: "D'être reconnu·e pour vos idées", sym: "✚" },
            { text: "De vous amuser en toutes occasions", sym: "☽" },
            { text: "D'excitation et de challenges", sym: "○" },
            { text: "De vous sentir apprécié·e", sym: "☆" },
        ],
    },
    {
        title: "Vos caractéristiques",
        items: [
            {
                text: "Doué·e pour l'introspection, vous aimez les tâches concrètes et avez une bonne habileté manuelle.",
                sym: "□",
            },
            {
                text: "« Je pense donc je suis ». Vous appréciez la cohérence et prônez l'intelligence.",
                sym: "△",
            },
            {
                text: "« Carpe diem ». Vous aimez jouer et profiter de l'instant présent.",
                sym: "☽",
            },
            {
                text: "Vous savez être ferme et direct·e quand c'est nécessaire. Vous avez confiance en vous.",
                sym: "○",
            },
            {
                text: "Vous formulez souvent vos opinions, convictions et avez du mal à être contredit·e.",
                sym: "✚",
            },
            {
                text: "Vous êtes doué·e pour l'harmonie, vous donnez facilement et avez du mal à dire non.",
                sym: "☆",
            },
        ],
    },
    {
        title: "Comment exprimez-vous vos ressentis ?",
        items: [
            {
                text: "C'est rare — exprimer ses sentiments, c'est un signe de faiblesse.",
                sym: "○",
            },
            {
                text: "C'est facile, c'est même très utile pour se faire comprendre.",
                sym: "☆",
            },
            {
                text: "C'est souvent facile et très spontané ! Les gens savent toujours ce que vous ressentez grâce à votre non-verbal fort.",
                sym: "☽",
            },
            {
                text: "Exprimer ses sentiments, c'est inutile au travail. De toutes façons, vous ressentez peu d'émotions.",
                sym: "△",
            },
            {
                text: "Vous êtes si calme que vous ne vous mettez jamais en colère et riez difficilement. Humeur très stable.",
                sym: "□",
            },
            {
                text: "Vous cachez une grande sensibilité. L'émotion la plus courante chez vous est la colère.",
                sym: "✚",
            },
        ],
    },
    {
        title: "Vous êtes invité·e à une soirée, que faites-vous ?",
        items: [
            {
                text: "Je trouve un endroit tranquille pour me détendre et observer. Je participe aux conversations si on m'y invite.",
                sym: "□",
            },
            {
                text: "Je cherche des conversations profondes où je peux exprimer mes valeurs.",
                sym: "✚",
            },
            {
                text: "Conscient·e de mon charisme, je suis à l'aise au centre de l'attention et propose des activités.",
                sym: "○",
            },
            {
                text: "Je m'assure que chacun se sente bienvenu et à l'aise. Je passe du temps à créer des liens.",
                sym: "☆",
            },
            {
                text: "Je suis venu·e pour rire ! Je fais des blagues et rends la soirée plus légère.",
                sym: "☽",
            },
            {
                text: "Je me rends utile en aidant à organiser ou en participant à des conversations intéressantes.",
                sym: "△",
            },
        ],
    },
    {
        title: "Comment sont vos interactions ?",
        items: [
            {
                text: "Vous ressentez en premier les gens et les ambiances. Il vous arrive de vous suradapter pour ne pas déplaire.",
                sym: "☆",
            },
            {
                text: "Vous êtes du genre réactif ! Si quelqu'un ne vous plaît pas, il le saura vite. Vous ne faites pas semblant.",
                sym: "☽",
            },
            {
                text: "Votre communication est souvent basée sur un échange d'informations concrètes et utiles.",
                sym: "△",
            },
            {
                text: "Face à de nouvelles rencontres, vous êtes souvent en difficulté et attendez d'être sollicité·e.",
                sym: "□",
            },
            {
                text: "Vous êtes orienté·e vers l'action. Avec un objectif, vous serez charmeur·se. Sinon, vous êtes indépendant·e.",
                sym: "○",
            },
            {
                text: "Vous évaluez les gens selon vos opinions ; vous pouvez être perçu·e comme autoritaire.",
                sym: "✚",
            },
        ],
    },
    {
        title: "Dans une équipe, quel rôle avez-vous tendance à jouer ?",
        items: [
            {
                text: "J'injecte de la créativité et de la légèreté pour maintenir la motivation.",
                sym: "☽",
            },
            {
                text: "Je veille à ce que les décisions soient prises de manière juste et équitable.",
                sym: "✚",
            },
            {
                text: "J'encourage l'équipe à passer à l'action rapidement et efficacement.",
                sym: "○",
            },
            {
                text: "J'organise les tâches et m'assure que les objectifs soient atteints.",
                sym: "△",
            },
            {
                text: "J'analyse les situations et propose des idées réfléchies.",
                sym: "□",
            },
            {
                text: "Je m'assure que tout le monde se sente bien et que l'équipe est soudée.",
                sym: "☆",
            },
        ],
    },
];

let currentQ = 0;
let answers = [];

function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function startTest() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("progress-wrap").style.display = "block";
    document.getElementById("site-header").style.display = "block";
    answers = QUESTIONS.map((q) => shuffle(q.items.map((_, i) => i)));
    buildQuestions();
    showQuestion(0);
}

function buildQuestions() {
    const wrap = document.getElementById("questions-wrap");
    wrap.innerHTML = "";
    QUESTIONS.forEach((q, qi) => {
        const card = document.createElement("div");
        card.className = "question-card";
        card.id = "q" + qi;

        const header = document.createElement("div");
        header.className = "q-header";
        header.innerHTML =
            '<div class="q-number">Question ' +
            (qi + 1) +
            " sur " +
            QUESTIONS.length +
            "</div>" +
            '<div class="q-title">' +
            q.title +
            "</div>" +
            '<div class="q-hint"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>Glissez-déposez les cartes pour les réordonner</div>';

        const labelTop = document.createElement("div");
        labelTop.className = "list-label list-label-top";
        labelTop.innerHTML = "<span>&#9650;</span> Correspond le plus à moi";

        const list = document.createElement("div");
        list.className = "drag-list";
        list.dataset.q = qi;
        answers[qi].forEach((itemIdx) =>
            list.appendChild(buildDragItem(qi, itemIdx))
        );

        const labelBottom = document.createElement("div");
        labelBottom.className = "list-label list-label-bottom";
        labelBottom.innerHTML =
            "<span>&#9660;</span> Correspond le moins à moi";

        const nav = document.createElement("div");
        nav.className = "q-nav";
        if (qi > 0) {
            const prev = document.createElement("button");
            prev.className = "btn-nav btn-prev";
            prev.innerHTML = "← Précédent";
            prev.onclick = () => showQuestion(qi - 1);
            nav.appendChild(prev);
        }
        const next = document.createElement("button");
        next.className =
            "btn-nav " +
            (qi === QUESTIONS.length - 1 ? "btn-finish" : "btn-next");
        next.innerHTML =
            qi === QUESTIONS.length - 1 ? "✦ Voir mes résultats" : "Suivant →";
        next.onclick = () =>
            qi === QUESTIONS.length - 1 ? showResults() : showQuestion(qi + 1);
        nav.appendChild(next);

        card.appendChild(header);
        card.appendChild(labelTop);
        card.appendChild(list);
        card.appendChild(labelBottom);
        card.appendChild(nav);
        wrap.appendChild(card);
        setupDragDrop(list, qi);
    });
}

function buildDragItem(qi, itemIdx) {
    const item = QUESTIONS[qi].items[itemIdx];
    const prof = PROFILES[item.sym];
    const div = document.createElement("div");
    div.className = "drag-item";
    div.dataset.idx = itemIdx;
    div.draggable = true;
    div.innerHTML =
        '<div class="drag-handle"><span></span><span></span><span></span></div>' +
        '<div class="line-number">—.</div>' +
        '<div class="drag-text">' +
        item.text +
        "</div>" +
        '<div class="rank-badge">—</div>' +
        '<div class="sym-pill" style="background:' +
        prof.bg +
        ";color:" +
        prof.color +
        '">' +
        item.sym +
        "</div>";
    return div;
}

function updateRanks(list) {
    const items = list.querySelectorAll(".drag-item");
    const total = items.length;
    items.forEach((item, i) => {
        const pts = total - i;
        const qi = parseInt(list.dataset.q);
        const itemIdx = parseInt(item.dataset.idx);
        const sym = QUESTIONS[qi].items[itemIdx].sym;
        const color = PROFILES[sym].color;
        const bg = PROFILES[sym].bg;
        const lineNum = item.querySelector(".line-number");
        if (lineNum) lineNum.textContent = i + 1 + ".";
        const badge = item.querySelector(".rank-badge");
        badge.textContent = pts + " pts";
        badge.style.color = color;
        badge.style.background = bg;
        badge.style.borderColor = color + "55";
    });
}

function setupDragDrop(list, qi) {
    let dragSrc = null;

    list.addEventListener("dragstart", (e) => {
        dragSrc = e.target.closest(".drag-item");
        if (!dragSrc) return;
        dragSrc.classList.add("dragging");
        e.dataTransfer.effectAllowed = "move";
    });

    list.addEventListener("dragend", () => {
        document
            .querySelectorAll(".drag-item")
            .forEach((el) => el.classList.remove("dragging", "drag-over"));
        saveOrder(list, qi);
        updateRanks(list);
    });

    list.addEventListener("dragover", (e) => {
        e.preventDefault();
        if (!dragSrc) return;
        const target = e.target.closest(".drag-item");
        if (!target || target === dragSrc) return;
        document
            .querySelectorAll(".drag-item")
            .forEach((el) => el.classList.remove("drag-over"));
        target.classList.add("drag-over");
        const rect = target.getBoundingClientRect();
        if (e.clientY < rect.top + rect.height / 2)
            list.insertBefore(dragSrc, target);
        else list.insertBefore(dragSrc, target.nextSibling);
    });

    list.addEventListener("dragleave", (e) => {
        if (!e.relatedTarget || !list.contains(e.relatedTarget))
            document
                .querySelectorAll(".drag-item")
                .forEach((el) => el.classList.remove("drag-over"));
    });

    list.addEventListener("drop", (e) => {
        e.preventDefault();
        document
            .querySelectorAll(".drag-item")
            .forEach((el) => el.classList.remove("drag-over"));
        saveOrder(list, qi);
        updateRanks(list);
    });

    // Touch support
    let touchItem = null,
        touchClone = null,
        touchOffX = 0,
        touchOffY = 0;
    list.querySelectorAll(".drag-item").forEach((item) => {
        item.addEventListener(
            "touchstart",
            (e) => {
                touchItem = item;
                const touch = e.touches[0];
                const rect = item.getBoundingClientRect();
                touchOffX = touch.clientX - rect.left;
                touchOffY = touch.clientY - rect.top;
                touchClone = item.cloneNode(true);
                touchClone.style.cssText =
                    "position:fixed;left:" +
                    rect.left +
                    "px;top:" +
                    rect.top +
                    "px;width:" +
                    rect.width +
                    "px;opacity:0.85;z-index:9999;pointer-events:none;box-shadow:0 10px 40px rgba(0,0,0,0.5);border-radius:14px;";
                document.body.appendChild(touchClone);
                item.style.opacity = "0.3";
                e.preventDefault();
            },
            { passive: false }
        );

        item.addEventListener(
            "touchmove",
            (e) => {
                if (!touchClone) return;
                const touch = e.touches[0];
                touchClone.style.left = touch.clientX - touchOffX + "px";
                touchClone.style.top = touch.clientY - touchOffY + "px";
                list.querySelectorAll(".drag-item").forEach((el) =>
                    el.classList.remove("drag-over")
                );
                const under = document.elementFromPoint(
                    touch.clientX,
                    touch.clientY
                );
                const target = under && under.closest(".drag-item");
                if (target && target !== touchItem && list.contains(target)) {
                    target.classList.add("drag-over");
                    const rect = target.getBoundingClientRect();
                    if (touch.clientY < rect.top + rect.height / 2)
                        list.insertBefore(touchItem, target);
                    else list.insertBefore(touchItem, target.nextSibling);
                }
                e.preventDefault();
            },
            { passive: false }
        );

        item.addEventListener("touchend", () => {
            if (touchClone) {
                touchClone.remove();
                touchClone = null;
            }
            if (touchItem) {
                touchItem.style.opacity = "";
                touchItem = null;
            }
            document
                .querySelectorAll(".drag-item")
                .forEach((el) => el.classList.remove("drag-over"));
            saveOrder(list, qi);
            updateRanks(list);
        });
    });

    updateRanks(list);
}

function saveOrder(list, qi) {
    const items = list.querySelectorAll(".drag-item");
    answers[qi] = Array.from(items).map((el) => parseInt(el.dataset.idx));
}

function showQuestion(index) {
    document
        .querySelectorAll(".question-card")
        .forEach((c) => c.classList.remove("active"));
    document.getElementById("q" + index).classList.add("active");
    currentQ = index;
    updateProgress();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateProgress() {
    const pct = ((currentQ + 1) / QUESTIONS.length) * 100;
    document.getElementById("prog-fill").style.width = pct + "%";
    document.getElementById("prog-count").textContent =
        currentQ + 1 + " / " + QUESTIONS.length;
    // gradient is on .progress-bar container — no JS needed;
}

function calcScores() {
    const scores = { "☆": 0, "□": 0, "△": 0, "○": 0, "✚": 0, "☽": 0 };
    QUESTIONS.forEach((q, qi) => {
        answers[qi].forEach((itemIdx, rank) => {
            scores[q.items[itemIdx].sym] += 6 - rank;
        });
    });
    return scores;
}

function showResults() {
    const lastList = document.querySelector(
        "#q" + (QUESTIONS.length - 1) + " .drag-list"
    );
    if (lastList) saveOrder(lastList, QUESTIONS.length - 1);
    document
        .querySelectorAll(".question-card")
        .forEach((c) => c.classList.remove("active"));
    document.getElementById("progress-wrap").style.display = "none";
    document.getElementById("site-header").style.display = "none";

    const scores = calcScores();
    showResultsFromScores(scores);
}

function showResultsFromScores(scores) {
    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const maxScore = sorted[0][1];
    const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
    const pct = {};
    Object.entries(scores).forEach(
        ([sym, s]) => (pct[sym] = Math.round((s / totalScore) * 100))
    );

    // ---- Bar chart ----
    if (window._barChart) {
        window._barChart.destroy();
    }
    const ctxBar = document.getElementById("barChart");
    if (ctxBar) {
        const barSorted = [...sorted];
        window._barChart = new Chart(ctxBar.getContext("2d"), {
            type: "bar",
            data: {
                labels: barSorted.map(([sym]) => PROFILES[sym].name),
                datasets: [
                    {
                        data: barSorted.map(([sym]) => scores[sym]),
                        backgroundColor: barSorted.map(
                            ([sym]) => PROFILES[sym].color + "99"
                        ),
                        borderColor: barSorted.map(
                            ([sym]) => PROFILES[sym].color
                        ),
                        borderWidth: 2,
                        borderRadius: 8,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: {
                        grid: { color: "rgba(255,255,255,0.05)" },
                        ticks: { color: "#888", font: { size: 11 } },
                    },
                    x: {
                        grid: { display: false },
                        ticks: { color: "#ccc", font: { size: 11 } },
                    },
                },
            },
        });
    }

    // ---- Profile bars ----
    const barsEl = document.getElementById("profile-bars-list");
    if (barsEl) {
        barsEl.innerHTML = "";
        sorted.forEach(([sym]) => {
            const prof = PROFILES[sym];
            const p = pct[sym];
            barsEl.innerHTML +=
                '<div class="profile-bar-row">' +
                '<div class="profile-bar-header">' +
                '<span style="display:inline-flex;align-items:center;gap:6px">' +
                '<span style="width:24px;text-align:center;font-size:16px;color:' +
                prof.color +
                '">' +
                sym +
                "</span>" +
                '<span class="profile-bar-name" style="color:' +
                prof.color +
                '">' +
                prof.name +
                "</span>" +
                "</span>" +
                '<span class="profile-bar-score">' +
                p +
                "%</span>" +
                "</div>" +
                '<div class="profile-bar-track">' +
                '<div class="profile-bar-fill" style="width:0%;background:' +
                prof.color +
                '" data-w="' +
                p +
                '"></div>' +
                "</div>" +
                "</div>";
        });
        setTimeout(() => {
            barsEl.querySelectorAll(".profile-bar-fill").forEach((el) => {
                el.style.width = el.dataset.w + "%";
            });
        }, 200);
    }

    // ---- Hero block ----
    const topSym = sorted[0][0];
    const topProf = PROFILES[topSym];
    const heroEl = document.getElementById("results-hero");
    if (heroEl) {
        heroEl.innerHTML =
            '<div class="results-hero-block" style="border-color:' +
            topProf.color +
            "33;background:" +
            topProf.bg +
            '">' +
            '<div class="results-hero-eyebrow" style="color:' +
            topProf.color +
            '">Profil dominant</div>' +
            '<div class="results-hero-title">Tu es <em style="color:' +
            topProf.color +
            '">' +
            topProf.name +
            "</em></div>" +
            '<div class="results-hero-desc">' +
            topProf.caracteristiques +
            "</div>" +
            '<div class="results-hero-badge" style="background:' +
            topProf.bg +
            ";border:1px solid " +
            topProf.color +
            "55;color:" +
            topProf.color +
            '">' +
            topSym +
            " " +
            topProf.name +
            " · Couleur " +
            topProf.couleur +
            "</div>" +
            "</div>";
    }

    const grid = document.getElementById("scores-grid");
    grid.innerHTML = "";

    sorted.forEach(([sym, score], i) => {
        const prof = PROFILES[sym];
        const barPct = Math.round((score / maxScore) * 100);
        const freq = pct[sym];
        const isFirst = i === 0;

        const acc = document.createElement("div");
        acc.className = "accordion" + (isFirst ? " rank1 open" : "");

        acc.innerHTML =
            '<button class="accordion-trigger" onclick="toggleAccordion(this)">' +
            '<div class="accordion-rank">' +
            (i + 1) +
            "</div>" +
            '<div class="accordion-sym" style="color:' +
            prof.color +
            '">' +
            sym +
            "</div>" +
            '<div class="accordion-title-wrap">' +
            '<div class="accordion-profile" style="color:' +
            prof.color +
            '">' +
            prof.name +
            "</div>" +
            '<div class="accordion-subtitle">Couleur : ' +
            prof.couleur +
            "</div>" +
            "</div>" +
            '<div style="display:flex;align-items:center;gap:8px;margin-right:4px">' +
            '<div style="font-size:11px;font-weight:700;color:' +
            prof.color +
            ";background:" +
            prof.bg +
            ";border:1px solid " +
            prof.color +
            "44;border-radius:20px;padding:3px 10px;margin-right:4px;box-shadow:0 0 8px " +
            prof.color +
            '33">' +
            freq +
            "%</div>" +
            '<div class="accordion-score" style="color:' +
            prof.color +
            '">' +
            score +
            "pts</div>" +
            "</div>" +
            '<div class="accordion-arrow">&#9660;</div>' +
            "</button>" +
            '<div class="accordion-body">' +
            '<div class="acc-bar-wrap"><div class="acc-bar-fill" style="width:0%;background:' +
            prof.color +
            '" data-pct="' +
            barPct +
            '"></div></div>' +
            '<div class="acc-grid">' +
            '<div class="acc-card full" style="border-color:' +
            prof.color +
            '22">' +
            '<div class="acc-card-label" style="color:' +
            prof.color +
            '">Caractéristiques</div>' +
            '<div class="acc-card-content" style="color:' +
            prof.color +
            '">' +
            prof.caracteristiques +
            "</div>" +
            "</div>" +
            '<div class="acc-card" style="border-color:' +
            prof.color +
            '22">' +
            '<div class="acc-card-label" style="color:' +
            prof.color +
            '">Besoin</div>' +
            '<div class="acc-card-content" style="color:' +
            prof.color +
            '">' +
            prof.besoin +
            "</div>" +
            "</div>" +
            '<div class="acc-card" style="border-color:' +
            prof.color +
            '22">' +
            '<div class="acc-card-label" style="color:' +
            prof.color +
            '">Driver</div>' +
            '<div class="acc-card-content" style="color:' +
            prof.color +
            '">' +
            prof.driver +
            "</div>" +
            "</div>" +
            '<div class="acc-card full" style="border-color:#ff6b9d22">' +
            '<div class="acc-card-label" style="color:#ff6b9d">Sous le stress…</div>' +
            '<div class="acc-card-content" style="color:#ff6b9d">' +
            prof.stress +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>";

        grid.appendChild(acc);
    });

    // ---- Share URL ----
    const symEncode = {
        "☆": "O",
        "□": "M",
        "△": "B",
        "○": "R",
        "✚": "V",
        "☽": "J",
    };
    const shareParams = new URLSearchParams();
    Object.entries(scores).forEach(([sym, s]) =>
        shareParams.set(symEncode[sym] || encodeURIComponent(sym), s)
    );
    const shareUrl =
        window.location.origin +
        window.location.pathname +
        "?" +
        shareParams.toString();
    const shareEl = document.getElementById("share-section");
    if (shareEl) {
        shareEl.innerHTML =
            '<div style="margin-top:20px;padding-top:14px;border-top:1px solid var(--border)">' +
            '<div style="font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#61d4ff;margin-bottom:16px">Partager vos résultats à vos amis</div>' +
            '<div style="display:flex;align-items:center;gap:10px;background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:16px 20px">' +
            '<div style="flex:1;font-size:12px;color:var(--muted);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' +
            shareUrl +
            "</div>" +
            '<button id="copy-btn" onclick="copyShareUrl(\'' +
            shareUrl.replace(/'/g, "'") +
            '\')" style="background:linear-gradient(135deg,#2196f3,#61d4ff);color:#fff;border:none;border-radius:8px;padding:8px 16px;font-size:12px;font-weight:600;cursor:pointer;white-space:nowrap;font-family:sans-serif;min-width:100px">Copier 🔗</button>' +
            "</div>" +
            "</div>";
        shareEl.style.display = "block";
    }
    document.getElementById("results").style.display = "flex";
    window.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(() => {
        document.querySelectorAll(".acc-bar-fill").forEach((el) => {
            el.style.width = el.dataset.pct + "%";
        });
    }, 150);

    // ---- Radar chart ----
    window._radarScores = {};
    const symToKey = {
        "☆": "orange",
        "□": "marron",
        "△": "bleu",
        "○": "rouge",
        "✚": "violet",
        "☽": "jaune",
    };
    Object.entries(scores).forEach(([sym, val]) => {
        const k = symToKey[sym];
        if (k) window._radarScores[k] = val;
    });
    buildRadarChart();

    if (window._radarResizeHandler)
        window.removeEventListener("resize", window._radarResizeHandler);
    let _radarResizeTimer;
    window._radarResizeHandler = () => {
        clearTimeout(_radarResizeTimer);
        _radarResizeTimer = setTimeout(buildRadarChart, 150);
    };
    window.addEventListener("resize", window._radarResizeHandler);
}

function buildRadarChart() {
    const profileColors = {
        orange: "#ff8c42",
        jaune: "#ffd166",
        marron: "#8B4513",
        rouge: "#ff4d6a",
        bleu: "#61d4ff",
        violet: "#c77dff",
    };
    const keyOrder = ["orange", "jaune", "marron", "rouge", "bleu", "violet"];
    const w = window.innerWidth;
    const profileNames = {
        orange: "Empathique",
        jaune: "Rebelle",
        marron: "Rêveur",
        rouge: "Promoteur",
        bleu: w < 500 ? ["Bourreau", "de travail"] : "Bourreau de travail",
        violet: "Persévérant",
    };
    const radarScores = window._radarScores || {};
    if (window._radarChart) {
        window._radarChart.destroy();
        window._radarChart = null;
    }
    const ctx = document.getElementById("radarChart");
    if (!ctx) return;
    window._radarChart = new Chart(ctx.getContext("2d"), {
        type: "radar",
        data: {
            labels: keyOrder.map((k) => profileNames[k]),
            datasets: [
                {
                    label: "Votre profil",
                    data: keyOrder.map((k) => radarScores[k] || 0),
                    backgroundColor: "rgba(97,212,255,0.1)",
                    borderColor: "#61d4ff",
                    borderWidth: 2.5,
                    pointBackgroundColor: keyOrder.map((k) => profileColors[k]),
                    pointBorderColor: "#0d0d14",
                    pointBorderWidth: 2,
                    pointRadius: 7,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                r: {
                    grid: { color: "rgba(255,255,255,0.07)" },
                    angleLines: { color: "rgba(255,255,255,0.07)" },
                    pointLabels: {
                        color: keyOrder.map((k) => profileColors[k]),
                        font: () => ({
                            size: w < 480 ? 9 : w < 640 ? 11 : 13,
                            family: "DM Sans",
                            weight: "600",
                        }),
                        padding: 12,
                        callback: (label) => label,
                    },
                    ticks: { display: false, backdropColor: "transparent" },
                    suggestedMin: 0,
                },
            },
        },
    });
}

function toggleAccordion(btn) {
    document.querySelectorAll(".accordion.open").forEach((a) => {
        if (a !== btn.closest(".accordion")) a.classList.remove("open");
    });
    const acc = btn.closest(".accordion");
    acc.classList.toggle("open");
}

function confirmRestart() {
    if (window.confirm("Recommencer le test depuis le début ?")) restart();
}

function restart() {
    document.getElementById("results").style.display = "none";
    document.getElementById("intro").style.display = "flex";
    document.getElementById("site-header").style.display = "none";
    document.getElementById("progress-wrap").style.display = "none";
    document.getElementById("questions-wrap").innerHTML = "";
    currentQ = 0;
    answers = [];
    window.history.replaceState({}, "", window.location.pathname);
}

function copyShareUrl(url) {
    navigator.clipboard.writeText(url).then(() => {
        const btn = document.getElementById("copy-btn");
        if (!btn) return;
        btn.textContent = "Copié 👍";
        btn.style.background = "linear-gradient(135deg,#06d6a0,#34c759)";
        btn.style.cursor = "default";
        setTimeout(() => {
            btn.textContent = "Copier 🔗";
            btn.style.background = "linear-gradient(135deg,#2196f3,#61d4ff)";
            btn.style.cursor = "pointer";
        }, 1500);
    });
}

// Auto-load shared results from URL params
(function () {
    const params = new URLSearchParams(window.location.search);
    const syms = ["O", "M", "B", "R", "V", "J"];
    const symMap = { O: "☆", M: "□", B: "△", R: "○", V: "✚", J: "☽" };
    if (syms.every((s) => params.has(s))) {
        window.addEventListener("DOMContentLoaded", () => {
            const scores = {};
            syms.forEach((s) => {
                scores[symMap[s]] = parseInt(params.get(s)) || 0;
            });
            document.getElementById("intro").style.display = "none";
            document.getElementById("site-header").style.display = "none";
            // inject scores and trigger showResults
            window._injectedScores = scores;
            showResultsFromScores(scores);
        });
    }
})();

const boutonRestart = document.querySelector("#restart-button");
if (boutonRestart) boutonRestart.onclick = restart;

const boutonStart = document.querySelector("#btn-start");
if (boutonStart) boutonStart.onclick = startTest;

const header = document.querySelector("header");
if (header) header.onclick = confirmRestart;
