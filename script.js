// ==================== INITIALIZE LOCALSTORAGE ====================
function initializeData() {
    if (!localStorage.getItem('pck_institute')) {
        const departments = ['Computer Studies', 'Hospitality', 'Automotive Engineering', 'Electrical Engineering', 'Civil Engineering', 'Business'];
        
        const demoData = {
            departments: departments,
            students: [
                { id: 'STU-2026-001', name: 'John Mwangi', department: 'Computer Studies', class: 'Form 3C', passcode: '1234', repPasscode: null, feeBalance: 15000, attendance: { total: 45, attended: 38 }, catMarks: [] },
                { id: 'STU-2026-002', name: 'Sarah Achieng', department: 'Computer Studies', class: 'Form 3C', passcode: '5678', repPasscode: null, feeBalance: 8000, attendance: { total: 45, attended: 35 }, catMarks: [] },
                { id: 'STU-2026-003', name: 'David Omondi', department: 'Computer Studies', class: 'Form 3C', passcode: '9012', repPasscode: null, feeBalance: 25000, attendance: { total: 45, attended: 40 }, catMarks: [] },
                { id: 'STU-2026-004', name: 'Faith Njeri', department: 'Hospitality', class: 'Form 2B', passcode: '3456', repPasscode: null, feeBalance: 5000, attendance: { total: 40, attended: 38 }, catMarks: [] },
                { id: 'STU-2026-005', name: 'Brian Mutua', department: 'Automotive Engineering', class: 'Form 1A', passcode: '7890', repPasscode: null, feeBalance: 12000, attendance: { total: 38, attended: 30 }, catMarks: [] }
            ],
            classReps: [],
            lecturers: [
                { id: 'LEC-2026-001', name: 'Jane Wanjiku', department: 'Computer Studies', unit: 'Computer Essentials', password: 'lec1234' },
                { id: 'LEC-2026-002', name: 'Beatrice Akinyi', department: 'Computer Studies', unit: 'Computer Operations', password: 'lec5678' }
            ],
            classTeachers: [
                { id: 'TCH-2026-001', name: 'James Otieno', department: 'Computer Studies', password: 'tch1234' }
            ],
            hods: [
                { id: 'HOD-2026-001', name: 'Dr. Jane Kamau', department: 'Computer Studies', password: 'hod1234' }
            ],
            courses: [
                { id: 'CRS-001', name: 'Computer Essentials', code: 'CS101', competencyWeight: { notCompetent: 0, competent: 41, proficient: 61, mastery: 81 } },
                { id: 'CRS-002', name: 'Computer Operations', code: 'CS102', competencyWeight: { notCompetent: 0, competent: 41, proficient: 61, mastery: 81 } }
            ],
            cats: [],
            catSubmissions: [],
            attendanceRecords: [],
            attendanceDisputes: [],
            noticeboard: [
                { id: 'n1', sender: 'Class Teacher', senderRole: 'classteacher', recipient: 'all', message: 'Welcome to the new term!', timestamp: new Date().toISOString() }
            ],
            feePayments: []
        };
        localStorage.setItem('pck_institute', JSON.stringify(demoData));
    }
}

function getData() { return JSON.parse(localStorage.getItem('pck_institute')); }
function saveData(data) { localStorage.setItem('pck_institute', JSON.stringify(data)); }

function getCompetency(percentage) {
    if (percentage >= 81) return { level: 'Mastery', class: 'badge-mastery' };
    if (percentage >= 61) return { level: 'Proficient', class: 'badge-proficient' };
    if (percentage >= 41) return { level: 'Competent', class: 'badge-competent' };
    return { level: 'Not Competent', class: 'badge-not-competent' };
}

// ==================== DASHBOARD RENDERERS ====================
function showDashboard(role, userData) {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('dashboardContainer').style.display = 'block';
    document.getElementById('statsGrid').style.display = (role === 'deputy' || role === 'hod') ? 'grid' : 'none';
    
    const titles = {
        deputy: '<i class="fas fa-crown"></i> Deputy Principal Dashboard',
        hod: '<i class="fas fa-user-tie"></i> H.O.D Dashboard',
        classteacher: '<i class="fas fa-chalkboard-user"></i> Class Teacher Dashboard',
        lecturer: '<i class="fas fa-person-chalkboard"></i> Lecturer Dashboard',
        student: '<i class="fas fa-user-graduate"></i> Student Dashboard',
        classrep: '<i class="fas fa-users-between"></i> Class Representative Dashboard'
    };
    document.getElementById('dashboardTitle').innerHTML = titles[role] || 'Dashboard';
    
    if (role === 'deputy') renderDeputyDashboard();
    else if (role === 'hod') renderHodDashboard(userData);
    else if (role === 'classteacher') renderClassTeacherDashboard(userData);
    else if (role === 'lecturer') renderLecturerDashboard(userData);
    else if (role === 'student') renderStudentDashboard(userData);
    else if (role === 'classrep') renderClassRepDashboard(userData);
}

