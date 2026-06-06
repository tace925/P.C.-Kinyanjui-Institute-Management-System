// ==================== INITIALIZE LOCALSTORAGE ====================
function initializeData() {
    if (!localStorage.getItem('pck_institute_v2')) {
        const demoData = {
            schoolInfo: {
                logo: "https://placehold.co/100x100/00c3a0/white?text=PCK",
                name: "P.C. Kinyanjui Institute",
                motto: "State Dept. for Technical & Vocational Education • Nairobi"
            },
            principals: [
                { id: 1, name: "Dr. James Mwangi", photo: "https://randomuser.me/api/portraits/men/32.jpg", startYear: 2010, endYear: 2015, isCurrent: false },
                { id: 2, name: "Prof. Sarah Akinyi", photo: "https://randomuser.me/api/portraits/women/68.jpg", startYear: 2015, endYear: 2020, isCurrent: false },
                { id: 3, name: "Dr. Peter Omondi", photo: "https://randomuser.me/api/portraits/men/45.jpg", startYear: 2020, endYear: 2024, isCurrent: false },
                { id: 4, name: "Dr. Elizabeth Wanjiku", photo: "https://randomuser.me/api/portraits/women/89.jpg", startYear: 2024, endYear: null, isCurrent: true }
            ],
            schoolTour: {
                library: { images: ["https://placehold.co/400x300/00c3a0/white?text=Library+Image+1", "https://placehold.co/400x300/00c3a0/white?text=Library+Image+2"], videos: [] },
                sports: { images: ["https://placehold.co/400x300/00c3a0/white?text=Sports+Field"], videos: [] },
                hostel_m: { images: ["https://placehold.co/400x300/00c3a0/white?text=Male+Hostel"], videos: [] },
                hostel_f: { images: ["https://placehold.co/400x300/00c3a0/white?text=Female+Hostel"], videos: [] },
                field: { images: ["https://placehold.co/400x300/00c3a0/white?text=Main+Field"], videos: [] }
            },
            departments: ['Computer Studies', 'Hospitality', 'Automotive Engineering', 'Electrical Engineering', 'Civil Engineering', 'Business'],
            students: [
                { id: 'STU-2026-20669', name: 'John Mwangi', department: 'Computer Studies', class: 'Form 3C', passcode: '1234', phone: '0712345678', feeBalance: 15000, attendance: { total: 45, attended: 38 }, examHistory: {} },
                { id: 'STU-2026-20670', name: 'Sarah Achieng', department: 'Computer Studies', class: 'Form 3C', passcode: '5678', phone: '0723456789', feeBalance: 25000, attendance: { total: 45, attended: 35 }, examHistory: {} }
            ],
            classReps: [{ id: 'STU-2026-20669', name: 'John Mwangi', department: 'Computer Studies', class: 'Form 3C', passcode: 'REP-4321' }],
            lecturers: [{ id: 'LEC-2026-001', name: 'Jane Wanjiku', department: 'Computer Studies', unit: 'ICT/OS/CS/CR/05/6', password: 'lec1234' }],
            classTeachers: [{ id: 'TCH-2026-001', name: 'James Otieno', department: 'Computer Studies', password: 'tch1234' }],
            hods: [{ id: 'HOD-2026-001', name: 'Dr. Jane Kamau', department: 'Computer Studies', password: 'hod1234' }],
            deos: [{ id: 'DEO-2026-001', name: 'Alice Moraa', department: 'Computer Studies', password: 'deo1234' }],
            finance: [{ id: 'FIN-001', name: 'Finance Officer', password: 'finance123' }],
            deputyAcad: { id: 'DEP-ACAD-001', name: 'Dr. Charles Otieno', password: 'deputyacad123' },
            deputyInfra: { id: 'DEP-INFRA-001', name: 'Eng. Peter Maina', password: 'deputyinfra123' },
            examOffice: { id: 'EXAM-001', name: 'Exam Officer', password: 'exam123' },
            dean: { id: 'DEAN-001', name: 'Dean of Students', password: 'dean123', kitcoPasswords: [] },
            admin: { password: 'Admin@2026' },
            examRegistrations: [],
            noticeboard: [{ id: 'n1', sender: 'System', message: 'Welcome to PCK Institute', timestamp: new Date().toISOString(), recipient: 'all' }]
        };
        localStorage.setItem('pck_institute_v2', JSON.stringify(demoData));
    }
}

function getData() { return JSON.parse(localStorage.getItem('pck_institute_v2')); }
function saveData(data) { localStorage.setItem('pck_institute_v2', JSON.stringify(data)); }

