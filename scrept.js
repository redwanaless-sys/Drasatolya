// كشف التمرير وإظهار الأقسام
function checkScroll() {
    const sections = document.querySelectorAll('section');
    const triggerBottom = window.innerHeight * 0.85;
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add('show');
        }
    });
}

// التمرير إلى الأقسام
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        // إظهار القسم فوراً عند النقر
        setTimeout(() => {
            section.classList.add('show');
        }, 300);
    }
}

// تهيئة الأحداث
function initEvents() {
    window.addEventListener('scroll', checkScroll);
    window.addEventListener('load', checkScroll);
    window.addEventListener('resize', checkScroll);
}

// إظهار القسم الرئيسي عند التحميل
function initSections() {
    const homeSection = document.getElementById('home');
    if (homeSection) {
        homeSection.classList.add('show');
    }
    
    // تحقق من الأقسام المرئية مباشرة بعد التحميل
    setTimeout(checkScroll, 100);
}

// تهيئة التطبيق
function initApp() {
    initEvents();
    initSections();
}

// بدء التطبيق عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', initApp);