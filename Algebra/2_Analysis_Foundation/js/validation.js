/* 🔐 COMPOSITE CHECK COMPILATION VALIDATION */
window.verifyCompositeKey = function() {
    // Find the active frame container first
    const iframe = document.querySelector('.content-iframe');
    if (!iframe) return;
    
    // Gain access to the internal document layer inside the frame
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    
    // Pull the elements directly from inside section1.html!
    const inputVal = iframeDoc.getElementById('composite-key-input').value.trim();
    const feedBox = iframeDoc.getElementById('quiz-feedback-box');
    
    // The secret composite workbook key string value checkpoint ('34')
    if (inputVal === "0") {
        feedBox.style.color = "var(--neon-green)";
        feedBox.textContent = "✓ Key Validated! Section 1 Complete. Section 2 Framework Unlocked.";
        
        if (!gameState.completedLevels.includes(1)) gameState.completedLevels.push(1);
        gameState.highestUnlocked = Math.max(gameState.highestUnlocked, 2);
        gameState.currentActiveLevel = 2;
        
        saveEngineState();
        renderVerticalMapTrack();
        setTimeout(() => { switchLevelView(2); }, 1500);
    } else {
        feedBox.style.color = "var(--neon-danger)";
        feedBox.textContent = "❌ Invalid verification key. Check your workbook calculations and try again.";
    }
};


/* 🔐 SECTION 2 RATIO COMBINATION VALIDATION */
window.verifySection2Key = function() {
    // Find the active frame container first
    const iframe = document.querySelector('.content-iframe');
    if (!iframe) return;
    
    // Gain access to the internal document layer inside the frame
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    
    // Pull the elements directly from inside section2.html!
    const inputVal = iframeDoc.getElementById('section2-key-input').value.trim();
    const feedBox = iframeDoc.getElementById('section2-feedback-box');
    
    // The secret composite verification passcode check (510)
    if (inputVal === "0") { 
        feedBox.style.color = "var(--neon-green)";
        feedBox.textContent = "✓ Key Validated! Section 2 Complete. Section 3 Framework Unlocked.";
        
        if (!gameState.completedLevels.includes(2)) gameState.completedLevels.push(2);
        gameState.highestUnlocked = Math.max(gameState.highestUnlocked, 3);
        gameState.currentActiveLevel = 3;
        
        saveEngineState();
        renderVerticalMapTrack();
        setTimeout(() => { switchLevelView(3); }, 1500);
    } else {
        feedBox.style.color = "var(--neon-danger)";
        feedBox.textContent = "❌ Invalid verification key. Check your simplified fractional terms and try again.";
    }
};


/* 🔐 SECTION 3 REMINDER TRACK VALIDATION */
window.verifySection3Key = function() {
    // Find the active frame container first
    const iframe = document.querySelector('.content-iframe');
    if (!iframe) return;
    
    // Gain access to the internal document layer inside the frame
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    
    // Pull the elements directly from inside section3.html!
    const inputVal = iframeDoc.getElementById('section3-key-input').value.trim();
    const feedBox = iframeDoc.getElementById('section3-feedback-box');
    
    // The secret composite remainder passcode check (04)
    if (inputVal === "0") { 
        feedBox.style.color = "var(--neon-green)";
        feedBox.textContent = "✓ Key Validated! Section 3 Complete. Section 4 Framework Unlocked.";
        
        if (!gameState.completedLevels.includes(3)) gameState.completedLevels.push(3);
        gameState.highestUnlocked = Math.max(gameState.highestUnlocked, 4);
        gameState.currentActiveLevel = 4;
        
        saveEngineState();
        renderVerticalMapTrack();
        setTimeout(() => { switchLevelView(4); }, 1500);
    } else {
        feedBox.style.color = "var(--neon-danger)";
        feedBox.textContent = "❌ Invalid verification key. Check your polynomial remainder tracks and try again.";
    }
};


/* 🔐 SECTION 4 LIMITS VALIDATION CHECKPOINT */
window.verifySection4Key = function() {
    // Find the active frame container first
    const iframe = document.querySelector('.content-iframe');
    if (!iframe) return;
    
    // Gain access to the internal document layer inside the frame
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    
    // Pull the elements directly from inside section4.html!
    const inputVal = iframeDoc.getElementById('section4-key-input').value.trim();
    const feedBox = iframeDoc.getElementById('section4-feedback-box');
    
    // The secret composite workbook constant code key ('52')
    if (inputVal === "0") {
        feedBox.style.color = "var(--neon-green)";
        feedBox.textContent = "✓ Key Validated! Section 4 Complete. Next Section Unlocked.";
        
        if (!gameState.completedLevels.includes(4)) gameState.completedLevels.push(4);
        gameState.highestUnlocked = Math.max(gameState.highestUnlocked, 5);
        gameState.currentActiveLevel = 5;
        
        saveEngineState();
        renderVerticalMapTrack();
        setTimeout(() => { switchLevelView(5); }, 1500);
    } else {
        feedBox.style.color = "var(--neon-danger)";
        feedBox.textContent = "❌ Invalid verification key. Check your piecewise continuity algebra equations and try again.";
    }
};