// ==================== RENDER PRINCIPAL CARDS (Horizontal) ====================
function renderPrincipals() {
    const data = getData();
    const container = document.getElementById('principalsContainer');
    if (!container) return;
    container.innerHTML = data.principals.map(p => `
        <div class="principal-card">
            ${p.isCurrent ? '<span class="current-badge"><i class="fas fa-circle"></i> CURRENT</span>' : ''}
            <img src="${p.photo}" class="principal-photo" alt="${p.name}">
            <div class="principal-name">${p.name}</div>
            <div class="principal-years">${p.startYear} — ${p.endYear || 'Present'}</div>
        </div>
    `).join('');
}

// ==================== RENDER SCHOOL TOUR ====================
let currentTourLocation = 'library';

function renderTour(location) {
    const data = getData();
    const media = data.schoolTour[location];
    if (!media) return;
    const container = document.getElementById('tourMedia');
    container.innerHTML = `
        <div class="media-gallery">
            ${media.images.map(img => `<div class="media-item"><img src="${img}" alt="Tour image"></div>`).join('')}
            ${media.videos.map(vid => `<div class="media-item"><video controls src="${vid}"></video></div>`).join('')}
        </div>
        ${media.images.length === 0 && media.videos.length === 0 ? '<p>No media yet. Admin can upload.</p>' : ''}
    `;
}

// ==================== LOGIN HANDLING ====================
let selectedRole = null;

function showLoginForm(role) {
    selectedRole = role;
    document.getElementById('schoolInfoPanel').style.display = 'none';
    document.getElementById('loginFormContainer').style.display = 'block';
    document.getElementById('dashboardContainer').style.display = 'none';
    
    const loginFields = document.getElementById('loginFields');
    let html = '';
    const titles = {
        student: 'Student Login', classrep: 'Class Rep Login', lecturer: 'Lecturer Login',
        classteacher: 'Class Teacher Login', hod: 'H.O.D Login', deo: 'D.E.O Login',
        finance: 'Finance Login', deputy_acad: 'Deputy Principal (Academics)', deputy_infra: 'Deputy Principal (Infrastructure)',
        examoffice: 'Exam Office Login', dean: 'Dean of Students Login', admin: 'System Admin Login'
    };
    document.getElementById('loginTitle').innerHTML = `<i class="fas fa-sign-in-alt"></i> ${titles[role]}`;
    
    if (role === 'student') html = `<input type="text" id="loginId" placeholder="Admission Number (e.g., STU-2026-20669)" class="login-input"><input type="password" id="loginPass" placeholder="Passcode" class="login-input">`;
    else if (role === 'classrep') html = `<input type="text" id="loginId" placeholder="Admission Number" class="login-input"><input type="password" id="loginPass" placeholder="Class Rep Password" class="login-input">`;
    else if (role === 'lecturer' || role === 'classteacher' || role === 'hod' || role === 'deo' || role === 'finance' || role === 'examoffice' || role === 'dean')
        html = `<input type="text" id="loginId" placeholder="Staff Number" class="login-input"><input type="password" id="loginPass" placeholder="Password" class="login-input">`;
    else if (role === 'deputy_acad' || role === 'deputy_infra')
        html = `<input type="password" id="loginPass" placeholder="Password" class="login-input">`;
    else if (role === 'admin')
        html = `<input type="password" id="loginPass" placeholder="Admin Password" class="login-input">`;
    
    loginFields.innerHTML = html;
}

function handleLogin() {
    const data = getData();
    const role = selectedRole;
    const id = document.getElementById('loginId')?.value;
    const pass = document.getElementById('loginPass')?.value;
    let user = null;
    
    if (role === 'student') user = data.students.find(s => s.id === id && s.passcode === pass);
    else if (role === 'classrep') user = data.classReps.find(r => r.id === id && r.passcode === pass);
    else if (role === 'lecturer') user = data.lecturers.find(l => l.id === id && l.password === pass);
    else if (role === 'classteacher') user = data.classTeachers.find(c => c.id === id && c.password === pass);
    else if (role === 'hod') user = data.hods.find(h => h.id === id && h.password === pass);
    else if (role === 'deo') user = data.deos.find(d => d.id === id && d.password === pass);
    else if (role === 'finance') user = data.finance.find(f => f.id === id && f.password === pass);
    else if (role === 'deputy_acad' && pass === data.deputyAcad.password) user = data.deputyAcad;
    else if (role === 'deputy_infra' && pass === data.deputyInfra.password) user = data.deputyInfra;
    else if (role === 'examoffice' && pass === data.examOffice.password) user = data.examOffice;
    else if (role === 'dean' && pass === data.dean.password) user = data.dean;
    else if (role === 'admin' && pass === data.admin.password) user = { role: 'admin' };
    
    if (user) {
        sessionStorage.setItem('currentUser', JSON.stringify({ role, ...user }));
        showDashboard(role, user);
    } else {
        alert('Invalid credentials');
    }
}

