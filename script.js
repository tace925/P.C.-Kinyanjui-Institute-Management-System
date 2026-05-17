// ==================== HELPER FUNCTIONS ====================
function getData() {
    const data = localStorage.getItem('pck_users');
    return data ? JSON.parse(data) : {
        students: [], teachers: [], hods: [],
        courses: [], classes: [], feePayments: [], notices: []
    };
}

function saveData(data) {
    localStorage.setItem('pck_users', JSON.stringify(data));
}

// ==================== INITIALIZE LOCALSTORAGE ====================
function initializeData() {
    if (!localStorage.getItem('pck_users')) {
        const demoData = {
            students: [
                {
                    id: 'STU-2026-001',
                    name: 'John Mwangi',
                    class: 'Form 3C',
                    passcode: 'PCK-STU-2026-001-4832',
                    feeBalance: 15000,
                    attendance: 85,
                    catMarks: { 'Mathematics': 78, 'Computer Science': 82 },
                    category: 'Diploma',
                    course: 'Computer Studies',
                    block: 'A',
                    term: 'Term 1',
                    phone: '0712345678'
                }
            ],
            teachers: [
                {
                    id: 'TCH-2026-001',
                    firstName: 'James',
                    middleName: '',
                    lastName: 'Otieno',
                    name: 'James Otieno',
                    subject: 'Mathematics',
                    block: 'B',
                    password: 'TCH-JO-4521',
                    department: 'Computer Studies'
                }
            ],
            hods: [
                {
                    id: 'HOD-001',
                    name: 'Dr. Jane Kamau',
                    firstName: 'Jane',
                    lastName: 'Kamau',
                    department: 'Computer Studies',
                    phone: '0721111111',
                    password: 'HOD-JK-4832'
                }
            ],
            courses: [
                { id: 'CRS-001', name: 'Mathematics', code: 'MATH101', fee: 5000 },
                { id: 'CRS-002', name: 'Computer Science', code: 'CS101', fee: 6000 },
                { id: 'CRS-003', name: 'Physics', code: 'PHY101', fee: 5500 },
                { id: 'CRS-004', name: 'English', code: 'ENG101', fee: 4500 },
                { id: 'CRS-005', name: 'Biology', code: 'BIO101', fee: 5200 }
            ],
            classes: ['Form 1A', 'Form 2B', 'Form 3C', 'Form 4D'],
            feePayments: [],
            notices: []
        };
        localStorage.setItem('pck_users', JSON.stringify(demoData));
    }
}

// ==================== SHOW DASHBOARD ====================
function showDashboard(role) {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('dashboardContainer').style.display = 'block';
    document.getElementById('statsGrid').style.display =
        (role === 'admin' || role === 'deputy') ? 'grid' : 'none';

    if (role === 'deputy') {
        document.getElementById('dashboardTitle').innerHTML =
            '<i class="fas fa-crown"></i> Deputy Principal Dashboard';
        renderDeputyDashboard();
    } else if (role === 'admin') {
        document.getElementById('dashboardTitle').innerHTML =
            '<i class="fas fa-user-shield"></i> H.O.D Dashboard';
        renderAdminDashboard();
    } else if (role === 'teacher') {
        document.getElementById('dashboardTitle').innerHTML =
            '<i class="fas fa-chalkboard-user"></i> Teacher Dashboard';
        renderTeacherDashboard();
    } else if (role === 'student') {
        document.getElementById('dashboardTitle').innerHTML =
            '<i class="fas fa-user-graduate"></i> Student Dashboard';
        renderStudentDashboard();
    }
}

// ==================== LOGIN LOGIC ====================
function handleLogin(role, credentials) {
    const data = getData();

    if (role === 'deputy' && credentials.password === 'Dputy254') {
        sessionStorage.setItem('currentUser', JSON.stringify({
            role: 'deputy', name: 'Deputy Principal'
        }));
        showDashboard('deputy');
        return true;
    }

    if (role === 'admin') {
        const hod = data.hods?.find(h => h.password === credentials.password);
        if (hod) {
            sessionStorage.setItem('currentUser', JSON.stringify({
                role: 'admin', name: hod.name,
                hodId: hod.id, department: hod.department
            }));
            showDashboard('admin');
            return true;
        }
        alert('❌ Invalid H.O.D password. Contact Deputy.');
        return false;
    }

    if (role === 'teacher') {
        const teacher = data.teachers.find(
            t => t.id === credentials.staffNo && t.password === credentials.password
        );
        if (teacher) {
            sessionStorage.setItem('currentUser', JSON.stringify({
                role: 'teacher', id: teacher.id,
                name: teacher.name, department: teacher.department
            }));
            showDashboard('teacher');
            return true;
        }
        alert('❌ Invalid teacher credentials. Contact H.O.D.');
        return false;
    }

    if (role === 'student') {
        const student = data.students.find(
            s => s.id === credentials.admissionNo && s.passcode === credentials.passcode
        );
        if (student) {
            sessionStorage.setItem('currentUser', JSON.stringify({
                role: 'student', id: student.id, name: student.name
            }));
            showDashboard('student');
            return true;
        }
        alert('❌ Invalid student credentials. Contact teacher.');
        return false;
    }

    alert('❌ Invalid credentials.');
    return false;
}

