// ==================== INITIALIZE LOCALSTORAGE ====================
function initializeData() {
    if (!localStorage.getItem('pck_institute_v3')) {
        const demoData = {
            schoolInfo: {
                logo: "https://placehold.co/100x100/6c3fcf/white?text=PCK",
                name: "P.C. Kinyanjui Technical Training Institute",
                motto: "Excellence in Technology"
            },
            principals: [
                { id: 1, name: "Dr. James Mwangi",    photo: "https://randomuser.me/api/portraits/men/32.jpg",   startYear: 2010, endYear: 2015, isCurrent: false },
                { id: 2, name: "Prof. Sarah Akinyi",   photo: "https://randomuser.me/api/portraits/women/68.jpg", startYear: 2015, endYear: 2020, isCurrent: false },
                { id: 3, name: "Dr. Peter Omondi",     photo: "https://randomuser.me/api/portraits/men/45.jpg",   startYear: 2020, endYear: 2024, isCurrent: false },
                { id: 4, name: "Dr. Elizabeth Wanjiku",photo: "https://randomuser.me/api/portraits/women/89.jpg", startYear: 2024, endYear: null, isCurrent: true  }
            ],
            schoolTour: {
                library:  { images: ["https://placehold.co/400x300/6c3fcf/white?text=Library"], videos: [] },
                sports:   { images: ["https://placehold.co/400x300/2563eb/white?text=Sports+Field"], videos: [] },
                hostel_m: { images: ["https://placehold.co/400x300/6c3fcf/white?text=Male+Hostel"], videos: [] },
                hostel_f: { images: ["https://placehold.co/400x300/2563eb/white?text=Female+Hostel"], videos: [] },
                field:    { images: ["https://placehold.co/400x300/6c3fcf/white?text=Main+Field"], videos: [] }
            },
            infrastructureList: ["library", "sports", "hostel_m", "hostel_f", "field"],
            departments: ['Computer Studies', 'Hospitality', 'Automotive Engineering', 'Electrical Engineering', 'Civil Engineering', 'Business'],
            students: [
                {
                    id: 'STU-2026-20669', name: 'John Mwangi', department: 'Computer Studies', class: 'Form 3C',
                    passcode: '1234', phone: '0712345678', feeBalance: 0,
                    attendance: { total: 45, attended: 38 },
                    examHistory: { 'CS101': 1, 'CS102': 0 }
                },
                {
                    id: 'STU-2026-20670', name: 'Sarah Achieng', department: 'Computer Studies', class: 'Form 3C',
                    passcode: '5678', phone: '0723456789', feeBalance: 25000,
                    attendance: { total: 45, attended: 35 },
                    examHistory: {}
                }
            ],
            classReps:    [{ id: 'STU-2026-20669', name: 'John Mwangi',  department: 'Computer Studies', class: 'Form 3C', passcode: 'REP-4321' }],
            lecturers:    [{ id: 'LEC-2026-001',   name: 'Jane Wanjiku', department: 'Computer Studies', unit: 'ICT/OS/CS/CR/05/6', password: 'lec1234' }],
            classTeachers:[{ id: 'TCH-2026-001',   name: 'James Otieno', department: 'Computer Studies', password: 'tch1234' }],
           hods: [
          { id: 'HOD-2026-001', name: 'Dr. Jane Kamau',      department: 'Computer Studies',        password: 'hod1234' },
          { id: 'HOD-2026-002', name: 'Mrs. Aisha Mohamed',  department: 'Hospitality',             password: 'hod2234' },
          { id:'HOD-2026-003', name: 'Eng. David Njoroge',  department: 'Automotive Engineering',  password: 'hod3234' },
          { id: 'HOD-2026-004', name: 'Eng. Lucy Wambui',    department: 'Electrical Engineering',  password: 'hod4234' },
          { id: 'HOD-2026-005', name: 'Mr. Joseph Kamande',  department: 'Civil Engineering',       password: 'hod5234' },
          { id: 'HOD-2026-006', name: 'Mrs. Grace Nyambura', department: 'Business',                password: 'hod6234' },
           ],
            deos:         [{ id: 'DEO-2026-001',   name: 'Alice Moraa',  department: 'Computer Studies', password: 'deo1234' }],
            finance:      [{ id: 'FIN-001',         name: 'Finance Officer', password: 'finance123' }],
            deputyAcad:   { id: 'DEP-ACAD-001',  name: 'Dr. Charles Otieno', password: 'deputyacad123' },
            deputyInfra:  { id: 'DEP-INFRA-001', name: 'Eng. Peter Maina',   password: 'deputyinfra123' },
            examOffice:   { id: 'EXAM-001', name: 'Exam Officer',    password: 'exam123' },
            dean:         { id: 'DEAN-001', name: 'Dean of Students',password: 'dean123', kitcoPasswords: [] },
            admin:        { password: 'Admin@2026' },
            courses: [
                { id: 'CS101', name: 'Computer Essentials',          code: 'CS101' },
                { id: 'CS102', name: 'Computer Operations',           code: 'CS102' },
                { id: 'CS103', name: 'Networking & Data Structures',  code: 'CS103' },
                { id: 'CS104', name: 'Artificial Intelligence',       code: 'CS104' }
            ],
            examRegistrations: [],
            noticeboard: [
                { id: 'n1', sender: 'System', message: 'Welcome to PCK Institute Management System', timestamp: new Date().toISOString(), recipient: 'all' }
            ],
            newsletterSubscribers: []
        };
        localStorage.setItem('pck_institute_v3', JSON.stringify(demoData));
    }
}

function getData()       { return JSON.parse(localStorage.getItem('pck_institute_v3')); }
function saveData(data)  { localStorage.setItem('pck_institute_v3', JSON.stringify(data)); }

// ==================== SCHOOL INFO FUNCTIONS ====================
function renderPrincipals() {
    const data = getData();
    const container = document.getElementById('principalsContainer');
    if (!container) return;

    const sorted = [...data.principals].sort((a, b) => {
        if (a.isCurrent) return -1;
        if (b.isCurrent) return 1;
        return b.startYear - a.startYear;
    });

    container.innerHTML = sorted.map(p => {
        const years   = `${p.startYear} — ${p.endYear || 'Present'}`;
        const tenure  = p.endYear ? `${p.endYear - p.startYear} yrs` : 'Present';
        const fallback = `https://placehold.co/400x500/251b42/white?text=${encodeURIComponent(p.name)}`;

        return `
        <div class="principal-flip ${p.isCurrent ? 'is-current' : ''}" data-flipped="false">
            <div class="principal-flip-inner">

                <!-- FRONT -->
                <div class="principal-front">
                    <img src="${p.photo}" alt="${p.name}" onerror="this.src='${fallback}'">
                    ${p.isCurrent ? `<div class="principal-current-badge">● CURRENT</div>` : ''}
                    <div class="principal-front-overlay">
                        <div class="principal-front-name">${p.name}</div>
                        <div class="principal-front-years">${years}</div>
                    </div>
                </div>

                <!-- BACK -->
                <div class="principal-back">
                    <img src="${p.photo}" class="principal-back-photo" alt="${p.name}" onerror="this.src='${fallback}'">
                    <div class="principal-back-name">${p.name}</div>
                    <div class="principal-back-years">${years}</div>
                    <div class="principal-back-tenure">${tenure}</div>
                    <div class="principal-back-title">${p.title || ''}</div>
                </div>

            </div>
        </div>`;
    }).join('');

    /* Mobile — tap to flip */
    container.querySelectorAll('.principal-flip').forEach(card => {
        card.addEventListener('click', () => {
            const isFlipped = card.dataset.flipped === 'true';
            card.dataset.flipped = String(!isFlipped);
            card.classList.toggle('flipped', !isFlipped);
        });
    });
}

// ==================== SCHOOL TOUR — Design A: Sidebar Nav + Preview ====================
const tourIcons = {
    library: '📚', sports: '⚽', hostel_m: '🏠', hostel_f: '🏠',
    field: '🌿', mess: '🍽️', workshop: '🔧', lab: '🔬'
};

let currentTourLocation = 'library';
let currentThumbIdx = 0;