function renderStudentDashboard(student) {
    const data = getData();
    const catResults = data.catSubmissions.filter(c => c.studentId === student.id);
    const attendancePercent = student.attendance.total > 0 ? Math.round((student.attendance.attended / student.attendance.total) * 100) : 0;
    const competency = getCompetency(attendancePercent);
    
    let content = `
        <div class="stats-grid" style="margin-bottom:1rem">
            <div class="stat-card"><i class="fas fa-chart-line"></i><h3>Attendance</h3><p class="stat-number">${attendancePercent}%</p><small>${competency.level}</small></div>
            <div class="stat-card"><i class="fas fa-coins"></i><h3>Fee Balance</h3><p class="stat-number">KES ${student.feeBalance.toLocaleString()}</p></div>
        </div>
        <div class="table-container"><h3 style="padding:1rem"><i class="fas fa-chart-simple"></i> My Results (Competency Based)</h3>
        <table><thead><tr><th>Unit</th><th>Percentage</th><th>Competency</th><th>Status</th></tr></thead><tbody>`;
    
    if (catResults.length === 0) content += '<tr><td colspan="4" style="text-align:center">No results published yet</td></tr>';
    else {
        catResults.forEach(cat => {
            const unit = data.courses.find(c => c.id === cat.courseId);
            const comp = getCompetency(cat.percentage);
            content += `<tr><td>${unit?.name || cat.courseId}</td><td>${cat.percentage}%</td><td><span class="competency-badge ${comp.class}">${comp.level}</span></td><td>✅ Published</td></tr>`;
        });
    }
    
    content += `</tbody></table></div>
        <div class="form-card"><h3><i class="fas fa-comments"></i> Noticeboard</h3>
        <div class="noticeboard" id="studentNoticeboard"></div>
        <div class="form-group"><textarea id="studentMsg" placeholder="Send message to Class Rep..." rows="2"></textarea></div>
        <button class="btn-secondary" onclick="sendStudentMessage('${student.id}')">Send to Class Rep</button></div>`;
    
    document.getElementById('dashboardContent').innerHTML = content;
    renderNoticeboard('student', student.id);
}

function renderClassRepDashboard(rep) {
    const data = getData();
    const classStudents = data.students.filter(s => s.class === rep.class && s.department === rep.department);
    const activeCATs = data.cats.filter(c => c.department === rep.department && c.status === 'active');
    const submittedCount = data.catSubmissions.filter(s => s.catId && activeCATs.map(cat => cat.id).includes(s.catId)).length;
    
    let content = `
        <div class="stats-grid"><div class="stat-card"><i class="fas fa-users"></i><h3>Class Size</h3><p class="stat-number">${classStudents.length}</p></div>
        <div class="stat-card"><i class="fas fa-file-alt"></i><h3>CATs Collected</h3><p class="stat-number">${submittedCount}/${classStudents.length * activeCATs.length}</p></div></div>
        <div class="form-card"><h3><i class="fas fa-tasks"></i> CAT Collection Tracker</h3>`;
    
    activeCATs.forEach(cat => {
        const submitted = data.catSubmissions.filter(s => s.catId === cat.id);
        const percent = classStudents.length ? Math.round((submitted.length / classStudents.length) * 100) : 0;
        content += `<div style="margin-bottom:1rem"><strong>${cat.name}</strong> (${cat.type}) - Deadline: ${cat.classRepDeadline || cat.deadline}
        <div class="progress-bar"><div class="progress-fill" style="width:${percent}%"></div></div><small>${submitted.length}/${classStudents.length} submitted (${percent}%)</small>
        <table style="margin-top:0.5rem"><thead><tr><th>Student</th><th>Submitted</th><th>Action</th></tr></thead><tbody>`;
        classStudents.forEach(s => {
            const hasSubmitted = submitted.find(sub => sub.studentId === s.id);
            content += `<tr><td>${s.name}</td><td>${hasSubmitted ? '✅' : '❌'}</td><td>${!hasSubmitted ? `<button class="btn-secondary" style="padding:0.2rem 0.5rem" onclick="notifyMissingCAT('${s.id}', '${cat.id}')">Remind</button>` : '-'}</td></tr>`;
        });
        content += `</tbody></table><button class="btn-success" style="margin-top:0.5rem" onclick="submitCATPapersToLecturer('${cat.id}')">Submit All Papers to Lecturer</button></div>`;
    });
    
    content += `</div>
        <div class="form-card"><h3><i class="fas fa-calendar-check"></i> Attendance Verification</h3><div id="attendanceVerification"></div></div>
        <div class="form-card"><h3><i class="fas fa-comments"></i> Noticeboard</h3><div class="noticeboard" id="repNoticeboard"></div>
        <div class="form-group"><select id="repRecipient"><option value="classteacher">Class Teacher</option><option value="lecturer">Lecturer</option></select></div>
        <div class="form-group"><textarea id="repMsg" placeholder="Write message..." rows="2"></textarea></div>
        <button class="btn-secondary" onclick="sendRepMessage('${rep.id}')">Send Message</button></div>`;
    
    document.getElementById('dashboardContent').innerHTML = content;
    renderNoticeboard('classrep', rep.id);
    renderAttendanceVerification(rep);
}

