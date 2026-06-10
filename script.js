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
            hods:         [{ id: 'HOD-2026-001',   name: 'Dr. Jane Kamau', department: 'Computer Studies', password: 'hod1234' }],
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

    const current = data.principals.find(p => p.isCurrent);
    const past = data.principals
        .filter(p => !p.isCurrent)
        .sort((a, b) => b.startYear - a.startYear);

    // Work out how many grid rows the right column needs
    // Right column is 2 cards wide, so rows = ceil(past.length / 2) but we only have 1 col on right
    // Featured spans all right-column rows so both sides align
    const rowSpan = past.length; // 1 past per row on the right (single col)

    const featuredHTML = current ? `
        <div class="mag-featured" style="grid-row: span ${rowSpan};">
            <img src="${current.photo}" alt="${current.name}"
                 onerror="this.src='https://placehold.co/400x500/6c3fcf/white?text=${encodeURIComponent(current.name)}'">
            <div class="mag-featured-overlay">
                <div class="mag-featured-tag">CURRENT PRINCIPAL</div>
                <div class="mag-featured-name">${current.name}</div>
                <div class="mag-featured-years">${current.startYear} — Present</div>
            </div>
        </div>
    ` : '';

    const pastHTML = past.map(p => `
        <div class="mag-small">
            <img src="${p.photo}" alt="${p.name}"
                 onerror="this.src='https://placehold.co/300x200/251b42/white?text=${encodeURIComponent(p.name)}'">
            <div class="mag-small-overlay">
                <div class="mag-small-name">${p.name}</div>
                <div class="mag-small-years">${p.startYear} — ${p.endYear}</div>
            </div>
        </div>
    `).join('');

    container.innerHTML = featuredHTML + pastHTML;
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
    showLoginForm(role);
    // Close sidebar on mobile
    document.getElementById('sidebar').classList.remove('open');
}

