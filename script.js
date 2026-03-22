// --- 1. CẤU HÌNH WEB APP URL ---
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwxGySySYeE0wsg-41K5lTQUYgL_beTxmCGagDfwQO1AUxLs_l8K4iGMgz-jKE9sxc/exec";

// --- 2. BIẾN TRẠNG THÁI ---
let selectedQuestions = []; 
let studentAnswers = {}; 
let currentQuestionIndex = 0; 
let timeLeft = 1200; 
let timerInterval;
let isSubmitted = false; 

// --- 3. HÀM BẮT ĐẦU THI ---
function startQuiz() {
    const nameInput = document.getElementById('studentName');
    const idInput = document.getElementById('studentID');

    if (!nameInput || !idInput || !nameInput.value.trim() || !idInput.value.trim()) {
        alert("Thầy vui lòng nhập đủ Họ tên và Khóa!");
        return;
    }

    if (typeof questionBank === 'undefined') {
        alert("Lỗi: Không tìm thấy dữ liệu câu hỏi (data.js)!");
        return;
    }

    isSubmitted = false;
    selectedQuestions = [...questionBank].sort(() => 0.5 - Math.random()).slice(0, 30);
    studentAnswers = {};
    timeLeft = 1200; 

    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('caee-header').style.display = 'flex';
    document.getElementById('quiz-screen').style.display = 'flex';
    
    const headerInfo = document.getElementById('header-student-info');
    if(headerInfo) headerInfo.innerText = `Học viên: ${nameInput.value} - Khóa: ${idInput.value}`;

    generateNavigationGrid();
    showQuestion(0);
    startTimer();
}

// --- 4. HÀM HIỂN THỊ CÂU HỎI ---
function showQuestion(index) {
    currentQuestionIndex = index;
    const q = selectedQuestions[index];
    const content = document.getElementById('quiz-content');
    if(!content) return;

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

function selectAnswer(element, qIndex, answer) {
    if (isSubmitted) return;
    studentAnswers[qIndex] = answer;
    const options = element.parentElement.querySelectorAll('.option-item');
    options.forEach(opt => opt.classList.remove('selected'));
    element.classList.add('selected');
    const gridItem = document.getElementById(`grid-item-${qIndex}`);
    if (gridItem) gridItem.classList.add('answered');
}

function nextQuestion() {
    if (currentQuestionIndex < selectedQuestions.length - 1) {
        showQuestion(currentQuestionIndex + 1);
    } else {
        submitQuiz();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) showQuestion(currentQuestionIndex - 1);
}

function generateNavigationGrid() {
    const grid = document.getElementById('nav-grid');
    if(!grid) return;
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

function updateGridStatus(currentIndex) {
    document.querySelectorAll('.grid-item').forEach((item, i) => {
        item.classList.remove('active');
        if (i === currentIndex) item.classList.add('active');
    });
}

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        let min = Math.floor(timeLeft / 60);
        let sec = timeLeft % 60;
        const timerElement = document.getElementById('timer');
        if(timerElement) timerElement.innerText = `${min}:${sec < 10 ? '0' : ''}${sec}`;
        if (timeLeft <= 0) { clearInterval(timerInterval); submitQuiz(true); }
    }, 1000);
}

async function submitQuiz(force = false) {
    if (isSubmitted) return;
    if (!force && !confirm("Thầy có chắc muốn nộp bài?")) return;
    isSubmitted = true;
    clearInterval(timerInterval);

    let score = 0;
    selectedQuestions.forEach((q, i) => {
        if (studentAnswers[i] === q.answer) score++;
    });

    const status = score >= 25 ? "ĐẠT" : "KHÔNG ĐẠT";
    alert(`Kết quả: ${score}/30 câu - Trạng thái: ${status}`);
    
    // Gửi dữ liệu về Google Sheets
    const payload = {
        name: document.getElementById('studentName').value,
        id: document.getElementById('studentID').value,
        score: score,
        status: status
    };

    try {
        await fetch(WEB_APP_URL, {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(payload)
        });
    } catch (e) {}
    
    location.reload();
}