function renderLecturerDashboard(lecturer) {
    const data = getData();
    const assignedCATs = data.cats.filter(c => c.lecturerId === lecturer.id);
    
    let content = `
        <div class="form-card"><h3><i class="fas fa-plus-circle"></i> Create New CAT</h3>
        <div class="form-group"><label>Unit</label><select id="catUnit">${data.courses.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}</select></div>
        <div class="form-group"><label>CAT Type</label><select id="catType"><option value="Sitting CAT">Sitting CAT (In Class)</option><option value="Take Away">Take Away (At Home)</option></select></div>
        <div class="form-group"><label>Submission Deadline</label><input type="date" id="catDeadline"></div>
        <button class="btn-primary" onclick="createCAT('${lecturer.id}')">Create CAT</button></div>
        <div class="table-container"><h3 style="padding:1rem">CATs to Mark</h3><table><thead><tr><th>CAT</th><th>Type</th><th>Students Submitted</th><th>Action</th></tr></thead><tbody>`;
    
    assignedCATs.forEach(cat => {
        const submissions = data.catSubmissions.filter(s => s.catId === cat.id);
        content += `<tr><td>${cat.name}</td><td>${cat.type}</td><td>${submissions.length}</td><td><button onclick="viewCATToMark('${cat.id}')">Mark Papers</button></td></tr>`;
    });
    if (assignedCATs.length === 0) content += '<tr><td colspan="4">No CATs assigned yet</td></tr>';
    
    content += `</tbody></table></div>
        <div class="form-card"><h3><i class="fas fa-comments"></i> Noticeboard</h3><div class="noticeboard" id="lecturerNoticeboard"></div></div>`;
    
    document.getElementById('dashboardContent').innerHTML = content;
    renderNoticeboard('lecturer', lecturer.id);
}

function renderClassTeacherDashboard(teacher) {
    const data = getData();
    const departmentData = { students: data.students.filter(s => s.department === teacher.department), lecturers: data.lecturers.filter(l => l.department === teacher.department) };
    const rep = data.classReps.find(r => r.department === teacher.department && r.class === 'Form 3C');
    
    let content = `
        <div class="stats-grid"><div class="stat-card"><i class="fas fa-users"></i><h3>Students</h3><p class="stat-number">${departmentData.students.length}</p></div>
        <div class="stat-card"><i class="fas fa-chalkboard-user"></i><h3>Lecturers</h3><p class="stat-number">${departmentData.lecturers.length}</p></div></div>
        <div class="form-card"><h3><i class="fas fa-key"></i> Generate Passwords</h3>
        <div class="form-group"><label>Generate Lecturer Password</label><input type="text" id="lecName" placeholder="Lecturer Name"><button class="btn-secondary" onclick="generateLecturerPassword()">Generate</button></div>
        <div class="form-group"><label>Generate Student Passcode</label><input type="text" id="stuName" placeholder="Student Name"><button class="btn-secondary" onclick="generateStudentPasscode()">Generate</button></div>
        <div class="form-group"><label>Generate Class Rep Password</label><select id="repStudentSelect"><option value="">Select Student</option>${departmentData.students.map(s => `<option value="${s.id}">${s.name}</option>`).join('')}</select>
        <button class="btn-secondary" onclick="generateClassRepPassword()">Generate Rep Password</button></div></div>
        <div class="form-card"><h3><i class="fas fa-comments"></i> Broadcast Noticeboard</h3>
        <div class="form-group"><select id="broadcastRecipient"><option value="all">All Students & Lecturers</option><option value="students">Students Only</option><option value="lecturers">Lecturers Only</option><option value="classrep">Class Rep Only</option></select></div>
        <div class="form-group"><textarea id="broadcastMsg" placeholder="Write message..." rows="2"></textarea></div>
        <button class="btn-primary" onclick="broadcastMessage('${teacher.id}', 'classteacher')">Send Broadcast</button></div>
        <div class="form-card"><h3><i class="fas fa-comments"></i> Noticeboard</h3><div class="noticeboard" id="ctNoticeboard"></div></div>`;
    
    document.getElementById('dashboardContent').innerHTML = content;
    renderNoticeboard('classteacher', teacher.id);
}

