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

            deputyAcadProfile: {
    fullName: 'Dr. Charles Otieno',
    email: 'charles.otieno@pcktti.ac.ke',
    phone: '0722 456 789'
},
deputyAcadReceived: [
    { id:'DAR-DEMO-01', from:'Principal', fromRole:'principal', subject:'Term Directive — Academic Standards Review', message:'Please review and report on academic standards across all departments this term.', timestamp:'2026-06-20T09:00:00.000Z', read:false },
    { id:'DAR-DEMO-02', from:'Finance', fromRole:'finance', subject:'Uncleared Fees — Exam Blockers', message:'3 students remain uncleared for this exam cycle. See attached list for follow-up.', timestamp:'2026-06-19T09:00:00.000Z', read:false },
    { id:'DAR-DEMO-03', from:'HOD', fromRole:'hod', subject:'Special Exam Case — Medical Deferral', message:'Requesting approval for a deferred exam sitting due to medical leave.', timestamp:'2026-06-18T09:00:00.000Z', read:false },
    { id:'DAR-DEMO-04', from:'Dean of Students', fromRole:'dean_admin', subject:'Discipline Escalation Affecting Academics', message:'Student under disciplinary review — please hold exam registration pending outcome.', timestamp:'2026-06-17T09:00:00.000Z', read:false },
    { id:'DAR-DEMO-05', from:'Exam Office', fromRole:'examoffice', subject:'Rejected Registration — Missing Documents', message:'Registration rejected due to incomplete unit selection. Escalating for review.', timestamp:'2026-06-16T09:00:00.000Z', read:false },
    { id:'DAR-DEMO-06', from:'System Admin', fromRole:'admin', subject:'New Academic Year Setup', message:'Academic year 2026/2027 structure has been created. Please review department mappings.', timestamp:'2026-06-15T09:00:00.000Z', read:false }
],
deputyAcadSentItems: [],
            examOfficeReceived: [
    { id:'EOR-DEMO-01', from:'System Admin', fromRole:'admin', subject:'New Unit Allocation — CS105', message:'Please review and confirm intake for CS105 for Computer Studies students.', fileName:'unit_allocation_cs105.pdf', studentId:null, studentName:null, department:'Computer Studies', course:null, timestamp:'2026-06-20T09:00:00.000Z', status:'pending', read:false },
    { id:'EOR-DEMO-02', from:'Deputy (Academics)', fromRole:'deputy_acad', subject:'Special Exam Approval — Brian Otieno', message:'Approved special sitting for Brian Otieno. Please book accordingly.', fileName:null, studentId:'STU-2026-20671', studentName:'Brian Otieno', department:'Computer Studies', course:'Diploma in Computer Studies', timestamp:'2026-06-21T09:00:00.000Z', status:'pending', read:false },
    { id:'EOR-DEMO-03', from:'Principal', fromRole:'principal', subject:'Directive — Priority Booking for Finalists', message:'Kindly prioritize booking of final-year students this week.', fileName:null, studentId:null, studentName:null, department:null, course:null, timestamp:'2026-06-19T09:00:00.000Z', status:'confirmed', read:true },
    { id:'EOR-DEMO-04', from:'Registrar', fromRole:'register', subject:'Updated Course List', message:'Attached the updated official course list for this term.', fileName:'course_list_2026.pdf', studentId:null, studentName:null, department:null, course:null, timestamp:'2026-06-18T09:00:00.000Z', status:'rejected', rejectionReason:'Duplicate of previous submission', read:true }
],
examOfficeBookings: [],
examOfficeStore: [],
examOfficeSentItems: [],
deputyAcadReceived: [],
registrarReceived: [],
principalReceived: [],

            schoolTour: {
                library:  { images: ["https://placehold.co/400x300/6c3fcf/white?text=Library"], videos: [] },
                sports:   { images: ["https://placehold.co/400x300/2563eb/white?text=Sports+Field"], videos: [] },
                hostel_m: { images: ["https://placehold.co/400x300/6c3fcf/white?text=Male+Hostel"], videos: [] },
                hostel_f: { images: ["https://placehold.co/400x300/2563eb/white?text=Female+Hostel"], videos: [] },
                field:    { images: ["https://placehold.co/400x300/6c3fcf/white?text=Main+Field"], videos: [] }
            },

            studentWallRecords: [
    { id:'SW-001', admissionNo:'STU-1985-00012', name:'James Kariuki', department:'Automotive Engineering', yearJoined:1985, yearGraduated:1987, status:'graduated', statusHistory:[] },
    { id:'SW-002', admissionNo:'STU-1992-00045', name:'Mary Wanjiru', department:'Business', yearJoined:1992, yearGraduated:1994, status:'graduated', statusHistory:[] },
    { id:'SW-003', admissionNo:'STU-2001-00108', name:'Samuel Otieno', department:'Electrical Engineering', yearJoined:2001, yearGraduated:null, status:'not_graduated', statusHistory:[] },
    { id:'SW-004', admissionNo:'STU-2015-00390', name:'Grace Achieng', department:'Computer Studies', yearJoined:2015, yearGraduated:2017, status:'graduated', statusHistory:[] },
    { id:'SW-005', admissionNo:'STU-2026-20669', name:'John Mwangi', department:'Computer Studies', yearJoined:2026, yearGraduated:null, status:'not_graduated', statusHistory:[] }
            ],
            infrastructureList: ["library", "sports", "hostel_m", "hostel_f", "field"],
            departments: ['Computer Studies', 'Hospitality', 'Automotive Engineering', 'Electrical Engineering', 'Civil Engineering', 'Business'],
            hospitalVisits: [
                { id: 'HV-001', studentId: 'STU-2026-20669', studentName: 'John Mwangi', department: 'Computer Studies', purpose: 'Persistent headache and fever since morning — possible malaria', requestedAt: '2026-06-22T10:00:00.000Z', status: 'pending' },
                { id: 'HV-002', studentId: 'STU-2026-20673', studentName: 'Peter Njoroge', department: 'Computer Studies', purpose: 'Severe stomach ache after lunch. Vomiting twice since noon.', requestedAt: '2026-06-23T13:00:00.000Z', status: 'pending' }
            ],
            mess: { id: 'MESS-001', name: 'Mess Supervisor', password: 'mess123' },

mealCategories: [
    { id:'MC-01', session:'morning',   name:'Starch',   meals:[{id:'M-01',name:'Bread'},{id:'M-02',name:'Chapati'},{id:'M-03',name:'Porridge'}] },
    { id:'MC-02', session:'morning',   name:'Drink',     meals:[{id:'M-04',name:'Tea'},{id:'M-05',name:'Milk'}] },
    { id:'MC-03', session:'afternoon', name:'Starch',    meals:[{id:'M-06',name:'Rice'},{id:'M-07',name:'Ugali'},{id:'M-08',name:'Chapati'}] },
    { id:'MC-04', session:'afternoon', name:'Stew',      meals:[{id:'M-09',name:'Beef Stew'},{id:'M-10',name:'Beans'},{id:'M-11',name:'Vegetables'}] },
    { id:'MC-05', session:'evening',   name:'Starch',    meals:[{id:'M-12',name:'Rice'},{id:'M-13',name:'Ugali'}] },
    { id:'MC-06', session:'evening',   name:'Stew',      meals:[{id:'M-14',name:'Fish Stew'},{id:'M-15',name:'Beans'}] }
],

hostelClearances: {
    female: [
        { id:'HC-F-01', studentId:'STU-2026-20670', studentName:'Sarah Achieng', department:'Computer Studies', clearedBy:'Matron', date:'2026-07-05T10:00:00.000Z' }
    ],
    male: [
        { id:'HC-M-01', studentId:'STU-2026-20669', studentName:'John Mwangi', department:'Computer Studies', clearedBy:'Patron', date:'2026-07-04T10:00:00.000Z' }
    ]
},
disciplineRecords: [
    { id:'DR-DEMO-01', studentId:'STU-2026-20673', studentName:'Peter Njoroge', department:'Computer Studies', severity:'minor', date:'2026-07-02T09:00:00.000Z', offense:'Late to class three times this week', action:'Verbal warning issued', recordedBy:'Front Office', timestamp:'2026-07-02T09:00:00.000Z' }
],

mealOrders: [],
messWindowOverrides: { morning: null, afternoon: null, evening: null },
messBoarders: [],
messComplaints: [],
deanComplaints: [],
          
           deanAdmin:   { id:'DEAN-ADMIN-001', name:'Dean of Students', password:'dean-4321' },
deputyDean1: { id:'DDEAN-001', name:'Deputy Dean 1', password:'deputy123' },
deputyDean2: { id:'DDEAN-002', name:'Deputy Dean 2', password:'deputy4321' },
frontOffice: { id:'FRONT-001', name:'Front Office', password:'front4321' },

frontOfficeReceived: [
    { id:'FOR-DEMO-01', from:'Finance Office', fromRole:'finance', subject:'Fee Clearance Summary — June', message:'12 students fully cleared fees for June intake. Please confirm and forward.', timestamp:'2026-06-20T09:00:00.000Z', status:'pending', read:false },
    { id:'FOR-DEMO-02', from:'Mess Department', fromRole:'mess', subject:'Weekly Meal Attendance Report', message:'320 meals served this week. 4 shortage incidents reported.', timestamp:'2026-06-19T09:00:00.000Z', status:'pending', read:false },
    { id:'FOR-DEMO-03', from:'Class Reps', fromRole:'classrep', subject:'Computer Studies — Attendance Concern', message:'Several students in Form 3C not attending regularly. Requesting Dean intervention.', timestamp:'2026-06-18T09:00:00.000Z', status:'pending', read:false },
    { id:'FOR-DEMO-04', from:'KITCO', fromRole:'kitco', subject:'Cultural Festival Proposal', message:'Requesting approval and budget allocation for Annual Cultural Festival 2026.', timestamp:'2026-06-17T09:00:00.000Z', status:'pending', read:false },
    { id:'FOR-DEMO-05', from:'Principal', fromRole:'principal', subject:'Directive — Term Closing Procedures', message:'Please ensure all clearance and welfare records are up to date before term closes.', timestamp:'2026-06-16T09:00:00.000Z', status:'confirmed', read:true },
    { id:'FOR-DEMO-06', from:'Deputy Dean 1', fromRole:'deputy_dean', subject:'Discipline Escalation — Repeat Offender', message:'Student has a third minor offense this term. Recommend Dean review.', timestamp:'2026-06-15T09:00:00.000Z', status:'pending', read:false }
],

deputyDeanReceived: [],
deanAdminReceived: [],
deanAdminReview: [],
deanAdminSentItems: [],
classRepReceived: [],
kitcoReceived: [],
messReceivedFromDean: [], 
            medicalRecords: [
                { id: 'MR-001', visitId: 'HV-DEMO', studentId: 'STU-2026-20675', studentName: 'Kevin Oduya', department: 'Computer Studies', phone: '0778901234', complaint: 'Ankle sprain from football practice', diagnosis: 'Grade 1 lateral ankle sprain', treatment: 'Bandage applied. Anti-inflammatory administered.', drugsAvailable: 'yes', referral: false, referralReason: null, doctorRemarks: 'Rest foot for 3 days. Return if swelling worsens.', cost: 200, billedToFinance: true, recordedAt: '2026-06-20T14:00:00.000Z' }
            ],
            hospitalBills: [
                { id: 'HB-001', recordId: 'MR-001', studentId: 'STU-2026-20675', studentName: 'Kevin Oduya', department: 'Computer Studies', amount: 200, description: 'Medical treatment — Grade 1 ankle sprain', sentToFinance: true, timestamp: '2026-06-20T15:00:00.000Z' }
            ],
            hospitalStorage: [
               { id:'HS-DEMO-001', category:'Visit Request', studentId:'STU-2026-20669', studentName:'John Mwangi', department:'Computer Studies', description:'Visit requested — Persistent headache and fever since morning', timestamp:'2026-06-22T10:00:00.000Z' },
                { id:'HS-DEMO-002', category:'Medical Record', studentId:'STU-2026-20675', studentName:'Kevin Oduya', department:'Computer Studies', description:'Diagnosis: Grade 1 lateral ankle sprain. Treatment: Bandage applied.', amount:200, timestamp:'2026-06-20T14:00:00.000Z' },
                  { id:'HS-DEMO-003', category:'Bill Sent to Finance', studentId:'STU-2026-20675', studentName:'Kevin Oduya', department:'Computer Studies', description:'Medical treatment — Grade 1 ankle sprain', amount:200, timestamp:'2026-06-20T15:00:00.000Z' },
                    { id:'HS-DEMO-004', category:'Rejected Visit', studentId:'STU-2026-20673', studentName:'Peter Njoroge', department:'Computer Studies', description:'Visit rejected — Reason: Student did not show up for consultation', timestamp:'2026-06-23T13:30:00.000Z' }
],
            financeReceived: [
                { id: 'FIN-001', from: 'Hospital', fromRole: 'hospital', subject: 'Medical Bill — Kevin Oduya', message: 'Student: Kevin Oduya (STU-2026-20675), Department: Computer Studies. Treatment cost: KSh 200. Description: Medical treatment — Grade 1 ankle sprain. Please add to student fee account.', amount: 200, studentId: 'STU-2026-20675', studentName: 'Kevin Oduya', timestamp: '2026-06-20T15:00:00.000Z', read: false, addedToFees: false }
            ], 
            disciplineRecords: [
                { id: 'DR-001', studentId: 'STU-2026-20669', studentName: 'John Mwangi', department: 'Computer Studies', offense: 'Unauthorized absence from examination hall', date: '2026-05-10', severity: 'minor', action: 'Written warning issued. Student counselled by Dean.', recordedBy: 'Dean of Students', status: 'active', sentToAdmin: false, timestamp: '2026-05-10T09:00:00.000Z' },
                { id: 'DR-002', studentId: 'STU-2026-20675', studentName: 'Kevin Oduya', department: 'Computer Studies', offense: 'Repeated disruption of class and insubordination to Lecturer', date: '2026-06-01', severity: 'moderate', action: 'Suspended 3 days. Parents notified. On probation for rest of semester.', recordedBy: 'Dean of Students', status: 'active', sentToAdmin: true, timestamp: '2026-06-01T11:00:00.000Z' }
            ],
            hostelResidents: [
                { id: 'HR-001', studentId: 'STU-2026-20670', studentName: 'Sarah Achieng', gender: 'Female', room: 'Room 14B', wing: 'Female Wing', admittedDate: '2024-01-10', status: 'resident', clearedForExit: false },
                { id: 'HR-002', studentId: 'STU-2026-20674', studentName: 'Faith Kamau', gender: 'Female', room: 'Room 22A', wing: 'Female Wing', admittedDate: '2024-01-10', status: 'resident', clearedForExit: false },
                { id: 'HR-003', studentId: 'STU-2026-20673', studentName: 'Peter Njoroge', gender: 'Male', room: 'Room 8C', wing: 'Male Wing', admittedDate: '2024-01-10', status: 'resident', clearedForExit: false },
                { id: 'HR-004', studentId: 'STU-2026-20675', studentName: 'Kevin Oduya', gender: 'Male', room: 'Room 12A', wing: 'Male Wing', admittedDate: '2024-01-10', status: 'resident', clearedForExit: false }
            ],
            hostelClearances: [
                { id: 'HC-001', studentId: 'STU-2026-20674', studentName: 'Faith Kamau', gender: 'Female', room: 'Room 22A', clearedBy: 'hostel_matron', clearedByName: 'Mrs. Grace Njeri', clearanceDate: '2026-06-21', sentToDean: true, timestamp: '2026-06-21T15:00:00.000Z' },
                { id: 'HC-002', studentId: 'STU-2026-20673', studentName: 'Peter Njoroge', gender: 'Male', room: 'Room 8C', clearedBy: 'hostel_patron', clearedByName: 'Mr. James Kamau', clearanceDate: '2026-06-19', sentToDean: true, timestamp: '2026-06-19T14:00:00.000Z' }
            ],
            deanReceived: [
                { id: 'DRV-001', from: 'Finance Office', fromRole: 'finance', subject: 'Fee Clearance Update', message: 'Students who have fully cleared fees as of 20th June 2026: John Mwangi (STU-2026-20669), Faith Kamau (STU-2026-20674). These students are eligible for end-term processing.', timestamp: '2026-06-20T09:00:00.000Z', read: false },
                { id: 'DRV-002', from: 'Hostel — Matron', fromRole: 'hostel_matron', subject: 'Female Wing Clearance List', message: 'The following female students have been cleared from the hostel: Faith Kamau (Room 22A). Room keys returned and inspection completed.', timestamp: '2026-06-21T15:00:00.000Z', read: false },
                { id: 'DRV-003', from: 'Hostel — Patron', fromRole: 'hostel_patron', subject: 'Male Wing Clearance List', message: 'The following male students have been cleared: Peter Njoroge (Room 8C). Room inspection done, clearance granted.', timestamp: '2026-06-19T14:00:00.000Z', read: false }
            ],
            sysAdminReceived: [
                { id: 'SAR-001', from: 'Dean of Students', fromRole: 'dean', subject: 'Weekly Discipline Report — Week ending 7 June 2026', message: 'Discipline record: Kevin Oduya (STU-2026-20675) — Repeated disruption and insubordination. Suspended 3 days. Parents notified.', timestamp: '2026-06-07T17:00:00.000Z', read: false }
            ],
              // In initializeData(), add passcode field:
             hostel_matron: { id: 'MATRON-001', name: 'Mama Rose', password: 'matron123', passcode: null, gender: 'Female' },
             hostel_patron: { id: 'PATRON-001', name: 'Baba John', password: 'patron123', passcode: null, gender: 'Male' },

            students: [
                {
                    id: 'STU-2026-20669', name: 'John Mwangi', department: 'Computer Studies', class: 'Form 3C',
                    passcode: '1234', phone: '0712345678', email: 'john.mwangi@student.pck.ac.ke',
                    gender: 'Male', dob: '2003-04-12', county: 'Nairobi',
                    level: 'Diploma', programCode: 'DCS-P', learningMode: 'CDACC (CBET)',
                    enrollmentDate: '2024-01-01', programDuration: '3 years', totalModules: 18,
                    feeBalance: 0, totalFee: 65000, status: 'active', deferReason: null,
                    paymentHistory: [
                        { amount: 39000, date: '2025-01-01', ref: 'REF713037' },
                        { amount: 26000, date: '2025-02-15', ref: 'REF416275' }
                    ],
                    attendance: { total: 45, attended: 38 },
                    examHistory: { 'CS101': 1, 'CS102': 0 },
                    results: [
                        { module: 'Apply Occupational Safety and Health Practices', score: 78, competency: 'Competent', remarks: 'Demonstrated required competency' }
                    ]
                },
                {
                    id: 'STU-2026-20670', name: 'Sarah Achieng', department: 'Computer Studies', class: 'Form 3C',
                    passcode: '5678', phone: '0723456789', email: 'sarah.achieng@student.pck.ac.ke',
                    gender: 'Female', dob: '2004-09-02', county: 'Kisumu',
                    level: 'Diploma', programCode: 'DCS-P', learningMode: 'CDACC (CBET)',
                    enrollmentDate: '2024-01-01', programDuration: '3 years', totalModules: 18,
                    feeBalance: 25000, totalFee: 65000, status: 'active', deferReason: null,
                    paymentHistory: [
                        { amount: 40000, date: '2025-01-10', ref: 'REF551209' }
                    ],
                    attendance: { total: 45, attended: 35 },
                    examHistory: {},
                    results: [
                        { module: 'Apply Entrepreneurial Skills', score: 47, competency: 'Not Yet Competent', remarks: 'Needs more practice' }
                    ]
                },
                {
                    id: 'STU-2026-20671', name: 'Brian Otieno', department: 'Computer Studies', class: 'Form 3C',
                    passcode: '9012', phone: '0734567890', email: 'brian.otieno@student.pck.ac.ke',
                    gender: 'Male', dob: '2003-11-20', county: 'Nairobi',
                    level: 'Diploma', programCode: 'DCS-P', learningMode: 'CDACC (CBET)',
                    enrollmentDate: '2024-01-01', programDuration: '3 years', totalModules: 18,
                    feeBalance: 65000, totalFee: 65000, status: 'not_attending', deferReason: null,
                    paymentHistory: [],
                    attendance: { total: 45, attended: 4 },
                    examHistory: {},
                    results: []
                },
               {
                    id: 'STU-2026-20673', name: 'Peter Njoroge', department: 'Computer Studies', class: 'Form 3C',
                    passcode: '7890', phone: '0756789012', email: 'peter.njoroge@student.pck.ac.ke',
                    gender: 'Male', dob: '2003-07-15', county: 'Kiambu',
                    level: 'Diploma', programCode: 'DCS-P', learningMode: 'CDACC (CBET)',
                    enrollmentDate: '2024-01-01', programDuration: '3 years', totalModules: 18,
                    feeBalance: 10000, totalFee: 65000, status: 'active', deferReason: null,
                    paymentHistory: [], attendance: { total: 45, attended: 40 }, examHistory: {}, results: []
                },
                {
                    id: 'STU-2026-20674', name: 'Faith Kamau', department: 'Computer Studies', class: 'Form 3C',
                    passcode: '2345', phone: '0767890123', email: 'faith.kamau@student.pck.ac.ke',
                    gender: 'Female', dob: '2004-01-30', county: "Murang'a",
                    level: 'Diploma', programCode: 'DCS-P', learningMode: 'CDACC (CBET)',
                    enrollmentDate: '2024-01-01', programDuration: '3 years', totalModules: 18,
                    feeBalance: 0, totalFee: 65000, status: 'active', deferReason: null,
                    paymentHistory: [], attendance: { total: 45, attended: 42 }, examHistory: {}, results: []
                },
                {
                    id: 'STU-2026-20675', name: 'Kevin Oduya', department: 'Computer Studies', class: 'Form 3C',
                    passcode: '6789', phone: '0778901234', email: 'kevin.oduya@student.pck.ac.ke',
                    gender: 'Male', dob: '2003-03-22', county: 'Kisumu',
                    level: 'Diploma', programCode: 'DCS-P', learningMode: 'CDACC (CBET)',
                    enrollmentDate: '2024-01-01', programDuration: '3 years', totalModules: 18,
                    feeBalance: 45000, totalFee: 65000, status: 'active', deferReason: null,
                    paymentHistory: [], attendance: { total: 45, attended: 30 }, examHistory: {}, results: []
                },
                {
                    id: 'STU-2026-20672', name: 'Mary Wambui', department: 'Computer Studies', class: 'Form 3C',
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
            principal:    { id: 'PRINCIPAL-001', name: 'Dr. Elizabeth Wanjiku', password: 'principal123' },
            hospital:     { id: 'HOSP-001', name: 'School Nurse', password: 'hospital123' },
            library:      { id: 'LIB-001', name: 'Librarian', password: 'library123' },
            admin:        { id: 'ADMIN-001', password: 'Admin@2026' },
            courses: [
                { id: 'CS101', name: 'Computer Essentials',          code: 'CS101' },
                { id: 'CS102', name: 'Computer Operations',           code: 'CS102' },
                { id: 'CS103', name: 'Networking & Data Structures',  code: 'CS103' },
                { id: 'CS104', name: 'Artificial Intelligence',       code: 'CS104' }
            ],
           examRegistrations: [],
            lecturerUnits: [
                { id: 'LU-001', code: 'CS101', name: 'Computer Essentials', level: 5, department: 'Computer Studies', lecturerId: 'LEC-2026-001', semester: 'March/April 2026', description: 'Introduction to computers and digital literacy' },
                { id: 'LU-002', code: 'CS102', name: 'Computer Operations', level: 5, department: 'Computer Studies', lecturerId: 'LEC-2026-001', semester: 'March/April 2026', description: 'Practical computer operations and software use' }
            ],
            attendanceRecords: [],
            markRegisterEntries: [],
            lecturerMaterials: [],
           studentReports: [
                { id: 'SR-HOD-001', studentId: 'STU-2026-20673', studentName: 'Peter Njoroge', lecturerId: 'LEC-2026-001', lecturerName: 'Jane Wanjiku', department: 'Computer Studies', report: 'Student has been absent for 5 consecutive sessions without notifying me. Performance has dropped significantly in CAM 2. Recommend HOD intervention and parent/guardian contact.', timestamp: '2026-06-18T09:00:00.000Z', status: 'pending_hod' },
                { id: 'SR-HOD-002', studentId: 'STU-2026-20675', studentName: 'Kevin Oduya', lecturerId: 'LEC-2026-001', lecturerName: 'Jane Wanjiku', department: 'Computer Studies', report: 'Student frequently disrupts the class and has refused to take practical assessments. Academic performance is at risk. Recommend formal disciplinary action.', timestamp: '2026-06-19T11:30:00.000Z', status: 'pending_hod' }
            ], 
            timetables: [
                { id: 'TT-001', department: 'Computer Studies', class: 'Form 3C', unit: 'Computer Essentials', unitCode: 'CS101', lecturerId: 'LEC-2026-001', day: new Date().toLocaleDateString('en-US', { weekday: 'long' }), startTime: '08:00', endTime: '10:00' },
                { id: 'TT-002', department: 'Computer Studies', class: 'Form 3C', unit: 'Computer Operations', unitCode: 'CS102', lecturerId: 'LEC-2026-001', day: new Date().toLocaleDateString('en-US', { weekday: 'long' }), startTime: '10:15', endTime: '12:15' }
            ],
            attendanceConfirmations: [],
            idRequests: [],
            noticeboard: [
                { id: 'n1', sender: 'System', message: 'Welcome to PCK Institute Management System', timestamp: new Date().toISOString(), recipient: 'all' }
            ],
            newsletterSubscribers: [],

            // Finance inboxes for departments that don't have one yet

hodReceived: [],
deputyInfraReceived: [],
procurementReceived: [],

// Finance's own archive & sent log
financeStore: [],
financeSentItems: [],

// Demo received items across every category so the workflow is visible immediately
financeReceived: [
    { id:'FIN-DEMO-01', from:'Hospital', fromRole:'hospital', subject:'Medical Bill — Kevin Oduya', message:'Treatment cost: KSh 200. Please add to student fee account.', amount:200, studentId:'STU-2026-20675', studentName:'Kevin Oduya', timestamp:'2026-06-20T15:00:00.000Z', read:false, addedToFees:false },
    { id:'FIN-DEMO-02', from:'System Admin', fromRole:'admin', subject:'New Fee Structure Circular', message:'Attached the revised fee structure for the new intake.', fileName:'fee_structure_2026.pdf', studentId:null, studentName:null, timestamp:'2026-06-18T09:00:00.000Z', read:false },
    { id:'FIN-DEMO-03', from:'Library', fromRole:'library', subject:'Overdue Book Fine — Faith Kamau', message:'Student has an outstanding fine of KSh 150 for an overdue book. Please add to fee account.', amount:150, studentId:'STU-2026-20674', studentName:'Faith Kamau', timestamp:'2026-06-19T10:00:00.000Z', read:false },
    { id:'FIN-DEMO-04', from:'Sports Admin', fromRole:'sportsadmin', subject:'Damaged Equipment Charge — Peter Njoroge', message:'Student damaged a football during practice. Replacement cost KSh 800.', amount:800, studentId:'STU-2026-20673', studentName:'Peter Njoroge', timestamp:'2026-06-17T14:00:00.000Z', read:false },
    { id:'FIN-DEMO-05', from:'Deputy (Academics)', fromRole:'deputy_acad', subject:'Special Case — Fee Waiver Consideration', message:'Please review Sarah Achieng for a partial fee waiver due to bursary approval.', studentId:'STU-2026-20670', studentName:'Sarah Achieng', timestamp:'2026-06-16T09:00:00.000Z', read:false },
    { id:'FIN-DEMO-06', from:'Exam Office', fromRole:'examoffice', subject:'Retake Fee Notice', message:'John Mwangi requires a retake fee of KSh 200 for CS102.', amount:200, studentId:'STU-2026-20669', studentName:'John Mwangi', timestamp:'2026-06-15T09:00:00.000Z', read:false },
    { id:'FIN-DEMO-07', from:'Dean of Students', fromRole:'dean', subject:'Disciplinary Fine — Kevin Oduya', message:'Student fined KSh 500 for damage to hostel property.', amount:500, studentId:'STU-2026-20675', studentName:'Kevin Oduya', timestamp:'2026-06-14T09:00:00.000Z', read:false }
],

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

function repairMissingFields() {
    const data = getData();
    if (!data.mess) { data.mess = { id:'MESS-001', name:'Mess Supervisor', password:'mess123' }; changed = true; }
if (!data.mealCategories) { data.mealCategories = []; changed = true; }
if (!data.mealOrders) { data.mealOrders = []; changed = true; }
if (!data.messWindowOverrides) { data.messWindowOverrides = { morning:null, afternoon:null, evening:null }; changed = true; }
if (!data.messBoarders) { data.messBoarders = []; changed = true; }
if (!data.messComplaints) { data.messComplaints = []; changed = true; }
if (!data.deanComplaints) { data.deanComplaints = []; changed = true; }
    if (!data) return;
    let changed = false;
    const requiredSingles = {
        hospital: { id:'HOSP-001', name:'School Nurse', password:'hospital123' },
        library: { id:'LIB-001', name:'Librarian', password:'library123' },
        dean: { id:'DEAN-001', name:'Dean of Students', password:'dean123', kitcoPasswords:[] },
        principal: { id:'PRINCIPAL-001', name:'Dr. Elizabeth Wanjiku', password:'principal123' },
        deputyAcad: { id:'DEP-ACAD-001', name:'Dr. Charles Otieno', password:'deputyacad123' },
        deputyInfra: { id:'DEP-INFRA-001', name:'Eng. Peter Maina', password:'deputyinfra123' },
        examOffice: { id:'EXAM-001', name:'Exam Officer', password:'exam123' },
        admin: { id:'ADMIN-001', password:'Admin@2026' },
        hostel_matron: { id:'MATRON-001', name:'Mama Rose', password:'matron123', gender:'Female' },
        hostel_patron: { id:'PATRON-001', name:'Baba John', password:'patron123', gender:'Male' },
    };
    Object.keys(requiredSingles).forEach(key => {
        if (!data[key]) { data[key] = requiredSingles[key]; changed = true; }
    });
    if (changed) { saveData(data); console.log('✅ Repaired missing login data.'); }
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
// ==================== HOME ====================
function showHome() {
    document.getElementById('schoolInfoPanel').style.display = 'block';
    document.getElementById('loginFormContainer').style.display = 'none';
    document.getElementById('dashboardContainer').style.display = 'none';

    // Reset active states
    document.querySelectorAll('.sidebar-menu li').forEach(l => l.classList.remove('active'));
    const homeItem = document.querySelector('.sidebar-menu li[data-role="home"]');
    if (homeItem) homeItem.classList.add('active');

    document.querySelectorAll('#magazineNav .btn-3d').forEach(b => b.classList.remove('active'));
    const homeBtn = document.querySelector('#magazineNav .btn-3d[data-page="home"]');
    if (homeBtn) homeBtn.classList.add('active');

    // Rebuild the full original home content
    const homeHTML = `
        <!-- INSTITUTE HEADER BANNER -->
        <div class="institute-header">
            <img src="kenya logo.png" alt="Kenya Coat of Arms" class="header-logo" onerror="this.src='https://placehold.co/70x70/5b21b6/white?text=KE'">
            <div class="header-text">
                <h1>PC KINYANJUI</h1>
                <h2>Technical Training Institute</h2>
                <div class="motto">Excellence in Technology</div>
            </div>
            <img src="pc k logo.png" alt="PCK Crest" class="header-logo" onerror="this.src='https://placehold.co/70x70/5b21b6/white?text=PCK'">
        </div>

        <!-- HERO TYPING -->
        <div class="hero-section" style="margin-top:1.5rem;">
            <div class="typing-container"><span id="typingText"></span><span class="cursor">|</span></div>
            <div class="hero-subtitle" id="subtitleText"></div>
        </div>

        <!-- PRINCIPALS -->
        <div class="section-card">
            <h3><i class="fas fa-landmark"></i> Principal's Office — History</h3>
            <div id="principalsContainer" class="principals-horizontal"></div>
        </div>

        <!-- Other sections like CBET, etc. can be added here if needed -->
    `;

    document.getElementById('schoolInfoPanel').innerHTML = homeHTML;

    // Re-run rendering functions
    renderPrincipals();
    // Re-run typing animation
    let i = 0, j = 0;
    const title = 'PC KINYANJUI TECHNICAL TRAINING INSTITUTE';
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
}

function showTourPage() {
    document.getElementById('schoolInfoPanel').style.display = 'block';
    document.getElementById('loginFormContainer').style.display = 'none';
    document.getElementById('dashboardContainer').style.display = 'none';

    const tourHTML = `
        <div style="max-width:1200px; margin:0 auto; padding:2rem 1rem;">
            <h2 style="text-align:center; color:white; margin-bottom:2rem; font-size:2.2rem;">
                <i class="fas fa-map-marked-alt"></i> School Tour
            </h2>

            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:1.5rem;">

                <!-- Admin Block -->
                <div class="tour-card">
                    <div class="tour-img-placeholder" style="background:linear-gradient(#4c1d95,#6c3fcf); height:180px; border-radius:12px; display:flex; align-items:center; justify-content:center; color:white; font-size:3rem;">🏛️</div>
                    <h3>Admin Block</h3>
                    <p>Principal's Office, Deputy Offices, Finance & Exam Office</p>
                    <small>Directions: Straight from main gate, first building on left</small>
                </div>

                <!-- Library -->
                <div class="tour-card">
                    <div class="tour-img-placeholder" style="background:linear-gradient(#1e3a8a,#3b82f6); height:180px; border-radius:12px; display:flex; align-items:center; justify-content:center; color:white; font-size:3rem;">📚</div>
                    <h3>Library</h3>
                    <p>Over 15,000 books & digital resources</p>
                    <small>Directions: Behind Admin Block, opposite Sports Field</small>
                </div>

                <!-- Sports -->
                <div class="tour-card">
                    <div class="tour-img-placeholder" style="background:linear-gradient(#166534,#4ade80); height:180px; border-radius:12px; display:flex; align-items:center; justify-content:center; color:white; font-size:3rem;">⚽</div>
                    <h3>Sports Complex</h3>
                    <p>Football, Basketball, Athletics Field</p>
                    <small>Directions: Right side of main campus</small>
                </div>

                <!-- Hostels -->
                <div class="tour-card">
                    <div class="tour-img-placeholder" style="background:linear-gradient(#4338ca,#6366f1); height:180px; border-radius:12px; display:flex; align-items:center; justify-content:center; color:white; font-size:3rem;">🏠</div>
                    <h3>Hostels</h3>
                    <p>Male & Female Hostels</p>
                    <small>Directions: Rear of campus, near dining hall</small>
                </div>

                <!-- Workshops & Labs -->
                <div class="tour-card">
                    <div class="tour-img-placeholder" style="background:linear-gradient(#b45309,#f59e0b); height:180px; border-radius:12px; display:flex; align-items:center; justify-content:center; color:white; font-size:3rem;">🔧</div>
                    <h3>Workshops & Labs</h3>
                    <p>Mechanical, Automotive, Electrical, Civil Engineering Labs</p>
                    <small>Directions: Left wing of main academic block</small>
                </div>

            </div>

            <div style="margin-top:3rem; text-align:center;">
                <button onclick="showHome()" class="btn-secondary" style="padding:1rem 2rem;">
                    ← Back to Home
                </button>
            </div>
        </div>
    `;

    document.getElementById('schoolInfoPanel').innerHTML = tourHTML;
}

function showNewsletterPage() {
    document.getElementById('schoolInfoPanel').style.display = 'block';
    document.getElementById('loginFormContainer').style.display = 'none';
    document.getElementById('dashboardContainer').style.display = 'none';

    const newsletterHTML = `
        <div style="max-width:1100px; margin:0 auto; padding:2rem 1rem; color:white;">
            <h2 style="text-align:center; margin-bottom:2.5rem; font-size:2.4rem;">
                <i class="fas fa-newspaper"></i> Stay in the Loop
            </h2>

            <!-- Principal's Latest Newsletter -->
            <div style="background:rgba(255,255,255,0.08); border-radius:16px; padding:2rem; margin-bottom:3rem; border:1px solid rgba(139,92,246,0.3);">
                <div style="display:flex; align-items:center; gap:1rem; margin-bottom:1.5rem;">
                    <div style="background:var(--purple-light); width:50px; height:50px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:1.8rem;">📢</div>
                    <div>
                        <h3 style="margin:0;">From the Principal's Office</h3>
                        <small style="color:#c4b5fd;">Posted on ${new Date().toLocaleDateString('en-KE')}</small>
                    </div>
                </div>
                <h4 style="color:#a5b4fc; margin-bottom:1rem;">End of Semester Message</h4>
                <p style="line-height:1.7; font-size:1.05rem;">
                    Dear Students and Staff,<br><br>
                    As we approach the end of this semester, I want to commend all of you for your hard work and dedication. 
                    Exam registration is now open — please complete yours on time.<br><br>
                    Remember: Excellence in Technology is our motto. Keep pushing forward!
                </p>
                <button class="btn-primary" style="margin-top:1.5rem;" onclick="alert('Newsletter downloaded as PDF (demo)')">
                    📄 Download Full Newsletter
                </button>
            </div>

            <!-- Subscribe Section -->
            <div style="background:rgba(255,255,255,0.08); border-radius:16px; padding:2.5rem; text-align:center;">
                <h3 style="margin-bottom:1rem;">Stay Updated with School News</h3>
                <p style="color:#c4b5fd; max-width:600px; margin:0 auto 2rem;">
                    Get exam dates, fee reminders, event announcements, and important notices delivered to your email.
                </p>
                
                <div style="max-width:420px; margin:0 auto;">
                    <input type="email" id="nl-email" placeholder="Enter your email address" 
                           style="width:100%; padding:1rem; border-radius:12px; border:none; background:rgba(255,255,255,0.1); color:white; margin-bottom:1rem;">
                    <button onclick="subscribeNewsletterFromPage()" 
                            style="width:100%; padding:1rem; font-size:1.1rem;">
                        SUBSCRIBE NOW
                    </button>
                </div>
                <p id="nl-msg" style="margin-top:1rem; min-height:1.2em;"></p>
            </div>

            <div style="text-align:center; margin-top:3rem;">
                <button onclick="showHome()" class="btn-secondary" style="padding:1rem 2rem;">
                    ← Back to Home
                </button>
            </div>
        </div>
    `;

    document.getElementById('schoolInfoPanel').innerHTML = newsletterHTML;
}

// Helper for newsletter subscription from the new page
window.subscribeNewsletterFromPage = function() {
    const email = document.getElementById('nl-email').value.trim();
    const msgEl = document.getElementById('nl-msg');
    
    if (!email) {
        msgEl.innerHTML = `<span style="color:#f87171;">Please enter a valid email</span>`;
        return;
    }

    const data = getData();
    if (!data.newsletterSubscribers) data.newsletterSubscribers = [];
    
    if (data.newsletterSubscribers.includes(email)) {
        msgEl.innerHTML = `<span style="color:#fbbf24;">You are already subscribed!</span>`;
    } else {
        data.newsletterSubscribers.push(email);
        saveData(data);
        msgEl.innerHTML = `<span style="color:#4ade80;">✅ Successfully subscribed! Thank you.</span>`;
        document.getElementById('nl-email').value = '';
    }
};

function showExaminationPage() {
    document.getElementById('schoolInfoPanel').style.display = 'block';
    document.getElementById('loginFormContainer').style.display = 'none';
    document.getElementById('dashboardContainer').style.display = 'none';

    const examHTML = `
        <div style="max-width:1100px; margin:0 auto; padding:2rem 1rem; color:white;">
            <h2 style="text-align:center; margin-bottom:2.5rem; font-size:2.4rem;">
                <i class="fas fa-file-alt"></i> Examination Department
            </h2>

            <!-- History & Current System -->
            <div style="background:rgba(255,255,255,0.08); border-radius:16px; padding:2rem; margin-bottom:2rem;">
                <h3 style="color:#c4b5fd; margin-bottom:1.5rem;">Examination Evolution</h3>
                
                <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px,1fr)); gap:1.5rem;">
                    <div>
                        <strong>NEC (National Examination Council)</strong><br>
                        <small style="color:#94a3b8;">Started • Ended</small>
                        <p style="margin-top:0.5rem; line-height:1.6;">Traditional examination system used in previous years.</p>
                    </div>
                    <div>
                        <strong>CBET (Competency Based Education & Training)</strong><br>
                        <small style="color:#4ade80;">Current • Ongoing</small>
                        <p style="margin-top:0.5rem; line-height:1.6;">We are currently using CBET system. Students register for modular units.</p>
                    </div>
                    <div>
                        <strong>MODULAR (Upcoming)</strong><br>
                        <small style="color:#facc15;">Starting Soon</small>
                        <p style="margin-top:0.5rem; line-height:1.6;">New modular system will be introduced in the near future.</p>
                    </div>
                </div>
            </div>

            <!-- Quick Info Cards -->
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px,1fr)); gap:1.5rem; margin-bottom:3rem;">
                <div class="tour-card">
                    <h3>📋 Exam Registration</h3>
                    <p>Students register units through the student portal. Approval goes through DEO → HOD → Finance → Deputy → Exam Office.</p>
                </div>
                <div class="tour-card">
                    <h3>📅 Current Status</h3>
                    <p>CBET exams are ongoing. Retake fee: KSh 200. Normal registration: KSh 1,500 per unit.</p>
                </div>
                <div class="tour-card">
                    <h3>📊 Reports</h3>
                    <p>Exam Office generates final registers and results. All records are stored digitally.</p>
                </div>
            </div>

            <div style="text-align:center;">
                <button onclick="showHome()" class="btn-secondary" style="padding:1rem 2rem;">
                    ← Back to Home
                </button>
            </div>
        </div>
    `;

    document.getElementById('schoolInfoPanel').innerHTML = examHTML;
}

function showGlobalNoticeBoard() {
    document.getElementById('schoolInfoPanel').style.display = 'block';
    document.getElementById('loginFormContainer').style.display = 'none';
    document.getElementById('dashboardContainer').style.display = 'none';

    const data = getData();
    const notices = data.noticeboard || [];

    let noticesHTML = notices.length === 0 
        ? `<p style="text-align:center; color:#94a3b8; padding:3rem;">No notices yet. Authorized offices will post here.</p>`
        : notices.slice().reverse().map(n => `
            <div style="background:rgba(255,255,255,0.08); border-radius:12px; padding:1.2rem; margin-bottom:1rem; border-left:4px solid #a855f7;">
                <div style="display:flex; justify-content:space-between; margin-bottom:0.8rem;">
                    <strong style="color:#c4b5fd;">${n.sender}</strong>
                    <small style="color:#94a3b8;">${new Date(n.timestamp).toLocaleDateString('en-KE')}</small>
                </div>
                <p style="line-height:1.6; color:white;">${n.message}</p>
            </div>
        `).join('');

    const html = `
        <div style="max-width:1100px; margin:0 auto; padding:2rem 1rem; color:white;">
            <h2 style="text-align:center; margin-bottom:2.5rem; font-size:2.4rem;">
                <i class="fas fa-bullhorn"></i> Global Notice Board
            </h2>

            <div style="background:rgba(255,255,255,0.08); border-radius:16px; padding:2rem; margin-bottom:2rem;">
                <h3 style="color:#c4b5fd; margin-bottom:1rem;">Latest Announcements</h3>
                <div id="noticesContainer">
                    ${noticesHTML}
                </div>
            </div>

            <div style="text-align:center; margin-top:2rem;">
                <button onclick="showHome()" class="btn-secondary" style="padding:1rem 2rem;">
                    ← Back to Home
                </button>
            </div>
        </div>
    `;

    document.getElementById('schoolInfoPanel').innerHTML = html;
}


// ==================== NAVIGATE TO ROLE ====================
function navigateToRole(role) {
    if (role === 'home') { 
        showHome(); 
        return; 
    }
    if (role === 'dean') { 
        showDeanSubLogin(); 
        return; 
    }
    if (role === 'hostels') { 
        showHostelSubLogin(); 
        return; 
    }

    if (role === 'tour') {
        showTourPage();
        return;
    }
    if (role === 'newsletter') {
        showNewsletterPage();
        return;
    }
    if (role === 'examination') {
        alert("📋 Examination page coming soon...");
        return;
    }
    if (role === 'noticeboard') {
        showGlobalNoticeBoard();   // ← You can change this later when ready
        return;
    }
    
    // ✅ UPDATED STUDENT WALL HANDLING
    if (role === 'studentwall' || role === 'studentWall') {
        showStudentWall();
        return;
    }

    // Highlight sidebar item
    document.querySelectorAll('.sidebar-menu li').forEach(l => l.classList.remove('active'));
    const sideItem = document.querySelector(`.sidebar-menu li[data-role="${role}"]`);
    if (sideItem) sideItem.classList.add('active');

    // SPECIAL HANDLING FOR SPORT CLUB
    if (role === 'sportclub') {
        showSportSubLogin();
        return;
    }
               
    // Normal login for other roles
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
   principal:      '🎓 Principal Login',
    hospital:       '🏥 Hospital Login',
    library:        '📚 Library Login',
    hostel_matron:  '👩 Matron Login — Female Wing',
  

};

function showLoginForm(role) {
    if (role === 'hostels') { showHostelSubLogin(); return; }
    selectedRole = role;
    document.getElementById('schoolInfoPanel').style.display = 'none';
    document.getElementById('loginFormContainer').style.display = 'block';
    document.getElementById('dashboardContainer').style.display = 'none';

    document.getElementById('loginTitle').innerHTML =
        `<i class="fas fa-sign-in-alt"></i> ${loginTitles[role] || role.toUpperCase() + ' Login'}`;

    const fields = document.getElementById('loginFields');

    // Roles that only need password (no separate ID field)
    const passOnlyRoles = ['deputy_acad', 'deputy_infra', 'admin', 'dean', 'examoffice', 'principal', 'hospital', 'library', 'hostel_matron', 'hostel_patron', 'mess'];
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
    if (!selectedRole) return;   // Guard at the very top

    const data = getData();
    const role = selectedRole;
    const id   = document.getElementById('loginId')?.value?.trim();
    const pass = document.getElementById('loginPass')?.value?.trim();

    let user = null;

    switch (role) {
        // Array-based users (require ID + password)
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

        // Single-object users (password only)
        case 'deputy_acad':
            if (data.deputyAcad && pass === data.deputyAcad.password) {
                user = data.deputyAcad;
            }
            break;

        case 'deputy_infra':
            if (data.deputyInfra && pass === data.deputyInfra.password) {
                user = data.deputyInfra;
            }
            break;

        case 'examoffice':
            if (data.examOffice && pass === data.examOffice.password) {
                user = data.examOffice;
            }
            break;

        case 'dean':
            if (data.dean && pass === data.dean.password) {
                user = data.dean;
            }
            break;

        case 'principal':
            if (data.principal && pass === data.principal.password) {
                user = data.principal;
            }
            break;

        case 'hospital':
            if (data.hospital && pass === data.hospital.password) {
                user = data.hospital;
            }
            break;

        case 'library':
            if (data.library && pass === data.library.password) {
                user = data.library;
            }
            break;

        case 'hostel_matron':
            if (data.hostel_matron && pass === data.hostel_matron.password) {
                user = data.hostel_matron;
            }
            break;

        case 'hostel_patron':
            if (data.hostel_patron && pass === data.hostel_patron.password) {
                user = data.hostel_patron;
            }
            break;

        case 'mess':
            // Support both data-driven password and hardcoded fallback
            if (pass === data.mess?.password || pass === 'mess-4321') {
                user = data.mess || { id: 'MESS-001', name: 'Mess Supervisor', role: 'mess' };
            }
            break;

        case 'admin':
            if (data.admin && pass === data.admin.password) {
                user = { role: 'admin', name: 'System Admin' };
            }
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
        content += renderStudentPanel(user);
        setTimeout(() => showStudentNotificationPopup(user), 400);
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
    } else if (role === 'principal') {
        content += renderPrincipalPanel(user);
    } else if (role === 'hospital') {
        content += renderHospitalPanel(user);
    } else if (role === 'library') {
        content += renderLibraryPanel(user);
    } else if (role === 'hostel_matron' || role === 'hostel_patron') {
    content += renderHostelPanel(user);
    } else if (role === 'sportsadmin') {
        content += renderSportsAdminPanel(user);
        } else if (role === 'mess') {
    content += renderMessPanel(user);
    } else if (role === 'sportleader') {
        content += renderSportLeaderPanel(user);
    } else if (role === 'admin') {
        content += renderAdminPanel();
    } else if (role === 'dean_admin') {
    content += renderDeanAdminPanel(user);
} else if (role === 'deputy_dean1' || role === 'deputy_dean2') {
    content += renderDeputyDeanPanel(user);
} else if (role === 'front_office') {
    content += renderFrontOfficePanel(user);
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
   HOD PORTAL — Full Implementation
══════════════════════════════════════════ */
function renderHODPanel(user) {
    const pendingCount = getHODPendingCount(user.department);
    return `
    <div class="admin-layout">
        <div class="admin-sidenav">
            <div class="admin-sidenav-title"><i class="fas fa-user-tie"></i> HOD Menu</div>
            <button class="admin-nav-btn" onclick="hodSection('profile',this)"><i class="fas fa-user"></i> Profile</button>
            <button class="admin-nav-btn active" onclick="hodSection('pending',this)">
                <i class="fas fa-inbox"></i> Pending
                ${pendingCount > 0 ? `<span style="background:var(--danger);color:#fff;border-radius:12px;padding:2px 7px;font-size:0.65rem;margin-left:4px;">${pendingCount}</span>` : ''}
            </button>
            <button class="admin-nav-btn" onclick="hodSection('confirmed',this)"><i class="fas fa-check-circle"></i> Confirmed</button>
            <button class="admin-nav-btn" onclick="hodSection('rejected',this)"><i class="fas fa-times-circle"></i> Rejected</button>
            <button class="admin-nav-btn" onclick="hodSection('staff',this)"><i class="fas fa-chalkboard-teacher"></i> Staff Management</button>
            <button class="admin-nav-btn" onclick="hodSection('units',this)"><i class="fas fa-book-open"></i> Units</button>
            <button class="admin-nav-btn" onclick="hodSection('report',this)"><i class="fas fa-chart-bar"></i> Department Report</button>
        </div>
        <div class="admin-main" id="hodMain">
            ${hodPendingHTML(user)}
        </div>
    </div>`;
}

function getHODPendingCount(department) {
    const data = getData();
    return (data.examRegistrations || []).filter(r => r.department === department && r.status === 'pending_hod').length
         + (data.studentReports || []).filter(r => r.department === department && r.status === 'pending_hod').length
         + (data.deputyFeeFlags || []).filter(f => f.department === department && f.status === 'pending_hod').length
         + (data.students || []).filter(s => s.department === department && (s.status === 'not_attending' || s.status === 'deferred')).length;
}

window.hodSection = function(section, btn) {
    document.querySelectorAll('.admin-nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    const map = {
        profile:   () => hodProfileHTML(user),
        pending:   () => hodPendingHTML(user),
        confirmed: () => hodConfirmedHTML(user),
        rejected:  () => hodRejectedHTML(user),
        staff:     () => hodStaffHTML(user),
        units:     () => hodUnitsHTML(user),
        report:    () => hodReportHTML(user)
    };
    document.getElementById('hodMain').innerHTML = (map[section] || (() => hodPendingHTML(user)))();
};

/* ── Profile ── */
function hodProfileHTML(user) {
    const data = getData();
    const myStudents = (data.students || []).filter(s => s.department === user.department).length;
    const myUnits    = (data.lecturerUnits || []).filter(u => u.department === user.department).length;
    const deptStaff  = data.departmentStaff?.[user.department] || { lecturers: [] };

    return `
        <div class="admin-section-head">👤 My Profile</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:10px;">
                <div style="display:flex;gap:1.2rem;align-items:center;">
                    <div style="width:70px;height:70px;border-radius:50%;background:linear-gradient(135deg,#6c3fcf,#a855f7);display:flex;align-items:center;justify-content:center;font-size:2rem;color:white;flex-shrink:0;">👨‍💼</div>
                    <div>
                        <h3 style="margin:0;">${user.name || 'HOD'}</h3>
                        <div style="font-size:0.8rem;color:var(--text-secondary);">${user.id || '—'}</div>
                        <div style="margin-top:6px;display:flex;gap:6px;flex-wrap:wrap;">
                            <span class="admin-role-pill" style="background:rgba(108,63,207,.2);border-color:var(--purple);color:var(--purple-light);">🏛️ Head of Department</span>
                            <span class="admin-role-pill">${user.department}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">Personal Information</div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-top:10px;font-size:0.85rem;">
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">FULL NAME</span><br>${user.name || '—'}</div>
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">EMAIL</span><br>${user.email || '—'}</div>
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">PHONE</span><br>${user.phone || '—'}</div>
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">OFFICE</span><br>${user.officeNo || '—'}</div>
            </div>
        </div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">Academic Information</div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-top:10px;font-size:0.85rem;">
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">DEPARTMENT</span><br>${user.department || '—'}</div>
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">QUALIFICATION</span><br>${user.qualification || '—'}</div>
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">SPECIALIZATION</span><br>${user.specialization || '—'}</div>
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">YEARS OF SERVICE</span><br>${user.yearsOfService ? user.yearsOfService + ' years' : '—'}</div>
            </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:1rem;">
            <div class="stat-card"><h3>${myStudents}</h3><p>Total Students</p></div>
            <div class="stat-card"><h3>${(deptStaff.lecturers || []).length + 1}</h3><p>Staff Under HOD</p></div>
            <div class="stat-card"><h3>${myUnits}</h3><p>Units in Dept</p></div>
        </div>`;
}

/* ── Pending ── */
function hodPendingHTML(user) {
    const data = getData();
    const examPending  = (data.examRegistrations || []).filter(r => r.department === user.department && r.status === 'pending_hod');
    const repPending   = (data.studentReports || []).filter(r => r.department === user.department && r.status === 'pending_hod');
    const feeFlags     = (data.deputyFeeFlags || []).filter(f => f.department === user.department && f.status === 'pending_hod');
    const attAlerts    = (data.students || []).filter(s => s.department === user.department && (s.status === 'not_attending' || s.status === 'deferred'));
    const total        = examPending.length + repPending.length + feeFlags.length + attAlerts.length;

    const examCards = examPending.map(r => `
        <div style="padding:1rem;background:var(--bg-elevated);border-radius:14px;border-left:4px solid var(--purple);margin-bottom:10px;">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:6px;">
                <div>
                    <span class="admin-role-pill" style="background:rgba(108,63,207,.15);border-color:var(--purple);color:var(--purple-light);">📝 Exam Registration — from DEO</span>
                    <div style="font-weight:700;margin-top:6px;">${r.studentName}</div>
                    <div style="font-size:0.72rem;color:var(--text-secondary);">${r.studentId}</div>
                </div>
                <div style="font-size:0.72rem;color:var(--text-secondary);">${new Date(r.submittedDate).toLocaleDateString()}</div>
            </div>
            <div style="font-size:0.8rem;margin-top:8px;">
                Units: ${(r.units || []).map(u => `<span class="admin-role-pill" style="font-size:0.65rem;">${u.code}</span>`).join(' ')} &nbsp;
                Fee: <strong>KSh ${(r.totalExamFee || 0).toLocaleString()}</strong>
            </div>
            <div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap;">
                <button class="admin-action-btn edit" onclick="hodApproveExam('${r.id}')">✅ Approve → Finance</button>
                <button class="admin-action-btn danger" onclick="hodRejectExam('${r.id}','${r.studentName}')">❌ Reject</button>
            </div>
        </div>`).join('');

    const repCards = repPending.map(r => `
        <div style="padding:1rem;background:var(--bg-elevated);border-radius:14px;border-left:4px solid var(--warning);margin-bottom:10px;">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:6px;">
                <div>
                    <span class="admin-role-pill" style="background:rgba(245,158,11,.15);border-color:var(--warning);color:var(--warning);">⚠️ Lecturer Report</span>
                    <div style="font-weight:700;margin-top:6px;">${r.studentName}</div>
                    <div style="font-size:0.72rem;color:var(--text-secondary);">From: ${r.lecturerName || 'Lecturer'}</div>
                </div>
                <div style="font-size:0.72rem;color:var(--text-secondary);">${new Date(r.timestamp).toLocaleDateString()}</div>
            </div>
            <div style="font-size:0.82rem;margin-top:8px;padding:8px;background:rgba(255,255,255,.03);border-radius:8px;">${r.report}</div>
            <div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap;">
                <button class="admin-action-btn edit" onclick="hodAcknowledgeReport('${r.id}')">✅ Acknowledge</button>
                <button class="admin-action-btn danger" onclick="hodDismissReport('${r.id}')">Dismiss</button>
            </div>
        </div>`).join('');

    const feeCards = feeFlags.map(f => `
        <div style="padding:1rem;background:var(--bg-elevated);border-radius:14px;border-left:4px solid var(--danger);margin-bottom:10px;">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:6px;">
                <div>
                    <span class="admin-role-pill" style="background:rgba(239,68,68,.15);border-color:var(--danger);color:var(--danger);">💰 Deputy Fee Flag</span>
                    <div style="font-weight:700;margin-top:6px;">${f.studentName}</div>
                    <div style="font-size:0.72rem;color:var(--text-secondary);">Flagged by: ${f.flaggedBy}</div>
                </div>
                <div style="font-size:0.72rem;color:var(--text-secondary);">${new Date(f.timestamp).toLocaleDateString()}</div>
            </div>
            <div style="font-size:0.82rem;margin-top:8px;">${f.reason}</div>
            <div style="display:flex;gap:8px;margin-top:10px;">
                <button class="admin-action-btn edit" onclick="hodAcknowledgeFeeFlag('${f.id}','${f.studentName}')">✅ Acknowledge & Notify Student</button>
            </div>
        </div>`).join('');

    const attCards = attAlerts.map(s => `
        <div style="padding:1rem;background:var(--bg-elevated);border-radius:14px;border-left:4px solid ${s.status === 'deferred' ? 'var(--warning)' : 'var(--danger)'};margin-bottom:10px;">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:6px;">
                <div>
                    <span class="admin-role-pill" style="${s.status === 'deferred' ? 'background:rgba(245,158,11,.15);border-color:var(--warning);color:var(--warning);' : 'background:rgba(239,68,68,.15);border-color:var(--danger);color:var(--danger);'}">
                        ${s.status === 'deferred' ? '⏸ Deferred Student' : '🚫 Not Attending'} — from Class Rep
                    </span>
                    <div style="font-weight:700;margin-top:6px;">${s.name}</div>
                    <div style="font-size:0.72rem;color:var(--text-secondary);">${s.id}</div>
                </div>
            </div>
            ${s.deferReason ? `<div style="font-size:0.82rem;margin-top:6px;color:var(--text-secondary);">Reason: ${s.deferReason}</div>` : ''}
            <div style="display:flex;gap:8px;margin-top:10px;">
                <button class="admin-action-btn edit" onclick="hodNoteAttendance('${s.id}','${s.name}')">📝 Note & Take Action</button>
            </div>
        </div>`).join('');

    return `
        <div class="admin-section-head">📥 Pending — ${user.department} (${total})</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <p style="font-size:0.78rem;color:var(--text-secondary);">
                Unified inbox: exam registrations from DEO, student reports from Lecturers, fee flags from Deputy, and attendance alerts from Class Rep.
            </p>
        </div>
        ${examPending.length ? `<div class="admin-card" style="margin-bottom:1rem;"><div class="admin-card-title">📝 Exam Registrations from DEO (${examPending.length})</div><div style="margin-top:10px;">${examCards}</div></div>` : ''}
        ${repPending.length  ? `<div class="admin-card" style="margin-bottom:1rem;"><div class="admin-card-title">⚠️ Student Reports from Lecturers (${repPending.length})</div><div style="margin-top:10px;">${repCards}</div></div>` : ''}
        ${feeFlags.length    ? `<div class="admin-card" style="margin-bottom:1rem;"><div class="admin-card-title">💰 Fee Flags from Deputy (${feeFlags.length})</div><div style="margin-top:10px;">${feeCards}</div></div>` : ''}
        ${attAlerts.length   ? `<div class="admin-card" style="margin-bottom:1rem;"><div class="admin-card-title">🚨 Attendance Alerts from Class Rep (${attAlerts.length})</div><div style="margin-top:10px;">${attCards}</div></div>` : ''}
        ${total === 0 ? `<div class="admin-card"><p style="color:var(--success);text-align:center;padding:1rem;">✅ All caught up! No pending items.</p></div>` : ''}`;
}

/* ── Confirmed ── */
function hodConfirmedHTML(user) {
    const data = getData();
    const confirmed = (data.hodDecisions || []).filter(d => d.department === user.department && d.status === 'approved');
    const demo = [
        { id:'dc1', type:'exam_registration', studentName:'Brian Otieno', studentId:'STU-2026-20671', notes:'All requirements met. Forwarded to Finance.', decidedAt:'2026-06-10T10:00:00.000Z' },
        { id:'dc2', type:'student_report',    studentName:'Faith Kamau',   studentId:'STU-2026-20674', notes:'Student counselled. Performance improving.', decidedAt:'2026-06-12T14:00:00.000Z' }
    ];
    const items = confirmed.length ? confirmed : demo;
    return `
        <div class="admin-section-head">✅ Confirmed (${items.length})</div>
        <div class="admin-card">
            <div class="admin-card-title">Approved Items</div>
            <div style="margin-top:10px;">
                ${items.map(d => `
                <div style="padding:0.9rem;background:var(--bg-elevated);border-radius:12px;border-left:4px solid var(--success);margin-bottom:10px;">
                    <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:6px;">
                        <div>
                            <span class="admin-role-pill" style="background:rgba(16,185,129,.15);border-color:var(--success);color:var(--success);">✅ Approved</span>
                            <div style="font-weight:700;margin-top:6px;">${d.studentName}</div>
                            <div style="font-size:0.72rem;color:var(--text-secondary);">${d.type === 'exam_registration' ? '📝 Exam Registration' : '📋 Student Report'} • ${d.studentId || ''}</div>
                        </div>
                        <div style="font-size:0.72rem;color:var(--text-secondary);">${new Date(d.decidedAt).toLocaleDateString()}</div>
                    </div>
                    ${d.notes ? `<div style="font-size:0.78rem;margin-top:6px;color:var(--text-secondary);">Note: ${d.notes}</div>` : ''}
                </div>`).join('')}
            </div>
        </div>`;
}

/* ── Rejected ── */
function hodRejectedHTML(user) {
    const data = getData();
    const rejected = (data.hodDecisions || []).filter(d => d.department === user.department && d.status === 'rejected');
    const demo = [
        { id:'dr1', type:'exam_registration', studentName:'Kevin Oduya', studentId:'STU-2026-20675', reason:'Incomplete fee payment. Student must clear balance before registration can proceed.', decidedAt:'2026-06-11T09:00:00.000Z' }
    ];
    const items = rejected.length ? rejected : demo;
    return `
        <div class="admin-section-head">❌ Rejected (${items.length})</div>
        <div class="admin-card">
            <div class="admin-card-title">Rejected Items</div>
            <div style="margin-top:10px;">
                ${items.map(d => `
                <div style="padding:0.9rem;background:var(--bg-elevated);border-radius:12px;border-left:4px solid var(--danger);margin-bottom:10px;">
                    <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:6px;">
                        <div>
                            <span class="admin-role-pill" style="background:rgba(239,68,68,.15);border-color:var(--danger);color:var(--danger);">❌ Rejected</span>
                            <div style="font-weight:700;margin-top:6px;">${d.studentName}</div>
                            <div style="font-size:0.72rem;color:var(--text-secondary);">${d.type === 'exam_registration' ? '📝 Exam Registration' : '📋 Student Report'} • ${d.studentId || ''}</div>
                        </div>
                        <div style="font-size:0.72rem;color:var(--text-secondary);">${new Date(d.decidedAt).toLocaleDateString()}</div>
                    </div>
                    ${d.reason ? `<div style="font-size:0.78rem;margin-top:6px;padding:6px 8px;background:rgba(239,68,68,.06);border-radius:8px;">Reason: ${d.reason}</div>` : ''}
                </div>`).join('')}
            </div>
        </div>`;
}

/* ── Staff Management ── */
function hodStaffHTML(user) {
    const data = getData();
    const deptStaff  = data.departmentStaff?.[user.department] || { classTeacher: null, lecturers: [] };
    const ct         = deptStaff.classTeacher;
    const lecturers  = deptStaff.lecturers || [];

    return `
        <div class="admin-section-head">👩‍🏫 Staff Management — ${user.department}</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <p style="font-size:0.78rem;color:var(--text-secondary);">
                Register your Class Teacher (one only) and Lecturers for this department.
                When adding a lecturer, enter their System ID (assigned by System Admin) so unit assignments link correctly.
                Login credentials are managed by System Admin.
            </p>
        </div>

        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">🧑‍🏫 Class Teacher ${ct ? '✅' : '<span style="color:var(--warning);">⚠️ Not assigned</span>'}</div>
            ${ct ? `
            <div style="margin-top:10px;padding:0.8rem;background:rgba(16,185,129,.08);border:1px solid var(--success);border-radius:12px;">
                <strong>${ct.name}</strong>
                <div style="font-size:0.75rem;color:var(--text-secondary);margin-top:4px;">${ct.email || '—'} • ${ct.phone || '—'}</div>
                <button class="admin-action-btn danger" style="margin-top:8px;" onclick="hodRemoveClassTeacher('${user.department}')">Remove</button>
            </div>` : `
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-top:10px;">
                <div><label style="font-size:0.7rem;color:var(--text-secondary);">FULL NAME</label><input type="text" id="ctName" class="admin-input" placeholder="e.g. James Otieno" style="margin-top:4px;"></div>
                <div><label style="font-size:0.7rem;color:var(--text-secondary);">EMAIL</label><input type="text" id="ctEmail" class="admin-input" placeholder="e.g. j.otieno@pck.ac.ke" style="margin-top:4px;"></div>
                <div><label style="font-size:0.7rem;color:var(--text-secondary);">PHONE</label><input type="text" id="ctPhone" class="admin-input" placeholder="e.g. 0722111222" style="margin-top:4px;"></div>
            </div>
            <button class="admin-btn-primary" style="margin-top:12px;" onclick="hodAddClassTeacher('${user.department}')"><i class="fas fa-plus"></i> Assign Class Teacher</button>`}
        </div>

        <div class="admin-card">
            <div class="admin-card-title">👨‍💻 Lecturers (${lecturers.length})</div>
            ${lecturers.map(l => `
            <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:8px;padding:0.8rem 0;border-bottom:1px solid var(--border);">
                <div>
                    <strong>${l.name}</strong>
                    <div style="font-size:0.7rem;color:var(--text-secondary);">ID: ${l.id} • ${l.email || '—'} • ${l.phone || '—'}</div>
                    <div style="font-size:0.7rem;color:var(--purple-light);margin-top:2px;">${l.specialization || '—'}</div>
                </div>
                <button class="admin-action-btn danger" onclick="hodRemoveLecturer('${user.department}','${l.id}')">Remove</button>
            </div>`).join('') || '<p style="color:var(--text-secondary);font-size:0.85rem;margin-top:8px;">No lecturers added yet.</p>'}
            <div style="border-top:1px solid var(--border);margin-top:1rem;padding-top:1rem;">
                <div class="admin-card-title">Add Lecturer</div>
                <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:10px;margin-top:10px;">
                    <div><label style="font-size:0.7rem;color:var(--text-secondary);">FULL NAME</label><input type="text" id="lecName" class="admin-input" placeholder="e.g. Jane Wanjiku" style="margin-top:4px;"></div>
                    <div><label style="font-size:0.7rem;color:var(--text-secondary);">SYSTEM LOGIN ID</label><input type="text" id="lecSysId" class="admin-input" placeholder="e.g. LEC-2026-002" style="margin-top:4px;"></div>
                    <div><label style="font-size:0.7rem;color:var(--text-secondary);">EMAIL</label><input type="text" id="lecEmail" class="admin-input" placeholder="e.g. j.wanjiku@pck.ac.ke" style="margin-top:4px;"></div>
                    <div><label style="font-size:0.7rem;color:var(--text-secondary);">PHONE</label><input type="text" id="lecPhone" class="admin-input" placeholder="e.g. 0733222333" style="margin-top:4px;"></div>
                    <div><label style="font-size:0.7rem;color:var(--text-secondary);">SPECIALIZATION</label><input type="text" id="lecSpec" class="admin-input" placeholder="e.g. Digital Literacy" style="margin-top:4px;"></div>
                </div>
                <button class="admin-btn-primary" style="margin-top:12px;" onclick="hodAddLecturer('${user.department}')"><i class="fas fa-plus"></i> Add Lecturer</button>
            </div>
        </div>`;
}

/* ── Units ── */
function hodUnitsHTML(user) {
    const data       = getData();
    const units      = (data.lecturerUnits || []).filter(u => u.department === user.department);
    const deptStaff  = data.departmentStaff?.[user.department] || { lecturers: [] };
    const lecOptions = (deptStaff.lecturers || []).map(l => `<option value="${l.id}">${l.name}</option>`).join('');

    return `
        <div class="admin-section-head">📚 Units — ${user.department}</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <p style="font-size:0.78rem;color:var(--text-secondary);">
                Units come from System Admin (who receives them from the Examination Office). As HOD, you assign each unit to a specific Lecturer.
                Once assigned, the Lecturer sees it in their portal. Inform the Class Teacher to build the timetable accordingly.
            </p>
        </div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">➕ Add Unit (from System Admin allocation)</div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:10px;margin-top:10px;">
                <div><label style="font-size:0.7rem;color:var(--text-secondary);">UNIT NAME</label><input type="text" id="uName" class="admin-input" placeholder="e.g. Computer Essentials" style="margin-top:4px;"></div>
                <div><label style="font-size:0.7rem;color:var(--text-secondary);">UNIT CODE</label><input type="text" id="uCode" class="admin-input" placeholder="e.g. CS101" style="margin-top:4px;"></div>
                <div><label style="font-size:0.7rem;color:var(--text-secondary);">LEVEL</label><input type="number" id="uLevel" class="admin-input" placeholder="e.g. 5" min="1" max="8" style="margin-top:4px;"></div>
                <div><label style="font-size:0.7rem;color:var(--text-secondary);">ASSESSMENT SERIES</label><input type="text" id="uSemester" class="admin-input" placeholder="e.g. March/April 2026" style="margin-top:4px;"></div>
            </div>
            <button class="admin-btn-primary" style="margin-top:12px;" onclick="hodAddUnit('${user.department}')"><i class="fas fa-plus"></i> Add Unit</button>
        </div>
        <div class="admin-card">
            <div class="admin-card-title">All Units (${units.length})</div>
            ${units.length === 0
                ? `<p style="color:var(--text-secondary);font-size:0.85rem;margin-top:8px;">No units yet.</p>`
                : units.map(u => {
                    const lec = (deptStaff.lecturers || []).find(l => l.id === u.lecturerId);
                    return `
                    <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:10px;padding:0.9rem;background:var(--bg-elevated);border-radius:12px;margin-top:10px;">
                        <div>
                            <strong>${u.name}</strong><span class="admin-role-pill" style="margin-left:8px;">${u.code}</span>
                            <div style="font-size:0.72rem;color:var(--text-secondary);margin-top:4px;">Level ${u.level || '—'} • ${u.semester || '—'}</div>
                            <div style="font-size:0.75rem;margin-top:4px;">${lec ? `<span style="color:var(--success);">👨‍💻 ${lec.name}</span>` : `<span style="color:var(--warning);">⚠️ No lecturer assigned</span>`}</div>
                        </div>
                        <div style="display:flex;flex-direction:column;gap:6px;">
                            <select class="admin-input" id="lec_for_${u.id}" style="font-size:0.78rem;padding:4px 8px;">
                                <option value="">-- Assign Lecturer --</option>${lecOptions}
                            </select>
                            <button class="admin-action-btn edit" onclick="hodAssignLecturer('${u.id}')">Assign</button>
                        </div>
                    </div>`;
                }).join('')}
        </div>`;
}

/* ── Department Report ── */
function hodReportHTML(user) {
    const data         = getData();
    const students     = (data.students || []).filter(s => s.department === user.department);
    const units        = (data.lecturerUnits || []).filter(u => u.department === user.department);
    const examRegs     = (data.examRegistrations || []).filter(r => r.department === user.department);
    const repReports   = (data.studentReports || []).filter(r => r.department === user.department);
    const decisions    = (data.hodDecisions || []).filter(d => d.department === user.department);
    const deptStaff    = data.departmentStaff?.[user.department] || { lecturers: [] };
    const myUnitIds    = units.map(u => u.id);
    const attRecords   = (data.attendanceRecords || []).filter(r => myUnitIds.includes(r.unitId));

    const active    = students.filter(s => (s.status || 'active') === 'active').length;
    const notAtt    = students.filter(s => s.status === 'not_attending').length;
    const deferred  = students.filter(s => s.status === 'deferred').length;

    const approved  = examRegs.filter(r => ['pending_finance','pending_deputy','pending_exam','approved'].includes(r.status)).length;
    const pending   = examRegs.filter(r => r.status === 'pending_hod').length;
    const rejected  = examRegs.filter(r => r.status === 'rejected').length;

    let totalPresent = 0, totalAbsent = 0;
    attRecords.forEach(rec => {
        Object.values(rec.attendance || {}).forEach(v => { if (v === 'present') totalPresent++; else totalAbsent++; });
    });

    const studentBars = students.map(s => {
        let present = 0, total = 0;
        attRecords.forEach(r => { if (r.attendance[s.id] !== undefined) { total++; if (r.attendance[s.id] === 'present') present++; } });
        const pct = total ? Math.round((present / total) * 100) : 0;
        return { label: s.name.split(' ')[0], value: pct, color: pct >= 75 ? '#10b981' : '#ef4444' };
    });

    return `
        <div class="admin-section-head">📊 Department Report — ${user.department}</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">Student Attendance Rates</div>
            <div style="overflow-x:auto;margin-top:10px;">
                ${svgBarChart(studentBars.length ? studentBars : [{label:'No data',value:0,color:'#3a2d6e'}])}
            </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1rem;margin-bottom:1rem;">
            <div class="admin-card" style="text-align:center;">
                <div class="admin-card-title">Student Status</div>
                <div style="display:flex;justify-content:center;margin-top:10px;">
                    ${svgDonutChart([{value:active||0.0001,color:'#10b981'},{value:notAtt||0.0001,color:'#ef4444'},{value:deferred||0.0001,color:'#f59e0b'}])}
                </div>
                <div style="font-size:0.75rem;margin-top:8px;">
                    <span style="color:var(--success);">● Active ${active}</span> &nbsp;
                    <span style="color:var(--danger);">● Not Attending ${notAtt}</span> &nbsp;
                    <span style="color:var(--warning);">● Deferred ${deferred}</span>
                </div>
            </div>
            <div class="admin-card" style="text-align:center;">
                <div class="admin-card-title">Exam Registrations</div>
                <div style="display:flex;justify-content:center;margin-top:10px;">
                    ${svgDonutChart([{value:approved||0.0001,color:'#10b981'},{value:pending||0.0001,color:'#f59e0b'},{value:rejected||0.0001,color:'#ef4444'}])}
                </div>
                <div style="font-size:0.75rem;margin-top:8px;">
                    <span style="color:var(--success);">● Approved ${approved}</span> &nbsp;
                    <span style="color:var(--warning);">● Pending ${pending}</span> &nbsp;
                    <span style="color:var(--danger);">● Rejected ${rejected}</span>
                </div>
            </div>
            <div class="admin-card" style="text-align:center;">
                <div class="admin-card-title">Overall Attendance</div>
                <div style="display:flex;justify-content:center;margin-top:10px;">
                    ${svgDonutChart([{value:totalPresent||0.0001,color:'#10b981'},{value:totalAbsent||0.0001,color:'#ef4444'}])}
                </div>
                <div style="font-size:0.75rem;margin-top:8px;">
                    <span style="color:var(--success);">● Present ${totalPresent}</span> &nbsp;
                    <span style="color:var(--danger);">● Absent ${totalAbsent}</span>
                </div>
            </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:1rem;">
            <div class="stat-card"><h3>${students.length}</h3><p>Total Students</p></div>
            <div class="stat-card"><h3>${units.length}</h3><p>Units</p></div>
            <div class="stat-card"><h3>${(deptStaff.lecturers||[]).length}</h3><p>Lecturers</p></div>
            <div class="stat-card"><h3 style="color:var(--warning);">${pending}</h3><p>Pending Exams</p></div>
            <div class="stat-card"><h3 style="color:var(--danger);">${repReports.filter(r=>r.status==='pending_hod').length}</h3><p>Pending Reports</p></div>
            <div class="stat-card"><h3>${decisions.length}</h3><p>Decisions Made</p></div>
        </div>`;
}

/* ── HOD Window Actions ── */
window.hodApproveExam = function(regId) {
    const data = getData();
    const reg = data.examRegistrations.find(r => r.id === regId);
    if (!reg) return;
    reg.status = 'pending_finance';
    data.hodDecisions = data.hodDecisions || [];
    data.hodDecisions.push({ id:'HD-'+Date.now(), type:'exam_registration', itemId:regId, studentName:reg.studentName, studentId:reg.studentId, department:reg.department, status:'approved', notes:'Approved by HOD. Forwarded to Finance.', decidedAt:new Date().toISOString() });
    saveData(data);
    alert(`✅ ${reg.studentName}'s registration approved and forwarded to Finance.`);
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    document.getElementById('hodMain').innerHTML = hodPendingHTML(user);
};

window.hodRejectExam = function(regId, studentName) {
    const reason = prompt(`Reason for rejecting ${studentName}'s registration:`);
    if (!reason) return;
    const data = getData();
    const reg = data.examRegistrations.find(r => r.id === regId);
    if (!reg) return;
    reg.status = 'rejected'; reg.rejectedBy = 'HOD'; reg.rejectionReason = reason;
    data.hodDecisions = data.hodDecisions || [];
    data.hodDecisions.push({ id:'HD-'+Date.now(), type:'exam_registration', itemId:regId, studentName:reg.studentName, studentId:reg.studentId, department:reg.department, status:'rejected', reason, decidedAt:new Date().toISOString() });
    saveData(data);
    alert(`❌ ${studentName}'s registration rejected. Reason: "${reason}"`);
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    document.getElementById('hodMain').innerHTML = hodPendingHTML(user);
};

window.hodAcknowledgeReport = function(reportId) {
    const data = getData();
    const rep = data.studentReports.find(r => r.id === reportId);
    if (!rep) return;
    rep.status = 'reviewed_hod';
    data.hodDecisions = data.hodDecisions || [];
    data.hodDecisions.push({ id:'HD-'+Date.now(), type:'student_report', itemId:reportId, studentName:rep.studentName, studentId:rep.studentId, department:rep.department, status:'approved', notes:'Acknowledged by HOD.', decidedAt:new Date().toISOString() });
    saveData(data);
    alert(`✅ Report on ${rep.studentName} acknowledged.`);
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    document.getElementById('hodMain').innerHTML = hodPendingHTML(user);
};

window.hodDismissReport = function(reportId) {
    const data = getData();
    const rep = (data.studentReports || []).find(r => r.id === reportId);
    if (rep) rep.status = 'dismissed_hod';
    saveData(data);
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    document.getElementById('hodMain').innerHTML = hodPendingHTML(user);
};

window.hodAcknowledgeFeeFlag = function(flagId, studentName) {
    const data = getData();
    const flag = (data.deputyFeeFlags || []).find(f => f.id === flagId);
    if (flag) flag.status = 'acknowledged_hod';
    saveData(data);
    alert(`✅ Fee flag for ${studentName} acknowledged. Student will be notified.`);
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    document.getElementById('hodMain').innerHTML = hodPendingHTML(user);
};

window.hodNoteAttendance = function(studentId, studentName) {
    const action = prompt(`Action taken for ${studentName} (recorded for accountability):`);
    if (!action) return;
    const data = getData();
    const student = (data.students || []).find(s => s.id === studentId);
    data.hodDecisions = data.hodDecisions || [];
    data.hodDecisions.push({ id:'HD-'+Date.now(), type:'attendance_note', studentId, studentName, department:student?.department||'', status:'approved', notes:action, decidedAt:new Date().toISOString() });
    saveData(data);
    alert(`✅ Note recorded for ${studentName}: "${action}"`);
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    document.getElementById('hodMain').innerHTML = hodPendingHTML(user);
};

window.hodAddClassTeacher = function(department) {
    const name  = document.getElementById('ctName')?.value.trim();
    const email = document.getElementById('ctEmail')?.value.trim();
    const phone = document.getElementById('ctPhone')?.value.trim();
    if (!name) return alert('Class Teacher name is required.');
    const data = getData();
    data.departmentStaff = data.departmentStaff || {};
    data.departmentStaff[department] = data.departmentStaff[department] || { lecturers:[] };
    data.departmentStaff[department].classTeacher = { id:'CT-'+Date.now(), name, email:email||null, phone:phone||null, assignedAt:new Date().toISOString() };
    saveData(data);
    alert(`✅ ${name} assigned as Class Teacher for ${department}.`);
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    document.getElementById('hodMain').innerHTML = hodStaffHTML(user);
};

window.hodRemoveClassTeacher = function(department) {
    if (!confirm('Remove Class Teacher assignment?')) return;
    const data = getData();
    if (data.departmentStaff?.[department]) data.departmentStaff[department].classTeacher = null;
    saveData(data);
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    document.getElementById('hodMain').innerHTML = hodStaffHTML(user);
};

window.hodAddLecturer = function(department) {
    const name  = document.getElementById('lecName')?.value.trim();
    const sysId = document.getElementById('lecSysId')?.value.trim();
    const email = document.getElementById('lecEmail')?.value.trim();
    const phone = document.getElementById('lecPhone')?.value.trim();
    const spec  = document.getElementById('lecSpec')?.value.trim();
    if (!name) return alert('Lecturer name is required.');
    const data = getData();
    data.departmentStaff = data.departmentStaff || {};
    data.departmentStaff[department] = data.departmentStaff[department] || { classTeacher:null, lecturers:[] };
    data.departmentStaff[department].lecturers.push({ id:sysId||('LEC-HOD-'+Date.now()), name, email:email||null, phone:phone||null, specialization:spec||null });
    saveData(data);
    alert(`✅ ${name} added as Lecturer for ${department}.`);
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    document.getElementById('hodMain').innerHTML = hodStaffHTML(user);
};

window.hodRemoveLecturer = function(department, lecId) {
    if (!confirm('Remove this lecturer?')) return;
    const data = getData();
    if (data.departmentStaff?.[department]) data.departmentStaff[department].lecturers = (data.departmentStaff[department].lecturers||[]).filter(l=>l.id!==lecId);
    saveData(data);
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    document.getElementById('hodMain').innerHTML = hodStaffHTML(user);
};

window.hodAddUnit = function(department) {
    const name = document.getElementById('uName')?.value.trim();
    const code = document.getElementById('uCode')?.value.trim();
    const level = document.getElementById('uLevel')?.value;
    const semester = document.getElementById('uSemester')?.value.trim();
    if (!name || !code) return alert('Unit name and code are required.');
    const data = getData();
    data.lecturerUnits = data.lecturerUnits || [];
    if (data.lecturerUnits.find(u => u.code===code && u.department===department)) return alert(`⚠️ Unit ${code} already exists for ${department}.`);
    data.lecturerUnits.push({ id:'LU-'+Date.now(), code, name, level:parseInt(level)||5, department, semester:semester||'', lecturerId:null, description:'', addedBy:'hod', addedAt:new Date().toISOString() });
    saveData(data);
    alert(`✅ Unit "${name}" (${code}) added.`);
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    document.getElementById('hodMain').innerHTML = hodUnitsHTML(user);
};

window.hodAssignLecturer = function(unitId) {
    const lecId = document.getElementById(`lec_for_${unitId}`)?.value;
    if (!lecId) return alert('Please select a lecturer.');
    const data = getData();
    const unit = data.lecturerUnits.find(u => u.id === unitId);
    if (!unit) return;
    const lec = (data.departmentStaff?.[unit.department]?.lecturers||[]).find(l=>l.id===lecId);
    unit.lecturerId = lecId;
    unit.lecturerName = lec?.name || '';
    saveData(data);
    alert(`✅ ${lec?.name||lecId} assigned to ${unit.name}. They will see this unit in their portal.`);
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    document.getElementById('hodMain').innerHTML = hodUnitsHTML(user);
};

/* ══════════════════════════════════════════
   FINANCE OFFICE PORTAL — CENTRAL COMMAND HUB
══════════════════════════════════════════ */

const financeSenders = [
    { key:'hod',          label:'HOD',                    icon:'🏛️', category:'Academic' },
    { key:'student',      label:'Students',                icon:'🎓', category:'Academic' },
    { key:'deputy_acad',  label:'Deputy (Academics)',      icon:'👑', category:'Academic' },
    { key:'examoffice',   label:'Exam Office',             icon:'📋', category:'Academic' },
    { key:'dean',         label:'Dean of Students',        icon:'💛', category:'Academic' },
    { key:'admin',        label:'System Admin',            icon:'🔐', category:'Administrative' },
    { key:'deputy_infra', label:'Deputy (Infrastructure)', icon:'🏗️', category:'Administrative' },
    { key:'procurement',  label:'Procurement Office',      icon:'📦', category:'Administrative' },
    { key:'library',      label:'Library',                 icon:'📚', category:'Support' },
    { key:'sportsadmin',  label:'Sports',                  icon:'⚽', category:'Support' },
    { key:'hospital',     label:'Hospital',                icon:'🏥', category:'Health' }
];
const financeCategoryColors = { Academic:'#3b82f6', Administrative:'#a855f7', Support:'#10b981', Health:'#ef4444' };

function financeUnreadCount() {
    const data = getData();
    const genericUnread = (data.financeReceived || []).filter(f => !f.read).length;
    const hodPending = (data.examRegistrations || []).filter(r => r.status === 'pending_finance').length;
    return genericUnread + hodPending;
}

function renderFinancePanel(user) {
    const unread = financeUnreadCount();
    return `
    <div class="admin-layout">
        <div class="admin-sidenav">
            <div class="admin-sidenav-title"><i class="fas fa-coins"></i> Finance Menu</div>
            <button class="admin-nav-btn active" onclick="financeSection('dashboard',this)"><i class="fas fa-gauge"></i> Dashboard</button>
            <button class="admin-nav-btn" onclick="financeSection('received',this)">
                <i class="fas fa-bell"></i> Received
                ${unread > 0 ? `<span style="background:var(--danger);color:#fff;border-radius:12px;padding:2px 7px;font-size:0.65rem;margin-left:4px;">${unread}</span>` : ''}
            </button>
            <button class="admin-nav-btn" onclick="financeSection('send',this)"><i class="fas fa-paper-plane"></i> Send</button>
            <button class="admin-nav-btn" onclick="financeSection('students',this)"><i class="fas fa-user-graduate"></i> All Students</button>
            <button class="admin-nav-btn" onclick="financeSection('store',this)"><i class="fas fa-box-archive"></i> My Store</button>
            <button class="admin-nav-btn" onclick="financeSection('report',this)"><i class="fas fa-chart-bar"></i> Report</button>
            <button class="admin-nav-btn" onclick="financeSection('noticeboard',this)"><i class="fas fa-bullhorn"></i> Post Notice</button>
        </div>
        <div class="admin-main" id="financeMain">${financeDashboardHTML()}</div>
    </div>`;
}

window.financeSection = function(section, btn) {
    document.querySelectorAll('.admin-nav-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    const map = {
        dashboard:   financeDashboardHTML,
        received:    financeReceivedHTML,
        send:        financeSendHTML,
        students:    () => financeStudentsHTML(window._financeStudentFilters || {}),
        store:       () => financeStoreHTML(window._financeStoreFilters || {}),
        report:      financeReportHTML,
        noticeboard: financeNoticeboardHTML
    };
    document.getElementById('financeMain').innerHTML = (map[section] || financeDashboardHTML)();
};

/* Success alert (kept, reused everywhere) */
function showSuccessAlert(message) {
    const alertHTML = `
        <div style="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
                    background:#1a1e2c;border:2px solid #10b981;border-radius:16px;
                    padding:25px 30px;z-index:10000;max-width:380px;text-align:center;
                    box-shadow:0 10px 30px rgba(0,0,0,0.5);">
            <div style="font-size:3rem;margin-bottom:10px;">✅</div>
            <div style="color:#10b981;font-weight:700;font-size:1.1rem;margin-bottom:8px;">${message}</div>
            <button onclick="this.parentElement.remove()" style="margin-top:15px;padding:10px 25px;background:#10b981;color:white;border:none;border-radius:8px;font-weight:600;cursor:pointer;">OK</button>
        </div>`;
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = alertHTML;
    document.body.appendChild(tempDiv.firstElementChild);
}

/* ══════════════════ DASHBOARD ══════════════════ */
function financeDashboardHTML() {
    const data = getData();
    const totalOutstanding = (data.students || []).reduce((s, x) => s + (x.feeBalance || 0), 0);
    const totalStudents = (data.students || []).length;
    const clearedCount = (data.students || []).filter(s => (s.feeBalance || 0) === 0).length;
    const unread = financeUnreadCount();

    const byCategory = {};
    financeSenders.forEach(s => {
        const count = (data.financeReceived || []).filter(f => f.fromRole === s.key && !f.read).length
            + (s.key === 'hod' ? (data.examRegistrations || []).filter(r => r.status === 'pending_finance').length : 0);
        byCategory[s.category] = (byCategory[s.category] || 0) + count;
    });

    return `
        <div class="admin-section-head">💰 Finance Dashboard</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:1rem;margin-bottom:1.2rem;">
            <div class="stat-card"><h3 style="color:var(--warning);">${unread}</h3><p>New Items Received</p></div>
            <div class="stat-card"><h3>${totalStudents}</h3><p>Total Students</p></div>
            <div class="stat-card"><h3 style="color:var(--success);">${clearedCount}</h3><p>Fully Cleared</p></div>
            <div class="stat-card"><h3 style="color:var(--danger);">KSh ${totalOutstanding.toLocaleString()}</h3><p>Total Outstanding</p></div>
        </div>
        <div class="admin-card">
            <div class="admin-card-title">Pending Items by Category</div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin-top:10px;">
                ${Object.entries(financeCategoryColors).map(([cat, color]) => `
                    <div style="text-align:center;padding:1rem;background:${color}15;border:1px solid ${color}55;border-radius:12px;">
                        <div style="font-size:1.4rem;font-weight:800;color:${color};">${byCategory[cat] || 0}</div>
                        <div style="font-size:0.75rem;color:var(--text-secondary);margin-top:4px;">${cat}</div>
                    </div>`).join('')}
            </div>
        </div>`;
}

/* ══════════════════ RECEIVED — categorized 3D cards ══════════════════ */
function financeReceivedHTML() {
    const data = getData();
    const categories = ['Academic', 'Administrative', 'Support', 'Health'];

    const sectionsHTML = categories.map(cat => {
        const senders = financeSenders.filter(s => s.category === cat);
        const color = financeCategoryColors[cat];
        const cards = senders.map(s => {
            const items = (data.financeReceived || []).filter(f => f.fromRole === s.key);
            let pendingCount = items.filter(f => !f.read).length;
            if (s.key === 'hod') pendingCount += (data.examRegistrations || []).filter(r => r.status === 'pending_finance').length;
            return `
            <div onclick="financeOpenSenderInbox('${s.key}')" style="cursor:pointer;background:linear-gradient(135deg, ${color}22, ${color}11); border:1px solid ${color}55; border-radius:16px; padding:1.2rem; text-align:center; transition:transform .25s, box-shadow .25s;"
                 onmouseover="this.style.transform='translateY(-6px) scale(1.02)'; this.style.boxShadow='0 12px 24px ${color}33';"
                 onmouseout="this.style.transform='none'; this.style.boxShadow='none';">
                <div style="font-size:2.2rem;">${s.icon}</div>
                <div style="font-weight:700;margin-top:6px;font-size:0.88rem;">${s.label}</div>
                ${pendingCount > 0
                    ? `<span class="admin-role-pill" style="margin-top:8px;display:inline-block;background:rgba(245,158,11,.15);border-color:var(--warning);color:var(--warning);">🔔 ${pendingCount} new</span>`
                    : `<span class="admin-role-pill" style="margin-top:8px;display:inline-block;">✅ Clear</span>`}
            </div>`;
        }).join('');

        return `
        <div class="admin-card" style="margin-bottom:1rem;border-left:4px solid ${color};">
            <div class="admin-card-title" style="color:${color};">${cat}</div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:14px;margin-top:12px;">${cards}</div>
        </div>`;
    }).join('');

    return `
        <div class="admin-section-head">📥 Received</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <p style="font-size:0.78rem;color:var(--text-secondary);">
                Items from every department are grouped by category. Click a department card to review what
                was sent, then use that information in All Students to update fee records.
            </p>
        </div>
        ${sectionsHTML}
        <div id="financeSenderInboxArea" style="margin-top:1.2rem;"></div>`;
}

window.financeOpenSenderInbox = function(key) {
    const data = getData();
    const meta = financeSenders.find(s => s.key === key);
    const area = document.getElementById('financeSenderInboxArea');

    (data.financeReceived || []).forEach(f => { if (f.fromRole === key) f.read = true; });
    saveData(data);

    if (key === 'hod') {
        const pending = (data.examRegistrations || []).filter(r => r.status === 'pending_finance');
        const genericItems = (data.financeReceived || []).filter(f => f.fromRole === 'hod');
        const pendingCards = pending.length === 0 && genericItems.length === 0
            ? `<p style="color:var(--text-secondary);font-size:0.85rem;">No items from HOD right now.</p>`
            : pending.map(reg => {
                const student = data.students.find(s => s.id === reg.studentId) || {};
                const examFee = reg.totalExamFee || 0;
                const currentBalance = student.feeBalance || 0;
                return `
                <div class="admin-card" style="margin-bottom:10px;">
                    <div style="font-weight:700;">${student.name || reg.studentId}</div>
                    <div style="font-size:0.72rem;color:var(--text-secondary);">${reg.studentId} • ${student.department || '—'}</div>
                    <div style="margin:10px 0;padding:10px;background:var(--bg-elevated);border-radius:10px;font-size:0.85rem;">
                        <strong>Exam Fee:</strong> KSh ${examFee.toLocaleString()}<br>
                        <strong>Current Balance:</strong> KSh ${currentBalance.toLocaleString()}<br>
                        <strong style="color:var(--purple-light);">New Total: KSh ${(currentBalance + examFee).toLocaleString()}</strong>
                    </div>
                    <div style="display:flex;gap:8px;flex-wrap:wrap;">
                        <button class="admin-btn-primary" onclick="financeClearStudent('${reg.id}')">✅ Clear Fees → Exam Office</button>
                        <button class="admin-action-btn danger" onclick="financeSendToDeputy('${reg.id}')">⚠️ Send to Deputy (Uncleared)</button>
                    </div>
                </div>`;
            }).join('') + genericItems.map(financeGenericItemCard).join('');
        area.innerHTML = `<div class="admin-card"><div class="admin-card-title">🏛️ From HOD</div><div style="margin-top:10px;">${pendingCards}</div></div>`;
        return;
    }

    if (key === 'hospital') {
        const bills = (data.financeReceived || []).filter(f => f.fromRole === 'hospital');
        area.innerHTML = `
        <div class="admin-card">
            <div class="admin-card-title">🏥 From Hospital</div>
            <div style="margin-top:10px;">
                ${bills.length === 0 ? '<p style="color:var(--text-secondary);font-size:0.85rem;">No bills yet.</p>' :
                bills.slice().reverse().map(f => `
                <div style="padding:1rem;background:var(--bg-elevated);border-radius:12px;margin-bottom:10px;border-left:4px solid ${f.addedToFees?'var(--success)':'var(--warning)'};">
                    <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:6px;">
                        <strong>${f.studentName}</strong>
                        <span style="font-weight:800;color:var(--success);">KSh ${f.amount.toLocaleString()}</span>
                    </div>
                    <div style="font-size:0.78rem;color:var(--text-secondary);margin-top:4px;">${f.message}</div>
                    ${f.addedToFees
                        ? `<span class="admin-role-pill" style="margin-top:8px;background:rgba(16,185,129,.15);border-color:var(--success);color:var(--success);">✅ Added to Fees — Student Notified</span>`
                        : `<button class="admin-btn-primary" style="margin-top:8px;" onclick="financeAddBillToFees('${f.id}')">💰 Add to Student Fees & Notify</button>`}
                </div>`).join('')}
            </div>
        </div>`;
        return;
    }

    const items = (data.financeReceived || []).filter(f => f.fromRole === key).slice().reverse();
    area.innerHTML = `
        <div class="admin-card">
            <div class="admin-card-title">${meta.icon} From ${meta.label}</div>
            <div style="margin-top:10px;">
                ${items.length === 0 ? '<p style="color:var(--text-secondary);font-size:0.85rem;">No items yet.</p>' : items.map(financeGenericItemCard).join('')}
            </div>
        </div>`;
};

function financeGenericItemCard(f) {
    return `
    <div class="admin-card" style="margin-bottom:10px;">
        <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:6px;">
            <strong>${f.subject}</strong>
            ${f.amount ? `<span style="font-weight:800;color:var(--success);">KSh ${f.amount.toLocaleString()}</span>` : ''}
        </div>
        ${f.studentName ? `<div style="font-size:0.72rem;color:var(--text-secondary);margin-top:2px;">${f.studentName} (${f.studentId||'—'})</div>` : ''}
        <div style="font-size:0.82rem;margin-top:6px;">${f.message}</div>
        ${f.fileName ? `<div style="font-size:0.7rem;margin-top:6px;color:var(--purple-light);">📎 ${f.fileName}</div>` : ''}
        <div style="font-size:0.68rem;color:var(--text-secondary);margin-top:6px;">${new Date(f.timestamp).toLocaleString()}</div>
        ${f.studentId ? `<button class="admin-action-btn edit" style="margin-top:8px;" onclick="financeJumpToStudent('${f.studentId}')"><i class="fas fa-user-graduate"></i> Open in All Students</button>` : ''}
    </div>`;
}

/* ══════════════════ SEND — multi-method upload ══════════════════ */
function financeSendHTML() {
    const targets = [
        { key:'hod',          label:'🏛️ HOD' },
        { key:'admin',        label:'🔐 System Admin' },
        { key:'examoffice',   label:'📋 Exam Office' },
        { key:'deputy_acad',  label:'👑 Deputy (Academics)' },
        { key:'principal',    label:'🎓 Principal' },
        { key:'deputy_infra', label:'🏗️ Deputy (Infrastructure)' },
        { key:'procurement',  label:'📦 Procurement Office' }
    ];
    return `
        <div class="admin-section-head">📤 Send</div>
        <div class="admin-card">
            <div style="display:grid;gap:10px;">
                <select id="finSendTarget" class="admin-input">
                    ${targets.map(t => `<option value="${t.key}">${t.label}</option>`).join('')}
                </select>
                <input id="finSendSubject" class="admin-input" placeholder="Subject">
                <textarea id="finSendMessage" class="admin-input" rows="3" placeholder="Message..."></textarea>
            </div>

            <div class="admin-card-title" style="margin-top:14px;">Attach via</div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin-top:8px;">
                <button class="admin-btn-secondary" type="button" onclick="document.getElementById('finSendFile').click()"><i class="fas fa-file-upload"></i> File</button>
                <button class="admin-btn-secondary" type="button" onclick="financeToggleLinkInput()"><i class="fas fa-link"></i> Paste Link</button>
                <button class="admin-btn-secondary" type="button" onclick="financeToggleNoteInput()"><i class="fas fa-file-alt"></i> New Note</button>
                <button class="admin-btn-secondary" type="button" onclick="alert('Google Drive integration requires backend setup — use File or Link instead for now.')"><i class="fab fa-google-drive"></i> Drive</button>
            </div>
            <input id="finSendFile" type="file" style="display:none;" onchange="financeShowFileName()">
            <div id="finSendFileNameDisplay" style="font-size:0.75rem;color:var(--success);margin-top:6px;"></div>
            <div id="finSendLinkWrap" style="display:none;margin-top:8px;">
                <input id="finSendLink" class="admin-input" placeholder="Paste link (e.g. shared doc URL)">
            </div>
            <div id="finSendNoteWrap" style="display:none;margin-top:8px;">
                <textarea id="finSendNote" class="admin-input" rows="4" placeholder="Type a quick note/document content..."></textarea>
            </div>

            <button class="admin-btn-primary" type="button" style="margin-top:16px;width:100%;" onclick="financeSendToDepartment()">
                <i class="fas fa-paper-plane"></i> Send
            </button>
        </div>`;
}

window.financeToggleLinkInput = function() {
    const w = document.getElementById('finSendLinkWrap');
    w.style.display = w.style.display === 'none' ? 'block' : 'none';
};
window.financeToggleNoteInput = function() {
    const w = document.getElementById('finSendNoteWrap');
    w.style.display = w.style.display === 'none' ? 'block' : 'none';
};
window.financeShowFileName = function() {
    const f = document.getElementById('finSendFile').files[0];
    document.getElementById('finSendFileNameDisplay').textContent = f ? `📎 ${f.name}` : '';
};

window.financeSendToDepartment = function() {
    const target  = document.getElementById('finSendTarget').value;
    const subject = document.getElementById('finSendSubject').value.trim();
    const message = document.getElementById('finSendMessage').value.trim();
    const file    = document.getElementById('finSendFile').files[0];
    const link    = document.getElementById('finSendLink')?.value.trim();
    const note    = document.getElementById('finSendNote')?.value.trim();
    if (!subject || !message) return alert('Please fill in Subject and Message.');

    const data = getData();
    const payload = {
        id: 'FS-' + Date.now(), from: 'Finance Office', fromRole: 'finance',
        subject, message: message + (link ? `\n🔗 Link: ${link}` : '') + (note ? `\n📝 Note: ${note}` : ''),
        fileName: file?.name || null,
        timestamp: new Date().toISOString(), read: false
    };

    const routes = {
        hod:          () => { data.hodReceived        = data.hodReceived        || []; data.hodReceived.push(payload); },
        admin:        () => { data.sysAdminReceived    = data.sysAdminReceived    || []; data.sysAdminReceived.push(payload); },
        examoffice:   () => { data.examOfficeReceived   = data.examOfficeReceived   || []; data.examOfficeReceived.push(payload); },
        deputy_acad:  () => { data.deputyAcadReceived   = data.deputyAcadReceived   || []; data.deputyAcadReceived.push(payload); },
        principal:    () => { data.principalReceived    = data.principalReceived    || []; data.principalReceived.push(payload); },
        deputy_infra: () => { data.deputyInfraReceived  = data.deputyInfraReceived  || []; data.deputyInfraReceived.push(payload); },
        procurement:  () => { data.procurementReceived  = data.procurementReceived  || []; data.procurementReceived.push(payload); }
    };
    (routes[target] || (()=>{}))();

    data.financeSentItems = data.financeSentItems || [];
    data.financeSentItems.push({ ...payload, to: target });

    saveData(data);
    showSuccessAlert(`Sent to ${target.replace('_',' ')} successfully!`);
    document.getElementById('financeMain').innerHTML = financeSendHTML();
};

/* ══════════════════ ALL STUDENTS — search, filter, edit fees ══════════════════ */
function financeStudentsHTML(filters = {}) {
    const data = getData();
    let list = data.students || [];

    const q = (filters.search || '').toLowerCase().trim();
    const month = filters.month || '', year = filters.year || '';
    const feeMin = filters.feeMin !== undefined && filters.feeMin !== '' ? Number(filters.feeMin) : null;
    const feeMax = filters.feeMax !== undefined && filters.feeMax !== '' ? Number(filters.feeMax) : null;

    if (q) {
        list = list.filter(s => {
            const name  = (s.name  || '').toLowerCase();
            const id    = (s.id    || '').toLowerCase();
            const phone = (s.phone || '').toLowerCase();
            return name.includes(q) || id.includes(q) || phone.includes(q);
        });
    }
    if (feeMin !== null) list = list.filter(s => (s.feeBalance || 0) >= feeMin);
    if (feeMax !== null) list = list.filter(s => (s.feeBalance || 0) <= feeMax);
    if (month || year) {
        list = list.filter(s => (s.financeEditHistory || []).some(h => {
            const d = new Date(h.timestamp);
            const mOk = month ? (d.getMonth()+1).toString().padStart(2,'0') === month : true;
            const yOk = year ? d.getFullYear().toString() === year : true;
            return mOk && yOk;
        }));
    }

    const rows = list.length === 0
        ? `<p style="color:var(--text-secondary);font-size:0.85rem;">No students match this filter.</p>`
        : list.map(s => `
        <div class="admin-card" style="margin-bottom:8px;" id="stu_row_${s.id}">
            <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
                <div>
                    <strong>${s.name || '—'}</strong>
                    <div style="font-size:0.72rem;color:var(--text-secondary);">${s.id || '—'} • ${s.department || '—'} • 📱 ${s.phone || '—'}</div>
                </div>
                <div style="text-align:right;">
                    <div style="font-weight:800;color:${(s.feeBalance||0)===0?'var(--success)':'var(--danger)'};">KSh ${(s.feeBalance||0).toLocaleString()}</div>
                    <button class="admin-action-btn edit" type="button" style="margin-top:4px;" onclick="financeOpenEditFee('${s.id}')">✏️ Edit</button>
                </div>
            </div>
        </div>`).join('');

    return `
        <div class="admin-section-head">🎓 All Students (${list.length})</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <input id="finStuSearch" class="admin-input" placeholder="Search by name, admission no, or phone" value="${filters.search||''}" style="margin-bottom:10px;">
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;">
                <input id="finStuFeeMin" class="admin-input" type="number" placeholder="Min balance" value="${filters.feeMin||''}">
                <input id="finStuFeeMax" class="admin-input" type="number" placeholder="Max balance" value="${filters.feeMax||''}">
                <select id="finStuMonth" class="admin-input">
                    <option value="">All Months</option>
                    ${['01','02','03','04','05','06','07','08','09','10','11','12'].map(m=>`<option value="${m}" ${filters.month===m?'selected':''}>${m}</option>`).join('')}
                </select>
                <input id="finStuYear" class="admin-input" placeholder="Year (e.g. 2026)" value="${filters.year||''}">
            </div>
            <div style="display:flex;gap:8px;margin-top:10px;">
                <button class="admin-btn-primary" type="button" onclick="financeApplyStudentFilter()">Filter</button>
                <button class="admin-btn-secondary" type="button" onclick="financeClearStudentFilter()">Clear</button>
            </div>
        </div>
        <div id="financeEditModalArea"></div>
        ${rows}`;
}

window.financeApplyStudentFilter = function() {
    const searchEl = document.getElementById('finStuSearch');
    const minEl    = document.getElementById('finStuFeeMin');
    const maxEl    = document.getElementById('finStuFeeMax');
    const monthEl  = document.getElementById('finStuMonth');
    const yearEl   = document.getElementById('finStuYear');

    window._financeStudentFilters = {
        search: searchEl ? searchEl.value : '',
        feeMin: minEl ? minEl.value : '',
        feeMax: maxEl ? maxEl.value : '',
        month:  monthEl ? monthEl.value : '',
        year:   yearEl ? yearEl.value : ''
    };
    document.getElementById('financeMain').innerHTML = financeStudentsHTML(window._financeStudentFilters);
};

window.financeClearStudentFilter = function() {
    window._financeStudentFilters = {};
    document.getElementById('financeMain').innerHTML = financeStudentsHTML({});
};

window.financeJumpToStudent = function(studentId) {
    window._financeStudentFilters = { search: studentId };
    const navBtns = document.querySelectorAll('.admin-nav-btn');
    financeSection('students', navBtns[3] || null);
    setTimeout(() => window.financeOpenEditFee(studentId), 100);
};

window.financeOpenEditFee = function(studentId) {
    const data = getData();
    const student = data.students.find(s => s.id === studentId);
    if (!student) return;
    document.getElementById('financeEditModalArea').innerHTML = `
        <div class="admin-card" style="border:2px solid var(--purple);margin-bottom:1rem;">
            <div class="admin-card-title">✏️ Edit Fees — ${student.name} (${student.id})</div>
            <div style="font-size:0.85rem;margin-top:8px;">Current Balance: <strong style="color:${(student.feeBalance||0)===0?'var(--success)':'var(--danger)'};">KSh ${(student.feeBalance||0).toLocaleString()}</strong></div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin-top:10px;">
                <select id="feeEditType" class="admin-input">
                    <option value="add">➕ Add to Balance</option>
                    <option value="reduce">➖ Reduce Balance</option>
                </select>
                <input id="feeEditAmount" type="number" min="0" class="admin-input" placeholder="Amount (KSh)">
            </div>
            <textarea id="feeEditReason" class="admin-input" rows="2" placeholder="Reason (e.g. Bursary applied, Late payment penalty)..." style="margin-top:8px;"></textarea>
            <div style="display:flex;gap:8px;margin-top:10px;">
                <button class="admin-btn-primary" type="button" onclick="financeSubmitFeeEdit('${student.id}')"><i class="fas fa-save"></i> Save Change</button>
                <button class="admin-btn-secondary" type="button" onclick="document.getElementById('financeEditModalArea').innerHTML=''">Cancel</button>
            </div>
        </div>`;
};

window.financeSubmitFeeEdit = function(studentId) {
    const type   = document.getElementById('feeEditType').value;
    const amount = parseFloat(document.getElementById('feeEditAmount').value);
    const reason = document.getElementById('feeEditReason').value.trim();
    if (!amount || amount <= 0) return alert('Enter a valid amount.');
    if (!reason) return alert('Please provide a reason for this change.');

    const data = getData();
    const student = data.students.find(s => s.id === studentId);
    if (!student) return;

    const before = student.feeBalance || 0;
    student.feeBalance = type === 'add' ? before + amount : Math.max(0, before - amount);

    student.financeEditHistory = student.financeEditHistory || [];
    student.financeEditHistory.push({
        id: 'FE-' + Date.now(), type, amount, reason,
        before, after: student.feeBalance, timestamp: new Date().toISOString()
    });

    data.sysAdminReceived = data.sysAdminReceived || [];
    data.sysAdminReceived.push({
        id: 'SAR-' + Date.now(), from: 'Finance Office', fromRole: 'finance',
        subject: `Fee ${type === 'add' ? 'Increase' : 'Reduction'} — ${student.name}`,
        message: `${student.name} (${student.id}): KSh ${before.toLocaleString()} → KSh ${student.feeBalance.toLocaleString()} (${type === 'add' ? '+' : '-'}KSh ${amount.toLocaleString()}). Reason: ${reason}.`,
        timestamp: new Date().toISOString(), read: false
    });

    data.financeStore = data.financeStore || [];
    data.financeStore.push({
        id: 'FST-' + Date.now(), studentId: student.id, studentName: student.name,
        department: student.department, action: `Fee ${type === 'add' ? 'Added' : 'Reduced'}`,
        amount, reason, before, after: student.feeBalance,
        timestamp: new Date().toISOString()
    });

    saveData(data);
    showSuccessAlert(`${student.name}'s balance updated to KSh ${student.feeBalance.toLocaleString()}. System Admin notified for accountability.`);
    document.getElementById('financeEditModalArea').innerHTML = '';
    document.getElementById('financeMain').innerHTML = financeStudentsHTML(window._financeStudentFilters || {});
};

/* ══════════════════ Legacy HOD clear/uncleared actions (called from Received) ══════════════════ */
window.financeClearStudent = function(regId) {
    const data = getData();
    const reg = data.examRegistrations.find(r => r.id === regId);
    if (!reg) return;
    const student = data.students.find(s => s.id === reg.studentId);

    const before = student ? (student.feeBalance || 0) : 0;
    const examFee = reg.totalExamFee || 0;
    if (student) student.feeBalance = before + examFee;
    const after = student ? student.feeBalance : examFee;

    reg.status = 'pending_exam';
    reg.financeChecked = true;

    data.financeStore = data.financeStore || [];
    data.financeStore.push({
        id: 'FST-' + Date.now(), studentId: reg.studentId, studentName: student?.name || reg.studentId,
        department: student?.department || '—', action: 'HOD Fees Cleared → Exam Office',
        amount: examFee, reason: 'Exam fee cleared',
        before, after,
        timestamp: new Date().toISOString()
    });

    saveData(data);
    showSuccessAlert(`Fees Cleared Successfully!<br>Registration ${regId} sent to Exam Office.`);
    window.financeOpenSenderInbox('hod');
};

window.financeSendToDeputy = function(regId) {
    const data = getData();
    const reg = data.examRegistrations.find(r => r.id === regId);
    if (!reg) return;
    reg.status = 'pending_deputy';
    reg.referredToDeputy = true;

    data.financeStore = data.financeStore || [];
    const student = data.students.find(s => s.id === reg.studentId);
    data.financeStore.push({
        id: 'FST-' + Date.now(), studentId: reg.studentId, studentName: student?.name || reg.studentId,
        department: student?.department || '—', action: 'Sent to Deputy (Uncleared)',
        amount: reg.totalExamFee || 0, reason: 'Fees not cleared', timestamp: new Date().toISOString()
    });

    saveData(data);
    showSuccessAlert(`Student sent to Deputy Academics!`);
    window.financeOpenSenderInbox('hod');
};

window.financeAddBillToFees = function(finId) {
    const data = getData();
    const f = (data.financeReceived || []).find(x => x.id === finId);
    if (!f || f.addedToFees) return;
    const student = data.students.find(s => s.id === f.studentId);

    const before = student ? (student.feeBalance || 0) : 0;
    if (student) student.feeBalance = before + f.amount;
    const after = student ? student.feeBalance : f.amount;

    f.addedToFees = true;
    f.read = true;
    pushStudentNotification(f.studentId, '🏥 Hospital Bill Added',
        `You were billed KSh ${f.amount.toLocaleString()} for hospital treatment. This has been added to your fee balance.`, 'hospital_bill');

    data.financeStore = data.financeStore || [];
    data.financeStore.push({
        id: 'FST-' + Date.now(), studentId: f.studentId, studentName: f.studentName,
        department: student?.department || '—', action: 'Hospital Bill Added to Fees',
        amount: f.amount, reason: f.message,
        before, after,
        timestamp: new Date().toISOString()
    });

    saveData(data);
    showSuccessAlert(`KSh ${f.amount.toLocaleString()} added to ${f.studentName}'s fees. Student notified.`);
    window.financeOpenSenderInbox('hospital');
};

/* ══════════════════ MY STORE ══════════════════ */
function financeStoreHTML(filters = {}) {
    const data = getData();
    let store = data.financeStore || [];

    const dept = filters.department || '', month = filters.month || '', year = filters.year || '', search = (filters.search||'').toLowerCase().trim();
    if (dept) store = store.filter(s => s.department === dept);
    if (search) store = store.filter(s => (s.studentName||'').toLowerCase().includes(search) || (s.studentId||'').toLowerCase().includes(search));
    if (month || year) store = store.filter(s => {
        const d = new Date(s.timestamp);
        const mOk = month ? (d.getMonth()+1).toString().padStart(2,'0') === month : true;
        const yOk = year ? d.getFullYear().toString() === year : true;
        return mOk && yOk;
    });

    const allDepts = [...new Set((data.financeStore||[]).map(s => s.department).filter(Boolean))];

    const rows = store.length === 0
        ? `<p style="color:var(--text-secondary);font-size:0.85rem;">No records match this filter.</p>`
        : store.slice().reverse().map(s => `
        <div class="admin-card" style="margin-bottom:8px;">
            <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:6px;">
                <div>
                    <strong>${s.studentName}</strong>
                    <div style="font-size:0.72rem;color:var(--text-secondary);">${s.studentId} • ${s.department}</div>
                </div>
                <div style="text-align:right;">
                    <span class="admin-role-pill">${s.action}</span>
                    <div style="font-size:0.68rem;color:var(--text-secondary);margin-top:4px;">${new Date(s.timestamp).toLocaleString()}</div>
                </div>
            </div>
            ${s.amount ? `<div style="font-size:0.8rem;margin-top:6px;color:var(--success);font-weight:700;">KSh ${s.amount.toLocaleString()}</div>` : ''}
            ${s.before !== undefined ? `
            <div style="font-size:0.78rem;margin-top:6px;padding:8px;background:var(--bg-elevated);border-radius:8px;">
                Previous: <strong>KSh ${s.before.toLocaleString()}</strong> + Added: <strong style="color:var(--success);">KSh ${s.amount.toLocaleString()}</strong>
                → New Total: <strong style="color:var(--purple-light);">KSh ${s.after.toLocaleString()}</strong>
            </div>` : ''}
            ${s.reason ? `<div style="font-size:0.78rem;margin-top:4px;color:var(--text-secondary);">${s.reason}</div>` : ''}
        </div>`).join('');

    return `
        <div class="admin-section-head">🗄️ My Store (${store.length})</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px;">
                <button class="admin-btn-secondary" type="button" onclick="financeExportStore('pdf')"><i class="fas fa-file-pdf"></i> Save as PDF</button>
                <button class="admin-btn-secondary" type="button" onclick="financeExportStore('excel')"><i class="fas fa-file-excel"></i> Save as Excel</button>
            </div>
            <input id="finStoreSearch" class="admin-input" placeholder="Search student name/admission no" value="${filters.search||''}" style="margin-bottom:10px;">
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;">
                <select id="finStoreDept" class="admin-input">
                    <option value="">All Departments</option>
                    ${allDepts.map(d => `<option value="${d}" ${dept===d?'selected':''}>${d}</option>`).join('')}
                </select>
                <select id="finStoreMonth" class="admin-input">
                    <option value="">All Months</option>
                    ${['01','02','03','04','05','06','07','08','09','10','11','12'].map(m=>`<option value="${m}" ${month===m?'selected':''}>${m}</option>`).join('')}
                </select>
                <input id="finStoreYear" class="admin-input" placeholder="Year" value="${year}">
            </div>
            <div style="display:flex;gap:8px;margin-top:10px;">
                <button class="admin-btn-primary" type="button" onclick="financeApplyStoreFilter()">Filter</button>
                <button class="admin-btn-secondary" type="button" onclick="financeClearStoreFilter()">Clear</button>
            </div>
        </div>
        ${rows}`;
}

window.financeApplyStoreFilter = function() {
    const searchEl = document.getElementById('finStoreSearch');
    const deptEl   = document.getElementById('finStoreDept');
    const monthEl  = document.getElementById('finStoreMonth');
    const yearEl   = document.getElementById('finStoreYear');

    window._financeStoreFilters = {
        search: searchEl ? searchEl.value : '',
        department: deptEl ? deptEl.value : '',
        month: monthEl ? monthEl.value : '',
        year: yearEl ? yearEl.value : ''
    };
    document.getElementById('financeMain').innerHTML = financeStoreHTML(window._financeStoreFilters);
};

window.financeClearStoreFilter = function() {
    window._financeStoreFilters = {};
    document.getElementById('financeMain').innerHTML = financeStoreHTML({});
};

window.financeExportStore = function(type) {
    const data = getData();
    const store = data.financeStore || [];
    if (store.length === 0) return alert('No records to export.');
    if (type === 'pdf') {
        generatePDF({
            title: 'Finance Office — My Store Records', subtitle: 'Archive of all processed fee actions',
            office: 'FINANCE OFFICE', stage: 'Store', department: '',
            signatoryLabel: 'Finance Officer Signature',
            columns: [
                {label:'Student', key:'studentName'}, {label:'Admission No', key:'studentId'},
                {label:'Department', key:'department'}, {label:'Action', key:'action'},
                {label:'Previous', key:'beforeDisplay'}, {label:'Added', key:'amountDisplay'},
                {label:'New Total', key:'afterDisplay'}, {label:'Date', key:'date'}
            ],
            rows: store.map(s => ({
                ...s,
                amountDisplay: s.amount ? `KSh ${s.amount.toLocaleString()}` : '—',
                beforeDisplay: s.before !== undefined ? `KSh ${s.before.toLocaleString()}` : '—',
                afterDisplay: s.after !== undefined ? `KSh ${s.after.toLocaleString()}` : '—',
                date: new Date(s.timestamp).toLocaleDateString()
            }))
        });
    } else {
        const headers = 'Student,AdmissionNo,Department,Action,Previous,Added,NewTotal,Reason,Date';
        const body = store.map(s => `"${s.studentName||''}","${s.studentId||''}","${s.department||''}","${s.action||''}","${s.before??''}","${s.amount||0}","${s.after??''}","${(s.reason||'').replace(/"/g,'')}","${new Date(s.timestamp).toLocaleDateString()}"`).join('\n');
        const blob = new Blob([headers+'\n'+body], {type:'application/vnd.ms-excel'});
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = `finance_store.xls`;
        a.click(); URL.revokeObjectURL(url);
    }
};

/* ══════════════════ REPORT — SVG graphs ══════════════════ */
function financeReportHTML() {
    const data = getData();
    const store = data.financeStore || [];
    const students = data.students || [];

    const totalOutstanding = students.reduce((s,x) => s + (x.feeBalance||0), 0);
    const totalPaid = students.reduce((s,x) => s + ((x.totalFee||0) - (x.feeBalance||0)), 0);

    const actionTally = {};
    store.forEach(s => { actionTally[s.action] = (actionTally[s.action]||0) + 1; });
    const actionBars = Object.entries(actionTally).map(([a,c],i) => ({ label:a.split(' ').slice(0,2).join(' '), value:c, color:['#8b5cf6','#3b82f6','#10b981','#f59e0b','#ef4444'][i%5] }));

    const byCategoryUnread = {};
    financeSenders.forEach(s => {
        const count = (data.financeReceived||[]).filter(f=>f.fromRole===s.key).length + (s.key==='hod' ? (data.examRegistrations||[]).filter(r=>r.status==='pending_finance').length : 0);
        byCategoryUnread[s.category] = (byCategoryUnread[s.category]||0)+count;
    });

    return `
        <div class="admin-section-head">📊 Report</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">Store Actions Breakdown</div>
            <div style="overflow-x:auto;margin-top:10px;">${svgBarChart(actionBars.length?actionBars:[{label:'No data',value:0,color:'#3a2d6e'}])}</div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1rem;margin-bottom:1rem;">
            <div class="admin-card" style="text-align:center;">
                <div class="admin-card-title">Fee Collection Overview</div>
                <div style="display:flex;justify-content:center;margin-top:10px;">
                    ${svgDonutChart([{value:totalPaid||0.0001,color:'#10b981'},{value:totalOutstanding||0.0001,color:'#ef4444'}])}
                </div>
                <div style="font-size:0.75rem;margin-top:8px;">
                    <span style="color:var(--success);">● Paid KSh ${totalPaid.toLocaleString()}</span>&nbsp;
                    <span style="color:var(--danger);">● Outstanding KSh ${totalOutstanding.toLocaleString()}</span>
                </div>
            </div>
            <div class="admin-card" style="text-align:center;">
                <div class="admin-card-title">Received Items by Category</div>
                <div style="display:flex;justify-content:center;margin-top:10px;">
                    ${svgDonutChart(Object.entries(byCategoryUnread).map(([cat,val]) => ({value:val||0.0001, color:financeCategoryColors[cat]})))}
                </div>
                <div style="font-size:0.72rem;margin-top:8px;">
                    ${Object.entries(byCategoryUnread).map(([cat,val]) => `<span style="color:${financeCategoryColors[cat]};">● ${cat} ${val}</span>`).join(' &nbsp; ')}
                </div>
            </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:1rem;">
            <div class="stat-card"><h3>${students.length}</h3><p>Total Students</p></div>
            <div class="stat-card"><h3>${store.length}</h3><p>Actions Recorded</p></div>
            <div class="stat-card"><h3>${(data.financeSentItems||[]).length}</h3><p>Items Sent</p></div>
        </div>`;
}

/* ══════════════════ POST TO GLOBAL NOTICE BOARD ══════════════════ */
function financeNoticeboardHTML() {
    return `
        <div class="admin-section-head">📢 Post to Global Notice Board</div>
        <div class="admin-card">
            <textarea id="finNoticeMsg" class="admin-input" rows="4" placeholder="e.g. Fee payment deadline is 30th June 2026..."></textarea>
            <button class="admin-btn-primary" type="button" style="margin-top:10px;" onclick="financePostNotice()">
                <i class="fas fa-bullhorn"></i> Post Notice
            </button>
        </div>`;
}

window.financePostNotice = function() {
    const msg = document.getElementById('finNoticeMsg').value.trim();
    if (!msg) return alert('Enter a message.');
    const data = getData();
    data.noticeboard = data.noticeboard || [];
    data.noticeboard.push({ id: 'n' + Date.now(), sender: 'Finance Office', message: msg, timestamp: new Date().toISOString(), recipient: 'all' });
    saveData(data);
    showSuccessAlert('Notice posted to Global Notice Board!');
    document.getElementById('finNoticeMsg').value = '';
};


/* ══════════════════════════════════════════
   DEPUTY (ACADEMICS) PORTAL — RESTRUCTURED
══════════════════════════════════════════ */

const deputyAcadSenders = [
    { key:'principal',  label:'Principal',        icon:'🎓' },
    { key:'finance',    label:'Finance',          icon:'💰' },
    { key:'hod',        label:'HOD',              icon:'🏛️' },
    { key:'dean_admin', label:'Dean of Students',  icon:'💛' },
    { key:'examoffice', label:'Exam Office',       icon:'📋' },
    { key:'admin',      label:'System Admin',      icon:'🔐' }
];

function deputyAcadUnreadCount() {
    const data = getData();
    return (data.deputyAcadReceived || []).filter(function(i){ return !i.read; }).length;
}

function renderDeputyAcadPanel(user) {
    const unread = deputyAcadUnreadCount();
    return (
        '<div class="admin-layout">' +
            '<div class="admin-sidenav">' +
                '<div class="admin-sidenav-title"><i class="fas fa-crown"></i> Acad Menu</div>' +
                '<button class="admin-nav-btn active" onclick="deputyAcadSection(\'profile\',this)"><i class="fas fa-user"></i> Profile</button>' +
                '<button class="admin-nav-btn" onclick="deputyAcadSection(\'received\',this)">' +
                    '<i class="fas fa-bell"></i> Received' +
                    (unread > 0 ? '<span style="background:var(--danger);color:#fff;border-radius:12px;padding:2px 7px;font-size:0.65rem;margin-left:4px;">' + unread + '</span>' : '') +
                '</button>' +
                '<button class="admin-nav-btn" onclick="deputyAcadSection(\'send\',this)"><i class="fas fa-paper-plane"></i> Send</button>' +
                '<button class="admin-nav-btn" onclick="deputyAcadSection(\'calendar\',this)"><i class="fas fa-calendar-alt"></i> Academic Calendar</button>' +
                '<button class="admin-nav-btn" onclick="deputyAcadSection(\'statistics\',this)"><i class="fas fa-chart-line"></i> Statistics</button>' +
                '<button class="admin-nav-btn" onclick="deputyAcadSection(\'policy\',this)"><i class="fas fa-gavel"></i> Policy Board</button>' +
                '<button class="admin-nav-btn" onclick="deputyAcadSection(\'staffreport\',this)"><i class="fas fa-chalkboard-teacher"></i> Staff Report</button>' +
                '<button class="admin-nav-btn" onclick="deputyAcadSection(\'deptcompare\',this)"><i class="fas fa-balance-scale"></i> Dept Comparison</button>' +
                '<button class="admin-nav-btn" onclick="deputyAcadSection(\'notices\',this)"><i class="fas fa-bullhorn"></i> Acad Notices</button>' +
                '<button class="admin-nav-btn" onclick="deputyAcadSection(\'report\',this)"><i class="fas fa-chart-bar"></i> Report</button>' +
            '</div>' +
            '<div class="admin-main" id="deputyAcadMain">' + deputyAcadProfileHTML(user) + '</div>' +
        '</div>'
    );
}

window.deputyAcadSection = function(section, btn) {
    document.querySelectorAll('.admin-nav-btn').forEach(function(b){ b.classList.remove('active'); });
    if (btn) btn.classList.add('active');
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    const map = {
        profile:        function(){ return deputyAcadProfileHTML(user); },
        received:       deputyAcadReceivedHTML,
        send:           deputyAcadSendHTML,
        examapprovals:  function(){ return typeof deputyAcadExamApprovalsHTML === 'function' ? deputyAcadExamApprovalsHTML() : '<p>Exam Approvals section not found — keeping old function name intact.</p>'; },
        uncleared:      function(){ return typeof deputyAcadUnclearedHTML === 'function' ? deputyAcadUnclearedHTML() : '<p>Uncleared Fees section not found.</p>'; },
        calendar:       function(){ return typeof deputyAcadCalendarHTML === 'function' ? deputyAcadCalendarHTML() : '<p>Academic Calendar section not found.</p>'; },
        statistics:     function(){ return typeof deputyAcadStatisticsHTML === 'function' ? deputyAcadStatisticsHTML() : '<p>Statistics section not found.</p>'; },
        policy:         function(){ return typeof deputyAcadPolicyHTML === 'function' ? deputyAcadPolicyHTML() : '<p>Policy Board section not found.</p>'; },
        staffreport:    function(){ return typeof deputyAcadStaffReportHTML === 'function' ? deputyAcadStaffReportHTML() : '<p>Staff Report section not found.</p>'; },
        deptcompare:    function(){ return typeof deputyAcadDeptCompareHTML === 'function' ? deputyAcadDeptCompareHTML() : '<p>Dept Comparison section not found.</p>'; },
        notices:        function(){ return typeof deputyAcadNoticesHTML === 'function' ? deputyAcadNoticesHTML() : '<p>Acad Notices section not found.</p>'; },
        report:         deputyAcadReportHTML
    };
    document.getElementById('deputyAcadMain').innerHTML = (map[section] || map.profile)();
};



/* ══════════════════ PROFILE ══════════════════ */
function deputyAcadProfileHTML(user) {
    const data = getData();
    const profile = data.deputyAcadProfile || { fullName: user.name || 'Deputy Academics', email:'', phone:'' };
    const received = data.deputyAcadReceived || [];
    const sent = data.deputyAcadSentItems || [];

    return (
        '<div class="admin-section-head">👤 My Profile</div>' +
        '<div class="admin-card" style="margin-bottom:1rem;">' +
            '<div style="display:flex;gap:1.2rem;align-items:center;flex-wrap:wrap;">' +
                '<div style="width:70px;height:70px;border-radius:50%;background:linear-gradient(135deg,#f59e0b,#d97706);display:flex;align-items:center;justify-content:center;font-size:2rem;color:white;flex-shrink:0;">👑</div>' +
                '<div>' +
                    '<h3 style="margin:0;">' + profile.fullName + '</h3>' +
                    '<div style="font-size:0.8rem;color:var(--text-secondary);">Deputy Principal — Academics</div>' +
                    '<span class="admin-role-pill" style="margin-top:6px;display:inline-block;">👑 Deputy (Academics)</span>' +
                '</div>' +
            '</div>' +
        '</div>' +
        '<div class="admin-card" style="margin-bottom:1rem;">' +
            '<div class="admin-card-title">Contact Information</div>' +
            '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-top:10px;font-size:0.85rem;">' +
                '<div><span style="color:var(--text-secondary);font-size:0.7rem;">FULL NAME</span><br>' + profile.fullName + '</div>' +
                '<div><span style="color:var(--text-secondary);font-size:0.7rem;">EMAIL</span><br>' + profile.email + '</div>' +
                '<div><span style="color:var(--text-secondary);font-size:0.7rem;">PHONE NUMBER</span><br>' + profile.phone + '</div>' +
            '</div>' +
        '</div>' +
        '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:1rem;">' +
            '<div class="stat-card"><h3 style="color:var(--warning);">' + received.filter(function(i){return !i.read;}).length + '</h3><p>New Items</p></div>' +
            '<div class="stat-card"><h3>' + received.length + '</h3><p>Total Received</p></div>' +
            '<div class="stat-card"><h3 style="color:var(--success);">' + sent.length + '</h3><p>Items Sent</p></div>' +
        '</div>'
    );
}

/* ══════════════════ RECEIVED — cards with bell badge ══════════════════ */
function deputyAcadReceivedHTML() {
    const data = getData();
    const cards = deputyAcadSenders.map(function(s) {
        const items = (data.deputyAcadReceived || []).filter(function(i){ return i.fromRole === s.key; });
        const pending = items.filter(function(i){ return !i.read; }).length;
        return (
            '<div onclick="deputyAcadOpenSenderInbox(\'' + s.key + '\')" style="cursor:pointer;background:var(--bg-elevated);border:1px solid var(--border);border-radius:16px;padding:1.4rem;text-align:center;transition:transform .25s, box-shadow .25s;" ' +
            'onmouseover="this.style.transform=\'translateY(-6px) scale(1.02)\';this.style.boxShadow=\'0 12px 24px rgba(139,92,246,.25)\';" ' +
            'onmouseout="this.style.transform=\'none\';this.style.boxShadow=\'none\';">' +
                '<div style="font-size:2.4rem;">' + s.icon + '</div>' +
                '<div style="font-weight:700;margin-top:8px;">' + s.label + '</div>' +
                (pending > 0
                    ? '<span class="admin-role-pill" style="margin-top:8px;display:inline-block;background:rgba(245,158,11,.15);border-color:var(--warning);color:var(--warning);"><i class="fas fa-bell"></i> ' + pending + ' new</span>'
                    : '<span class="admin-role-pill" style="margin-top:8px;display:inline-block;">✅ Clear</span>') +
            '</div>'
        );
    }).join('');

    return (
        '<div class="admin-section-head">📥 Received</div>' +
        '<div class="admin-card" style="margin-bottom:1rem;">' +
            '<p style="font-size:0.78rem;color:var(--text-secondary);">Items from Principal, Finance, HODs, Dean of Students, Exam Office, and System Admin arrive here. Click a card to review; save any item as PDF, Excel, or CSV.</p>' +
        '</div>' +
        '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:16px;">' + cards + '</div>' +
        '<div id="deputyAcadInboxArea" style="margin-top:1.2rem;"></div>'
    );
}

window.deputyAcadOpenSenderInbox = function(key) {
    const data = getData();
    const meta = deputyAcadSenders.find(function(s){ return s.key === key; });
    const items = (data.deputyAcadReceived || []).filter(function(i){ return i.fromRole === key; }).slice().reverse();
    items.forEach(function(i){ i.read = true; });
    saveData(data);

    const rows = items.length === 0
        ? '<p style="color:var(--text-secondary);font-size:0.85rem;">No items from this department yet.</p>'
        : items.map(function(i) {
            return (
                '<div class="admin-card" style="margin-bottom:10px;">' +
                    '<div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:6px;">' +
                        '<strong>' + i.subject + '</strong>' +
                        '<span style="font-size:0.68rem;color:var(--text-secondary);">' + new Date(i.timestamp).toLocaleString() + '</span>' +
                    '</div>' +
                    '<div style="font-size:0.82rem;margin-top:8px;">' + i.message + '</div>' +
                    (i.fileName ? '<div style="font-size:0.7rem;margin-top:6px;color:var(--purple-light);">📎 ' + i.fileName + '</div>' : '') +
                    '<div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap;">' +
                        '<button class="admin-action-btn edit" onclick="deputyAcadSaveItem(\'' + i.id + '\',\'pdf\')"><i class="fas fa-file-pdf"></i> PDF</button>' +
                        '<button class="admin-action-btn edit" onclick="deputyAcadSaveItem(\'' + i.id + '\',\'excel\')"><i class="fas fa-file-excel"></i> Excel</button>' +
                        '<button class="admin-action-btn edit" onclick="deputyAcadSaveItem(\'' + i.id + '\',\'csv\')"><i class="fas fa-file-csv"></i> CSV</button>' +
                    '</div>' +
                '</div>'
            );
        }).join('');

    document.getElementById('deputyAcadInboxArea').innerHTML =
        '<div class="admin-card">' +
            '<div class="admin-card-title">' + meta.icon + ' From ' + meta.label + '</div>' +
            '<div style="margin-top:10px;">' + rows + '</div>' +
        '</div>';
};

window.deputyAcadSaveItem = function(itemId, type) {
    const data = getData();
    const item = (data.deputyAcadReceived || []).find(function(i){ return i.id === itemId; });
    if (!item) return;

    if (type === 'pdf') {
        if (typeof generatePDF === 'function') {
            generatePDF({
                title: 'Deputy (Academics) — Received Item', subtitle: item.subject,
                office: 'DEPUTY ACADEMICS', stage: 'Received', department: '',
                signatoryLabel: 'Deputy Academics Signature',
                columns: [
                    {label:'From', key:'from'}, {label:'Subject', key:'subject'},
                    {label:'Message', key:'message'}, {label:'Date', key:'date'}
                ],
                rows: [{ from: item.from, subject: item.subject, message: item.message, date: new Date(item.timestamp).toLocaleDateString() }]
            });
        } else {
            alert('PDF export requires generatePDF() function.');
        }
        return;
    }

    const headers = 'From,Subject,Message,Date';
    const body = '"' + item.from + '","' + item.subject + '","' + item.message.replace(/"/g,'') + '","' + new Date(item.timestamp).toLocaleDateString() + '"';
    const blob = new Blob([headers + '\n' + body], { type: type === 'excel' ? 'application/vnd.ms-excel' : 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'received_item.' + (type === 'excel' ? 'xls' : 'csv');
    a.click();
    URL.revokeObjectURL(url);
};

/* ══════════════════ SEND ══════════════════ */
function deputyAcadSendHTML() {
    const targets = [
        { key:'principal',   label:'🎓 Principal' },
        { key:'dean_admin',  label:'💛 Dean' },
        { key:'admin',       label:'🔐 System Admin' },
        { key:'hod',         label:'🏛️ HODs' },
        { key:'finance',     label:'💰 Finance' },
        { key:'examoffice',  label:'📋 Exam Office' }
    ];

    return (
        '<div class="admin-section-head">📤 Send</div>' +
        '<div class="admin-card">' +
            '<select id="daSendTarget" class="admin-input" style="margin-bottom:10px;">' +
                targets.map(function(t){ return '<option value="' + t.key + '">' + t.label + '</option>'; }).join('') +
            '</select>' +
            '<input id="daSendSubject" class="admin-input" placeholder="Subject" style="margin-bottom:10px;">' +
            '<textarea id="daSendMessage" class="admin-input" rows="4" placeholder="Message..."></textarea>' +

            '<div class="admin-card-title" style="margin-top:14px;">Attach via</div>' +
            '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin-top:8px;">' +
                '<button type="button" class="admin-btn-secondary" onclick="document.getElementById(\'daSendFile\').click()"><i class="fas fa-file-upload"></i> File</button>' +
                '<button type="button" class="admin-btn-secondary" onclick="deputyAcadToggleLink()"><i class="fas fa-link"></i> Paste Link</button>' +
                '<button type="button" class="admin-btn-secondary" onclick="deputyAcadToggleNote()"><i class="fas fa-file-alt"></i> New Note</button>' +
                '<button type="button" class="admin-btn-secondary" onclick="alert(\'Google Drive integration requires backend setup — use File or Link instead for now.\')"><i class="fab fa-google-drive"></i> Drive</button>' +
            '</div>' +
            '<input id="daSendFile" type="file" style="display:none;" onchange="deputyAcadShowFileName()">' +
            '<div id="daSendFileNameDisplay" style="font-size:0.75rem;color:var(--success);margin-top:6px;"></div>' +
            '<div id="daSendLinkWrap" style="display:none;margin-top:8px;">' +
                '<input id="daSendLink" class="admin-input" placeholder="Paste link (e.g. shared doc URL)">' +
            '</div>' +
            '<div id="daSendNoteWrap" style="display:none;margin-top:8px;">' +
                '<textarea id="daSendNote" class="admin-input" rows="4" placeholder="Type a quick note/document content..."></textarea>' +
            '</div>' +

            '<button type="button" class="admin-btn-primary" style="margin-top:16px;width:100%;" onclick="deputyAcadSendToDepartment()">' +
                '<i class="fas fa-paper-plane"></i> Send' +
            '</button>' +
        '</div>'
    );
}

window.deputyAcadToggleLink = function() {
    const w = document.getElementById('daSendLinkWrap');
    w.style.display = w.style.display === 'none' ? 'block' : 'none';
};
window.deputyAcadToggleNote = function() {
    const w = document.getElementById('daSendNoteWrap');
    w.style.display = w.style.display === 'none' ? 'block' : 'none';
};
window.deputyAcadShowFileName = function() {
    const f = document.getElementById('daSendFile').files[0];
    document.getElementById('daSendFileNameDisplay').textContent = f ? '📎 ' + f.name : '';
};

window.deputyAcadSendToDepartment = function() {
    const target  = document.getElementById('daSendTarget').value;
    const subject = document.getElementById('daSendSubject').value.trim();
    const message = document.getElementById('daSendMessage').value.trim();
    const file    = document.getElementById('daSendFile').files[0];
    const link    = document.getElementById('daSendLink') ? document.getElementById('daSendLink').value.trim() : '';
    const note    = document.getElementById('daSendNote') ? document.getElementById('daSendNote').value.trim() : '';
    if (!subject || !message) { alert('Please fill in Subject and Message.'); return; }

    const data = getData();
    const payload = {
        id: 'DAS-' + Date.now(), from: 'Deputy (Academics)', fromRole: 'deputy_acad',
        subject: subject, message: message + (link ? '\n🔗 Link: ' + link : '') + (note ? '\n📝 Note: ' + note : ''),
        fileName: file ? file.name : null,
        timestamp: new Date().toISOString(), read: false
    };

    const routes = {
        principal:  function(){ data.principalReceived  = data.principalReceived  || []; data.principalReceived.push(payload); },
        dean_admin: function(){ data.deanAdminReceived   = data.deanAdminReceived   || []; data.deanAdminReceived.push(Object.assign({}, payload, { title: subject, status:'pending' })); },
        admin:      function(){ data.sysAdminReceived    = data.sysAdminReceived    || []; data.sysAdminReceived.push(payload); },
        hod:        function(){ data.hodReceived         = data.hodReceived         || []; data.hodReceived.push(payload); },
        finance:    function(){ data.financeReceived     = data.financeReceived     || []; data.financeReceived.push(Object.assign({}, payload, { amount:0, studentId:null, studentName:null, addedToFees:false })); },
        examoffice: function(){ data.examOfficeReceived   = data.examOfficeReceived   || []; data.examOfficeReceived.push(payload); }
    };
    (routes[target] || function(){})();

    data.deputyAcadSentItems = data.deputyAcadSentItems || [];
    data.deputyAcadSentItems.push(Object.assign({}, payload, { to: target }));

    saveData(data);
    alert('✅ Sent to ' + target.replace('_',' ') + '.');
    document.getElementById('deputyAcadMain').innerHTML = deputyAcadSendHTML();
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

/* ══════════════════ REPORT — SVG summary ══════════════════ */
function deputyAcadReportHTML() {
    const data = getData();
    const received = data.deputyAcadReceived || [];
    const sent = data.deputyAcadSentItems || [];

    const senderTally = {};
    received.forEach(function(i) { senderTally[i.fromRole] = (senderTally[i.fromRole] || 0) + 1; });
    const bars = Object.keys(senderTally).map(function(k, idx) {
        const colors = ['#8b5cf6','#3b82f6','#10b981','#f59e0b','#ef4444','#ec4899'];
        return { label: k, value: senderTally[k], color: colors[idx % colors.length] };
    });

    const unread = received.filter(function(i){ return !i.read; }).length;
    const readCount = received.length - unread;

    const targetTally = {};
    sent.forEach(function(s) { targetTally[s.to] = (targetTally[s.to] || 0) + 1; });

    return (
        '<div class="admin-section-head">📊 Report</div>' +
        '<div class="admin-card" style="margin-bottom:1rem;">' +
            '<div class="admin-card-title">Received Items by Department</div>' +
            '<div style="overflow-x:auto;margin-top:10px;">' + svgBarChart(bars.length ? bars : [{label:'No data',value:0,color:'#3a2d6e'}]) + '</div>' +
        '</div>' +
        '<div class="admin-card" style="text-align:center;margin-bottom:1rem;">' +
            '<div class="admin-card-title">Read vs Unread</div>' +
            '<div style="display:flex;justify-content:center;margin-top:10px;">' +
                svgDonutChart([{value: readCount || 0.0001, color:'#10b981'}, {value: unread || 0.0001, color:'#f59e0b'}]) +
            '</div>' +
            '<div style="font-size:0.75rem;margin-top:8px;">' +
                '<span style="color:var(--success);">● Read ' + readCount + '</span>&nbsp;' +
                '<span style="color:var(--warning);">● Unread ' + unread + '</span>' +
            '</div>' +
        '</div>' +
        '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:1rem;">' +
            '<div class="stat-card"><h3>' + received.length + '</h3><p>Total Received</p></div>' +
            '<div class="stat-card"><h3 style="color:var(--success);">' + sent.length + '</h3><p>Total Sent</p></div>' +
            '<div class="stat-card"><h3 style="color:var(--warning);">' + unread + '</h3><p>Unread Items</p></div>' +
        '</div>'
    );
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
 


/* ══════════════════════════════════════════
   EXAMINATION OFFICE PORTAL — RESTRUCTURED
══════════════════════════════════════════ */

function renderExamOfficePanel(user) {
    const unread = (getData().examOfficeReceived || []).filter(r => !r.read).length;
    return `
    <div class="admin-layout">
        <div class="admin-sidenav">
            <div class="admin-sidenav-title"><i class="fas fa-building"></i> Exam Office Menu</div>
            <button class="admin-nav-btn" onclick="examOfficeSection('profile',this)"><i class="fas fa-user"></i> Profile</button>
            <button class="admin-nav-btn active" onclick="examOfficeSection('received',this)">
                <i class="fas fa-bell"></i> Received
                ${unread > 0 ? `<span style="background:var(--danger);color:#fff;border-radius:12px;padding:2px 7px;font-size:0.65rem;margin-left:4px;">${unread}</span>` : ''}
            </button>
            <button class="admin-nav-btn" onclick="examOfficeSection('pending',this)"><i class="fas fa-clock"></i> Pending Final Approval</button>
            <button class="admin-nav-btn" onclick="examOfficeSection('registered',this)"><i class="fas fa-check-circle"></i> Registered Students</button>
            <button class="admin-nav-btn" onclick="examOfficeSection('booking',this)"><i class="fas fa-calendar-check"></i> Booking</button>
            <button class="admin-nav-btn" onclick="examOfficeSection('store',this)"><i class="fas fa-archive"></i> My Store</button>
            <button class="admin-nav-btn" onclick="examOfficeSection('send',this)"><i class="fas fa-paper-plane"></i> Send</button>
            <button class="admin-nav-btn" onclick="examOfficeSection('register',this)"><i class="fas fa-list"></i> Exam Register</button>
            <button class="admin-nav-btn" onclick="examOfficeSection('report',this)"><i class="fas fa-chart-bar"></i> Report</button>
        </div>
        <div class="admin-main" id="examOfficeMain">
            ${examOfficeReceivedHTML()}
        </div>
    </div>`;
}

window.examOfficeSection = function(section, btn) {
    document.querySelectorAll('.admin-nav-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    const map = {
        profile:    examOfficeProfileHTML,
        received:   examOfficeReceivedHTML,
        pending:    examOfficePendingHTML,
        registered: examOfficeRegisteredHTML,
        booking:    () => examOfficeBookingHTML(window._examBookingFilters || {}),
        store:      () => examOfficeStoreHTML(window._examStoreFilters || {}),
        send:       examOfficeSendHTML,
        register:   examOfficeRegisterHTML,
        report:     examOfficeReportHTML
    };
    document.getElementById('examOfficeMain').innerHTML = (map[section] || examOfficeReceivedHTML)();
};

/* ══════════════════ PROFILE ══════════════════ */
function examOfficeProfileHTML(user) {
    const data = getData();
    return `
        <div class="admin-section-head">👤 My Profile</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div style="display:flex;gap:1.2rem;align-items:center;flex-wrap:wrap;">
                <div style="width:70px;height:70px;border-radius:50%;background:linear-gradient(135deg,#6c3fcf,#a855f7);display:flex;align-items:center;justify-content:center;font-size:2rem;color:white;flex-shrink:0;">📋</div>
                <div>
                    <h3 style="margin:0;">${user?.name || 'Exam Officer'}</h3>
                    <div style="font-size:0.8rem;color:var(--text-secondary);">${user?.id || 'EXAM-001'}</div>
                    <span class="admin-role-pill" style="margin-top:6px;display:inline-block;">📋 Examination Office</span>
                </div>
            </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:1rem;">
            <div class="stat-card"><h3>${(data.examOfficeReceived||[]).length}</h3><p>Items Received</p></div>
            <div class="stat-card"><h3 style="color:var(--success);">${(data.examOfficeStore||[]).length}</h3><p>Stored Records</p></div>
            <div class="stat-card"><h3 style="color:var(--purple-light);">${(data.examOfficeSentItems||[]).length}</h3><p>Items Sent</p></div>
        </div>`;
}

/* ══════════════════ RECEIVED — 3D department cards ══════════════════ */
function examOfficeReceivedHTML() {
    const data = getData();
    const items = data.examOfficeReceived || [];
    const senders = [
        { key:'principal',    label:'Principal',            icon:'🎓', color:'#a855f7' },
        { key:'admin',        label:'System Admin',         icon:'🔐', color:'#6c3fcf' },
        { key:'deputy_acad',  label:'Deputy (Academics)',   icon:'👑', color:'#3b82f6' },
        { key:'register',     label:'Registrar',            icon:'📇', color:'#10b981' }
    ];

    const cards = senders.map(s => {
        const fromItems = items.filter(i => i.fromRole === s.key);
        const pendingCount = fromItems.filter(i => i.status === 'pending').length;
        return `
        <div onclick="examOfficeOpenSenderInbox('${s.key}')" style="cursor:pointer;background:linear-gradient(135deg, ${s.color}22, ${s.color}11); border:1px solid ${s.color}55; border-radius:16px; padding:1.4rem; text-align:center; transition:transform .25s, box-shadow .25s;"
             onmouseover="this.style.transform='translateY(-6px) scale(1.02)'; this.style.boxShadow='0 12px 24px ${s.color}33';"
             onmouseout="this.style.transform='none'; this.style.boxShadow='none';">
            <div style="font-size:2.4rem;">${s.icon}</div>
            <div style="font-weight:700;margin-top:8px;">${s.label}</div>
            <div style="font-size:0.72rem;color:var(--text-secondary);margin-top:4px;">${fromItems.length} item(s)</div>
            ${pendingCount > 0
                ? `<span class="admin-role-pill" style="margin-top:8px;display:inline-block;background:rgba(245,158,11,.15);border-color:var(--warning);color:var(--warning);">🔔 ${pendingCount} pending</span>`
                : `<span class="admin-role-pill" style="margin-top:8px;display:inline-block;">✅ Clear</span>`}
        </div>`;
    }).join('');

    return `
        <div class="admin-section-head">📥 Received</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <p style="font-size:0.78rem;color:var(--text-secondary);">
                Items sent from the Principal, System Admin, Deputy (Academics) and Registrar arrive here.
                Click a department card to review, confirm, or reject each item.
            </p>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:16px;">${cards}</div>
        <div id="examSenderInboxArea" style="margin-top:1.2rem;"></div>`;
}

window.examOfficeOpenSenderInbox = function(senderKey) {
    const data  = getData();
    const items = (data.examOfficeReceived || []).filter(i => i.fromRole === senderKey).slice().reverse();
    const labelMap = { principal:'Principal', admin:'System Admin', deputy_acad:'Deputy (Academics)', register:'Registrar' };

    const rows = items.length === 0
        ? `<p style="color:var(--text-secondary);font-size:0.85rem;">No items from this department yet.</p>`
        : items.map(i => {
            const statusColor = i.status === 'confirmed' ? 'var(--success)' : i.status === 'rejected' ? 'var(--danger)' : 'var(--warning)';
            const statusLabel = i.status === 'confirmed' ? '✅ Confirmed' : i.status === 'rejected' ? '❌ Rejected' : '⏳ Pending';
            return `
            <div class="admin-card" style="margin-bottom:10px;border-left:4px solid ${statusColor};" onclick="examOfficeMarkReceivedRead('${i.id}')">
                <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:6px;">
                    <div>
                        <strong>${i.subject}</strong>
                        ${i.studentName ? `<div style="font-size:0.72rem;color:var(--text-secondary);margin-top:2px;">${i.studentName} (${i.studentId||'—'}) • ${i.department||'—'}</div>` : ''}
                    </div>
                    <span class="admin-role-pill" style="background:${statusColor}22;border-color:${statusColor};color:${statusColor};">${statusLabel}</span>
                </div>
                <div style="font-size:0.82rem;margin-top:8px;">${i.message}</div>
                ${i.fileName ? `<div style="font-size:0.72rem;margin-top:6px;color:var(--purple-light);">📎 ${i.fileName}</div>` : ''}
                ${i.status === 'rejected' && i.rejectionReason ? `<div style="font-size:0.72rem;margin-top:6px;color:var(--danger);">Reason: ${i.rejectionReason}</div>` : ''}
                <div style="font-size:0.68rem;color:var(--text-secondary);margin-top:6px;">${new Date(i.timestamp).toLocaleString()}</div>
                ${i.status === 'pending' ? `
                <div style="display:flex;gap:8px;margin-top:10px;">
                    <button class="admin-btn-primary" onclick="event.stopPropagation();examOfficeConfirmReceived('${i.id}')">✅ Confirm</button>
                    <button class="admin-action-btn danger" onclick="event.stopPropagation();examOfficeRejectReceived('${i.id}')">❌ Reject</button>
                </div>` : ''}
            </div>`;
        }).join('');

    document.getElementById('examSenderInboxArea').innerHTML = `
        <div class="admin-card">
            <div class="admin-card-title">📨 From ${labelMap[senderKey]} (${items.length})</div>
            <div style="margin-top:10px;">${rows}</div>
        </div>`;
};

window.examOfficeMarkReceivedRead = function(id) {
    const data = getData();
    const item = (data.examOfficeReceived || []).find(i => i.id === id);
    if (item) item.read = true;
    saveData(data);
};

window.examOfficeConfirmReceived = function(id) {
    const data = getData();
    const item = (data.examOfficeReceived || []).find(i => i.id === id);
    if (!item) return;
    item.status = 'confirmed';
    item.read = true;
    data.examOfficeBookings = data.examOfficeBookings || [];
    data.examOfficeBookings.push({
        id: 'BK-' + Date.now(), sourceId: item.id,
        studentId: item.studentId, studentName: item.studentName,
        department: item.department, course: item.course || '—',
        subject: item.subject, message: item.message,
        confirmedAt: new Date().toISOString(), booked: false
    });
    saveData(data);
    alert(`✅ Confirmed. "${item.subject}" moved to Booking.`);
    examOfficeOpenSenderInbox(item.fromRole);
};

window.examOfficeRejectReceived = function(id) {
    const reason = prompt('Reason for rejection (this will notify the sending department):');
    if (!reason) return;
    const data = getData();
    const item = (data.examOfficeReceived || []).find(i => i.id === id);
    if (!item) return;
    item.status = 'rejected';
    item.rejectionReason = reason;
    item.read = true;

    const notify = {
        id: 'NTF-' + Date.now(), from: 'Exam Office', fromRole: 'examoffice',
        subject: `Rejected: ${item.subject}`,
        message: `Your item "${item.subject}" was rejected by the Exam Office. Reason: ${reason}`,
        timestamp: new Date().toISOString(), read: false
    };
    const routes = {
        admin:        () => { data.sysAdminReceived   = data.sysAdminReceived   || []; data.sysAdminReceived.push(notify); },
        deputy_acad:  () => { data.deputyAcadReceived  = data.deputyAcadReceived  || []; data.deputyAcadReceived.push(notify); },
        register:     () => { data.registrarReceived   = data.registrarReceived   || []; data.registrarReceived.push(notify); },
        principal:    () => { data.principalReceived    = data.principalReceived    || []; data.principalReceived.push(notify); }
    };
    (routes[item.fromRole] || (()=>{}))();

    saveData(data);
    alert(`❌ Rejected. Sending department notified with reason.`);
    examOfficeOpenSenderInbox(item.fromRole);
};

/* ══════════════════ BOOKING ══════════════════ */
function examOfficeBookingHTML(filters = {}) {
    const data = getData();
    let bookings = (data.examOfficeBookings || []).filter(b => !b.booked);

    const admin = filters.admin || '', dept = filters.department || '', course = filters.course || '';
    if (admin)  bookings = bookings.filter(b => (b.studentId||'').toLowerCase().includes(admin.toLowerCase()));
    if (dept)   bookings = bookings.filter(b => b.department === dept);
    if (course) bookings = bookings.filter(b => b.course === course);

    const allDepts   = [...new Set((data.examOfficeBookings||[]).map(b => b.department).filter(Boolean))];
    const allCourses = [...new Set((data.examOfficeBookings||[]).map(b => b.course).filter(Boolean))];

    const rows = bookings.length === 0
        ? `<p style="color:var(--text-secondary);font-size:0.85rem;">No items awaiting booking.</p>`
        : bookings.map(b => `
        <div class="admin-card" style="margin-bottom:10px;">
            <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px;align-items:center;">
                <div>
                    <strong>${b.studentName || b.subject}</strong>
                    <div style="font-size:0.72rem;color:var(--text-secondary);">${b.studentId||'—'} • ${b.department||'—'} • ${b.course||'—'}</div>
                    <div style="font-size:0.78rem;margin-top:4px;">${b.subject}</div>
                </div>
                <button class="admin-btn-primary" onclick="examOfficeBookItem('${b.id}')"><i class="fas fa-check"></i> Booked</button>
            </div>
        </div>`).join('');

    return `
        <div class="admin-section-head">📅 Booking (${bookings.length})</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:10px;">
                <input id="bkFilterAdmin" class="admin-input" placeholder="Admission No" value="${admin}">
                <select id="bkFilterDept" class="admin-input">
                    <option value="">All Departments</option>
                    ${allDepts.map(d => `<option value="${d}" ${dept===d?'selected':''}>${d}</option>`).join('')}
                </select>
                <select id="bkFilterCourse" class="admin-input">
                    <option value="">All Courses</option>
                    ${allCourses.map(c => `<option value="${c}" ${course===c?'selected':''}>${c}</option>`).join('')}
                </select>
            </div>
            <div style="display:flex;gap:8px;margin-top:10px;">
                <button class="admin-btn-primary" onclick="examOfficeApplyBookingFilter()">Filter</button>
                <button class="admin-btn-secondary" onclick="examOfficeClearBookingFilter()">Clear</button>
            </div>
        </div>
        ${rows}`;
}

window.examOfficeApplyBookingFilter = function() {
    window._examBookingFilters = {
        admin: document.getElementById('bkFilterAdmin').value,
        department: document.getElementById('bkFilterDept').value,
        course: document.getElementById('bkFilterCourse').value
    };
    document.getElementById('examOfficeMain').innerHTML = examOfficeBookingHTML(window._examBookingFilters);
};
window.examOfficeClearBookingFilter = function() {
    window._examBookingFilters = {};
    document.getElementById('examOfficeMain').innerHTML = examOfficeBookingHTML({});
};

window.examOfficeBookItem = function(bookingId) {
    const data = getData();
    const booking = (data.examOfficeBookings || []).find(b => b.id === bookingId);
    if (!booking) return;
    booking.booked = true;
    booking.bookedAt = new Date().toISOString();
    data.examOfficeStore = data.examOfficeStore || [];
    data.examOfficeStore.push({
        id: 'ST-' + Date.now(),
        studentId: booking.studentId, studentName: booking.studentName,
        department: booking.department, course: booking.course,
        subject: booking.subject, message: booking.message,
        storedAt: new Date().toISOString()
    });
    saveData(data);
    alert('✅ Marked as Booked and moved to My Store.');
    document.getElementById('examOfficeMain').innerHTML = examOfficeBookingHTML(window._examBookingFilters || {});
};

/* ══════════════════ MY STORE ══════════════════ */
function examOfficeStoreHTML(filters = {}) {
    const data = getData();
    let store = data.examOfficeStore || [];

    const dept = filters.department || '', course = filters.course || '', month = filters.month || '', year = filters.year || '';
    if (dept)   store = store.filter(s => s.department === dept);
    if (course) store = store.filter(s => s.course === course);
    if (month)  store = store.filter(s => (new Date(s.storedAt).getMonth()+1).toString().padStart(2,'0') === month);
    if (year)   store = store.filter(s => new Date(s.storedAt).getFullYear().toString() === year);

    const allDepts   = [...new Set((data.examOfficeStore||[]).map(s => s.department).filter(Boolean))];
    const allCourses = [...new Set((data.examOfficeStore||[]).map(s => s.course).filter(Boolean))];
    const allYears   = [...new Set((data.examOfficeStore||[]).map(s => new Date(s.storedAt).getFullYear().toString()))];

    const rows = store.length === 0
        ? `<p style="color:var(--text-secondary);font-size:0.85rem;">No stored records match this filter.</p>`
        : store.slice().reverse().map(s => `
        <div class="admin-card" style="margin-bottom:8px;">
            <strong>${s.studentName || s.subject}</strong>
            <div style="font-size:0.72rem;color:var(--text-secondary);">${s.studentId||'—'} • ${s.department||'—'} • ${s.course||'—'} • ${new Date(s.storedAt).toLocaleDateString()}</div>
            <div style="font-size:0.78rem;margin-top:4px;">${s.subject}</div>
        </div>`).join('');

    return `
        <div class="admin-section-head">🗄️ My Store (${store.length})</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px;">
                <button class="admin-btn-secondary" onclick="examOfficeExportStore('pdf')"><i class="fas fa-file-pdf"></i> PDF</button>
                <button class="admin-btn-secondary" onclick="examOfficeExportStore('excel')"><i class="fas fa-file-excel"></i> Excel</button>
                <button class="admin-btn-secondary" onclick="examOfficeExportStore('csv')"><i class="fas fa-file-csv"></i> CSV</button>
            </div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;">
                <select id="stFilterDept" class="admin-input">
                    <option value="">All Departments</option>
                    ${allDepts.map(d => `<option value="${d}" ${dept===d?'selected':''}>${d}</option>`).join('')}
                </select>
                <select id="stFilterCourse" class="admin-input">
                    <option value="">All Courses</option>
                    ${allCourses.map(c => `<option value="${c}" ${course===c?'selected':''}>${c}</option>`).join('')}
                </select>
                <select id="stFilterMonth" class="admin-input">
                    <option value="">All Months</option>
                    ${['01','02','03','04','05','06','07','08','09','10','11','12'].map(m => `<option value="${m}" ${month===m?'selected':''}>${m}</option>`).join('')}
                </select>
                <select id="stFilterYear" class="admin-input">
                    <option value="">All Years</option>
                    ${allYears.map(y => `<option value="${y}" ${year===y?'selected':''}>${y}</option>`).join('')}
                </select>
            </div>
            <div style="display:flex;gap:8px;margin-top:10px;">
                <button class="admin-btn-primary" onclick="examOfficeApplyStoreFilter()">Filter</button>
                <button class="admin-btn-secondary" onclick="examOfficeClearStoreFilter()">Clear</button>
            </div>
        </div>
        ${rows}`;
}

window.examOfficeApplyStoreFilter = function() {
    window._examStoreFilters = {
        department: document.getElementById('stFilterDept').value,
        course: document.getElementById('stFilterCourse').value,
        month: document.getElementById('stFilterMonth').value,
        year: document.getElementById('stFilterYear').value
    };
    document.getElementById('examOfficeMain').innerHTML = examOfficeStoreHTML(window._examStoreFilters);
};
window.examOfficeClearStoreFilter = function() {
    window._examStoreFilters = {};
    document.getElementById('examOfficeMain').innerHTML = examOfficeStoreHTML({});
};

window.examOfficeExportStore = function(type) {
    const data = getData();
    const store = data.examOfficeStore || [];
    if (store.length === 0) return alert('No records to export.');
    if (type === 'pdf') {
        generatePDF({
            title: 'Exam Office — My Store Records', subtitle: 'Booked student records archive',
            office: 'EXAM OFFICE', stage: 'Store', department: '',
            signatoryLabel: 'Exam Officer Signature',
            columns: [
                {label:'Student', key:'studentName'}, {label:'Admission No', key:'studentId'},
                {label:'Department', key:'department'}, {label:'Course', key:'course'},
                {label:'Subject', key:'subject'}, {label:'Date Stored', key:'date'}
            ],
            rows: store.map(s => ({...s, date: new Date(s.storedAt).toLocaleDateString()}))
        });
    } else {
        const headers = 'Student,AdmissionNo,Department,Course,Subject,DateStored';
        const body = store.map(s => `"${s.studentName||''}","${s.studentId||''}","${s.department||''}","${s.course||''}","${s.subject||''}","${new Date(s.storedAt).toLocaleDateString()}"`).join('\n');
        const blob = new Blob([headers+'\n'+body], {type: type==='excel' ? 'application/vnd.ms-excel' : 'text/csv'});
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = `exam_office_store.${type==='excel'?'xls':'csv'}`;
        a.click(); URL.revokeObjectURL(url);
    }
};

/* ══════════════════ SEND ══════════════════ */
function examOfficeSendHTML() {
    const targets = [
        { key:'finance',     label:'💰 Finance' },
        { key:'deputy_acad', label:'👑 Deputy (Academics)' },
        { key:'admin',       label:'🔐 System Admin' },
        { key:'register',    label:'📇 Registrar' },
        { key:'principal',   label:'🎓 Principal' }
    ];
    return `
        <div class="admin-section-head">📤 Send</div>
        <div class="admin-card">
            <p style="font-size:0.78rem;color:var(--text-secondary);margin-bottom:10px;">
                Upload a file and/or write a message, choose the department, then send.
            </p>
            <div style="display:grid;gap:10px;">
                <select id="sendTargetDept" class="admin-input">
                    ${targets.map(t => `<option value="${t.key}">${t.label}</option>`).join('')}
                </select>
                <input id="sendSubject" class="admin-input" placeholder="Subject">
                <textarea id="sendMessage" class="admin-input" rows="3" placeholder="Message..."></textarea>
                <input id="sendFile" type="file" class="admin-input">
            </div>
            <button class="admin-btn-primary" style="margin-top:12px;" onclick="examOfficeSendToDepartment()">
                <i class="fas fa-paper-plane"></i> Send
            </button>
        </div>`;
}

window.examOfficeSendToDepartment = function() {
    const target  = document.getElementById('sendTargetDept').value;
    const subject = document.getElementById('sendSubject').value.trim();
    const message = document.getElementById('sendMessage').value.trim();
    const file    = document.getElementById('sendFile').files[0];
    if (!subject || !message) return alert('Please fill in Subject and Message.');

    const data = getData();
    const payload = {
        id: 'EOS-' + Date.now(), from: 'Exam Office', fromRole: 'examoffice',
        subject, message, fileName: file?.name || null,
        timestamp: new Date().toISOString(), read: false
    };

    const routes = {
        finance:     () => { data.financeReceived   = data.financeReceived   || []; data.financeReceived.push({...payload, amount:0, studentId:null, studentName:null, addedToFees:false}); },
        deputy_acad: () => { data.deputyAcadReceived = data.deputyAcadReceived || []; data.deputyAcadReceived.push(payload); },
        admin:       () => { data.sysAdminReceived   = data.sysAdminReceived   || []; data.sysAdminReceived.push(payload); },
        register:    () => { data.registrarReceived  = data.registrarReceived  || []; data.registrarReceived.push(payload); },
        principal:   () => { data.principalReceived  = data.principalReceived  || []; data.principalReceived.push(payload); }
    };
    (routes[target] || (()=>{}))();

    data.examOfficeSentItems = data.examOfficeSentItems || [];
    data.examOfficeSentItems.push({ ...payload, to: target });

    saveData(data);
    alert(`✅ Sent to ${target.replace('_',' ')}.`);
    document.getElementById('examOfficeMain').innerHTML = examOfficeSendHTML();
};

/* ══════════════════ PENDING FINAL APPROVAL (kept) ══════════════════ */
function examOfficePendingHTML() {
    const data = getData();
    let pending = data.examRegistrations.filter(r => r.status === 'pending_exam');

    if (pending.length === 0) {
        pending = [{
            id: "REG-687074", studentId: "STU-2026-20670", status: "pending_exam",
            totalExamFee: 4700, units: [{name:"Computer Essentials", code:"CS101"}],
            submittedDate: new Date().toISOString()
        }];
    }

    const cards = pending.map(reg => {
        const student = data.students.find(s => s.id === reg.studentId) || {name: "Sarah Achieng"};
        return `
        <div class="admin-card" style="margin-bottom:15px;">
            <div style="font-weight:700;">${student.name}</div>
            <div style="color:var(--text-secondary);font-size:0.8rem;">
                ${reg.studentId} • ${student.department || 'Computer Studies'}
            </div>
            <div style="margin:12px 0;background:var(--bg-elevated);padding:12px;border-radius:10px;">
                <strong>Units:</strong> ${reg.units.length}<br>
                <strong>Exam Fee:</strong> KSh ${(reg.totalExamFee || 0).toLocaleString()}
            </div>
            <div style="display:flex;gap:10px;">
                <button class="admin-btn-primary" onclick="examOfficeRegisterStudent('${reg.id}')">✅ Register for Exams</button>
                <button class="admin-action-btn danger" onclick="examOfficeReject('${reg.id}')">❌ Reject</button>
            </div>
        </div>`;
    }).join('');

    return `<div class="admin-section-head">📋 Pending Final Approval (${pending.length})</div>${cards}`;
}

window.examOfficeRegisterStudent = function(regId) {
    const data = getData();
    const reg = data.examRegistrations.find(r => r.id === regId);
    if (!reg) return;
    reg.status = 'approved';
    reg.examApproved = true;
    reg.examApprovedDate = new Date().toISOString();
    saveData(data);
    showSuccessAlert(`Registration ${regId} approved successfully!<br>Student is now fully registered for exams.`);
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
        showSuccessAlert(`Registration ${regId} has been rejected.`);
        document.getElementById('examOfficeMain').innerHTML = examOfficePendingHTML();
    }
};

/* ══════════════════ REGISTERED STUDENTS (kept) ══════════════════ */
function examOfficeRegisteredHTML() {
    const data = getData();
    const approved = data.examRegistrations.filter(r => r.status === 'approved');
    let html = `<div class="admin-section-head">✅ Registered Students (${approved.length})</div>`;
    if (approved.length === 0) {
        html += `<div class="admin-card"><p>No students registered yet.</p></div>`;
    } else {
        html += approved.map(reg => {
            const student = data.students.find(s => s.id === reg.studentId) || {};
            return `
            <div class="admin-card">
                <strong>${student.name}</strong> (${reg.studentId})<br>
                <small style="color:var(--text-secondary)">Approved on ${new Date(reg.examApprovedDate).toLocaleDateString()}</small>
            </div>`;
        }).join('');
    }
    html += `<button class="admin-btn-primary" style="margin-top:15px;" onclick="examOfficeGenerateFinalList()">📄 Generate Final Registered List PDF</button>`;
    return html;
}

window.examOfficeGenerateFinalList = function() {
    showSuccessAlert("Final Registered Students List PDF Generated!<br>Ready for printing.");
};

/* ══════════════════ EXAM REGISTER (kept) ══════════════════ */
function examOfficeRegisterHTML() {
    return `
        <div class="admin-section-head">📋 Full Exam Register</div>
        <div class="admin-card">
            <p>Full official exam register with all approved students.</p>
            <button class="admin-btn-primary" onclick="examOfficeGenerateRegister()">📄 Generate & Download Exam Register PDF</button>
        </div>`;
}

window.examOfficeGenerateRegister = function() {
    showSuccessAlert("Official Exam Register PDF Generated!<br>Contains all approved students.");
};

/* ══════════════════ REPORT — SVG graphs ══════════════════ */
function examOfficeReportHTML() {
    const data = getData();
    const received  = data.examOfficeReceived || [];
    const confirmed = received.filter(r => r.status==='confirmed').length;
    const rejected  = received.filter(r => r.status==='rejected').length;
    const pending   = received.filter(r => r.status==='pending').length;

    const bookings = data.examOfficeBookings || [];
    const booked   = bookings.filter(b=>b.booked).length;
    const awaiting = bookings.filter(b=>!b.booked).length;

    const store = data.examOfficeStore || [];
    const deptTally = {};
    store.forEach(s => { deptTally[s.department||'Unspecified'] = (deptTally[s.department||'Unspecified']||0)+1; });
    const deptBars = Object.entries(deptTally).map(([d,c],i) => ({ label:d, value:c, color: ['#8b5cf6','#3b82f6','#10b981','#f59e0b','#ef4444'][i%5] }));

    return `
        <div class="admin-section-head">📊 Report</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">Stored Records by Department</div>
            <div style="overflow-x:auto;margin-top:10px;">
                ${svgBarChart(deptBars.length ? deptBars : [{label:'No data',value:0,color:'#3a2d6e'}])}
            </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1rem;margin-bottom:1rem;">
            <div class="admin-card" style="text-align:center;">
                <div class="admin-card-title">Received Items Status</div>
                <div style="display:flex;justify-content:center;margin-top:10px;">
                    ${svgDonutChart([{value:confirmed||0.0001,color:'#10b981'},{value:pending||0.0001,color:'#f59e0b'},{value:rejected||0.0001,color:'#ef4444'}])}
                </div>
                <div style="font-size:0.75rem;margin-top:8px;">
                    <span style="color:var(--success);">● Confirmed ${confirmed}</span>&nbsp;
                    <span style="color:var(--warning);">● Pending ${pending}</span>&nbsp;
                    <span style="color:var(--danger);">● Rejected ${rejected}</span>
                </div>
            </div>
            <div class="admin-card" style="text-align:center;">
                <div class="admin-card-title">Booking Status</div>
                <div style="display:flex;justify-content:center;margin-top:10px;">
                    ${svgDonutChart([{value:booked||0.0001,color:'#10b981'},{value:awaiting||0.0001,color:'#f59e0b'}])}
                </div>
                <div style="font-size:0.75rem;margin-top:8px;">
                    <span style="color:var(--success);">● Booked ${booked}</span>&nbsp;
                    <span style="color:var(--warning);">● Awaiting ${awaiting}</span>
                </div>
            </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:1rem;">
            <div class="stat-card"><h3>${received.length}</h3><p>Total Received</p></div>
            <div class="stat-card"><h3>${bookings.length}</h3><p>Total Bookings</p></div>
            <div class="stat-card"><h3>${store.length}</h3><p>Stored Records</p></div>
            <div class="stat-card"><h3>${(data.examOfficeSentItems||[]).length}</h3><p>Items Sent</p></div>
        </div>`;
}

/* ══════════════════════════════════════════
   FRONT OFFICE PORTAL
══════════════════════════════════════════ */
const frontOfficeSenders = [
    { key:'finance',     label:'Finance',      icon:'💰' },
    { key:'mess',        label:'Mess',         icon:'🍽️' },
    { key:'classrep',    label:'Class Reps',   icon:'🗣️' },
    { key:'kitco',       label:'KITCO',        icon:'🎉' },
    { key:'principal',   label:'Principal',    icon:'🎓' },
    { key:'deputy_dean', label:'Deputy Dean',  icon:'🧑‍💼' },
    { key:'admin',       label:'System Admin', icon:'🔐' }
];

function frontOfficeReceivedHTML() {
    const data = getData();

    const genericCards = frontOfficeSenders.map(s => {
        const fromItems = (data.frontOfficeReceived || []).filter(i => i.fromRole === s.key);
        const pending = fromItems.filter(i => !i.read).length;
        return `
        <div onclick="frontOfficeOpenSenderInbox('${s.key}')" style="cursor:pointer;background:linear-gradient(135deg,#6c3fcf22,#6c3fcf11);border:1px solid #6c3fcf55;border-radius:16px;padding:1.2rem;text-align:center;transition:transform .25s, box-shadow .25s;"
             onmouseover="this.style.transform='translateY(-6px) scale(1.02)';this.style.boxShadow='0 12px 24px #6c3fcf33';"
             onmouseout="this.style.transform='none';this.style.boxShadow='none';">
            <div style="font-size:2.2rem;">${s.icon}</div>
            <div style="font-weight:700;margin-top:6px;font-size:0.88rem;">${s.label}</div>
            ${pending > 0
                ? `<span class="admin-role-pill" style="margin-top:8px;display:inline-block;background:rgba(245,158,11,.15);border-color:var(--warning);color:var(--warning);"><i class="fas fa-bell"></i> ${pending} new</span>`
                : `<span class="admin-role-pill" style="margin-top:8px;display:inline-block;">✅ Clear</span>`}
        </div>`;
    }).join('');

    const hostelPending = (data.hostelClearances?.female?.filter(h=>!h.read).length || 0) + (data.hostelClearances?.male?.filter(h=>!h.read).length || 0);
    const hostelsCard = `
    <div onclick="frontOfficeOpenHostelsInbox()" style="cursor:pointer;background:linear-gradient(135deg,#f9731622,#f9731611);border:1px solid #f9731655;border-radius:16px;padding:1.2rem;text-align:center;transition:transform .25s, box-shadow .25s;"
         onmouseover="this.style.transform='translateY(-6px) scale(1.02)';this.style.boxShadow='0 12px 24px #f9731633';"
         onmouseout="this.style.transform='none';this.style.boxShadow='none';">
        <div style="font-size:2.2rem;">🏠</div>
        <div style="font-weight:700;margin-top:6px;font-size:0.88rem;">Hostels</div>
        ${hostelPending > 0
            ? `<span class="admin-role-pill" style="margin-top:8px;display:inline-block;background:rgba(245,158,11,.15);border-color:var(--warning);color:var(--warning);"><i class="fas fa-bell"></i> ${hostelPending} new</span>`
            : `<span class="admin-role-pill" style="margin-top:8px;display:inline-block;">✅ Clear</span>`}
    </div>`;

    return `
        <div class="admin-section-head">📥 Received</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <p style="font-size:0.78rem;color:var(--text-secondary);">
                Items from Finance, Mess, Class Reps, KITCO, Principal, Deputy Dean, System Admin, and both Hostel
                wings arrive here. Click a card, review, then confirm — confirmed items move to Share.
            </p>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:16px;">${genericCards}${hostelsCard}</div>
        <div id="frontOfficeSenderInboxArea" style="margin-top:1.2rem;"></div>`;
}

window.frontOfficeOpenSenderInbox = function(key) {
    const data = getData();
    const meta = frontOfficeSenders.find(s => s.key === key);
    const items = (data.frontOfficeReceived || []).filter(i => i.fromRole === key).slice().reverse();
    items.forEach(i => i.read = true);
    saveData(data);

    const rows = items.length === 0
        ? `<p style="color:var(--text-secondary);font-size:0.85rem;">No items from this department yet.</p>`
        : items.map(i => `
        <div class="admin-card" style="margin-bottom:10px;border-left:4px solid ${i.status==='confirmed'?'var(--success)':'var(--warning)'};">
            <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:6px;">
                <strong>${i.subject}</strong>
                <span class="admin-role-pill" style="${i.status==='confirmed'?'background:rgba(16,185,129,.15);border-color:var(--success);color:var(--success);':'background:rgba(245,158,11,.15);border-color:var(--warning);color:var(--warning);'}">${i.status==='confirmed'?'✅ Confirmed':'⏳ Pending'}</span>
            </div>
            <div style="font-size:0.82rem;margin-top:8px;">${i.message}</div>
            <div style="font-size:0.68rem;color:var(--text-secondary);margin-top:6px;">${new Date(i.timestamp).toLocaleString()}</div>
            ${i.status !== 'confirmed' ? `<button class="admin-btn-primary" style="margin-top:8px;" onclick="frontOfficeConfirmItem('${i.id}')">✅ Confirm</button>` : ''}
        </div>`).join('');

    document.getElementById('frontOfficeSenderInboxArea').innerHTML = `
        <div class="admin-card">
            <div class="admin-card-title">${meta.icon} From ${meta.label}</div>
            <div style="margin-top:10px;">${rows}</div>
        </div>`;
};

/* Hostels — matches image 5 layout exactly */
window.frontOfficeOpenHostelsInbox = function() {
    const data = getData();
    data.hostelClearances = data.hostelClearances || { female: [], male: [] };
    data.hostelClearances.female.forEach(h => h.read = true);
    data.hostelClearances.male.forEach(h => h.read = true);
    saveData(data);

    const buildList = (list, wingLabel, clearer) => `
        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">${wingLabel} — Cleared by ${clearer} (${list.length})</div>
            <div style="margin-top:10px;">
                ${list.length === 0 ? `<p style="color:var(--text-secondary);font-size:0.85rem;">No ${wingLabel.toLowerCase()} clearances received yet.</p>` :
                list.slice().reverse().map(h => `
                <div style="padding:0.7rem 0;border-bottom:1px solid var(--border);font-size:0.84rem;">
                    <strong>${h.studentName}</strong> <span style="color:var(--text-secondary);">(${h.studentId})</span> • ${h.department}
                    <div style="font-size:0.7rem;color:var(--text-secondary);margin-top:2px;">Cleared ${new Date(h.date).toLocaleDateString()}</div>
                </div>`).join('')}
            </div>
        </div>`;

    document.getElementById('frontOfficeSenderInboxArea').innerHTML = `
        <div class="admin-section-head" style="font-size:1rem;">🏠 Hostel Clearance</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <p style="font-size:0.78rem;color:var(--text-secondary);">
                Lists sent by Matron (female wing) and Patron (male wing) after they confirm each student has
                vacated their room. Generate clearance slips per student from here.
            </p>
        </div>
        ${buildList(data.hostelClearances.female, '👧 Female Wing', 'Matron')}
        ${buildList(data.hostelClearances.male, '👦 Male Wing', 'Patron')}`;
};

window.frontOfficeConfirmItem = function(id) {
    const data = getData();
    const item = (data.frontOfficeReceived || []).find(i => i.id === id);
    if (!item) return;
    item.status = 'confirmed';
    item.read = true;
    saveData(data);
    alert('✅ Confirmed. Item moved to Share for distribution.');
    window.frontOfficeOpenSenderInbox(item.fromRole);
};

function renderFrontOfficePanel(user) {
    const recUnread = (getData().frontOfficeReceived||[]).filter(i=>!i.read).length;
    return `
    <div class="admin-layout">
        <div class="admin-sidenav">
            <div class="admin-sidenav-title"><i class="fas fa-heart"></i> Front Office Menu</div>
            <button class="admin-nav-btn" onclick="frontOfficeSection('profile',this)"><i class="fas fa-user"></i> Profile</button>
            <button class="admin-nav-btn active" onclick="frontOfficeSection('received',this)">
                <i class="fas fa-bell"></i> Received
                ${recUnread>0?`<span style="background:var(--danger);color:#fff;border-radius:12px;padding:2px 7px;font-size:0.65rem;margin-left:4px;">${recUnread}</span>`:''}
            </button>
            <button class="admin-nav-btn" onclick="frontOfficeSection('share',this)"><i class="fas fa-share-square"></i> Share</button>
            <button class="admin-nav-btn" onclick="frontOfficeSection('activities',this)"><i class="fas fa-calendar-alt"></i> Activity Approvals</button>
            <button class="admin-nav-btn" onclick="frontOfficeSection('mess',this)"><i class="fas fa-utensils"></i> Mess Boarders</button>
            <button class="admin-nav-btn" onclick="frontOfficeSection('report',this)"><i class="fas fa-chart-bar"></i> Report</button>
        </div>
        <div class="admin-main" id="frontOfficeMain">${frontOfficeReceivedHTML()}</div>
    </div>`;
}

window.frontOfficeSection = function(section, btn) {
    document.querySelectorAll('.admin-nav-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    const map = {
        profile:    () => frontOfficeProfileHTML(user),
        received:   () => frontOfficeReceivedHTML(),
        share:      () => frontOfficeShareHTML(),
        activities: () => deanActivitiesHTML(user),
        mess:       () => messBoardersHTML('frontOfficeMain'),
        report:     () => frontOfficeReportHTML()
    };
    document.getElementById('frontOfficeMain').innerHTML = (map[section] || (()=>frontOfficeReceivedHTML()))();
};

function frontOfficeProfileHTML(user) {
    const data = getData();
    const received = data.frontOfficeReceived || [];
    const shared = received.filter(i => i.sharedAt).length;
    return `
        <div class="admin-section-head">👤 My Profile</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div style="display:flex;gap:1.2rem;align-items:center;flex-wrap:wrap;">
                <div style="width:70px;height:70px;border-radius:50%;background:linear-gradient(135deg,#10b981,#059669);display:flex;align-items:center;justify-content:center;font-size:2rem;color:white;">🗂️</div>
                <div>
                    <h3 style="margin:0;">${user.name}</h3>
                    <div style="font-size:0.8rem;color:var(--text-secondary);">${user.id}</div>
                    <span class="admin-role-pill" style="margin-top:6px;display:inline-block;">Front Office</span>
                </div>
            </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:1rem;">
            <div class="stat-card"><h3>${received.length}</h3><p>Items Received</p></div>
            <div class="stat-card"><h3 style="color:var(--success);">${shared}</h3><p>Items Shared</p></div>
        </div>`;
}

function frontOfficeReceivedHTML() {
    const data = getData();
    const cards = frontOfficeSenders.map(s => {
        const fromItems = (data.frontOfficeReceived || []).filter(i => i.fromRole === s.key);
        const pending = fromItems.filter(i => !i.read).length;
        return `
        { id:'FOR-DEMO-07', from:'System Admin', fromRole:'admin', subject:'New Term Circular', message:'Please distribute the updated term calendar to both Deputy Deans.', timestamp:'2026-06-21T09:00:00.000Z', status:'pending', read:false }
        <div onclick="frontOfficeOpenSenderInbox('${s.key}')" style="cursor:pointer;background:linear-gradient(135deg,#6c3fcf22,#6c3fcf11);border:1px solid #6c3fcf55;border-radius:16px;padding:1.2rem;text-align:center;transition:transform .25s, box-shadow .25s;"
             onmouseover="this.style.transform='translateY(-6px) scale(1.02)';this.style.boxShadow='0 12px 24px #6c3fcf33';"
             onmouseout="this.style.transform='none';this.style.boxShadow='none';">
            <div style="font-size:2.2rem;">${s.icon}</div>
            <div style="font-weight:700;margin-top:6px;font-size:0.88rem;">${s.label}</div>
            ${pending > 0
                ? `<span class="admin-role-pill" style="margin-top:8px;display:inline-block;background:rgba(245,158,11,.15);border-color:var(--warning);color:var(--warning);"><i class="fas fa-bell"></i> ${pending} new</span>`
                : `<span class="admin-role-pill" style="margin-top:8px;display:inline-block;">✅ Clear</span>`}
        </div>`;
    }).join('');

    return `
        <div class="admin-section-head">📥 Received</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <p style="font-size:0.78rem;color:var(--text-secondary);">
                Items from Finance, Mess, Class Reps, KITCO, Principal, and Deputy Dean arrive here. Click a card,
                review, then confirm — confirmed items move to Share for distribution to the Deputy Deans.
            </p>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:16px;">${cards}</div>
        <div id="frontOfficeSenderInboxArea" style="margin-top:1.2rem;"></div>`;
}

window.frontOfficeOpenSenderInbox = function(key) {
    const data = getData();
    const meta = frontOfficeSenders.find(s => s.key === key);
    const items = (data.frontOfficeReceived || []).filter(i => i.fromRole === key).slice().reverse();
    items.forEach(i => i.read = true);
    saveData(data);

    const rows = items.length === 0
        ? `<p style="color:var(--text-secondary);font-size:0.85rem;">No items from this department yet.</p>`
        : items.map(i => `
        <div class="admin-card" style="margin-bottom:10px;border-left:4px solid ${i.status==='confirmed'?'var(--success)':'var(--warning)'};">
            <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:6px;">
                <strong>${i.subject}</strong>
                <span class="admin-role-pill" style="${i.status==='confirmed'?'background:rgba(16,185,129,.15);border-color:var(--success);color:var(--success);':'background:rgba(245,158,11,.15);border-color:var(--warning);color:var(--warning);'}">${i.status==='confirmed'?'✅ Confirmed':'⏳ Pending'}</span>
            </div>
            <div style="font-size:0.82rem;margin-top:8px;">${i.message}</div>
            <div style="font-size:0.68rem;color:var(--text-secondary);margin-top:6px;">${new Date(i.timestamp).toLocaleString()}</div>
            ${i.status !== 'confirmed' ? `<button class="admin-btn-primary" style="margin-top:8px;" onclick="frontOfficeConfirmItem('${i.id}')">✅ Confirm</button>` : ''}
        </div>`).join('');

    document.getElementById('frontOfficeSenderInboxArea').innerHTML = `
        <div class="admin-card">
            <div class="admin-card-title">${meta.icon} From ${meta.label}</div>
            <div style="margin-top:10px;">${rows}</div>
        </div>`;
};

window.frontOfficeConfirmItem = function(id) {
    const data = getData();
    const item = (data.frontOfficeReceived || []).find(i => i.id === id);
    if (!item) return;
    item.status = 'confirmed';
    item.read = true;
    saveData(data);
    alert('✅ Confirmed. Item moved to Share for distribution.');
    window.frontOfficeOpenSenderInbox(item.fromRole);
};

function frontOfficeShareHTML() {
    const data = getData();
    const confirmed = (data.frontOfficeReceived || []).filter(i => i.status === 'confirmed' && !i.sharedAt);
    const shared = (data.frontOfficeReceived || []).filter(i => i.sharedAt);

    const cards = confirmed.length === 0
        ? `<p style="color:var(--text-secondary);font-size:0.85rem;">No confirmed items awaiting share.</p>`
        : confirmed.map(i => `
        <div class="admin-card" style="margin-bottom:1rem;">
            <div style="font-weight:700;">${i.subject}</div>
            <div style="font-size:0.72rem;color:var(--text-secondary);margin-top:2px;">From: ${i.from}</div>
            <div style="font-size:0.82rem;margin-top:6px;">${i.message}</div>
            <div style="margin-top:10px;">
                <label style="font-size:0.7rem;color:var(--text-secondary);">TITLE FOR DEPUTY DEAN</label>
                <input id="shareTitle_${i.id}" class="admin-input" placeholder="e.g. Weekly Fee Clearance Digest" style="margin-top:4px;">
            </div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px;margin-top:12px;">
                <div onclick="frontOfficeShareTo('${i.id}','deputy_dean1')" style="cursor:pointer;background:linear-gradient(135deg,#3b82f622,#3b82f611);border:1px solid #3b82f655;border-radius:14px;padding:1rem;text-align:center;transition:transform .2s;"
                     onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='none'">
                    <div style="font-size:1.6rem;">🧑‍💼</div>
                    <div style="font-weight:700;margin-top:4px;font-size:0.82rem;">Send to Deputy Dean 1</div>
                </div>
                <div onclick="frontOfficeShareTo('${i.id}','deputy_dean2')" style="cursor:pointer;background:linear-gradient(135deg,#8b5cf622,#8b5cf611);border:1px solid #8b5cf655;border-radius:14px;padding:1rem;text-align:center;transition:transform .2s;"
                     onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='none'">
                    <div style="font-size:1.6rem;">🧑‍💼</div>
                    <div style="font-weight:700;margin-top:4px;font-size:0.82rem;">Send to Deputy Dean 2</div>
                </div>
            </div>
        </div>`).join('');

    return `
        <div class="admin-section-head">📤 Share</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <p style="font-size:0.78rem;color:var(--text-secondary);">
                Confirmed items appear here. Give each a title, then click a Deputy Dean's card to send it.
            </p>
        </div>
        ${cards}
        <div class="admin-card" style="margin-top:1rem;">
            <div class="admin-card-title">✅ Shared History (${shared.length})</div>
            ${shared.length === 0 ? '<p style="color:var(--text-secondary);font-size:0.85rem;margin-top:8px;">None shared yet.</p>' :
            shared.slice().reverse().map(i => `
            <div style="padding:0.7rem 0;border-bottom:1px solid var(--border);font-size:0.82rem;">
                <strong>${i.shareTitle}</strong> → ${i.sharedTo === 'deputy_dean1' ? 'Deputy Dean 1' : 'Deputy Dean 2'}
                <div style="font-size:0.68rem;color:var(--text-secondary);">${new Date(i.sharedAt).toLocaleString()}</div>
            </div>`).join('')}
        </div>`;
}

window.frontOfficeShareTo = function(itemId, toRole) {
    const data = getData();
    const item = (data.frontOfficeReceived || []).find(i => i.id === itemId);
    if (!item) return;
    const titleEl = document.getElementById(`shareTitle_${itemId}`);
    const title = titleEl ? titleEl.value.trim() : '';
    if (!title) return alert('Please give this item a title before sending.');

    item.sharedAt = new Date().toISOString();
    item.sharedTo = toRole;
    item.shareTitle = title;

    data.deputyDeanReceived = data.deputyDeanReceived || [];
    data.deputyDeanReceived.push({
        id: 'DDR-' + Date.now(), title, message: item.message, sourceSubject: item.subject,
        fromFrontOffice: true, toRole, status: 'pending', signedBy: null,
        timestamp: new Date().toISOString()
    });

    saveData(data);
    alert(`✅ "${title}" sent to ${toRole === 'deputy_dean1' ? 'Deputy Dean 1' : 'Deputy Dean 2'}.`);
    document.getElementById('frontOfficeMain').innerHTML = frontOfficeShareHTML();
};

function frontOfficeReportHTML() {
    const data = getData();
    const received = data.frontOfficeReceived || [];
    const pending = received.filter(i => i.status === 'pending').length;
    const confirmed = received.filter(i => i.status === 'confirmed' && !i.sharedAt).length;
    const shared = received.filter(i => i.sharedAt).length;

    const senderTally = {};
    received.forEach(i => { senderTally[i.fromRole] = (senderTally[i.fromRole]||0)+1; });
    const bars = Object.entries(senderTally).map(([k,c],i) => ({ label:k, value:c, color:['#8b5cf6','#3b82f6','#10b981','#f59e0b','#ef4444','#ec4899'][i%6] }));

    return `
        <div class="admin-section-head">📊 Report</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">Received Items by Department</div>
            <div style="overflow-x:auto;margin-top:10px;">${svgBarChart(bars.length?bars:[{label:'No data',value:0,color:'#3a2d6e'}])}</div>
        </div>
        <div class="admin-card" style="text-align:center;margin-bottom:1rem;">
            <div class="admin-card-title">Item Pipeline</div>
            <div style="display:flex;justify-content:center;margin-top:10px;">
                ${svgDonutChart([{value:pending||0.0001,color:'#f59e0b'},{value:confirmed||0.0001,color:'#3b82f6'},{value:shared||0.0001,color:'#10b981'}])}
            </div>
            <div style="font-size:0.75rem;margin-top:8px;">
                <span style="color:var(--warning);">● Pending ${pending}</span>&nbsp;
                <span style="color:#3b82f6;">● Confirmed ${confirmed}</span>&nbsp;
                <span style="color:var(--success);">● Shared ${shared}</span>
            </div>
        </div>`;
}

/* ══════════════════════════════════════════
   DEPUTY DEAN PORTAL (shared by both)
══════════════════════════════════════════ */
function renderDeputyDeanPanel(user) {
    const data = getData();
    const pending = (data.deputyDeanReceived || []).filter(i => i.toRole === user.role && i.status === 'pending').length;
    return `
    <div class="admin-layout">
        <div class="admin-sidenav">
            <div class="admin-sidenav-title"><i class="fas fa-user-tie"></i> ${user.name} Menu</div>
            <button class="admin-nav-btn" onclick="deputyDeanSection('profile',this)"><i class="fas fa-user"></i> Profile</button>
            <button class="admin-nav-btn active" onclick="deputyDeanSection('received',this)">
                <i class="fas fa-bell"></i> Received
                ${pending > 0 ? `<span style="background:var(--danger);color:#fff;border-radius:12px;padding:2px 7px;font-size:0.65rem;margin-left:4px;">${pending}</span>` : ''}
            </button>
            <button class="admin-nav-btn" onclick="deputyDeanSection('store',this)"><i class="fas fa-box-archive"></i> Store</button>
            <button class="admin-nav-btn" onclick="deputyDeanSection('report',this)"><i class="fas fa-chart-bar"></i> Report</button>
        </div>
        <div class="admin-main" id="deputyDeanMain">${deputyDeanReceivedHTML(user)}</div>
    </div>`;
}

window.deputyDeanSection = function(section, btn) {
    document.querySelectorAll('.admin-nav-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    const map = {
        profile:  () => deputyDeanProfileHTML(user),
        received: () => deputyDeanReceivedHTML(user),
        store:    () => deputyDeanStoreHTML(user),
        report:   () => deputyDeanReportHTML(user)
    };
    document.getElementById('deputyDeanMain').innerHTML = (map[section] || (()=>deputyDeanReceivedHTML(user)))();
};

function deputyDeanProfileHTML(user) {
    const data = getData();
    const mine = (data.deputyDeanReceived || []).filter(i => i.toRole === user.role);
    const confirmed = mine.filter(i => i.status === 'confirmed').length;
    const pending = mine.filter(i => i.status === 'pending').length;
    return `
        <div class="admin-section-head">👤 My Profile</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div style="display:flex;gap:1.2rem;align-items:center;flex-wrap:wrap;">
                <div style="width:70px;height:70px;border-radius:50%;background:linear-gradient(135deg,#3b82f6,#1d4ed8);display:flex;align-items:center;justify-content:center;font-size:2rem;color:white;">🧑‍💼</div>
                <div>
                    <h3 style="margin:0;">${user.name}</h3>
                    <div style="font-size:0.8rem;color:var(--text-secondary);">${user.id}</div>
                    <span class="admin-role-pill" style="margin-top:6px;display:inline-block;">Deputy Dean of Students</span>
                </div>
            </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:1rem;">
            <div class="stat-card"><h3>${mine.length}</h3><p>Total Received</p></div>
            <div class="stat-card"><h3 style="color:var(--warning);">${pending}</h3><p>Pending</p></div>
            <div class="stat-card"><h3 style="color:var(--success);">${confirmed}</h3><p>Confirmed</p></div>
        </div>`;
}

function deputyDeanReceivedHTML(user) {
    const data = getData();
    const items = (data.deputyDeanReceived || []).filter(i => i.toRole === user.role && i.status === 'pending').slice().reverse();

    const rows = items.length === 0
        ? `<p style="color:var(--text-secondary);font-size:0.85rem;">No pending items from Front Office.</p>`
        : items.map(i => `
        <div class="admin-card" style="margin-bottom:10px;">
            <strong>${i.title}</strong>
            <div style="font-size:0.72rem;color:var(--text-secondary);margin-top:2px;">From: Front Office • Ref: ${i.sourceSubject || '—'}</div>
            <div style="font-size:0.82rem;margin-top:6px;">${i.message}</div>
            <div style="font-size:0.68rem;color:var(--text-secondary);margin-top:6px;">${new Date(i.timestamp).toLocaleString()}</div>
            <div style="margin-top:10px;">
                <label style="font-size:0.7rem;color:var(--text-secondary);">SIGN AS (optional)</label>
                <input id="signName_${i.id}" class="admin-input" placeholder="Your full name" style="margin-top:4px;">
            </div>
            <div onclick="deputyDeanConfirmItem('${i.id}')" style="margin-top:10px;cursor:pointer;background:linear-gradient(135deg,#10b98122,#10b98111);border:1px solid #10b98155;border-radius:14px;padding:0.8rem;text-align:center;font-weight:700;color:var(--success);transition:transform .2s;"
                 onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform='none'">
                ✅ Confirm
            </div>
        </div>`).join('');

    return `
        <div class="admin-section-head">📥 Received</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <p style="font-size:0.78rem;color:var(--text-secondary);">Items shared by Front Office. Optionally sign your name, then confirm — it moves to Store.</p>
        </div>
        ${rows}`;
}

window.deputyDeanConfirmItem = function(id) {
    const data = getData();
    const item = (data.deputyDeanReceived || []).find(i => i.id === id);
    if (!item) return;
    const nameEl = document.getElementById(`signName_${id}`);
    item.signedBy = nameEl && nameEl.value.trim() ? nameEl.value.trim() : null;
    item.status = 'confirmed';
    item.confirmedAt = new Date().toISOString();
    saveData(data);
    alert('✅ Confirmed and moved to Store.');
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    document.getElementById('deputyDeanMain').innerHTML = deputyDeanReceivedHTML(user);
};

function deputyDeanStoreHTML(user) {
    const data = getData();
    const items = (data.deputyDeanReceived || []).filter(i => i.toRole === user.role && i.status === 'confirmed').slice().reverse();

    const rows = items.length === 0
        ? `<p style="color:var(--text-secondary);font-size:0.85rem;">No confirmed items yet.</p>`
        : items.map(i => `
        <div class="admin-card" style="margin-bottom:10px;border-left:4px solid var(--success);">
            <strong>${i.title}</strong>
            <div style="font-size:0.72rem;color:var(--text-secondary);margin-top:2px;">
                Confirmed: ${new Date(i.confirmedAt).toLocaleString()} ${i.signedBy ? `• Signed by: ${i.signedBy}` : ''}
            </div>
            <div style="font-size:0.82rem;margin-top:6px;">${i.message}</div>
            ${i.sentToDeanAdmin
                ? `<span class="admin-role-pill" style="margin-top:8px;display:inline-block;background:rgba(16,185,129,.15);border-color:var(--success);color:var(--success);">✅ Sent to Dean Admin</span>`
                : `<button class="admin-action-btn edit" style="margin-top:8px;" onclick="deputyDeanSendToAdmin('${i.id}')"><i class="fas fa-paper-plane"></i> Send to Admin Dean</button>`}
        </div>`).join('');

    return `
        <div class="admin-section-head">🗄️ Store</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <p style="font-size:0.78rem;color:var(--text-secondary);">Confirmed records archived here. Send them onward to the Dean Admin when ready.</p>
        </div>
        ${rows}`;
}

window.deputyDeanSendToAdmin = function(id) {
    const data = getData();
    const item = (data.deputyDeanReceived || []).find(i => i.id === id);
    if (!item) return;
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    item.sentToDeanAdmin = true;
    item.sentToDeanAdminAt = new Date().toISOString();

    data.deanAdminReceived = data.deanAdminReceived || [];
    data.deanAdminReceived.push({
        id: 'DAR-' + Date.now(), from: user.name, fromRole: user.role,
        title: item.title, message: item.message, signedBy: item.signedBy,
        status: 'pending', read: false, timestamp: new Date().toISOString()
    });

    saveData(data);
    alert('✅ Sent to Dean Admin.');
    document.getElementById('deputyDeanMain').innerHTML = deputyDeanStoreHTML(user);
};

function deputyDeanReportHTML(user) {
    const data = getData();
    const mine = (data.deputyDeanReceived || []).filter(i => i.toRole === user.role);
    const pending = mine.filter(i => i.status === 'pending').length;
    const confirmed = mine.filter(i => i.status === 'confirmed' && !i.sentToDeanAdmin).length;
    const sent = mine.filter(i => i.sentToDeanAdmin).length;

    return `
        <div class="admin-section-head">📊 Report</div>
        <div class="admin-card" style="text-align:center;">
            <div class="admin-card-title">Item Flow Status</div>
            <div style="display:flex;justify-content:center;margin-top:10px;">
                ${svgDonutChart([{value:pending||0.0001,color:'#f59e0b'},{value:confirmed||0.0001,color:'#3b82f6'},{value:sent||0.0001,color:'#10b981'}])}
            </div>
            <div style="font-size:0.75rem;margin-top:8px;">
                <span style="color:var(--warning);">● Pending ${pending}</span>&nbsp;
                <span style="color:#3b82f6;">● In Store ${confirmed}</span>&nbsp;
                <span style="color:var(--success);">● Sent to Dean Admin ${sent}</span>
            </div>
        </div>`;
}

/* ══════════════════════════════════════════
   DEAN ADMIN PORTAL
══════════════════════════════════════════ */
function showDeanSubLogin() {
    document.getElementById('schoolInfoPanel').style.display = 'none';
    document.getElementById('loginFormContainer').style.display = 'block';
    document.getElementById('dashboardContainer').style.display = 'none';

    document.getElementById('loginTitle').innerHTML = "💛 Dean's Office — Select Portal";

    const portals = [
        { role:'dean_admin',   name:'Dean of Students', sub:'Admin Office',   color:'#ec4899', img:'https://i.pravatar.cc/300?img=47' },
        { role:'deputy_dean1', name:'Deputy Dean 1',    sub:'Academic Wing',  color:'#3b82f6', img:'https://i.pravatar.cc/300?img=12' },
        { role:'deputy_dean2', name:'Deputy Dean 2',    sub:'Welfare Wing',   color:'#8b5cf6', img:'https://i.pravatar.cc/300?img=33' },
        { role:'front_office', name:'Front Office',     sub:'Reception Desk', color:'#10b981', img:'https://i.pravatar.cc/300?img=25' }
    ];

    let cardsHTML = '<p style="color:var(--text-secondary);font-size:0.85rem;margin-bottom:16px;">Select your office to log in:</p>';
    cardsHTML += '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:16px;">';

    portals.forEach(function(p) {
        cardsHTML +=
            '<div onclick="deanSubSelect(\'' + p.role + '\')" ' +
            'style="cursor:pointer;background:var(--bg-elevated);border:2px solid ' + p.color + '55;border-radius:16px;overflow:hidden;transition:transform .25s, box-shadow .25s;" ' +
            'onmouseover="this.style.transform=\'translateY(-6px) scale(1.02)\';this.style.boxShadow=\'0 12px 24px ' + p.color + '44\';this.style.borderColor=\'' + p.color + '\';" ' +
            'onmouseout="this.style.transform=\'none\';this.style.boxShadow=\'none\';this.style.borderColor=\'' + p.color + '55\';">' +
                '<div style="position:relative;width:100%;aspect-ratio:1/1;overflow:hidden;">' +
                    '<img src="' + p.img + '" alt="' + p.name + '" style="width:100%;height:100%;object-fit:cover;display:block;">' +
                    '<div style="position:absolute;bottom:0;left:0;right:0;background:linear-gradient(transparent, rgba(0,0,0,.85));padding:20px 10px 10px;">' +
                        '<div style="color:#fff;font-weight:700;font-size:0.85rem;">' + p.name + '</div>' +
                        '<div style="color:' + p.color + ';font-size:0.68rem;font-weight:600;margin-top:2px;">' + p.sub + '</div>' +
                    '</div>' +
                '</div>' +
            '</div>';
    });

    cardsHTML += '</div>';

    document.getElementById('loginFields').innerHTML = cardsHTML;
    document.getElementById('loginBtn').style.display = 'none';
}

window.deanSubSelect = function(role) {
    selectedRole = null;
    window._deanSubRole = role;

    const titles = {
        dean_admin: '💛 Dean of Students (Admin) Login',
        deputy_dean1: '🧑‍💼 Deputy Dean 1 Login',
        deputy_dean2: '🧑‍💼 Deputy Dean 2 Login',
        front_office: '🗂️ Front Office Login'
    };

    const titleEl = document.getElementById('loginTitle');
    if (titleEl) titleEl.innerHTML = titles[role] || 'Login';

    const fieldsEl = document.getElementById('loginFields');
    if (fieldsEl) fieldsEl.innerHTML = '<input type="password" id="loginPass" class="admin-input" placeholder="Enter Password">';

    const btnEl = document.getElementById('loginBtn');
    if (btnEl) {
        btnEl.style.display = 'block';
        btnEl.onclick = function() { handleDeanLogin(role); };
    }
};

window.handleDeanLogin = function(role) {
    const passEl = document.getElementById('loginPass');
    const pass = passEl ? passEl.value.trim() : '';

    const data = getData();
    const staffMap = {
        dean_admin: data.deanAdmin,
        deputy_dean1: data.deputyDean1,
        deputy_dean2: data.deputyDean2,
        front_office: data.frontOffice
    };
    const staff = staffMap[role];

    if (!staff) { alert('❌ Staff data not found.'); return; }
    if (pass !== staff.password) { alert('❌ Invalid credentials. Please try again.'); return; }

    const user = Object.assign({}, staff, { role: role });
    sessionStorage.setItem('currentUser', JSON.stringify(user));
    showDashboard(role, user);
};

function renderDeanAdminPanel(user) {
    const data = getData();
    const unread = (data.deanAdminReceived || []).filter(i => !i.read).length;
    return `
    <div class="admin-layout">
        <div class="admin-sidenav">
            <div class="admin-sidenav-title"><i class="fas fa-heart"></i> Dean Admin Menu</div>
            <button class="admin-nav-btn" onclick="deanAdminSection('profile',this)"><i class="fas fa-user"></i> Profile</button>
            <button class="admin-nav-btn active" onclick="deanAdminSection('received',this)">
                <i class="fas fa-bell"></i> Received
                ${unread > 0 ? `<span style="background:var(--danger);color:#fff;border-radius:12px;padding:2px 7px;font-size:0.65rem;margin-left:4px;">${unread}</span>` : ''}
            </button>
            <button class="admin-nav-btn" onclick="deanAdminSection('review',this)"><i class="fas fa-clipboard-check"></i> Review</button>
            <button class="admin-nav-btn" onclick="deanAdminSection('mess',this)"><i class="fas fa-utensils"></i> Mess Boarders</button>
            <button class="admin-nav-btn" onclick="deanAdminSection('discipline',this)"><i class="fas fa-gavel"></i> Discipline Records</button>
            <button class="admin-nav-btn" onclick="deanAdminSection('report',this)"><i class="fas fa-chart-bar"></i> Report</button>
            <button class="admin-nav-btn" onclick="deanAdminSection('noticeboard',this)"><i class="fas fa-bullhorn"></i> Post Notice</button>
        </div>
        <div class="admin-main" id="deanAdminMain">${deanAdminReceivedHTML(user)}</div>
    </div>`;
}

window.deanAdminSection = function(section, btn) {
    document.querySelectorAll('.admin-nav-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    const map = {
        profile:     () => deanAdminProfileHTML(user),
        received:    () => deanAdminReceivedHTML(user),
        review:      () => deanAdminReviewHTML(user),
        discipline:  () => deanAdminDisciplineHTML(user),
        mess:        () => deanAdminMessHTML(user),  
        report:      () => deanAdminReportHTML(user),
        noticeboard: () => deanAdminNoticeboardHTML(user)
    };
    document.getElementById('deanAdminMain').innerHTML = (map[section] || (()=>deanAdminReceivedHTML(user)))();
};

function deanAdminProfileHTML(user) {
    const data = getData();
    const received = data.deanAdminReceived || [];
    const review = data.deanAdminReview || [];
    return `
        <div class="admin-section-head">👤 My Profile</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div style="display:flex;gap:1.2rem;align-items:center;flex-wrap:wrap;">
                <div style="width:70px;height:70px;border-radius:50%;background:linear-gradient(135deg,#ec4899,#a855f7);display:flex;align-items:center;justify-content:center;font-size:2rem;color:white;">💛</div>
                <div>
                    <h3 style="margin:0;">${user.name}</h3>
                    <div style="font-size:0.8rem;color:var(--text-secondary);">${user.id}</div>
                    <span class="admin-role-pill" style="margin-top:6px;display:inline-block;">Dean of Students — Admin</span>
                </div>
            </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:1rem;">
            <div class="stat-card"><h3>${received.length}</h3><p>Items Received</p></div>
            <div class="stat-card"><h3>${review.length}</h3><p>In Review</p></div>
            <div class="stat-card"><h3 style="color:var(--success);">${(data.deanAdminSentItems||[]).length}</h3><p>Dispatched</p></div>
        </div>`;
}

function deanAdminReceivedHTML(user) {
    const data = getData();
    const items = (data.deanAdminReceived || []).filter(i => i.status === 'pending').slice().reverse();
    items.forEach(i => i.read = true);
    saveData(data);

    const rows = items.length === 0
        ? `<p style="color:var(--text-secondary);font-size:0.85rem;">No pending items.</p>`
        : items.map(i => `
        <div class="admin-card" style="margin-bottom:10px;">
            <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:6px;">
                <strong>${i.title}</strong>
                <span class="admin-role-pill">${i.from}</span>
            </div>
            <div style="font-size:0.82rem;margin-top:6px;">${i.message}</div>
            ${i.signedBy ? `<div style="font-size:0.72rem;color:var(--text-secondary);margin-top:4px;">Signed by: ${i.signedBy}</div>` : ''}
            <div style="font-size:0.68rem;color:var(--text-secondary);margin-top:6px;">${new Date(i.timestamp).toLocaleString()}</div>
            <button class="admin-btn-primary" style="margin-top:8px;" onclick="deanAdminConfirmItem('${i.id}')">✅ Confirm → Review</button>
        </div>`).join('');

    return `
        <div class="admin-section-head">📥 Received</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <p style="font-size:0.78rem;color:var(--text-secondary);">Items sent from Deputy Dean 1 and Deputy Dean 2. Confirm to move them into Review.</p>
        </div>
        ${rows}`;
}

window.deanAdminConfirmItem = function(id) {
    const data = getData();
    const item = (data.deanAdminReceived || []).find(i => i.id === id);
    if (!item) return;
    item.status = 'confirmed';

    data.deanAdminReview = data.deanAdminReview || [];
    data.deanAdminReview.push({
        id: 'DAV-' + Date.now(), sourceId: item.id, title: item.title, message: item.message,
        from: item.from, signedBy: item.signedBy, notes: '', saved: false,
        timestamp: new Date().toISOString()
    });

    saveData(data);
    alert('✅ Moved to Review.');
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    document.getElementById('deanAdminMain').innerHTML = deanAdminReceivedHTML(user);
};

function deanAdminReviewHTML(user) {
    const data = getData();
    const items = (data.deanAdminReview || []).slice().reverse();
    const targets = [
        { key:'finance',    label:'💰 Finance' },
        { key:'mess',       label:'🍽️ Mess' },
        { key:'classrep',   label:'🗣️ Class Reps' },
        { key:'kitco',      label:'🎉 KITCO' },
        { key:'principal',  label:'🎓 Principal' },
        { key:'deputy_dean',label:'🧑‍💼 Deputy Dean' }
    ];

    const rows = items.length === 0
        ? `<p style="color:var(--text-secondary);font-size:0.85rem;">Nothing in review yet.</p>`
        : items.map(i => `
        <div class="admin-card" style="margin-bottom:1rem;">
            <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:6px;">
                <strong>${i.title}</strong>
                <span class="admin-role-pill">${i.from}</span>
            </div>
            <div style="font-size:0.82rem;margin-top:6px;color:var(--text-secondary);">${i.message}</div>
            <div style="margin-top:10px;">
                <label style="font-size:0.7rem;color:var(--text-secondary);">DEAN'S NOTES / RECORD ENTRY</label>
                <textarea id="reviewNotes_${i.id}" class="admin-input" rows="3" placeholder="Enter your record of this item..." style="margin-top:4px;">${i.notes||''}</textarea>
            </div>
            <div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap;align-items:center;">
                <button class="admin-btn-secondary" onclick="deanAdminSaveReview('${i.id}')"><i class="fas fa-save"></i> Save</button>
                ${i.saved ? '<span class="admin-role-pill" style="background:rgba(16,185,129,.15);border-color:var(--success);color:var(--success);">✅ Saved</span>' : ''}
                <select id="sendDept_${i.id}" class="admin-input" style="max-width:180px;">
                    ${targets.map(t => `<option value="${t.key}">${t.label}</option>`).join('')}
                </select>
                <button class="admin-btn-primary" onclick="deanAdminSendReview('${i.id}')"><i class="fas fa-paper-plane"></i> Send</button>
            </div>
        </div>`).join('');

    return `
        <div class="admin-section-head">📋 Review</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <p style="font-size:0.78rem;color:var(--text-secondary);">
                Use the confirmed records here to enter your notes, save for your own record, then dispatch to the relevant department.
            </p>
        </div>
        ${rows}`;
}

window.deanAdminSaveReview = function(id) {
    const data = getData();
    const item = (data.deanAdminReview || []).find(i => i.id === id);
    if (!item) return;
    const notesEl = document.getElementById(`reviewNotes_${id}`);
    item.notes = notesEl ? notesEl.value : '';
    item.saved = true;
    saveData(data);
    alert('✅ Notes saved.');
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    document.getElementById('deanAdminMain').innerHTML = deanAdminReviewHTML(user);
};

window.deanAdminSendReview = function(id) {
    const data = getData();
    const item = (data.deanAdminReview || []).find(i => i.id === id);
    if (!item) return;
    const deptEl = document.getElementById(`sendDept_${id}`);
    const dept = deptEl ? deptEl.value : '';
    if (!dept) return alert('Select a department.');

    const payload = {
        id: 'DAS-' + Date.now(), from: 'Dean of Students', fromRole: 'dean_admin',
        subject: item.title, message: item.notes || item.message,
        timestamp: new Date().toISOString(), read: false
    };

    const routes = {
        finance:     () => { data.financeReceived      = data.financeReceived      || []; data.financeReceived.push({...payload, amount:0, studentId:null, studentName:null, addedToFees:false}); },
        mess:        () => { data.messReceivedFromDean = data.messReceivedFromDean || []; data.messReceivedFromDean.push(payload); },
        classrep:    () => { data.classRepReceived      = data.classRepReceived      || []; data.classRepReceived.push(payload); },
        kitco:       () => { data.kitcoReceived         = data.kitcoReceived         || []; data.kitcoReceived.push(payload); },
        principal:   () => { data.principalReceived     = data.principalReceived     || []; data.principalReceived.push(payload); },
        deputy_dean: () => { data.deputyDeanReceived     = data.deputyDeanReceived     || []; data.deputyDeanReceived.push({...payload, title:item.title, toRole:'deputy_dean1', status:'pending', signedBy:null}); }
    };
    (routes[dept] || (()=>{}))();

    data.deanAdminSentItems = data.deanAdminSentItems || [];
    data.deanAdminSentItems.push({ ...payload, to: dept });
    data.deanAdminReview = (data.deanAdminReview || []).filter(x => x.id !== id);

    saveData(data);
    alert(`✅ Sent to ${dept.replace('_',' ')}.`);
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    document.getElementById('deanAdminMain').innerHTML = deanAdminReviewHTML(user);
};

function messBoardersHTML(targetId) {
    const data = getData();
    const boarders = data.messBoarders || [];
    const sent   = boarders.filter(b => b.sentToMess);
    const unsent = boarders.filter(b => !b.sentToMess);
    const alreadyIds = boarders.map(b => b.studentId);
    const candidates = (data.students || []).filter(s => !alreadyIds.includes(s.id));

    return `
        <div class="admin-section-head">🍽️ Mess Boarders List</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <p style="font-size:0.78rem;color:var(--text-secondary);">
                Generate the initial boarders list (typically 3 weeks after reporting), send it to Mess,
                then add late students afterward with a reason — sent as an update.
            </p>
        </div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">➕ Add Student to Boarders List</div>
            <div style="display:grid;grid-template-columns:2fr 2fr;gap:10px;margin-top:10px;">
                <select id="messAddStudent_${targetId}" class="admin-input">
                    <option value="">-- Select Student --</option>
                    ${candidates.map(s => `<option value="${s.id}">${s.name} (${s.id})</option>`).join('')}
                </select>
                <input id="messAddReason_${targetId}" class="admin-input" placeholder="Reason (required if list already sent)">
            </div>
            <button class="admin-btn-primary" style="margin-top:10px;" onclick="messAddBoarder('${targetId}')">
                <i class="fas fa-plus"></i> Add Student
            </button>
        </div>
        ${unsent.length > 0 ? `
        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">⏳ Not Yet Sent to Mess (${unsent.length})</div>
            ${unsent.map(b => `
                <div style="padding:0.6rem 0;border-bottom:1px solid var(--border);font-size:0.84rem;">
                    <strong>${b.studentName}</strong> <span style="color:var(--text-secondary);">(${b.studentId})</span>
                    ${b.reason ? `<div style="font-size:0.72rem;color:var(--warning);">Reason: ${b.reason}</div>` : ''}
                </div>`).join('')}
            <button class="admin-btn-primary" style="margin-top:10px;" onclick="messSendBoarderListToMess('${targetId}')">
                <i class="fas fa-paper-plane"></i> Send ${unsent.length} to Mess
            </button>
        </div>` : ''}
        <div class="admin-card">
            <div class="admin-card-title">✅ Sent to Mess (${sent.length})</div>
            ${sent.length === 0 ? '<p style="color:var(--text-secondary);font-size:0.85rem;">None sent yet.</p>' :
            sent.map(b => `
                <div style="display:flex;justify-content:space-between;padding:0.6rem 0;border-bottom:1px solid var(--border);font-size:0.84rem;">
                    <span><strong>${b.studentName}</strong> (${b.studentId})</span>
                    <button class="admin-action-btn danger" onclick="messRemoveBoarder('${b.id}','${targetId}')">Remove</button>
                </div>`).join('')}
        </div>`;
}

window.messAddBoarder = function(targetId) {
    const studentId = document.getElementById(`messAddStudent_${targetId}`).value;
    const reason     = document.getElementById(`messAddReason_${targetId}`).value.trim();
    if (!studentId) return alert('Select a student.');
    const data = getData();
    const student = data.students.find(s => s.id === studentId);
    const listAlreadySent = (data.messBoarders || []).some(b => b.sentToMess);
    if (listAlreadySent && !reason) return alert('A reason is required — the master list has already been sent to Mess.');
    data.messBoarders = data.messBoarders || [];
    data.messBoarders.push({
        id: 'MB-' + Date.now(), studentId, studentName: student.name,
        addedDate: new Date().toISOString(), addedBy: 'Dean Office',
        reason: reason || null, sentToMess: false
    });
    saveData(data);
    alert(`✅ ${student.name} added to boarders list.`);
    document.getElementById(targetId).innerHTML = messBoardersHTML(targetId);
};

window.messSendBoarderListToMess = function(targetId) {
    const data = getData();
    (data.messBoarders || []).forEach(b => { if (!b.sentToMess) b.sentToMess = true; });
    saveData(data);
    alert('✅ List sent to Mess Department.');
    document.getElementById(targetId).innerHTML = messBoardersHTML(targetId);
};

window.messRemoveBoarder = function(id, targetId) {
    if (!confirm('Remove this student from meal services?')) return;
    const data = getData();
    data.messBoarders = (data.messBoarders || []).filter(b => b.id !== id);
    saveData(data);
    document.getElementById(targetId).innerHTML = messBoardersHTML(targetId);
};

function disciplineRecordsHTML(targetId) {
    const data = getData();
    const records = (data.disciplineRecords || []).slice().reverse();
    return `
        <div class="admin-section-head">🥊 Discipline Records</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <p style="font-size:0.78rem;color:var(--text-secondary);">
                Every record is tied to a student's profile by name and admission number — like a school police
                record. When a student's admission number is entered, all their details auto-populate. Records
                are sent to System Admin weekly.
            </p>
        </div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">📝 Add New Discipline Record</div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px;margin-top:10px;">
                <div>
                    <label style="font-size:0.7rem;color:var(--text-secondary);">STUDENT ADMISSION NO (auto-fills details)</label>
                    <input id="discAdmNo" class="admin-input" placeholder="e.g. STU-2026-20669" oninput="disciplineAutofill()" style="margin-top:4px;">
                </div>
                <div>
                    <label style="font-size:0.7rem;color:var(--text-secondary);">FULL NAME (auto-filled)</label>
                    <input id="discName" class="admin-input" placeholder="Auto-filled" readonly style="margin-top:4px;">
                </div>
                <div>
                    <label style="font-size:0.7rem;color:var(--text-secondary);">DEPARTMENT (auto-filled)</label>
                    <input id="discDept" class="admin-input" placeholder="Auto-filled" readonly style="margin-top:4px;">
                </div>
                <div>
                    <label style="font-size:0.7rem;color:var(--text-secondary);">SEVERITY</label>
                    <select id="discSeverity" class="admin-input" style="margin-top:4px;">
                        <option value="minor">⚠️ Minor</option>
                        <option value="moderate">🔶 Moderate</option>
                        <option value="major">🚨 Major</option>
                    </select>
                </div>
                <div>
                    <label style="font-size:0.7rem;color:var(--text-secondary);">DATE</label>
                    <input id="discDate" type="date" class="admin-input" value="${new Date().toISOString().slice(0,10)}" style="margin-top:4px;">
                </div>
            </div>
            <div style="margin-top:10px;">
                <label style="font-size:0.7rem;color:var(--text-secondary);">OFFENSE DESCRIPTION</label>
                <textarea id="discOffense" class="admin-input" rows="3" placeholder="Describe the offense in detail..." style="margin-top:4px;"></textarea>
            </div>
            <div style="margin-top:10px;">
                <label style="font-size:0.7rem;color:var(--text-secondary);">ACTION TAKEN</label>
                <textarea id="discAction" class="admin-input" rows="2" placeholder="What action was taken (warning, suspension, counselling...)..." style="margin-top:4px;"></textarea>
            </div>
            <button class="admin-btn-primary" style="margin-top:12px;" onclick="disciplineAddRecord('${targetId}')">
                <i class="fas fa-gavel"></i> Add Discipline Record
            </button>
        </div>
        <div class="admin-card">
            <div class="admin-card-title">📂 All Records (${records.length})</div>
            ${records.length === 0 ? '<p style="color:var(--text-secondary);font-size:0.85rem;margin-top:8px;">No records yet.</p>' :
            records.map(r => `
            <div style="padding:1rem;background:var(--bg-elevated);border-radius:12px;margin-bottom:10px;border-left:4px solid ${r.severity==='major'?'var(--danger)':r.severity==='moderate'?'var(--warning)':'var(--purple)'};">
                <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:6px;">
                    <strong>${r.studentName}</strong>
                    <span class="admin-role-pill">${r.severity.toUpperCase()}</span>
                </div>
                <div style="font-size:0.72rem;color:var(--text-secondary);margin-top:2px;">${r.studentId} • ${r.department} • ${new Date(r.date).toLocaleDateString()}</div>
                <div style="font-size:0.82rem;margin-top:6px;"><strong>Offense:</strong> ${r.offense}</div>
                <div style="font-size:0.82rem;margin-top:4px;"><strong>Action:</strong> ${r.action}</div>
                <div style="font-size:0.7rem;color:var(--text-secondary);margin-top:4px;">Recorded by: ${r.recordedBy}</div>
            </div>`).join('')}
        </div>`;
}

window.disciplineAutofill = function() {
    const admNo = document.getElementById('discAdmNo').value.trim();
    const data = getData();
    const student = (data.students || []).find(s => s.id === admNo);
    document.getElementById('discName').value = student ? student.name : '';
    document.getElementById('discDept').value = student ? student.department : '';
};

window.disciplineAddRecord = function(targetId) {
    const admNo    = document.getElementById('discAdmNo').value.trim();
    const name     = document.getElementById('discName').value.trim();
    const dept     = document.getElementById('discDept').value.trim();
    const severity = document.getElementById('discSeverity').value;
    const date     = document.getElementById('discDate').value;
    const offense  = document.getElementById('discOffense').value.trim();
    const action   = document.getElementById('discAction').value.trim();
    if (!admNo || !name || !offense || !action) return alert('Please enter a valid Admission No (student must exist), Offense, and Action.');

    const data = getData();
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    data.disciplineRecords = data.disciplineRecords || [];
    data.disciplineRecords.push({
        id: 'DR-' + Date.now(), studentId: admNo, studentName: name, department: dept,
        severity, date, offense, action, recordedBy: user?.name || 'Dean Office',
        timestamp: new Date().toISOString()
    });
    saveData(data);
    alert('✅ Discipline record added.');
    document.getElementById(targetId).innerHTML = disciplineRecordsHTML(targetId);
};

/* Thin wrappers so each portal's section map can call it with the right container */
function deanAdminDisciplineHTML() { return disciplineRecordsHTML('deanAdminMain'); }
function deputyDeanDisciplineHTML() { return disciplineRecordsHTML('deputyDeanMain'); }

function deanAdminReportHTML(user) {
    const data = getData();
    const received = data.deanAdminReceived || [];
    const review = data.deanAdminReview || [];
    const sent = data.deanAdminSentItems || [];
    const pending = received.filter(i => i.status === 'pending').length;
    const confirmed = received.filter(i => i.status === 'confirmed').length;

    const deptTally = {};
    sent.forEach(s => { deptTally[s.to] = (deptTally[s.to]||0)+1; });
    const bars = Object.entries(deptTally).map(([d,c],i) => ({ label:d, value:c, color:['#8b5cf6','#3b82f6','#10b981','#f59e0b','#ef4444','#ec4899'][i%6] }));

    return `
        <div class="admin-section-head">📊 Report</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">Dispatches by Department</div>
            <div style="overflow-x:auto;margin-top:10px;">${svgBarChart(bars.length?bars:[{label:'No data',value:0,color:'#3a2d6e'}])}</div>
        </div>
        <div class="admin-card" style="text-align:center;margin-bottom:1rem;">
            <div class="admin-card-title">Received Item Status</div>
            <div style="display:flex;justify-content:center;margin-top:10px;">
                ${svgDonutChart([{value:pending||0.0001,color:'#f59e0b'},{value:confirmed||0.0001,color:'#10b981'}])}
            </div>
            <div style="font-size:0.75rem;margin-top:8px;">
                <span style="color:var(--warning);">● Pending ${pending}</span>&nbsp;
                <span style="color:var(--success);">● Confirmed ${confirmed}</span>
            </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:1rem;">
            <div class="stat-card"><h3>${received.length}</h3><p>Total Received</p></div>
            <div class="stat-card"><h3>${review.length}</h3><p>In Review</p></div>
            <div class="stat-card"><h3 style="color:var(--success);">${sent.length}</h3><p>Dispatched</p></div>
        </div>`;
}

function deanAdminNoticeboardHTML(user) {
    return `
        <div class="admin-section-head">📢 Post to Global Notice Board</div>
        <div class="admin-card">
            <textarea id="deanNoticeMsg" class="admin-input" rows="4" placeholder="e.g. Term closing procedures — all clearances due by..."></textarea>
            <button class="admin-btn-primary" style="margin-top:10px;" onclick="deanAdminPostNotice()">
                <i class="fas fa-bullhorn"></i> Post Notice
            </button>
        </div>`;
}

window.deanAdminPostNotice = function() {
    const msg = document.getElementById('deanNoticeMsg').value.trim();
    if (!msg) return alert('Enter a message.');
    const data = getData();
    data.noticeboard = data.noticeboard || [];
    data.noticeboard.push({ id:'n'+Date.now(), sender:'Dean of Students', message: msg, timestamp:new Date().toISOString(), recipient:'all' });
    saveData(data);
    alert('✅ Notice posted to Global Notice Board!');
    document.getElementById('deanNoticeMsg').value = '';
};

/* ══════════════════════════════════════════
   MESS DEPARTMENT PORTAL
══════════════════════════════════════════ */
function getTodayMenu() {
    const today = new Date().toLocaleDateString('en-CA');
    return (getData().dailyMenus || []).find(m => m.date === today) || null;
}

function messSessionIsOpen(session) {
    const menu = getTodayMenu();
    if (!menu || !menu[session]?.isSet) return false;
    const closeTimes = { morning:'07:30', afternoon:'12:00', evening:'18:30' };
    const [h, m] = closeTimes[session].split(':').map(Number);
    const close = new Date(); close.setHours(h, m, 0, 0);
    return new Date() < close;
}

function renderMessPanel(user) {
    return `
    <div class="admin-layout">
        <div class="admin-sidenav">
            <div class="admin-sidenav-title"><i class="fas fa-utensils"></i> Mess Menu</div>
            <button class="admin-nav-btn" onclick="messSection('profile',this)"><i class="fas fa-user"></i> Profile</button>
            <button class="admin-nav-btn active" onclick="messSection('setmenu',this)"><i class="fas fa-clipboard-list"></i> Set Menu</button>
            <button class="admin-nav-btn" onclick="messSection('orders',this)"><i class="fas fa-list-check"></i> Orders & Marking</button>
            <button class="admin-nav-btn" onclick="messSection('summary',this)"><i class="fas fa-calculator"></i> Kitchen Summary</button>
            <button class="admin-nav-btn" onclick="messSection('complaints',this)"><i class="fas fa-exclamation-triangle"></i> Complaints</button>
            <button class="admin-nav-btn" onclick="messSection('report',this)"><i class="fas fa-chart-bar"></i> Report</button>
        </div>
        <div class="admin-main" id="messMain">
            ${messSetMenuHTML(user)}
        </div>
    </div>`;
}

window.messSection = function(section, btn) {
    document.querySelectorAll('.admin-nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    const map = {
        profile:    () => messProfileHTML(user),
        setmenu:    () => messSetMenuHTML(user),
        orders:     () => messOrdersHTML(user, 'morning'),
        summary:    () => messKitchenSummaryHTML(user),
        complaints: () => messComplaintsHTML(user),
        report:     () => messReportHTML(user)
    };
    document.getElementById('messMain').innerHTML = (map[section] || (() => messSetMenuHTML(user)))();
};

/* ── Profile ── */
function messProfileHTML(user) {
    const data = getData();
    const today = new Date().toLocaleDateString('en-CA');
    const todayOrders = (data.messOrders || []).filter(o => o.date === today);
    const activated = (data.messActivatedStudents || []).length;
    return `
        <div class="admin-section-head">👤 Mess Department Profile</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div style="display:flex;gap:1.2rem;align-items:center;flex-wrap:wrap;">
                <div style="width:70px;height:70px;border-radius:50%;background:linear-gradient(135deg,#f59e0b,#d97706);display:flex;align-items:center;justify-content:center;font-size:2rem;color:white;flex-shrink:0;">🍽️</div>
                <div>
                    <h3 style="margin:0;">${user.name || 'Mess Department'}</h3>
                    <div style="font-size:0.8rem;color:var(--text-secondary);">${user.id || 'MESS-001'}</div>
                    <div style="margin-top:6px;display:flex;gap:6px;flex-wrap:wrap;">
                        <span class="admin-role-pill" style="background:rgba(245,158,11,.15);border-color:var(--warning);color:var(--warning);">🍽️ Mess Department</span>
                        <span class="admin-role-pill">PC Kinyanjui TTI</span>
                    </div>
                </div>
            </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:1rem;">
            <div class="stat-card"><h3>${activated}</h3><p>Boarding Students</p></div>
            <div class="stat-card"><h3 style="color:var(--success);">${todayOrders.length}</h3><p>Today's Orders</p></div>
            <div class="stat-card"><h3 style="color:var(--warning);">${todayOrders.filter(o => o.receivedFood === null).length}</h3><p>Awaiting Marking</p></div>
        </div>`;
}

/* ── Set Menu ── */
function messSetMenuHTML(user) {
    const today   = new Date().toLocaleDateString('en-CA');
    const dayName = new Date().toLocaleDateString('en-US', { weekday:'long', year:'numeric', month:'long', day:'numeric' });
    const menu    = getTodayMenu();

    const sessionStatus = s => !menu?.[s]?.isSet
        ? `<span style="color:var(--warning);">⚠️ Not set</span>`
        : `<span style="color:var(--success);">✅ Set</span>`;

    const chk = (id, val) => menu ? (Array.isArray(menu[id.split('_')[0]]?.[id.split('_')[1]]) ? menu[id.split('_')[0]][id.split('_')[1]]?.includes(val) : false) : false;

    return `
        <div class="admin-section-head">📋 Set Today's Menu — ${dayName}</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <p style="font-size:0.78rem;color:var(--text-secondary);">
                Set the menu before students wake up. Close times are automatic:
                <strong>Morning 7:30 AM • Afternoon 12:00 PM • Evening 6:30 PM</strong>.
            </p>
            <div style="display:flex;gap:16px;margin-top:10px;flex-wrap:wrap;font-size:0.85rem;">
                <span>🌅 Morning: ${sessionStatus('morning')}</span>
                <span>☀️ Afternoon: ${sessionStatus('afternoon')}</span>
                <span>🌙 Evening: ${sessionStatus('evening')}</span>
            </div>
        </div>

        <!-- MORNING -->
        <div class="admin-card" style="margin-bottom:1rem;border-left:4px solid #f59e0b;">
            <div class="admin-card-title">🌅 Morning — closes at 7:30 AM</div>
            <p style="font-size:0.75rem;color:var(--text-secondary);margin:8px 0;">Bread is always included. Select tea options to offer:</p>
            <div style="display:flex;gap:16px;flex-wrap:wrap;margin-top:6px;">
                <label style="display:flex;align-items:center;gap:6px;font-size:0.85rem;cursor:pointer;">
                    <input type="checkbox" id="tea_milk"    ${menu?.morning?.teaOptions?.includes('Tea with milk') ? 'checked' : ''}> Tea with milk
                </label>
                <label style="display:flex;align-items:center;gap:6px;font-size:0.85rem;cursor:pointer;">
                    <input type="checkbox" id="tea_nomilk"  ${menu?.morning?.teaOptions?.includes('Tea without milk') ? 'checked' : ''}> Tea without milk
                </label>
                <label style="display:flex;align-items:center;gap:6px;font-size:0.85rem;cursor:pointer;">
                    <input type="checkbox" id="tea_nosugar" ${menu?.morning?.teaOptions?.includes('Tea without sugar') ? 'checked' : ''}> Tea without sugar
                </label>
            </div>
            <button class="admin-btn-primary" style="margin-top:12px;" onclick="messSetSession('morning','${today}')">
                <i class="fas fa-save"></i> ${menu?.morning?.isSet ? 'Update' : 'Set'} Morning Menu
            </button>
        </div>

        <!-- AFTERNOON -->
        <div class="admin-card" style="margin-bottom:1rem;border-left:4px solid #10b981;">
            <div class="admin-card-title">☀️ Afternoon — closes at 12:00 PM</div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;margin-top:10px;">
                <div>
                    <label style="font-size:0.7rem;color:var(--text-secondary);">STARCH (student picks one)</label>
                    <div style="display:flex;flex-direction:column;gap:8px;margin-top:6px;">
                        <label style="display:flex;align-items:center;gap:6px;cursor:pointer;"><input type="checkbox" id="aft_rice"  ${menu?.afternoon?.starchOptions?.includes('Rice')  ? 'checked' : ''}> Rice</label>
                        <label style="display:flex;align-items:center;gap:6px;cursor:pointer;"><input type="checkbox" id="aft_ugali" ${menu?.afternoon?.starchOptions?.includes('Ugali') ? 'checked' : ''}> Ugali</label>
                    </div>
                </div>
                <div>
                    <label style="font-size:0.7rem;color:var(--text-secondary);">ACCOMPANIMENT (student picks one)</label>
                    <div style="display:flex;flex-direction:column;gap:8px;margin-top:6px;">
                        <label style="display:flex;align-items:center;gap:6px;cursor:pointer;"><input type="checkbox" id="aft_beans"  ${menu?.afternoon?.accompaniments?.includes('Beans with Cabbage') ? 'checked' : ''}> Beans with Cabbage</label>
                        <label style="display:flex;align-items:center;gap:6px;cursor:pointer;"><input type="checkbox" id="aft_greens" ${menu?.afternoon?.accompaniments?.includes('Green Grams with Sukuma Wiki') ? 'checked' : ''}> Green Grams with Sukuma Wiki</label>
                    </div>
                </div>
                <div>
                    <label style="font-size:0.7rem;color:var(--text-secondary);">PROTEIN (same for all)</label>
                    <div style="display:flex;flex-direction:column;gap:8px;margin-top:6px;">
                        <label style="display:flex;align-items:center;gap:6px;cursor:pointer;"><input type="radio" name="aft_prot" value="Meat"    ${menu?.afternoon?.protein==='Meat'    ? 'checked' : ''}> Meat</label>
                        <label style="display:flex;align-items:center;gap:6px;cursor:pointer;"><input type="radio" name="aft_prot" value="Matumbo" ${menu?.afternoon?.protein==='Matumbo' ? 'checked' : ''}> Matumbo</label>
                        <label style="display:flex;align-items:center;gap:6px;cursor:pointer;"><input type="radio" name="aft_prot" value="Fruit"   ${menu?.afternoon?.protein==='Fruit'   ? 'checked' : ''}> 🍊 Fruit (no meat day)</label>
                    </div>
                </div>
            </div>
            <button class="admin-btn-primary" style="margin-top:12px;" onclick="messSetSession('afternoon','${today}')">
                <i class="fas fa-save"></i> ${menu?.afternoon?.isSet ? 'Update' : 'Set'} Afternoon Menu
            </button>
        </div>

        <!-- EVENING -->
        <div class="admin-card" style="border-left:4px solid #6c3fcf;">
            <div class="admin-card-title">🌙 Evening — closes at 6:30 PM</div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;margin-top:10px;">
                <div>
                    <label style="font-size:0.7rem;color:var(--text-secondary);">STARCH (student picks one)</label>
                    <div style="display:flex;flex-direction:column;gap:8px;margin-top:6px;">
                        <label style="display:flex;align-items:center;gap:6px;cursor:pointer;"><input type="checkbox" id="eve_rice"  ${menu?.evening?.starchOptions?.includes('Rice')  ? 'checked' : ''}> Rice</label>
                        <label style="display:flex;align-items:center;gap:6px;cursor:pointer;"><input type="checkbox" id="eve_ugali" ${menu?.evening?.starchOptions?.includes('Ugali') ? 'checked' : ''}> Ugali</label>
                    </div>
                </div>
                <div>
                    <label style="font-size:0.7rem;color:var(--text-secondary);">ACCOMPANIMENT (student picks one)</label>
                    <div style="display:flex;flex-direction:column;gap:8px;margin-top:6px;">
                        <label style="display:flex;align-items:center;gap:6px;cursor:pointer;"><input type="checkbox" id="eve_beans"  ${menu?.evening?.accompaniments?.includes('Beans with Cabbage') ? 'checked' : ''}> Beans with Cabbage</label>
                        <label style="display:flex;align-items:center;gap:6px;cursor:pointer;"><input type="checkbox" id="eve_greens" ${menu?.evening?.accompaniments?.includes('Green Grams with Sukuma Wiki') ? 'checked' : ''}> Green Grams with Sukuma Wiki</label>
                    </div>
                </div>
                <div>
                    <label style="font-size:0.7rem;color:var(--text-secondary);">PROTEIN (same for all)</label>
                    <div style="display:flex;flex-direction:column;gap:8px;margin-top:6px;">
                        <label style="display:flex;align-items:center;gap:6px;cursor:pointer;"><input type="radio" name="eve_prot" value="Meat"    ${menu?.evening?.protein==='Meat'    ? 'checked' : ''}> Meat</label>
                        <label style="display:flex;align-items:center;gap:6px;cursor:pointer;"><input type="radio" name="eve_prot" value="Matumbo" ${menu?.evening?.protein==='Matumbo' ? 'checked' : ''}> Matumbo</label>
                        <label style="display:flex;align-items:center;gap:6px;cursor:pointer;"><input type="radio" name="eve_prot" value="Fruit"   ${menu?.evening?.protein==='Fruit'   ? 'checked' : ''}> 🍊 Fruit (no meat day)</label>
                    </div>
                </div>
            </div>
            <button class="admin-btn-primary" style="margin-top:12px;" onclick="messSetSession('evening','${today}')">
                <i class="fas fa-save"></i> ${menu?.evening?.isSet ? 'Update' : 'Set'} Evening Menu
            </button>
        </div>`;
}

/* ── Orders & Marking ── */
function messOrdersHTML(user, activeSession) {
    activeSession = activeSession || 'morning';
    const data      = getData();
    const today     = new Date().toLocaleDateString('en-CA');
    const menu      = getTodayMenu();
    const allOrders = (data.messOrders || []).filter(o => o.date === today);
    const allergies = data.studentAllergies || [];
    const closeTimes = { morning:'07:30', afternoon:'12:00', evening:'18:30' };
    const emoji      = { morning:'🌅', afternoon:'☀️', evening:'🌙' };

    const buildList = (session) => {
        const orders = allOrders.filter(o => o.session === session);
        if (!menu?.[session]?.isSet) return `<p style="color:var(--text-secondary);font-size:0.85rem;">Menu not set for this session.</p>`;
        if (!orders.length) return `<p style="color:var(--text-secondary);font-size:0.85rem;">No orders yet.</p>`;

        return orders.map(o => {
            const allergy = allergies.find(a => a.studentId === o.studentId);
            const selText = session === 'morning'
                ? o.selections?.tea || '—'
                : `${o.selections?.starch} + ${o.selections?.accompaniment} + ${menu[session]?.protein}`;

            return `
            <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:8px;padding:0.9rem;background:var(--bg-elevated);border-radius:12px;margin-bottom:8px;
                border-left:4px solid ${o.receivedFood===true?'var(--success)':o.receivedFood===false?'var(--danger)':'var(--border)'};">
                <div>
                    <div style="display:flex;align-items:center;gap:6px;">
                        <strong>${o.studentName}</strong>
                        ${allergy ? `<span style="color:var(--danger);font-size:0.68rem;" title="${allergy.allergies.join(', ')}">⚠️ Allergy</span>` : ''}
                    </div>
                    <div style="font-size:0.7rem;color:var(--text-secondary);">${o.studentId}</div>
                    <div style="font-size:0.78rem;color:var(--purple-light);margin-top:4px;">🍽️ ${selText}</div>
                    ${allergy ? `<div style="font-size:0.68rem;color:var(--danger);margin-top:2px;">⚠️ ${allergy.allergies.join(' • ')}</div>` : ''}
                </div>
                <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px;">
                    ${o.receivedFood === true
                        ? `<span class="admin-role-pill" style="background:rgba(16,185,129,.15);border-color:var(--success);color:var(--success);">✅ Got Food</span>`
                        : o.receivedFood === false
                            ? `<span class="admin-role-pill" style="background:rgba(239,68,68,.15);border-color:var(--danger);color:var(--danger);">❌ Didn't Get</span>`
                            : `<div style="display:flex;gap:4px;">
                                <button class="admin-action-btn edit"   onclick="messMarkOrder('${o.id}',true,'${session}')">✓ Got</button>
                                <button class="admin-action-btn danger" onclick="messMarkOrder('${o.id}',false,'${session}')">✗ Didn't</button>
                               </div>`}
                </div>
            </div>`;
        }).join('');
    };

    const tabs = ['morning','afternoon','evening'].map(s => `
        <button onclick="messOrdersTab('${s}')"
            style="padding:8px 16px;border:none;border-radius:10px;cursor:pointer;font-weight:600;font-size:0.82rem;
            background:${activeSession===s?'var(--purple)':'var(--bg-elevated)'};
            color:${activeSession===s?'#fff':'var(--text-secondary)'};">
            ${emoji[s]} ${s.charAt(0).toUpperCase()+s.slice(1)} (${allOrders.filter(o=>o.session===s).length})
        </button>`).join('');

    return `
        <div class="admin-section-head">📋 Orders & Marking — ${today}</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <p style="font-size:0.78rem;color:var(--text-secondary);">
                Mark each student after serving. ⚠️ Allergy flags appear in red — verify before serving.
            </p>
            <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px;">${tabs}</div>
        </div>
        <div class="admin-card">
            <div class="admin-card-title">${emoji[activeSession]} ${activeSession.charAt(0).toUpperCase()+activeSession.slice(1)} — closes at ${closeTimes[activeSession]}</div>
            <div style="margin-top:10px;">${buildList(activeSession)}</div>
        </div>`;
}

/* ── Kitchen Summary ── */
function messKitchenSummaryHTML(user) {
    const data  = getData();
    const today = new Date().toLocaleDateString('en-CA');
    const menu  = getTodayMenu();
    const orders = (data.messOrders || []).filter(o => o.date === today);

    const count = (session, field) => {
        const counts = {};
        orders.filter(o => o.session === session).forEach(o => {
            const val = field === 'protein' ? menu?.[session]?.protein : o.selections?.[field];
            if (val) counts[val] = (counts[val] || 0) + 1;
        });
        return counts;
    };

    const renderBar = (counts) => Object.keys(counts).length === 0
        ? `<p style="color:var(--text-secondary);font-size:0.85rem;">No orders.</p>`
        : Object.entries(counts).map(([item, n]) => `
            <div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--border);">
                <span style="font-size:0.85rem;">${item}</span>
                <strong style="color:var(--purple-light);">${n} students</strong>
            </div>`).join('');

    const buildSession = (s, emoji, label) => {
        if (!menu?.[s]?.isSet) return `<div class="admin-card" style="margin-bottom:1rem;opacity:0.5;"><div class="admin-card-title">${emoji} ${label} — not set</div></div>`;
        const sOrders = orders.filter(o => o.session === s);
        const got     = sOrders.filter(o => o.receivedFood === true).length;
        const didnt   = sOrders.filter(o => o.receivedFood === false).length;
        const pending = sOrders.filter(o => o.receivedFood === null).length;
        
        const body = s === 'morning' ? renderBar(count('morning','tea')) : `
            <div style="margin-bottom:10px;"><div style="font-size:0.7rem;color:var(--text-secondary);margin-bottom:4px;">STARCH</div>${renderBar(count(s,'starch'))}</div>
            <div style="margin-bottom:10px;"><div style="font-size:0.7rem;color:var(--text-secondary);margin-bottom:4px;">ACCOMPANIMENT</div>${renderBar(count(s,'accompaniment'))}</div>
            <div><div style="font-size:0.7rem;color:var(--text-secondary);margin-bottom:4px;">PROTEIN (all students)</div>
                <div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--border);">
                    <span>${menu[s]?.protein}</span><strong style="color:var(--purple-light);">${sOrders.length} students</strong>
                </div></div>`;

        return `
        <div class="admin-card" style="margin-bottom:1rem;border-left:4px solid var(--purple);">
            <div class="admin-card-title">${emoji} ${label} — ${sOrders.length} total orders</div>
            <div style="display:flex;gap:16px;font-size:0.78rem;margin:8px 0;flex-wrap:wrap;">
                <span style="color:var(--success);">✅ Got food: ${got}</span>
                <span style="color:var(--danger);">❌ Didn't get: ${didnt}</span>
                <span style="color:var(--warning);">⏳ Unmarked: ${pending}</span>
            </div>
            <div style="border-top:1px solid var(--border);padding-top:10px;">${body}</div>
        </div>`;
    };

    return `
        <div class="admin-section-head">🍳 Kitchen Summary — ${today}</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <p style="font-size:0.78rem;color:var(--text-secondary);">Exact food counts per item. Shows who got food and who didn't per session.</p>
        </div>
        ${buildSession('morning','🌅','Morning')}
        ${buildSession('afternoon','☀️','Afternoon')}
        ${buildSession('evening','🌙','Evening')}`;
}

/* ── Complaints → Dean ── */
function messComplaintsHTML(user) {
    const data = getData();
    const complaints = data.messComplaints || [];
    return `
        <div class="admin-section-head">⚠️ Complaints → Dean</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <p style="font-size:0.78rem;color:var(--text-secondary);">
                If food ran out and students who ordered did not receive meals, report it here.
                Goes directly to Dean of Students.
            </p>
        </div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">📝 New Complaint</div>
            <div style="display:grid;gap:10px;margin-top:10px;">
                <div>
                    <label style="font-size:0.7rem;color:var(--text-secondary);">SESSION AFFECTED</label>
                    <select id="cmpSess" class="admin-input" style="margin-top:4px;">
                        <option value="morning">🌅 Morning</option>
                        <option value="afternoon">☀️ Afternoon</option>
                        <option value="evening">🌙 Evening</option>
                    </select>
                </div>
                <div>
                    <label style="font-size:0.7rem;color:var(--text-secondary);">NUMBER OF STUDENTS AFFECTED</label>
                    <input type="number" id="cmpCount" class="admin-input" placeholder="e.g. 15" min="1" style="margin-top:4px;">
                </div>
                <div>
                    <label style="font-size:0.7rem;color:var(--text-secondary);">DESCRIPTION OF ISSUE</label>
                    <textarea id="cmpDesc" class="admin-input" rows="3" placeholder="Food ran out before all students who ordered were served..." style="margin-top:4px;"></textarea>
                </div>
                <div>
                    <label style="font-size:0.7rem;color:var(--text-secondary);">PROPOSED SOLUTION (if any)</label>
                    <textarea id="cmpSol" class="admin-input" rows="2" placeholder="e.g. Bread given as alternative. Supplier contacted." style="margin-top:4px;"></textarea>
                </div>
            </div>
            <button class="admin-btn-primary" style="margin-top:12px;" onclick="messSendComplaint()">
                <i class="fas fa-paper-plane"></i> Send to Dean
            </button>
        </div>
        <div class="admin-card">
            <div class="admin-card-title">History (${complaints.length})</div>
            ${complaints.length === 0
                ? '<p style="color:var(--success);font-size:0.85rem;margin-top:8px;">✅ No complaints yet — great service!</p>'
                : complaints.slice().reverse().map(c => `
                <div style="padding:0.9rem;background:var(--bg-elevated);border-radius:12px;border-left:4px solid var(--danger);margin-top:10px;">
                    <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:6px;">
                        <strong>${c.session.charAt(0).toUpperCase()+c.session.slice(1)} — ${c.affectedCount} students</strong>
                        <span style="font-size:0.68rem;color:var(--text-secondary);">${new Date(c.timestamp).toLocaleString()}</span>
                    </div>
                    <div style="font-size:0.82rem;margin-top:6px;">${c.description}</div>
                    ${c.solution ? `<div style="font-size:0.78rem;color:var(--text-secondary);margin-top:4px;">Solution: ${c.solution}</div>` : ''}
                    <span class="admin-role-pill" style="margin-top:6px;display:inline-block;background:rgba(16,185,129,.15);border-color:var(--success);color:var(--success);">✅ Sent to Dean</span>
                </div>`).join('')}
        </div>`;
}

/* ── Report ── */
function messReportHTML(user) {
    const data      = getData();
    const today     = new Date().toLocaleDateString('en-CA');
    const allOrders = data.messOrders || [];
    const todayOrds = allOrders.filter(o => o.date === today);
    const got    = allOrders.filter(o => o.receivedFood === true).length;
    const didnt  = allOrders.filter(o => o.receivedFood === false).length;
    const unmarked = allOrders.filter(o => o.receivedFood === null).length;
    const activated = (data.messActivatedStudents || []).length;
    const complaints = (data.messComplaints || []).length;

    const bars = [
        { label:'🌅 Morning',   value: todayOrds.filter(o=>o.session==='morning').length,   color:'#f59e0b' },
        { label:'☀️ Afternoon', value: todayOrds.filter(o=>o.session==='afternoon').length, color:'#10b981' },
        { label:'🌙 Evening',   value: todayOrds.filter(o=>o.session==='evening').length,   color:'#6c3fcf' }
    ];

    return `
        <div class="admin-section-head">📊 Mess Report</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">Today's Orders by Session</div>
            <div style="overflow-x:auto;margin-top:10px;">${svgBarChart(bars)}</div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1rem;margin-bottom:1rem;">
            <div class="admin-card" style="text-align:center;">
                <div class="admin-card-title">Food Received Status (All Time)</div>
                <div style="display:flex;justify-content:center;margin-top:10px;">
                    ${svgDonutChart([{value:got||0.0001,color:'#10b981'},{value:didnt||0.0001,color:'#ef4444'},{value:unmarked||0.0001,color:'#f59e0b'}])}
                </div>
                <div style="font-size:0.75rem;margin-top:8px;">
                    <span style="color:var(--success);">● Got Food ${got}</span>&nbsp;
                    <span style="color:var(--danger);">● Didn't Get ${didnt}</span>&nbsp;
                    <span style="color:var(--warning);">● Unmarked ${unmarked}</span>
                </div>
            </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:1rem;">
            <div class="stat-card"><h3>${activated}</h3><p>Boarding Students</p></div>
            <div class="stat-card"><h3 style="color:var(--success);">${todayOrds.length}</h3><p>Today's Orders</p></div>
            <div class="stat-card"><h3 style="color:var(--danger);">${complaints}</h3><p>Complaints Sent</p></div>
            <div class="stat-card"><h3>${allOrders.length}</h3><p>Total Orders All Time</p></div>
        </div>`;
}

/* ── Mess Window Actions ── */
window.messSetSession = function(session, date) {
    const data = getData();
    data.dailyMenus = data.dailyMenus || [];
    let menu = data.dailyMenus.find(m => m.date === date);
    if (!menu) { menu = { id:'MENU-'+Date.now(), date }; data.dailyMenus.push(menu); }

    if (session === 'morning') {
        const teas = [];
        if (document.getElementById('tea_milk')?.checked)    teas.push('Tea with milk');
        if (document.getElementById('tea_nomilk')?.checked)  teas.push('Tea without milk');
        if (document.getElementById('tea_nosugar')?.checked) teas.push('Tea without sugar');
        if (!teas.length) return alert('Select at least one tea option.');
        menu.morning = { isSet:true, closeTime:'07:30', teaOptions:teas, bread:true };

    } else if (session === 'afternoon') {
        const starch = [], acc = [];
        if (document.getElementById('aft_rice')?.checked)   starch.push('Rice');
        if (document.getElementById('aft_ugali')?.checked)  starch.push('Ugali');
        if (document.getElementById('aft_beans')?.checked)  acc.push('Beans with Cabbage');
        if (document.getElementById('aft_greens')?.checked) acc.push('Green Grams with Sukuma Wiki');
        const protein = document.querySelector('input[name="aft_prot"]:checked')?.value;
        if (!starch.length || !acc.length || !protein) return alert('Fill all afternoon fields.');
        menu.afternoon = { isSet:true, closeTime:'12:00', starchOptions:starch, accompaniments:acc, protein };

    } else if (session === 'evening') {
        const starch = [], acc = [];
        if (document.getElementById('eve_rice')?.checked)   starch.push('Rice');
        if (document.getElementById('eve_ugali')?.checked)  starch.push('Ugali');
        if (document.getElementById('eve_beans')?.checked)  acc.push('Beans with Cabbage');
        if (document.getElementById('eve_greens')?.checked) acc.push('Green Grams with Sukuma Wiki');
        const protein = document.querySelector('input[name="eve_prot"]:checked')?.value;
        if (!starch.length || !acc.length || !protein) return alert('Fill all evening fields.');
        menu.evening = { isSet:true, closeTime:'18:30', starchOptions:starch, accompaniments:acc, protein };
    }

    saveData(data);
    alert(`✅ ${session.charAt(0).toUpperCase()+session.slice(1)} menu set! Students can now order.`);
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    document.getElementById('messMain').innerHTML = messSetMenuHTML(user);
};

window.messMarkOrder = function(orderId, received, session) {
    const data  = getData();
    const order = (data.messOrders || []).find(o => o.id === orderId);
    if (!order) return;
    order.receivedFood = received;
    order.markedAt = new Date().toISOString();
    saveData(data);
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    document.getElementById('messMain').innerHTML = messOrdersHTML(user, session);
};

window.messOrdersTab = function(session) {
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    document.getElementById('messMain').innerHTML = messOrdersHTML(user, session);
};

window.messSendComplaint = function() {
    const session = document.getElementById('cmpSess')?.value;
    const count   = parseInt(document.getElementById('cmpCount')?.value) || 0;
    const desc    = document.getElementById('cmpDesc')?.value.trim();
    const sol     = document.getElementById('cmpSol')?.value.trim();
    if (!desc) return alert('Please describe the issue.');
    const data = getData();
    data.messComplaints = data.messComplaints || [];
    data.messComplaints.push({ id:'MC-'+Date.now(), session, affectedCount:count, description:desc, solution:sol||null, timestamp:new Date().toISOString() });
    data.deanReceived = data.deanReceived || [];
    data.deanReceived.push({
        id:'DRV-'+Date.now(), from:'Mess Department', fromRole:'mess',
        subject:`Food Shortage — ${session.charAt(0).toUpperCase()+session.slice(1)} Session`,
        message:`${count} student(s) who ordered did not receive food. ${desc}${sol?' Solution: '+sol:''}`,
        timestamp:new Date().toISOString(), read:false
    });
    saveData(data);
    alert('✅ Complaint sent to Dean of Students.');
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    document.getElementById('messMain').innerHTML = messComplaintsHTML(user);
};

// ==================== HOSTEL SUB-LOGIN ====================
function showHostelSubLogin() {
    document.getElementById('schoolInfoPanel').style.display = 'none';
    document.getElementById('loginFormContainer').style.display = 'block';
    document.getElementById('dashboardContainer').style.display = 'none';

    document.getElementById('loginTitle').innerHTML = '🏠 Hostel — Select Your Role';
    document.getElementById('loginFields').innerHTML = `
        <p style="color:var(--text-secondary);font-size:0.85rem;margin-bottom:16px;">Select your wing to log in:</p>
        <div style="display:grid;gap:12px;">
            <button class="btn-3d" onclick="hostelSubSelect('hostel_matron')" style="background:linear-gradient(135deg,#a855f7,#6c3fcf);border:none;padding:1rem;border-radius:14px;color:#fff;font-weight:700;cursor:pointer;font-size:1rem;">
                👩 Matron — Female Wing
            </button>
            <button class="btn-3d" onclick="hostelSubSelect('hostel_patron')" style="background:linear-gradient(135deg,#3b82f6,#1d4ed8);border:none;padding:1rem;border-radius:14px;color:#fff;font-weight:700;cursor:pointer;font-size:1rem;">
                👨 Patron — Male Wing
            </button>
        </div>
    `;
    document.getElementById('loginBtn').style.display = 'none';
}

window.hostelSubSelect = function(role) {
    selectedRole = null;   // ← add this line
    window._hostelSubRole = role;
    document.getElementById('loginTitle').innerHTML = role === 'hostel_matron' 
        ? '👩 Matron Login — Female Wing' 
        : '👨 Patron Login — Male Wing';

    document.getElementById('loginFields').innerHTML = `
        <input type="password" id="loginPass" class="admin-input" placeholder="Enter Password">
    `;

    document.getElementById('loginBtn').style.display = 'block';
    document.getElementById('loginBtn').onclick = () => handleHostelLogin(role);
};

window.handleHostelLogin = function(role) {
    const pass = document.getElementById('loginPass').value.trim();
    const data = getData();

    let staff = null;
    if (role === 'hostel_matron') {
        staff = data.hostel_matron;
    } else if (role === 'hostel_patron') {
        staff = data.hostel_patron;
    }

    if (!staff) {
        return alert('❌ Staff data not found. Please check initializeData().');
    }

    if (pass !== staff.password) {
        return alert('❌ Invalid credentials. Please try again.');
    }

    const user = { 
        ...staff, 
        role: role 
    };

    sessionStorage.setItem('currentUser', JSON.stringify(user));
    showDashboard(role, user);
};

/* ══════════════════════════════════════════
   HOSTEL PORTAL — Matron & Patron
══════════════════════════════════════════ */
function renderHostelPanel(user) {
    const isMatron = user.role === 'hostel_matron' || user.gender === 'Female';
    const wing     = isMatron ? 'Female Wing' : 'Male Wing';
    return `
    <div class="admin-layout">
        <div class="admin-sidenav">
            <div class="admin-sidenav-title"><i class="fas fa-home"></i> ${isMatron ? 'Matron' : 'Patron'} Menu</div>
            <button class="admin-nav-btn active" onclick="hostelSection('residents',this)"><i class="fas fa-users"></i> My Residents</button>
            <button class="admin-nav-btn" onclick="hostelSection('clearance',this)"><i class="fas fa-check-circle"></i> Clearance</button>
            <button class="admin-nav-btn" onclick="hostelSection('report',this)"><i class="fas fa-chart-bar"></i> Hostel Report</button>
        </div>
        <div class="admin-main" id="hostelMain">
            ${hostelResidentsHTML(user)}
        </div>
    </div>`;
}

window.hostelSection = function(section, btn) {
    document.querySelectorAll('.admin-nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    const map = {
        residents: () => hostelResidentsHTML(user),
        clearance: () => hostelClearanceHTML(user),
        report:    () => hostelReportHTML(user)
    };
    document.getElementById('hostelMain').innerHTML = (map[section] || (() => hostelResidentsHTML(user)))();
};

/* ── Residents ── */
function hostelResidentsHTML(user) {
    const data      = getData();
    const isMatron  = user.role === 'hostel_matron' || user.gender === 'Female';
    const gender    = isMatron ? 'Female' : 'Male';
    const residents = (data.hostelResidents || []).filter(r => r.gender === gender);

    const rows = residents.map((r, i) => {
        const stu      = (data.students || []).find(s => s.id === r.studentId);
        const cleared  = (data.hostelClearances || []).some(c => c.studentId === r.studentId);
        return `
        <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:10px;padding:1rem;background:var(--bg-elevated);border-radius:12px;margin-bottom:8px;border-left:4px solid ${cleared?'var(--success)':'var(--border)'};">
            <div>
                <strong>${r.studentName}</strong>
                <div style="font-size:0.72rem;color:var(--text-secondary);margin-top:2px;">
                    ${r.studentId} • ${r.room} • ${r.wing}
                    ${stu ? ` • 📱 ${stu.phone || '—'}` : ''}
                    ${stu ? ` • ${stu.department || ''}` : ''}
                </div>
            </div>
            <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px;">
                <span class="admin-role-pill" style="${cleared?'background:rgba(16,185,129,.15);border-color:var(--success);color:var(--success);':''}">
                    ${cleared ? '✅ Cleared' : '🏠 Resident'}
                </span>
                ${!cleared ? `<button class="admin-action-btn edit" onclick="hostelClearResident('${r.studentId}','${r.studentName}','${r.room}','${gender}')">✅ Mark Cleared</button>` : ''}
            </div>
        </div>`;
    }).join('');

    return `
        <div class="admin-section-head">🏠 My Residents — ${gender} Wing (${residents.length})</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <p style="font-size:0.78rem;color:var(--text-secondary);">
                All students in the ${gender.toLowerCase()} wing. Mark a student as cleared once they have vacated their room — the list will be sent to the Dean.
            </p>
        </div>
        <div class="admin-card">
            ${rows || '<p style="color:var(--text-secondary);">No residents in this wing yet.</p>'}
        </div>`;
}

/* ── Clearance ── */
function hostelClearanceHTML(user) {
    const data      = getData();
    const isMatron  = user.role === 'hostel_matron' || user.gender === 'Female';
    const gender    = isMatron ? 'Female' : 'Male';
    const myRole    = isMatron ? 'hostel_matron' : 'hostel_patron';
    const clearances = (data.hostelClearances || []).filter(c => c.gender === gender);
    const unsent     = clearances.filter(c => !c.sentToDean);
    const sent       = clearances.filter(c => c.sentToDean);

    return `
        <div class="admin-section-head">📋 Clearance Management — ${gender} Wing</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <p style="font-size:0.78rem;color:var(--text-secondary);">
                Students you mark as cleared appear here. Send the batch to Dean of Students when ready.
            </p>
            ${unsent.length > 0 ? `
            <button class="admin-btn-primary" style="margin-top:10px;" onclick="hostelSendClearanceToDean('${gender}','${user.name}','${myRole}')">
                <i class="fas fa-paper-plane"></i> Send ${unsent.length} Clearance(s) to Dean
            </button>` : ''}
        </div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">✅ Cleared Students (${clearances.length})</div>
            ${clearances.length === 0
                ? '<p style="color:var(--text-secondary);font-size:0.85rem;margin-top:8px;">No clearances yet. Go to Residents to mark students.</p>'
                : clearances.map(c => `
                <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;padding:0.8rem 0;border-bottom:1px solid var(--border);">
                    <div>
                        <strong>${c.studentName}</strong>
                        <div style="font-size:0.72rem;color:var(--text-secondary);">${c.studentId} • ${c.room} • Cleared: ${c.clearanceDate}</div>
                    </div>
                    <span class="admin-role-pill" style="${c.sentToDean?'background:rgba(16,185,129,.15);border-color:var(--success);color:var(--success);':'background:rgba(245,158,11,.15);border-color:var(--warning);color:var(--warning);'}">
                        ${c.sentToDean ? '✅ Sent to Dean' : '⏳ Not sent yet'}
                    </span>
                </div>`).join('')}
        </div>`;
}

/* ── Hostel Report ── */
function hostelReportHTML(user) {
    const data       = getData();
    const isMatron   = user.role === 'hostel_matron' || user.gender === 'Female';
    const gender     = isMatron ? 'Female' : 'Male';
    const residents  = (data.hostelResidents || []).filter(r => r.gender === gender);
    const clearances = (data.hostelClearances || []).filter(c => c.gender === gender && c.sentToDean);
    const cleared    = clearances.length;
    const pending    = residents.length - cleared;

    return `
        <div class="admin-section-head">📊 Hostel Report — ${gender} Wing</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1rem;margin-bottom:1rem;">
            <div class="admin-card" style="text-align:center;">
                <div class="admin-card-title">Clearance Status</div>
                <div style="display:flex;justify-content:center;margin-top:10px;">
                    ${svgDonutChart([{value:cleared||0.0001,color:'#10b981'},{value:pending||0.0001,color:'#f59e0b'}])}
                </div>
                <div style="font-size:0.75rem;margin-top:8px;">
                    <span style="color:var(--success);">● Cleared ${cleared}</span>&nbsp;
                    <span style="color:var(--warning);">● Still Resident ${pending}</span>
                </div>
            </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:1rem;">
            <div class="stat-card"><h3>${residents.length}</h3><p>Total Residents</p></div>
            <div class="stat-card"><h3 style="color:var(--success);">${cleared}</h3><p>Cleared</p></div>
            <div class="stat-card"><h3 style="color:var(--warning);">${pending}</h3><p>Still In Hostel</p></div>
        </div>`;
}

/* ── Hostel Window Actions ── */
window.hostelClearResident = function(studentId, studentName, room, gender) {
    if (!confirm(`Mark ${studentName} (${room}) as cleared from the hostel?`)) return;
    const data     = getData();
    const user     = JSON.parse(sessionStorage.getItem('currentUser'));
    const isMatron = user.role === 'hostel_matron' || user.gender === 'Female';
    data.hostelClearances = data.hostelClearances || [];
    if (data.hostelClearances.find(c => c.studentId === studentId)) return alert('⚠️ Already cleared.');
    data.hostelClearances.push({
        id: 'HC-'+Date.now(), studentId, studentName, gender,
        room, clearedBy: user.role || (isMatron ? 'hostel_matron' : 'hostel_patron'),
        clearedByName: user.name, clearanceDate: new Date().toLocaleDateString('en-CA'),
        sentToDean: false, timestamp: new Date().toISOString()
    });
    saveData(data);
    alert(`✅ ${studentName} marked as cleared.`);
    document.getElementById('hostelMain').innerHTML = hostelResidentsHTML(user);
};

window.hostelSendClearanceToDean = function(gender, senderName, senderRole) {
    const data       = getData();
    const unsent     = (data.hostelClearances || []).filter(c => c.gender === gender && !c.sentToDean);
    if (!unsent.length) return alert('No new clearances to send.');
    unsent.forEach(c => { c.sentToDean = true; });
    const names = unsent.map(c => `${c.studentName} (${c.room})`).join(', ');
    data.deanReceived = data.deanReceived || [];
    data.deanReceived.push({
        id: 'DRV-'+Date.now(), from: `Hostel — ${gender === 'Female' ? 'Matron' : 'Patron'}`,
        fromRole: senderRole, subject: `${gender} Wing Clearance List`,
        message: `The following ${gender.toLowerCase()} students have been cleared from the hostel: ${names}.`,
        timestamp: new Date().toISOString(), read: false
    });
    saveData(data);
    alert(`✅ ${unsent.length} clearance(s) sent to Dean of Students.`);
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    document.getElementById('hostelMain').innerHTML = hostelClearanceHTML(user);
};

 /* ══════════════════════════════════════════
   CLASS TEACHER PORTAL — Full Implementation
══════════════════════════════════════════ */
function renderClassTeacherPanel(user) {
    return `
    <div class="admin-layout">
        <div class="admin-sidenav">
            <div class="admin-sidenav-title"><i class="fas fa-chalkboard"></i> Class Teacher Menu</div>
            <button class="admin-nav-btn active" onclick="classTeacherSection('attendance',this)"><i class="fas fa-calendar-check"></i> Class Attendance</button>
            <button class="admin-nav-btn" onclick="classTeacherSection('notice',this)"><i class="fas fa-bullhorn"></i> Post Class Notice</button>
            <button class="admin-nav-btn" onclick="classTeacherSection('students',this)"><i class="fas fa-users"></i> My Students</button>
            <button class="admin-nav-btn" onclick="classTeacherSection('timetable',this)"><i class="fas fa-calendar-alt"></i> Timetable</button>
            <button class="admin-nav-btn" onclick="classTeacherSection('issues',this)"><i class="fas fa-exclamation-triangle"></i> Issues Received</button>
            <button class="admin-nav-btn" onclick="classTeacherSection('profile',this)"><i class="fas fa-user"></i> Profile</button>
            <button class="admin-nav-btn" onclick="classTeacherSection('report',this)"><i class="fas fa-chart-bar"></i> Class Report</button>  
        </div>
        <div class="admin-main" id="classTeacherMain">
            ${classTeacherAttendanceHTML(user)}
        </div>
    </div>`;
}

window.classTeacherSection = function(section, btn) {
    document.querySelectorAll('.admin-nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    const map = {
        attendance: () => classTeacherAttendanceHTML(user),
        notice:     () => classTeacherNoticeHTML(user),
        students:   () => classTeacherStudentsHTML(user),
        timetable:  () => classTeacherTimetableHTML(user),
        issues:     () => classTeacherIssuesHTML(user),
        profile:    () => classTeacherProfileHTML(user),
        report:     () => classTeacherReportHTML(user)
    };
    document.getElementById('classTeacherMain').innerHTML = (map[section] || (() => classTeacherAttendanceHTML(user)))();
};

/* ── 1. Class Attendance ── */
function classTeacherAttendanceHTML(user) {
    const data = getData();
    const myStudents = (data.students || []).filter(s => s.department === user.department);
    const myUnitIds  = (data.lecturerUnits || []).filter(u => u.department === user.department).map(u => u.id);
    const records    = (data.attendanceRecords || []).filter(r => myUnitIds.includes(r.unitId));
    const today      = new Date().toLocaleDateString('en-CA');
    const todayCount = records.filter(r => r.date === today).length;

    const rows = myStudents.map((s, i) => {
        let present = 0, absent = 0;
        records.forEach(r => {
            if (r.attendance[s.id] === 'present') present++;
            else if (r.attendance[s.id] === 'absent') absent++;
        });
        const total = present + absent;
        const pct   = total ? Math.round((present / total) * 100) : 0;
        return `
        <tr style="border-bottom:1px solid var(--border);">
            <td style="padding:8px;text-align:center;border:1px solid var(--border);font-size:0.75rem;">${i + 1}</td>
            <td style="padding:8px;border:1px solid var(--border);font-size:0.82rem;">${s.name}</td>
            <td style="padding:8px;border:1px solid var(--border);font-size:0.72rem;color:var(--text-secondary);">${s.id}</td>
            <td style="padding:8px;text-align:center;border:1px solid var(--border);color:var(--success);font-weight:700;">${present}</td>
            <td style="padding:8px;text-align:center;border:1px solid var(--border);color:var(--danger);font-weight:700;">${absent}</td>
            <td style="padding:8px;text-align:center;border:1px solid var(--border);">
                <div style="display:flex;align-items:center;gap:6px;justify-content:center;">
                    <div style="background:var(--bg-elevated);border-radius:20px;height:8px;width:70px;overflow:hidden;">
                        <div style="height:100%;width:${pct}%;background:${pct >= 75 ? 'var(--success)' : 'var(--danger)'};border-radius:20px;"></div>
                    </div>
                    <span style="font-size:0.75rem;color:${pct >= 75 ? 'var(--success)' : 'var(--danger)'};">${pct}%</span>
                </div>
            </td>
            <td style="padding:8px;text-align:center;border:1px solid var(--border);font-size:0.75rem;">
                ${s.status === 'not_attending' ? '<span style="color:var(--danger);">🚫 Not Attending</span>'
                : s.status === 'deferred'      ? '<span style="color:var(--warning);">⏸ Deferred</span>'
                :                                '<span style="color:var(--success);">✅ Active</span>'}
            </td>
        </tr>`;
    }).join('');

    return `
        <div class="admin-section-head">📅 Class Attendance — ${user.department}</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <p style="font-size:0.78rem;color:var(--text-secondary);">
                Attendance data comes from Lecturers who mark each session.
                Student status flags come from the Class Rep.
                ${todayCount > 0
                    ? `<span style="color:var(--success);"> ✅ ${todayCount} session(s) recorded today.</span>`
                    : `<span style="color:var(--warning);"> ⚠️ No attendance recorded today yet.</span>`}
            </p>
        </div>
        <div class="admin-card">
            <div class="admin-card-title">Attendance Overview — ${records.length} total sessions recorded</div>
            <div style="overflow-x:auto;margin-top:10px;">
                <table style="width:100%;border-collapse:collapse;font-size:0.82rem;">
                    <thead>
                        <tr style="background:var(--bg-elevated);color:var(--purple-light);">
                            <th style="padding:8px;border:1px solid var(--border);">S/NO</th>
                            <th style="padding:8px;border:1px solid var(--border);">NAME</th>
                            <th style="padding:8px;border:1px solid var(--border);">REG. CODE</th>
                            <th style="padding:8px;text-align:center;border:1px solid var(--border);">PRESENT</th>
                            <th style="padding:8px;text-align:center;border:1px solid var(--border);">ABSENT</th>
                            <th style="padding:8px;text-align:center;border:1px solid var(--border);">RATE</th>
                            <th style="padding:8px;text-align:center;border:1px solid var(--border);">STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rows || `<tr><td colspan="7" style="padding:1rem;text-align:center;color:var(--text-secondary);">No students or attendance records yet.</td></tr>`}
                    </tbody>
                </table>
            </div>
        </div>`;
}

/* ── 2. Post Class Notice ── */
function classTeacherNoticeHTML(user) {
    const data = getData();
    const myNotices = (data.classNotices || [])
        .filter(n => n.senderRole === 'classteacher' && n.department === user.department);

    const list = myNotices.length === 0
        ? `<p style="color:var(--text-secondary);font-size:0.85rem;">No notices posted yet.</p>`
        : myNotices.slice().reverse().map(n => `
            <div style="padding:0.75rem 0;border-bottom:1px solid var(--border);">
                <div style="font-size:0.82rem;">${n.message}</div>
                <div style="font-size:0.68rem;color:var(--text-secondary);margin-top:4px;">${new Date(n.timestamp).toLocaleString()}</div>
            </div>`).join('');

    return `
        <div class="admin-section-head">📢 Post Class Notice</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">Write a New Notice</div>
            <p style="font-size:0.78rem;color:var(--text-secondary);margin:8px 0;">
                Notices posted here appear automatically in the Class Rep's noticeboard, tagged as "Class Teacher".
            </p>
            <textarea id="ctNoticeText" class="admin-input" rows="4"
                placeholder="e.g. Exam registration deadline is 20th June 2026. Please ensure all units are registered."
                style="margin-top:8px;"></textarea>
            <button class="admin-btn-primary" style="margin-top:10px;" onclick="classTeacherPostNotice('${user.department}')">
                <i class="fas fa-paper-plane"></i> Post to Class Rep
            </button>
        </div>
        <div class="admin-card">
            <div class="admin-card-title">My Posted Notices (${myNotices.length})</div>
            ${list}
        </div>`;
}

/* ── 3. My Students ── */
function classTeacherStudentsHTML(user) {
    const data = getData();
    const myStudents = (data.students || []).filter(s => s.department === user.department);

    const statusBadge = s => {
        if (s.status === 'deferred')      return `<span class="admin-role-pill" style="background:rgba(245,158,11,.15);border-color:var(--warning);color:var(--warning);">⏸ Deferred</span>`;
        if (s.status === 'not_attending') return `<span class="admin-role-pill" style="background:rgba(239,68,68,.15);border-color:var(--danger);color:var(--danger);">🚫 Not Attending</span>`;
        return `<span class="admin-role-pill" style="background:rgba(16,185,129,.15);border-color:var(--success);color:var(--success);">✅ Active</span>`;
    };

    const rows = myStudents.length === 0
        ? `<p style="color:var(--text-secondary);font-size:0.85rem;margin-top:8px;">No students yet. Use the form below to add one.</p>`
        : myStudents.map((s, i) => `
            <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:8px;padding:0.8rem 0;border-bottom:1px solid var(--border);">
                <div>
                    <strong style="font-size:0.85rem;">${s.name}</strong>
                    <div style="font-size:0.72rem;color:var(--text-secondary);margin-top:2px;">
                        ${s.id} • 📱 ${s.phone || '—'} • ${s.level || '—'} • Enrolled: ${s.enrollmentDate || '—'}
                    </div>
                </div>
                ${statusBadge(s)}
            </div>`).join('');

    return `
        <div class="admin-section-head">👥 My Students — ${user.department}</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <p style="font-size:0.78rem;color:var(--text-secondary);">
                Students you add here are immediately visible to the Lecturer and Class Rep portals — they share the same list.
            </p>
        </div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">➕ Add New Student</div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-top:10px;">
                <div>
                    <label style="font-size:0.7rem;color:var(--text-secondary);">FULL NAME</label>
                    <input type="text" id="ctNewName" class="admin-input" placeholder="e.g. Grace Mwangi" style="margin-top:4px;">
                </div>
                <div>
                    <label style="font-size:0.7rem;color:var(--text-secondary);">ADMISSION NO</label>
                    <input type="text" id="ctNewId" class="admin-input" placeholder="e.g. STU-2026-20680" style="margin-top:4px;">
                </div>
                <div>
                    <label style="font-size:0.7rem;color:var(--text-secondary);">PHONE</label>
                    <input type="text" id="ctNewPhone" class="admin-input" placeholder="e.g. 0712345678" style="margin-top:4px;">
                </div>
                <div>
                    <label style="font-size:0.7rem;color:var(--text-secondary);">LEVEL</label>
                    <select id="ctNewLevel" class="admin-input" style="margin-top:4px;">
                        <option value="Diploma">Diploma</option>
                        <option value="Certificate">Certificate</option>
                        <option value="Artisan">Artisan</option>
                        <option value="Craft">Craft</option>
                    </select>
                </div>
                <div>
                    <label style="font-size:0.7rem;color:var(--text-secondary);">LEARNING MODE</label>
                    <select id="ctNewMode" class="admin-input" style="margin-top:4px;">
                        <option value="CDACC (CBET)">CDACC (CBET)</option>
                        <option value="Modular">Modular</option>
                    </select>
                </div>
                <div>
                    <label style="font-size:0.7rem;color:var(--text-secondary);">CLASS</label>
                    <input type="text" id="ctNewClass" class="admin-input" placeholder="e.g. Form 3C" style="margin-top:4px;" value="${user.class || ''}">
                </div>
            </div>
            <button class="admin-btn-primary" style="margin-top:14px;" onclick="addMyStudent()">
                <i class="fas fa-user-plus"></i> Add Student to ${user.department}
            </button>
        </div>
        <div class="admin-card">
            <div class="admin-card-title">Enrolled Students (${myStudents.length})</div>
            ${rows}
        </div>`;
}

/* ── 4. Timetable ── */
function classTeacherTimetableHTML(user) {
    const data = getData();
    const myTimetable = (data.timetables || []).filter(t => t.department === user.department);
    const days = ['Monday','Tuesday','Wednesday','Thursday','Friday'];
    const dayOptions  = days.map(d => `<option value="${d}">${d}</option>`).join('');
    const unitOptions = (data.lecturerUnits || [])
        .filter(u => u.department === user.department)
        .map(u => `<option value="${u.id}">${u.code} — ${u.name}</option>`).join('');

    const rows = myTimetable.length === 0
        ? `<p style="color:var(--text-secondary);font-size:0.85rem;">No timetable entries yet.</p>`
        : myTimetable.map(t => `
            <div style="display:flex;justify-content:space-between;align-items:center;padding:0.7rem 0;border-bottom:1px solid var(--border);flex-wrap:wrap;gap:8px;">
                <div>
                    <strong style="font-size:0.85rem;">${t.unit}</strong>
                    <div style="font-size:0.72rem;color:var(--text-secondary);">${t.unitCode} • ${t.day} • ${t.startTime} – ${t.endTime}</div>
                </div>
                <button class="admin-action-btn danger" onclick="classTeacherDeleteTimetable('${t.id}')">Remove</button>
            </div>`).join('');

    return `
        <div class="admin-section-head">📆 Timetable</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">Add Timetable Entry</div>
            <p style="font-size:0.78rem;color:var(--text-secondary);margin:8px 0;">
                Timetable entries are used by the student Attendance system — the confirm button unlocks automatically once the session's end time passes.
            </p>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:10px;margin-top:10px;">
                <div>
                    <label style="font-size:0.7rem;color:var(--text-secondary);">UNIT</label>
                    <select id="ttUnit" class="admin-input" style="margin-top:4px;">${unitOptions || '<option>No units — contact Admin</option>'}</select>
                </div>
                <div>
                    <label style="font-size:0.7rem;color:var(--text-secondary);">DAY</label>
                    <select id="ttDay" class="admin-input" style="margin-top:4px;">${dayOptions}</select>
                </div>
                <div>
                    <label style="font-size:0.7rem;color:var(--text-secondary);">START TIME</label>
                    <input type="time" id="ttStart" class="admin-input" value="08:00" style="margin-top:4px;">
                </div>
                <div>
                    <label style="font-size:0.7rem;color:var(--text-secondary);">END TIME</label>
                    <input type="time" id="ttEnd" class="admin-input" value="10:00" style="margin-top:4px;">
                </div>
            </div>
            <button class="admin-btn-primary" style="margin-top:12px;" onclick="classTeacherAddTimetable('${user.department}','${user.class || ''}')">
                <i class="fas fa-plus"></i> Add Entry
            </button>
        </div>
        <div class="admin-card">
            <div class="admin-card-title">Current Timetable (${myTimetable.length} entries)</div>
            ${rows}
        </div>`;
}

/* ── 5. Issues Received ── */
function classTeacherIssuesHTML(user) {
    const data = getData();
    const issues = (data.classRepIssues || []).filter(i => i.department === user.department);
    const pending  = issues.filter(i => i.status !== 'resolved').length;
    const resolved = issues.filter(i => i.status === 'resolved').length;

    const cards = issues.length === 0
        ? `<p style="color:var(--text-secondary);font-size:0.85rem;">No issues submitted yet.</p>`
        : issues.slice().reverse().map(i => `
            <div style="padding:0.8rem;background:var(--bg-elevated);border-radius:12px;margin-bottom:10px;
                border-left:4px solid ${i.status === 'resolved' ? 'var(--success)' : i.type === 'attendance_restore' ? 'var(--purple)' : 'var(--warning)'};">
                <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px;">
                    <strong style="font-size:0.82rem;">
                        ${i.type === 'attendance_restore' ? '🔄 Attendance Restore — Lecturer' : '⚠️ Issue — ' + (i.student || 'Class Rep')}
                    </strong>
                    <span class="admin-role-pill" style="${i.status === 'resolved'
                        ? 'background:rgba(16,185,129,.15);border-color:var(--success);color:var(--success);'
                        : 'background:rgba(245,158,11,.15);border-color:var(--warning);color:var(--warning);'}">
                        ${i.status === 'resolved' ? '✅ Resolved' : '⏳ Pending'}
                    </span>
                </div>
                <div style="font-size:0.82rem;margin-top:6px;">
                    ${i.type === 'attendance_restore'
                        ? `Student: <strong>${i.studentName || i.studentId}</strong> — Reason: ${i.reason}`
                        : i.message}
                </div>
                <div style="font-size:0.68rem;color:var(--text-secondary);margin-top:4px;">
                    ${new Date(i.timestamp).toLocaleString()}
                </div>
                ${i.status !== 'resolved' ? `
                <button class="admin-action-btn edit" style="margin-top:8px;" onclick="classTeacherResolveIssue('${i.id}')">
                    Mark Resolved
                </button>` : ''}
            </div>`).join('');

    return `
        <div class="admin-section-head">⚠️ Issues Received</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:1rem;">
            <div class="stat-card"><h3 style="color:var(--warning);">${pending}</h3><p>Pending</p></div>
            <div class="stat-card"><h3 style="color:var(--success);">${resolved}</h3><p>Resolved</p></div>
        </div>
        <div class="admin-card">
            <div class="admin-card-title">All Issues & Restore Notifications (${issues.length})</div>
            <p style="font-size:0.78rem;color:var(--text-secondary);margin:8px 0;">
                Includes issues from the Class Rep and attendance restore notifications from Lecturers.
            </p>
            ${cards}
        </div>`;
}

/* ── 6. Class Report (with graphs) ── */
function classTeacherReportHTML(user) {
    const data = getData();
    const myStudents    = (data.students || []).filter(s => s.department === user.department);
    const myUnitIds     = (data.lecturerUnits || []).filter(u => u.department === user.department).map(u => u.id);
    const records       = (data.attendanceRecords || []).filter(r => myUnitIds.includes(r.unitId));
    const issues        = (data.classRepIssues || []).filter(i => i.department === user.department);
    const notices       = (data.classNotices || []).filter(n => n.department === user.department);
    const materials     = (data.lecturerMaterials || []).filter(m => m.department === user.department);
    const studentReports = (data.studentReports || []).filter(r => r.department === user.department);

    const active   = myStudents.filter(s => (s.status || 'active') === 'active').length;
    const notAtt   = myStudents.filter(s => s.status === 'not_attending').length;
    const deferred = myStudents.filter(s => s.status === 'deferred').length;

    let totalPresent = 0, totalAbsent = 0;
    records.forEach(rec => {
        Object.values(rec.attendance || {}).forEach(v => {
            if (v === 'present') totalPresent++; else totalAbsent++;
        });
    });

    const pending  = issues.filter(i => i.status !== 'resolved').length;
    const resolved = issues.filter(i => i.status === 'resolved').length;

    const studentBars = myStudents.map(s => {
        let present = 0, total = 0;
        records.forEach(r => {
            if (r.attendance[s.id]) { total++; if (r.attendance[s.id] === 'present') present++; }
        });
        const pct = total ? Math.round((present / total) * 100) : 0;
        return { label: s.name.split(' ')[0], value: pct, color: pct >= 75 ? '#10b981' : '#ef4444' };
    });

    return `
        <div class="admin-section-head">📊 Class Report — ${user.department}</div>

        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">Attendance Rate per Student</div>
            <div style="overflow-x:auto;margin-top:10px;">
                ${svgBarChart(studentBars.length ? studentBars : [{label:'No data', value:0, color:'#3a2d6e'}])}
            </div>
        </div>

        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1rem;margin-bottom:1rem;">
            <div class="admin-card" style="text-align:center;">
                <div class="admin-card-title">Overall Attendance</div>
                <div style="display:flex;justify-content:center;margin-top:10px;">
                    ${svgDonutChart([
                        { value: totalPresent || 0.0001, color: '#10b981' },
                        { value: totalAbsent  || 0.0001, color: '#ef4444' }
                    ])}
                </div>
                <div style="font-size:0.78rem;margin-top:8px;">
                    <span style="color:var(--success);">● Present ${totalPresent}</span> &nbsp;
                    <span style="color:var(--danger);">● Absent ${totalAbsent}</span>
                </div>
            </div>

            <div class="admin-card" style="text-align:center;">
                <div class="admin-card-title">Student Status Breakdown</div>
                <div style="display:flex;justify-content:center;margin-top:10px;">
                    ${svgDonutChart([
                        { value: active    || 0.0001, color: '#10b981' },
                        { value: notAtt    || 0.0001, color: '#ef4444' },
                        { value: deferred  || 0.0001, color: '#f59e0b' }
                    ])}
                </div>
                <div style="font-size:0.78rem;margin-top:8px;">
                    <span style="color:var(--success);">● Active ${active}</span> &nbsp;
                    <span style="color:var(--danger);">● Not Attending ${notAtt}</span> &nbsp;
                    <span style="color:var(--warning);">● Deferred ${deferred}</span>
                </div>
            </div>

            <div class="admin-card" style="text-align:center;">
                <div class="admin-card-title">Issues Status</div>
                <div style="display:flex;justify-content:center;margin-top:10px;">
                    ${svgDonutChart([
                        { value: resolved || 0.0001, color: '#10b981' },
                        { value: pending  || 0.0001, color: '#f59e0b' }
                    ])}
                </div>
                <div style="font-size:0.78rem;margin-top:8px;">
                    <span style="color:var(--success);">● Resolved ${resolved}</span> &nbsp;
                    <span style="color:var(--warning);">● Pending ${pending}</span>
                </div>
            </div>
        </div>

        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:1rem;">
            <div class="stat-card"><h3>${myStudents.length}</h3><p>Total Students</p></div>
            <div class="stat-card"><h3>${records.length}</h3><p>Sessions Recorded</p></div>
            <div class="stat-card"><h3 style="color:var(--warning);">${issues.length}</h3><p>Issues Received</p></div>
            <div class="stat-card"><h3 style="color:var(--purple-light);">${notices.length}</h3><p>Notices Posted</p></div>
            <div class="stat-card"><h3 style="color:var(--success);">${materials.length}</h3><p>Materials Shared</p></div>
            <div class="stat-card"><h3>${studentReports.length}</h3><p>Student Reports</p></div>
        </div>`;
}

/* ── Window Actions ── */
window.classTeacherPostNotice = function(department) {
    const message = document.getElementById('ctNoticeText')?.value.trim();
    if (!message) return alert('Please write a notice before posting.');
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    const data = getData();
    data.classNotices = data.classNotices || [];
    data.classNotices.push({
        id: 'notice-' + Date.now(),
        sender: user.name || 'Class Teacher',
        senderRole: 'classteacher',
        department,
        message,
        timestamp: new Date().toISOString(),
        type: 'general'
    });
    saveData(data);
    alert('✅ Notice posted! Class Rep can now see it in their noticeboard.');
    document.getElementById('classTeacherMain').innerHTML = classTeacherNoticeHTML(user);
};

/* ── Class Teacher Profile ── */
function classTeacherProfileHTML(user) {
    const data = getData();
    const myStudents = (data.students || []).filter(s => s.department === user.department);
    const notices    = (data.classNotices || []).filter(n => n.senderRole === 'classteacher' && n.department === user.department);
    const issues     = (data.classRepIssues || []).filter(i => i.department === user.department);
    const timetables = (data.timetables || []).filter(t => t.department === user.department);

    return `
        <div class="admin-section-head">👤 My Profile</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div style="display:flex;gap:1.2rem;align-items:center;flex-wrap:wrap;">
                <div style="width:70px;height:70px;border-radius:50%;background:linear-gradient(135deg,#6c3fcf,#a855f7);display:flex;align-items:center;justify-content:center;font-size:2rem;color:white;flex-shrink:0;">🧑‍🏫</div>
                <div>
                    <h3 style="margin:0;">${user.name || 'Class Teacher'}</h3>
                    <div style="font-size:0.8rem;color:var(--text-secondary);">${user.id || '—'}</div>
                    <div style="margin-top:6px;display:flex;gap:6px;flex-wrap:wrap;">
                        <span class="admin-role-pill" style="background:rgba(108,63,207,.2);border-color:var(--purple);color:var(--purple-light);">🧑‍🏫 Class Teacher</span>
                        <span class="admin-role-pill">${user.department || '—'}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">Personal Information</div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-top:10px;font-size:0.85rem;">
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">FULL NAME</span><br>${user.name || '—'}</div>
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">STAFF ID</span><br>${user.id || '—'}</div>
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">DEPARTMENT</span><br>${user.department || '—'}</div>
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">CLASS</span><br>${user.class || '—'}</div>
            </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:1rem;">
            <div class="stat-card"><h3>${myStudents.length}</h3><p>Total Students</p></div>
            <div class="stat-card"><h3 style="color:var(--success);">${myStudents.filter(s=>(s.status||'active')==='active').length}</h3><p>Active</p></div>
            <div class="stat-card"><h3 style="color:var(--purple-light);">${notices.length}</h3><p>Notices Posted</p></div>
            <div class="stat-card"><h3 style="color:var(--warning);">${issues.filter(i=>i.status!=='resolved').length}</h3><p>Pending Issues</p></div>
            <div class="stat-card"><h3>${timetables.length}</h3><p>Timetable Entries</p></div>
        </div>`;
}

window.classTeacherAddTimetable = function(department, cls) {
    const unitId = document.getElementById('ttUnit')?.value;
    const day    = document.getElementById('ttDay')?.value;
    const start  = document.getElementById('ttStart')?.value;
    const end    = document.getElementById('ttEnd')?.value;
    if (!unitId || !day || !start || !end) return alert('Please fill all timetable fields.');
    const data = getData();
    const unit = (data.lecturerUnits || []).find(u => u.id === unitId);
    data.timetables = data.timetables || [];
    data.timetables.push({
        id: 'TT-' + Date.now(),
        department, class: cls || '',
        unitId, unit: unit?.name || '', unitCode: unit?.code || '',
        lecturerId: unit?.lecturerId || '',
        day, startTime: start, endTime: end
    });
    saveData(data);
    alert('✅ Timetable entry added! Students can now confirm attendance for this session.');
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    document.getElementById('classTeacherMain').innerHTML = classTeacherTimetableHTML(user);
};

window.classTeacherDeleteTimetable = function(id) {
    if (!confirm('Remove this timetable entry?')) return;
    const data = getData();
    data.timetables = (data.timetables || []).filter(t => t.id !== id);
    saveData(data);
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    document.getElementById('classTeacherMain').innerHTML = classTeacherTimetableHTML(user);
};

window.classTeacherResolveIssue = function(issueId) {
    const data = getData();
    const issue = (data.classRepIssues || []).find(i => i.id === issueId);
    if (issue) issue.status = 'resolved';
    saveData(data);
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    document.getElementById('classTeacherMain').innerHTML = classTeacherIssuesHTML(user);
};

window.addMyStudent = function() {
    const user  = JSON.parse(sessionStorage.getItem('currentUser'));
    const name  = document.getElementById('ctNewName')?.value.trim();
    const id    = document.getElementById('ctNewId')?.value.trim();
    const phone = document.getElementById('ctNewPhone')?.value.trim();
    const level = document.getElementById('ctNewLevel')?.value;
    const mode  = document.getElementById('ctNewMode')?.value;
    const cls   = document.getElementById('ctNewClass')?.value.trim();
    if (!name || !id) return alert('Full Name and Admission No are required.');
    const data = getData();
    data.students = data.students || [];
    if (data.students.find(s => s.id === id)) return alert(`⚠️ A student with Admission No "${id}" already exists.`);
    data.students.push({
        id, name, phone: phone || null,
        department: user.department,
        class: cls || user.class || '',
        level: level || 'Diploma',
        learningMode: mode || 'CDACC (CBET)',
        programCode: null, enrollmentDate: new Date().toLocaleDateString('en-CA'),
        programDuration: null, totalModules: null,
        feeBalance: 0, totalFee: 0,
        paymentHistory: [], attendance: { total: 0, attended: 0 },
        examHistory: {}, results: [], status: 'active', deferReason: null,
        addedBy: 'classteacher', addedAt: new Date().toISOString()
    });
    saveData(data);
    alert(`✅ ${name} (${id}) added to ${user.department} — now visible to Lecturer and Class Rep.`);
    document.getElementById('classTeacherMain').innerHTML = classTeacherStudentsHTML(user);
};

/* ══════════════════════════════════════════
   LECTURER PORTAL — Full Implementation
══════════════════════════════════════════ */
function renderLecturerPanel(user) {
    return `
    <div class="admin-layout">
        <div class="admin-sidenav">
            <div class="admin-sidenav-title"><i class="fas fa-chalkboard-teacher"></i> Lecturer Menu</div>
            <button class="admin-nav-btn active" onclick="lecturerSection('units',this)"><i class="fas fa-book"></i> My Units</button>
            <button class="admin-nav-btn" onclick="lecturerSection('markregister',this)"><i class="fas fa-clipboard-list"></i> Mark Register</button>
            <button class="admin-nav-btn" onclick="lecturerSection('attendance',this)"><i class="fas fa-calendar-check"></i> Mark Attendance</button>
            <button class="admin-nav-btn" onclick="lecturerSection('materials',this)"><i class="fas fa-upload"></i> Upload Materials</button>
            <button class="admin-nav-btn" onclick="lecturerSection('students',this)"><i class="fas fa-users"></i> My Students</button>
           <button class="admin-nav-btn" onclick="lecturerSection('profile',this)"><i class="fas fa-user"></i> Profile</button>
            <button class="admin-nav-btn" onclick="lecturerSection('report',this)"><i class="fas fa-chart-bar"></i> Unit Report</button>
        </div>
        <div class="admin-main" id="lecturerMain">
            ${lecturerUnitsHTML(user)}
        </div>
    </div>`;
}

window.lecturerSection = function(section, btn) {
    document.querySelectorAll('.admin-nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    const map = {
        units:        () => lecturerUnitsHTML(user),
        markregister: () => lecturerMarkRegisterHTML(user),
        attendance:   () => lecturerAttendanceHTML(user),
        materials:    () => lecturerMaterialsHTML(user),
        students:     () => lecturerStudentsHTML(user),
        profile:      () => lecturerProfileHTML(user),
        report:       () => lecturerReportHTML(user)
    };
    document.getElementById('lecturerMain').innerHTML = (map[section] || (() => lecturerUnitsHTML(user)))();
};

/* ── My Units ── */
function lecturerUnitsHTML(user) {
    const data = getData();
    const units = (data.lecturerUnits || []).filter(u => u.lecturerId === user.id);

    if (units.length === 0) {
        return `
            <div class="admin-section-head">📚 My Assigned Units</div>
            <div class="admin-card">
                <p style="color:var(--text-secondary);font-size:0.85rem;">
                    No units assigned yet. Units are distributed by System Admin based on allocations from the Examination Office.
                    Contact System Admin if your units are missing.
                </p>
            </div>`;
    }

    const cards = units.map(u => `
        <div class="admin-card" style="margin-bottom:1rem;">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:10px;">
                <div>
                    <div style="font-size:1.1rem;font-weight:700;">${u.name}</div>
                    <div style="font-size:0.75rem;color:var(--purple-light);margin-top:4px;">Code: ${u.code} • Level ${u.level} • ${u.semester}</div>
                    <div style="font-size:0.75rem;color:var(--text-secondary);margin-top:4px;">${u.description || ''}</div>
                </div>
                <span class="admin-role-pill">${u.department}</span>
            </div>
        </div>`).join('');

    return `
        <div class="admin-section-head">📚 My Assigned Units</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <p style="font-size:0.78rem;color:var(--text-secondary);">
                Units are assigned by System Admin based on Examination Office allocations. These units feed your Mark Register and Attendance sheets.
            </p>
        </div>
        ${cards}`;
}

/* ── Mark Register ── */
function lecturerMarkRegisterHTML(user) {
    const data = getData();
    const units = (data.lecturerUnits || []).filter(u => u.lecturerId === user.id);
    const students = (data.students || []).filter(s => s.department === user.department);

    if (units.length === 0) {
        return `<div class="admin-section-head">📋 Mark Register</div>
                <div class="admin-card"><p style="color:var(--text-secondary);">No units assigned. Contact System Admin.</p></div>`;
    }

    const unit = units[0];
    const unitOptions = units.map(u => `<option value="${u.id}">${u.code} — ${u.name}</option>`).join('');

    const rows = students.map((s, i) => {
        const saved = (data.markRegisterEntries || []).find(e => e.studentId === s.id && e.unitId === unit.id) || {};
        return `
        <tr style="border-bottom:1px solid var(--border);">
            <td style="padding:6px 8px;text-align:center;font-size:0.75rem;border:1px solid var(--border);">${i + 1}</td>
            <td style="padding:6px 8px;font-size:0.72rem;border:1px solid var(--border);white-space:nowrap;">${s.id}</td>
            <td style="padding:6px 8px;font-size:0.78rem;border:1px solid var(--border);white-space:nowrap;">${s.name}</td>
            <td style="padding:4px;border:1px solid var(--border);"><input type="number" min="0" max="30" value="${saved.cam1 || ''}" id="cam1_${s.id}" onchange="lecturerAutoCalc('${s.id}')" class="admin-input" style="width:55px;padding:4px;text-align:center;" placeholder="—"></td>
            <td style="padding:4px;border:1px solid var(--border);"><input type="number" min="0" max="30" value="${saved.cam2 || ''}" id="cam2_${s.id}" onchange="lecturerAutoCalc('${s.id}')" class="admin-input" style="width:55px;padding:4px;text-align:center;" placeholder="—"></td>
            <td style="padding:4px;border:1px solid var(--border);"><input type="number" min="0" max="30" value="${saved.cam3 || ''}" id="cam3_${s.id}" onchange="lecturerAutoCalc('${s.id}')" class="admin-input" style="width:55px;padding:4px;text-align:center;" placeholder="—"></td>
            <td id="waver_${s.id}" style="padding:6px 8px;text-align:center;font-size:0.78rem;font-weight:700;color:var(--purple-light);border:1px solid var(--border);">${saved.waver || '—'}</td>
            <td style="padding:4px;border:1px solid var(--border);"><input type="number" min="0" max="30" value="${saved.pract1 || ''}" id="pract1_${s.id}" onchange="lecturerAutoCalc('${s.id}')" class="admin-input" style="width:55px;padding:4px;text-align:center;" placeholder="—"></td>
            <td style="padding:4px;border:1px solid var(--border);"><input type="number" min="0" max="30" value="${saved.pract2 || ''}" id="pract2_${s.id}" onchange="lecturerAutoCalc('${s.id}')" class="admin-input" style="width:55px;padding:4px;text-align:center;" placeholder="—"></td>
            <td style="padding:4px;border:1px solid var(--border);"><input type="number" min="0" max="30" value="${saved.pract3 || ''}" id="pract3_${s.id}" onchange="lecturerAutoCalc('${s.id}')" class="admin-input" style="width:55px;padding:4px;text-align:center;" placeholder="—"></td>
            <td id="paver_${s.id}" style="padding:6px 8px;text-align:center;font-size:0.78rem;font-weight:700;color:var(--purple-light);border:1px solid var(--border);">${saved.paver || '—'}</td>
            <td id="total_${s.id}" style="padding:6px 8px;text-align:center;font-size:0.82rem;font-weight:800;color:var(--success);border:1px solid var(--border);">${saved.total || '—'}</td>
        </tr>`;
    }).join('');

    return `
        <div class="admin-section-head">📋 Mark Register</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div style="display:flex;flex-wrap:wrap;gap:12px;align-items:flex-end;">
                <div>
                    <label style="font-size:0.72rem;color:var(--text-secondary);">SELECT UNIT</label>
                    <select class="admin-input" id="markRegUnit" onchange="lecturerSwitchMarkUnit(this.value)" style="margin-top:4px;">${unitOptions}</select>
                </div>
                <div>
                    <label style="font-size:0.72rem;color:var(--text-secondary);">ASSESSMENT SERIES</label>
                    <input type="text" class="admin-input" id="assessSeries" value="${unit.semester || ''}" style="margin-top:4px;" placeholder="e.g. March/April 2026">
                </div>
                <div>
                    <label style="font-size:0.72rem;color:var(--text-secondary);">CENTRE NAME</label>
                    <input type="text" class="admin-input" value="PC Kinyanjui Technical Training Institute" readonly style="margin-top:4px;background:var(--bg-elevated);min-width:260px;">
                </div>
            </div>
        </div>

        <div class="admin-card">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;flex-wrap:wrap;gap:8px;">
                <div>
                    <div class="admin-card-title">CDACC/CBA — Continuous Assessment Mark Sheet</div>
                    <div style="font-size:0.72rem;color:var(--text-secondary);">Course: ${unit.name} (${unit.code}) • Level ${unit.level}</div>
                </div>
                <button class="admin-btn-primary" onclick="lecturerSaveMarkRegister('${unit.id}')">
                    <i class="fas fa-save"></i> Save Marks
                </button>
            </div>

            <div style="overflow-x:auto;">
                <table style="width:100%;border-collapse:collapse;font-size:0.78rem;">
                    <thead>
                        <tr style="background:var(--bg-elevated);color:var(--purple-light);">
                            <th style="padding:8px;border:1px solid var(--border);" rowspan="2">S/NO</th>
                            <th style="padding:8px;border:1px solid var(--border);" rowspan="2">REG. CODE</th>
                            <th style="padding:8px;border:1px solid var(--border);" rowspan="2">CANDIDATE'S NAME</th>
                            <th style="padding:8px;border:1px solid var(--border);text-align:center;" colspan="4">WRITTEN ASSESSMENT MARKS</th>
                            <th style="padding:8px;border:1px solid var(--border);text-align:center;" colspan="4">PRACTICAL ASSESSMENT MARKS</th>
                            <th style="padding:8px;border:1px solid var(--border);" rowspan="2">TOTAL</th>
                        </tr>
                        <tr style="background:var(--bg-elevated);color:var(--text-secondary);">
                            <th style="padding:6px;border:1px solid var(--border);">CAM 1</th>
                            <th style="padding:6px;border:1px solid var(--border);">CAM 2</th>
                            <th style="padding:6px;border:1px solid var(--border);">CAM 3</th>
                            <th style="padding:6px;border:1px solid var(--border);">AVER.</th>
                            <th style="padding:6px;border:1px solid var(--border);">PRACT. 1</th>
                            <th style="padding:6px;border:1px solid var(--border);">PRACT. 2</th>
                            <th style="padding:6px;border:1px solid var(--border);">PRACT. 3</th>
                            <th style="padding:6px;border:1px solid var(--border);">AVER.</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rows || `<tr><td colspan="13" style="padding:1rem;text-align:center;color:var(--text-secondary);">No students found for this department.</td></tr>`}
                    </tbody>
                </table>
            </div>
            <div style="font-size:0.68rem;color:var(--text-secondary);margin-top:8px;">
                N/B: CAM = Continuous Assessment Mark. Max per CAM: 30. Max PRACT: 30. AVER = Auto-calculated average.
            </div>
        </div>`;
}

/* ── Mark Attendance ── */
function lecturerAttendanceHTML(user) {
    const data = getData();
    const units = (data.lecturerUnits || []).filter(u => u.lecturerId === user.id);
    const students = (data.students || []).filter(s => s.department === user.department);
    const today = new Date().toLocaleDateString('en-CA');

    if (units.length === 0) {
        return `<div class="admin-section-head">📅 Mark Attendance</div>
                <div class="admin-card"><p style="color:var(--text-secondary);">No units assigned yet.</p></div>`;
    }

    const unit = units[0];
    const unitOptions = units.map(u => `<option value="${u.id}">${u.code} — ${u.name}</option>`).join('');
    const todayRecord = (data.attendanceRecords || []).find(r => r.unitId === unit.id && r.date === today);

    const rows = students.map((s, i) => {
        const status = todayRecord ? (todayRecord.attendance[s.id] || 'none') : 'none';
        const isPresent = status === 'present';
        const isAbsent  = status === 'absent';
        return `
        <tr style="border-bottom:1px solid var(--border);" id="att_row_${s.id}">
            <td style="padding:8px;text-align:center;font-size:0.75rem;border:1px solid var(--border);">${i + 1}</td>
            <td style="padding:8px;font-size:0.72rem;border:1px solid var(--border);white-space:nowrap;">${s.id}</td>
            <td style="padding:8px;font-size:0.78rem;border:1px solid var(--border);">
                ${s.name}
                ${s.status === 'not_attending' ? '<div style="color:var(--danger);font-size:0.65rem;">⚠️ Flagged: Not Attending</div>' : ''}
                ${s.status === 'deferred' ? `<div style="color:var(--warning);font-size:0.65rem;">⏸ Deferred${s.deferReason ? ': ' + s.deferReason : ''}</div>` : ''}
            </td>
            <td style="padding:8px;text-align:center;border:1px solid var(--border);">
                <button onclick="lecturerMarkStudent('${s.id}','present','${unit.id}')" id="btn_present_${s.id}"
                    class="admin-action-btn edit"
                    style="${isPresent ? 'background:var(--success);color:#fff;border-color:var(--success);font-weight:700;' : ''}">
                    ✓ Present
                </button>
            </td>
            <td style="padding:8px;text-align:center;border:1px solid var(--border);">
                <button onclick="lecturerMarkStudent('${s.id}','absent','${unit.id}')" id="btn_absent_${s.id}"
                    class="admin-action-btn danger"
                    style="${isAbsent ? 'background:var(--danger);color:#fff;border-color:var(--danger);font-weight:700;' : ''}">
                    ✗ Absent
                </button>
            </td>
            <td style="padding:8px;text-align:center;border:1px solid var(--border);">
                <button onclick="lecturerRestoreStudent('${s.id}','${unit.id}')"
                    style="background:var(--bg-elevated);border:1px solid var(--border);border-radius:8px;padding:4px 10px;cursor:pointer;font-size:0.8rem;color:var(--text-primary);">
                    🔄 Restore
                </button>
            </td>
        </tr>`;
    }).join('');

    return `
        <div class="admin-section-head">📅 Mark Attendance</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div style="display:flex;flex-wrap:wrap;gap:12px;align-items:flex-end;">
                <div>
                    <label style="font-size:0.72rem;color:var(--text-secondary);">UNIT</label>
                    <select class="admin-input" id="attUnit" onchange="lecturerSwitchAttUnit(this.value)" style="margin-top:4px;">${unitOptions}</select>
                </div>
                <div>
                    <label style="font-size:0.72rem;color:var(--text-secondary);">DATE</label>
                    <input type="date" class="admin-input" id="attDate" value="${today}" style="margin-top:4px;">
                </div>
                <button class="admin-btn-primary" onclick="lecturerSubmitAttendance('${unit.id}')">
                    <i class="fas fa-save"></i> Submit Attendance
                </button>
            </div>
            <p style="font-size:0.72rem;color:var(--text-secondary);margin-top:8px;">
                Flagged students are highlighted. Mark ✓ Present or ✗ Absent for each student.
                Restore reverses a marking and notifies the Class Teacher with a reason — for accountability.
            </p>
        </div>

        <div class="admin-card">
            <div class="admin-card-title">Attendance Register — ${unit.name} (${unit.code})</div>
            <div style="overflow-x:auto;margin-top:10px;">
                <table style="width:100%;border-collapse:collapse;font-size:0.82rem;">
                    <thead>
                        <tr style="background:var(--bg-elevated);color:var(--purple-light);">
                            <th style="padding:8px;border:1px solid var(--border);">S/NO</th>
                            <th style="padding:8px;border:1px solid var(--border);">REG. CODE</th>
                            <th style="padding:8px;border:1px solid var(--border);">CANDIDATE'S NAME</th>
                            <th style="padding:8px;text-align:center;border:1px solid var(--border);">✓ PRESENT</th>
                            <th style="padding:8px;text-align:center;border:1px solid var(--border);">✗ ABSENT</th>
                            <th style="padding:8px;text-align:center;border:1px solid var(--border);">RESTORE</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rows || `<tr><td colspan="6" style="padding:1rem;text-align:center;color:var(--text-secondary);">No students found.</td></tr>`}
                    </tbody>
                </table>
            </div>
        </div>`;
}

/* ── Upload Materials ── */
function lecturerMaterialsHTML(user) {
    const data = getData();
    const units = (data.lecturerUnits || []).filter(u => u.lecturerId === user.id);
    const materials = (data.lecturerMaterials || []).filter(m => m.lecturerId === user.id);
    const unitOptions = units.map(u => `<option value="${u.id}">${u.code} — ${u.name}</option>`).join('');

    const matList = materials.length === 0
        ? `<p style="color:var(--text-secondary);font-size:0.85rem;">No materials uploaded yet.</p>`
        : materials.slice().reverse().map(m => `
            <div style="display:flex;justify-content:space-between;align-items:center;padding:0.7rem 0;border-bottom:1px solid var(--border);flex-wrap:wrap;gap:8px;">
                <div>
                    <strong style="font-size:0.85rem;">${m.title}</strong>
                    <div style="font-size:0.72rem;color:var(--text-secondary);">${m.unitCode} — ${m.unitName} • ${new Date(m.uploadedAt).toLocaleDateString()}${m.fileName ? ' • 📎 ' + m.fileName : ''}</div>
                </div>
                <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap;">
                    <span class="admin-role-pill" style="${m.sentToClassRep ? 'background:rgba(16,185,129,.15);border-color:var(--success);color:var(--success);' : ''}">
                        ${m.sentToClassRep ? '✅ Sent to Class Rep' : '📁 Not sent yet'}
                    </span>
                    ${!m.sentToClassRep ? `<button class="admin-action-btn edit" onclick="lecturerSendMaterial('${m.id}')"><i class="fas fa-paper-plane"></i> Send</button>` : ''}
                </div>
            </div>`).join('');

    return `
        <div class="admin-section-head">📤 Upload Materials</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">Upload New Material (from your computer)</div>
            <div style="display:grid;gap:10px;margin-top:10px;">
                <div>
                    <label style="font-size:0.72rem;color:var(--text-secondary);">MATERIAL TITLE</label>
                    <input type="text" id="matTitle" class="admin-input" placeholder="e.g. Week 5 Notes — Computer Essentials" style="margin-top:4px;">
                </div>
                <div>
                    <label style="font-size:0.72rem;color:var(--text-secondary);">SELECT UNIT</label>
                    <select id="matUnit" class="admin-input" style="margin-top:4px;">${unitOptions}</select>
                </div>
                <div>
                    <label style="font-size:0.72rem;color:var(--text-secondary);">CHOOSE FILE (PDF, DOCX, PPTX, Image, Video)</label>
                    <input type="file" id="matFile" class="admin-input" accept=".pdf,.docx,.pptx,.xlsx,.jpg,.png,.mp4,.txt" style="margin-top:4px;">
                </div>
            </div>
            <div style="display:flex;gap:10px;margin-top:14px;flex-wrap:wrap;">
                <button class="admin-btn-primary" onclick="lecturerUploadMaterial('${user.id}')">
                    <i class="fas fa-upload"></i> Upload Only
                </button>
                <button class="admin-btn-secondary" onclick="lecturerUploadAndSend('${user.id}')">
                    <i class="fas fa-paper-plane"></i> Upload & Send to Class Rep
                </button>
            </div>
        </div>

        <div class="admin-card">
            <div class="admin-card-title">My Uploaded Materials (${materials.length})</div>
            ${matList}
        </div>`;
}

/* ── My Students ── */
function lecturerStudentsHTML(user) {
    const data = getData();
    const students = (data.students || []).filter(s => s.department === user.department);

    if (students.length === 0) {
        return `<div class="admin-section-head">👥 My Students</div>
                <div class="admin-card"><p style="color:var(--text-secondary);">No students found for your department.</p></div>`;
    }

    const cards = students.map(s => {
        const reports = (data.studentReports || []).filter(r => r.studentId === s.id && r.lecturerId === user.id);
        return `
        <div class="admin-card" style="margin-bottom:0.8rem;">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:10px;">
                <div>
                    <strong>${s.name}</strong>
                    <div style="font-size:0.75rem;color:var(--text-secondary);">${s.id} • ${s.phone || '—'}</div>
                    <div style="font-size:0.72rem;margin-top:4px;">
                        ${s.status === 'not_attending' ? '<span style="color:var(--danger);">🚫 Not Attending</span>' :
                          s.status === 'deferred' ? '<span style="color:var(--warning);">⏸ Deferred</span>' :
                          '<span style="color:var(--success);">✅ Active</span>'}
                    </div>
                </div>
                <div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center;">
                    ${reports.length > 0 ? `<span class="admin-role-pill" style="background:rgba(16,185,129,.1);color:var(--success);border-color:var(--success);">📝 ${reports.length} Report(s)</span>` : ''}
                    <button class="admin-action-btn edit" onclick="lecturerToggleReportForm('${s.id}')">
                        ✏️ Write Report
                    </button>
                </div>
            </div>
            <div id="report_form_${s.id}" style="display:none;margin-top:10px;padding-top:10px;border-top:1px solid var(--border);">
                <label style="font-size:0.72rem;color:var(--text-secondary);">REPORT ON ${s.name.toUpperCase()} — This will be sent to HOD for review</label>
                <textarea id="report_text_${s.id}" class="admin-input" rows="3" placeholder="Write your observation, academic performance summary, concern, or recommendation about this student..." style="margin-top:6px;"></textarea>
                <div style="display:flex;gap:8px;margin-top:8px;">
                    <button class="admin-btn-primary" onclick="lecturerSubmitStudentReport('${s.id}','${s.name}','${user.id}','${user.department}')">
                        <i class="fas fa-paper-plane"></i> Submit to HOD
                    </button>
                    <button class="admin-btn-secondary" onclick="lecturerToggleReportForm('${s.id}')">Cancel</button>
                </div>
            </div>
        </div>`;
    }).join('');

    return `
        <div class="admin-section-head">👥 My Students</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <p style="font-size:0.78rem;color:var(--text-secondary);">
                Students in your department. Write a report on any student and it goes to the HOD for review.
                Class Rep status flags are also visible here.
            </p>
        </div>
        ${cards}`;
}

/* ── Unit Report ── */
function lecturerReportHTML(user) {
    const data = getData();
    const units = (data.lecturerUnits || []).filter(u => u.lecturerId === user.id);
    const students = (data.students || []).filter(s => s.department === user.department);
    const materials = (data.lecturerMaterials || []).filter(m => m.lecturerId === user.id);
    const reports = (data.studentReports || []).filter(r => r.lecturerId === user.id);

    const myUnitIds = units.map(u => u.id);
    const myRecords = (data.attendanceRecords || []).filter(r => myUnitIds.includes(r.unitId));

    let totalPresent = 0, totalAbsent = 0;
    myRecords.forEach(rec => {
        Object.values(rec.attendance || {}).forEach(s => {
            if (s === 'present') totalPresent++; else totalAbsent++;
        });
    });

    const unitBars = units.map(u => {
        const uRecs = myRecords.filter(r => r.unitId === u.id);
        let uPresent = 0, uTotal = 0;
        uRecs.forEach(rec => Object.values(rec.attendance || {}).forEach(s => { uTotal++; if (s === 'present') uPresent++; }));
        const pct = uTotal ? Math.round((uPresent / uTotal) * 100) : 0;
        return { label: u.code, value: pct, color: pct >= 75 ? '#10b981' : '#ef4444' };
    });

    const active   = students.filter(s => (s.status || 'active') === 'active').length;
    const notAtt   = students.filter(s => s.status === 'not_attending').length;
    const deferred = students.filter(s => s.status === 'deferred').length;

    return `
        <div class="admin-section-head">📊 Unit Report</div>

        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">Attendance Rate by Unit</div>
            <div style="overflow-x:auto;margin-top:10px;">
                ${svgBarChart(unitBars.length ? unitBars : [{label:'No data', value:0, color:'#3a2d6e'}])}
            </div>
        </div>

        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1rem;margin-bottom:1rem;">
            <div class="admin-card" style="text-align:center;">
                <div class="admin-card-title">Students Attended vs Absent</div>
                <div style="display:flex;justify-content:center;margin-top:10px;">
                    ${svgDonutChart([
                        { value: totalPresent || 0.0001, color: '#10b981' },
                        { value: totalAbsent  || 0.0001, color: '#ef4444' }
                    ])}
                </div>
                <div style="font-size:0.78rem;margin-top:8px;">
                    <span style="color:var(--success);">● Attended ${totalPresent}</span> &nbsp;
                    <span style="color:var(--danger);">● Absent ${totalAbsent}</span>
                </div>
            </div>

            <div class="admin-card" style="text-align:center;">
                <div class="admin-card-title">Class Status Breakdown</div>
                <div style="display:flex;justify-content:center;margin-top:10px;">
                    ${svgDonutChart([
                        { value: active    || 0.0001, color: '#10b981' },
                        { value: notAtt    || 0.0001, color: '#ef4444' },
                        { value: deferred  || 0.0001, color: '#f59e0b' }
                    ])}
                </div>
                <div style="font-size:0.78rem;margin-top:8px;">
                    <span style="color:var(--success);">● Active ${active}</span> &nbsp;
                    <span style="color:var(--danger);">● Not Attending ${notAtt}</span> &nbsp;
                    <span style="color:var(--warning);">● Deferred ${deferred}</span>
                </div>
            </div>
        </div>

        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:1rem;">
            <div class="stat-card"><h3>${students.length}</h3><p>Total Students</p></div>
            <div class="stat-card"><h3>${units.length}</h3><p>Units Assigned</p></div>
            <div class="stat-card"><h3 style="color:var(--purple-light);">${materials.length}</h3><p>Materials Uploaded</p></div>
            <div class="stat-card"><h3 style="color:var(--warning);">${reports.length}</h3><p>Student Reports</p></div>
            <div class="stat-card"><h3>${myRecords.length}</h3><p>Sessions Recorded</p></div>
        </div>`;
}
/* ── Lecturer Window Actions ── */
window.lecturerAutoCalc = function(studentId) {
    const get = id => parseFloat(document.getElementById(id)?.value) || 0;
    const cam1 = get(`cam1_${studentId}`), cam2 = get(`cam2_${studentId}`), cam3 = get(`cam3_${studentId}`);
    const p1   = get(`pract1_${studentId}`), p2 = get(`pract2_${studentId}`), p3 = get(`pract3_${studentId}`);
    const waver = cam1 || cam2 || cam3 ? Math.round((cam1 + cam2 + cam3) / 3) : 0;
    const paver = p1 || p2 || p3 ? Math.round((p1 + p2 + p3) / 3) : 0;
    const total = waver + paver;
    const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val || '—'; };
    set(`waver_${studentId}`, waver);
    set(`paver_${studentId}`, paver);
    set(`total_${studentId}`, total);
};

window.lecturerSaveMarkRegister = function(unitId) {
    const data = getData();
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    const students = data.students.filter(s => s.department === user.department);
    data.markRegisterEntries = data.markRegisterEntries || [];
    students.forEach(s => {
        const g = id => parseFloat(document.getElementById(id)?.value) || 0;
        const cam1 = g(`cam1_${s.id}`), cam2 = g(`cam2_${s.id}`), cam3 = g(`cam3_${s.id}`);
        const pract1 = g(`pract1_${s.id}`), pract2 = g(`pract2_${s.id}`), pract3 = g(`pract3_${s.id}`);
        const waver = cam1 || cam2 || cam3 ? Math.round((cam1 + cam2 + cam3) / 3) : 0;
        const paver = pract1 || pract2 || pract3 ? Math.round((pract1 + pract2 + pract3) / 3) : 0;
        const total = waver + paver;
        const idx = data.markRegisterEntries.findIndex(e => e.studentId === s.id && e.unitId === unitId);
        const entry = { studentId: s.id, unitId, cam1, cam2, cam3, waver, pract1, pract2, pract3, paver, total, savedAt: new Date().toISOString() };
        if (idx >= 0) data.markRegisterEntries[idx] = entry;
        else data.markRegisterEntries.push(entry);
    });
    saveData(data);
    alert('✅ Mark register saved!');
};

/* ── Lecturer Profile ── */
function lecturerProfileHTML(user) {
    const data      = getData();
    const myUnits   = (data.lecturerUnits || []).filter(u => u.lecturerId === user.id);
    const students  = (data.students || []).filter(s => s.department === user.department).length;
    const materials = (data.lecturerMaterials || []).filter(m => m.lecturerId === user.id).length;
    const reports   = (data.studentReports || []).filter(r => r.lecturerId === user.id).length;

    return `
        <div class="admin-section-head">👤 My Profile</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div style="display:flex;gap:1.2rem;align-items:center;flex-wrap:wrap;">
                <div style="width:70px;height:70px;border-radius:50%;background:linear-gradient(135deg,#6c3fcf,#a855f7);display:flex;align-items:center;justify-content:center;font-size:2rem;color:white;flex-shrink:0;">👨‍💻</div>
                <div>
                    <h3 style="margin:0;">${user.name || 'Lecturer'}</h3>
                    <div style="font-size:0.8rem;color:var(--text-secondary);">${user.id || '—'}</div>
                    <div style="margin-top:6px;display:flex;gap:6px;flex-wrap:wrap;">
                        <span class="admin-role-pill" style="background:rgba(108,63,207,.2);border-color:var(--purple);color:var(--purple-light);">👨‍💻 Lecturer</span>
                        <span class="admin-role-pill">${user.department || '—'}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">Personal Information</div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-top:10px;font-size:0.85rem;">
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">FULL NAME</span><br>${user.name || '—'}</div>
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">DEPARTMENT</span><br>${user.department || '—'}</div>
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">STAFF ID</span><br>${user.id || '—'}</div>
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">UNITS ASSIGNED</span><br>${myUnits.length}</div>
            </div>
        </div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">Assigned Units</div>
            ${myUnits.length === 0
                ? '<p style="color:var(--text-secondary);font-size:0.85rem;margin-top:8px;">No units assigned yet — contact your HOD.</p>'
                : myUnits.map(u => `
                <div style="padding:0.6rem 0;border-bottom:1px solid var(--border);font-size:0.85rem;">
                    <strong>${u.name}</strong>
                    <span class="admin-role-pill" style="margin-left:8px;">${u.code}</span>
                    <div style="font-size:0.72rem;color:var(--text-secondary);margin-top:2px;">Level ${u.level || '—'} • ${u.semester || '—'}</div>
                </div>`).join('')}
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:1rem;">
            <div class="stat-card"><h3>${students}</h3><p>Dept Students</p></div>
            <div class="stat-card"><h3 style="color:var(--purple-light);">${materials}</h3><p>Materials Uploaded</p></div>
            <div class="stat-card"><h3 style="color:var(--warning);">${reports}</h3><p>Student Reports</p></div>
        </div>`;
}


window.lecturerMarkStudent = function(studentId, status, unitId) {
    if (!window._tempAttendance) window._tempAttendance = {};
    window._tempAttendance[studentId] = status;
    const pBtn = document.getElementById(`btn_present_${studentId}`);
    const aBtn = document.getElementById(`btn_absent_${studentId}`);
    if (status === 'present') {
        pBtn.style.cssText = 'background:var(--success);color:#fff;border-color:var(--success);font-weight:700;';
        aBtn.style.cssText = '';
    } else {
        aBtn.style.cssText = 'background:var(--danger);color:#fff;border-color:var(--danger);font-weight:700;';
        pBtn.style.cssText = '';
    }
};

window.lecturerRestoreStudent = function(studentId, unitId) {
    const reason = prompt('Enter reason for restoring this student\'s attendance mark (will be sent to Class Teacher for accountability):');
    if (!reason) return;
    if (window._tempAttendance) delete window._tempAttendance[studentId];
    const pBtn = document.getElementById(`btn_present_${studentId}`);
    const aBtn = document.getElementById(`btn_absent_${studentId}`);
    if (pBtn) pBtn.style.cssText = '';
    if (aBtn) aBtn.style.cssText = '';
    const data = getData();
    const student = data.students.find(s => s.id === studentId);
    data.classRepIssues = data.classRepIssues || [];
    data.classRepIssues.push({
        id: 'restore-' + Date.now(),
        type: 'attendance_restore',
        studentId,
        studentName: student?.name || studentId,
        unitId,
        reason,
        timestamp: new Date().toISOString(),
        status: 'pending',
        from: 'Lecturer',
        department: student?.department || ''
    });
    saveData(data);
    alert(`✅ Restore reason recorded and sent to Class Teacher.\nReason: "${reason}"`);
};

window.lecturerSubmitAttendance = function(unitId) {
    const date = document.getElementById('attDate')?.value || new Date().toLocaleDateString('en-CA');
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    const data = getData();
    const attendance = { ...(window._tempAttendance || {}) };
    data.students.filter(s => s.department === user.department).forEach(s => {
        if (!attendance[s.id]) attendance[s.id] = 'absent';
    });
    data.attendanceRecords = data.attendanceRecords || [];
    const existing = data.attendanceRecords.findIndex(r => r.unitId === unitId && r.date === date);
    const record = { id: 'ATT-' + Date.now(), unitId, date, attendance, submittedAt: new Date().toISOString() };
    if (existing >= 0) data.attendanceRecords[existing] = record;
    else data.attendanceRecords.push(record);
    saveData(data);
    window._tempAttendance = {};
    alert(`✅ Attendance for ${date} submitted successfully!`);
};

window.lecturerUploadMaterial = function(lecturerId) {
    const title = document.getElementById('matTitle')?.value.trim();
    const unitId = document.getElementById('matUnit')?.value;
    const file = document.getElementById('matFile')?.files[0];
    if (!title) return alert('Please enter a material title.');
    const data = getData();
    const unit = (data.lecturerUnits || []).find(u => u.id === unitId);
    data.lecturerMaterials = data.lecturerMaterials || [];
    data.lecturerMaterials.push({
        id: 'MAT-' + Date.now(), lecturerId, unitId,
        unitCode: unit?.code || '', unitName: unit?.name || '', department: unit?.department || '',
        title, fileName: file?.name || null, uploadedAt: new Date().toISOString(), sentToClassRep: false
    });
    saveData(data);
    alert(`✅ "${title}" uploaded!`);
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    document.getElementById('lecturerMain').innerHTML = lecturerMaterialsHTML(user);
};

window.lecturerUploadAndSend = function(lecturerId) {
    const title = document.getElementById('matTitle')?.value.trim();
    const unitId = document.getElementById('matUnit')?.value;
    const file = document.getElementById('matFile')?.files[0];
    if (!title) return alert('Please enter a material title.');
    const data = getData();
    const unit = (data.lecturerUnits || []).find(u => u.id === unitId);
    data.lecturerMaterials = data.lecturerMaterials || [];
    data.lecturerMaterials.push({
        id: 'MAT-' + Date.now(), lecturerId, unitId,
        unitCode: unit?.code || '', unitName: unit?.name || '', department: unit?.department || '',
        title, fileName: file?.name || null, uploadedAt: new Date().toISOString(), sentToClassRep: true
    });
    data.classNotices = data.classNotices || [];
    const sender = JSON.parse(sessionStorage.getItem('currentUser'));
    data.classNotices.push({
        id: 'notice-' + Date.now(),
        sender: sender?.name || 'Lecturer', senderRole: 'lecturer',
        department: unit?.department || '',
        message: `📚 New material shared: "${title}" for ${unit?.name || ''} (${unit?.code || ''})${file ? ' — 📎 ' + file.name : ''}.`,
        timestamp: new Date().toISOString(), type: 'material'
    });
    saveData(data);
    alert(`✅ "${title}" uploaded and sent to Class Rep!`);
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    document.getElementById('lecturerMain').innerHTML = lecturerMaterialsHTML(user);
};

window.lecturerSendMaterial = function(matId) {
    const data = getData();
    const mat = data.lecturerMaterials.find(m => m.id === matId);
    if (!mat) return;
    mat.sentToClassRep = true;
    data.classNotices = data.classNotices || [];
    const sender = JSON.parse(sessionStorage.getItem('currentUser'));
    data.classNotices.push({
        id: 'notice-' + Date.now(),
        sender: sender?.name || 'Lecturer', senderRole: 'lecturer',
        department: mat.department,
        message: `📚 Material shared: "${mat.title}" for ${mat.unitName} (${mat.unitCode})${mat.fileName ? ' — 📎 ' + mat.fileName : ''}.`,
        timestamp: new Date().toISOString(), type: 'material'
    });
    saveData(data);
    alert('✅ Sent to Class Rep!');
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    document.getElementById('lecturerMain').innerHTML = lecturerMaterialsHTML(user);
};

window.lecturerToggleReportForm = function(studentId) {
    const form = document.getElementById(`report_form_${studentId}`);
    if (form) form.style.display = form.style.display === 'none' ? 'block' : 'none';
};

window.lecturerSubmitStudentReport = function(studentId, studentName, lecturerId, department) {
    const text = document.getElementById(`report_text_${studentId}`)?.value.trim();
    if (!text) return alert('Please write your report before submitting.');
    const data = getData();
    data.studentReports = data.studentReports || [];
    data.studentReports.push({
        id: 'SR-' + Date.now(), studentId, studentName, lecturerId, department,
        report: text, timestamp: new Date().toISOString(), status: 'pending_hod'
    });
    saveData(data);
    alert(`✅ Report on ${studentName} submitted to HOD for review.`);
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    document.getElementById('lecturerMain').innerHTML = lecturerStudentsHTML(user);
};

window.lecturerSwitchMarkUnit = function() {
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    document.getElementById('lecturerMain').innerHTML = lecturerMarkRegisterHTML(user);
};

window.lecturerSwitchAttUnit = function() {
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    document.getElementById('lecturerMain').innerHTML = lecturerAttendanceHTML(user);
};


/* ══════════════════════════════════════════
   CLASS REP PORTAL — Full Implementation
══════════════════════════════════════════ */
function renderClassRepPanel(user) {
    return `
    <div class="admin-layout">
        <div class="admin-sidenav">
            <div class="admin-sidenav-title">
                <i class="fas fa-users"></i> Class Rep Menu
            </div>
            
            <button class="admin-nav-btn active" onclick="classRepSection('profile',this)">
                <i class="fas fa-user"></i> Profile
            </button>
            <button class="admin-nav-btn" onclick="classRepSection('received',this)">
                <i class="fas fa-inbox"></i> Received
            </button>
            <button class="admin-nav-btn" onclick="classRepSection('noticeboard',this)">
                <i class="fas fa-bell"></i> Class Noticeboard
            </button>
            <button class="admin-nav-btn" onclick="classRepSection('issues',this)">
                <i class="fas fa-exclamation-triangle"></i> Report Issues
            </button>
            <button class="admin-nav-btn" onclick="classRepSection('students',this)">
                <i class="fas fa-user-graduate"></i> My Class List
            </button>
            <button class="admin-nav-btn" onclick="classRepSection('documents',this)">
                <i class="fas fa-folder-open"></i> Document Shared
            </button>
            <button class="admin-nav-btn" onclick="classRepSection('reminders',this)">
                <i class="fas fa-clock"></i> Reminders
            </button>
            <button class="admin-nav-btn" onclick="classRepSection('report',this)">
                <i class="fas fa-chart-bar"></i> Class Report
            </button>
        </div>
        
        <div class="admin-main" id="classRepMain">
            ${classRepProfileHTML(user)}
        </div>
    </div>`;
}

window.classRepSection = function(section, btn) {
    document.querySelectorAll('.admin-nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    const map = {
        profile:     () => classRepProfileHTML(user),
        received:    () => classRepReceivedHTML(),
        noticeboard: () => classRepNoticeboardHTML(user),
        issues:      () => classRepIssuesHTML(),
        students:    () => classRepStudentsHTML(user),
        documents:   () => classRepDocumentsHTML(),
        reminders:   () => classRepRemindersHTML(),
        report:      () => classRepReportHTML(user)
    };

    document.getElementById('classRepMain').innerHTML = map[section]();
};

// ==================== PROFILE ====================
function classRepProfileHTML(user) {
    const data = getData();
    const me = data.students.find(s => s.id === user.id) || {};

    return `
        <div class="admin-section-head">👤 My Profile</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:10px;">
                <div style="display:flex;gap:1.2rem;align-items:center;">
                    <div style="width:70px;height:70px;border-radius:50%;background:#6c3fcf;display:flex;align-items:center;justify-content:center;font-size:2rem;color:white;">👨‍🎓</div>
                    <div>
                        <h3 style="margin:0;">${me.name || user.name}</h3>
                        <div style="font-size:0.8rem;color:var(--text-secondary);">${me.id || user.id}</div>
                        <div style="margin-top:6px;display:flex;gap:6px;flex-wrap:wrap;">
                            <span class="admin-role-pill" style="background:rgba(108,63,207,.2);border-color:var(--purple);color:var(--purple-light);">🗣️ Class Representative</span>
                            <span class="admin-role-pill">${me.learningMode || 'CDACC (CBET)'}</span>
                        </div>
                    </div>
                </div>
                <button class="admin-btn-secondary" onclick="alert('Profile editing coming soon — contact your Class Teacher for corrections.')">
                    <i class="fas fa-edit"></i> Edit Profile
                </button>
            </div>
        </div>

        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">Personal Information</div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-top:10px;font-size:0.85rem;">
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">FULL NAME</span><br>${me.name || '—'}</div>
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">GENDER</span><br>${me.gender || '—'}</div>
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">DATE OF BIRTH</span><br>${me.dob || '—'}</div>
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">COUNTY</span><br>${me.county || '—'}</div>
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">PHONE</span><br>${me.phone || '—'}</div>
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">EMAIL</span><br>${me.email || '—'}</div>
            </div>
        </div>

        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">Academic Information</div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-top:10px;font-size:0.85rem;">
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">ADMISSION NO</span><br>${me.id || '—'}</div>
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">PROGRAM CODE</span><br>${me.programCode || '—'}</div>
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">LEVEL</span><br>${me.level || '—'}</div>
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">DEPARTMENT</span><br>${me.department || '—'}</div>
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">LEARNING MODE</span><br>${me.learningMode || '—'}</div>
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">YEAR / CLASS</span><br>${me.class || '—'}</div>
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">ENROLLMENT DATE</span><br>${me.enrollmentDate || '—'}</div>
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">DURATION</span><br>${me.programDuration || '—'}</div>
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">TOTAL MODULES</span><br>${me.totalModules || '—'}</div>
            </div>
        </div>

        <div class="admin-card">
            <div class="admin-card-title">Fee Summary</div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin-top:10px;">
                <div class="stat-card"><h3>KSh ${(me.totalFee || 0).toLocaleString()}</h3><p>Total Fee</p></div>
                <div class="stat-card"><h3 style="color:var(--success)">KSh ${((me.totalFee || 0) - (me.feeBalance || 0)).toLocaleString()}</h3><p>Paid</p></div>
                <div class="stat-card"><h3 style="color:${(me.feeBalance || 0) === 0 ? 'var(--success)' : 'var(--danger)'}">KSh ${(me.feeBalance || 0).toLocaleString()}</h3><p>Balance</p></div>
            </div>
        </div>`;
}

// ==================== RECEIVED ====================
function classRepReceivedHTML() {
    return `
        <div class="admin-section-head">📥 Received</div>
        <div class="admin-card">
            <p style="color:var(--text-secondary);">Messages, documents and notices from teachers will appear here.</p>
            <div style="margin-top:1.5rem;padding:1rem;background:rgba(255,255,255,0.05);border-radius:12px;text-align:center;">
                <p>No new messages yet.</p>
            </div>
        </div>`;
};

// ==================== NOTICEBOARD ====================
function classRepNoticeboardHTML(user) {
    const data = getData();
    const me = data.students.find(s => s.id === user.id) || {};

    if (!data.classNotices || data.classNotices.length === 0) {
        data.classNotices = [
            { id: 'cn1', sender: 'James Otieno', senderRole: 'classteacher', department: me.department, message: 'Exam registration deadline is 20th June 2026. Please ensure all units are registered before then.', timestamp: new Date().toISOString() },
            { id: 'cn2', sender: 'Jane Wanjiku', senderRole: 'lecturer', department: me.department, message: 'Computer Essentials (CS101) catch-up session this Friday at 2pm in Lab 2.', timestamp: new Date().toISOString() }
        ];
        saveData(data);
    }

    const notices = data.classNotices.filter(n => n.department === me.department);

    const roleBadge = (role) => role === 'classteacher'
        ? `<span class="admin-role-pill" style="background:rgba(37,99,235,.15);border-color:var(--blue);color:var(--blue-light);">🧑‍🏫 Class Teacher</span>`
        : `<span class="admin-role-pill" style="background:rgba(108,63,207,.15);border-color:var(--purple);color:var(--purple-light);">👨‍💻 Lecturer</span>`;

    const html = notices.length === 0
        ? `<p style="color:var(--text-secondary);padding:1rem;">No notices yet.</p>`
        : notices.slice().reverse().map(n => `
            <div style="background:var(--bg-elevated);border-radius:12px;padding:1rem;margin-bottom:1rem;border-left:4px solid #a855f7;">
                <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px;">
                    <strong style="color:var(--purple-light)">${n.sender}</strong>
                    ${roleBadge(n.senderRole)}
                </div>
                <small style="color:var(--text-secondary);">${new Date(n.timestamp).toLocaleDateString()}</small>
                <p style="margin-top:0.5rem;">${n.message}</p>
            </div>
        `).join('');

    return `
        <div class="admin-section-head">📢 Class Noticeboard — ${me.department || ''}</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <p style="font-size:0.78rem;color:var(--text-secondary);">
                Notices from your Class Teacher and Lecturers in your department appear here automatically.
            </p>
        </div>
        <div class="admin-card">
            ${html}
        </div>`;
};

// ==================== REPORT ISSUES ====================
function classRepIssuesHTML() {
    return `
        <div class="admin-card">
            <h4>Report Class Issue / Complaint</h4>
            <textarea id="repIssue" class="admin-input" rows="5" placeholder="Describe the issue..."></textarea>
            <button class="admin-btn-primary" onclick="submitClassRepIssue()">Submit to Class Teacher</button>
        </div>`;
}

window.submitClassRepIssue = function() {
    const issue = document.getElementById('repIssue').value.trim();
    if (!issue) return alert("Please describe the issue.");

    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    const data = getData();
    if (!data.classRepIssues) data.classRepIssues = [];

    data.classRepIssues.push({
        id: 'issue-' + Date.now(),
        repId: user.id,
        department: user.department,
        student: `${user.name} (Class Rep)`,
        message: issue,
        timestamp: new Date().toISOString(),
        status: 'pending'
    });

    saveData(data);
    alert(`✅ Issue submitted successfully!\n\n"${issue}"`);
    document.getElementById('repIssue').value = '';
};

// ==================== MY CLASS LIST ====================
function classRepStudentsHTML(user) {
    const data = getData();
    const me = data.students.find(s => s.id === user.id);

    if (!me) {
        return `
            <div class="admin-section-head">👥 My Class List</div>
            <div class="admin-card">
                <p style="color:var(--danger);">Your student record could not be found.</p>
            </div>`;
    }

    const classmates = data.students.filter(s =>
        s.department === me.department && s.programCode === me.programCode
    );

    const statusBadge = (s) => {
        if (s.status === 'deferred') {
            return `<span class="admin-role-pill" style="background:rgba(245,158,11,.15);border-color:var(--warning);color:var(--warning);">⏸ Deferred</span>`;
        }
        if (s.status === 'not_attending') {
            return `<span class="admin-role-pill" style="background:rgba(239,68,68,.15);border-color:var(--danger);color:var(--danger);">🚫 Not Attending</span>`;
        }
        return `<span class="admin-role-pill" style="background:rgba(16,185,129,.15);border-color:var(--success);color:var(--success);">✅ Present</span>`;
    };

    const rows = classmates.map(s => `
        <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:10px;padding:0.8rem 0;border-bottom:1px solid var(--border);">
            <div>
                <strong>${s.name}</strong> ${s.id === user.id ? '<span style="color:var(--text-secondary);font-size:0.7rem;">(You)</span>' : ''}<br>
                <small style="color:var(--text-secondary)">${s.id} • 📱 ${s.phone || '—'} • Enrolled: ${s.enrollmentDate || '—'}</small>
                ${s.status === 'deferred' && s.deferReason ? `<div style="font-size:0.72rem;color:var(--warning);margin-top:4px;">Reason: ${s.deferReason}</div>` : ''}
            </div>
          <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px;">
                ${statusBadge(s)}
                <div style="display:flex;gap:4px;flex-wrap:wrap;">
                    <button class="admin-action-btn edit" onclick="classRepFlagStudent('${s.id}','active')">Mark Present</button>
                    <button class="admin-action-btn danger" onclick="classRepFlagStudent('${s.id}','not_attending')">Not Attending</button>
                    <button class="admin-action-btn danger" onclick="classRepFlagStudent('${s.id}','deferred')">Deferred</button>
                </div>
            </div> 
        </div>
    `).join('');

    return `
        <div class="admin-section-head">👥 My Class List — ${me.department}</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <p style="font-size:0.78rem;color:var(--text-secondary);">
                Showing students who share your exact department and course. Use the flags below to keep
                records accurate — students who no longer attend, or who have deferred the semester for a
                valid reason, should be marked accordingly for accountability.
            </p>
        </div>
        <div class="admin-card">
            ${rows || '<p style="color:var(--text-secondary);">No classmates found.</p>'}
        </div>`;
}

window.classRepFlagStudent = function(studentId, status) {
    const data = getData();
    const student = data.students.find(s => s.id === studentId);
    if (!student) return;

    let reason = null;
    if (status === 'deferred') {
        reason = prompt('Enter reason for deferment:');
        if (!reason) return;
    }

    student.status = status;
    student.deferReason = status === 'deferred' ? reason : null;
    saveData(data);

    const label = status === 'active' ? 'Present' : status === 'deferred' ? 'Deferred' : 'Not Attending';
    alert(`✅ ${student.name} marked as ${label}.`);

    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    document.getElementById('classRepMain').innerHTML = classRepStudentsHTML(user);
};

// ==================== DOCUMENT SHARED ====================
function classRepDocumentsHTML() {
    return `
        <div class="admin-card">
            <h4>📄 Documents Shared by Lecturers</h4>
            <p style="color:var(--text-secondary);">Shared notes, past papers, and study materials will appear here.</p>
            <div style="margin-top:1rem;padding:1rem;background:rgba(255,255,255,0.05);border-radius:12px;">
                <strong>Lecturer Jane Wanjiku</strong><br>
                <small>Computer Essentials Notes - Week 5</small>
            </div>
        </div>`;
};

// ==================== REMINDERS ====================
function classRepRemindersHTML() {
    return `
        <div class="admin-card">
            <h4>⏰ Quick Reminders</h4>
            <ul style="padding-left:20px;line-height:2;">
                <li>💰 Fee payment deadline: 20th June 2026</li>
                <li>📝 Exam registration is currently open</li>
                <li>📨 Submit any class complaints to Class Teacher</li>
                <li>📚 Collect notes from shared documents</li>
            </ul>
        </div>`;
};

// ==================== CLASS REPORT ====================
function classRepReportHTML(user) {
    const data = getData();
    const me = data.students.find(s => s.id === user.id) || {};
    const classmates = data.students.filter(s => s.department === me.department && s.programCode === me.programCode);

    const present = classmates.filter(s => (s.status || 'active') === 'active').length;
    const notAttending = classmates.filter(s => s.status === 'not_attending').length;
    const deferred = classmates.filter(s => s.status === 'deferred').length;

    const cleared = classmates.filter(s => (s.feeBalance || 0) === 0).length;
    const outstanding = classmates.length - cleared;

    const issuesCount = (data.classRepIssues || []).filter(i => i.department === me.department).length;
    const noticesCount = (data.classNotices || []).filter(n => n.department === me.department).length;

    const attendanceBars = classmates.map(s => {
        const pct = s.attendance ? Math.round((s.attendance.attended / s.attendance.total) * 100) : 0;
        return { label: s.name.split(' ')[0], value: pct, color: pct >= 75 ? '#10b981' : '#ef4444' };
    });

    return `
        <div class="admin-section-head">📊 Class Report — ${me.department || ''}</div>

        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">Classmate Attendance %</div>
            <div style="overflow-x:auto;margin-top:10px;">
                ${svgBarChart(attendanceBars.length ? attendanceBars : [{label:'No data', value:0, color:'#3a2d6e'}])}
            </div>
        </div>

        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1rem;margin-bottom:1rem;">
            <div class="admin-card" style="text-align:center;">
                <div class="admin-card-title">Class Status Breakdown</div>
                <div style="display:flex;justify-content:center;margin-top:10px;">
                    ${svgDonutChart([
                        { value: present || 0.0001, color: '#10b981' },
                        { value: notAttending || 0.0001, color: '#ef4444' },
                        { value: deferred || 0.0001, color: '#f59e0b' }
                    ])}
                </div>
                <div style="font-size:0.75rem;margin-top:8px;">
                    <span style="color:var(--success)">● Present ${present}</span> &nbsp;
                    <span style="color:var(--danger)">● Not Attending ${notAttending}</span> &nbsp;
                    <span style="color:var(--warning)">● Deferred ${deferred}</span>
                </div>
            </div>

            <div class="admin-card" style="text-align:center;">
                <div class="admin-card-title">Fee Clearance</div>
                <div style="display:flex;justify-content:center;margin-top:10px;">
                    ${svgDonutChart([
                        { value: cleared || 0.0001, color: '#10b981' },
                        { value: outstanding || 0.0001, color: '#f59e0b' }
                    ])}
                </div>
                <div style="font-size:0.75rem;margin-top:8px;">
                    <span style="color:var(--success)">● Cleared ${cleared}</span> &nbsp;
                    <span style="color:var(--warning)">● Outstanding ${outstanding}</span>
                </div>
            </div>
        </div>

        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:1rem;">
            <div class="stat-card"><h3>${classmates.length}</h3><p>Class Size</p></div>
            <div class="stat-card"><h3 style="color:var(--warning)">${issuesCount}</h3><p>Issues Reported</p></div>
            <div class="stat-card"><h3 style="color:var(--purple-light)">${noticesCount}</h3><p>Notices Received</p></div>
        </div>`;
}

/* ══════════════════════════════════════════
   PRINCIPAL PORTAL — Placeholder
══════════════════════════════════════════ */
function renderPrincipalPanel(user) {
    return `
    <div class="admin-layout">
        <div class="admin-sidenav">
            <div class="admin-sidenav-title"><i class="fas fa-user-tie"></i> Principal Menu</div>
            <button class="admin-nav-btn active" onclick="principalSection('overview',this)"><i class="fas fa-tachometer-alt"></i> Overview</button>
            <button class="admin-nav-btn" onclick="principalSection('newsletter',this)"><i class="fas fa-newspaper"></i> Post Newsletter</button>
            <button class="admin-nav-btn" onclick="principalSection('escalations',this)"><i class="fas fa-arrow-up"></i> Escalations</button>
            <button class="admin-nav-btn" onclick="principalSection('report',this)"><i class="fas fa-chart-bar"></i> School Report</button>
        </div>
        <div class="admin-main" id="principalMain">${principalPlaceholder('Overview')}</div>
    </div>`;
}

window.principalSection = function(section, btn) {
    document.querySelectorAll('.admin-nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const labels = { overview: 'Overview', newsletter: 'Post Newsletter', escalations: 'Escalations', report: 'School Report' };
    document.getElementById('principalMain').innerHTML = principalPlaceholder(labels[section] || 'Overview');
};

function principalPlaceholder(label) {
    return `
        <div class="admin-section-head">🎓 ${label}</div>
        <div class="admin-card">
            <p style="color:var(--text-secondary);font-size:0.85rem;">
                This section is reserved for the Principal's portal and is coming soon.
            </p>
        </div>`;
}

/* ══════════════════════════════════════════════════════════════
   🏥 HOSPITAL / SCHOOL MEDICAL CLINIC PORTAL
   Handles: student visit requests → confirm/reject (with reason)
   → medical record → billing → send to Finance
   Login: uses the shared handleLogin() switch-case ('hospital'
   is in passOnlyRoles) — no separate login handler needed here.
══════════════════════════════════════════════════════════════ */

function renderHospitalPanel(user) {
    const unread = (getData().hospitalVisits || []).filter(v => v.status === 'pending').length;
    return `
    <div class="admin-layout">
        <div class="admin-sidenav">
            <div class="admin-sidenav-title"><i class="fas fa-hospital-alt"></i> Hospital Menu</div>
            <button class="admin-nav-btn" onclick="hospitalSection('profile',this)"><i class="fas fa-user-md"></i> Profile</button>
            <button class="admin-nav-btn active" onclick="hospitalSection('received',this)">
                <i class="fas fa-inbox"></i> Received
                ${unread > 0 ? `<span style="background:var(--danger);color:#fff;border-radius:12px;padding:2px 7px;font-size:0.65rem;margin-left:4px;">${unread}</span>` : ''}
            </button>
            <button class="admin-nav-btn" onclick="hospitalSection('allergies',this)"><i class="fas fa-allergies"></i> Allergies</button>
            <button class="admin-nav-btn" onclick="hospitalSection('records',this)"><i class="fas fa-file-medical"></i> Medical Records</button>
            <button class="admin-nav-btn" onclick="hospitalSection('billing',this)"><i class="fas fa-coins"></i> Billing → Finance</button>
            <button class="admin-nav-btn" onclick="hospitalSection('storage',this)"><i class="fas fa-box-archive"></i> Storage</button>
            <button class="admin-nav-btn" onclick="hospitalSection('report',this)"><i class="fas fa-chart-bar"></i> Report</button>
        </div>
        <div class="admin-main" id="hospitalMain">
            ${hospitalReceivedHTML(user)}
        </div>
    </div>`;
}

window.hospitalSection = function(section, btn) {
    document.querySelectorAll('.admin-nav-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    const user = JSON.parse(sessionStorage.getItem('currentUser') || 'null');
    if (!user) return alert("Session expired. Please log in again.");
    const map = {
        profile:  () => hospitalProfileHTML(user),
        received: () => hospitalReceivedHTML(user),
        records:  () => hospitalRecordsHTML(user),
        billing:  () => hospitalBillingHTML(user),
         storage: () => hospitalStorageHTML(user, window._hospitalStorageFilters || {}),
        allergies: () => hospitalAllergiesHTML(user),
        report:    () => hospitalReportHTML(user)
    };
    const target = document.getElementById('hospitalMain');
    if (target) target.innerHTML = (map[section] || (() => hospitalReceivedHTML(user)))();
};

/* ── Profile ── */
function hospitalProfileHTML(user) {
    const data    = getData() || {};
    const visits  = data.hospitalVisits || [];
    const records = data.medicalRecords || [];
    const bills   = data.hospitalBills || [];
    return `
        <div class="admin-section-head">👤 My Profile</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div style="display:flex;gap:1.2rem;align-items:center;flex-wrap:wrap;">
                <div style="width:70px;height:70px;border-radius:50%;background:linear-gradient(135deg,#ef4444,#dc2626);display:flex;align-items:center;justify-content:center;font-size:2rem;color:white;flex-shrink:0;">🏥</div>
                <div>
                    <h3 style="margin:0;">${user?.name || 'School Nurse'}</h3>
                    <div style="font-size:0.8rem;color:var(--text-secondary);">${user?.id || 'HOSP-001'}</div>
                    <div style="margin-top:6px;display:flex;gap:6px;flex-wrap:wrap;">
                        <span class="admin-role-pill" style="background:rgba(239,68,68,.15);border-color:var(--danger);color:var(--danger);">🏥 School Medical Clinic</span>
                        <span class="admin-role-pill">PC Kinyanjui TTI</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">Office Information</div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-top:10px;font-size:0.85rem;">
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">FULL NAME</span><br>${user?.name || 'School Nurse'}</div>
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">STAFF ID</span><br>${user?.id || 'HOSP-001'}</div>
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">DEPARTMENT</span><br>School Medical Clinic</div>
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">LOCATION</span><br>Block C, Ground Floor</div>
            </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:1rem;">
            <div class="stat-card"><h3 style="color:var(--warning);">${visits.filter(v=>v.status==='pending').length}</h3><p>Awaiting Attention</p></div>
            <div class="stat-card"><h3 style="color:var(--success);">${records.length}</h3><p>Medical Records</p></div>
            <div class="stat-card"><h3 style="color:var(--purple-light);">${bills.length}</h3><p>Bills Issued</p></div>
        </div>`;
}

 /* ── Student Allergies ── */
function hospitalAllergiesHTML(user) {
    const data      = getData();
    const allergies = data.studentAllergies || [];

    return `
        <div class="admin-section-head">⚠️ Student Allergies & Dietary Records</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <p style="font-size:0.78rem;color:var(--text-secondary);">
                Captured from medical reports submitted when students first join.
                These flags are visible to the Mess Department during meal ordering to prevent harmful serving.
            </p>
        </div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">➕ Add Allergy Record</div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-top:10px;">
                <div>
                    <label style="font-size:0.7rem;color:var(--text-secondary);">ADMISSION NO (auto-fills name)</label>
                    <input type="text" id="algId" class="admin-input" placeholder="e.g. STU-2026-20669" oninput="hospitalAutoFillAllergy(this.value)" style="margin-top:4px;">
                </div>
                <div>
                    <label style="font-size:0.7rem;color:var(--text-secondary);">STUDENT NAME (auto-filled)</label>
                    <input type="text" id="algName" class="admin-input" readonly style="margin-top:4px;background:var(--bg-elevated);">
                </div>
            </div>
            <div style="margin-top:10px;">
                <label style="font-size:0.7rem;color:var(--text-secondary);">ALLERGIES (one per line — e.g. "Lactose intolerant", "Nut allergy")</label>
                <textarea id="algAllergies" class="admin-input" rows="3" placeholder="Lactose intolerant&#10;Nut allergy" style="margin-top:4px;"></textarea>
            </div>
            <div style="margin-top:10px;">
                <label style="font-size:0.7rem;color:var(--text-secondary);">DIETARY RESTRICTIONS</label>
                <textarea id="algDiet" class="admin-input" rows="2" placeholder="e.g. No red meat, Vegetarian" style="margin-top:4px;"></textarea>
            </div>
            <div style="margin-top:10px;">
                <label style="font-size:0.7rem;color:var(--text-secondary);">OTHER MEDICAL CONDITIONS</label>
                <input type="text" id="algMedical" class="admin-input" placeholder="e.g. Mild anaemia — needs iron-rich foods" style="margin-top:4px;">
            </div>
            <button class="admin-btn-primary" style="margin-top:12px;" onclick="hospitalSaveAllergy()">
                <i class="fas fa-save"></i> Save Allergy Record
            </button>
        </div>
        <div class="admin-card">
            <div class="admin-card-title">All Allergy Records (${allergies.length})</div>
            ${allergies.length === 0
                ? '<p style="color:var(--text-secondary);font-size:0.85rem;margin-top:8px;">No records yet.</p>'
                : allergies.map(a => `
                <div style="padding:1rem;background:var(--bg-elevated);border-radius:14px;border-left:4px solid var(--warning);margin-top:10px;">
                    <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:6px;">
                        <div>
                            <strong>${a.studentName}</strong>
                            <div style="font-size:0.72rem;color:var(--text-secondary);">${a.studentId}</div>
                        </div>
                        <span style="font-size:0.68rem;color:var(--text-secondary);">Recorded: ${new Date(a.recordedAt).toLocaleDateString()}</span>
                    </div>
                    <div style="font-size:0.82rem;margin-top:8px;">
                        <div>⚠️ <strong>Allergies:</strong> ${a.allergies.join(' • ')}</div>
                        ${a.dietaryRestrictions?.length ? `<div style="margin-top:4px;">🥗 <strong>Dietary:</strong> ${a.dietaryRestrictions.join(' • ')}</div>` : ''}
                        ${a.medicalConditions ? `<div style="margin-top:4px;">🏥 <strong>Medical:</strong> ${a.medicalConditions}</div>` : ''}
                    </div>
                </div>`).join('')}
        </div>`;
}

window.hospitalAutoFillAllergy = function(admNo) {
    const data = getData();
    const stu  = (data.students || []).find(s => s.id === admNo.trim());
    document.getElementById('algName').value = stu ? stu.name : '';
};

window.hospitalSaveAllergy = function() {
    const studentId = document.getElementById('algId')?.value.trim();
    const studentName = document.getElementById('algName')?.value.trim();
    const rawAllergies = document.getElementById('algAllergies')?.value.trim();
    const rawDiet     = document.getElementById('algDiet')?.value.trim();
    const medical     = document.getElementById('algMedical')?.value.trim();

    if (!studentId || !studentName) return alert('Enter a valid Admission No first.');
    if (!rawAllergies) return alert('Please list at least one allergy.');

    const data = getData();
    data.studentAllergies = data.studentAllergies || [];
    if (data.studentAllergies.find(a => a.studentId === studentId)) {
        if (!confirm(`A record already exists for ${studentName}. Replace it?`)) return;
        data.studentAllergies = data.studentAllergies.filter(a => a.studentId !== studentId);
    }

    data.studentAllergies.push({
        id: 'SA-'+Date.now(), studentId, studentName,
        allergies: rawAllergies.split('\n').map(s => s.trim()).filter(Boolean),
        dietaryRestrictions: rawDiet ? rawDiet.split('\n').map(s => s.trim()).filter(Boolean) : [],
        medicalConditions: medical || null,
        recordedBy: 'Hospital', recordedAt: new Date().toISOString()
    });
    saveData(data);
    alert(`✅ Allergy record for ${studentName} saved. Mess Department will see this flag.`);
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    document.getElementById('hospitalMain').innerHTML = hospitalAllergiesHTML(user);
};

/* ── Received: pending, attended, and rejected ── */
function hospitalReceivedHTML(user) {
    const data     = getData() || {};
    const visits   = data.hospitalVisits || [];
    const pending  = visits.filter(v => v.status === 'pending');
    const seen     = visits.filter(v => v.status === 'seen');
    const rejected = visits.filter(v => v.status === 'rejected');

    const buildCard = (v) => {
        const stu = (data.students || []).find(s => s.id === v.studentId);
        const colorMap = { pending: 'var(--warning)', seen: 'var(--success)', rejected: 'var(--danger)' };
        const labelMap = { pending: '⏳ Awaiting Attention', seen: '✅ Attended', rejected: '❌ Rejected' };

        return `
        <div style="padding:1rem;background:var(--bg-elevated);border-radius:14px;border-left:4px solid ${colorMap[v.status]};margin-bottom:10px;">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:6px;">
                <div>
                    <span class="admin-role-pill" style="background:${v.status==='rejected'?'rgba(239,68,68,.15)':v.status==='seen'?'rgba(16,185,129,.15)':'rgba(245,158,11,.15)'};border-color:${colorMap[v.status]};color:${colorMap[v.status]};">
                        ${labelMap[v.status]}
                    </span>
                    <div style="font-weight:700;margin-top:6px;">${v.studentName}</div>
                    <div style="font-size:0.72rem;color:var(--text-secondary);">
                        ${v.studentId} • ${v.department}
                        ${stu ? ` • 📱 ${stu.phone||'—'}` : ''}
                    </div>
                </div>
                <div style="font-size:0.68rem;color:var(--text-secondary);">${v.requestedAt ? new Date(v.requestedAt).toLocaleString() : '—'}</div>
            </div>
            <div style="font-size:0.82rem;margin-top:8px;padding:8px;background:rgba(255,255,255,.03);border-radius:8px;">
                <strong>Complaint:</strong> ${v.purpose}
            </div>
            ${v.status === 'rejected' ? `
            <div style="font-size:0.78rem;margin-top:8px;padding:8px;background:rgba(239,68,68,.08);border-radius:8px;color:var(--danger);">
                <strong>Reason:</strong> ${v.rejectionReason}
            </div>` : ''}
            ${v.status === 'pending' ? `
            <div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap;">
                <button class="admin-btn-primary" onclick="hospitalOpenMedicalForm('${v.id}')">
                    <i class="fas fa-file-medical"></i> Open Medical Form
                </button>
                <button class="admin-action-btn danger" onclick="hospitalRejectVisit('${v.id}')">
                    ❌ Reject
                </button>
            </div>` : ''}
        </div>`;
    };

    return `
        <div class="admin-section-head">📥 Received — Student Visit Requests</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <p style="font-size:0.78rem;color:var(--text-secondary);">
                Student visit requests arrive here automatically. Open the Medical Form to confirm and treat a
                student, or Reject with a reason — the student will see it immediately in their portal.
            </p>
        </div>
        ${pending.length > 0 ? `
        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">⏳ Awaiting Attention (${pending.length})</div>
            <div style="margin-top:10px;">${pending.map(buildCard).join('')}</div>
        </div>` : ''}
        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">✅ Already Attended (${seen.length})</div>
            <div style="margin-top:10px;">
                ${seen.length === 0 ? '<p style="color:var(--text-secondary);font-size:0.85rem;">None yet.</p>' : seen.map(buildCard).join('')}
            </div>
        </div>
        <div class="admin-card">
            <div class="admin-card-title">❌ Rejected (${rejected.length})</div>
            <div style="margin-top:10px;">
                ${rejected.length === 0 ? '<p style="color:var(--text-secondary);font-size:0.85rem;">None yet.</p>' : rejected.map(buildCard).join('')}
            </div>
        </div>`;
}

/* ── Medical Form (full page) ── */
function hospitalMedicalFormHTML(visitId) {
    const data  = getData() || {};
    const visit = (data.hospitalVisits || []).find(v => v.id === visitId);
    if (!visit) return `<div class="admin-card"><p style="color:var(--danger);">Visit not found.</p></div>`;
    const stu = (data.students || []).find(s => s.id === visit.studentId);

    return `
        <div class="admin-section-head">📋 Medical Form — ${visit.studentName}</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
                <div class="admin-card-title" style="color:var(--danger);">🏥 PC Kinyanjui TTI — School Medical Clinic</div>
                <button class="admin-btn-secondary" onclick="hospitalBackToReceived()">← Back to Received</button>
            </div>
        </div>

        <!-- Section 1: Student Details (Confidential) -->
        <div class="admin-card" style="margin-bottom:1rem;border:2px solid var(--purple);">
            <div class="admin-card-title" style="color:var(--purple-light);">📋 Section 1 — Student Details & Complaint (Auto-filled)</div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-top:12px;font-size:0.85rem;">
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">FULL NAME</span><br><strong>${visit.studentName}</strong></div>
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">ADMISSION NO</span><br><strong>${visit.studentId}</strong></div>
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">DEPARTMENT</span><br><strong>${visit.department}</strong></div>
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">PHONE NO</span><br><strong>${stu?.phone || '—'}</strong></div>
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">DATE OF VISIT</span><br><strong>${new Date().toLocaleDateString()}</strong></div>
            </div>
            <div style="margin-top:12px;">
                <label style="font-size:0.7rem;color:var(--text-secondary);">STUDENT'S COMPLAINT (CONFIDENTIAL — as submitted by student)</label>
                <div style="margin-top:4px;padding:10px;background:var(--bg-elevated);border-radius:8px;font-size:0.82rem;border:1px solid var(--border);">
                    ${visit.purpose}
                </div>
            </div>
        </div>

        <!-- Section 2: Doctor Section -->
        <div class="admin-card" style="margin-bottom:1rem;border:2px solid var(--success);">
            <div class="admin-card-title" style="color:var(--success);">🩺 Section 2 — Doctor's Assessment (Filled by Medical Staff)</div>
            <div style="display:grid;gap:12px;margin-top:12px;">
                <div>
                    <label style="font-size:0.7rem;color:var(--text-secondary);">DIAGNOSIS</label>
                    <textarea id="mfDiagnosis" class="admin-input" rows="2" placeholder="Enter clinical diagnosis..." style="margin-top:4px;"></textarea>
                </div>
                <div>
                    <label style="font-size:0.7rem;color:var(--text-secondary);">TREATMENT PROVIDED</label>
                    <textarea id="mfTreatment" class="admin-input" rows="2" placeholder="Describe what treatment was administered..." style="margin-top:4px;"></textarea>
                </div>
                <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;">
                    <div>
                        <label style="font-size:0.7rem;color:var(--text-secondary);">DRUGS / SUPPLEMENTS AVAILABLE?</label>
                        <select id="mfDrugs" class="admin-input" style="margin-top:4px;">
                            <option value="yes">✅ Yes — Fully administered here</option>
                            <option value="partial">⚠️ Partial — Some given, rest prescribed</option>
                            <option value="no">❌ No — Student to acquire externally</option>
                        </select>
                    </div>
                    <div>
                        <label style="font-size:0.7rem;color:var(--text-secondary);">REFER TO EXTERNAL HOSPITAL?</label>
                        <select id="mfReferral" class="admin-input" style="margin-top:4px;" onchange="hospitalToggleReferral(this.value)">
                            <option value="no">✅ No — Fully treated here</option>
                            <option value="yes">⚠️ Yes — Needs specialist / external care</option>
                        </select>
                    </div>
                </div>
                <div id="mfReferralReasonWrap" style="display:none;">
                    <label style="font-size:0.7rem;color:var(--text-secondary);">REFERRAL HOSPITAL & REASON</label>
                    <input type="text" id="mfReferralReason" class="admin-input" placeholder="e.g. Kenyatta National Hospital — requires surgical review of fracture" style="margin-top:4px;">
                </div>
                <div>
                    <label style="font-size:0.7rem;color:var(--text-secondary);">DOCTOR'S REMARKS & RECOMMENDATIONS</label>
                    <textarea id="mfRemarks" class="admin-input" rows="2" placeholder="Rest period, follow-up date, dietary advice, etc..." style="margin-top:4px;"></textarea>
                </div>
                <div style="max-width:300px;">
                    <label style="font-size:0.7rem;color:var(--text-secondary);">TREATMENT COST (KSh) — 0 if no charge</label>
                    <input type="number" id="mfCost" class="admin-input" placeholder="0" min="0" value="0" style="margin-top:4px;">
                </div>
            </div>
        </div>
        <button class="admin-btn-primary" style="width:100%;padding:1rem;" onclick="hospitalSubmitMedicalRecord('${visitId}','${visit.studentId}','${visit.studentName}','${visit.department}')">
            <i class="fas fa-save"></i> Complete & Save Medical Record
        </button>`;
}

/* Dedicated helper — Received is always the 2nd nav button
   (Profile, Received, Records, Billing, Report). */
window.hospitalBackToReceived = function() {
    const navBtns = document.querySelectorAll('.admin-nav-btn');
    hospitalSection('received', navBtns[1] || null);
};

/* ── Medical Records ── */
function hospitalRecordsHTML(user) {
    const data    = getData() || {};
    const records = data.medicalRecords || [];

    return `
        <div class="admin-section-head">📂 Medical Records (${records.length})</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <p style="font-size:0.78rem;color:var(--text-secondary);">
                All completed medical forms. Each record is confidential and tied to the student's admission number.
                Use "Create Bill" to send treatment costs to Finance.
            </p>
        </div>
        <div class="admin-card">
            ${records.length === 0
                ? '<p style="color:var(--text-secondary);font-size:0.85rem;">No records yet. Attend to students from the Received section.</p>'
                : records.slice().reverse().map(r => `
                <div style="padding:1rem;background:var(--bg-elevated);border-radius:14px;border-left:4px solid ${r.referral?'var(--danger)':'var(--success)'};margin-bottom:10px;">
                    <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:6px;">
                        <div>
                            <strong>${r.studentName}</strong>
                            <div style="font-size:0.72rem;color:var(--text-secondary);margin-top:2px;">
                                ${r.studentId} • ${r.department} • 📱 ${r.phone||'—'}
                            </div>
                        </div>
                        <div style="font-size:0.68rem;color:var(--text-secondary);">${r.recordedAt ? new Date(r.recordedAt).toLocaleDateString() : '—'}</div>
                    </div>
                    <div style="display:grid;gap:4px;margin-top:10px;font-size:0.8rem;">
                        <div><strong>Complaint:</strong> <em style="color:var(--text-secondary);">${r.complaint}</em></div>
                        <div><strong>Diagnosis:</strong> ${r.diagnosis}</div>
                        <div><strong>Treatment:</strong> ${r.treatment}</div>
                        <div><strong>Drugs/Supplements:</strong> ${r.drugsAvailable==='yes'?'✅ Administered here':r.drugsAvailable==='partial'?'⚠️ Partial — rest prescribed':'❌ Student to acquire externally'}</div>
                        ${r.referral ? `<div style="color:var(--danger);"><strong>🚨 Referred:</strong> ${r.referralReason}</div>` : '<div style="color:var(--success);">✅ Fully treated on-site</div>'}
                        <div><strong>Doctor Remarks:</strong> ${r.doctorRemarks}</div>
                        <div><strong>Treatment Cost:</strong> <span style="color:var(--success);font-weight:700;">KSh ${(r.cost||0).toLocaleString()}</span></div>
                    </div>
                    <div style="margin-top:10px;">
                        ${r.billedToFinance
                            ? `<span class="admin-role-pill" style="background:rgba(16,185,129,.15);border-color:var(--success);color:var(--success);">💰 Bill sent to Finance</span>`
                            : r.cost > 0
                                ? `<button class="admin-action-btn edit" onclick="hospitalCreateBill('${r.id}','${r.studentId}','${r.studentName}','${r.department}',${r.cost},'${r.diagnosis}')">💰 Create Bill → Finance</button>`
                                : `<span class="admin-role-pill">No charge</span>`}
                    </div>
                </div>`).join('')}
        </div>`;
}

/* ── Billing ── */
function hospitalBillingHTML(user) {
    const data   = getData() || {};
    const bills  = data.hospitalBills || [];
    const unsent = bills.filter(b => !b.sentToFinance);
    const sent   = bills.filter(b => b.sentToFinance);
    const total  = bills.reduce((s,b) => s+(b.amount||0), 0);

    return `
        <div class="admin-section-head">💰 Billing → Finance</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <p style="font-size:0.78rem;color:var(--text-secondary);">
                Bills created from medical records. Once sent, Finance receives them in their inbox, adds the
                amount to the student's fee balance, and notifies the student how much was billed.
            </p>
            ${unsent.length > 0 ? `
            <button class="admin-btn-primary" style="margin-top:10px;" onclick="hospitalSendAllBillsToFinance()">
                <i class="fas fa-paper-plane"></i> Send All ${unsent.length} Pending Bill(s) to Finance
            </button>` : ''}
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:1rem;margin-bottom:1rem;">
            <div class="stat-card"><h3>${bills.length}</h3><p>Total Bills</p></div>
            <div class="stat-card"><h3 style="color:var(--warning);">${unsent.length}</h3><p>Pending</p></div>
            <div class="stat-card"><h3 style="color:var(--success);">${sent.length}</h3><p>Sent to Finance</p></div>
            <div class="stat-card"><h3 style="color:var(--purple-light);">KSh ${total.toLocaleString()}</h3><p>Total Billed</p></div>
        </div>
        ${unsent.length > 0 ? `
        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">⏳ Pending Bills (${unsent.length})</div>
            ${unsent.map(b => `
            <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;padding:1rem;background:var(--bg-elevated);border-radius:12px;margin-top:10px;border-left:4px solid var(--warning);">
                <div>
                    <strong>${b.studentName}</strong>
                    <div style="font-size:0.72rem;color:var(--text-secondary);">${b.studentId} • ${b.department}</div>
                    <div style="font-size:0.78rem;margin-top:4px;color:var(--text-secondary);">${b.description}</div>
                </div>
                <div style="text-align:right;">
                    <div style="font-size:1.15rem;font-weight:800;color:var(--success);">KSh ${(b.amount||0).toLocaleString()}</div>
                    <button class="admin-action-btn edit" style="margin-top:6px;" onclick="hospitalSendSingleBill('${b.id}')">
                        <i class="fas fa-paper-plane"></i> Send
                    </button>
                </div>
            </div>`).join('')}
        </div>` : ''}
        <div class="admin-card">
            <div class="admin-card-title">✅ Sent to Finance (${sent.length})</div>
            ${sent.length === 0
                ? '<p style="color:var(--text-secondary);font-size:0.85rem;margin-top:8px;">None sent yet.</p>'
                : sent.map(b => `
                <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;padding:0.75rem 0;border-bottom:1px solid var(--border);">
                    <div>
                        <strong>${b.studentName}</strong>
                        <div style="font-size:0.7rem;color:var(--text-secondary);">${b.studentId} • ${b.description}</div>
                    </div>
                    <div style="text-align:right;">
                        <div style="font-weight:700;color:var(--success);">KSh ${(b.amount||0).toLocaleString()}</div>
                       <span class="admin-role-pill" style="background:rgba(16,185,129,.15);border-color:var(--success);color:var(--success);">✅ Sent to Finance</span>
                    </div>
                </div>`).join('')}
        </div>`;
}

/* ── Storage: accountability archive, per-arrival, filterable, deletable-with-reason ── */
function hospitalStorageHTML(user, filters = {}) {
    const data = getData();
    let records = (data.hospitalStorage || []).slice().reverse();

    const category = filters.category || '';
    const search   = (filters.search || '').toLowerCase();
    const fromDate = filters.fromDate || '';
    const toDate   = filters.toDate || '';

    if (category) records = records.filter(r => r.category === category);
    if (search)   records = records.filter(r => r.studentId.toLowerCase().includes(search) || r.studentName.toLowerCase().includes(search));
    if (fromDate) records = records.filter(r => r.timestamp.slice(0,10) >= fromDate);
    if (toDate)   records = records.filter(r => r.timestamp.slice(0,10) <= toDate);

    const allCategories = [...new Set((data.hospitalStorage || []).map(r => r.category))];

    const rows = records.length === 0
        ? `<p style="color:var(--text-secondary);font-size:0.85rem;">No records match this filter.</p>`
        : records.map(r => `
        <div class="admin-card" style="margin-bottom:10px;border-left:4px solid var(--purple);">
            <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:6px;">
                <div>
                    <span class="admin-role-pill">${r.category}</span>
                    <div style="font-weight:700;margin-top:6px;">${r.studentName}</div>
                    <div style="font-size:0.72rem;color:var(--text-secondary);">${r.studentId} • ${r.department || '—'}</div>
                </div>
                <div style="text-align:right;font-size:0.68rem;color:var(--text-secondary);">
                    ${new Date(r.timestamp).toLocaleDateString()}<br>${new Date(r.timestamp).toLocaleTimeString()}
                </div>
            </div>
            <div style="font-size:0.8rem;margin-top:8px;">${r.description}</div>
            ${r.amount ? `<div style="font-size:0.8rem;margin-top:4px;color:var(--success);font-weight:700;">KSh ${r.amount.toLocaleString()}</div>` : ''}
            <button class="admin-action-btn danger" style="margin-top:8px;" onclick="hospitalDeleteStorageRecord('${r.id}')">🗑 Delete</button>
        </div>`).join('');

    return `
        <div class="admin-section-head">📦 Storage — Accountability Archive (${records.length})</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <p style="font-size:0.78rem;color:var(--text-secondary);">
                Every visit request, medical record, and bill sent is archived here permanently with the exact
                date and time it happened. Deleting a record requires a reason — it is logged and sent to
                System Admin for accountability.
            </p>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:10px;margin-top:10px;">
                <select id="storageFilterCategory" class="admin-input">
                    <option value="">All Categories</option>
                    ${allCategories.map(c => `<option value="${c}" ${category===c?'selected':''}>${c}</option>`).join('')}
                </select>
                <input id="storageFilterSearch" class="admin-input" placeholder="Search Admission No / Name" value="${filters.search || ''}">
                <input id="storageFilterFrom" type="date" class="admin-input" value="${fromDate}">
                <input id="storageFilterTo" type="date" class="admin-input" value="${toDate}">
            </div>
            <div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap;">
                <button class="admin-btn-primary" onclick="hospitalApplyStorageFilter()"><i class="fas fa-filter"></i> Filter</button>
                <button class="admin-btn-secondary" onclick="hospitalClearStorageFilter()">Clear</button>
                <button class="admin-action-btn edit" onclick="hospitalGenerateStorageReport()"><i class="fas fa-chart-bar"></i> Generate Report (time frame)</button>
            </div>
        </div>
        <div id="storageReportArea"></div>
        <div class="admin-card">
            <div class="admin-card-title">Records (${records.length})</div>
            ${rows}
        </div>`;
}

window.hospitalApplyStorageFilter = function() {
    const filters = {
        category: document.getElementById('storageFilterCategory').value,
        search:   document.getElementById('storageFilterSearch').value,
        fromDate: document.getElementById('storageFilterFrom').value,
        toDate:   document.getElementById('storageFilterTo').value
    };
    window._hospitalStorageFilters = filters;
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    document.getElementById('hospitalMain').innerHTML = hospitalStorageHTML(user, filters);
};

window.hospitalClearStorageFilter = function() {
    window._hospitalStorageFilters = {};
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    document.getElementById('hospitalMain').innerHTML = hospitalStorageHTML(user, {});
};

window.hospitalGenerateStorageReport = function() {
    const from = document.getElementById('storageFilterFrom').value;
    const to   = document.getElementById('storageFilterTo').value;
    if (!from || !to) return alert('Select both a "From" and "To" date to generate a time-frame report.');
    const data = getData();
    const records = (data.hospitalStorage || []).filter(r => {
        const d = r.timestamp.slice(0, 10);
        return d >= from && d <= to;
    });
    const tally = {};
    let totalAmount = 0;
    records.forEach(r => {
        tally[r.category] = (tally[r.category] || 0) + 1;
        totalAmount += r.amount || 0;
    });
    const rows = Object.entries(tally).map(([cat, count]) => `
        <div style="display:flex;justify-content:space-between;padding:0.4rem 0;border-bottom:1px solid var(--border);font-size:0.85rem;">
            <span>${cat}</span><strong style="color:var(--purple-light);">${count}</strong>
        </div>`).join('');
    document.getElementById('storageReportArea').innerHTML = `
        <div class="admin-card" style="margin-bottom:1rem;border:2px solid var(--purple);">
            <div class="admin-card-title">📊 Storage Report — ${from} → ${to}</div>
            <div style="margin-top:10px;">${rows || '<p style="color:var(--text-secondary);font-size:0.85rem;">No records in this range.</p>'}</div>
            <div style="margin-top:10px;font-size:0.85rem;">
                <strong>Total Records:</strong> ${records.length} &nbsp;|&nbsp;
                <strong>Total Amount Involved:</strong> <span style="color:var(--success);">KSh ${totalAmount.toLocaleString()}</span>
            </div>
        </div>`;
};

window.hospitalDeleteStorageRecord = function(recordId) {
    const reason = prompt('Reason for deleting this record (required for accountability):');
    if (!reason) return;
    const data = getData();
    const record = (data.hospitalStorage || []).find(r => r.id === recordId);
    if (!record) return;
    data.hospitalStorage = data.hospitalStorage.filter(r => r.id !== recordId);
    data.sysAdminReceived = data.sysAdminReceived || [];
    data.sysAdminReceived.push({
        id: 'SAR-' + Date.now(),
        from: 'Hospital', fromRole: 'hospital',
        subject: `Deleted Record — ${record.studentName} (${record.category})`,
        message: `Category: ${record.category}. Student: ${record.studentName} (${record.studentId}). Original detail: ${record.description}${record.amount ? ' — KSh ' + record.amount.toLocaleString() : ''}. Reason for deletion: ${reason}.`,
        timestamp: new Date().toISOString(), read: false
    });
    saveData(data);
    alert('✅ Record deleted. Reason logged and sent to System Admin for accountability.');
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    document.getElementById('hospitalMain').innerHTML = hospitalStorageHTML(user, window._hospitalStorageFilters || {});
};

/* ── Report ── */
function hospitalReportHTML(user) {
    const data    = getData() || {};
    const visits  = data.hospitalVisits || [];
    const records = data.medicalRecords || [];
    const bills   = data.hospitalBills || [];

    const pending     = visits.filter(v => v.status === 'pending').length;
    const seen        = visits.filter(v => v.status === 'seen').length;
    const rejected     = visits.filter(v => v.status === 'rejected').length;
    const referred     = records.filter(r => r.referral).length;
    const treatedHere  = records.filter(r => !r.referral).length;
    const totalBilled  = bills.reduce((s,b) => s+(b.amount||0), 0);

    const visitBars = records.map(r => ({
        label: (r.studentName || '?').split(' ')[0],
        value: r.cost || 0,
        color: r.referral ? '#ef4444' : '#10b981'
    }));

    return `
        <div class="admin-section-head">📊 Hospital Report</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">Treatment Cost by Student</div>
            <div style="overflow-x:auto;margin-top:10px;">
                ${svgBarChart(visitBars.length ? visitBars : [{label:'No data',value:0,color:'#3a2d6e'}])}
            </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1rem;margin-bottom:1rem;">
            <div class="admin-card" style="text-align:center;">
                <div class="admin-card-title">Visit Status</div>
                <div style="display:flex;justify-content:center;margin-top:10px;">
                    ${svgDonutChart([{value:seen||0.0001,color:'#10b981'},{value:pending||0.0001,color:'#f59e0b'},{value:rejected||0.0001,color:'#ef4444'}])}
                </div>
                <div style="font-size:0.75rem;margin-top:8px;">
                    <span style="color:var(--success);">● Attended ${seen}</span>&nbsp;
                    <span style="color:var(--warning);">● Pending ${pending}</span>&nbsp;
                    <span style="color:var(--danger);">● Rejected ${rejected}</span>
                </div>
            </div>
            <div class="admin-card" style="text-align:center;">
                <div class="admin-card-title">Treatment Outcome</div>
                <div style="display:flex;justify-content:center;margin-top:10px;">
                    ${svgDonutChart([{value:treatedHere||0.0001,color:'#10b981'},{value:referred||0.0001,color:'#ef4444'}])}
                </div>
                <div style="font-size:0.75rem;margin-top:8px;">
                    <span style="color:var(--success);">● Treated here ${treatedHere}</span>&nbsp;
                    <span style="color:var(--danger);">● Referred ${referred}</span>
                </div>
            </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:1rem;">
            <div class="stat-card"><h3>${visits.length}</h3><p>Total Requests</p></div>
            <div class="stat-card"><h3 style="color:var(--success);">${records.length}</h3><p>Records Created</p></div>
            <div class="stat-card"><h3 style="color:var(--danger);">${referred}</h3><p>Referred Out</p></div>
            <div class="stat-card"><h3 style="color:var(--purple-light);">${bills.length}</h3><p>Bills Issued</p></div>
            <div class="stat-card"><h3 style="color:var(--success);">KSh ${totalBilled.toLocaleString()}</h3><p>Total Billed</p></div>
        </div>`;
}

/* ── Window Actions ── */
window.hospitalOpenMedicalForm = function(visitId) {
    const target = document.getElementById('hospitalMain');
    if (target) target.innerHTML = hospitalMedicalFormHTML(visitId);
};

window.hospitalToggleReferral = function(val) {
    const wrap = document.getElementById('mfReferralReasonWrap');
    if (wrap) wrap.style.display = val === 'yes' ? 'block' : 'none';
};

window.hospitalRejectVisit = function(visitId) {
    const reason = prompt('Reason for rejecting this visit request:');
    if (!reason) return;
    const data = getData();
    const visit = (data.hospitalVisits || []).find(v => v.id === visitId);
    if (!visit) return;
    visit.status = 'rejected';
    visit.rejectionReason = reason;
    saveData(data);
    alert(`❌ Visit rejected. Student will see: "${reason}"`);
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    document.getElementById('hospitalMain').innerHTML = hospitalReceivedHTML(user);
   
    data.hospitalStorage = data.hospitalStorage || [];
data.hospitalStorage.push({
    id: 'HS-' + Date.now(), category: 'Rejected Visit',
    studentId: visit.studentId, studentName: visit.studentName, department: visit.department,
    description: `Visit rejected — Reason: ${reason}`,
    timestamp: new Date().toISOString()
});

data.hospitalStorage = data.hospitalStorage || [];
data.hospitalStorage.push({
    id: 'HS-' + Date.now(), category: 'Medical Record',
    studentId, studentName, department,
    description: `Diagnosis: ${diagnosis}. Treatment: ${treatment}.`,
    amount: cost,
    timestamp: new Date().toISOString()
});

data.hospitalStorage = data.hospitalStorage || [];
data.hospitalStorage.push({
    id: 'HS-' + Date.now(), category: 'Bill Sent to Finance',
    studentId: bill.studentId, studentName: bill.studentName, department: bill.department,
    description: bill.description, amount: bill.amount,
    timestamp: new Date().toISOString()
});

data.hospitalStorage = data.hospitalStorage || [];
data.hospitalStorage.push({
    id: 'HS-' + Date.now() + Math.random().toString(36).slice(2,5), category: 'Bill Sent to Finance',
    studentId: b.studentId, studentName: b.studentName, department: b.department,
    description: b.description, amount: b.amount,
    timestamp: new Date().toISOString()
});


};



window.hospitalSubmitMedicalRecord = function(visitId, studentId, studentName, department) {
    const diagnosis = document.getElementById('mfDiagnosis')?.value.trim();
    const treatment = document.getElementById('mfTreatment')?.value.trim();
    const drugs     = document.getElementById('mfDrugs')?.value;
    const referral  = document.getElementById('mfReferral')?.value === 'yes';
    const refReason = document.getElementById('mfReferralReason')?.value.trim();
    const remarks   = document.getElementById('mfRemarks')?.value.trim();
    const cost      = parseFloat(document.getElementById('mfCost')?.value) || 0;
    if (!diagnosis || !treatment) return alert('Please fill in Diagnosis and Treatment fields.');
    const data = getData() || {};
    const stu  = (data.students || []).find(s => s.id === studentId);
    data.medicalRecords = data.medicalRecords || [];
    data.medicalRecords.push({
        id: 'MR-'+Date.now(), visitId, studentId, studentName, department,
        phone: stu?.phone || null,
        complaint: (data.hospitalVisits||[]).find(v=>v.id===visitId)?.purpose || '',
        diagnosis, treatment, drugsAvailable: drugs,
        referral, referralReason: refReason || null,
        doctorRemarks: remarks, cost, billedToFinance: false,
        recordedAt: new Date().toISOString()
    });
    const visit = (data.hospitalVisits||[]).find(v => v.id === visitId);
    if (visit) visit.status = 'seen';
    saveData(data);
    alert(`✅ Medical record for ${studentName} saved successfully.${cost > 0 ? ' Go to Medical Records to create a bill.' : ''}`);
    const user = JSON.parse(sessionStorage.getItem('currentUser') || 'null');
    const target = document.getElementById('hospitalMain');
    if (target) target.innerHTML = hospitalRecordsHTML(user);
};

window.hospitalCreateBill = function(recordId, studentId, studentName, department, cost, diagnosis) {
    if (!confirm(`Create a bill for ${studentName}?\n\nAmount: KSh ${Number(cost).toLocaleString()}\nFor: ${diagnosis}`)) return;
    const data = getData() || {};
    data.hospitalBills = data.hospitalBills || [];
    data.hospitalBills.push({
        id: 'HB-'+Date.now(), recordId, studentId, studentName, department,
        amount: Number(cost),
        description: `Medical treatment — ${diagnosis}`,
        sentToFinance: false,
        timestamp: new Date().toISOString()
    });
    const record = (data.medicalRecords||[]).find(r => r.id === recordId);
    if (record) record.billedToFinance = true;
    saveData(data);
    alert('✅ Bill created! Go to Billing to send it to Finance.');
    const user = JSON.parse(sessionStorage.getItem('currentUser') || 'null');
    const target = document.getElementById('hospitalMain');
    if (target) target.innerHTML = hospitalBillingHTML(user);
};

window.hospitalSendSingleBill = function(billId) {
    const data = getData() || {};
    const bill = (data.hospitalBills||[]).find(b => b.id === billId);
    if (!bill) return;
    bill.sentToFinance = true;
    data.financeReceived = data.financeReceived || [];
    data.financeReceived.push({
        id: 'FIN-'+Date.now(),
        from: 'Hospital', fromRole: 'hospital',
        subject: `Medical Bill — ${bill.studentName}`,
        message: `Student: ${bill.studentName} (${bill.studentId}), Department: ${bill.department}. Treatment cost: KSh ${bill.amount.toLocaleString()}. ${bill.description}. Please add to student fee account.`,
        amount: bill.amount, studentId: bill.studentId, studentName: bill.studentName,
        timestamp: new Date().toISOString(), read: false, addedToFees: false
    });
    saveData(data);
    alert(`✅ Bill for ${bill.studentName} (KSh ${bill.amount.toLocaleString()}) sent to Finance.`);
    const user = JSON.parse(sessionStorage.getItem('currentUser') || 'null');
    const target = document.getElementById('hospitalMain');
    if (target) target.innerHTML = hospitalBillingHTML(user);
};

window.hospitalSendAllBillsToFinance = function() {
    const data   = getData() || {};
    const unsent = (data.hospitalBills||[]).filter(b => !b.sentToFinance);
    if (!unsent.length) return;
    data.financeReceived = data.financeReceived || [];
    unsent.forEach(b => {
        b.sentToFinance = true;
        data.financeReceived.push({
            id: 'FIN-'+Date.now(),
            from: 'Hospital', fromRole: 'hospital',
            subject: `Medical Bill — ${b.studentName}`,
            message: `Student: ${b.studentName} (${b.studentId}), Department: ${b.department}. Treatment cost: KSh ${b.amount.toLocaleString()}. ${b.description}. Please add to student fee account.`,
            amount: b.amount, studentId: b.studentId, studentName: b.studentName,
            timestamp: new Date().toISOString(), read: false, addedToFees: false
        });
    });
    saveData(data);
    alert(`✅ ${unsent.length} bill(s) sent to Finance successfully.`);
    const user = JSON.parse(sessionStorage.getItem('currentUser') || 'null');
    const target = document.getElementById('hospitalMain');
    if (target) target.innerHTML = hospitalBillingHTML(user);
};
 
/* ══════════════════════════════════════════
   LIBRARY PORTAL — Placeholder
══════════════════════════════════════════ */
function renderLibraryPanel(user) {
    return `
    <div class="admin-layout">
        <div class="admin-sidenav">
            <div class="admin-sidenav-title"><i class="fas fa-book"></i> Library Menu</div>
            <button class="admin-nav-btn active" onclick="librarySection('overview',this)"><i class="fas fa-tachometer-alt"></i> Overview</button>
            <button class="admin-nav-btn" onclick="librarySection('catalog',this)"><i class="fas fa-book-open"></i> Book Catalog</button>
            <button class="admin-nav-btn" onclick="librarySection('borrowing',this)"><i class="fas fa-exchange-alt"></i> Borrowing</button>
            <button class="admin-nav-btn" onclick="librarySection('fines',this)"><i class="fas fa-coins"></i> Fines → Finance</button>
            <button class="admin-nav-btn" onclick="librarySection('report',this)"><i class="fas fa-chart-bar"></i> Reports</button>
        </div>
        <div class="admin-main" id="libraryMain">${libraryPlaceholder('Overview')}</div>
    </div>`;
}

window.librarySection = function(section, btn) {
    document.querySelectorAll('.admin-nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const labels = { overview: 'Overview', catalog: 'Book Catalog', borrowing: 'Borrowing', fines: 'Fines → Finance', report: 'Reports' };
    document.getElementById('libraryMain').innerHTML = libraryPlaceholder(labels[section] || 'Overview');
};

function libraryPlaceholder(label) {
    return `
        <div class="admin-section-head">📚 ${label}</div>
        <div class="admin-card">
            <p style="color:var(--text-secondary);font-size:0.85rem;">
                This section is reserved for the Library portal and is coming soon.
            </p>
        </div>`;
}

/* ══════════════════════════════════════════
   STUDENT PORTAL — Consolidated
══════════════════════════════════════════ */
function renderStudentPanel(user) {
    return `
    <div class="admin-layout">
        <div class="admin-sidenav">
            <div class="admin-sidenav-title"><i class="fas fa-user-graduate"></i> Student Menu</div>
            <button class="admin-nav-btn active" onclick="studentSection('idrequest',this)"><i class="fas fa-id-card"></i> ID Request</button>
            <button class="admin-nav-btn" onclick="studentSection('received',this)"><i class="fas fa-inbox"></i> Received</button>
            <button class="admin-nav-btn" onclick="studentSection('attendance',this)"><i class="fas fa-calendar-check"></i> Attendance</button>
            <button class="admin-nav-btn" onclick="studentSection('examreg',this)"><i class="fas fa-file-signature"></i> Exam Registration</button>
            <button class="admin-nav-btn" onclick="studentSection('fee',this)"><i class="fas fa-wallet"></i> Fee Statement</button>
            <button class="admin-nav-btn" onclick="studentSection('results',this)"><i class="fas fa-graduation-cap"></i> Results</button>
            <button class="admin-nav-btn" onclick="studentSection('profile',this)"><i class="fas fa-user"></i> Profile</button>
           <button class="admin-nav-btn" onclick="studentSection('hospital',this)"><i class="fas fa-hospital"></i> Hospital</button>
            ${(getData().messActivatedStudents||[]).includes(user.id) ? `<button class="admin-nav-btn" onclick="studentSection('mess',this)"><i class="fas fa-utensils"></i> Mess / Meals</button>` : ''}
            <button class="admin-nav-btn" onclick="studentSection('meals',this)"><i class="fas fa-utensils"></i> Meals</button>
            <button class="admin-nav-btn" onclick="studentSection('report',this)"><i class="fas fa-chart-bar"></i> Report</button>
            
        </div>
        <div class="admin-main" id="studentMain">
            ${studentIDRequestHTML(user)}
        </div>
    </div>`;
}

window.studentSection = function(section, btn) {
    document.querySelectorAll('.admin-nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    const map = {
        idrequest:  () => studentIDRequestHTML(user),
        received:   () => studentReceivedHTML(user),
        attendance: () => studentAttendanceHTML(user),
        examreg:    () => studentExamRegistrationHTML(user),
        fee:        () => studentFeeStatementHTML(user),
        results:    () => studentResultsHTML(user),
        profile:    () => studentProfileHTML(user),
        hospital:   () => studentHospitalHTML(user),
        mess:       () => studentMessHTML(user),
         meals:      () => studentMealsHTML(user),
        report:     () => studentReportHTML(user),
       
    };
    document.getElementById('studentMain').innerHTML = (map[section] || (() => studentIDRequestHTML(user)))();
};

/* ── ID Request with Fill Details Modal ── */
 function studentIDRequestHTML(user) {
    const data = getData();
    const myRequests = (data.idRequests || []).filter(r => r.studentId === user.id);

    const reqCards = myRequests.length === 0
        ? `<p style="color:var(--text-secondary);">No requests yet.</p>`
        : myRequests.slice().reverse().map(r => {
            let statusText = '';
            if (r.status === 'pending_admin') statusText = '🔐 With System Admin';
            else if (r.status === 'pending_finance') statusText = '💰 With Finance';
            else if (r.status === 'ready') statusText = '✅ Ready';

            return `
            <div class="admin-card" style="margin-bottom:12px;">
                <div style="display:flex;justify-content:space-between;">
                    <strong>${r.type === 'new' ? 'New ID' : 'Replacement ID'}</strong>
                    <span class="admin-role-pill">${statusText}</span>
                </div>
                <div style="font-size:0.8rem;color:var(--text-secondary);margin-top:8px;">
                    ${r.fullName ? r.fullName + '<br>' : ''}
                    ${r.fee > 0 ? `Fee: KSh ${r.fee} · ` : ''}Requested: ${new Date(r.dateRequested).toLocaleDateString()}
                </div>
            </div>`;
        }).join('');
        
    return `
        <div class="admin-section-head">🪪 ID Request</div>
        <div class="admin-card">
            <div class="admin-card-title">➕ Request an ID</div>
            
            <select id="idReqType" class="admin-input" style="margin:12px 0;">
                <option value="new">New ID (no charge)</option>
                <option value="replacement">Replacement ID — KSh 500</option>
            </select>

            <div style="display:flex; gap:10px;">
                <button class="admin-btn-primary" style="flex:1;" onclick="studentSubmitIDRequest('${user.id}')">
                    🚀 Submit Request
                </button>
                <button class="admin-btn-secondary" style="flex:1;" onclick="showIDFillModal('${user.id}')">
                    ✍️ Fill Details
                </button>
            </div>
        </div>

        <div class="admin-card" style="margin-top:1rem;">
            <div class="admin-card-title">My Requests (${myRequests.length})</div>
            ${reqCards}
        </div>`;
}

// Toggle Submit Button for New ID
window.toggleSubmitButton = function(studentId) {
    const type = document.getElementById('idReqType').value;
    const submitBtn = document.getElementById('submitBtn');
    
    if (type === 'new') {
        submitBtn.style.opacity = '1';
        submitBtn.style.cursor = 'pointer';
    } else {
        submitBtn.style.opacity = '0.6';
        submitBtn.style.cursor = 'not-allowed';
    }
};

// Show Fill Details Modal
window.showIDFillModal = function(studentId) {
    const type = document.getElementById('idReqType').value;
    
    const modal = document.createElement('div');
    modal.style.cssText = `position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);z-index:9999;display:flex;align-items:center;justify-content:center;`;
    
    modal.innerHTML = `
        <div style="background:#1e1e2e;width:90%;max-width:720px;border-radius:12px;padding:25px;max-height:92vh;overflow-y:auto;">
            <h2 style="color:#a78bfa;margin-bottom:20px;">📋 Fill Student Identity Card Details</h2>
            
            <div class="grid" style="display:grid;grid-template-columns:1fr 1fr;gap:15px;">
                <div><label>Full Name</label><input id="fName" class="admin-input" placeholder="Full Name" required></div>
                <div><label>Course</label><input id="fCourse" class="admin-input" placeholder="Course"></div>
                <div><label>Level</label><input id="fLevel" class="admin-input" placeholder="e.g. Diploma 3"></div>
                <div><label>Date of Birth</label><input id="fDOB" type="date" class="admin-input"></div>
                <div><label>National ID / Passport</label><input id="fNationalID" class="admin-input"></div>
                <div><label>Reg / ADM No.</label><input id="fRegNo" class="admin-input"></div>
                <div><label>Department</label><input id="fDept" class="admin-input"></div>
                <div><label>Guardian Name</label><input id="fGuardian" class="admin-input"></div>
                <div><label>Guardian Tel</label><input id="fGuardianTel" class="admin-input"></div>
                <div><label>Place of Residence</label><input id="fResidence" class="admin-input"></div>
            </div>

            <div style="margin:25px 0 15px;">
                <h3 style="color:#a78bfa;">Consent for Use of Images</h3>
                <div style="height:180px;overflow-y:auto;background:#161622;padding:12px;font-size:0.85rem;border-radius:8px;">
                    ${document.querySelector('.consent-text') ? document.querySelector('.consent-text').innerHTML : 'I consent to the use of my image for institutional purposes...'}
                </div>
                <label><input type="checkbox" id="consentCheck"> I agree to the Consent for Use of Images</label>
            </div>

            <div style="display:flex;gap:12px;margin-top:20px;">
                <button class="admin-btn-primary" style="flex:1;" onclick="submitFullIDRequest('${studentId}', '${type}')">Submit Request + Consent</button>
                <button class="admin-btn-secondary" style="flex:1;" onclick="this.closest('div[style*=\"position:fixed\"]').remove()">Cancel</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
};

// Submit Full Request
window.submitFullIDRequest = function(studentId, type) {
    const consent = document.getElementById('consentCheck');
    if (!consent || !consent.checked) {
        alert("Please agree to the Consent for Use of Images");
        return;
    }

    const data = getData();
    const id = 'IDR-' + Date.now().toString().slice(-6);

    data.idRequests = data.idRequests || [];
    data.idRequests.push({
        id,
        studentId,
        type,
        fullName: document.getElementById('fName').value,
        course: document.getElementById('fCourse').value,
        level: document.getElementById('fLevel').value,
        fee: type === 'replacement' ? 500 : 0,
        status: 'pending_finance',
        dateRequested: new Date().toISOString(),
        consentGiven: true
    });

    saveData(data);
    alert("✅ ID Request with details submitted successfully!");
    document.querySelectorAll('div[style*="position:fixed"]').forEach(el => el.remove());
    document.getElementById('studentMain').innerHTML = studentIDRequestHTML({ id: studentId });
};

/* ── 2. Received ── */
function studentReceivedHTML(user) {
    const data = getData();
    const msgs = (data.studentNotifications || []).filter(n => n.studentId === user.id).slice().reverse();

    return `
        <div class="admin-section-head">📨 Received</div>
        <div class="admin-card">
            <div class="admin-card-title">Messages (${msgs.length})</div>
            ${msgs.length === 0
                ? '<p style="color:var(--text-secondary);font-size:0.85rem;margin-top:8px;">No messages yet.</p>'
                : msgs.map(n => `
                    <div style="padding:0.7rem 0;border-bottom:1px solid var(--border);">
                        <div style="display:flex;justify-content:space-between;">
                            <strong style="font-size:0.85rem;color:var(--purple-light);">${n.title || 'Notification'}</strong>
                            ${!n.seen ? '<span class="admin-role-pill">New</span>' : ''}
                        </div>
                        <div style="font-size:0.82rem;margin-top:4px;">${n.message}</div>
                        <div style="font-size:0.68rem;color:var(--text-secondary);margin-top:4px;">${new Date(n.timestamp).toLocaleString()}</div>
                    </div>`).join('')}
        </div>`;
}

// ==================== MEALS - IMPROVED VERSION ====================

function getCurrentTime() {
    return new Date();
}

function getMessSessionStatus(session) {
    const data = getData();
    const override = data.messWindowOverrides?.[session];
    
    // Manual override takes priority
    if (override !== null && override !== undefined) {
        return { 
            open: override === true, 
            reason: override ? null : 'Manually closed by Mess Supervisor',
            manual: true 
        };
    }

    const windows = {
        morning:   { start: 6, end: 8 },
        afternoon: { start: 12, end: 13.5 },
        evening:   { start: 18, end: 20 }
    };

    const now = getCurrentTime();
    const hour = now.getHours() + now.getMinutes()/60;
    const w = windows[session];

    const isOpen = hour >= w.start && hour < w.end;

    if (isOpen) {
        const minutesLeft = Math.floor((w.end - hour) * 60);
        return { 
            open: true, 
            reason: null, 
            manual: false,
            minutesLeft 
        };
    } else {
        return { 
            open: false, 
            reason: 'This session is closed. Please come back during serving hours.',
            manual: false 
        };
    }
}

function studentMealsHTML(user) {
    const data = getData();
    const isBoarder = (data.messBoarders || []).some(b => b.studentId === user.id);

    if (!isBoarder) {
        return `
            <div class="admin-section-head">🍽️ Meals</div>
            <div class="admin-card">
                <p style="color:var(--text-secondary);font-size:0.85rem;">
                    You are not currently registered for meal services. Contact the Dean of Students.
                </p>
            </div>`;
    }

    const today = new Date().toLocaleDateString('en-CA');
    const sessions = [
        { key:'morning',   label:'🌅 Morning (6:00–8:00 AM)', icon: '🌅' },
        { key:'afternoon', label:'☀️ Afternoon (12:00–1:30 PM)', icon: '☀️' },
        { key:'evening',   label:'🌙 Evening (6:00–8:00 PM)', icon: '🌙' }
    ];

    const myOrders = (data.mealOrders || []).filter(o => o.studentId === user.id && o.date === today);

    const sessionCards = sessions.map(s => {
        const status = getMessSessionStatus(s.key);
        const alreadyOrdered = myOrders.find(o => o.session === s.key);

        let statusHTML = '';
        if (status.open) {
            statusHTML = `<span style="color:var(--success);font-weight:600;">✅ Ordering Open • ${status.minutesLeft} min left</span>`;
        } else {
            statusHTML = `<span style="color:#888;font-weight:600;">🔒 Window Closed</span>`;
        }

        return `
        <div class="admin-card" style="margin-bottom:12px;">
            <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
                <strong>${s.icon} ${s.label}</strong>
                ${statusHTML}
            </div>
            
            ${status.reason ? `<div style="font-size:0.78rem;color:#f87171;margin-top:6px;">${status.reason}</div>` : ''}
            
            ${alreadyOrdered 
                ? `<div style="margin-top:10px;padding:8px;background:rgba(16,185,129,0.1);border-radius:8px;color:var(--success);font-size:0.85rem;">
                    ✅ Ordered: ${Object.values(alreadyOrdered.selections).join(', ')}
                   </div>`
                : status.open 
                    ? `<button class="admin-btn-primary" style="margin-top:12px;width:100%;" onclick="studentOpenMealForm('${s.key}')">🍽️ Order Now</button>`
                    : `<button class="admin-action-btn" disabled style="margin-top:12px;width:100%;">Window Closed</button>`
            }
        </div>`;
    }).join('');

    return `
        <div class="admin-section-head">🍽️ Meals</div>
        ${sessionCards}
        <div id="mealFormArea"></div>

        <div class="admin-card" style="margin-top:1.5rem;">
            <div class="admin-card-title">📜 Today's Orders</div>
            ${myOrders.length === 0 ? '<p style="color:var(--text-secondary);">No orders placed today.</p>' : 
            myOrders.map(o => `
                <div style="padding:10px;background:var(--bg-elevated);border-radius:10px;margin-bottom:8px;">
                    <strong>${o.session}</strong><br>
                    ${Object.values(o.selections).join(' • ')}
                </div>`).join('')}
        </div>

        <div class="admin-card" style="margin-top:1rem;">
            <div class="admin-card-title">⚠️ Mess Complaint</div>
            <textarea id="mealComplaintText" class="admin-input" rows="3" placeholder="Describe your issue..."></textarea>
            <button class="admin-btn-primary" style="margin-top:8px;" onclick="studentSubmitMealComplaint('${user.id}','${user.name}')">Send to Dean</button>
        </div>`;
}

window.studentOpenMealForm = function(session) {
    const status = getMessSessionStatus(session);
    if (!status.open) {
        alert("❌ Ordering window for this session is closed.\n\n" + (status.reason || "Please try again during serving hours."));
        return;
    }

    const data = getData();
    const cats = (data.mealCategories || []).filter(c => c.session === session);

    if (!cats.length) {
        document.getElementById('mealFormArea').innerHTML = `
            <div class="admin-card"><p style="color:var(--text-secondary);">No menu has been set for this session yet by the Mess.</p></div>`;
        return;
    }

    let html = `<div class="admin-card" style="border:2px solid var(--purple);">`;
    html += `<div class="admin-card-title">🍽️ Order for ${session} — Choose one per category</div>`;

    cats.forEach(cat => {
        html += `
            <div style="margin:15px 0 10px;">
                <label style="font-weight:700;color:var(--purple-light);">${cat.name}</label>
                <div style="margin-top:8px;display:flex;flex-direction:column;gap:8px;">`;
        
        cat.meals.forEach(m => {
            html += `
                <label style="display:flex;gap:10px;align-items:center;font-size:0.9rem;cursor:pointer;">
                    <input type="radio" name="cat_${cat.id}" value="${m.name}">
                    ${m.name}
                </label>`;
        });
        html += `</div></div>`;
    });

    html += `
        <button class="admin-btn-primary" style="margin-top:15px;width:100%;" onclick="studentSubmitMealOrder('${session}')">
            Submit Order
        </button></div>`;

    document.getElementById('mealFormArea').innerHTML = html;
};

window.studentSubmitMealOrder = function(session) {
    const status = getMessSessionStatus(session);
    if (!status.open) {
        alert("❌ This ordering window has closed.");
        return;
    }

    const data = getData();
    const cats = (data.mealCategories || []).filter(c => c.session === session);
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    const selections = {};

    for (const cat of cats) {
        const selected = document.querySelector(`input[name="cat_${cat.id}"]:checked`);
        if (!selected) {
            return alert(`Please select an item in category "${cat.name}"`);
        }
        selections[cat.name] = selected.value;
    }

    data.mealOrders = data.mealOrders || [];
    data.mealOrders.push({
        id: 'ORD-' + Date.now(),
        studentId: user.id,
        studentName: user.name,
        session,
        date: new Date().toLocaleDateString('en-CA'),
        selections,
        timestamp: new Date().toISOString()
    });

    saveData(data);
    alert('✅ Order placed successfully!');
    document.getElementById('studentMain').innerHTML = studentMealsHTML(user);
};

// ==================== MESS SIDE ====================

function messMenuHTML() {
    const data = getData();
    const sessions = [
        {key:'morning', label:'Morning (6:00–8:00 AM)'},
        {key:'afternoon', label:'Afternoon (12:00–1:30 PM)'},
        {key:'evening', label:'Evening (6:00–8:00 PM)'}
    ];

    let html = `<div class="admin-section-head">📋 Categories & Menu</div>`;

    sessions.forEach(s => {
        const cats = (data.mealCategories || []).filter(c => c.session === s.key);
        const isOpen = getMessSessionStatus(s.key).open;

        html += `
        <div class="admin-card" style="margin-bottom:1rem;">
            <div style="display:flex;justify-content:space-between;align-items:center;">
                <div class="admin-card-title">${s.label}</div>
                <button onclick="toggleWindow('${s.key}')" style="padding:6px 12px;border-radius:9999px;font-size:0.8rem;">
                    ${isOpen ? '🔒 Close Window' : '✅ Open Window'}
                </button>
            </div>`;

        // ... rest of your category rendering code (addCategory, meals, etc.)
        // I kept your existing logic here for brevity
        html += `<!-- Your existing renderSession logic goes here -->`;
        // (You can keep your original renderSession if you prefer)
    });

    return html;
}

window.toggleWindow = function(session) {
    const data = getData();
    if (!data.messWindowOverrides) data.messWindowOverrides = {};
    
    const current = data.messWindowOverrides[session];
    data.messWindowOverrides[session] = !current; // toggle
    
    saveData(data);
    document.getElementById('messMain').innerHTML = messMenuHTML();
    alert(`Window for ${session} has been ${data.messWindowOverrides[session] ? 'opened' : 'closed'}.`);
};


window.studentSubmitMealComplaint = function(studentId, studentName) {
    const text = document.getElementById('mealComplaintText').value.trim();
    if (!text) return alert('Please describe the issue.');
    const data = getData();
    const student = data.students.find(s => s.id === studentId);
    data.deanComplaints = data.deanComplaints || [];
    data.deanComplaints.push({
        id: 'DC-' + Date.now(), source: 'student', studentId, studentName,
        department: student?.department || '', category: 'Mess',
        complaint: text, timestamp: new Date().toISOString(), status: 'pending'
    });
    saveData(data);
    alert('✅ Complaint sent to Dean of Students.');
    document.getElementById('mealComplaintText').value = '';
};

function studentHospitalHTML(user) {
    const data = getData();
    const myVisits = (data.hospitalVisits || []).filter(v => v.studentId === user.id).slice().reverse();

    const statusMap = {
        pending:  ['🕒 Awaiting Hospital Review', 'var(--warning)'],
        seen:     ['✅ Attended — Treatment Recorded', 'var(--success)'],
        rejected: ['❌ Rejected', 'var(--danger)']
    };

    const cards = myVisits.length === 0
        ? `<p style="color:var(--text-secondary);font-size:0.85rem;">No visits yet.</p>`
        : myVisits.map(v => {
            const [label, color] = statusMap[v.status] || ['—', 'var(--border)'];
            const record = (data.medicalRecords || []).find(r => r.visitId === v.id);
            const bill    = record ? (data.hospitalBills || []).find(b => b.recordId === record.id) : null;
            const billedEntry = bill ? (data.financeReceived || []).find(f => f.id && f.studentId === v.studentId && f.amount === bill.amount) : null;

            return `
            <div style="padding:1rem;background:var(--bg-elevated);border-radius:14px;border-left:4px solid ${color};margin-bottom:10px;">
                <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:6px;">
                    <strong style="color:${color};">${label}</strong>
                    <span style="font-size:0.68rem;color:var(--text-secondary);">${new Date(v.requestedAt).toLocaleDateString()}</span>
                </div>
                <div style="font-size:0.82rem;margin-top:6px;color:var(--text-secondary);">${v.purpose}</div>
                ${v.status === 'rejected' ? `
                <div style="font-size:0.78rem;margin-top:6px;padding:6px 10px;background:rgba(239,68,68,.08);border-radius:8px;color:var(--danger);">
                    Reason: ${v.rejectionReason}
                </div>` : ''}
                ${record ? `
                <div style="font-size:0.78rem;margin-top:6px;">
                    <strong>Diagnosis:</strong> ${record.diagnosis}<br>
                    <strong>Treatment:</strong> ${record.treatment}
                    ${record.referral ? `<br><span style="color:var(--danger);">🚨 Referred: ${record.referralReason}</span>` : ''}
                </div>` : ''}
                ${bill ? `
                <div style="font-size:0.78rem;margin-top:6px;padding:6px 10px;background:rgba(16,185,129,.08);border-radius:8px;color:var(--success);">
                    💰 Billed: KSh ${bill.amount.toLocaleString()} ${bill.sentToFinance ? '— sent to Finance' : '— pending'}
                </div>` : ''}
            </div>`;
        }).join('');

    return `
        <div class="admin-section-head">🏥 Hospital</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">➕ Request a Hospital Visit</div>
            <textarea id="hospPurpose" class="admin-input" rows="3" placeholder="Describe your complaint (e.g. fever, headache, injury)..." style="margin-top:8px;"></textarea>
            <button class="admin-btn-primary" style="margin-top:10px;" onclick="studentSubmitHospitalRequest('${user.id}')">
                <i class="fas fa-paper-plane"></i> Send to Hospital
            </button>
        </div>
        <div class="admin-card">
            <div class="admin-card-title">My Visits (${myVisits.length})</div>
            ${cards}
        </div>`;
}

window.studentSubmitHospitalRequest = function(studentId) {
    const purpose = document.getElementById('hospPurpose')?.value.trim();
    if (!purpose) return alert('Please describe your complaint.');
    const data = getData();
    const student = data.students.find(s => s.id === studentId);
    data.hospitalVisits = data.hospitalVisits || [];
    data.hospitalVisits.push({
        id: 'HV-' + Date.now(), studentId, studentName: student?.name || '',
        department: student?.department || '', purpose,
        requestedAt: new Date().toISOString(), status: 'pending'
    });
    saveData(data);
    alert('✅ Request sent to Hospital. Track its progress below.');
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    document.getElementById('studentMain').innerHTML = studentHospitalHTML(user);
};

/* ── 3. Attendance ── */
function studentAttendanceHTML(user) {
    const data = getData();
    const todayName = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    const now = new Date();

    const mySessions = (data.timetables || []).filter(t =>
        t.department === user.department && (t.class === user.class || !t.class)
    );

    const attPct = user.attendance ? Math.round((user.attendance.attended / user.attendance.total) * 100) : 0;

    const sessionRows = mySessions.length === 0
        ? `<p style="color:var(--text-secondary);font-size:0.85rem;">No timetable uploaded yet. Your Class Teacher will upload it once classes begin.</p>`
        : mySessions.map(t => {
            const isToday = t.day === todayName;
            const endDateTime = new Date(`${now.toDateString()} ${t.endTime}`);
            const hasEnded = isToday && now > endDateTime;

            const existing = (data.attendanceConfirmations || []).find(c =>
                c.studentId === user.id && c.timetableId === t.id &&
                new Date(c.date).toDateString() === now.toDateString()
            );

            let buttonHTML;
            if (existing) {
                const label = existing.status === 'confirmed' ? '✅ Confirmed by Lecturer'
                    : existing.status === 'rejected' ? '❌ Rejected by Lecturer'
                    : '🕒 Awaiting Lecturer Review';
                buttonHTML = `<span class="admin-role-pill">${label}</span>`;
            } else if (hasEnded) {
                buttonHTML = `<button class="admin-btn-primary" onclick="studentConfirmAttendance('${t.id}','${user.id}')">
                    <i class="fas fa-check"></i> Confirm Attendance
                </button>`;
            } else {
                buttonHTML = `<button class="admin-action-btn" disabled style="background:var(--bg-elevated);color:var(--text-secondary);border:1px solid var(--border);cursor:not-allowed;">
                    🔒 Available after ${t.endTime}
                </button>`;
            }

            return `
            <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;padding:0.8rem 0;border-bottom:1px solid var(--border);">
                <div>
                    <strong style="font-size:0.85rem;">${t.unit}</strong>
                    <span style="font-size:0.7rem;color:var(--text-secondary);margin-left:6px;">(${t.unitCode})</span>
                    <div style="font-size:0.72rem;color:var(--text-secondary);">${t.day} · ${t.startTime} – ${t.endTime}</div>
                </div>
                ${buttonHTML}
            </div>`;
        }).join('');

    return `
        <div class="admin-section-head">📅 Attendance</div>
        <div class="stat-card" style="margin-bottom:1rem;max-width:240px;">
            <i class="fas fa-calendar-check"></i>
            <h3 style="color:${attPct >= 75 ? 'var(--success)' : 'var(--danger)'}">${attPct}%</h3>
            <p>${user.attendance?.attended || 0}/${user.attendance?.total || 0} classes confirmed</p>
        </div>
        <div class="admin-card">
            <div class="admin-card-title">My Timetable & Confirmation</div>
            <p style="font-size:0.75rem;color:var(--text-secondary);margin-bottom:10px;">
                The confirm button unlocks automatically once a class session has ended. Confirming sends a request to your Lecturer for verification — just like signing the register after class.
            </p>
            ${sessionRows}
        </div>`;
}

window.studentConfirmAttendance = function(timetableId, studentId) {
    const data = getData();
    data.attendanceConfirmations = data.attendanceConfirmations || [];
    data.attendanceConfirmations.push({
        id: 'ATC-' + Date.now().toString().slice(-6),
        studentId, timetableId,
        date: new Date().toISOString(),
        status: 'pending_lecturer'
    });
    saveData(data);
    alert('✅ Attendance confirmation sent to your Lecturer for review.');
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    document.getElementById('studentMain').innerHTML = studentAttendanceHTML(user);
};

/* ── 4. Exam Registration ── */
function studentExamRegistrationHTML(user) {
    const data = getData();
    const regs = data.examRegistrations.filter(r => r.studentId === user.id);

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
    const progressStages = ['pending_deo', 'pending_hod', 'pending_finance', 'pending_deputy', 'pending_exam', 'approved'];
    const stageLabels    = ['DEO', 'HOD', 'Finance', 'Deputy', 'Exam Office', 'Complete'];

    let listHTML = '';
    if (regs.length === 0) {
        listHTML = `<p style="color:var(--text-secondary);font-size:0.85rem;">No registration yet. Click above to register.</p>`;
    } else {
        listHTML = regs.map(reg => {
            const currentIdx = progressStages.indexOf(reg.status);
            const isBlocked  = reg.status === 'rejected' || reg.status === 'blocked';
            const isDone     = reg.status === 'approved' || reg.status === 'waived';

            return `
            <div style="margin-top:1rem;background:var(--bg-elevated);border:1px solid var(--border);border-radius:14px;padding:1rem;">
                <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px;margin-bottom:12px;">
                    <div style="font-size:0.78rem;font-weight:700;color:var(--text-secondary);">
                        Reg ID: <span style="color:var(--purple-light)">${reg.id}</span>
                    </div>
                    <div style="font-size:0.75rem;font-weight:700;padding:3px 12px;border-radius:20px;
                        background:${isDone ? 'rgba(16,185,129,.15)' : isBlocked ? 'rgba(239,68,68,.15)' : 'rgba(108,63,207,.15)'};
                        color:${isDone ? 'var(--success)' : isBlocked ? 'var(--danger)' : 'var(--purple-light)'};
                        border:1px solid ${isDone ? 'var(--success)' : isBlocked ? 'var(--danger)' : 'var(--purple)'};">
                        ${statusMap[reg.status] || reg.status}
                    </div>
                </div>
                <div style="display:flex;align-items:flex-start;overflow-x:auto;padding-bottom:4px;">
                    ${stageLabels.map((label, idx) => {
                        const done   = idx < currentIdx || isDone;
                        const active = idx === currentIdx && !isDone;
                        const color  = done ? 'var(--success)' : active ? (isBlocked ? 'var(--danger)' : 'var(--purple-light)') : 'var(--border)';
                        const isLast = idx === stageLabels.length - 1;
                        return `
                        <div style="display:flex;align-items:center;flex:1;min-width:52px;">
                            <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0;">
                                <div style="width:26px;height:26px;border-radius:50%;background:${color};display:flex;align-items:center;justify-content:center;font-size:0.65rem;font-weight:800;color:#fff;">
                                    ${done ? '✓' : idx + 1}
                                </div>
                                <div style="font-size:0.58rem;color:${color};margin-top:3px;text-align:center;white-space:nowrap;">${label}</div>
                            </div>
                            ${!isLast ? `<div style="height:2px;flex:1;background:${done ? 'var(--success)' : 'var(--border)'};margin-bottom:14px;"></div>` : ''}
                        </div>`;
                    }).join('')}
                </div>
                ${reg.rejectionReason ? `
                <div style="margin-top:8px;font-size:0.75rem;color:var(--danger);background:rgba(239,68,68,.08);border:1px solid var(--danger);border-radius:8px;padding:6px 10px;">
                    ❌ Rejected by ${reg.rejectedBy || 'Office'}: ${reg.rejectionReason}
                </div>` : ''}
                ${reg.deputyDeadline ? `
                <div style="margin-top:6px;font-size:0.72rem;color:var(--warning);background:rgba(245,158,11,.08);border:1px solid var(--warning);border-radius:8px;padding:6px 10px;">
                    ⏰ Report to Deputy Principal before: <strong>${reg.deputyDeadline}</strong>
                </div>` : ''}
                <div style="display:flex;gap:16px;margin-top:10px;flex-wrap:wrap;font-size:0.75rem;color:var(--text-secondary);">
                    <span>📚 <strong style="color:var(--text-primary)">${reg.units.length}</strong> units</span>
                    <span>💰 <strong style="color:var(--text-primary)">KSh ${reg.totalExamFee.toLocaleString()}</strong></span>
                    <span>📅 <strong style="color:var(--text-primary)">${new Date(reg.submittedDate).toLocaleDateString()}</strong></span>
                </div>
            </div>`;
        }).join('');
    }

    return `
        <div class="admin-section-head">📝 Exam Registration</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <button class="btn-primary" onclick="startExamRegistration()">
                <i class="fas fa-file-signature"></i> New CBET Exam Registration
            </button>
        </div>
        <div class="admin-card">
            <div class="admin-card-title">My Exam Registrations (${regs.length})</div>
            ${listHTML}
        </div>`;
}

/* ── 5. Fee Statement ── */
function studentFeeStatementHTML(user) {
    const totalFee = user.totalFee || 0;
    const paid = totalFee - (user.feeBalance || 0);
    const balance = user.feeBalance || 0;
    const pct = totalFee ? Math.round((paid / totalFee) * 100) : 0;
    const history = user.paymentHistory || [];

    return `
        <div class="admin-section-head">💳 Fee Statement</div>
        <div class="admin-card" style="background:${balance === 0 ? 'rgba(16,185,129,.12)' : 'rgba(245,158,11,.1)'};border-color:${balance === 0 ? 'var(--success)' : 'var(--warning)'};margin-bottom:1rem;">
            <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px;">
                <div>
                    <div style="font-size:0.7rem;color:var(--text-secondary);">FEE STATUS</div>
                    <strong style="color:${balance === 0 ? 'var(--success)' : 'var(--warning)'};font-size:1.05rem;">
                        ${balance === 0 ? '✅ Fully Paid' : '⚠️ Balance Outstanding'}
                    </strong>
                    <div style="font-size:0.8rem;color:var(--text-secondary);">${user.department || ''}</div>
                </div>
                <div style="text-align:right;">
                    <div style="font-size:0.7rem;color:var(--text-secondary);">BALANCE</div>
                    <strong style="font-size:1.3rem;">KSh ${balance.toLocaleString()}</strong>
                </div>
            </div>
        </div>

        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px;margin-bottom:1rem;">
            <div class="stat-card"><h3>KSh ${totalFee.toLocaleString()}</h3><p>Total Fee</p></div>
            <div class="stat-card"><h3 style="color:var(--success)">KSh ${paid.toLocaleString()}</h3><p>Total Paid</p></div>
            <div class="stat-card"><h3 style="color:var(--danger)">KSh ${balance.toLocaleString()}</h3><p>Outstanding</p></div>
        </div>

        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">Payment Progress (${pct}%)</div>
            <div style="background:var(--bg-elevated);border-radius:20px;height:10px;overflow:hidden;margin-top:8px;">
                <div style="height:100%;width:${pct}%;background:linear-gradient(90deg,var(--success),#34d399);border-radius:20px;"></div>
            </div>
        </div>

        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">Payment History (${history.length})</div>
            ${history.length === 0
                ? '<p style="color:var(--text-secondary);font-size:0.85rem;margin-top:8px;">No payments recorded yet.</p>'
                : history.map(h => `
                    <div style="display:flex;justify-content:space-between;padding:0.6rem 0;border-bottom:1px solid var(--border);font-size:0.85rem;">
                        <span>KSh ${h.amount.toLocaleString()}</span>
                        <span style="color:var(--text-secondary);font-size:0.75rem;">${h.date} · Ref: ${h.ref}</span>
                    </div>`).join('')}
        </div>

        <div class="admin-card">
            <div class="admin-card-title">Accepted Payment Methods</div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:10px;margin-top:10px;text-align:center;">
                <div class="admin-role-pill" style="display:block;padding:10px;">📱 M-Pesa</div>
                <div class="admin-role-pill" style="display:block;padding:10px;">🏦 Bank Transfer</div>
                <div class="admin-role-pill" style="display:block;padding:10px;">💵 Cash (Finance Office)</div>
                <div class="admin-role-pill" style="display:block;padding:10px;">🎓 HELB Loan</div>
                <div class="admin-role-pill" style="display:block;padding:10px;">🤝 Bursary</div>
            </div>
        </div>`;
}

/* ── 6. Results ── */
function studentResultsHTML(user) {
    const results = user.results || [];
    const competent = results.filter(r => r.competency === 'Competent').length;
    const nyc = results.length - competent;
    const rate = results.length ? Math.round((competent / results.length) * 100) : 0;

    return `
        <div class="admin-section-head">🎓 Results</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <p style="font-size:0.8rem;color:var(--text-secondary);">
                Results follow the CBET framework. You're assessed as <strong style="color:var(--success)">Competent (C)</strong>
                or <strong style="color:var(--danger)">Not Yet Competent (NYC)</strong> if more practice is needed.
            </p>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:12px;margin-bottom:1rem;">
            <div class="stat-card"><h3>${results.length}</h3><p>Total Results</p></div>
            <div class="stat-card"><h3 style="color:var(--success)">${competent}</h3><p>Competent</p></div>
            <div class="stat-card"><h3 style="color:var(--danger)">${nyc}</h3><p>Not Yet Competent</p></div>
            <div class="stat-card"><h3 style="color:var(--purple-light)">${rate}%</h3><p>Competency Rate</p></div>
        </div>
        <div class="admin-card">
            <div class="admin-card-title">Module Results</div>
            ${results.length === 0
                ? '<p style="color:var(--text-secondary);font-size:0.85rem;margin-top:8px;">No results recorded yet.</p>'
                : `<table style="width:100%;border-collapse:collapse;margin-top:10px;font-size:0.82rem;">
                    <thead><tr style="color:var(--purple-light);border-bottom:1px solid var(--border);">
                        <th style="text-align:left;padding:0.5rem;">Module</th>
                        <th style="text-align:left;padding:0.5rem;">Score</th>
                        <th style="text-align:left;padding:0.5rem;">Competency</th>
                        <th style="text-align:left;padding:0.5rem;">Remarks</th>
                    </tr></thead>
                    <tbody>
                        ${results.map(r => `
                        <tr style="border-bottom:1px solid var(--border);">
                            <td style="padding:0.5rem;">${r.module}</td>
                            <td style="padding:0.5rem;">${r.score}%</td>
                            <td style="padding:0.5rem;color:${r.competency === 'Competent' ? 'var(--success)' : 'var(--danger)'};">${r.competency}</td>
                            <td style="padding:0.5rem;color:var(--text-secondary);">${r.remarks}</td>
                        </tr>`).join('')}
                    </tbody>
                </table>`}
        </div>`;
}

/* ── 7. Profile ── */
function studentProfileHTML(user) {
    return `
        <div class="admin-section-head">👤 My Profile</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:10px;">
                <div>
                    <h3 style="margin:0;">${user.name}</h3>
                    <div style="font-size:0.8rem;color:var(--text-secondary);">${user.id}</div>
                    <span class="admin-role-pill" style="margin-top:6px;display:inline-block;">${user.learningMode || 'CDACC (CBET)'}</span>
                </div>
                <button class="admin-btn-secondary" onclick="alert('Profile editing coming soon — contact your Class Teacher for corrections.')">
                    <i class="fas fa-edit"></i> Edit Profile
                </button>
            </div>
        </div>

        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">Personal Information</div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-top:10px;font-size:0.85rem;">
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">FULL NAME</span><br>${user.name}</div>
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">GENDER</span><br>${user.gender || '—'}</div>
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">DATE OF BIRTH</span><br>${user.dob || '—'}</div>
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">COUNTY</span><br>${user.county || '—'}</div>
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">PHONE</span><br>${user.phone || '—'}</div>
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">EMAIL</span><br>${user.email || '—'}</div>
            </div>
        </div>

        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">Academic Information</div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-top:10px;font-size:0.85rem;">
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">ADMISSION NO</span><br>${user.id}</div>
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">PROGRAM CODE</span><br>${user.programCode || '—'}</div>
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">LEVEL</span><br>${user.level || '—'}</div>
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">DEPARTMENT</span><br>${user.department || '—'}</div>
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">LEARNING MODE</span><br>${user.learningMode || '—'}</div>
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">YEAR / CLASS</span><br>${user.class || '—'}</div>
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">ENROLLMENT DATE</span><br>${user.enrollmentDate || '—'}</div>
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">DURATION</span><br>${user.programDuration || '—'}</div>
                <div><span style="color:var(--text-secondary);font-size:0.7rem;">TOTAL MODULES</span><br>${user.totalModules || '—'}</div>
            </div>
        </div>

        <div class="admin-card">
            <div class="admin-card-title">Fee Summary</div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin-top:10px;">
                <div class="stat-card"><h3>KSh ${(user.totalFee || 0).toLocaleString()}</h3><p>Total Fee</p></div>
                <div class="stat-card"><h3 style="color:var(--success)">KSh ${((user.totalFee || 0) - (user.feeBalance || 0)).toLocaleString()}</h3><p>Paid</p></div>
                <div class="stat-card"><h3 style="color:${(user.feeBalance || 0) === 0 ? 'var(--success)' : 'var(--danger)'}">KSh ${(user.feeBalance || 0).toLocaleString()}</h3><p>Balance</p></div>
            </div>
        </div>`;
}

/* ── Mess / Meals ── */
function studentMessHTML(user) {
    const data = getData();
    if (!(data.messActivatedStudents || []).includes(user.id)) {
        return `
            <div class="admin-section-head">🍽️ Mess / Meals</div>
            <div class="admin-card">
                <p style="color:var(--text-secondary);">You are not registered for boarding meals. Contact the Dean's office if this is an error.</p>
            </div>`;
    }

    const today    = new Date().toLocaleDateString('en-CA');
    const menu     = getTodayMenu();
    const myOrders = (data.messOrders || []).filter(o => o.studentId === user.id && o.date === today);
    const allergy  = (data.studentAllergies || []).find(a => a.studentId === user.id);
    const closeTimes = { morning:'07:30', afternoon:'12:00', evening:'18:30' };
    const emoji      = { morning:'🌅', afternoon:'☀️', evening:'🌙' };
    const labels     = { morning:'Morning Breakfast', afternoon:'Afternoon Lunch', evening:'Evening Supper' };

    const isOpen = s => {
        if (!menu?.[s]?.isSet) return false;
        const [h,m] = closeTimes[s].split(':').map(Number);
        const close = new Date(); close.setHours(h,m,0,0);
        return new Date() < close;
    };

    const buildCard = s => {
        const myOrder = myOrders.find(o => o.session === s);
        const open    = isOpen(s);
        const set     = menu?.[s]?.isSet;

        let preview = `<em style="color:var(--text-secondary);">Menu not set yet.</em>`;
        if (set) {
            preview = s === 'morning'
                ? `🫖 Tea: ${menu.morning.teaOptions.join(' / ')}<br>🍞 Bread (always included)`
                : `🍚 Starch: ${menu[s].starchOptions.join(' or ')}<br>🥬 Accompaniment: ${menu[s].accompaniments.join(' or ')}<br>🥩 Protein: ${menu[s].protein}`;
        }

        let action = '';
        if (myOrder) {
            const orderSummary = s === 'morning'
                ? myOrder.selections?.tea
                : `${myOrder.selections?.starch} + ${myOrder.selections?.accompaniment} + ${menu?.[s]?.protein}`;
            action = `
                <div style="margin-top:10px;padding:8px;background:rgba(16,185,129,.1);border:1px solid var(--success);border-radius:10px;">
                    <div style="font-size:0.78rem;color:var(--success);">✅ Ordered: <strong>${orderSummary}</strong></div>
                    ${myOrder.receivedFood === true  ? `<div style="font-size:0.72rem;color:var(--success);margin-top:4px;">✅ You received your meal.</div>`
                    : myOrder.receivedFood === false ? `<div style="font-size:0.72rem;color:var(--danger);margin-top:4px;">❌ Marked as did not receive.</div>`
                    : `<div style="font-size:0.72rem;color:var(--warning);margin-top:4px;">⏳ Awaiting serving confirmation.</div>`}
                </div>`;
        } else if (!set) {
            action = `<button disabled style="margin-top:10px;padding:8px 16px;border-radius:10px;background:var(--bg-elevated);color:var(--text-secondary);border:1px solid var(--border);cursor:not-allowed;">🔒 Menu not set yet</button>`;
        } else if (!open) {
            action = `<button disabled style="margin-top:10px;padding:8px 16px;border-radius:10px;background:var(--bg-elevated);color:var(--text-secondary);border:1px solid var(--border);cursor:not-allowed;">🔒 Closed at ${closeTimes[s]}</button>`;
        } else {
            action = `<button class="admin-btn-primary" style="margin-top:10px;" onclick="studentOpenMessForm('${s}')">🍽️ Order ${labels[s]}</button>`;
        }

        return `
        <div class="admin-card" style="margin-bottom:1rem;border-left:4px solid ${open&&!myOrder?'var(--success)':myOrder?'var(--purple)':'var(--border)'};">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;">
                <div class="admin-card-title">${emoji[s]} ${labels[s]}</div>
                <span style="font-size:0.68rem;color:var(--text-secondary);">Closes ${closeTimes[s]}</span>
            </div>
            <div style="font-size:0.8rem;margin-top:8px;line-height:1.8;">${preview}</div>
            ${action}
        </div>`;
    };

    return `
        <div class="admin-section-head">🍽️ Mess / Meals — ${today}</div>
        ${allergy ? `
        <div class="admin-card" style="margin-bottom:1rem;border-left:4px solid var(--warning);background:rgba(245,158,11,.05);">
            <p style="font-size:0.82rem;color:var(--warning);">⚠️ Your dietary flag is visible to Mess staff: <strong>${allergy.allergies.join(', ')}</strong></p>
        </div>` : ''}
        ${buildCard('morning')}
        ${buildCard('afternoon')}
        ${buildCard('evening')}

        <!-- Order Popup -->
        <div id="messOverlay" style="display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.75);backdrop-filter:blur(6px);z-index:999;align-items:center;justify-content:center;">
            <div style="background:var(--bg-card);border:1px solid var(--purple);border-radius:20px;padding:2rem;max-width:440px;width:90%;box-shadow:0 20px 60px rgba(0,0,0,.6);position:relative;">
                <button onclick="studentCloseMessForm()" style="position:absolute;top:12px;right:16px;background:none;border:none;color:var(--text-secondary);font-size:1.4rem;cursor:pointer;">✕</button>
                <div id="messFormBody"></div>
            </div>
        </div>`;
}

window.studentOpenMessForm = function(session) {
    const menu  = getTodayMenu();
    const emoji = {morning:'🌅',afternoon:'☀️',evening:'🌙'};
    const label = {morning:'Morning Breakfast',afternoon:'Afternoon Lunch',evening:'Evening Supper'};
    let body = `<h3 style="margin:0 0 6px;">${emoji[session]} ${label[session]}</h3>
                <p style="font-size:0.78rem;color:var(--text-secondary);margin:0 0 16px;">PC Kinyanjui TTI — select your meal below</p>`;

    if (session === 'morning') {
        body += `<label style="font-size:0.7rem;color:var(--text-secondary);">TEA OPTION</label>
            <div style="display:flex;flex-direction:column;gap:8px;margin-top:8px;margin-bottom:16px;">
                ${(menu.morning.teaOptions||[]).map(t => `
                <label style="display:flex;align-items:center;gap:10px;cursor:pointer;padding:10px;border:1px solid var(--border);border-radius:10px;">
                    <input type="radio" name="ord_tea" value="${t}"> ${t}
                </label>`).join('')}
            </div>
            <div style="padding:8px;background:rgba(16,185,129,.1);border:1px solid var(--success);border-radius:10px;font-size:0.82rem;margin-bottom:16px;">
                🍞 Bread is always included
            </div>`;
    } else {
        const m = menu[session];
        body += `
            <label style="font-size:0.7rem;color:var(--text-secondary);">STARCH</label>
            <div style="display:flex;flex-direction:column;gap:8px;margin-top:8px;margin-bottom:14px;">
                ${(m.starchOptions||[]).map(s => `
                <label style="display:flex;align-items:center;gap:10px;cursor:pointer;padding:10px;border:1px solid var(--border);border-radius:10px;">
                    <input type="radio" name="ord_starch" value="${s}"> ${s}
                </label>`).join('')}
            </div>
            <label style="font-size:0.7rem;color:var(--text-secondary);">ACCOMPANIMENT</label>
            <div style="display:flex;flex-direction:column;gap:8px;margin-top:8px;margin-bottom:14px;">
                ${(m.accompaniments||[]).map(a => `
                <label style="display:flex;align-items:center;gap:10px;cursor:pointer;padding:10px;border:1px solid var(--border);border-radius:10px;">
                    <input type="radio" name="ord_acc" value="${a}"> ${a}
                </label>`).join('')}
            </div>
            <div style="padding:8px;background:rgba(108,63,207,.1);border:1px solid var(--purple);border-radius:10px;font-size:0.82rem;margin-bottom:16px;">
                🥩 Protein today: <strong>${m.protein}</strong> (same for everyone)
            </div>`;
    }

    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    body += `<button class="admin-btn-primary" style="width:100%;padding:1rem;" onclick="studentSubmitMessOrder('${session}','${user.id}','${user.name}')">
        <i class="fas fa-paper-plane"></i> Confirm Order
    </button>`;

    document.getElementById('messFormBody').innerHTML = body;
    const overlay = document.getElementById('messOverlay');
    if (overlay) overlay.style.display = 'flex';
};

window.studentCloseMessForm = function() {
    const o = document.getElementById('messOverlay');
    if (o) o.style.display = 'none';
};

window.studentSubmitMessOrder = function(session, studentId, studentName) {
    const menu = getTodayMenu();
    const data = getData();
    let selections = {};

    if (session === 'morning') {
        const tea = document.querySelector('input[name="ord_tea"]:checked')?.value;
        if (!tea) return alert('Please select a tea option.');
        selections = { tea };
    } else {
        const starch = document.querySelector('input[name="ord_starch"]:checked')?.value;
        const acc    = document.querySelector('input[name="ord_acc"]:checked')?.value;
        if (!starch || !acc) return alert('Please select both starch and accompaniment.');
        selections = { starch, accompaniment: acc };
    }

    data.messOrders = data.messOrders || [];
    data.messOrders.push({
        id: 'MO-'+Date.now(), studentId, studentName,
        date: new Date().toLocaleDateString('en-CA'), session,
        selections, orderedAt: new Date().toISOString(),
        receivedFood: null, markedAt: null
    });
    saveData(data);
    studentCloseMessForm();
    alert('✅ Order confirmed! Reference: MO-'+Date.now().toString().slice(-5));
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    document.getElementById('studentMain').innerHTML = studentMessHTML(user);
};

/* ── 8. Report (inline SVG charts, no external library) ── */
function svgDonutChart(segments, size = 140) {
    const total = segments.reduce((s, x) => s + x.value, 0) || 1;
    const r = size / 2 - 14;
    const cx = size / 2, cy = size / 2;
    const circ = 2 * Math.PI * r;
    let offset = 0;
    const circles = segments.map(seg => {
        const dash = (seg.value / total) * circ;
        const el = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${seg.color}" stroke-width="18"
            stroke-dasharray="${dash} ${circ - dash}" stroke-dashoffset="${-offset}"
            transform="rotate(-90 ${cx} ${cy})" stroke-linecap="round"/>`;
        offset += dash;
        return el;
    }).join('');
    return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">${circles}</svg>`;
}

function svgBarChart(bars, width = 380, height = 180) {
    const max = Math.max(...bars.map(b => b.value), 1);
    const gap = 14;
    const barW = (width - gap * (bars.length + 1)) / bars.length;
    const bodyH = height - 36;
    const rects = bars.map((b, i) => {
        const h = (b.value / max) * bodyH;
        const x = gap + i * (barW + gap);
        const y = bodyH - h;
        return `<rect x="${x}" y="${y}" width="${barW}" height="${h}" rx="4" fill="${b.color || '#8b5cf6'}"/>
            <text x="${x + barW / 2}" y="${height - 6}" text-anchor="middle" font-size="9" fill="#c8bfec">${b.label}</text>
            <text x="${x + barW / 2}" y="${y - 6}" text-anchor="middle" font-size="9" fill="#fff">${b.value}</text>`;
    }).join('');
    return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">${rects}</svg>`;
}

function studentReportHTML(user) {
    const results = user.results || [];
    const competent = results.filter(r => r.competency === 'Competent').length;
    const nyc = results.length - competent;
    const attPct = user.attendance ? Math.round((user.attendance.attended / user.attendance.total) * 100) : 0;
    const balance = user.feeBalance || 0;
    const totalFee = user.totalFee || 0;
    const paid = totalFee - balance;

    const moduleBars = results.length
        ? results.map(r => ({ label: r.module.split(' ').slice(0, 2).join(' '), value: r.score, color: r.competency === 'Competent' ? '#10b981' : '#ef4444' }))
        : [{ label: 'No data', value: 0, color: '#3a2d6e' }];

    return `
        <div class="admin-section-head">📊 My Report</div>

        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">Module Scores</div>
            <div style="overflow-x:auto;margin-top:10px;">${svgBarChart(moduleBars)}</div>
        </div>

        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1rem;">
            <div class="admin-card" style="text-align:center;">
                <div class="admin-card-title">Competency Results</div>
                <div style="display:flex;justify-content:center;margin-top:10px;">
                    ${svgDonutChart([
                        { value: competent || 0.0001, color: '#10b981' },
                        { value: nyc || 0.0001, color: '#ef4444' }
                    ])}
                </div>
                <div style="font-size:0.78rem;margin-top:8px;">
                    <span style="color:var(--success)">● Competent ${competent}</span> &nbsp;
                    <span style="color:var(--danger)">● NYC ${nyc}</span>
                </div>
            </div>

            <div class="admin-card" style="text-align:center;">
                <div class="admin-card-title">Fee Payment Status</div>
                <div style="display:flex;justify-content:center;margin-top:10px;">
                    ${svgDonutChart([
                        { value: paid || 0.0001, color: '#10b981' },
                        { value: balance || 0.0001, color: '#f59e0b' }
                    ])}
                </div>
                <div style="font-size:0.78rem;margin-top:8px;">
                    <span style="color:var(--success)">● Paid KSh ${paid.toLocaleString()}</span><br>
                    <span style="color:var(--warning)">● Balance KSh ${balance.toLocaleString()}</span>
                </div>
            </div>

            <div class="admin-card" style="text-align:center;">
                <div class="admin-card-title">Attendance Rate</div>
                <div style="display:flex;justify-content:center;margin-top:10px;">
                    ${svgDonutChart([
                        { value: attPct || 0.0001, color: '#8b5cf6' },
                        { value: (100 - attPct) || 0.0001, color: '#251b42' }
                    ])}
                </div>
                <div style="font-size:0.9rem;margin-top:8px;font-weight:700;color:var(--purple-light);">${attPct}%</div>
            </div>
        </div>`;
}

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
   SPORTS ADMIN PORTAL — FINAL FIXED VERSION
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
                <i class="fas fa-user-graduate"></i> Student Sport Leaders
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
        sports:       () => sportsManageHTML(),
        items:        () => sportsItemsHTML(),
        participants: () => sportsStudentSportLeadersHTML(),   // This must point here
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
// ====================== LOST ITEMS (Sports Admin) ======================
function sportsLostItemsHTML() {
    const data = getData();
    if (!data.sportsLostItems) {
        data.sportsLostItems = [];
        saveData(data);
    }

    const rows = data.sportsLostItems.length === 0 
        ? `<p style="color:var(--text-secondary);font-size:0.85rem;">No lost items recorded yet.</p>`
        : data.sportsLostItems.map((item, i) => `
            <div style="padding:0.7rem 0;border-bottom:1px solid var(--border);">
                <strong>${item.itemName}</strong> — ${item.quantity} pcs<br>
                <small style="color:var(--text-secondary)">${item.studentName || 'Unknown Student'} • ${new Date(item.date).toLocaleDateString()}</small>
            </div>`).join('');

    return `
        <div class="admin-section-head">🚨 Lost / Damaged Items</div>
       <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">➕ Record Lost Item</div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin-top:10px;">
                <input id="lostItemName" class="admin-input" placeholder="Item name (e.g. Football)">
                <input id="lostQty" class="admin-input" type="number" min="1" placeholder="Quantity">
                <input id="lostResponsible" class="admin-input" placeholder="Student / Leader Name">
                <input id="lostNotes" class="admin-input" placeholder="Notes (optional)">
            </div>
        <div class="admin-card" style="margin-top:1rem;">
            <div class="admin-card-title">Recent Lost Items (${data.sportsLostItems.length})</div>
            ${rows}
        </div>`;
}

// ====================== SEND LOST ITEMS TO FINANCE ======================
window.sportsSendLostItemsToFinance = function() {
    const data = getData();
    
    // Create lost items record for Finance
    const lostRecord = {
        id: 'LOST-' + Date.now().toString().slice(-6),
        department: 'Sports',
        type: 'Lost Items Report',
        description: 'Lost/Damaged Sports Equipment',
        date: new Date().toISOString(),
        itemsCount: 3, // You can make this dynamic later
        status: 'received'
    };

    if (!data.financeReceivedDocs) data.financeReceivedDocs = [];
    data.financeReceivedDocs.push(lostRecord);
    
    saveData(data);
    
    // Success Notification (exactly like your 3rd image)
    showSuccessAlert(`
        ✅ Lost items PDF sent to Finance!<br>
        <small style="font-size:0.9rem;">Sports Department Report</small>
    `);
    
    // Refresh current page
    document.getElementById('sportsMain').innerHTML = sportsLostItemsHTML();
};

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
    <div class="form-card" style="max-width:560px;margin:40px auto;text-align:center;">
            <h2 style="color:var(--purple-light);margin-bottom:25px;">Sport Club Portal</h2>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
                <button onclick="selectSportSubRole('sportsadmin')"
                        class="admin-btn-primary"
                        style="height:120px;font-size:1.1rem;padding:20px;">
                    <i class="fas fa-user-tie" style="font-size:2.8rem;display:block;margin-bottom:12px;"></i>
                    Sports Admin
                </button>
                <button onclick="selectSportSubRole('sportleader')"
                        class="admin-btn-primary"
                        style="height:120px;font-size:1.1rem;padding:20px;">
                    <i class="fas fa-user-graduate" style="font-size:2.8rem;display:block;margin-bottom:12px;"></i>
                    Student Sport Leader
                </button>
            </div>
            <button onclick="showHome()"
                    class="btn-danger"
                    style="margin-top:25px;width:100%;padding:14px;">
                ← Back to Home
            </button>
        </div>`;
  
    document.getElementById('dashboardContent').innerHTML = html;
}

window.selectSportSubRole = function(subRole) {
    sessionStorage.setItem('sportSubRole', subRole);
    const titles = { sportsadmin: 'Sports Admin Login', sportleader: 'Student Sport Leader Login' };
    document.getElementById('dashboardTitle').innerHTML = `<i class="fas fa-football-ball"></i> ${titles[subRole]}`;

    document.getElementById('dashboardContent').innerHTML = `
        <div class="form-card" style="max-width:420px;margin:2rem auto;">
            <h3 style="text-align:center;margin-bottom:1rem;">Enter Credentials</h3>
            <input type="text" id="sportId" class="login-input" placeholder="ID / Username">
            <input type="password" id="sportPass" class="login-input" placeholder="Password / Passcode">
            <button type="button" class="btn-primary" style="width:100%;margin-top:1rem;" onclick="handleSportSubLogin()">
                Login
            </button>
            <button type="button" onclick="showSportSubLogin()" class="btn-danger" style="width:100%;margin-top:10px;">
                ← Back
            </button>
        </div>`;
};

window.handleSportSubLogin = function() {
    const subRole = sessionStorage.getItem('sportSubRole');
    const passEl  = document.getElementById('sportPass');
    if (!passEl) { alert('⚠️ Login form not loaded correctly. Please go back and try again.'); return; }
    const pass = passEl.value.trim();
    const data = getData();

    if (subRole === 'sportsadmin' && pass === 'sports123') {
        const user = { role: 'sportsadmin', name: 'Sports Admin', id: 'SP-ADMIN-001' };
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        showDashboard('sportsadmin', user);
        return;
    }

    if (subRole === 'sportleader') {
        const leader = (data.sportLeaders || []).find(l => l.passcode === pass);
        if (leader) {
            const user = {
                role: 'sportleader',
                name: leader.name,
                id: leader.studentId,
                sport: leader.sport
            };
            sessionStorage.setItem('currentUser', JSON.stringify(user));
            showDashboard('sportleader', user);
            return;
        }
    }

    alert('❌ Invalid passcode.\n\nSports Admin → sports123\nSport Leader → use the passcode given by Sports Admin');
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
           <i class="fas fa-user-graduate"></i> Student Sport Leaders
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
        dashboard:    () => sportsDashboardHTML(),
        sports:       () => sportsManageHTML(),
        items:        () => sportsItemsHTML(),
        participants: () => sportsStudentSportLeadersHTML(),   // ← This is the correct one
        requests:     () => sportsRequestsHTML(),
        lost:         () => sportsLostItemsHTML(),
        report:       () => sportsReportHTML()
    };
    
    document.getElementById('sportsMain').innerHTML = map[section]();
};

/* ── Dashboard (now reads real counts) ── */
function sportsDashboardHTML() {
    const data = getData();
    const sportsCount       = (data.sportsList || []).length;
    const participantsCount = (data.sportsParticipants || []).length;
    const itemsIssued       = (data.sportsInventory || []).reduce((sum, i) => sum + (i.issued || 0), 0);

    return `
        <div class="admin-section-head">⚽ Sports Department Dashboard</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;">
            <div class="stat-card"><h3>${sportsCount}</h3><p>Active Sports</p></div>
            <div class="stat-card"><h3>${participantsCount}</h3><p>Participants</p></div>
            <div class="stat-card"><h3>${itemsIssued}</h3><p>Items Issued</p></div>
            <div class="stat-card"><h3>0</h3><p>Pending Requests</p></div>
        </div>`;
}

/* ══════════════════════════════════════════
   1. MANAGE SPORTS
══════════════════════════════════════════ */
function sportsManageHTML() {
    const data = getData();
    if (!data.sportsList) { data.sportsList = []; saveData(data); }

    const rows = data.sportsList.length === 0
        ? `<p style="color:var(--text-secondary);font-size:0.85rem;margin-top:8px;">No sports added yet.</p>`
        : data.sportsList.map((s, i) => `
            <div style="display:flex;justify-content:space-between;align-items:center;
                padding:0.6rem 0;border-bottom:1px solid var(--border);font-size:0.84rem;flex-wrap:wrap;gap:6px;">
                <div>
                    <strong>${s.icon || '⚽'} ${s.name}</strong>
                    <div style="font-size:0.72rem;color:var(--text-secondary);">${s.category || '—'}</div>
                </div>
                <button class="admin-action-btn danger" onclick="sportsDeleteSport(${i})">🗑 Remove</button>
            </div>`).join('');

    return `
        <div class="admin-section-head">🏅 Manage Sports</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">➕ Add Sport</div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin-top:10px;">
                <input id="sportName" class="admin-input" placeholder="Sport name (e.g. Football)">
                <select id="sportCategory" class="admin-input">
                    <option>Team Sport</option>
                    <option>Individual Sport</option>
                    <option>Indoor Game</option>
                </select>
                <input id="sportIcon" class="admin-input" placeholder="Emoji icon (e.g. ⚽)" maxlength="2">
            </div>
            <button class="admin-btn-primary" style="margin-top:10px;" onclick="sportsAddSport()">
                <i class="fas fa-plus"></i> Add Sport
            </button>
        </div>
        <div class="admin-card">
            <div class="admin-card-title">All Sports (${data.sportsList.length})</div>
            ${rows}
        </div>`;
}

window.sportsAddSport = function() {
    const name     = document.getElementById('sportName').value.trim();
    const category = document.getElementById('sportCategory').value;
    const icon     = document.getElementById('sportIcon').value.trim() || '⚽';
    if (!name) return alert('Enter a sport name.');

    const data = getData();
    if (!data.sportsList) data.sportsList = [];
    if (data.sportsList.find(s => s.name.toLowerCase() === name.toLowerCase())) {
        return alert('This sport already exists.');
    }
    data.sportsList.push({ name, category, icon });
    saveData(data);
    adminLog(`Sports Admin added sport: ${name}`);
    document.getElementById('sportsMain').innerHTML = sportsManageHTML();
};

window.sportsDeleteSport = function(idx) {
    if (!confirm('Remove this sport? This will not delete existing inventory/participant records tied to it.')) return;
    const data = getData();
    adminLog(`Sports Admin removed sport: ${data.sportsList[idx].name}`);
    data.sportsList.splice(idx, 1);
    saveData(data);
    document.getElementById('sportsMain').innerHTML = sportsManageHTML();
};

/* ══════════════════════════════════════════
   2. ITEMS INVENTORY
══════════════════════════════════════════ */
function sportsItemsHTML() {
    const data = getData();
    if (!data.sportsInventory) { data.sportsInventory = []; saveData(data); }
    const sportsOptions = (data.sportsList || []).map(s => `<option>${s.name}</option>`).join('');

    if ((data.sportsList || []).length === 0) {
        return `
        <div class="admin-section-head">📦 Items Inventory</div>
        <div class="admin-card">
            <p style="color:var(--warning);font-size:0.85rem;">
                ⚠️ Add at least one sport in "Manage Sports" first before adding inventory items.
            </p>
        </div>`;
    }

    const rows = data.sportsInventory.length === 0
        ? `<p style="color:var(--text-secondary);font-size:0.85rem;margin-top:8px;">No items recorded yet.</p>`
        : data.sportsInventory.map((item, i) => `
            <div style="display:flex;justify-content:space-between;align-items:center;
                padding:0.6rem 0;border-bottom:1px solid var(--border);font-size:0.84rem;flex-wrap:wrap;gap:6px;">
                <div>
                    <strong>${item.name}</strong>
                    <span class="admin-role-pill" style="margin-left:6px;">${item.sport}</span>
                    <div style="font-size:0.72rem;color:var(--text-secondary);">
                        Total: ${item.quantity} · Issued: ${item.issued || 0} · Available: ${item.quantity - (item.issued || 0)}
                    </div>
                </div>
                <button class="admin-action-btn danger" onclick="sportsDeleteItem(${i})">🗑</button>
            </div>`).join('');

    return `
        <div class="admin-section-head">📦 Items Inventory</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">➕ Add Item</div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin-top:10px;">
                <select id="itemSport" class="admin-input">${sportsOptions}</select>
                <input id="itemName" class="admin-input" placeholder="Item name (e.g. Match Ball)">
                <input id="itemQty" class="admin-input" type="number" min="1" placeholder="Quantity">
            </div>
            <button class="admin-btn-primary" style="margin-top:10px;" onclick="sportsAddItem()">
                <i class="fas fa-plus"></i> Add Item
            </button>
        </div>
        <div class="admin-card">
            <div class="admin-card-title">All Inventory (${data.sportsInventory.length})</div>
            ${rows}
        </div>`;
}

window.sportsAddItem = function() {
    const sport = document.getElementById('itemSport').value;
    const name  = document.getElementById('itemName').value.trim();
    const qty   = parseInt(document.getElementById('itemQty').value) || 0;
    if (!name || qty <= 0) return alert('Enter item name and a valid quantity.');

    const data = getData();
    if (!data.sportsInventory) data.sportsInventory = [];
    data.sportsInventory.push({ sport, name, quantity: qty, issued: 0 });
    saveData(data);
    adminLog(`Sports Admin added inventory: ${name} ×${qty} (${sport})`);
    document.getElementById('sportsMain').innerHTML = sportsItemsHTML();
};

window.sportsDeleteItem = function(idx) {
    if (!confirm('Remove this inventory item?')) return;
    const data = getData();
    adminLog(`Sports Admin removed inventory item: ${data.sportsInventory[idx].name}`);
    data.sportsInventory.splice(idx, 1);
    saveData(data);
    document.getElementById('sportsMain').innerHTML = sportsItemsHTML();
};

/* ══════════════════════════════════════════
  /* =========================================
   3. STUDENT SPORT LEADERS
   ========================================= */
function sportsStudentSportLeadersHTML() {
    const data = getData();
    if (!data.studentSportLeaders) { 
        data.studentSportLeaders = []; 
        saveData(data); 
    }

    const sportsOptions = (data.sportsList || []).map(s => `<option>${s.name}</option>`).join('');

    if ((data.sportsList || []).length === 0) {
        return `
        <div class="admin-section-head">👥 Student Sport Leaders</div>
        <div class="admin-card">
            <p style="color:var(--warning);font-size:0.85rem;">
                ⚠️ Add at least one sport in "Manage Sports" first before adding sport leaders.
            </p>
        </div>`;
    }

    const rows = data.studentSportLeaders.length === 0
        ? `<p style="color:var(--text-secondary);font-size:0.85rem;margin-top:8px;">No student sport leaders registered yet.</p>`
        : data.studentSportLeaders.map((p, i) => {
            const student = data.students.find(s => s.id === p.studentId) || {};
            return `
            <div style="display:flex;justify-content:space-between;align-items:center;
                padding:0.6rem 0;border-bottom:1px solid var(--border);font-size:0.84rem;flex-wrap:wrap;gap:6px;">
                <div>
                    <strong>${student.name || p.studentId}</strong>
                    <span class="admin-role-pill" style="margin-left:6px;">${p.sport} Leader</span>
                    <div style="font-size:0.72rem;color:var(--text-secondary);">
                        ${p.studentId} · ${student.department || '—'}
                    </div>
                </div>
                <button class="admin-action-btn danger" onclick="sportsRemoveStudentSportLeader(${i})">🗑</button>
            </div>`;
        }).join('');

    return `
        <div class="admin-section-head">👥 All Student Sport Leaders</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <div class="admin-card-title">➕ Register Student Sport Leader</div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin-top:10px;">
                <input id="leaderStudentId" class="admin-input" placeholder="Student ID (e.g. STU-2026-20669)">
                <select id="leaderSport" class="admin-input">${sportsOptions}</select>
            </div>
            <button class="admin-btn-primary" style="margin-top:10px;" onclick="sportsAddStudentSportLeader()">
                <i class="fas fa-plus"></i> Register Leader
            </button>
        </div>
        <div class="admin-card">
            <div class="admin-card-title">Registered Student Sport Leaders (${data.studentSportLeaders.length})</div>
            ${rows}
        </div>`;
}

// ====================== ADD LEADER ======================
window.sportsAddStudentSportLeader = function() {
    const studentId = document.getElementById('leaderStudentId').value.trim();
    const sport     = document.getElementById('leaderSport').value;

    if (!studentId) return alert('Enter a student ID.');

    const data = getData();
    const student = data.students.find(s => s.id === studentId);
    if (!student) return alert('Student ID not found in system.');

    if (!data.studentSportLeaders) data.studentSportLeaders = [];

    if (data.studentSportLeaders.find(p => p.studentId === studentId && p.sport === sport)) {
        return alert('This student is already registered as leader for this sport.');
    }

    data.studentSportLeaders.push({ 
        studentId, 
        sport, 
        dateJoined: new Date().toISOString(),
        role: "studentSportLeader"
    });

    saveData(data);
    adminLog(`Sports Admin registered ${student.name} (${studentId}) as ${sport} Sport Leader`);
    
    document.getElementById('sportsMain').innerHTML = sportsStudentSportLeadersHTML();
};

// ====================== REMOVE LEADER ======================
window.sportsRemoveStudentSportLeader = function(idx) {
    if (!confirm('Remove this student as sport leader?')) return;
    
    const data = getData();
    const leader = data.studentSportLeaders[idx];
    const student = data.students.find(s => s.id === leader.studentId);
    
    data.studentSportLeaders.splice(idx, 1);
    saveData(data);
    
    adminLog(`Sports Admin removed ${student?.name || leader.studentId} as ${leader.sport} Sport Leader`);
    document.getElementById('sportsMain').innerHTML = sportsStudentSportLeadersHTML();
};
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


function renderAdminPanel() {
    return `
    <div class="admin-layout">
 
        <!-- MINI SIDEBAR NAV -->
        <div class="admin-sidenav">
            <div class="admin-sidenav-title">Admin Menu</div>
            <button class="admin-nav-btn" onclick="adminSection('received',this)">
             <i class="fas fa-inbox"></i> Received
             ${(getData().sysAdminReceived||[]).filter(i=>!i.read).length > 0 ? `<span style="background:var(--danger);color:#fff;border-radius:12px;padding:2px 7px;font-size:0.65rem;margin-left:4px;">${(getData().sysAdminReceived||[]).filter(i=>!i.read).length}</span>` : ''}
            </button>
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
            <button class="admin-nav-btn" onclick="adminSection('studentwall',this)"><i class="fas fa-users"></i> Student Wall</button>
             
        </div>
 
        <!-- MAIN CONTENT AREA -->
        <div class="admin-main" id="adminMain">
            ${adminUsersHTML()}
        </div>
    </div>`;
}

/* ── Section switcher ── */
window.adminSection = function(section, btn) {
    document.querySelectorAll('.admin-nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const main = document.getElementById('adminMain');
    const map = {
        received: adminReceivedHTML,
        users:       adminUsersHTML,
        principals:  adminPrincipalsHTML,
        departments: adminDepartmentsHTML,
        courses:     adminCoursesHTML,
        announce:    adminAnnounceHTML,
        idcards:     adminIDCardsHTML,
        logs:        adminLogsHTML,
        backup:      adminBackupHTML,
         messaccess : adminMessAccessHTML,
        export:      adminExportHTML,
        studentwall: adminStudentWallHTML
        
    };
    main.innerHTML = (map[section] || adminUsersHTML)();
};


function adminReceivedHTML() {
    const data  = getData();
    const items = (data.sysAdminReceived || []).slice().reverse();
    const unread = items.filter(i => !i.read).length;
    return `
        <div class="admin-section-head">📥 Received (${items.length}) ${unread>0?`<span style="color:var(--danger);font-size:0.75rem;">${unread} unread</span>`:''}</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <p style="font-size:0.78rem;color:var(--text-secondary);">
                Accountability inbox — deletion reasons and other office reports sent to System Admin (e.g. Hospital
                Storage deletions, Dean discipline records).
            </p>
        </div>
        <div class="admin-card">
            ${items.length === 0
                ? '<p style="color:var(--text-secondary);font-size:0.85rem;">No messages yet.</p>'
                : items.map(i => `
                <div style="padding:1rem;background:var(--bg-elevated);border-radius:12px;margin-bottom:10px;border-left:4px solid ${i.read?'var(--border)':'var(--purple)'};" onclick="adminMarkReceivedRead('${i.id}')">
                    <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:6px;">
                        <div>
                            <span class="admin-role-pill">${i.from}</span>
                            <div style="font-weight:700;margin-top:6px;font-size:0.88rem;">${i.subject}</div>
                        </div>
                        <div style="font-size:0.68rem;color:var(--text-secondary);">${new Date(i.timestamp).toLocaleString()}${!i.read?' <span style="color:var(--purple-light);">● New</span>':''}</div>
                    </div>
                    <div style="font-size:0.82rem;margin-top:8px;color:var(--text-secondary);">${i.message}</div>
                </div>`).join('')}
        </div>`;
}

window.adminMarkReceivedRead = function(id) {
    const data = getData();
    const item = (data.sysAdminReceived || []).find(i => i.id === id);
    if (item) item.read = true;
    saveData(data);
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
                    <option value="deputy_acad">Deputy (Acad)</option>
                    <option value="deputy_infra">Deputy (Infra)</option>
                    <option value="examoffice">Exam Office</option>
                    <option value="dean">Dean</option>
                    <option value="sportsadmin">Sports Admin</option>
                    <option value="sportleader">Student Sport Leader</option>
                    <option value="hospital">hospital</option>
                    <option value="library">library</option>
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
   STUDENT PERSONAL NOTIFICATIONS
══════════════════════════════════════════ */
function pushStudentNotification(studentId, title, message, stage) {
    const data = getData();
    if (!data.studentNotifications) data.studentNotifications = [];
    data.studentNotifications.push({
        id: 'sn' + Date.now() + Math.floor(Math.random()*1000),
        studentId,
        title,
        message,
        stage,
        timestamp: new Date().toISOString(),
        seen: false
    });
    saveData(data);
}

function showStudentNotificationPopup(user) {
    const data = getData();
    const unseen = (data.studentNotifications || [])
        .filter(n => n.studentId === user.id && !n.seen);

    if (unseen.length === 0) return;

    const latest = unseen[unseen.length - 1];

    const overlay = document.createElement('div');
    overlay.id = 'studentNotifyOverlay';
    overlay.style.cssText = `
        position:fixed;inset:0;background:rgba(0,0,0,.6);
        display:flex;align-items:center;justify-content:center;
        z-index:9999;padding:1rem;`;

    overlay.innerHTML = `
        <div style="background:var(--bg-card);border:1px solid var(--purple);
            border-radius:18px;max-width:420px;width:100%;padding:1.6rem;
            box-shadow:0 12px 40px rgba(108,63,207,.4);text-align:center;">
            <div style="font-size:2.4rem;margin-bottom:8px;">📨</div>
            <div style="font-size:1.05rem;font-weight:800;color:var(--purple-light);margin-bottom:6px;">
                ${latest.title}
            </div>
            <div style="font-size:0.88rem;color:var(--text-primary);line-height:1.6;margin-bottom:16px;">
                ${latest.message}
            </div>
            ${unseen.length > 1 ? `
            <div style="font-size:0.72rem;color:var(--text-secondary);margin-bottom:14px;">
                +${unseen.length - 1} more update${unseen.length - 1 > 1 ? 's' : ''} waiting
            </div>` : ''}
            <button class="admin-btn-primary" style="width:100%;" onclick="dismissStudentNotifications('${user.id}')">
                Got it
            </button>
        </div>`;

    document.body.appendChild(overlay);
}

window.dismissStudentNotifications = function(studentId) {
    const data = getData();
    (data.studentNotifications || []).forEach(n => {
        if (n.studentId === studentId) n.seen = true;
    });
    saveData(data);
    const overlay = document.getElementById('studentNotifyOverlay');
    if (overlay) overlay.remove();
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

function adminMessAccessHTML() {
    const data      = getData();
    const students  = data.students || [];
    const activated = data.messActivatedStudents || [];

    const rows = students.map(s => `
        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.7rem 0;border-bottom:1px solid var(--border);flex-wrap:wrap;gap:8px;">
            <div>
                <strong style="font-size:0.85rem;">${s.name}</strong>
                <div style="font-size:0.72rem;color:var(--text-secondary);">${s.id} • ${s.department}</div>
            </div>
            <label style="display:flex;align-items:center;gap:8px;cursor:pointer;font-size:0.85rem;">
                <input type="checkbox" class="mess-chk" data-id="${s.id}" ${activated.includes(s.id) ? 'checked' : ''}>
                <span>${activated.includes(s.id) ? '<span style="color:var(--success);">✅ Mess Access</span>' : '<span style="color:var(--text-secondary);">No access</span>'}</span>
            </label>
        </div>`).join('');

    return `
        <div class="admin-section-head">🍽️ Mess Access Management</div>
        <div class="admin-card" style="margin-bottom:1rem;">
            <p style="font-size:0.78rem;color:var(--text-secondary);">
                Received from Dean (from Finance). Select all students who have paid for boarding meals.
                Checked students will see the Mess ordering section in their portal.
                Currently activated: <strong style="color:var(--success);">${activated.length} students</strong>.
            </p>
            <div style="display:flex;gap:10px;margin-top:10px;flex-wrap:wrap;">
                <button class="admin-btn-primary" onclick="adminSaveMessAccess()"><i class="fas fa-save"></i> Save Mess Access</button>
                <button class="admin-btn-secondary" onclick="adminSelectAllMess(true)">Select All</button>
                <button class="admin-btn-secondary" onclick="adminSelectAllMess(false)">Deselect All</button>
            </div>
        </div>
        <div class="admin-card">
            <div class="admin-card-title">All Students (${students.length})</div>
            <div style="margin-top:10px;">${rows || '<p style="color:var(--text-secondary);">No students in system.</p>'}</div>
        </div>`;
}

window.adminSaveMessAccess = function() {
    const data = getData();
    const checked = [...document.querySelectorAll('.mess-chk:checked')].map(el => el.dataset.id);
    data.messActivatedStudents = checked;
    saveData(data);
    alert(`✅ Mess access saved. ${checked.length} student(s) activated.`);
    document.getElementById('adminMain').innerHTML = adminMessAccessHTML();
};

window.adminSelectAllMess = function(select) {
    document.querySelectorAll('.mess-chk').forEach(el => el.checked = select);
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

// ==================== MAGAZINE NAV BAR ====================
function initMagazineNav() {
    document.querySelectorAll('#magazineNav .btn-3d').forEach(btn => {
        btn.addEventListener('click', () => {
            const page = btn.dataset.page;

            // Remove active from all buttons
            document.querySelectorAll('#magazineNav .btn-3d').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Navigate
            if (page === 'home') {
                showHome();
            } else if (page === 'tour') {
                showTourPage();
            } else if (page === 'newsletter') {
                showNewsletterPage();
            } else if (page === 'examination') {
                showExaminationPage();
            } else if (page === 'noticeboard') {
                showGlobalNoticeBoard();
            } else if (page === 'studentwall') {
                showStudentWall();
            } else {
                alert("Page coming soon...");
            }
        });
    });
}

// ==================== DATA MIGRATION ====================
function migrateData() {
    const raw = localStorage.getItem('pck_institute_v3');
    if (!raw) return;
    const data = JSON.parse(raw);
    let changed = false;

    const defaults = {
        hospital:      { id: 'HOSP-001', name: 'School Nurse', password: 'hospital123' },
        hostel_matron: { id: 'MATRON-001', name: 'Mrs. Grace Njeri', wing: 'Female Wing', gender: 'Female', password: 'matron123' },
        hostel_patron: { id: 'PATRON-001', name: 'Mr. James Kamau', wing: 'Male Wing', gender: 'Male', password: 'patron123' },
        principal:     { id: 'PRINCIPAL-001', name: 'Dr. Elizabeth Wanjiku', password: 'principal123' },
        library:       { id: 'LIB-001', name: 'Librarian', password: 'library123' }
    };

    Object.entries(defaults).forEach(([key, val]) => {
        if (!data[key]) { data[key] = val; changed = true; }
    });
   if (!data.studentWallRecords) { data.studentWallRecords = []; changed = true; } 

    if (!data.deanAdmin)    { data.deanAdmin    = { id:'DEAN-ADMIN-001', name:'Dean of Students', password:'dean-4321' }; changed = true; }
if (!data.deputyDean1)  { data.deputyDean1  = { id:'DDEAN-001', name:'Deputy Dean 1', password:'deputy123' }; changed = true; }
if (!data.deputyDean2)  { data.deputyDean2  = { id:'DDEAN-002', name:'Deputy Dean 2', password:'deputy4321' }; changed = true; }
if (!data.frontOffice)  { data.frontOffice  = { id:'FRONT-001', name:'Front Office', password:'front4321' }; changed = true; }
if (!data.frontOfficeReceived) { data.frontOfficeReceived = []; changed = true; }
if (!data.deputyDeanReceived)  { data.deputyDeanReceived  = []; changed = true; }
if (!data.deanAdminReceived)   { data.deanAdminReceived   = []; changed = true; }
if (!data.deanAdminReview)     { data.deanAdminReview     = []; changed = true; }
if (!data.deanAdminSentItems)  { data.deanAdminSentItems  = []; changed = true; }
if (!data.classRepReceived)    { data.classRepReceived    = []; changed = true; }
if (!data.kitcoReceived)       { data.kitcoReceived       = []; changed = true; }
if (!data.messReceivedFromDean){ data.messReceivedFromDean= []; changed = true; }

    if (!data.hospitalVisits)    { data.hospitalVisits    = []; changed = true; }
    if (!data.medicalRecords)    { data.medicalRecords     = []; changed = true; }
    if (!data.hospitalBills)     { data.hospitalBills      = []; changed = true; }
    if (!data.hospitalStorage) { data.hospitalStorage = []; changed = true; } 
    if (!data.hostelResidents)   { data.hostelResidents    = [
        { id:'HR-001', studentId:'STU-2026-20670', studentName:'Sarah Achieng',  gender:'Female', room:'Room 14B', wing:'Female Wing', admittedDate:'2024-01-10', status:'resident', clearedForExit:false },
        { id:'HR-002', studentId:'STU-2026-20674', studentName:'Faith Kamau',    gender:'Female', room:'Room 22A', wing:'Female Wing', admittedDate:'2024-01-10', status:'resident', clearedForExit:false },
        { id:'HR-003', studentId:'STU-2026-20673', studentName:'Peter Njoroge',  gender:'Male',   room:'Room 8C',  wing:'Male Wing',   admittedDate:'2024-01-10', status:'resident', clearedForExit:false },
        { id:'HR-004', studentId:'STU-2026-20675', studentName:'Kevin Oduya',    gender:'Male',   room:'Room 12A', wing:'Male Wing',   admittedDate:'2024-01-10', status:'resident', clearedForExit:false }
    ]; changed = true; }
    if (!data.hostelClearances) { data.hostelClearances = { female: [], male: [] }; changed = true; }
    if (!data.disciplineRecords) { data.disciplineRecords = []; changed = true; }
    if (!data.hostelClearances)  { data.hostelClearances   = []; changed = true; }
    if (!data.disciplineRecords) { data.disciplineRecords  = []; changed = true; }
    if (!data.deanReceived)      { data.deanReceived        = []; changed = true; }
    if (!data.sysAdminReceived)  { data.sysAdminReceived    = []; changed = true; }
    if (!data.financeReceived)   { data.financeReceived     = []; changed = true; }
    if (!data.departmentStaff)   { data.departmentStaff     = {}; changed = true; }
    if (!data.hodDecisions)      { data.hodDecisions         = []; changed = true; }
    if (!data.deputyFeeFlags)    { data.deputyFeeFlags       = []; changed = true; }
    if (!data.attendanceRecords) { data.attendanceRecords    = []; changed = true; }
    if (!data.lecturerMaterials) { data.lecturerMaterials    = []; changed = true; }
    if (!data.studentReports)    { data.studentReports       = []; changed = true; }
    if (!data.classRepIssues)    { data.classRepIssues       = []; changed = true; }
    if (!data.classNotices)      { data.classNotices         = []; changed = true; }
    if (!data.idRequests)        { data.idRequests            = []; changed = true; }
    if (!data.attendanceConfirmations) { data.attendanceConfirmations = []; changed = true; }
    if (!data.timetables)        { data.timetables            = []; changed = true; }
    if (!data.lecturerUnits)     { data.lecturerUnits         = [
        { id:'LU-001', code:'CS101', name:'Computer Essentials',          level:5, department:'Computer Studies', lecturerId:'LEC-2026-001', semester:'March/April 2026', description:'Introduction to computers and digital literacy' },
        { id:'LU-002', code:'CS102', name:'Computer Operations',          level:5, department:'Computer Studies', lecturerId:'LEC-2026-001', semester:'March/April 2026', description:'Practical computer operations and software use' }
    ]; changed = true; }

    if (!data.examOfficeReceived)  { data.examOfficeReceived  = []; changed = true; }
if (!data.examOfficeBookings)  { data.examOfficeBookings  = []; changed = true; }
if (!data.examOfficeStore)     { data.examOfficeStore     = []; changed = true; }
if (!data.examOfficeSentItems) { data.examOfficeSentItems = []; changed = true; }
if (!data.deputyAcadReceived)  { data.deputyAcadReceived  = []; changed = true; }
if (!data.registrarReceived)   { data.registrarReceived   = []; changed = true; }
if (!data.principalReceived)   { data.principalReceived   = []; changed = true; }

 if (!data.hodReceived)        { data.hodReceived        = []; changed = true; }
if (!data.deputyInfraReceived){ data.deputyInfraReceived = []; changed = true; }
if (!data.procurementReceived){ data.procurementReceived = []; changed = true; }
if (!data.financeStore)       { data.financeStore        = []; changed = true; }
if (!data.financeSentItems)   { data.financeSentItems    = []; changed = true; }
if (!data.deputyAcadReceived) { data.deputyAcadReceived  = []; changed = true; }
if (!data.principalReceived)  { data.principalReceived   = []; changed = true; }
if (!data.examOfficeReceived) { data.examOfficeReceived  = []; changed = true; }

  if (!data.mess)               { data.mess               = { id:'MESS-001', name:'Mess Department', password:'mess123' }; changed = true; }
    if (!data.messActivatedStudents) { data.messActivatedStudents = ['STU-2026-20669','STU-2026-20670']; changed = true; }
    if (!data.dailyMenus)         { data.dailyMenus          = []; changed = true; }
    if (!data.messOrders)         { data.messOrders           = []; changed = true; }
    if (!data.messComplaints)     { data.messComplaints       = []; changed = true; }
    if (!data.studentAllergies)   { data.studentAllergies     = [
        { id:'SA-001', studentId:'STU-2026-20670', studentName:'Sarah Achieng', allergies:['Lactose intolerant — avoid cow milk products'], dietaryRestrictions:['No red meat'], medicalConditions:'Mild anaemia — needs iron-rich foods', recordedBy:'Hospital', recordedAt:'2026-01-15T09:00:00.000Z' }
    ]; changed = true; }

    if (changed) {
        localStorage.setItem('pck_institute_v3', JSON.stringify(data)); 
    }
}



/* ══════════════════════════════════════════
   STUDENT WALL — Self-contained overlay (works regardless of page layout)
══════════════════════════════════════════ */

window.showStudentWall = function() {
    let overlay = document.getElementById('studentWallOverlay');
    if (overlay) overlay.remove();

    overlay = document.createElement('div');
    overlay.id = 'studentWallOverlay';
    overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:#0b0b16;z-index:99999;overflow-y:auto;padding:20px;';
    overlay.innerHTML =
        '<div style="max-width:1100px;margin:0 auto;">' +
            '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">' +
                '<h2 style="color:#a855f7;margin:0;">👥 Student Wall — Since 1979</h2>' +
                '<button onclick="closeStudentWall()" style="background:#ef4444;color:#fff;border:none;padding:10px 20px;border-radius:10px;font-weight:700;cursor:pointer;">✕ Close</button>' +
            '</div>' +
            '<div id="studentWallInner"></div>' +
        '</div>';
    document.body.appendChild(overlay);
    document.getElementById('studentWallInner').innerHTML = studentWallPublicHTML({});
};

window.closeStudentWall = function() {
    const overlay = document.getElementById('studentWallOverlay');
    if (overlay) overlay.remove();
};

function studentWallPublicHTML(filters) {
    filters = filters || {};
    const data = getData();
    let records = (data.studentWallRecords || []).slice();

    const q = (filters.search || '').toLowerCase().trim();
    const onlyGraduated = filters.graduatedOnly === true;

    if (q) {
        records = records.filter(function(r) {
            return r.admissionNo.toLowerCase().indexOf(q) !== -1 || r.name.toLowerCase().indexOf(q) !== -1;
        });
    }
    if (onlyGraduated) records = records.filter(function(r) { return r.status === 'graduated'; });

    const byYear = {};
    records.forEach(function(r) {
        if (!byYear[r.yearJoined]) byYear[r.yearJoined] = [];
        byYear[r.yearJoined].push(r);
    });
    const years = Object.keys(byYear).map(Number).sort(function(a,b) { return b - a; });

    let yearBlocks = '';
    if (years.length === 0) {
        yearBlocks = '<p style="color:#9ca3af;">No students match this filter.</p>';
    } else {
        years.forEach(function(y) {
            let studentCards = byYear[y].map(function(r) {
                const color = r.status === 'graduated' ? '#10b981' : '#f59e0b';
                const badge = r.status === 'graduated'
                    ? '🎓 Graduated ' + (r.yearGraduated || '')
                    : '📖 Current / Not Graduated';
                return (
                    '<div style="background:#1a1e2c;border-radius:14px;padding:1rem;border-left:4px solid ' + color + ';">' +
                        '<strong style="color:#fff;">' + r.name + '</strong>' +
                        '<div style="font-size:0.72rem;color:#9ca3af;margin-top:2px;">' + r.admissionNo + ' • ' + r.department + '</div>' +
                        '<span style="margin-top:8px;display:inline-block;font-size:0.7rem;padding:3px 10px;border-radius:20px;background:' + color + '22;border:1px solid ' + color + ';color:' + color + ';">' + badge + '</span>' +
                    '</div>'
                );
            }).join('');
            yearBlocks +=
                '<div style="background:#12121f;border:1px solid #2a2a3d;border-radius:14px;padding:1.2rem;margin-bottom:1.2rem;">' +
                    '<div style="color:#a855f7;font-weight:700;margin-bottom:12px;">📅 Intake ' + y + '</div>' +
                    '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:12px;">' + studentCards + '</div>' +
                '</div>';
        });
    }

    const inputStyle = 'width:100%;padding:10px 12px;border-radius:10px;border:1px solid #2a2a3d;background:#1a1e2c;color:#fff;box-sizing:border-box;';
    const btnPrimary = 'background:linear-gradient(135deg,#8b5cf6,#6d28d9);color:#fff;border:none;padding:10px 18px;border-radius:10px;font-weight:700;cursor:pointer;';
    const btnSecondary = 'background:#2a2a3d;color:#fff;border:none;padding:10px 18px;border-radius:10px;font-weight:700;cursor:pointer;';

    return (
        '<div style="background:#12121f;border:1px solid #2a2a3d;border-radius:14px;padding:1.2rem;margin-bottom:1.2rem;">' +
            '<input id="swSearch" style="' + inputStyle + 'margin-bottom:10px;" placeholder="Search by admission no or name" value="' + (filters.search || '') + '">' +
            '<label style="display:flex;align-items:center;gap:8px;color:#e5e7eb;font-size:0.85rem;">' +
                '<input type="checkbox" id="swGradOnly" ' + (filters.graduatedOnly ? 'checked' : '') + '> Show graduated students only' +
            '</label>' +
            '<div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap;">' +
                '<button type="button" style="' + btnPrimary + '" onclick="studentWallApplyFilter()">Filter</button>' +
                '<button type="button" style="' + btnSecondary + '" onclick="studentWallClearFilter()">Clear</button>' +
                '<button type="button" style="' + btnSecondary + '" onclick="studentWallExport(\'pdf\')">📄 PDF</button>' +
                '<button type="button" style="' + btnSecondary + '" onclick="studentWallExport(\'excel\')">📊 Excel</button>' +
                '<button type="button" style="' + btnSecondary + '" onclick="studentWallExport(\'csv\')">📑 CSV</button>' +
            '</div>' +
        '</div>' +
        yearBlocks
    );
}

window.studentWallApplyFilter = function() {
    const searchEl = document.getElementById('swSearch');
    const gradEl = document.getElementById('swGradOnly');
    const filters = {
        search: searchEl ? searchEl.value : '',
        graduatedOnly: gradEl ? gradEl.checked : false
    };
    window._studentWallFilters = filters;
    document.getElementById('studentWallInner').innerHTML = studentWallPublicHTML(filters);
};

window.studentWallClearFilter = function() {
    window._studentWallFilters = {};
    document.getElementById('studentWallInner').innerHTML = studentWallPublicHTML({});
};

window.studentWallExport = function(type) {
    const data = getData();
    const filters = window._studentWallFilters || {};
    let records = (data.studentWallRecords || []).slice();
    const q = (filters.search || '').toLowerCase().trim();
    if (q) {
        records = records.filter(function(r) {
            return r.admissionNo.toLowerCase().indexOf(q) !== -1 || r.name.toLowerCase().indexOf(q) !== -1;
        });
    }
    if (filters.graduatedOnly) records = records.filter(function(r) { return r.status === 'graduated'; });
    if (records.length === 0) { alert('No records to export.'); return; }

    if (type === 'pdf') {
        if (typeof generatePDF === 'function') {
            generatePDF({
                title: 'PC Kinyanjui TTI — Student Wall',
                subtitle: 'Archive of all students since 1979',
                office: 'SYSTEM ADMIN', stage: 'Student Wall', department: '',
                signatoryLabel: 'Registrar Signature',
                columns: [
                    {label:'Admission No', key:'admissionNo'}, {label:'Name', key:'name'},
                    {label:'Department', key:'department'}, {label:'Year Joined', key:'yearJoined'},
                    {label:'Status', key:'statusDisplay'}
                ],
                rows: records.map(function(r) {
                    return Object.assign({}, r, { statusDisplay: r.status === 'graduated' ? ('Graduated ' + r.yearGraduated) : 'Not Graduated' });
                })
            });
        } else {
            alert('PDF export requires generatePDF() — not found in this file.');
        }
        return;
    }

    const headers = 'AdmissionNo,Name,Department,YearJoined,Status,YearGraduated';
    const body = records.map(function(r) {
        return '"' + r.admissionNo + '","' + r.name + '","' + r.department + '","' + r.yearJoined + '","' + r.status + '","' + (r.yearGraduated || '') + '"';
    }).join('\n');
    const blob = new Blob([headers + '\n' + body], { type: type === 'excel' ? 'application/vnd.ms-excel' : 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'student_wall.' + (type === 'excel' ? 'xls' : 'csv');
    a.click();
    URL.revokeObjectURL(url);
};



// ==================== INIT ====================
function init() {
    migrateData();
    initializeData();
    renderPrincipals();
    renderTourNav();
    renderTourPreview('library');
    populateInfraSelect();
    renderCBET();
    initMagazineNav();


    // Restore saved theme

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