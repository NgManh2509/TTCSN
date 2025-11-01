const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

const signUpForm = document.querySelector('.sign-up-container form');

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault(); 

    const inputs = signUpForm.querySelectorAll('input');
    const fullName = inputs[0].value;
    const email = inputs[1].value;
    const password = inputs[2].value;

    const userData = {
        fullName: fullName,
        email: email,
        password: password 
    };

    console.log('Dữ liệu đăng ký chuẩn bị gửi:', userData);
    
    try {
        const response = await fetch('#', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (response.ok) {
            const result = await response.json();
            alert('Đăng ký thành công! Vui lòng đăng nhập.');
            console.log('Phản hồi từ server:', result);

            container.classList.remove("right-panel-active"); 

        } else {
            const error = await response.json();
            alert(`Đăng ký thất bại: ${error.message || 'Lỗi không xác định'}`);
            console.error('Lỗi phản hồi từ server:', error);
        }

    } catch (error) {
        alert('Không thể kết nối đến máy chủ. Vui lòng thử lại.');
        console.error('Lỗi khi gọi API Đăng ký:', error);
    }
});

const signInForm = document.querySelector('.sign-in-container form');

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault(); 

   
    const inputs = signInForm.querySelectorAll('input');
    const email = inputs[0].value;
    const password = inputs[1].value;

    const loginData = {
        email: email,
        password: password
    };

    console.log('Dữ liệu đăng nhập chuẩn bị gửi:', loginData);
    
    try {
        const response = await fetch('#', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        });

        if (response.ok) {
            const result = await response.json();
            alert('Đăng nhập thành công! Chào mừng đến với HAKONA.');
            console.log('Token/Thông tin người dùng:', result);

           
            window.location.href = '/home.html'; 

        } else {
        
            const error = await response.json();
            alert(`Đăng nhập thất bại: ${error.message || 'Email hoặc mật khẩu không đúng.'}`);
        }

    } catch (error) {
        alert('Không thể kết nối đến máy chủ. Vui lòng thử lại.');
        console.error('Lỗi khi gọi API Đăng nhập:', error);
    }
});