function renderHodDashboard(hod) {
    const data = getData();
    document.getElementById('totalStudents').innerText = data.students.filter(s => s.department === hod.department).length;
    document.getElementById('totalTeachers').innerText = data.lecturers.filter(l => l.department === hod.department).length;
    document.getElementById('totalCourses').innerText = data.courses.length;
    
    let content = `
        <div class="form-card"><h3><i class="fas fa-tasks"></i> Assign Units to Class Teacher</h3>
        <div class="form-group"><label>Select Unit</label><select id="assignUnit">${data.courses.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}</select></div>
        <button class="btn-primary" onclick="assignUnitToClassTeacher('${hod.department}')">Assign Unit</button></div>
        <div class="form-card"><h3><i class="fas fa-upload"></i> Upload Timetable (5 Images)</h3>`;
    for(let i=1; i<=5; i++) content += `<div class="form-group"><label>Timetable ${i}</label><input type="file" accept="image/*" id="timetable${i}"></div>`;
    content += `<button class="btn-secondary" onclick="uploadTimetables('${hod.department}')">Upload All</button></div>
        <div class="form-card"><h3><i class="fas fa-comments"></i> Send Note to Deputy</h3>
        <div class="form-group"><textarea id="hodNote" placeholder="Write note to Deputy Principal..." rows="2"></textarea></div>
        <button class="btn-primary" onclick="sendNoteToDeputy('${hod.name}')">Send Note</button></div>
        <div class="form-card"><h3><i class="fas fa-comments"></i> Noticeboard</h3><div class="noticeboard" id="hodNoticeboard"></div></div>`;
    
    document.getElementById('dashboardContent').innerHTML = content;
    renderNoticeboard('hod', hod.id);
}

