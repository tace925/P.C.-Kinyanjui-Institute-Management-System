// ==================== INITIALIZE LOCALSTORAGE ====================
function initializeData() {
    if (!localStorage.getItem('pck_users')) {
        // Demo Data with 2026 dates
        const demoData = {
            students: [
                { id: 'STU-2026-001', name: 'John Mwangi', class: 'Form 3C', passcode: '1234', feeBalance: 15000, attendance: 85, catMarks: { 'Mathematics': 78, 'Computer Science': 82 } },
                { id: 'STU-2026-002', name: 'Sarah Achieng', class: 'Form 3C', passcode: '5678', feeBalance: 5000, attendance: 92, catMarks: { 'Mathematics': 88, 'Computer Science': 91 } },
                { id: 'STU-2026-003', name: 'David Omondi', class: 'Form 4D', passcode: '9012', feeBalance: 25000, attendance: 70, catMarks: { 'Mathematics': 65, 'Physics': 72 } },
                { id: 'STU-2026-004', name: 'Faith Njeri', class: 'Form 2B', passcode: '3456', feeBalance: 8000, attendance: 95, catMarks: { 'English': 85, 'Biology': 88 } },
                { id: 'STU-2026-005', name: 'Brian Mutua', class: 'Form 1A', passcode: '7890', feeBalance: 12000, attendance: 78, catMarks: { 'Mathematics': 70, 'Kiswahili': 75 } }
            ],
            teachers: [
                { id: 'TCH-2026-001', name: 'James Otieno', subject: 'Mathematics', password: 'tech254' },
                { id: 'TCH-2026-002', name: 'Mary Wanjiku', subject: 'Computer Science', password: 'tech254' },
                { id: 'TCH-2026-003', name: 'Peter Kimani', subject: 'Physics', password: 'tech254' }
            ],
            courses: [
                { id: 'CRS-001', name: 'Mathematics', code: 'MATH101', fee: 5000 },
                { id: 'CRS-002', name: 'Computer Science', code: 'CS101', fee: 6000 },
                { id: 'CRS-003', name: 'Physics', code: 'PHY101', fee: 5500 },
                { id: 'CRS-004', name: 'English', code: 'ENG101', fee: 4500 },
                { id: 'CRS-005', name: 'Biology', code: 'BIO101', fee: 5200 }
            ],
            classes: ['Form 1A', 'Form 2B', 'Form 3C', 'Form 4D'],
            feePayments: []
        };
        localStorage.setItem('pck_users', JSON.stringify(demoData));
    }
}

// ==================== HELPER FUNCTIONS ====================
function getData() {
    return JSON.parse(localStorage.getItem('pck_users'));
}

function saveData(data) {
    localStorage.setItem('pck_users', JSON.stringify(data));
}

// ==================== RENDER DASHBOARDS ====================
function renderAdminDashboard() {
    const data = getData();
    document.getElementById('statsGrid').style.display = 'grid';
    document.getElementById('totalStudents').innerText = data.students.length;
    document.getElementById('totalTeachers').innerText = data.teachers.length;
    document.getElementById('totalCourses').innerText = data.courses.length;
    const totalRevenue = data.feePayments.reduce((sum, p) => sum + p.amount, 0);
    document.getElementById('totalRevenue').innerText = totalRevenue.toLocaleString();

    const content = `
        <div class="form-card">
            <h3><i class="fas fa-user-plus"></i> Register Student</h3>
            <div class="form-group"><label>Name</label><input type="text" id="stuName" placeholder="Full Name"></div>
            <div class="form-group"><label>Class</label><select id="stuClass">${data.classes.map(c => `<option>${c}</option>`).join('')}</select></div>
            <div class="form-group"><label>Passcode (4 digits)</label><input type="text" id="stuPasscode" maxlength="4"></div>
            <button class="btn-secondary" onclick="registerStudent()">Register Student</button>
        </div>
        <div class="form-card">
            <h3><i class="fas fa-chalkboard-user"></i> Register Teacher</h3>
            <div class="form-group"><label>Name</label><input type="text" id="teacherName"></div>
            <div class="form-group"><label>Staff Number</label><input type="text" id="teacherId" placeholder="TCH-2026-XXX"></div>
            <div class="form-group"><label>Subject</label><input type="text" id="teacherSubject"></div>
            <button class="btn-secondary" onclick="registerTeacher()">Register Teacher</button>
        </div>
        <div class="table-container"><h3 style="padding:1rem">All Students</h3>
            <table><thead><tr><th>Admission No</th><th>Name</th><th>Class</th><th>Fee Balance (KES)</th><th>Passcode</th></tr></thead><tbody>
            ${data.students.map(s => `<tr><td>${s.id}</td><td>${s.name}</td><td>${s.class}</td><td>${s.feeBalance.toLocaleString()}</td><td>${s.passcode}</td></tr>`).join('')}
            </tbody></table>
        </div>
    `;
    document.getElementById('dashboardContent').innerHTML = content;
}

