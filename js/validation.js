/**
 * 🔐 ADVANCED MULTI-FIELD VERIFICATION ENGINE
 * Dynamically evaluates multi-layered workbook exercises across complex arrays.
 */
window.verifySectionKey = function(buttonElement, currentLevel, correctAnswersArray, customFailHint) {
    const container = buttonElement.closest('.slide-content');
    if (!container) return;

    // 1. Grab all generated input boxes inside this specific block container
    const inputElements = container.querySelectorAll('.key-input');
    const feedBox = container.querySelector('.feedback-box');
    if (!inputElements.length || !feedBox) return;

    // 🔑 CONFIGURE YOUR SECRET MASTERCODE PASSPHRASE HERE
    const MY_SECRET_MASTERCODE = "aaa";

    // Check if the administrator typed the master override code into the hidden input slot
    const bypassInput = container.querySelector('.master-bypass-input');
    const isMastercodeActive = bypassInput && bypassInput.value.trim() === MY_SECRET_MASTERCODE;

    let allCorrect = true;

    // Only evaluate standard answer verification matrices if mastercode is not triggered
    if (!isMastercodeActive) {
        inputElements.forEach((inputEl, index) => {
            const userValue = inputEl.value.trim();
            const targetValue = String(correctAnswersArray[index]).trim();
            const checkIcon = inputEl.parentElement.querySelector('.field-status-icon');

            if (userValue === targetValue) {
                // Field Specific Success Feedback Visuals
                inputEl.style.borderColor = "var(--neon-green)";
                if (checkIcon) {
                    checkIcon.textContent = "✓";
                    checkIcon.style.color = "var(--neon-green)";
                }
            } else {
                // Field Specific Failure Feedback Visuals
                allCorrect = false;
                inputEl.style.borderColor = "var(--neon-danger)";
                if (checkIcon) {
                    checkIcon.textContent = "❌";
                    checkIcon.style.color = "var(--neon-danger)";
                }
            }
        });
    }

    // 3. Overall Milestone Process Execution
    if (isMastercodeActive || allCorrect) {
        feedBox.style.color = "var(--neon-green)";
        feedBox.textContent = isMastercodeActive
            ? `⚡ Mastercode Overrides Active! Section ${currentLevel} Complete.`
            : `✓ All Keys Validated! Section ${currentLevel} Complete. Section ${currentLevel + 1} Framework Unlocked.`;
        
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
        feedBox.textContent = `❌ Verification Check Failed. ${customFailHint}`;
    }
};

/**
 * 🛠️ ADVANCED MULTI-VERIFICATION COMPONENT INJECTOR
 * Dynamically builds multiple inputs based on answer data counts with inline validation structures.
 */