function renderDeputyDashboard() {
    const data = getData();
    document.getElementById('totalStudents').innerText = data.students.length;
    document.getElementById('totalTeachers').innerText = data.lecturers.length + data.classTeachers.length;
    document.getElementById('totalCourses').innerText = data.courses.length;

    let content = `
        <!-- Stats -->
        <div class="stats-grid">
            <div class="stat-card">
                <i class="fas fa-building"></i>
                <h3>Departments</h3>
                <p class="stat-number">${data.departments.length}</p>
            </div>
            <div class="stat-card">
                <i class="fas fa-user-shield"></i>
                <h3>H.O.Ds</h3>
                <p class="stat-number">${(data.hods || []).length}</p>
            </div>
        </div>

        <!-- Create HOD Account -->
        <div class="form-card">
            <h3><i class="fas fa-user-plus"></i> Create H.O.D Account</h3>
            <p style="color:var(--text-secondary); font-size:0.85rem; margin-bottom:1rem;">
                Fill in H.O.D details — system generates their login password
            </p>
            <div class="form-group">
                <label>Full Name</label>
                <input type="text" id="newHodName" placeholder="e.g. Dr. Jane Kamau">
            </div>
            <div class="form-group">
                <label>Staff Number</label>
                <input type="text" id="newHodStaffNo" placeholder="e.g. HOD-2026-001">
            </div>
            <div class="form-group">
                <label>Department</label>
                <select id="newHodDept">
                    <option value="">-- Select Department --</option>
                    ${data.departments.map(d => `<option value="${d}">${d}</option>`).join('')}
                </select>
            </div>
            <button class="btn-secondary" onclick="createHodAccount()">
                <i class="fas fa-key"></i> Create H.O.D Account & Generate Password
            </button>
            <div id="hodAccountResult" style="margin-top:1rem;"></div>
        </div>

        <!-- All HODs Table -->
        <div class="table-container">
            <h3 style="padding:1rem; color:var(--accent);">
                <i class="fas fa-user-shield"></i> All H.O.Ds
            </h3>
            <table>
                <thead>
                    <tr>
                        <th>Staff No</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    ${(data.hods || []).length === 0
                        ? `<tr><td colspan="4" style="text-align:center; color:var(--text-secondary);">No H.O.Ds created yet</td></tr>`
                        : (data.hods || []).map(h => `
                            <tr>
                                <td>${h.id}</td>
                                <td>${h.name}</td>
                                <td>${h.department}</td>
                                <td style="font-family:monospace; color:var(--accent);">${h.password}</td>
                            </tr>
                        `).join('')
                    }
                </tbody>
            </table>
        </div>

        <!-- All Departments Overview -->
        <div class="form-card">
            <h3><i class="fas fa-chart-line"></i> All Departments Overview</h3>
            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Department</th>
                            <th>Students</th>
                            <th>Lecturers</th>
                            <th>H.O.D</th>
                            <th>Avg Attendance</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${data.departments.map(dept => {
                            const students = data.students.filter(s => s.department === dept);
                            const avgAttend = students.length
                                ? Math.round(students.reduce((sum, s) =>
                                    sum + (s.attendance.attended / s.attendance.total * 100), 0) / students.length)
                                : 0;
                            const hod = (data.hods || []).find(h => h.department === dept);
                            return `
                                <tr>
                                    <td>${dept}</td>
                                    <td>${students.length}</td>
                                    <td>${data.lecturers.filter(l => l.department === dept).length}</td>
                                    <td>${hod ? hod.name : '<span style="color:var(--danger)">Not assigned</span>'}</td>
                                    <td>${avgAttend}%</td>
                                </tr>
                            `;
                        }).join('')}
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Broadcast to All -->
        <div class="form-card">
            <h3><i class="fas fa-bullhorn"></i> Broadcast to All</h3>
            <div class="form-group">
                <textarea id="deputyBroadcast"
                    placeholder="Broadcast message to ALL departments..."
                    rows="3"
                    style="width:100%; padding:0.8rem; background:var(--bg-elevated);
                    border:1px solid var(--border); border-radius:10px;
                    color:var(--text-primary); resize:vertical;">
                </textarea>
            </div>
            <button class="btn-primary" onclick="broadcastFromDeputy()">
                <i class="fas fa-paper-plane"></i> Send to All
            </button>
        </div>

        <!-- Noticeboard — Messages from HODs -->
        <div class="form-card">
            <h3><i class="fas fa-comments"></i> Noticeboard</h3>
            <h4 style="color:var(--text-secondary); font-size:0.85rem; margin-bottom:0.8rem;">
                Messages from H.O.Ds
            </h4>
            <div class="noticeboard" id="deputyNoticeboard"></div>
        </div>
    `;

    document.getElementById('dashboardContent').innerHTML = content;
    renderNoticeboard('deputy', null);
}

// ==================== HOD ACCOUNT CREATION ====================
window.createHodAccount = function() {
    const name = document.getElementById('newHodName')?.value?.trim();
    const staffNo = document.getElementById('newHodStaffNo')?.value?.trim();
    const department = document.getElementById('newHodDept')?.value;

    if (!name || !staffNo || !department) {
        return alert('❌ Please fill all fields!');
    }

    const data = getData();

    // Check duplicate staff number
    if ((data.hods || []).find(h => h.id === staffNo)) {
        return alert('❌ Staff number already exists!');
    }

    // Check if department already has HOD
    const existingHod = (data.hods || []).find(h => h.department === department);
    if (existingHod) {
        if (!confirm(`${department} already has H.O.D (${existingHod.name}). Replace?`)) return;
        data.hods = data.hods.filter(h => h.department !== department);
    }

    // Generate password: HOD-[Initials]-[Random4digits]
    const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
    const random = Math.floor(1000 + Math.random() * 9000);
    const password = `HOD-${initials}-${random}`;

    // Save HOD
    if (!data.hods) data.hods = [];
    data.hods.push({ id: staffNo, name, department, password });
    saveData(data);

    // Show result card
    document.getElementById('hodAccountResult').innerHTML = `
        <div style="background:rgba(34,197,94,0.1); border:1px solid var(--success);
        border-radius:10px; padding:1rem; text-align:center;">
            <div style="color:var(--success); font-weight:700; font-size:1rem; margin-bottom:0.8rem;">
                ✅ H.O.D Account Created!
            </div>
            <div style="font-size:0.9rem; margin-bottom:0.3rem;">
                <strong>Name:</strong> ${name}
            </div>
            <div style="font-size:0.9rem; margin-bottom:0.3rem;">
                <strong>Staff No:</strong> ${staffNo}
            </div>
            <div style="font-size:0.9rem; margin-bottom:0.8rem;">
                <strong>Department:</strong> ${department}
            </div>
            <div style="font-family:monospace; font-size:1.4rem; color:var(--accent);
            letter-spacing:3px; padding:0.7rem; background:var(--bg-elevated);
            border-radius:8px; margin-bottom:0.5rem;">
                ${password}
            </div>
            <div style="font-size:0.8rem; color:var(--text-secondary);">
                Share this password with the H.O.D — they use it to login
            </div>
        </div>
    `;

    renderDeputyDashboard();
};

