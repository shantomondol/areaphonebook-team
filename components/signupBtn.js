const signupBtnData = [
  {}
];

function signupBtnTemplate(signupBtn) {
    return `
    <div class="hero-btn">
        <a class="btn btn-outline-success" href="https://forms.gle/QNqDBmJFR9tnPvwBA" target="_blank"><i
                class="fas fa-user-plus"></i> আপনার তথ্য যোগ করুন</a>
    </div>
  `;
}

document.getElementById("signupBtn").innerHTML = `
  ${signupBtnData.map(signupBtnTemplate).join("")}  
`;