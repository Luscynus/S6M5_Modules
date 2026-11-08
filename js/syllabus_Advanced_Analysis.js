// ==========================================
// 📑 DATA MANAGEMENT REGISTRY & SYLLABUS
// ==========================================

// Complete 17-Node Syllabus Route Titles
const nodeTitles = {
    1: "1. Tangents to Non-Polynomial Functions",
    2: "2. Asymptotes of Non-Polynomial Functions",
    3: "3. Optimisation with Non-Polynomial Functions",
    4: "4. Practical Optimisation Problems",
    5: "5. Linear Approximation and Tangent Estimates",
    6: "6. Limits at Infinity and Growth Hierarchies",
    7: "7. Limits at Zero and Logarithmic Growth",
    8: "8. Complete Graph Analysis of Exponential Functions",
    9: "9. Complete Graph Analysis of Logarithmic Functions",
    10: "10. Solving Exponential Equations",
    11: "11. Solving Logarithmic Equations",
    12: "12. General Exponential Functions and Base Conversions",
    13: "13. The Chain Rule with Logarithmic Functions",
    14: "14. Logarithmic Inequalities and Domain Restrictions",
    15: "15. Solving Exponential Inequalities",
    16: "16. Sketching Graphs of Logarithmic Functions",
    17: "17. Sketching Graphs of Exponential Functions"
};

// 🚀 THE UNIFIED METADATA REGISTRY OBJECT
const syllabusData = {
    moduleID: "advanced_analysis_track",
    nodeTitles: nodeTitles,
    // Automatically calculates the total count directly inside the active profile
    totalNodes: Object.keys(nodeTitles).length
};
