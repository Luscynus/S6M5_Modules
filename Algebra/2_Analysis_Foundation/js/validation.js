/**
 * 🔐 FULLY AUTOMATED HYPER-ENGINE
 * Dynamically computes success metrics, progression loops, and relative targets.
 */
window.verifySectionKey = function(buttonElement, currentLevel, correctKeyValue, customFailHint) {
    const container = buttonElement.closest('.slide-content');
    if (!container) return;

    const inputEl = container.querySelector('.key-input');
    const feedBox = container.querySelector('.feedback-box');
    if (!inputEl || !feedBox) return;

    if (inputEl.value.trim() === String(correctKeyValue)) {
        feedBox.style.color = "var(--neon-green)";
        
        // 🚀 AUTOMATED MESSAGING COMPUTATION
        feedBox.textContent = `✓ Key Validated! Section ${currentLevel} Complete. Section ${currentLevel + 1} Framework Unlocked.`;
        
        // Progress State Automation
        const nextLevel = currentLevel + 1;
        if (!gameState.completedLevels.includes(currentLevel)) {
            gameState.completedLevels.push(currentLevel);
        }
        gameState.highestUnlocked = Math.max(gameState.highestUnlocked, nextLevel);
        gameState.currentActiveLevel = nextLevel;
        
        saveEngineState();
        renderVerticalMapTrack();
        setTimeout(() => { switchLevelView(nextLevel); }, 1500);
    } else {
        feedBox.style.color = "var(--neon-danger)";
        
        // 🚀 AUTOMATED FAILURE PREFIX
        feedBox.textContent = `❌ Invalid verification key. ${customFailHint}`;
    }
};

/**
 * 🛠️ AUTOMATED VERIFICATION COMPONENT INJECTOR
 * Explicitly exposes an engine initializer that can query inside an iframe window.
 */
window.initializeVerificationSlides = function(targetDocument = document) {
    const verifySlides = targetDocument.querySelectorAll('.dynamic-verification-slide');
    
    verifySlides.forEach(slide => {
        const level = slide.getAttribute('data-level');
        const answer = slide.getAttribute('data-answer');
        const promptText = slide.getAttribute('data-prompt') || "Complete your verification check:";
        const failHint = slide.getAttribute('data-fail') || "Please check your answers and try again.";
        
        slide.innerHTML = `
            <h3 style="color: var(--neon-amber); margin-top: 0;">🏁 Section ${level} Verification Check</h3>
            <p>${promptText}</p>
            
            <div style="display: flex; gap: 10px; margin-top: 20px;">
                <input type="text" class="key-input" placeholder="Enter verification code..." autocomplete="off" 
                       style="background: #0f172a; border: 1px solid #334155; color: var(--text-main); padding: 12px; border-radius: 8px; font-size: 1rem; width: 220px;">
                
                <button style="background: var(--neon-amber); color: #090d16; border: none; padding: 12px 24px; border-radius: 8px; font-weight: bold; cursor: pointer;" 
                        onclick="parent.verifySectionKey(this, ${level}, '${answer}', '${failHint.replace(/'/g, "\\'")}')">
                    Submit Verification
                </button>
            </div>
            
            <!-- Change this line at the bottom of the slide.innerHTML template string: -->
            <div class="feedback-box" style="margin-top: 15px; font-weight: 700;"></div>
        `;
    });
};

// Auto-run on the parent document if needed
document.addEventListener("DOMContentLoaded", () => window.initializeVerificationSlides(document));