function renderTourNav() {
    const data = getData();
    const nav = document.getElementById('tourNav');
    if (!nav) return;
    nav.innerHTML = data.infrastructureList.map(loc => {
        const icon = tourIcons[loc] || '📍';
        const label = loc.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
        return `<div class="tour-nav-item ${loc === currentTourLocation ? 'active' : ''}" data-location="${loc}">
            ${icon} ${label}
        </div>`;
    }).join('');
    nav.querySelectorAll('.tour-nav-item').forEach(item => {
        item.addEventListener('click', () => {
            currentTourLocation = item.dataset.location;
            currentThumbIdx = 0;
            nav.querySelectorAll('.tour-nav-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            renderTourPreview(currentTourLocation);
        });
    });
}

function renderTourPreview(location) {
    const data = getData();
    const media = data.schoolTour[location] || { images: [], videos: [] };
    const label = location.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    const imgs = media.images;
    const mainImg = imgs[currentThumbIdx] || `https://placehold.co/800x400/251b42/white?text=${encodeURIComponent(label)}`;

    const previewImg = document.getElementById('tourPreviewImg');
    const previewTitle = document.getElementById('tourPreviewTitle');
    const previewDesc = document.getElementById('tourPreviewDesc');
    const thumbsEl = document.getElementById('tourThumbs');

    if (previewImg) previewImg.src = mainImg;
    if (previewTitle) previewTitle.textContent = label;
    if (previewDesc) previewDesc.textContent = `${imgs.length} photo${imgs.length !== 1 ? 's' : ''} available`;

    // Thumbnail strip — only if multiple images
    if (thumbsEl) {
        if (imgs.length > 1) {
            thumbsEl.innerHTML = imgs.map((src, idx) =>
                `<img src="${src}" class="tour-thumb ${idx === currentThumbIdx ? 'active' : ''}"
                      data-idx="${idx}" alt="thumb">`
            ).join('');
            thumbsEl.querySelectorAll('.tour-thumb').forEach(t => {
                t.addEventListener('click', () => {
                    currentThumbIdx = parseInt(t.dataset.idx);
                    if (previewImg) previewImg.src = imgs[currentThumbIdx];
                    thumbsEl.querySelectorAll('.tour-thumb').forEach(x => x.classList.remove('active'));
                    t.classList.add('active');
                });
            });
        } else {
            thumbsEl.innerHTML = '';
        }
    }
}

function populateInfraSelect() {
    const data = getData();
    const select = document.getElementById('infraSelect');
    if (select) select.innerHTML = data.infrastructureList.map(loc =>
        `<option value="${loc}">${loc.replace(/_/g, ' ').toUpperCase()}</option>`
    ).join('');
}

// ==================== CBET CURRICULUM — Design B: Step Progress ====================
function renderCBET() {
    const stepsEl = document.getElementById('cbetSteps');
    const modsEl = document.getElementById('cbetModules');
    if (!stepsEl || !modsEl) return;

    const levels = [
        { num: '3', name: 'Level 3',        hrs: '300–599 hrs',   it: true },
        { num: '4', name: 'Artisan',         hrs: '600–1199 hrs',  it: true },
        { num: '5', name: 'Craft',           hrs: '1200–2399 hrs', it: true },
        { num: '6', name: 'Diploma',         hrs: '2400–4799 hrs', it: true }
    ];

    stepsEl.innerHTML = levels.map((l, idx) => `
        <div class="cbet-step">
            <div class="cbet-step-dot ${idx < 2 ? 'active' : ''}">${l.num}</div>
            <div class="cbet-step-name">${l.name}</div>
            <div class="cbet-step-hrs">${l.hrs}</div>
            ${l.it ? '<div class="cbet-step-it">✓ IT Required</div>' : ''}
        </div>
    `).join('');

    const modules = [
        { icon: '📐', label: 'Module 1' },
        { icon: '🔧', label: 'Module 2' },
        { icon: '⚡', label: 'Module 3' },
        { icon: '💻', label: 'Module 4' },
        { icon: '🔬', label: 'Module 5' },
        { icon: '📊', label: 'Module 6' },
        { icon: '🎓', label: 'Module 7' }
    ];

    modsEl.innerHTML = modules.map(m => `
        <div class="cbet-module">
            <span>${m.icon}</span>${m.label}
        </div>
    `).join('');
}

// ==================== NAVIGATE TO ROLE ====================
function navigateToRole(role) {
    if (role === 'home') {
        showHome();
        return;
    }

    // Highlight sidebar item
    document.querySelectorAll('.sidebar-menu li').forEach(l => l.classList.remove('active'));
    const sideItem = document.querySelector(`.sidebar-menu li[data-role="${role}"]`);
    if (sideItem) sideItem.classList.add('active');

    // SPECIAL HANDLING FOR SPORT CLUB (Sub-login)
    if (role === 'sportclub') {
        showSportSubLogin();
        return;
    }

    // Normal login for all other roles
    showLoginForm(role);

    // Close sidebar on mobile
    document.getElementById('sidebar').classList.remove('open');
}

// ==================== LOGIN ====================
let selectedRole = null;

const loginTitles = {
    student:      '🎓 Student Login',
    classrep:     '🗣️ Class Rep Login',
    lecturer:     '👨‍💻 Lecturer Login',
    classteacher: '🧑‍🏫 Class Teacher Login',
    hod:          '🤝 H.O.D Login',
    deo:          '📝 D.E.O Login',
    finance:      '💰 Finance Login',
    deputy_acad:  '👑 Deputy (Academics) Login',
    deputy_infra: '🏗️ Deputy (Infrastructure) Login',
    examoffice:   '📋 Exam Office Login',
    dean:         '💛 Dean of Students Login',
    admin:        '🔐 System Admin Login'
};

function showLoginForm(role) {
    selectedRole = role;
    document.getElementById('schoolInfoPanel').style.display = 'none';
    document.getElementById('loginFormContainer').style.display = 'block';
    document.getElementById('dashboardContainer').style.display = 'none';

    document.getElementById('loginTitle').innerHTML =
        `<i class="fas fa-sign-in-alt"></i> ${loginTitles[role] || role.toUpperCase() + ' Login'}`;

    const fields = document.getElementById('loginFields');

    // Roles that only need password (no separate ID field)
    const passOnlyRoles = ['deputy_acad', 'deputy_infra', 'admin', 'dean', 'examoffice'];

    if (passOnlyRoles.includes(role)) {
        fields.innerHTML = `<input type="password" id="loginPass" placeholder="Password" class="login-input">`;
    } else {
        fields.innerHTML = `
            <input type="text"     id="loginId"   placeholder="ID / Staff No"  class="login-input">
            <input type="password" id="loginPass" placeholder="Password / Passcode" class="login-input">
        `;
    }
}

function handleLogin() {
    const data = getData();
    const role = selectedRole;
    const id   = document.getElementById('loginId')?.value?.trim();
    const pass = document.getElementById('loginPass')?.value?.trim();
    let user   = null;

    switch (role) {
        case 'student':
            user = data.students.find(s => s.id === id && s.passcode === pass);
            break;
        case 'classrep':
            user = data.classReps.find(r => r.id === id && r.passcode === pass);
            break;
        case 'lecturer':
            user = data.lecturers.find(l => l.id === id && l.password === pass);
            break;
        case 'classteacher':
            user = data.classTeachers.find(t => t.id === id && t.password === pass);
            break;
        case 'hod':
            user = data.hods.find(h => h.id === id && h.password === pass);
            break;
        case 'deo':
            user = data.deos.find(d => d.id === id && d.password === pass);
            break;
        case 'finance':
            user = data.finance.find(f => f.id === id && f.password === pass);
            break;
        case 'deputy_acad':
            if (pass === data.deputyAcad.password) user = data.deputyAcad;
            break;
        case 'deputy_infra':
            if (pass === data.deputyInfra.password) user = data.deputyInfra;
            break;
        case 'examoffice':
            if (pass === data.examOffice.password) user = data.examOffice;
            break;
        case 'dean':
            if (pass === data.dean.password) user = data.dean;
            break;
        case 'admin':
            if (pass === data.admin.password) user = { role: 'admin', name: 'System Admin' };
            break;
        default:
            alert('Unknown role. Please try again.');
            return;
    }

    if (user) {
        sessionStorage.setItem('currentUser', JSON.stringify({ role, ...user }));
        showDashboard(role, user);
    } else {
        // Shake animation on fail
        const card = document.querySelector('.login-card');
        card.style.animation = 'none';
        card.offsetHeight; // reflow
        card.style.animation = 'shake 0.4s ease';
        setTimeout(() => card.style.animation = '', 500);
        alert('❌ Invalid credentials. Please try again.');
    }
}

// Shake keyframes injected once
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
@keyframes shake {
    0%,100% { transform: translateX(0); }
    20%      { transform: translateX(-10px); }
    40%      { transform: translateX(10px); }
    60%      { transform: translateX(-8px); }
    80%      { transform: translateX(8px); }
}`;
document.head.appendChild(shakeStyle);

// ==================== DASHBOARD ====================
function showDashboard(role, user) {
    document.getElementById('schoolInfoPanel').style.display = 'none';
    document.getElementById('loginFormContainer').style.display = 'none';
    document.getElementById('dashboardContainer').style.display = 'block';

    const label = role.toUpperCase().replace(/_/g, ' ');
    document.getElementById('dashboardTitle').innerHTML =
        `<i class="fas fa-tachometer-alt"></i> ${label} Dashboard`;

    let content = `
        <div class="stats-grid">
            <div class="stat-card">
                <i class="fas fa-check-circle"></i>
                <h3>Welcome</h3>
                <p>${user.name || user.id || 'User'}</p>
            </div>
            <div class="stat-card">
                <i class="fas fa-id-badge"></i>
                <h3>Role</h3>
                <p>${label}</p>
            </div>
            ${user.department ? `
            <div class="stat-card">
                <i class="fas fa-building"></i>
                <h3>Department</h3>
                <p>${user.department}</p>
            </div>` : ''}
        </div>
    `;

    if (role === 'student') {
        content += renderStudentExamTracking(user);
        content += `
            <div class="form-card">
                <button class="btn-primary" onclick="startExamRegistration()">
                    <i class="fas fa-file-signature"></i> New CBET Exam Registration
                </button>
            </div>`;
    } else if (role === 'kitco') {
        content += renderKITCOPanel(user);
    } else if (role === 'classrep') {
        content += renderClassRepPanel(user);
    } else if (role === 'lecturer') {
        content += renderLecturerPanel(user);
    } else if (role === 'classteacher') {
        content += renderClassTeacherPanel(user);
    } else if (role === 'hod') {
        content += renderHODPanel(user);
    } else if (role === 'deo') {
        content += renderDEOPanel(user);
    } else if (role === 'finance') {
        content += renderFinancePanel(user);
    } else if (role === 'deputy_acad') {
        content += renderDeputyAcadPanel(user);
    } else if (role === 'deputy_infra') {
        content += renderDeputyInfraPanel();
    } else if (role === 'examoffice') {
        content += renderExamOfficePanel(user);
    } else if (role === 'dean') {
        content += renderDeanPanel(user);
    } else if (role === 'sportsadmin') {
        content += renderSportsAdminPanel(user);
    } else if (role === 'sportleader') {
        content += renderSportLeaderPanel(user);
    } else if (role === 'admin') {
        content += renderAdminPanel();
    }

    content += `
        <div class="form-card">
            <h3><i class="fas fa-bell"></i> Noticeboard</h3>
            <div class="noticeboard" id="noticeboardPanel"></div>
        </div>`;

    document.getElementById('dashboardContent').innerHTML = content;
    renderNoticeboard();
}

function renderNoticeboard() {
    const data = getData();
    const container = document.getElementById('noticeboardPanel');
    if (!container) return;
    container.innerHTML = data.noticeboard.slice(-10).reverse().map(n => `
        <div class="notice-message">
            <strong style="color:var(--purple-light)">${n.sender}</strong><br>
            ${n.message}<br>
            <small style="color:var(--text-secondary)">${new Date(n.timestamp).toLocaleString()}</small>
        </div>
    `).join('');
}

function renderHODRegistrations() {
    const data = getData();
    const pending = data.examRegistrations.filter(r => r.status === 'pending_hod');
    if (pending.length === 0) return '<p style="margin-top:0.5rem;color:var(--text-secondary)">No pending registrations.</p>';
    return `
        <table style="width:100%;border-collapse:collapse;margin-top:1rem;font-size:0.85rem;">
            <thead>
                <tr style="color:var(--purple-light);border-bottom:1px solid var(--border);">
                    <th style="padding:0.5rem;text-align:left;">Reg ID</th>
                    <th style="padding:0.5rem;text-align:left;">Student</th>
                    <th style="padding:0.5rem;text-align:left;">Units</th>
                    <th style="padding:0.5rem;text-align:left;">Fee</th>
                </tr>
            </thead>
            <tbody>
                ${pending.map(r => `
                    <tr style="border-bottom:1px solid var(--border);">
                        <td style="padding:0.5rem;">${r.id}</td>
                        <td style="padding:0.5rem;">${r.studentId}</td>
                        <td style="padding:0.5rem;">${r.units.length}</td>
                        <td style="padding:0.5rem;">KSh ${r.totalExamFee}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>`;
}

function renderFinanceSummary() {
    const data = getData();
    const outstanding = data.students.filter(s => s.feeBalance > 0);
    return `
        <div style="margin-top:1rem;">
            <p><strong style="color:var(--purple-light)">${outstanding.length}</strong> students with outstanding fee balance.</p>
            ${outstanding.map(s => `
                <div style="padding:0.6rem;border-bottom:1px solid var(--border);font-size:0.85rem;">
                    ${s.name} (${s.id}) — <span style="color:var(--danger)">KSh ${s.feeBalance.toLocaleString()}</span>
                </div>
            `).join('')}
        </div>`;
}

function renderAdminPanel() {
    return `
    <div class="admin-layout">
 
        <!-- MINI SIDEBAR NAV -->
        <div class="admin-sidenav">
            <div class="admin-sidenav-title">Admin Menu</div>
            <button class="admin-nav-btn active" onclick="adminSection('users',this)">
                <i class="fas fa-users-cog"></i> User Management
            </button>
            <button class="admin-nav-btn" onclick="adminSection('principals',this)">
                <i class="fas fa-landmark"></i> Principals
            </button>
            <button class="admin-nav-btn" onclick="adminSection('departments',this)">
                <i class="fas fa-building"></i> Departments
            </button>
            <button class="admin-nav-btn" onclick="adminSection('courses',this)">
                <i class="fas fa-book"></i> Courses
            </button>
            <button class="admin-nav-btn" onclick="adminSection('announce',this)">
                <i class="fas fa-bullhorn"></i> Announcements
            </button>
            <button class="admin-nav-btn" onclick="adminSection('idcards',this)">
                <i class="fas fa-id-card"></i> ID Cards
            </button>
            <button class="admin-nav-btn" onclick="adminSection('logs',this)">
                <i class="fas fa-list-alt"></i> System Logs
            </button>
            <button class="admin-nav-btn" onclick="adminSection('backup',this)">
                <i class="fas fa-database"></i> Backup / Restore
            </button>
            <button class="admin-nav-btn" onclick="adminSection('export',this)">
                <i class="fas fa-file-export"></i> Export Data
            </button>
        </div>
 
        <!-- MAIN CONTENT AREA -->
        <div class="admin-main" id="adminMain">
            ${adminUsersHTML()}
        </div>
    </div>`;
}

/* ══════════════════════════════════════════
   DEO PORTAL — Full Implementation
══════════════════════════════════════════ */
function renderDEOPanel(user) {
    return `
    <div class="admin-layout">
        <div class="admin-sidenav">
            <div class="admin-sidenav-title">DEO Menu</div>
            <button class="admin-nav-btn active" onclick="deoSection('pending',this)">
                <i class="fas fa-clock"></i> Pending Review
            </button>
            <button class="admin-nav-btn" onclick="deoSection('approved',this)">
                <i class="fas fa-check-circle"></i> Approved
            </button>
            <button class="admin-nav-btn" onclick="deoSection('rejected',this)">
                <i class="fas fa-times-circle"></i> Rejected
            </button>
            <button class="admin-nav-btn" onclick="deoSection('report',this)">
                <i class="fas fa-chart-bar"></i> Stats Report
            </button>
        </div>
        <div class="admin-main" id="deoMain">${deoPendingHTML(user)}</div>
    </div>`;
}

window.deoSection = function(section, btn) {
    document.querySelectorAll('.admin-nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    const map  = {
        pending:  () => deoPendingHTML(user),
        approved: () => deoFilteredHTML('pending_hod', user, 'Approved by DEO'),
        rejected: () => deoFilteredHTML('rejected', user, 'Rejected by DEO'),
        report:   () => deoReportHTML(user),
    };
    document.getElementById('deoMain').innerHTML = (map[section] || (() => deoPendingHTML(user)))();
};

function deoPendingHTML(user) {
    const data    = getData();
    const dept    = user.department;
    const pending = data.examRegistrations.filter(r =>
        r.status === 'pending_deo' &&
        (data.students.find(s => s.id === r.studentId)?.department === dept || !dept)
    );

    if (pending.length === 0) return `
        <div class="admin-section-head">📋 Pending DEO Review</div>
        <div class="admin-card">
            <p style="color:var(--text-secondary);font-size:0.85rem;">
                ✅ No pending registrations for your department.
            </p>
        </div>`;

    const cards = pending.map(reg => {
        const student = data.students.find(s => s.id === reg.studentId) || {};
        const units   = (reg.units || []).map(u =>
            `<span style="display:inline-block;background:var(--bg-elevated);border:1px solid var(--border);
             border-radius:6px;padding:2px 8px;font-size:0.7rem;margin:2px;">${u.name} (${u.code})</span>`
        ).join('');

        return `
        <div class="admin-card" style="margin-bottom:12px;">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:8px;">
                <div style="flex:1;">
                    <div style="font-weight:700;font-size:0.92rem;color:var(--text-primary);">
                        ${student.name || '—'}
                    </div>
                    <div style="font-size:0.75rem;color:var(--text-secondary);margin:2px 0 6px;">
                        ${reg.studentId} · ${student.department || '—'} · ${student.class || '—'} · 📱 ${student.phone || '—'}
                    </div>
                    <div style="margin-bottom:6px;">${units}</div>
                    <div style="font-size:0.72rem;color:var(--text-secondary);">
                        Submitted: ${new Date(reg.submittedDate).toLocaleDateString()} ·
                        Exam Fee: KSh ${(reg.totalExamFee || 0).toLocaleString()}
                    </div>
                </div>
                <div style="display:flex;flex-direction:column;gap:6px;min-width:120px;">
                    <button class="admin-btn-primary" onclick="deoApprove('${reg.id}')">
                        ✅ Approve
                    </button>
                    <button class="admin-action-btn danger" style="padding:8px;"
                        onclick="deoReject('${reg.id}')">
                        ❌ Reject
                    </button>
                </div>
            </div>
        </div>`;
    }).join('');

    return `
        <div class="admin-section-head">📋 Pending DEO Review (${pending.length})</div>
        <button class="admin-btn-primary" style="margin-bottom:12px;"
            onclick="deoGeneratePDF('pending_deo','${dept}')">
            📄 Download List PDF
        </button>
        ${cards}`;
}

function deoFilteredHTML(status, user, title) {
    const data = getData();
    const dept = user.department;
    const regs = data.examRegistrations.filter(r =>
        r.status === status &&
        (data.students.find(s => s.id === r.studentId)?.department === dept || !dept)
    );
    return `
        <div class="admin-section-head">${title} (${regs.length})</div>
        <div class="admin-card">
            ${regs.length === 0
                ? '<p style="color:var(--text-secondary);font-size:0.85rem;">No records.</p>'
                : regs.map(reg => {
                    const student = data.students.find(s => s.id === reg.studentId) || {};
                    return `
                    <div style="padding:0.6rem 0;border-bottom:1px solid var(--border);font-size:0.83rem;">
                        <strong>${student.name || reg.studentId}</strong>
                        <span style="color:var(--text-secondary);font-size:0.72rem;margin-left:8px;">
                            ${student.department || '—'} · ${reg.id}
                        </span>
                        ${reg.rejectionReason
                            ? `<div style="font-size:0.72rem;color:var(--danger);margin-top:2px;">
                                Reason: ${reg.rejectionReason}</div>`
                            : ''}
                    </div>`;
                }).join('')}
        </div>`;
}

function deoReportHTML(user) {
    const data  = getData();
    const dept  = user.department;
    const regs  = data.examRegistrations.filter(r =>
        data.students.find(s => s.id === r.studentId)?.department === dept || !dept
    );
    const pending  = regs.filter(r => r.status === 'pending_deo').length;
    const approved = regs.filter(r => r.status !== 'pending_deo' && r.status !== 'rejected').length;
    const rejected = regs.filter(r => r.status === 'rejected' && r.rejectedBy === 'DEO').length;

    return `
        <div class="admin-section-head">📊 DEO Stats — ${dept || 'All Departments'}</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px;">
            <div class="stat-card"><i class="fas fa-file-alt" style="color:var(--purple-light)"></i>
                <h3>${regs.length}</h3><p>Total Regs</p></div>
            <div class="stat-card"><i class="fas fa-clock" style="color:var(--warning)"></i>
                <h3>${pending}</h3><p>Pending</p></div>
            <div class="stat-card"><i class="fas fa-check" style="color:var(--success)"></i>
                <h3>${approved}</h3><p>Forwarded</p></div>
            <div class="stat-card"><i class="fas fa-times" style="color:var(--danger)"></i>
                <h3>${rejected}</h3><p>Rejected</p></div>
        </div>`;
}

window.deoApprove = function(regId) {
    const data = getData();
    const reg  = data.examRegistrations.find(r => r.id === regId);
    if (!reg) return;
    reg.status      = 'pending_hod';
    reg.deoApproved = true;
    reg.deoNote     = 'Approved by DEO';
    saveData(data);
    adminLog(`DEO approved registration ${regId}`);
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    document.getElementById('deoMain').innerHTML = deoPendingHTML(user);
};

window.deoReject = function(regId) {
    const reason = prompt('Reason for rejection:');
    if (!reason) return;
    const data = getData();
    const reg  = data.examRegistrations.find(r => r.id === regId);
    if (!reg) return;
    reg.status          = 'rejected';
    reg.rejectedBy      = 'DEO';
    reg.rejectionReason = reason;
    saveData(data);
    adminLog(`DEO rejected registration ${regId}: ${reason}`);
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    document.getElementById('deoMain').innerHTML = deoPendingHTML(user);
};

window.deoGeneratePDF = function(status, dept) {
    const data = getData();
    const regs = data.examRegistrations.filter(r =>
        r.status === status &&
        (data.students.find(s => s.id === r.studentId)?.department === dept || !dept)
    );
    const rows = getExamRegRows(regs);
    generatePDF({
        title:          'DEO Exam Registration Review List',
        subtitle:       'Students pending DEO approval — verify details before forwarding to HOD',
        office:         'DEO OFFICE',
        stage:          'DEO Review',
        department:     dept || 'All Departments',
        signatoryLabel: 'D.E.O Signature',
        columns: [
            {label:'Reg ID',     key:'regId'},
            {label:'Student ID', key:'studentId'},
            {label:'Name',       key:'name'},
            {label:'Class',      key:'class'},
            {label:'Phone',      key:'phone'},
            {label:'Units',      key:'unitCount'},
            {label:'Exam Fee',   key:'examFee'},
            {label:'Submitted',  key:'date'},
        ],
        rows,
    });
};

/* ══════════════════════════════════════════
   HOD PORTAL — Improved with Better Sidebar
══════════════════════════════════════════ */
function renderHODPanel(user) {
    return `
    <div class="admin-layout">
        <div class="admin-sidenav">
            <div class="admin-sidenav-title">
                <i class="fas fa-user-tie"></i> H.O.D Menu
            </div>
            
            <button class="admin-nav-btn active" onclick="hodSection('pending',this)">
                <i class="fas fa-clock"></i> Pending Approvals
            </button>
            <button class="admin-nav-btn" onclick="hodSection('confirmed',this)">
                <i class="fas fa-check-circle"></i> Confirmed
            </button>
            <button class="admin-nav-btn" onclick="hodSection('rejected',this)">
                <i class="fas fa-times-circle"></i> Rejected
            </button>
            
            <div class="admin-sidenav-divider"></div>
            
            <button class="admin-nav-btn" onclick="hodSection('passwords',this)">
                <i class="fas fa-key"></i> Generate Passwords
            </button>
            <button class="admin-nav-btn" onclick="hodSection('staff',this)">
                <i class="fas fa-users"></i> Department Staff
            </button>
            <button class="admin-nav-btn" onclick="hodSection('report',this)">
                <i class="fas fa-chart-bar"></i> Department Report
            </button>
        </div>
        
        <div class="admin-main" id="hodMain">
            ${hodPendingHTML(user)}
        </div>
    </div>`;
}

// Keep your existing hodSection, hodPendingHTML, hodConfirm, hodReject, etc.
// Just add these new sections:

function hodPasswordsHTML() {
    return `
        <div class="admin-section-head">🔑 Generate Passwords</div>
        <div class="admin-card">
            <p>Coming soon: Generate passwords for DEO, Lecturers, Class Teachers & Class Reps.</p>
        </div>`;
}

function hodStaffHTML(user) {
    return `
        <div class="admin-section-head">👥 Department Staff</div>
        <div class="admin-card">
            <p>Staff management for ${user.department || 'Department'} will appear here.</p>
        </div>`;
}

// Update hodSection function to include new tabs
window.hodSection = function(section, btn) {
    document.querySelectorAll('.admin-nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    const map = {
        pending:    () => hodPendingHTML(user),
        confirmed:  () => hodFilteredHTML('pending_finance', user, 'Confirmed — Sent to Finance'),
        rejected:   () => hodFilteredHTML('rejected', user, 'Rejected by HOD'),
        passwords:  () => hodPasswordsHTML(),
        staff:      () => hodStaffHTML(user),
        report:     () => hodReportHTML(user)
    };
    
    document.getElementById('hodMain').innerHTML = map[section] ? map[section]() : hodPendingHTML(user);
};


function hodPendingHTML(user) {
    const data    = getData();
    const dept    = user.department;
    const pending = data.examRegistrations.filter(r =>
        r.status === 'pending_hod' &&
        (data.students.find(s => s.id === r.studentId)?.department === dept || !dept)
    );

    if (pending.length === 0) return `
        <div class="admin-section-head">✅ Pending Confirmations</div>
        <div class="admin-card">
            <p style="color:var(--text-secondary);font-size:0.85rem;">
                ✅ No pending registrations for your department.
            </p>
        </div>`;

    const cards = pending.map(reg => {
        const student = data.students.find(s => s.id === reg.studentId) || {};
        return `
        <div class="admin-card" style="margin-bottom:12px;">
            <div style="font-weight:700;font-size:0.92rem;">${student.name || '—'}</div>
            <div style="font-size:0.75rem;color:var(--text-secondary);margin:2px 0 10px;">
                ${reg.studentId} · ${student.class || '—'} · 📱 ${student.phone || '—'}
            </div>
            ${(reg.units || []).map(u => `
            <div style="display:flex;align-items:center;justify-content:space-between;
                padding:6px 10px;background:var(--bg-elevated);border-radius:8px;
                margin-bottom:6px;gap:10px;flex-wrap:wrap;">
                <span style="font-size:0.8rem;flex:1;">${u.name} <span style="color:var(--text-secondary)">(${u.code})</span></span>
                <select id="unit_${reg.id}_${u.code}" class="admin-input"
                    style="width:130px;padding:4px 8px;font-size:0.75rem;">
                    <option value="normal">Normal</option>
                    <option value="retake">Retake</option>
                </select>
            </div>`).join('')}
            <div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap;">
                <button class="admin-btn-primary" onclick="hodConfirm('${reg.id}')">
                    ✅ Confirm & Send to Finance
                </button>
                <button class="admin-action-btn danger" style="padding:8px 14px;"
                    onclick="hodReject('${reg.id}')">
                    ❌ Reject
                </button>
            </div>
        </div>`;
    }).join('');

    return `
        <div class="admin-section-head">📋 Pending — ${dept || 'All'} (${pending.length})</div>
        <button class="admin-btn-primary" style="margin-bottom:12px;"
            onclick="hodGeneratePDF('pending_hod','${dept}')">
            📄 Download List PDF
        </button>
        ${cards}`;
}

window.hodConfirm = function(regId) {
    const data = getData();
    const reg  = data.examRegistrations.find(r => r.id === regId);
    if (!reg) return;
    const hodUnitNotes = {};
    (reg.units || []).forEach(u => {
        const sel = document.getElementById(`unit_${regId}_${u.code}`);
        hodUnitNotes[u.code] = sel ? sel.value : 'normal';
    });
    reg.status       = 'pending_finance';
    reg.hodConfirmed = true;
    reg.hodUnitNotes = hodUnitNotes;
    reg.totalExamFee = (reg.units || []).reduce((sum, u) =>
        sum + (hodUnitNotes[u.code] === 'retake' ? 200 : 1500), 0);
    saveData(data);
    adminLog(`HOD confirmed registration ${regId}`);
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    document.getElementById('hodMain').innerHTML = hodPendingHTML(user);
};

window.hodReject = function(regId) {
    const reason = prompt('Reason for rejection:');
    if (!reason) return;
    const data = getData();
    const reg  = data.examRegistrations.find(r => r.id === regId);
    if (!reg) return;
    reg.status          = 'rejected';
    reg.rejectedBy      = 'HOD';
    reg.rejectionReason = reason;
    saveData(data);
    adminLog(`HOD rejected registration ${regId}: ${reason}`);
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    document.getElementById('hodMain').innerHTML = hodPendingHTML(user);
};

window.hodGeneratePDF = function(status, dept) {
    const data = getData();
    const regs = data.examRegistrations.filter(r =>
        r.status === status &&
        (data.students.find(s => s.id === r.studentId)?.department === dept || !dept)
    );
    const rows = getExamRegRows(regs);
    rows.forEach((row, i) => {
        const reg = regs[i];
        const notes = reg.hodUnitNotes || {};
        row.unitDetail = (reg.units || []).map(u =>
            `${u.name}: ${notes[u.code] || 'normal'}`
        ).join(' | ');
    });
    generatePDF({
        title:          'HOD Confirmed Exam Registration List',
        subtitle:       'Unit types confirmed by HOD — send to Finance for fee processing',
        office:         'HOD OFFICE',
        stage:          'HOD Confirmation',
        department:     dept || 'All Departments',
        signatoryLabel: 'H.O.D Signature',
        columns: [
            {label:'Reg ID',       key:'regId'},
            {label:'Student ID',   key:'studentId'},
            {label:'Name',         key:'name'},
            {label:'Class',        key:'class'},
            {label:'Phone',        key:'phone'},
            {label:'Units Detail', key:'unitDetail'},
            {label:'Exam Fee',     key:'examFee'},
        ],
        rows,
    });
};

function hodFilteredHTML(status, user, title) {
    const data = getData();
    const dept = user.department;
    const regs = data.examRegistrations.filter(r =>
        r.status === status &&
        (data.students.find(s => s.id === r.studentId)?.department === dept || !dept)
    );
    return `
        <div class="admin-section-head">${title} (${regs.length})</div>
        <div class="admin-card">
            ${regs.length === 0
                ? '<p style="color:var(--text-secondary);font-size:0.85rem;">No records.</p>'
                : regs.map(reg => {
                    const student = data.students.find(s => s.id === reg.studentId) || {};
                    return `
                    <div style="padding:0.65rem 0;border-bottom:1px solid var(--border);font-size:0.83rem;">
                        <strong>${student.name || reg.studentId}</strong>
                        <span style="color:var(--text-secondary);font-size:0.72rem;margin-left:8px;">
                            ${reg.id} · KSh ${(reg.totalExamFee||0).toLocaleString()}
                        </span>
                        ${reg.rejectionReason
                            ? `<div style="font-size:0.72rem;color:var(--danger);margin-top:2px;">
                                Reason: ${reg.rejectionReason}</div>`
                            : ''}
                    </div>`;
                }).join('')}
        </div>`;
}

function hodReportHTML(user) {
    const data      = getData();
    const dept      = user.department;
    const dStudents = data.students.filter(s => s.department === dept);
    const dRegs     = data.examRegistrations.filter(r =>
        dStudents.find(s => s.id === r.studentId)
    );
    const confirmed = dRegs.filter(r => r.hodConfirmed).length;
    const pending   = dRegs.filter(r => r.status === 'pending_hod').length;
    const rejected  = dRegs.filter(r => r.rejectedBy === 'HOD').length;
    const totalFee  = dRegs.reduce((sum, r) => sum + (r.totalExamFee || 0), 0);
    const avgAtt    = dStudents.length === 0 ? 0 : Math.round(
        dStudents.reduce((sum, s) =>
            sum + (s.attendance ? (s.attendance.attended/s.attendance.total)*100 : 0), 0
        ) / dStudents.length
    );

    return `
        <div class="admin-section-head">📊 Department Report — ${dept || 'All'}</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px;margin-bottom:1rem;">
            <div class="stat-card"><i class="fas fa-users" style="color:var(--blue-light)"></i>
                <h3>${dStudents.length}</h3><p>Students</p></div>
            <div class="stat-card"><i class="fas fa-clock" style="color:var(--warning)"></i>
                <h3>${pending}</h3><p>Pending</p></div>
            <div class="stat-card"><i class="fas fa-check" style="color:var(--success)"></i>
                <h3>${confirmed}</h3><p>Confirmed</p></div>
            <div class="stat-card"><i class="fas fa-times" style="color:var(--danger)"></i>
                <h3>${rejected}</h3><p>Rejected</p></div>
            <div class="stat-card"><i class="fas fa-calendar-check" style="color:var(--blue-light)"></i>
                <h3>${avgAtt}%</h3><p>Avg Attendance</p></div>
            <div class="stat-card"><i class="fas fa-coins" style="color:var(--purple-light)"></i>
                <h3>KSh ${totalFee.toLocaleString()}</h3><p>Total Fees</p></div>
        </div>
        <button class="admin-btn-primary"
            onclick="hodGeneratePDF('pending_finance','${dept}')">
            📄 Download Finance List PDF
        </button>`;
}

function hodPasswordsHTML() {
    const data = getData();
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    const dept = user.department;
    const deoList = data.deos.filter(d => d.department === dept);
    const lecList = data.lecturers.filter(l => l.department === dept);
    const tchList = data.classTeachers.filter(t => t.department === dept);
    const repList = data.classReps.filter(r => r.department === dept);

    const genRow = (label, arr) => arr.map(u => `
        <div style="display:flex;justify-content:space-between;align-items:center;
            padding:0.5rem 0;border-bottom:1px solid var(--border);font-size:0.83rem;">
            <span><strong>${u.name}</strong>
                <span style="color:var(--text-secondary);font-size:0.72rem;margin-left:6px;">${label} · ${u.id}</span>
            </span>
            <button class="admin-action-btn edit"
                onclick="hodResetPass('${u.id}','${label.toLowerCase().replace(' ','')}')">
                🔑 Reset Password
            </button>
        </div>`).join('');

    return `
        <div class="admin-section-head">🔑 Generate / Reset Passwords</div>
        <div class="admin-card" style="margin-bottom:10px;">
            <div class="admin-card-title">D.E.O (${deoList.length})</div>
            ${deoList.length ? genRow('DEO', deoList) : '<p style="color:var(--text-secondary);font-size:0.82rem;margin-top:6px;">No DEO in this department.</p>'}
        </div>
        <div class="admin-card" style="margin-bottom:10px;">
            <div class="admin-card-title">Lecturers (${lecList.length})</div>
            ${lecList.length ? genRow('Lecturer', lecList) : '<p style="color:var(--text-secondary);font-size:0.82rem;margin-top:6px;">No lecturers in this department.</p>'}
        </div>
        <div class="admin-card" style="margin-bottom:10px;">
            <div class="admin-card-title">Class Teachers (${tchList.length})</div>
            ${tchList.length ? genRow('Class Teacher', tchList) : '<p style="color:var(--text-secondary);font-size:0.82rem;margin-top:6px;">No class teachers in this department.</p>'}
        </div>
        <div class="admin-card">
            <div class="admin-card-title">Class Reps (${repList.length})</div>
            ${repList.length ? genRow('Class Rep', repList) : '<p style="color:var(--text-secondary);font-size:0.82rem;margin-top:6px;">No class reps in this department.</p>'}
        </div>`;
}

window.hodResetPass = function(userId, roleType) {
    const newPass = prompt(`Enter new password for ${userId}:`);
    if (!newPass) return;
    const data = getData();
    const arrMap = {deo:'deos', lecturer:'lecturers', classteacher:'classTeachers', classrep:'classReps'};
    const arr = data[arrMap[roleType]];
    if (arr) {
        const u = arr.find(x => x.id === userId);
        if (u) {
            u.password = newPass;
            saveData(data);
            adminLog(`HOD reset password for ${userId}`);
            alert(`✅ Password reset for ${u.name}`);
        }
    }
};

function hodStaffHTML(user) {
    const data = getData();
    const dept = user.department;
    const lecturers    = data.lecturers.filter(l => l.department === dept);
    const classTeachers= data.classTeachers.filter(t => t.department === dept);
    const deos         = data.deos.filter(d => d.department === dept);
    const students     = data.students.filter(s => s.department === dept);

    const table = (title, arr, fields) => `
        <div class="admin-card" style="margin-bottom:10px;">
            <div class="admin-card-title">${title} (${arr.length})</div>
            ${arr.length === 0
                ? `<p style="color:var(--text-secondary);font-size:0.82rem;margin-top:6px;">None found.</p>`
                : arr.map(u => `
                    <div style="display:flex;justify-content:space-between;align-items:center;
                        padding:0.5rem 0;border-bottom:1px solid var(--border);font-size:0.82rem;">
                        <div>
                            <strong>${u.name}</strong>
                            <div style="font-size:0.7rem;color:var(--text-secondary);">
                                ${u.id}${u.class ? ' · ' + u.class : ''}${u.unit ? ' · ' + u.unit : ''}
                            </div>
                        </div>
                        <span class="admin-role-pill">${fields}</span>
                    </div>`).join('')}
        </div>`;

    return `
        <div class="admin-section-head">👥 Department Staff — ${dept}</div>
        ${table('D.E.O', deos, 'DEO')}
        ${table('Lecturers', lecturers, 'Lecturer')}
        ${table('Class Teachers', classTeachers, 'Class Teacher')}
        ${table('Students', students, 'Student')}`;
}

/* ══════════════════════════════════════════
   FINANCE OFFICE PORTAL — Matching HOD Style
══════════════════════════════════════════ */
function renderFinancePanel(user) {
    return `
    <div class="admin-layout">
        <div class="admin-sidenav">
            <div class="admin-sidenav-title">
                <i class="fas fa-coins"></i> Finance Menu
            </div>
            
            <button class="admin-nav-btn active" onclick="financeSection('pending',this)">
                <i class="fas fa-clock"></i> Pending from HOD
            </button>
            <button class="admin-nav-btn" onclick="financeSection('cleared',this)">
                <i class="fas fa-check-circle"></i> Cleared Students
            </button>
            <button class="admin-nav-btn" onclick="financeSection('uncleared',this)">
                <i class="fas fa-exclamation-triangle"></i> Uncleared → Deputy
            </button>
            <button class="admin-nav-btn" onclick="financeSection('report',this)">
                <i class="fas fa-chart-bar"></i> Financial Report
            </button>
        </div>
        
        <div class="admin-main" id="financeMain">
            ${financePendingHTML()}
        </div>
    </div>`;
}

window.financeSection = function(section, btn) {
    document.querySelectorAll('.admin-nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const map = {
        pending:    () => financePendingHTML(),
        cleared:    () => financeClearedHTML(),
        uncleared:  () => financeUnclearedHTML(),
        report:     () => financeReportHTML()
    };
    
    document.getElementById('financeMain').innerHTML = map[section]();
};

// Pending from HOD (Main Screen)
function financePendingHTML() {
    const data = getData();
    const pending = data.examRegistrations.filter(r => r.status === 'pending_finance');

    if (pending.length === 0) {
        return `
            <div class="admin-section-head">💰 Pending from HOD (0)</div>
            <div class="admin-card">
                <p style="color:var(--text-secondary);">No pending registrations from HOD at the moment.</p>
            </div>`;
    }

    const cards = pending.map(reg => {
        const student = data.students.find(s => s.id === reg.studentId) || {};
        const currentBalance = student.feeBalance || 0;
        const examFee = reg.totalExamFee || 0;
        const newTotal = currentBalance + examFee;

        return `
        <div class="admin-card" style="margin-bottom:15px;">
            <div style="font-weight:700;font-size:1rem;">${student.name || '—'}</div>
            <div style="color:var(--text-secondary);font-size:0.8rem;">
                ${reg.studentId} • ${student.department || ''} • ${student.class || ''}
            </div>
            
            <div style="margin:12px 0;background:var(--bg-elevated);padding:12px;border-radius:10px;">
                <strong>HOD Confirmed Exam Fee:</strong> KSh ${examFee.toLocaleString()}<br>
                <strong>Current School Fee Balance:</strong> <span style="color:var(--danger)">KSh ${currentBalance.toLocaleString()}</span><br>
                <strong style="color:var(--purple-light);font-size:1.05rem;">New Total Balance: KSh ${newTotal.toLocaleString()}</strong>
            </div>

            <div style="display:flex;gap:10px;flex-wrap:wrap;">
                <button class="admin-btn-primary" onclick="financeClearStudent('${reg.id}')">
                    ✅ Clear Fees & Forward to Exam Office
                </button>
                <button class="admin-action-btn danger" onclick="financeSendToDeputy('${reg.id}')">
                    ⚠️ Send to Deputy (Uncleared)
                </button>
            </div>
        </div>`;
    }).join('');

    return `
        <div class="admin-section-head">💰 Pending from HOD (${pending.length})</div>
        ${cards}`;
}

// Other sections (you can expand later)
function financeClearedHTML() {
    return `<div class="admin-card"><p>Cleared students will appear here.</p></div>`;
}

function financeUnclearedHTML() {
    return `<div class="admin-card"><p>Students sent to Deputy Academics will appear here.</p></div>`;
}

function financeReportHTML() {
    return `<div class="admin-card"><p>Financial Report coming soon.</p></div>`;
}

/* ══════════════════════════════════════════
   DEPUTY PRINCIPAL (ACADEMICS) — 8 Features
══════════════════════════════════════════ */
function renderDeputyAcadPanel() {
    return `
    <div class="admin-layout">
        <div class="admin-sidenav">
            <div class="admin-sidenav-title">Acad Menu</div>
            <button class="admin-nav-btn active" onclick="acadSection('approvals',this)"><i class="fas fa-check-circle"></i> Exam Approvals</button>
            <button class="admin-nav-btn" onclick="acadSection('uncleared',this)"><i class="fas fa-exclamation-circle"></i> Uncleared Fees</button>
            <button class="admin-nav-btn" onclick="acadSection('calendar',this)"><i class="fas fa-calendar"></i> Academic Calendar</button>
            <button class="admin-nav-btn" onclick="acadSection('stats',this)"><i class="fas fa-chart-bar"></i> Statistics</button>
            <button class="admin-nav-btn" onclick="acadSection('policy',this)"><i class="fas fa-gavel"></i> Policy Board</button>
            <button class="admin-nav-btn" onclick="acadSection('staffreport',this)"><i class="fas fa-chalkboard-user"></i> Staff Report</button>
            <button class="admin-nav-btn" onclick="acadSection('deptcompare',this)"><i class="fas fa-chart-pie"></i> Dept Comparison</button>
            <button class="admin-nav-btn" onclick="acadSection('acadnotices',this)"><i class="fas fa-bullhorn"></i> Acad Notices</button>
        </div>
        <div class="admin-main" id="acadMain">${acadApprovalsHTML()}</div>
    </div>`;
}

window.acadSection = function(section, btn) {
    document.querySelectorAll('.admin-nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const map = {
        approvals:   acadApprovalsHTML,
        uncleared:   acadUnclearedHTML,
        calendar:    acadCalendarHTML,
        stats:       acadStatsHTML,
        policy:      acadPolicyHTML,
        staffreport: acadStaffReportHTML,
        deptcompare: acadDeptCompareHTML,
        acadnotices: acadNoticesHTML,
    };
    document.getElementById('acadMain').innerHTML = (map[section] || acadApprovalsHTML)();
};

/* 1 — Special Exam Approvals */
function acadApprovalsHTML() {
    const data = getData();
    const special = data.examRegistrations.filter(r => r.status === 'pending_deputy');
    const rows = special.length === 0
        ? '<p style="color:var(--text-secondary);font-size:0.85rem;">No pending special cases.</p>'
        : special.map(r => `
            <div class="admin-card" style="margin-bottom:10px;">
                <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
                    <div>
                        <div style="font-weight:700;font-size:0.88rem;">${r.studentId} — ${r.units?.length || 0} units</div>
                        <div style="font-size:0.75rem;color:var(--text-secondary);">Fee: KSh ${r.totalExamFee?.toLocaleString()} · ${r.prevExam || 'N/A'}</div>
                        <div style="font-size:0.72rem;color:var(--warning);">Reason: ${r.specialReason || 'Fee balance outstanding'}</div>
                    </div>
                    <div style="display:flex;gap:8px;">
                        <button class="admin-action-btn edit" onclick="acadApprove('${r.id}')">✅ Approve</button>
                        <button class="admin-action-btn danger" onclick="acadReject('${r.id}')">❌ Reject</button>
                    </div>
                </div>
            </div>`).join('');
    return `
        <div class="admin-section-head">✅ Special Exam Approvals</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">Pending Special Cases (${special.length})</div>
            <div style="margin-top:10px;">${rows}</div>
        </div>
        <div class="admin-card">
            <div class="admin-card-title">All Registrations Overview</div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin-top:10px;">
                <div class="stat-card"><i class="fas fa-clock" style="color:var(--warning)"></i><h3>${data.examRegistrations.filter(r=>r.status==='pending_hod').length}</h3><p>Pending HOD</p></div>
                <div class="stat-card"><i class="fas fa-check" style="color:var(--success)"></i><h3>${data.examRegistrations.filter(r=>r.status==='approved').length}</h3><p>Approved</p></div>
                <div class="stat-card"><i class="fas fa-times" style="color:var(--danger)"></i><h3>${data.examRegistrations.filter(r=>r.status==='rejected').length}</h3><p>Rejected</p></div>
            </div>
        </div>`;
}

window.acadApprove = function(id) {
    const data = getData();
    const reg  = data.examRegistrations.find(r => r.id === id);
    if (reg) { reg.status = 'approved'; reg.deputyApproved = true; saveData(data); adminLog(`Deputy Acad approved exam reg ${id}`); }
    document.getElementById('acadMain').innerHTML = acadApprovalsHTML();
};

window.acadReject = function(id) {
    const reason = prompt('Reason for rejection:');
    if (!reason) return;
    const data = getData();
    const reg  = data.examRegistrations.find(r => r.id === id);
    if (reg) { reg.status = 'rejected'; reg.rejectedReason = reason; saveData(data); adminLog(`Deputy Acad rejected exam reg ${id}: ${reason}`); }
    document.getElementById('acadMain').innerHTML = acadApprovalsHTML();
};

/* 2 — Uncleared Fee Students */
function acadUnclearedHTML() {
    const data = getData();
    const uncleared = data.students.filter(s => s.feeBalance > 0);
    return `
        <div class="admin-section-head">⚠️ Uncleared Fee Students</div>
        <div class="admin-card">
            <div class="admin-card-title">${uncleared.length} student(s) with outstanding balance</div>
            ${uncleared.length === 0
                ? '<p style="color:var(--success);font-size:0.85rem;margin-top:8px;">✅ All students cleared!</p>'
                : uncleared.map(s => `
                    <div style="display:flex;justify-content:space-between;align-items:center;padding:0.6rem 0;border-bottom:1px solid var(--border);font-size:0.84rem;flex-wrap:wrap;gap:6px;">
                        <div>
                            <div style="font-weight:700;">${s.name}</div>
                            <div style="font-size:0.72rem;color:var(--text-secondary);">${s.id} · ${s.department} · ${s.class}</div>
                        </div>
                        <div style="color:var(--danger);font-weight:700;">KSh ${s.feeBalance.toLocaleString()}</div>
                        <button class="admin-action-btn edit" onclick="acadReferToDeputy('${s.id}')">📋 Flag for Review</button>
                    </div>`).join('')}
        </div>`;
}

window.acadReferToDeputy = function(id) {
    adminLog(`Deputy Acad flagged student ${id} for fee review`);
    alert(`✅ Student ${id} flagged for fee review. Finance has been notified.`);
};

/* 3 — Academic Calendar */
function acadCalendarHTML() {
    const data  = getData();
    if (!data.academicCalendar) data.academicCalendar = [];
    return `
        <div class="admin-section-head">📅 Academic Calendar</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">➕ Add Event</div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:10px;margin-top:10px;">
                <input id="calTitle" class="admin-input" placeholder="Event title">
                <input id="calDate"  class="admin-input" type="date">
                <input id="calEnd"   class="admin-input" type="date" placeholder="End date (optional)">
                <select id="calType" class="admin-input">
                    <option value="exam">Exam</option>
                    <option value="holiday">Holiday</option>
                    <option value="event">Event</option>
                    <option value="deadline">Deadline</option>
                </select>
            </div>
            <button class="admin-btn-primary" style="margin-top:10px;" onclick="acadAddEvent()"><i class="fas fa-plus"></i> Add Event</button>
        </div>
        <div class="admin-card">
            <div class="admin-card-title">Upcoming Events (${data.academicCalendar.length})</div>
            ${data.academicCalendar.length === 0
                ? '<p style="color:var(--text-secondary);font-size:0.85rem;margin-top:8px;">No events added yet.</p>'
                : data.academicCalendar.sort((a,b)=>new Date(a.date)-new Date(b.date)).map((e,i) => `
                    <div style="display:flex;justify-content:space-between;align-items:center;padding:0.6rem 0;border-bottom:1px solid var(--border);font-size:0.84rem;">
                        <div>
                            <span class="admin-role-pill" style="margin-right:6px;">${e.type}</span>
                            <strong>${e.title}</strong>
                            <div style="font-size:0.72rem;color:var(--text-secondary);">${e.date}${e.endDate ? ' → ' + e.endDate : ''}</div>
                        </div>
                        <button class="admin-action-btn danger" onclick="acadDeleteEvent(${i})">🗑</button>
                    </div>`).join('')}
        </div>`;
}

window.acadAddEvent = function() {
    const title = document.getElementById('calTitle').value.trim();
    const date  = document.getElementById('calDate').value;
    const end   = document.getElementById('calEnd').value;
    const type  = document.getElementById('calType').value;
    if (!title || !date) return alert('Title and date required.');
    const data  = getData();
    if (!data.academicCalendar) data.academicCalendar = [];
    data.academicCalendar.push({title, date, endDate: end || null, type});
    saveData(data); adminLog(`Added calendar event: ${title} on ${date}`);
    document.getElementById('acadMain').innerHTML = acadCalendarHTML();
};

window.acadDeleteEvent = function(idx) {
    const data = getData();
    data.academicCalendar.splice(idx, 1);
    saveData(data);
    document.getElementById('acadMain').innerHTML = acadCalendarHTML();
};

/* 4 — Statistics */
function acadStatsHTML() {
    const data = getData();
    const totalStudents   = data.students.length;
    const cleared         = data.students.filter(s => s.feeBalance === 0).length;
    const totalRegs       = data.examRegistrations.length;
    const approved        = data.examRegistrations.filter(r => r.status === 'approved').length;
    const avgAtt          = totalStudents === 0 ? 0 : Math.round(
        data.students.reduce((sum, s) => sum + (s.attendance ? (s.attendance.attended / s.attendance.total) * 100 : 0), 0) / totalStudents
    );
    return `
        <div class="admin-section-head">📊 School Performance Statistics</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px;">
            <div class="stat-card"><i class="fas fa-users" style="color:var(--blue-light)"></i><h3>${totalStudents}</h3><p>Total Students</p></div>
            <div class="stat-card"><i class="fas fa-check-circle" style="color:var(--success)"></i><h3>${cleared}</h3><p>Fee Cleared</p></div>
            <div class="stat-card"><i class="fas fa-exclamation-circle" style="color:var(--danger)"></i><h3>${totalStudents - cleared}</h3><p>Fee Outstanding</p></div>
            <div class="stat-card"><i class="fas fa-file-signature" style="color:var(--purple-light)"></i><h3>${totalRegs}</h3><p>Exam Registrations</p></div>
            <div class="stat-card"><i class="fas fa-award" style="color:var(--success)"></i><h3>${approved}</h3><p>Approved Regs</p></div>
            <div class="stat-card"><i class="fas fa-calendar-check" style="color:var(--blue-light)"></i><h3>${avgAtt}%</h3><p>Avg Attendance</p></div>
        </div>
        <div class="admin-card" style="margin-top:1rem;">
            <div class="admin-card-title">Fee Clearance by Department</div>
            ${data.departments.map(dept => {
                const dStudents = data.students.filter(s => s.department === dept);
                const dCleared  = dStudents.filter(s => s.feeBalance === 0).length;
                const pct       = dStudents.length === 0 ? 0 : Math.round((dCleared / dStudents.length) * 100);
                return `<div style="margin:8px 0;">
                    <div style="display:flex;justify-content:space-between;font-size:0.8rem;margin-bottom:3px;">
                        <span>${dept}</span><span style="color:var(--purple-light)">${dCleared}/${dStudents.length} (${pct}%)</span>
                    </div>
                    <div style="background:var(--bg-elevated);border-radius:20px;height:8px;overflow:hidden;">
                        <div style="height:100%;width:${pct}%;background:linear-gradient(90deg,var(--purple),var(--blue));border-radius:20px;transition:width .5s;"></div>
                    </div>
                </div>`;
            }).join('')}
        </div>`;
}

/* 5 — Policy Board */
function acadPolicyHTML() {
    const data = getData();
    if (!data.academicPolicies) data.academicPolicies = [];
    return `
        <div class="admin-section-head">📜 Policy Board</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">➕ Add Policy</div>
            <input id="polTitle"   class="admin-input" placeholder="Policy title" style="margin-top:10px;">
            <textarea id="polBody" class="admin-input" rows="3" placeholder="Policy content..." style="margin-top:8px;width:100%;resize:vertical;"></textarea>
            <button class="admin-btn-primary" style="margin-top:8px;" onclick="acadAddPolicy()"><i class="fas fa-plus"></i> Post Policy</button>
        </div>
        <div class="admin-card">
            <div class="admin-card-title">Active Policies (${data.academicPolicies.length})</div>
            ${data.academicPolicies.length === 0
                ? '<p style="color:var(--text-secondary);font-size:0.85rem;margin-top:8px;">No policies posted yet.</p>'
                : data.academicPolicies.map((p,i) => `
                    <div style="padding:0.75rem 0;border-bottom:1px solid var(--border);">
                        <div style="display:flex;justify-content:space-between;align-items:center;">
                            <strong style="font-size:0.88rem;">${p.title}</strong>
                            <button class="admin-action-btn danger" onclick="acadDeletePolicy(${i})">🗑</button>
                        </div>
                        <div style="font-size:0.78rem;color:var(--text-secondary);margin-top:4px;line-height:1.6;">${p.body}</div>
                        <div style="font-size:0.65rem;color:var(--muted,#666);margin-top:4px;">${new Date(p.date).toLocaleDateString()}</div>
                    </div>`).join('')}
        </div>`;
}

window.acadAddPolicy = function() {
    const title = document.getElementById('polTitle').value.trim();
    const body  = document.getElementById('polBody').value.trim();
    if (!title || !body) return alert('Fill in title and content.');
    const data  = getData();
    if (!data.academicPolicies) data.academicPolicies = [];
    data.academicPolicies.push({title, body, date: new Date().toISOString()});
    saveData(data); adminLog(`Added policy: ${title}`);
    document.getElementById('acadMain').innerHTML = acadPolicyHTML();
};

window.acadDeletePolicy = function(idx) {
    const data = getData();
    data.academicPolicies.splice(idx, 1);
    saveData(data);
    document.getElementById('acadMain').innerHTML = acadPolicyHTML();
};

/* 6 — Staff Academic Report */
function acadStaffReportHTML() {
    const data = getData();
    return `
        <div class="admin-section-head">👩‍🏫 Staff Academic Report</div>
        <div class="admin-card">
            <div class="admin-card-title">Lecturers Status (${data.lecturers.length})</div>
            ${data.lecturers.length === 0
                ? '<p style="color:var(--text-secondary);font-size:0.85rem;margin-top:8px;">No lecturers found.</p>'
                : data.lecturers.map(l => `
                    <div style="display:flex;justify-content:space-between;align-items:center;padding:0.6rem 0;border-bottom:1px solid var(--border);font-size:0.84rem;flex-wrap:wrap;gap:6px;">
                        <div>
                            <div style="font-weight:700;">${l.name}</div>
                            <div style="font-size:0.72rem;color:var(--text-secondary);">${l.id} · ${l.department} · Unit: ${l.unit || 'N/A'}</div>
                        </div>
                        <span class="admin-role-pill" style="background:rgba(16,185,129,.15);border-color:var(--success);color:var(--success);">Active</span>
                    </div>`).join('')}
        </div>
        <div class="admin-card" style="margin-top:1rem;">
            <div class="admin-card-title">HODs Status (${data.hods.length})</div>
            ${data.hods.map(h => `
                <div style="display:flex;justify-content:space-between;align-items:center;padding:0.6rem 0;border-bottom:1px solid var(--border);font-size:0.84rem;">
                    <div>
                        <div style="font-weight:700;">${h.name}</div>
                        <div style="font-size:0.72rem;color:var(--text-secondary);">${h.id} · ${h.department}</div>
                    </div>
                    <span class="admin-role-pill">HOD</span>
                </div>`).join('')}
        </div>`;
}

/* 7 — Department Comparison */
function acadDeptCompareHTML() {
    const data = getData();
    return `
        <div class="admin-section-head">📊 Department Comparison</div>
        ${data.departments.map(dept => {
            const dStudents = data.students.filter(s => s.department === dept);
            const dCleared  = dStudents.filter(s => s.feeBalance === 0).length;
            const dRegs     = data.examRegistrations.filter(r => dStudents.find(s => s.id === r.studentId)).length;
            const avgAtt    = dStudents.length === 0 ? 0 : Math.round(
                dStudents.reduce((sum,s) => sum + (s.attendance ? (s.attendance.attended/s.attendance.total)*100 : 0), 0) / dStudents.length
            );
            return `
            <div class="admin-card" style="margin-bottom:10px;">
                <div class="admin-card-title">${dept}</div>
                <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:8px;margin-top:8px;">
                    <div style="text-align:center;padding:8px;background:var(--bg-elevated);border-radius:10px;">
                        <div style="font-size:1.2rem;font-weight:800;color:var(--purple-light);">${dStudents.length}</div>
                        <div style="font-size:0.65rem;color:var(--text-secondary);">Students</div>
                    </div>
                    <div style="text-align:center;padding:8px;background:var(--bg-elevated);border-radius:10px;">
                        <div style="font-size:1.2rem;font-weight:800;color:var(--success);">${dCleared}</div>
                        <div style="font-size:0.65rem;color:var(--text-secondary);">Fee Cleared</div>
                    </div>
                    <div style="text-align:center;padding:8px;background:var(--bg-elevated);border-radius:10px;">
                        <div style="font-size:1.2rem;font-weight:800;color:var(--blue-light);">${avgAtt}%</div>
                        <div style="font-size:0.65rem;color:var(--text-secondary);">Avg Attendance</div>
                    </div>
                    <div style="text-align:center;padding:8px;background:var(--bg-elevated);border-radius:10px;">
                        <div style="font-size:1.2rem;font-weight:800;color:var(--warning);">${dRegs}</div>
                        <div style="font-size:0.65rem;color:var(--text-secondary);">Exam Regs</div>
                    </div>
                </div>
            </div>`;
        }).join('')}`;
}

/* 8 — Academic Notices */
function acadNoticesHTML() {
    const data = getData();
    const acadNotices = (data.noticeboard || []).filter(n => n.recipient === 'staff' || n.recipient === 'all' || n.recipient === 'acad');
    return `
        <div class="admin-section-head">📢 Academic Notices</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">➕ Post Academic Notice</div>
            <textarea id="acadNoticeMsg" class="admin-input" rows="3" placeholder="Type notice for academic staff..." style="margin-top:10px;width:100%;resize:vertical;"></textarea>
            <button class="admin-btn-primary" style="margin-top:8px;" onclick="acadPostNotice()"><i class="fas fa-bullhorn"></i> Broadcast</button>
        </div>
        <div class="admin-card">
            <div class="admin-card-title">Recent Academic Notices (${acadNotices.length})</div>
            ${acadNotices.length === 0
                ? '<p style="color:var(--text-secondary);font-size:0.85rem;margin-top:8px;">No notices yet.</p>'
                : acadNotices.slice(-10).reverse().map(n => `
                    <div style="padding:0.6rem 0;border-bottom:1px solid var(--border);">
                        <div style="font-size:0.78rem;color:var(--purple-light);font-weight:700;">${n.sender}</div>
                        <div style="font-size:0.82rem;">${n.message}</div>
                        <div style="font-size:0.68rem;color:var(--text-secondary);">${new Date(n.timestamp).toLocaleString()}</div>
                    </div>`).join('')}
        </div>`;
}

window.acadPostNotice = function() {
    const msg = document.getElementById('acadNoticeMsg').value.trim();
    if (!msg) return alert('Enter a message.');
    const data = getData();
    data.noticeboard.push({id:'n'+Date.now(), sender:'Deputy (Academics)', message: msg, timestamp: new Date().toISOString(), recipient:'staff'});
    saveData(data); adminLog(`Deputy Acad posted notice: ${msg.substring(0,40)}`);
    alert('✅ Notice broadcast to academic staff!');
    document.getElementById('acadMain').innerHTML = acadNoticesHTML();
};


/* ══════════════════════════════════════════
   DEAN OF STUDENTS PORTAL
══════════════════════════════════════════ */
function renderDeanPanel(user) {
    return `
    <div class="admin-layout">
        <div class="admin-sidenav">
            <div class="admin-sidenav-title">
                <i class="fas fa-heart"></i> Dean Menu
            </div>
            
            <button class="admin-nav-btn active" onclick="deanSection('hostel',this)">
                <i class="fas fa-bed"></i> Hostel Clearance
            </button>
            <button class="admin-nav-btn" onclick="deanSection('complaints',this)">
                <i class="fas fa-exclamation-triangle"></i> Student Complaints
            </button>
            <button class="admin-nav-btn" onclick="deanSection('activities',this)">
                <i class="fas fa-calendar"></i> Activity Approvals
            </button>
            <button class="admin-nav-btn" onclick="deanSection('kitco',this)">
                <i class="fas fa-users"></i> KITCO Management
            </button>
            <button class="admin-nav-btn" onclick="deanSection('report',this)">
                <i class="fas fa-chart-bar"></i> Student Welfare Report
            </button>
        </div>
        
        <div class="admin-main" id="deanMain">
            ${deanHostelHTML()}
        </div>
    </div>`;
}

window.deanSection = function(section, btn) {
    document.querySelectorAll('.admin-nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const map = {
        hostel:     () => deanHostelHTML(),
        complaints: () => deanComplaintsHTML(),
        activities: () => deanActivitiesHTML(),
        kitco:      () => deanKITCOHTML(),
        report:     () => deanReportHTML()
    };
    
    document.getElementById('deanMain').innerHTML = map[section]();
};

// Hostel Clearance (Core Feature)
function deanHostelHTML() {
    return `
        <div class="admin-section-head">🏠 Hostel Clearance</div>
        <div class="admin-card">
            <p>Hostel clearance requests and boarding student management coming soon.</p>
            <button class="admin-btn-primary" style="margin-top:12px;" onclick="alert('Hostel clearance form will open here')">
                Generate Clearance Form
            </button>
        </div>`;
}

function deanComplaintsHTML() {
    return `<div class="admin-card"><p>Student complaints and discipline cases will appear here.</p></div>`;
}

function deanActivitiesHTML() {
    return `<div class="admin-card"><p>Pending activity approvals will appear here.</p></div>`;
}

function deanKITCOHTML() {
    return `
        <div class="admin-section-head">🎖️ KITCO Management</div>
        <div class="admin-card">
            <p>Generate KITCO passwords and manage student leadership body.</p>
            <button class="admin-btn-primary" onclick="alert('KITCO password generation coming soon')">
                Generate KITCO Passwords
            </button>
        </div>`;
}

function deanReportHTML() {
    return `<div class="admin-card"><p>Student welfare and discipline report coming soon.</p></div>`;
}

/* ══════════════════════════════════════════
   DEPUTY PRINCIPAL (INFRASTRUCTURE) — 7 Features
══════════════════════════════════════════ */
function renderDeputyInfraPanel() {
    return `
    <div class="admin-layout">
        <div class="admin-sidenav">
            <div class="admin-sidenav-title">Infra Menu</div>
            <button class="admin-nav-btn active" onclick="infraSection('facilities',this)"><i class="fas fa-building"></i> Facilities</button>
            <button class="admin-nav-btn" onclick="infraSection('complaints',this)"><i class="fas fa-tools"></i> Complaints</button>
            <button class="admin-nav-btn" onclick="infraSection('projects',this)"><i class="fas fa-hard-hat"></i> Projects</button>
            <button class="admin-nav-btn" onclick="infraSection('booking',this)"><i class="fas fa-calendar-check"></i> Facility Booking</button>
            <button class="admin-nav-btn" onclick="infraSection('assets',this)"><i class="fas fa-boxes"></i> Asset Register</button>
            <button class="admin-nav-btn" onclick="infraSection('schedule',this)"><i class="fas fa-wrench"></i> Maint. Schedule</button>
            <button class="admin-nav-btn" onclick="infraSection('infranotices',this)"><i class="fas fa-bullhorn"></i> Infra Notices</button>
        </div>
        <div class="admin-main" id="infraMain">${infraFacilitiesHTML()}</div>
    </div>`;
}

window.infraSection = function(section, btn) {
    document.querySelectorAll('.admin-nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const map = {
        facilities:   infraFacilitiesHTML,
        complaints:   infraComplaintsHTML,
        projects:     infraProjectsHTML,
        booking:      infraBookingHTML,
        assets:       infraAssetsHTML,
        schedule:     infraScheduleHTML,
        infranotices: infraNoticesHTML,
    };
    document.getElementById('infraMain').innerHTML = (map[section] || infraFacilitiesHTML)();
};

/* 1 — Facilities */
function infraFacilitiesHTML() {
    const data = getData();
    if (!data.facilities) data.facilities = [
        {name:'Library', type:'Academic', status:'Operational', capacity:200},
        {name:'Sports Field', type:'Recreation', status:'Operational', capacity:500},
        {name:'Male Hostel', type:'Residential', status:'Operational', capacity:150},
        {name:'Female Hostel', type:'Residential', status:'Operational', capacity:120},
        {name:'Main Field', type:'Recreation', status:'Operational', capacity:1000},
    ];
    return `
        <div class="admin-section-head">🏫 Manage Facilities</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">➕ Add Facility</div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin-top:10px;">
                <input id="facName"     class="admin-input" placeholder="Facility name">
                <select id="facType"    class="admin-input">
                    <option>Academic</option><option>Residential</option><option>Recreation</option><option>Workshop</option><option>Lab</option>
                </select>
                <input id="facCap"      class="admin-input" type="number" placeholder="Capacity">
                <select id="facStatus"  class="admin-input">
                    <option>Operational</option><option>Under Maintenance</option><option>Closed</option>
                </select>
            </div>
            <button class="admin-btn-primary" style="margin-top:10px;" onclick="infraAddFacility()"><i class="fas fa-plus"></i> Add</button>
        </div>
        <div class="admin-card">
            <div class="admin-card-title">All Facilities (${data.facilities.length})</div>
            ${data.facilities.map((f,i) => `
                <div style="display:flex;justify-content:space-between;align-items:center;padding:0.6rem 0;border-bottom:1px solid var(--border);font-size:0.84rem;flex-wrap:wrap;gap:6px;">
                    <div>
                        <strong>${f.name}</strong>
                        <span class="admin-role-pill" style="margin-left:6px;">${f.type}</span>
                        <div style="font-size:0.72rem;color:var(--text-secondary);">Capacity: ${f.capacity}</div>
                    </div>
                    <div style="display:flex;align-items:center;gap:8px;">
                        <span style="font-size:0.72rem;color:${f.status==='Operational'?'var(--success)':f.status==='Under Maintenance'?'var(--warning)':'var(--danger)'};">● ${f.status}</span>
                        <button class="admin-action-btn danger" onclick="infraDeleteFacility(${i})">🗑</button>
                    </div>
                </div>`).join('')}
        </div>`;
}

window.infraAddFacility = function() {
    const name   = document.getElementById('facName').value.trim();
    const type   = document.getElementById('facType').value;
    const cap    = parseInt(document.getElementById('facCap').value) || 0;
    const status = document.getElementById('facStatus').value;
    if (!name) return alert('Enter facility name.');
    const data   = getData();
    if (!data.facilities) data.facilities = [];
    data.facilities.push({name, type, capacity: cap, status});
    saveData(data); adminLog(`Added facility: ${name}`);
    document.getElementById('infraMain').innerHTML = infraFacilitiesHTML();
};

window.infraDeleteFacility = function(idx) {
    if (!confirm('Delete this facility?')) return;
    const data = getData();
    data.facilities.splice(idx, 1); saveData(data);
    document.getElementById('infraMain').innerHTML = infraFacilitiesHTML();
};

/* 2 — Complaints */
function infraComplaintsHTML() {
    const data = getData();
    if (!data.infraComplaints) data.infraComplaints = [];
    return `
        <div class="admin-section-head">🔧 Maintenance Complaints</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">➕ Log Complaint</div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:10px;margin-top:10px;">
                <input id="compFac"  class="admin-input" placeholder="Facility name">
                <select id="compPri" class="admin-input">
                    <option value="High">High Priority</option>
                    <option value="Medium">Medium Priority</option>
                    <option value="Low">Low Priority</option>
                </select>
            </div>
            <textarea id="compDesc" class="admin-input" rows="2" placeholder="Describe the issue..." style="margin-top:8px;width:100%;resize:vertical;"></textarea>
            <button class="admin-btn-primary" style="margin-top:8px;" onclick="infraAddComplaint()"><i class="fas fa-plus"></i> Log Complaint</button>
        </div>
        <div class="admin-card">
            <div class="admin-card-title">All Complaints (${data.infraComplaints.length})</div>
            ${data.infraComplaints.length === 0
                ? '<p style="color:var(--text-secondary);font-size:0.85rem;margin-top:8px;">No complaints logged.</p>'
                : data.infraComplaints.map((c,i) => `
                    <div style="padding:0.7rem 0;border-bottom:1px solid var(--border);">
                        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px;">
                            <div>
                                <strong style="font-size:0.85rem;">${c.facility}</strong>
                                <span style="margin-left:8px;font-size:0.65rem;font-weight:700;padding:2px 8px;border-radius:20px;background:${c.priority==='High'?'rgba(239,68,68,.15)':c.priority==='Medium'?'rgba(245,158,11,.15)':'rgba(16,185,129,.15)'};color:${c.priority==='High'?'var(--danger)':c.priority==='Medium'?'var(--warning)':'var(--success)'};">${c.priority}</span>
                            </div>
                            <div style="display:flex;gap:6px;align-items:center;">
                                <span style="font-size:0.68rem;color:${c.resolved?'var(--success)':'var(--warning)'};">● ${c.resolved?'Resolved':'Pending'}</span>
                                ${!c.resolved ? `<button class="admin-action-btn edit" onclick="infraResolveComplaint(${i})">✅ Resolve</button>` : ''}
                                <button class="admin-action-btn danger" onclick="infraDeleteComplaint(${i})">🗑</button>
                            </div>
                        </div>
                        <div style="font-size:0.78rem;color:var(--text-secondary);margin-top:4px;">${c.description}</div>
                        <div style="font-size:0.65rem;color:var(--text-secondary);margin-top:2px;">${new Date(c.date).toLocaleDateString()}</div>
                    </div>`).join('')}
        </div>`;
}

window.infraAddComplaint = function() {
    const fac  = document.getElementById('compFac').value.trim();
    const pri  = document.getElementById('compPri').value;
    const desc = document.getElementById('compDesc').value.trim();
    if (!fac || !desc) return alert('Fill facility and description.');
    const data = getData();
    if (!data.infraComplaints) data.infraComplaints = [];
    data.infraComplaints.push({facility:fac, priority:pri, description:desc, date:new Date().toISOString(), resolved:false});
    saveData(data); adminLog(`Logged complaint: ${fac} — ${pri}`);
    document.getElementById('infraMain').innerHTML = infraComplaintsHTML();
};

window.infraResolveComplaint = function(idx) {
    const data = getData();
    data.infraComplaints[idx].resolved = true;
    saveData(data); adminLog(`Resolved complaint at ${data.infraComplaints[idx].facility}`);
    document.getElementById('infraMain').innerHTML = infraComplaintsHTML();
};

window.infraDeleteComplaint = function(idx) {
    const data = getData();
    data.infraComplaints.splice(idx,1); saveData(data);
    document.getElementById('infraMain').innerHTML = infraComplaintsHTML();
};

/* 3 — Projects */
function infraProjectsHTML() {
    const data = getData();
    if (!data.infraProjects) data.infraProjects = [];
    return `
        <div class="admin-section-head">🏗️ Infrastructure Projects</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">➕ Add Project</div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:10px;margin-top:10px;">
                <input id="projName"  class="admin-input" placeholder="Project name">
                <input id="projStart" class="admin-input" type="date">
                <input id="projEnd"   class="admin-input" type="date" placeholder="Expected end">
                <select id="projStatus" class="admin-input">
                    <option>Planning</option><option>In Progress</option><option>Completed</option><option>On Hold</option>
                </select>
            </div>
            <textarea id="projDesc" class="admin-input" rows="2" placeholder="Project description..." style="margin-top:8px;width:100%;resize:vertical;"></textarea>
            <button class="admin-btn-primary" style="margin-top:8px;" onclick="infraAddProject()"><i class="fas fa-plus"></i> Add Project</button>
        </div>
        <div class="admin-card">
            <div class="admin-card-title">All Projects (${data.infraProjects.length})</div>
            ${data.infraProjects.length === 0
                ? '<p style="color:var(--text-secondary);font-size:0.85rem;margin-top:8px;">No projects yet.</p>'
                : data.infraProjects.map((p,i) => `
                    <div style="padding:0.7rem 0;border-bottom:1px solid var(--border);">
                        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px;">
                            <div>
                                <strong style="font-size:0.85rem;">${p.name}</strong>
                                <span class="admin-role-pill" style="margin-left:6px;">${p.status}</span>
                                <div style="font-size:0.72rem;color:var(--text-secondary);">${p.startDate} → ${p.endDate || 'TBD'}</div>
                            </div>
                            <button class="admin-action-btn danger" onclick="infraDeleteProject(${i})">🗑</button>
                        </div>
                        <div style="font-size:0.78rem;color:var(--text-secondary);margin-top:4px;">${p.description}</div>
                    </div>`).join('')}
        </div>`;
}

window.infraAddProject = function() {
    const name   = document.getElementById('projName').value.trim();
    const start  = document.getElementById('projStart').value;
    const end    = document.getElementById('projEnd').value;
    const status = document.getElementById('projStatus').value;
    const desc   = document.getElementById('projDesc').value.trim();
    if (!name || !start) return alert('Name and start date required.');
    const data   = getData();
    if (!data.infraProjects) data.infraProjects = [];
    data.infraProjects.push({name, startDate:start, endDate:end||null, status, description:desc});
    saveData(data); adminLog(`Added project: ${name}`);
    document.getElementById('infraMain').innerHTML = infraProjectsHTML();
};

window.infraDeleteProject = function(idx) {
    const data = getData();
    data.infraProjects.splice(idx,1); saveData(data);
    document.getElementById('infraMain').innerHTML = infraProjectsHTML();
};

/* 4 — Facility Booking */
function infraBookingHTML() {
    const data = getData();
    if (!data.facilityBookings) data.facilityBookings = [];
    const facilities = data.facilities ? data.facilities.map(f=>f.name) : ['Library','Sports Field','Hostel','Field'];
    return `
        <div class="admin-section-head">📅 Facility Booking</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">➕ New Booking</div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:10px;margin-top:10px;">
                <select id="bookFac" class="admin-input">${facilities.map(f=>`<option>${f}</option>`).join('')}</select>
                <input id="bookEvent" class="admin-input" placeholder="Event / Purpose">
                <input id="bookDate"  class="admin-input" type="date">
                <input id="bookTime"  class="admin-input" type="time">
            </div>
            <button class="admin-btn-primary" style="margin-top:10px;" onclick="infraAddBooking()"><i class="fas fa-plus"></i> Book</button>
        </div>
        <div class="admin-card">
            <div class="admin-card-title">Upcoming Bookings (${data.facilityBookings.length})</div>
            ${data.facilityBookings.length === 0
                ? '<p style="color:var(--text-secondary);font-size:0.85rem;margin-top:8px;">No bookings yet.</p>'
                : data.facilityBookings.sort((a,b)=>new Date(a.date)-new Date(b.date)).map((b,i) => `
                    <div style="display:flex;justify-content:space-between;align-items:center;padding:0.6rem 0;border-bottom:1px solid var(--border);font-size:0.84rem;flex-wrap:wrap;gap:6px;">
                        <div>
                            <strong>${b.facility}</strong> — ${b.event}
                            <div style="font-size:0.72rem;color:var(--text-secondary);">${b.date} at ${b.time || 'TBD'}</div>
                        </div>
                        <button class="admin-action-btn danger" onclick="infraDeleteBooking(${i})">🗑</button>
                    </div>`).join('')}
        </div>`;
}

window.infraAddBooking = function() {
    const fac   = document.getElementById('bookFac').value;
    const event = document.getElementById('bookEvent').value.trim();
    const date  = document.getElementById('bookDate').value;
    const time  = document.getElementById('bookTime').value;
    if (!event || !date) return alert('Event and date required.');
    const data  = getData();
    if (!data.facilityBookings) data.facilityBookings = [];
    data.facilityBookings.push({facility:fac, event, date, time});
    saveData(data); adminLog(`Booked ${fac} for ${event} on ${date}`);
    document.getElementById('infraMain').innerHTML = infraBookingHTML();
};

window.infraDeleteBooking = function(idx) {
    const data = getData();
    data.facilityBookings.splice(idx,1); saveData(data);
    document.getElementById('infraMain').innerHTML = infraBookingHTML();
};

/* 5 — Asset Register */
function infraAssetsHTML() {
    const data = getData();
    if (!data.assets) data.assets = [];
    const facilities = data.facilities ? data.facilities.map(f=>f.name) : ['Library','Sports Field','Hostel','Field'];
    return `
        <div class="admin-section-head">📦 Asset Register</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">➕ Add Asset</div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:10px;margin-top:10px;">
                <input id="assetName" class="admin-input" placeholder="Asset name (e.g. Projector)">
                <input id="assetQty"  class="admin-input" type="number" placeholder="Quantity" min="1">
                <select id="assetLoc" class="admin-input">${facilities.map(f=>`<option>${f}</option>`).join('')}</select>
                <select id="assetCon" class="admin-input">
                    <option>Good</option><option>Fair</option><option>Poor</option><option>Needs Repair</option>
                </select>
            </div>
            <button class="admin-btn-primary" style="margin-top:10px;" onclick="infraAddAsset()"><i class="fas fa-plus"></i> Add Asset</button>
        </div>
        <div class="admin-card">
            <div class="admin-card-title">All Assets (${data.assets.length})</div>
            ${data.assets.length === 0
                ? '<p style="color:var(--text-secondary);font-size:0.85rem;margin-top:8px;">No assets registered.</p>'
                : data.assets.map((a,i) => `
                    <div style="display:flex;justify-content:space-between;align-items:center;padding:0.6rem 0;border-bottom:1px solid var(--border);font-size:0.84rem;flex-wrap:wrap;gap:6px;">
                        <div>
                            <strong>${a.name}</strong> × ${a.qty}
                            <div style="font-size:0.72rem;color:var(--text-secondary);">${a.location}</div>
                        </div>
                        <div style="display:flex;gap:8px;align-items:center;">
                            <span style="font-size:0.68rem;font-weight:700;color:${a.condition==='Good'?'var(--success)':a.condition==='Fair'?'var(--warning)':'var(--danger)'};">● ${a.condition}</span>
                            <button class="admin-action-btn danger" onclick="infraDeleteAsset(${i})">🗑</button>
                        </div>
                    </div>`).join('')}
        </div>`;
}

window.infraAddAsset = function() {
    const name = document.getElementById('assetName').value.trim();
    const qty  = parseInt(document.getElementById('assetQty').value) || 1;
    const loc  = document.getElementById('assetLoc').value;
    const con  = document.getElementById('assetCon').value;
    if (!name) return alert('Enter asset name.');
    const data = getData();
    if (!data.assets) data.assets = [];
    data.assets.push({name, qty, location:loc, condition:con});
    saveData(data); adminLog(`Added asset: ${name} × ${qty} at ${loc}`);
    document.getElementById('infraMain').innerHTML = infraAssetsHTML();
};

window.infraDeleteAsset = function(idx) {
    const data = getData();
    data.assets.splice(idx,1); saveData(data);
    document.getElementById('infraMain').innerHTML = infraAssetsHTML();
};

/* 6 — Maintenance Schedule */
function infraScheduleHTML() {
    const data = getData();
    if (!data.maintSchedule) data.maintSchedule = [];
    const facilities = data.facilities ? data.facilities.map(f=>f.name) : ['Library','Sports Field','Hostel','Field'];
    return `
        <div class="admin-section-head">🔧 Maintenance Schedule</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">➕ Schedule Maintenance</div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:10px;margin-top:10px;">
                <select id="schFac"  class="admin-input">${facilities.map(f=>`<option>${f}</option>`).join('')}</select>
                <input id="schTask"  class="admin-input" placeholder="Task (e.g. Plumbing check)">
                <input id="schDate"  class="admin-input" type="date">
                <select id="schFreq" class="admin-input">
                    <option>Once</option><option>Weekly</option><option>Monthly</option><option>Termly</option><option>Annually</option>
                </select>
            </div>
            <button class="admin-btn-primary" style="margin-top:10px;" onclick="infraAddSchedule()"><i class="fas fa-plus"></i> Schedule</button>
        </div>
        <div class="admin-card">
            <div class="admin-card-title">Scheduled Tasks (${data.maintSchedule.length})</div>
            ${data.maintSchedule.length === 0
                ? '<p style="color:var(--text-secondary);font-size:0.85rem;margin-top:8px;">No scheduled maintenance.</p>'
                : data.maintSchedule.sort((a,b)=>new Date(a.date)-new Date(b.date)).map((s,i) => `
                    <div style="display:flex;justify-content:space-between;align-items:center;padding:0.6rem 0;border-bottom:1px solid var(--border);font-size:0.84rem;flex-wrap:wrap;gap:6px;">
                        <div>
                            <strong>${s.task}</strong> — ${s.facility}
                            <div style="font-size:0.72rem;color:var(--text-secondary);">${s.date} · ${s.frequency}</div>
                        </div>
                        <button class="admin-action-btn danger" onclick="infraDeleteSchedule(${i})">🗑</button>
                    </div>`).join('')}
        </div>`;
}

window.infraAddSchedule = function() {
    const fac  = document.getElementById('schFac').value;
    const task = document.getElementById('schTask').value.trim();
    const date = document.getElementById('schDate').value;
    const freq = document.getElementById('schFreq').value;
    if (!task || !date) return alert('Task and date required.');
    const data = getData();
    if (!data.maintSchedule) data.maintSchedule = [];
    data.maintSchedule.push({facility:fac, task, date, frequency:freq});
    saveData(data); adminLog(`Scheduled maintenance: ${task} at ${fac}`);
    document.getElementById('infraMain').innerHTML = infraScheduleHTML();
};

window.infraDeleteSchedule = function(idx) {
    const data = getData();
    data.maintSchedule.splice(idx,1); saveData(data);
    document.getElementById('infraMain').innerHTML = infraScheduleHTML();
};

/* 7 — Infrastructure Notices */
function infraNoticesHTML() {
    const data = getData();
    const infraNotes = (data.noticeboard||[]).filter(n => n.recipient === 'infra' || n.recipient === 'all');
    return `
        <div class="admin-section-head">📢 Infrastructure Notices</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">➕ Post Notice</div>
            <textarea id="infraNoticeMsg" class="admin-input" rows="3" placeholder="Notice for maintenance/grounds staff..." style="margin-top:10px;width:100%;resize:vertical;"></textarea>
            <button class="admin-btn-primary" style="margin-top:8px;" onclick="infraPostNotice()"><i class="fas fa-bullhorn"></i> Broadcast</button>
        </div>
        <div class="admin-card">
            <div class="admin-card-title">Recent Notices (${infraNotes.length})</div>
            ${infraNotes.length === 0
                ? '<p style="color:var(--text-secondary);font-size:0.85rem;margin-top:8px;">No notices yet.</p>'
                : infraNotes.slice(-10).reverse().map(n => `
                    <div style="padding:0.6rem 0;border-bottom:1px solid var(--border);">
                        <div style="font-size:0.78rem;color:var(--purple-light);font-weight:700;">${n.sender}</div>
                        <div style="font-size:0.82rem;">${n.message}</div>
                        <div style="font-size:0.68rem;color:var(--text-secondary);">${new Date(n.timestamp).toLocaleString()}</div>
                    </div>`).join('')}
        </div>`;
}

window.infraPostNotice = function() {
    const msg = document.getElementById('infraNoticeMsg').value.trim();
    if (!msg) return alert('Enter a message.');
    const data = getData();
    data.noticeboard.push({id:'n'+Date.now(), sender:'Deputy (Infrastructure)', message:msg, timestamp:new Date().toISOString(), recipient:'infra'});
    saveData(data); adminLog(`Deputy Infra posted notice: ${msg.substring(0,40)}`);
    alert('✅ Notice broadcast!');
    document.getElementById('infraMain').innerHTML = infraNoticesHTML();
};
 
/* ── Section switcher ── */
window.adminSection = function(section, btn) {
    document.querySelectorAll('.admin-nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const main = document.getElementById('adminMain');
    const map = {
        users:       adminUsersHTML,
        principals:  adminPrincipalsHTML,
        departments: adminDepartmentsHTML,
        courses:     adminCoursesHTML,
        announce:    adminAnnounceHTML,
        idcards:     adminIDCardsHTML,
        logs:        adminLogsHTML,
        backup:      adminBackupHTML,
        export:      adminExportHTML,
    };
    main.innerHTML = (map[section] || adminUsersHTML)();
};

/* ══════════════════════════════════════════
   EXAMINATION OFFICE PORTAL
══════════════════════════════════════════ */
function renderExamOfficePanel(user) {
    return `
    <div class="admin-layout">
        <div class="admin-sidenav">
            <div class="admin-sidenav-title">
                <i class="fas fa-building"></i> Exam Office Menu
            </div>
            
            <button class="admin-nav-btn active" onclick="examOfficeSection('pending',this)">
                <i class="fas fa-clock"></i> Pending Final Approval
            </button>
            <button class="admin-nav-btn" onclick="examOfficeSection('registered',this)">
                <i class="fas fa-check-circle"></i> Registered Students
            </button>
            <button class="admin-nav-btn" onclick="examOfficeSection('register',this)">
                <i class="fas fa-list"></i> Exam Register
            </button>
            <button class="admin-nav-btn" onclick="examOfficeSection('report',this)">
                <i class="fas fa-chart-bar"></i> Reports & Statistics
            </button>
        </div>
        
        <div class="admin-main" id="examOfficeMain">
            ${examOfficePendingHTML()}
        </div>
    </div>`;
}

window.examOfficeSection = function(section, btn) {
    document.querySelectorAll('.admin-nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const map = {
        pending:    () => examOfficePendingHTML(),
        registered: () => examOfficeRegisteredHTML(),
        register:   () => examOfficeRegisterHTML(),
        report:     () => examOfficeReportHTML()
    };
    
    document.getElementById('examOfficeMain').innerHTML = map[section]();
};

// Pending Final Approval
function examOfficePendingHTML() {
    const data = getData();
    const pending = data.examRegistrations.filter(r => r.status === 'pending_exam');

    if (pending.length === 0) {
        return `
            <div class="admin-section-head">📋 Pending Final Approval (0)</div>
            <div class="admin-card">
                <p style="color:var(--text-secondary);">All cleared registrations have been processed.</p>
            </div>`;
    }

    const cards = pending.map(reg => {
        const student = data.students.find(s => s.id === reg.studentId) || {};
        return `
        <div class="admin-card" style="margin-bottom:15px;">
            <div style="font-weight:700;">${student.name || '—'}</div>
            <div style="color:var(--text-secondary);font-size:0.8rem;">
                ${reg.studentId} • ${student.department || ''} • ${student.class || ''}
            </div>
            
            <div style="margin:12px 0;background:var(--bg-elevated);padding:12px;border-radius:10px;">
                <strong>Units:</strong> ${reg.units.length}<br>
                <strong>Exam Fee:</strong> KSh ${(reg.totalExamFee || 0).toLocaleString()}<br>
                <strong>Status:</strong> <span style="color:var(--purple-light)">Awaiting Final Booking</span>
            </div>

            <div style="display:flex;gap:10px;">
                <button class="admin-btn-primary" onclick="examOfficeRegisterStudent('${reg.id}')">
                    ✅ Register for Exams
                </button>
                <button class="admin-action-btn danger" onclick="examOfficeReject('${reg.id}')">
                    ❌ Reject
                </button>
            </div>
        </div>`;
    }).join('');

    return `
        <div class="admin-section-head">📋 Pending Final Approval (${pending.length})</div>
        ${cards}`;
};

window.examOfficeRegisterStudent = function(regId) {
    const data = getData();
    const reg = data.examRegistrations.find(r => r.id === regId);
    if (!reg) return;

    reg.status = 'approved';
    reg.examApproved = true;
    reg.examApprovedDate = new Date().toISOString();
    saveData(data);

    alert(`✅ Student registered for exams!\nReg ID: ${regId}`);
    document.getElementById('examOfficeMain').innerHTML = examOfficePendingHTML();
};

window.examOfficeReject = function(regId) {
    const reason = prompt("Reason for rejection:");
    if (!reason) return;
    const data = getData();
    const reg = data.examRegistrations.find(r => r.id === regId);
    if (reg) {
        reg.status = 'rejected';
        reg.rejectedBy = 'Exam Office';
        reg.rejectionReason = reason;
        saveData(data);
        alert(`❌ Registration rejected.`);
        document.getElementById('examOfficeMain').innerHTML = examOfficePendingHTML();
    }
};

function examOfficeRegisteredHTML() {
    return `<div class="admin-card"><p>Successfully registered students will appear here.</p></div>`;
}

function examOfficeRegisterHTML() {
    return `<div class="admin-card"><p>Full Exam Register (list of all approved students) coming soon.</p></div>`;
}

function examOfficeReportHTML() {
    return `<div class="admin-card"><p>Exam Office Reports & Statistics coming soon.</p></div>`;
}

/* ══════════════════════════════════════════
   DEAN OF STUDENTS PORTAL
══════════════════════════════════════════ */
function renderDeanPanel(user) {
    return `
    <div class="admin-layout">
        <div class="admin-sidenav">
            <div class="admin-sidenav-title">
                <i class="fas fa-heart"></i> Dean Menu
            </div>
            
            <button class="admin-nav-btn active" onclick="deanSection('hostel',this)">
                <i class="fas fa-bed"></i> Hostel Clearance
            </button>
            <button class="admin-nav-btn" onclick="deanSection('complaints',this)">
                <i class="fas fa-exclamation-triangle"></i> Student Complaints
            </button>
            <button class="admin-nav-btn" onclick="deanSection('activities',this)">
                <i class="fas fa-calendar"></i> Activity Approvals
            </button>
            <button class="admin-nav-btn" onclick="deanSection('kitco',this)">
                <i class="fas fa-users"></i> KITCO Management
            </button>
            <button class="admin-nav-btn" onclick="deanSection('report',this)">
                <i class="fas fa-chart-bar"></i> Student Welfare Report
            </button>
        </div>
        
        <div class="admin-main" id="deanMain">
            ${deanHostelHTML()}
        </div>
    </div>`;
}

window.deanSection = function(section, btn) {
    document.querySelectorAll('.admin-nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const map = {
        hostel:     () => deanHostelHTML(),
        complaints: () => deanComplaintsHTML(),
        activities: () => deanActivitiesHTML(),
        kitco:      () => deanKITCOHTML(),
        report:     () => deanReportHTML()
    };
    
    document.getElementById('deanMain').innerHTML = map[section]();
};

// Hostel Clearance (Core Feature)
function deanHostelHTML() {
    return `
        <div class="admin-section-head">🏠 Hostel Clearance</div>
        <div class="admin-card">
            <p>Hostel clearance requests and boarding student management coming soon.</p>
            <button class="admin-btn-primary" style="margin-top:12px;" onclick="alert('Hostel clearance form will open here')">
                Generate Clearance Form
            </button>
        </div>`;
}

function deanComplaintsHTML() {
    return `<div class="admin-card"><p>Student complaints and discipline cases will appear here.</p></div>`;
}

function deanActivitiesHTML() {
    return `<div class="admin-card"><p>Pending activity approvals will appear here.</p></div>`;
}

function deanKITCOHTML() {
    return `
        <div class="admin-section-head">🎖️ KITCO Management</div>
        <div class="admin-card">
            <p>Generate KITCO passwords and manage student leadership body.</p>
            <button class="admin-btn-primary" onclick="alert('KITCO password generation coming soon')">
                Generate KITCO Passwords
            </button>
        </div>`;
}

function deanReportHTML() {
    return `<div class="admin-card"><p>Student welfare and discipline report coming soon.</p></div>`;
}

 /* ══════════════════════════════════════════
   CLASS TEACHER PORTAL — Full Sidebar
══════════════════════════════════════════ */
function renderClassTeacherPanel(user) {
    return `
    <div class="admin-layout">
        <div class="admin-sidenav">
            <div class="admin-sidenav-title">
                <i class="fas fa-chalkboard"></i> Class Teacher Menu
            </div>
            
            <button class="admin-nav-btn active" onclick="classTeacherSection('passwords',this)">
                <i class="fas fa-key"></i> Generate Passwords
            </button>
            <button class="admin-nav-btn" onclick="classTeacherSection('attendance',this)">
                <i class="fas fa-calendar-check"></i> Class Attendance
            </button>
            <button class="admin-nav-btn" onclick="classTeacherSection('notices',this)">
                <i class="fas fa-bullhorn"></i> Post Notice
            </button>
            <button class="admin-nav-btn" onclick="classTeacherSection('students',this)">
                <i class="fas fa-users"></i> My Students
            </button>
            <button class="admin-nav-btn" onclick="classTeacherSection('report',this)">
                <i class="fas fa-chart-bar"></i> Class Report
            </button>
        </div>
        
        <div class="admin-main" id="classTeacherMain">
            ${classTeacherPasswordsHTML(user)}
        </div>
    </div>`;
}

window.classTeacherSection = function(section, btn) {
    document.querySelectorAll('.admin-nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const map = {
        passwords:  () => classTeacherPasswordsHTML(),
        attendance: () => classTeacherAttendanceHTML(),
        notices:    () => classTeacherNoticesHTML(),
        students:   () => classTeacherStudentsHTML(),
        report:     () => classTeacherReportHTML()
    };
    
    document.getElementById('classTeacherMain').innerHTML = map[section]();
};

function classTeacherPasswordsHTML() {
    return `
        <div class="admin-section-head">🔑 Password Management</div>
        <div class="admin-card">
            <h4>Generate Student Passcode</h4>
            <input type="text" id="stuName" class="admin-input" placeholder="Student Name" style="margin-bottom:10px;width:100%;">
            <button class="admin-btn-primary" onclick="generateStudentPasscode()">Generate Passcode</button>
            
            <div style="margin-top:20px;">
                <h4>Generate Class Rep Password</h4>
                <button class="admin-btn-primary" onclick="generateClassRepPassword()">Generate Class Rep Password</button>
            </div>
        </div>`;
}

// Add the rest of the helper functions (from my previous message)
function classTeacherAttendanceHTML() { return `<div class="admin-card"><p>Class attendance tracking coming soon.</p></div>`; }
function classTeacherNoticesHTML() { 
    return `
        <div class="admin-card">
            <h4>Post Class Notice</h4>
            <textarea id="ctNotice" class="admin-input" rows="4" placeholder="Write notice to your class..."></textarea>
            <button class="admin-btn-primary" onclick="broadcastClassNotice()">Send Notice</button>
        </div>`;
}
function classTeacherStudentsHTML() { return `<div class="admin-card"><p>List of students in your class coming soon.</p></div>`; }
function classTeacherReportHTML() { return `<div class="admin-card"><p>Class performance report coming soon.</p></div>`; }

window.generateStudentPasscode = function() {
    const name = document.getElementById('stuName')?.value.trim() || "Student";
    const passcode = Math.floor(1000 + Math.random() * 9000);
    alert(`✅ Passcode Generated!\n\nStudent: ${name}\nPasscode: ${passcode}`);
};

window.generateClassRepPassword = function() {
    const passcode = 'REP-' + Math.floor(1000 + Math.random() * 9000);
    alert(`✅ Class Rep Password Generated!\nPasscode: ${passcode}`);
};

window.broadcastClassNotice = function() {
    const msg = document.getElementById('ctNotice')?.value.trim();
    if (!msg) return alert("Please write a notice.");
    alert(`✅ Notice sent to class!\n\n"${msg}"`);
    document.getElementById('ctNotice').value = '';
};


/* ══════════════════════════════════════════
   LECTURER PORTAL — With Sidebar
══════════════════════════════════════════ */
function renderLecturerPanel(user) {
    return `
    <div class="admin-layout">
        <div class="admin-sidenav">
            <div class="admin-sidenav-title">
                <i class="fas fa-chalkboard-user"></i> Lecturer Menu
            </div>
            
            <button class="admin-nav-btn active" onclick="lecturerSection('units',this)">
                <i class="fas fa-book"></i> My Units
            </button>
            <button class="admin-nav-btn" onclick="lecturerSection('attendance',this)">
                <i class="fas fa-calendar-check"></i> Mark Attendance
            </button>
            <button class="admin-nav-btn" onclick="lecturerSection('materials',this)">
                <i class="fas fa-upload"></i> Upload Materials
            </button>
            <button class="admin-nav-btn" onclick="lecturerSection('students',this)">
                <i class="fas fa-users"></i> My Students
            </button>
            <button class="admin-nav-btn" onclick="lecturerSection('report',this)">
                <i class="fas fa-chart-bar"></i> Unit Report
            </button>
        </div>
        
        <div class="admin-main" id="lecturerMain">
            ${lecturerUnitsHTML(user)}
        </div>
    </div>`;
}

window.lecturerSection = function(section, btn) {
    document.querySelectorAll('.admin-nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const map = {
        units:      () => lecturerUnitsHTML(),
        attendance: () => lecturerAttendanceHTML(),
        materials:  () => lecturerMaterialsHTML(),
        students:   () => lecturerStudentsHTML(),
        report:     () => lecturerReportHTML()
    };
    
    document.getElementById('lecturerMain').innerHTML = map[section]();
};

// My Units
function lecturerUnitsHTML() {
    return `
        <div class="admin-section-head">📚 My Assigned Units</div>
        <div class="admin-card">
            <p><strong>Computer Essentials (CS101)</strong><br>
               <small>Level 5 • 120 Students</small></p>
            <button class="admin-btn-primary" style="margin-top:12px;" onclick="alert('Unit details & student list opened')">
                View Students & Resources
            </button>
        </div>`;
}

function lecturerAttendanceHTML() {
    return `
        <div class="admin-card">
            <h4>Mark Today's Attendance</h4>
            <p>Select unit and mark present/absent.</p>
            <button class="admin-btn-primary" onclick="alert('Attendance sheet opened (demo)')">Open Attendance Sheet</button>
        </div>`;
}

function lecturerMaterialsHTML() {
    return `
        <div class="admin-card">
            <h4>Upload Learning Materials</h4>
            <input type="text" class="admin-input" placeholder="Material Title" style="margin-bottom:10px;">
            <button class="admin-btn-primary" onclick="alert('Material uploaded successfully! (Demo)')">Upload Now</button>
        </div>`;
}

function lecturerStudentsHTML() {
    return `<div class="admin-card"><p>List of students taking your units coming soon.</p></div>`;
}

function lecturerReportHTML() {
    return `<div class="admin-card"><p>Unit performance report coming soon.</p></div>`;
}

/* ══════════════════════════════════════════
   CLASS REP PORTAL — With Sidebar
══════════════════════════════════════════ */
function renderClassRepPanel(user) {
    return `
    <div class="admin-layout">
        <div class="admin-sidenav">
            <div class="admin-sidenav-title">
                <i class="fas fa-users"></i> Class Rep Menu
            </div>
            
            <button class="admin-nav-btn active" onclick="classRepSection('noticeboard',this)">
                <i class="fas fa-bell"></i> Class Noticeboard
            </button>
            <button class="admin-nav-btn" onclick="classRepSection('issues',this)">
                <i class="fas fa-exclamation-triangle"></i> Report Issues
            </button>
            <button class="admin-nav-btn" onclick="classRepSection('students',this)">
                <i class="fas fa-user-graduate"></i> My Class List
            </button>
            <button class="admin-nav-btn" onclick="classRepSection('reminders',this)">
                <i class="fas fa-clock"></i> Reminders
            </button>
            <button class="admin-nav-btn" onclick="classRepSection('report',this)">
                <i class="fas fa-chart-bar"></i> Class Report
            </button>
        </div>
        
        <div class="admin-main" id="classRepMain">
            ${classRepNoticeboardHTML()}
        </div>
    </div>`;
}

window.classRepSection = function(section, btn) {
    document.querySelectorAll('.admin-nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const map = {
        noticeboard: () => classRepNoticeboardHTML(),
        issues:      () => classRepIssuesHTML(),
        students:    () => classRepStudentsHTML(),
        reminders:   () => classRepRemindersHTML(),
        report:      () => classRepReportHTML()
    };
    
    document.getElementById('classRepMain').innerHTML = map[section]();
};

function classRepNoticeboardHTML() {
    return `
        <div class="admin-section-head">📢 Class Noticeboard</div>
        <div class="admin-card">
            <p><strong>From Class Teacher:</strong> Exam registration deadline is 20th June 2026.</p>
            <p style="margin-top:12px;color:var(--text-secondary);font-size:0.85rem;">
                Forward important notices to your classmates.
            </p>
        </div>`;
}

function classRepIssuesHTML() {
    return `
        <div class="admin-card">
            <h4>Report Class Issue / Complaint</h4>
            <textarea id="repIssue" class="admin-input" rows="4" placeholder="Describe the issue..."></textarea>
            <button class="admin-btn-primary" onclick="submitClassRepIssue()">Submit to Class Teacher</button>
        </div>`;
}

function classRepStudentsHTML() {
    return `<div class="admin-card"><p>Full list of students in your class coming soon.</p></div>`;
}

function classRepRemindersHTML() {
    return `
        <div class="admin-card">
            <h4>Quick Reminders</h4>
            <ul style="padding-left:20px;">
                <li>Fee payment deadline approaching</li>
                <li>Exam registration is open</li>
                <li>Submit any complaints to Class Teacher</li>
            </ul>
        </div>`;
}

function classRepReportHTML() {
    return `<div class="admin-card"><p>Class attendance & performance summary coming soon.</p></div>`;
}

window.submitClassRepIssue = function() {
    const issue = document.getElementById('repIssue')?.value.trim();
    if (!issue) return alert("Please describe the issue.");
    alert(`✅ Issue submitted to Class Teacher!\n\n"${issue}"`);
    document.getElementById('repIssue').value = '';
};

/* ══════════════════════════════════════════
   KITCO PORTAL — Student Leadership
══════════════════════════════════════════ */
function renderKITCOPanel(user) {
    return `
    <div class="admin-layout">
        <div class="admin-sidenav">
            <div class="admin-sidenav-title">
                <i class="fas fa-users"></i> KITCO Menu
            </div>
            
            <button class="admin-nav-btn active" onclick="kitcoSection('dashboard',this)">
                <i class="fas fa-tachometer-alt"></i> Dashboard
            </button>
            <button class="admin-nav-btn" onclick="kitcoSection('events',this)">
                <i class="fas fa-calendar"></i> Upcoming Events
            </button>
            <button class="admin-nav-btn" onclick="kitcoSection('organize',this)">
                <i class="fas fa-plus-circle"></i> Organize Event
            </button>
            <button class="admin-nav-btn" onclick="kitcoSection('notice',this)">
                <i class="fas fa-bullhorn"></i> Post Notice
            </button>
            <button class="admin-nav-btn" onclick="kitcoSection('sports',this)">
                <i class="fas fa-football-ball"></i> Sports & Games
            </button>
            <button class="admin-nav-btn" onclick="kitcoSection('report',this)">
                <i class="fas fa-chart-bar"></i> Activity Report
            </button>
        </div>
        
        <div class="admin-main" id="kitcoMain">
            ${kitcoDashboardHTML()}
        </div>
    </div>`;
}

window.kitcoSection = function(section, btn) {
    document.querySelectorAll('.admin-nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const map = {
        dashboard: () => kitcoDashboardHTML(),
        events:    () => kitcoEventsHTML(),
        organize:  () => kitcoOrganizeHTML(),
        notice:    () => kitcoNoticeHTML(),
        sports:    () => kitcoSportsHTML(),
        report:    () => kitcoReportHTML()
    };
    
    document.getElementById('kitcoMain').innerHTML = map[section]();
};

// Welcome Dashboard with Gen-Z Vibe
function kitcoDashboardHTML() {
    return `
        <div class="admin-section-head" style="font-size:1.4rem;">
            🔥 Welcome to <span style="color:var(--purple-light);font-weight:800;">Gen-Z Club</span> 🎉
        </div>
        <div class="admin-card">
            <h3 style="color:var(--purple-light);">KITCO Leadership Dashboard</h3>
            <p style="font-size:1.1rem;margin:15px 0;">
                Let's make this semester <strong>unforgettable</strong> 🔥
            </p>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-top:20px;">
                <div class="stat-card" style="text-align:center;">
                    <h3>12</h3>
                    <p>Upcoming Events</p>
                </div>
                <div class="stat-card" style="text-align:center;">
                    <h3>8</h3>
                    <p>Active Clubs</p>
                </div>
                <div class="stat-card" style="text-align:center;">
                    <h3>450+</h3>
                    <p>Students Reached</p>
                </div>
            </div>
        </div>`;
}

function kitcoEventsHTML() {
    return `
        <div class="admin-section-head">📅 Upcoming Events</div>
        <div class="admin-card">
            <p><strong>Freshers Night</strong> — 25th June 2026</p>
            <p><strong>Cultural Day</strong> — 10th July 2026</p>
            <p><strong>Music & Drama Fest</strong> — 22nd July 2026</p>
            <button class="admin-btn-primary" style="margin-top:15px;" onclick="alert('Event planning opened!')">Plan New Event</button>
        </div>`;
}

function kitcoOrganizeHTML() {
    return `
        <div class="admin-card">
            <h4>🗓️ Organize New Event</h4>
            <input type="text" class="admin-input" placeholder="Event Name" style="margin-bottom:10px;">
            <input type="date" class="admin-input" style="margin-bottom:10px;">
            <textarea class="admin-input" rows="3" placeholder="Event Description"></textarea>
            <button class="admin-btn-primary" onclick="alert('✅ Event proposal submitted to Dean!')">Submit Proposal</button>
        </div>`;
}

function kitcoNoticeHTML() {
    return `
        <div class="admin-card">
            <h4>📢 Post KITCO Notice</h4>
            <textarea id="kitcoNotice" class="admin-input" rows="4" placeholder="Write announcement..."></textarea>
            <button class="admin-btn-primary" onclick="postKITCONotice()">Broadcast to School</button>
        </div>`;
}

function kitcoSportsHTML() {
    return `
        <div class="admin-card">
            <h4>⚽ Sports & Games</h4>
            <p>Football, Volleyball, Basketball, Athletics, etc.</p>
            <button class="admin-btn-primary" onclick="alert('Sports management coming soon')">Manage Sports Teams</button>
        </div>`;
}

function kitcoReportHTML() {
    return `<div class="admin-card"><p>Activity & Impact Report coming soon.</p></div>`;
}

window.postKITCONotice = function() {
    const msg = document.getElementById('kitcoNotice')?.value.trim();
    if (!msg) return alert("Write something to post!");
    alert(`✅ KITCO Notice Broadcasted!\n\n"${msg}"`);
    document.getElementById('kitcoNotice').value = '';
};
/* ══════════════════════════════════════════
   SPORTS ADMIN PORTAL
══════════════════════════════════════════ */
function renderSportsAdminPanel(user) {
    return `
    <div class="admin-layout">
        <div class="admin-sidenav">
            <div class="admin-sidenav-title">
                <i class="fas fa-football-ball"></i> Sports Admin
            </div>
            
            <button class="admin-nav-btn active" onclick="sportsSection('dashboard',this)">
                <i class="fas fa-tachometer-alt"></i> Dashboard
            </button>
            <button class="admin-nav-btn" onclick="sportsSection('sports',this)">
                <i class="fas fa-list"></i> Manage Sports
            </button>
            <button class="admin-nav-btn" onclick="sportsSection('items',this)">
                <i class="fas fa-box"></i> Items Inventory
            </button>
            <button class="admin-nav-btn" onclick="sportsSection('participants',this)">
                <i class="fas fa-users"></i> All Participants
            </button>
            <button class="admin-nav-btn" onclick="sportsSection('requests',this)">
                <i class="fas fa-inbox"></i> Pending Requests
            </button>
            <button class="admin-nav-btn" onclick="sportsSection('lost',this)">
                <i class="fas fa-exclamation-triangle"></i> Lost Items
            </button>
            <button class="admin-nav-btn" onclick="sportsSection('report',this)">
                <i class="fas fa-chart-bar"></i> Reports & PDF
            </button>
        </div>
        
        <div class="admin-main" id="sportsMain">
            ${sportsDashboardHTML()}
        </div>
    </div>`;
}

window.sportsSection = function(section, btn) {
    document.querySelectorAll('.admin-nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const map = {
        dashboard:    () => sportsDashboardHTML(),
        sports:       () => sportsListHTML(),
        items:        () => sportsItemsHTML(),
        participants: () => sportsParticipantsHTML(),
        requests:     () => sportsRequestsHTML(),
        lost:         () => sportsLostItemsHTML(),
        report:       () => sportsReportHTML()
    };
    document.getElementById('sportsMain').innerHTML = map[section]();
};

// Dashboard
function sportsDashboardHTML() {
    return `
        <div class="admin-section-head">⚽ Sports Department Dashboard</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;">
            <div class="stat-card"><h3>8</h3><p>Active Sports</p></div>
            <div class="stat-card"><h3>245</h3><p>Participants</p></div>
            <div class="stat-card"><h3>67</h3><p>Items Issued</p></div>
            <div class="stat-card"><h3>12</h3><p>Pending Requests</p></div>
        </div>`;
}

// Manage Sports
function sportsListHTML() {
    return `
        <div class="admin-section-head">🏅 Manage Sports</div>
        <div class="admin-card">
            <button class="admin-btn-primary" onclick="alert('Add new sport form')">+ Add New Sport</button>
            <p style="margin-top:15px;">Football, Rugby, Hockey, Netball, Athletics, Table Tennis, Badminton, etc.</p>
        </div>`;
}

// Items Inventory
function sportsItemsHTML() {
    return `
        <div class="admin-section-head">📦 Items & Equipment</div>
        <div class="admin-card">
            <p><strong>Football:</strong> Balls (25), Jerseys, Cones</p>
            <p><strong>Hockey:</strong> Sticks, Balls, Goalkeeper Kit</p>
            <button class="admin-btn-primary" style="margin-top:12px;" onclick="alert('Item issuance record opened')">Record Item Issuance</button>
        </div>`;
}

// All Participants
function sportsParticipantsHTML() {
    return `
        <div class="admin-section-head">👥 All Sport Participants</div>
        <div class="admin-card">
            <p>Full list with Name, Admin No, Department, Sport, Items Issued</p>
            <button class="admin-btn-primary" onclick="alert('PDF generated')">Download Full List PDF</button>
        </div>`;
}

// Pending Requests (from Sport Leaders)
function sportsRequestsHTML() {
    return `
        <div class="admin-section-head">📥 Pending Item Requests</div>
        <div class="admin-card">
            <p>Sport Leaders send requests here</p>
            <button class="admin-btn-primary">Approve Selected</button>
        </div>`;
}

// Lost Items
function sportsLostItemsHTML() {
    return `
        <div class="admin-section-head">🚨 Lost / Damaged Items</div>
        <div class="admin-card">
            <p>Record lost items → Generate PDF for Finance billing</p>
            <button class="admin-btn-primary" onclick="alert('Lost items PDF sent to Finance')">Send to Finance</button>
        </div>`;
}

// Reports
function sportsReportHTML() {
    return `
        <div class="admin-section-head">📊 Sports Reports</div>
        <div class="admin-card">
            <button class="admin-btn-primary">Generate Semester Report</button>
            <button class="admin-btn-primary" style="margin-left:10px;">Trophies & Achievements</button>
        </div>`;
}
// ====================== SPORTS CLUB SUB-LOGIN ======================
function showSportSubLogin() {
    document.getElementById('schoolInfoPanel').style.display = 'none';
    document.getElementById('loginFormContainer').style.display = 'none';
    document.getElementById('dashboardContainer').style.display = 'block';

    document.getElementById('dashboardTitle').innerHTML = `<i class="fas fa-football-ball"></i> Sport Club Access`;

    const html = `
        <div class="form-card" style="max-width:520px;margin:40px auto;">
            <h2 style="text-align:center;color:var(--purple-light);margin-bottom:20px;">Sport Club Portal</h2>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
                <button onclick="selectSportSubRole('sportsadmin')" class="admin-btn-primary" style="height:110px;font-size:1.1rem;">
                    <i class="fas fa-user-tie" style="font-size:2.2rem;display:block;margin-bottom:8px;"></i>
                    Sports Admin
                </button>
                <button onclick="selectSportSubRole('sportleader')" class="admin-btn-primary" style="height:110px;font-size:1.1rem;">
                    <i class="fas fa-user-graduate" style="font-size:2.2rem;display:block;margin-bottom:8px;"></i>
                    Student Sport Leader
                </button>
            </div>
            <button onclick="showHome()" class="btn-danger" style="width:100%;margin-top:20px;">← Back to Home</button>
        </div>`;

    document.getElementById('dashboardContent').innerHTML = html;
}

window.selectSportSubRole = function(subRole) {
    sessionStorage.setItem('sportSubRole', subRole);
    const title = subRole === 'sportsadmin' ? 'Sports Admin Login' : 'Student Sport Leader Login';
    document.getElementById('dashboardTitle').innerHTML = `<i class="fas fa-football-ball"></i> ${title}`;

    document.getElementById('dashboardContent').innerHTML = `
        <div class="form-card" style="max-width:400px;margin:40px auto;">
            <input type="text" id="sportId" class="login-input" placeholder="ID / Username">
            <input type="password" id="sportPass" class="login-input" placeholder="Password">
            <button onclick="handleSportSubLogin()" class="btn-primary" style="width:100%;margin-top:15px;">Login</button>
            <button onclick="showSportSubLogin()" class="btn-danger" style="width:100%;margin-top:10px;">← Back</button>
        </div>`;
};

window.handleSportSubLogin = function() {
    const subRole = sessionStorage.getItem('sportSubRole');
    const pass = document.getElementById('sportPass').value.trim();

    if (subRole === 'sportsadmin' && pass === 'sports123') {
        const user = { role: 'sportsadmin', name: 'Sports Admin', id: 'SP-ADMIN-001' };
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        showDashboard('sportsadmin', user);
    } else if (subRole === 'sportleader' && pass === 'leader123') {
        const user = { role: 'sportleader', name: 'John Mwangi (Football Leader)', id: 'LEADER-001', sport: 'Football' };
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        showDashboard('sportleader', user);
    } else {
        alert('❌ Wrong password!\n\nSports Admin → sports123\nSport Leader → leader123');
    }
};

// ====================== SPORTS ADMIN PORTAL ======================
function renderSportsAdminPanel(user) {
    return `
    <div class="admin-layout">
        <div class="admin-sidenav">
            <div class="admin-sidenav-title">
                <i class="fas fa-football-ball"></i> Sports Admin
            </div>
            <button class="admin-nav-btn active" onclick="sportsSection('dashboard',this)">
                <i class="fas fa-tachometer-alt"></i> Dashboard
            </button>
            <button class="admin-nav-btn" onclick="sportsSection('sports',this)">
                <i class="fas fa-list"></i> Manage Sports
            </button>
            <button class="admin-nav-btn" onclick="sportsSection('items',this)">
                <i class="fas fa-box"></i> Items Inventory
            </button>
            <button class="admin-nav-btn" onclick="sportsSection('participants',this)">
                <i class="fas fa-users"></i> Participants
            </button>
            <button class="admin-nav-btn" onclick="sportsSection('requests',this)">
                <i class="fas fa-inbox"></i> Pending Requests
            </button>
            <button class="admin-nav-btn" onclick="sportsSection('lost',this)">
                <i class="fas fa-exclamation-triangle"></i> Lost Items
            </button>
            <button class="admin-nav-btn" onclick="sportsSection('report',this)">
                <i class="fas fa-chart-bar"></i> Reports
            </button>
        </div>
        <div class="admin-main" id="sportsMain">${sportsDashboardHTML()}</div>
    </div>`;
}

window.sportsSection = function(section, btn) {
    document.querySelectorAll('.admin-nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const map = {
        dashboard: () => sportsDashboardHTML(),
        sports: () => `<div class="admin-card"><p>Manage Sports coming soon...</p></div>`,
        items: () => `<div class="admin-card"><p>Items Inventory coming soon...</p></div>`,
        participants: () => `<div class="admin-card"><p>All Participants list coming soon...</p></div>`,
        requests: () => `<div class="admin-card"><p>Pending Requests coming soon...</p></div>`,
        lost: () => `<div class="admin-card"><p>Lost Items (PDF to Finance) coming soon...</p></div>`,
        report: () => `<div class="admin-card"><p>Reports coming soon...</p></div>`
    };
    document.getElementById('sportsMain').innerHTML = map[section]();
};

function sportsDashboardHTML() {
    return `
        <div class="admin-section-head">⚽ Sports Department Dashboard</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;">
            <div class="stat-card"><h3>8</h3><p>Active Sports</p></div>
            <div class="stat-card"><h3>245</h3><p>Participants</p></div>
            <div class="stat-card"><h3>67</h3><p>Items Issued</p></div>
            <div class="stat-card"><h3>12</h3><p>Pending Requests</p></div>
        </div>`;
}

// ====================== STUDENT SPORT LEADER PORTAL ======================
function renderSportLeaderPanel(user) {
    return `
    <div class="admin-layout">
        <div class="admin-sidenav">
            <div class="admin-sidenav-title">
                <i class="fas fa-user-graduate"></i> Sport Leader - ${user.sport || 'Football'}
            </div>
            <button class="admin-nav-btn active" onclick="sportLeaderSection('participants',this)">
                <i class="fas fa-users"></i> My Participants
            </button>
            <button class="admin-nav-btn" onclick="sportLeaderSection('requests',this)">
                <i class="fas fa-paper-plane"></i> Request Items
            </button>
            <button class="admin-nav-btn" onclick="sportLeaderSection('issued',this)">
                <i class="fas fa-box"></i> Issued Items
            </button>
            <button class="admin-nav-btn" onclick="sportLeaderSection('notice',this)">
                <i class="fas fa-bell"></i> Notices
            </button>
        </div>
        <div class="admin-main" id="sportLeaderMain">
            <div class="admin-card">
                <h3>Welcome ${user.name}</h3>
                <p>You are the leader for <strong>${user.sport || 'Football'}</strong></p>
                <p>Manage your team and request equipment here.</p>
            </div>
        </div>
    </div>`;
}

window.sportLeaderSection = function(section, btn) {
    document.querySelectorAll('.admin-nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('sportLeaderMain').innerHTML = `<div class="admin-card"><p>${section} section coming soon...</p></div>`;
};

/* ══════════════════════════════════════════
   STUDENT DASHBOARD — Final Combined Version
══════════════════════════════════════════ */
function renderStudentDashboard(user) {
    const data = getData();
    const regs = data.examRegistrations.filter(r => r.studentId === user.id);

    let html = `
        <div class="stats-grid">
            <div class="stat-card">
                <i class="fas fa-check-circle"></i>
                <h3>Welcome</h3>
                <p>${user.name}</p>
            </div>
            <div class="stat-card">
                <i class="fas fa-id-badge"></i>
                <h3>Role</h3>
                <p>STUDENT</p>
            </div>
            ${user.department ? `
            <div class="stat-card">
                <i class="fas fa-building"></i>
                <h3>Department</h3>
                <p>${user.department}</p>
            </div>` : ''}
        </div>

        <!-- Quick Stats -->
        <div class="stats-grid" style="margin-top:1rem;">
            <div class="stat-card">
                <i class="fas fa-calendar-check" style="color:#10b981"></i>
                <h3>Attendance</h3>
                <p style="font-size:1.4rem;color:#10b981">
                    ${user.attendance ? Math.round((user.attendance.attended / user.attendance.total) * 100) : 0}%
                </p>
                <small>${user.attendance ? user.attendance.attended : 0}/${user.attendance ? user.attendance.total : 0} classes</small>
            </div>
            <div class="stat-card">
                <i class="fas fa-wallet" style="color:${user.feeBalance === 0 ? '#10b981' : '#ef4444'}"></i>
                <h3>Fee Balance</h3>
                <p style="font-size:1.2rem;color:${user.feeBalance === 0 ? '#10b981' : '#ef4444'}">
                    ${user.feeBalance === 0 ? '✅ Cleared' : 'KSh ' + user.feeBalance.toLocaleString()}
                </p>
            </div>
        </div>`;

    // My Exam Registrations (keeps your original tracking)
    html += renderStudentExamTracking(user);

    // New Registration Button
    html += `
        <div class="form-card">
            <button class="btn-primary" onclick="startExamRegistration()">
                <i class="fas fa-file-signature"></i> New CBET Exam Registration
            </button>
        </div>`;

    return html;
}
function showSportSubLogin() {
    selectedRole = 'sportclub';
    document.getElementById('schoolInfoPanel').style.display = 'none';
    document.getElementById('loginFormContainer').style.display = 'none';
    document.getElementById('dashboardContainer').style.display = 'block';

    let subHTML = `
        <div class="form-card" style="max-width:500px;margin:2rem auto;">
            <h2 style="text-align:center;color:var(--purple-light);margin-bottom:1.5rem;">
                <i class="fas fa-football-ball"></i> Sport Club Access
            </h2>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
                <button class="admin-btn-primary" style="height:120px;font-size:1.1rem;" onclick="selectSportSubRole('sportsadmin')">
                    <i class="fas fa-user-tie" style="font-size:2rem;"></i><br>
                    Sports Admin
                </button>
                <button class="admin-btn-primary" style="height:120px;font-size:1.1rem;" onclick="selectSportSubRole('sportleader')">
                    <i class="fas fa-user-graduate" style="font-size:2rem;"></i><br>
                    Student Sport Leader
                </button>
            </div>
            <button class="btn-danger" style="margin-top:1.5rem;width:100%;" onclick="showHome()">Back</button>
        </div>`;

    document.getElementById('dashboardContent').innerHTML = subHTML;
}

window.selectSportSubRole = function(subRole) {
    // Set temporary role for login
    sessionStorage.setItem('sportSubRole', subRole);
    
    const titles = {
        sportsadmin: 'Sports Admin Login',
        sportleader: 'Student Sport Leader Login'
    };

    document.getElementById('dashboardTitle').innerHTML = 
        `<i class="fas fa-football-ball"></i> ${titles[subRole]}`;

    // Show normal login form but with sport context
    let content = `
        <div class="form-card" style="max-width:420px;margin:2rem auto;">
            <h3 style="text-align:center;">Enter Credentials</h3>
            <input type="text" id="sportId" class="login-input" placeholder="ID / Username">
            <input type="password" id="sportPass" class="login-input" placeholder="Password">
            <button class="btn-primary" style="width:100%;margin-top:1rem;" onclick="handleSportSubLogin()">
                Login
            </button>
        </div>`;

    document.getElementById('dashboardContent').innerHTML = content;
};

window.handleSportSubLogin = function() {
    const subRole = sessionStorage.getItem('sportSubRole');
    const id = document.getElementById('sportId').value.trim();
    const pass = document.getElementById('sportPass').value.trim();

    // Demo credentials (you can expand later)
    if (subRole === 'sportsadmin' && pass === 'sports123') {
        const user = { role: 'sportsadmin', name: 'Sports Admin', id: id || 'SP-ADMIN-001' };
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        showDashboard('sportsadmin', user);
    } else if (subRole === 'sportleader' && pass === 'leader123') {
        const user = { role: 'sportleader', name: 'Sport Leader', id: id || 'LEADER-001', sport: 'Football' };
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        showDashboard('sportleader', user);
    } else {
        alert('❌ Invalid credentials. Try:\nSports Admin → sports123\nSport Leader → leader123');
    }
};

/* ══════════════════════════════════════════
   SECTION 1 — USER MANAGEMENT
══════════════════════════════════════════ */
function adminUsersHTML() {
    const data = getData();
    const allUsers = [
        ...data.students.map(u      => ({...u, roleLabel:'Student',      roleKey:'student'})),
        ...data.classReps.map(u     => ({...u, roleLabel:'Class Rep',    roleKey:'classrep'})),
        ...data.lecturers.map(u     => ({...u, roleLabel:'Lecturer',     roleKey:'lecturer'})),
        ...data.classTeachers.map(u => ({...u, roleLabel:'Class Teacher',roleKey:'classteacher'})),
        ...data.hods.map(u          => ({...u, roleLabel:'H.O.D',        roleKey:'hod'})),
        ...data.deos.map(u          => ({...u, roleLabel:'D.E.O',        roleKey:'deo'})),
        ...data.finance.map(u       => ({...u, roleLabel:'Finance',      roleKey:'finance'})),
        {  ...data.deputyAcad,        roleLabel:'Deputy (Acad)',          roleKey:'deputy_acad'},
        {  ...data.deputyInfra,       roleLabel:'Deputy (Infra)',         roleKey:'deputy_infra'},
        {  ...data.examOffice,        roleLabel:'Exam Office',            roleKey:'examoffice'},
        {  ...data.dean,              roleLabel:'Dean',                   roleKey:'dean'},
    ];
 
    const rows = allUsers.map(u => `
        <tr style="border-bottom:1px solid var(--border);font-size:0.82rem;">
            <td style="padding:0.5rem;">${u.id || '—'}</td>
            <td style="padding:0.5rem;">${u.name || '—'}</td>
            <td style="padding:0.5rem;"><span class="admin-role-pill">${u.roleLabel}</span></td>
            <td style="padding:0.5rem;">${u.department || '—'}</td>
            <td style="padding:0.5rem;">
                <button class="admin-action-btn edit"   onclick="adminResetPassword('${u.roleKey}','${u.id || u.roleKey}')">🔑 Reset</button>
                <button class="admin-action-btn danger" onclick="adminDeleteUser('${u.roleKey}','${u.id || u.roleKey}')">🗑 Delete</button>
            </td>
        </tr>`).join('');
 
    return `
        <div class="admin-section-head">👥 User Management</div>
 
        <!-- Add new user form -->
        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">➕ Add New User</div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-top:10px;">
                <select id="newUserRole" class="admin-input">
                    <option value="">-- Select Role --</option>
                    <option value="student">Student</option>
                    <option value="classrep">Class Rep</option>
                    <option value="lecturer">Lecturer</option>
                    <option value="classteacher">Class Teacher</option>
                    <option value="hod">H.O.D</option>
                    <option value="deo">D.E.O</option>
                    <option value="finance">Finance</option>
                </select>
                <input id="newUserName"  class="admin-input" placeholder="Full Name">
                <input id="newUserDept"  class="admin-input" placeholder="Department">
                <input id="newUserPass"  class="admin-input" placeholder="Password / Passcode">
            </div>
            <button class="admin-btn-primary" style="margin-top:10px;" onclick="adminAddUser()">
                <i class="fas fa-plus"></i> Create Account
            </button>
        </div>
 
        <!-- Users table -->
        <div class="admin-card">
            <div class="admin-card-title">All Users (${allUsers.length})</div>
            <div style="overflow-x:auto;">
                <table style="width:100%;border-collapse:collapse;">
                    <thead>
                        <tr style="color:var(--purple-light);border-bottom:1px solid var(--border);font-size:0.8rem;">
                            <th style="padding:0.5rem;text-align:left;">ID</th>
                            <th style="padding:0.5rem;text-align:left;">Name</th>
                            <th style="padding:0.5rem;text-align:left;">Role</th>
                            <th style="padding:0.5rem;text-align:left;">Dept</th>
                            <th style="padding:0.5rem;text-align:left;">Actions</th>
                        </tr>
                    </thead>
                    <tbody>${rows}</tbody>
                </table>
            </div>
        </div>`;
}
 
window.adminAddUser = function() {
    const role = document.getElementById('newUserRole').value;
    const name = document.getElementById('newUserName').value.trim();
    const dept = document.getElementById('newUserDept').value.trim();
    const pass = document.getElementById('newUserPass').value.trim();
    if (!role || !name || !pass) return alert('Fill in Role, Name and Password.');
    const data = getData();
    const ts   = Date.now().toString().slice(-5);
    const prefixMap = {student:'STU',classrep:'REP',lecturer:'LEC',classteacher:'TCH',hod:'HOD',deo:'DEO',finance:'FIN'};
    const id = `${prefixMap[role]||'USR'}-2026-${ts}`;
    const passField = role === 'student' ? 'passcode' : 'password';
    const newUser = {id, name, department: dept, [passField]: pass};
    const arrMap  = {student:'students',classrep:'classReps',lecturer:'lecturers',classteacher:'classTeachers',hod:'hods',deo:'deos',finance:'finance'};
    if (arrMap[role]) data[arrMap[role]].push(newUser);
    adminLog(`Created ${role} account: ${name} (${id})`);
    saveData(data);
    alert(`✅ Account created!\nID: ${id}\nPassword: ${pass}`);
    document.getElementById('adminMain').innerHTML = adminUsersHTML();
};
 
window.adminResetPassword = function(roleKey, userId) {
    const newPass = prompt(`Enter new password for ${userId}:`);
    if (!newPass) return;
    const data = getData();
    const arrMap = {student:'students',classrep:'classReps',lecturer:'lecturers',classteacher:'classTeachers',hod:'hods',deo:'deos',finance:'finance'};
    const passField = roleKey === 'student' ? 'passcode' : 'password';
    if (arrMap[roleKey]) {
        const user = data[arrMap[roleKey]].find(u => u.id === userId);
        if (user) { user[passField] = newPass; saveData(data); adminLog(`Reset password for ${userId}`); alert('✅ Password reset successfully.'); }
    } else {
        const singleMap = {deputy_acad:'deputyAcad',deputy_infra:'deputyInfra',examoffice:'examOffice',dean:'dean'};
        if (singleMap[roleKey]) { data[singleMap[roleKey]].password = newPass; saveData(data); adminLog(`Reset password for ${roleKey}`); alert('✅ Password reset.'); }
    }
};
 
window.adminDeleteUser = function(roleKey, userId) {
    if (!confirm(`Delete user ${userId}? This cannot be undone.`)) return;
    const data = getData();
    const arrMap = {student:'students',classrep:'classReps',lecturer:'lecturers',classteacher:'classTeachers',hod:'hods',deo:'deos',finance:'finance'};
    if (arrMap[roleKey]) {
        data[arrMap[roleKey]] = data[arrMap[roleKey]].filter(u => u.id !== userId);
        saveData(data); adminLog(`Deleted ${roleKey}: ${userId}`);
        alert('✅ User deleted.');
        document.getElementById('adminMain').innerHTML = adminUsersHTML();
    } else {
        alert('⚠️ Cannot delete single-instance roles (Deputy, Dean, etc.). Reset their password instead.');
    }
};
 
/* ══════════════════════════════════════════
   SECTION 2 — PRINCIPALS
══════════════════════════════════════════ */
function adminPrincipalsHTML() {
    const data = getData();
    const rows = data.principals.map((p, idx) => `
        <tr style="border-bottom:1px solid var(--border);font-size:0.82rem;">
            <td style="padding:0.5rem;">${p.name}</td>
            <td style="padding:0.5rem;">${p.startYear} — ${p.endYear || 'Present'}</td>
            <td style="padding:0.5rem;">${p.title || '—'}</td>
            <td style="padding:0.5rem;">${p.isCurrent ? '<span style="color:var(--success);font-weight:700;">● Current</span>' : ''}</td>
            <td style="padding:0.5rem;">
                ${!p.isCurrent ? `<button class="admin-action-btn edit" onclick="adminSetCurrent(${idx})">Set Current</button>` : ''}
                <button class="admin-action-btn danger" onclick="adminDeletePrincipal(${idx})">🗑</button>
            </td>
        </tr>`).join('');
 
    return `
        <div class="admin-section-head">🏛️ Manage Principals</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">➕ Add Principal</div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:10px;margin-top:10px;">
                <input id="pName"  class="admin-input" placeholder="Full Name">
                <input id="pTitle" class="admin-input" placeholder="Title / Achievement">
                <input id="pPhoto" class="admin-input" placeholder="Photo URL">
                <input id="pStart" class="admin-input" type="number" placeholder="Start Year">
                <input id="pEnd"   class="admin-input" type="number" placeholder="End Year (blank=current)">
            </div>
            <button class="admin-btn-primary" style="margin-top:10px;" onclick="adminAddPrincipal()">
                <i class="fas fa-plus"></i> Add Principal
            </button>
        </div>
        <div class="admin-card">
            <div class="admin-card-title">All Principals (${data.principals.length})</div>
            <table style="width:100%;border-collapse:collapse;">
                <thead><tr style="color:var(--purple-light);border-bottom:1px solid var(--border);font-size:0.8rem;">
                    <th style="padding:0.5rem;text-align:left;">Name</th>
                    <th style="padding:0.5rem;text-align:left;">Years</th>
                    <th style="padding:0.5rem;text-align:left;">Title</th>
                    <th style="padding:0.5rem;text-align:left;">Status</th>
                    <th style="padding:0.5rem;text-align:left;">Actions</th>
                </tr></thead>
                <tbody>${rows}</tbody>
            </table>
        </div>`;
}
 
window.adminAddPrincipal = function() {
    const name  = document.getElementById('pName').value.trim();
    const title = document.getElementById('pTitle').value.trim();
    const photo = document.getElementById('pPhoto').value.trim();
    const start = parseInt(document.getElementById('pStart').value);
    const end   = document.getElementById('pEnd').value ? parseInt(document.getElementById('pEnd').value) : null;
    if (!name || !start) return alert('Name and Start Year are required.');
    const data = getData();
    const isCurrent = !end;
    if (isCurrent) data.principals.forEach(p => { p.isCurrent = false; if (!p.endYear) p.endYear = new Date().getFullYear(); });
    data.principals.push({ id: Date.now(), name, title, photo: photo || `https://placehold.co/400x500/6c3fcf/white?text=${encodeURIComponent(name)}`, startYear: start, endYear: end, isCurrent });
    saveData(data); adminLog(`Added principal: ${name}`);
    renderPrincipals();
    alert('✅ Principal added!');
    document.getElementById('adminMain').innerHTML = adminPrincipalsHTML();
};
 
window.adminSetCurrent = function(idx) {
    const data = getData();
    data.principals.forEach((p, i) => { p.isCurrent = (i === idx); if (i !== idx && !p.endYear) p.endYear = new Date().getFullYear(); });
    saveData(data); renderPrincipals(); adminLog(`Set principal ${data.principals[idx].name} as current`);
    document.getElementById('adminMain').innerHTML = adminPrincipalsHTML();
};
 
window.adminDeletePrincipal = function(idx) {
    if (!confirm('Delete this principal?')) return;
    const data = getData();
    data.principals.splice(idx, 1);
    saveData(data); renderPrincipals(); adminLog(`Deleted principal at index ${idx}`);
    document.getElementById('adminMain').innerHTML = adminPrincipalsHTML();
};
 
/* ══════════════════════════════════════════
   SECTION 3 — DEPARTMENTS
══════════════════════════════════════════ */
function adminDepartmentsHTML() {
    const data = getData();
    return `
        <div class="admin-section-head">🏫 Manage Departments</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">➕ Add Department</div>
            <div style="display:flex;gap:10px;margin-top:10px;flex-wrap:wrap;">
                <input id="newDept" class="admin-input" placeholder="Department name" style="flex:1;">
                <button class="admin-btn-primary" onclick="adminAddDept()"><i class="fas fa-plus"></i> Add</button>
            </div>
        </div>
        <div class="admin-card">
            <div class="admin-card-title">All Departments (${data.departments.length})</div>
            ${data.departments.map((d, i) => `
                <div style="display:flex;justify-content:space-between;align-items:center;padding:0.6rem 0;border-bottom:1px solid var(--border);font-size:0.85rem;">
                    <span>${d}</span>
                    <button class="admin-action-btn danger" onclick="adminDeleteDept(${i})">🗑 Remove</button>
                </div>`).join('')}
        </div>`;
}
 
window.adminAddDept = function() {
    const name = document.getElementById('newDept').value.trim();
    if (!name) return alert('Enter department name.');
    const data = getData();
    if (data.departments.includes(name)) return alert('Department already exists.');
    data.departments.push(name); saveData(data); adminLog(`Added department: ${name}`);
    document.getElementById('adminMain').innerHTML = adminDepartmentsHTML();
};
 
window.adminDeleteDept = function(idx) {
    if (!confirm('Delete this department?')) return;
    const data = getData();
    adminLog(`Deleted department: ${data.departments[idx]}`);
    data.departments.splice(idx, 1); saveData(data);
    document.getElementById('adminMain').innerHTML = adminDepartmentsHTML();
};
 
/* ══════════════════════════════════════════
   SECTION 4 — COURSES
══════════════════════════════════════════ */
function adminCoursesHTML() {
    const data = getData();
    return `
        <div class="admin-section-head">📚 Manage Courses / Units</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">➕ Add Course</div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:10px;margin-top:10px;">
                <input id="cCode" class="admin-input" placeholder="Code (e.g. CS105)">
                <input id="cName" class="admin-input" placeholder="Course Name">
            </div>
            <button class="admin-btn-primary" style="margin-top:10px;" onclick="adminAddCourse()">
                <i class="fas fa-plus"></i> Add Course
            </button>
        </div>
        <div class="admin-card">
            <div class="admin-card-title">All Courses (${data.courses.length})</div>
            ${data.courses.map((c, i) => `
                <div style="display:flex;justify-content:space-between;align-items:center;padding:0.6rem 0;border-bottom:1px solid var(--border);font-size:0.85rem;">
                    <span><strong style="color:var(--purple-light)">${c.code}</strong> — ${c.name}</span>
                    <button class="admin-action-btn danger" onclick="adminDeleteCourse(${i})">🗑</button>
                </div>`).join('')}
        </div>`;
}
 
window.adminAddCourse = function() {
    const code = document.getElementById('cCode').value.trim().toUpperCase();
    const name = document.getElementById('cName').value.trim();
    if (!code || !name) return alert('Fill in both Code and Name.');
    const data = getData();
    if (data.courses.find(c => c.code === code)) return alert('Course code already exists.');
    data.courses.push({id: code, code, name}); saveData(data); adminLog(`Added course: ${code} ${name}`);
    document.getElementById('adminMain').innerHTML = adminCoursesHTML();
};
 
window.adminDeleteCourse = function(idx) {
    if (!confirm('Delete this course?')) return;
    const data = getData();
    adminLog(`Deleted course: ${data.courses[idx].code}`);
    data.courses.splice(idx, 1); saveData(data);
    document.getElementById('adminMain').innerHTML = adminCoursesHTML();
};
 
/* ══════════════════════════════════════════
   SECTION 5 — ANNOUNCEMENTS
══════════════════════════════════════════ */
function adminAnnounceHTML() {
    const data = getData();
    return `
        <div class="admin-section-head">📢 Broadcast Announcements</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">➕ Post New Announcement</div>
            <select id="noticeTarget" class="admin-input" style="margin-top:10px;width:100%;">
                <option value="all">All Users</option>
                <option value="student">Students Only</option>
                <option value="staff">Staff Only</option>
                <option value="hod">H.O.D Only</option>
                <option value="finance">Finance Only</option>
            </select>
            <textarea id="noticeMsg" class="admin-input" rows="3" placeholder="Type your announcement..." style="margin-top:10px;width:100%;resize:vertical;"></textarea>
            <button class="admin-btn-primary" style="margin-top:10px;" onclick="adminPostNotice()">
                <i class="fas fa-bullhorn"></i> Broadcast Now
            </button>
        </div>
        <div class="admin-card">
            <div class="admin-card-title">Recent Notices (${data.noticeboard.length})</div>
            ${data.noticeboard.slice(-10).reverse().map((n, i) => `
                <div style="display:flex;justify-content:space-between;align-items:flex-start;padding:0.7rem 0;border-bottom:1px solid var(--border);">
                    <div>
                        <div style="font-size:0.78rem;color:var(--purple-light);font-weight:700;">${n.sender} → ${n.recipient}</div>
                        <div style="font-size:0.82rem;">${n.message}</div>
                        <div style="font-size:0.68rem;color:var(--text-secondary);">${new Date(n.timestamp).toLocaleString()}</div>
                    </div>
                    <button class="admin-action-btn danger" onclick="adminDeleteNotice('${n.id}')">🗑</button>
                </div>`).join('')}
        </div>`;
}
 
window.adminPostNotice = function() {
    const msg    = document.getElementById('noticeMsg').value.trim();
    const target = document.getElementById('noticeTarget').value;
    if (!msg) return alert('Enter a message.');
    const data = getData();
    data.noticeboard.push({ id: 'n' + Date.now(), sender: 'System Admin', message: msg, timestamp: new Date().toISOString(), recipient: target });
    saveData(data); adminLog(`Posted notice to ${target}: ${msg.substring(0,40)}`);
    alert('✅ Announcement broadcast!');
    document.getElementById('adminMain').innerHTML = adminAnnounceHTML();
};
 
window.adminDeleteNotice = function(id) {
    const data = getData();
    data.noticeboard = data.noticeboard.filter(n => n.id !== id);
    saveData(data);
    document.getElementById('adminMain').innerHTML = adminAnnounceHTML();
};
 
/* ══════════════════════════════════════════
   SECTION 6 — ID CARDS
══════════════════════════════════════════ */
function adminIDCardsHTML() {
    const data = getData();
    return `
        <div class="admin-section-head">🪪 Student ID Card Replacement</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">Generate Replacement ID Card</div>
            <div style="display:flex;gap:10px;margin-top:10px;flex-wrap:wrap;">
                <input id="idStudentSearch" class="admin-input" placeholder="Enter Student ID or Name" style="flex:1;">
                <button class="admin-btn-primary" onclick="adminSearchStudent()"><i class="fas fa-search"></i> Search</button>
            </div>
            <div id="idCardResult" style="margin-top:1rem;"></div>
        </div>
        <div class="admin-card">
            <div class="admin-card-title">All Students (${data.students.length})</div>
            ${data.students.map(s => `
                <div style="display:flex;justify-content:space-between;align-items:center;padding:0.5rem 0;border-bottom:1px solid var(--border);font-size:0.82rem;">
                    <span>${s.name} — <span style="color:var(--purple-light)">${s.id}</span></span>
                    <button class="admin-action-btn edit" onclick="adminGenerateID('${s.id}')">🪪 Generate ID</button>
                </div>`).join('')}
        </div>`;
}
 
window.adminSearchStudent = function() {
    const q    = document.getElementById('idStudentSearch').value.trim().toLowerCase();
    const data = getData();
    const s    = data.students.find(s => s.id.toLowerCase().includes(q) || s.name.toLowerCase().includes(q));
    const div  = document.getElementById('idCardResult');
    if (!s) { div.innerHTML = '<p style="color:var(--danger)">Student not found.</p>'; return; }
    div.innerHTML = `<p style="color:var(--success)">Found: <strong>${s.name}</strong> (${s.id}) — ${s.department}</p>
        <button class="admin-btn-primary" onclick="adminGenerateID('${s.id}')">🪪 Generate ID Card</button>`;
};
 
window.adminGenerateID = function(studentId) {
    const data = getData();
    const s    = data.students.find(s => s.id === studentId);
    if (!s) return;
    adminLog(`Generated ID card for ${s.name} (${s.id})`);
    alert(`✅ ID Card Generated!\n\n🪪 PC KINYANJUI TTI\nName: ${s.name}\nID: ${s.id}\nDept: ${s.department}\nClass: ${s.class}\n\n(Print feature requires backend integration)`);
};
 
/* ══════════════════════════════════════════
   SECTION 7 — SYSTEM LOGS
══════════════════════════════════════════ */
function adminLogsHTML() {
    const data = getData();
    const logs = data.systemLogs || [];
    return `
        <div class="admin-section-head">📋 System Logs</div>
        <div class="admin-card">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
                <div class="admin-card-title">Activity Log (${logs.length} entries)</div>
                <button class="admin-action-btn danger" onclick="adminClearLogs()">🗑 Clear Logs</button>
            </div>
            ${logs.length === 0 ? '<p style="color:var(--text-secondary);font-size:0.85rem;">No logs yet.</p>' :
            logs.slice(-50).reverse().map(l => `
                <div style="padding:0.5rem 0;border-bottom:1px solid var(--border);font-size:0.78rem;">
                    <span style="color:var(--purple-light);">${new Date(l.time).toLocaleString()}</span>
                    <span style="margin-left:10px;">${l.action}</span>
                </div>`).join('')}
        </div>`;
}
 
window.adminClearLogs = function() {
    if (!confirm('Clear all logs?')) return;
    const data = getData();
    data.systemLogs = [];
    saveData(data);
    document.getElementById('adminMain').innerHTML = adminLogsHTML();
};
 
/* ── Log helper (called internally) ── */
function adminLog(action) {
    const data = getData();
    if (!data.systemLogs) data.systemLogs = [];
    data.systemLogs.push({ time: new Date().toISOString(), action });
    saveData(data);
}
 
/* Also log every login */
function logLogin(role, name) {
    adminLog(`LOGIN — ${role.toUpperCase()}: ${name}`);
}
 
/* ══════════════════════════════════════════
   SECTION 8 — BACKUP / RESTORE
══════════════════════════════════════════ */
function adminBackupHTML() {
    return `
        <div class="admin-section-head">💾 Backup & Restore</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">💾 Backup System Data</div>
            <p style="font-size:0.82rem;color:var(--text-secondary);margin:8px 0;">Downloads all system data as a JSON file to your device.</p>
            <button class="admin-btn-primary" onclick="adminBackup()"><i class="fas fa-download"></i> Download Backup</button>
        </div>
        <div class="admin-card">
            <div class="admin-card-title">🔄 Restore from Backup</div>
            <p style="font-size:0.82rem;color:var(--text-secondary);margin:8px 0;">Upload a previously downloaded backup JSON file to restore all data.</p>
            <input type="file" id="restoreFile" accept=".json" class="admin-input" style="margin-bottom:10px;">
            <button class="admin-btn-primary" onclick="adminRestore()"><i class="fas fa-upload"></i> Restore Data</button>
        </div>`;
}
 
window.adminBackup = function() {
    const data = getData();
    const blob = new Blob([JSON.stringify(data, null, 2)], {type:'application/json'});
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href     = url;
    a.download = `pck_backup_${new Date().toISOString().slice(0,10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    adminLog('System backup downloaded');
};
 
window.adminRestore = function() {
    const file = document.getElementById('restoreFile').files[0];
    if (!file) return alert('Select a backup JSON file first.');
    if (!confirm('⚠️ This will REPLACE all current data. Are you sure?')) return;
    const reader = new FileReader();
    reader.onload = e => {
        try {
            const restored = JSON.parse(e.target.result);
            saveData(restored);
            adminLog('System data restored from backup');
            alert('✅ Data restored successfully! Refreshing...');
            location.reload();
        } catch { alert('❌ Invalid backup file.'); }
    };
    reader.readAsText(file);
};
 
/* ══════════════════════════════════════════
   SECTION 9 — EXPORT DATA
══════════════════════════════════════════ */
function adminExportHTML() {
    const data = getData();
    return `
        <div class="admin-section-head">📊 Export Data</div>
        <div class="admin-card">
            <div class="admin-card-title">Download as CSV</div>
            <div style="display:flex;flex-direction:column;gap:10px;margin-top:12px;">
                <button class="admin-btn-primary"   onclick="exportCSV('students')"><i class="fas fa-user-graduate"></i> Export Students (${data.students.length})</button>
                <button class="admin-btn-secondary" onclick="exportCSV('lecturers')"><i class="fas fa-chalkboard-user"></i> Export Lecturers (${data.lecturers.length})</button>
                <button class="admin-btn-secondary" onclick="exportCSV('examRegistrations')"><i class="fas fa-file-signature"></i> Export Exam Registrations (${data.examRegistrations.length})</button>
                <button class="admin-btn-secondary" onclick="exportCSV('newsletterSubscribers')"><i class="fas fa-envelope"></i> Export Newsletter Subscribers (${data.newsletterSubscribers.length})</button>
            </div>
        </div>`;
}
 
window.exportCSV = function(key) {
    const data = getData();
    let rows = data[key];
    if (!rows || rows.length === 0) return alert('No data to export.');
    if (typeof rows[0] === 'string') rows = rows.map(r => ({email: r}));
    const headers = Object.keys(rows[0]).join(',');
    const body    = rows.map(r => Object.values(r).map(v => `"${String(v).replace(/"/g,'""')}"`).join(',')).join('\n');
    const blob    = new Blob([headers + '\n' + body], {type:'text/csv'});
    const url     = URL.createObjectURL(blob);
    const a       = document.createElement('a');
    a.href = url; a.download = `pck_${key}_${new Date().toISOString().slice(0,10)}.csv`;
    a.click(); URL.revokeObjectURL(url);
    adminLog(`Exported ${key} as CSV`);
};


// ==================== EXAM REGISTRATION ====================
window.startExamRegistration = function () {
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    if (user.role !== 'student') return alert('Only students can register for exams.');
    const data = getData();
    const student = data.students.find(s => s.id === user.id);
    if (!student) return alert('Student not found.');

    const courses = data.courses || [];
    let unitsHTML = courses.map(c => {
        const attempts = (student.examHistory && student.examHistory[c.id]) || 0;
        const fee = attempts > 0 ? 200 : 1500;
        return `<option value="${c.id}" data-fee="${fee}">
            ${c.name} (${c.code}) — ${attempts > 0 ? 'Retake (KSh 200)' : 'First Time (KSh 1,500)'}
        </option>`;
    }).join('');

    document.getElementById('dashboardContent').innerHTML = `
        <div class="form-card">
            <h2 style="color:var(--purple-light)"><i class="fas fa-file-signature"></i> CBET Exam Registration Form</h2>
            <p style="color:var(--text-secondary);margin-bottom:1rem;">P.C. Kinyanjui Technical Training Institute</p>

            <div class="form-group"><label>Admission No</label>
                <input type="text" value="${student.id}" readonly></div>
            <div class="form-group"><label>Full Name</label>
                <input type="text" value="${student.name}" readonly></div>
            <div class="form-group"><label>Department</label>
                <input type="text" value="${student.department}" readonly></div>
            <div class="form-group"><label>Class</label>
                <input type="text" value="${student.class}" readonly></div>

            <div class="form-group">
                <label>Select Units <small style="color:var(--text-secondary)">(Ctrl + Click for multiple)</small></label>
                <select id="regUnits" multiple style="height:200px;width:100%;background:var(--bg-elevated);border:1px solid var(--border);border-radius:12px;color:var(--text-primary);padding:0.5rem;">${unitsHTML}</select>
            </div>

            <div class="form-group">
                <label>Previous Exam Year</label>
                <input type="text" id="prevExam" placeholder="e.g. KCSE 2023" class="login-input">
            </div>

            <div class="form-group">
                <label style="display:block;margin-bottom:0.5rem;">Documents</label>
                <div style="display:flex;flex-direction:column;gap:0.75rem;background:var(--bg-elevated);padding:1rem;border-radius:12px;">
                    <label>Passport Photo: <input type="file" id="passportUpload" accept="image/*"></label>
                    <label>ID Copy: <input type="file" id="idUpload" accept="image/*"></label>
                    <label>Last Exam Slip: <input type="file" id="lastExamUpload" accept="image/*,.pdf"></label>
                </div>
            </div>

            <div style="background:var(--bg-elevated);padding:1rem;border-radius:12px;margin:1rem 0;border:1px solid var(--border);">
                <label style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.75rem;">
                    <input type="checkbox" id="confirmFee"> I will pay the calculated exam fee
                </label>
                <label style="display:flex;align-items:center;gap:0.5rem;">
                    <input type="checkbox" id="confirmCompetency"> I meet all competency requirements
                </label>
            </div>

            <div id="feeSummary" style="background:var(--bg-elevated);padding:1rem;border-radius:12px;margin:1rem 0;font-weight:600;border:1px solid var(--border);">
                Select units above to see fee summary
            </div>

            <div style="display:flex;gap:1rem;flex-wrap:wrap;">
                <button class="btn-primary" onclick="submitExamRegistration('${student.id}')">
                    <i class="fas fa-paper-plane"></i> Submit to H.O.D
                </button>
                <button class="btn-danger" onclick="showDashboard('student', ${JSON.stringify(student).replace(/"/g, '&quot;')})">
                    <i class="fas fa-times"></i> Cancel
                </button>
            </div>
        </div>`;

    document.getElementById('regUnits').addEventListener('change', updateFeeSummary);
};

function updateFeeSummary() {
    const select = document.getElementById('regUnits');
    let total = 0, text = '';
    Array.from(select.selectedOptions).forEach(opt => {
        const fee = parseInt(opt.dataset.fee);
        total += fee;
        text += `<div style="display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid var(--border);">
            <span>${opt.text.split('—')[0].trim()}</span>
            <span style="color:var(--blue-light)">KSh ${fee.toLocaleString()}</span>
        </div>`;
    });
    document.getElementById('feeSummary').innerHTML = total
        ? `<div style="margin-bottom:0.5rem;color:var(--purple-light);font-size:0.85rem;">FEE BREAKDOWN</div>
           ${text}
           <div style="display:flex;justify-content:space-between;margin-top:0.75rem;font-size:1.1rem;">
               <span>TOTAL</span>
               <span style="color:var(--blue-light)">KSh ${total.toLocaleString()}</span>
           </div>`
        : 'Select units above to see fee summary';
}

window.submitExamRegistration = function (studentId) {
    const select = document.getElementById('regUnits');
    if (select.selectedOptions.length === 0) return alert('Please select at least one unit.');

    const confirmFee  = document.getElementById('confirmFee').checked;
    const confirmComp = document.getElementById('confirmCompetency').checked;
    if (!confirmFee || !confirmComp) return alert('Please confirm both checkboxes before submitting.');

    const selectedUnits = Array.from(select.selectedOptions).map(opt => ({
        code: opt.value,
        name: opt.text.split('—')[0].trim(),
        fee:  parseInt(opt.dataset.fee)
    }));

    const totalFee = selectedUnits.reduce((sum, u) => sum + u.fee, 0);
    const data     = getData();
    const regId    = 'REG-' + Date.now().toString().slice(-6);

   data.examRegistrations.push({
        id: regId,
        studentId,
        status: 'pending_deo',
        units: selectedUnits,
        totalExamFee: totalFee,
        prevExam: document.getElementById('prevExam').value || 'N/A',
        submittedDate: new Date().toISOString(),
        // Stage flags
        deoApproved: false,      deoNote: '',
        hodConfirmed: false,     hodUnitNotes: {},
        financeChecked: false,   financeTotal: 0,
        referredToDeputy: false, deputyDecision: '',
        deputyDeadline: '',      examBooked: false,
        // Rejection tracking
        rejectionReason: '', rejectedBy: '',
        // Audit
        generatedPDFs: []
    });

    saveData(data);
    alert(`✅ Registration ${regId} submitted successfully!\nTotal Exam Fee: KSh ${totalFee.toLocaleString()}\nAwaiting H.O.D approval.`);
    showDashboard('student', data.students.find(s => s.id === studentId));
};


/* ══════════════════════════════════════════
   PDF ENGINE — Download + Print
══════════════════════════════════════════ */
function generatePDF(config) {
    const {
        title,
        subtitle,
        office,
        stage,
        department,
        columns,
        rows,
        footer,
        signatoryLabel,
        deadline
    } = config;

    const date = new Date().toLocaleDateString('en-KE', {
        day: '2-digit', month: 'long', year: 'numeric'
    });

    // Build HTML for the PDF
    const tableHeaders = columns.map(c =>
        `<th style="padding:8px 10px;text-align:left;background:#5b21b6;color:#fff;font-size:11px;">${c.label}</th>`
    ).join('');

    const tableRows = rows.map((row, i) =>
        `<tr style="background:${i % 2 === 0 ? '#f5f3ff' : '#ffffff'};">
            ${columns.map(c =>
                `<td style="padding:7px 10px;font-size:11px;border-bottom:1px solid #e0d9f7;">${row[c.key] ?? '—'}</td>`
            ).join('')}
        </tr>`
    ).join('');

    const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>${title}</title>
        <style>
            * { margin:0; padding:0; box-sizing:border-box; }
            body { font-family: Arial, sans-serif; color: #1a0b2e; padding: 24px; }
            .header { display:flex; align-items:center; justify-content:space-between; border-bottom:3px solid #5b21b6; padding-bottom:12px; margin-bottom:16px; }
            .header-left h1 { font-size:16px; color:#5b21b6; font-weight:800; }
            .header-left h2 { font-size:11px; color:#666; font-weight:400; letter-spacing:1px; margin-top:2px; }
            .header-right { text-align:right; font-size:10px; color:#666; }
            .badge { display:inline-block; background:#5b21b6; color:#fff; font-size:9px; font-weight:700; padding:3px 10px; border-radius:20px; letter-spacing:1px; margin-bottom:4px; }
            .doc-title { font-size:14px; font-weight:800; color:#1a0b2e; margin:12px 0 4px; }
            .doc-sub { font-size:10px; color:#666; margin-bottom:${department ? '4px' : '14px'}; }
            .dept-tag { display:inline-block; background:#ede8ff; color:#5b21b6; font-size:10px; font-weight:700; padding:3px 10px; border-radius:20px; margin-bottom:14px; }
            table { width:100%; border-collapse:collapse; margin-bottom:20px; }
            thead tr { background:#5b21b6; }
            .summary { background:#f5f3ff; border:1px solid #d4c5f0; border-radius:8px; padding:10px 14px; margin-bottom:20px; font-size:11px; }
            .summary strong { color:#5b21b6; }
            .footer-section { border-top:2px solid #5b21b6; padding-top:14px; margin-top:10px; }
            .sig-grid { display:grid; grid-template-columns:1fr 1fr; gap:40px; margin-top:14px; }
            .sig-box { border-top:1px solid #333; padding-top:6px; font-size:10px; color:#333; }
            .deadline-box { background:#fff3cd; border:1px solid #f59e0b; border-radius:6px; padding:8px 12px; font-size:10px; font-weight:700; color:#92400e; margin-bottom:14px; }
            .watermark { position:fixed; bottom:30px; right:30px; font-size:9px; color:#ccc; text-align:right; }
            @media print { body { padding:16px; } .watermark { display:block; } }
        </style>
    </head>
    <body>
        <!-- HEADER -->
        <div class="header">
            <div class="header-left">
                <h1>PC KINYANJUI TECHNICAL TRAINING INSTITUTE</h1>
                <h2>ISO 9001:2015 CERTIFIED · Off Kabiria Road, Riruta Satellite, Nairobi</h2>
            </div>
            <div class="header-right">
                <div class="badge">${office}</div><br>
                <div>Date: ${date}</div>
                <div>Doc: PCK-${stage}-${Date.now().toString().slice(-6)}</div>
            </div>
        </div>

        <!-- TITLE -->
        <div class="doc-title">${title}</div>
        <div class="doc-sub">${subtitle}</div>
        ${department ? `<div class="dept-tag">📚 Department: ${department}</div>` : ''}

        <!-- DEADLINE (if set) -->
        ${deadline ? `<div class="deadline-box">⏰ DEADLINE: Students must report to the Deputy Principal's office before <strong>${deadline}</strong></div>` : ''}

        <!-- SUMMARY -->
        <div class="summary">
            <strong>Total Records:</strong> ${rows.length} &nbsp;|&nbsp;
            <strong>Stage:</strong> ${stage} &nbsp;|&nbsp;
            <strong>Generated:</strong> ${date}
            ${footer ? `&nbsp;|&nbsp;<strong>Note:</strong> ${footer}` : ''}
        </div>

        <!-- TABLE -->
        <table>
            <thead><tr>${tableHeaders}</tr></thead>
            <tbody>${tableRows}</tbody>
        </table>

        <!-- SIGNATURES -->
        <div class="footer-section">
            <div class="sig-grid">
                <div class="sig-box">
                    ${signatoryLabel || 'Authorised By'}<br>
                    <strong>Name: ________________________</strong><br>
                    <strong>Sign: ________________________</strong><br>
                    <strong>Date: ${date}</strong>
                </div>
                <div class="sig-box">
                    Received By<br>
                    <strong>Name: ________________________</strong><br>
                    <strong>Sign: ________________________</strong><br>
                    <strong>Date: ________________________</strong>
                </div>
            </div>
        </div>

        <div class="watermark">PCK Institute Management System · Confidential</div>
    </body>
    </html>`;

    // Open in new window for print/save
    const win = window.open('', '_blank', 'width=900,height=700');
    win.document.write(html);
    win.document.close();

    // Auto-trigger print dialog (user can Save as PDF from there)
    win.onload = () => {
        setTimeout(() => {
            win.focus();
            win.print();
        }, 400);
    };

    // Log PDF generation
    adminLog(`PDF generated: ${title} [${stage}] — ${rows.length} records`);
}

/* Helper — get student exam summary for PDF rows */
function getExamRegRows(registrations, includeFields = []) {
    const data = getData();
    return registrations.map(reg => {
        const student = data.students.find(s => s.id === reg.studentId) || {};
        const units   = (reg.units || []).map(u =>
            `${u.name}${reg.hodUnitNotes && reg.hodUnitNotes[u.code] ? ' (' + reg.hodUnitNotes[u.code] + ')' : ''}`
        ).join(', ');
        const base = {
            regId:      reg.id,
            studentId:  reg.studentId,
            name:       student.name      || '—',
            department: student.department || reg.department || '—',
            class:      student.class     || '—',
            phone:      student.phone     || '—',
            units,
            unitCount:  (reg.units || []).length,
            examFee:    `KSh ${(reg.totalExamFee || 0).toLocaleString()}`,
            feeBalance: `KSh ${(student.feeBalance || 0).toLocaleString()}`,
            status:     reg.status,
            date:       new Date(reg.submittedDate).toLocaleDateString(),
            deputyDecision: reg.deputyDecision || '—',
            deadline:   reg.deputyDeadline || '—',
        };
        includeFields.forEach(f => { if (reg[f] !== undefined) base[f] = reg[f]; });
        return base;
    });
}

function renderStudentExamTracking(student) {
    const data = getData();
    const regs = data.examRegistrations.filter(r => r.studentId === student.id);

    const attPct = student.attendance
        ? Math.round((student.attendance.attended / student.attendance.total) * 100)
        : 0;

    const statusMap = {
        pending_deo:     '🕒 Awaiting DEO',
        pending_hod:     '📋 Awaiting HOD',
        pending_finance: '💰 Awaiting Finance',
        pending_deputy:  '👑 Awaiting Deputy',
        pending_exam:    '📝 Awaiting Exam Office',
        approved:        '✅ Fully Approved',
        rejected:        '❌ Rejected',
        blocked:         '🚫 Blocked by Deputy',
        waived:          '✅ Waived by Deputy'
    };

    const progressStages = ['pending_deo','pending_hod','pending_finance','pending_deputy','pending_exam','approved'];
    const stageLabels    = ['DEO','HOD','Finance','Deputy','Exam Office','Complete'];

    let html = `
        <div class="stats-grid" style="margin-bottom:1rem;">
            <div class="stat-card">
                <i class="fas fa-calendar-check"></i>
                <h3>Attendance</h3>
                <p style="font-size:1.2rem;color:${attPct >= 75 ? 'var(--success)' : 'var(--danger)'}">
                    ${attPct}%
                </p>
                <small style="color:var(--text-secondary)">${student.attendance?.attended}/${student.attendance?.total} classes</small>
            </div>
            <div class="stat-card">
                <i class="fas fa-wallet"></i>
                <h3>Fee Balance</h3>
                <p style="font-size:1.1rem;color:${student.feeBalance === 0 ? 'var(--success)' : 'var(--danger)'}">
                    ${student.feeBalance === 0 ? '✅ Cleared' : 'KSh ' + student.feeBalance.toLocaleString()}
                </p>
            </div>
        </div>`;

    if (regs.length === 0) {
        html += `<div class="form-card">
            <h3><i class="fas fa-tasks"></i> My Exam Registrations</h3>
            <p style="color:var(--text-secondary)">No registrations yet. Click below to register.</p>
        </div>`;
    } else {
        html += `<div class="form-card">
            <h3><i class="fas fa-tasks"></i> My Exam Registrations</h3>`;

        regs.forEach(reg => {
            const currentIdx = progressStages.indexOf(reg.status);
            const isBlocked  = reg.status === 'rejected' || reg.status === 'blocked';
            const isDone     = reg.status === 'approved' || reg.status === 'waived';

            /* ── Progress Bar ── */
            html += `
            <div style="margin-top:1rem;background:var(--bg-elevated);border:1px solid var(--border);border-radius:14px;padding:1rem;">

                <!-- Reg header -->
                <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px;margin-bottom:12px;">
                    <div style="font-size:0.78rem;font-weight:700;color:var(--text-secondary);">
                        Reg ID: <span style="color:var(--purple-light)">${reg.id}</span>
                    </div>
                    <div style="font-size:0.75rem;font-weight:700;padding:3px 12px;border-radius:20px;
                        background:${isDone?'rgba(16,185,129,.15)':isBlocked?'rgba(239,68,68,.15)':'rgba(108,63,207,.15)'};
                        color:${isDone?'var(--success)':isBlocked?'var(--danger)':'var(--purple-light)'};
                        border:1px solid ${isDone?'var(--success)':isBlocked?'var(--danger)':'var(--purple)'};
                    ">
                        ${statusMap[reg.status] || reg.status}
                    </div>
                </div>

                <!-- Stage dots + line -->
                <div style="display:flex;align-items:flex-start;overflow-x:auto;padding-bottom:4px;">
                    ${stageLabels.map((label, idx) => {
                        const done   = idx < currentIdx || isDone;
                        const active = idx === currentIdx && !isDone;
                        const color  = done ? 'var(--success)' : active ? (isBlocked ? 'var(--danger)' : 'var(--purple-light)') : 'var(--border)';
                        const isLast = idx === stageLabels.length - 1;
                        return `
                        <div style="display:flex;align-items:center;flex:1;min-width:52px;">
                            <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0;">
                                <div style="width:26px;height:26px;border-radius:50%;
                                    background:${color};
                                    display:flex;align-items:center;justify-content:center;
                                    font-size:0.65rem;font-weight:800;color:#fff;">
                                    ${done ? '✓' : idx + 1}
                                </div>
                                <div style="font-size:0.58rem;color:${color};margin-top:3px;text-align:center;white-space:nowrap;">
                                    ${label}
                                </div>
                            </div>
                            ${!isLast ? `<div style="height:2px;flex:1;background:${done?'var(--success)':'var(--border)'};margin-bottom:14px;"></div>` : ''}
                        </div>`;
                    }).join('')}
                </div>

                <!-- Rejection reason -->
                ${reg.rejectionReason ? `
                <div style="margin-top:8px;font-size:0.75rem;color:var(--danger);
                    background:rgba(239,68,68,.08);border:1px solid var(--danger);
                    border-radius:8px;padding:6px 10px;">
                    ❌ Rejected by ${reg.rejectedBy || 'Office'}: ${reg.rejectionReason}
                </div>` : ''}

                <!-- Deputy deadline -->
                ${reg.deputyDeadline ? `
                <div style="margin-top:6px;font-size:0.72rem;color:var(--warning);
                    background:rgba(245,158,11,.08);border:1px solid var(--warning);
                    border-radius:8px;padding:6px 10px;">
                    ⏰ Report to Deputy Principal before: <strong>${reg.deputyDeadline}</strong>
                </div>` : ''}

                <!-- Summary row -->
                <div style="display:flex;gap:16px;margin-top:10px;flex-wrap:wrap;font-size:0.75rem;color:var(--text-secondary);">
                    <span>📚 <strong style="color:var(--text-primary)">${reg.units.length}</strong> units</span>
                    <span>💰 <strong style="color:var(--text-primary)">KSh ${reg.totalExamFee.toLocaleString()}</strong></span>
                    <span>📅 <strong style="color:var(--text-primary)">${new Date(reg.submittedDate).toLocaleDateString()}</strong></span>
                </div>

            </div>`;
        });

        html += `</div>`;
    }

    return html;
}

// ==================== NEWSLETTER ====================
function subscribeNewsletter() {
    const email = document.getElementById('newsletterEmail').value.trim();
    if (!email) return alert('Please enter your email address.');
    const data = getData();
    if (data.newsletterSubscribers.includes(email)) {
        document.getElementById('newsletterMsg').innerHTML =
            `<span style="color:var(--warning)">This email is already subscribed.</span>`;
        return;
    }
    data.newsletterSubscribers.push(email);
    saveData(data);
    document.getElementById('newsletterEmail').value = '';
    document.getElementById('newsletterMsg').innerHTML =
        `<span style="color:var(--success)">✅ Subscribed successfully! Thank you.</span>`;
}

// ==================== ADMIN STUBS (to be completed) ====================
function showAddPrincipalForm() {
    alert('Add Principal form — coming soon. Connect to backend for full functionality.');
}
function addNewInfrastructure() {
    const name = document.getElementById('newInfraName')?.value?.trim();
    if (!name) return alert('Enter infrastructure name.');
    const key  = name.toLowerCase().replace(/\s+/g, '_');
    const data = getData();
    if (data.infrastructureList.includes(key)) return alert('Location already exists.');
    data.infrastructureList.push(key);
    data.schoolTour[key] = { images: [], videos: [] };
    saveData(data);
    renderTourNav();
    populateInfraSelect();
    alert(`✅ "${name}" added successfully!`);
}
function uploadTourMedia() {
    alert('Image upload requires a backend server. This feature is ready for backend integration.');
}
function closeSettingsModal() {
    document.getElementById('settingsModal').style.display = 'none';
}

// ==================== INIT ====================
function init() {
    initializeData();
    renderPrincipals();
    renderTourNav();
    renderTourPreview('library');
    populateInfraSelect();
    renderCBET();

    // Restore saved theme
    if (localStorage.getItem('theme') === 'light') document.body.classList.add('light');

    // ── Typing animation ──
    let i = 0, j = 0;
    const title    = 'PC KINYANJUI TECHNICAL TRAINING INSTITUTE';
    const subtitle = 'Excellence in Technology';
    function type() {
        if (i < title.length) {
            document.getElementById('typingText').innerHTML += title.charAt(i++);
            setTimeout(type, 55);
        } else if (j < subtitle.length) {
            document.getElementById('subtitleText').innerHTML += subtitle.charAt(j++);
            setTimeout(type, 75);
        }
    }
    type();

    // ── Sidebar toggle ──
    const sidebar = document.getElementById('sidebar');
    document.getElementById('menuToggle').addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    // ── Close sidebar when clicking outside ──
    document.addEventListener('click', (e) => {
        if (sidebar.classList.contains('open') &&
            !sidebar.contains(e.target) &&
            !document.getElementById('menuToggle').contains(e.target)) {
            sidebar.classList.remove('open');
        }
    });

    // ── Settings modal ──
    document.getElementById('settingsBtn').addEventListener('click', () => {
        document.getElementById('settingsModal').style.display = 'flex';
    });
    document.querySelectorAll('.close-modal').forEach(el => {
        el.addEventListener('click', closeSettingsModal);
    });
    document.getElementById('settingsModal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('settingsModal')) closeSettingsModal();
    });

    // ── Sidebar 3D button press effect + navigation ──
    document.querySelectorAll('.sidebar-menu li').forEach(li => {
        li.addEventListener('mousedown', () => li.classList.add('pressing'));
        li.addEventListener('mouseup',   () => li.classList.remove('pressing'));
        li.addEventListener('mouseleave',() => li.classList.remove('pressing'));
        li.addEventListener('click', () => {
            document.querySelectorAll('.sidebar-menu li').forEach(l => l.classList.remove('active'));
            li.classList.add('active');
            navigateToRole(li.dataset.role);
        });
    });

    // ── Homepage 3D grid buttons ──
    document.querySelectorAll('.role-btn-3d').forEach(btn => {
        btn.addEventListener('click', () => {
            navigateToRole(btn.dataset.role);
        });
    });

    // ── Login ──
    document.getElementById('loginBtn').addEventListener('click', handleLogin);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && document.getElementById('loginFormContainer').style.display === 'block') {
            handleLogin();
        }
    });

    // ── Logout ──
    document.getElementById('logoutBtn').addEventListener('click', () => {
        sessionStorage.clear();
        showHome();
    });

    // ── Theme toggle ──
    document.getElementById('themeToggle').addEventListener('click', () => {
        document.body.classList.toggle('light');
        localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
        const btn = document.getElementById('themeToggle');
        btn.innerHTML = document.body.classList.contains('light')
            ? '<i class="fas fa-sun"></i> Light Mode'
            : '<i class="fas fa-moon"></i> Dark Mode';
    });

    // ── Settings modal ──
    document.getElementById('settingsBtn').addEventListener('click', () => {
        document.getElementById('settingsModal').style.display = 'flex';
    });
    document.querySelectorAll('.close-modal').forEach(el => {
        el.addEventListener('click', closeSettingsModal);
    });
    document.getElementById('settingsModal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('settingsModal')) closeSettingsModal();
    });

    // ── Close sidebar on outside click ──
    document.addEventListener('click', (e) => {
        if (sidebar.classList.contains('open') &&
            !sidebar.contains(e.target) &&
            !document.getElementById('menuToggle').contains(e.target)) {
            sidebar.classList.remove('open');
        }
    });

    // ── Auto-login if session exists ──
    const saved = sessionStorage.getItem('currentUser');
    if (saved) {
        const u = JSON.parse(saved);
        selectedRole = u.role;
        showDashboard(u.role, u);
    }
}

document.addEventListener('DOMContentLoaded', init);