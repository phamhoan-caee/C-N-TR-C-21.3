// --- 1. CẤU HÌNH WEB APP URL ---
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwxGySySYeE0wsg-41K5lTQUYgL_beTxmCGagDfwQO1AUxLs_l8K4iGMgz-jKE9sxc/exec";

// --- 2. BIẾN TRẠNG THÁI ---
let selectedQuestions = []; 
let studentAnswers = {}; // Dùng Object để lưu cho nhanh: {index: "đáp án"}
let currentQuestionIndex = 0; 
let timeLeft = 1200; // 20 phút
let timerInterval;
let isSubmitted = false; 

// --- 3. HÀM BẮT ĐẦU THI ---
function startQuiz() {
    const name = document.getElementById('studentName').value.trim();
    const id = document.getElementById('studentID').value.trim();

    if (!name || !id) {
        alert("Thầy vui lòng nhập đủ Họ tên và Khóa!");
        return;
    }

    if (typeof questionBank === 'undefined' || questionBank.length < 30) {
        alert("Lỗi: Dữ liệu câu hỏi chưa sẵn sàng!");
        return;
    }

    isSubmitted = false;
    // Trộn và lấy đúng 30 câu
    selectedQuestions = [...questionBank].sort(() => 0.5 - Math.random()).slice(0, 30);
    studentAnswers = {};
    timeLeft = 1200; 

    // Hiển thị giao diện - Khớp với ID trong HTML của thầy
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('caee-header').style.display = 'flex';
    document.getElementById('quiz-screen').style.display = 'flex';

    // Sửa lỗi ID không khớp ở đây
    document.getElementById('header-student-info').innerText = `Học viên: ${name} - Khóa: ${id}`;

    generateNavigationGrid();
    showQuestion(0);
    startTimer();
}

// --- 4. HÀM HIỂN THỊ CÂU HỎI ---
function showQuestion(index) {
    currentQuestionIndex = index;
    const q = selectedQuestions[index];
    const content = document.getElementById('quiz-content');
    
    const selectedText = studentAnswers[index] || null;

    let optionsHtml = q.options.map((opt, i) => {
        const isSelected = (opt === selectedText);
        return `
            <div class="option-item ${isSelected ? 'selected' : ''}" 
                 onclick="selectAnswer(this, ${index}, \`${opt.replace(/`/g, '\\`')}\`)">
                <span class="opt-prefix">${String.fromCharCode(65 + i)}</span>
                <span class="opt-text">${opt}</span>
            </div>`;
    }).join('');

    content.innerHTML = `
        <div class="question-card">
            <div class="question-header"> 
                <span class="q-count">Câu hỏi ${index + 1}/30</span> 
            </div>
            <div class="question-text">${q.question}</div>
            <div class="options-list">${optionsHtml}</div>
            <div class="navigation-btns">
                <button class="btn-nav" onclick="prevQuestion()" 
                    ${index === 0 ? 'style="visibility:hidden;"' : ''}>‹ TRƯỚC</button>
                <button class="btn-nav" onclick="nextQuestion()">
                    ${index === selectedQuestions.length - 1 ? 'NỘP BÀI ›' : 'TIẾP ›'}
                </button>
            </div>
        </div>
    `;
    updateGridStatus(index);
}

// --- 5. HÀM XỬ LÝ CHỌN ĐÁP ÁN ---
function selectAnswer(element, qIndex, answer) {
    if (isSubmitted) return;

    studentAnswers[qIndex] = answer;

    // Cập nhật UI tùy chọn
    const options = element.parentElement.querySelectorAll('.option-item');
    options.forEach(opt => opt.classList.remove('selected'));
    element.classList.add('selected');

    // Đánh dấu đã trả lời trên Grid
    const gridItem = document.getElementById(`grid-item-${qIndex}`);
    if (gridItem) gridItem.classList.add('answered');
}

// --- 6. HÀM ĐIỀU HƯỚNG ---
function nextQuestion() {
    if (currentQuestionIndex < selectedQuestions.length - 1) {
        showQuestion(currentQuestionIndex + 1);
    } else {
        submitQuiz();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        showQuestion(currentQuestionIndex - 1);
    }
}

// --- 7. TẠO GRID ---
function generateNavigationGrid() {
    const grid = document.getElementById('nav-grid');
    grid.innerHTML = "";
    selectedQuestions.forEach((_, i) => {
        const item = document.createElement('div');
        item.classList.add('grid-item');
        item.id = `grid-item-${i}`;
        item.innerText = i + 1;
        item.onclick = () => showQuestion(i);
        grid.appendChild(item);
    });
}

// --- 8. CẬP NHẬT MÀU GRID ---
function updateGridStatus(currentIndex) {
    document.querySelectorAll('.grid-item').forEach((item, i) => {
        item.classList.remove('active');
        if (i === currentIndex) item.classList.add('active');
    });
}

// --- 9. ĐỒNG HỒ ---
function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        let min = Math.floor(timeLeft / 60);
        let sec = timeLeft % 60;
        const timerElement = document.getElementById('timer');
        if(timerElement) {
            timerElement.innerText = `${min}:${sec < 10 ? '0' : ''}${sec}`;
        }

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Hết giờ làm bài! Hệ thống tự động nộp bài.");
            submitQuiz(true);
        }
    }, 1000);
}

// --- 10. NỘP BÀI ---
async function submitQuiz(force = false) {
    if (isSubmitted) return;
    if (!force && !confirm("Thầy có chắc chắn muốn nộp bài?")) return;

    isSubmitted = true;
    clearInterval(timerInterval);

    let score = 0;
    selectedQuestions.forEach((q, i) => {
        if (studentAnswers[i] === q.answer) score++;
    });

    // Theo yêu cầu của thầy: 25/30 là ĐẠT
    const status = score >= 25 ? "ĐẠT" : "KHÔNG ĐẠT";
    alert(`Kết quả: ${score}/30 câu - Trạng thái: ${status}`);

    const payload = {
        name: document.getElementById('studentName').value,
        id: document.getElementById('studentID').value,
        score: score,
        status: status,
        details: JSON.stringify(studentAnswers)
    };

    try {
        // Gửi dữ liệu qua fetch
        await fetch(WEB_APP_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        
        alert("Dữ liệu đã được lưu vào Google Sheets!");
        location.reload();
    } catch (error) {
        console.error('Lỗi khi nộp bài:', error);
        alert("Không thể kết nối với máy chủ. Bài thi đã kết thúc.");
        location.reload();
    }
}