// ==================== HELPER FUNCTIONS ====================
function renderNoticeboard(role, userId) {
    const data = getData();
    const container = document.getElementById(`${role}Noticeboard`) || document.getElementById('studentNoticeboard') || document.getElementById('repNoticeboard') || document.getElementById('lecturerNoticeboard') || document.getElementById('ctNoticeboard') || document.getElementById('hodNoticeboard') || document.getElementById('deputyNoticeboard');
    if (!container) return;
    
    let messages = data.noticeboard.filter(n => n.recipient === 'all' || n.recipient === role || n.recipient === userId);
    messages = messages.slice(-20).reverse();
    
    container.innerHTML = messages.map(m => `<div class="notice-message"><span class="notice-sender"><i class="fas fa-user"></i> ${m.sender}</span><br>${m.message}<br><small>${new Date(m.timestamp).toLocaleString()}</small></div>`).join('');
    if (messages.length === 0) container.innerHTML = '<p style="text-align:center;color:var(--text-secondary)">No messages yet</p>';
}

// Global functions for HTML onclick
window.sendStudentMessage = (studentId) => {
    const msg = document.getElementById('studentMsg')?.value;
    if (!msg) return alert('Write a message');
    const data = getData();
    data.noticeboard.push({ id: Date.now(), sender: `Student ${studentId}`, senderRole: 'student', recipient: 'classrep', message: msg, timestamp: new Date().toISOString() });
    saveData(data);
    alert('Message sent to Class Rep');
    document.getElementById('studentMsg').value = '';
    renderNoticeboard('student', studentId);
};

window.sendRepMessage = (repId) => {
    const msg = document.getElementById('repMsg')?.value;
    const recipient = document.getElementById('repRecipient')?.value;
    if (!msg) return alert('Write a message');
    const data = getData();
    data.noticeboard.push({ id: Date.now(), sender: `Class Rep ${repId}`, senderRole: 'classrep', recipient: recipient, message: msg, timestamp: new Date().toISOString() });
    saveData(data);
    alert('Message sent');
    document.getElementById('repMsg').value = '';
    renderNoticeboard('classrep', repId);
};

window.broadcastMessage = (teacherId, role) => {
    const msg = document.getElementById('broadcastMsg')?.value;
    const recipient = document.getElementById('broadcastRecipient')?.value;
    if (!msg) return alert('Write a message');
    const data = getData();
    data.noticeboard.push({ id: Date.now(), sender: `Class Teacher ${teacherId}`, senderRole: role, recipient: recipient, message: msg, timestamp: new Date().toISOString() });
    saveData(data);
    alert('Broadcast sent');
    document.getElementById('broadcastMsg').value = '';
    renderNoticeboard('classteacher', teacherId);
};

window.sendNoteToDeputy = (hodName) => {
    const note = document.getElementById('hodNote')?.value;
    if (!note) return alert('Write a note');
    const data = getData();
    data.noticeboard.push({ id: Date.now(), sender: `HOD ${hodName}`, senderRole: 'hod', recipient: 'deputy', message: note, timestamp: new Date().toISOString() });
    saveData(data);
    alert('Note sent to Deputy');
    document.getElementById('hodNote').value = '';
};

window.broadcastFromDeputy = () => {
    const msg = document.getElementById('deputyBroadcast')?.value;
    if (!msg) return alert('Write a message');
    const data = getData();
    data.noticeboard.push({ id: Date.now(), sender: 'Deputy Principal', senderRole: 'deputy', recipient: 'all', message: msg, timestamp: new Date().toISOString() });
    saveData(data);
    alert('Broadcast sent to all');
    document.getElementById('deputyBroadcast').value = '';
    renderNoticeboard('deputy', null);
};

