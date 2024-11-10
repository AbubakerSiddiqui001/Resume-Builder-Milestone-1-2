"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myFunction = void 0;
var myFunction = function () {
    var toggleButton = document.getElementById("toggle-skills");
    var skillsSection = document.getElementById("skills");
    if (skillsSection && toggleButton) {
        toggleButton.addEventListener("click", function () {
            if (skillsSection.style.display === "none") {
                skillsSection.style.display = "block";
            }
            else {
                skillsSection.style.display === "none";
            }
        });
    }
    else {
        console.error("Button or Skills section not found");
    }
};
exports.myFunction = myFunction;
window.addEventListener("DOMContentLoaded", function () {
    (0, exports.myFunction)();
});