/* 🔐 SECTION 5 DERIVATIVES VALIDATION CHECKPOINT */
window.verifySection5Key = function() {
    // Find the active frame container and step into its document layer
    const iframe = document.querySelector('.content-iframe');
    if (!iframe) return;
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    
    const inputVal = iframeDoc.getElementById('section5-key-input').value.trim();
    const feedBox = iframeDoc.getElementById('section5-feedback-box');
    
    // The upcoming secret composite derivative calculation key placeholder (5-16)
    if (inputVal === "0") { 
        feedBox.style.color = "var(--neon-green)";
        feedBox.textContent = "✓ Key Validated! Section 5 Complete. Section 6 Unlocked.";
        
        if (!gameState.completedLevels.includes(5)) gameState.completedLevels.push(5);
        gameState.highestUnlocked = Math.max(gameState.highestUnlocked, 6);
        gameState.currentActiveLevel = 6;
        
        saveEngineState();
        renderVerticalMapTrack();
        setTimeout(() => { switchLevelView(6); }, 1500);
    } else {
        feedBox.style.color = "var(--neon-danger)";
        feedBox.textContent = "❌ Invalid verification key. Check your tangent slope point-intercept calculations and try again.";
    }
};

/* 🔐 SECTION 6 DERIVATIVES VALIDATION CHECKPOINT */
window.verifySection6Key = function() {
    // Find the active frame container and step into its document layer
    const iframe = document.querySelector('.content-iframe');
    if (!iframe) return;
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    
    const inputVal = iframeDoc.getElementById('section6-key-input').value.trim();
    const feedBox = iframeDoc.getElementById('section6-feedback-box');
    
    // Validation key derived from turning point coordinates x = -1 and x = 3
    if (inputVal === "0") { 
        feedBox.style.color = "var(--neon-green)";
        feedBox.textContent = "✓ Key Validated! Section 6 Complete. Section 7 Unlocked.";
        
        if (!gameState.completedLevels.includes(6)) gameState.completedLevels.push(6);
        gameState.highestUnlocked = Math.max(gameState.highestUnlocked, 7);
        gameState.currentActiveLevel = 7;
        
        saveEngineState();
        renderVerticalMapTrack();
        setTimeout(() => { switchLevelView(7); }, 1500);
    } else {
        feedBox.style.color = "var(--neon-danger)";
        feedBox.textContent = "❌ Invalid verification key. Check your quadratic derivative factorization and turning points.";
    }
};


/* 🔐 SECTION 7 PRODUCT AND QUOTIENT RULES */
window.verifySection7Key = function() {
    // Find the active frame container and step into its document layer
    const iframe = document.querySelector('.content-iframe');
    if (!iframe) return;
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    
    const inputVal = iframeDoc.getElementById('section7-key-input').value.trim();
    const feedBox = iframeDoc.getElementById('section7-feedback-box');
    
    // Validation key (-28)
    if (inputVal === "0") { 
        feedBox.style.color = "var(--neon-green)";
        feedBox.textContent = "✓ Key Validated! Section 7 Complete. Section 8 Unlocked.";
        
        if (!gameState.completedLevels.includes(7)) gameState.completedLevels.push(7);
        gameState.highestUnlocked = Math.max(gameState.highestUnlocked, 8);
        gameState.currentActiveLevel = 8;
        
        saveEngineState();
        renderVerticalMapTrack();
        setTimeout(() => { switchLevelView(8); }, 1500);
    } else {
        feedBox.style.color = "var(--neon-danger)";
        feedBox.textContent = "❌ Invalid verification key. Check your Quotient Rule application and tangent line linear intercepts.";
    }
};