function renderTeacherDashboard() {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    const data = getData();
    const content = `
        <div class="form-card">
            <h3><i class="fas fa-qrcode"></i> Generate Student Passcode</h3>
            <select id="genStudentSelect">${data.students.map(s => `<option value="${s.id}">${s.name} (${s.id})</option>`).join('')}</select>
            <button class="btn-secondary" onclick="generateNewPasscode()">Generate New Passcode</button>
            <p id="passcodeResult" style="margin-top:10px;color:var(--accent)"></p>
        </div>
        <div class="form-card">
            <h3><i class="fas fa-check-circle"></i> Mark Attendance</h3>
            <select id="attStudentSelect">${data.students.map(s => `<option value="${s.id}">${s.name}</option>`).join('')}</select>
            <button class="btn-secondary" onclick="markAttendance()">Mark Present (+5%)</button>
        </div>
        <div class="form-card">
            <h3><i class="fas fa-pen-fancy"></i> Enter CAT Marks</h3>
            <select id="markStudentSelect">${data.students.map(s => `<option value="${s.id}">${s.name}</option>`).join('')}</select>
            <input type="text" id="catSubject" placeholder="Subject (e.g., Mathematics)">
            <input type="number" id="catScore" placeholder="Score (0-100)">
            <button class="btn-secondary" onclick="enterCatMarks()">Save CAT Mark</button>
        </div>
        <div class="table-container"><h3 style="padding:1rem">Class Report</h3>
            <table><thead><tr><th>Student</th><th>Class</th><th>Attendance %</th><th>Top CAT</th></tr></thead><tbody>
            ${data.students.map(s => `<tr><td>${s.name}</td><td>${s.class}</td><td>${s.attendance}%</td><td>${Object.values(s.catMarks || {}).slice(0,1)[0] || '-'}</td></tr>`).join('')}
            </tbody></table>
        </div>
    `;
    document.getElementById('dashboardContent').innerHTML = content;
}

function renderStudentDashboard() {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    const data = getData();
    const student = data.students.find(s => s.id === currentUser.id);
    if (!student) return;
    const content = `
        <div class="stats-grid" style="margin-bottom:1rem">
            <div class="stat-card"><i class="fas fa-chart-line"></i><h3>Attendance</h3><p class="stat-number">${student.attendance}%</p></div>
            <div class="stat-card"><i class="fas fa-coins"></i><h3>Fee Balance</h3><p class="stat-number">KES ${student.feeBalance.toLocaleString()}</p></div>
        </div>
        <div class="table-container"><h3 style="padding:1rem"><i class="fas fa-calendar-check"></i> My Attendance Record</h3>
            <table><tr><th>Status</th><td>Current: ${student.attendance}% present</td></tr></table>
        </div>
        <div class="table-container"><h3 style="padding:1rem"><i class="fas fa-chart-simple"></i> My CAT Marks</h3>
            <table><thead><tr><th>Subject</th><th>Score</th></tr></thead><tbody>
            ${Object.entries(student.catMarks || {}).map(([sub, mark]) => `<tr><td>${sub}</td><td>${mark}</td></tr>`).join('')}
            </tbody></table>
        </div>
        <div class="form-card"><h3><i class="fas fa-id-card"></i> My Profile</h3><p><strong>Name:</strong> ${student.name}</p><p><strong>Admission:</strong> ${student.id}</p><p><strong>Class:</strong> ${student.class}</p></div>
    `;
    document.getElementById('dashboardContent').innerHTML = content;
}

// ==================== ADMIN ACTIONS ====================
window.registerStudent = function() {
    const name = document.getElementById('stuName')?.value;
    const className = document.getElementById('stuClass')?.value;
    const passcode = document.getElementById('stuPasscode')?.value;
    if (!name || !passcode) return alert('Fill all fields');
    const data = getData();
    const newId = `STU-2026-${String(data.students.length + 101).slice(-3)}`;
    data.students.push({ id: newId, name, class: className, passcode, feeBalance: 0, attendance: 0, catMarks: {} });
    saveData(data);
    alert(`Student ${name} registered with ID: ${newId}`);
    renderAdminDashboard();
};

window.registerTeacher = function() {
    const name = document.getElementById('teacherName')?.value;
    const id = document.getElementById('teacherId')?.value;
    const subject = document.getElementById('teacherSubject')?.value;
    if (!name || !id || !subject) return alert('Fill all fields');
    const data = getData();
    data.teachers.push({ id, name, subject, password: 'tech254' });
    saveData(data);
    alert(`Teacher ${name} registered`);
    renderAdminDashboard();
};

