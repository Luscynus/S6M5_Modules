// ==========================================
// ⚙️ CORE STATE & GRAPHICS RENDERING ENGINE
// ==========================================

let gameState = {
    highestUnlocked: 1,
    currentActiveLevel: 1,
    completedLevels: [],
    xp: 0
};

function initProgressEngine() {
    const memory = localStorage.getItem(`gameState_${syllabusData.moduleID}`);
    if (memory) {
        try {
            gameState = JSON.parse(memory);
        } catch(e) {
            console.error("State recovery corrupted, resetting defaults.");
        }
    }
    renderVerticalMapTrack();
    switchLevelView(gameState.currentActiveLevel);
}

function saveEngineState() {
    // 🚀 Combines with your newly defined module identifier
    const saveKey = `gameState_${syllabusData.moduleID}`;
    localStorage.setItem(saveKey, JSON.stringify(gameState));
}

function loadEngineState() {
    const saveKey = `gameState_${syllabusData.moduleID}`;
    const saved = localStorage.getItem(saveKey);
    if (saved) {
        gameState = JSON.parse(saved);
    }
}

function resetEngineState() {
    if(confirm("Are you sure you want to clear your local dashboard memory checkpoint?")) {
        const saveKey = `gameState_${syllabusData.moduleID}`;
        localStorage.removeItem(saveKey);
        gameState = { highestUnlocked: 1, currentActiveLevel: 1, completedLevels: [], xp: 0 };
        saveEngineState();
        location.reload();
    }
}

/* 📡 ENGINE OPTIMIZED VERTICAL TIMELINE ROADMAP RENDERER */
function renderVerticalMapTrack() {
    const trackContainer = document.getElementById("vertical-map-track");
    if (!trackContainer) return;
    trackContainer.innerHTML = "";

    // 1. SETUP THE PARENT CONTAINER
    trackContainer.style.setProperty("display", "flex", "important");
    trackContainer.style.setProperty("flex-direction", "column", "important");
    trackContainer.style.setProperty("gap", "6px", "important"); 
    trackContainer.style.setProperty("justify-content", "flex-start", "important");
    trackContainer.style.setProperty("position", "relative", "important");
    trackContainer.style.setProperty("padding", "10px 0", "important");

    // DYNAMIC PROGRESS COLOR CALCULATION
    const completedCount = gameState.completedLevels.length;
    const completedPercent = Math.min(100, Math.round((completedCount / syllabusData.totalNodes) * 100));
    const activePercent = Math.min(100, Math.round(((completedCount + 1) / syllabusData.totalNodes) * 100));

    // 2. TIMELINE BACKGROUND LINE
    const timelineLine = document.createElement("div");
    timelineLine.style.position = "absolute";
    timelineLine.style.left = "36px"; 
    timelineLine.style.top = "20px";
    timelineLine.style.bottom = "20px";
    timelineLine.style.width = "2px";
    
    timelineLine.style.background = `linear-gradient(to bottom, 
        var(--neon-green) 0%, 
        var(--neon-green) ${completedPercent}%, 
        var(--neon-cyan) ${completedPercent}%, 
        var(--neon-cyan) ${activePercent}%, 
        transparent ${activePercent}%, 
        transparent 100%
    )`; 
    timelineLine.style.zIndex = "0"; 
    trackContainer.appendChild(timelineLine);

    // 3. BUILD THE COMPACT TRACK LIST
    for (let levelNum = 1; levelNum <= syllabusData.totalNodes; levelNum++) {
        const nodeWrapper = document.createElement("div");
        nodeWrapper.className = "map-node-container";
        
        // Progress State Formatting Flags
        if (levelNum === gameState.currentActiveLevel) nodeWrapper.classList.add("active");
        if (gameState.completedLevels.includes(levelNum)) nodeWrapper.classList.add("completed");
        
        const isUnlocked = levelNum <= gameState.highestUnlocked;
        if (isUnlocked) {
            nodeWrapper.onclick = () => { switchLevelView(levelNum); };
        } else {
            nodeWrapper.style.opacity = "0.3";
        }

        const fullTitle = syllabusData.nodeTitles[levelNum] || `Section ${levelNum}`;
        const cleanDisplayTitle = fullTitle.replace(/^\d+\.\s*/, '');

        // PREMIUM SIDE-BY-SIDE SIDEBAR ALIGNMENT
        nodeWrapper.style.setProperty("display", "flex", "important");
        nodeWrapper.style.setProperty("flex-direction", "row", "important");
        nodeWrapper.style.setProperty("align-items", "center", "important");
        nodeWrapper.style.setProperty("justify-content", "flex-start", "important");
        nodeWrapper.style.setProperty("margin", "0", "important");   
        nodeWrapper.style.setProperty("padding", "6px 10px", "important"); 
        nodeWrapper.style.gap = "16px";                                   
        nodeWrapper.style.width = "100%";
        nodeWrapper.style.position = "relative";
        nodeWrapper.style.zIndex = "1"; 
        nodeWrapper.style.borderRadius = "6px";
        nodeWrapper.style.transition = "all 0.2s ease";
        nodeWrapper.style.cursor = isUnlocked ? "pointer" : "not-allowed";

        // INTERACTIVE LIST HOVER EFFECT
        if (isUnlocked) {
            nodeWrapper.onmouseenter = () => {
                nodeWrapper.style.backgroundColor = "rgba(255, 255, 255, 0.03)";
                nodeWrapper.style.transform = "translateX(2px)";
            };
            nodeWrapper.onmouseleave = () => {
                nodeWrapper.style.backgroundColor = "transparent";
                nodeWrapper.style.transform = "translateX(0)";
            };
        }

        // 🚀 TIMELINE MAP DATA CONDITIONS
        const isUncompletedTarget = (levelNum === gameState.highestUnlocked && !gameState.completedLevels.includes(levelNum));
        const isCurrentlyViewed = (levelNum === gameState.currentActiveLevel);

        // Inject HTML
        nodeWrapper.innerHTML = `
            <div class="map-node" style="
                flex-shrink: 0; 
                transform: scale(0.85); 
                margin: 0; 
                position: relative; 
                z-index: 2; 
                background-color: #0d1321 !important;
                
                /* 🎯 BASE COLOR LAYER */
                ${isUncompletedTarget ? 'border-color: #06b6d4 !important; color: #06b6d4 !important;' : ''}
                
                /* ⚡ GLOW SELECTION LAYER */
                ${isUncompletedTarget && isCurrentlyViewed ? 'filter: drop-shadow(0 0 8px rgba(6, 182, 212, 0.6)) !important;' : ''}
            ">${levelNum}</div>
            <div class="node-label" style="font-size: 0.82rem; text-align: left; color: var(--text-main); font-weight: 500; line-height: 1.3; margin: 0; padding: 0;">
                ${cleanDisplayTitle}
            </div>
        `;
        
        trackContainer.appendChild(nodeWrapper);
    }
    syncSidebarInterface();
}