window.createCAT = (lecturerId) => {
    const unit = document.getElementById('catUnit')?.value;
    const type = document.getElementById('catType')?.value;
    const deadline = document.getElementById('catDeadline')?.value;
    if (!unit || !deadline) return alert('Fill all fields');
    const data = getData();
    const course = data.courses.find(c => c.id === unit);
    data.cats.push({ id: 'CAT-' + Date.now(), name: course.name, courseId: unit, type: type, deadline: deadline, lecturerId: lecturerId, status: 'active' });
    saveData(data);
    alert('CAT created successfully');
    location.reload();
};

window.generateHODPassword = (dept) => {
    const name = document.getElementById(`hodName_${dept}`)?.value;
    if (!name) return alert('Enter HOD name');
    const password = 'HOD-' + dept.substring(0,3).toUpperCase() + '-' + Math.floor(1000 + Math.random() * 9000);
    alert(`✅ HOD Password for ${dept}:\n${password}\n\nGive this to ${name}`);
};

window.generateLecturerPassword = () => {
    const name = document.getElementById('lecName')?.value;
    if (!name) return alert('Enter lecturer name');
    const password = 'LEC-' + name.substring(0,2).toUpperCase() + '-' + Math.floor(1000 + Math.random() * 9000);
    alert(`✅ Lecturer Password:\n${password}\n\nGive this to ${name}`);
};

window.generateStudentPasscode = () => {
    const name = document.getElementById('stuName')?.value;
    if (!name) return alert('Enter student name');
    const passcode = Math.floor(1000 + Math.random() * 9000).toString();
    alert(`✅ Student Passcode:\n${passcode}\n\nGive this to ${name}`);
};

window.generateClassRepPassword = () => {
    const studentId = document.getElementById('repStudentSelect')?.value;
    if (!studentId) return alert('Select a student');
    const repPasscode = 'REP-' + Math.floor(1000 + Math.random() * 9000);
    alert(`✅ Class Rep Password:\n${repPasscode}\n\nGive this to the elected student`);
};

window.renderAttendanceVerification = (rep) => { /* Placeholder for attendance verification */ };
window.submitCATPapersToLecturer = (catId) => { alert('Papers marked as submitted to lecturer'); };
window.notifyMissingCAT = (studentId, catId) => { alert('Missing student notified'); };
window.viewCATToMark = (catId) => { alert('Opening CAT marking interface...'); };
window.assignUnitToClassTeacher = (department) => { alert(`Unit assigned to Class Teacher of ${department}`); };
window.uploadTimetables = (department) => { alert(`${department} timetables uploaded successfully`); };

// ==================== LOGIN LOGIC ====================
function handleLogin(role, credentials) {
    const data = getData();
    if (role === 'deputy' && credentials.password === 'Dputy254') {
        sessionStorage.setItem('currentUser', JSON.stringify({ role: 'deputy' }));
        showDashboard('deputy');
        return true;
    }
    if (role === 'hod') {
        const hod = data.hods.find(h => h.id === credentials.staffNo && h.password === credentials.password);
        if (hod) { sessionStorage.setItem('currentUser', JSON.stringify({ role: 'hod', ...hod })); showDashboard('hod', hod); return true; }
    }
    if (role === 'classteacher') {
        const ct = data.classTeachers.find(c => c.id === credentials.staffNo && c.password === credentials.password);
        if (ct) { sessionStorage.setItem('currentUser', JSON.stringify({ role: 'classteacher', ...ct })); showDashboard('classteacher', ct); return true; }
    }
    if (role === 'lecturer') {
        const lecturer = data.lecturers.find(l => l.id === credentials.staffNo && l.password === credentials.password);
        if (lecturer) { sessionStorage.setItem('currentUser', JSON.stringify({ role: 'lecturer', ...lecturer })); showDashboard('lecturer', lecturer); return true; }
    }
    if (role === 'student') {
        const student = data.students.find(s => s.id === credentials.admissionNo && s.passcode === credentials.passcode);
        if (student) { sessionStorage.setItem('currentUser', JSON.stringify({ role: 'student', ...student })); showDashboard('student', student); return true; }
    }
    if (role === 'classrep') {
        const rep = data.classReps.find(r => r.id === credentials.admissionNo && r.passcode === credentials.passcode);
        if (rep) { sessionStorage.setItem('currentUser', JSON.stringify({ role: 'classrep', ...rep })); showDashboard('classrep', rep); return true; }
    }
    alert('Invalid credentials. Contact administration.');
    return false;
}