// ==================== TEACHER ACTIONS ====================
window.generateNewPasscode = function() {
    const studentId = document.getElementById('genStudentSelect')?.value;
    const data = getData();
    const student = data.students.find(s => s.id === studentId);
    if (student) {
        const newPass = Math.floor(1000 + Math.random() * 9000).toString();
        student.passcode = newPass;
        saveData(data);
        document.getElementById('passcodeResult').innerHTML = `New passcode for ${student.name}: <strong>${newPass}</strong>`;
    }
};

window.markAttendance = function() {
    const studentId = document.getElementById('attStudentSelect')?.value;
    const data = getData();
    const student = data.students.find(s => s.id === studentId);
    if (student) {
        student.attendance = Math.min(100, student.attendance + 5);
        saveData(data);
        alert(`Attendance updated for ${student.name} to ${student.attendance}%`);
        renderTeacherDashboard();
    }
};

window.enterCatMarks = function() {
    const studentId = document.getElementById('markStudentSelect')?.value;
    const subject = document.getElementById('catSubject')?.value;
    const score = parseInt(document.getElementById('catScore')?.value);
    if (!subject || isNaN(score)) return alert('Valid subject & score required');
    const data = getData();
    const student = data.students.find(s => s.id === studentId);
    if (student) {
        if (!student.catMarks) student.catMarks = {};
        student.catMarks[subject] = score;
        saveData(data);
        alert(`CAT mark saved: ${subject} = ${score}`);
        renderTeacherDashboard();
    }
};

// ==================== LOGIN LOGIC ====================
function handleLogin(role, credentials) {
    const data = getData();
    if (role === 'admin' && credentials.password === 'admin254') {
        sessionStorage.setItem('currentUser', JSON.stringify({ role: 'admin' }));
        showDashboard('admin');
        return true;
    }
    if (role === 'teacher') {
        const teacher = data.teachers.find(t => t.id === credentials.staffNo && t.password === credentials.password);
        if (teacher) {
            sessionStorage.setItem('currentUser', JSON.stringify({ role: 'teacher', id: teacher.id, name: teacher.name }));
            showDashboard('teacher');
            return true;
        }
    }
    if (role === 'student') {
        const student = data.students.find(s => s.id === credentials.admissionNo && s.passcode === credentials.passcode);
        if (student) {
            sessionStorage.setItem('currentUser', JSON.stringify({ role: 'student', id: student.id, name: student.name }));
            showDashboard('student');
            return true;
        }
    }
    alert('Invalid credentials. Contact administration.');
    return false;
}

function showDashboard(role) {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('dashboardContainer').style.display = 'block';
    document.getElementById('statsGrid').style.display = role === 'admin' ? 'grid' : 'none';
    if (role === 'admin') renderAdminDashboard();
    else if (role === 'teacher') renderTeacherDashboard();
    else if (role === 'student') renderStudentDashboard();
}

// ==================== EVENT LISTENERS ====================
function initEventListeners() {
    document.getElementById('studentLoginBtn').onclick = () => {
        const admissionNo = document.getElementById('studentAdmission').value;
        const passcode = document.getElementById('studentPasscode').value;
        handleLogin('student', { admissionNo, passcode });
    };
    document.getElementById('teacherLoginBtn').onclick = () => {
        const staffNo = document.getElementById('teacherStaffNo').value;
        const password = document.getElementById('teacherPassword').value;
        handleLogin('teacher', { staffNo, password });
    };
    document.getElementById('adminLoginBtn').onclick = () => {
        const password = document.getElementById('adminPassword').value;
        handleLogin('admin', { password });
    };
    document.getElementById('logoutBtn').onclick = () => {
        sessionStorage.clear();
        location.reload();
    };
    // Role selector tabs
    document.querySelectorAll('.role-btn').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.role-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const role = btn.dataset.role;
            document.querySelectorAll('.login-form').forEach(form => form.classList.remove('active'));
            document.getElementById(`${role}Login`).classList.add('active');
        };
    });
}

// ==================== THEME TOGGLE ====================
function initTheme() {
    const toggle = document.getElementById('themeToggle');
    const saved = localStorage.getItem('pck_theme');
    if (saved === 'light') document.body.classList.add('light');
    toggle.onclick = () => {
        document.body.classList.toggle('light');
        localStorage.setItem('pck_theme', document.body.classList.contains('light') ? 'light' : 'dark');
        toggle.innerHTML = document.body.classList.contains('light') ? '<i class="fas fa-sun"></i> Light Mode' : '<i class="fas fa-moon"></i> Dark Mode';
    };
}

// ==================== INIT ====================
initializeData();
initTheme();
initEventListeners();

// Auto-restore session
const savedUser = sessionStorage.getItem('currentUser');
if (savedUser) {
    const user = JSON.parse(savedUser);
    showDashboard(user.role);
} else {
    document.getElementById('loginContainer').style.display = 'flex';
    document.getElementById('dashboardContainer').style.display = 'none';
}