function syncSidebarInterface() {
    document.getElementById("stat-xp").textContent = gameState.completedLevels.length * 150 + " XP";
    document.getElementById("stat-nodes").textContent = gameState.completedLevels.length + " / " + syllabusData.totalNodes;
    
    const containers = document.querySelectorAll(".map-node-container");
    containers.forEach((box, index) => {
        const levelNum = index + 1;
        box.classList.remove("active", "completed");
        if (levelNum === gameState.currentActiveLevel) box.classList.add("active");
        if (gameState.completedLevels.includes(levelNum)) box.classList.add("completed");
    });
}

/* 🖥️ LESSON VIEWPORT CORE DISPLAY ENGINE */
function switchLevelView(levelId) {
    gameState.currentActiveLevel = levelId;
    saveEngineState();

    const viewport = document.getElementById("viewport-root");
    if (!viewport) return;
    viewport.innerHTML = "";

    if (levelId <= syllabusData.totalNodes) {
        viewport.innerHTML = `
            <iframe src="sections/section${levelId}.html" class="content-iframe" style="height: 100%; border: none;"></iframe>
        `;
    } else {
        viewport.innerHTML = `
            <div style="background:#111827; border:1px solid var(--border-glow); padding:40px; border-radius:12px; text-align:center; width:100%; box-sizing:border-box;">
                <h3 style="color:var(--neon-blue); margin-top:0;">📚 ${syllabusData.nodeTitles[levelId]}</h3>
                <p style="color:var(--text-muted); max-width:400px; margin:15px auto;">This section template is ready in the directory timeline framework shell.</p>
            </div>
        `;
    }
}