window.initializeVerificationSlides = function(targetDocument = document) {
    const verifySlides = targetDocument.querySelectorAll('.dynamic-verification-slide');
    
    verifySlides.forEach(slide => {
        const level = slide.getAttribute('data-level');
        const promptText = slide.getAttribute('data-prompt') || "Complete your verification check:";
        const failHint = slide.getAttribute('data-fail') || "Please check your answers and try again.";
        
        // Dynamic String to Array Conversions (Semicolon split)
        const answersRaw = slide.getAttribute('data-answers') || "0";
        const answersArray = answersRaw.split(';').map(s => s.trim());
        
        const labelsRaw = slide.getAttribute('data-labels') || "";
        const labelsArray = labelsRaw.split(';').map(s => s.trim());

        let inputsHTML = `<div style="display: flex; flex-direction: column; gap: 14px; margin-top: 22px; width: 100%; max-width: 100%;">`;
        
        answersArray.forEach((ans, index) => {
            const exerciseTitle = labelsArray[index] || `Exercise Slot ${index + 1}`;
            inputsHTML += `
                <div style="display: flex; align-items: center; justify-content: flex-start; background: rgba(15, 23, 42, 0.4); border: 1px solid #1e293b; padding: 12px 14px; border-radius: 8px; gap: 20px; width: 100%; box-sizing: border-box;">
                    <span style="font-size: 0.85rem; color: #94a3b8; font-weight: 600; text-align: left; line-height: 1.4; flex-grow: 1; min-width: 0; word-wrap: break-word;">
                        ${exerciseTitle}
                    </span>
                    <div style="position: relative; display: inline-block; flex-shrink: 0; margin-left: auto;">
                        <input type="text" class="key-input" placeholder="Enter answer..." autocomplete="off" 
                               oninput="
                                   let tester = document.getElementById('math-width-tester') || document.createElement('span');
                                   tester.id = 'math-width-tester';
                                   tester.style.fontFamily = window.getComputedStyle(this).fontFamily;
                                   tester.style.fontSize = window.getComputedStyle(this).fontSize;
                                   tester.style.fontWeight = window.getComputedStyle(this).fontWeight;
                                   tester.style.letterSpacing = window.getComputedStyle(this).letterSpacing;
                                   tester.style.visibility = 'hidden';
                                   tester.style.position = 'absolute';
                                   tester.style.whiteSpace = 'pre';
                                   
                                   tester.textContent = this.value || this.placeholder;
                                   if (!tester.parentElement) document.body.appendChild(tester);
                                   
                                   this.style.width = Math.max(140, Math.min(tester.getBoundingClientRect().width + 56, 320)) + 'px';
                               "
                               style="background: #090d16; border: 1px solid #334155; color: var(--text-main); padding: 10px 36px 10px 12px; border-radius: 6px; font-size: 0.9rem; width: 140px; text-align: left !important; display: block; box-sizing: border-box;">
                        <span class="field-status-icon" style="position: absolute; right: 12px; top: 50%; transform: translateY(-50%); font-weight: bold; font-size: 0.95rem; pointer-events: none;"></span>
                    </div>
                </div>
            `;
        });
        
        inputsHTML += `</div>`;

        // Inject combined modular component payload wrapped into an anchored relative box for the bypass slot
        slide.innerHTML = `
            <div style="position: relative; width: 100%;">
                
                <!-- 🛠️ Discrete Mastercode Bypass Wrapper Control Panel -->
                <div class="bypass-trigger-zone" style="position: absolute; top: -5px; right: 0; display: flex; align-items: center; gap: 6px; opacity: 0.15; transition: opacity 0.2s;" onmouseenter="this.style.opacity='1'" onmouseleave="this.style.opacity='0.15'">
                    <span style="font-size: 10px; color: #94a3b8; font-family: monospace; pointer-events: none;">&bull;</span>
                    <input type="text" class="master-bypass-input" placeholder="..." autocomplete="off"
                           style="width: 60px; background: rgba(30, 41, 59, 0.5); border: 1px solid #334155; color: var(--text-main); font-size: 0.65rem; text-align: center; padding: 2px 4px; border-radius: 4px; outline: none; transition: border-color 0.15s;">
                </div>
                
                <h3 style="color: var(--neon-amber); margin-top: 0;">🏁 Section ${level} Verification Check</h3>
                <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.4; margin: 0 0 16px 0;">${promptText}</p>
                
                ${inputsHTML}
                
                <div style="margin-top: 24px; display: flex; flex-direction: column; gap: 14px; align-items: flex-start;">
                    <button style="background: var(--neon-amber); color: #090d16; border: none; padding: 11px 26px; border-radius: 6px; font-weight: bold; cursor: pointer; font-size: 0.9rem; transition: all 0.15s ease;"
                            onclick="parent.verifySectionKey(this, ${level}, [${answersArray.map(a => `'${a.replace(/'/g, "\\'")}'`).join(',')}], '${failHint.replace(/'/g, "\\'")}')">
                        Submit Verification
                    </button>
                    <div class="feedback-box" style="font-weight: 700; font-size: 0.9rem; min-height: 20px;"></div>
                </div>
            </div>
        `;
    });
};

document.addEventListener("DOMContentLoaded", () => window.initializeVerificationSlides(document));