// ==================== DASHBOARD (Simplified - Keeps Original Features) ====================
function showDashboard(role, user) {
    document.getElementById('schoolInfoPanel').style.display = 'none';
    document.getElementById('loginFormContainer').style.display = 'none';
    document.getElementById('dashboardContainer').style.display = 'block';
    document.getElementById('dashboardTitle').innerHTML = `<i class="fas fa-tachometer-alt"></i> ${role.toUpperCase()} Dashboard`;
    
    let content = `<div class="stats-grid"><div class="stat-card"><i class="fas fa-check-circle"></i><h3>Welcome</h3><p>${user.name || user.id || 'User'}</p></div></div>
    <div class="form-card"><h3>Noticeboard</h3><div class="noticeboard" id="noticeboardPanel"></div></div>`;
    
    if (role === 'admin') {
        content += `<div class="form-card"><h3>Admin Controls</h3>
        <button class="btn-secondary" onclick="document.getElementById('adminPrincipalControls').style.display='block'">Manage Principals</button>
        <button class="btn-secondary" onclick="document.getElementById('adminTourControls').style.display='block'">Manage Tour Media</button>
        <button class="btn-success" onclick="exportBackup()">Backup Data</button>
        <button class="btn-danger" onclick="resetSystem()">Reset System</button></div>`;
        document.getElementById('adminPrincipalControls').style.display = 'block';
        document.getElementById('adminTourControls').style.display = 'block';
    }
    
    document.getElementById('dashboardContent').innerHTML = content;
    renderNoticeboard();
}

function renderNoticeboard() {
    const data = getData();
    const container = document.getElementById('noticeboardPanel');
    if (!container) return;
    container.innerHTML = data.noticeboard.slice(-10).reverse().map(n => 
        `<div class="notice-message"><strong>${n.sender}</strong><br>${n.message}<br><small>${new Date(n.timestamp).toLocaleString()}</small></div>`
    ).join('');
}

// ==================== ADMIN FUNCTIONS ====================
function showAddPrincipalForm() {
    const name = prompt("Enter principal's full name:");
    if (!name) return;
    const startYear = parseInt(prompt("Start year:"));
    if (!startYear) return;
    const isCurrent = confirm("Is this the current principal?");
    const photo = prompt("Photo URL (or leave blank for default):") || "https://randomuser.me/api/portraits/men/50.jpg";
    const data = getData();
    if (isCurrent) data.principals.forEach(p => p.isCurrent = false);
    data.principals.push({ id: Date.now(), name, photo, startYear, endYear: null, isCurrent });
    saveData(data);
    renderPrincipals();
}

function uploadTourMedia() {
    const files = document.getElementById('tourImageUpload').files;
    if (!files.length) return;
    const data = getData();
    Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = e => {
            data.schoolTour[currentTourLocation].images.push(e.target.result);
            saveData(data);
            renderTour(currentTourLocation);
        };
        reader.readAsDataURL(file);
    });
}

function exportBackup() {
    const data = getData();
    const blob = new Blob([JSON.stringify(data)], {type: 'application/json'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'pck_backup.json';
    a.click();
}

function resetSystem() {
    if(confirm('WARNING: This will reset all data. Continue?')) {
        localStorage.removeItem('pck_institute_v2');
        initializeData();
        location.reload();
    }
}

// ==================== EVENT LISTENERS & INIT ====================
function init() {
    initializeData();
    renderPrincipals();
    renderTour('library');
    
    document.querySelectorAll('.sidebar-menu li').forEach(item => {
        item.addEventListener('click', () => {
            const role = item.dataset.role;
            document.querySelectorAll('.sidebar-menu li').forEach(li => li.classList.remove('active'));
            item.classList.add('active');
            showLoginForm(role);
        });
    });
    
    document.querySelectorAll('.tour-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.tour-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentTourLocation = tab.dataset.location;
            renderTour(currentTourLocation);
        });
    });
    
    document.getElementById('loginBtn')?.addEventListener('click', handleLogin);
    document.getElementById('logoutBtn')?.addEventListener('click', () => {
        sessionStorage.clear();
        location.reload();
    });
    document.getElementById('themeToggle')?.addEventListener('click', () => {
        document.body.classList.toggle('light');
        localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
    });
    document.getElementById('menuToggle')?.addEventListener('click', () => {
        document.getElementById('sidebar').classList.toggle('open');
    });
    
    if (localStorage.getItem('theme') === 'light') document.body.classList.add('light');
    
    const savedUser = sessionStorage.getItem('currentUser');
    if (savedUser) {
        const user = JSON.parse(savedUser);
        showDashboard(user.role, user);
    }
}

document.addEventListener('DOMContentLoaded', init);