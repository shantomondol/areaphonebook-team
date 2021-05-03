const teamsData = [
    {}
];

function teamTemplate(team) {
    return `
    <!-- Founder & Co-Founder -->
    <div class="col-md-4">
        <div class="justify-content-between align-content-between team-card">
            <a href="cdn/membar.png"><img src="cdn/membar.png" alt="moinul islam" class="team-img"></a>
            <h2>Moinul Islam</h2>
            <p class="text-center">Co-Founder, CEO</p>
            <a href="tel:+08801303002226" target="_blank"><i class="fas fa-phone-square-alt"></i></a>
            <a href="https://www.facebook.com/moinulislam.dev" target="_blank"><i class="fab fa-facebook-square"></i></a>
            <a href="mailto:usermoin@gmail.com" target="_blank"><i class="fas fa-envelope"></i></a>
        </div>
    </div>

    <!-- Founder & Co-Founder -->
    <div class="col-md-4">
        <div class="justify-content-between align-content-between team-card icon-card-highlight">
            <a href="cdn/membar.png"><img src="cdn/membar.png" alt="sharif imtaz" class="team-img"></a>
            <h2>Sharif Imtaz</h2>
            <p class="text-center">Co-Founder, CMO</p>
            <a href="tel:+08801943054316" target="_blank"><i class="fas fa-phone-square-alt"></i></a>
            <a href="https://www.facebook.com/SharifImtaz" target="_blank"><i class="fab fa-facebook-square"></i></a>
            <a href="mailto:shorifallrobi321@gmail.com" target="_blank"><i class="fas fa-envelope"></i></a>
        </div>
    </div>

    <!-- Founder & Co-Founder -->
    <div class="col-md-4">
        <div class="justify-content-between align-content-between team-card">
            <a href="cdn/membar.png"><img src="cdn/membar.png" alt="shanto mondol" class="team-img"></a>
            <h2>Shanto Mondol</h2>
            <p class="text-center">Co-Founder, CTO</p>
            <a href="tel:+08801869107346" target="_blank"><i class="fas fa-phone-square-alt"></i></a>
            <a href="https://www.facebook.com/shantomondol08" target="_blank"><i class="fab fa-facebook-square"></i></a>
            <a href="mailto:shantomondol816@gmail.com" target="_blank"><i class="fas fa-envelope"></i></a>
        </div>
    </div>


    <!-- membar -->
    <div class="col-md-3">
        <div class="justify-content-between align-content-between team-card">
            <a href="cdn/membar.png"><img src="cdn/membar.png" alt="faria jahan puspo" class="team-img"></a>
            <h2>Faria J Puspo</h2>
            <p class="text-center">CS</p>
            <a href="tel:+08801798899911" target="_blank"><i class="fas fa-phone-square-alt"></i></a>
            <a href="https://www.facebook.com/aalina.angel.54" target="_blank"><i class="fab fa-facebook-square"></i></a>
            <a href="mailto:areaphonebook@gmail.com" target="_blank"><i class="fas fa-envelope"></i></a>
        </div>
    </div>

    <!-- membar -->
    <div class="col-md-3">
        <div class="justify-content-between align-content-between team-card">
            <a href="cdn/membar.png"><img src="cdn/membar.png" alt="monika momi" class="team-img"></a>
            <h2>Monika Momi</h2>
            <p class="text-center">Laravel Dev</p>
            <a href="tel:+08801798899911" target="_blank"><i class="fas fa-phone-square-alt"></i></a>
            <a href="https://www.facebook.com/monikamomi97" target="_blank"><i class="fab fa-facebook-square"></i></a>
            <a href="mailto:areaphonebook@gmail.com" target="_blank"><i class="fas fa-envelope"></i></a>
        </div>
    </div>

    <!-- membar -->
    <div class="col-md-3">
        <div class="justify-content-between align-content-between team-card">
            <a href="cdn/membar.png"><img src="cdn/membar.png" alt="asikur rahman" class="team-img"></a>
            <h2>Asikur Rahman</h2>
            <p class="text-center">Content Writer</p>
            <a href="tel:+08801798899911" target="_blank"><i class="fas fa-phone-square-alt"></i></a>
            <a href="https://www.facebook.com/md.asikurrahman321" target="_blank"><i class="fab fa-facebook-square"></i></a>
            <a href="mailto:areaphonebook@gmail.com" target="_blank"><i class="fas fa-envelope"></i></a>
        </div>
    </div>

    <!-- membar -->
    <div class="col-md-3">
        <div class="justify-content-between align-content-between team-card">
            <a href="cdn/membar.png"><img src="cdn/membar.png" alt="fawad saruf" class="team-img"></a>
            <h2>Fawad Saruf</h2>
            <p class="text-center">Graphic Designer</p>
            <a href="tel:+08801798899911" target="_blank"><i class="fas fa-phone-square-alt"></i></a>
            <a href="https://www.facebook.com/md.saruf.58" target="_blank"><i class="fab fa-facebook-square"></i></a>
            <a href="mailto:areaphonebook@gmail.com" target="_blank"><i class="fas fa-envelope"></i></a>
        </div>
    </div>

    <!-- membar -->
    <div class="col-md-3">
        <div class="justify-content-between align-content-between team-card">
            <a href="cdn/membar.png"><img src="cdn/membar.png" alt="mynul talukdar" class="team-img"></a>
            <h2>Mynul Talukdar</h2>
            <p class="text-center">Content Writer</p>
            <a href="tel:+08801798899911" target="_blank"><i class="fas fa-phone-square-alt"></i></a>
            <a href="https://www.facebook.com/mtmynul.talukdar" target="_blank"><i class="fab fa-facebook-square"></i></a>
            <a href="mailto:areaphonebook@gmail.com" target="_blank"><i class="fas fa-envelope"></i></a>
        </div>
    </div>

    <!-- membar -->
    <div class="col-md-3">
        <div class="justify-content-between align-content-between team-card">
            <a href="cdn/membar.png"><img src="cdn/membar.png" alt="rabiul islam" class="team-img"></a>
            <h2>Rabiul Islam</h2>
            <p class="text-center">Django Developer</p>
            <a href="tel:+08801798899911" target="_blank"><i class="fas fa-phone-square-alt"></i></a>
            <a href="https://www.facebook.com/AreaPhonebook" target="_blank"><i class="fab fa-facebook-square"></i></a>
            <a href="mailto:areaphonebook@gmail.com" target="_blank"><i class="fas fa-envelope"></i></a>
        </div>
    </div>

    <!-- membar -->
    <div class="col-md-3">
        <div class="justify-content-between align-content-between team-card">
            <a href="cdn/membar.png"><img src="cdn/membar.png" alt="emran hossain" class="team-img"></a>
            <h2>Emran Hossain</h2>
            <p class="text-center">ReactJS</p>
            <a href="tel:+08801798899911" target="_blank"><i class="fas fa-phone-square-alt"></i></a>
            <a href="https://www.facebook.com/AreaPhonebook" target="_blank"><i class="fab fa-facebook-square"></i></a>
            <a href="mailto:areaphonebook@gmail.com" target="_blank"><i class="fas fa-envelope"></i></a>
        </div>
    </div>

    <!-- membar -->
    <div class="col-md-3">
        <div class="justify-content-between align-content-between team-card">
            <a href="cdn/membar.png"><img src="cdn/membar.png" alt="masud rahman" class="team-img"></a>
            <h2>Masud Rahman</h2>
            <p class="text-center">Graphic Designer</p>
            <a href="tel:+08801798899911" target="_blank"><i class="fas fa-phone-square-alt"></i></a>
            <a href="https://www.facebook.com/AreaPhonebook" target="_blank"><i class="fab fa-facebook-square"></i></a>
            <a href="mailto:areaphonebook@gmail.com" target="_blank"><i class="fas fa-envelope"></i></a>
        </div>
    </div>

    <!-- membar -->
    <div class="col-md-3">
        <div class="justify-content-between align-content-between team-card">
            <a href="cdn/membar.png"><img src="cdn/membar.png" alt="saidul islam" class="team-img"></a>
            <h2>Saidul Islam</h2>
            <p class="text-center">Front-End Developer</p>
            <a href="tel:+08801798899911" target="_blank"><i class="fas fa-phone-square-alt"></i></a>
            <a href="https://www.facebook.com/AreaPhonebook" target="_blank"><i class="fab fa-facebook-square"></i></a>
            <a href="mailto:areaphonebook@gmail.com" target="_blank"><i class="fas fa-envelope"></i></a>
        </div>
    </div>
    `;
}


document.getElementById("team").innerHTML = `
    ${teamsData.map(teamTemplate).join("")}
  `;

{/* <a href="tel:${team.ourNumber}"><i class="fas fa-ellipsis-v"></i></a> */}