/* 🔐 SECTION 8: THE CHAIN RULE GATEWAY KEY VALIDATOR */
window.verifySection8Key = function() {
    const iframe = document.querySelector('.content-iframe');
    if (!iframe) return;
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    
    const inputVal = iframeDoc.getElementById('section8-key-input').value.trim();
    const feedBox = iframeDoc.getElementById('section8-feedback-box');
    
    // 🎯 TARGET CONSTANTS VERIFICATION PASSCODE KEY (49)
    if (inputVal === "0") { 
        feedBox.style.color = "var(--neon-green)";
        feedBox.textContent = "✓ Key Validated! Section 8 Complete. Section 9 Unlocked.";
        
        if (!gameState.completedLevels.includes(8)) gameState.completedLevels.push(8);
        gameState.highestUnlocked = Math.max(gameState.highestUnlocked, 9);
        gameState.currentActiveLevel = 9;
        
        saveEngineState();
        renderVerticalMapTrack();
        setTimeout(() => { switchLevelView(9); }, 1500);
    } else {
        feedBox.style.color = "var(--neon-danger)";
        feedBox.textContent = "❌ Invalid verification key. Check your outer multiplier layers and inner polynomial component tracking coefficients.";
    }
};

/* 🔐 SECTION 9: STATIONARY POINTS & SECOND DERIVATIVE KEY VALIDATOR */
window.verifySection9Key = function() {
    const iframe = document.querySelector('.content-iframe');
    if (!iframe) return;
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    
    const inputVal = iframeDoc.getElementById('section9-key-input').value.trim();
    const feedBox = iframeDoc.getElementById('section9-feedback-box');
    
    // 🎯 TARGET VALUE INTERCEPT PASSCODE (Set to "0" per instructions)
    if (inputVal === "0") { 
        feedBox.style.color = "var(--neon-green)";
        feedBox.textContent = "✓ Key Validated! Section 9 Complete. Section 10 Unlocked.";
        
        if (!gameState.completedLevels.includes(9)) gameState.completedLevels.push(9);
        gameState.highestUnlocked = Math.max(gameState.highestUnlocked, 10);
        gameState.currentActiveLevel = 10;
        
        saveEngineState();
        renderVerticalMapTrack();
        setTimeout(() => { switchLevelView(10); }, 1500);
    } else {
        feedBox.style.color = "var(--neon-danger)";
        feedBox.textContent = "❌ Invalid verification key. Evaluate all stationary extrema vectors and inflection test bounds.";
    }
};

/* 🔐 SECTION 10: CURVE SKETCHING & ASYMPTOTES VALIDATOR */
window.verifySection10Key = function() {
    const iframe = document.querySelector('.content-iframe');
    if (!iframe) return;
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    
    const inputVal = iframeDoc.getElementById('section10-key-input').value.trim();
    const feedBox = iframeDoc.getElementById('section10-feedback-box');
    
    // 🎯 TARGET SOLUTION INTERCEPT PASSCODE (Derived from Exercise 18.4 Asymptotes x=1, y=2)
    if (inputVal === "0") { 
        feedBox.style.color = "var(--neon-green)";
        feedBox.textContent = "✓ Key Validated! Section 10 Complete. Section 11 Unlocked.";
        
        if (!gameState.completedLevels.includes(10)) gameState.completedLevels.push(10);
        gameState.highestUnlocked = Math.max(gameState.highestUnlocked, 11);
        gameState.currentActiveLevel = 11;
        
        saveEngineState();
        renderVerticalMapTrack();
        setTimeout(() => { switchLevelView(11); }, 1500);
    } else {
        feedBox.style.color = "var(--neon-danger)";
        feedBox.textContent = "❌ Invalid verification key. Check boundary limits at exclusions and conditions at infinity.";
    }
};

/* 🔐 SECTION 11 VERIFICATION SUBSYSTEM LAYER (FINAL MATRIX LOCK) */
window.verifySection11Key = function() {
    const iframe = document.querySelector('.content-iframe');
    if (!iframe) return;
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    
    const inputVal = iframeDoc.getElementById('section11-key-input').value.trim();
    const feedBox = iframeDoc.getElementById('section11-feedback-box');
    
    // 🎯 TARGET SOLUTION 0
    if (inputVal === "0") { 
        feedBox.style.color = "var(--neon-green)";
        feedBox.textContent = "🏆 Module Complete! Section 11 Validated. Analysis Foundation Module Fully Cleared.";
        
        if (!gameState.completedLevels.includes(11)) gameState.completedLevels.push(11);
        // Cap the active engine indices to prevent boundary overflows
        gameState.highestUnlocked = Math.max(gameState.highestUnlocked, 11);
        gameState.currentActiveLevel = 11;
        
        saveEngineState();
        renderVerticalMapTrack();
    } else {
        feedBox.style.color = "var(--neon-pink)";
        feedBox.textContent = "❌ Verification Failure. Coordinate parameter sets mismatch.";
    }
};