// ==================== RENDER DEPUTY DASHBOARD ====================
function renderDeputyDashboard() {
    const data = getData();
    document.getElementById('totalStudents').innerText = data.students.length;
    document.getElementById('totalTeachers').innerText = data.teachers.length;
    document.getElementById('totalCourses').innerText = data.courses.length;
    const totalRevenue = data.feePayments.reduce((sum, p) => sum + p.amount, 0);
    document.getElementById('totalRevenue').innerText = totalRevenue.toLocaleString();

    const content = `
        <div class="deputy-banner">
            <i class="fas fa-crown"></i>
            <div>
                <h3>Deputy Principal — PC Kinyanjui Technical Training Institute</h3>
                <p>Full system oversight</p>
            </div>
        </div>

        <div class="form-card">
            <h3 style="color:var(--accent-gold);">
                <i class="fas fa-key"></i> Generate H.O.D Password
            </h3>
            <div class="form-group">
                <label>First Name</label>
                <input type="text" id="hodFirstName" placeholder="First Name">
            </div>
            <div class="form-group">
                <label>Last Name</label>
                <input type="text" id="hodLastName" placeholder="Last Name">
            </div>
            <div class="form-group">
                <label>Phone Number</label>
                <input type="text" id="hodPhone" placeholder="07XX XXX XXX">
            </div>
            <div class="form-group">
                <label>Department</label>
                <select id="hodDepartment">
                    <option value="">-- Select Department --</option>
                    <option value="Computer Studies">Computer Studies</option>
                    <option value="Hospitality">Hospitality</option>
                    <option value="Electrical">Electrical</option>
                    <option value="Plumbing">Plumbing</option>
                    <option value="Motor Vehicle">Motor Vehicle</option>
                </select>
            </div>
            <button class="btn-secondary" onclick="generateHodPassword()">
                <i class="fas fa-key"></i> Generate H.O.D Password
            </button>
            <div class="gen-card" id="hodPasswordCard">
                <p style="color:var(--text-secondary); font-size:0.85rem;">Generated password:</p>
                <div class="gen-password" id="hodGeneratedPassword"></div>
                <p style="font-size:0.8rem; color:var(--text-secondary); text-align:center;">
                    Share with H.O.D — they use it to login
                </p>
            </div>
        </div>

        <div class="form-card">
            <h3 style="color:var(--accent-gold);">
                <i class="fas fa-chalkboard-user"></i> Generate Teacher Password
            </h3>
            <div class="form-group">
                <label>First Name</label>
                <input type="text" id="depTeacherFirstName" placeholder="First Name">
            </div>
            <div class="form-group">
                <label>Last Name</label>
                <input type="text" id="depTeacherLastName" placeholder="Last Name">
            </div>
            <div class="form-group">
                <label>Staff Number</label>
                <input type="text" id="depTeacherId" placeholder="TCH-2026-XXX">
            </div>
            <div class="form-group">
                <label>Subject</label>
                <input type="text" id="depTeacherSubject" placeholder="e.g. Mathematics">
            </div>
            <div class="form-group">
                <label>Department</label>
                <select id="depTeacherDept">
                    <option value="">-- Select Department --</option>
                    <option value="Computer Studies">Computer Studies</option>
                    <option value="Hospitality">Hospitality</option>
                    <option value="Electrical">Electrical</option>
                    <option value="Plumbing">Plumbing</option>
                    <option value="Motor Vehicle">Motor Vehicle</option>
                </select>
            </div>
            <button class="btn-secondary" onclick="generateTeacherPassword()">
                <i class="fas fa-key"></i> Generate Teacher Password
            </button>
            <div class="gen-card" id="teacherPasswordCard">
                <p style="color:var(--text-secondary); font-size:0.85rem;">Generated password:</p>
                <div class="gen-password" id="teacherGeneratedPassword"></div>
                <p style="font-size:0.8rem; color:var(--text-secondary); text-align:center;">
                    Share with Teacher
                </p>
            </div>
        </div>

        <div class="table-container">
            <h3 style="padding:1rem; color:var(--accent-gold);">
                <i class="fas fa-user-shield"></i> All H.O.Ds
            </h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Phone</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    ${(data.hods || []).map(h => `
                        <tr>
                            <td>${h.name}</td>
                            <td><span class="role-tag hod">${h.department}</span></td>
                            <td>${h.phone || '-'}</td>
                            <td style="font-family:monospace; color:var(--accent-gold);">${h.password}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>

        <div class="table-container">
            <h3 style="padding:1rem; color:var(--accent-gold);">
                <i class="fas fa-chart-bar"></i> Department Summary
            </h3>
            <table>
                <thead>
                    <tr>
                        <th>Department</th>
                        <th>Students</th>
                        <th>Teachers</th>
                        <th>H.O.D</th>
                    </tr>
                </thead>
                <tbody>
                    ${['Computer Studies','Hospitality','Electrical','Plumbing','Motor Vehicle'].map(dept => `
                        <tr>
                            <td>${dept}</td>
                            <td>${data.students.filter(s => s.course === dept).length}</td>
                            <td>${data.teachers.filter(t => t.department === dept).length}</td>
                            <td>${(data.hods || []).find(h => h.department === dept)?.name ||
                                '<span style="color:var(--danger)">Not assigned</span>'}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>

        <div class="form-card">
            <h3 style="color:var(--accent-gold);">
                <i class="fas fa-bullhorn"></i> Post Notice → H.O.Ds
            </h3>
            <div class="form-group">
                <label>Title</label>
                <input type="text" id="deputyNoticeTitle" placeholder="Notice title">
            </div>
            <div class="form-group">
                <label>Message</label>
                <textarea id="deputyNoticeMessage" placeholder="Write notice here..."
                style="width:100%; padding:0.8rem; background:var(--bg-elevated);
                border:1px solid var(--border); border-radius:10px;
                color:var(--text-primary); min-height:80px; resize:vertical;"></textarea>
            </div>
            <button class="btn-secondary" onclick="postNotice('deputy','hod')">
                <i class="fas fa-paper-plane"></i> Post to All H.O.Ds
            </button>
        </div>

        <div class="form-card">
            <h4 style="margin-bottom:1rem; color:var(--accent-gold);">
                <i class="fas fa-envelope-open"></i> Notices from H.O.Ds
            </h4>
            ${(getData().notices || []).filter(n => n.from === 'hod' && n.to === 'deputy').length === 0
                ? `<p style="color:var(--text-secondary);">No notices from H.O.Ds yet</p>`
                : (getData().notices || []).filter(n => n.from === 'hod' && n.to === 'deputy').map(n => `
                    <div style="background:var(--bg-elevated); border:1px solid var(--border);
                    border-radius:10px; padding:1rem; margin-bottom:0.8rem;">
                        <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem;">
                            <strong style="color:#a855f7;">
                                <i class="fas fa-user-shield"></i> H.O.D — ${n.department || ''}
                            </strong>
                            <small style="color:var(--text-secondary);">${n.date}</small>
                        </div>
                        <p style="font-weight:600; margin-bottom:0.3rem;">${n.title}</p>
                        <p style="color:var(--text-secondary); font-size:0.9rem;">${n.message}</p>
                    </div>
                `).join('')}
        </div>
    `;
    document.getElementById('dashboardContent').innerHTML = content;
}

// ==================== RENDER HOD DASHBOARD ====================
function renderAdminDashboard() {
    const data = getData();
    document.getElementById('statsGrid').style.display = 'grid';
    document.getElementById('totalStudents').innerText = data.students.length;
    document.getElementById('totalTeachers').innerText = data.teachers.length;
    document.getElementById('totalCourses').innerText = data.courses.length;
    const totalRevenue = data.feePayments.reduce((sum, p) => sum + p.amount, 0);
    document.getElementById('totalRevenue').innerText = totalRevenue.toLocaleString();

    const content = `
        <div style="background:var(--bg-elevated); border:1px solid var(--accent-gold);
        border-radius:12px; padding:1rem; margin-bottom:1.5rem; color:var(--accent-gold);">
            <i class="fas fa-user-shield"></i> <strong>Welcome, H.O.D</strong> —
            PC Kinyanjui Technical Training Institute
        </div>

        <div class="form-card">
            <h3><i class="fas fa-user-plus"></i> Register Student</h3>
            <div class="form-group">
                <label>Full Name</label>
                <input type="text" id="stuName" placeholder="Full Name">
            </div>
            <div class="form-group">
                <label>Admission Number</label>
                <input type="text" id="stuAdmission" placeholder="e.g. 2026001">
            </div>
            <div class="form-group">
                <label>Phone Number</label>
                <input type="text" id="stuPhone" placeholder="07XX XXX XXX">
            </div>
            <div class="form-group">
                <label>Class</label>
                <select id="stuClass">
                    ${data.classes.map(c => `<option>${c}</option>`).join('')}
                </select>
            </div>
            <div class="form-group">
                <label>Course Category</label>
                <select id="stuCategory" onchange="updateCourses()">
                    <option value="">-- Select Category --</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Certificate">Certificate</option>
                    <option value="Artisan">Artisan</option>
                </select>
            </div>
            <div class="form-group">
                <label>Course</label>
                <select id="stuCourse">
                    <option value="">-- Select Category First --</option>
                </select>
            </div>
            <div class="form-group">
                <label>Block</label>
                <select id="stuBlock">
                    <option value="">-- Select Block --</option>
                    <option value="A">Block A</option>
                    <option value="B">Block B</option>
                    <option value="C">Block C</option>
                    <option value="D">Block D</option>
                    <option value="E">Block E</option>
                    <option value="F">Block F</option>
                </select>
            </div>
            <div class="form-group">
                <label>Term</label>
                <select id="stuTerm">
                    <option value="Term 1">Term 1</option>
                    <option value="Term 2">Term 2</option>
                    <option value="Term 3">Term 3</option>
                </select>
            </div>
            <button class="btn-secondary" onclick="registerStudent()">
                <i class="fas fa-user-plus"></i> Register Student
            </button>
        </div>

        <div class="form-card">
            <h3><i class="fas fa-chalkboard-user"></i> Register Teacher</h3>
            <div class="form-group">
                <label>First Name</label>
                <input type="text" id="teacherFirstName" placeholder="First Name">
            </div>
            <div class="form-group">
                <label>Middle Name</label>
                <input type="text" id="teacherMiddleName" placeholder="Middle Name">
            </div>
            <div class="form-group">
                <label>Last Name</label>
                <input type="text" id="teacherLastName" placeholder="Last Name">
            </div>
            <div class="form-group">
                <label>Staff Number</label>
                <input type="text" id="teacherId" placeholder="TCH-2026-XXX">
            </div>
            <div class="form-group">
                <label>Subject / Course Teaching</label>
                <input type="text" id="teacherSubject" placeholder="e.g. Computer Studies">
            </div>
            <div class="form-group">
                <label>Block Assigned</label>
                <select id="teacherBlock">
                    <option value="">-- Select Block --</option>
                    <option value="A">Block A</option>
                    <option value="B">Block B</option>
                    <option value="C">Block C</option>
                    <option value="D">Block D</option>
                    <option value="E">Block E</option>
                    <option value="F">Block F</option>
                </select>
            </div>
            <button class="btn-secondary" onclick="registerTeacher()">
                <i class="fas fa-chalkboard-user"></i> Register Teacher
            </button>
        </div>

        <div class="table-container">
            <h3 style="padding:1rem; color:var(--accent-gold);">
                <i class="fas fa-users"></i> All Students
            </h3>
            <table>
                <thead>
                    <tr>
                        <th>Admission No</th><th>Name</th><th>Class</th>
                        <th>Category</th><th>Course</th><th>Block</th>
                        <th>Term</th><th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    ${data.students.map(s => `
                        <tr>
                            <td>${s.id}</td><td>${s.name}</td><td>${s.class}</td>
                            <td>${s.category || '-'}</td><td>${s.course || '-'}</td>
                            <td>${s.block || '-'}</td><td>${s.term || '-'}</td>
                            <td>${s.phone || '-'}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>

        <div class="table-container">
            <h3 style="padding:1rem; color:var(--accent-gold);">
                <i class="fas fa-chalkboard-user"></i> All Teachers
            </h3>
            <table>
                <thead>
                    <tr>
                        <th>Staff No</th><th>Full Name</th>
                        <th>Subject</th><th>Block</th>
                    </tr>
                </thead>
                <tbody>
                    ${data.teachers.map(t => `
                        <tr>
                            <td>${t.id}</td>
                            <td>${t.firstName || ''} ${t.middleName || ''} ${t.lastName || t.name || ''}</td>
                            <td>${t.subject}</td>
                            <td>${t.block || '-'}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>

        <div class="form-card">
            <h3 style="color:var(--accent-gold);">
                <i class="fas fa-bullhorn"></i> Notice Board
            </h3>
            <h4 style="margin-bottom:1rem;">
                <i class="fas fa-chalkboard-user"></i> Post Notice → Teachers
            </h4>
            <div class="form-group">
                <label>Title</label>
                <input type="text" id="hodTeacherTitle" placeholder="Notice title">
            </div>
            <div class="form-group">
                <label>Message</label>
                <textarea id="hodTeacherMessage" placeholder="Write notice here..."
                style="width:100%; padding:0.8rem; background:var(--bg-elevated);
                border:1px solid var(--border); border-radius:10px;
                color:var(--text-primary); min-height:80px; resize:vertical;"></textarea>
            </div>
            <button class="btn-secondary" onclick="postNotice('hod','teacher')">
                <i class="fas fa-paper-plane"></i> Post to Teachers
            </button>

            <hr style="border-color:var(--border); margin:1.5rem 0;">

            <h4 style="margin-bottom:1rem;">
                <i class="fas fa-user-graduate"></i> Post Notice → Students
            </h4>
            <div class="form-group">
                <label>Title</label>
                <input type="text" id="hodStudentTitle" placeholder="Notice title">
            </div>
            <div class="form-group">
                <label>Message</label>
                <textarea id="hodStudentMessage" placeholder="Write notice here..."
                style="width:100%; padding:0.8rem; background:var(--bg-elevated);
                border:1px solid var(--border); border-radius:10px;
                color:var(--text-primary); min-height:80px; resize:vertical;"></textarea>
            </div>
            <button class="btn-secondary" onclick="postNotice('hod','student')">
                <i class="fas fa-paper-plane"></i> Post to Students
            </button>

            <hr style="border-color:var(--border); margin:1.5rem 0;">

            <h4 style="margin-bottom:1rem;">
                <i class="fas fa-crown"></i> Send Notice → Deputy
            </h4>
            <div class="form-group">
                <label>Title</label>
                <input type="text" id="hodDeputyTitle" placeholder="Notice title">
            </div>
            <div class="form-group">
                <label>Message</label>
                <textarea id="hodDeputyMessage" placeholder="Write notice here..."
                style="width:100%; padding:0.8rem; background:var(--bg-elevated);
                border:1px solid var(--border); border-radius:10px;
                color:var(--text-primary); min-height:80px; resize:vertical;"></textarea>
            </div>
            <button class="btn-secondary" onclick="postNotice('hod','deputy')">
                <i class="fas fa-paper-plane"></i> Send to Deputy
            </button>

            <hr style="border-color:var(--border); margin:1.5rem 0;">

            <h4 style="margin-bottom:1rem; color:var(--accent-gold);">
                <i class="fas fa-crown"></i> Notices from Deputy
            </h4>
            ${(getData().notices || []).filter(n => n.from === 'deputy' && n.to === 'hod').length === 0
                ? `<p style="color:var(--text-secondary);">No notices from Deputy yet</p>`
                : (getData().notices || []).filter(n => n.from === 'deputy' && n.to === 'hod').map(n => `
                    <div style="background:var(--bg-elevated); border:1px solid var(--accent-gold);
                    border-radius:10px; padding:1rem; margin-bottom:0.8rem;">
                        <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem;">
                            <strong style="color:var(--accent-gold);">
                                <i class="fas fa-crown"></i> Deputy Principal
                            </strong>
                            <small style="color:var(--text-secondary);">${n.date}</small>
                        </div>
                        <p style="font-weight:600; margin-bottom:0.3rem;">${n.title}</p>
                        <p style="color:var(--text-secondary); font-size:0.9rem;">${n.message}</p>
                    </div>
                `).join('')}
        </div>
    `;
    document.getElementById('dashboardContent').innerHTML = content;
}

// ==================== RENDER TEACHER DASHBOARD ====================
function renderTeacherDashboard() {
    const data = getData();
    const content = `
        <div class="form-card">
            <h3><i class="fas fa-qrcode"></i> Generate Student Passcode</h3>
            <div class="form-group">
                <label>Enter Student Admission Number</label>
                <input type="text" id="genAdmissionInput" placeholder="e.g. 2026001">
            </div>
            <button class="btn-secondary" onclick="generateNewPasscode()">
                <i class="fas fa-key"></i> Generate Passcode
            </button>
            <p id="passcodeResult" style="margin-top:10px; color:var(--accent-gold); font-weight:600;"></p>
        </div>

        <div class="form-card">
            <h3><i class="fas fa-check-circle"></i> Mark Attendance</h3>
            <div class="form-group">
                <label>Select Student</label>
                <select id="attStudentSelect">
                    ${data.students.map(s => `<option value="${s.id}">${s.name} (${s.id})</option>`).join('')}
                </select>
            </div>
            <button class="btn-secondary" onclick="markAttendance()">
                <i class="fas fa-user-check"></i> Mark Present (+5%)
            </button>
        </div>

        <div class="form-card">
            <h3><i class="fas fa-pen-fancy"></i> Enter CAT Marks</h3>
            <div class="form-group">
                <label>Select Student</label>
                <select id="markStudentSelect">
                    ${data.students.map(s => `<option value="${s.id}">${s.name} (${s.id})</option>`).join('')}
                </select>
            </div>
            <div class="form-group">
                <label>Subject</label>
                <input type="text" id="catSubject" placeholder="e.g. Mathematics">
            </div>
            <div class="form-group">
                <label>Score (0-100)</label>
                <input type="number" id="catScore" placeholder="Score" min="0" max="100">
            </div>
            <button class="btn-secondary" onclick="enterCatMarks()">
                <i class="fas fa-save"></i> Save CAT Mark
            </button>
        </div>

        <div class="table-container">
            <h3 style="padding:1rem; color:var(--accent-gold);">
                <i class="fas fa-chart-bar"></i> Class Report
            </h3>
            <table>
                <thead>
                    <tr>
                        <th>Student</th><th>Admission No</th>
                        <th>Class</th><th>Attendance %</th><th>Top CAT</th>
                    </tr>
                </thead>
                <tbody>
                    ${data.students.map(s => `
                        <tr>
                            <td>${s.name}</td><td>${s.id}</td>
                            <td>${s.class}</td><td>${s.attendance}%</td>
                            <td>${Object.values(s.catMarks || {}).slice(0,1)[0] || '-'}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>

        <div class="form-card">
            <h3 style="color:var(--accent-gold);">
                <i class="fas fa-bullhorn"></i> Notice Board
            </h3>
            <h4 style="margin-bottom:1rem;">
                <i class="fas fa-user-graduate"></i> Post Notice → Students
            </h4>
            <div class="form-group">
                <label>Title</label>
                <input type="text" id="teacherStudentTitle" placeholder="Notice title">
            </div>
            <div class="form-group">
                <label>Message</label>
                <textarea id="teacherStudentMessage" placeholder="Write notice here..."
                style="width:100%; padding:0.8rem; background:var(--bg-elevated);
                border:1px solid var(--border); border-radius:10px;
                color:var(--text-primary); min-height:80px; resize:vertical;"></textarea>
            </div>
            <button class="btn-secondary" onclick="postNotice('teacher','student')">
                <i class="fas fa-paper-plane"></i> Post to Students
            </button>

            <hr style="border-color:var(--border); margin:1.5rem 0;">

            <h4 style="margin-bottom:1rem; color:var(--accent-gold);">
                <i class="fas fa-envelope-open"></i> Notices from H.O.D
            </h4>
            ${(getData().notices || []).filter(n => n.from === 'hod' && n.to === 'teacher').length === 0
                ? `<p style="color:var(--text-secondary);">No notices from H.O.D yet</p>`
                : (getData().notices || []).filter(n => n.from === 'hod' && n.to === 'teacher').map(n => `
                    <div style="background:var(--bg-elevated); border:1px solid var(--accent-gold);
                    border-radius:10px; padding:1rem; margin-bottom:0.8rem;">
                        <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem;">
                            <strong style="color:var(--accent-gold);">
                                <i class="fas fa-user-shield"></i> H.O.D
                            </strong>
                            <small style="color:var(--text-secondary);">${n.date}</small>
                        </div>
                        <p style="font-weight:600; margin-bottom:0.3rem;">${n.title}</p>
                        <p style="color:var(--text-secondary); font-size:0.9rem;">${n.message}</p>
                    </div>
                `).join('')}
        </div>
    `;
    document.getElementById('dashboardContent').innerHTML = content;
}

// ==================== RENDER STUDENT DASHBOARD ====================
function renderStudentDashboard() {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    const data = getData();
    const student = data.students.find(s => s.id === currentUser.id);
    if (!student) return;

    const content = `
        <div class="stats-grid" style="margin-bottom:1rem">
            <div class="stat-card">
                <i class="fas fa-chart-line"></i>
                <h3>Attendance</h3>
                <p class="stat-number">${student.attendance}%</p>
            </div>
            <div class="stat-card">
                <i class="fas fa-coins"></i>
                <h3>Fee Balance</h3>
                <p class="stat-number">KES ${student.feeBalance.toLocaleString()}</p>
            </div>
        </div>

        <div class="form-card">
            <h3><i class="fas fa-id-card"></i> My Profile</h3>
            <p style="margin-bottom:0.5rem"><strong>Name:</strong> ${student.name}</p>
            <p style="margin-bottom:0.5rem"><strong>Admission No:</strong> ${student.id}</p>
            <p style="margin-bottom:0.5rem"><strong>Class:</strong> ${student.class}</p>
            <p style="margin-bottom:0.5rem"><strong>Course:</strong> ${student.course || '-'}</p>
            <p style="margin-bottom:0.5rem"><strong>Category:</strong> ${student.category || '-'}</p>
            <p style="margin-bottom:0.5rem"><strong>Block:</strong> ${student.block || '-'}</p>
            <p style="margin-bottom:0.5rem"><strong>Term:</strong> ${student.term || '-'}</p>
        </div>

        <div class="table-container">
            <h3 style="padding:1rem; color:var(--accent-gold);">
                <i class="fas fa-chart-simple"></i> My CAT Marks
            </h3>
            <table>
                <thead>
                    <tr><th>Subject</th><th>Score</th><th>Grade</th></tr>
                </thead>
                <tbody>
                    ${Object.entries(student.catMarks || {}).map(([sub, mark]) => `
                        <tr>
                            <td>${sub}</td><td>${mark}</td>
                            <td>${mark >= 70 ? '🟢 A' : mark >= 50 ? '🟡 B' : mark >= 40 ? '🟠 C' : '🔴 F'}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>

        <div class="form-card">
            <h3 style="color:var(--accent-gold);">
                <i class="fas fa-bullhorn"></i> Notice Board
            </h3>
            <h4 style="margin-bottom:1rem;">
                <i class="fas fa-user-shield"></i> Notices from H.O.D
            </h4>
            ${(getData().notices || []).filter(n => n.from === 'hod' && n.to === 'student').length === 0
                ? `<p style="color:var(--text-secondary); margin-bottom:1rem;">No notices from H.O.D yet</p>`
                : (getData().notices || []).filter(n => n.from === 'hod' && n.to === 'student').map(n => `
                    <div style="background:var(--bg-elevated); border:1px solid var(--accent-gold);
                    border-radius:10px; padding:1rem; margin-bottom:0.8rem;">
                        <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem;">
                            <strong style="color:var(--accent-gold);">
                                <i class="fas fa-user-shield"></i> H.O.D
                            </strong>
                            <small style="color:var(--text-secondary);">${n.date}</small>
                        </div>
                        <p style="font-weight:600; margin-bottom:0.3rem;">${n.title}</p>
                        <p style="color:var(--text-secondary); font-size:0.9rem;">${n.message}</p>
                    </div>
                `).join('')}

            <hr style="border-color:var(--border); margin:1.5rem 0;">

            <h4 style="margin-bottom:1rem;">
                <i class="fas fa-chalkboard-user"></i> Notices from Teacher
            </h4>
            ${(getData().notices || []).filter(n => n.from === 'teacher' && n.to === 'student').length === 0
                ? `<p style="color:var(--text-secondary);">No notices from teachers yet</p>`
                : (getData().notices || []).filter(n => n.from === 'teacher' && n.to === 'student').map(n => `
                    <div style="background:var(--bg-elevated); border:1px solid var(--border);
                    border-radius:10px; padding:1rem; margin-bottom:0.8rem;">
                        <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem;">
                            <strong style="color:var(--accent);">
                                <i class="fas fa-chalkboard-user"></i> Teacher
                            </strong>
                            <small style="color:var(--text-secondary);">${n.date}</small>
                        </div>
                        <p style="font-weight:600; margin-bottom:0.3rem;">${n.title}</p>
                        <p style="color:var(--text-secondary); font-size:0.9rem;">${n.message}</p>
                    </div>
                `).join('')}
        </div>
    `;
    document.getElementById('dashboardContent').innerHTML = content;
}

// ==================== ADMIN ACTIONS ====================
window.registerStudent = function() {
    const name = document.getElementById('stuName')?.value;
    const admissionNo = document.getElementById('stuAdmission')?.value;
    const phone = document.getElementById('stuPhone')?.value;
    const className = document.getElementById('stuClass')?.value;
    const category = document.getElementById('stuCategory')?.value;
    const course = document.getElementById('stuCourse')?.value;
    const block = document.getElementById('stuBlock')?.value;
    const term = document.getElementById('stuTerm')?.value;

    if (!name || !admissionNo || !category || !course || !block) {
        return alert('❌ Please fill all required fields!');
    }

    const data = getData();
    const exists = data.students.find(s => s.id === admissionNo);
    if (exists) return alert('❌ Admission number already exists!');

    data.students.push({
        id: admissionNo, name, phone: phone || '-',
        class: className, category, course, block, term,
        passcode: null, feeBalance: 0, attendance: 0, catMarks: {}
    });

    saveData(data);
    alert(`✅ Student ${name} registered!\nAdmission No: ${admissionNo}`);
    renderAdminDashboard();
};

window.registerTeacher = function() {
    const firstName = document.getElementById('teacherFirstName')?.value;
    const middleName = document.getElementById('teacherMiddleName')?.value || '';
    const lastName = document.getElementById('teacherLastName')?.value;
    const id = document.getElementById('teacherId')?.value;
    const subject = document.getElementById('teacherSubject')?.value;
    const block = document.getElementById('teacherBlock')?.value;

    if (!firstName || !lastName || !id || !subject || !block) {
        return alert('❌ Please fill all required fields!');
    }

    const data = getData();
    data.teachers.push({
        id, firstName, middleName, lastName,
        name: `${firstName} ${middleName} ${lastName}`.trim(),
        subject, block, password: 'tech254'
    });

    saveData(data);
    alert(`✅ Teacher ${firstName} ${lastName} registered!\nPassword: tech254`);
    renderAdminDashboard();
};

// ==================== TEACHER ACTIONS ====================
window.generateNewPasscode = function() {
    const admissionNo = document.getElementById('genAdmissionInput')?.value?.trim();
    if (!admissionNo) return alert('❌ Please enter an admission number!');

    const data = getData();
    const student = data.students.find(s => s.id === admissionNo);

    if (!student) {
        document.getElementById('passcodeResult').innerHTML =
            `❌ No student found with admission: <strong>${admissionNo}</strong>`;
        return;
    }

    const random = Math.floor(1000 + Math.random() * 9000);
    const newPasscode = `PCK-${admissionNo}-${random}`;
    student.passcode = newPasscode;
    saveData(data);

    document.getElementById('passcodeResult').innerHTML =
        `✅ Passcode for <strong>${student.name}</strong>:<br>
        <span style="font-size:1.2rem; letter-spacing:2px;">${newPasscode}</span><br>
        <small>Share with student for login</small>`;
};

window.markAttendance = function() {
    const studentId = document.getElementById('attStudentSelect')?.value;
    const data = getData();
    const student = data.students.find(s => s.id === studentId);
    if (student) {
        student.attendance = Math.min(100, student.attendance + 5);
        saveData(data);
        alert(`✅ Attendance updated for ${student.name} → ${student.attendance}%`);
        renderTeacherDashboard();
    }
};

window.enterCatMarks = function() {
    const studentId = document.getElementById('markStudentSelect')?.value;
    const subject = document.getElementById('catSubject')?.value;
    const score = parseInt(document.getElementById('catScore')?.value);
    if (!subject || isNaN(score)) return alert('❌ Enter valid subject and score!');
    const data = getData();
    const student = data.students.find(s => s.id === studentId);
    if (student) {
        if (!student.catMarks) student.catMarks = {};
        student.catMarks[subject] = score;
        saveData(data);
        alert(`✅ CAT mark saved: ${subject} = ${score}`);
        renderTeacherDashboard();
    }
};

// ==================== DEPUTY ACTIONS ====================
window.generateHodPassword = function() {
    const firstName = document.getElementById('hodFirstName')?.value?.trim();
    const lastName = document.getElementById('hodLastName')?.value?.trim();
    const phone = document.getElementById('hodPhone')?.value?.trim();
    const department = document.getElementById('hodDepartment')?.value;

    if (!firstName || !lastName || !phone || !department) {
        return alert('❌ Please fill all H.O.D details!');
    }

    const initials = `${firstName[0]}${lastName[0]}`.toUpperCase();
    const random = Math.floor(1000 + Math.random() * 9000);
    const password = `HOD-${initials}-${random}`;

    const data = getData();
    if (!data.hods) data.hods = [];

    const existing = data.hods.find(h => h.department === department);
    if (existing) {
        if (!confirm(`${department} already has H.O.D (${existing.name}). Replace?`)) return;
        data.hods = data.hods.filter(h => h.department !== department);
    }

    data.hods.push({
        id: `HOD-${Date.now().toString().slice(-4)}`,
        firstName, lastName,
        name: `${firstName} ${lastName}`,
        phone, department, password
    });

    saveData(data);
    document.getElementById('hodGeneratedPassword').innerText = password;
    document.getElementById('hodPasswordCard').classList.add('show');
    alert(`✅ H.O.D registered!\nPassword: ${password}\nShare with H.O.D`);
};

window.generateTeacherPassword = function() {
    const firstName = document.getElementById('depTeacherFirstName')?.value?.trim();
    const lastName = document.getElementById('depTeacherLastName')?.value?.trim();
    const id = document.getElementById('depTeacherId')?.value?.trim();
    const subject = document.getElementById('depTeacherSubject')?.value?.trim();
    const department = document.getElementById('depTeacherDept')?.value;

    if (!firstName || !lastName || !id || !subject || !department) {
        return alert('❌ Please fill all teacher details!');
    }

    const initials = `${firstName[0]}${lastName[0]}`.toUpperCase();
    const random = Math.floor(1000 + Math.random() * 9000);
    const password = `TCH-${initials}-${random}`;

    const data = getData();
    if (data.teachers.find(t => t.id === id)) return alert('❌ Staff number exists!');

    data.teachers.push({
        id, firstName, lastName,
        name: `${firstName} ${lastName}`,
        subject, department, block: '-', password
    });

    saveData(data);
    document.getElementById('teacherGeneratedPassword').innerText = password;
    document.getElementById('teacherPasswordCard').classList.add('show');
    alert(`✅ Teacher registered!\nPassword: ${password}\nShare with teacher`);
};

// ==================== NOTICE BOARD ====================
window.postNotice = function(from, to) {
    let title, message;
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser') || '{}');

    if (from === 'deputy' && to === 'hod') {
        title = document.getElementById('deputyNoticeTitle')?.value?.trim();
        message = document.getElementById('deputyNoticeMessage')?.value?.trim();
    } else if (from === 'hod' && to === 'deputy') {
        title = document.getElementById('hodDeputyTitle')?.value?.trim();
        message = document.getElementById('hodDeputyMessage')?.value?.trim();
    } else if (from === 'hod' && to === 'teacher') {
        title = document.getElementById('hodTeacherTitle')?.value?.trim();
        message = document.getElementById('hodTeacherMessage')?.value?.trim();
    } else if (from === 'hod' && to === 'student') {
        title = document.getElementById('hodStudentTitle')?.value?.trim();
        message = document.getElementById('hodStudentMessage')?.value?.trim();
    } else if (from === 'teacher' && to === 'student') {
        title = document.getElementById('teacherStudentTitle')?.value?.trim();
        message = document.getElementById('teacherStudentMessage')?.value?.trim();
    }

    if (!title || !message) return alert('❌ Please enter both title and message!');

    const data = getData();
    if (!data.notices) data.notices = [];

    data.notices.unshift({
        from, to, title, message,
        department: currentUser.department || 'General',
        postedBy: currentUser.name || from,
        date: new Date().toLocaleDateString('en-KE', {
            day: '2-digit', month: 'short', year: 'numeric',
            hour: '2-digit', minute: '2-digit'
        })
    });

    saveData(data);

    const toLabel = to === 'hod' ? 'H.O.Ds' : to === 'teacher' ? 'Teachers' :
                    to === 'deputy' ? 'Deputy' : 'Students';
    alert(`✅ Notice posted to ${toLabel}!`);

    if (currentUser.role === 'deputy') renderDeputyDashboard();
    else if (currentUser.role === 'admin') renderAdminDashboard();
    else if (currentUser.role === 'teacher') renderTeacherDashboard();
};

// ==================== COURSE DROPDOWN ====================
window.updateCourses = function() {
    const category = document.getElementById('stuCategory')?.value;
    const courseSelect = document.getElementById('stuCourse');
    if (!courseSelect) return;

    const courses = {
        'Diploma': ['Hospitality', 'Computer Studies', 'Electrical', 'Plumbing', 'Motor Vehicle'],
        'Certificate': ['Hospitality', 'Computer Studies', 'Electrical', 'Plumbing', 'Motor Vehicle'],
        'Artisan': ['Hospitality', 'Computer Studies', 'Electrical', 'Plumbing', 'Motor Vehicle']
    };

    courseSelect.innerHTML = category && courses[category]
        ? courses[category].map(c => `<option value="${c}">${c}</option>`).join('')
        : '<option>-- Select Category First --</option>';
};

// ==================== THEME TOGGLE ====================
function initTheme() {
    const toggle = document.getElementById('themeToggle');
    const saved = localStorage.getItem('pck_theme');
    if (saved === 'light') document.body.classList.add('light');
    toggle.onclick = () => {
        document.body.classList.toggle('light');
        localStorage.setItem('pck_theme',
            document.body.classList.contains('light') ? 'light' : 'dark');
        toggle.innerHTML = document.body.classList.contains('light')
            ? '<i class="fas fa-sun"></i> Light Mode'
            : '<i class="fas fa-moon"></i> Dark Mode';
    };
}

// ==================== EVENT LISTENERS ====================
function initEventListeners() {
    document.getElementById('deputyLoginBtn').onclick = () => {
        handleLogin('deputy', { password: document.getElementById('deputyPassword').value });
    };
    document.getElementById('studentLoginBtn').onclick = () => {
        handleLogin('student', {
            admissionNo: document.getElementById('studentAdmission').value,
            passcode: document.getElementById('studentPasscode').value
        });
    };
    document.getElementById('teacherLoginBtn').onclick = () => {
        handleLogin('teacher', {
            staffNo: document.getElementById('teacherStaffNo').value,
            password: document.getElementById('teacherPassword').value
        });
    };
    document.getElementById('adminLoginBtn').onclick = () => {
        handleLogin('admin', { password: document.getElementById('adminPassword').value });
    };
    document.getElementById('logoutBtn').onclick = () => {
        sessionStorage.clear();
        location.reload();
    };
    document.querySelectorAll('.role-btn').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.role-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.querySelectorAll('.login-form').forEach(f => f.classList.remove('active'));
            document.getElementById(`${btn.dataset.role}Login`).classList.add('active');
        };
    });
}

// ==================== INIT ====================
initializeData();
initTheme();
initEventListeners();

const savedUser = sessionStorage.getItem('currentUser');
if (savedUser) {
    showDashboard(JSON.parse(savedUser).role);
} else {
    document.getElementById('loginContainer').style.display = 'flex';
    document.getElementById('dashboardContainer').style.display = 'none';
}