function showHome() {
    document.getElementById('schoolInfoPanel').style.display = 'block';
    document.getElementById('loginFormContainer').style.display = 'none';
    document.getElementById('dashboardContainer').style.display = 'none';
    document.querySelectorAll('.sidebar-menu li').forEach(l => l.classList.remove('active'));
    const homeBtn = document.querySelector('.sidebar-menu li[data-role="home"]');
    if (homeBtn) homeBtn.classList.add('active');
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
    } else if (role === 'classrep') {
        content += `
            <div class="form-card">
                <h3><i class="fas fa-users"></i> Class Rep Portal</h3>
                <p>View class noticeboard, submit issues, and communicate with Class Teacher.</p>
            </div>`;
    } else if (role === 'lecturer') {
        content += `
            <div class="form-card">
                <h3><i class="fas fa-chalkboard-user"></i> Lecturer Portal</h3>
                <p>Mark attendance, upload course materials, and view your assigned units.</p>
            </div>`;
    } else if (role === 'classteacher') {
        content += `
            <div class="form-card">
                <h3><i class="fas fa-chalkboard"></i> Class Teacher Portal</h3>
                <p>Manage student passcodes, view attendance summaries, and post notices.</p>
            </div>`;
    } else if (role === 'hod') {
        content += `
            <div class="form-card">
                <h3><i class="fas fa-user-tie"></i> H.O.D Approvals</h3>
                <p>Review and approve pending CBET exam registrations for your department.</p>
                ${renderHODRegistrations()}
            </div>`;
    } else if (role === 'deo') {
        content += `
            <div class="form-card">
                <h3><i class="fas fa-clipboard-list"></i> D.E.O Portal</h3>
                <p>Review student eligibility and approve exam entries department-wide.</p>
            </div>`;
    } else if (role === 'finance') {
        content += `
            <div class="form-card">
                <h3><i class="fas fa-coins"></i> Finance Clearance</h3>
                <p>Process student fee payments and mark exam fee clearances.</p>
                ${renderFinanceSummary()}
            </div>`;
    } else if (role === 'deputy_acad') {
        content += `
            <div class="form-card">
                <h3><i class="fas fa-crown"></i> Deputy Principal (Academics)</h3>
                <p>Oversee academic operations, approve department policies, manage academic calendar.</p>
            </div>`;
    } else if (role === 'deputy_infra') {
        content += `
            <div class="form-card">
                <h3><i class="fas fa-hard-hat"></i> Deputy Principal (Infrastructure)</h3>
                <p>Manage facilities, maintenance schedules, and infrastructure projects.</p>
            </div>`;
    } else if (role === 'examoffice') {
        content += `
            <div class="form-card">
                <h3><i class="fas fa-building"></i> Exam Office</h3>
                <p>Finalise exam entry lists, generate registration reports, and manage timetables.</p>
            </div>`;
    } else if (role === 'dean') {
        content += `
            <div class="form-card">
                <h3><i class="fas fa-heart"></i> Dean of Students</h3>
                <p>Manage student welfare, disciplinary cases, and student representative activities.</p>
            </div>`;
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
        <div class="form-card">
            <h3><i class="fas fa-shield-alt"></i> System Admin Panel</h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem;margin-top:1rem;">
                <button class="btn-primary" onclick="alert('Coming soon: Add/edit staff accounts')">
                    <i class="fas fa-users-cog"></i> Manage Staff
                </button>
                <button class="btn-secondary" onclick="showAddPrincipalForm()">
                    <i class="fas fa-user-plus"></i> Add Principal
                </button>
                <button class="btn-secondary" onclick="alert('Coming soon: Noticeboard broadcast')">
                    <i class="fas fa-bullhorn"></i> Post Notice
                </button>
                <button class="btn-success" onclick="alert('Coming soon: Export reports')">
                    <i class="fas fa-file-export"></i> Export Data
                </button>
            </div>
        </div>`;
}

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
        id:           regId,
        studentId,
        status:       'pending_hod',
        units:        selectedUnits,
        totalExamFee: totalFee,
        prevExam:     document.getElementById('prevExam').value || 'N/A',
        submittedDate: new Date().toISOString(),
        hodApproved:   false,
        financeCleared:false,
        deoApproved:   false,
        examApproved:  false
    });

    saveData(data);
    alert(`✅ Registration ${regId} submitted successfully!\nTotal Exam Fee: KSh ${totalFee.toLocaleString()}\nAwaiting H.O.D approval.`);
    showDashboard('student', data.students.find(s => s.id === studentId));
};

function renderStudentExamTracking(student) {
    const data = getData();
    const regs = data.examRegistrations.filter(r => r.studentId === student.id);

    const attPct = student.attendance
        ? Math.round((student.attendance.attended / student.attendance.total) * 100)
        : 0;

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
        const rows = regs.map(reg => {
            const statusMap = {
                pending_hod:    '🕒 Awaiting HOD',
                pending_finance:'💰 Awaiting Payment',
                pending_deo:    '📋 Awaiting DEO',
                approved:       '✅ Approved'
            };
            return `<tr style="border-bottom:1px solid var(--border);">
                <td style="padding:0.5rem;">${reg.id}</td>
                <td style="padding:0.5rem;">${reg.units.length}</td>
                <td style="padding:0.5rem;">KSh ${reg.totalExamFee.toLocaleString()}</td>
                <td style="padding:0.5rem;">${statusMap[reg.status] || reg.status}</td>
            </tr>`;
        }).join('');

        html += `<div class="form-card">
            <h3><i class="fas fa-tasks"></i> My Exam Registrations</h3>
            <table style="width:100%;border-collapse:collapse;font-size:0.85rem;margin-top:0.5rem;">
                <thead>
                    <tr style="color:var(--purple-light);border-bottom:1px solid var(--border);">
                        <th style="padding:0.5rem;text-align:left;">Reg ID</th>
                        <th style="padding:0.5rem;text-align:left;">Units</th>
                        <th style="padding:0.5rem;text-align:left;">Fee</th>
                        <th style="padding:0.5rem;text-align:left;">Status</th>
                    </tr>
                </thead>
                <tbody>${rows}</tbody>
            </table>
        </div>`;
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

    // ── Allow Enter key to submit login ──
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

    // ── Auto-login if session exists ──
    const saved = sessionStorage.getItem('currentUser');
    if (saved) {
        const u = JSON.parse(saved);
        selectedRole = u.role;
        showDashboard(u.role, u);
    }
}

document.addEventListener('DOMContentLoaded', init);