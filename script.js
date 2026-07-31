// =============================
// الصفحات
// =============================

let currentPage = 1;

function nextPage() {

    document.getElementById("page" + currentPage).classList.remove("active");

    currentPage++;

    if (currentPage <= 8) {

        document.getElementById("page" + currentPage).classList.add("active");

    }

}

// =============================
// الكتابة حرف حرف
// =============================

const text =
"كل سنة وأنت بخير يا بودي ❤️ أتمنى تكون السنة دي مليانة نجاح وفرحة وضحكة حلوة زي ضحكتك.";

let i = 0;

function typing() {

    if (i < text.length) {

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typing, 55);

    }

}

typing();

// =============================
// عداد الأيام
// =============================

const startDate = new Date("2026-07-09");

const today = new Date();

const diff = today - startDate;

const days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));

document.getElementById("days").innerHTML = days;

// =============================
// Quiz
// =============================

const questions = [

{
question:"مين أكتر واحدة بتحبك؟ ❤️",
answers:["أسماء ❤️","محدش","أنا"]
},

{
question:"أول يوم اتعرفنا كان؟",
answers:["9/7/2026 ❤️","1/1/2026","10/10/2025"]
},

{
question:"هتفضل تحب أسماء؟",
answers:["أكيد ❤️","آه","طبعًا"]
}

];

const quiz = document.getElementById("quiz");

questions.forEach((q,index)=>{

const div = document.createElement("div");

div.className = "question";

div.innerHTML = `

<h3>${q.question}</h3>

<button class="answer">${q.answers[0]}</button>

<button class="answer">${q.answers[1]}</button>

<button class="answer">${q.answers[2]}</button>

`;

quiz.appendChild(div);

});

function showResult(){

alert("🥹❤️ النتيجة: أنت أنجح حبيب في الدنيا.");

nextPage();

}

// =============================
// Cake
// =============================

const cake = document.getElementById("cake");

for(let i=0;i<20;i++){

const candle=document.createElement("div");

candle.className="candle";

candle.style.left=(12+i*15)+"px";

cake.appendChild(candle);

}

// =============================
// Fireworks
// =============================

document.getElementById("finish").onclick=function(){

confetti({

particleCount:250,

spread:180,

origin:{y:0.6}

});

setTimeout(()=>{

confetti({

particleCount:200,

spread:120,

origin:{x:0}

});

},500);

setTimeout(()=>{

confetti({

particleCount:200,

spread:120,

origin:{x:1}

});

},900);

alert("🎉🎂 Happy Birthday Boudy ❤️\n\n كل سنه وانت طيب ي حبيبي والسنه الجايه اشوفك مبسوط ومحقق اللي نفسك فيه ي روحي وتفضل دائما معاك ل سنينن العمر كلها ي روحي.");

}

// =============================
// تكبير الصور
// =============================

document.querySelectorAll(".gallery img").forEach(img=>{

img.onclick=function(){

if(this.style.transform=="scale(1.3)"){

this.style.transform="scale(1)";

}else{

this.style.transform="scale(1.3)";

}

}

});
document.querySelectorAll(".question").forEach(question => {

    const answers = question.querySelectorAll(".answer");

    answers.forEach(answer => {

        answer.addEventListener("click", function() {

            // يشيل اللون من كل اختيارات السؤال
            answers.forEach(btn => btn.classList.remove("selected"));

            // يحط اللون على المختار
            this.classList.add("selected");

        });

    });

});