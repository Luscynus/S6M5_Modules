// ==========================================
// 📑 DATA MANAGEMENT REGISTRY & SYLLABUS
// ==========================================

// Complete 11-Node Syllabus Route Titles
const nodeTitles = {
    1: "1. Functions: Domain & Range",
    2: "2. Composite and Inverse Functions",
    3: "3. Symmetry, Parity and Polynomials",
    4: "4. Limits and Continuity",
    5: "5. Derivatives and Tangents",
    6: "6. Derivative Function and Rules",
    7: "7. Product and Quotient Rule",
    8: "8. The Chain Rule",
    9: "9. Stationary Points Analysis and Second Derivative",
    10: "10. Curve Sketching and Asymptotes",
    11: "11. Reading Derivative Graphs Graphically"
};

// 🚀 THE UNIFIED METADATA REGISTRY OBJECT
const syllabusData = {
    moduleID: "advanced_analysis_track",
    nodeTitles: nodeTitles,
    // Automatically calculates the total count directly inside the active profile
    totalNodes: Object.keys(nodeTitles).length
};
