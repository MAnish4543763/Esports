
/* =========================================================
   MANIFEST ESPORTS
   Responsive navigation + demo authentication
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const SESSION_KEY = "manifestEsportsUser";

    const menuToggle = document.getElementById("menuToggle");
    const sideMenu = document.getElementById("sideMenu");
    const menuOverlay = document.getElementById("menuOverlay");
    const profileTrigger = document.getElementById("profileTrigger");

    const desktopAuth = document.getElementById("desktopAuth");
    const menuAuth = document.getElementById("menuAuth");
    const menuTeam = document.getElementById("menuTeam");
    const menuUserName = document.getElementById("menuUserName");
    const logoutBtn = document.getElementById("logoutBtn");

    function getUser(){
        try{
            return JSON.parse(localStorage.getItem(SESSION_KEY));
        }catch(error){
            return null;
        }
    }

    function saveUser(user){
        localStorage.setItem(SESSION_KEY, JSON.stringify(user));
    }

    function clearUser(){
        localStorage.removeItem(SESSION_KEY);
    }

    function updateAuthUI(){

        const user = getUser();
        const loggedIn = Boolean(user);

        /*
         * GUEST
         * - Desktop: Login + Sign Up
         * - Mobile header: hamburger only
         * - Menu: Login + Sign Up
         * - Team Details hidden
         */
        if(desktopAuth){
            desktopAuth.hidden = loggedIn;
        }

        if(profileTrigger){
            profileTrigger.hidden = !loggedIn;
        }

        /*
         * LOGGED IN
         * - Login + Sign Up disappear
         * - Profile appears
         * - Team Details appears
         */
        if(menuAuth){
            menuAuth.hidden = loggedIn;
        }

        if(menuTeam){
            menuTeam.hidden = !loggedIn;
        }

        if(logoutBtn){
            logoutBtn.hidden = !loggedIn;
        }

        if(menuUserName){
            menuUserName.textContent =
                loggedIn
                ? String(user.name || "PLAYER").toUpperCase()
                : "GUEST";
        }
    }

    function openMenu(){

        if(!sideMenu) return;

        sideMenu.classList.add("open");
        menuOverlay?.classList.add("open");

        menuToggle?.classList.add("active");
        menuToggle?.setAttribute("aria-expanded","true");

        profileTrigger?.setAttribute("aria-expanded","true");

        sideMenu.setAttribute("aria-hidden","false");
        document.body.classList.add("menu-open");
    }

    function closeMenu(){

        if(!sideMenu) return;

        sideMenu.classList.remove("open");
        menuOverlay?.classList.remove("open");

        menuToggle?.classList.remove("active");
        menuToggle?.setAttribute("aria-expanded","false");

        profileTrigger?.setAttribute("aria-expanded","false");

        sideMenu.setAttribute("aria-hidden","true");
        document.body.classList.remove("menu-open");
    }

    /* Hamburger */
    menuToggle?.addEventListener("click", () => {

        if(sideMenu?.classList.contains("open")){
            closeMenu();
        }else{
            openMenu();
        }
    });

    /* Profile icon opens the same menu */
    profileTrigger?.addEventListener("click", openMenu);

    /* Empty dark area closes menu */
    menuOverlay?.addEventListener("click", closeMenu);

    /* ESC closes menu */
    document.addEventListener("keydown", (event) => {
        if(event.key === "Escape"){
            closeMenu();
        }
    });

    /* Menu links close menu */
    sideMenu?.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    /* Logout */
    logoutBtn?.addEventListener("click", () => {
        clearUser();
        closeMenu();
        updateAuthUI();
        window.location.href = "index.html";
    });

    /* Demo login */
    document.getElementById("loginForm")?.addEventListener("submit", (event) => {

        event.preventDefault();

        const email =
            document.getElementById("loginEmail")?.value.trim() || "";

        const name =
            email.split("@")[0] || "PLAYER";

        saveUser({
            name:name,
            email:email
        });

        window.location.href = "index.html";
    });

    /* Demo signup */
    document.getElementById("signupForm")?.addEventListener("submit", (event) => {

        event.preventDefault();

        const name =
            document.getElementById("signupName")?.value.trim() || "PLAYER";

        const email =
            document.getElementById("signupEmail")?.value.trim() || "";

        saveUser({
            name:name,
            email:email
        });

        window.location.href = "index.html";
    });

    /* Tournament desktop/tablet arrows */
    const track = document.getElementById("tournamentTrack");
    const previous = document.getElementById("prevTournament");
    const next = document.getElementById("nextTournament");

    if(track){

        const amount = () => {
            const card = track.querySelector(".tournament-card");

            if(!card) return 300;

            return card.getBoundingClientRect().width + 18;
        };

        previous?.addEventListener("click", () => {
            track.scrollBy({
                left:-amount(),
                behavior:"smooth"
            });
        });

        next?.addEventListener("click", () => {
            track.scrollBy({
                left:amount(),
                behavior:"smooth"
            });
        });
    }

    updateAuthUI();
});