// ==================== EVENT LISTENERS ====================
function initEventListeners() {
    document.getElementById('studentLoginBtn').onclick = () => handleLogin('student', { admissionNo: document.getElementById('studentAdmission').value, passcode: document.getElementById('studentPasscode').value });
    document.getElementById('classrepLoginBtn').onclick = () => handleLogin('classrep', { admissionNo: document.getElementById('repAdmission').value, passcode: document.getElementById('repPasscode').value });
    document.getElementById('lecturerLoginBtn').onclick = () => handleLogin('lecturer', { staffNo: document.getElementById('lecturerStaffNo').value, password: document.getElementById('lecturerPassword').value });
    document.getElementById('classteacherLoginBtn').onclick = () => handleLogin('classteacher', { staffNo: document.getElementById('ctStaffNo').value, password: document.getElementById('ctPassword').value });
    document.getElementById('hodLoginBtn').onclick = () => handleLogin('hod', { staffNo: document.getElementById('hodStaffNo').value, password: document.getElementById('hodPassword').value });
    document.getElementById('deputyLoginBtn').onclick = () => handleLogin('deputy', { password: document.getElementById('deputyPassword').value });
    document.getElementById('logoutBtn').onclick = () => { sessionStorage.clear(); location.reload(); };
    
    document.querySelectorAll('.role-btn').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.role-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const role = btn.dataset.role;
            const roleMap = { student: 'studentLogin', classrep: 'classrepLogin', lecturer: 'lecturerLogin', classteacher: 'classteacherLogin', hod: 'hodLogin', deputy: 'deputyLogin' };
            document.querySelectorAll('.login-form').forEach(form => form.classList.remove('active'));
            document.getElementById(roleMap[role]).classList.add('active');
        };
    });
}

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

initializeData();
initTheme();
initEventListeners();

const savedUser = sessionStorage.getItem('currentUser');
if (savedUser) { const user = JSON.parse(savedUser); showDashboard(user.role, user); }

// ==================== HOD ACCOUNT CREATION ====================
window.createHodAccount = function() {
    const name = document.getElementById('newHodName')?.value?.trim();
    const staffNo = document.getElementById('newHodStaffNo')?.value?.trim();
    const department = document.getElementById('newHodDept')?.value;

    if (!name || !staffNo || !department) {
        return alert('❌ Please fill all fields!');
    }

    const data = getData();

    // Check if staff number already exists
    if ((data.hods || []).find(h => h.id === staffNo)) {
        return alert('❌ Staff number already exists!');
    }

    // Check if department already has HOD
    const existingHod = (data.hods || []).find(h => h.department === department);
    if (existingHod) {
        if (!confirm(`${department} already has H.O.D (${existingHod.name}). Replace?`)) return;
        data.hods = data.hods.filter(h => h.department !== department);
    }

    // Generate password: HOD-[Initials]-[Random4digits]
    const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
    const random = Math.floor(1000 + Math.random() * 9000);
    const password = `HOD-${initials}-${random}`;

    // Save HOD
    if (!data.hods) data.hods = [];
    data.hods.push({
        id: staffNo,
        name,
        department,
        password
    });
    saveData(data);

    // Show result
    document.getElementById('hodAccountResult').innerHTML = `
        <div style="background:rgba(34,197,94,0.1); border:1px solid var(--success);
        border-radius:10px; padding:1rem; text-align:center;">
            <div style="color:var(--success); font-weight:700; margin-bottom:0.5rem;">
                ✅ H.O.D Account Created!
            </div>
            <div style="font-size:0.9rem; margin-bottom:0.3rem;">
                <strong>Name:</strong> ${name}
            </div>
            <div style="font-size:0.9rem; margin-bottom:0.3rem;">
                <strong>Staff No:</strong> ${staffNo}
            </div>
            <div style="font-size:0.9rem; margin-bottom:0.3rem;">
                <strong>Department:</strong> ${department}
            </div>
            <div style="font-family:monospace; font-size:1.3rem; color:var(--accent);
            letter-spacing:2px; margin-top:0.5rem; padding:0.5rem;
            background:var(--bg-elevated); border-radius:8px;">
                ${password}
            </div>
            <div style="font-size:0.8rem; color:var(--text-secondary); margin-top:0.5rem;">
                Share this password with the H.O.D — they use it to login
            </div>
        </div>
    `;

    // Refresh deputy dashboard to show updated HODs table
    renderDeputyDashboard();
};